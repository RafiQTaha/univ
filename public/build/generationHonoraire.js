(self["webpackChunk"] = self["webpackChunk"] || []).push([["generationHonoraire"],{

/***/ "./assets/components/honoraire/generation_honoraire.js":
/*!*************************************************************!*\
  !*** ./assets/components/honoraire/generation_honoraire.js ***!
  \*************************************************************/
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
  var table_generation_honoraires = $("#datables_generation_honoraires").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/honoraire/generation/list",
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
    }
  });
  $('body').on('dblclick', '#datables_generation_honoraires tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_seance = null;
    } else {
      $("#datables_generation_honoraires tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_seance = $(this).attr('id');
    }
  });
  $('body').on('click', '#datables_generation_honoraires tbody tr', function (e) {
    e.preventDefault();
    var input = $(this).find("input");

    if (input.hasClass('check_reg')) {
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
    }
  });
  $("select").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_generation_honoraires.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 15;
              break;
            }

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_generation_honoraires.columns(9).search($("#niv").val());
            }

            table_generation_honoraires.columns(0).search(id_etab).draw();
            _context.next = 11;
            return axios.get('/api/formation/' + id_etab);

          case 11:
            request = _context.sent;
            response = request.data;
            _context.next = 19;
            break;

          case 15:
            table_generation_honoraires.columns().search("").draw();

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val()).draw();
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val()).draw();
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val()).draw();
            }

          case 19:
            $('#niv1').html('').select2();
            $('#niv2').html('').select2();
            $('#niv3').html('').select2();
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 27:
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
            table_generation_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 14;
              break;
            }

            table_generation_honoraires.columns(1).search(id_formation).draw();
            _context2.next = 10;
            return axios.get('/api/promotion/' + id_formation);

          case 10:
            request = _context2.sent;
            response = request.data;
            _context2.next = 15;
            break;

          case 14:
            table_generation_honoraires.columns(0).search($("#etablissement").val()).draw();

          case 15:
            $('#niv1').html('').select2();
            $('#niv2').html('').select2();
            $('#niv3').html('').select2();
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#promotion').html(response).select2();

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_promotion, request, requestt;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_promotion = $(this).val();
            table_generation_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 17;
              break;
            }

            table_generation_honoraires.columns(2).search(id_promotion).draw();
            _context3.next = 9;
            return axios.get('/api/semestre/' + id_promotion);

          case 9:
            request = _context3.sent;
            response = request.data;
            _context3.next = 13;
            return axios.get('/api/niv1/' + id_promotion);

          case 13:
            requestt = _context3.sent;
            niv1 = requestt.data;
            _context3.next = 18;
            break;

          case 17:
            table_generation_honoraires.columns(1).search($("#formation").val()).draw();

          case 18:
            $('#niv1').html(niv1).select2();
            $('#niv2').html('').select2();
            $('#niv3').html('').select2();
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#semestre').html(response).select2();

          case 25:
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
            table_generation_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val());
            }

            if ($("#niv1").val() != "") {
              table_generation_honoraires.columns(9).search($("#niv1").val());
            }

            if ($("#niv2").val() != "") {
              table_generation_honoraires.columns(10).search($("#niv2").val());
            }

            if ($("#niv3").val() != "") {
              table_generation_honoraires.columns(11).search($("#niv3").val());
            }

            if (!(id_semestre != "")) {
              _context4.next = 16;
              break;
            }

            table_generation_honoraires.columns(3).search(id_semestre).draw();
            _context4.next = 12;
            return axios.get('/api/module/' + id_semestre);

          case 12:
            request = _context4.sent;
            response = request.data;
            _context4.next = 17;
            break;

          case 16:
            table_generation_honoraires.columns(2).search($("#promotion").val()).draw();

          case 17:
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 19:
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
            table_generation_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val());
            }

            if ($("#niv1").val() != "") {
              table_generation_honoraires.columns(9).search($("#niv1").val());
            }

            if ($("#niv2").val() != "") {
              table_generation_honoraires.columns(10).search($("#niv2").val());
            }

            if ($("#niv3").val() != "") {
              table_generation_honoraires.columns(11).search($("#niv3").val());
            }

            if (!(id_module != "")) {
              _context5.next = 16;
              break;
            }

            table_generation_honoraires.columns(4).search(id_module).draw();
            _context5.next = 12;
            return axios.get('/api/element/' + id_module);

          case 12:
            request = _context5.sent;
            response = request.data;
            _context5.next = 17;
            break;

          case 16:
            table_generation_honoraires.columns(3).search($("#semestre").val()).draw();

          case 17:
            $('#element').html(response).select2();

          case 18:
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
            table_generation_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_generation_honoraires.columns(6).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_generation_honoraires.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_generation_honoraires.columns(8).search($("#grade").val());
            }

            if ($("#niv1").val() != "") {
              table_generation_honoraires.columns(9).search($("#niv1").val());
            }

            if ($("#niv2").val() != "") {
              table_generation_honoraires.columns(10).search($("#niv2").val());
            }

            if ($("#niv3").val() != "") {
              table_generation_honoraires.columns(11).search($("#niv3").val());
            }

            table_generation_honoraires.columns(5).search(id_element).draw();

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#semaine").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var semaine;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            semaine = $(this).val();
            table_generation_honoraires.columns(6).search(semaine).draw();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#professeur").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var id_prof;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id_prof = $(this).val();
            table_generation_honoraires.columns(7).search(id_prof).draw();

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("#grade").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var grade;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            grade = $(this).val();
            table_generation_honoraires.columns(8).search(grade).draw();

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#niv1").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var niv1, response, request;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            niv1 = $(this).val();
            response = "";

            if (!(niv1 != "")) {
              _context10.next = 10;
              break;
            }

            niv = niv1;
            _context10.next = 6;
            return axios.get('/api/niv2/' + niv1);

          case 6:
            request = _context10.sent;
            response = request.data;
            _context10.next = 11;
            break;

          case 10:
            niv = 0;

          case 11:
            table_generation_honoraires.columns(9).search(niv1).draw();
            $('#niv3').html("").select2();
            $('#niv2').html(response).select2();

          case 14:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $("#niv2").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var niv2, response, request;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            niv2 = $(this).val();
            response = "";

            if (!(niv2 != "")) {
              _context11.next = 10;
              break;
            }

            niv = niv2;
            _context11.next = 6;
            return axios.get('/api/niv3/' + niv2);

          case 6:
            request = _context11.sent;
            response = request.data;
            _context11.next = 11;
            break;

          case 10:
            niv = $('#niv1').val();

          case 11:
            $('#niv3').html(response).select2();
            table_generation_honoraires.columns(10).search(niv2).draw();

          case 13:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  })));
  $("#niv3").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var niv3, response;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            niv3 = $(this).val();
            response = "";

            if (niv3 != "") {
              niv = niv3;
            } else {
              niv = $('#niv2').val();
            }

            table_generation_honoraires.columns(11).search(niv3).draw();

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  })));
  $('body').on('click', '#generer', /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
      var icon, formData, request, _response, message;

      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault();

              if (!(ids_seances.length === 0)) {
                _context13.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context13.abrupt("return");

            case 4:
              icon = $("#generer i");
              icon.removeClass('fab fa-get-pocket').addClass("fas fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_seances', JSON.stringify(ids_seances));
              _context13.prev = 8;
              _context13.next = 11;
              return axios.post('/honoraire/generation/generation_honoraire_generer', formData);

            case 11:
              request = _context13.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: _response
              });
              table_generation_honoraires.ajax.reload(null, false);
              ids_seances = [];
              icon.addClass('fab fa-get-pocket').removeClass("fas fa-spinner fa-spin");
              _context13.next = 23;
              break;

            case 19:
              _context13.prev = 19;
              _context13.t0 = _context13["catch"](8);
              message = _context13.t0.response.data;
              icon.addClass('fab fa-get-pocket').removeClass("fas fa-spinner fa-spin");

            case 23:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[8, 19]]);
    }));

    return function (_x) {
      return _ref13.apply(this, arguments);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/honoraire/generation_honoraire.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGlvbkhvbm9yYWlyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVc7QUFDckJDLElBQUFBLEtBQUssRUFBRSxJQURjO0FBRXJCQyxJQUFBQSxRQUFRLEVBQUUsU0FGVztBQUdyQkMsSUFBQUEsaUJBQWlCLEVBQUUsS0FIRTtBQUlyQkMsSUFBQUEsS0FBSyxFQUFFLElBSmM7QUFLckJDLElBQUFBLGdCQUFnQixFQUFFLElBTEc7QUFNckJDLElBQUFBLE9BQU8sRUFBRSxpQkFBQ0wsS0FBRCxFQUFXO0FBQ2hCQSxNQUFBQSxLQUFLLENBQUNNLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDUixJQUFJLENBQUNTLFNBQTFDO0FBQ0FQLE1BQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1UsV0FBMUM7QUFDSDtBQVRvQixHQUFYLENBQWQ7QUFXQSxNQUFJQyxTQUFTLEdBQUcsS0FBaEI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQywyQkFBMkIsR0FBR2pCLENBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDa0IsU0FBckMsQ0FBK0M7QUFDN0VDLElBQUFBLFVBQVUsRUFBRSxDQUNSLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixjQUF0QixDQURRLEVBRVIsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlEsQ0FEaUU7QUFLN0VDLElBQUFBLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FBRCxDQUxzRTtBQU03RUMsSUFBQUEsSUFBSSxFQUFFLDRCQU51RTtBQU83RUMsSUFBQUEsVUFBVSxFQUFFLElBUGlFO0FBUTdFQyxJQUFBQSxVQUFVLEVBQUUsSUFSaUU7QUFTN0VDLElBQUFBLFdBQVcsRUFBRSxJQVRnRTtBQVU3RUMsSUFBQUEsT0FBTyxFQUFFLElBVm9FO0FBVzdFQyxJQUFBQSxZQUFZLEVBQUUsd0JBQVk7QUFDdEJWLE1BQUFBLFdBQVcsQ0FBQ1csT0FBWixDQUFvQixVQUFDQyxDQUFELEVBQU87QUFDdkI1QixRQUFBQSxDQUFDLENBQUMsYUFBYTRCLENBQWQsQ0FBRCxDQUNDQyxJQURELENBQ00sT0FETixFQUVDQyxJQUZELENBRU0sU0FGTixFQUVpQixJQUZqQjtBQUdILE9BSkQ7QUFLQTlCLE1BQUFBLENBQUMsQ0FBQyxhQUFhZSxTQUFkLENBQUQsQ0FBMEJnQixRQUExQixDQUFtQyxrQkFBbkM7QUFDSCxLQWxCNEU7QUFtQjdFQyxJQUFBQSxRQUFRLEVBQUU7QUFDTkMsTUFBQUEsR0FBRyxFQUFFO0FBREM7QUFuQm1FLEdBQS9DLENBQWxDO0FBdUJBakMsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVa0MsRUFBVixDQUFhLFVBQWIsRUFBd0IsMENBQXhCLEVBQW1FLFVBQVVOLENBQVYsRUFBYTtBQUM1RUEsSUFBQUEsQ0FBQyxDQUFDTyxjQUFGOztBQUNBLFFBQUduQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvQyxRQUFSLENBQWlCLGtCQUFqQixDQUFILEVBQXlDO0FBQ3JDcEMsTUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsV0FBUixDQUFvQixrQkFBcEI7QUFDQXRCLE1BQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0gsS0FIRCxNQUdPO0FBQ0hmLE1BQUFBLENBQUMsQ0FBQywwQ0FBRCxDQUFELENBQThDcUMsV0FBOUMsQ0FBMEQsa0JBQTFEO0FBQ0FyQyxNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVErQixRQUFSLENBQWlCLGtCQUFqQjtBQUNBaEIsTUFBQUEsU0FBUyxHQUFHZixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQyxJQUFSLENBQWEsSUFBYixDQUFaO0FBQ0g7QUFDSixHQVZEO0FBV0F0QyxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVrQyxFQUFWLENBQWEsT0FBYixFQUFxQiwwQ0FBckIsRUFBZ0UsVUFBVU4sQ0FBVixFQUFhO0FBQ3pFQSxJQUFBQSxDQUFDLENBQUNPLGNBQUY7QUFDQSxRQUFNSSxLQUFLLEdBQUd2QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE2QixJQUFSLENBQWEsT0FBYixDQUFkOztBQUNBLFFBQUlVLEtBQUssQ0FBQ0gsUUFBTixDQUFlLFdBQWYsQ0FBSixFQUFpQztBQUM3QjtBQUNILEtBRkQsTUFHSTtBQUNBLFVBQUdHLEtBQUssQ0FBQ0MsRUFBTixDQUFTLFVBQVQsQ0FBSCxFQUF3QjtBQUNwQkQsUUFBQUEsS0FBSyxDQUFDVCxJQUFOLENBQVcsU0FBWCxFQUFxQixLQUFyQjtBQUNBLFlBQU1XLEtBQUssR0FBR3pCLFdBQVcsQ0FBQzBCLE9BQVosQ0FBb0JILEtBQUssQ0FBQ0QsSUFBTixDQUFXLFNBQVgsQ0FBcEIsQ0FBZDtBQUNBdEIsUUFBQUEsV0FBVyxDQUFDMkIsTUFBWixDQUFtQkYsS0FBbkIsRUFBeUIsQ0FBekI7QUFDSCxPQUpELE1BSUs7QUFDREYsUUFBQUEsS0FBSyxDQUFDVCxJQUFOLENBQVcsU0FBWCxFQUFxQixJQUFyQjtBQUNBZCxRQUFBQSxXQUFXLENBQUM0QixJQUFaLENBQWlCTCxLQUFLLENBQUNELElBQU4sQ0FBVyxTQUFYLENBQWpCO0FBQ0g7QUFDSjtBQUNKLEdBaEJEO0FBaUJBdEMsRUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZNkMsT0FBWjtBQUNBN0MsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JrQyxFQUFwQixDQUF1QixRQUF2Qix1RUFBaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCWSxZQUFBQSxPQUR1QixHQUNiOUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0MsR0FBUixFQURhO0FBRTdCOUIsWUFBQUEsMkJBQTJCLENBQUMrQixPQUE1QixHQUFzQ0MsTUFBdEMsQ0FBNkMsRUFBN0M7QUFDSUMsWUFBQUEsUUFIeUIsR0FHZCxFQUhjOztBQUFBLGtCQUkxQkosT0FBTyxJQUFJLEVBSmU7QUFBQTtBQUFBO0FBQUE7O0FBS3pCLGdCQUFHOUMsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjK0MsR0FBZCxNQUF1QixFQUExQixFQUE2QjtBQUN6QjlCLGNBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDakQsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjK0MsR0FBZCxFQUE5QztBQUNIOztBQUNELGdCQUFHL0MsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQitDLEdBQWpCLE1BQTBCLEVBQTdCLEVBQWdDO0FBQzVCOUIsY0FBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxDQUFwQyxFQUF1Q0MsTUFBdkMsQ0FBOENqRCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCK0MsR0FBakIsRUFBOUM7QUFDSDs7QUFDRCxnQkFBRy9DLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWStDLEdBQVosTUFBcUIsRUFBeEIsRUFBMkI7QUFDdkI5QixjQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q2pELENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWStDLEdBQVosRUFBOUM7QUFDSDs7QUFDRCxnQkFBRy9DLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYytDLEdBQWQsTUFBdUIsRUFBMUIsRUFBNkI7QUFDekI5QixjQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q2pELENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVStDLEdBQVYsRUFBOUM7QUFDSDs7QUFDRDlCLFlBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDSCxPQUE5QyxFQUF1REssSUFBdkQ7QUFqQnlCO0FBQUEsbUJBa0JIQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxvQkFBa0JQLE9BQTVCLENBbEJHOztBQUFBO0FBa0JuQlEsWUFBQUEsT0FsQm1CO0FBbUJ6QkosWUFBQUEsUUFBUSxHQUFHSSxPQUFPLENBQUNDLElBQW5CO0FBbkJ5QjtBQUFBOztBQUFBO0FBcUJ6QnRDLFlBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsR0FBc0NDLE1BQXRDLENBQTZDLEVBQTdDLEVBQWlERSxJQUFqRDs7QUFDQSxnQkFBR25ELENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYytDLEdBQWQsTUFBdUIsRUFBMUIsRUFBNkI7QUFDekI5QixjQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q2pELENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYytDLEdBQWQsRUFBOUMsRUFBbUVJLElBQW5FO0FBQ0g7O0FBQ0QsZ0JBQUduRCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCK0MsR0FBakIsTUFBMEIsRUFBN0IsRUFBZ0M7QUFDNUI5QixjQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q2pELENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIrQyxHQUFqQixFQUE5QyxFQUFzRUksSUFBdEU7QUFDSDs7QUFDRCxnQkFBR25ELENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWStDLEdBQVosTUFBcUIsRUFBeEIsRUFBMkI7QUFDdkI5QixjQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q2pELENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWStDLEdBQVosRUFBOUMsRUFBaUVJLElBQWpFO0FBQ0g7O0FBOUJ3QjtBQWdDN0JuRCxZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVd3RCxJQUFYLENBQWdCLEVBQWhCLEVBQW9CWCxPQUFwQjtBQUNBN0MsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXd0QsSUFBWCxDQUFnQixFQUFoQixFQUFvQlgsT0FBcEI7QUFDQTdDLFlBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3dELElBQVgsQ0FBZ0IsRUFBaEIsRUFBb0JYLE9BQXBCO0FBQ0E3QyxZQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWV3RCxJQUFmLENBQW9CLEVBQXBCLEVBQXdCWCxPQUF4QjtBQUNBN0MsWUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhd0QsSUFBYixDQUFrQixFQUFsQixFQUFzQlgsT0FBdEI7QUFDQTdDLFlBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3dELElBQWQsQ0FBbUIsRUFBbkIsRUFBdUJYLE9BQXZCO0FBQ0E3QyxZQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCd0QsSUFBaEIsQ0FBcUIsRUFBckIsRUFBeUJYLE9BQXpCO0FBQ0E3QyxZQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCd0QsSUFBaEIsQ0FBcUJOLFFBQXJCLEVBQStCTCxPQUEvQjs7QUF2QzZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWpDO0FBeUNBN0MsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmtDLEVBQWhCLENBQW1CLFFBQW5CLHVFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJ1QixZQUFBQSxZQURtQixHQUNKekQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0MsR0FBUixFQURJO0FBRXpCOUIsWUFBQUEsMkJBQTJCLENBQUMrQixPQUE1QixHQUFzQ0MsTUFBdEMsQ0FBNkMsRUFBN0M7O0FBQ0EsZ0JBQUdqRCxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMrQyxHQUFkLE1BQXVCLEVBQTFCLEVBQTZCO0FBQ3pCOUIsY0FBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxDQUFwQyxFQUF1Q0MsTUFBdkMsQ0FBOENqRCxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMrQyxHQUFkLEVBQTlDO0FBQ0g7O0FBQ0QsZ0JBQUcvQyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCK0MsR0FBakIsTUFBMEIsRUFBN0IsRUFBZ0M7QUFDNUI5QixjQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q2pELENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIrQyxHQUFqQixFQUE5QztBQUNIOztBQUNELGdCQUFHL0MsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZK0MsR0FBWixNQUFxQixFQUF4QixFQUEyQjtBQUN2QjlCLGNBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDakQsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZK0MsR0FBWixFQUE5QztBQUNIOztBQUNHRyxZQUFBQSxRQVpxQixHQVlWLEVBWlU7O0FBQUEsa0JBYXRCTyxZQUFZLElBQUksRUFiTTtBQUFBO0FBQUE7QUFBQTs7QUFjckJ4QyxZQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q1EsWUFBOUMsRUFBNEROLElBQTVEO0FBZHFCO0FBQUEsbUJBZUNDLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFrQkksWUFBNUIsQ0FmRDs7QUFBQTtBQWVmSCxZQUFBQSxPQWZlO0FBZ0JyQkosWUFBQUEsUUFBUSxHQUFHSSxPQUFPLENBQUNDLElBQW5CO0FBaEJxQjtBQUFBOztBQUFBO0FBa0JyQnRDLFlBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDakQsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IrQyxHQUFwQixFQUE5QyxFQUF5RUksSUFBekU7O0FBbEJxQjtBQW9CekJuRCxZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVd3RCxJQUFYLENBQWdCLEVBQWhCLEVBQW9CWCxPQUFwQjtBQUNBN0MsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXd0QsSUFBWCxDQUFnQixFQUFoQixFQUFvQlgsT0FBcEI7QUFDQTdDLFlBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3dELElBQVgsQ0FBZ0IsRUFBaEIsRUFBb0JYLE9BQXBCO0FBQ0E3QyxZQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWV3RCxJQUFmLENBQW9CLEVBQXBCLEVBQXdCWCxPQUF4QjtBQUNBN0MsWUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhd0QsSUFBYixDQUFrQixFQUFsQixFQUFzQlgsT0FBdEI7QUFDQTdDLFlBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3dELElBQWQsQ0FBbUIsRUFBbkIsRUFBdUJYLE9BQXZCO0FBQ0E3QyxZQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCd0QsSUFBaEIsQ0FBcUJOLFFBQXJCLEVBQStCTCxPQUEvQjs7QUExQnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCO0FBNEJBN0MsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmtDLEVBQWhCLENBQW1CLFFBQW5CLHVFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJ3QixZQUFBQSxZQURtQixHQUNKMUQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0MsR0FBUixFQURJO0FBRXpCOUIsWUFBQUEsMkJBQTJCLENBQUMrQixPQUE1QixHQUFzQ0MsTUFBdEMsQ0FBNkMsRUFBN0M7O0FBQ0EsZ0JBQUdqRCxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMrQyxHQUFkLE1BQXVCLEVBQTFCLEVBQTZCO0FBQ3pCOUIsY0FBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxDQUFwQyxFQUF1Q0MsTUFBdkMsQ0FBOENqRCxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMrQyxHQUFkLEVBQTlDO0FBQ0g7O0FBQ0QsZ0JBQUcvQyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCK0MsR0FBakIsTUFBMEIsRUFBN0IsRUFBZ0M7QUFDNUI5QixjQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q2pELENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIrQyxHQUFqQixFQUE5QztBQUNIOztBQUNELGdCQUFHL0MsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZK0MsR0FBWixNQUFxQixFQUF4QixFQUEyQjtBQUN2QjlCLGNBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDakQsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZK0MsR0FBWixFQUE5QztBQUNIOztBQVh3QixrQkFZdEJXLFlBQVksSUFBSSxFQVpNO0FBQUE7QUFBQTtBQUFBOztBQWFyQnpDLFlBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDUyxZQUE5QyxFQUE0RFAsSUFBNUQ7QUFicUI7QUFBQSxtQkFjQ0MsS0FBSyxDQUFDQyxHQUFOLENBQVUsbUJBQWlCSyxZQUEzQixDQWREOztBQUFBO0FBY2ZKLFlBQUFBLE9BZGU7QUFlckJKLFlBQUFBLFFBQVEsR0FBR0ksT0FBTyxDQUFDQyxJQUFuQjtBQWZxQjtBQUFBLG1CQWdCRUgsS0FBSyxDQUFDQyxHQUFOLENBQVUsZUFBYUssWUFBdkIsQ0FoQkY7O0FBQUE7QUFnQmZDLFlBQUFBLFFBaEJlO0FBaUJyQkMsWUFBQUEsSUFBSSxHQUFHRCxRQUFRLENBQUNKLElBQWhCO0FBakJxQjtBQUFBOztBQUFBO0FBbUJyQnRDLFlBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDakQsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQitDLEdBQWhCLEVBQTlDLEVBQXFFSSxJQUFyRTs7QUFuQnFCO0FBcUJ6Qm5ELFlBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3dELElBQVgsQ0FBZ0JJLElBQWhCLEVBQXNCZixPQUF0QjtBQUNBN0MsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXd0QsSUFBWCxDQUFnQixFQUFoQixFQUFvQlgsT0FBcEI7QUFDQTdDLFlBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3dELElBQVgsQ0FBZ0IsRUFBaEIsRUFBb0JYLE9BQXBCO0FBQ0E3QyxZQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWV3RCxJQUFmLENBQW9CLEVBQXBCLEVBQXdCWCxPQUF4QjtBQUNBN0MsWUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhd0QsSUFBYixDQUFrQixFQUFsQixFQUFzQlgsT0FBdEI7QUFDQTdDLFlBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3dELElBQWQsQ0FBbUIsRUFBbkIsRUFBdUJYLE9BQXZCO0FBQ0E3QyxZQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWV3RCxJQUFmLENBQW9CTixRQUFwQixFQUE4QkwsT0FBOUI7O0FBM0J5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3QjtBQTZCQTdDLEVBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZWtDLEVBQWYsQ0FBa0IsUUFBbEIsdUVBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQjJCLFlBQUFBLFdBRGtCLEdBQ0o3RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVErQyxHQUFSLEVBREk7QUFFeEI5QixZQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLEdBQXNDQyxNQUF0QyxDQUE2QyxFQUE3Qzs7QUFDQSxnQkFBR2pELENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYytDLEdBQWQsTUFBdUIsRUFBMUIsRUFBNkI7QUFDekI5QixjQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q2pELENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYytDLEdBQWQsRUFBOUM7QUFDSDs7QUFDRCxnQkFBRy9DLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIrQyxHQUFqQixNQUEwQixFQUE3QixFQUFnQztBQUM1QjlCLGNBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDakQsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQitDLEdBQWpCLEVBQTlDO0FBQ0g7O0FBQ0QsZ0JBQUcvQyxDQUFDLENBQUMsUUFBRCxDQUFELENBQVkrQyxHQUFaLE1BQXFCLEVBQXhCLEVBQTJCO0FBQ3ZCOUIsY0FBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxDQUFwQyxFQUF1Q0MsTUFBdkMsQ0FBOENqRCxDQUFDLENBQUMsUUFBRCxDQUFELENBQVkrQyxHQUFaLEVBQTlDO0FBQ0g7O0FBQ0QsZ0JBQUcvQyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQyxHQUFYLE1BQW9CLEVBQXZCLEVBQTBCO0FBQ3RCOUIsY0FBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxDQUFwQyxFQUF1Q0MsTUFBdkMsQ0FBOENqRCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQyxHQUFYLEVBQTlDO0FBQ0g7O0FBQ0QsZ0JBQUcvQyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQyxHQUFYLE1BQW9CLEVBQXZCLEVBQTBCO0FBQ3RCOUIsY0FBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxFQUFwQyxFQUF3Q0MsTUFBeEMsQ0FBK0NqRCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQyxHQUFYLEVBQS9DO0FBQ0g7O0FBQ0QsZ0JBQUcvQyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQyxHQUFYLE1BQW9CLEVBQXZCLEVBQTBCO0FBQ3RCOUIsY0FBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxFQUFwQyxFQUF3Q0MsTUFBeEMsQ0FBK0NqRCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQyxHQUFYLEVBQS9DO0FBQ0g7O0FBcEJ1QixrQkFxQnJCYyxXQUFXLElBQUksRUFyQk07QUFBQTtBQUFBO0FBQUE7O0FBc0JwQjVDLFlBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDWSxXQUE5QyxFQUEyRFYsSUFBM0Q7QUF0Qm9CO0FBQUEsbUJBdUJFQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxpQkFBZVEsV0FBekIsQ0F2QkY7O0FBQUE7QUF1QmRQLFlBQUFBLE9BdkJjO0FBd0JwQkosWUFBQUEsUUFBUSxHQUFHSSxPQUFPLENBQUNDLElBQW5CO0FBeEJvQjtBQUFBOztBQUFBO0FBMEJwQnRDLFlBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDakQsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQitDLEdBQWhCLEVBQTlDLEVBQXFFSSxJQUFyRTs7QUExQm9CO0FBNEJ4Qm5ELFlBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3dELElBQWQsQ0FBbUIsRUFBbkIsRUFBdUJYLE9BQXZCO0FBQ0E3QyxZQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWF3RCxJQUFiLENBQWtCTixRQUFsQixFQUE0QkwsT0FBNUI7O0FBN0J3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE1QjtBQStCQTdDLEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWtDLEVBQWIsQ0FBZ0IsUUFBaEIsdUVBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQjRCLFlBQUFBLFNBRGdCLEdBQ0o5RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVErQyxHQUFSLEVBREk7QUFFdEI5QixZQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLEdBQXNDQyxNQUF0QyxDQUE2QyxFQUE3Qzs7QUFDQSxnQkFBR2pELENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYytDLEdBQWQsTUFBdUIsRUFBMUIsRUFBNkI7QUFDekI5QixjQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q2pELENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYytDLEdBQWQsRUFBOUM7QUFDSDs7QUFDRCxnQkFBRy9DLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIrQyxHQUFqQixNQUEwQixFQUE3QixFQUFnQztBQUM1QjlCLGNBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDakQsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQitDLEdBQWpCLEVBQTlDO0FBQ0g7O0FBQ0QsZ0JBQUcvQyxDQUFDLENBQUMsUUFBRCxDQUFELENBQVkrQyxHQUFaLE1BQXFCLEVBQXhCLEVBQTJCO0FBQ3ZCOUIsY0FBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxDQUFwQyxFQUF1Q0MsTUFBdkMsQ0FBOENqRCxDQUFDLENBQUMsUUFBRCxDQUFELENBQVkrQyxHQUFaLEVBQTlDO0FBQ0g7O0FBQ0QsZ0JBQUcvQyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQyxHQUFYLE1BQW9CLEVBQXZCLEVBQTBCO0FBQ3RCOUIsY0FBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxDQUFwQyxFQUF1Q0MsTUFBdkMsQ0FBOENqRCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQyxHQUFYLEVBQTlDO0FBQ0g7O0FBQ0QsZ0JBQUcvQyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQyxHQUFYLE1BQW9CLEVBQXZCLEVBQTBCO0FBQ3RCOUIsY0FBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxFQUFwQyxFQUF3Q0MsTUFBeEMsQ0FBK0NqRCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQyxHQUFYLEVBQS9DO0FBQ0g7O0FBQ0QsZ0JBQUcvQyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQyxHQUFYLE1BQW9CLEVBQXZCLEVBQTBCO0FBQ3RCOUIsY0FBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxFQUFwQyxFQUF3Q0MsTUFBeEMsQ0FBK0NqRCxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcrQyxHQUFYLEVBQS9DO0FBQ0g7O0FBcEJxQixrQkFxQm5CZSxTQUFTLElBQUksRUFyQk07QUFBQTtBQUFBO0FBQUE7O0FBc0JsQjdDLFlBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDYSxTQUE5QyxFQUF5RFgsSUFBekQ7QUF0QmtCO0FBQUEsbUJBdUJJQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxrQkFBZ0JTLFNBQTFCLENBdkJKOztBQUFBO0FBdUJaUixZQUFBQSxPQXZCWTtBQXdCbEJKLFlBQUFBLFFBQVEsR0FBR0ksT0FBTyxDQUFDQyxJQUFuQjtBQXhCa0I7QUFBQTs7QUFBQTtBQTBCbEJ0QyxZQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q2pELENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZStDLEdBQWYsRUFBOUMsRUFBb0VJLElBQXBFOztBQTFCa0I7QUE0QnRCbkQsWUFBQUEsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjd0QsSUFBZCxDQUFtQk4sUUFBbkIsRUFBNkJMLE9BQTdCOztBQTVCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBMUI7QUE4QkE3QyxFQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNrQyxFQUFkLENBQWlCLFFBQWpCLHVFQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakI2QixZQUFBQSxVQURpQixHQUNKL0QsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0MsR0FBUixFQURJO0FBRXZCOUIsWUFBQUEsMkJBQTJCLENBQUMrQixPQUE1QixHQUFzQ0MsTUFBdEMsQ0FBNkMsRUFBN0M7O0FBQ0EsZ0JBQUdqRCxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMrQyxHQUFkLE1BQXVCLEVBQTFCLEVBQTZCO0FBQ3pCOUIsY0FBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxDQUFwQyxFQUF1Q0MsTUFBdkMsQ0FBOENqRCxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMrQyxHQUFkLEVBQTlDO0FBQ0g7O0FBQ0QsZ0JBQUcvQyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCK0MsR0FBakIsTUFBMEIsRUFBN0IsRUFBZ0M7QUFDNUI5QixjQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q2pELENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIrQyxHQUFqQixFQUE5QztBQUNIOztBQUNELGdCQUFHL0MsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZK0MsR0FBWixNQUFxQixFQUF4QixFQUEyQjtBQUN2QjlCLGNBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDakQsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZK0MsR0FBWixFQUE5QztBQUNIOztBQUNELGdCQUFHL0MsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXK0MsR0FBWCxNQUFvQixFQUF2QixFQUEwQjtBQUN0QjlCLGNBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDakQsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXK0MsR0FBWCxFQUE5QztBQUNIOztBQUNELGdCQUFHL0MsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXK0MsR0FBWCxNQUFvQixFQUF2QixFQUEwQjtBQUN0QjlCLGNBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsRUFBcEMsRUFBd0NDLE1BQXhDLENBQStDakQsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXK0MsR0FBWCxFQUEvQztBQUNIOztBQUNELGdCQUFHL0MsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXK0MsR0FBWCxNQUFvQixFQUF2QixFQUEwQjtBQUN0QjlCLGNBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsRUFBcEMsRUFBd0NDLE1BQXhDLENBQStDakQsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXK0MsR0FBWCxFQUEvQztBQUNIOztBQUNEOUIsWUFBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxDQUFwQyxFQUF1Q0MsTUFBdkMsQ0FBOENjLFVBQTlDLEVBQTBEWixJQUExRDs7QUFyQnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNCO0FBdUJBbkQsRUFBQUEsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFja0MsRUFBZCxDQUFpQixRQUFqQix1RUFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCOEIsWUFBQUEsT0FEaUIsR0FDUGhFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStDLEdBQVIsRUFETztBQUV2QjlCLFlBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDZSxPQUE5QyxFQUF1RGIsSUFBdkQ7O0FBRnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNCO0FBSUFuRCxFQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCa0MsRUFBakIsQ0FBb0IsUUFBcEIsdUVBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQitCLFlBQUFBLE9BRG9CLEdBQ1ZqRSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVErQyxHQUFSLEVBRFU7QUFFMUI5QixZQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q2dCLE9BQTlDLEVBQXVEZCxJQUF2RDs7QUFGMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUI7QUFJQW5ELEVBQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWtDLEVBQVosQ0FBZSxRQUFmLHVFQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZmdDLFlBQUFBLEtBRGUsR0FDUGxFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStDLEdBQVIsRUFETztBQUVyQjlCLFlBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLE1BQXZDLENBQThDaUIsS0FBOUMsRUFBcURmLElBQXJEOztBQUZxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6QjtBQUlBbkQsRUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXa0MsRUFBWCxDQUFjLFFBQWQsdUVBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkMEIsWUFBQUEsSUFEYyxHQUNQNUQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0MsR0FBUixFQURPO0FBRWhCRyxZQUFBQSxRQUZnQixHQUVMLEVBRks7O0FBQUEsa0JBR2pCVSxJQUFJLElBQUksRUFIUztBQUFBO0FBQUE7QUFBQTs7QUFJaEJPLFlBQUFBLEdBQUcsR0FBR1AsSUFBTjtBQUpnQjtBQUFBLG1CQUtNUixLQUFLLENBQUNDLEdBQU4sQ0FBVSxlQUFhTyxJQUF2QixDQUxOOztBQUFBO0FBS1ZOLFlBQUFBLE9BTFU7QUFNaEJKLFlBQUFBLFFBQVEsR0FBR0ksT0FBTyxDQUFDQyxJQUFuQjtBQU5nQjtBQUFBOztBQUFBO0FBUWhCWSxZQUFBQSxHQUFHLEdBQUcsQ0FBTjs7QUFSZ0I7QUFVcEJsRCxZQUFBQSwyQkFBMkIsQ0FBQytCLE9BQTVCLENBQW9DLENBQXBDLEVBQXVDQyxNQUF2QyxDQUE4Q1csSUFBOUMsRUFBb0RULElBQXBEO0FBQ0FuRCxZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVd3RCxJQUFYLENBQWdCLEVBQWhCLEVBQW9CWCxPQUFwQjtBQUNBN0MsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXd0QsSUFBWCxDQUFnQk4sUUFBaEIsRUFBMEJMLE9BQTFCOztBQVpvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4QjtBQWNBN0MsRUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXa0MsRUFBWCxDQUFjLFFBQWQsdUVBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNka0MsWUFBQUEsSUFEYyxHQUNQcEUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0MsR0FBUixFQURPO0FBRWhCRyxZQUFBQSxRQUZnQixHQUVMLEVBRks7O0FBQUEsa0JBR2pCa0IsSUFBSSxJQUFJLEVBSFM7QUFBQTtBQUFBO0FBQUE7O0FBSWhCRCxZQUFBQSxHQUFHLEdBQUdDLElBQU47QUFKZ0I7QUFBQSxtQkFLTWhCLEtBQUssQ0FBQ0MsR0FBTixDQUFVLGVBQWFlLElBQXZCLENBTE47O0FBQUE7QUFLVmQsWUFBQUEsT0FMVTtBQU1oQkosWUFBQUEsUUFBUSxHQUFHSSxPQUFPLENBQUNDLElBQW5CO0FBTmdCO0FBQUE7O0FBQUE7QUFRaEJZLFlBQUFBLEdBQUcsR0FBR25FLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVytDLEdBQVgsRUFBTjs7QUFSZ0I7QUFVcEIvQyxZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVd3RCxJQUFYLENBQWdCTixRQUFoQixFQUEwQkwsT0FBMUI7QUFDQTVCLFlBQUFBLDJCQUEyQixDQUFDK0IsT0FBNUIsQ0FBb0MsRUFBcEMsRUFBd0NDLE1BQXhDLENBQStDbUIsSUFBL0MsRUFBcURqQixJQUFyRDs7QUFYb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7QUFhQW5ELEVBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2tDLEVBQVgsQ0FBYyxRQUFkLHVFQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZG1DLFlBQUFBLElBRGMsR0FDUHJFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStDLEdBQVIsRUFETztBQUVoQkcsWUFBQUEsUUFGZ0IsR0FFTCxFQUZLOztBQUdwQixnQkFBR21CLElBQUksSUFBSSxFQUFYLEVBQWU7QUFDWEYsY0FBQUEsR0FBRyxHQUFHRSxJQUFOO0FBQ0gsYUFGRCxNQUVLO0FBQ0RGLGNBQUFBLEdBQUcsR0FBR25FLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVytDLEdBQVgsRUFBTjtBQUNIOztBQUNEOUIsWUFBQUEsMkJBQTJCLENBQUMrQixPQUE1QixDQUFvQyxFQUFwQyxFQUF3Q0MsTUFBeEMsQ0FBK0NvQixJQUEvQyxFQUFxRGxCLElBQXJEOztBQVJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4QjtBQVVBbkQsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVa0MsRUFBVixDQUFhLE9BQWIsRUFBcUIsVUFBckI7QUFBQSx5RUFBaUMsbUJBQWdCTixDQUFoQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzdCQSxjQUFBQSxDQUFDLENBQUNPLGNBQUY7O0FBRDZCLG9CQUUxQm5CLFdBQVcsQ0FBQ3NELE1BQVosS0FBdUIsQ0FGRztBQUFBO0FBQUE7QUFBQTs7QUFHekJuRSxjQUFBQSxLQUFLLENBQUNvRSxJQUFOLENBQVc7QUFDWEMsZ0JBQUFBLElBQUksRUFBRSxPQURLO0FBRVhDLGdCQUFBQSxLQUFLLEVBQUU7QUFGSSxlQUFYO0FBSHlCOztBQUFBO0FBU3ZCRCxjQUFBQSxJQVR1QixHQVNoQnhFLENBQUMsQ0FBQyxZQUFELENBVGU7QUFVN0J3RSxjQUFBQSxJQUFJLENBQUNuQyxXQUFMLENBQWlCLG1CQUFqQixFQUFzQ04sUUFBdEMsQ0FBK0Msd0JBQS9DO0FBQ0kyQyxjQUFBQSxRQVh5QixHQVdkLElBQUlDLFFBQUosRUFYYztBQVk3QkQsY0FBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCLGFBQWhCLEVBQStCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTlELFdBQWYsQ0FBL0I7QUFaNkI7QUFBQTtBQUFBLHFCQWNIb0MsS0FBSyxDQUFDMkIsSUFBTixDQUFXLG9EQUFYLEVBQWdFTCxRQUFoRSxDQWRHOztBQUFBO0FBY25CcEIsY0FBQUEsT0FkbUI7QUFlbkJKLGNBQUFBLFNBZm1CLEdBZVJJLE9BQU8sQ0FBQ0MsSUFmQTtBQWdCekJwRCxjQUFBQSxLQUFLLENBQUNvRSxJQUFOLENBQVc7QUFDUEMsZ0JBQUFBLElBQUksRUFBRSxTQURDO0FBRVBDLGdCQUFBQSxLQUFLLEVBQUV2QjtBQUZBLGVBQVg7QUFJQWpDLGNBQUFBLDJCQUEyQixDQUFDSSxJQUE1QixDQUFpQzJELE1BQWpDLENBQXdDLElBQXhDLEVBQTZDLEtBQTdDO0FBQ0FoRSxjQUFBQSxXQUFXLEdBQUcsRUFBZDtBQUNBd0QsY0FBQUEsSUFBSSxDQUFDekMsUUFBTCxDQUFjLG1CQUFkLEVBQW1DTSxXQUFuQyxDQUErQyx3QkFBL0M7QUF0QnlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBd0JuQjRDLGNBQUFBLE9BeEJtQixHQXdCVCxjQUFNL0IsUUFBTixDQUFlSyxJQXhCTjtBQXlCekJpQixjQUFBQSxJQUFJLENBQUN6QyxRQUFMLENBQWMsbUJBQWQsRUFBbUNNLFdBQW5DLENBQStDLHdCQUEvQzs7QUF6QnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWpDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNkJILENBdFVEOzs7Ozs7Ozs7OztBQ0FhO0FBQ2IsZUFBZSx3SEFBK0M7QUFDOUQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7QUNYRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xDQTtBQUNBLDRCQUE0QixtQkFBTyxDQUFDLHlHQUFzQzs7QUFFMUU7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQTZEO0FBQ2pFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVFk7QUFDYixXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNwQ0QsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2hvbm9yYWlyZS9nZW5lcmF0aW9uX2hvbm9yYWlyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgbGV0IGlkX3NlYW5jZSA9IGZhbHNlO1xyXG4gICAgbGV0IGlkc19zZWFuY2VzID0gW107XHJcbiAgICB2YXIgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzID0gJChcIiNkYXRhYmxlc19nZW5lcmF0aW9uX2hvbm9yYWlyZXNcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvaG9ub3JhaXJlL2dlbmVyYXRpb24vbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZHNfc2VhbmNlcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX3NlYW5jZSkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhYmxlc19nZW5lcmF0aW9uX2hvbm9yYWlyZXMgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3NlYW5jZSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhYmxlc19nZW5lcmF0aW9uX2hvbm9yYWlyZXMgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zZWFuY2UgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZ2VuZXJhdGlvbl9ob25vcmFpcmVzIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmIChpbnB1dC5oYXNDbGFzcygnY2hlY2tfcmVnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZHNfc2VhbmNlcy5pbmRleE9mKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgICAgICAgICAgICAgIGlkc19zZWFuY2VzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWRzX3NlYW5jZXMucHVzaChpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI2FubnVsZXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg5KS5zZWFyY2goJChcIiNuaXZcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXYxJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYyJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbml2MScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MycpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMikuc2VhcmNoKGlkX3Byb21vdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2MS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIG5pdjEgPSByZXF1ZXN0dC5kYXRhIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxKS5zZWFyY2goJChcIiNmb3JtYXRpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI25pdjEnKS5odG1sKG5pdjEpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MycpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNuaXYxXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg5KS5zZWFyY2goJChcIiNuaXYxXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI25pdjJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiNuaXYyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI25pdjNcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDExKS5zZWFyY2goJChcIiNuaXYzXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDMpLnNlYXJjaChpZF9zZW1lc3RyZSkuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nK2lkX3NlbWVzdHJlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNtb2R1bGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI25pdjFcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI25pdjFcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjbml2MlwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMTApLnNlYXJjaCgkKFwiI25pdjJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjbml2M1wiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMTEpLnNlYXJjaCgkKFwiI25pdjNcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX21vZHVsZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDQpLnNlYXJjaChpZF9tb2R1bGUpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjc2VtZXN0cmVcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNlbGVtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9lbGVtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjbml2MVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjbml2MVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNuaXYyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjbml2MlwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNuaXYzXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxMSkuc2VhcmNoKCQoXCIjbml2M1wiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNSkuc2VhcmNoKGlkX2VsZW1lbnQpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWFpbmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IHNlbWFpbmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaChzZW1haW5lKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9mZXNzZXVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9mID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goaWRfcHJvZikuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZ3JhZGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGdyYWRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goZ3JhZGUpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI25pdjFcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdjEgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihuaXYxICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbml2ID0gbml2MTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYyLycrbml2MSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5pdiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDkpLnNlYXJjaChuaXYxKS5kcmF3KCk7XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI25pdjJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdjIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihuaXYyICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbml2ID0gbml2MjtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYzLycrbml2Mik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5pdiA9ICQoJyNuaXYxJykudmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDEwKS5zZWFyY2gobml2MikuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjbml2M1wiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2MyA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKG5pdjMgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBuaXYgPSBuaXYzO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuaXYgPSAkKCcjbml2MicpLnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxMSkuc2VhcmNoKG5pdjMpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2dlbmVyZXInLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZHNfc2VhbmNlcy5sZW5ndGggPT09IDAgKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBhdSBtb2lucyB1bmUgbGlnbmUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2dlbmVyZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLmFkZENsYXNzKFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkc19zZWFuY2VzJywgSlNPTi5zdHJpbmdpZnkoaWRzX3NlYW5jZXMpKTsgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ob25vcmFpcmUvZ2VuZXJhdGlvbi9nZW5lcmF0aW9uX2hvbm9yYWlyZV9nZW5lcmVyJyxmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgICAgICBpZHNfc2VhbmNlcyA9IFtdO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLnJlbW92ZUNsYXNzKFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG59KSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIvLyBpdGVyYWJsZSBET00gY29sbGVjdGlvbnNcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBDU1NSdWxlTGlzdDogMCxcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcbiAgQ1NTVmFsdWVMaXN0OiAwLFxuICBDbGllbnRSZWN0TGlzdDogMCxcbiAgRE9NUmVjdExpc3Q6IDAsXG4gIERPTVN0cmluZ0xpc3Q6IDAsXG4gIERPTVRva2VuTGlzdDogMSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXG4gIEZpbGVMaXN0OiAwLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgSFRNTENvbGxlY3Rpb246IDAsXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gIE1lZGlhTGlzdDogMCxcbiAgTWltZVR5cGVBcnJheTogMCxcbiAgTmFtZWROb2RlTWFwOiAwLFxuICBOb2RlTGlzdDogMSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcbiAgUGx1Z2luOiAwLFxuICBQbHVnaW5BcnJheTogMCxcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcbiAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXG4gIFNWR1BvaW50TGlzdDogMCxcbiAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcbiAgU3R5bGVTaGVldExpc3Q6IDAsXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXG4gIFRleHRUcmFja0xpc3Q6IDAsXG4gIFRvdWNoTGlzdDogMFxufTtcbiIsIi8vIGluIG9sZCBXZWJLaXQgdmVyc2lvbnMsIGBlbGVtZW50LmNsYXNzTGlzdGAgaXMgbm90IGFuIGluc3RhbmNlIG9mIGdsb2JhbCBgRE9NVG9rZW5MaXN0YFxudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG52YXIgY2xhc3NMaXN0ID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdzcGFuJykuY2xhc3NMaXN0O1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IGNsYXNzTGlzdCAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBET01Ub2tlbkxpc3RQcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgPyB1bmRlZmluZWQgOiBET01Ub2tlbkxpc3RQcm90b3R5cGU7XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9zZWFuY2UiLCJpZHNfc2VhbmNlcyIsInRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcyIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsImxhbmd1YWdlIiwidXJsIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJzZWxlY3QyIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsInJlcXVlc3R0Iiwibml2MSIsImlkX3NlbWVzdHJlIiwiaWRfbW9kdWxlIiwiaWRfZWxlbWVudCIsInNlbWFpbmUiLCJpZF9wcm9mIiwiZ3JhZGUiLCJuaXYiLCJuaXYyIiwibml2MyIsImxlbmd0aCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3QiLCJyZWxvYWQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==