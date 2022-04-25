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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-37f3ea"], () => (__webpack_exec__("./assets/components/preinscription/gestionpreinscription.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3RELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBNEQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDZFk7QUFDYixXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3ByZWluc2NyaXB0aW9uL2dlc3Rpb25wcmVpbnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbn0pXHJcbmxldCBpZF9wcmVpbnNjcmlwdGlvbiA9IGZhbHNlO1xyXG5sZXQgaWRwcmVpbnMgPSBbXTtcclxubGV0IGZyYWlzID0gW107XHJcbi8vIHZhciB0YWJsZV9wcmVpbnMgPSAkKFwiI2RhdGFibGVzX3ByZWluc2NyaXB0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbi8vICAgICBsZW5ndGhNZW51OiBbXHJcbi8vICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuLy8gICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbi8vICAgICBdLFxyXG4vLyAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuLy8gICAgIGFqYXg6IFwiL3ByZWluc2NyaXB0aW9uL2xpc3RcIixcclxuLy8gICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbi8vICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4vLyAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbi8vICAgICBsYW5ndWFnZToge1xyXG4vLyAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuLy8gICAgIH0sXHJcbi8vIH0pO1xyXG5cclxudmFyIHRhYmxlX2dlc3Rpb25fcHJlaW5zID0gJChcIiNkYXRhYmxlc19nZXN0aW9uX3ByZWluc2NyaXB0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICBdLFxyXG4gICAgb3JkZXI6IFtbMSwgXCJkZXNjXCJdXSxcclxuICAgIGFqYXg6IFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vbGlzdC9nZXN0aW9uX3ByZWluc2NyaXB0aW9uL1wiLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZHByZWlucy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5jb25zdCBsb2FkX2V0dWRfaW5mbyA9ICgpID0+IHtcclxuICAgIGlmKGlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNmcmFpc19wcmVpbnNjcmlwdGlvbiBpXCIpO1xyXG4gICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGF4aW9zLmdldCgnL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vZnJhaXNfcHJlaW5zX21vZGFscy8nK2lkX3ByZWluc2NyaXB0aW9uKVxyXG4gICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAkKCcubW9kYWwtcHJlaW5zIC5ldHVkaWFudF9pbmZvJykuaHRtbChzdWNjZXNzLmRhdGEpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpLmFkZENsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpO1xyXG4gICAgICAgICAgICAvLyBzdWNjZXNzLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpLmFkZENsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5jb25zdCBsb2FkX2ZyYWlzX3ByZWlucyA9ICgpID0+IHtcclxuICAgIGlmKGlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBheGlvcy5nZXQoJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2FydGljbGVfZnJhaXMvJytpZF9wcmVpbnNjcmlwdGlvbilcclxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgJCgnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjZnJhaXMnKS5odG1sKHN1Y2Nlc3MuZGF0YSkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAvLyBzdWNjZXNzLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpLmFkZENsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59XHJcbmNvbnN0IGdldERvY3VtZW50c1ByZWlucyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoJyNkb2NfcHJlaW5zY3JpcHRpb24gaScpXHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vZ2V0ZG9jX3ByZWluc2NyaXB0aW9uL1wiK2lkX3ByZWluc2NyaXB0aW9uKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICQoJy5tcy1zZWxlY3RhYmxlIC5tcy1saXN0JykuaHRtbChkYXRhLmRvY3VtZW50cylcclxuICAgICAgICAkKCcubXMtc2VsZWN0aW9uIC5tcy1saXN0JykuaHRtbChkYXRhLmRvY3VtZW50c0V4aXN0cylcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgIH0pICAgIFxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICB9XHJcbn1cclxuJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuJChcIiNmb3JtYXRpb25cIikuc2VsZWN0MigpO1xyXG4kKFwiI25hdHVyZVwiKS5zZWxlY3QyKCk7XHJcbiQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcblxyXG4gICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgfVxyXG4gICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxufSlcclxuJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmNvbHVtbnMoMikuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG59KVxyXG4kKFwiI25hdHVyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5jb2x1bW5zKDIpLnNlYXJjaCgkKHRoaXMpLnZhbCgpKS5kcmF3KCk7XHJcbn0pXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnI2ZyYWlzX3ByZWluc2NyaXB0aW9uJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoJyNmcmFpc19wcmVpbnNjcmlwdGlvbi1tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxufSk7XHJcbiQoJ2JvZHknKS5vbignY2hhbmdlJywnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjZnJhaXMnLGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZnJhaXMgPSAkKHRoaXMpLmZpbmQoJzpzZWxlY3RlZCcpLmF0dHIoJ2RhdGEtaWQnKTtcclxuICAgICQoJy5tb2RhbC1wcmVpbnMgLmFydGljbGUgI21vbnRhbnQnKS52YWwoZnJhaXMpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdjbGljaycsJy5tb2RhbCAjYWRkLWJ0bicsZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGZyYWlzSWQgID0gJCgnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjZnJhaXMnKS52YWwoKTtcclxuICAgIGxldCBmcmFpc1RleHQgID0gJCgnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjZnJhaXMnKS5maW5kKCc6c2VsZWN0ZWQnKS50ZXh0KCk7XHJcbiAgICBsZXQgcHJpeCAgPSAkKCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNtb250YW50JykudmFsKCk7XHJcbiAgICBjb25zdCBpbmRleCA9IGZyYWlzLmZpbmRJbmRleChmcmFpcyA9PiBmcmFpcy5pZCA9PSBmcmFpc0lkICk7XHJcbiAgICBpZihpbmRleCA9PSAtMSkge1xyXG4gICAgICAgIGZyYWlzLnB1c2goe1xyXG4gICAgICAgICAgICBpZDogZnJhaXNJZCAsXHJcbiAgICAgICAgICAgIGRlc2lnbmF0aW9uOiBmcmFpc1RleHQsXHJcbiAgICAgICAgICAgIG1vbnRhbnQ6IHByaXhcclxuICAgICAgICB9KTtcclxuICAgICAgICByYXdGcmFpcygpO1xyXG4gICAgfVxyXG59KVxyXG5jb25zdCByYXdGcmFpcyA9ICgpID0+IHtcclxuICAgIGxldCBodG1sID0gXCJcIjtcclxuICAgIGZyYWlzLm1hcCgoZiwgaSkgPT4ge1xyXG4gICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPiR7aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgPHRkPiR7Zi5kZXNpZ25hdGlvbn08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+JHtmLm1vbnRhbnR9PC90ZD5cclxuICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9J2RlbGV0ZV9mcmFpcyBidG4gYnRuLWRhbmdlcicgIGlkPScke2YuaWR9Jz48aSBjbGFzcz0nZmEgZmEtdHJhc2gnPjwvaT48L2J1dHRvbj48L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICBgXHJcbiAgICB9KVxyXG4gICAgJChcIi5tb2RhbC1wcmVpbnMgLnRhYmxlLWZlZSB0Ym9keVwiKS5odG1sKGh0bWwpXHJcbn1cclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnLmRlbGV0ZV9mcmFpcycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gZnJhaXMuZmluZEluZGV4KGZyYWlzID0+IGZyYWlzLmlkID09ICQodGhpcykuYXR0cihcImlkXCIpKTtcclxuICAgIGZyYWlzLnNwbGljZShpbmRleCwxKTtcclxuICAgIHJhd0ZyYWlzKCk7XHJcbn0pXHJcblxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcubW9kYWwgLnNhdmUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoZnJhaXMubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBBam91dGVyIERlcyBMaWduZXMhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGljb24gPSAkKFwiLm1vZGFsIC5zYXZlIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS10cmFzaCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZyYWlzJywgSlNPTi5zdHJpbmdpZnkoZnJhaXMpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9hZGRmcmFpcy9cIitpZF9wcmVpbnNjcmlwdGlvbiwgZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdGcmFpcyBCaWVuIEFqb3V0ZXInLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdHJhc2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAkKFwiLm1vZGFsLXByZWlucyAudGFibGUtZmVlIHRib2R5XCIpLmVtcHR5KCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgZnJhaXMgPSBbXTtcclxuICAgICAgICB3aW5kb3cub3BlbignL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vZmFjdHVyZS8nK2RhdGEsICdfYmxhbmsnKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxufSlcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9wcmVpbnNjcmlwdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGlkcHJlaW5zLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICBpZHByZWlucy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgIGlkcHJlaW5zLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGlkcHJlaW5zKTtcclxufSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGFibGVzX2dlc3Rpb25fcHJlaW5zY3JpcHRpb24gdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgIGlkX3ByZWluc2NyaXB0aW9uID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiNkYXRhYmxlc19nZXN0aW9uX3ByZWluc2NyaXB0aW9uIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgIGlkX3ByZWluc2NyaXB0aW9uID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGxvYWRfZXR1ZF9pbmZvKCk7XHJcbiAgICAgICAgbG9hZF9mcmFpc19wcmVpbnMoKTtcclxuICAgICAgICBnZXREb2N1bWVudHNQcmVpbnMoKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGlkX3ByZWluc2NyaXB0aW9uKTtcclxufSlcclxuXHJcbiQoXCIjYW5udWxhdGlvblwiKS5vbignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2FubnVsYXRpb24gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkcHJlaW5zJywgSlNPTi5zdHJpbmdpZnkoaWRwcmVpbnMpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9hbm51bGF0aW9uX3ByZWluc2NyaXB0aW9uXCIsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUHJlaW5zY3JpcHRpb24gQmllbiBBbm51bGVyJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcbiQoXCIjYWRtaXNzaW9uXCIpLm9uKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihpZHByZWlucy5sZW5ndGggPCAxKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hlciB1bmUgb3IgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNhZG1pc3Npb24gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICBcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZHByZWlucycsIEpTT04uc3RyaW5naWZ5KGlkcHJlaW5zKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vYWRtaXNzaW9uX3ByZWluc2NyaXB0aW9uXCIsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWRtaXNzaW9ucyBCaWVuIEVucmVnaXN0ZXInLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICB9XHJcbn0pXHJcbiQoXCIjZG9jX3ByZWluc2NyaXB0aW9uXCIpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoJyNkb2N1bWVudF9wcmVpbnNfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcblxyXG59KVxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLm1zLWVsZW0tc2VsZWN0YWJsZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICQoJy5tcy1zZWxlY3Rpb24gLm1zLWxpc3QnKS5wcmVwZW5kKCQodGhpcykuY2xvbmUoKS5yZW1vdmVDbGFzcyhcIm1zLWVsZW0tc2VsZWN0YWJsZVwiKS5hZGRDbGFzcyhcIm1zLWVsZW0tc2VsZWN0aW9uXCIpKVxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkRG9jdW1lbnQnLCAkKHRoaXMpLmF0dHIoXCJpZFwiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRQcmVpbnNjcmlwdGlvbicsIGlkX3ByZWluc2NyaXB0aW9uKTtcclxuICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vYWRkZG9jdW1lbnRzX3ByZWluc1wiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnZXJyb3InLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIubXMtZWxlbS1zZWxlY3Rpb25cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubXMtc2VsZWN0YWJsZSAubXMtbGlzdCcpLnByZXBlbmQoJCh0aGlzKS5jbG9uZSgpLnJlbW92ZUNsYXNzKFwibXMtZWxlbS1zZWxlY3Rpb25cIikuYWRkQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGFibGVcIikpXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWREb2N1bWVudCcsICQodGhpcykuYXR0cihcImlkXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZFByZWluc2NyaXB0aW9uJywgaWRfcHJlaW5zY3JpcHRpb24pO1xyXG4gICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9kZWxldGVkb2N1bWVudHNfcHJlaW5zXCIsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdlcnJvcicsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcjYXR0X3ByZWluc2NyaXB0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHdpbmRvdy5vcGVuKCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9hdHRlc3RhdGlvbl9wcmVpbnNjcmlwdGlvbi8nK2lkX3ByZWluc2NyaXB0aW9uLCAnX2JsYW5rJyk7XHJcbn0pXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnI2NmY19wcmVpbnNjcmlwdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbignL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vY2ZjX3ByZWluc2NyaXB0aW9uLycraWRfcHJlaW5zY3JpcHRpb24sICdfYmxhbmsnKTtcclxufSlcclxuXHJcbi8vICQoJ2JvZHknKS5vbignY2xpY2snLCcjbW9kaWZpZXInLGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbi8vICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbi8vICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbi8vICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgcmV0dXJuO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgJCgnI21vZGlmaWVyX21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4vLyB9KVxyXG5cclxuJCgnLm5hdi1waWxscyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICQodGhpcykudGFiKCdzaG93Jyk7XHJcbn0pXHJcbn0pXHJcblxyXG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmRJbmRleDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORF9JTkRFWCA9ICdmaW5kSW5kZXgnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChGSU5EX0lOREVYIGluIFtdKSBBcnJheSgxKVtGSU5EX0lOREVYXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kaW5kZXhcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmRJbmRleCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkRfSU5ERVgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfcHJlaW5zY3JpcHRpb24iLCJpZHByZWlucyIsImZyYWlzIiwidGFibGVfZ2VzdGlvbl9wcmVpbnMiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJmb3JFYWNoIiwiZSIsImZpbmQiLCJwcm9wIiwibGFuZ3VhZ2UiLCJ1cmwiLCJsb2FkX2V0dWRfaW5mbyIsImljb24iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwic3VjY2VzcyIsImh0bWwiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxvYWRfZnJhaXNfcHJlaW5zIiwic2VsZWN0MiIsImdldERvY3VtZW50c1ByZWlucyIsInJlcXVlc3QiLCJkb2N1bWVudHMiLCJkb2N1bWVudHNFeGlzdHMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJmaXJlIiwidGl0bGUiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsImlkX2Zvcm1hdGlvbiIsInByZXZlbnREZWZhdWx0IiwibW9kYWwiLCJhdHRyIiwiZnJhaXNJZCIsImZyYWlzVGV4dCIsInRleHQiLCJwcml4IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpZCIsInB1c2giLCJkZXNpZ25hdGlvbiIsIm1vbnRhbnQiLCJyYXdGcmFpcyIsIm1hcCIsImYiLCJpIiwic3BsaWNlIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwiZW1wdHkiLCJyZWxvYWQiLCJ3aW5kb3ciLCJvcGVuIiwiaW5wdXQiLCJpcyIsImluZGV4T2YiLCJoYXNDbGFzcyIsInByZXBlbmQiLCJjbG9uZSIsInJlbW92ZSIsInRhYiJdLCJzb3VyY2VSb290IjoiIn0=