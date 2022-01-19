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
    let id_inscription = false;
    let idInscription = [];
    let frais = [];
    
    $(document).ready(function  () {
    var table = $("#datatables_gestion_inscription").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/inscription/gestion/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        drawCallback: function () {
            idInscription.forEach((e) => {
                $("body tr#" + e)
                .find("input")
                .prop("checked", true);
            });
            $("body tr#" + id_inscription).addClass('active_databales')
        },
        language: {
            url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
        },
    });

    const getStatutInscription = async () => {
        const icon = $('#statut-modal i')
        try {
            icon.removeClass('fa-check').addClass('fa-spinner fa-spin')
            const request = await axios.get("/inscription/gestion/getstatut/"+id_inscription);
            const data = await request.data;
            $('#statut_inscription').html(data).select2();
        } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            Toast.fire({
                icon: 'error',
                title: "Some Error",
            })    
        }
        icon.addClass('fa-check').removeClass('fa-spinner fa-spin')
    }

    $('body').on('click','#datatables_gestion_inscription tbody tr',function () {
        const input = $(this).find("input");
        if(input.is(":checked")){
            input.prop("checked",false);
            const index = idInscription.indexOf(input.attr("id"));
            idInscription.splice(index,1);
        }else{
            input.prop("checked",true);
            idInscription.push(input.attr("id"));
        }
    })
    $('body').on('dblclick','#datatables_gestion_inscription tbody tr',function () {
        // const input = $(this).find("input");
        
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_inscription = null;
        } else {
            $("#datatables_gestion_inscription tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_inscription = $(this).attr('id');
            getStatutInscription();
           
        }
        
    })

    $("#statut-modal").on("click", () => {
        if(!id_inscription){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
        $("#statut_modal .modal-body .alert").remove()
        $("#statut_modal").modal("show")
    })

    $("#statut_save").on("submit", async function (e){
        e.preventDefault();
        let formData = new FormData($(this)[0]);
        let modalAlert = $("#statut_modal .modal-body .alert")
    
        modalAlert.remove();
        const icon = $("#statut_save .btn i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        
        try {
          const request = await axios.post('/inscription/gestion/updatestatut/'+id_inscription, formData);
          const response = request.data;
          $("#statut_modal .modal-body").prepend(
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
          $("#statut_modal .modal-body").prepend(
            `<div class="alert alert-danger">${message}</div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
          
        }
    })
})