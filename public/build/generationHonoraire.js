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
    }

    console.log(ids_seances);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcENELGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMscUZBQTRCO0FBQ3ZELDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1QztBQUMzRSxjQUFjLG1CQUFPLENBQUMsdUZBQTZCO0FBQ25ELGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2QztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ob25vcmFpcmUvZ2VuZXJhdGlvbl9ob25vcmFpcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIGxldCBpZF9zZWFuY2UgPSBmYWxzZTtcclxuICAgIGxldCBpZHNfc2VhbmNlcyA9IFtdO1xyXG4gICAgdmFyIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcyA9ICQoXCIjZGF0YWJsZXNfZ2VuZXJhdGlvbl9ob25vcmFpcmVzXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2hvbm9yYWlyZS9nZW5lcmF0aW9uL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWRzX3NlYW5jZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9zZWFuY2UpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7IHRhcmdldHM6IFsxXSwgb3JkZXJhYmxlOiBmYWxzZSB9XHJcbiAgICAgICAgXSxcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhYmxlc19nZW5lcmF0aW9uX2hvbm9yYWlyZXMgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3NlYW5jZSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhYmxlc19nZW5lcmF0aW9uX2hvbm9yYWlyZXMgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zZWFuY2UgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZ2VuZXJhdGlvbl9ob25vcmFpcmVzIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmIChpbnB1dC5oYXNDbGFzcygnY2hlY2tfcmVnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZHNfc2VhbmNlcy5pbmRleE9mKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgICAgICAgICAgICAgIGlkc19zZWFuY2VzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWRzX3NlYW5jZXMucHVzaChpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRzX3NlYW5jZXMpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcuY2hlY2tfYWxsX3NlYW5jZXMnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBhbGVydCgndGVzdCcpXHJcbiAgICAgICAgaWRzX3NlYW5jZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBzbmMgPSAkKFwiYm9keSAjY2hlY2tfc2VhbmNlXCIpO1xyXG4gICAgICAgIGlmKCQoXCIuY2hlY2tfYWxsX3NlYW5jZXNcIikucHJvcCgnY2hlY2tlZCcpID09IHRydWUpIHtcclxuICAgICAgICAgICAgc25jLnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIHNuYy5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZHNfc2VhbmNlcy5wdXNoKHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc25jLnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpZHNfc2VhbmNlcyk7XHJcbiAgICB9KVxyXG4gICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI2FubnVsZXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg5KS5zZWFyY2goJChcIiNuaXZcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXYxJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYyJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbml2MScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MycpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMikuc2VhcmNoKGlkX3Byb21vdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2MS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIG5pdjEgPSByZXF1ZXN0dC5kYXRhIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxKS5zZWFyY2goJChcIiNmb3JtYXRpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI25pdjEnKS5odG1sKG5pdjEpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MycpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNuaXYxXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg5KS5zZWFyY2goJChcIiNuaXYxXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI25pdjJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiNuaXYyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI25pdjNcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDExKS5zZWFyY2goJChcIiNuaXYzXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDMpLnNlYXJjaChpZF9zZW1lc3RyZSkuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nK2lkX3NlbWVzdHJlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNtb2R1bGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI25pdjFcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI25pdjFcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjbml2MlwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMTApLnNlYXJjaCgkKFwiI25pdjJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjbml2M1wiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMTEpLnNlYXJjaCgkKFwiI25pdjNcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX21vZHVsZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDQpLnNlYXJjaChpZF9tb2R1bGUpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjc2VtZXN0cmVcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNlbGVtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9lbGVtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjbml2MVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjbml2MVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNuaXYyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjbml2MlwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNuaXYzXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxMSkuc2VhcmNoKCQoXCIjbml2M1wiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNSkuc2VhcmNoKGlkX2VsZW1lbnQpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWFpbmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IHNlbWFpbmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaChzZW1haW5lKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9mZXNzZXVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9mID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg3KS5zZWFyY2goaWRfcHJvZikuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZ3JhZGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGdyYWRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg4KS5zZWFyY2goZ3JhZGUpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI25pdjFcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdjEgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihuaXYxICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbml2ID0gbml2MTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYyLycrbml2MSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5pdiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDkpLnNlYXJjaChuaXYxKS5kcmF3KCk7XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI25pdjJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdjIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihuaXYyICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbml2ID0gbml2MjtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYzLycrbml2Mik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5pdiA9ICQoJyNuaXYxJykudmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgIHRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcy5jb2x1bW5zKDEwKS5zZWFyY2gobml2MikuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjbml2M1wiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2MyA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKG5pdjMgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBuaXYgPSBuaXYzO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuaXYgPSAkKCcjbml2MicpLnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZV9nZW5lcmF0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxMSkuc2VhcmNoKG5pdjMpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2dlbmVyZXInLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZHNfc2VhbmNlcy5sZW5ndGggPT09IDAgKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBhdSBtb2lucyB1bmUgbGlnbmUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2dlbmVyZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLmFkZENsYXNzKFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkc19zZWFuY2VzJywgSlNPTi5zdHJpbmdpZnkoaWRzX3NlYW5jZXMpKTsgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ob25vcmFpcmUvZ2VuZXJhdGlvbi9nZW5lcmF0aW9uX2hvbm9yYWlyZV9nZW5lcmVyJyxmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGFibGVfZ2VuZXJhdGlvbl9ob25vcmFpcmVzLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgICAgICBpZHNfc2VhbmNlcyA9IFtdO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLnJlbW92ZUNsYXNzKFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG59KSIsIid1c2Ugc3RyaWN0JztcclxudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XHJcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcclxuXHJcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxyXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xyXG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXHJcbn0gOiBbXS5mb3JFYWNoO1xyXG4iLCIvLyBpdGVyYWJsZSBET00gY29sbGVjdGlvbnNcclxuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBDU1NSdWxlTGlzdDogMCxcclxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxyXG4gIENTU1ZhbHVlTGlzdDogMCxcclxuICBDbGllbnRSZWN0TGlzdDogMCxcclxuICBET01SZWN0TGlzdDogMCxcclxuICBET01TdHJpbmdMaXN0OiAwLFxyXG4gIERPTVRva2VuTGlzdDogMSxcclxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcclxuICBGaWxlTGlzdDogMCxcclxuICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcclxuICBIVE1MQ29sbGVjdGlvbjogMCxcclxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXHJcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXHJcbiAgTWVkaWFMaXN0OiAwLFxyXG4gIE1pbWVUeXBlQXJyYXk6IDAsXHJcbiAgTmFtZWROb2RlTWFwOiAwLFxyXG4gIE5vZGVMaXN0OiAxLFxyXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXHJcbiAgUGx1Z2luOiAwLFxyXG4gIFBsdWdpbkFycmF5OiAwLFxyXG4gIFNWR0xlbmd0aExpc3Q6IDAsXHJcbiAgU1ZHTnVtYmVyTGlzdDogMCxcclxuICBTVkdQYXRoU2VnTGlzdDogMCxcclxuICBTVkdQb2ludExpc3Q6IDAsXHJcbiAgU1ZHU3RyaW5nTGlzdDogMCxcclxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxyXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXHJcbiAgU3R5bGVTaGVldExpc3Q6IDAsXHJcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcclxuICBUZXh0VHJhY2tMaXN0OiAwLFxyXG4gIFRvdWNoTGlzdDogMFxyXG59O1xyXG4iLCIvLyBpbiBvbGQgV2ViS2l0IHZlcnNpb25zLCBgZWxlbWVudC5jbGFzc0xpc3RgIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBnbG9iYWwgYERPTVRva2VuTGlzdGBcclxudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xyXG5cclxudmFyIGNsYXNzTGlzdCA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnc3BhbicpLmNsYXNzTGlzdDtcclxudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IGNsYXNzTGlzdCAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRE9NVG9rZW5MaXN0UHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlID8gdW5kZWZpbmVkIDogRE9NVG9rZW5MaXN0UHJvdG90eXBlO1xyXG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xyXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xyXG4gIGZvckVhY2g6IGZvckVhY2hcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcclxudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcclxuXHJcbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XHJcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcclxuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcclxuICB9XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcclxudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xyXG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcclxudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XHJcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcclxudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XHJcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XHJcblxyXG4vLyBAQHNlYXJjaCBsb2dpY1xyXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcclxuICByZXR1cm4gW1xyXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcclxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcclxuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xyXG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcclxuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcclxuICAgIH0sXHJcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXHJcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xyXG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XHJcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XHJcblxyXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XHJcblxyXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XHJcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcclxuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xyXG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XHJcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcclxuICAgIH1cclxuICBdO1xyXG59KTtcclxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcclxudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XHJcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlJyk7XHJcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XHJcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XHJcblxyXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcclxuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcclxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XHJcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcclxuICB9XHJcbn07XHJcblxyXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XHJcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XHJcbiAgICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcclxuICB9XHJcbn1cclxuXHJcbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9zZWFuY2UiLCJpZHNfc2VhbmNlcyIsInRhYmxlX2dlbmVyYXRpb25faG9ub3JhaXJlcyIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsImxhbmd1YWdlIiwidXJsIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJvcmRlcmFibGUiLCJvbiIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImF0dHIiLCJpbnB1dCIsImlzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJzbmMiLCJtYXAiLCJ2YWx1ZSIsInNlbGVjdDIiLCJpZF9ldGFiIiwidmFsIiwiY29sdW1ucyIsInNlYXJjaCIsInJlc3BvbnNlIiwiZHJhdyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwiaWRfcHJvbW90aW9uIiwicmVxdWVzdHQiLCJuaXYxIiwiaWRfc2VtZXN0cmUiLCJpZF9tb2R1bGUiLCJpZF9lbGVtZW50Iiwic2VtYWluZSIsImlkX3Byb2YiLCJncmFkZSIsIm5pdiIsIm5pdjIiLCJuaXYzIiwibGVuZ3RoIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsInJlbG9hZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9