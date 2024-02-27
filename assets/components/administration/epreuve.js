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

    let rattrapage = 0;
    let id_epreuve = null;
    let idEpreuves = [];
    let idInscriptions = [];
    
$(document).ready(function  () {
    var tableEpreuveNormal = $("#list_epreuve_normal").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/administration/epreuve/list/normal",
        processing: true,
        serverSide: true,
        deferRender: true,
        drawCallback: function () {
            idEpreuves.forEach((e) => {
                $("body tr#" + e)
                .find("input")
                .prop("checked", true);
            });
            $("body tr#" + id_epreuve).addClass('active_databales')

        },
        preDrawCallback: function(settings) {
            if ($.fn.DataTable.isDataTable('#list_epreuve_normal')) {
                var dt = $('#list_epreuve_normal').DataTable();

                //Abort previous ajax request if it is still in process.
                var settings = dt.settings();
                if (settings[0].jqXHR) {
                    settings[0].jqXHR.abort();
                }
            }
        },
        language: datatablesFrench,
        });
    var tableEpreuveRattrapage = $("#list_epreuve_rattrapage").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/administration/epreuve/list/rattrapage",
        processing: true,
        serverSide: true,
        deferRender: true,
        drawCallback: function () {
            idEpreuves.forEach((e) => {
                $("body tr#" + e)
                .find("input")
                .prop("checked", true);
            });
            $("body tr#" + id_epreuve).addClass('active_databales')

        },
        preDrawCallback: function(settings) {
            if ($.fn.DataTable.isDataTable('#list_epreuve_rattrapage')) {
                var dt = $('#list_epreuve_rattrapage').DataTable();
                //Abort previous ajax request if it is still in process.
                var settings = dt.settings();
                if (settings[0].jqXHR) {
                    settings[0].jqXHR.abort();
                }
            }
        },
        language: datatablesFrench,
    });
    // filters for session normale

    $("#etablissementNrml").select2();
    $("body #etablissementNrml").on('change', async function (){
        const id_etab = $(this).val();
        tableEpreuveNormal.columns().search("");
       
        let response = ""
        if(id_etab != "") {
            if ($("#dateEpreuveNrml").val() != "") {
                tableEpreuveNormal.columns(6).search($("#dateEpreuveNrml").val())
            }
            tableEpreuveNormal.columns(0).search(id_etab).draw();
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        }else{
            if ($("#dateEpreuveNrml").val() != "") {
                tableEpreuveNormal.columns(6).search($("#dateEpreuveNrml").val()).draw();
            }else{
                tableEpreuveNormal.columns().search("").draw();
            }
        }
        $('#semestreNrml').html('').select2();
        $('#moduleNrml').html('').select2();
        $('#elementNrml').html('').select2();
        $('#promotionNrml').html('').select2();
        $('#formationNrml').html(response).select2();
    })
    $("body #formationNrml").on('change', async function (){
        const id_formation = $(this).val();
        tableEpreuveNormal.columns().search("");
        if ($("#dateEpreuveNrml").val() != "") {
            tableEpreuveNormal.columns(6).search($("#dateEpreuveNrml").val());
        }
        let response = ""
        if(id_formation != "") {
            tableEpreuveNormal.columns(1).search(id_formation).draw();
            const request = await axios.get('/api/promotion/'+id_formation);
            response = request.data
        }else{
            tableEpreuveNormal.columns(0).search($("body #etablissementNrml").val()).draw();
        }
        $('#semestreNrml').html('').select2();
        $('#moduleNrml').html('').select2();
        $('#elementNrml').html('').select2();
        $('#promotionNrml').html(response).select2();
    })
    $("body #promotionNrml").on('change', async function (){
        const id_promotion = $(this).val();
        tableEpreuveNormal.columns().search("");
        if ($("#dateEpreuveNrml").val() != "") {
            tableEpreuveNormal.columns(6).search($("#dateEpreuveNrml").val());
        }
        if(id_promotion != "") {
            tableEpreuveNormal.columns(2).search(id_promotion).draw();
            const request = await axios.get('/api/semestre/'+id_promotion);
            response = request.data
        }else{
            tableEpreuveNormal.columns(1).search($("body #formationNrml").val()).draw();
        }
        $('#semestreNrml').html('').select2();
        $('#moduleNrml').html('').select2();
        $('#elementNrml').html('').select2();
        $('#semestreNrml').html(response).select2();
    })
    $("body #semestreNrml").on('change', async function (){
        const id_semestre = $(this).val();
        tableEpreuveNormal.columns().search("");
        if ($("#dateEpreuveNrml").val() != "") {
            tableEpreuveNormal.columns(6).search($("#dateEpreuveNrml").val())
        }
        if(id_semestre != "") {
            const request = await axios.get('/api/module/'+id_semestre);
            tableEpreuveNormal.columns(3).search(id_semestre).draw();
            response = request.data
        }else{
            tableEpreuveNormal.columns(2).search($("body #promotionNrml").val()).draw();
        }
        $('#moduleNrml').html('').select2();
        $('#elementNrml').html('').select2();
        $('#moduleNrml').html(response).select2();
    })
    $("body #moduleNrml").on('change', async function (){
        const id_module = $(this).val();
        tableEpreuveNormal.columns().search("");
        if ($("#dateEpreuveNrml").val() != "") {
            tableEpreuveNormal.columns(6).search($("#dateEpreuve").val())
        }
        if(id_module != "") {
            tableEpreuveNormal.columns(4).search(id_module).draw();
            const request = await axios.get('/api/element/'+id_module);
            response = request.data
        }else{
            tableEpreuveNormal.columns(3).search($("body #semestreNrml").val()).draw();
        }

        $('#elementNrml').html(response).select2();
    })
    $("body #elementNrml").on('change', async function (){
        const id_element = $(this).val();
        tableEpreuveNormal.columns().search("");
        if ($("#dateEpreuveNrml").val() != "") {
            tableEpreuveNormal.columns(6).search($("#dateEpreuveNrml").val())
        }
        tableEpreuveNormal.columns(5).search(id_element).draw();
    })
    $("#dateEpreuveNrml").on('change', async function (){
        const dateEpreuve = $(this).val();
        // console.log(dateEpreuve);
        tableEpreuveNormal.columns(6).search(dateEpreuve).draw();
    })

    // end filters session normale


    // filters for session rattrapage

    $("body #etablissementRatt").select2();
    $("body #etablissementRatt").on('change', async function (){
        const id_etab = $(this).val();
        tableEpreuveRattrapage.columns().search("");
       
        let response = ""
        if(id_etab != "") {
            if ($("#dateEpreuveRatt").val() != "") {
                tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val())
            }
            tableEpreuveRattrapage.columns(0).search(id_etab).draw();
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        }else{
            if ($("#dateEpreuveRatt").val() != "") {
                tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val()).draw();
            }else{
                tableEpreuveRattrapage.columns().search("").draw();
            }
        }
        $('#semestreRatt').html('').select2();
        $('#moduleRatt').html('').select2();
        $('#elementRatt').html('').select2();
        $('#promotionRatt').html('').select2();
        $('#formationRatt').html(response).select2();
    })
    $("body #formationRatt").on('change', async function (){
        const id_formation = $(this).val();
        tableEpreuveRattrapage.columns().search("");
        if ($("#dateEpreuveRatt").val() != "") {
            tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val());
        }
        let response = ""
        if(id_formation != "") {
            tableEpreuveRattrapage.columns(1).search(id_formation).draw();
            const request = await axios.get('/api/promotion/'+id_formation);
            response = request.data
        }else{
            tableEpreuveRattrapage.columns(0).search($("body #etablissementRatt").val()).draw();
        }
        $('#semestreRatt').html('').select2();
        $('#moduleRatt').html('').select2();
        $('#elementRatt').html('').select2();
        $('#promotionRatt').html(response).select2();
    })
    $("body #promotionRatt").on('change', async function (){
        const id_promotion = $(this).val();
        tableEpreuveRattrapage.columns().search("");
        if ($("#dateEpreuveRatt").val() != "") {
            tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val());
        }
        if(id_promotion != "") {
            tableEpreuveRattrapage.columns(2).search(id_promotion).draw();
            const request = await axios.get('/api/semestre/'+id_promotion);
            response = request.data
        }else{
            tableEpreuveRattrapage.columns(1).search($("body #formationRatt").val()).draw();
        }
        $('#semestreRatt').html('').select2();
        $('#moduleRatt').html('').select2();
        $('#elementRatt').html('').select2();
        $('#semestreRatt').html(response).select2();
    })
    $("body #semestreRatt").on('change', async function (){
        const id_semestre = $(this).val();
        tableEpreuveRattrapage.columns().search("");
        if ($("#dateEpreuveRatt").val() != "") {
            tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val())
        }
        if(id_semestre != "") {
            const request = await axios.get('/api/module/'+id_semestre);
            tableEpreuveRattrapage.columns(3).search(id_semestre).draw();
            response = request.data
        }else{
            tableEpreuveRattrapage.columns(2).search($("body #promotionRatt").val()).draw();
        }
        $('#moduleRatt').html('').select2();
        $('#elementRatt').html('').select2();
        $('#moduleRatt').html(response).select2();
    })
    $("body #moduleRatt").on('change', async function (){
        const id_module = $(this).val();
        tableEpreuveRattrapage.columns().search("");
        if ($("#dateEpreuveRatt").val() != "") {
            tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val())
        }
        if(id_module != "") {
            tableEpreuveRattrapage.columns(4).search(id_module).draw();
            const request = await axios.get('/api/element/'+id_module);
            response = request.data
        }else{
            tableEpreuveRattrapage.columns(3).search($("body #semestreRatt").val()).draw();
        }

        $('#elementRatt').html(response).select2();
    })
    $("body #elementRatt").on('change', async function (){
        const id_element = $(this).val();
        tableEpreuveRattrapage.columns().search("");
        if ($("#dateEpreuveRatt").val() != "") {
            tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val())
        }
        tableEpreuveRattrapage.columns(5).search(id_element).draw();
    })
    $("#dateEpreuveRatt").on('change', async function (){
        const dateEpreuve = $(this).val();
        tableEpreuveRattrapage.columns(6).search(dateEpreuve).draw();
    })

    // end filters session rattrappage
    
    $('body').on('click','#list_epreuve_normal tbody tr',function () {
        const input = $(this).find("input");
        if(input.is(":checked")){
            input.prop("checked",false);
            const index = idEpreuves.indexOf(input.attr("id"));
            idEpreuves.splice(index,1);
        }else{
            input.prop("checked",true);
            idEpreuves.push(input.attr("id"));
        }
    })
    $('body').on('click','#list_epreuve_rattrapage tbody tr',function () {
        const input = $(this).find("input");
        if(input.is(":checked")){
            input.prop("checked",false);
            const index = idEpreuves.indexOf(input.attr("id"));
            idEpreuves.splice(index,1);
        }else{
            input.prop("checked",true);
            idEpreuves.push(input.attr("id"));
        }
    })
    $('body').on('dblclick','#list_epreuve_normal tbody tr',function () {
        // const input = $(this).find("input");
        
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            $('#inscription-modal').attr('disabled', true);

            id_epreuve = null;
        } else {
            $("#list_epreuve_normal tbody tr").removeClass('active_databales');
            $("#list_epreuve_rattrapage tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_epreuve = $(this).attr('id');
           
        }
        
    })
    $('body').on('dblclick','#list_epreuve_rattrapage tbody tr',function () {
        // const input = $(this).find("input");
        
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            $('#inscription-modal').attr('disabled', true);

            id_epreuve = null;
        } else {
            $("#list_epreuve_normal tbody tr").removeClass('active_databales');
            $("#list_epreuve_rattrapage tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_epreuve = $(this).attr('id');
           
        }
        
    })
    $('.nav-pills a').on('click', function (e) {
        $(this).tab('show')
        id_epreuve = null;
        idEpreuves = [];
        $("#list_epreuve_normal tbody tr").removeClass('active_databales');
        $("#list_epreuve_rattrapage tbody tr").removeClass('active_databales');
        $("input").prop("checked",false);
        if ($(this).html() == 'Session normal') {
            rattrapage = 0;

        } else {
            rattrapage = 1;
        }   
    
    })
    $("#import_epreuve").on("click", () => {  
        $("#import_en_masse").modal("show")
        $("#import_en_masse .modal-body .alert").remove()
    })
    $("#epreuve_canvas").on('click', function () {
        window.open("/administration/epreuve/canvas", '_blank');
    })
    
    $("#import_epreuve_save").on("submit", async function(e) {
        e.preventDefault();
        let formData = new FormData($(this)[0]);
        let modalAlert = $("#import_en_masse .modal-body .alert")
    
        modalAlert.remove();
        const icon = $("#epreuve_enregistre i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        
        try {
          const request = await axios.post('/administration/epreuve/import', formData);
          const response = request.data;
          $("#import_en_masse .modal-body").prepend(
            `<div class="alert alert-success">
                <p>${response.message}</p>
              </div>`
          );
          window.open("/"+response.file ,"_blank");
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
          tableEpreuveNormal.ajax.reload(null, false)
          tableEpreuveRattrapage.ajax.reload(null, false)
        } catch (error) {
          const message = error.response.data;
          console.log(error, error.response);
          modalAlert.remove();
          $("#import_en_masse .modal-body").prepend(
            `<div class="alert alert-danger">${message}</div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
          
        }
    })

    $("#affilier_etudiant").on('click' , async function (e) {
        e.preventDefault();
        if(rattrapage === 0) {
            // session normal
            if(idEpreuves.length ==0) {
                Toast.fire({
                    icon: 'error',
                    title: 'Veuillez cochez une ou plusieurs ligne!',
                })
                return;
            }
            const icon = $("#affilier_etudiant i");
            icon.removeClass('fa-link').addClass("fa-spinner fa-spin");
            
            try {
                let formData = new FormData();
                formData.append("epreuves", JSON.stringify(idEpreuves))
                const request = await axios.post('/administration/epreuve/affiliation_normale', formData);
                const response = request.data;
                icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");
                if(response.total > 0) {
                    window.open("/"+response.zipname ,"_blank");
                } else {
                    Toast.fire({
                        icon: 'info',
                        title: "Epreuves déja affilier ou valider",
                    }) 
                }
                tableEpreuveNormal.ajax.reload(null, false)
                tableEpreuveRattrapage.ajax.reload(null, false)
                idEpreuves = [];
            } catch (error) {
                console.log(error)
                const message = error.response.data;
                Toast.fire({
                    icon: 'error',
                    title: message,
                }) 
                icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");
                
            }
        } else {
            if(idEpreuves.length ==0) {
                Toast.fire({
                    icon: 'error',
                    title: 'Veuillez cochez une ou plusieurs ligne!',
                })
                return;
            }
            const icon = $("#affilier_etudiant i");
            icon.removeClass('fa-link').addClass("fa-spinner fa-spin");
            try {
                let formData = new FormData();
                formData.append("epreuves", JSON.stringify(idEpreuves))
                const request = await axios.post('/administration/epreuve/affiliation_rattrapage_Automatique', formData);
                const response = request.data;
                icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");
                if(response.total > 0) {
                    window.open("/"+response.zipname ,"_blank");
                } else {
                    Toast.fire({
                        icon: 'info',
                        title: "Epreuves déja affilier ou valider",
                    }) 
                }
                tableEpreuveNormal.ajax.reload(null, false)
                tableEpreuveRattrapage.ajax.reload(null, false)
                idEpreuves = [];
            } catch (error) {
                console.log(error)
                const message = error.response.data;
                Toast.fire({
                    icon: 'error',
                    title: message,
                }) 
                icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");
                
            }
            // if(!id_epreuve) {
            //     Toast.fire({
            //         icon: 'error',
            //         title: 'Veuillez selection une ligne!',
            //     })
            //     return;
            // }
            // const icon = $("#affilier_etudiant i");
            // icon.removeClass('fa-link').addClass("fa-spinner fa-spin");
            
            
            // try {
            //     const request = await axios.get('/administration/epreuve/etudiants/'+id_epreuve);
            //     const response = request.data;    
            //     icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

            //     $(".list_etudiants").html(response)
            //     $(".check_all_etudiant").prop("checked",false);
            //     $("#affilier_list_etudiant").modal("show");
            //     $("#affilier_list_etudiant .modal-body .alert").remove();
                
            // } catch (error) {
            //     console.log(error)
            //     const message = error.response.data;
            //     Toast.fire({
            //         icon: 'error',
            //         title: message,
            //     })
            //     icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");
                
            // }

        }
    })


    $('body').on('click','.check_etudiant',function () {
        const index = idInscriptions.indexOf($(this).val());
        if(index != -1){
            idInscriptions.splice(index,1);
        }else{
            idInscriptions.push($(this).val());
        }
        console.log(idInscriptions);

    })
    $('body').on('click','.check_all_etudiant',function () {
        idInscriptions = [];
        const inscriptions = $(".check_etudiant");
        if($(".check_all_etudiant").prop('checked') == true) {
            inscriptions.prop("checked",true);
            inscriptions.map(function() {
                idInscriptions.push(this.value);
             });
        } else {
            inscriptions.prop("checked",false);
        }
        console.log(idInscriptions);
    })
    $("#cloture_epreuve").on('click', async function(e) {
        e.preventDefault();
        if(idEpreuves.length ==0) {
            Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!',
            })
            return;
        }
        const icon = $("#cloture_epreuve i");
        icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
        let formData = new FormData();
        formData.append("idEpreuves",  JSON.stringify(idEpreuves))
        try {
            const request = await axios.post('/administration/epreuve/cloture', formData);
            const response = request.data;    
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            Toast.fire({
                icon: 'success',
                title: response,
            }) 
            idEpreuves = []
            tableEpreuveRattrapage.ajax.reload(null, false);
            tableEpreuveNormal.ajax.reload(null, false);
        } catch (error) {
            console.log(error)
            const message = error.response.data;
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            Toast.fire({
                icon: 'error',
                title: message,
            })
            
        }
    })
    $("#decloturer_epreuve").on('click', async function(e) {
        e.preventDefault();
        if(idEpreuves.length ==0) {
            Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!',
            })
            return;
        }
        const icon = $("#decloturer_epreuve i");
        icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
        let formData = new FormData();
        formData.append("idEpreuves",  JSON.stringify(idEpreuves))
        try {
            const request = await axios.post('/administration/epreuve/decloture', formData);
            const response = request.data;    
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            Toast.fire({
                icon: 'success',
                title: response,
            }) 
            idEpreuves = []
            tableEpreuveRattrapage.ajax.reload(null, false);
            tableEpreuveNormal.ajax.reload(null, false);
        } catch (error) {
            console.log(error)
            const message = error.response.data;
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            Toast.fire({
                icon: 'error',
                title: message,
            })
            
        }
    })

    $("#save_list_etudiant").on('click', async function(e) {
        e.preventDefault();
        if(idInscriptions.length == 0) {
            Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!',
            })
            return;
        }
        const button = $('#save_list_etudiant');
        const icon = button.find('i');
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        let modalAlert = $("#affilier_list_etudiant .modal-body .alert")
        modalAlert.remove();
        let formData = new FormData();
        formData.append("idInscriptions", JSON.stringify(idInscriptions))
        formData.append("idEpreuve", id_epreuve)
        button.addClass("disabled");
        try {
            const request = await axios.post('/administration/epreuve/affiliation_rattrapage', formData);
            const response = request.data;    
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
            $("#affilier_list_etudiant .modal-body").prepend(
                `<div class="alert alert-success">
                    <p>${response}</p>
                  </div>`
            );
            $(".list_etudiants").empty()
            tableEpreuveRattrapage.ajax.reload(null, false);
            tableEpreuveNormal.ajax.reload(null, false);
            idInscriptions = []
            $("#affilier_list_etudiant").modal("hide");
            button.removeClass("disabled");
        } catch (error) {
            console.log(error)
            const message = error.response.data;
            modalAlert.remove();
            $("#affilier_list_etudiant .modal-body").prepend(
                `<div class="alert alert-danger">${message}</div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
            button.removeClass("disabled");
            
        }
    })

    $('select').select2();
    $("#etablissement").on('change', async function (){
        const id_etab = $(this).val();
        let response = ""
        if(id_etab != "") {
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        }
        $('#element').html('').select2();
        $('#module').html('').select2();
        $('#semestre').html('').select2();
        $('#promotion').html('').select2();
        $('#formation').html(response).select2();
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        let response = ""
        if(id_formation != "") {
            const request = await axios.get('/api/promotion/'+id_formation);
            response = request.data
        }
        $('#element').html('').select2();
        $('#module').html('').select2();
        $('#semestre').html('').select2();
        $('#promotion').html(response).select2();
    })
    $("#promotion").on('change', async function (){
        const id_promotion = $(this).val();
        if(id_promotion != "") {
            const request = await axios.get('/api/semestre/'+id_promotion);
            response = request.data
            const requestt = await axios.get('/api/niv1/'+id_promotion);
            niv1 = requestt.data 
        }
        $('#element').html('').select2();
        $('#module').html('').select2();
        $('#semestre').html(response).select2();
    })
    $("#semestre").on('change', async function (){
        const id_semestre = $(this).val();
        if(id_semestre != "") {
            const request = await axios.get('/api/module/'+id_semestre);
            response = request.data
        }
        $('#element').html('').select2();
        $('#module').html(response).select2();
    })
    $("#module").on('change', async function (){
        const id_module = $(this).val();
        if(id_module != "") {
            const request = await axios.get('/api/element/'+id_module);
            response = request.data
        }
        $('#element').html(response).select2();
    })
    
    $("#ajouter_epreuve").on("click", function(e){  
        e.preventDefault();
        $("#ajouter_epreuve-modal").modal("show")
    })
    $("body").on('submit', "#add_epreuve", async (e) => {
        e.preventDefault();
        // var res = confirm('Vous voulez vraiment ajouter cette enregistrement ?');
        // if(res == 1){
          var formData = new FormData($('#add_epreuve')[0]);
          let modalAlert = $("#ajouter_epreuve-modal .modal-body .alert")
          modalAlert.remove();
          const icon = $("#ajouter_epreuve-modal button i");
          icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
          try {
            const request = await axios.post('/administration/epreuve/add_epreuve', formData);
            const response = request.data;
            $("#ajouter_epreuve-modal .modal-body").prepend(
              `<div class="alert alert-success" style="width: 98%;margin: 0 auto;">
                  <p>${response}</p>
                </div>`
            );
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
            tableEpreuveNormal.ajax.reload(null, false)
            tableEpreuveRattrapage.ajax.reload(null, false)
          }catch (error) {
            const message = error.response.data;
            modalAlert.remove();
            $("#ajouter_epreuve-modal .modal-body").prepend(
              `<div class="alert alert-danger" style="width: 98%;margin: 0 auto;">${message}</div>`
            );
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
          }
        // }
        setTimeout(() => {
          $(".modal-body .alert").remove();
        }, 2500)  
    })
    $("#import_epreuve").on("click", () => {  
        $("#import_en_masse").modal("show")
        $("#import_en_masse .modal-body .alert").remove()
    })
    $('#epreuve_imprimer').on('click', async function(e){
        e.preventDefault();
        if(!id_epreuve) {
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!',
            })
            return;
        }
        const icon = $("#epreuve_imprimer i");
        icon.removeClass('fa-copy').addClass("fa-spinner fa-spin");

        try {
            const request = await axios.get('/administration/epreuve/checkifanonymat/'+id_epreuve);
            const response = request.data;
            console.log(response)
            icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");
            $("#imprimer_epreuve").modal("show")
            $('#imprimer_epreuve .etudiant_info').html(response.html);
            $('#imprimer_epreuve .epreuve_title').html(response.id);
            if(response.anonymat == "oui") {
                $('#imprimer_epreuve .actions').html(
                    `<a href="#" class="btn btn-success mt-3" id="impression_clair">Impression Clair</a>
                    <a href="#" class="btn btn-secondary mt-3" id="impression_anonymat">Impression Anonymat</a>
                    <a href="#" class="btn btn-success mt-3" id="extraction_emargement">Extraction Emargement</a>`
                );
            } else {
                $('#imprimer_epreuve .actions').html(
                    `<a href="#" class="btn btn-success mt-3" id="impression_clair">Impression Clair</a>
                    <a href="#" class="btn btn-success mt-3" id="extraction_emargement">Extraction Emargement</a>`
                );
            }

        } catch (error) {
            console.log(error)
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            }) 
            icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");

        }
    })
    $('#modifier_epreuve').on('click', async function(e){
        e.preventDefault();
        if(!id_epreuve) {
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!',
            })
            return;
        }
        const icon = $("#modifier_epreuve i");
        icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");

        try {
            const request = await axios.get('/administration/epreuve/edit/'+id_epreuve);
            const response = request.data;
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("#modifier_epreuve-modal").modal("show")
            $("#modifier_epreuve-modal #edit_epreuve").html(response);    
            $('select').select2();     
        } catch (error) {
            console.log(error)
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            }) 
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

        }
    })
    $('#edit_epreuve').on('submit', async function(e){
        e.preventDefault();
        
        const icon = $("#edit_epreuve button i");
        icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
        let formData = new FormData($(this)[0]);
        try {
            const request = await axios.post('/administration/epreuve/update/'+id_epreuve, formData);
            const response = request.data;
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
            $("#modifier_epreuve-modal").modal("hide")
            Toast.fire({
                icon: 'success',
                title: 'Bien modifiée.',
            })
            tableEpreuveNormal.ajax.reload(null, false)
            tableEpreuveRattrapage.ajax.reload(null, false)
        } catch (error) {
            console.log(error)
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            }) 
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");

        }
    })

    $('body').on('click', '#impression_clair', function(e){
        e.preventDefault();
        window.open("/administration/epreuve/impression/"+id_epreuve+"/0", '_blank');
    })
    $('body').on('click', '#impression_anonymat', function(e){
        e.preventDefault();
        window.open("/administration/epreuve/impression/"+id_epreuve+"/1", '_blank');
    })
    $('body').on('click', '#extraction_emargement', function(e){
        e.preventDefault();
        if(!id_epreuve) {
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!',
            })
            return;
        }
        window.open('/administration/epreuve/extraction_emargement/'+id_epreuve, '_blank');
    })
    $('#capitaliser_etudiant').on('click', async function(e){
        e.preventDefault();
        if(idEpreuves.length == 0) {
            Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!',
            })
            return;
        }
        const icon = $("#capitaliser_etudiant i");
        icon.removeClass('fab fa-get-pocket').addClass("fa fa-spinner fa-spin");
        let formData = new FormData();
        formData.append('idEpreuves', JSON.stringify(idEpreuves))
        try {
            const request = await axios.post('/administration/epreuve/capitaliser', formData);
            const response = request.data;
            console.log(response)
            icon.addClass('fab fa-get-pocket').removeClass("fa fa-spinner fa-spin ");
            if(response.count>0) {
                tableEpreuveNormal.ajax.reload(null, false)
                tableEpreuveRattrapage.ajax.reload(null, false)
                idEpreuves = [];
                window.open("/"+response.fileName ,"_blank");
            }else {
                Toast.fire({
                    icon: 'info',
                    title: "Epreuves non capitaliser",
                }) 
            }
        } catch (error) {
            console.log(error)
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            }) 
            icon.addClass('fab fa-get-pocket').removeClass("fa fa-spinner fa-spin ");
        }
    })

    $('body').on('click','#extraction_epv_valide', async function (e) {
        e.preventDefault();
        // xxxxxxxxxxxxxxxx
        // const icon = $("#extraction_epv_valide i");
        var etab = $("#etablissementNrml").val();
        if($("#etablissementNrml").val() == "") {
            etab = 0;
            
        }
        // console.log(etab);
        // return;
        window.open('/administration/epreuve/extraction_epreuve_valide/'+etab, '_blank');
    })
    $('body').on('click','#extraction_epv_valide_s2', async function (e) {
        e.preventDefault();
        // const icon = $("#extraction_epv_valide_s2 i");
        var etab = $("#etablissementNrml").val();
        if($("#etablissementNrml").val() == "") {
            etab = 0;
            
        }
        window.open('/administration/epreuve/extraction_epreuve_valide_s2/'+etab, '_blank');
    })
    $('body').on('click','#extraction_epv_affilier', async function (e) {
        e.preventDefault();
        // const icon = $("#extraction_epv_affilier i");
        var etab = $("#etablissementNrml").val();
        if($("#etablissementNrml").val() == "") {
            etab = 0;
            
        }
        window.open('/administration/epreuve/extraction_epv_affilier/'+etab, '_blank');
    })
    $('body').on('click','#open_upload_file', async function (e) {
        e.preventDefault();
        $('body #inscriptions_ids').click();
    })
    $('body').on('submit','#Affiler_inscriptions_ids', async function (e) {
        e.preventDefault();
        var res = confirm('L\'affiliation est definitive, vous etes sur ?');
        if(res == 1){
            const button = $('#Affiler_inscriptions_ids #Affiler_btn');
            const icon = button.find('i');
            icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
            let modalAlert = $("#affilier_list_etudiant .modal-body .alert")
            modalAlert.remove();
            let formData = new FormData($(this)[0]);
            formData.append("idEpreuve", id_epreuve)
            button.attr('disabled', true)
            // button.addClass("disabled");
            try {
                const request = await axios.post('/administration/epreuve/affiliation_ParInscriptions', formData);
                const response = request.data;    
                icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
                $("#affilier_list_etudiant .modal-body").prepend(
                    `<div class="alert alert-success">
                        <p>${response}</p>
                      </div>`
                );
                $(".list_etudiants").empty()
                $(this).trigger("reset");
                tableEpreuveRattrapage.ajax.reload(null, false);
                tableEpreuveNormal.ajax.reload(null, false);
                idInscriptions = []
                setTimeout(function() {
                    $("#affilier_list_etudiant .modal-body .alert").remove();
                }, 2000);
                $("#affilier_list_etudiant").modal("hide");
                // button.removeClass("disabled");
                button.attr('disabled', false)
                Toast.fire({
                    icon: 'success',
                    title: response,
                }) 
            } catch (error) {
                console.log(error)
                const message = error.response.data;
                modalAlert.remove();
                $("#affilier_list_etudiant .modal-body").prepend(
                    `<div class="alert alert-danger">${message}</div>`
                );
                icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
                setTimeout(function() {
                    $("#affilier_list_etudiant .modal-body .alert").remove();
                }, 2000);
                // button.removeClass("disabled");
                button.attr('disabled', false)
            } 
        }
    })
})