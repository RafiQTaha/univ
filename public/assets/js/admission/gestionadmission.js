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
    let id_admission = false;
    let idAdmissions = [];
    let frais = [];
    
    $(document).ready(function  () {
    var table = $("#datatables_gestion_admission").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/admission/gestion/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        drawCallback: function () {
            idAdmissions.forEach((e) => {
                $("body tr#" + e)
                .find("input")
                .prop("checked", true);
            });
            $("body tr#" + id_admission).addClass('active_databales')
        },
        language: {
            url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
        },
    });
    const getDocuments = async () => {
        try {
            const icon = $('#document i')
            icon.removeClass('fa-check').addClass('fa-spinner fa-spin')
            const request = await axios.get("/admission/gestion/getdocuments/"+id_admission);
            const data = await request.data;
            $('.ms-selectable .ms-list').html(data.documents)
            $('.ms-selection .ms-list').html(data.documentsExists)
            icon.addClass('fa-check').removeClass('fa-spinner fa-spin')
        } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            Toast.fire({
                icon: 'error',
                title: 'Some Error',
            })    
            icon.addClass('fa-check').removeClass('fa-spinner fa-spin')
        }
    }
    const getOrganisme = async () => {
        try {
            const request = await axios.get("/api/organisme");
            const data = await request.data;
            $('#organisme').html(data).select2();
          } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            Toast.fire({
                icon: 'error',
                title: 'Some Error',
            })    
        }
    }
    const getFrais = async () => {
        try {
            const request = await axios.get("/api/frais/"+id_admission);
            const data = await request.data;
            $('#frais').html(data).select2();
          } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            Toast.fire({
                icon: 'error',
                title: 'Some Error',
            })    
        }
    }
    $("#frais").on("change", () => {
        $("#montant").val($("#frais").find(":selected").data('frais'))
    })
    getOrganisme();
    $("#etablissement").select2()
    $("#etablissement").on('change', async function (){
        const id_etab = $(this).val();
        table.columns().search("");
        table.columns(0).search(id_etab).draw();
        let response = ""
        if(id_etab != "") {
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        } else {
            
            $('#annee').html("").select2();
        }
        $('#formation').html(response).select2();
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        table.columns().search("");
        table.columns(1).search(id_formation).draw();
        let response = ""
        if(id_formation != "") {
            const request = await axios.get('/api/annee/'+id_formation);
            response = request.data
        }
        $('#annee').html(response).select2();
    })
    $("#annee").on('change', async function (){
        table.columns().search("");
        table.columns(2).search($(this).val()).draw();
    })
    const getAdmissionInfos = async () => {
        try {
            const icon = $('#frais-modal i')
            icon.removeClass('fa-money-bill-alt').addClass('fa-spinner fa-spin')
            const request = await axios.get("/admission/gestion/info/"+id_admission);
            const data = await request.data;
            $('.etudiant_info').html(data);
            icon.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin')
        } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            Toast.fire({
                icon: 'error',
                title: 'Some Error',
            })    
            icon.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin')
        }
    }
    const getInscriptionAnnee = async () => {
        const icon = $('#inscription-modal i')
        try {
            icon.removeClass('fa-check').addClass('fa-spinner fa-spin')
            const request = await axios.get("/admission/gestion/getAnneeDisponible/"+id_admission);
            const data = await request.data;
            $('#annee_inscription').html(data.anneeHtml).select2();
            $('#promotion_inscription').html(data.promotionHtml).select2();
            $('#inscription-modal').attr('disabled', false);
        } catch (error) {
            $('#inscription-modal').attr('disabled', true);
            $('#annee_inscription, #promotion_inscription').empty()
            const message = error.response.data;
            console.log(error, error.response);
            Toast.fire({
                icon: 'info',
                title: message,
            })    
        }
        icon.addClass('fa-check').removeClass('fa-spinner fa-spin')
    }
    
    $('body').on('click','#datatables_gestion_admission tbody tr',function () {
        const input = $(this).find("input");
        if(input.is(":checked")){
            input.prop("checked",false);
            const index = idAdmissions.indexOf(input.attr("id"));
            idAdmissions.splice(index,1);
        }else{
            input.prop("checked",true);
            idAdmissions.push(input.attr("id"));
        }
    })
    $('body').on('dblclick','#datatables_gestion_admission tbody tr',function () {
        // const input = $(this).find("input");
        
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            $('#inscription-modal').attr('disabled', true);

            id_admission = null;
        } else {
            $("#datatables_gestion_admission tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_admission = $(this).attr('id');
            getInscriptionAnnee();
            getDocuments();
            getAdmissionInfos();
            getFrais();
           
        }
        
    })
    
    $("#document").on("click", () => {
        if(!id_admission){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
  
        $("#document_modal").modal("show")
    })
    $("body").on("click", ".ms-elem-selection", async function() {
        $('.ms-selectable .ms-list').prepend($(this).clone().removeClass("ms-elem-selection").addClass("ms-elem-selectable"))
        var formData = new FormData();
        formData.append('idDocument', $(this).attr("id"))
        formData.append('idAdmission', id_admission);
        $(this).remove();
        try {
            const request = await axios.post("/admission/gestion/deletedocument", formData);
            const data = await request.data;
            
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: 'error',
            })
        }
    })
    $("body").on("click", ".ms-elem-selectable", async function() {
        $('.ms-selection .ms-list').prepend($(this).clone().removeClass("ms-elem-selectable").addClass("ms-elem-selection"))
        var formData = new FormData();
        formData.append('idDocument', $(this).attr("id"))
        formData.append('idAdmission', id_admission);
        $(this).remove();
        try {
            const request = await axios.post("/admission/gestion/adddocuments", formData);
            const data = await request.data;
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: 'error',
            })
        }
    })
    $("#frais-modal").on("click", () => {
        if(!id_admission){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
  
        $("#frais_inscription-modal").modal("show")
    })

    $("#add_frais_gestion").on("click", () => {

        let fraisId = $("#frais").find(":selected").val();
        if(fraisId != "") {
            let fraisText = $("#frais").find(":selected").text();
            let prix = $("#montant").val();
            let ice = $("#ice").val();
            const index = frais.findIndex(frais => frais.id == fraisId);
            // console.log(index)
            if(index === -1) {
                frais.push({
                    id: fraisId,
                    designation: fraisText,
                    montant: prix,
                    ice: ice
                });
                rawFrais();
            }
        }
    })
    

    const rawFrais = () => {
        let html = "";
        frais.map((f, i) => {
            html += `
            <tr>
                <td>${i + 1}</td>
                <td>${f.designation}</td>
                <td>${f.montant}</td>
                <td>${f.ice}</td>
                <td><button class='delete_frais btn btn-danger'  id='${f.id}'><i class='fa fa-trash' ></i></button></td>
            </tr>
        `
        })
        // console.log(html);
        $(".table_frais_admission").html(html)
    }
    $("body").on("click", '.delete_frais', function () {
        const index = frais.findIndex(frais => frais.id == $(this).attr("id"));
        frais.splice(index,1);
        rawFrais();
    })
    $("#save_frais_gestion").on("click", async () => {
        let formData = new FormData();
        formData.append("frais", JSON.stringify(frais))
        formData.append("organisme", $("#organisme").val())
        let modalAlert = $("#frais_inscription-modal .modal-body .alert")
    
        modalAlert.remove();
        const icon = $("#save_frais_gestion i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        
        try {
          const request = await axios.post('/admission/gestion/addfrais/'+id_admission, formData);
          const response = request.data;
          $("#frais_inscription-modal .modal-body").prepend(
            `<div class="alert alert-success">
                <p>Bien Enregistre</p>
              </div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
          $(".table_frais_admission").empty()
          frais = [];
          window.open("/admission/gestion/facture/"+response, '_blank');
          table.ajax.reload();
        } catch (error) {
          const message = error.response.data;
          console.log(error, error.response);
          modalAlert.remove();
          $("#frais_inscription-modal .modal-body").prepend(
            `<div class="alert alert-danger">${message}</div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
          
        }
    })

    $("#inscription-modal").on("click", () => {
        if(!id_admission){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
        $("#inscription_modal .modal-body .alert").remove()
        $("#inscription_modal").modal("show")
    })
    $("#inscription_save").on("submit", async function (e){
        e.preventDefault();
        let formData = new FormData($(this)[0]);
        let modalAlert = $("#inscription_modal .modal-body .alert")
    
        modalAlert.remove();
        const icon = $("#inscription_save .btn i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        
        try {
          const request = await axios.post('/admission/gestion/inscription/'+id_admission, formData);
          const response = request.data;
          $("#inscription_modal .modal-body").prepend(
            `<div class="alert alert-success">
                <p>${response}</p>
              </div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
          $("#annee_inscription, #promotion_inscription").empty()
          table.ajax.reload()
        } catch (error) {
          const message = error.response.data;
          console.log(error, error.response);
          modalAlert.remove();
          $("#inscription_modal .modal-body").prepend(
            `<div class="alert alert-danger">${message}</div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
          
        }
    })

    $("#attestation_admission").on('click', function(){
        if(!id_admission) {
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!',
            })
            return;
        }
        window.open("/admission/gestion/attestation/"+id_admission, '_blank');
    })
})
    
    