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
let frais = [];
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

const load_etud_info = () => {
    if(id_preinscription){
        const icon = $("#frais_preinscription i");
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

const load_frais_preins = () => {
    if(id_preinscription){
        axios.get('/preinscription/gestion/article_frais/'+id_preinscription)
        .then(success => {
            $('.modal-preins .article #frais').html(success.data).select2();
        // success.data
        })
        .catch(err => {
        console.log(err);
        icon.removeClass("fa-spinner fa-spin").addClass('fa-money-bill-alt');
        })
    }    
}
const getDocumentsPreins = async () => {
    try {
        const icon = $('#doc_preinscription i')
        icon.removeClass('fa-check').addClass('fa-spinner fa-spin')
        const request = await axios.get("/preinscription/gestion/getdoc_preinscription/"+id_preinscription);
        const data = await request.data;
        $('.ms-selectable .ms-list').html(data.documents)
        $('.ms-selection .ms-list').html(data.documentsExists)
        icon.addClass('fa-check').removeClass('fa-spinner fa-spin')
    } catch (error) {
        const message = error.response.data;
        console.log(error, error.response);
        Toast.fire({
            icon: 'error',
            title: 'Some Error',
        })    
        icon.addClass('fa-check').removeClass('fa-spinner fa-spin')
    }
}


$("#etablissement").select2();
$("#formation").select2();
$("#nature").select2();
$("#etablissement").on('change', async function (){
    const id_etab = $(this).val();
    table_gestion_preins.columns(1).search("").draw();
    table_gestion_preins.columns(2).search("").draw();
    table_gestion_preins.columns(0).search(id_etab).draw();
    let response = ""
    if(id_etab != "") {
        const request = await axios.get('/api/formation/'+id_etab);
        response = request.data
    }
    $('#formation').html(response).select2();
})
$("#formation").on('change', async function (){
    const id_formation = $(this).val();
    table_gestion_preins.columns(2).search("").draw();
    table_gestion_preins.columns(1).search(id_formation).draw();
})
$("#nature").on('change', async function (){
    table_gestion_preins.columns(2).search($(this).val()).draw();
})

$('body').on('click','#frais_preinscription',function (e) {
    e.preventDefault();
    if(!id_preinscription){
        Toast.fire({
          icon: 'error',
          title: 'Veuillez selection une ligne!',
        })
        return;
    }
    $('#frais_preinscription-modal').modal("show");
});
$('body').on('change','.modal-preins .article #frais',function (e) {
    e.preventDefault();
    let frais = $(this).find(':selected').attr('data-id');
    $('.modal-preins .article #montant').val(frais);
});
$('body').on('click','.modal #add-btn',function () {
    let fraisId  = $('.modal-preins .article #frais').val();
    let fraisText  = $('.modal-preins .article #frais').find(':selected').text();
    let prix  = $('.modal-preins .article #montant').val();
    const index = frais.findIndex(frais => frais.id == fraisId );
    if(index == -1) {
        frais.push({
            id: fraisId ,
            designation: fraisText,
            montant: prix
        });
        rawFrais();
    }
})
const rawFrais = () => {
    let html = "";
    frais.map((f, i) => {
        html += `
        
        <tr>
            <td>${i + 1}</td>
            <td>${f.designation}</td>
            <td>${f.montant}</td>
            <td><button class='delete_frais btn btn-danger'  id='${f.id}'><i class='fa fa-trash'></i></button></td>
        </tr>
    `
    })
    $(".modal-preins .table-fee tbody").html(html)
}
$("body").on("click", '.delete_frais', function () {
    const index = frais.findIndex(frais => frais.id == $(this).attr("id"));
    frais.splice(index,1);
    rawFrais();
})

$("body").on("click", '.modal .save', async function (e) {
    e.preventDefault();
    if(frais.length < 1){
        Toast.fire({
          icon: 'error',
          title: 'Veuillez Ajouter Des Lignes!',
        })
        return;
    }
    const icon = $(".modal .save i");
    icon.removeClass('fa-trash').addClass("fa-spinner fa-spin");
    var formData = new FormData();
    formData.append('frais', JSON.stringify(frais));
    try {
        const request = await axios.post("/preinscription/gestion/addfrais/"+id_preinscription, formData);
        const data = await request.data;
        Toast.fire({
            icon: 'success',
            title: 'Frais Bien Ajouter',
        })
        icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
        $(".modal-preins .table-fee tbody").empty();
        table_gestion_preins.ajax.reload();
        window.open('/preinscription/gestion/facture/'+data, '_blank');
      } catch (error) {
        const message = error.response.data;
        console.log(error, error.response);
        Toast.fire({
            icon: 'error',
            title: 'Some Error',
        })
      }
})

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
        load_etud_info();
        load_frais_preins();
        getDocumentsPreins();
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
$("#doc_preinscription").on('click', () => {
    if(!id_preinscription){
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!',
      })
      return;
    }
    $('#document_preins_modal').modal("show");

})
$("body").on("click", ".ms-elem-selectable", async function() {
    $('.ms-selection .ms-list').prepend($(this).clone().removeClass("ms-elem-selectable").addClass("ms-elem-selection"))
    var formData = new FormData();
    formData.append('idDocument', $(this).attr("id"))
    formData.append('idPreinscription', id_preinscription);
    $(this).remove();
    try {
        const request = await axios.post("/preinscription/gestion/adddocuments_preins", formData);
        const data = await request.data;
    } catch (error) {
        Toast.fire({
            icon: 'error',
            title: 'error',
        })
    }
})
$("body").on("click", ".ms-elem-selection", async function() {
    $('.ms-selectable .ms-list').prepend($(this).clone().removeClass("ms-elem-selection").addClass("ms-elem-selectable"))
    var formData = new FormData();
    formData.append('idDocument', $(this).attr("id"))
    formData.append('idPreinscription', id_preinscription);
    $(this).remove();
    try {
        const request = await axios.post("/preinscription/gestion/deletedocuments_preins", formData);
        const data = await request.data;
        
    } catch (error) {
        Toast.fire({
            icon: 'error',
            title: 'error',
        })
    }
})

    $('body').on('click','#att_preinscription',function () {
        if(!id_preinscription){
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!',
            })
            return;
        }
        window.open('/preinscription/gestion/attestation_preinscription/'+id_preinscription, '_blank');
    })

})

