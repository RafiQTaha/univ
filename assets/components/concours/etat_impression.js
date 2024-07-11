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
    let id_epreuve = false;
    let idEpreuves = [];
    var table_notes_epreuve = $("#datables_notes_epreuve").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/administration/note/list",
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
            $("body tr#" + id_epreuve).addClass('active_databales')
        },
        preDrawCallback: function(settings) {
            if ($.fn.DataTable.isDataTable('#datables_notes_epreuve')) {
                var dt = $('#datables_notes_epreuve').DataTable();

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
        table_notes_epreuve.columns().search("");
       
        let response = ""
        if(id_etab != "") {
            if ($("#professeur").val() != "") {
                table_notes_epreuve.columns(6).search($("#professeur").val())
            }
            table_notes_epreuve.columns(0).search(id_etab).draw();
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        }else{
            if ($("#professeur").val() != "") {
                table_notes_epreuve.columns(6).search($("#professeur").val()).draw();
            }else{
                table_notes_epreuve.columns().search("").draw();
            }
        }
        $('#semestre').html('').select2();
        $('#module').html('').select2();
        $('#element').html('').select2();
        $('#promotion').html('').select2();
        $('#formation').html(response).select2();
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        table_notes_epreuve.columns().search("");
        if ($("#professeur").val() != "") {
            table_notes_epreuve.columns(6).search($("#professeur").val());
        }
        let response = ""
        if(id_formation != "") {
            table_notes_epreuve.columns(1).search(id_formation).draw();
            const request = await axios.get('/api/promotion/'+id_formation);
            response = request.data
        }else{
            table_notes_epreuve.columns(0).search($("#etablissement").val()).draw();
        }
        $('#semestre').html('').select2();
        $('#module').html('').select2();
        $('#element').html('').select2();
        $('#promotion').html(response).select2();
    })
    $("#promotion").on('change', async function (){
        const id_promotion = $(this).val();
        table_notes_epreuve.columns().search("");
        if ($("#professeur").val() != "") {
            table_notes_epreuve.columns(6).search($("#professeur").val());
        }
        if(id_promotion != "") {
            table_notes_epreuve.columns(2).search(id_promotion).draw();
            const request = await axios.get('/api/semestre/'+id_promotion);
            response = request.data
        }else{
            table_notes_epreuve.columns(1).search($("#formation").val()).draw();
        }
        $('#semestre').html('').select2();
        $('#module').html('').select2();
        $('#element').html('').select2();
        $('#semestre').html(response).select2();
    })
    $("#semestre").on('change', async function (){
        const id_semestre = $(this).val();
        table_notes_epreuve.columns().search("");
        if ($("#professeur").val() != "") {
            table_notes_epreuve.columns(6).search($("#professeur").val())
        }
        if(id_semestre != "") {
            const request = await axios.get('/api/module/'+id_semestre);
            table_notes_epreuve.columns(3).search(id_semestre).draw();
            response = request.data
        }else{
            table_notes_epreuve.columns(2).search($("#promotion").val()).draw();
        }
        $('#module').html('').select2();
        $('#element').html('').select2();
        $('#module').html(response).select2();
    })
    $("#module").on('change', async function (){
        const id_module = $(this).val();
        table_notes_epreuve.columns().search("");
        if ($("#professeur").val() != "") {
            table_notes_epreuve.columns(6).search($("#professeur").val())
        }
        if(id_module != "") {
            table_notes_epreuve.columns(4).search(id_module).draw();
            const request = await axios.get('/api/element/'+id_module);
            response = request.data
        }else{
            table_notes_epreuve.columns(3).search($("#semestre").val()).draw();
        }

        $('#element').html(response).select2();
    })
    $("#element").on('change', async function (){
        const id_element = $(this).val();
        table_notes_epreuve.columns().search("");
        if ($("#professeur").val() != "") {
            table_notes_epreuve.columns(6).search($("#professeur").val())
        }
        table_notes_epreuve.columns(5).search(id_element).draw();
    })
    
    // $("#etat_controle").on('click', async function (e){
    //     e.preventDefault();
    //     if(!id_epreuve){
    //         Toast.fire({
    //           icon: 'error',
    //           title: 'Veuillez selection une ligne!',
    //         })
    //         return;
    //     }
    //     // $('#import_en_masse').modal("show");
    // })
    $('body').on('click','#etat_controle', function (e){
        e.preventDefault();
        if(!$("#semestre").val()){
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une Semestre!',
            })
            return;
        }
        window.open('/administration/etat_impression/etat_controle/'+$("#semestre").val(), '_blank');
    })
});