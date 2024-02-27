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
    
    
    $(document).ready(function  () {
    $('select').select2()
    let id_enseignant;
    var table = $("#datatables_gestion_semaines").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/parametre/semaines/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        preDrawCallback: function(settings) {
            if ($.fn.DataTable.isDataTable('#datatables_gestion_semaines')) {
                var dt = $('#datatables_gestion_semaines').DataTable();
    
                //Abort previous ajax request if it is still in process.
                var settings = dt.settings();
                if (settings[0].jqXHR) {
                    settings[0].jqXHR.abort();
                }
            }
        },
        language: datatablesFrench,
    });
    $("#dupliquer").on("click", async (e) => {
        e.preventDefault();
        const icon = $("#dupliquer i");

        try {
            icon.remove('fas fa-clone').addClass("fa-spinner fa-spin ");
            const request = await axios.post('/parametre/semaines/duplication');
            const response = request.data;
            icon.addClass('fas fa-clone').removeClass("fa-spinner fa-spin ");
            table.ajax.reload();
            Toast.fire({
                icon: 'success',
                title: response,
            })
        } catch (error) {
            console.log(error, error.response);
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
              })
            icon.addClass('fas fa-clone').removeClass("fa-spinner fa-spin ");
        }
    })

    $("body").on("click", "#extraction", async function (e) {
        e.preventDefault();
        window.open("/parametre/semaines/extractionSemaine/","_blank");
    });
   
})


