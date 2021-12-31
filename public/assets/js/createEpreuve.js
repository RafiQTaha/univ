$(document).ready(function () {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  var table = $("#grid").DataTable({
    lengthMenu: [
      [10, 5, 25, 50, 100, -1],
      [10, 5, 25, 50, 100, "All"],
    ],
    order: [[0, "desc"]],
    ajax: "/epreuve/getepreuve",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
    },
  });

  $(".canvas_epreuve").on("click", async (e) => {
    $(".canvas_epreuve i")
      .removeClass("fa-file-download")
      .addClass("fa-spinner fa-spin");
    try {
      const data = await axios.get("/epreuve/canvas");
      //   console.log(data);
      if (data.status === 200) {
        window.open("/epreuve/canvas", "_blank");
      }
    } catch (error) {
      console.log(error.response.data.detail);
      Toast.fire({
        icon: "error",
        title: error.response.data.detail,
      });
    }
    $(".canvas_epreuve i")
      .addClass("fa-file-download")
      .removeClass("fa-spinner fa-spin");
  });

  $("#import_epreuve").on("click", () => {
    $(".modal-body .alert").remove();
    $("#fire-modal-1").modal("show");
  });

  $("#import-group-ins").on("submit", async (e) => {
    e.preventDefault();
    $(".modal-body .alert").remove();
    const icon = $("#import-group-ins .btn i");
    // const button = $("#import-group-ins .btn");
    icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");
    var formData = new FormData();
    formData.append("file", $(".myfile").prop("files")[0]);
    console.log(formData);
    try {
      const request = await axios.post("/epreuve/import", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await request.data;
      $(".modal-body").prepend(
        `<div class="alert alert-success">
                <p>Nombre d'insertion:<b>${data}</b></p>
              </div>`
      );
      icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin");
      table.ajax.reload();
      $("#import-group-ins")[0].reset();
    } catch (error) {
      const message = error.response.data.detail;
      $(".modal-body .alert").remove();
      $(".modal-body").prepend(
        `<div class="alert alert-danger">${message}</div>`
      );
      // button.removeClass('btn-success').addClass('btn-danger');
      icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
      // setTimeout(()=> {
      //   icon.removeClass('fa-times').addClass("fa-check-circle");
      //   button.addClass('btn-success').removeClass('btn-danger');
      //   $(".modal-body .alert").remove();
      // }, 5000)
    }
  });

  // $("body").on("click", "#datables_affiliation tbody tr", function () {
  //   const input = $(this).find("input");
  //   if (input.is(":checked")) {
  //     input.prop("checked", false);
  //     const index = idEpreuves.indexOf(input.attr("id"));
  //     idEpreuves.splice(index, 1);
  //   } else {
  //     input.prop("checked", true);
  //     idEpreuves.push(input.attr("id"));
  //   }
  //   // idEpreuve = $(this).attr('id');
  // });

  // $("#affilier_etudiant").on("click", async (e) => {
  //   e.preventDefault();
  //   if (idEpreuves.length === 0) {
  //     Toast.fire({
  //       icon: "error",
  //       title: "Selection une ou plusieurs epreuves",
  //     });
  //     return;
  //   }
  //   const icon = $("#affilier_etudiant i");
  //   icon.removeClass('fa-file-upload').addClass("fa-spinner fa-spin");
  //   const formData = new FormData();
  //   formData.append("idEpreuves", idEpreuves);

  //   try {
  //     const request = await axios.post(
  //       "/epreuve/affliation/affilier",
  //       formData
  //     );
  //     const data = request.data;
  //     // console.log(data)
  //     table.ajax.reload();
  //     window.open("/"+data ,"_blank");
  //     icon.addClass('fa-file-upload').removeClass("fa-spinner fa-spin");
  //   } catch (error) {
  //     icon.addClass('fa-file-upload').removeClass("fa-spinner fa-spin");
  //     console.log(error.response.data.detail);
  //     Toast.fire({
  //       icon: "error",
  //       title: error.response.data.detail,
  //     });

  //   }
  // });
});
