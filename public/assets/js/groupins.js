$(document).ready(function () {
    var table = $("#datables_group_inscription").DataTable({
      lengthMenu: [
        [10, 5, 25, 50, 100, -1],
        [10, 5, 25, 50, 100, "All"],
      ],
      order: [[0, "desc"]],
      ajax: "/inscription/groupins/list",
      processing: true,
      serverSide: true,
      deferRender: true,
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
      },
    });

  $(".canvas_grpins").on("click", async (e) => {
    $(".canvas_grpins i")
      .removeClass("fa-file-download")
      .addClass("fa-spinner fa-spin");
    try {
      const data = await axios.get("/inscription/groupins/canvas");
      //   console.log(data);
      if (data.status === 200) {
        window.open("/inscription/groupins/canvas", "_blank");
      }
    } catch (error) {
      console.log(error);
    }
    $(".canvas_grpins i")
      .addClass("fa-file-download")
      .removeClass("fa-spinner fa-spin");
  });

  $("#modal_group_ins").on("click", () => {
    $(".modal-body .alert").remove();
    $("#fire-modal-1").modal("show");
  });

  $("#import-group-ins").on("submit", async (e) => {
    e.preventDefault();    
    $(".modal-body .alert").remove();
    const icon = $("#import-group-ins .btn i");
    // const button = $("#import-group-ins .btn");
    icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
    var formData = new FormData();
    formData.append('file', $('.myfile').prop('files')[0]);
    console.log(formData);
    try {
      const request = await axios.post("/inscription/groupins/import", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await request.data;
      $(".modal-body").prepend(
        `<div class="alert alert-success">
            <p>Nombre d'insertion:<b>${data.inserted}</b></p>
            <p>Nombre de modifications: <b>${data.updated}</b></p>
          </div>`
      );
      icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
      table.ajax.reload();
    } catch (error) {
      const message = error.response.data.detail;
      $(".modal-body .alert").remove();
      $(".modal-body").prepend(
        `<div class="alert alert-danger">${message}</div>`
      );
      // button.removeClass('btn-success').addClass('btn-danger');
      icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
      // setTimeout(()=> {
      //   icon.removeClass('fa-times').addClass("fa-check-circle");
      //   button.addClass('btn-success').removeClass('btn-danger');
      //   $(".modal-body .alert").remove();
      // }, 5000)
    }
    $("#import-group-ins")[0].reset();
  });
});
