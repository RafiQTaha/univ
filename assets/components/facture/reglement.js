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
    let id_reglement = false;
    let ids_reglement = [];
    var table_reglement = $("#datables_reglement").DataTable({
            lengthMenu: [
                [10, 15, 25, 50, 100, 20000000000000],
                [10, 15, 25, 50, 100, "All"],
            ],
            order: [[0, "desc"]],
            ajax: "/facture/reglements/list",
            processing: true,
            serverSide: true,
            deferRender: true,
            scrollX: true,
            drawCallback: function () {
                ids_reglement.forEach((e) => {
                    $("body tr#" + e)
                    .find("input")
                    .prop("checked", true);
                });
                $("body tr#" + id_reglement).addClass('active_databales');
            },
            language: {
            url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
        },
    });
    $("#paiement").select2();
    $("#etablissement").select2();
    $("#bordereaux").select2();
    $("#etablissement").on('change', async function (){
        const id_etab = $(this).val();
        table_reglement.columns(1).search("");
        let response = ""
        if(id_etab != "") {
            if ($("#paiement") && $("#paiement").val() != "") {
                table_reglement.columns(2).search($("#paiement").val())
            }
            if ($("#bordereaux").val() != "") {
                table_reglement.columns(3).search($("#bordereaux").val())
            }
            table_reglement.columns(0).search(id_etab).draw();
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        }else{
            table_reglement.columns(0).search(id_etab).draw();
            if ($("#paiement") && $("#paiement").val() != "") {
                table_reglement.columns(2).search($("#paiement").val())
            }
            if ($("#bordereaux").val() != "") {
                table_reglement.columns(3).search($("#bordereaux").val())
            }
        }
        $('#formation').html(response).select2();
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        table_reglement.columns().search("");
        if ($("#paiement").val() != "") {
            table_reglement.columns(2).search($("#paiement").val())
        }
        if ($("#bordereaux").val() != "") {
            table_reglement.columns(3).search($("#bordereaux").val());
        }
        let response = ""
        if(id_formation != "") {
            table_reglement.columns(1).search(id_formation).draw();
            const request = await axios.get('/api/promotion/'+id_formation);
            response = request.data
        }else{
            table_reglement.columns(0).search($("#etablissement").val()).draw();
        }
    })
    $("#paiement").on('change', async function (){
        const id_paiement = $(this).val();
        table_reglement.columns(2).search(id_paiement).draw();
    })
    $("#bordereaux").on('change', async function (){
        const id_bordereaux = $(this).val();
        table_reglement.columns(3).search(id_bordereaux).draw();
    })
    $('body').on('dblclick','#datables_reglement tbody tr',function (e) {
        e.preventDefault();
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_reglement = null;
        } else {
            $("#datables_reglement tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_reglement = $(this).attr('id');
        }
        console.log(id_reglement);
    })
    $('body').on('click','#datables_reglement tbody tr',function (e) {
        e.preventDefault();
        const input = $(this).find("input");
        if (input.hasClass('check_reg')) {
            return;
        }
        else{
            if(input.is(":checked")){
                input.prop("checked",false);
                const index = ids_reglement.indexOf(input.attr("data-id"));
                ids_reglement.splice(index,1);
            }else{
                input.prop("checked",true);
                ids_reglement.push(input.attr("data-id"));
            }
        }
        console.log(ids_reglement);
    })
    $("body").on("click", '#imprimer', async function (e) {
        e.preventDefault();
        if(!id_reglement){
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!',
            })
            return;
        }
        window.open('/facture/reglements/reglementprint/'+id_reglement, '_blank');
    });
    $("body").on("click", '#borderaux', async function (e) {
        e.preventDefault();let modalAlert =  $("#modifier_org-modal .modal-body .alert");
        modalAlert.remove();
        const icon = $("#borderaux i");
        icon.removeClass('fa-folder').addClass("fa-spinner fa-spin");
        if(ids_reglement.length === 0|| $("#etablissement").val() == "" || $('#formation').val() == "" || $("#paiement").val() == ""){
            Toast.fire({
            icon: 'error',
            title: 'Merci de Choisir l\'etablissement, la formation, mode de paiement et au moins une ligne, ',
            })
            return;
        }
        var formData = new FormData();
        formData.append('ids_reglement', JSON.stringify(ids_reglement));
        try {
            const request = await axios.post("/facture/reglements/borderaux/"+$('#formation').val()+'/'+$("#paiement").val(), formData);
            const data = request.data;
            icon.addClass('fa-folder').removeClass("fa-spinner fa-spin");
            Toast.fire({
                icon: 'success',
                title: 'Borderaux Bien Genere',
            })
            ids_reglement.length = [];
            window.open('/facture/reglements/printborderaux/'+data, '_blank');
            table_reglement.ajax.reload(null,false);
        } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            Toast.fire({
                icon: 'error',
                title: message,
            })
        }
    });
    $("body").on("click", '#imprimer_creance', async function (e) {
        e.preventDefault();
        window.open('/facture/reglements/creanceprint', '_blank');
    });


})