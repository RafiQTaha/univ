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
    let id_pv = false;
    // let idEpreuves = [];
    var datable_pvs = $("#datables_pvs").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/evaluation/pv/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        scrollX: true,
        drawCallback: function () {
            // idEpreuves.forEach((e) => {
            //     $("body tr#" + e)
            //     .find("input")
            //     .prop("checked", true);
            // });
            $("body tr#" + id_pv).addClass('active_databales')
        },
        preDrawCallback: function(settings) {
            if ($.fn.DataTable.isDataTable('#datables_pvs')) {
                var dt = $('#datables_pvs').DataTable();

                //Abort previous ajax request if it is still in process.
                var settings = dt.settings();
                if (settings[0].jqXHR) {
                    settings[0].jqXHR.abort();
                }
            }
        },
        language: datatablesFrench,
    });
    // $('body').on('click','#datables_notes_epreuve tbody tr',function () {
    //     const input = $(this).find("input");
    //     if(input.is(":checked")){
    //         input.prop("checked",false);
    //         const index = idEpreuves.indexOf(input.attr("id"));
    //         idEpreuves.splice(index,1);
    //     }else{
    //         input.prop("checked",true);
    //         idEpreuves.push(input.attr("id"));
    //     }
    //     console.log(idEpreuves);
    // })
    $('body').on('click','#datables_pvs tbody tr',function (e) {
        e.preventDefault();
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_pv = null;
        } else {
            $("#datables_pvs tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            // const icon = $('#note i');
            // icon.removeClass('fa-newspaper').addClass('fa-spinner fa-spin');
            id_pv = $(this).attr('id');
            // table_note_inscription()
            // icon.addClass('fa-newspaper').removeClass('fa-spinner fa-spin')
        }
    })
    $("select").select2();
    $("#etablissement").on('change', async function (){
        const id_etab = $(this).val();
        datable_pvs.columns().search("");
       
        let response = ""
        if(id_etab != "") {
            datable_pvs.columns(0).search(id_etab).draw();
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        }else{
            datable_pvs.columns().search("").draw();
        }
        $('#annee').html('').select2();
        $('#semestre').html('').select2();
        $('#promotion').html('').select2();
        $('#formation').html(response).select2();
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        datable_pvs.columns().search("");
        let response = ""
        if(id_formation != "") {
            datable_pvs.columns(1).search(id_formation).draw();
            const request = await axios.get('/api/promotion/'+id_formation);
            response = request.data
            const requestannee = await axios.get('/api/annee/'+id_formation);
            responseannee = requestannee.data
        }else{
            datable_pvs.columns(0).search($("#etablissement").val()).draw();
        }
        $('#semestre').html('').select2();
        $('#promotion').html(response).select2();
        $('#annee').html(responseannee).select2();
    })
    $("#promotion").on('change', async function (){
        const id_promotion = $(this).val();
        datable_pvs.columns().search("");
        let response = ""
        if(id_promotion != "") {
            datable_pvs.columns(2).search(id_promotion).draw();
            const request = await axios.get('/api/semestre/'+id_promotion);
            response = request.data
        }else{
                datable_pvs.columns(1).search($("#formation").val()).draw();
        }
        $('#semestre').html(response).select2();
    })
    $("#semestre").on('change', async function (){
        const id_semestre = $(this).val();
        datable_pvs.columns().search("");
        if(id_semestre != "") {
            datable_pvs.columns(3).search(id_semestre).draw();
        }else{
            datable_pvs.columns(2).search($("#promotion").val()).draw();
        }
    })
    $("#annee").on('change', async function (){
        const id_annee = $(this).val();
        datable_pvs.columns().search("");
        if(id_annee != "") {
            datable_pvs.columns(4).search(id_annee).draw();
        }else{
            datable_pvs.columns(1).search($("#formation").val()).draw();
        }
    })

    $("#ajouter").on('click', async function (e){
        e.preventDefault();
        if($("#annee").val() == "" || $("#semestre").val() == ""){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection une annee et une semestre!',
            })
            return;
        }
        $('#ajout_pv_modal').modal("show");
    })
    
    $("#pv_save").on("submit", async function (e){
        e.preventDefault();
        let modalAlert = $("#ajout_pv_modal .modal-body .alert")
        modalAlert.remove();
        const icon = $("#pv_save .btn i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        
        try {
            let formData = new FormData($(this)[0]);
            formData.append('annee',$("#annee").val())
            formData.append('semestre',$("#semestre").val())
            const request = await axios.post('/evaluation/pv/ajouter_pv', formData);
            const response = request.data;
            $("#ajout_pv_modal .modal-body").prepend(
                `<div class="alert alert-success">
                    <p>${response}</p>
                </div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $("#pv_save")[0].reset();
            datable_pvs.ajax.reload(null, false)
            $('#ajout_pv_modal').modal("hide");
        } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            modalAlert.remove();
            $("#ajout_pv_modal .modal-body").prepend(
                `<div class="alert alert-danger">${message}</div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        }
    })
    
    const getPvInfos = () => {
        let modalAlert =  $("#modifier_pv_modal .modal-body .alert");
        modalAlert.remove();
        const icon = $("#modifier i");
        icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
        axios.get('/evaluation/pv/getPvInfos/'+id_pv)
        .then(success => {
            icon.removeClass('fa-spinner fa-spin').addClass("fa-edit");
            // console.log(success);
            $('#modifier_pv_modal #pv_modifier').html(success.data)
            $('#modifier_pv_modal').modal("show");
        })
        .catch(err => {
            // console.log(err)
            icon.removeClass('fa-spinner fa-spin ').addClass("fa-edit");
        })
    }
    $("#modifier").on('click', async function (e){
        e.preventDefault();
        if(id_pv == false){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection une ligne!',
            })
            return;
        }
        getPvInfos()
    })
    
    $("#pv_modifier").on("submit", async function (e){
        e.preventDefault();
        let modalAlert = $("#modifier_pv_modal .modal-body .alert")
        modalAlert.remove();
        if(id_pv == false){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection une ligne!',
            })
            return;
        }
        const icon = $("#pv_modifier .btn i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        try {
            let formData = new FormData($(this)[0]);
            // formData.append('IDPv',id_pv)
            const request = await axios.post('/evaluation/pv/modifier_pv/'+id_pv, formData);
            const response = request.data;
            $("#modifier_pv_modal .modal-body").prepend(
                `<div class="alert alert-success">
                    <p>${response}</p>
                </div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $("#pv_modifier")[0].reset();
            datable_pvs.ajax.reload(null, false)
            $('#modifier_pv_modal').modal("hide");
        } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            modalAlert.remove();
            $("#modifier_pv_modal .modal-body").prepend(
                `<div class="alert alert-danger">${message}</div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        }
    })
    
    $('body').on('click','#imprimer', function (){
        if(!id_pv){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
        window.open('/evaluation/pv/impressionPv/'+id_pv, '_blank');
    })
    
    $('body').on('click','#imprimerpresidence ', function (){
        if(!id_pv){
            Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
            })
            return;
        }
        window.open('/evaluation/pv/impressionPresidence/'+id_pv, '_blank');
    })
    $('#importer').on('click', () => {
        if(!id_pv){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
        $("#importer-modal").modal("show");
    })
    
    $('#save_import').on('submit', async (e) => {
        e.preventDefault();
        let modalAlert = $("#importer-modal .modal-body .alert")
        modalAlert.remove();
        if(!id_pv){
            Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
            })
            return;
        }
        const icon = $("#save_import .btn i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        var formData = new FormData();
        formData.append('file', $('.myfile').prop('files')[0]);
        // console.log(formData);
        try {
            const request = await axios.post("/evaluation/pv/importPv/"+id_pv, formData, {
            headers: {
            "Content-Type": "multipart/form-data",
            },
        });
            const data = await request.data;
            $("#save_import")[0].reset();
            $("#importer-modal .modal-body").prepend(
                `<div class="alert alert-success">
                    <p>${data}</p>
                </div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
            // table.ajax.reload(null, false);
        } catch (error) {
            const message = error.response.data;
            // console.log(error, error.response);
            modalAlert.remove();
            $("#importer-modal .modal-body").prepend(
                `<div class="alert alert-danger">${message}</div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        }
        setTimeout(() => {
            $(".modal-body .alert").remove();
        }, 2500) 
  
    });
   
});