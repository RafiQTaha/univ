(self["webpackChunk"] = self["webpackChunk"] || []).push([["inscription"],{

/***/ "./assets/components/inscription/gestioninscription.js":
/*!*************************************************************!*\
  !*** ./assets/components/inscription/gestioninscription.js ***!
  \*************************************************************/
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
var id_inscription = false;
var idInscription = [];
var frais = [];
var facture_exist = false;
$(document).ready(function () {
  var table = $("#datatables_gestion_inscription").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/inscription/gestion/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      idInscription.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_inscription).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });

  var getStatutInscription = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              icon = $('#statut-modal i');
              _context.prev = 1;
              icon.removeClass('fa-check').addClass('fa-spinner fa-spin');
              _context.next = 5;
              return axios.get("/inscription/gestion/getstatut/" + id_inscription);

            case 5:
              request = _context.sent;
              _context.next = 8;
              return request.data;

            case 8:
              data = _context.sent;
              $('#statut_inscription').html(data).select2();
              _context.next = 17;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              Toast.fire({
                icon: 'error',
                title: "Some Error"
              });

            case 17:
              icon.addClass('fa-check').removeClass('fa-spinner fa-spin');

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function getStatutInscription() {
      return _ref.apply(this, arguments);
    };
  }();

  $("#frais").on("change", function () {
    $("#montant").val($("#frais").find(":selected").data('frais'));
  });

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

  getOrganisme();
  $("#etablissement").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_etab = $(this).val();
            table.columns().search("");
            table.columns(0).search(id_etab).draw();
            response = "";

            if (!(id_etab != "")) {
              _context3.next = 11;
              break;
            }

            _context3.next = 7;
            return axios.get('/api/formation/' + id_etab);

          case 7:
            request = _context3.sent;
            response = request.data;
            _context3.next = 13;
            break;

          case 11:
            $('#annee').html("").select2();
            $('#promotion').html("").select2();

          case 13:
            $('#formation').html(response).select2();

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_formation, responseAnnee, responsePromotion, requestPromotion, requestAnnee;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_formation = $(this).val();
            table.columns().search("");
            responseAnnee = "";
            responsePromotion = "";

            if (!(id_formation != "")) {
              _context4.next = 16;
              break;
            }

            table.columns(1).search(id_formation).draw();
            _context4.next = 8;
            return axios.get('/api/promotion/' + id_formation);

          case 8:
            requestPromotion = _context4.sent;
            responsePromotion = requestPromotion.data;
            _context4.next = 12;
            return axios.get('/api/annee/' + id_formation);

          case 12:
            requestAnnee = _context4.sent;
            responseAnnee = requestAnnee.data;
            _context4.next = 17;
            break;

          case 16:
            table.columns(0).search($("#etablissement").val()).draw();

          case 17:
            $('#annee').html(responseAnnee).select2();
            $('#promotion').html(responsePromotion).select2();

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            table.columns().search("");

            if ($(this).val() != "") {
              if ($("#annee").val() != "") {
                table.columns(3).search($("#annee").val());
              }

              table.columns(2).search($(this).val()).draw();
            } else {
              table.columns(1).search($("#formation").val()).draw();
            }

          case 2:
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

            if ($(this).val() != "") {
              table.columns(3).search($(this).val());
            }

            table.columns(2).search($("#promotion").val()).draw();

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $('body').on('click', '#datatables_gestion_inscription tbody tr', function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idInscription.indexOf(input.attr("id"));
      idInscription.splice(index, 1);
    } else {
      input.prop("checked", true);
      idInscription.push(input.attr("id"));
    }
  });
  $('body').on('dblclick', '#datatables_gestion_inscription tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_inscription = null;
    } else {
      $("#datatables_gestion_inscription tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_inscription = $(this).attr('id');
      getStatutInscription();
    }
  });

  var getFrais = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return axios.get("/inscription/gestion/frais/" + id_inscription);

            case 3:
              request = _context7.sent;
              _context7.next = 6;
              return request.data;

            case 6:
              data = _context7.sent;
              facture_exist = 1;
              $('#frais').html(data.list).select2();
              $('#code-facture').html(data.codefacture);
              _context7.next = 19;
              break;

            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](0);
              message = _context7.t0.response.data;
              facture_exist = false;
              Toast.fire({
                icon: 'error',
                title: 'Facture Introuvable!'
              });
              return _context7.abrupt("return");

            case 19:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 12]]);
    }));

    return function getFrais() {
      return _ref7.apply(this, arguments);
    };
  }();

  var getInscriptionInfos = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      var _icon, request, data, message;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _icon = $('#frais-modal i');

              _icon.removeClass('fa-money-bill-alt').addClass('fa-spinner fa-spin');

              _context8.next = 5;
              return axios.get("/inscription/gestion/info/" + id_inscription);

            case 5:
              request = _context8.sent;
              _context8.next = 8;
              return request.data;

            case 8:
              data = _context8.sent;
              $('.etudiant_info').html(data);

              _icon.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin');

              $("#frais_inscription-modal").modal("show");
              _context8.next = 20;
              break;

            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](0);
              message = _context8.t0.response.data;
              console.log(_context8.t0, _context8.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin');

            case 20:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 14]]);
    }));

    return function getInscriptionInfos() {
      return _ref8.apply(this, arguments);
    };
  }();

  $("#frais-modal").on("click", function () {
    if (!id_inscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    } // if(!facture_exist){
    //     Toast.fire({
    //       icon: 'error',
    //       title: 'Facture Introuvable!',
    //     })
    //     return;
    // }


    getFrais();
    getInscriptionInfos();
  });
  $('input[type=radio][name=organ]').on('change', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var request;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();

              if (!(this.value == 0)) {
                _context9.next = 10;
                break;
              }

              _context9.next = 4;
              return axios.get('/api/getorganismepasPayant');

            case 4:
              request = _context9.sent;
              response = request.data;
              $('.select-organ #org').html(response).select2();
              $('.select-organ').css('display', 'block');
              _context9.next = 12;
              break;

            case 10:
              $('.select-organ #org').html("");
              $('.select-organ').css('display', 'none');

            case 12:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    return function (_x) {
      return _ref9.apply(this, arguments);
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
  $("body").on("click", '.delete_frais', function () {
    var _this = this;

    var index = frais.findIndex(function (frais) {
      return frais.index == $(_this).attr("id");
    });
    frais.splice(index, 1);
    rawFrais();
  });

  var rawFrais = function rawFrais() {
    var html = "";
    frais.map(function (f, i) {
      html += "\n            <tr>\n                <td>".concat(i + 1, "</td>\n                <td>").concat(f.designation, "</td>\n                <td>").concat(f.montant, "</td>\n                <td>").concat(f.ice, "</td>\n                <td>").concat(f.organisme, "</td>\n                <td><button class='delete_frais btn btn-danger'  id='").concat(f.index, "'><i class='fa fa-trash' ></i></button></td>\n            </tr>\n        ");
    }); // console.log(html);

    $(".table_frais_inscription").html(html);
  };

  $("#save_frais_gestion").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var formData, modalAlert, icon, request, _response, message;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            formData = new FormData();
            formData.append("frais", JSON.stringify(frais)); // formData.append("organisme", $("#organisme").val())

            modalAlert = $("#frais_inscription-modal .modal-body .alert");
            modalAlert.remove();
            icon = $("#save_frais_gestion i");
            icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
            _context10.prev = 6;
            _context10.next = 9;
            return axios.post('/inscription/gestion/addfrais/' + id_inscription, formData);

          case 9:
            request = _context10.sent;
            _response = request.data;
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>Bien Enregistre</p>\n              </div>");
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $(".table_frais_inscription").empty();
            frais = [];
            window.open("/inscription/gestion/facture/" + _response, '_blank');
            table.ajax.reload(null, false);
            _context10.next = 26;
            break;

          case 19:
            _context10.prev = 19;
            _context10.t0 = _context10["catch"](6);
            message = _context10.t0.response.data;
            console.log(_context10.t0, _context10.t0.response);
            modalAlert.remove();
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

          case 26:
            setTimeout(function () {
              $("#frais_inscription-modal .modal-body .alert").remove();
            }, 3000);

          case 27:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[6, 19]]);
  })));
  $("#statut-modal").on("click", function () {
    if (!id_inscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#statut_modal .modal-body .alert").remove();
    $("#statut_modal").modal("show");
  });
  $("#statut_save").on("submit", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var formData, modalAlert, icon, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#statut_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#statut_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context11.prev = 6;
              _context11.next = 9;
              return axios.post('/inscription/gestion/updatestatut/' + id_inscription, formData);

            case 9:
              request = _context11.sent;
              _response2 = request.data;
              $("#statut_modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response2, "</p>\n              </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $("#annee_inscription, #promotion_inscription").empty();
              table.ajax.reload(null, false);
              _context11.next = 24;
              break;

            case 17:
              _context11.prev = 17;
              _context11.t0 = _context11["catch"](6);
              message = _context11.t0.response.data;
              console.log(_context11.t0, _context11.t0.response);
              modalAlert.remove();
              $("#statut_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this, [[6, 17]]);
    }));

    return function (_x2) {
      return _ref11.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction', function () {
    window.open('/inscription/gestion/extraction_ins', '_blank');
  });
  $('body').on('click', '#extraction_annee', function (e) {
    e.preventDefault();
    $("#annee_extraction_inscription").modal('show');
  });
  $('body').on('click', '#export_inscription', function (e) {
    e.preventDefault();
    var annee = $('#annee_export').val(); // alert(annee);

    window.open('/inscription/gestion/extraction_ins_annee/' + annee, '_blank');
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/inscription/gestioninscription.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3BDRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsZ0JBQWdCLG1CQUFPLENBQUMsNkZBQWdDO0FBQ3hELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRDtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdDQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaW5zY3JpcHRpb24vZ2VzdGlvbmluc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG4gICAgfSlcclxuICAgIGxldCBpZF9pbnNjcmlwdGlvbiA9IGZhbHNlO1xyXG4gICAgbGV0IGlkSW5zY3JpcHRpb24gPSBbXTtcclxuICAgIGxldCBmcmFpcyA9IFtdO1xyXG4gICAgbGV0IGZhY3R1cmVfZXhpc3QgPSBmYWxzZTtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICB2YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvblwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZEluc2NyaXB0aW9uLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfaW5zY3JpcHRpb24pLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFN0YXR1dEluc2NyaXB0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKCcjc3RhdHV0LW1vZGFsIGknKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9nZXRzdGF0dXQvXCIraWRfaW5zY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKCcjc3RhdHV0X2luc2NyaXB0aW9uJykuaHRtbChkYXRhKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNvbWUgRXJyb3JcIixcclxuICAgICAgICAgICAgfSkgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICB9XHJcbiAgICAkKFwiI2ZyYWlzXCIpLm9uKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAkKFwiI21vbnRhbnRcIikudmFsKCQoXCIjZnJhaXNcIikuZmluZChcIjpzZWxlY3RlZFwiKS5kYXRhKCdmcmFpcycpKVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGdldE9yZ2FuaXNtZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9vcmdhbmlzbWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyNvcmdhbmlzbWUnKS5odG1sKGRhdGEpLnNlbGVjdDIoKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgICAgICB9KSAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRPcmdhbmlzbWUoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKClcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNhbm5lZScpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2VBbm5lZSA9IFwiXCJcclxuICAgICAgICBsZXQgcmVzcG9uc2VQcm9tb3Rpb24gPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RQcm9tb3Rpb24gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2VQcm9tb3Rpb24gPSByZXF1ZXN0UHJvbW90aW9uLmRhdGFcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdEFubmVlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FubmVlLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2VBbm5lZSA9IHJlcXVlc3RBbm5lZS5kYXRhXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygwKS5zZWFyY2goJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNhbm5lZScpLmh0bWwocmVzcG9uc2VBbm5lZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlUHJvbW90aW9uKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKHRoaXMpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYoJChcIiNhbm5lZVwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI2FubmVlXCIpLnZhbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDIpLnNlYXJjaCgkKHRoaXMpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygxKS5zZWFyY2goJChcIiNmb3JtYXRpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQoXCIjYW5uZWVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMykuc2VhcmNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgdGFibGUuY29sdW1ucygyKS5zZWFyY2goJChcIiNwcm9tb3Rpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhdGFibGVzX2dlc3Rpb25faW5zY3JpcHRpb24gdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZEluc2NyaXB0aW9uLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICAgICAgaWRJbnNjcmlwdGlvbi5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb24ucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfaW5zY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2luc2NyaXB0aW9uIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfaW5zY3JpcHRpb24gPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIGdldFN0YXR1dEluc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGdldEZyYWlzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9mcmFpcy9cIitpZF9pbnNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGZhY3R1cmVfZXhpc3QgPSAxO1xyXG4gICAgICAgICAgICAkKCcjZnJhaXMnKS5odG1sKGRhdGEubGlzdCkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKCcjY29kZS1mYWN0dXJlJykuaHRtbChkYXRhLmNvZGVmYWN0dXJlKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBmYWN0dXJlX2V4aXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmFjdHVyZSBJbnRyb3V2YWJsZSEnLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGdldEluc2NyaXB0aW9uSW5mb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoJyNmcmFpcy1tb2RhbCBpJylcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKS5hZGRDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL2luZm8vXCIraWRfaW5zY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKCcuZXR1ZGlhbnRfaW5mbycpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgICAgIH0pICAgIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICQoXCIjZnJhaXMtbW9kYWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlkX2luc2NyaXB0aW9uKXtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmKCFmYWN0dXJlX2V4aXN0KXtcclxuICAgICAgICAvLyAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgLy8gICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAvLyAgICAgICB0aXRsZTogJ0ZhY3R1cmUgSW50cm91dmFibGUhJyxcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBnZXRGcmFpcygpO1xyXG4gICAgICAgIGdldEluc2NyaXB0aW9uSW5mb3MoKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9b3JnYW5dJykub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldG9yZ2FuaXNtZXBhc1BheWFudCcpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNhZGRfZnJhaXNfZ2VzdGlvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGZyYWlzSWQgPSAkKFwiI2ZyYWlzXCIpLmZpbmQoXCI6c2VsZWN0ZWRcIikudmFsKCk7XHJcbiAgICAgICAgaWYoZnJhaXNJZCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxldCBmcmFpc1RleHQgPSAkKFwiI2ZyYWlzXCIpLmZpbmQoXCI6c2VsZWN0ZWRcIikudGV4dCgpO1xyXG4gICAgICAgICAgICBsZXQgcHJpeCA9ICQoXCIjbW9udGFudFwiKS52YWwoKTtcclxuICAgICAgICAgICAgbGV0IGljZSA9ICQoXCIjaWNlXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgb3JnYW4gID0gJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuZmluZCgnOnNlbGVjdGVkJykudGV4dCgpO1xyXG4gICAgICAgICAgICBsZXQgb3JnYW5pc21lX2lkICA9ICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoISQuaXNOdW1lcmljKGZyYWlzSWQpIHx8IHByaXggPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoXCJpbnB1dFtuYW1lPSdvcmdhbiddOmNoZWNrZWRcIikudmFsKCkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgb3JnYW5pc21lX2lkID0gN1xyXG4gICAgICAgICAgICAgICAgb3JnYW4gPSBcIlBheWFudFwiXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG9yZ2FuaXNtZV9pZCA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZyYWlzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXggOiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxKSxcclxuICAgICAgICAgICAgICAgIGlkOiBmcmFpc0lkLFxyXG4gICAgICAgICAgICAgICAgZGVzaWduYXRpb246IGZyYWlzVGV4dCxcclxuICAgICAgICAgICAgICAgIG1vbnRhbnQ6IHByaXgsXHJcbiAgICAgICAgICAgICAgICBpY2U6IGljZSxcclxuICAgICAgICAgICAgICAgIG9yZ2FuaXNtZV9pZDogb3JnYW5pc21lX2lkLFxyXG4gICAgICAgICAgICAgICAgb3JnYW5pc21lOiBvcmdhblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmF3RnJhaXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnLmRlbGV0ZV9mcmFpcycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGZyYWlzLmZpbmRJbmRleChmcmFpcyA9PiBmcmFpcy5pbmRleCA9PSAkKHRoaXMpLmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgZnJhaXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIHJhd0ZyYWlzKCk7XHJcbiAgICB9KVxyXG4gICAgY29uc3QgcmF3RnJhaXMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgICAgIGZyYWlzLm1hcCgoZiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2YuZGVzaWduYXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2YubW9udGFudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5pY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2Yub3JnYW5pc21lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz0nZGVsZXRlX2ZyYWlzIGJ0biBidG4tZGFuZ2VyJyAgaWQ9JyR7Zi5pbmRleH0nPjxpIGNsYXNzPSdmYSBmYS10cmFzaCcgPjwvaT48L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIGBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGh0bWwpO1xyXG4gICAgICAgICQoXCIudGFibGVfZnJhaXNfaW5zY3JpcHRpb25cIikuaHRtbChodG1sKVxyXG4gICAgfVxyXG5cclxuICAgICQoXCIjc2F2ZV9mcmFpc19nZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZyYWlzXCIsIEpTT04uc3RyaW5naWZ5KGZyYWlzKSlcclxuICAgICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJvcmdhbmlzbWVcIiwgJChcIiNvcmdhbmlzbWVcIikudmFsKCkpXHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlX2ZyYWlzX2dlc3Rpb24gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9pbnNjcmlwdGlvbi9nZXN0aW9uL2FkZGZyYWlzLycraWRfaW5zY3JpcHRpb24sIGZvcm1EYXRhKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPkJpZW4gRW5yZWdpc3RyZTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgJChcIi50YWJsZV9mcmFpc19pbnNjcmlwdGlvblwiKS5lbXB0eSgpXHJcbiAgICAgICAgICBmcmFpcyA9IFtdO1xyXG4gICAgICAgICAgd2luZG93Lm9wZW4oXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9mYWN0dXJlL1wiK3Jlc3BvbnNlLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH0pXHJcblxyXG5cclxuICAgICQoXCIjc3RhdHV0LW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpZF9pbnNjcmlwdGlvbil7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI3N0YXR1dF9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKClcclxuICAgICAgICAkKFwiI3N0YXR1dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNzdGF0dXRfc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjc3RhdHV0X21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzdGF0dXRfc2F2ZSAuYnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvaW5zY3JpcHRpb24vZ2VzdGlvbi91cGRhdGVzdGF0dXQvJytpZF9pbnNjcmlwdGlvbiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAkKFwiI3N0YXR1dF9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAkKFwiI2FubmVlX2luc2NyaXB0aW9uLCAjcHJvbW90aW9uX2luc2NyaXB0aW9uXCIpLmVtcHR5KClcclxuICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgJChcIiNzdGF0dXRfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNleHRyYWN0aW9uJywgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9pbnNjcmlwdGlvbi9nZXN0aW9uL2V4dHJhY3Rpb25faW5zJywgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXh0cmFjdGlvbl9hbm5lZScsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJChcIiNhbm5lZV9leHRyYWN0aW9uX2luc2NyaXB0aW9uXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXhwb3J0X2luc2NyaXB0aW9uJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgYW5uZWUgPSAkKCcjYW5uZWVfZXhwb3J0JykudmFsKCk7XHJcbiAgICAgICAgLy8gYWxlcnQoYW5uZWUpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvaW5zY3JpcHRpb24vZ2VzdGlvbi9leHRyYWN0aW9uX2luc19hbm5lZS8nK2FubmVlLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxufSlcclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XHJcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcclxuXHJcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxyXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xyXG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXHJcbn0gOiBbXS5mb3JFYWNoO1xyXG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xyXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xyXG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcclxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcclxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xyXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XHJcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xyXG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XHJcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcclxudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcclxudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xyXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xyXG5cclxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcclxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xyXG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XHJcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xyXG5cclxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXHJcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcclxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGFycmF5ID0gW107XHJcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XHJcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcclxufSk7XHJcblxyXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XHJcblxyXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcclxuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XHJcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcclxuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcclxufTtcclxuXHJcbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcclxuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHtcclxuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XHJcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcclxuICAgIHZhciBuID0gMDtcclxuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcclxuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcclxuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xyXG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xyXG4gICAgICAgIGlmIChuICsgbGVuID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XHJcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChuID49IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xyXG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEEubGVuZ3RoID0gbjtcclxuICAgIHJldHVybiBBO1xyXG4gIH1cclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciAkZmluZEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmRJbmRleDtcclxudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XHJcblxyXG52YXIgRklORF9JTkRFWCA9ICdmaW5kSW5kZXgnO1xyXG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xyXG5cclxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcclxuaWYgKEZJTkRfSU5ERVggaW4gW10pIEFycmF5KDEpW0ZJTkRfSU5ERVhdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRpbmRleFxyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XHJcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcclxuICAgIHJldHVybiAkZmluZEluZGV4KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xyXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkRfSU5ERVgpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xyXG4gIGZvckVhY2g6IGZvckVhY2hcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcclxudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcclxuXHJcbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XHJcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcclxuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcclxuICB9XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcclxudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xyXG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcclxudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XHJcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcclxudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XHJcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XHJcblxyXG4vLyBAQHNlYXJjaCBsb2dpY1xyXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcclxuICByZXR1cm4gW1xyXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcclxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcclxuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xyXG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcclxuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcclxuICAgIH0sXHJcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXHJcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xyXG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XHJcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XHJcblxyXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XHJcblxyXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XHJcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcclxuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xyXG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XHJcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcclxuICAgIH1cclxuICBdO1xyXG59KTtcclxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xyXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xyXG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XHJcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XHJcblxyXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xyXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XHJcblxyXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcclxuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcclxuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xyXG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xyXG4gIH07XHJcbn07XHJcblxyXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XHJcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXHJcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XHJcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcclxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcclxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXHJcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX2luc2NyaXB0aW9uIiwiaWRJbnNjcmlwdGlvbiIsImZyYWlzIiwiZmFjdHVyZV9leGlzdCIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInJlc3BvbnNpdmUiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJnZXRTdGF0dXRJbnNjcmlwdGlvbiIsImljb24iLCJyZW1vdmVDbGFzcyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwic2VsZWN0MiIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJmaXJlIiwidGl0bGUiLCJvbiIsInZhbCIsImdldE9yZ2FuaXNtZSIsImlkX2V0YWIiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsImlkX2Zvcm1hdGlvbiIsInJlc3BvbnNlQW5uZWUiLCJyZXNwb25zZVByb21vdGlvbiIsInJlcXVlc3RQcm9tb3Rpb24iLCJyZXF1ZXN0QW5uZWUiLCJpbnB1dCIsImlzIiwiaW5kZXgiLCJpbmRleE9mIiwiYXR0ciIsInNwbGljZSIsInB1c2giLCJoYXNDbGFzcyIsImdldEZyYWlzIiwibGlzdCIsImNvZGVmYWN0dXJlIiwiZ2V0SW5zY3JpcHRpb25JbmZvcyIsIm1vZGFsIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImNzcyIsImZyYWlzSWQiLCJmcmFpc1RleHQiLCJ0ZXh0IiwicHJpeCIsImljZSIsIm9yZ2FuIiwib3JnYW5pc21lX2lkIiwiaXNOdW1lcmljIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJkZXNpZ25hdGlvbiIsIm1vbnRhbnQiLCJvcmdhbmlzbWUiLCJyYXdGcmFpcyIsImZpbmRJbmRleCIsIm1hcCIsImYiLCJpIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicG9zdCIsInByZXBlbmQiLCJlbXB0eSIsIndpbmRvdyIsIm9wZW4iLCJyZWxvYWQiLCJzZXRUaW1lb3V0IiwiYW5uZWUiXSwic291cmNlUm9vdCI6IiJ9