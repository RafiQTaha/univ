$(document).ready(function () {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })
    var table_imprimer = $("#datables_controle").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/administration/controle/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        scrollX: true,
        preDrawCallback: function(settings) {
            if ($.fn.DataTable.isDataTable('#datables_controle')) {
                var dt = $('#datables_controle').DataTable();
                //Abort previous ajax request if it is still in process.
                var settings = dt.settings();
                if (settings[0].jqXHR) {
                    settings[0].jqXHR.abort();
                }
            }
        },
        language: datatablesFrench,
    });
$("body").on('keydown',"#input1", async function(e){
    if (e.which === 13) {
        $('#input2').focus();
    }
});
$("body").on('keydown',"#input2", async function(e){
    if (e.which === 13) {
        try {
            let formData = new FormData();
            formData.append("inscription", $("#input1").val())
            formData.append("anonymat", $("#input2").val())
            const request = await axios.post('/administration/controle/validation', formData);
            let response = request.data
            Toast.fire({
                icon: 'success',
                title: response,
            })
            $("#input1").val("")
            $("#input2").val("")
            $("#input1").focus()
        } catch (error) {
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            }) 
        }
    }
});
    $('#datables_controle').on('click', 'tbody tr .get_cd', function (event) {
       var code = $(this).attr('role');
       window.open("/administration/controle/print/" + code + "/2",'_blank', "toolbar=yes,scrollbars=yes,top=500,left=500,width=400,height=330");
       event.preventDefault();
   });
    
});