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
let idpreins = [];

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
$('.nav-pills a').on('click', function (e) {
    $(this).tab('show')
    // if ($(this).html() == 'Inscription') {
    //   $('.epreuve_action').hide('fast')
    // } else {
    //   $('.epreuve_action').show('fast')
    // }
    })
$('body').on('click','#datatables_candidat_admissibles tbody tr',function () {
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
$('#admission').on('click', async (e) => {
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
        const request = await axios.post("/admission/admissions/new", formData);
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
