
$(document).ready(function () {
  let idEpreuves = [];

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

  var table = $("#datables_affiliation").DataTable({
    lengthMenu: [
      [10, 5, 25, 50, 100, -1],
      [10, 5, 25, 50, 100, "All"],
    ],
    order: [[0, "desc"]],
    ajax: "/epreuve/affliation/epreuve",
    processing: true,
    serverSide: true,
    deferRender: true,
    drawCallback: function (settings) {
      idEpreuves.forEach((e) => {
        $("body tr#" + e)
          .find("input")
          .prop("checked", true);
      });
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
    },
  });

  $("body").on("click", "#datables_affiliation tbody tr", function () {
    const input = $(this).find("input");
    if (input.is(":checked")) {
      input.prop("checked", false);
      const index = idEpreuves.indexOf(input.attr("id"));
      idEpreuves.splice(index, 1);
    } else {
      input.prop("checked", true);
      idEpreuves.push(input.attr("id"));
    }
    // idEpreuve = $(this).attr('id');
  });

  $("#affilier_etudiant").on("click", async (e) => {
    e.preventDefault();
    if (idEpreuves.length === 0) {
      Toast.fire({
        icon: "error",
        title: "Selection une ou plusieurs epreuves",
      });
      return;
    }
    const icon = $("#affilier_etudiant i");
    icon.removeClass('fa-link').addClass("fa-spinner fa-spin");
    const formData = new FormData();
    formData.append("idEpreuves", idEpreuves);

    try {
      const request = await axios.post(
        "/epreuve/affliation/affilier",
        formData
      );
      const data = request.data;
      // console.log(data)
      table.ajax.reload();
      window.open("/"+data ,"_blank");
      icon.addClass('fa-link').removeClass("fa-spinner fa-spin");
    } catch (error) {
      icon.addClass('fa-link').removeClass("fa-spinner fa-spin");
      console.log(error.response.data.detail);
      Toast.fire({
        icon: "error",
        title: error.response.data.detail,
      });

    }
  });
  $("#capitaliser_etudiant").on("click", async (e) => {
    e.preventDefault();
    if (idEpreuves.length === 0) {
      Toast.fire({
        icon: "error",
        title: "Selection une ou plusieurs epreuves",
      });
      return;
    }
    const icon = $("#capitaliser_etudiant i");
    icon.removeClass('fa-check-double').addClass("fa-spinner fa-spin");
    const formData = new FormData();
    formData.append("idEpreuves", idEpreuves);

    try {
      const request = await axios.post(
        "/epreuve/capitaliser",
        formData
      );
      const data = request.data;
      console.log(data)
      table.ajax.reload();
      $("#fire-modal-1").modal("show");
      let html = `<div class="alert alert-success">`;
      data.forEach(e => {
        html+=`Epreuve:  ${e.epreuve} <br>`
        html+=`Liste des etudiants: ${e.capitalise} <br>`;
      })
      html += `</div>`;
      $(".modal-body").prepend(html);
      icon.addClass('fa-check-double').removeClass("fa-spinner fa-spin");
    } catch (error) {
      icon.addClass('fa-check-double').removeClass("fa-spinner fa-spin");
      console.log(error.response.data.detail);
      Toast.fire({
        icon: "error",
        title: error.response.data.detail,
      });

    }
  });


});
