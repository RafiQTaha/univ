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
    let id_module;
    var table = $("#datatables_gestion_module").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/parametre/module/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        language: datatablesFrench,
    });
    $("#etablissement").select2();
    $('body').on('click','#datatables_gestion_module tbody tr',function () {
        // const input = $(this).find("input");
        
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_module = null;
        } else {
            $("#datatables_gestion_module tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_module = $(this).attr('id');   
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
        let response = ""

        if(id_formation != "") {
            table.columns(1).search(id_formation).draw();
            const request = await axios.get('/api/promotion/'+id_formation);
            response = request.data
        } else {
            table.columns(1).search("").draw();
        }
        $('#promotion').html(response).select2();
       
    })
    $("#promotion").on('change', async function (){
        const id_promotion = $(this).val();

        if(id_promotion != "") {
            table.columns(2).search(id_promotion).draw();
            const request = await axios.get('/api/semestre/'+id_promotion);
            response = request.data
            
        } else {
            table.columns(2).search("").draw();
        }
        $('#semestre').html(response).select2();
       
    })
    $("#semestre").on('change', async function (){
        const id_semestre = $(this).val();

        if(id_semestre != "") {
            table.columns(3).search(id_semestre).draw();
            
        } else {
            table.columns(3).search("").draw();
        }
       
    })
    $("#ajouter").on("click", () => {
        // alert($("#formation").val())
        if(!$("#semestre").val() || $("#semestre").val() == ""){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez choissir une semestre!',
            })
            return;
        }
        $("#ajout_modal").modal("show")

    })
    $("#modifier").on("click", async function(){
        if(!id_module){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!',
            })
            return;
        }
        const icon = $("#modifier i");

        try {
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            const request = await axios.get('/parametre/module/details/'+id_module);
            const response = request.data;
            // console.log(response)
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("body #modifier_modal #udpate").html(response)
            // $("#modifier_modal #designation").val(response.designation)
            // $("#modifier_modal #coefficient").val(response.coefficient)
            // if(response.active == 1){
            //     $("#modifier_modal #active").prop("checked", true)
            // }else {
            //     $("#modifier_modal #active").prop("checked", false)
            // }
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
    $("#save").on("submit", async (e) => {
        e.preventDefault();
        var formData = new FormData($("#save")[0])
        formData.append("semestre_id", $("#semestre").val());
        const icon = $("#save i");

        try {
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            const request = await axios.post('/parametre/module/new', formData);
            const response = request.data;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $('#save')[0].reset();
            table.ajax.reload();
            id_module = false;
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
    $("#udpate").on("submit", async (e) => {
        e.preventDefault();
        var formData = new FormData($("#udpate")[0])
       
        const icon = $("#udpate i");

        try {
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            const request = await axios.post('/parametre/module/update/'+id_module, formData);
            const response = request.data;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            table.ajax.reload();
            id_module = false;
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
        if(!id_module){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!',
            })
            return;
        }
        const icon = $("#supprimer i");

        var res = confirm('Vous voulez vraiment supprimer ce module ?');
        if(res == 1){
            try {
                icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
                const request = await axios.post('/parametre/module/delete/'+id_module);
                const response = request.data;
                table.ajax.reload();
                id_promotion = false
                icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
                Toast.fire({
                    icon: 'success',
                    title: 'Module bien Supprimer',
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


