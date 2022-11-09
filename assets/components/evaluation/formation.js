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
    
$(document).ready(function  () {
    $("select").select2();
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
            const request = await axios.get('/api/annee/'+id_formation);
            response = request.data
        }
        $('#annee').html(response).select2();
    })




    $("#recherche").on('click', async function(e){
        e.preventDefault();
        $("#list_etudiants").empty()
        let annee_id = $('#annee').val();
        if(annee_id == "" || !annee_id) {
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une annee!',
            })
            return;
        }
        const icon = $("#recherche i");
        icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
        try {
            const request = await axios.post('/evaluation/formation/list/'+annee_id);
            let response = request.data
            // $("#list_etudiants").DataTable().destroy()
            if ($.fn.DataTable.isDataTable("#list_etudiants")) {
                $('#list_etudiants').DataTable().clear().destroy();
              }
            $("#list_etudiants").html(response.html).DataTable({
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
   
})


    


