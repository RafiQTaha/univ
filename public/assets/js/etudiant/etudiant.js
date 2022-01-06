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

var table = $("#datables_etudiant").DataTable({
  lengthMenu: [
    [10, 15, 25, 50, 100, 20000000000000],
    [10, 15, 25, 50, 100, "All"],
  ],
  order: [[0, "desc"]],
  ajax: "/etudiant/list",
  processing: true,
  serverSide: true,
  deferRender: true,
  language: {
    url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
  },
});
let tableListPreinscription;


  async () => {
    try {
      const request = await axios.get('/api/etbalissement');
      const data = request.data;
      $('#etablissement').html(data);
 
    } catch (error) {
      console.log(error.response.data);
    }  
  }
  $('body').on('click','#datables_etudiant tr',function () {
    $('#datables_etudiant tr').removeClass('active');
    $(this).addClass('active');
    id_etudiant = $(this).attr('id');
    tableListPreinscription = $("#datables_etudiant_modal").DataTable({
      lengthMenu: [
        [10, 15, 25, 50, 100, 20000000000000],
        [10, 15, 25, 50, 100, "All"],
      ],
      order: [[0, "desc"]],
      ajax: "/etudiant/list/preinscription/"+id_etudiant,
      processing: true,
      serverSide: true,
      deferRender: true,
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
      },
      stateSave: true,
      bDestroy: true
    });
    
  })


  $('body').on('change','#etablissement',function () {
    let id_etab = $(this).val();
    axios.get('/api/formation/'+id_etab)
    .then(success => {
      $('.formation').css('display','block');
      $('#formation').html(success.data);
    })
  })

  $('body').on('change','#formation',function (e) {
    e.preventDefault();
    $('#enregistrer').removeAttr("disabled");
  })

  $('body').on('submit','.form-valider',async function (e) {
    e.preventDefault();



    let formdata = $(this).serialize();
    $(".modal-body .alert").remove();
    const icon = $(".form-valider .btn i");
    icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
    try{
      const request = await  axios.post('/etudiant/etudiant_valider/'+id_etudiant,formdata)
      const data = request.data;
      $("#validermodal .modal-body").prepend(
        `<div class="alert alert-success">
            <p>${data}</p>
          </div>`
      );  
      icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
      tableListPreinscription.ajax.reload();
    }catch(error){
      const message = error.response.data;
      console.log(error, error.response);
      $(".modal-body .alert").remove();
      $(".modal-body").prepend(
        `<div class="alert alert-danger">${message}</div>`
      );
      icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
    }

    
  })

  $("#valider-modal").on('click', () => {
    console.log(id_etudiant);
    if(!id_etudiant){
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!',
      })
      return;
    }

    $('#validermodal').modal("show")
  })


  
 


  
  $('#releve_note').on('click', () => {
    if(!id_etudiant){
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!',
      })
      return;
    }
    $("#releves-notes-modal").modal("show");
  })

  $('#etudiant_import').on('click', () => {
    $("#importer-modal").modal("show");
  })
  $('#save_import').on('submit', async (e) => {
    e.preventDefault();
    $(".modal-body .alert").remove();
    const icon = $("#save_import .btn i");
    // const button = $("#import-group-ins .btn");
    icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
    var formData = new FormData();
    formData.append('file', $('.myfile').prop('files')[0]);
    console.log(formData);
    try {
      const request = await axios.post("/etudiant/import", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await request.data;
      $(".modal-body").prepend(
        `<div class="alert alert-success">
            <p>Nombre d'insertion:<b>${data.inserted}</b></p>
            <p<b>${data.existed}</b> étudiants exist</p>
          </div>`
      );
      console.log(data.existed);
      if(data.existed > 0) {
        window.open("/etudiant/download", '_blank');
      }
      icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
      table.ajax.reload();
    } catch (error) {
      const message = error.response.data.detail;
      console.log(error, error.response);
      $(".modal-body .alert").remove();
      $(".modal-body").prepend(
        `<div class="alert alert-danger">${message}</div>`
      );
      icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
    }
    // $("#save_import")[0].reset();
  });



})