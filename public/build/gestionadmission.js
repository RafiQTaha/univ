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
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: function didOpen(toast) {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
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
      $("body tr#" + id_admission).addClass('active_databales');
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datatables_gestion_admission')) {
        var dt = $('#datatables_gestion_admission').DataTable(); //Abort previous ajax request if it is still in process.

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
              _icon = $('#document i');

              _icon.removeClass('fa-check').addClass('fa-spinner fa-spin');

              _context.next = 5;
              return axios.get("/admission/gestion/getdocuments/" + id_admission);

            case 5:
              request = _context.sent;
              _context.next = 8;
              return request.data;

            case 8:
              data = _context.sent;
              $('.ms-selectable .ms-list').html(data.documents);
              $('.ms-selection .ms-list').html(data.documentsExists);

              _icon.addClass('fa-check').removeClass('fa-spinner fa-spin');

              _context.next = 20;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-check').removeClass('fa-spinner fa-spin');

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
              $('#organisme').html(data).select2();
              _context2.next = 15;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              message = _context2.t0.response.data;
              console.log(_context2.t0, _context2.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
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
              $('#organisme').html(data).select2();
              _context3.next = 15;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              message = _context3.t0.response.data;
              console.log(_context3.t0, _context3.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
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
    $("#montant").val($("#frais").find(":selected").data('frais'));
  });
  getOrganisme();
  $("#etablissement").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
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
            return axios.get('/api/formation/' + id_etab);

          case 7:
            request = _context4.sent;
            response = request.data;
            _context4.next = 12;
            break;

          case 11:
            $('#annee').html("").select2();

          case 12:
            $('#formation').html(response).select2();

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
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
            return axios.get('/api/annee/' + id_formation);

          case 7:
            request = _context5.sent;
            response = request.data;

          case 9:
            $('#annee').html(response).select2();

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#annee").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
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
              icon = $('#inscription-modal i');
              _context7.prev = 1;
              icon.removeClass('fa-check').addClass('fa-spinner fa-spin');
              _context7.next = 5;
              return axios.get("/admission/gestion/getAnneeDisponible/" + id_admission);

            case 5:
              request = _context7.sent;
              _context7.next = 8;
              return request.data;

            case 8:
              data = _context7.sent;
              $('#annee_inscription').html(data.anneeHtml).select2();
              $('#promotion_inscription').html(data.promotionHtml).select2();
              $('#inscription-modal').attr('disabled', false);
              _context7.next = 21;
              break;

            case 14:
              _context7.prev = 14;
              _context7.t0 = _context7["catch"](1);
              $('#inscription-modal').attr('disabled', true);
              $('#annee_inscription, #promotion_inscription').empty();
              message = _context7.t0.response.data;
              console.log(_context7.t0, _context7.t0.response);
              Toast.fire({
                icon: 'info',
                title: message
              });

            case 21:
              icon.addClass('fa-check').removeClass('fa-spinner fa-spin');

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

  $('body').on('click', '#datatables_gestion_admission tbody tr', function () {
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
  $('body').on('dblclick', '#datatables_gestion_admission tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      $('#inscription-modal').attr('disabled', true);
      id_admission = null;
    } else {
      $("#datatables_gestion_admission tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_admission = $(this).attr('id');
      getNatureEtudiant();
      getInscriptionAnnee();
      getDocuments();
    }
  });
  $("#document").on("click", function () {
    if (!id_admission) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
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
            $('.ms-selectable .ms-list').prepend($(this).clone().removeClass("ms-elem-selection").addClass("ms-elem-selectable"));
            formData = new FormData();
            formData.append('idDocument', $(this).attr("id"));
            formData.append('idAdmission', id_admission);
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
              icon: 'error',
              title: 'error'
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
            $('.ms-selection .ms-list').prepend($(this).clone().removeClass("ms-elem-selectable").addClass("ms-elem-selection"));
            formData = new FormData();
            formData.append('idDocument', $(this).attr("id"));
            formData.append('idAdmission', id_admission);
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
              icon: 'error',
              title: 'error'
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
              $('#frais').html(data.list).select2();
              $('#code-facture').html(data.codefacture);
              $("#frais_inscription-modal").modal("show");
              _context10.next = 17;
              break;

            case 12:
              _context10.prev = 12;
              _context10.t0 = _context10["catch"](0);
              message = _context10.t0.response.data;
              console.log(_context10.t0, _context10.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
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
              _icon2 = $('#frais-modal i');

              _icon2.removeClass('fa-money-bill-alt').addClass('fa-spinner fa-spin');

              _context11.next = 5;
              return axios.get("/admission/gestion/info/" + id_admission);

            case 5:
              request = _context11.sent;
              _context11.next = 8;
              return request.data;

            case 8:
              data = _context11.sent;
              $('.etudiant_info').html(data);

              _icon2.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin');

              _context11.next = 19;
              break;

            case 13:
              _context11.prev = 13;
              _context11.t0 = _context11["catch"](0);
              message = _context11.t0.response.data;
              console.log(_context11.t0, _context11.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin');

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
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    getAdmissionInfos();
    getFrais();
  });
  $('input[type=radio][name=organ]').on('change', /*#__PURE__*/function () {
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
              return axios.get('/api/getorganismepasPayant');

            case 4:
              request = _context12.sent;
              response = request.data;
              $('.select-organ #org').html(response).select2();
              $('.select-organ').css('display', 'block');
              _context12.next = 12;
              break;

            case 10:
              $('.select-organ #org').html("");
              $('.select-organ').css('display', 'none');

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
      var organ = $('.select-organ #org').find(':selected').text();
      var organisme_id = $('.select-organ #org').val();

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

  $("body").on("click", '.delete_frais', function () {
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
            icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
            _context13.prev = 6;
            _context13.next = 9;
            return axios.post('/admission/gestion/addfrais/' + id_admission, formData);

          case 9:
            request = _context13.sent;
            _response = request.data;
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>Bien Enregistre</p>\n              </div>");
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $(".table_frais_admission").empty();
            frais = [];
            window.open("/admission/gestion/facture/" + _response, '_blank');
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
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

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
        icon: 'error',
        title: 'Veuillez selection une ligne!'
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
              button.prop('disabled', true);
              icon = $("#inscription_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context14.prev = 8;
              _context14.next = 11;
              return axios.post('/admission/gestion/inscription/' + id_admission, formData);

            case 11:
              request = _context14.sent;
              _response2 = request.data;
              $("#inscription_modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response2, "</p>\n              </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
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
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              button.prop('disabled', false);

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
  $("#attestation_admission").on('click', function () {
    if (!id_admission) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    window.open("/admission/gestion/attestation/" + id_admission, '_blank');
  });
  $('body').on('click', '#imprimer_docs', function () {
    if (!id_admission) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de Choisir Une ligne!'
      });
      return;
    }

    window.open('/admission/gestion/print_documents_admission/' + id_admission, '_blank');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLHFGQUE0QjtBQUMvQyxvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcENELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pc3Npb24vZ2VzdGlvbmFkbWlzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfYWRtaXNzaW9uID0gZmFsc2U7XHJcbiAgICBsZXQgaWRBZG1pc3Npb25zID0gW107XHJcbiAgICBsZXQgZnJhaXMgPSBbXTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2FkbWlzc2lvblwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9hZG1pc3Npb24vZ2VzdGlvbi9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWRBZG1pc3Npb25zLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfYWRtaXNzaW9uKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2RhdGF0YWJsZXNfZ2VzdGlvbl9hZG1pc3Npb24nKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2RhdGF0YWJsZXNfZ2VzdGlvbl9hZG1pc3Npb24nKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0Fib3J0IHByZXZpb3VzIGFqYXggcmVxdWVzdCBpZiBpdCBpcyBzdGlsbCBpbiBwcm9jZXNzLlxyXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gZHQuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZ2V0RG9jdW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKCcjZG9jdW1lbnQgaScpXHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYWRtaXNzaW9uL2dlc3Rpb24vZ2V0ZG9jdW1lbnRzL1wiK2lkX2FkbWlzc2lvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJy5tcy1zZWxlY3RhYmxlIC5tcy1saXN0JykuaHRtbChkYXRhLmRvY3VtZW50cylcclxuICAgICAgICAgICAgJCgnLm1zLXNlbGVjdGlvbiAubXMtbGlzdCcpLmh0bWwoZGF0YS5kb2N1bWVudHNFeGlzdHMpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgICAgIH0pICAgIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGdldE9yZ2FuaXNtZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9vcmdhbmlzbWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyNvcmdhbmlzbWUnKS5odG1sKGRhdGEpLnNlbGVjdDIoKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgICAgICB9KSAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXROYXR1cmVFdHVkaWFudCA9IGFzeW5jICgpID0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL25hdHVyZV9ldHVkaWFudC9cIitpZF9hZG1pc3Npb24pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKCcjb3JnYW5pc21lJykuaHRtbChkYXRhKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcclxuICAgICAgICAgICAgfSkgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJChcIiNmcmFpc1wiKS5vbihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgJChcIiNtb250YW50XCIpLnZhbCgkKFwiI2ZyYWlzXCIpLmZpbmQoXCI6c2VsZWN0ZWRcIikuZGF0YSgnZnJhaXMnKSlcclxuICAgIH0pXHJcbiAgICBnZXRPcmdhbmlzbWUoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKClcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKCcjYW5uZWUnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FubmVlLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2FubmVlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjYW5uZWVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygyKS5zZWFyY2goJCh0aGlzKS52YWwoKSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgIGNvbnN0IGdldEluc2NyaXB0aW9uQW5uZWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoJyNpbnNjcmlwdGlvbi1tb2RhbCBpJylcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FkbWlzc2lvbi9nZXN0aW9uL2dldEFubmVlRGlzcG9uaWJsZS9cIitpZF9hZG1pc3Npb24pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKCcjYW5uZWVfaW5zY3JpcHRpb24nKS5odG1sKGRhdGEuYW5uZWVIdG1sKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJyNwcm9tb3Rpb25faW5zY3JpcHRpb24nKS5odG1sKGRhdGEucHJvbW90aW9uSHRtbCkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKCcjaW5zY3JpcHRpb24tbW9kYWwnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAkKCcjaW5zY3JpcHRpb24tbW9kYWwnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAkKCcjYW5uZWVfaW5zY3JpcHRpb24sICNwcm9tb3Rpb25faW5zY3JpcHRpb24nKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdpbmZvJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhdGFibGVzX2dlc3Rpb25fYWRtaXNzaW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRBZG1pc3Npb25zLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICAgICAgaWRBZG1pc3Npb25zLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgaWRBZG1pc3Npb25zLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhdGFibGVzX2dlc3Rpb25fYWRtaXNzaW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKCcjaW5zY3JpcHRpb24tbW9kYWwnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICBpZF9hZG1pc3Npb24gPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2FkbWlzc2lvbiB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2FkbWlzc2lvbiA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgZ2V0TmF0dXJlRXR1ZGlhbnQoKTtcclxuICAgICAgICAgICAgZ2V0SW5zY3JpcHRpb25Bbm5lZSgpO1xyXG4gICAgICAgICAgICBnZXREb2N1bWVudHMoKTsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNkb2N1bWVudFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZighaWRfYWRtaXNzaW9uKXtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICQoXCIjZG9jdW1lbnRfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5tcy1lbGVtLXNlbGVjdGlvblwiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcubXMtc2VsZWN0YWJsZSAubXMtbGlzdCcpLnByZXBlbmQoJCh0aGlzKS5jbG9uZSgpLnJlbW92ZUNsYXNzKFwibXMtZWxlbS1zZWxlY3Rpb25cIikuYWRkQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGFibGVcIikpXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZERvY3VtZW50JywgJCh0aGlzKS5hdHRyKFwiaWRcIikpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZEFkbWlzc2lvbicsIGlkX2FkbWlzc2lvbik7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hZG1pc3Npb24vZ2VzdGlvbi9kZWxldGVkb2N1bWVudFwiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLm1zLWVsZW0tc2VsZWN0YWJsZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcubXMtc2VsZWN0aW9uIC5tcy1saXN0JykucHJlcGVuZCgkKHRoaXMpLmNsb25lKCkucmVtb3ZlQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGFibGVcIikuYWRkQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGlvblwiKSlcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkRG9jdW1lbnQnLCAkKHRoaXMpLmF0dHIoXCJpZFwiKSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkQWRtaXNzaW9uJywgaWRfYWRtaXNzaW9uKTtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FkbWlzc2lvbi9nZXN0aW9uL2FkZGRvY3VtZW50c1wiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGdldEZyYWlzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2ZyYWlzL1wiK2lkX2FkbWlzc2lvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyNmcmFpcycpLmh0bWwoZGF0YS5saXN0KS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJyNjb2RlLWZhY3R1cmUnKS5odG1sKGRhdGEuY29kZWZhY3R1cmUpO1xyXG4gICAgICAgICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG5cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGdldEFkbWlzc2lvbkluZm9zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKCcjZnJhaXMtbW9kYWwgaScpXHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JykuYWRkQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYWRtaXNzaW9uL2dlc3Rpb24vaW5mby9cIitpZF9hZG1pc3Npb24pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKCcuZXR1ZGlhbnRfaW5mbycpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICQoXCIjZnJhaXMtbW9kYWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlkX2FkbWlzc2lvbil7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRBZG1pc3Npb25JbmZvcygpOyBcclxuICAgICAgICBnZXRGcmFpcygpO1xyXG4gICAgfSlcclxuICAgICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9b3JnYW5dJykub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldG9yZ2FuaXNtZXBhc1BheWFudCcpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2FkZF9mcmFpc19nZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgZnJhaXNJZCA9ICQoXCIjZnJhaXNcIikuZmluZChcIjpzZWxlY3RlZFwiKS52YWwoKTtcclxuICAgICAgICBpZihmcmFpc0lkICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbGV0IGZyYWlzVGV4dCA9ICQoXCIjZnJhaXNcIikuZmluZChcIjpzZWxlY3RlZFwiKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGxldCBwcml4ID0gJChcIiNtb250YW50XCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgaWNlID0gJChcIiNpY2VcIikudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCBvcmdhbiAgPSAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5maW5kKCc6c2VsZWN0ZWQnKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGxldCBvcmdhbmlzbWVfaWQgID0gJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykudmFsKCk7XHJcbiAgICAgICAgICAgIGlmICghJC5pc051bWVyaWMoZnJhaXNJZCkgfHwgcHJpeCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChcImlucHV0W25hbWU9J29yZ2FuJ106Y2hlY2tlZFwiKS52YWwoKSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvcmdhbmlzbWVfaWQgPSA3XHJcbiAgICAgICAgICAgICAgICBvcmdhbiA9IFwiUGF5YW50XCJcclxuICAgICAgICAgICAgfWVsc2UgaWYob3JnYW5pc21lX2lkID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJChcImlucHV0W25hbWU9J29yZ2FuJ106Y2hlY2tlZFwiKS52YWwoKSk7XHJcbiAgICAgICAgICAgICAgICBmcmFpcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA6IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBmcmFpc0lkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbmF0aW9uOiBmcmFpc1RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGFudDogcHJpeCxcclxuICAgICAgICAgICAgICAgICAgICBpY2U6IGljZSxcclxuICAgICAgICAgICAgICAgICAgICBvcmdhbmlzbWVfaWQ6IG9yZ2FuaXNtZV9pZCxcclxuICAgICAgICAgICAgICAgICAgICBvcmdhbmlzbWU6IG9yZ2FuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJhd0ZyYWlzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnN0IHJhd0ZyYWlzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBodG1sID0gXCJcIjtcclxuICAgICAgICBmcmFpcy5tYXAoKGYsIGkpID0+IHtcclxuICAgICAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLmRlc2lnbmF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLm1vbnRhbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2YuaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLm9yZ2FuaXNtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9J2RlbGV0ZV9mcmFpcyBidG4gYnRuLWRhbmdlcicgIGlkPScke2YuaW5kZXh9Jz48aSBjbGFzcz0nZmEgZmEtdHJhc2gnID48L2k+PC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICBgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhodG1sKTtcclxuICAgICAgICAkKFwiLnRhYmxlX2ZyYWlzX2FkbWlzc2lvblwiKS5odG1sKGh0bWwpXHJcbiAgICB9XHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcuZGVsZXRlX2ZyYWlzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZnJhaXMuZmluZEluZGV4KGZyYWlzID0+IGZyYWlzLmluZGV4ID09ICQodGhpcykuYXR0cihcImlkXCIpKTtcclxuICAgICAgICBmcmFpcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgcmF3RnJhaXMoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NhdmVfZnJhaXNfZ2VzdGlvblwiKS5vbihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmcmFpc1wiLCBKU09OLnN0cmluZ2lmeShmcmFpcykpXHJcbiAgICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKFwib3JnYW5pc21lXCIsICQoXCIjb3JnYW5pc21lXCIpLnZhbCgpKVxyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgIFxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc2F2ZV9mcmFpc19nZXN0aW9uIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaXNzaW9uL2dlc3Rpb24vYWRkZnJhaXMvJytpZF9hZG1pc3Npb24sIGZvcm1EYXRhKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPkJpZW4gRW5yZWdpc3RyZTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgJChcIi50YWJsZV9mcmFpc19hZG1pc3Npb25cIikuZW1wdHkoKVxyXG4gICAgICAgICAgZnJhaXMgPSBbXTtcclxuICAgICAgICAgIHdpbmRvdy5vcGVuKFwiL2FkbWlzc2lvbi9nZXN0aW9uL2ZhY3R1cmUvXCIrcmVzcG9uc2UsICdfYmxhbmsnKTtcclxuICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2luc2NyaXB0aW9uLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpZF9hZG1pc3Npb24pe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNpbnNjcmlwdGlvbl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKClcclxuICAgICAgICAkKFwiI2luc2NyaXB0aW9uX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2luc2NyaXB0aW9uX3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2luc2NyaXB0aW9uX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBidXR0b24gPSAkKFwiI2luc2NyaXB0aW9uX3NhdmUgLmJ0blwiKTtcclxuICAgICAgICBidXR0b24ucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNpbnNjcmlwdGlvbl9zYXZlIC5idG4gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pc3Npb24vZ2VzdGlvbi9pbnNjcmlwdGlvbi8nK2lkX2FkbWlzc2lvbiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAkKFwiI2luc2NyaXB0aW9uX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICQoXCIjYW5uZWVfaW5zY3JpcHRpb24sICNwcm9tb3Rpb25faW5zY3JpcHRpb24sICNvcmdhbmlzbWVcIikuZW1wdHkoKVxyXG4gICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkKFwiI2luc2NyaXB0aW9uX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICBidXR0b24ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2F0dGVzdGF0aW9uX2FkbWlzc2lvblwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCFpZF9hZG1pc3Npb24pIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaXNzaW9uL2dlc3Rpb24vYXR0ZXN0YXRpb24vXCIraWRfYWRtaXNzaW9uLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNpbXByaW1lcl9kb2NzJywgZnVuY3Rpb24gKCl7XHJcbiAgICAgIGlmKCFpZF9hZG1pc3Npb24pe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBVbmUgbGlnbmUhJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgd2luZG93Lm9wZW4oJy9hZG1pc3Npb24vZ2VzdGlvbi9wcmludF9kb2N1bWVudHNfYWRtaXNzaW9uLycraWRfYWRtaXNzaW9uLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG59KVxyXG4gICAgXHJcbiAgICAiLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoRSk7XG4gICAgICAgIGlmIChuICsgbGVuID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuID49IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmRJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kSW5kZXg7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkRfSU5ERVggPSAnZmluZEluZGV4JztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORF9JTkRFWCBpbiBbXSkgQXJyYXkoMSlbRklORF9JTkRFWF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZGluZGV4XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmRJbmRleDogZnVuY3Rpb24gZmluZEluZGV4KGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kSW5kZXgodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EX0lOREVYKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9hZG1pc3Npb24iLCJpZEFkbWlzc2lvbnMiLCJmcmFpcyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInJlc3BvbnNpdmUiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwicHJlRHJhd0NhbGxiYWNrIiwic2V0dGluZ3MiLCJmbiIsImlzRGF0YVRhYmxlIiwiZHQiLCJqcVhIUiIsImFib3J0IiwibGFuZ3VhZ2UiLCJ1cmwiLCJnZXREb2N1bWVudHMiLCJpY29uIiwicmVtb3ZlQ2xhc3MiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImRvY3VtZW50cyIsImRvY3VtZW50c0V4aXN0cyIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJmaXJlIiwidGl0bGUiLCJnZXRPcmdhbmlzbWUiLCJzZWxlY3QyIiwiZ2V0TmF0dXJlRXR1ZGlhbnQiLCJvbiIsInZhbCIsImlkX2V0YWIiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsImlkX2Zvcm1hdGlvbiIsImdldEluc2NyaXB0aW9uQW5uZWUiLCJhbm5lZUh0bWwiLCJwcm9tb3Rpb25IdG1sIiwiYXR0ciIsImVtcHR5IiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJoYXNDbGFzcyIsIm1vZGFsIiwicHJlcGVuZCIsImNsb25lIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlbW92ZSIsInBvc3QiLCJnZXRGcmFpcyIsImxpc3QiLCJjb2RlZmFjdHVyZSIsImdldEFkbWlzc2lvbkluZm9zIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImNzcyIsImZyYWlzSWQiLCJmcmFpc1RleHQiLCJ0ZXh0IiwicHJpeCIsImljZSIsIm9yZ2FuIiwib3JnYW5pc21lX2lkIiwiaXNOdW1lcmljIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJkZXNpZ25hdGlvbiIsIm1vbnRhbnQiLCJvcmdhbmlzbWUiLCJyYXdGcmFpcyIsIm1hcCIsImYiLCJpIiwiZmluZEluZGV4IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGFsQWxlcnQiLCJ3aW5kb3ciLCJvcGVuIiwicmVsb2FkIiwic2V0VGltZW91dCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=