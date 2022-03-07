const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
})

let check;
let inscription_id = null;
    
$(document).ready(function  () {
    $("#valider, #devalider, #simuler").attr('disabled', true)
    const enableButtons = () => {
        if(check == 0) {
            $("#valider").removeClass('btn-secondary').addClass('btn-danger').attr('disabled', false)
            $("#simuler").removeClass('btn-secondary').addClass('btn-primary').attr('disabled', false)
            $("#devalider").addClass('btn-secondary').removeClass('btn-success').attr('disabled', true)
        } else {
            $("#valider").addClass('btn-secondary').removeClass('btn-danger').attr('disabled', true)
            $("#simuler").addClass('btn-secondary').removeClass('btn-primary').attr('disabled', true)
            $("#devalider").removeClass('btn-secondary').addClass('btn-success').attr('disabled', false)
        }
    }
    $("#etablissement").select2();
    $("#etablissement").on('change', async function (){
        const id_etab = $(this).val();
        let response = ""
        if(id_etab != "") {
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        }
        $('#formation').html(response).select2();
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        let response = ""
        if(id_formation != "") {
            const request = await axios.get('/api/promotion/'+id_formation);
            response = request.data
        }
        $('#promotion').html(response).select2();
    })
    $("#promotion").on('change', async function (){
        const id_promotion = $(this).val();
        let response = ""
        if(id_promotion != "") {
            const request = await axios.get('/api/semestre/'+id_promotion);
            response = request.data
        }
        $('#semestre').html(response).select2();
    })
    

    $("#get_list_etudiant").on('click', async function(e){
        e.preventDefault();
        $("#list_epreuve_normal").empty()
        let semestre_id = $('#semestre').val();
        if(semestre_id == "" || !semestre_id) {
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection semestre!',
            })
            return;
        }
        const icon = $("#get_list_etudiant i");
        icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
        try {
            const request = await axios.post('/evaluation/simulationdeliberation/list/'+semestre_id);
            let response = request.data
            // $("#list_epreuve_normal").DataTable().destroy()
            if ($.fn.DataTable.isDataTable("#list_epreuve_normal")) {
                $('#list_epreuve_normal').DataTable().clear().destroy();
              }
            $("#list_epreuve_normal").html(response.html).DataTable({
                scrollX: true,
                scrollY: true,
                language: {
                    url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
                },
            });
            check = response.check;
            if(check == 1){
                Toast.fire({
                    icon: 'info',
                    title: "Operation déja valider",
                }) 
            }
            enableButtons();
            icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
        } catch (error) {
            console.log(error)
            icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            }) 
        }

    })
    $('body').on('click','#list_epreuve_normal tbody tr',function () {
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            // $('#inscription-modal').attr('disabled', true);
            inscription_id = null;
        } else {
            $("#list_epreuve_normal tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');  
            inscription_id = $(this).attr("id")         
        }
    })
   


    
    
    $("#simuler").on("click", () => {  
        $("#note_modal").modal("show")
        getSimulerDetails();
    })
    
    const getSimulerDetails = async () => {
        try {
            const request = await axios.post('/evaluation/simulationdeliberation/simuler/'+inscription_id+"/"+$("#semestre").val());
            let response = request.data
            $("#note_modal .modal-body").html(response);
            // Toast.fire({
            //     icon: 'success',
            //     title: response,
            // });
        } catch (error) {
            console.log(error)
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            });
        }
    }
    $("body").on("click", ".open h3", function(){
        $(this).parent().find(".elements").slideToggle("slow");
    })
    $("#statut_avant_rachat").on('click', async function() {
        const icon = $("#statut_avant_rachat i");
        icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
        try {
            const request = await axios.post('/evaluation/semestre/statut/avantrachat');
            let response = request.data
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            Toast.fire({
                icon: 'success',
                title: response,
            });
        } catch (error) {
            console.log(error)
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            });
        }
    })
    
    $("body").on("keyup change", ".KU3", function () {
        var value = $(this).attr('id');
        var element = value.substring(0, value.length - 2);
        console.log(value, element);
        var elementCount = $(this).closest('div').parent().children('div').length - 1;
        // var modulex = element.substring(0, element.lastIndexOf('ele') );
        // var modulexCount =  $(this).closest('div').parent().parent().parent().parent().children('p').length;
        // var countexam = 1;
        // var calculeNrachatModule=0;
        // var calculeNrachatSemestre=0;
        // var cc =  $('#'+element+'cc').val() ;
        // var tp =  $('#'+element+'tp').val() ;
        // var ef =  $('#'+element+'ef').val() ;
  
        // var elementSomme=0;
        // var moduleSomme=0;
        
        // var coeff_module =  Number($('#Coef'+modulex+'is').val()) ;
        // var coeff_exams =  $('#Coef'+element+'examis').val() ;
        // var res = coeff_exams.split('"');
        // var coeff_cc =  Number(res[3]);
        // var coeff_tp =  Number(res[7]);
        // var coeff_ef =  Number(res[11]);
        // if( cc!='' && cc!='0' ){countexam+=1;}
        // if( tp!='' && tp!='0' ){countexam+=1;}
        // if( ef!='' && ef!='0' ){countexam+=1;}
        // if( countexam > 1 ){countexam-=1;}
        // var calculeNrachatElement = ( ( Number(cc) * coeff_cc ) + ( Number(tp) * coeff_tp ) + ( Number(ef) * coeff_ef ) ) / ( coeff_cc + coeff_tp + coeff_ef );
  
        // $('#'+element).val(Number((calculeNrachatElement).toFixed(2)));
  
  
  
        // for (let i = 0; i <= elementCount-1; i++) {
        //   calculeNrachatModule+= Number($('#'+modulex+'ele'+i).val()) *  Number($('#Coef'+modulex+'ele'+i+'is').val());
        //   elementSomme+= Number($('#Coef'+modulex+'ele'+i+'is').val());
        //   }
        // var  calculeNrachatModulex = calculeNrachatModule / elementSomme ;
  
  
        // $('#'+modulex+'Rachat').val(Number((calculeNrachatModulex).toFixed(2)));
        // if(Number($('#'+modulex+'NoteOG').val()) + Number((calculeNrachatModulex).toFixed(2)) > 20){
        // $('#'+modulex+'Note').val( Number($('#'+modulex+'NoteOG').val()));
        // }else{
        // $('#'+modulex+'Note').val( Number($('#'+modulex+'NoteOG').val()) + Number((calculeNrachatModulex).toFixed(2)));
        // }
        
  
  
  
        // for (let i = 0; i <= modulexCount-1; i++) {
        //   calculeNrachatSemestre+= Number($('#'+'mod'+i+'Rachat').val()) *  Number($('#Coef'+modulex+'is').val());
        //   moduleSomme+= Number($('#Coef'+modulex+'is').val());
        //   }
        // var  calculeNrachatSemestrex = calculeNrachatSemestre / moduleSomme ;
  
  
        // $('#sem_rachat').val(Number((calculeNrachatSemestrex).toFixed(2)));
  
        // if(Number($('#sem_note').val()) + calculeNrachatSemestrex > 20){
        // $('#sem_note').val( Number($('#sem_noteOG').val()));
        // }else{
        // $('#sem_note').val( Number($('#sem_noteOG').val()) + Number((calculeNrachatSemestrex).toFixed(2)));
        // }
  
    });
})


    


