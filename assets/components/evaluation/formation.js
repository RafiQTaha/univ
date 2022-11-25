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

    $(" #enregistrer, #imprimer, #recalculer , #ExtracDip").attr('disabled', true);

    const enableButtons = () => {
        if (check == 1) {
            $("#enregistrer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false)
            $("#imprimer").removeClass('btn-info').addClass('btn-secondary').attr('disabled', true)
            $("#recalculer").removeClass('btn-info').addClass('btn-secondary').attr('disabled', true)
            $("#ExtracDip").removeClass('btn-info').addClass('btn-secondary').attr('disabled', true)
        }else if (check == 2) {
            $("#enregistrer").removeClass('btn-info').addClass('btn-secondary').attr('disabled', true)
            $("#imprimer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false)
            $("#recalculer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false)
            $("#ExtracDip").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false)
        }else{
            $("#enregistrer").removeClass('btn-info').addClass('btn-secondary').attr('disabled', true)
            $("#imprimer").removeClass('btn-info').addClass('btn-secondary').attr('disabled', true)
            $("#recalculer").removeClass('btn-info').addClass('btn-secondary').attr('disabled', true)
            $("#ExtracDip").removeClass('btn-info').addClass('btn-secondary').attr('disabled', true)
        }
    }

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
        admissions = [];
        e.preventDefault();
        $("#list_etu").empty()
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
            let response = request.data;
            // console.log(response.html2);

            $('#infos').html(response.html1);
            // $("#list_etu").DataTable().destroy();
            if ($.fn.DataTable.isDataTable("#list_etu")) {
                $('#list_etu').DataTable().clear().destroy();
            }
            $("#list_etu").html(response.html2).DataTable({
                scrollX: true,
                language: {
                    url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
                },
            });
            check = response.check;
            // console.log(check)
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

    
    $("#enregistrer").on('click', async function(e){
        const icon = $("#enregistrer i");
        icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
        try {
            const request = await axios.post('/evaluation/formation/enregistrer');
            let response = request.data
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
            Toast.fire({
                icon: 'success',
                title: response.message,
            });
            check = response.check;
            enableButtons();
        } catch (error) {
            console.log(error)
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
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

    $("#affichage").on('change', function() {
        let affichage = $(this).val();
        $("#impression_list").attr("href",  $("#impression_list").attr("href").slice(0,-1)+affichage) 
        $("#impression_clair").attr("href",  $("#impression_clair").attr("href").slice(0,-1)+affichage) 
        $("#impression_anonymat").attr("href",  $("#impression_anonymat").attr("href").slice(0,-1)+affichage) 
        $("#impression_rat").attr("href",  $("#impression_rat").attr("href").slice(0,-1)+affichage) 
             
    })
   
    $("#recalculer").on('click', async function(){
        const icon = $("#recalculer i");
        icon.removeClass('fa-redo-alt').addClass("fa-spinner fa-spin");
        try {
            const request = await axios.post('/evaluation/formation/recalculer');
            let response = request.data
            icon.addClass('fa-redo-alt').removeClass("fa-spinner fa-spin");
            Toast.fire({
                icon: 'success',
                title: response,
            });
        } catch (error) {
            console.log(error)  
            icon.addClass('fa-redo-alt').removeClass("fa-spinner fa-spin");
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            });
        }
    })
   
    // $("#ExtracDip").on('click',function(){
    //     window.open('/evaluation/formation/extractiondiplome', '_blank');
    // })

    
    admissions = [];

    $('body').on('click','#list_etu tbody tr',function () {
        const input = $(this).find("input.check_etu");
        if(input.is(":checked")){
            input.prop("checked",false);
            const index = admissions.indexOf(input.attr("id"));
            admissions.splice(index,1);
        }else{
            input.prop("checked",true);
            admissions.push(input.attr('id'));

        }
    })
    
    $("#ExtracDip").on("click", async function(e) {
        console.log(admissions)
        if(admissions.length > 0){
            e.preventDefault();
            let formData = new FormData();
            formData.append("admissions",  JSON.stringify(admissions));

            const icon = $("#ExtracDip i");
            icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
            
            try {
            const request = await axios.post('/evaluation/formation/extractiondiplome', formData);
            const response = request.data;

            window.open("/"+response.file ,"_blank");
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            Toast.fire({
                icon: 'error',
                title: message,
                });
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            
            }
        }else{
            Toast.fire({
                icon: 'error',
                title: 'veuiller selectionner etudiant (s)',
            });
        }
        
    })
})


    


