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
    },
    columnDefs: [{
      targets: [1],
      orderable: false
    }]
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
    } // console.log(ids_seances);

  });
  $('body').on('click', '.check_all_seances', function () {
    // alert('test')
    ids_seances = [];
    var snc = $("body #check_seance");

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/honoraire/generation_honoraire.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDLCtFQUF5QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3BDRCxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLHFGQUE0QjtBQUN2RCw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDM0UsY0FBYyxtQkFBTyxDQUFDLHVGQUE2QjtBQUNuRCxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNkM7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaG9ub3JhaXJlL2dlbmVyYXRpb25faG9ub3JhaXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfc2VhbmNlID0gZmFsc2U7XHJcbiAgICBsZXQgaWRzX3NlYW5jZXMgPSBbXTtcclxuICAgIHZhciB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMgPSAkKFwiI2RhdGFibGVzX2dlbmVyYXRpb25faG9ub3JhaXJlc1wiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9ob25vcmFpcmUvZ2VuZXJhdGlvbi9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlkc19zZWFuY2VzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfc2VhbmNlKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbHVtbkRlZnM6IFtcclxuICAgICAgICAgICAgeyB0YXJnZXRzOiBbMV0sIG9yZGVyYWJsZTogZmFsc2UgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5vbignZGJsY2xpY2snLCcjZGF0YWJsZXNfZ2VuZXJhdGlvbl9ob25vcmFpcmVzIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zZWFuY2UgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfZ2VuZXJhdGlvbl9ob25vcmFpcmVzIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfc2VhbmNlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX2dlbmVyYXRpb25faG9ub3JhaXJlcyB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZiAoaW5wdXQuaGFzQ2xhc3MoJ2NoZWNrX3JlZycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRzX3NlYW5jZXMuaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfc2VhbmNlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlkc19zZWFuY2VzLnB1c2goaW5wdXQuYXR0cihcImRhdGEtaWRcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlkc19zZWFuY2VzKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmNoZWNrX2FsbF9zZWFuY2VzJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gYWxlcnQoJ3Rlc3QnKVxyXG4gICAgICAgIGlkc19zZWFuY2VzID0gW107XHJcbiAgICAgICAgY29uc3Qgc25jID0gJChcImJvZHkgI2NoZWNrX3NlYW5jZVwiKTtcclxuICAgICAgICBpZigkKFwiLmNoZWNrX2FsbF9zZWFuY2VzXCIpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHNuYy5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICBzbmMubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWRzX3NlYW5jZXMucHVzaCh0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNuYy5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaWRzX3NlYW5jZXMpO1xyXG4gICAgfSlcclxuICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjbml2XCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbml2MScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MycpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI25pdjEnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjInKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDIpLnNlYXJjaChpZF9wcm9tb3Rpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3R0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjEvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICBuaXYxID0gcmVxdWVzdHQuZGF0YSBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXYxJykuaHRtbChuaXYxKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjInKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc2VtZXN0cmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjbml2MVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjbml2MVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNuaXYyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjbml2MlwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNuaXYzXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxMSkuc2VhcmNoKCQoXCIjbml2M1wiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygzKS5zZWFyY2goaWRfc2VtZXN0cmUpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJytpZF9zZW1lc3RyZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3Byb21vdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjbW9kdWxlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9tb2R1bGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNuaXYxXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg5KS5zZWFyY2goJChcIiNuaXYxXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI25pdjJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiNuaXYyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI25pdjNcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDExKS5zZWFyY2goJChcIiNuaXYzXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9tb2R1bGUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg0KS5zZWFyY2goaWRfbW9kdWxlKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZWxlbWVudC8nK2lkX21vZHVsZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI3NlbWVzdHJlXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZWxlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZWxlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI25pdjFcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI25pdjFcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjbml2MlwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMTApLnNlYXJjaCgkKFwiI25pdjJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjbml2M1wiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMTEpLnNlYXJjaCgkKFwiI25pdjNcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaChpZF9lbGVtZW50KS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1haW5lXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBzZW1haW5lID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goc2VtYWluZSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvZmVzc2V1clwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvZiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKGlkX3Byb2YpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2dyYWRlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBncmFkZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOCkuc2VhcmNoKGdyYWRlKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNuaXYxXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBuaXYxID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYobml2MSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5pdiA9IG5pdjE7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2Mi8nK25pdjEpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuaXYgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg5KS5zZWFyY2gobml2MSkuZHJhdygpO1xyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjInKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNuaXYyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBuaXYyID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYobml2MiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5pdiA9IG5pdjI7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2My8nK25pdjIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuaXYgPSAkKCcjbml2MScpLnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbml2MycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxMCkuc2VhcmNoKG5pdjIpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI25pdjNcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdjMgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihuaXYzICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbml2ID0gbml2MztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbml2ID0gJCgnI25pdjInKS52YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMTEpLnNlYXJjaChuaXYzKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNnZW5lcmVyJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRzX3NlYW5jZXMubGVuZ3RoID09PSAwICl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgYXUgbW9pbnMgdW5lIGxpZ25lJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNnZW5lcmVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5hZGRDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZHNfc2VhbmNlcycsIEpTT04uc3RyaW5naWZ5KGlkc19zZWFuY2VzKSk7IFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvaG9ub3JhaXJlL2dlbmVyYXRpb24vZ2VuZXJhdGlvbl9ob25vcmFpcmVfZ2VuZXJlcicsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICAgICAgaWRzX3NlYW5jZXMgPSBbXTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxufSkiLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCIvLyBpbiBvbGQgV2ViS2l0IHZlcnNpb25zLCBgZWxlbWVudC5jbGFzc0xpc3RgIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBnbG9iYWwgYERPTVRva2VuTGlzdGBcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxudmFyIGNsYXNzTGlzdCA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnc3BhbicpLmNsYXNzTGlzdDtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSBjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NVG9rZW5MaXN0UHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlID8gdW5kZWZpbmVkIDogRE9NVG9rZW5MaXN0UHJvdG90eXBlO1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIGhhbmRsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIHtcbiAgICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcbiAgfVxufVxuXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX3NlYW5jZSIsImlkc19zZWFuY2VzIiwidGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJjb2x1bW5EZWZzIiwidGFyZ2V0cyIsIm9yZGVyYWJsZSIsIm9uIiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwic25jIiwibWFwIiwidmFsdWUiLCJzZWxlY3QyIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsInJlcXVlc3R0Iiwibml2MSIsImlkX3NlbWVzdHJlIiwiaWRfbW9kdWxlIiwiaWRfZWxlbWVudCIsInNlbWFpbmUiLCJpZF9wcm9mIiwiZ3JhZGUiLCJuaXYiLCJuaXYyIiwibml2MyIsImxlbmd0aCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3QiLCJyZWxvYWQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==