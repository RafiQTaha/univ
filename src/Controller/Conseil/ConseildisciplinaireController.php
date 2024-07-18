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

    // MAIN PAGE
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
    
    // LA LIST DES CONVOCATIONS.
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
    
    // LA CREATION D'UNE CONVOCATION.
    #[Route('/ajouter_convocation', name: 'ajouter_convocation')]
    public function ajouter_convocation(Request $request): Response
    {
        if ($request->get('etudiant') == "" || $request->get('annee2') == "" || $request->get('date_incident') == "" || $request->get('date_reunion') == "") {
            return new JsonResponse("Merci de remplir tout les champs!",500);
        }
        if ($request->get('date_incident') > date('Y-m-d')) {
            return new JsonResponse("Merci de choisir une date d'incident inferieur ou egale à Aujourd'hui !",500);
        }
        // JE NE CHECK PAS LA DATE DE REUNION POUR QU'ILS PUISSENT ENTRER LES ENCIENNES CONVOCATIONS ET CES DATES DE REUNIONS.
        // if (new DateTime($request->get('date_reunion')) < new DateTime('now')) {
        //     return new JsonResponse("Merci de choisir une date de reunion superieur ou egale à Aujourd'hui !",500);
        // }
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


    #[Route('/getconvocationInfos/{insSanction}', name: 'getconvocationInfos')]
    public function getconvocationInfos(InsSanctionner $insSanction): Response
    {
        $html = $this->render('conseil/pages/update_convocation.html.twig', [
            'convocation' => $insSanction,
        ])->getContent();
        return new JsonResponse($html, 200);
    }
    // LA MODIFICATION DU CONVOCATION EN CAS D'ERREUR OU CHANGEMENT DE LA DATE.
    #[Route('/modifier_convocation/{id}', name: 'modifier_convocation')]
    public function modifier_convocation(Request $request,InsSanctionner $insSanction): Response
    { 
        if ($insSanction->getActive() == 0 || $insSanction->getValide() == 1 ) {
            return new JsonResponse('Convocation est déja valide ou bien Annuler!', 500);
        }
        if ($request->get('date_incident') == "" || $request->get('date_reunion') == "") {
            return new JsonResponse("Merci de remplir tout les champs!",500);
        }
        if ($request->get('date_incident') > date('Y-m-d')) {
            return new JsonResponse("Merci de choisir une date d'incident inferieur ou egale à Aujourd'hui !",500);
        }
        $insSanction->setDateIncident(new DateTime($request->get('date_incident')));
        $insSanction->setDateReunion(new DateTime($request->get('date_reunion')));
        $insSanction->setUserUpdated($this->getUser());
        $insSanction->setUpdated(new DateTime('now'));
        $this->em->flush();
        return new JsonResponse('Convocation bien modifier', 200);        
    }
    
    // L'AJOUT D'UNE NOTIF. POUR UNE CONVOCATION.
    // #[Route('/ajouter_notification/{insSanction}', name: 'ajouter_notification')]
    // public function ajouter_notification(InsSanctionner $insSanction,Request $request): Response
    // {
    //     if (($request->get('incident') == "" && $request->get('autre_incident') == "") || ( !$request->get('sanction') && $request->get('newSanctions') == "" ) || $request->get('date_decision') == "") {
    //         return new JsonResponse("Merci de remplir tout les champs!",500);
    //     }
    //     if ($request->get('autre_incident') != "") {
    //         $insSanction->setAutreAgression($request->get('autre_incident'));
    //         $insSanction->setAgression(null);
    //     }else{
    //         $insSanction->setAutreAgression(null);
    //         $insSanction->setAgression($this->em->getRepository(SousAgression::class)->find($request->get('incident')));
    //     }
    //     if ($request->get('sanction')) {
    //         $insSanctionSanctions = $insSanction->getSanction();
    //         $insSanctionSanctions->clear();
    //         foreach ($request->get('sanction') as $sanction) {
    //             $insSanction->addSanction($this->em->getRepository(Sanction::class)->find($sanction));
    //         }
    //     }
    //     $newSanctions = json_decode($request->get('newSanctions'));
    //     if ($newSanctions != null) {
    //         $insSanction->setAutreSanction([]);
    //         $insSanction->setAutreSanction($newSanctions);
    //     }
    //     $insSanction->setDateDecision(new DateTime($request->get('date_decision')));
    //     $insSanction->setUserUpdated($this->getUser());
    //     $insSanction->setUpdated(new DateTime('now'));
    //     $insSanction->setSansSuite(0);
    //     $this->em->flush();
    //     return new JsonResponse("Notification bien ajouter",200);
    // }

    
    #[Route('/getnotificationInfos/{insSanction}', name: 'getnotificationInfos')]
    public function getnotificationInfos(InsSanctionner $insSanction): Response
    {
        // dd($insSanction->getSanction()[0]);
        $html = $this->render('conseil/pages/update_notification.html.twig', [
            'notification' => $insSanction,
            'agressions' =>  $this->em->getRepository(Agression::class)->findBy(['active'=>1]),
        ])->getContent();
        return new JsonResponse($html, 200);
    }
    
    // LA MODIFICATION DU NOTIF. EN CAS D'ERREUR OU CHANGEMENT DU (SANCTION,AGRESSION)
    #[Route('/modifier_notification/{id}', name: 'modifier_notification')]
    public function modifier_notification(Request $request,InsSanctionner $insSanction): Response
    { 
        if ($insSanction->getActive() == 0 || $insSanction->getValide() == 1 ) {
            return new JsonResponse('Convocation est déja valide ou bien Annuler!', 500);
        }
        if (($request->get('incident') == "" && $request->get('autre_incident') == "") || ( !$request->get('sanction') && !json_decode($request->get('newSanctions')) ) || $request->get('date_decision') == "") {
            return new JsonResponse("Merci de remplir tout les champs!",500);
        }
        if ($request->get('autre_incident') != "") {
            $insSanction->setAutreAgression($request->get('autre_incident'));
            $insSanction->setAgression(null);
        }else{
            $insSanction->setAutreAgression(null);
            $insSanction->setAgression($this->em->getRepository(SousAgression::class)->find($request->get('incident')));
        }
        
        if ($request->get('sanction')) {
            $insSanctionSanctions = $insSanction->getSanction();
            $insSanctionSanctions->clear();
            foreach ($request->get('sanction') as $sanction) {
                $insSanction->addSanction($this->em->getRepository(Sanction::class)->find($sanction));
            }
        }else {
            $insSanction->getSanction()->clear();
        }
        $newSanctions = json_decode($request->get('newSanctions'));
        // dd($newSanctions);
        // if ($newSanctions != null) {
        //     $insSanction->setAutreSanction([]);
        $insSanction->setAutreSanction($newSanctions);
        // }
        $insSanction->setDateDecision(new DateTime($request->get('date_decision')));
        $insSanction->setUserUpdated($this->getUser());
        $insSanction->setUpdated(new DateTime('now'));
        $insSanction->setSansSuite(0);
        $this->em->flush();
        return new JsonResponse('Notification bien modifier', 200);        
    }

    
    // LA VERIFICATION EST NECESSERE POUR SAVOIR SI LA CONVOCATION A UNE AGRESSION ET UNE SANCTION OU BIEN ELLE EST SANS SUITE POUR NE PAS LA TELECHARGER
    #[Route('/verification_notification/{insSanction}', name: 'verification_notification')]
    public function verification_notification(InsSanctionner $insSanction)
    {
        if ($insSanction->getSansSuite() == 1) {
            return new JsonResponse("La convocation est déja sans suite !!",500);
        }
        if ( ($insSanction->getAgression() == null && $insSanction->getAutreAgression() == null) || !$insSanction) {
            return new JsonResponse("Merci d'ajouter les sanctions d'abord !",500);
        }
        return new JsonResponse("C'est bon",200);
    }
    
    // RENDRE LA CONVOCATION SANS SUITE
    #[Route('/convocation_sans_suite/{insSanction}', name: 'convocation_sans_suite')]
    public function convocation_sans_suite(InsSanctionner $insSanction): Response
    {
        if (!$insSanction || $insSanction->getActive() == 0) {
            return new JsonResponse("Convocation Introuvable!",500);
        }
        if ($insSanction->getSansSuite() == 1) {
            return new JsonResponse("Déja sans Suite!",500);
        }
        $insSanction->setSansSuite(1);
        $this->em->flush();
        return new JsonResponse("Convocation est sans suite",200);
    }

    // VALIDER LA CONVOCATION APRES LE REMPLISSAGE DU NOTIFICATION
    #[Route('/convocation_validation/{insSanction}', name: 'convocation_validation')]
    public function convocation_validation(InsSanctionner $insSanction): Response
    {
        if (!$insSanction || $insSanction->getActive() == 0) {
            return new JsonResponse("Convocation Introuvable!",500);
        }
        if ($insSanction->getValide() == 1) {
            return new JsonResponse("Convocation déja valide!",500);
        }
        if ($insSanction->getSansSuite() == 1) {
            return new JsonResponse("La convocation est sans suite !!",500);
        }
        if ( ($insSanction->getAgression() == null && $insSanction->getAutreAgression() == null) || ($insSanction->getSanction() == null && $insSanction->getAutreSanction() == null) ) {
            return new JsonResponse("Merci d'ajouter la notification d'abord !",500);
        }
        $insSanction->setValide(1);
        $this->em->flush();
        return new JsonResponse("Convocation bien valide",200);
    }
    
    // LA DEVALIDATION DU CONVOCATION
    #[Route('/convocation_devalidation', name: 'convocation_devalidation')]
    public function convocation_devalidation(Request $request): Response
    {
        // dd($request);
        $insSanction = $this->em->getRepository(InsSanctionner::class)->find($request->get('id_sanction'));
        if (!$insSanction || $insSanction->getActive() == 0) {
            return new JsonResponse("Convocation Introuvable ou déja annuler!",500);
        }
        $insSanction->setValide(0);
        $this->em->flush();
        return new JsonResponse("Convocation bien devalide",200);
    }

    // L'ANNULATION D'UNE CONVOCATION
    #[Route('/annuler_convocation', name: 'annuler_convocation')]
    public function annuler_convocation(Request $request): Response
    {
        $insSanction = $this->em->getRepository(InsSanctionner::class)->find($request->get('id_sanction'));
        if (!$insSanction || $insSanction->getActive() == 0) {
            return new JsonResponse("Convocation Introuvable ou déja annuler!",500);
        }
        $insSanction->setActive(0);
        $this->em->flush();
        return new JsonResponse("Convocation bien Annuler",200);
    }

    // L'ETAT D'INPRESSION DU CONVOCATION
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
    
    // L'ETAT D'INPRESSION DU NOTIFICATION
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

    // L'HISTORIQUE EN EXTRACTION: TOUT LES CONVOCATION AVEC LEUR NOTIFICATION SUR CETTE ETAT D'EXCEL 
    #[Route('/extraction_historique', name: 'extraction_historique')]
    public function extraction_historique()
    {
        // les champs excel d'historique des notifications et des convocations des etudiants. 
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setCellValue('A1', 'ORD');
        $sheet->setCellValue('B1', 'CODE ADMISSION');
        $sheet->setCellValue('C1', 'NOM');
        $sheet->setCellValue('D1', 'PRENOM');
        $sheet->setCellValue('E1', 'ETABLISSEMENT');
        $sheet->setCellValue('F1', 'FORMATION');
        $sheet->setCellValue('G1', 'PROMOTION');
        $sheet->setCellValue('H1', 'DATE D\'INCIDENT');
        $sheet->setCellValue('I1', 'MOTIF DE L\'INCIDENT');
        $sheet->setCellValue('J1', 'DATE DU CONSEIL');
        $sheet->setCellValue('K1', 'DÉCISION DU CONSEIL');
        $sheet->setCellValue('L1', 'SANS SUITE');
        $sheet->setCellValue('M1', 'ANNEE UNIVERSITAIRE');
        $i=2;
        $j=1;
        // Avoir une list d'historique des notifications et des convocations des etudiants. 
        $InsSanctionners = $this->em->getRepository(InsSanctionner::class)->getHistoriqueDesActivesConvocations();
        foreach ($InsSanctionners as $InsSanctionner) {
            if (count($InsSanctionner->getSanction()) > 0 || count($InsSanctionner->getAutreSanction()) > 0) {
                foreach ($InsSanctionner->getSanction() as $sanction) {
                    $sheet->setCellValue('A'.$i, $j);
                    $sheet->setCellValue('B'.$i, $InsSanctionner->getInscription()->getAdmission()->getCode());
                    $sheet->setCellValue('C'.$i, $InsSanctionner->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getNom());
                    $sheet->setCellValue('D'.$i, $InsSanctionner->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getPrenom());
                    $sheet->setCellValue('E'.$i, $InsSanctionner->getInscription()->getAnnee()->getFormation()->getDesignation());
                    $sheet->setCellValue('F'.$i, $InsSanctionner->getInscription()->getAnnee()->getFormation()->getDesignation());
                    $sheet->setCellValue('G'.$i, $InsSanctionner->getInscription()->getPromotion()->getDesignation());
                    $sheet->setCellValue('H'.$i, $InsSanctionner->getDateIncident()->format('d/m/Y'));
                    if ($InsSanctionner->getAgression() == null) {
                        $sheet->setCellValue('I'.$i, $InsSanctionner->getAutreAgression());
                    }else{
                        $sheet->setCellValue('I'.$i, $InsSanctionner->getAgression()->getDesignation());
                    }
                    $sheet->setCellValue('J'.$i, $InsSanctionner->getDateReunion()->format('d/m/Y h:i:s'));
                    $sheet->setCellValue('K'.$i, $sanction->getDesignation());
                    $sheet->setCellValue('L'.$i, $InsSanctionner->getSansSuite() == 0 ? '' : 'SANS SUITE');
                    $sheet->setCellValue('M'.$i, $InsSanctionner->getInscription()->getAnnee()->getDesignation());
                    $i++;
                    $j++;
                }
                foreach ($InsSanctionner->getAutreSanction() as $sanction) {
                    $sheet->setCellValue('A'.$i, $j);
                    $sheet->setCellValue('B'.$i, $InsSanctionner->getInscription()->getAdmission()->getCode());
                    $sheet->setCellValue('C'.$i, $InsSanctionner->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getNom());
                    $sheet->setCellValue('D'.$i, $InsSanctionner->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getPrenom());
                    $sheet->setCellValue('E'.$i, $InsSanctionner->getInscription()->getAnnee()->getFormation()->getDesignation());
                    $sheet->setCellValue('F'.$i, $InsSanctionner->getInscription()->getAnnee()->getFormation()->getDesignation());
                    $sheet->setCellValue('G'.$i, $InsSanctionner->getInscription()->getPromotion()->getDesignation());
                    $sheet->setCellValue('H'.$i, $InsSanctionner->getDateIncident()->format('d/m/Y'));
                    if ($InsSanctionner->getAgression() == null) {
                        $sheet->setCellValue('I'.$i, $InsSanctionner->getAutreAgression());
                    }else{
                        $sheet->setCellValue('I'.$i, $InsSanctionner->getAgression()->getDesignation());
                    }
                    $sheet->setCellValue('J'.$i, $InsSanctionner->getDateReunion()->format('d/m/Y H:i:s'));
                    $sheet->setCellValue('K'.$i, $sanction);
                    $sheet->setCellValue('L'.$i, $InsSanctionner->getSansSuite() == 0 ? 'Non' : 'Oui');
                    $sheet->setCellValue('M'.$i, $InsSanctionner->getInscription()->getAnnee()->getDesignation());
                    $i++;
                    $j++;
                }
            }else{
                $sheet->setCellValue('A'.$i, $j);
                $sheet->setCellValue('B'.$i, $InsSanctionner->getInscription()->getAdmission()->getCode());
                $sheet->setCellValue('C'.$i, $InsSanctionner->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getNom());
                $sheet->setCellValue('D'.$i, $InsSanctionner->getInscription()->getAdmission()->getPreinscription()->getEtudiant()->getPrenom());
                $sheet->setCellValue('E'.$i, $InsSanctionner->getInscription()->getAnnee()->getFormation()->getDesignation());
                $sheet->setCellValue('F'.$i, $InsSanctionner->getInscription()->getAnnee()->getFormation()->getDesignation());
                $sheet->setCellValue('G'.$i, $InsSanctionner->getInscription()->getPromotion()->getDesignation());
                $sheet->setCellValue('H'.$i, $InsSanctionner->getDateIncident()->format('d/m/Y'));
                if ($InsSanctionner->getAgression() == null) {
                    $sheet->setCellValue('I'.$i, $InsSanctionner->getAutreAgression());
                }else{
                    $sheet->setCellValue('I'.$i, $InsSanctionner->getAgression()->getDesignation());
                }
                $sheet->setCellValue('L'.$i, $InsSanctionner->getSansSuite() == 0 ? 'Non' : 'Oui');
                $sheet->setCellValue('M'.$i, $InsSanctionner->getInscription()->getAnnee()->getDesignation());
                $i++;
                $j++;
            }
        }
        
        // die('die');
        $writer = new Xlsx($spreadsheet);
        // dd($writer);
        $current_year = date('m') > 7 ? date('Y').'-'.date('Y')+1 : date('Y') - 1 .'-' .date('Y');
        $fileName = "Extraction Historique Convocation disciplinaire.xlsx";
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);
        $writer->save($temp_file);
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
    }
}
