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
let id_etudiant = false;

$(document).ready(function  () {
var table = $("#datatables_candidat_admissibles").DataTable({
    lengthMenu: [
        [10, 15, 25, 50, 100, 20000000000000],
        [10, 15, 25, 50, 100, "All"],
    ],
    order: [[0, "desc"]],
    ajax: "/admission/admissions/candidat_addmissible_list",
    processing: true,
    serverSide: true,
    deferRender: true,
    drawCallback: function () {
        if(id_etudiant) {
        $("body tr#" + id_etudiant).addClass('active_databales');
        }
    },
    language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
    },
    });
$('.nav-pills a').on('click', function (e) {
    $(this).tab('show')
    // if ($(this).html() == 'Inscription') {
    //   $('.epreuve_action').hide('fast')
    // } else {
    //   $('.epreuve_action').show('fast')
    // }
    })
})