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
        language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
        },
    });
    
    $("#paiement").select2();
    $("#etablissement").select2();
    $("#bordereaux").select2();
    $("#etablissement").on('change', async function (){
        const id_etab = $(this).val();
        table_facture.columns(1).search("");
        let response = ""
        if(id_etab != "") {
            if ($("#paiement") && $("#paiement").val() != "") {
                table_facture.columns(2).search($("#paiement").val())
            }
            if ($("#organisme").val() != "") {
                table_facture.columns(3).search($("#organisme").val())
            }
            table_facture.columns(0).search(id_etab).draw();
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        }else{
            table_facture.columns(0).search(id_etab).draw();
            if ($("#paiement") && $("#paiement").val() != "") {
                table_facture.columns(2).search($("#paiement").val())
            }
            if ($("#organisme").val() != "") {
                table_facture.columns(3).search($("#organisme").val())
            }
        }
        $('#formation').html(response).select2();
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        table_facture.columns().search("");
        if ($("#paiement") && $("#paiement").val() != "") {
            table_facture.columns(2).search($("#paiement").val())
        }
        if ($("#organisme").val() != "") {
            table_facture.columns(3).search($("#organisme").val());
        }
        let response = ""
        if(id_formation != "") {
            table_facture.columns(1).search(id_formation).draw();
            const request = await axios.get('/api/promotion/'+id_formation);
            response = request.data
        }else{
            table_facture.columns(0).search($("#etablissement").val()).draw();
        }
    })
    $("#paiement").on('change', async function (){
        const id_paiement = $(this).val();
        table_facture.columns(2).search(id_paiement).draw();
    })
    $("#organisme").on('change', async function (){
        const id_organisme = $(this).val();
        table_facture.columns(3).search(id_organisme).draw();
    })
})