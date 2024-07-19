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

let check = 0;
let inscription_id = null;
    
$(document).ready(function  () {
    // $("#valider, #import, #simuler").attr('disabled', true)
    // const enableButtons = () => {
    //     if(check == 0) {
    //         // $("#valider").removeClass('btn-secondary').addClass('btn-danger').attr('disabled', false)
    //         // $("#import").addClass('btn-secondary').removeClass('btn-success').attr('disabled', true)
    //         $("#imprimer").addClass('btn-secondary').removeClass('btn-info').attr('disabled', true)
    //     } else {
    //         // $("#valider").addClass('btn-secondary').removeClass('btn-danger').attr('disabled', true)
    //         // $("#import").removeClass('btn-secondary').addClass('btn-success').attr('disabled', false)
    //         $("#imprimer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false)
    //     }
    // }
    // enableButtons();
    $("select").select2();

    // $("#get_list_etudiant").trigger("click")
    // $("#get_list_etudiant").on('click', async function(e){
    //     e.preventDefault();
    //     let groupement = $('#groupement').val();
    //     if(groupement == "" || !groupement) {
    //         Toast.fire({
    //             icon: 'error',
    //             title: 'Veuillez selection un groupement!',
    //         })
    //         return;
    //     }
    //     $("#list_etudiants").empty()
    //     const icon = $("#get_list_etudiant i");
    //     icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
    //     try {
    //         let formData = new FormData();
    //         formData.append("groupement", groupement)
    //         const request = await axios.post('/concours/evaluation/list', formData);
    //         let response = request.data
    //         // $("#list_epreuve_normal").DataTable().destroy()
    //         if ($.fn.DataTable.isDataTable("#list_etudiants")) {
    //             $('#list_etudiants').DataTable().clear().destroy();
    //           }
    //         $("#list_etudiants").html(response).DataTable({
    //             scrollX: true,
    //             scrollY: true,
    //             language: datatablesFrench,
    //         });
    //         check = 1;
    //         enableButtons();
    //         icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
    //     } catch (error) {
    //         console.log(error)
    //         icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
    //         const message = error.response.data;
    //         Toast.fire({
    //             icon: 'error',
    //             title: message,
    //         }) 
    //     }

    // })
    

    $("#import").on('click', async function (e){
        e.preventDefault();
        $('#import_en_masse').modal("show");
    })
    $("#evaluation_canvas").on('click', function () {
        window.open("/concours/evaluation/canvas", '_blank');
    })
    $("#import_evaluation_save").on("submit", async function(e) {
        e.preventDefault();
        let formData = new FormData($(this)[0]);
        let modalAlert = $("#import_en_masse .modal-body .alert")
    
        modalAlert.remove();
        const icon = $("#evaluation_enregistre i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        
        try {
          const request = await axios.post('/concours/evaluation/import', formData);
          const response = request.data;
          $("#import_en_masse .modal-body").prepend(
            `<div class="alert alert-success">
                <p>${response}</p>
              </div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
          $("#get_list_etudiant").trigger("click")

        } catch (error) {
          const message = error.response.data;
          console.log(error, error.response);
          modalAlert.remove();
          $("#import_en_masse .modal-body").prepend(
            `<div class="alert alert-danger">${message}</div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
          
        }
    })
    $("#traiter").on('click', async function() {
        const icon = $("#traiter i");
        icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
        try {
            const request = await axios.post('/concours/evaluation/traiter');
            let response = request.data
            // $("#get_list_etudiant").trigger("click")
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

    $("#imprimer").on("click", () => {  
        $("#imprimer_list").modal("show")
    })
    $("#impression_FMA").on('click', function () {
        let type = $('#type').val();
        let type_list = $('#type_list').val();
        window.open("/concours/evaluation/imprimer/FMA/"+type+"/"+type_list, '_blank');
    })
    $("#impression_FMDA").on('click', function () {
        let type = $('#type').val();
        let type_list = $('#type_list').val();
        window.open("/concours/evaluation/imprimer/FMDA/"+type+"/"+type_list, '_blank');
    })
    $("#impression_FPA").on('click', function () {
        let type = $('#type').val();
        let type_list = $('#type_list').val();
        window.open("/concours/evaluation/imprimer/FPA/"+type+"/"+type_list, '_blank');
    })
    $("#impression_ISITS").on('click', function () {
        let type = $('#type').val();
        let type_list = $('#type_list').val();
        window.open("/concours/evaluation/imprimerISITS_FASIMH/ISITS/"+type+"/"+type_list, '_blank');
    })
    $("#impression_FASIMH").on('click', function () {
        let type = $('#type').val();
        let type_list = $('#type_list').val();
        window.open("/concours/evaluation/imprimerISITS_FASIMH/FASIMH/"+type+"/"+type_list, '_blank');
    })
})


    


