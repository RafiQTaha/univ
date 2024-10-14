$(document).ready(function () {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })
    let id_preinscription = false;

    var table_gestion_preins = $("#datables_gestion_social").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[1, "desc"]],
        ajax: "/preinscription/social/list/gestion_preinscription_social",
        processing: true,
        serverSide: true,
        deferRender: true,
        scrollX: true,
        preDrawCallback: function(settings) {
            if ($.fn.DataTable.isDataTable('#datables_gestion_social')) {
                var dt = $('#datables_gestion_social').DataTable();

                //Abort previous ajax request if it is still in process.
                var settings = dt.settings();
                if (settings[0].jqXHR) {
                    settings[0].jqXHR.abort();
                }
            }
        },
        language: datatablesFrench,
    });

    $('body').on('click','#datables_gestion_social tbody tr',function () {
        if($(this).hasClass('active_databales')) {
            id_preinscription = null,
            $('#datables_gestion_social tr').removeClass('active_databales');
            return;
        }
        $('#datables_gestion_social tr').removeClass('active_databales');
        $(this).addClass('active_databales');
        id_preinscription = $(this).attr('id');
        // console.log(id_preinscription)
    })

    $("body select").select2();
    $("#etablissement").on('change', async function (){
        const id_etab = $(this).val();
        table_gestion_preins.columns().search("");

        table_gestion_preins.columns(0).search(id_etab).draw();
        let response = ""
        if(id_etab != "") {
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        }
        $('#formation').html(response).select2();
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        table_gestion_preins.columns(2).search("").draw();
        table_gestion_preins.columns(1).search(id_formation).draw();
    })
    // $("#nature").on('change', async function (){
    //     table_gestion_preins.columns(2).search($(this).val()).draw();
    // })
    const list_priseEncharge = () => {
        $("#datables_social_modal").DataTable({
            lengthMenu: [
              [10, 15, 25, 50, 100, 20000000000000],
              [10, 15, 25, 50, 100, "All"],
            ],
            order: [[0, "desc"]],
            ajax: "/preinscription/social/list/priseEncharge/"+id_preinscription,
            processing: true,
            serverSide: true,
            deferRender: true,
            language: datatablesFrench,
            stateSave: true,
            bDestroy: true
        });
    }

    

    $('body').on('click','#ajouter',function () {
        
        if(!id_preinscription){
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!',
            })
            return;
        }
        list_priseEncharge();
        $('#ajouterPriseEnCharge_modal').modal("show");
        
    }) 

    
    $("body").on('submit', ".form-ajouter_pcharge", async (e) => {
        e.preventDefault();
        // alert('et');
        if(!id_preinscription){
            Toast.fire({
            icon: 'error',
            title: 'Merci de Choisir Un Etudiant!',
            })
            return;
        }
        var res = confirm('Vous voulez vraiment Ajouter cette prise en charge ?');
        if(res == 1){
        var formData = new FormData($('.form-ajouter_pcharge')[0]);
        formData.append('preinscription', id_preinscription)
        // formData.append('preinscription', id_preinscription)
        console.log(formData);
        let modalAlert = $("#ajouterPriseEnCharge_modal .modal-body .alert")
        modalAlert.remove();
        const icon = $("#ajouterPriseEnCharge_modal button i");
        icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
        try {
            const request = await axios.post('/preinscription/social/ajouter_pcharge', formData);
            const response = request.data;
            $("#ajouterPriseEnCharge_modal .modal-body").prepend(
            `<div class="alert alert-success" style="width: 98%;margin: 0 auto;">
                <p>${response}</p>
                </div>`
            );
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            list_priseEncharge();
            id_preinscription = false;
            $('.form-ajouter_pcharge')[0].reset()
            $('.form-ajouter_pcharge select').val("").trigger('change');
        }catch (error) {
            // console.log(error, error.response);
            const message = error.response.data;
            modalAlert.remove();
            $("#ajouterPriseEnCharge_modal .modal-body").prepend(
            `<div class="alert alert-danger" style="width: 98%;margin: 0 auto;">${message}</div>`
            );
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
        }
        setTimeout(() => {
            $(".modal-body .alert").remove();
            // modalAlert.remove();
        }, 2500)  
        }
    })

  
//   $('body').on('click','#extraction', function (){
//         window.open('/preinscription/gestion/extraction_preins', '_blank');
//   })
//   $('body').on('click','#imprimer_docs', function (){
//     if(!id_preinscription){
//         Toast.fire({
//           icon: 'error',
//           title: 'Merci de Choisir Un Etudiant!',
//         })
//         return;
//     }
//     window.open('/preinscription/gestion/print_documents_preinscription/'+id_preinscription, '_blank');
//   })

})

