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
    
    
    $(document).ready(function  () {
    let id_seriebac;
        
    var table = $("#datatables_gestion_seriebac").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/parametre/seriebac/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        language: datatablesFrench,
    });
    $("select").select2();
    $('body').on('click','#datatables_gestion_seriebac tbody tr',function () {
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_seriebac = null;
        } else {
            $("#datatables_gestion_seriebac tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_seriebac = $(this).attr('id');   
        }
        
    })
    
    $("#ajouter").on("click", () => {
        $("#ajout_modal").modal("show")

    })
    $("#save").on("submit", async (e) => {
        e.preventDefault();
        var formData = new FormData($("#save")[0])
        const icon = $("#save i");
        try {
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            const request = await axios.post('/parametre/seriebac/new', formData);
            const response = request.data;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $('#save')[0].reset();
            table.ajax.reload();
            id_seriebac = false
            Toast.fire({
                icon: 'success',
                title: 'seriebac bien Ajouter',
            })
            $("#ajout_modal").modal("hide")
        } catch (error) {
            console.log(error, error.response);
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            })
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        }
    })
    $("#modifier").on("click", async function(){
        if(!id_seriebac){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!',
            })
            return;
        }
        const icon = $("#modifier i");

        try {
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            const request = await axios.get('/parametre/seriebac/details/'+id_seriebac);
            const response = request.data;
            console.log(response)
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("#modifier_modal #designation").val(response.designation)
            $("#modifier_modal #abreviation").val(response.abreviation)
            $("#modifier_modal").modal("show")
        } catch (error) {
            console.log(error, error.response);
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
              })
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            
        }

    })
    $("#udpate").on("submit", async (e) => {
        e.preventDefault();
        var formData = new FormData($("#udpate")[0])
        const icon = $("#udpate i");
        try {
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            const request = await axios.post('/parametre/seriebac/update/'+id_seriebac, formData);
            const response = request.data;
            table.ajax.reload();
            id_seriebac = false
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            Toast.fire({
                icon: 'success',
                title: 'seriebac bien Modifier',
            })
            $("#modifier_modal").modal("hide")
        } catch (error) {
            console.log(error, error.response);
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            })
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            
        }
    })

    $("#supprimer").on("click", async function() {
        if(!id_seriebac){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!',
            })
            return;
        }
        const icon = $("#udpate i");

        var res = confirm('Vous voulez vraiment supprimer cette serie de bac ?');
        if(res == 1){
            try {
                icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
                const request = await axios.post('/parametre/seriebac/delete/'+id_seriebac);
                const response = request.data;
                table.ajax.reload();
                id_seriebac = false
                icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
                Toast.fire({
                    icon: 'success',
                    title: 'seriebac bien Supprimer',
                })
            } catch (error) {
                console.log(error, error.response);
                const message = error.response.data;
                Toast.fire({
                    icon: 'error',
                    title: message,
                })
                icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
                
            }
        }
    })
   
})


