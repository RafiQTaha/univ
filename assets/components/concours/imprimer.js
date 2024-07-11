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
    var table_imprimer = $("#datables_imprimer").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/administration/imprimer/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        scrollX: true,
        preDrawCallback: function(settings) {
            if ($.fn.DataTable.isDataTable('#datables_imprimer')) {
                var dt = $('#datables_imprimer').DataTable();
                //Abort previous ajax request if it is still in process.
                var settings = dt.settings();
                if (settings[0].jqXHR) {
                    settings[0].jqXHR.abort();
                }
            }
        },
        language: datatablesFrench,
    });
    // --kiosk-printing
    // window.print();
    $("#id_etudiant").on('keydown', async function(event){
        if (event.which == 13) {
            if($('#id_etudiant').val() == "") {
                Toast.fire({
                    icon: 'error',
                    title: 'Veuillez Entrez un Id Inscription!',
                })
                return;
            }
            var nombre_etiquettes = 1;
            if ($('#nombre_etiquettes').val() > 1) {
                nombre_etiquettes = $('#nombre_etiquettes').val();
            }
            try {
                let formData = new FormData();
                formData.append("inscription", $("#id_etudiant").val())
                formData.append("nombre_etiquettes", nombre_etiquettes)
                const request = await axios.post('/administration/imprimer/new', formData);
                let response = request.data
                Toast.fire({
                    icon: 'success',
                    title: response,
                })
                let win = window.open("/administration/imprimer/print/" + $('#id_etudiant').val() + "/"+nombre_etiquettes,'_blank', "toolbar=yes,scrollbars=yes,top=500,left=500,width=400,height=320");
                win.onfocus = function () {
                    win.print();
                    setTimeout(function () {
                        win.close();
                    }, 3500);
                }
                // }
                $("#id_etudiant").val("")
                table_imprimer.ajax.reload(null,false);
                icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
            } catch (error) {
                console.log(error)
                // icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
                const message = error.response.data;
                Toast.fire({
                    icon: 'error',
                    title: message,
                }) 
            }
        }
    });
    $('#datables_imprimer').on('click', 'tbody tr .get_cd', function (event) {
        var code = $(this).attr('role');
        let win = window.open("/administration/imprimer/print/" + code + "/1",'_blank', "toolbar=yes,scrollbars=yes,top=500,left=500,width=400,height=330");
        win.onfocus = function () {
            win.print();
        }
        event.preventDefault();
    });
    $('#anonymat').on('click', function (event) {
        $('#change_anonymat').modal("show");
        event.preventDefault();
    });
    $("#change_anonymat_save").on("submit", async function(e) {
        e.preventDefault();
        let formData = new FormData($(this)[0]);
        const icon = $("#anonymat_changed i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        
        try {
            const request = await axios.post('/api/changeAnonymat', formData);
            const response = request.data;
            $('body #c-anonymat').html(response);
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $('#change_anonymat').modal("hide");
            Toast.fire({
                icon: 'success',
                title: 'Le type d\'anonymat est bien changé',
            })
            return;
        } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            $('#change_anonymat').modal("hide");
            Toast.fire({
                icon: 'success',
                title: message,
            })
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        }
    })
   
    
});