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
    $('select').select2()
    let id_enseignant;
    var table = $("#datatables_gestion_salles").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/parametre/salles/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        language: datatablesFrench,
    });
    $('body').on('click','#datatables_gestion_salles tbody tr',function () {
        // const input = $(this).find("input");
        
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_salle = null;
        } else {
            $("#datatables_gestion_salles tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_salle = $(this).attr('id');
           
        }
        console.log(id_salle);
    })
    

    $("#ajouter").on("click", () => {
        $("#ajout_modal").modal("show")
    })
    // // 
    $("#save").on("submit", async (e) => {
        e.preventDefault();
        var formData = new FormData($("#save")[0])
        const icon = $("#save button i");
        try {
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            const request = await axios.post('/parametre/salles/new', formData);
            const response = request.data;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $('#save')[0].reset();
            table.ajax.reload();
            id_salle = false;
            $("#ajout_modal").modal("hide")
            Toast.fire({
                icon: 'success',
                title: message,
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
    })

    $("#modifier").on("click", async function(){
        if(!id_salle){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!',
            })
            return;
        }
        const icon = $("#modifier i");
        icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
        try {
            const request = await axios.get('/parametre/salles/details/'+id_salle);
            const response = request.data;
            console.log(response)
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("body #modifier_modal #update").html(response)
            $('select').select2();
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
    $("#update").on("submit", async (e) => {
        e.preventDefault();
        var formData = new FormData($("#update")[0])
        const icon = $("#update button i");

        try {
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            const request = await axios.post('/parametre/salles/update/'+id_salle, formData);
            const response = request.data;
            $('#update')[0].reset();
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            table.ajax.reload();
            id_salle = false;
            $("#modifier_modal").modal("hide")
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
    })

    $("#supprimer").on("click", async function() {
        if(!id_salle){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!',
            })
            return;
        }
        const icon = $("#supprimer i");

        var res = confirm('Vous voulez vraiment supprimer cette salle ?');
        if(res == 1){
            icon.removeClass('fa-trash').addClass("fa-spinner fa-spin ");
            try {
                const request = await axios.post('/parametre/salles/delete/'+id_salle);
                const response = request.data;
                table.ajax.reload();
                id_salle = false
                icon.addClass('fa-trash').removeClass("fa-spinner fa-spin ");
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
                icon.addClass('fa-trash').removeClass("fa-spinner fa-spin ");
                
            }
        }
    })

    $("#extraction").on("click", async function (e) {
        e.preventDefault();

        const icon = $("#extraction i");
        icon.removeClass("fa-print").addClass("fa-spinner fa-spin");

        try {
            const request = await axios.post(
                "/parametre/salles/extraction"
            );
            const response = request.data;

            window.open("/" + response.file, "_blank");
            icon.addClass("fa-print").removeClass("fa-spinner fa-spin ");
        } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            Toast.fire({
                icon: "error",
                title: message,
            });
            icon.addClass("fa-print").removeClass("fa-spinner fa-spin ");
        }
    });
   
})


