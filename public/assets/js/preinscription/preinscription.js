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
    ajax: "/preinscription/list/gestion_preinscription/",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
    },
});
    
let id_preinscription = false;
let idpreins = [];

$('body').on('click','#datables_gestion_preinscription tbody tr',function () {
    const input = $(this).find("input");
    if(input.is(":checked")){
        $(this).removeClass('active_databales');
        input.prop("checked",false);
        const index = idpreins.indexOf(input.attr("id"));
        idpreins.splice(index,1);
        id_preinscription = null;
    }else{
        $(this).addClass('active_databales');
        input.prop("checked",true);
        idpreins.push(input.attr("id"));
        id_preinscription = $(this).attr('id');
    }
    console.log(idpreins);
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
        const request = await axios.post("/preinscription/annulation_preinscription", formData);
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
    // axios.get('/preinscription/annulation_preinscription/'+id_preinscription)
    // .then(success => {
    //     Toast.fire({
    //         icon: 'succes',
    //         title: 'Preinscription Bien Annuler',
    //       })
    //       return;
    // })
})



})

