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
        language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
        },
    });
    $('body').on('dblclick','#datables_notes_epreuve tbody tr',function (e) {
        e.preventDefault();
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_epreuve = null;
        } else {
            $("#datables_notes_epreuve tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            // const icon = $('#note i');
            // icon.removeClass('fa-newspaper').addClass('fa-spinner fa-spin');
            id_epreuve = $(this).attr('id');
            table_note_inscription = $("#datables_notes_inscription").DataTable({
                lengthMenu: [
                    [10, 15, 25, 50, 100, 20000000000000],
                    [10, 15, 25, 50, 100, "All"],
                ],
                order: [[0, "desc"]],
                ajax: "/administration/note/list/note_inscription/"+id_epreuve,
                processing: true,
                serverSide: true,
                deferRender: true,
                language: {
                    url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
                },
                stateSave: true,
                bDestroy: true
            });
            // icon.addClass('fa-newspaper').removeClass('fa-spinner fa-spin')
        }
    })
    $("#etablissement").select2();
    $("#professeur").select2();
    $("#etablissement").on('change', async function (){
        const id_etab = $(this).val();
        table_notes_epreuve.columns().search("");
        table_notes_epreuve.columns(0).search(id_etab).draw();
        let response = ""
        if(id_etab != "") {
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        }
        $('#semestre').html('').select2();
        $('#module').html('').select2();
        $('#element').html('').select2();
        $('#promotion').html('').select2();
        $('#formation').html(response).select2();
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        table_notes_epreuve.columns().search("").draw();
        table_notes_epreuve.columns(1).search(id_formation).draw();
        let response = ""
        if(id_formation != "") {
            const request = await axios.get('/api/promotion/'+id_formation);
            response = request.data
        }
        $('#semestre').html('').select2();
        $('#module').html('').select2();
        $('#element').html('').select2();
        $('#promotion').html(response).select2();
    })
    $("#promotion").on('change', async function (){
        const id_promotion = $(this).val();
        table_notes_epreuve.columns().search("").draw();
        table_notes_epreuve.columns(2).search(id_promotion).draw();
        if(id_promotion != "") {
            const request = await axios.get('/api/semestre/'+id_promotion);
            response = request.data
        }
        $('#semestre').html('').select2();
        $('#module').html('').select2();
        $('#element').html('').select2();
        $('#semestre').html(response).select2();
    })
    $("#semestre").on('change', async function (){
        const id_semestre = $(this).val();
        table_notes_epreuve.columns().search("").draw();
        table_notes_epreuve.columns(3).search(id_semestre).draw();
        if(id_semestre != "") {
            const request = await axios.get('/api/module/'+id_semestre);
            response = request.data
        }
        $('#module').html('').select2();
        $('#element').html('').select2();
        $('#module').html(response).select2();
    })
    $("#module").on('change', async function (){
        const id_module = $(this).val();
        table_notes_epreuve.columns().search("").draw();
        table_notes_epreuve.columns(4).search(id_module).draw();
        if(id_module != "") {
            const request = await axios.get('/api/element/'+id_module);
            response = request.data
        }
        $('#element').html(response).select2();
    })
    $("#element").on('change', async function (){
        const id_element = $(this).val();
        table_notes_epreuve.columns().search("").draw();
        table_notes_epreuve.columns(5).search(id_element).draw();
    })
    $("#professeur").on('change', async function (){
        const id_prof = $(this).val();
        table_notes_epreuve.columns(6).search(id_prof).draw();
    })
    $("#note").on('click', async function (e){
        e.preventDefault();
        if(!id_epreuve){
            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection une ligne!',
            })
            return;
        }
        $('#notesmodal').modal("show");
    })
    $('body').on('submit','.save_note', async function (e){
        e.preventDefault();
        let id_exgnotes = $(this).attr('id');
        var formData = new FormData($(this)[0]);
        // $(this).parent().parent().next('tr').find('.input_note').focus();
        const request = await axios.post('/administration/note/note_update/'+id_exgnotes, formData);
        response = request.data
        const data = await request.data;
    })
    $('body').on('submit','.save_obs', async function (e){
        e.preventDefault();
        let id_exgnotes = $(this).attr('id');
        var formData = new FormData($(this)[0]);
        // $(this).parent().parent().next('tr').find('.input_note').focus();
        const request = await axios.post('/administration/note/note_update/'+id_exgnotes, formData);
        response = request.data
        const data = await request.data;
        $(this).find('input').blur();
    })
    $('body').on('click','.check_note_ins', async function (){
        var formData = new FormData();
        if ($(this).prop('checked') == true) {
            formData.append('absence',true);
            const request = await axios.post('/administration/note/note_update/'+id_epreuve, formData);
            response = request.data;
        }else{
            formData.append('absence',false);
            const request = await axios.post('/administration/note/note_update/'+id_epreuve, formData);
            response = request.data;
        }
      });
    
});