$(document).ready(function () {
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
    let id_planning = false;
    let ids_planning = [];
    var table_gestion_planification = $("#datables_gestion_planification").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/planification/gestions/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        scrollX: true,
        drawCallback: function () {
            ids_planning.forEach((e) => {
                $("body tr#" + e)
                .find("input")
                .prop("checked", true);
            });
            $("body tr#" + id_planning).addClass('active_databales');
        },
        preDrawCallback: function(settings) {
            if ($.fn.DataTable.isDataTable('#datables_gestion_planification')) {
                var dt = $('#datables_gestion_planification').DataTable();

                //Abort previous ajax request if it is still in process.
                var settings = dt.settings();
                if (settings[0].jqXHR) {
                    settings[0].jqXHR.abort();
                }
            }
        },
        language: datatablesFrench,
    });
    $("select").select2();
    $("#etablissement").on('change', async function (){
        const id_etab = $(this).val();
        table_gestion_planification.columns().search("");
        let response = ""
        if(id_etab != "") {
            table_gestion_planification.columns(0).search(id_etab).draw();
            if($("#semaine").val() != ""){
                table_gestion_planification.columns(6).search($("#semaine").val())
            }
            if($("#semaine_day").val() != ""){
                table_gestion_planification.columns(11).search($("#semaine_day").val())
            }
            if($("#professeur").val() != ""){
                table_gestion_planification.columns(7).search($("#professeur").val())
            }
            if($("#grade").val() != ""){
                table_gestion_planification.columns(8).search($("#grade").val())
            }
            if($("#annuler").val() != ""){
                table_gestion_planification.columns(9).search($("#annuler").val())
            }
            if($("#valide").val() != ""){
                table_gestion_planification.columns(10).search($("#valide").val())
            }
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        }else{
            table_gestion_planification.columns().search("").draw();
            if($("#semaine").val() != ""){
                table_gestion_planification.columns(6).search($("#semaine").val())
            }
            if($("#semaine_day").val() != ""){
                table_gestion_planification.columns(11).search($("#semaine_day").val())
            }
            if($("#professeur").val() != ""){
                table_gestion_planification.columns(7).search($("#professeur").val())
            }
            if($("#grade").val() != ""){
                table_gestion_planification.columns(8).search($("#grade").val())
            }
            if($("#annuler").val() != ""){
                table_gestion_planification.columns(9).search($("#annuler").val())
            }
            if($("#valide").val() != ""){
                table_gestion_planification.columns(10).search($("#valide").val())
            }
        }
        $('#semestre_day').html('').select2();
        $('#semestre').html('').select2();
        $('#module').html('').select2();
        $('#element').html('').select2();
        $('#promotion').html('').select2();
        $('#formation').html(response).select2();
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        table_gestion_planification.columns().search("");
        if($("#semaine").val() != ""){
            table_gestion_planification.columns(6).search($("#semaine").val())
        }
        if($("#semaine_day").val() != ""){
            table_gestion_planification.columns(11).search($("#semaine_day").val())
        }
        if($("#professeur").val() != ""){
            table_gestion_planification.columns(7).search($("#professeur").val())
        }
        if($("#grade").val() != ""){
            table_gestion_planification.columns(8).search($("#grade").val())
        }
        if($("#annuler").val() != ""){
            table_gestion_planification.columns(9).search($("#annuler").val())
        }
        if($("#valide").val() != ""){
            table_gestion_planification.columns(10).search($("#valide").val())
        }
        let response = ""
        if(id_formation != "") {
            table_gestion_planification.columns(1).search(id_formation).draw();
            const request = await axios.get('/api/promotion/'+id_formation);
            response = request.data
        }else{
            table_gestion_planification.columns(0).search($("#etablissement").val()).draw();
        }
        $('#semestre_day').html('').select2();
        $('#semestre').html('').select2();
        $('#module').html('').select2();
        $('#element').html('').select2();
        $('#promotion').html(response).select2();
    })
    $("#promotion").on('change', async function (){
        const id_promotion = $(this).val();
        table_gestion_planification.columns().search("");
        if($("#semaine").val() != ""){
            table_gestion_planification.columns(6).search($("#semaine").val())
        }
        if($("#semaine_day").val() != ""){
            table_gestion_planification.columns(11).search($("#semaine_day").val())
        }
        if($("#professeur").val() != ""){
            table_gestion_planification.columns(7).search($("#professeur").val())
        }
        if($("#grade").val() != ""){
            table_gestion_planification.columns(8).search($("#grade").val())
        }
        if($("#annuler").val() != ""){
            table_gestion_planification.columns(9).search($("#annuler").val())
        }
        if($("#valide").val() != ""){
            table_gestion_planification.columns(10).search($("#valide").val())
        }
        if(id_promotion != "") {
            table_gestion_planification.columns(2).search(id_promotion).draw();
            const request = await axios.get('/api/semestre/'+id_promotion);
            response = request.data
        }else{
            table_gestion_planification.columns(1).search($("#formation").val()).draw();
        }
        $('#semestre_day').html('').select2();
        $('#semestre').html('').select2();
        $('#module').html('').select2();
        $('#element').html('').select2();
        $('#semestre').html(response).select2();
    })
    $("#semestre").on('change', async function (){
        const id_semestre = $(this).val();
        table_gestion_planification.columns().search("");
        if($("#semaine").val() != ""){
            table_gestion_planification.columns(6).search($("#semaine").val())
        }
        if($("#semaine_day").val() != ""){
            table_gestion_planification.columns(11).search($("#semaine_day").val())
        }
        if($("#professeur").val() != ""){
            table_gestion_planification.columns(7).search($("#professeur").val())
        }
        if($("#grade").val() != ""){
            table_gestion_planification.columns(8).search($("#grade").val())
        }
        if($("#annuler").val() != ""){
            table_gestion_planification.columns(9).search($("#annuler").val())
        }
        if($("#valide").val() != ""){
            table_gestion_planification.columns(10).search($("#valide").val())
        }
        if(id_semestre != "") {
            const request = await axios.get('/api/module/'+id_semestre);
            table_gestion_planification.columns(3).search(id_semestre).draw();
            response = request.data
        }else{
            table_gestion_planification.columns(2).search($("#promotion").val()).draw();
        }
        $('#element').html('').select2();
        $('#module').html(response).select2();
    })
    $("#module").on('change', async function (){
        const id_module = $(this).val();
        table_gestion_planification.columns().search("");
        if($("#semaine").val() != ""){
            table_gestion_planification.columns(6).search($("#semaine").val())
        }
        if($("#semaine_day").val() != ""){
            table_gestion_planification.columns(11).search($("#semaine_day").val())
        }
        if($("#professeur").val() != ""){
            table_gestion_planification.columns(7).search($("#professeur").val())
        }
        if($("#grade").val() != ""){
            table_gestion_planification.columns(8).search($("#grade").val())
        }
        if($("#annuler").val() != ""){
            table_gestion_planification.columns(9).search($("#annuler").val())
        }
        if($("#valide").val() != ""){
            table_gestion_planification.columns(10).search($("#valide").val())
        }
        if(id_module != "") {
            table_gestion_planification.columns(4).search(id_module).draw();
            const request = await axios.get('/api/element/'+id_module);
            response = request.data
        }else{
            table_gestion_planification.columns(3).search($("#semestre").val()).draw();
        }

        $('#element').html(response).select2();
    })
    $("#element").on('change', async function (){
        const id_element = $(this).val();
        table_gestion_planification.columns().search("");
        if($("#semaine").val() != ""){
            table_gestion_planification.columns(6).search($("#semaine").val())
        }
        if($("#semaine_day").val() != ""){
            table_gestion_planification.columns(11).search($("#semaine_day").val())
        }
        if($("#professeur").val() != ""){
            table_gestion_planification.columns(7).search($("#professeur").val())
        }
        if($("#grade").val() != ""){
            table_gestion_planification.columns(8).search($("#grade").val())
        }
        if($("#annuler").val() != ""){
            table_gestion_planification.columns(9).search($("#annuler").val())
        }
        if($("#valide").val() != ""){
            table_gestion_planification.columns(10).search($("#valide").val())
        }
        table_gestion_planification.columns(5).search(id_element).draw();
    })
    $("#semaine").on('change', async function (){
        const semaine = $(this).val();
        table_gestion_planification.columns(6).search(semaine).draw();
    })
    $("#professeur").on('change', async function (){
        const id_prof = $(this).val();
        table_gestion_planification.columns(7).search(id_prof).draw();
    })
    $("#grade").on('change', async function (){
        const grade = $(this).val();
        table_gestion_planification.columns(8).search(grade).draw();
    })
    $("#annuler").on('change', async function (){
        const annuler = $(this).val();
        table_gestion_planification.columns(9).search(annuler).draw();
    })
    $("#valider").on('change', async function (){
        const valider = $(this).val();
        table_gestion_planification.columns(10).search(valider).draw();
    })
    $("#semaine_day").on('change', async function (){
        const semaine_day = $(this).val();
        console.log(semaine_day)
        table_gestion_planification.columns(11).search(semaine_day).draw();
    })
    // $("#semaine_day").select2({
    //     minimumInputLength: 10,  // required enter 3 characters or more
    //     allowClear: true,
    //     placeholder: '2022-10-10',
    //     language: "fr",
    //     ajax: {
    //        dataType: 'json',
    //        url: '/planification/gestions/findSemainePlanning',  
    //        delay: 5,  // ini bebas mau di pake atau tidak
    //        data: function(params) {
    //          return {
    //            search: params.term
    //          }
    //        },
    //        processResults: function (data, page) {
    //         console.log(data)
           
    //         var list = {
    //             text: "Semaine " +data.nsemaine +" de: "+data.debut + " à " +data.fin,
    //             id: data.id
    //         }

    //         return {
    //             results:  [list]
    //         };
    //      },
    //    }
    // })
    $('body').on('dblclick','#datables_gestion_planification tbody tr',function (e) {
        e.preventDefault();
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_planning = null;
        } else {
            $("#datables_gestion_planification tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_planning = $(this).attr('id');
        }
    })
    $('body').on('click','#datables_gestion_planification tbody tr',function (e) {
        e.preventDefault();
        const input = $(this).find("input");
        if (input.hasClass('check_reg')) {
            return;
        }
        else{
            if(input.is(":checked")){
                input.prop("checked",false);
                const index = ids_planning.indexOf(input.attr("data-id"));
                ids_planning.splice(index,1);
            }else{
                input.prop("checked",true);
                ids_planning.push(input.attr("data-id"));
            }
        }
    })
    
    $('body').on('click','#supprimer', async function (e) {
        e.preventDefault();
        if(ids_planning.length === 0 ){
            Toast.fire({
            icon: 'error',
            title: 'Merci de Choisir au moins une ligne',
            })
            return;
        }
        var res = confirm('Vous voulez vraiment supprimer cette enregistrement ?');
        if(res == 1){
            const icon = $("#supprimer i");
            icon.removeClass('fa-trash').addClass("fa-spinner fa-spin");
            var formData = new FormData();
            formData.append('ids_planning', JSON.stringify(ids_planning)); 
            try {
                const request = await axios.post('/planification/gestions/gestion_delete_planning',formData);
                const response = request.data;
                Toast.fire({
                    icon: 'success',
                    title: response,
                })
                ids_planning = []
                table_gestion_planification.ajax.reload(null,false);
                icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
            } catch (error) {
                const message = error.response.data;
                icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
            }
        }  
    })
    
    $('body').on('click','#verifier', async function (e) {
        e.preventDefault();
        if(ids_planning.length === 0 ){
            Toast.fire({
            icon: 'error',
            title: 'Merci de Choisir au moins une ligne',
            })
            return;
        }
        var res = confirm('Vous voulez vraiment verifier cette enregistrement ?');
        if(res == 1){
            const icon = $("#verifier i");
            icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
            var formData = new FormData();
            formData.append('ids_planning', JSON.stringify(ids_planning)); 
            try {
                const request = await axios.post('/planification/gestions/gestion_verifier_planning',formData);
                const response = request.data;
                Toast.fire({
                    icon: 'success',
                    title: response,
                })
                ids_planning = []
                table_gestion_planification.ajax.reload(null,false);
                icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
            } catch (error) {
                const message = error.response.data;
                icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
            }
        }  
    })

    $('body').on('click','#annulation', async function (e) {
        e.preventDefault();
        if(!id_planning){
            Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir une ligne',
            })
            return;
        }
        $('#annuler_planning_modal').modal("show");
        // setTimeout(() => {
        //     $('#annuler_planning_modal').modal("hide");
        // }, 1000);
    })
    
    
    $("body #motif_annuler").on('change', async function (){
        if ($('#motif_annuler').val() == "Autre" ) {
            $("body #autre_motif").removeClass('d-none').addClass('d-block')
        }else{
            $("body #autre_motif").removeClass('d-block').addClass('d-none')
        }
    })
    $('body').on('click','#Annuler_planning', async function (e) {
        e.preventDefault();
        // if(ids_planning.length === 0 ){
        //     Toast.fire({
        //     icon: 'error',
        //     title: 'Merci de Choisir au moins une ligne',
        //     })
        //     return;
        // }
        
        if(!id_planning){
            Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir une ligne',
            })
            return;
        }
        if($('#motif_annuler').val() == "" ){
            Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir Le Motif d\'annulation',
            })
            return;
        }
        // alert($('#annuler_select').val());
        var res = confirm('Vous voulez vraiment Annuler cette Seance ?');
        if(res == 1){
            const icon = $("#Annuler_planning i");
            icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
            var formData = new FormData();
            // formData.append('ids_planning', JSON.stringify(ids_planning)); 
            formData.append('motif_annuler', $('#motif_annuler').val()); 
            formData.append('autre_motif', $('#autre_motif').val()); 
            try {
                // const request = await axios.post('/planification/gestions/gestion_annuler_planning',formData);
                const request = await axios.post('/planification/gestions/gestion_annuler_planning/'+id_planning,formData);
                const response = request.data;
                Toast.fire({
                    icon: 'success',
                    title: response,
                })
                // ids_planning = []
                id_planning = false;
                $('#annuler_planning_modal').modal("hide");
                table_gestion_planification.ajax.reload(null,false);
                icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
            } catch (error) {
                const message = error.response.data;
                icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
                Toast.fire({
                    icon: 'error',
                    title: message,
                })
            }
        }  
    })
    $("body").on("click", '#list_absence', function (e) {
        e.preventDefault();
        if(!id_planning){
            Toast.fire({
                icon: 'error',
                title: 'Merci de Selectionner une Seance',
            })
            return;
        }
        window.open('/planification/gestions/GetAbsenceByGroupe_gestion/'+id_planning, '_blank');
    });
    $("body").on("click", '#fiche_sequence', async function (e) {
        e.preventDefault();
        if(!id_planning){
            Toast.fire({
                icon: 'error',
                title: 'Merci de Selectionner une Seance',
            })
            return;
        }
        window.open('/planification/gestions/Getsequence_gestion/'+id_planning, '_blank');
    });

    $('body').on('click','#validation', async function (e) {
        e.preventDefault();
        if(!id_planning){
            Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir une ligne',
            })
            return;
        }
        $('#observation_modal').modal("show");
    })

    $("body").on('submit','#enseignant_assurer_save', async function (e){
        e.preventDefault();
        var formData = new FormData(this);
        formData.append('seance', id_planning)
        // console.log(formData);
        let modalAlert =  $("#observation_modal .modal-body .alert");
        modalAlert.remove();
        const icon = $("#enseignant_assurer_save .btn i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        try{
            const request = await  axios.post('/planification/gestions/valider_observation_planning',formData)
            const data = request.data;
            $("#observation_modal .modal-body").prepend(
                `<div class="alert alert-success">${data}</div>`
            ); 
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
            table_gestion_planification.ajax.reload(null,false);
            // alltimes()
            setTimeout(() => {
                $('#observation_modal').modal("hide");
            }, 3000);
        }catch(error){
            const message = error.response.data;
            // console.log(error, error.response);
            modalAlert.remove();
            $("#observation_modal .modal-body").prepend(
                `<div class="alert alert-danger">${message}</div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        }
        setTimeout(() => {
            $("#observation_modal .modal-body .alert").remove();
         }, 3000);
    })
    
    // $('body').on('click','#validation', async function (e) {
    //     e.preventDefault();
    //     if(!id_planning){
    //         Toast.fire({
    //             icon: 'error',
    //             title: 'Merci de Choisir une ligne',
    //         })
    //         return;
    //     }
    //     const icon = $("#validation i");
    //     icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
    //     // var formData = new FormData();
    //     // formData.append('ids_planning', JSON.stringify(ids_planning));
    //     try {
    //         const request = await axios.post('/planification/gestions/gestion_valider_planning/'+id_planning);
    //         const response = request.data;
    //         Toast.fire({
    //             icon: 'success',
    //             title: response,
    //         })
    //         table_gestion_planification.ajax.reload(null,false);
    //         icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
    //     } catch (error) {
    //         const message = error.response.data;
    //         icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
    //         Toast.fire({
    //             icon: 'error',
    //             title: message,
    //         })
    //     }
    // })

    $('body').on('click','#extraction', async function (e) {
        e.preventDefault();
        const icon = $("#extraction i");
        window.open('/planification/gestions/extraction_planning', '_blank');
    })
    $('body').on('click','#extraction_semaine', async function (e) {
        e.preventDefault();
        const icon = $("#extraction_semaine i");
        window.open('/planification/gestions/extraction_Week', '_blank');
    })
     
    
    $('body').on('click','#devalidation', async function (e) {
        e.preventDefault();
        if(!id_planning){
            Toast.fire({
                icon: 'error',
                title: 'Merci de Sélectionner une ligne',
            })
            return;
        }
        var res = confirm('Vous voulez vraiment dévalider cette seance ?');
        if(res == 1){
            const icon = $("#devalidation i");
            icon.removeClass('fa-times').addClass("fa-spinner fa-spin");
            try {
                const request = await axios.post('/planification/gestions/gestion_devalider_planning/'+id_planning);
                const response = request.data;
                Toast.fire({
                    icon: 'success',
                    title: response,
                })
                table_gestion_planification.ajax.reload(null,false);
                icon.addClass('fa-times').removeClass("fa-spinner fa-spin");
            } catch (error) {
                const message = error.response.data;
                icon.addClass('fa-times').removeClass("fa-spinner fa-spin");
                Toast.fire({
                    icon: 'error',
                    title: message,
                })
            }
        }  
    })
    $('body').on('click','#degenerer', async function (e) {
        e.preventDefault();
        if(!id_planning){
            Toast.fire({
                icon: 'error',
                title: 'Merci de Sélectionner une ligne',
            })
            return;
        }
        var res = confirm('Vous voulez vraiment dégénérer cette seance ?');
        if(res == 1){
            const icon = $("#degenerer i");
            icon.removeClass('fa-times').addClass("fa-spinner fa-spin");
            try {
                const request = await axios.post('/planification/gestions/gestion_degenerer_planning/'+id_planning);
                const response = request.data;
                Toast.fire({
                    icon: 'success',
                    title: response,
                })
                table_gestion_planification.ajax.reload(null,false);
                icon.addClass('fa-times').removeClass("fa-spinner fa-spin");
            } catch (error) {
                const message = error.response.data;
                icon.addClass('fa-times').removeClass("fa-spinner fa-spin");
                Toast.fire({
                    icon: 'error',
                    title: message,
                })
            }
        }
    })
})