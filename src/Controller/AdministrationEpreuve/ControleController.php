<?php

namespace App\Controller\AdministrationEpreuve;

use DateTime;
use Mpdf\Mpdf;
use App\Entity\PStatut;
use App\Entity\ExGnotes;
use App\Entity\AcEpreuve;
use App\Entity\PEnseignant;
use App\Entity\TInscription;
use App\Entity\AcEtablissement;
use App\Controller\ApiController;
use App\Controller\DatatablesController;
use App\Entity\ExMnotes;
use App\Entity\PAnonymatActuel;
use App\Entity\Semaine;
use App\Entity\TInscriptionImpControle;
use App\Entity\TInscriptionImpLog;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use PhpOffice\PhpSpreadsheet\Reader\Xlsx as reader;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/administration/controle')]
class ControleController extends AbstractController
{
    private $em;
    public function __construct(ManagerRegistry $doctrine)
    {
        $this->em = $doctrine->getManager();
        
    }
    #[Route('/', name: 'controle')]
    public function index(Request $request): Response
    {
        $operations = ApiController::check($this->getUser(), 'controle', $this->em,$request);

        if(!$operations) {
            return $this->render("errors/403.html.twig");
        }
        $anonymatActuel = $this->em->getRepository(PAnonymatActuel::class)->find(1);
        return $this->render('administration_epreuve/controle.html.twig', [
            'operations' => $operations,
            'anonymatActuel' => $anonymatActuel
        ]);
        
    }

    
    #[Route('/list', name: 'list_controle')]
    public function controle(Request $request): Response
    {   
        $params = $request->query;
        $where = $totalRows = $sqlRequest = "";
        if ($this->getUser()->getRoles()[0] == 'ROLE_ADMIN') {
            $filtre = " where 1 = 1 ";
        }else{
            $filtre = " where log.user_created_id = ".$this->getUser()->getId();
        }
        $columns = array(
            array( 'db' => 'log.id','dt' => 0 ),
            array( 'db' => 'upper(ins.id)','dt' => 1 ),
            array( 'db' => 'upper(ins.code)','dt' => 2 ),
            array( 'db' => 'etu.nom','dt' => 3),
            array( 'db' => 'etu.prenom','dt' => 4),
            array( 'db' => 'ins.code_anonymat','dt' => 5),
            array( 'db' => 'ins.code_anonymat_rat','dt' => 6),
        );
        $sql = "SELECT " . implode(", ", DatatablesController::Pluck($columns, 'db')) . "
        FROM  tinscription_imp_log log 
        inner join tinscription ins on log.inscription_id = ins.id 
        inner join tadmission adm on adm.id = ins.admission_id
        inner join tpreinscription pre on pre.id = adm.preinscription_id
        inner join tetudiant etu on etu.id = pre.etudiant_id $filtre ";
        // dd($sql);
        $totalRows .= $sql;
        $sqlRequest .= $sql;
        $stmt = $this->em->getConnection()->prepare($sql);
        $newstmt = $stmt->executeQuery();
        $totalRecords = count($newstmt->fetchAll());
        
        $my_columns = DatatablesController::Pluck($columns, 'db');
        
        $where = DatatablesController::Search($request, $columns);
        if (isset($where) && $where != '') {
            $sqlRequest .= $where;
        }
        $sqlRequest .= DatatablesController::Order($request, $columns);
        // dd($sqlRequest);
        $stmt = $this->em->getConnection()->prepare($sqlRequest);
        $resultSet = $stmt->executeQuery();
        $result = $resultSet->fetchAll();
        $data = array();
        $i = $totalRecords;
        foreach ($result as $key => $row) {
            // dump($row['id']);
            $nestedData = array();
            $cd = $row['id'];
            $ins = $row['upper(ins.id)'];
            $nestedData[] = $i;
            foreach (array_values($row) as $key => $value) { 
                $nestedData[] = $value;
                if($key == 6){
                    $nestedData[] = " <a role = '".$ins."' class='get_cd btn btn-app' style='min-width: 22px;height: 30px;background: transparent;border: none' > <i style='font-size: 20px;' class='fa fa-barcode'></i></a>";
                }
            }
            $nestedData["DT_RowId"] = $cd;
            // $nestedData["DT_RowClass"] = $etat_bg;
            $data[] = $nestedData;
            $i--;
        }
        $json_data = array(
            "draw" => intval($params->get('draw')),
            "recordsTotal" => intval($totalRecords),
            "recordsFiltered" => intval($totalRecords),
            "data" => $data   
        );
        return new Response(json_encode($json_data));
    }

    
    #[Route('/validation', name: 'validation_controle')]
    public function validation_controle(Request $request)
    {
        $inscription = $this->em->getRepository(TInscription::class)->find($request->get('inscription'));
        if (!$inscription) {
            return new Response('Inscription Introuvable!',500);
        }
        $anonymatActuel = $this->em->getRepository(PAnonymatActuel::class)->find(1)->getAbreviation();
        $rattrapage = $anonymatActuel == 'anonymat' ? 0 : 1;
        $inscriptionControle = $this->em->getRepository(TInscriptionImpControle::class)->findOneBy(['isRattrapage'=>$rattrapage,'inscription'=>$inscription]);
        if($inscriptionControle == null){
            $inscriptionControle = new TInscriptionImpControle();
            $inscriptionLog = new TInscriptionImpLog();
            $inscriptionControle->SetInscription($inscription);
            $inscriptionControle->setIsRattrapage($rattrapage);
            $inscriptionControle->setControle(1);
            $inscriptionControle->setUserCreated($this->getUser());
            $inscriptionControle->setCreated(new \DateTime('now'));
            $this->em->persist($inscriptionControle);
        }elseif ($inscriptionControle->getCreated()->format('Y-m-j') == date('Y-m-j')) {
            $inscriptionControle->setControle($inscriptionControle->getControle() + 1);
        }else {
            $inscriptionControle->setControle(1);
            $inscriptionControle->setCreated(new \DateTime('now'));
        }
        $this->em->flush();
        if ($rattrapage == 0) {
            if ($inscription->getCodeAnonymat() == $request->get('anonymat')) {
                return new Response('Le code exacte',200);
            }
        }else {
            if ($inscription->getCodeAnonymatRat() == $request->get('anonymat')) {
                return new Response('Le code exacte',200);
            }
        }
        return new Response('Le code Invalid!',500);
    }

    #[Route('/print/{inscription}/{netiquettes}', name: 'print_controle')]
    public function print_controle(Request $request,TInscription $inscription, $netiquettes)
    {
        
        $anonymatActuel = $this->em->getRepository(PAnonymatActuel::class)->find(1)->getAbreviation();
        $anonymat = $anonymatActuel == 'anonymat' ? $inscription->getCodeAnonymat() : $inscription->getCodeAnonymatRat();
        $html = $this->render("administration_epreuve/pdfs/imprimer.html.twig", [
            "inscription" => $inscription,
            "netiquettes" => $netiquettes,
            "anonymat" => $anonymat
        ])->getContent();
        $mpdf = new Mpdf([
            'mode' => 'utf-8',
            'format' => 'A4-L',
            'margin_left' => '0',
            'margin_right' => '0',
            'margin_top' => '50',
            'margin_bottom' => '0',
            'default_font_size' => 10,
            'default_font' => 'Arial',
            'showBarcodeNumbers' => FALSE
        ]);
        $mpdf->SetTitle('Etiquettes');
       
        // $html = "<barcode code=".$inscription->getId()." type='C128A' height='0.7' size='1.5'/>";
        $mpdf->SetJS('this.print();');
        $mpdf->WriteHTML($html);
        // dd($mpdf);

        $mpdf->Output();
        die;
    }

    
   
}
