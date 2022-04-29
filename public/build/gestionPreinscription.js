(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestionPreinscription"],{

/***/ "./assets/components/preinscription/gestionpreinscription.js":
/*!*******************************************************************!*\
  !*** ./assets/components/preinscription/gestionpreinscription.js ***!
  \*******************************************************************/
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

__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

$(document).ready(function () {
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
  var id_preinscription = false;
  var idpreins = [];
  var frais = []; // var table_preins = $("#datables_preinscription").DataTable({
  //     lengthMenu: [
  //         [10, 15, 25, 50, 100, 20000000000000],
  //         [10, 15, 25, 50, 100, "All"],
  //     ],
  //     order: [[0, "desc"]],
  //     ajax: "/preinscription/list",
  //     processing: true,
  //     serverSide: true,
  //     deferRender: true,
  //     language: {
  //     url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
  //     },
  // });

  var table_gestion_preins = $("#datables_gestion_preinscription").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[1, "desc"]],
    ajax: "/preinscription/gestion/list/gestion_preinscription/",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      idpreins.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });

  var load_etud_info = function load_etud_info() {
    if (id_preinscription) {
      var _icon = $("#frais_preinscription i");

      _icon.removeClass('fa-money-bill-alt').addClass("fa-spinner fa-spin");

      axios.get('/preinscription/gestion/frais_preins_modals/' + id_preinscription).then(function (success) {
        $('.modal-preins .etudiant_info').html(success.data);

        _icon.removeClass("fa-spinner fa-spin").addClass('fa-money-bill-alt'); // success.data

      })["catch"](function (err) {
        console.log(err);

        _icon.removeClass("fa-spinner fa-spin").addClass('fa-money-bill-alt');
      });
    }
  };

  var load_frais_preins = function load_frais_preins() {
    if (id_preinscription) {
      axios.get('/preinscription/gestion/article_frais/' + id_preinscription).then(function (success) {
        $('.modal-preins .article #frais').html(success.data).select2(); // success.data
      })["catch"](function (err) {
        console.log(err);
        icon.removeClass("fa-spinner fa-spin").addClass('fa-money-bill-alt');
      });
    }
  };

  var getDocumentsPreins = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _icon2, request, data, message;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _icon2 = $('#doc_preinscription i');

              _icon2.removeClass('fa-check').addClass('fa-spinner fa-spin');

              _context.next = 5;
              return axios.get("/preinscription/gestion/getdoc_preinscription/" + id_preinscription);

            case 5:
              request = _context.sent;
              _context.next = 8;
              return request.data;

            case 8:
              data = _context.sent;
              $('.ms-selectable .ms-list').html(data.documents);
              $('.ms-selection .ms-list').html(data.documentsExists);

              _icon2.addClass('fa-check').removeClass('fa-spinner fa-spin');

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

    return function getDocumentsPreins() {
      return _ref.apply(this, arguments);
    };
  }();

  $("#etablissement").select2();
  $("#formation").select2();
  $("#nature").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_etab = $(this).val();
            table_gestion_preins.columns().search("");
            table_gestion_preins.columns(0).search(id_etab).draw();
            response = "";

            if (!(id_etab != "")) {
              _context2.next = 9;
              break;
            }

            _context2.next = 7;
            return axios.get('/api/formation/' + id_etab);

          case 7:
            request = _context2.sent;
            response = request.data;

          case 9:
            $('#formation').html(response).select2();

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_formation;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_formation = $(this).val();
            table_gestion_preins.columns(2).search("").draw();
            table_gestion_preins.columns(1).search(id_formation).draw();

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#nature").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            table_gestion_preins.columns(2).search($(this).val()).draw();

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $('body').on('click', '#frais_preinscription', function (e) {
    e.preventDefault();

    if (!id_preinscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $('#frais_preinscription-modal').modal("show");
  });
  $('body').on('change', '.modal-preins .article #frais', function (e) {
    e.preventDefault();
    var frais = $(this).find(':selected').attr('data-id');
    $('.modal-preins .article #montant').val(frais);
  });
  $('body').on('click', '.modal #add-btn', function () {
    var fraisId = $('.modal-preins .article #frais').val();
    var fraisText = $('.modal-preins .article #frais').find(':selected').text();
    var prix = $('.modal-preins .article #montant').val();
    var index = frais.findIndex(function (frais) {
      return frais.id == fraisId;
    });

    if (index == -1) {
      frais.push({
        id: fraisId,
        designation: fraisText,
        montant: prix
      });
      rawFrais();
    }
  });

  var rawFrais = function rawFrais() {
    var html = "";
    frais.map(function (f, i) {
      html += "\n        <tr>\n            <td>".concat(i + 1, "</td>\n            <td>").concat(f.designation, "</td>\n            <td>").concat(f.montant, "</td>\n            <td><button class='delete_frais btn btn-danger'  id='").concat(f.id, "'><i class='fa fa-trash'></i></button></td>\n        </tr>\n    ");
    });
    $(".modal-preins .table-fee tbody").html(html);
  };

  $("body").on("click", '.delete_frais', function () {
    var _this = this;

    var index = frais.findIndex(function (frais) {
      return frais.id == $(_this).attr("id");
    });
    frais.splice(index, 1);
    rawFrais();
  });
  $("body").on("click", '.modal .save', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();

              if (!(frais.length < 1)) {
                _context5.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez Ajouter Des Lignes!'
              });
              return _context5.abrupt("return");

            case 4:
              icon = $(".modal .save i");
              icon.removeClass('fa-trash').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('frais', JSON.stringify(frais));
              _context5.prev = 8;
              _context5.next = 11;
              return axios.post("/preinscription/gestion/addfrais/" + id_preinscription, formData);

            case 11:
              request = _context5.sent;
              _context5.next = 14;
              return request.data;

            case 14:
              data = _context5.sent;
              Toast.fire({
                icon: 'success',
                title: 'Frais Bien Ajouter'
              });
              icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
              $(".modal-preins .table-fee tbody").empty();
              table_gestion_preins.ajax.reload(null, false);
              frais = [];
              window.open('/preinscription/gestion/facture/' + data, '_blank');
              _context5.next = 28;
              break;

            case 23:
              _context5.prev = 23;
              _context5.t0 = _context5["catch"](8);
              message = _context5.t0.response.data;
              console.log(_context5.t0, _context5.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });

            case 28:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[8, 23]]);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }());
  $('body').on('click', '#datables_gestion_preinscription tbody tr', function (e) {
    e.preventDefault();
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idpreins.indexOf(input.attr("id"));
      idpreins.splice(index, 1);
    } else {
      input.prop("checked", true);
      idpreins.push(input.attr("id"));
    }

    console.log(idpreins);
  });
  $('body').on('dblclick', '#datables_gestion_preinscription tbody tr', function (e) {
    e.preventDefault(); // const input = $(this).find("input");

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_preinscription = null;
    } else {
      $("#datables_gestion_preinscription tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_preinscription = $(this).attr('id');
      load_etud_info();
      load_frais_preins();
      getDocumentsPreins();
    }

    console.log(id_preinscription);
  });
  $("#annulation").on('click', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();

              if (id_preinscription) {
                _context6.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context6.abrupt("return");

            case 4:
              icon = $("#annulation i");
              icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('idpreins', JSON.stringify(idpreins));
              _context6.prev = 8;
              _context6.next = 11;
              return axios.post("/preinscription/gestion/annulation_preinscription", formData);

            case 11:
              request = _context6.sent;
              _context6.next = 14;
              return request.data;

            case 14:
              data = _context6.sent;
              Toast.fire({
                icon: 'success',
                title: 'Preinscription Bien Annuler'
              });
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              table_gestion_preins.ajax.reload(null, false);
              _context6.next = 25;
              break;

            case 20:
              _context6.prev = 20;
              _context6.t0 = _context6["catch"](8);
              message = _context6.t0.response.data;
              console.log(_context6.t0, _context6.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });

            case 25:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[8, 20]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("#admission").on('click', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();

              if (!(idpreins.length < 1)) {
                _context7.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cocher une or plusieurs ligne!'
              });
              return _context7.abrupt("return");

            case 4:
              icon = $("#admission i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('idpreins', JSON.stringify(idpreins));
              _context7.prev = 8;
              _context7.next = 11;
              return axios.post("/preinscription/gestion/admission_preinscription", formData);

            case 11:
              request = _context7.sent;
              _context7.next = 14;
              return request.data;

            case 14:
              data = _context7.sent;
              Toast.fire({
                icon: 'success',
                title: 'Admissions Bien Enregister'
              });
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              table_gestion_preins.ajax.reload(null, false);
              _context7.next = 26;
              break;

            case 20:
              _context7.prev = 20;
              _context7.t0 = _context7["catch"](8);
              message = _context7.t0.response.data;
              console.log(_context7.t0, _context7.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");

            case 26:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[8, 20]]);
    }));

    return function (_x3) {
      return _ref7.apply(this, arguments);
    };
  }());
  $("#doc_preinscription").on('click', function () {
    if (!id_preinscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $('#document_preins_modal').modal("show");
  });
  $("body").on("click", ".ms-elem-selectable", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var formData, request, data;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            $('.ms-selection .ms-list').prepend($(this).clone().removeClass("ms-elem-selectable").addClass("ms-elem-selection"));
            formData = new FormData();
            formData.append('idDocument', $(this).attr("id"));
            formData.append('idPreinscription', id_preinscription);
            $(this).remove();
            _context8.prev = 5;
            _context8.next = 8;
            return axios.post("/preinscription/gestion/adddocuments_preins", formData);

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
  $("body").on("click", ".ms-elem-selection", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var formData, request, data;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            $('.ms-selectable .ms-list').prepend($(this).clone().removeClass("ms-elem-selection").addClass("ms-elem-selectable"));
            formData = new FormData();
            formData.append('idDocument', $(this).attr("id"));
            formData.append('idPreinscription', id_preinscription);
            $(this).remove();
            _context9.prev = 5;
            _context9.next = 8;
            return axios.post("/preinscription/gestion/deletedocuments_preins", formData);

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
  $('body').on('click', '#att_preinscription', function () {
    if (!id_preinscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    window.open('/preinscription/gestion/attestation_preinscription/' + id_preinscription, '_blank');
  });
  $('body').on('click', '#cfc_preinscription', function () {
    if (!id_preinscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    window.open('/preinscription/gestion/cfc_preinscription/' + id_preinscription, '_blank');
  }); // $('body').on('click','#modifier',function () {
  //     if(!id_preinscription){
  //         Toast.fire({
  //             icon: 'error',
  //             title: 'Veuillez selection une ligne!',
  //         })
  //         return;
  //     }
  //     $('#modifier_modal').modal("show");
  // })

  $('.nav-pills a').on('click', function (e) {
    $(this).tab('show');
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/preinscription/gestionpreinscription.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1EQUFtRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLHVGQUE2Qjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBNkQ7QUFDakU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNUWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxvSEFBMkM7QUFDdEQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDOztBQUUxRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUE0RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNkWTtBQUNiLFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDL0Msb0NBQW9DLG1CQUFPLENBQUMsK0hBQWlEO0FBQzdGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbnByZWluc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5jb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxufSlcclxubGV0IGlkX3ByZWluc2NyaXB0aW9uID0gZmFsc2U7XHJcbmxldCBpZHByZWlucyA9IFtdO1xyXG5sZXQgZnJhaXMgPSBbXTtcclxuLy8gdmFyIHRhYmxlX3ByZWlucyA9ICQoXCIjZGF0YWJsZXNfcHJlaW5zY3JpcHRpb25cIikuRGF0YVRhYmxlKHtcclxuLy8gICAgIGxlbmd0aE1lbnU6IFtcclxuLy8gICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4vLyAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuLy8gICAgIF0sXHJcbi8vICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4vLyAgICAgYWpheDogXCIvcHJlaW5zY3JpcHRpb24vbGlzdFwiLFxyXG4vLyAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuLy8gICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbi8vICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuLy8gICAgIGxhbmd1YWdlOiB7XHJcbi8vICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4vLyAgICAgfSxcclxuLy8gfSk7XHJcblxyXG52YXIgdGFibGVfZ2VzdGlvbl9wcmVpbnMgPSAkKFwiI2RhdGFibGVzX2dlc3Rpb25fcHJlaW5zY3JpcHRpb25cIikuRGF0YVRhYmxlKHtcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgIF0sXHJcbiAgICBvcmRlcjogW1sxLCBcImRlc2NcIl1dLFxyXG4gICAgYWpheDogXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9saXN0L2dlc3Rpb25fcHJlaW5zY3JpcHRpb24vXCIsXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlkcHJlaW5zLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGxvYWRfZXR1ZF9pbmZvID0gKCkgPT4ge1xyXG4gICAgaWYoaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2ZyYWlzX3ByZWluc2NyaXB0aW9uIGlcIik7XHJcbiAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9mcmFpc19wcmVpbnNfbW9kYWxzLycraWRfcHJlaW5zY3JpcHRpb24pXHJcbiAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1wcmVpbnMgLmV0dWRpYW50X2luZm8nKS5odG1sKHN1Y2Nlc3MuZGF0YSk7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIikuYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0Jyk7XHJcbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIikuYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmNvbnN0IGxvYWRfZnJhaXNfcHJlaW5zID0gKCkgPT4ge1xyXG4gICAgaWYoaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIGF4aW9zLmdldCgnL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vYXJ0aWNsZV9mcmFpcy8nK2lkX3ByZWluc2NyaXB0aW9uKVxyXG4gICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAkKCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNmcmFpcycpLmh0bWwoc3VjY2Vzcy5kYXRhKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIikuYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuY29uc3QgZ2V0RG9jdW1lbnRzUHJlaW5zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBpY29uID0gJCgnI2RvY19wcmVpbnNjcmlwdGlvbiBpJylcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9nZXRkb2NfcHJlaW5zY3JpcHRpb24vXCIraWRfcHJlaW5zY3JpcHRpb24pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgJCgnLm1zLXNlbGVjdGFibGUgLm1zLWxpc3QnKS5odG1sKGRhdGEuZG9jdW1lbnRzKVxyXG4gICAgICAgICQoJy5tcy1zZWxlY3Rpb24gLm1zLWxpc3QnKS5odG1sKGRhdGEuZG9jdW1lbnRzRXhpc3RzKVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgfSkgICAgXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgIH1cclxufVxyXG4kKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4kKFwiI2Zvcm1hdGlvblwiKS5zZWxlY3QyKCk7XHJcbiQoXCIjbmF0dXJlXCIpLnNlbGVjdDIoKTtcclxuJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuXHJcbiAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICB9XHJcbiAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG59KVxyXG4kKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuY29sdW1ucygyKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbn0pXHJcbiQoXCIjbmF0dXJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmNvbHVtbnMoMikuc2VhcmNoKCQodGhpcykudmFsKCkpLmRyYXcoKTtcclxufSlcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcjZnJhaXNfcHJlaW5zY3JpcHRpb24nLGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJCgnI2ZyYWlzX3ByZWluc2NyaXB0aW9uLW1vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNmcmFpcycsZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBmcmFpcyA9ICQodGhpcykuZmluZCgnOnNlbGVjdGVkJykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgJCgnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjbW9udGFudCcpLnZhbChmcmFpcyk7XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnLm1vZGFsICNhZGQtYnRuJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZnJhaXNJZCAgPSAkKCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNmcmFpcycpLnZhbCgpO1xyXG4gICAgbGV0IGZyYWlzVGV4dCAgPSAkKCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNmcmFpcycpLmZpbmQoJzpzZWxlY3RlZCcpLnRleHQoKTtcclxuICAgIGxldCBwcml4ICA9ICQoJy5tb2RhbC1wcmVpbnMgLmFydGljbGUgI21vbnRhbnQnKS52YWwoKTtcclxuICAgIGNvbnN0IGluZGV4ID0gZnJhaXMuZmluZEluZGV4KGZyYWlzID0+IGZyYWlzLmlkID09IGZyYWlzSWQgKTtcclxuICAgIGlmKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgZnJhaXMucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiBmcmFpc0lkICxcclxuICAgICAgICAgICAgZGVzaWduYXRpb246IGZyYWlzVGV4dCxcclxuICAgICAgICAgICAgbW9udGFudDogcHJpeFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJhd0ZyYWlzKCk7XHJcbiAgICB9XHJcbn0pXHJcbmNvbnN0IHJhd0ZyYWlzID0gKCkgPT4ge1xyXG4gICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgZnJhaXMubWFwKChmLCBpKSA9PiB7XHJcbiAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+JHtpICsgMX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+JHtmLmRlc2lnbmF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD4ke2YubW9udGFudH08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz0nZGVsZXRlX2ZyYWlzIGJ0biBidG4tZGFuZ2VyJyAgaWQ9JyR7Zi5pZH0nPjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgIGBcclxuICAgIH0pXHJcbiAgICAkKFwiLm1vZGFsLXByZWlucyAudGFibGUtZmVlIHRib2R5XCIpLmh0bWwoaHRtbClcclxufVxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcuZGVsZXRlX2ZyYWlzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5kZXggPSBmcmFpcy5maW5kSW5kZXgoZnJhaXMgPT4gZnJhaXMuaWQgPT0gJCh0aGlzKS5hdHRyKFwiaWRcIikpO1xyXG4gICAgZnJhaXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgcmF3RnJhaXMoKTtcclxufSlcclxuXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJy5tb2RhbCAuc2F2ZScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihmcmFpcy5sZW5ndGggPCAxKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IEFqb3V0ZXIgRGVzIExpZ25lcyEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIubW9kYWwgLnNhdmUgaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRyYXNoJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZnJhaXMnLCBKU09OLnN0cmluZ2lmeShmcmFpcykpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2FkZGZyYWlzL1wiK2lkX3ByZWluc2NyaXB0aW9uLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0ZyYWlzIEJpZW4gQWpvdXRlcicsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10cmFzaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICQoXCIubW9kYWwtcHJlaW5zIC50YWJsZS1mZWUgdGJvZHlcIikuZW1wdHkoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICBmcmFpcyA9IFtdO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9mYWN0dXJlLycrZGF0YSwgJ19ibGFuaycpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG59KVxyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19nZXN0aW9uX3ByZWluc2NyaXB0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaWRwcmVpbnMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIGlkcHJlaW5zLnNwbGljZShpbmRleCwxKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgaWRwcmVpbnMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coaWRwcmVpbnMpO1xyXG59KVxyXG5cclxuICAgICQoJ2JvZHknKS5vbignZGJsY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9wcmVpbnNjcmlwdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgaWRfcHJlaW5zY3JpcHRpb24gPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2RhdGFibGVzX2dlc3Rpb25fcHJlaW5zY3JpcHRpb24gdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgaWRfcHJlaW5zY3JpcHRpb24gPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgbG9hZF9ldHVkX2luZm8oKTtcclxuICAgICAgICBsb2FkX2ZyYWlzX3ByZWlucygpO1xyXG4gICAgICAgIGdldERvY3VtZW50c1ByZWlucygpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coaWRfcHJlaW5zY3JpcHRpb24pO1xyXG59KVxyXG5cclxuJChcIiNhbm51bGF0aW9uXCIpLm9uKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjYW5udWxhdGlvbiBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtdGltZXMtY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRwcmVpbnMnLCBKU09OLnN0cmluZ2lmeShpZHByZWlucykpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2FubnVsYXRpb25fcHJlaW5zY3JpcHRpb25cIiwgZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdQcmVpbnNjcmlwdGlvbiBCaWVuIEFubnVsZXInLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxuJChcIiNhZG1pc3Npb25cIikub24oJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGlkcHJlaW5zLmxlbmd0aCA8IDEpe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGVyIHVuZSBvciBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2FkbWlzc2lvbiBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIFxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkcHJlaW5zJywgSlNPTi5zdHJpbmdpZnkoaWRwcmVpbnMpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9hZG1pc3Npb25fcHJlaW5zY3JpcHRpb25cIiwgZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdBZG1pc3Npb25zIEJpZW4gRW5yZWdpc3RlcicsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgIH1cclxufSlcclxuJChcIiNkb2NfcHJlaW5zY3JpcHRpb25cIikub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJCgnI2RvY3VtZW50X3ByZWluc19tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuXHJcbn0pXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIubXMtZWxlbS1zZWxlY3RhYmxlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm1zLXNlbGVjdGlvbiAubXMtbGlzdCcpLnByZXBlbmQoJCh0aGlzKS5jbG9uZSgpLnJlbW92ZUNsYXNzKFwibXMtZWxlbS1zZWxlY3RhYmxlXCIpLmFkZENsYXNzKFwibXMtZWxlbS1zZWxlY3Rpb25cIikpXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWREb2N1bWVudCcsICQodGhpcykuYXR0cihcImlkXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZFByZWluc2NyaXB0aW9uJywgaWRfcHJlaW5zY3JpcHRpb24pO1xyXG4gICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9hZGRkb2N1bWVudHNfcHJlaW5zXCIsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdlcnJvcicsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5tcy1lbGVtLXNlbGVjdGlvblwiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICQoJy5tcy1zZWxlY3RhYmxlIC5tcy1saXN0JykucHJlcGVuZCgkKHRoaXMpLmNsb25lKCkucmVtb3ZlQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGlvblwiKS5hZGRDbGFzcyhcIm1zLWVsZW0tc2VsZWN0YWJsZVwiKSlcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZERvY3VtZW50JywgJCh0aGlzKS5hdHRyKFwiaWRcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkUHJlaW5zY3JpcHRpb24nLCBpZF9wcmVpbnNjcmlwdGlvbik7XHJcbiAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2RlbGV0ZWRvY3VtZW50c19wcmVpbnNcIiwgZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ2Vycm9yJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsJyNhdHRfcHJlaW5zY3JpcHRpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93Lm9wZW4oJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2F0dGVzdGF0aW9uX3ByZWluc2NyaXB0aW9uLycraWRfcHJlaW5zY3JpcHRpb24sICdfYmxhbmsnKTtcclxufSlcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcjY2ZjX3ByZWluc2NyaXB0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHdpbmRvdy5vcGVuKCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9jZmNfcHJlaW5zY3JpcHRpb24vJytpZF9wcmVpbnNjcmlwdGlvbiwgJ19ibGFuaycpO1xyXG59KVxyXG5cclxuLy8gJCgnYm9keScpLm9uKCdjbGljaycsJyNtb2RpZmllcicsZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuLy8gICAgICAgICBUb2FzdC5maXJlKHtcclxuLy8gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuLy8gICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbi8vICAgICAgICAgfSlcclxuLy8gICAgICAgICByZXR1cm47XHJcbi8vICAgICB9XHJcbi8vICAgICAkKCcjbW9kaWZpZXJfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbi8vIH0pXHJcblxyXG4kKCcubmF2LXBpbGxzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCh0aGlzKS50YWIoJ3Nob3cnKTtcclxufSlcclxufSlcclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmRJbmRleDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORF9JTkRFWCA9ICdmaW5kSW5kZXgnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChGSU5EX0lOREVYIGluIFtdKSBBcnJheSgxKVtGSU5EX0lOREVYXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kaW5kZXhcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmRJbmRleCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkRfSU5ERVgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfcHJlaW5zY3JpcHRpb24iLCJpZHByZWlucyIsImZyYWlzIiwidGFibGVfZ2VzdGlvbl9wcmVpbnMiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJmb3JFYWNoIiwiZSIsImZpbmQiLCJwcm9wIiwibGFuZ3VhZ2UiLCJ1cmwiLCJsb2FkX2V0dWRfaW5mbyIsImljb24iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwic3VjY2VzcyIsImh0bWwiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxvYWRfZnJhaXNfcHJlaW5zIiwic2VsZWN0MiIsImdldERvY3VtZW50c1ByZWlucyIsInJlcXVlc3QiLCJkb2N1bWVudHMiLCJkb2N1bWVudHNFeGlzdHMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJmaXJlIiwidGl0bGUiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsImlkX2Zvcm1hdGlvbiIsInByZXZlbnREZWZhdWx0IiwibW9kYWwiLCJhdHRyIiwiZnJhaXNJZCIsImZyYWlzVGV4dCIsInRleHQiLCJwcml4IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpZCIsInB1c2giLCJkZXNpZ25hdGlvbiIsIm1vbnRhbnQiLCJyYXdGcmFpcyIsIm1hcCIsImYiLCJpIiwic3BsaWNlIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwiZW1wdHkiLCJyZWxvYWQiLCJ3aW5kb3ciLCJvcGVuIiwiaW5wdXQiLCJpcyIsImluZGV4T2YiLCJoYXNDbGFzcyIsInByZXBlbmQiLCJjbG9uZSIsInJlbW92ZSIsInRhYiJdLCJzb3VyY2VSb290IjoiIn0=