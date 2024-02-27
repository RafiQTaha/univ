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
    var table = $("#datatables_gestion_enseignant").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/parametre/enseignant/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        language: datatablesFrench,
    });
    $('body').on('click','#datatables_gestion_enseignant tbody tr',function () {
        // const input = $(this).find("input");
        
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_enseignant = null;
        } else {
            $("#datatables_gestion_enseignant tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_enseignant = $(this).attr('id');
           
        }
        
    })
    // $(this).val().length
    $("body #save #rib").on("input", () => {
        console.log($("body #save #rib").val().length )
        if( $("body #save #rib").val().length === 24 ) { 
            // alert('We have a winner!'); 
            $("body #save .rib i").css('color','green')
        }else { 
            $("body #save .rib i").css('color','currentcolor')
        }
    })
    $("body #update").on("input","#rib", () => {
        console.log($("body #update #rib").val().length )
        if( $("body #update #rib").val().length === 24 ) { 
            // alert('We have a winner!'); 
            $("body #update .rib i").css('color','green')
        }else { 
            $("body #update .rib i").css('color','currentcolor')
        }
    })
    
    $("body .update #rib").on("input", () => {
        console.log($("body #rib").val().length )
        if( $("body .update #rib").val().length === 24 ) {
            $("body .update .rib i").css('color','green')
        }else { 
            $("body .update .rib i").css('color','currentcolor')
        }
    })

    $("#ajouter").on("click", () => {
        $("#ajout_modal").modal("show")
    })
    // 
    $("#save").on("submit", async (e) => {
        e.preventDefault();
        var formData = new FormData($("#save")[0])
        const icon = $("#save button i");
        try {
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            const request = await axios.post('/parametre/enseignant/new', formData);
            const response = request.data;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $('#save')[0].reset();
            table.ajax.reload();
            id_enseignant = false;
            $("#ajout_modal").modal("hide")
            Toast.fire({
                icon: 'succees',
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
        if(!id_enseignant){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!',
            })
            return;
        }
        const icon = $("#modifier i");
        icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
        try {
            const request = await axios.get('/parametre/enseignant/detailles/'+id_enseignant);
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
    $(this).val().length
    $("#update").on("submit", async (e) => {
        e.preventDefault();
        var formData = new FormData($("#update")[0])
        const icon = $("#update button i");

        try {
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            const request = await axios.post('/parametre/enseignant/update/'+id_enseignant, formData);
            const response = request.data;
            $('#update')[0].reset();
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            table.ajax.reload();
            id_enseignant = false;
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
        if(!id_enseignant){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!',
            })
            return;
        }
        const icon = $("#supprimer i");

        var res = confirm('Vous voulez vraiment supprimer cet enseignant ?');
        if(res == 1){
            icon.removeClass('fa-trash').addClass("fa-spinner fa-spin ");
            try {
                const request = await axios.post('/parametre/enseignant/delete/'+id_enseignant);
                const response = request.data;
                table.ajax.reload();
                id_enseignant = false
                icon.addClass('fa-trash').removeClass("fa-spinner fa-spin ");
                Toast.fire({
                    icon: 'success',
                    title: 'Enseignant bien Supprimer',
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
                "/parametre/enseignant/extraction"
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


