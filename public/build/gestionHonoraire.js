(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestionHonoraire"],{

/***/ "./assets/components/honoraire/gestion_honoraire.js":
/*!**********************************************************!*\
  !*** ./assets/components/honoraire/gestion_honoraire.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

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
  var id_seance = false;
  var ids_seances = [];
  var table_gestion_honoraires = $("#datables_gestion_honoraires").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/honoraire/gestion/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      ids_seances.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_seance).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    },
    columnDefs: [{
      targets: [1],
      orderable: false
    }]
  });
  $('body').on('dblclick', '#datables_gestion_honoraires tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_seance = null;
    } else {
      $("#datables_gestion_honoraires tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_seance = $(this).attr('id');
    }
  });
  $('#table_gestion_honoraires').on('page.dt', function () {
    var info = table_gestion_honoraires.page.info();
    alert('info');
  });
  $('body').on('click', '#datables_gestion_honoraires tbody tr', function (e) {
    e.preventDefault();
    var input = $(this).find("input");

    if (input.hasClass('check_seance')) {
      return;
    } else {
      if (input.is(":checked")) {
        input.prop("checked", false);
        var index = ids_seances.indexOf(input.attr("data-id"));
        ids_seances.splice(index, 1);
      } else {
        input.prop("checked", true);
        ids_seances.push(input.attr("data-id"));
      }
    } // console.log(ids_seances);

  });
  $('body').on('click', '.check_all_seances', function () {
    // alert('test')
    ids_seances = [];
    var snc = $("body .check_check_seance");

    if ($(".check_all_seances").prop('checked') == true) {
      snc.prop("checked", true);
      snc.map(function () {
        ids_seances.push(this.value);
      });
    } else {
      snc.prop("checked", false);
    } // console.log(ids_seances);

  });
  $("select").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_gestion_honoraires.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 15;
              break;
            }

            if ($("#statut").val() != "") {
              table_gestion_honoraires.columns(4).search($("#statut").val());
            }

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            table_gestion_honoraires.columns(0).search(id_etab).draw();
            _context.next = 11;
            return axios.get('/api/formation/' + id_etab);

          case 11:
            request = _context.sent;
            response = request.data;
            _context.next = 20;
            break;

          case 15:
            // table_creation_borderaux.columns().search('').draw();
            table_gestion_honoraires.columns().search("").draw();

            if ($("#statut").val() != "") {
              table_gestion_honoraires.columns(4).search($("#statut").val()).draw();
            }

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val()).draw();
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val()).draw();
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val()).draw();
            }

          case 20:
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 14;
              break;
            }

            table_gestion_honoraires.columns(1).search(id_formation).draw();
            _context2.next = 10;
            return axios.get('/api/promotion/' + id_formation);

          case 10:
            request = _context2.sent;
            response = request.data;
            _context2.next = 15;
            break;

          case 14:
            table_gestion_honoraires.columns(0).search($("#etablissement").val()).draw();

          case 15:
            $('#semestre').html('').select2();
            $('#promotion').html(response).select2();

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_promotion, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_promotion = $(this).val();
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 13;
              break;
            }

            table_gestion_honoraires.columns(2).search(id_promotion).draw();
            _context3.next = 9;
            return axios.get('/api/semestre/' + id_promotion);

          case 9:
            request = _context3.sent;
            response = request.data;
            _context3.next = 14;
            break;

          case 13:
            table_gestion_honoraires.columns(1).search($("#formation").val()).draw();

          case 14:
            $('#semestre').html('').select2();
            $('#semestre').html(response).select2();

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_semestre, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_semestre = $(this).val();
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            if (!(id_semestre != "")) {
              _context4.next = 13;
              break;
            }

            table_gestion_honoraires.columns(3).search(id_semestre).draw();
            _context4.next = 9;
            return axios.get('/api/module/' + id_semestre);

          case 9:
            request = _context4.sent;
            response = request.data;
            _context4.next = 14;
            break;

          case 13:
            table_gestion_honoraires.columns(2).search($("#promotion").val()).draw();

          case 14:
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#module").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_module, request;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_module = $(this).val();
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            if (!(id_module != "")) {
              _context5.next = 13;
              break;
            }

            table_gestion_honoraires.columns(4).search(id_module).draw();
            _context5.next = 9;
            return axios.get('/api/element/' + id_module);

          case 9:
            request = _context5.sent;
            response = request.data;
            _context5.next = 14;
            break;

          case 13:
            table_gestion_honoraires.columns(3).search($("#semestre").val()).draw();

          case 14:
            $('#element').html(response).select2();

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#element").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_element;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_element = $(this).val();
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            table_gestion_honoraires.columns(5).search(id_element).draw();

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#statut").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var statut;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            statut = $(this).val();
            table_gestion_honoraires.columns(4).search(statut).draw();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#semaine").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var semaine;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            semaine = $(this).val();
            table_gestion_honoraires.columns(5).search(semaine).draw();

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("#professeur").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var id_prof;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id_prof = $(this).val();
            table_gestion_honoraires.columns(6).search(id_prof).draw();

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#grade").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var grade;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            grade = $(this).val();
            table_gestion_honoraires.columns(7).search(grade).draw();

          case 2:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $('body').on('click', '#annuler', /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var icon, formData, request, _response, message;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault();

              if (!(ids_seances.length === 0)) {
                _context11.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context11.abrupt("return");

            case 4:
              icon = $("#annuler i");
              icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_seances', JSON.stringify(ids_seances));
              _context11.prev = 8;
              _context11.next = 11;
              return axios.post('/honoraire/gestion/annuler_honoraires', formData);

            case 11:
              request = _context11.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: 'Honoraire Anullée Avec Succée'
              });
              ids_seances = [];
              table_gestion_honoraires.ajax.reload(null, false);
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              _context11.next = 23;
              break;

            case 19:
              _context11.prev = 19;
              _context11.t0 = _context11["catch"](8);
              message = _context11.t0.response.data;
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");

            case 23:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[8, 19]]);
    }));

    return function (_x) {
      return _ref11.apply(this, arguments);
    };
  }());
  $('body').on('click', '#regle', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var icon, formData, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();

              if (!(ids_seances.length === 0)) {
                _context12.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context12.abrupt("return");

            case 4:
              icon = $("#regle i");
              icon.removeClass('a-plus-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_seances', JSON.stringify(ids_seances));
              _context12.prev = 8;
              _context12.next = 11;
              return axios.post('/honoraire/gestion/regle_honoraires', formData);

            case 11:
              request = _context12.sent;
              _response2 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response2
              });
              ids_seances = [];
              table_gestion_honoraires.ajax.reload(null, false);
              icon.addClass('a-plus-circle').removeClass("fa-spinner fa-spin");
              _context12.next = 23;
              break;

            case 19:
              _context12.prev = 19;
              _context12.t0 = _context12["catch"](8);
              message = _context12.t0.response.data;
              icon.addClass('a-plus-circle').removeClass("fa-spinner fa-spin");

            case 23:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[8, 19]]);
    }));

    return function (_x2) {
      return _ref12.apply(this, arguments);
    };
  }());
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

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


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

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/honoraire/gestion_honoraire.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUdBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNwQ0QsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2hvbm9yYWlyZS9nZXN0aW9uX2hvbm9yYWlyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgbGV0IGlkX3NlYW5jZSA9IGZhbHNlO1xyXG4gICAgbGV0IGlkc19zZWFuY2VzID0gW107XHJcbiAgICB2YXIgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzID0gJChcIiNkYXRhYmxlc19nZXN0aW9uX2hvbm9yYWlyZXNcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvaG9ub3JhaXJlL2dlc3Rpb24vbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZHNfc2VhbmNlcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX3NlYW5jZSkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHsgdGFyZ2V0czogWzFdLCBvcmRlcmFibGU6IGZhbHNlIH1cclxuICAgICAgICBdLFxyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGFibGVzX2dlc3Rpb25faG9ub3JhaXJlcyB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfc2VhbmNlID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RhdGFibGVzX2dlc3Rpb25faG9ub3JhaXJlcyB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3NlYW5jZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnI3RhYmxlX2dlc3Rpb25faG9ub3JhaXJlcycpLm9uKCdwYWdlLmR0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbmZvID0gdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLnBhZ2UuaW5mbygpO1xyXG4gICAgICAgIGFsZXJ0KCdpbmZvJylcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19nZXN0aW9uX2hvbm9yYWlyZXMgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc0NsYXNzKCdjaGVja19zZWFuY2UnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkc19zZWFuY2VzLmluZGV4T2YoaW5wdXQuYXR0cihcImRhdGEtaWRcIikpO1xyXG4gICAgICAgICAgICAgICAgaWRzX3NlYW5jZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfc2VhbmNlcy5wdXNoKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpZHNfc2VhbmNlcyk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5jaGVja19hbGxfc2VhbmNlcycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGFsZXJ0KCd0ZXN0JylcclxuICAgICAgICBpZHNfc2VhbmNlcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHNuYyA9ICQoXCJib2R5IC5jaGVja19jaGVja19zZWFuY2VcIik7XHJcbiAgICAgICAgaWYoJChcIi5jaGVja19hbGxfc2VhbmNlc1wiKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzbmMucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgc25jLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlkc19zZWFuY2VzLnB1c2godGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzbmMucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlkc19zZWFuY2VzKTtcclxuICAgIH0pXHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZigkKFwiI3N0YXR1dFwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDQpLnNlYXJjaCgkKFwiI3N0YXR1dFwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKCkuc2VhcmNoKCcnKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICAgICAgaWYoJChcIiNzdGF0dXRcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg0KS5zZWFyY2goJChcIiNzdGF0dXRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxKS5zZWFyY2goJChcIiNmb3JtYXRpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDMpLnNlYXJjaChpZF9zZW1lc3RyZSkuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nK2lkX3NlbWVzdHJlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNtb2R1bGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9tb2R1bGUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg0KS5zZWFyY2goaWRfbW9kdWxlKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZWxlbWVudC8nK2lkX21vZHVsZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI3NlbWVzdHJlXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZWxlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZWxlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg1KS5zZWFyY2goaWRfZWxlbWVudCkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc3RhdHV0XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBzdGF0dXQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDQpLnNlYXJjaChzdGF0dXQpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWFpbmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IHNlbWFpbmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaChzZW1haW5lKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9mZXNzZXVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9mID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goaWRfcHJvZikuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZ3JhZGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGdyYWRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goZ3JhZGUpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2FubnVsZXInLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZHNfc2VhbmNlcy5sZW5ndGggPT09IDAgKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBhdSBtb2lucyB1bmUgbGlnbmUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2FubnVsZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS10aW1lcy1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkc19zZWFuY2VzJywgSlNPTi5zdHJpbmdpZnkoaWRzX3NlYW5jZXMpKTsgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ob25vcmFpcmUvZ2VzdGlvbi9hbm51bGVyX2hvbm9yYWlyZXMnLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdIb25vcmFpcmUgQW51bGzDqWUgQXZlYyBTdWNjw6llJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWRzX3NlYW5jZXM9W107XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNyZWdsZScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkc19zZWFuY2VzLmxlbmd0aCA9PT0gMCApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIGF1IG1vaW5zIHVuZSBsaWduZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcmVnbGUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdhLXBsdXMtY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZHNfc2VhbmNlcycsIEpTT04uc3RyaW5naWZ5KGlkc19zZWFuY2VzKSk7IFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvaG9ub3JhaXJlL2dlc3Rpb24vcmVnbGVfaG9ub3JhaXJlcycsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlkc19zZWFuY2VzID0gW11cclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdhLXBsdXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2EtcGx1cy1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgXHJcbn0pIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcclxudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xyXG5cclxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXHJcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XHJcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcclxufSA6IFtdLmZvckVhY2g7XHJcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xyXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIENTU1J1bGVMaXN0OiAwLFxyXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXHJcbiAgQ1NTVmFsdWVMaXN0OiAwLFxyXG4gIENsaWVudFJlY3RMaXN0OiAwLFxyXG4gIERPTVJlY3RMaXN0OiAwLFxyXG4gIERPTVN0cmluZ0xpc3Q6IDAsXHJcbiAgRE9NVG9rZW5MaXN0OiAxLFxyXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxyXG4gIEZpbGVMaXN0OiAwLFxyXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxyXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxyXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcclxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcclxuICBNZWRpYUxpc3Q6IDAsXHJcbiAgTWltZVR5cGVBcnJheTogMCxcclxuICBOYW1lZE5vZGVNYXA6IDAsXHJcbiAgTm9kZUxpc3Q6IDEsXHJcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcclxuICBQbHVnaW46IDAsXHJcbiAgUGx1Z2luQXJyYXk6IDAsXHJcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcclxuICBTVkdOdW1iZXJMaXN0OiAwLFxyXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxyXG4gIFNWR1BvaW50TGlzdDogMCxcclxuICBTVkdTdHJpbmdMaXN0OiAwLFxyXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXHJcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcclxuICBTdHlsZVNoZWV0TGlzdDogMCxcclxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxyXG4gIFRleHRUcmFja0xpc3Q6IDAsXHJcbiAgVG91Y2hMaXN0OiAwXHJcbn07XHJcbiIsIi8vIGluIG9sZCBXZWJLaXQgdmVyc2lvbnMsIGBlbGVtZW50LmNsYXNzTGlzdGAgaXMgbm90IGFuIGluc3RhbmNlIG9mIGdsb2JhbCBgRE9NVG9rZW5MaXN0YFxyXG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XHJcblxyXG52YXIgY2xhc3NMaXN0ID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdzcGFuJykuY2xhc3NMaXN0O1xyXG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gY2xhc3NMaXN0ICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3RvciAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IucHJvdG90eXBlO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBET01Ub2tlbkxpc3RQcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgPyB1bmRlZmluZWQgOiBET01Ub2tlbkxpc3RQcm90b3R5cGU7XHJcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXHJcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XHJcbiAgZm9yRWFjaDogZm9yRWFjaFxyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xyXG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xyXG5cclxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXHJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcclxuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xyXG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG4gIH1cclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xyXG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xyXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XHJcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xyXG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcclxudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xyXG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcclxudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcclxuXHJcbi8vIEBAc2VhcmNoIGxvZ2ljXHJcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xyXG4gIHJldHVybiBbXHJcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxyXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xyXG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XHJcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xyXG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xyXG4gICAgfSxcclxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXHJcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcclxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XHJcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcclxuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcclxuXHJcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcclxuXHJcbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcclxuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xyXG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XHJcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcclxuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xyXG4gICAgfVxyXG4gIF07XHJcbn0pO1xyXG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xyXG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcclxudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcclxudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcclxudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcclxuXHJcbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xyXG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxyXG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcclxuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xyXG4gIH1cclxufTtcclxuXHJcbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcclxuICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIHtcclxuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xyXG4gIH1cclxufVxyXG5cclxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX3NlYW5jZSIsImlkc19zZWFuY2VzIiwidGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsIm9yZGVyYWJsZSIsIm9uIiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsImluZm8iLCJwYWdlIiwiYWxlcnQiLCJpbnB1dCIsImlzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsInNuYyIsIm1hcCIsInZhbHVlIiwic2VsZWN0MiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwicmVzcG9uc2UiLCJkcmF3IiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJpZF9zZW1lc3RyZSIsImlkX21vZHVsZSIsImlkX2VsZW1lbnQiLCJzdGF0dXQiLCJzZW1haW5lIiwiaWRfcHJvZiIsImdyYWRlIiwibGVuZ3RoIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsInJlbG9hZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9