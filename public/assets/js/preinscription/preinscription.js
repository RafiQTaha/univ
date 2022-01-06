$(document).ready(function () {

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
   
    
    
    })