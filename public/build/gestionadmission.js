(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestionadmission"],{

/***/ "./assets/components/admission/gestionadmission.js":
/*!*********************************************************!*\
  !*** ./assets/components/admission/gestionadmission.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

var Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: function didOpen(toast) {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});
var id_admission = false;
var idAdmissions = [];
var frais = [];
$(document).ready(function () {
  var table = $("#datatables_gestion_admission").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/admission/gestion/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      idAdmissions.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_admission).addClass("active_databales");
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable("#datatables_gestion_admission")) {
        var dt = $("#datatables_gestion_admission").DataTable(); //Abort previous ajax request if it is still in process.

        var settings = dt.settings();

        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });

  var getDocuments = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _icon, request, data, message;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _icon = $("#document i");

              _icon.removeClass("fa-check").addClass("fa-spinner fa-spin");

              _context.next = 5;
              return axios.get("/admission/gestion/getdocuments/" + id_admission);

            case 5:
              request = _context.sent;
              _context.next = 8;
              return request.data;

            case 8:
              data = _context.sent;
              $(".ms-selectable .ms-list").html(data.documents);
              $(".ms-selection .ms-list").html(data.documentsExists);

              _icon.addClass("fa-check").removeClass("fa-spinner fa-spin");

              _context.next = 20;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              Toast.fire({
                icon: "error",
                title: "Some Error"
              });
              icon.addClass("fa-check").removeClass("fa-spinner fa-spin");

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function getDocuments() {
      return _ref.apply(this, arguments);
    };
  }();

  var getOrganisme = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios.get("/api/organisme");

            case 3:
              request = _context2.sent;
              _context2.next = 6;
              return request.data;

            case 6:
              data = _context2.sent;
              $("#organisme").html(data).select2();
              _context2.next = 15;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              message = _context2.t0.response.data;
              console.log(_context2.t0, _context2.t0.response);
              Toast.fire({
                icon: "error",
                title: "Some Error"
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function getOrganisme() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getNatureEtudiant = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios.get("/api/nature_etudiant/" + id_admission);

            case 3:
              request = _context3.sent;
              _context3.next = 6;
              return request.data;

            case 6:
              data = _context3.sent;
              $("#organisme").html(data).select2();
              _context3.next = 15;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              message = _context3.t0.response.data;
              console.log(_context3.t0, _context3.t0.response);
              Toast.fire({
                icon: "error",
                title: "Some Error"
              });

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    return function getNatureEtudiant() {
      return _ref3.apply(this, arguments);
    };
  }();

  $("#frais").on("change", function () {
    $("#montant").val($("#frais").find(":selected").data("frais"));
  });
  getOrganisme();
  $("#etablissement").select2();
  $("#etablissement").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_etab = $(this).val();
            table.columns().search("");
            table.columns(0).search(id_etab).draw();
            response = "";

            if (!(id_etab != "")) {
              _context4.next = 11;
              break;
            }

            _context4.next = 7;
            return axios.get("/api/formation/" + id_etab);

          case 7:
            request = _context4.sent;
            response = request.data;
            _context4.next = 12;
            break;

          case 11:
            $("#annee").html("").select2();

          case 12:
            $("#formation").html(response).select2();

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#formation").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_formation = $(this).val();
            table.columns().search("");
            table.columns(1).search(id_formation).draw();
            response = "";

            if (!(id_formation != "")) {
              _context5.next = 9;
              break;
            }

            _context5.next = 7;
            return axios.get("/api/annee/" + id_formation);

          case 7:
            request = _context5.sent;
            response = request.data;

          case 9:
            $("#annee").html(response).select2();

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#annee").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            table.columns().search("");
            table.columns(2).search($(this).val()).draw();

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));

  var getInscriptionAnnee = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              icon = $("#inscription-modal i");
              _context7.prev = 1;
              icon.removeClass("fa-check").addClass("fa-spinner fa-spin");
              _context7.next = 5;
              return axios.get("/admission/gestion/getAnneeDisponible/" + id_admission);

            case 5:
              request = _context7.sent;
              _context7.next = 8;
              return request.data;

            case 8:
              data = _context7.sent;
              $("#annee_inscription").html(data.anneeHtml).select2();
              $("#promotion_inscription").html(data.promotionHtml).select2();
              $("#inscription-modal").attr("disabled", false);
              _context7.next = 21;
              break;

            case 14:
              _context7.prev = 14;
              _context7.t0 = _context7["catch"](1);
              $("#inscription-modal").attr("disabled", true);
              $("#annee_inscription, #promotion_inscription").empty();
              message = _context7.t0.response.data;
              console.log(_context7.t0, _context7.t0.response);
              Toast.fire({
                icon: "info",
                title: message
              });

            case 21:
              icon.addClass("fa-check").removeClass("fa-spinner fa-spin");

            case 22:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[1, 14]]);
    }));

    return function getInscriptionAnnee() {
      return _ref7.apply(this, arguments);
    };
  }();

  $("body").on("click", "#datatables_gestion_admission tbody tr", function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idAdmissions.indexOf(input.attr("id"));
      idAdmissions.splice(index, 1);
    } else {
      input.prop("checked", true);
      idAdmissions.push(input.attr("id"));
    }
  });
  $("body").on("dblclick", "#datatables_gestion_admission tbody tr", function () {
    // const input = $(this).find("input");
    if ($(this).hasClass("active_databales")) {
      $(this).removeClass("active_databales");
      $("#inscription-modal").attr("disabled", true);
      id_admission = null;
    } else {
      $("#datatables_gestion_admission tbody tr").removeClass("active_databales");
      $(this).addClass("active_databales");
      id_admission = $(this).attr("id");
      getNatureEtudiant();
      getInscriptionAnnee();
      getDocuments();
    }
  });
  $("#document").on("click", function () {
    if (!id_admission) {
      Toast.fire({
        icon: "error",
        title: "Veuillez selection une ligne!"
      });
      return;
    }

    $("#document_modal").modal("show");
  });
  $("body").on("click", ".ms-elem-selection", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var formData, request, data;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            $(".ms-selectable .ms-list").prepend($(this).clone().removeClass("ms-elem-selection").addClass("ms-elem-selectable"));
            formData = new FormData();
            formData.append("idDocument", $(this).attr("id"));
            formData.append("idAdmission", id_admission);
            $(this).remove();
            _context8.prev = 5;
            _context8.next = 8;
            return axios.post("/admission/gestion/deletedocument", formData);

          case 8:
            request = _context8.sent;
            _context8.next = 11;
            return request.data;

          case 11:
            data = _context8.sent;
            _context8.next = 17;
            break;

          case 14:
            _context8.prev = 14;
            _context8.t0 = _context8["catch"](5);
            Toast.fire({
              icon: "error",
              title: "error"
            });

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this, [[5, 14]]);
  })));
  $("body").on("click", ".ms-elem-selectable", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var formData, request, data;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            $(".ms-selection .ms-list").prepend($(this).clone().removeClass("ms-elem-selectable").addClass("ms-elem-selection"));
            formData = new FormData();
            formData.append("idDocument", $(this).attr("id"));
            formData.append("idAdmission", id_admission);
            $(this).remove();
            _context9.prev = 5;
            _context9.next = 8;
            return axios.post("/admission/gestion/adddocuments", formData);

          case 8:
            request = _context9.sent;
            _context9.next = 11;
            return request.data;

          case 11:
            data = _context9.sent;
            _context9.next = 17;
            break;

          case 14:
            _context9.prev = 14;
            _context9.t0 = _context9["catch"](5);
            Toast.fire({
              icon: "error",
              title: "error"
            });

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this, [[5, 14]]);
  })));

  var getFrais = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.prev = 0;
              _context10.next = 3;
              return axios.get("/api/frais/" + id_admission);

            case 3:
              request = _context10.sent;
              _context10.next = 6;
              return request.data;

            case 6:
              data = _context10.sent;
              $("#frais").html(data.list).select2();
              $("#code-facture").html(data.codefacture);
              $("#frais_inscription-modal").modal("show");
              _context10.next = 17;
              break;

            case 12:
              _context10.prev = 12;
              _context10.t0 = _context10["catch"](0);
              message = _context10.t0.response.data;
              console.log(_context10.t0, _context10.t0.response);
              Toast.fire({
                icon: "error",
                title: "Some Error"
              });

            case 17:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[0, 12]]);
    }));

    return function getFrais() {
      return _ref10.apply(this, arguments);
    };
  }();

  var getAdmissionInfos = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
      var _icon2, request, data, message;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.prev = 0;
              _icon2 = $("#frais-modal i");

              _icon2.removeClass("fa-money-bill-alt").addClass("fa-spinner fa-spin");

              _context11.next = 5;
              return axios.get("/admission/gestion/info/" + id_admission);

            case 5:
              request = _context11.sent;
              _context11.next = 8;
              return request.data;

            case 8:
              data = _context11.sent;
              $(".etudiant_info").html(data);

              _icon2.addClass("fa-money-bill-alt").removeClass("fa-spinner fa-spin");

              _context11.next = 19;
              break;

            case 13:
              _context11.prev = 13;
              _context11.t0 = _context11["catch"](0);
              message = _context11.t0.response.data;
              console.log(_context11.t0, _context11.t0.response);
              Toast.fire({
                icon: "error",
                title: "Some Error"
              });
              icon.addClass("fa-money-bill-alt").removeClass("fa-spinner fa-spin");

            case 19:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[0, 13]]);
    }));

    return function getAdmissionInfos() {
      return _ref11.apply(this, arguments);
    };
  }();

  $("#frais-modal").on("click", function () {
    if (!id_admission) {
      Toast.fire({
        icon: "error",
        title: "Veuillez selection une ligne!"
      });
      return;
    }

    getAdmissionInfos();
    getFrais();
  });
  $("input[type=radio][name=organ]").on("change", /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var request;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();

              if (!(this.value == 0)) {
                _context12.next = 10;
                break;
              }

              _context12.next = 4;
              return axios.get("/api/getorganismepasPayant");

            case 4:
              request = _context12.sent;
              response = request.data;
              $(".select-organ #org").html(response).select2();
              $(".select-organ").css("display", "block");
              _context12.next = 12;
              break;

            case 10:
              $(".select-organ #org").html("");
              $(".select-organ").css("display", "none");

            case 12:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this);
    }));

    return function (_x) {
      return _ref12.apply(this, arguments);
    };
  }());
  $("#add_frais_gestion").on("click", function () {
    var fraisId = $("#frais").find(":selected").val();

    if (fraisId != "") {
      var fraisText = $("#frais").find(":selected").text();
      var prix = $("#montant").val();
      var ice = $("#ice").val();
      var organ = $(".select-organ #org").find(":selected").text();
      var organisme_id = $(".select-organ #org").val();

      if (!$.isNumeric(fraisId) || prix == "") {
        return;
      }

      if ($("input[name='organ']:checked").val() == 1) {
        organisme_id = 7;
        organ = "Payant";
      } else if (organisme_id == "") {
        return;
      }

      console.log($("input[name='organ']:checked").val());
      frais.push({
        index: Math.floor(Math.random() * 1000 + 1),
        id: fraisId,
        designation: fraisText,
        montant: prix,
        ice: ice,
        organisme_id: organisme_id,
        organisme: organ
      });
      rawFrais();
    }
  });

  var rawFrais = function rawFrais() {
    var html = "";
    frais.map(function (f, i) {
      html += "\n            <tr>\n                <td>".concat(i + 1, "</td>\n                <td>").concat(f.designation, "</td>\n                <td>").concat(f.montant, "</td>\n                <td>").concat(f.ice, "</td>\n                <td>").concat(f.organisme, "</td>\n                <td><button class='delete_frais btn btn-danger'  id='").concat(f.index, "'><i class='fa fa-trash' ></i></button></td>\n            </tr>\n        ");
    }); // console.log(html);

    $(".table_frais_admission").html(html);
  };

  $("body").on("click", ".delete_frais", function () {
    var _this = this;

    var index = frais.findIndex(function (frais) {
      return frais.index == $(_this).attr("id");
    });
    frais.splice(index, 1);
    rawFrais();
  });
  $("#save_frais_gestion").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    var formData, modalAlert, icon, request, _response, message;

    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            formData = new FormData();
            formData.append("frais", JSON.stringify(frais)); // formData.append("organisme", $("#organisme").val())

            modalAlert = $("#frais_inscription-modal .modal-body .alert");
            modalAlert.remove();
            icon = $("#save_frais_gestion i");
            icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");
            _context13.prev = 6;
            _context13.next = 9;
            return axios.post("/admission/gestion/addfrais/" + id_admission, formData);

          case 9:
            request = _context13.sent;
            _response = request.data;
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>Bien Enregistre</p>\n              </div>");
            icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
            $(".table_frais_admission").empty();
            frais = [];
            window.open("/admission/gestion/facture/" + _response, "_blank");
            table.ajax.reload(null, false);
            _context13.next = 26;
            break;

          case 19:
            _context13.prev = 19;
            _context13.t0 = _context13["catch"](6);
            message = _context13.t0.response.data;
            console.log(_context13.t0, _context13.t0.response);
            modalAlert.remove();
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
            icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");

          case 26:
            setTimeout(function () {
              $("#frais_inscription-modal .modal-body .alert").remove();
            }, 3000);

          case 27:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[6, 19]]);
  })));
  $("#inscription-modal").on("click", function () {
    if (!id_admission) {
      Toast.fire({
        icon: "error",
        title: "Veuillez selection une ligne!"
      });
      return;
    }

    $("#inscription_modal .modal-body .alert").remove();
    $("#inscription_modal").modal("show");
  });
  $("#inscription_save").on("submit", /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      var formData, modalAlert, icon, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#inscription_modal .modal-body .alert");
              modalAlert.remove();
              button = $("#inscription_save .btn");
              button.prop("disabled", true);
              icon = $("#inscription_save .btn i");
              icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");
              _context14.prev = 8;
              _context14.next = 11;
              return axios.post("/admission/gestion/inscription/" + id_admission, formData);

            case 11:
              request = _context14.sent;
              _response2 = request.data;
              $("#inscription_modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response2, "</p>\n              </div>"));
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
              $("#annee_inscription, #promotion_inscription, #organisme").empty();
              table.ajax.reload(null, false);
              _context14.next = 27;
              break;

            case 19:
              _context14.prev = 19;
              _context14.t0 = _context14["catch"](8);
              message = _context14.t0.response.data;
              console.log(_context14.t0, _context14.t0.response);
              modalAlert.remove();
              $("#inscription_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
              button.prop("disabled", false);

            case 27:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this, [[8, 19]]);
    }));

    return function (_x2) {
      return _ref14.apply(this, arguments);
    };
  }());
  $("#attestation_admission").on("click", function () {
    if (!id_admission) {
      Toast.fire({
        icon: "error",
        title: "Veuillez selection une ligne!"
      });
      return;
    }

    window.open("/admission/gestion/attestation/" + id_admission, "_blank");
  });
  $("body").on("click", "#imprimer_docs", function () {
    if (!id_admission) {
      Toast.fire({
        icon: "error",
        title: "Merci de Choisir Une ligne!"
      });
      return;
    }

    window.open("/admission/gestion/print_documents_admission/" + id_admission, "_blank");
  });
  $("#inscription-masse").on("click", function (e) {
    e.preventDefault(); // alert("hi");

    $("#inscription_en_masse").modal("show");
    $("#inscription_en_masse .modal-body .alert").remove();
  });
  $("body").on("click", "#inscription_masse_enregistre", /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var formData, fileInput, modalAlert, icon, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              // const form = $("#inscription_masse_save");
              // console.log(form[0]);
              e.preventDefault();
              formData = new FormData();
              fileInput = $("body #file")[0];
              formData.append("file", fileInput.files[0]);
              modalAlert = $("#inscription_en_masse .modal-body .alert");
              modalAlert.remove();
              icon = $("#inscription_masse_enregistre i");
              icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");
              _context15.prev = 8;
              _context15.next = 11;
              return axios.post("/admission/gestion/reinscription", formData, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });

            case 11:
              request = _context15.sent;
              _response3 = request.data;
              $("#inscription_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>".concat(_response3.message, "</p>\n          </div>"));

              if (_response3.count > 0) {
                window.open("/" + _response3.file, "_blank");
              }

              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context15.next = 26;
              break;

            case 19:
              _context15.prev = 19;
              _context15.t0 = _context15["catch"](8);
              message = _context15.t0.response.data;
              console.log(_context15.t0, _context15.t0.response);
              modalAlert.remove();
              $("#inscription_masse_save .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");

            case 26:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[8, 19]]);
    }));

    return function (_x3) {
      return _ref15.apply(this, arguments);
    };
  }());
  $("#reinscription_canvas").on("click", function () {
    window.open("/admission/gestion/canvas", "_blank");
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ ((module) => {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError = global.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $findIndex = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function = global.Function;

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(isCallable(handler) ? handler : Function(handler), this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/admission/gestionadmission.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLHFGQUE0QjtBQUMvQyxvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcENELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pc3Npb24vZ2VzdGlvbmFkbWlzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gIHRvYXN0OiB0cnVlLFxyXG4gIHBvc2l0aW9uOiBcInRvcC1lbmRcIixcclxuICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgdGltZXI6IDMwMDAsXHJcbiAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcclxuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIFN3YWwucmVzdW1lVGltZXIpO1xyXG4gIH0sXHJcbn0pO1xyXG5sZXQgaWRfYWRtaXNzaW9uID0gZmFsc2U7XHJcbmxldCBpZEFkbWlzc2lvbnMgPSBbXTtcclxubGV0IGZyYWlzID0gW107XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHRhYmxlID0gJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fYWRtaXNzaW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgIF0sXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgYWpheDogXCIvYWRtaXNzaW9uL2dlc3Rpb24vbGlzdFwiLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlkQWRtaXNzaW9ucy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9hZG1pc3Npb24pLmFkZENsYXNzKFwiYWN0aXZlX2RhdGFiYWxlc1wiKTtcclxuICAgIH0sXHJcbiAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uIChzZXR0aW5ncykge1xyXG4gICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2FkbWlzc2lvblwiKSkge1xyXG4gICAgICAgIHZhciBkdCA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2FkbWlzc2lvblwiKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICB2YXIgc2V0dGluZ3MgPSBkdC5zZXR0aW5ncygpO1xyXG4gICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBnZXREb2N1bWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpY29uID0gJChcIiNkb2N1bWVudCBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2tcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgXCIvYWRtaXNzaW9uL2dlc3Rpb24vZ2V0ZG9jdW1lbnRzL1wiICsgaWRfYWRtaXNzaW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIubXMtc2VsZWN0YWJsZSAubXMtbGlzdFwiKS5odG1sKGRhdGEuZG9jdW1lbnRzKTtcclxuICAgICAgJChcIi5tcy1zZWxlY3Rpb24gLm1zLWxpc3RcIikuaHRtbChkYXRhLmRvY3VtZW50c0V4aXN0cyk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVja1wiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiU29tZSBFcnJvclwiLFxyXG4gICAgICB9KTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ2V0T3JnYW5pc21lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvb3JnYW5pc21lXCIpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiI29yZ2FuaXNtZVwiKS5odG1sKGRhdGEpLnNlbGVjdDIoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiU29tZSBFcnJvclwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGdldE5hdHVyZUV0dWRpYW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvbmF0dXJlX2V0dWRpYW50L1wiICsgaWRfYWRtaXNzaW9uKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNvcmdhbmlzbWVcIikuaHRtbChkYXRhKS5zZWxlY3QyKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlNvbWUgRXJyb3JcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICAkKFwiI2ZyYWlzXCIpLm9uKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICQoXCIjbW9udGFudFwiKS52YWwoJChcIiNmcmFpc1wiKS5maW5kKFwiOnNlbGVjdGVkXCIpLmRhdGEoXCJmcmFpc1wiKSk7XHJcbiAgfSk7XHJcbiAgZ2V0T3JnYW5pc21lKCk7XHJcbiAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgdGFibGUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gXCJcIjtcclxuICAgIGlmIChpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZm9ybWF0aW9uL1wiICsgaWRfZXRhYik7XHJcbiAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIiNhbm5lZVwiKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgIH1cclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICB9KTtcclxuICAkKFwiI2Zvcm1hdGlvblwiKS5vbihcImNoYW5nZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gXCJcIjtcclxuICAgIGlmIChpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9hbm5lZS9cIiArIGlkX2Zvcm1hdGlvbik7XHJcbiAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgfVxyXG4gICAgJChcIiNhbm5lZVwiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgfSk7XHJcbiAgJChcIiNhbm5lZVwiKS5vbihcImNoYW5nZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgdGFibGUuY29sdW1ucygyKS5zZWFyY2goJCh0aGlzKS52YWwoKSkuZHJhdygpO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGdldEluc2NyaXB0aW9uQW5uZWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNpbnNjcmlwdGlvbi1tb2RhbCBpXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLWNoZWNrXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIFwiL2FkbWlzc2lvbi9nZXN0aW9uL2dldEFubmVlRGlzcG9uaWJsZS9cIiArIGlkX2FkbWlzc2lvblxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiI2FubmVlX2luc2NyaXB0aW9uXCIpLmh0bWwoZGF0YS5hbm5lZUh0bWwpLnNlbGVjdDIoKTtcclxuICAgICAgJChcIiNwcm9tb3Rpb25faW5zY3JpcHRpb25cIikuaHRtbChkYXRhLnByb21vdGlvbkh0bWwpLnNlbGVjdDIoKTtcclxuICAgICAgJChcIiNpbnNjcmlwdGlvbi1tb2RhbFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgJChcIiNpbnNjcmlwdGlvbi1tb2RhbFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICQoXCIjYW5uZWVfaW5zY3JpcHRpb24sICNwcm9tb3Rpb25faW5zY3JpcHRpb25cIikuZW1wdHkoKTtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiaW5mb1wiLFxyXG4gICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVja1wiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICB9O1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9hZG1pc3Npb24gdGJvZHkgdHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgIGlmIChpbnB1dC5pcyhcIjpjaGVja2VkXCIpKSB7XHJcbiAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgY29uc3QgaW5kZXggPSBpZEFkbWlzc2lvbnMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICBpZEFkbWlzc2lvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICBpZEFkbWlzc2lvbnMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCJib2R5XCIpLm9uKFxyXG4gICAgXCJkYmxjbGlja1wiLFxyXG4gICAgXCIjZGF0YXRhYmxlc19nZXN0aW9uX2FkbWlzc2lvbiB0Ym9keSB0clwiLFxyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG5cclxuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVfZGF0YWJhbGVzXCIpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZV9kYXRhYmFsZXNcIik7XHJcbiAgICAgICAgJChcIiNpbnNjcmlwdGlvbi1tb2RhbFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgaWRfYWRtaXNzaW9uID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9hZG1pc3Npb24gdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgICBcImFjdGl2ZV9kYXRhYmFsZXNcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZV9kYXRhYmFsZXNcIik7XHJcbiAgICAgICAgaWRfYWRtaXNzaW9uID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgICAgZ2V0TmF0dXJlRXR1ZGlhbnQoKTtcclxuICAgICAgICBnZXRJbnNjcmlwdGlvbkFubmVlKCk7XHJcbiAgICAgICAgZ2V0RG9jdW1lbnRzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApO1xyXG5cclxuICAkKFwiI2RvY3VtZW50XCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCFpZF9hZG1pc3Npb24pIHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNkb2N1bWVudF9tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSk7XHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5tcy1lbGVtLXNlbGVjdGlvblwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLm1zLXNlbGVjdGFibGUgLm1zLWxpc3RcIikucHJlcGVuZChcclxuICAgICAgJCh0aGlzKVxyXG4gICAgICAgIC5jbG9uZSgpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwibXMtZWxlbS1zZWxlY3Rpb25cIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGFibGVcIilcclxuICAgICk7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImlkRG9jdW1lbnRcIiwgJCh0aGlzKS5hdHRyKFwiaWRcIikpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaWRBZG1pc3Npb25cIiwgaWRfYWRtaXNzaW9uKTtcclxuICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcIi9hZG1pc3Npb24vZ2VzdGlvbi9kZWxldGVkb2N1bWVudFwiLFxyXG4gICAgICAgIGZvcm1EYXRhXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiZXJyb3JcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5tcy1lbGVtLXNlbGVjdGFibGVcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5tcy1zZWxlY3Rpb24gLm1zLWxpc3RcIikucHJlcGVuZChcclxuICAgICAgJCh0aGlzKVxyXG4gICAgICAgIC5jbG9uZSgpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwibXMtZWxlbS1zZWxlY3RhYmxlXCIpXHJcbiAgICAgICAgLmFkZENsYXNzKFwibXMtZWxlbS1zZWxlY3Rpb25cIilcclxuICAgICk7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImlkRG9jdW1lbnRcIiwgJCh0aGlzKS5hdHRyKFwiaWRcIikpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaWRBZG1pc3Npb25cIiwgaWRfYWRtaXNzaW9uKTtcclxuICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcIi9hZG1pc3Npb24vZ2VzdGlvbi9hZGRkb2N1bWVudHNcIixcclxuICAgICAgICBmb3JtRGF0YVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcImVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IGdldEZyYWlzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZnJhaXMvXCIgKyBpZF9hZG1pc3Npb24pO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiI2ZyYWlzXCIpLmh0bWwoZGF0YS5saXN0KS5zZWxlY3QyKCk7XHJcbiAgICAgICQoXCIjY29kZS1mYWN0dXJlXCIpLmh0bWwoZGF0YS5jb2RlZmFjdHVyZSk7XHJcbiAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJTb21lIEVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ2V0QWRtaXNzaW9uSW5mb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpY29uID0gJChcIiNmcmFpcy1tb2RhbCBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtbW9uZXktYmlsbC1hbHRcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgXCIvYWRtaXNzaW9uL2dlc3Rpb24vaW5mby9cIiArIGlkX2FkbWlzc2lvblxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiLmV0dWRpYW50X2luZm9cIikuaHRtbChkYXRhKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLW1vbmV5LWJpbGwtYWx0XCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJTb21lIEVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtbW9uZXktYmlsbC1hbHRcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICAkKFwiI2ZyYWlzLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCFpZF9hZG1pc3Npb24pIHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBnZXRBZG1pc3Npb25JbmZvcygpO1xyXG4gICAgZ2V0RnJhaXMoKTtcclxuICB9KTtcclxuICAkKFwiaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1vcmdhbl1cIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLnZhbHVlID09IDApIHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZ2V0b3JnYW5pc21lcGFzUGF5YW50XCIpO1xyXG4gICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIi5zZWxlY3Qtb3JnYW4gI29yZ1wiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICQoXCIuc2VsZWN0LW9yZ2FuXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuc2VsZWN0LW9yZ2FuICNvcmdcIikuaHRtbChcIlwiKTtcclxuICAgICAgJChcIi5zZWxlY3Qtb3JnYW5cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIiNhZGRfZnJhaXNfZ2VzdGlvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGxldCBmcmFpc0lkID0gJChcIiNmcmFpc1wiKS5maW5kKFwiOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG4gICAgaWYgKGZyYWlzSWQgIT0gXCJcIikge1xyXG4gICAgICBsZXQgZnJhaXNUZXh0ID0gJChcIiNmcmFpc1wiKS5maW5kKFwiOnNlbGVjdGVkXCIpLnRleHQoKTtcclxuICAgICAgbGV0IHByaXggPSAkKFwiI21vbnRhbnRcIikudmFsKCk7XHJcbiAgICAgIGxldCBpY2UgPSAkKFwiI2ljZVwiKS52YWwoKTtcclxuICAgICAgbGV0IG9yZ2FuID0gJChcIi5zZWxlY3Qtb3JnYW4gI29yZ1wiKS5maW5kKFwiOnNlbGVjdGVkXCIpLnRleHQoKTtcclxuICAgICAgbGV0IG9yZ2FuaXNtZV9pZCA9ICQoXCIuc2VsZWN0LW9yZ2FuICNvcmdcIikudmFsKCk7XHJcbiAgICAgIGlmICghJC5pc051bWVyaWMoZnJhaXNJZCkgfHwgcHJpeCA9PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgkKFwiaW5wdXRbbmFtZT0nb3JnYW4nXTpjaGVja2VkXCIpLnZhbCgpID09IDEpIHtcclxuICAgICAgICBvcmdhbmlzbWVfaWQgPSA3O1xyXG4gICAgICAgIG9yZ2FuID0gXCJQYXlhbnRcIjtcclxuICAgICAgfSBlbHNlIGlmIChvcmdhbmlzbWVfaWQgPT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygkKFwiaW5wdXRbbmFtZT0nb3JnYW4nXTpjaGVja2VkXCIpLnZhbCgpKTtcclxuICAgICAgZnJhaXMucHVzaCh7XHJcbiAgICAgICAgaW5kZXg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAgKyAxKSxcclxuICAgICAgICBpZDogZnJhaXNJZCxcclxuICAgICAgICBkZXNpZ25hdGlvbjogZnJhaXNUZXh0LFxyXG4gICAgICAgIG1vbnRhbnQ6IHByaXgsXHJcbiAgICAgICAgaWNlOiBpY2UsXHJcbiAgICAgICAgb3JnYW5pc21lX2lkOiBvcmdhbmlzbWVfaWQsXHJcbiAgICAgICAgb3JnYW5pc21lOiBvcmdhbixcclxuICAgICAgfSk7XHJcbiAgICAgIHJhd0ZyYWlzKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgcmF3RnJhaXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgaHRtbCA9IFwiXCI7XHJcbiAgICBmcmFpcy5tYXAoKGYsIGkpID0+IHtcclxuICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLmRlc2lnbmF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLm1vbnRhbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2YuaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLm9yZ2FuaXNtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9J2RlbGV0ZV9mcmFpcyBidG4gYnRuLWRhbmdlcicgIGlkPScke1xyXG4gICAgICAgICAgICAgICAgICBmLmluZGV4XHJcbiAgICAgICAgICAgICAgICB9Jz48aSBjbGFzcz0nZmEgZmEtdHJhc2gnID48L2k+PC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICBgO1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhodG1sKTtcclxuICAgICQoXCIudGFibGVfZnJhaXNfYWRtaXNzaW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgfTtcclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmRlbGV0ZV9mcmFpc1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGZyYWlzLmZpbmRJbmRleCgoZnJhaXMpID0+IGZyYWlzLmluZGV4ID09ICQodGhpcykuYXR0cihcImlkXCIpKTtcclxuICAgIGZyYWlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICByYXdGcmFpcygpO1xyXG4gIH0pO1xyXG4gICQoXCIjc2F2ZV9mcmFpc19nZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmcmFpc1wiLCBKU09OLnN0cmluZ2lmeShmcmFpcykpO1xyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwib3JnYW5pc21lXCIsICQoXCIjb3JnYW5pc21lXCIpLnZhbCgpKVxyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuXHJcbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjc2F2ZV9mcmFpc19nZXN0aW9uIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiL2FkbWlzc2lvbi9nZXN0aW9uL2FkZGZyYWlzL1wiICsgaWRfYWRtaXNzaW9uLFxyXG4gICAgICAgIGZvcm1EYXRhXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5CaWVuIEVucmVnaXN0cmU8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgJChcIi50YWJsZV9mcmFpc19hZG1pc3Npb25cIikuZW1wdHkoKTtcclxuICAgICAgZnJhaXMgPSBbXTtcclxuICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaXNzaW9uL2dlc3Rpb24vZmFjdHVyZS9cIiArIHJlc3BvbnNlLCBcIl9ibGFua1wiKTtcclxuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjaW5zY3JpcHRpb24tbW9kYWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAoIWlkX2FkbWlzc2lvbikge1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSFcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjaW5zY3JpcHRpb25fbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgJChcIiNpbnNjcmlwdGlvbl9tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjaW5zY3JpcHRpb25fc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2luc2NyaXB0aW9uX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuXHJcbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgYnV0dG9uID0gJChcIiNpbnNjcmlwdGlvbl9zYXZlIC5idG5cIik7XHJcbiAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjaW5zY3JpcHRpb25fc2F2ZSAuYnRuIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCIvYWRtaXNzaW9uL2dlc3Rpb24vaW5zY3JpcHRpb24vXCIgKyBpZF9hZG1pc3Npb24sXHJcbiAgICAgICAgZm9ybURhdGFcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjaW5zY3JpcHRpb25fbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICQoXCIjYW5uZWVfaW5zY3JpcHRpb24sICNwcm9tb3Rpb25faW5zY3JpcHRpb24sICNvcmdhbmlzbWVcIikuZW1wdHkoKTtcclxuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjaW5zY3JpcHRpb25fbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICBidXR0b24ucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiNhdHRlc3RhdGlvbl9hZG1pc3Npb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIWlkX2FkbWlzc2lvbikge1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSFcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHdpbmRvdy5vcGVuKFwiL2FkbWlzc2lvbi9nZXN0aW9uL2F0dGVzdGF0aW9uL1wiICsgaWRfYWRtaXNzaW9uLCBcIl9ibGFua1wiKTtcclxuICB9KTtcclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2ltcHJpbWVyX2RvY3NcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCFpZF9hZG1pc3Npb24pIHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIk1lcmNpIGRlIENob2lzaXIgVW5lIGxpZ25lIVwiLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93Lm9wZW4oXHJcbiAgICAgIFwiL2FkbWlzc2lvbi9nZXN0aW9uL3ByaW50X2RvY3VtZW50c19hZG1pc3Npb24vXCIgKyBpZF9hZG1pc3Npb24sXHJcbiAgICAgIFwiX2JsYW5rXCJcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjaW5zY3JpcHRpb24tbWFzc2VcIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gYWxlcnQoXCJoaVwiKTtcclxuICAgICQoXCIjaW5zY3JpcHRpb25fZW5fbWFzc2VcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgJChcIiNpbnNjcmlwdGlvbl9lbl9tYXNzZSAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjaW5zY3JpcHRpb25fbWFzc2VfZW5yZWdpc3RyZVwiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gY29uc3QgZm9ybSA9ICQoXCIjaW5zY3JpcHRpb25fbWFzc2Vfc2F2ZVwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZvcm1bMF0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGNvbnN0IGZpbGVJbnB1dCA9ICQoXCJib2R5ICNmaWxlXCIpWzBdO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlSW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2luc2NyaXB0aW9uX2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuXHJcbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjaW5zY3JpcHRpb25fbWFzc2VfZW5yZWdpc3RyZSBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcIi9hZG1pc3Npb24vZ2VzdGlvbi9yZWluc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgZm9ybURhdGEsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNpbnNjcmlwdGlvbl9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8cD4ke3Jlc3BvbnNlLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2UuY291bnQgPiAwKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvXCIgKyByZXNwb25zZS5maWxlLCBcIl9ibGFua1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjaW5zY3JpcHRpb25fbWFzc2Vfc2F2ZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIiNyZWluc2NyaXB0aW9uX2NhbnZhc1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5vcGVuKFwiL2FkbWlzc2lvbi9nZXN0aW9uL2NhbnZhc1wiLCBcIl9ibGFua1wiKTtcclxuICB9KTtcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmRJbmRleDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORF9JTkRFWCA9ICdmaW5kSW5kZXgnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChGSU5EX0lOREVYIGluIFtdKSBBcnJheSgxKVtGSU5EX0lOREVYXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kaW5kZXhcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmRJbmRleCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkRfSU5ERVgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX2FkbWlzc2lvbiIsImlkQWRtaXNzaW9ucyIsImZyYWlzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJmb3JFYWNoIiwiZSIsImZpbmQiLCJwcm9wIiwiYWRkQ2xhc3MiLCJwcmVEcmF3Q2FsbGJhY2siLCJzZXR0aW5ncyIsImZuIiwiaXNEYXRhVGFibGUiLCJkdCIsImpxWEhSIiwiYWJvcnQiLCJsYW5ndWFnZSIsInVybCIsImdldERvY3VtZW50cyIsImljb24iLCJyZW1vdmVDbGFzcyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiZG9jdW1lbnRzIiwiZG9jdW1lbnRzRXhpc3RzIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImZpcmUiLCJ0aXRsZSIsImdldE9yZ2FuaXNtZSIsInNlbGVjdDIiLCJnZXROYXR1cmVFdHVkaWFudCIsIm9uIiwidmFsIiwiaWRfZXRhYiIsImNvbHVtbnMiLCJzZWFyY2giLCJkcmF3IiwiaWRfZm9ybWF0aW9uIiwiZ2V0SW5zY3JpcHRpb25Bbm5lZSIsImFubmVlSHRtbCIsInByb21vdGlvbkh0bWwiLCJhdHRyIiwiZW1wdHkiLCJpbnB1dCIsImlzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImhhc0NsYXNzIiwibW9kYWwiLCJwcmVwZW5kIiwiY2xvbmUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVtb3ZlIiwicG9zdCIsImdldEZyYWlzIiwibGlzdCIsImNvZGVmYWN0dXJlIiwiZ2V0QWRtaXNzaW9uSW5mb3MiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiY3NzIiwiZnJhaXNJZCIsImZyYWlzVGV4dCIsInRleHQiLCJwcml4IiwiaWNlIiwib3JnYW4iLCJvcmdhbmlzbWVfaWQiLCJpc051bWVyaWMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpZCIsImRlc2lnbmF0aW9uIiwibW9udGFudCIsIm9yZ2FuaXNtZSIsInJhd0ZyYWlzIiwibWFwIiwiZiIsImkiLCJmaW5kSW5kZXgiLCJKU09OIiwic3RyaW5naWZ5IiwibW9kYWxBbGVydCIsIndpbmRvdyIsIm9wZW4iLCJyZWxvYWQiLCJzZXRUaW1lb3V0IiwiYnV0dG9uIiwiZmlsZUlucHV0IiwiZmlsZXMiLCJoZWFkZXJzIiwiY291bnQiLCJmaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==