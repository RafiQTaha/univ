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
        // drawCallback: function () {
        //     idpreins.forEach((e) => {
        //         $("body tr#" + e)
        //         .find("input")
        //         .prop("checked", true);
        //     });
        // },
        language: {
            url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
        },
        });
    const getDocuments = async () => {
        try {
            const request = await axios.get("/admission/gestion/getdocuments/"+id_admission);
            const data = await request.data;
            $('.ms-selectable .ms-list').html(data.documents)
            $('.ms-selection .ms-list').html(data.documentsExists)
          } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            Toast.fire({
                icon: 'error',
                title: 'Some Error',
            })    
        }
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
            id_admission = null;
        } else {
            $("#datatables_gestion_admission tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_admission = $(this).attr('id');
            getDocuments();
        }
        
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

    $("#document").on("click", () => {
        if(!id_admission){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
  
        $("#document_modal").modal("show")
        console.log(id_admission);
    })
})
    
    