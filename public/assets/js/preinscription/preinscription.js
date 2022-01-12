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
let id_preinscription = false;
let idpreins = [];
var table = $("#datables_preinscription").DataTable({
    lengthMenu: [
        [10, 15, 25, 50, 100, 20000000000000],
        [10, 15, 25, 50, 100, "All"],
    ],
    order: [[0, "desc"]],
    ajax: "/preinscription/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
    url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
    },
});

var table = $("#datables_gestion_preinscription").DataTable({
    lengthMenu: [
        [10, 15, 25, 50, 100, 20000000000000],
        [10, 15, 25, 50, 100, "All"],
    ],
    order: [[0, "desc"]],
    ajax: "/preinscription/gestion/list/gestion_preinscription/",
    processing: true,
    serverSide: true,
    deferRender: true,
    drawCallback: function () {
        idpreins.forEach((e) => {
            $("body tr#" + e)
            .find("input")
            .prop("checked", true);
        });
    },
    language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
    },
});
    


$('body').on('click','#datables_gestion_preinscription tbody tr',function () {
    const input = $(this).find("input");
    // $("#datables_gestion_preinscription tbody tr").removeClass('active_databales');
    if(input.is(":checked")){
        input.prop("checked",false);
        const index = idpreins.indexOf(input.attr("id"));
        idpreins.splice(index,1);
        id_preinscription = null;
    }else{
        input.prop("checked",true);
        idpreins.push(input.attr("id"));
        // $(this).addClass('active_databales');
        id_preinscription = $(this).attr('id');
    }
    console.log(idpreins);
})

$('body').on('dblclick','#datables_gestion_preinscription tbody tr',function () {
    // const input = $(this).find("input");
    if($(this).hasClass('active_databales')) {
        $(this).removeClass('active_databales');
        id_preinscription = null;
    } else {
        $("#datables_gestion_preinscription tbody tr").removeClass('active_databales');
        $(this).addClass('active_databales');
        id_preinscription = $(this).attr('id');
    }
    
})

$("#valider-modal").on('click', async (e) => {
    e.preventDefault();
    if(!id_preinscription){
        Toast.fire({
          icon: 'error',
          title: 'Veuillez selection une ligne!',
        })
        return;
    }
    var formData = new FormData();
    formData.append('idpreins', idpreins);
    try {
        const request = await axios.post("/preinscription/gestion/annulation_preinscription", formData);
        const data = await request.data;
        Toast.fire({
            icon: 'success',
            title: 'Preinscription Bien Annuler',
        })
        table.ajax.reload();
      } catch (error) {
        const message = error.response.data;
        console.log(error, error.response);
        Toast.fire({
            icon: 'error',
            title: 'Some Error',
        })
      }
})
$("#admission").on('click', async (e) => {
    e.preventDefault();
    if(idpreins.length < 1){
        Toast.fire({
          icon: 'error',
          title: 'Veuillez cocher une or plusieurs ligne!',
        })
        return;
    }
    const icon = $("#admission i");
    icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
    
    var formData = new FormData();
    formData.append('idpreins', JSON.stringify(idpreins));
    try {
        const request = await axios.post("/preinscription/gestion/admission_preinscription", formData);
        const data = await request.data;
        Toast.fire({
            icon: 'success',
            title: 'Admissions Bien Enregister',
        })
        icon.addClass('fa-check').removeClass("fa-spinner fa-spin");

        table.ajax.reload();
      } catch (error) {
        const message = error.response.data;
        console.log(error, error.response);
        Toast.fire({
            icon: 'error',
            title: 'Some Error',
        })
        icon.addClass('fa-check').removeClass("fa-spinner fa-spin");

      }
})



})

