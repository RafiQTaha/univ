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

  var getFrais = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios.get("/inscription/gestion/frais/" + id_inscription);

            case 3:
              request = _context2.sent;
              _context2.next = 6;
              return request.data;

            case 6:
              data = _context2.sent;
              $('#frais').html(data.list).select2();
              $('#code-facture').html(data.codefacture);
              _context2.next = 16;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              message = _context2.t0.response.data;
              console.log(_context2.t0, _context2.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function getFrais() {
      return _ref2.apply(this, arguments);
    };
  }();

  $("#frais").on("change", function () {
    $("#montant").val($("#frais").find(":selected").data('frais'));
  });

  var getInscriptionInfos = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var _icon, request, data, message;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _icon = $('#frais-modal i');

              _icon.removeClass('fa-money-bill-alt').addClass('fa-spinner fa-spin');

              _context3.next = 5;
              return axios.get("/inscription/gestion/info/" + id_inscription);

            case 5:
              request = _context3.sent;
              _context3.next = 8;
              return request.data;

            case 8:
              data = _context3.sent;
              $('.etudiant_info').html(data);

              _icon.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin');

              _context3.next = 19;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              message = _context3.t0.response.data;
              console.log(_context3.t0, _context3.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin');

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function getInscriptionInfos() {
      return _ref3.apply(this, arguments);
    };
  }();

  var getOrganisme = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios.get("/api/organisme");

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

    return function getOrganisme() {
      return _ref4.apply(this, arguments);
    };
  }();

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
            _context5.next = 13;
            break;

          case 11:
            $('#annee').html("").select2();
            $('#promotion').html("").select2();

          case 13:
            $('#formation').html(response).select2();

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_formation, responseAnnee, responsePromotion, requestPromotion, requestAnnee;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_formation = $(this).val();
            table.columns().search("");
            responseAnnee = "";
            responsePromotion = "";

            if (!(id_formation != "")) {
              _context6.next = 16;
              break;
            }

            table.columns(1).search(id_formation).draw();
            _context6.next = 8;
            return axios.get('/api/promotion/' + id_formation);

          case 8:
            requestPromotion = _context6.sent;
            responsePromotion = requestPromotion.data;
            _context6.next = 12;
            return axios.get('/api/annee/' + id_formation);

          case 12:
            requestAnnee = _context6.sent;
            responseAnnee = requestAnnee.data;
            _context6.next = 17;
            break;

          case 16:
            table.columns(0).search($("#etablissement").val()).draw();

          case 17:
            $('#annee').html(responseAnnee).select2();
            $('#promotion').html(responsePromotion).select2();

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
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
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#annee").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            table.columns().search("");

            if ($(this).val() != "") {
              table.columns(3).search($(this).val());
            }

            table.columns(2).search($("#promotion").val()).draw();

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
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
      getInscriptionInfos();
      getFrais();
    }
  });
  $("#frais-modal").on("click", function () {
    if (!id_inscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#frais_inscription-modal").modal("show");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2Fzc2V0cy9jb21wb25lbnRzL2luc2NyaXB0aW9uL2dlc3Rpb25pbnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfaW5zY3JpcHRpb24gPSBmYWxzZTtcclxuICAgIGxldCBpZEluc2NyaXB0aW9uID0gW107XHJcbiAgICBsZXQgZnJhaXMgPSBbXTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2luc2NyaXB0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2luc2NyaXB0aW9uL2dlc3Rpb24vbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb24uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9pbnNjcmlwdGlvbikuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdHV0SW5zY3JpcHRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoJyNzdGF0dXQtbW9kYWwgaScpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL2dldHN0YXR1dC9cIitpZF9pbnNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyNzdGF0dXRfaW5zY3JpcHRpb24nKS5odG1sKGRhdGEpLnNlbGVjdDIoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU29tZSBFcnJvclwiLFxyXG4gICAgICAgICAgICB9KSAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgIH1cclxuICAgIGNvbnN0IGdldEZyYWlzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9mcmFpcy9cIitpZF9pbnNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyNmcmFpcycpLmh0bWwoZGF0YS5saXN0KS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJyNjb2RlLWZhY3R1cmUnKS5odG1sKGRhdGEuY29kZWZhY3R1cmUpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgICAgIH0pICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICQoXCIjZnJhaXNcIikub24oXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICQoXCIjbW9udGFudFwiKS52YWwoJChcIiNmcmFpc1wiKS5maW5kKFwiOnNlbGVjdGVkXCIpLmRhdGEoJ2ZyYWlzJykpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgZ2V0SW5zY3JpcHRpb25JbmZvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJCgnI2ZyYWlzLW1vZGFsIGknKVxyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpLmFkZENsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2luc2NyaXB0aW9uL2dlc3Rpb24vaW5mby9cIitpZF9pbnNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJy5ldHVkaWFudF9pbmZvJykuaHRtbChkYXRhKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcclxuICAgICAgICAgICAgfSkgICAgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0T3JnYW5pc21lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL29yZ2FuaXNtZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJCgnI29yZ2FuaXNtZScpLmh0bWwoZGF0YSkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgICAgIH0pICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE9yZ2FuaXNtZSgpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKVxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI2FubmVlJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGxldCByZXNwb25zZUFubmVlID0gXCJcIlxyXG4gICAgICAgIGxldCByZXNwb25zZVByb21vdGlvbiA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFByb21vdGlvbiA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZVByb21vdGlvbiA9IHJlcXVlc3RQcm9tb3Rpb24uZGF0YVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0QW5uZWUgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvYW5uZWUvJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZUFubmVlID0gcmVxdWVzdEFubmVlLmRhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2FubmVlJykuaHRtbChyZXNwb25zZUFubmVlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2VQcm9tb3Rpb24pLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQodGhpcykudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZigkKFwiI2FubmVlXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjYW5uZWVcIikudmFsKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKCQodGhpcykudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDEpLnNlYXJjaCgkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJChcIiNhbm5lZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKHRoaXMpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygzKS5zZWFyY2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3Byb21vdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkSW5zY3JpcHRpb24uaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgICAgICBpZEluc2NyaXB0aW9uLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgaWRJbnNjcmlwdGlvbi5wdXNoKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignZGJsY2xpY2snLCcjZGF0YXRhYmxlc19nZXN0aW9uX2luc2NyaXB0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9pbnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25faW5zY3JpcHRpb24gdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9pbnNjcmlwdGlvbiA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgZ2V0U3RhdHV0SW5zY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgZ2V0SW5zY3JpcHRpb25JbmZvcygpO1xyXG4gICAgICAgICAgICBnZXRGcmFpcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICAkKFwiI2ZyYWlzLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpZF9pbnNjcmlwdGlvbil7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJCgnaW5wdXRbdHlwZT1yYWRpb11bbmFtZT1vcmdhbl0nKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZ2V0b3JnYW5pc21lcGFzUGF5YW50Jyk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgJCgnLnNlbGVjdC1vcmdhbicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLmh0bWwoXCJcIik7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4nKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2FkZF9mcmFpc19nZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgZnJhaXNJZCA9ICQoXCIjZnJhaXNcIikuZmluZChcIjpzZWxlY3RlZFwiKS52YWwoKTtcclxuICAgICAgICBpZihmcmFpc0lkICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbGV0IGZyYWlzVGV4dCA9ICQoXCIjZnJhaXNcIikuZmluZChcIjpzZWxlY3RlZFwiKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGxldCBwcml4ID0gJChcIiNtb250YW50XCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgaWNlID0gJChcIiNpY2VcIikudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCBvcmdhbiAgPSAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5maW5kKCc6c2VsZWN0ZWQnKS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGxldCBvcmdhbmlzbWVfaWQgID0gJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykudmFsKCk7XHJcbiAgICAgICAgICAgIGlmICghJC5pc051bWVyaWMoZnJhaXNJZCkgfHwgcHJpeCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChcImlucHV0W25hbWU9J29yZ2FuJ106Y2hlY2tlZFwiKS52YWwoKSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvcmdhbmlzbWVfaWQgPSA3XHJcbiAgICAgICAgICAgICAgICBvcmdhbiA9IFwiUGF5YW50XCJcclxuICAgICAgICAgICAgfWVsc2UgaWYob3JnYW5pc21lX2lkID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnJhaXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA6IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEpLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGZyYWlzSWQsXHJcbiAgICAgICAgICAgICAgICBkZXNpZ25hdGlvbjogZnJhaXNUZXh0LFxyXG4gICAgICAgICAgICAgICAgbW9udGFudDogcHJpeCxcclxuICAgICAgICAgICAgICAgIGljZTogaWNlLFxyXG4gICAgICAgICAgICAgICAgb3JnYW5pc21lX2lkOiBvcmdhbmlzbWVfaWQsXHJcbiAgICAgICAgICAgICAgICBvcmdhbmlzbWU6IG9yZ2FuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByYXdGcmFpcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcuZGVsZXRlX2ZyYWlzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZnJhaXMuZmluZEluZGV4KGZyYWlzID0+IGZyYWlzLmluZGV4ID09ICQodGhpcykuYXR0cihcImlkXCIpKTtcclxuICAgICAgICBmcmFpcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgcmF3RnJhaXMoKTtcclxuICAgIH0pXHJcbiAgICBjb25zdCByYXdGcmFpcyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgaHRtbCA9IFwiXCI7XHJcbiAgICAgICAgZnJhaXMubWFwKChmLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5kZXNpZ25hdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5tb250YW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5vcmdhbmlzbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPSdkZWxldGVfZnJhaXMgYnRuIGJ0bi1kYW5nZXInICBpZD0nJHtmLmluZGV4fSc+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoJyA+PC9pPjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAgICAgJChcIi50YWJsZV9mcmFpc19pbnNjcmlwdGlvblwiKS5odG1sKGh0bWwpXHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNzYXZlX2ZyYWlzX2dlc3Rpb25cIikub24oXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZnJhaXNcIiwgSlNPTi5zdHJpbmdpZnkoZnJhaXMpKVxyXG4gICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcIm9yZ2FuaXNtZVwiLCAkKFwiI29yZ2FuaXNtZVwiKS52YWwoKSlcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICBcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3NhdmVfZnJhaXNfZ2VzdGlvbiBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2luc2NyaXB0aW9uL2dlc3Rpb24vYWRkZnJhaXMvJytpZF9pbnNjcmlwdGlvbiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+QmllbiBFbnJlZ2lzdHJlPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAkKFwiLnRhYmxlX2ZyYWlzX2luc2NyaXB0aW9uXCIpLmVtcHR5KClcclxuICAgICAgICAgIGZyYWlzID0gW107XHJcbiAgICAgICAgICB3aW5kb3cub3BlbihcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL2ZhY3R1cmUvXCIrcmVzcG9uc2UsICdfYmxhbmsnKTtcclxuICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgJChcIiNzdGF0dXQtbW9kYWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlkX2luc2NyaXB0aW9uKXtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjc3RhdHV0X21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKVxyXG4gICAgICAgICQoXCIjc3RhdHV0X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI3N0YXR1dF9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNzdGF0dXRfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICBcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9zYXZlIC5idG4gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9pbnNjcmlwdGlvbi9nZXN0aW9uL3VwZGF0ZXN0YXR1dC8nK2lkX2luc2NyaXB0aW9uLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICQoXCIjc3RhdHV0X21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICQoXCIjYW5uZWVfaW5zY3JpcHRpb24sICNwcm9tb3Rpb25faW5zY3JpcHRpb25cIikuZW1wdHkoKVxyXG4gICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkKFwiI3N0YXR1dF9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICB3aW5kb3cub3BlbignL2luc2NyaXB0aW9uL2dlc3Rpb24vZXh0cmFjdGlvbl9pbnMnLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCA9ICdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZEluZGV4O1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EX0lOREVYID0gJ2ZpbmRJbmRleCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkRfSU5ERVggaW4gW10pIEFycmF5KDEpW0ZJTkRfSU5ERVhdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRpbmRleFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZEluZGV4KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORF9JTkRFWCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfaW5zY3JpcHRpb24iLCJpZEluc2NyaXB0aW9uIiwiZnJhaXMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJyZXNwb25zaXZlIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsImxhbmd1YWdlIiwidXJsIiwiZ2V0U3RhdHV0SW5zY3JpcHRpb24iLCJpY29uIiwicmVtb3ZlQ2xhc3MiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsInNlbGVjdDIiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZmlyZSIsInRpdGxlIiwiZ2V0RnJhaXMiLCJsaXN0IiwiY29kZWZhY3R1cmUiLCJvbiIsInZhbCIsImdldEluc2NyaXB0aW9uSW5mb3MiLCJnZXRPcmdhbmlzbWUiLCJpZF9ldGFiIiwiY29sdW1ucyIsInNlYXJjaCIsImRyYXciLCJpZF9mb3JtYXRpb24iLCJyZXNwb25zZUFubmVlIiwicmVzcG9uc2VQcm9tb3Rpb24iLCJyZXF1ZXN0UHJvbW90aW9uIiwicmVxdWVzdEFubmVlIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsImF0dHIiLCJzcGxpY2UiLCJwdXNoIiwiaGFzQ2xhc3MiLCJtb2RhbCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJjc3MiLCJmcmFpc0lkIiwiZnJhaXNUZXh0IiwidGV4dCIsInByaXgiLCJpY2UiLCJvcmdhbiIsIm9yZ2FuaXNtZV9pZCIsImlzTnVtZXJpYyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImlkIiwiZGVzaWduYXRpb24iLCJtb250YW50Iiwib3JnYW5pc21lIiwicmF3RnJhaXMiLCJmaW5kSW5kZXgiLCJtYXAiLCJmIiwiaSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwibW9kYWxBbGVydCIsInJlbW92ZSIsInBvc3QiLCJwcmVwZW5kIiwiZW1wdHkiLCJ3aW5kb3ciLCJvcGVuIiwicmVsb2FkIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=