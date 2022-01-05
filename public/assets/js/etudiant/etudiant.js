$(document).ready(function () {
  let id_etudiant;

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


  
  axios.get('/api/etbalissement')
    .then(success => {
      $('#etablissement').append(success.data);
      console.log(success.data);
    })
    // .catch(error => {
    //   console.log(error.response.data);
    // });
    
  $('body').on('click','#datables_etudiant tr',function () {
    $('tr').removeClass('active');
    $(this).addClass('active');
    let id_etudiant = $(this).attr('id');
    alert(id_etudiant);
    // axios.get('/api/formation/'+id_etudiant)
    // .then(success => {
    //   $('.formation').css('display','block');
    //   $('#formation').html(success.data);
    // })
    
  })


  $('body').on('change','#etablissement',function () {
    let id_etab = $(this).val();
    axios.get('/api/formation/'+id_etab)
    .then(success => {
      $('.formation').css('display','block');
      $('#formation').html(success.data);
    })
    
  })


  
 

})