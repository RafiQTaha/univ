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
    let id_frais;
        
    var table = $("#datatables_gestion_frais").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/parametre/frais/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        language: datatablesFrench,
    });
    $("select").select2();
    $('body').on('click','#datatables_gestion_frais tbody tr',function () {
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_frais = null;
        } else {
            $("#datatables_gestion_frais tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_frais = $(this).attr('id');   
        }
        
    })
    $("#etablissement").on("change",async function(){
        const id_etab = $(this).val();
        let response = ""
        if(id_etab != "") {
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
            table.columns(0).search($(this).val()).draw();
        } else {
            table.columns(0).search("").draw();
        }
        $('#formation').html(response).select2();
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        if(id_formation != "") {
            table.columns(1).search(id_formation).draw();
        } else {
            table.columns(1).search("").draw();
        }
    })
    $("#ajouter").on("click", () => {
        if(!$("#formation").val() || $("#formation").val() == ""){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez choissir une formation!',
            })
            return;
        }
        $("#ajout_modal").modal("show")

    })
    $("#save").on("submit", async (e) => {
        e.preventDefault();
        var formData = new FormData($("#save")[0])
        formData.append("formation_id", $("#formation").val());
        const icon = $("#save i");
        try {
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            const request = await axios.post('/parametre/frais/new', formData);
            const response = request.data;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $('#save')[0].reset();
            $('#save select').val('').trigger("change");
            table.ajax.reload();
            id_frais = false
            Toast.fire({
                icon: 'success',
                title: 'Frais bien Ajouter',
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
        if(!id_frais){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!',
            })
            return;
        }
        const icon = $("#modifier i");

        try {
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            const request = await axios.get('/parametre/frais/details/'+id_frais);
            const response = request.data;
            // console.log(response)
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("body #modifier_modal #udpate").html(response)
            $("select").select2();
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
            const request = await axios.post('/parametre/frais/update/'+id_frais, formData);
            const response = request.data;
            table.ajax.reload();
            id_frais = false
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            Toast.fire({
                icon: 'success',
                title: response,
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
        if(!id_frais){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!',
            })
            return;
        }
        const icon = $("#supprimer i");
        
        var res = confirm('Vous voulez vraiment supprimer ce frais ?');
        if(res == 1){
            try {
                icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
                const request = await axios.post('/parametre/frais/delete/'+id_frais);
                const response = request.data;
                table.ajax.reload();
                id_frais = false
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

    $('body').on('click','#extraction', async function (e) {
        e.preventDefault();
        window.open('/parametre/frais/ExtractionFrais', '_blank');
    })
   
})


