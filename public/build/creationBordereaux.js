(self["webpackChunk"] = self["webpackChunk"] || []).push([["creationBordereaux"],{

/***/ "./assets/components/honoraire/creation_borderaux.js":
/*!***********************************************************!*\
  !*** ./assets/components/honoraire/creation_borderaux.js ***!
  \***********************************************************/
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
  var semaine_id = false;
  var id_seance = false;
  var ids_seances = [];
  var table_creation_borderaux = $("#datables_creation_borderaux").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/honoraire/creation_borderaux/list",
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
    columnDefs: [{
      targets: [1],
      orderable: false
    }],
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('body').on('dblclick', '#datables_creation_borderaux tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_seance = null;
    } else {
      $("#datables_creation_borderaux tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_seance = $(this).attr('id');
    }
  });
  $('body').on('click', '#datables_creation_borderaux tbody tr', function (e) {
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
    }

    console.log(ids_seances);
  });
  $("select").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_creation_borderaux.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 14;
              break;
            }

            if ($("#semaine").val() != "") {
              table_creation_borderaux.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_creation_borderaux.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_creation_borderaux.columns(4).search($("#grade").val());
            }

            table_creation_borderaux.columns(0).search(id_etab).draw();
            _context.next = 10;
            return axios.get('/api/formation/' + id_etab);

          case 10:
            request = _context.sent;
            response = request.data;
            _context.next = 18;
            break;

          case 14:
            table_creation_borderaux.columns().search('').draw();

            if ($("#semaine").val() != "") {
              table_creation_borderaux.columns(5).search($("#semaine").val()).draw();
            }

            if ($("#professeur").val() != "") {
              table_creation_borderaux.columns(6).search($("#professeur").val()).draw();
            }

            if ($("#grade").val() != "") {
              table_creation_borderaux.columns(4).search($("#grade").val()).draw();
            }

          case 18:
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 21:
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
            table_creation_borderaux.columns().search("");

            if ($("#semaine").val() != "") {
              table_creation_borderaux.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_creation_borderaux.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_creation_borderaux.columns(4).search($("#grade").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 14;
              break;
            }

            table_creation_borderaux.columns(1).search(id_formation).draw();
            _context2.next = 10;
            return axios.get('/api/promotion/' + id_formation);

          case 10:
            request = _context2.sent;
            response = request.data;
            _context2.next = 15;
            break;

          case 14:
            table_creation_borderaux.columns(0).search($("#etablissement").val()).draw();

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
            table_creation_borderaux.columns().search("");

            if ($("#semaine").val() != "") {
              table_creation_borderaux.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_creation_borderaux.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_creation_borderaux.columns(4).search($("#grade").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 13;
              break;
            }

            table_creation_borderaux.columns(2).search(id_promotion).draw();
            _context3.next = 9;
            return axios.get('/api/semestre/' + id_promotion);

          case 9:
            request = _context3.sent;
            response = request.data;
            _context3.next = 14;
            break;

          case 13:
            table_creation_borderaux.columns(1).search($("#formation").val()).draw();

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
            table_creation_borderaux.columns().search("");

            if ($("#semaine").val() != "") {
              table_creation_borderaux.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_creation_borderaux.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_creation_borderaux.columns(4).search($("#grade").val());
            }

            if (!(id_semestre != "")) {
              _context4.next = 13;
              break;
            }

            table_creation_borderaux.columns(3).search(id_semestre).draw();
            _context4.next = 9;
            return axios.get('/api/module/' + id_semestre);

          case 9:
            request = _context4.sent;
            response = request.data;
            _context4.next = 14;
            break;

          case 13:
            table_creation_borderaux.columns(2).search($("#promotion").val()).draw();

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#semaine").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var semaine;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            semaine = $(this).val();
            table_creation_borderaux.columns(5).search(semaine).draw();

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#semaine").select2({
    minimumInputLength: 10,
    // required enter 3 characters or more
    allowClear: true,
    placeholder: '2022-10-10',
    language: "fr",
    ajax: {
      dataType: 'json',
      url: '/honoraire/creation_borderaux/findSemaine',
      delay: 5,
      // ini bebas mau di pake atau tidak
      data: function data(params) {
        return {
          search: params.term
        };
      },
      processResults: function processResults(data, page) {
        // console.log(data)
        var list = {
          text: "Semaine " + data.nsemaine + " de: " + data.debut + " à " + data.fin,
          id: data.id
        };
        return {
          results: [list]
        };
      }
    }
  });
  $("#professeur").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_prof;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_prof = $(this).val();
            table_creation_borderaux.columns(6).search(id_prof).draw();

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#grade").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var grade;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            grade = $(this).val();
            table_creation_borderaux.columns(4).search(grade).draw();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#semaine_day").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var semaine_day, formData, request;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            semaine_day = $(this).val();
            semaine_id = false;
            console.log(semaine_day);
            table_creation_borderaux.columns(7).search(semaine_day).draw();

            if (!(semaine_day != "")) {
              _context8.next = 11;
              break;
            }

            formData = new FormData();
            formData.append('semaine_day', semaine_day);
            _context8.next = 9;
            return axios.post('/honoraire/creation_borderaux/findSemainePlanning', formData);

          case 9:
            request = _context8.sent;

            if (request.data != 0) {
              semaine_id = request.data;
            } // console.log(semaine_id);


          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $('body').on('click', '#cree', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var icon, formData, request, _response, message;

      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();

              if (!(ids_seances.length === 0 || $("#promotion").val() == "" || $("#semaine").val() == "" && !semaine_id)) {
                _context9.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir une semestre et une semaine et au moins une ligne!'
              });
              return _context9.abrupt("return");

            case 4:
              icon = $("#cree i");
              icon.removeClass('fa-folder-open').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_seances', JSON.stringify(ids_seances));
              formData.append('promotion', $("#promotion").val());

              if (semaine_id) {
                formData.append('semaine', semaine_id);
              } else {
                formData.append('semaine', $("#semaine").val());
              } // console.log($("#semaine").val());


              _context9.prev = 10;
              _context9.next = 13;
              return axios.post('/honoraire/creation_borderaux/cree_borderaux', formData);

            case 13:
              request = _context9.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: 'Borderaux Bien Crée'
              });
              ids_seances = [];
              window.open('/honoraire/creation_borderaux/honoraire_borderaux/' + _response, '_blank');
              table_creation_borderaux.ajax.reload(null, false);
              icon.addClass('fa-folder-open').removeClass("fa-spinner fa-spin");
              _context9.next = 26;
              break;

            case 22:
              _context9.prev = 22;
              _context9.t0 = _context9["catch"](10);
              message = _context9.t0.response.data;
              icon.addClass('fa-folder-open').removeClass("fa-spinner fa-spin");

            case 26:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[10, 22]]);
    }));

    return function (_x) {
      return _ref9.apply(this, arguments);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/honoraire/creation_borderaux.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDVFk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsb0hBQTJDO0FBQ3RELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBNEQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDZFk7QUFDYixXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNwQ0QsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2hvbm9yYWlyZS9jcmVhdGlvbl9ib3JkZXJhdXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIGxldCBzZW1haW5lX2lkID0gZmFsc2U7XHJcbiAgICBsZXQgaWRfc2VhbmNlID0gZmFsc2U7XHJcbiAgICBsZXQgaWRzX3NlYW5jZXMgPSBbXTtcclxuICAgIHZhciB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXggPSAkKFwiI2RhdGFibGVzX2NyZWF0aW9uX2JvcmRlcmF1eFwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9ob25vcmFpcmUvY3JlYXRpb25fYm9yZGVyYXV4L2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWRzX3NlYW5jZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9zZWFuY2UpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5EZWZzOiBbXHJcbiAgICAgICAgICAgIHsgdGFyZ2V0czogWzFdLCBvcmRlcmFibGU6IGZhbHNlIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhYmxlc19jcmVhdGlvbl9ib3JkZXJhdXggdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3NlYW5jZSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhYmxlc19jcmVhdGlvbl9ib3JkZXJhdXggdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zZWFuY2UgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfY3JlYXRpb25fYm9yZGVyYXV4IHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmIChpbnB1dC5oYXNDbGFzcygnY2hlY2tfc2VhbmNlJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZHNfc2VhbmNlcy5pbmRleE9mKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgICAgICAgICAgICAgIGlkc19zZWFuY2VzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWRzX3NlYW5jZXMucHVzaChpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRzX3NlYW5jZXMpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5jaGVja19hbGxfc2VhbmNlcycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGFsZXJ0KCd0ZXN0JylcclxuICAgICAgICBpZHNfc2VhbmNlcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHNuYyA9ICQoXCJib2R5ICNjaGVja19zZWFuY2VcIik7XHJcbiAgICAgICAgaWYoJChcIi5jaGVja19hbGxfc2VhbmNlc1wiKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzbmMucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgc25jLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlkc19zZWFuY2VzLnB1c2godGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzbmMucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkc19zZWFuY2VzKTtcclxuICAgIH0pXHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDQpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKCkuc2VhcmNoKCcnKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDQpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDIpLnNlYXJjaChpZF9wcm9tb3Rpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDEpLnNlYXJjaCgkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc2VtZXN0cmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoMykuc2VhcmNoKGlkX3NlbWVzdHJlKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycraWRfc2VtZXN0cmUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygyKS5zZWFyY2goJChcIiNwcm9tb3Rpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1haW5lXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBzZW1haW5lID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg1KS5zZWFyY2goc2VtYWluZSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc2VtYWluZVwiKS5zZWxlY3QyKHtcclxuICAgICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDEwLCAgLy8gcmVxdWlyZWQgZW50ZXIgMyBjaGFyYWN0ZXJzIG9yIG1vcmVcclxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnMjAyMi0xMC0xMCcsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiZnJcIixcclxuICAgICAgICBhamF4OiB7XHJcbiAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICB1cmw6ICcvaG9ub3JhaXJlL2NyZWF0aW9uX2JvcmRlcmF1eC9maW5kU2VtYWluZScsICBcclxuICAgICAgICAgICBkZWxheTogNSwgIC8vIGluaSBiZWJhcyBtYXUgZGkgcGFrZSBhdGF1IHRpZGFrXHJcbiAgICAgICAgICAgZGF0YTogZnVuY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICBzZWFyY2g6IHBhcmFtcy50ZXJtXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKGRhdGEsIHBhZ2UpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNlbWFpbmUgXCIgK2RhdGEubnNlbWFpbmUgK1wiIGRlOiBcIitkYXRhLmRlYnV0ICsgXCIgw6AgXCIgK2RhdGEuZmluLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGRhdGEuaWRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHM6ICBbbGlzdF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgfSxcclxuICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb2Zlc3NldXJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb2YgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDYpLnNlYXJjaChpZF9wcm9mKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNncmFkZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgZ3JhZGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDQpLnNlYXJjaChncmFkZSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc2VtYWluZV9kYXlcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IHNlbWFpbmVfZGF5ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBzZW1haW5lX2lkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VtYWluZV9kYXkpXHJcbiAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNykuc2VhcmNoKHNlbWFpbmVfZGF5KS5kcmF3KCk7XHJcbiAgICAgICAgaWYgKHNlbWFpbmVfZGF5ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzZW1haW5lX2RheScsc2VtYWluZV9kYXkpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvaG9ub3JhaXJlL2NyZWF0aW9uX2JvcmRlcmF1eC9maW5kU2VtYWluZVBsYW5uaW5nJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5kYXRhICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHNlbWFpbmVfaWQgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZW1haW5lX2lkKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNjcmVlJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRzX3NlYW5jZXMubGVuZ3RoID09PSAwIHx8ICQoXCIjcHJvbW90aW9uXCIpLnZhbCgpID09IFwiXCIgfHwgKCQoXCIjc2VtYWluZVwiKS52YWwoKSA9PSBcIlwiICYmICFzZW1haW5lX2lkKSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciB1bmUgc2VtZXN0cmUgZXQgdW5lIHNlbWFpbmUgZXQgYXUgbW9pbnMgdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjY3JlZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWZvbGRlci1vcGVuJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZHNfc2VhbmNlcycsIEpTT04uc3RyaW5naWZ5KGlkc19zZWFuY2VzKSk7IFxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJvbW90aW9uJywgJChcIiNwcm9tb3Rpb25cIikudmFsKCkpO1xyXG4gICAgICAgIGlmIChzZW1haW5lX2lkKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc2VtYWluZScsIHNlbWFpbmVfaWQpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NlbWFpbmUnLCAkKFwiI3NlbWFpbmVcIikudmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkKFwiI3NlbWFpbmVcIikudmFsKCkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvaG9ub3JhaXJlL2NyZWF0aW9uX2JvcmRlcmF1eC9jcmVlX2JvcmRlcmF1eCcsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0JvcmRlcmF1eCBCaWVuIENyw6llJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWRzX3NlYW5jZXMgPSBbXTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9ob25vcmFpcmUvY3JlYXRpb25fYm9yZGVyYXV4L2hvbm9yYWlyZV9ib3JkZXJhdXgvJytyZXNwb25zZSwgJ19ibGFuaycpO1xyXG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWZvbGRlci1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWZvbGRlci1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG59KSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIvLyBpdGVyYWJsZSBET00gY29sbGVjdGlvbnNcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBDU1NSdWxlTGlzdDogMCxcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcbiAgQ1NTVmFsdWVMaXN0OiAwLFxuICBDbGllbnRSZWN0TGlzdDogMCxcbiAgRE9NUmVjdExpc3Q6IDAsXG4gIERPTVN0cmluZ0xpc3Q6IDAsXG4gIERPTVRva2VuTGlzdDogMSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXG4gIEZpbGVMaXN0OiAwLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgSFRNTENvbGxlY3Rpb246IDAsXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gIE1lZGlhTGlzdDogMCxcbiAgTWltZVR5cGVBcnJheTogMCxcbiAgTmFtZWROb2RlTWFwOiAwLFxuICBOb2RlTGlzdDogMSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcbiAgUGx1Z2luOiAwLFxuICBQbHVnaW5BcnJheTogMCxcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcbiAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXG4gIFNWR1BvaW50TGlzdDogMCxcbiAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcbiAgU3R5bGVTaGVldExpc3Q6IDAsXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXG4gIFRleHRUcmFja0xpc3Q6IDAsXG4gIFRvdWNoTGlzdDogMFxufTtcbiIsIi8vIGluIG9sZCBXZWJLaXQgdmVyc2lvbnMsIGBlbGVtZW50LmNsYXNzTGlzdGAgaXMgbm90IGFuIGluc3RhbmNlIG9mIGdsb2JhbCBgRE9NVG9rZW5MaXN0YFxudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG52YXIgY2xhc3NMaXN0ID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdzcGFuJykuY2xhc3NMaXN0O1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IGNsYXNzTGlzdCAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBET01Ub2tlbkxpc3RQcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgPyB1bmRlZmluZWQgOiBET01Ub2tlbkxpc3RQcm90b3R5cGU7XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xuICB9XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwic2VtYWluZV9pZCIsImlkX3NlYW5jZSIsImlkc19zZWFuY2VzIiwidGFibGVfY3JlYXRpb25fYm9yZGVyYXV4IiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJvcmRlcmFibGUiLCJsYW5ndWFnZSIsInVybCIsIm9uIiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInNuYyIsIm1hcCIsInZhbHVlIiwic2VsZWN0MiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwicmVzcG9uc2UiLCJkcmF3IiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJpZF9zZW1lc3RyZSIsInNlbWFpbmUiLCJtaW5pbXVtSW5wdXRMZW5ndGgiLCJhbGxvd0NsZWFyIiwicGxhY2Vob2xkZXIiLCJkYXRhVHlwZSIsImRlbGF5IiwicGFyYW1zIiwidGVybSIsInByb2Nlc3NSZXN1bHRzIiwicGFnZSIsImxpc3QiLCJ0ZXh0IiwibnNlbWFpbmUiLCJkZWJ1dCIsImZpbiIsImlkIiwicmVzdWx0cyIsImlkX3Byb2YiLCJncmFkZSIsInNlbWFpbmVfZGF5IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJsZW5ndGgiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsIm9wZW4iLCJyZWxvYWQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==