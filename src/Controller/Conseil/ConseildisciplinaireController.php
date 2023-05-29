<?php

namespace App\Controller\Conseil;

use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\AcEtablissement;
use App\Entity\Agression;
use App\Entity\InsSanctionner;
use App\Entity\Sanction;
use App\Entity\SousAgression;
use App\Entity\TInscription;
use DateTime;
use DateTimeZone;
use Doctrine\Persistence\ManagerRegistry;
use IntlDateFormatter;
use Mpdf\Mpdf;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

#[Route('/conseil/disciplinaire')]
class ConseildisciplinaireController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        date_default_timezone_set('Africa/Casablanca');
    }
    #[Route('/', name: 'disciplinaire')]
    public function index(Request $request): Response
    {
        //check if user has access to this page
       $operations = ApiController::check($this->getUser(), 'disciplinaire', $this->em, $request);
       if(!$operations) {
           return $this->render("errors/403.html.twig");

       }
       
       return $this->render('conseil/conseil_disciplinaire.html.twig', [
        'etablissements' =>  $this->em->getRepository(AcEtablissement::class)->findBy(['active'=>1]),
        'agressions' =>  $this->em->getRepository(Agression::class)->findBy(['active'=>1]),
        'operations' => $operations
       ]);
    }
    
    #[Route('/list', name: 'disciplinaire_inscription_list')]
    public function disciplinaireInscriptionList(Request $request): Response
    {
        $params = $request->query;
        // dd($params);
        $where = $totalRows = $sqlRequest = "";
        $filtre = "where 1 = 1 and san.active=1 ";   
        // dd($params->all('columns')[0]);
        
        if (!empty($params->all('columns')[0]['search']['value'])) {
            // dd("in");
            $filtre .= " and etab.id = '" . $params->all('columns')[0]['search']['value'] . "' ";
        } 
        if (!empty($params->all('columns')[1]['search']['value'])) {
                $filtre .= " and form.id = '" . $params->all('columns')[1]['search']['value'] . "' ";
        }    
        if (!empty($params->all('columns')[2]['search']['value'])) {
            $filtre .= " and prom.id = '" . $params->all('columns')[2]['search']['value'] . "' ";
        }    
        if (!empty($params->all('columns')[3]['search']['value'])) {
            $filtre .= " and an.id = '" . $params->all('columns')[3]['search']['value'] . "' ";
        }    
        $columns = array(
            array( 'db' => 'san.id','dt' => 0),
            array( 'db' => 'upper(san.code)','dt' => 1),
            array( 'db' => 'ins.code','dt' => 2),
            array( 'db' => 'etu.nom','dt' => 3),
            array( 'db' => 'etu.prenom','dt' => 4),
            array( 'db' => 'etu.cin','dt' => 5),
            array( 'db' => 'etab.abreviation','dt' => 6),
            array( 'db' => 'UPPER(form.abreviation)','dt' => 7),
            array( 'db' => 'UPPER(prom.designation)','dt' => 8),
            array( 'db' => 'LOWER(an.designation)','dt' => 9),
            array( 'db' => 'st.designation','dt' => 10),
            array( 'db' => 'san.valide','dt' => 11),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM tinscription ins
        inner join tadmission ad on ad.id = ins.admission_id
        inner join tpreinscription pre on pre.id = ad.preinscription_id
        inner join tetudiant etu on etu.id = pre.etudiant_id
        inner join ac_annee an on an.id = ins.annee_id
        inner join ac_formation form on form.id = an.formation_id              
        inner join ac_etablissement etab on etab.id = form.etablissement_id 
        INNER JOIN pstatut st ON st.id = ins.statut_id
        inner join ac_promotion prom on prom.id = ins.promotion_id
        inner join ins_sanctionner san on san.inscription_id = ins.id
        $filtre ";
        // dd($sql);
        $totalRows .= $sql;
        $sqlRequest .= $sql;
        $stmt = $this->em->getConnection()->prepare($sql);
        $newstmt = $stmt->executeQuery();
        $totalRecords = count($newstmt->fetchAll());
        // dd($sql);
        $my_columns = DatatablesController::Pluck($columns, 'db');
            
        // search 
        $pre = [
            "db" => "pre.code",
            "dt" => 11
        ];
        array_push($columns,$pre);
        $where = DatatablesController::Search($request, $columns);
        if (isset($where) && $where != '') {
            $sqlRequest .= $where;
        }
        $changed_column = $params->all('order')[0]['column'] > 0 ? $params->all('order')[0]['column'] - 1 : 0;
        $sqlRequest .= " ORDER BY " .DatatablesController::Pluck($columns, 'db')[$changed_column] . "   " . $params->all('order')[0]['dir'] . "  LIMIT " . $params->get('start') . " ," . $params->get('length') . " ";
        // $sqlRequest .= DatatablesController::Order($request, $columns);
        
        $stmt = $this->em->getConnection()->prepare($sqlRequest);
        $resultSet = $stmt->executeQuery();
        $result = $resultSet->fetchAll();
        
        
        $data = array();
        // dd($result);
        $i = 1;
        foreach ($result as $key => $row) {
            $nestedData = array();
            $cd = $row['id'];
            // $nestedData[] = "<input type ='checkbox' class='check_inscription' id ='$cd' >";
            $nestedData[] = $cd;
            // dd($row);
            
            foreach (array_values($row) as $key => $value) {
                if($key > 0) {
                    if ($key == 11) {
                        $nestedData[] = $value == 0 ? "invalide" : "valide";
                    }else {
                        $nestedData[] = $value;
                    }
                }
            }
            $nestedData["DT_RowId"] = $cd;
            $nestedData["DT_RowClass"] = "";
            $data[] = $nestedData;
            $i++;
        }
        // dd($data);
        $json_data = array(
            "draw" => intval($params->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data   
        );
        // die;
        return new Response(json_encode($json_data));
    }
    #[Route('/ajouter_convocation', name: 'ajouter_convocation')]
    public function ajouter_convocation(Request $request): Response
    {
        if ($request->get('etudiant') == "" || $request->get('annee2') == "" || $request->get('date_incident') == "" || $request->get('date_reunion') == "") {
            return new JsonResponse("Merci de remplir tout les champs!",500);
        }
        if ($request->get('date_incident') > date('Y-m-d')) {
            return new JsonResponse("Merci de choisir une date d'incident inferieur ou egale à Aujourd'hui !",500);
        }
        if (new DateTime($request->get('date_reunion')) < new DateTime('now')) {
            return new JsonResponse("Merci de choisir une date de reunion superieur ou egale à Aujourd'hui !",500);
        }
        $inscription = $this->em->getRepository(TInscription::class)->find($request->get('annee2'));
        if (!$inscription) {
            return new JsonResponse("Inscription Introuvable !",500);
        }
        $insSanction = new InsSanctionner();
        $insSanction->setInscription($inscription);
        $insSanction->setDateIncident(new DateTime($request->get('date_incident')));
        $insSanction->setDateReunion(new DateTime($request->get('date_reunion')));
        $insSanction->setActive(1);
        $insSanction->setValide(0);
        $insSanction->setUserCreated($this->getUser());
        $insSanction->setCreated(new DateTime('now'));
        $this->em->persist($insSanction);
        $this->em->flush();
        $insSanction->setCode('UIA_'.$inscription->getAnnee()->getFormation()->getEtablissement()->getAbreviation().'_'.str_pad($insSanction->getId(), 4, '0', STR_PAD_LEFT).'/'.date('Y'));
        $this->em->flush();
        return new JsonResponse("Convocation bien cree",200);
    }
    #[Route('/convocation_validation/{insSanction}', name: 'convocation_validation')]
    public function convocation_validation(InsSanctionner $insSanction): Response
    {
        if (!$insSanction || $insSanction->getActive() == 0) {
            return new JsonResponse("Convocation Introuvable!",500);
        }
        if ($insSanction->getValide() == 1) {
            return new JsonResponse("Convocation déja valide!",500);
        }
        $insSanction->setValide(1);
        $this->em->flush();
        return new JsonResponse("Convocation bien valide",200);
    }

    #[Route('/annuler_convocation', name: 'annuler_convocation')]
    public function annuler_convocation(Request $request): Response
    {
        // dd($request);
        $insSanction = $this->em->getRepository(InsSanctionner::class)->find($request->get('id_sanction'));
        if (!$insSanction || $insSanction->getActive() == 0) {
            return new JsonResponse("Convocation Introuvable ou déja annuler!",500);
        }
        $insSanction->setActive(0);
        $this->em->flush();
        return new JsonResponse("Convocation bien Annuler",200);
    }
    
    #[Route('/ajouter_notification/{insSanction}', name: 'ajouter_notification')]
    public function ajouter_notification(InsSanctionner $insSanction,Request $request): Response
    {
        if ($request->get('incident') == "" || ( !$request->get('sanction') && $request->get('newSanctions') == "" )) {
            return new JsonResponse("Merci de remplir tout les champs!",500);
        }
        $insSanction->setAgression($this->em->getRepository(SousAgression::class)->find($request->get('incident')));
        if ($insSanction->getValide() == 0) {
            return new JsonResponse("Merci de valider la convocation!",500);
        }
        if ($request->get('sanction')) {
            $insSanctionSanctions = $insSanction->getSanction();
            $insSanctionSanctions->clear();
            foreach ($request->get('sanction') as $sanction) {
                $insSanction->addSanction($this->em->getRepository(Sanction::class)->find($sanction));
            }
        }
        $newSanctions = json_decode($request->get('newSanctions'));
        if (json_decode($request->get('newSanctions')) != null) {
            $insSanction->setAutreSanction([]);
            $insSanction->setAutreSanction(json_decode($request->get('newSanctions')));
        }
        $insSanction->setUserUpdated($this->getUser());
        $insSanction->setUpdated(new DateTime('now'));
        $this->em->flush();
        return new JsonResponse("Convocation bien cree",200);
    }
    #[Route('/etatConvocation/{insSanction}', name: 'etatConvocation')]
    public function etatConvocation(InsSanctionner $insSanction)
    {
        $dateReunion = $insSanction->getDateReunion();

        // Créez une instance de IntlDateFormatter pour formater la date en français
        $formatter = new IntlDateFormatter(
            'fr_FR',
            IntlDateFormatter::FULL,
            IntlDateFormatter::FULL,
            null,
            null,
            'EEEE d MMMM yyyy \'à\' HH\'h\'mm'
        );
        
        $dateReunion = $formatter->format($dateReunion);
        $html = $this->render("conseil/pdf/convocation.html.twig", [
            'insSanction' => $insSanction,
            'dateReunion' => $dateReunion
        ])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8', 
            'margin_top' => 5,
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        $mpdf->SetHTMLFooter(
            $this->render("etudiant/recherche_avance/pdf/attestations/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Convocation');
        $mpdf->Output("Convocation.pdf", "I");
    }
    #[Route('/verification_notification/{insSanction}', name: 'verification_notification')]
    public function verification_notification(InsSanctionner $insSanction)
    {
        if ($insSanction->getAgression() == null || !$insSanction) {
            return new JsonResponse("Merci d'ajouter les sanctions d'abord !",500);
        }
        return new JsonResponse("C'est bon",200);
    }
    #[Route('/etatNotification/{insSanction}', name: 'etatNotification')]
    public function etatNotification(InsSanctionner $insSanction)
    {
        $dateReunion = $insSanction->getDateReunion();

        // Créez une instance de IntlDateFormatter pour formater la date en français
        $formatter = new IntlDateFormatter(
            'fr_FR',
            IntlDateFormatter::FULL,
            IntlDateFormatter::FULL,
            null,
            null,
            'EEEE d MMMM yyyy \'à\' HH\'h\'mm'
        );
        
        $dateReunion = $formatter->format($dateReunion);
        $html = $this->render("conseil/pdf/notification.html.twig", [
            'insSanction' => $insSanction,
            'dateReunion' => $dateReunion
        ])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8', 
            'margin_top' => 5,
            'margin_left' => 5,
            'margin_right' => 5,
        ]);
        $mpdf->SetHTMLFooter(
            $this->render("conseil/pdf/footer.html.twig")->getContent()
        );
        $mpdf->WriteHTML($html);
        $mpdf->SetTitle('Notification');
        $mpdf->Output("Notification.pdf", "I");
    }
    #[Route('/extraction_historique/{insSanction}', name: 'extraction_historique')]
    public function extraction_historique(InsSanctionner $insSanction)
    {
        // les champs excel d'historique des notifications et des convocations d'un etudiant specific. 
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'ORD');
        $sheet->setCellValue('B1', 'CODE CONDIDAT');
        $sheet->setCellValue('C1', 'CODE PREINSCRIPTION');
        $sheet->setCellValue('D1', 'CODE ADMISSION');
        $sheet->setCellValue('E1', 'ID INSCRIPTION');
        $sheet->setCellValue('F1', 'CODE INSCRIPTION');
        $sheet->setCellValue('G1', 'ANNEE');
        $sheet->setCellValue('H1', 'NOM');
        $sheet->setCellValue('I1', 'PRENOM');
        $sheet->setCellValue('J1', 'SEXE');
        $sheet->setCellValue('K1', 'DATE NAISSANCE');
        $sheet->setCellValue('L1', 'CIN');
        $sheet->setCellValue('M1', 'PASSEPORT');
        $sheet->setCellValue('N1', 'NATIONALITE');
        $sheet->setCellValue('O1', 'TEL CANDIDAT');
        $sheet->setCellValue('P1', 'MAIL CANDIDAT');
        $sheet->setCellValue('Q1', 'ETABLISSEMENT');
        $sheet->setCellValue('R1', 'CODE_ETAB');
        $sheet->setCellValue('S1', 'FORMATION');
        $sheet->setCellValue('T1', 'CODE_FORMATION');
        $sheet->setCellValue('U1', "PROMOTION");
        $sheet->setCellValue('V1', "CODE_PROMO");
        $sheet->setCellValue('W1', 'TYPE DE BAC');
        $sheet->setCellValue('X1', 'ANNEE BAC');
        $sheet->setCellValue('Y1', 'FILIERE');
        $sheet->setCellValue('Z1', 'MOYENNE GENERALE');
        $sheet->setCellValue('AA1', 'MOYENNE NATIONALE');
        $sheet->setCellValue('AB1', 'MOYENNE REGIONALE');
        $sheet->setCellValue('AC1', 'D-INSCRIPTION');
        $sheet->setCellValue('AD1', 'STATUT');
        $i=2;
        $j=1;
        // Avoir une list d'historique des notifications et des convocations d'un etudiant specific. 
        // $inscriptions = $this->em->getRepository(TInscription::class)->getActiveInscriptionByCurrentAnnee($current_year);
        $InsSanctionner = $this->em->getRepository(InsSanctionner::class)->getHistoriqueDesActivesConvocations($insSanction->getInscription());
        dd($InsSanctionner);
        // foreach ($inscriptions as $inscription) {
        //     $sheet->setCellValue('A'.$i, $j);
        //     $sheet->setCellValue('B'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getCode());
        //     $sheet->setCellValue('C'.$i, $inscription->getAdmission()->getPreinscription()->getCode());
        //     $sheet->setCellValue('D'.$i, $inscription->getAdmission()->getCode());
        //     $sheet->setCellValue('E'.$i, $inscription->getId());
        //     $sheet->setCellValue('F'.$i, $inscription->getCode());
        //     if ($inscription->getAdmission()->getPreinscription()->getNature() != null) {
        //         $sheet->setCellValue('G'.$i, $inscription->getAdmission()->getPreinscription()->getNature()->getDesignation());
        //     }
        //     $sheet->setCellValue('H'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getNom());
        //     $sheet->setCellValue('I'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getPrenom());
        //     $sheet->setCellValue('J'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getSexe());
        //     $sheet->setCellValue('K'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getDateNaissance());
        //     $sheet->setCellValue('L'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getCin());
        //     $sheet->setCellValue('M'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getPasseport());
        //     $sheet->setCellValue('N'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getNationalite());
        //     $sheet->setCellValue('O'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getTel1());
        //     $sheet->setCellValue('P'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getMail1());
        //     $sheet->setCellValue('Q'.$i, $inscription->getAnnee()->getFormation()->getEtablissement()->getDesignation());
            
        //     $sheet->setCellValue('R'.$i, $inscription->getAnnee()->getFormation()->getEtablissement()->getCode());
        //     $sheet->setCellValue('S'.$i, $inscription->getAnnee()->getFormation()->getDesignation());
        //     $sheet->setCellValue('T'.$i, $inscription->getAnnee()->getFormation()->getCode());
        //     $sheet->setCellValue('U'.$i, $inscription->getPromotion()->getDesignation());
        //     $sheet->setCellValue('V'.$i, $inscription->getPromotion()->getCode());
        //     $sheet->setCellValue('W'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getTypeBac() == Null ? "" : $inscription->getAdmission()->getPreinscription()->getEtudiant()->getTypeBac()->getDesignation());
        //     $sheet->setCellValue('X'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getAnneeBac());
        //     $filiere = $inscription->getAdmission()->getPreinscription()->getEtudiant()->getFiliere();
        //     $sheet->setCellValue('Y'.$i, $filiere != null ? $filiere->getDesignation() : "");
        //     $sheet->setCellValue('Z'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getMoyenneBac());
        //     $sheet->setCellValue('AA'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getMoyenNational());
        //     $sheet->setCellValue('AB'.$i, $inscription->getAdmission()->getPreinscription()->getEtudiant()->getMoyenRegional());
        //     $sheet->setCellValue('AC'.$i, $inscription->getCreated());
        //     $sheet->setCellValue('AD'.$i, $inscription->getStatut()->GetDesignation());
        //     $i++;
        //     $j++;
        // }
        $writer = new Xlsx($spreadsheet);
        $current_year = date('m') > 7 ? date('Y').'-'.date('Y')+1 : date('Y') - 1 .'-' .date('Y');
        $fileName = "Extraction Inscription $current_year.xlsx";
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
}
