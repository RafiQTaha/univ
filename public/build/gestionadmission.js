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

__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

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
    drawCallback: function drawCallback() {
      idAdmissions.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_admission).addClass('active_databales');
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

  var getFrais = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios.get("/api/frais/" + id_admission);

            case 3:
              request = _context3.sent;
              _context3.next = 6;
              return request.data;

            case 6:
              data = _context3.sent;
              $('#frais').html(data).select2();
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

    return function getFrais() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getNatureEtudiant = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios.get("/api/nature_etudiant/" + id_admission);

            case 3:
              request = _context4.sent;
              _context4.next = 6;
              return request.data;

            case 6:
              data = _context4.sent;
              $('#organisme').html(data).select2();
              _context4.next = 15;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              message = _context4.t0.response.data;
              console.log(_context4.t0, _context4.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }));

    return function getNatureEtudiant() {
      return _ref4.apply(this, arguments);
    };
  }();

  $("#frais").on("change", function () {
    $("#montant").val($("#frais").find(":selected").data('frais'));
  });
  getOrganisme();
  $("#etablissement").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_etab = $(this).val();
            table.columns().search("");
            table.columns(0).search(id_etab).draw();
            response = "";

            if (!(id_etab != "")) {
              _context5.next = 11;
              break;
            }

            _context5.next = 7;
            return axios.get('/api/formation/' + id_etab);

          case 7:
            request = _context5.sent;
            response = request.data;
            _context5.next = 12;
            break;

          case 11:
            $('#annee').html("").select2();

          case 12:
            $('#formation').html(response).select2();

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_formation = $(this).val();
            table.columns().search("");
            table.columns(1).search(id_formation).draw();
            response = "";

            if (!(id_formation != "")) {
              _context6.next = 9;
              break;
            }

            _context6.next = 7;
            return axios.get('/api/annee/' + id_formation);

          case 7:
            request = _context6.sent;
            response = request.data;

          case 9:
            $('#annee').html(response).select2();

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#annee").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            table.columns().search("");
            table.columns(2).search($(this).val()).draw();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));

  var getAdmissionInfos = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      var _icon2, request, data, message;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _icon2 = $('#frais-modal i');

              _icon2.removeClass('fa-money-bill-alt').addClass('fa-spinner fa-spin');

              _context8.next = 5;
              return axios.get("/admission/gestion/info/" + id_admission);

            case 5:
              request = _context8.sent;
              _context8.next = 8;
              return request.data;

            case 8:
              data = _context8.sent;
              $('.etudiant_info').html(data);

              _icon2.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin');

              _context8.next = 19;
              break;

            case 13:
              _context8.prev = 13;
              _context8.t0 = _context8["catch"](0);
              message = _context8.t0.response.data;
              console.log(_context8.t0, _context8.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin');

            case 19:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 13]]);
    }));

    return function getAdmissionInfos() {
      return _ref8.apply(this, arguments);
    };
  }();

  var getInscriptionAnnee = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      var icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              icon = $('#inscription-modal i');
              _context9.prev = 1;
              icon.removeClass('fa-check').addClass('fa-spinner fa-spin');
              _context9.next = 5;
              return axios.get("/admission/gestion/getAnneeDisponible/" + id_admission);

            case 5:
              request = _context9.sent;
              _context9.next = 8;
              return request.data;

            case 8:
              data = _context9.sent;
              $('#annee_inscription').html(data.anneeHtml).select2();
              $('#promotion_inscription').html(data.promotionHtml).select2();
              $('#inscription-modal').attr('disabled', false);
              _context9.next = 21;
              break;

            case 14:
              _context9.prev = 14;
              _context9.t0 = _context9["catch"](1);
              $('#inscription-modal').attr('disabled', true);
              $('#annee_inscription, #promotion_inscription').empty();
              message = _context9.t0.response.data;
              console.log(_context9.t0, _context9.t0.response);
              Toast.fire({
                icon: 'info',
                title: message
              });

            case 21:
              icon.addClass('fa-check').removeClass('fa-spinner fa-spin');

            case 22:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[1, 14]]);
    }));

    return function getInscriptionAnnee() {
      return _ref9.apply(this, arguments);
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
      getAdmissionInfos();
      getFrais();
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
  $("body").on("click", ".ms-elem-selection", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var formData, request, data;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            $('.ms-selectable .ms-list').prepend($(this).clone().removeClass("ms-elem-selection").addClass("ms-elem-selectable"));
            formData = new FormData();
            formData.append('idDocument', $(this).attr("id"));
            formData.append('idAdmission', id_admission);
            $(this).remove();
            _context10.prev = 5;
            _context10.next = 8;
            return axios.post("/admission/gestion/deletedocument", formData);

          case 8:
            request = _context10.sent;
            _context10.next = 11;
            return request.data;

          case 11:
            data = _context10.sent;
            _context10.next = 17;
            break;

          case 14:
            _context10.prev = 14;
            _context10.t0 = _context10["catch"](5);
            Toast.fire({
              icon: 'error',
              title: 'error'
            });

          case 17:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this, [[5, 14]]);
  })));
  $("body").on("click", ".ms-elem-selectable", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var formData, request, data;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            $('.ms-selection .ms-list').prepend($(this).clone().removeClass("ms-elem-selectable").addClass("ms-elem-selection"));
            formData = new FormData();
            formData.append('idDocument', $(this).attr("id"));
            formData.append('idAdmission', id_admission);
            $(this).remove();
            _context11.prev = 5;
            _context11.next = 8;
            return axios.post("/admission/gestion/adddocuments", formData);

          case 8:
            request = _context11.sent;
            _context11.next = 11;
            return request.data;

          case 11:
            data = _context11.sent;
            _context11.next = 17;
            break;

          case 14:
            _context11.prev = 14;
            _context11.t0 = _context11["catch"](5);
            Toast.fire({
              icon: 'error',
              title: 'error'
            });

          case 17:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this, [[5, 14]]);
  })));
  $("#frais-modal").on("click", function () {
    if (!id_admission) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#frais_inscription-modal").modal("show");
  });
  $("#add_frais_gestion").on("click", function () {
    var fraisId = $("#frais").find(":selected").val();

    if (fraisId != "") {
      var fraisText = $("#frais").find(":selected").text();
      var prix = $("#montant").val();
      var ice = $("#ice").val();
      var index = frais.findIndex(function (frais) {
        return frais.id == fraisId;
      }); // console.log(index)

      if (index === -1) {
        frais.push({
          id: fraisId,
          designation: fraisText,
          montant: prix,
          ice: ice
        });
        rawFrais();
      }
    }
  });

  var rawFrais = function rawFrais() {
    var html = "";
    frais.map(function (f, i) {
      html += "\n            <tr>\n                <td>".concat(i + 1, "</td>\n                <td>").concat(f.designation, "</td>\n                <td>").concat(f.montant, "</td>\n                <td>").concat(f.ice, "</td>\n                <td><button class='delete_frais btn btn-danger'  id='").concat(f.id, "'><i class='fa fa-trash' ></i></button></td>\n            </tr>\n        ");
    }); // console.log(html);

    $(".table_frais_admission").html(html);
  };

  $("body").on("click", '.delete_frais', function () {
    var _this = this;

    var index = frais.findIndex(function (frais) {
      return frais.id == $(_this).attr("id");
    });
    frais.splice(index, 1);
    rawFrais();
  });
  $("#save_frais_gestion").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var formData, modalAlert, icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            formData = new FormData();
            formData.append("frais", JSON.stringify(frais));
            formData.append("organisme", $("#organisme").val());
            modalAlert = $("#frais_inscription-modal .modal-body .alert");
            modalAlert.remove();
            icon = $("#save_frais_gestion i");
            icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
            _context12.prev = 7;
            _context12.next = 10;
            return axios.post('/admission/gestion/addfrais/' + id_admission, formData);

          case 10:
            request = _context12.sent;
            response = request.data;
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>Bien Enregistre</p>\n              </div>");
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $(".table_frais_admission").empty();
            frais = [];
            window.open("/admission/gestion/facture/" + response, '_blank');
            table.ajax.reload(null, false);
            _context12.next = 27;
            break;

          case 20:
            _context12.prev = 20;
            _context12.t0 = _context12["catch"](7);
            message = _context12.t0.response.data;
            console.log(_context12.t0, _context12.t0.response);
            modalAlert.remove();
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

          case 27:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[7, 20]]);
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
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#inscription_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#inscription_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context13.prev = 6;
              _context13.next = 9;
              return axios.post('/admission/gestion/inscription/' + id_admission, formData);

            case 9:
              request = _context13.sent;
              response = request.data;
              $("#inscription_modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(response, "</p>\n              </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $("#annee_inscription, #promotion_inscription, #organisme").empty();
              table.ajax.reload(null, false);
              _context13.next = 24;
              break;

            case 17:
              _context13.prev = 17;
              _context13.t0 = _context13["catch"](6);
              message = _context13.t0.response.data;
              console.log(_context13.t0, _context13.t0.response);
              modalAlert.remove();
              $("#inscription_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this, [[6, 17]]);
    }));

    return function (_x) {
      return _ref13.apply(this, arguments);
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
});

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-37f3ea"], () => (__webpack_exec__("./assets/components/admission/gestionadmission.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGlCQUFpQiwwSEFBaUQ7QUFDbEUsdUJBQXVCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUVoRTtBQUNBOztBQUVBO0FBQ0EseURBQXlELHNCQUFzQjs7QUFFL0U7QUFDQTtBQUNBLElBQUksbURBQW1EO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG9IQUEyQztBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLHFGQUE0QjtBQUMvQyxvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pc3Npb24vZ2VzdGlvbmFkbWlzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG4gICAgfSlcclxuICAgIGxldCBpZF9hZG1pc3Npb24gPSBmYWxzZTtcclxuICAgIGxldCBpZEFkbWlzc2lvbnMgPSBbXTtcclxuICAgIGxldCBmcmFpcyA9IFtdO1xyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgdmFyIHRhYmxlID0gJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fYWRtaXNzaW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2FkbWlzc2lvbi9nZXN0aW9uL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlkQWRtaXNzaW9ucy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2FkbWlzc2lvbikuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBnZXREb2N1bWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoJyNkb2N1bWVudCBpJylcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hZG1pc3Npb24vZ2VzdGlvbi9nZXRkb2N1bWVudHMvXCIraWRfYWRtaXNzaW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJCgnLm1zLXNlbGVjdGFibGUgLm1zLWxpc3QnKS5odG1sKGRhdGEuZG9jdW1lbnRzKVxyXG4gICAgICAgICAgICAkKCcubXMtc2VsZWN0aW9uIC5tcy1saXN0JykuaHRtbChkYXRhLmRvY3VtZW50c0V4aXN0cylcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcclxuICAgICAgICAgICAgfSkgICAgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0T3JnYW5pc21lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL29yZ2FuaXNtZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJCgnI29yZ2FuaXNtZScpLmh0bWwoZGF0YSkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgICAgIH0pICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGdldEZyYWlzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2ZyYWlzL1wiK2lkX2FkbWlzc2lvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyNmcmFpcycpLmh0bWwoZGF0YSkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgICAgIH0pICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGdldE5hdHVyZUV0dWRpYW50ID0gYXN5bmMgKCkgPT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvbmF0dXJlX2V0dWRpYW50L1wiK2lkX2FkbWlzc2lvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyNvcmdhbmlzbWUnKS5odG1sKGRhdGEpLnNlbGVjdDIoKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgICAgICB9KSAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkKFwiI2ZyYWlzXCIpLm9uKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAkKFwiI21vbnRhbnRcIikudmFsKCQoXCIjZnJhaXNcIikuZmluZChcIjpzZWxlY3RlZFwiKS5kYXRhKCdmcmFpcycpKVxyXG4gICAgfSlcclxuICAgIGdldE9yZ2FuaXNtZSgpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKVxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoJyNhbm5lZScpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvYW5uZWUvJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjYW5uZWUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNhbm5lZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKDIpLnNlYXJjaCgkKHRoaXMpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgY29uc3QgZ2V0QWRtaXNzaW9uSW5mb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoJyNmcmFpcy1tb2RhbCBpJylcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKS5hZGRDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hZG1pc3Npb24vZ2VzdGlvbi9pbmZvL1wiK2lkX2FkbWlzc2lvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJy5ldHVkaWFudF9pbmZvJykuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcclxuICAgICAgICAgICAgfSkgICAgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0SW5zY3JpcHRpb25Bbm5lZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBpY29uID0gJCgnI2luc2NyaXB0aW9uLW1vZGFsIGknKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYWRtaXNzaW9uL2dlc3Rpb24vZ2V0QW5uZWVEaXNwb25pYmxlL1wiK2lkX2FkbWlzc2lvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyNhbm5lZV9pbnNjcmlwdGlvbicpLmh0bWwoZGF0YS5hbm5lZUh0bWwpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgJCgnI3Byb21vdGlvbl9pbnNjcmlwdGlvbicpLmh0bWwoZGF0YS5wcm9tb3Rpb25IdG1sKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJyNpbnNjcmlwdGlvbi1tb2RhbCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICQoJyNpbnNjcmlwdGlvbi1tb2RhbCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoJyNhbm5lZV9pbnNjcmlwdGlvbiwgI3Byb21vdGlvbl9pbnNjcmlwdGlvbicpLmVtcHR5KClcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9hZG1pc3Npb24gdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZEFkbWlzc2lvbnMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgICAgICBpZEFkbWlzc2lvbnMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICBpZEFkbWlzc2lvbnMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9hZG1pc3Npb24gdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQoJyNpbnNjcmlwdGlvbi1tb2RhbCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlkX2FkbWlzc2lvbiA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fYWRtaXNzaW9uIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfYWRtaXNzaW9uID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICBnZXROYXR1cmVFdHVkaWFudCgpO1xyXG4gICAgICAgICAgICBnZXRJbnNjcmlwdGlvbkFubmVlKCk7XHJcbiAgICAgICAgICAgIGdldERvY3VtZW50cygpO1xyXG4gICAgICAgICAgICBnZXRBZG1pc3Npb25JbmZvcygpO1xyXG4gICAgICAgICAgICBnZXRGcmFpcygpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIjZG9jdW1lbnRcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlkX2FkbWlzc2lvbil7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAkKFwiI2RvY3VtZW50X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIubXMtZWxlbS1zZWxlY3Rpb25cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLm1zLXNlbGVjdGFibGUgLm1zLWxpc3QnKS5wcmVwZW5kKCQodGhpcykuY2xvbmUoKS5yZW1vdmVDbGFzcyhcIm1zLWVsZW0tc2VsZWN0aW9uXCIpLmFkZENsYXNzKFwibXMtZWxlbS1zZWxlY3RhYmxlXCIpKVxyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWREb2N1bWVudCcsICQodGhpcykuYXR0cihcImlkXCIpKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRBZG1pc3Npb24nLCBpZF9hZG1pc3Npb24pO1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYWRtaXNzaW9uL2dlc3Rpb24vZGVsZXRlZG9jdW1lbnRcIiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5tcy1lbGVtLXNlbGVjdGFibGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLm1zLXNlbGVjdGlvbiAubXMtbGlzdCcpLnByZXBlbmQoJCh0aGlzKS5jbG9uZSgpLnJlbW92ZUNsYXNzKFwibXMtZWxlbS1zZWxlY3RhYmxlXCIpLmFkZENsYXNzKFwibXMtZWxlbS1zZWxlY3Rpb25cIikpXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZERvY3VtZW50JywgJCh0aGlzKS5hdHRyKFwiaWRcIikpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZEFkbWlzc2lvbicsIGlkX2FkbWlzc2lvbik7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hZG1pc3Npb24vZ2VzdGlvbi9hZGRkb2N1bWVudHNcIiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2ZyYWlzLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpZF9hZG1pc3Npb24pe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNhZGRfZnJhaXNfZ2VzdGlvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGZyYWlzSWQgPSAkKFwiI2ZyYWlzXCIpLmZpbmQoXCI6c2VsZWN0ZWRcIikudmFsKCk7XHJcbiAgICAgICAgaWYoZnJhaXNJZCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxldCBmcmFpc1RleHQgPSAkKFwiI2ZyYWlzXCIpLmZpbmQoXCI6c2VsZWN0ZWRcIikudGV4dCgpO1xyXG4gICAgICAgICAgICBsZXQgcHJpeCA9ICQoXCIjbW9udGFudFwiKS52YWwoKTtcclxuICAgICAgICAgICAgbGV0IGljZSA9ICQoXCIjaWNlXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGZyYWlzLmZpbmRJbmRleChmcmFpcyA9PiBmcmFpcy5pZCA9PSBmcmFpc0lkKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgICAgIGlmKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZnJhaXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGZyYWlzSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzaWduYXRpb246IGZyYWlzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBtb250YW50OiBwcml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGljZTogaWNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJhd0ZyYWlzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgcmF3RnJhaXMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgICAgIGZyYWlzLm1hcCgoZiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2YuZGVzaWduYXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2YubW9udGFudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5pY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPSdkZWxldGVfZnJhaXMgYnRuIGJ0bi1kYW5nZXInICBpZD0nJHtmLmlkfSc+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoJyA+PC9pPjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgICAgJChcIi50YWJsZV9mcmFpc19hZG1pc3Npb25cIikuaHRtbChodG1sKVxyXG4gICAgfVxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnLmRlbGV0ZV9mcmFpcycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGZyYWlzLmZpbmRJbmRleChmcmFpcyA9PiBmcmFpcy5pZCA9PSAkKHRoaXMpLmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgZnJhaXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIHJhd0ZyYWlzKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNzYXZlX2ZyYWlzX2dlc3Rpb25cIikub24oXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZnJhaXNcIiwgSlNPTi5zdHJpbmdpZnkoZnJhaXMpKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm9yZ2FuaXNtZVwiLCAkKFwiI29yZ2FuaXNtZVwiKS52YWwoKSlcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICBcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3NhdmVfZnJhaXNfZ2VzdGlvbiBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWlzc2lvbi9nZXN0aW9uL2FkZGZyYWlzLycraWRfYWRtaXNzaW9uLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5CaWVuIEVucmVnaXN0cmU8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICQoXCIudGFibGVfZnJhaXNfYWRtaXNzaW9uXCIpLmVtcHR5KClcclxuICAgICAgICAgIGZyYWlzID0gW107XHJcbiAgICAgICAgICB3aW5kb3cub3BlbihcIi9hZG1pc3Npb24vZ2VzdGlvbi9mYWN0dXJlL1wiK3Jlc3BvbnNlLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjaW5zY3JpcHRpb24tbW9kYWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlkX2FkbWlzc2lvbil7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2luc2NyaXB0aW9uX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKVxyXG4gICAgICAgICQoXCIjaW5zY3JpcHRpb25fbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICB9KVxyXG4gICAgJChcIiNpbnNjcmlwdGlvbl9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNpbnNjcmlwdGlvbl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgIFxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjaW5zY3JpcHRpb25fc2F2ZSAuYnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaXNzaW9uL2dlc3Rpb24vaW5zY3JpcHRpb24vJytpZF9hZG1pc3Npb24sIGZvcm1EYXRhKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgJChcIiNpbnNjcmlwdGlvbl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAkKFwiI2FubmVlX2luc2NyaXB0aW9uLCAjcHJvbW90aW9uX2luc2NyaXB0aW9uLCAjb3JnYW5pc21lXCIpLmVtcHR5KClcclxuICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgJChcIiNpbnNjcmlwdGlvbl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2F0dGVzdGF0aW9uX2FkbWlzc2lvblwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCFpZF9hZG1pc3Npb24pIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaXNzaW9uL2dlc3Rpb24vYXR0ZXN0YXRpb24vXCIraWRfYWRtaXNzaW9uLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG59KVxyXG4gICAgXHJcbiAgICAiLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmRJbmRleDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORF9JTkRFWCA9ICdmaW5kSW5kZXgnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChGSU5EX0lOREVYIGluIFtdKSBBcnJheSgxKVtGSU5EX0lOREVYXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kaW5kZXhcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmRJbmRleCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkRfSU5ERVgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX2FkbWlzc2lvbiIsImlkQWRtaXNzaW9ucyIsImZyYWlzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJnZXREb2N1bWVudHMiLCJpY29uIiwicmVtb3ZlQ2xhc3MiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImRvY3VtZW50cyIsImRvY3VtZW50c0V4aXN0cyIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJmaXJlIiwidGl0bGUiLCJnZXRPcmdhbmlzbWUiLCJzZWxlY3QyIiwiZ2V0RnJhaXMiLCJnZXROYXR1cmVFdHVkaWFudCIsIm9uIiwidmFsIiwiaWRfZXRhYiIsImNvbHVtbnMiLCJzZWFyY2giLCJkcmF3IiwiaWRfZm9ybWF0aW9uIiwiZ2V0QWRtaXNzaW9uSW5mb3MiLCJnZXRJbnNjcmlwdGlvbkFubmVlIiwiYW5uZWVIdG1sIiwicHJvbW90aW9uSHRtbCIsImF0dHIiLCJlbXB0eSIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiaGFzQ2xhc3MiLCJtb2RhbCIsInByZXBlbmQiLCJjbG9uZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZW1vdmUiLCJwb3N0IiwiZnJhaXNJZCIsImZyYWlzVGV4dCIsInRleHQiLCJwcml4IiwiaWNlIiwiZmluZEluZGV4IiwiaWQiLCJkZXNpZ25hdGlvbiIsIm1vbnRhbnQiLCJyYXdGcmFpcyIsIm1hcCIsImYiLCJpIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGFsQWxlcnQiLCJ3aW5kb3ciLCJvcGVuIiwicmVsb2FkIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9