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
var table_preins = $("#datables_preinscription").DataTable({
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

var table_gestion_preins = $("#datables_gestion_preinscription").DataTable({
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

const load_frais_inscription = () => {
    if(id_preinscription){
        const icon = $("#frais_inscription i");
         icon.removeClass('fa-money-bill-alt').addClass("fa-spinner fa-spin");
        axios.get('/preinscription/gestion/frais_preins_modals/'+id_preinscription)
      .then(success => {
          $('.modal-preins .etudiant_info').html(success.data);
          icon.removeClass("fa-spinner fa-spin").addClass('fa-money-bill-alt');
        // success.data
      })
      .catch(err => {
        console.log(err);
        icon.removeClass("fa-spinner fa-spin").addClass('fa-money-bill-alt');
      })
    }    
  }
$('body').on('click','#frais_inscription',function (e) {
    e.preventDefault();
    if(!id_preinscription){
        Toast.fire({
          icon: 'error',
          title: 'Veuillez selection une ligne!',
        })
        return;
    }
    $('#frais_inscription-modal').modal("show");
});


$('body').on('click','#datables_gestion_preinscription tbody tr',function (e) {
    e.preventDefault();
    const input = $(this).find("input");
    if(input.is(":checked")){
        input.prop("checked",false);
        const index = idpreins.indexOf(input.attr("id"));
        idpreins.splice(index,1);
    }else{
        input.prop("checked",true);
        idpreins.push(input.attr("id"));
    }
    console.log(idpreins);
})

$('body').on('dblclick','#datables_gestion_preinscription tbody tr',function (e) {
    e.preventDefault();
    // const input = $(this).find("input");
    if($(this).hasClass('active_databales')) {
        $(this).removeClass('active_databales');
        id_preinscription = null;
    } else {
        $("#datables_gestion_preinscription tbody tr").removeClass('active_databales');
        $(this).addClass('active_databales');
        id_preinscription = $(this).attr('id');
        load_frais_inscription();
    }
    console.log(id_preinscription);
})

$("#annulation").on('click', async (e) => {
    e.preventDefault();
    if(!id_preinscription){
        Toast.fire({
          icon: 'error',
          title: 'Veuillez selection une ligne!',
        })
        return;
    }
    const icon = $("#annulation i");
    icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
    var formData = new FormData();
    formData.append('idpreins', JSON.stringify(idpreins));
    try {
        const request = await axios.post("/preinscription/gestion/annulation_preinscription", formData);
        const data = await request.data;
        Toast.fire({
            icon: 'success',
            title: 'Preinscription Bien Annuler',
        })
        icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
        table_gestion_preins.ajax.reload();
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

        table_gestion_preins.ajax.reload();
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

