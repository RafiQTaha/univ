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
    let id_langue;
        
    var table = $("#datatables_gestion_langue").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/parametre/langues/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        language: datatablesFrench,
    });
    $("select").select2();
    $('body').on('click','#datatables_gestion_langue tbody tr',function () {
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_langue = null;
        } else {
            $("#datatables_gestion_langue tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_langue = $(this).attr('id');   
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
            const request = await axios.post('/parametre/langues/new', formData);
            const response = request.data;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $('#save')[0].reset();
            table.ajax.reload();
            id_langue = false
            Toast.fire({
                icon: 'success',
                title: 'langue bien Ajouter',
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
        if(!id_langue){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!',
            })
            return;
        }
        const icon = $("#modifier i");

        try {
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            const request = await axios.get('/parametre/langues/details/'+id_langue);
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
            const request = await axios.post('/parametre/langues/update/'+id_langue, formData);
            const response = request.data;
            table.ajax.reload();
            id_langue = false
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            Toast.fire({
                icon: 'success',
                title: 'langue bien Modifier',
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
        if(!id_langue){
            Toast.fire({
                icon: 'success',
                title: 'langue bien Supprimer',
            })
            return;
        }
        const icon = $("#udpate i");

        var res = confirm('Vous voulez vraiment supprimer cette langue ?');
        if(res == 1){
            try {
                icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
                const request = await axios.post('/parametre/langues/delete/'+id_langue);
                const response = request.data;
                table.ajax.reload();
                id_langue = false
                icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
                Toast.fire({
                    icon: 'success',
                    title: response,
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


