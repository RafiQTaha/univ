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
    const pills = () => {
        $('.nav-pills a').on('click', function (e) {
            $(this).tab('show');
        })
    }
    let id_semestre = false;
    let niv = false;
    var initialLocaleCode = "fr";
    let currentweek = false;
    let heur_debut = false;
    let heur_fin = false;
    const d = new Date();
    let day = d.getDay();
    let currentDay = false;
    let id_planning = false;
    let alltime = [];
    $('#calendar').fullCalendar({
        customButtons: {
            myCustomButton: {
                text: 'Imprimer',
                click: function () {
                    var currentWeek = moment($('#calendar').fullCalendar('getDate'), "MMDDYYYY").isoWeek();
                    var currentDate = moment($('#calendar').fullCalendar('getDate')).format('YYYY-MM-DD');
                    alert(currentWeek);
                }
            }
        },
        // dayClick: function(date, jsEvent, view) { 
        //     currentDate = date.get;Date()+"/"+date.getMonth()+"/"+date.getFullYear()  
        // },
            events: alltime,
        header: {
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,agendaWeek'
        },
        defaultView: 'agendaWeek',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        selectable: true,
        selectHelper: true,
        navLinks: true,
        height: 450,
        allDaySlot: false,
        locale: "fr",
        firstDay: 1,
        minTime: "08:00:00",
        maxTime: "18:01:00",
        select: function (start, end,date) {
            // if($('#semestre').val() != "" && $('#niv1').val() != "" ){
                currentDay = moment(start).format('YYYY-MM-DD');
                currentweek = moment(start, "MMDDYYYY").isoWeek();
                heur_debut= moment(start).format('HH:mm')
                heur_fin= moment(end).format('HH:mm')
                axios.get('/planification/planifications/planification_infos/'+79)
                .then(success => {
                    $('.modal-addform_planif .add_planning').html(success.data);
                    $('.modal-addform_planif #h_debut').val(heur_debut);
                    $('.modal-addform_planif #h_fin').val(heur_fin);
                    $('.modal-addform_planif select').select2();
                    $('#addform_planif-modal').modal("show");
                    pills()
                })
                .catch(err => {
                    // console.log(err);
                })
            // }
        },
        eventRender: function (event, element) {
            element.bind('dblclick', function () {
                id_planning = event.id;
                if (id_planning) {
                    let formData = new FormData();
                    axios.get('/planification/planifications/planification_infos_edit/'+id_planning)
                    .then(success => {
                        $('.modal-updateform_planif .update_planning').html(success.data);
                        $('.modal-updateform_planif select').select2();
                        $('#updateform_planif-modal').modal("show");
                        pills()
                    })
                    .catch(err => {
                        // console.log(err);
                    })
                }
            });
        },
        eventDrop: function (event, delta, revertFunc) { 
            edit(event);
        },
        eventResize: function (event, dayDelta, minuteDelta, revertFunc) { // si changement de longueur
            edit(event);
        },
    });
    $("body select").select2();
    // $("#nature_seance").select2();
    $("#salle").select2();
    const alltimes = async () => {
        try{
            // const request = await  axios.post('/planification/planifications/calendar/'+id_semestre+'/'+niv+'/')
            const request = await axios.post('/planification/planifications/calendar/79/4/')
            alltime = request.data;
            console.log(request.data)
            $("#calendar").fullCalendar('removeEvents'); 
            $("#calendar").fullCalendar('addEventSource', request.data); 
        }catch(error){
            // alltime = [];
            // console.log(error)
            // Toast.fire({
            //     icon: 'error',
            //     title: 'Some Error!!',
            // })
        }
    }
    alltimes()
    const edit = async (event) => {
        start = event.start.format('YYYY-MM-DD HH:mm:ss');
        if (event.end) {
            end = event.end.format('YYYY-MM-DD HH:mm:ss');
        } else {
            end = start;
        }
        id_emptime = event.id;
        let formData = new FormData();
        formData.append('start',start)
        formData.append('end',end)
        try{
            const request = await  axios.post('/planification/planifications/planifications_editEventDate/'+id_emptime,formData)
            if (request.data == 'ok') {
                Toast.fire({
                    icon: 'success',
                    title: 'Planification bien Modifier!!',
                })  
            }else{
                Toast.fire({
                    icon: 'error',
                    title: 'Planification a echoué!!',
                })
            }
        }catch(error){
            Toast.fire({
                icon: 'error',
                title: 'Some Error!!',
            })
        }
    }
    $("#etablissement").select2();
    $("#etablissement").on('change', async function (){
        const id_etab = $(this).val();
        let response = ""
        if(id_etab != "") {
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        }
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
        $('#semestre').html('').select2();
        $('#promotion').html(response).select2();
    })
    $("#promotion").on('change', async function (){
        const id_promotion = $(this).val();
        let response = ""
        $('#semestre').html(response).select2();
        $('#niv1').html(response).select2();
        $('#niv2').html(response).select2();
        $('#niv3').html(response).select2();
        if(id_promotion != "") {
            const request = await axios.get('/api/semestre/'+id_promotion);
            semestre = request.data            
            $('#semestre').html(semestre).select2();
            const requestt = await axios.get('/api/niv1/'+id_promotion);
            niv1 = requestt.data  
            $('#niv1').html(niv1).select2();
        }
    })
    $("#semestre").on('change', async function (){
        id_semestre = $(this).val();
        if(niv != ""){
            alltimes()
        }
    })
    $("#niv1").on('change', async function (){
        const niv1 = $(this).val();
        niv = $(this).val();
        if(id_semestre != ""){
            alltimes()
        }
        let response = ""
        if(niv1 != "") {
            const request = await axios.get('/api/niv2/'+niv1);
            response = request.data
        }else{
            alltime = [];
            $('#calendar').fullCalendar('refetchEvents');
        }
        $('#niv3').html("").select2();
        $('#niv2').html(response).select2();
    })
    $("#niv2").on('change', async function (){
        const niv2 = $(this).val();
        niv = $(this).val();
        if(id_semestre != ""){
            alltimes()
        }
        let response = ""
        if(niv2 != "") {
            const request = await axios.get('/api/niv3/'+niv2);
            response = request.data
        }else{
            alltime = [];
            $('#calendar').fullCalendar('refetchEvents');
        }
        $('#niv3').html(response).select2();
    })
    $("#niv3").on('change', async function (){
        niv = $(this).val();
        if(id_semestre != ""){
            alltimes()
        }
        if(niv2 == "") {
            alltime = [];
            $('#calendar').fullCalendar('refetchEvents');
        }
    })
    $("body").on('change','#module', async function (){
        const id_module = $(this).val();
        let response = ""
        if(id_module != "") {
            const request = await axios.get('/api/element/'+id_module);
            response = request.data
        }
        $('body #element').html(response).select2();
    })
    $("body").on('change','#nature_seance', async function (){
        const id_nature_seance = $(this).val();
        let id_element = $('#element').val();
        if(id_element != "" && id_nature_seance != "") {
            const request = await axios.get('/api/enseignantsByProgramme/'+id_element+'/'+id_nature_seance);
            response = request.data
            pills()
        }
        $('#enseignant').html(response).select2();
    })

    $("body").on('change','#element', async function (){
        const id_element = $(this).val();
        let id_nature_seance = $('#nature_seance').val();
        let response = ""
        if(id_element != "" && id_nature_seance != "") {
            const request = await axios.get('/api/enseignantsByProgramme/'+id_element+'/'+id_nature_seance);
            response = request.data
            pills()
        }
        $('#enseignant').html(response).select2();
    })
    $("body").on('submit','.form_add_planning', async function (e){
        e.preventDefault();
        var formData = new FormData(this);
        formData.append('n_semaine', currentweek);
        formData.append('day', currentDay)
        formData.append('groupe', niv)
        console.log(formData);
        let modalAlert =  $("#addform_planif-modal .modal-body .alert");
        modalAlert.remove();
        const icon = $(".form_add_planning .btn i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        try{
            const request = await  axios.post('/planification/planifications/planifications_calendar_add',formData)
            const data = request.data;
            $("#addform_planif-modal .modal-body").prepend(
                `<div class="alert alert-success">${data}</div>`
            ); 
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
            alltimes()
        }catch(error){
            const message = error.response.data;
            // console.log(error, error.response);
            modalAlert.remove();
            $("#addform_planif-modal .modal-body").prepend(
                `<div class="alert alert-danger">${message}</div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        }
        setTimeout(() => {
           $("#addform_planif-modal .modal-body .alert").remove();
        //    $('#addform_planif-modal').modal("hide");
        }, 4000);
    })
    $("body").on('submit','.form_update_planning', async function (e){
        e.preventDefault();
        var formData = new FormData(this);
        console.log(formData);
        let modalAlert =  $("#updateform_planif-modal .modal-body .alert");
        modalAlert.remove();
        const icon = $(".form_update_planning .btn i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        try{
            const request = await  axios.post('/planification/planifications/planifications_calendar_edit/'+id_planning,formData)
            const data = request.data;
            $("#updateform_planif-modal .modal-body").prepend(
                `<div class="alert alert-success">${data}</div>`
            ); 
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
            alltimes()
        }catch(error){
            const message = error.response.data;
            // console.log(error, error.response);
            modalAlert.remove();
            $("#updateform_planif-modal .modal-body").prepend(
                `<div class="alert alert-danger">${message}</div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        }
        setTimeout(() => {
           $("#updateform_planif-modal .modal-body .alert").remove();
        //    $('#updateform_planif-modal').modal("hide");
        }, 4000);
    })

    $('body').on('click','#planning_delete', async function(e) {
        e.preventDefault();
        if(id_planning){
            var res = confirm('Vous voulez vraiment supprimer cette enregistrement ?');
            if(res == 1){
                const icon = $("#planning_enregistre .update_planning i");
                icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
                try {
                    const request = await axios.post('/planification/planifications/delete_planning/'+id_planning);
                    const response = request.data;
                    Toast.fire({
                        icon: 'success',
                        title: response,
                    })
                    alltimes()
                    icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
                } catch (error) {
                    const message = error.response.data;
                    Toast.fire({
                        icon: 'success',
                        title: message,
                    })
                    icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
                }
                setTimeout(() => {
                    $('#updateform_planif-modal').modal("hide");
                }, 1000);
            } 
        }
    })


    $("body").on('click','#import', async function (e){
        e.preventDefault();
        $('#import_en_masse').modal("show");
    })
    
    $('body').on('click','#planning_canvas', function (){
        window.open('/planification/planifications/planning_canvas', '_blank');
    })
    
    $("#import_planning_save").on("submit", async function(e) {
        e.preventDefault();
        let formData = new FormData($(this)[0]);
        let modalAlert = $("#import_en_masse .modal-body .alert")
        modalAlert.remove();
        const icon = $("#planning_enregistre i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        try {
          const request = await axios.post('/planification/planifications/import', formData);
          const response = request.data;
          $("#import_en_masse .modal-body").prepend(
            `<div class="alert alert-success">
                <p>${response}</p>
             </div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        } catch (error) {
          const message = error.response.data;
          console.log(error, error.response);
          modalAlert.remove();
          $("#import_en_masse .modal-body").prepend(
            `<div class="alert alert-danger">${message}</div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        }
        setTimeout(() => {
           $("#import_en_masse .modal-body .alert").remove();
        }, 4000);
    })  
    
})