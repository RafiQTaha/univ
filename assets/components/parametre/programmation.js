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
    let id_programmation;
    var table = $("#datatables_gestion_programmation").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/parametre/programmation/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        language: datatablesFrench,
    });
    $("select").select2();
    $('body').on('click','#datatables_gestion_programmation tbody tr',function () {
        // const input = $(this).find("input");
        
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_programmation = null;
        } else {
            $("#datatables_gestion_programmation tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_programmation = $(this).attr('id');   
        }
        
    })
    $("#etablissement").on("change",async function(){
        const id_etab = $(this).val();
        $(".card-header").find('#a-ouverte').text("")
        let response = ""
        if(id_etab != "") {
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
            table.columns().search("").draw();
            table.columns(0).search(id_etab).draw();
        } else {
                table.columns(0).search("").draw();
        }
        // for (let i = 1; i <= 6; i++) {
        //     table.columns(i).search("").draw();
        // }
        $('#formation').html(response).select2();
        $('#promotion').html("").select2();
        $('#annee').html("").select2();  
        $('#semestre').html("").select2();
        $('#module').html("").select2();
        $('#element').html("").select2();  
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        let response = ""
        $(".card-header").find('#a-ouverte').text("")

        if(id_formation != "") {
            // table.columns(0).search($("#etablissement").val()).draw();
            table.columns().search("").draw();
            table.columns(1).search(id_formation).draw();
            const annee_request = await axios.get('/api/anneeProgrammation/'+id_formation);
            response_annee = annee_request.data
            const request = await axios.get('/api/promotion/'+id_formation);
            response = request.data
            const formationAndanneeOuverte = await axios.get('/api/formationAndanneeOuverte/'+id_formation);
            $(".card-header").find('#a-ouverte').text("L'Annee Ouverte: "+formationAndanneeOuverte.data.annee)
        } else {
            table.columns(1).search("").draw();
        }
        // for (let i = 2; i <= 6; i++) {
        //     table.columns(i).search("").draw();
            
        // }
        $('#promotion').html(response).select2();
        $('#annee').html(response_annee).select2();  
        $('#semestre').html("").select2();
        $('#module').html("").select2();
        $('#element').html("").select2();  
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
        // for (let i = 3; i <= 5; i++) {
        //     table.columns(i).search("").draw();
        // }
        $('#semestre').html(response).select2();
        $('#module').html("").select2();
        $('#element').html("").select2();
       
    })
    $("#semestre").on('change', async function (){
        const id_semestre = $(this).val();

        if(id_semestre != "") {
            table.columns(3).search(id_semestre).draw();
            const request = await axios.get('/api/module/'+id_semestre);
            response = request.data
        } else {
            table.columns(3).search("").draw();
        }
        // for (let i = 4; i <= 5; i++) {
        //     table.columns(i).search("").draw();
        // }
        $('#module').html(response).select2();
        $('#element').html("").select2();
       
    })
    $("#module").on('change', async function (){
        const id_module = $(this).val();

        if(id_module != "") {
            table.columns(4).search(id_module).draw();
            const request = await axios.get('/api/element/'+id_module);
            response = request.data
        } else {
            table.columns(4).search("").draw();
        }
        table.columns(5).search("").draw();
        $('#element').html(response).select2();
       
    })
    $("#element").on('change', async function (){
        const id_element = $(this).val();
        if(id_element != "") {
            table.columns(5).search(id_element).draw();
        } else {
            table.columns(5).search("").draw();
        }
    })
    $("#annee").on('change', async function (){
        const id_annee = $(this).val();

        if(id_annee != "") {
            table.columns(6).search(id_annee).draw();
        } else {
            table.columns(6).search("").draw();
        }
    })
    $("#ajouter").on("click", () => {
        // alert($("#formation").val())
        if(!$("#element").val() || $("#element").val() == "" || !$("#annee").val() || $("#annee").val() == ""){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez choissir une annee et un element!',
            })
            return;
        }
        $('select').select2();
        $("#ajout_modal").modal("show")

    })
    $("#save").on("submit", async (e) => {
        e.preventDefault();
        var formData = new FormData($("#save")[0])
        formData.append("element_id", $("#element").val());
        formData.append("annee_id", $("#annee").val());
        const icon = $("#save i");
        try {
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            const request = await axios.post('/parametre/programmation/new', formData);
            const response = request.data;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $('#save')[0].reset();
            table.ajax.reload();
            id_programmation = false;
            $("#ajout_modal").modal("hide")
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
    $("#modifier").on("click", async function(){
        if(!id_programmation){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectionner une ligne!',
            })
            return;
        }
        const icon = $("#modifier i");
        icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
        try {
            const request = await axios.get('/parametre/programmation/details/'+id_programmation);
            const response = request.data;
            // console.log(response)
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("body #modifier_modal #udpate").html(response)
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
    $("#udpate").on("submit", async (e) => {
        e.preventDefault();
        var formData = new FormData($("#udpate")[0])
        formData.append("annee_id", $("#annee").val());
        formData.append("element_id", $("#element").val());
        const icon = $("#udpate i");

        try {
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            const request = await axios.post('/parametre/programmation/update/'+id_programmation, formData);
            const response = request.data;
            $('#udpate')[0].reset();
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            table.ajax.reload();
            id_programmation = false;
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

    $("#supprimer").on("click", async function(){
        if(!id_programmation){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner un enseignant!',
            })
            return;
        }
        const icon = $("#supprimer i");
        icon.removeClass('fa-trash').addClass("fa-spinner fa-spin ");
        var formData = new FormData()
        formData.append("programmation", id_programmation);
        var res = confirm('Vous voulez vraiment supprimer cette programmation ?');
        if(res == 1){
            try {
                const request = await axios.post('/parametre/programmation/delete',formData);
                const response = request.data;
                id_programmation = null;
                table.ajax.reload();
                id_programmation = null;
                icon.addClass('fa-trash').removeClass("fa-spinner fa-spin ");
                Toast.fire({
                    icon: 'success',
                    title: 'programmation bien Supprimer',
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

    $("#duplication").on("click", async function(){
        if($('#annee').val() == "" ){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une formation et une annee!',
            })
            return;
        }
        const icon = $("#duplication i");
        icon.removeClass('fa-clone').addClass("fa-spinner fa-spin ");
        var formData = new FormData()
        formData.append("promotion", $('#promotion').val());
        formData.append("annee", $('#annee').val());
        var res = confirm('Vous voulez vraiment dupliquer les programmations ? Si oui, merci de verifier d\'abord l\'annee ouverte pour cette formation');
        if(res == 1){
            try {
                const request = await axios.post('/parametre/programmation/duplication',formData);
                const response = request.data;
                table.ajax.reload();
                icon.addClass('fa-clone').removeClass("fa-spinner fa-spin ");
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
                icon.addClass('fa-clone').removeClass("fa-spinner fa-spin ");
            }
        }
    })
})


