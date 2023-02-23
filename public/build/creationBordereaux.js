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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ym9yZGVyYXV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgc2VtYWluZV9pZCA9IGZhbHNlO1xyXG4gICAgbGV0IGlkX3NlYW5jZSA9IGZhbHNlO1xyXG4gICAgbGV0IGlkc19zZWFuY2VzID0gW107XHJcbiAgICB2YXIgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4ID0gJChcIiNkYXRhYmxlc19jcmVhdGlvbl9ib3JkZXJhdXhcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvaG9ub3JhaXJlL2NyZWF0aW9uX2JvcmRlcmF1eC9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlkc19zZWFuY2VzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfc2VhbmNlKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sdW1uRGVmczogW1xyXG4gICAgICAgICAgICB7IHRhcmdldHM6IFsxXSwgb3JkZXJhYmxlOiBmYWxzZSB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5vbignZGJsY2xpY2snLCcjZGF0YWJsZXNfY3JlYXRpb25fYm9yZGVyYXV4IHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zZWFuY2UgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfY3JlYXRpb25fYm9yZGVyYXV4IHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfc2VhbmNlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX2NyZWF0aW9uX2JvcmRlcmF1eCB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZiAoaW5wdXQuaGFzQ2xhc3MoJ2NoZWNrX3NlYW5jZScpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRzX3NlYW5jZXMuaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfc2VhbmNlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlkc19zZWFuY2VzLnB1c2goaW5wdXQuYXR0cihcImRhdGEtaWRcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkc19zZWFuY2VzKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcuY2hlY2tfYWxsX3NlYW5jZXMnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBhbGVydCgndGVzdCcpXHJcbiAgICAgICAgaWRzX3NlYW5jZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBzbmMgPSAkKFwiYm9keSAjY2hlY2tfc2VhbmNlXCIpO1xyXG4gICAgICAgIGlmKCQoXCIuY2hlY2tfYWxsX3NlYW5jZXNcIikucHJvcCgnY2hlY2tlZCcpID09IHRydWUpIHtcclxuICAgICAgICAgICAgc25jLnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIHNuYy5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZHNfc2VhbmNlcy5wdXNoKHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc25jLnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZHNfc2VhbmNlcyk7XHJcbiAgICB9KVxyXG4gICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNSkuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg0KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygpLnNlYXJjaCgnJykuZHJhdygpO1xyXG4gICAgICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg0KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDQpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDQpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucygxKS5zZWFyY2goJChcIiNmb3JtYXRpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg1KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDQpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDMpLnNlYXJjaChpZF9zZW1lc3RyZSkuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nK2lkX3NlbWVzdHJlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjc2VtYWluZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgc2VtYWluZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoNSkuc2VhcmNoKHNlbWFpbmUpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWFpbmVcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAxMCwgIC8vIHJlcXVpcmVkIGVudGVyIDMgY2hhcmFjdGVycyBvciBtb3JlXHJcbiAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJzIwMjItMTAtMTAnLFxyXG4gICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgdXJsOiAnL2hvbm9yYWlyZS9jcmVhdGlvbl9ib3JkZXJhdXgvZmluZFNlbWFpbmUnLCAgXHJcbiAgICAgICAgICAgZGVsYXk6IDUsICAvLyBpbmkgYmViYXMgbWF1IGRpIHBha2UgYXRhdSB0aWRha1xyXG4gICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgc2VhcmNoOiBwYXJhbXMudGVybVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChkYXRhLCBwYWdlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTZW1haW5lIFwiICtkYXRhLm5zZW1haW5lICtcIiBkZTogXCIrZGF0YS5kZWJ1dCArIFwiIMOgIFwiICtkYXRhLmZpbixcclxuICAgICAgICAgICAgICAgIGlkOiBkYXRhLmlkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzOiAgW2xpc3RdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9mZXNzZXVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9mID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg2KS5zZWFyY2goaWRfcHJvZikuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZ3JhZGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGdyYWRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9jcmVhdGlvbl9ib3JkZXJhdXguY29sdW1ucyg0KS5zZWFyY2goZ3JhZGUpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWFpbmVfZGF5XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBzZW1haW5lX2RheSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgc2VtYWluZV9pZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbWFpbmVfZGF5KVxyXG4gICAgICAgIHRhYmxlX2NyZWF0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDcpLnNlYXJjaChzZW1haW5lX2RheSkuZHJhdygpO1xyXG4gICAgICAgIGlmIChzZW1haW5lX2RheSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc2VtYWluZV9kYXknLHNlbWFpbmVfZGF5KVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2hvbm9yYWlyZS9jcmVhdGlvbl9ib3JkZXJhdXgvZmluZFNlbWFpbmVQbGFubmluZycsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QuZGF0YSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZW1haW5lX2lkID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VtYWluZV9pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjY3JlZScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkc19zZWFuY2VzLmxlbmd0aCA9PT0gMCB8fCAkKFwiI3Byb21vdGlvblwiKS52YWwoKSA9PSBcIlwiIHx8ICgkKFwiI3NlbWFpbmVcIikudmFsKCkgPT0gXCJcIiAmJiAhc2VtYWluZV9pZCkpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgdW5lIHNlbWVzdHJlIGV0IHVuZSBzZW1haW5lIGV0IGF1IG1vaW5zIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2NyZWUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1mb2xkZXItb3BlbicpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRzX3NlYW5jZXMnLCBKU09OLnN0cmluZ2lmeShpZHNfc2VhbmNlcykpOyBcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb21vdGlvbicsICQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKTtcclxuICAgICAgICBpZiAoc2VtYWluZV9pZCkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NlbWFpbmUnLCBzZW1haW5lX2lkKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzZW1haW5lJywgJChcIiNzZW1haW5lXCIpLnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJChcIiNzZW1haW5lXCIpLnZhbCgpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2hvbm9yYWlyZS9jcmVhdGlvbl9ib3JkZXJhdXgvY3JlZV9ib3JkZXJhdXgnLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdCb3JkZXJhdXggQmllbiBDcsOpZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlkc19zZWFuY2VzID0gW107XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCcvaG9ub3JhaXJlL2NyZWF0aW9uX2JvcmRlcmF1eC9ob25vcmFpcmVfYm9yZGVyYXV4LycrcmVzcG9uc2UsICdfYmxhbmsnKTtcclxuICAgICAgICAgICAgdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1mb2xkZXItb3BlbicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1mb2xkZXItb3BlbicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxufSkiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xyXG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XHJcblxyXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcclxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcclxuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxyXG59IDogW10uZm9yRWFjaDtcclxuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXHJcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgQ1NTUnVsZUxpc3Q6IDAsXHJcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcclxuICBDU1NWYWx1ZUxpc3Q6IDAsXHJcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXHJcbiAgRE9NUmVjdExpc3Q6IDAsXHJcbiAgRE9NU3RyaW5nTGlzdDogMCxcclxuICBET01Ub2tlbkxpc3Q6IDEsXHJcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXHJcbiAgRmlsZUxpc3Q6IDAsXHJcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXHJcbiAgSFRNTENvbGxlY3Rpb246IDAsXHJcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxyXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxyXG4gIE1lZGlhTGlzdDogMCxcclxuICBNaW1lVHlwZUFycmF5OiAwLFxyXG4gIE5hbWVkTm9kZU1hcDogMCxcclxuICBOb2RlTGlzdDogMSxcclxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxyXG4gIFBsdWdpbjogMCxcclxuICBQbHVnaW5BcnJheTogMCxcclxuICBTVkdMZW5ndGhMaXN0OiAwLFxyXG4gIFNWR051bWJlckxpc3Q6IDAsXHJcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXHJcbiAgU1ZHUG9pbnRMaXN0OiAwLFxyXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXHJcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcclxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxyXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxyXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXHJcbiAgVGV4dFRyYWNrTGlzdDogMCxcclxuICBUb3VjaExpc3Q6IDBcclxufTtcclxuIiwiLy8gaW4gb2xkIFdlYktpdCB2ZXJzaW9ucywgYGVsZW1lbnQuY2xhc3NMaXN0YCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgZ2xvYmFsIGBET01Ub2tlbkxpc3RgXHJcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcclxuXHJcbnZhciBjbGFzc0xpc3QgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ3NwYW4nKS5jbGFzc0xpc3Q7XHJcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSBjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERPTVRva2VuTGlzdFByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSA/IHVuZGVmaW5lZCA6IERPTVRva2VuTGlzdFByb3RvdHlwZTtcclxuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcclxuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcclxuICBmb3JFYWNoOiBmb3JFYWNoXHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XHJcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XHJcblxyXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xyXG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XHJcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XHJcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XHJcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcclxudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XHJcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xyXG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XHJcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xyXG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xyXG5cclxuLy8gQEBzZWFyY2ggbG9naWNcclxuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXHJcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXHJcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XHJcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcclxuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XHJcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XHJcbiAgICB9LFxyXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxyXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcclxuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xyXG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xyXG5cclxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xyXG5cclxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xyXG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XHJcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcclxuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xyXG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XHJcbiAgICB9XHJcbiAgXTtcclxufSk7XHJcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xyXG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xyXG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xyXG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xyXG5cclxudmFyIGhhbmRsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XHJcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XHJcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xyXG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XHJcbiAgfVxyXG59O1xyXG5cclxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xyXG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xyXG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XHJcbiAgfVxyXG59XHJcblxyXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcclxuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwic2VtYWluZV9pZCIsImlkX3NlYW5jZSIsImlkc19zZWFuY2VzIiwidGFibGVfY3JlYXRpb25fYm9yZGVyYXV4IiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwiY29sdW1uRGVmcyIsInRhcmdldHMiLCJvcmRlcmFibGUiLCJsYW5ndWFnZSIsInVybCIsIm9uIiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInNuYyIsIm1hcCIsInZhbHVlIiwic2VsZWN0MiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwicmVzcG9uc2UiLCJkcmF3IiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJpZF9zZW1lc3RyZSIsInNlbWFpbmUiLCJtaW5pbXVtSW5wdXRMZW5ndGgiLCJhbGxvd0NsZWFyIiwicGxhY2Vob2xkZXIiLCJkYXRhVHlwZSIsImRlbGF5IiwicGFyYW1zIiwidGVybSIsInByb2Nlc3NSZXN1bHRzIiwicGFnZSIsImxpc3QiLCJ0ZXh0IiwibnNlbWFpbmUiLCJkZWJ1dCIsImZpbiIsImlkIiwicmVzdWx0cyIsImlkX3Byb2YiLCJncmFkZSIsInNlbWFpbmVfZGF5IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJsZW5ndGgiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsIm9wZW4iLCJyZWxvYWQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==