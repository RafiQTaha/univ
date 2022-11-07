(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestionBorderaux"],{

/***/ "./assets/components/honoraire/gestion_borderaux.js":
/*!**********************************************************!*\
  !*** ./assets/components/honoraire/gestion_borderaux.js ***!
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
  var id_bordereau = false;
  var ids_borderaux = [];
  var table_gestion_borderaux = $("#datables_gestion_borderaux").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/honoraire/gestion_borderaux/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      ids_borderaux.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_bordereau).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('body').on('dblclick', '#datables_gestion_borderaux tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_bordereau = null;
    } else {
      $("#datables_gestion_borderaux tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_bordereau = $(this).attr('id');
    }
  });
  $('body').on('click', '#datables_gestion_borderaux tbody tr', function (e) {
    e.preventDefault();
    var input = $(this).find("input");

    if (input.hasClass('check_seance')) {
      return;
    } else {
      if (input.is(":checked")) {
        input.prop("checked", false);
        var index = ids_borderaux.indexOf(input.attr("data-id"));
        ids_borderaux.splice(index, 1);
      } else {
        input.prop("checked", true);
        ids_borderaux.push(input.attr("data-id"));
      }
    }

    console.log(ids_borderaux);
  });
  $("select").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_gestion_borderaux.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 12;
              break;
            }

            if ($("#semaine").val() != "") {
              table_gestion_borderaux.columns(3).search($("#semaine").val());
            }

            table_gestion_borderaux.columns(0).search(id_etab).draw();
            _context.next = 8;
            return axios.get('/api/formation/' + id_etab);

          case 8:
            request = _context.sent;
            response = request.data;
            _context.next = 14;
            break;

          case 12:
            table_gestion_borderaux.columns().search('').draw();

            if ($("#semaine").val() != "") {
              table_gestion_borderaux.columns(3).search($("#semaine").val()).draw();
            }

          case 14:
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 16:
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
            table_gestion_borderaux.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_borderaux.columns(3).search($("#semaine").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 12;
              break;
            }

            table_gestion_borderaux.columns(1).search(id_formation).draw();
            _context2.next = 8;
            return axios.get('/api/promotion/' + id_formation);

          case 8:
            request = _context2.sent;
            response = request.data;
            _context2.next = 13;
            break;

          case 12:
            table_gestion_borderaux.columns(0).search($("#etablissement").val()).draw();

          case 13:
            $('#promotion').html(response).select2();

          case 14:
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
            table_gestion_borderaux.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_borderaux.columns(3).search($("#semaine").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 11;
              break;
            }

            table_gestion_borderaux.columns(2).search(id_promotion).draw();
            _context3.next = 7;
            return axios.get('/api/semestre/' + id_promotion);

          case 7:
            request = _context3.sent;
            response = request.data;
            _context3.next = 12;
            break;

          case 11:
            table_gestion_borderaux.columns(1).search($("#formation").val()).draw();

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#semaine").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var semaine;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            semaine = $(this).val();
            table_gestion_borderaux.columns(3).search(semaine).draw();

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $('body').on('click', '#imprimer', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();

              if (id_bordereau) {
                _context5.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir une ligne!'
              });
              return _context5.abrupt("return");

            case 4:
              window.open('/honoraire/creation_borderaux/honoraire_borderaux/' + id_bordereau, '_blank');

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }());
  $('body').on('click', '#annuler', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var icon, formData, request, _response, message;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();

              if (!(ids_borderaux.length === 0)) {
                _context6.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne!'
              });
              return _context6.abrupt("return");

            case 4:
              icon = $("#annuler i");
              icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_borderaux', JSON.stringify(ids_borderaux));
              _context6.prev = 8;
              _context6.next = 11;
              return axios.post('/honoraire/gestion_borderaux/annuler_borderaux', formData);

            case 11:
              request = _context6.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: _response
              });
              ids_borderaux = [];
              table_gestion_borderaux.ajax.reload(null, false);
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              _context6.next = 23;
              break;

            case 19:
              _context6.prev = 19;
              _context6.t0 = _context6["catch"](8);
              message = _context6.t0.response.data;
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");

            case 23:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[8, 19]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
  $('body').on('click', '#exporter', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var icon, formData, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();

              if (!(ids_borderaux.length === 0)) {
                _context7.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne!'
              });
              return _context7.abrupt("return");

            case 4:
              icon = $("#exporter i");
              icon.removeClass('fab fa-telegram-plane').addClass("fas fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_borderaux', JSON.stringify(ids_borderaux));
              _context7.prev = 8;
              _context7.next = 11;
              return axios.post('/honoraire/gestion_borderaux/exporter_borderaux', formData);

            case 11:
              request = _context7.sent;
              _response2 = request.data;
              Toast.fire({
                icon: 'success',
                title: 'Rapprt Bien Générer'
              });
              icon.addClass('fab fa-telegram-plane').removeClass("fas fa-spinner fa-spin");
              window.open('/uploads/honoraire/' + _response2, '_blank');
              _context7.next = 22;
              break;

            case 18:
              _context7.prev = 18;
              _context7.t0 = _context7["catch"](8);
              message = _context7.t0.response.data;
              icon.addClass('fab fa-telegram-plane').removeClass("fas fa-spinner fa-spin");

            case 22:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[8, 18]]);
    }));

    return function (_x3) {
      return _ref7.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction_honoraire', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();
              window.open('/honoraire/gestion_borderaux/extraction_honoraire', '_blank');

            case 2:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x4) {
      return _ref8.apply(this, arguments);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/honoraire/gestion_borderaux.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdGlvbkJvcmRlcmF1eC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVc7QUFDckJDLElBQUFBLEtBQUssRUFBRSxJQURjO0FBRXJCQyxJQUFBQSxRQUFRLEVBQUUsU0FGVztBQUdyQkMsSUFBQUEsaUJBQWlCLEVBQUUsS0FIRTtBQUlyQkMsSUFBQUEsS0FBSyxFQUFFLElBSmM7QUFLckJDLElBQUFBLGdCQUFnQixFQUFFLElBTEc7QUFNckJDLElBQUFBLE9BQU8sRUFBRSxpQkFBQ0wsS0FBRCxFQUFXO0FBQ2hCQSxNQUFBQSxLQUFLLENBQUNNLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDUixJQUFJLENBQUNTLFNBQTFDO0FBQ0FQLE1BQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1UsV0FBMUM7QUFDSDtBQVRvQixHQUFYLENBQWQ7QUFXQSxNQUFJQyxZQUFZLEdBQUcsS0FBbkI7QUFDQSxNQUFJQyxhQUFhLEdBQUcsRUFBcEI7QUFDQSxNQUFJQyx1QkFBdUIsR0FBR2pCLENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDa0IsU0FBakMsQ0FBMkM7QUFDckVDLElBQUFBLFVBQVUsRUFBRSxDQUNSLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixjQUF0QixDQURRLEVBRVIsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlEsQ0FEeUQ7QUFLckVDLElBQUFBLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FBRCxDQUw4RDtBQU1yRUMsSUFBQUEsSUFBSSxFQUFFLG1DQU4rRDtBQU9yRUMsSUFBQUEsVUFBVSxFQUFFLElBUHlEO0FBUXJFQyxJQUFBQSxVQUFVLEVBQUUsSUFSeUQ7QUFTckVDLElBQUFBLFdBQVcsRUFBRSxJQVR3RDtBQVVyRUMsSUFBQUEsT0FBTyxFQUFFLElBVjREO0FBV3JFQyxJQUFBQSxZQUFZLEVBQUUsd0JBQVk7QUFDdEJWLE1BQUFBLGFBQWEsQ0FBQ1csT0FBZCxDQUFzQixVQUFDQyxDQUFELEVBQU87QUFDekI1QixRQUFBQSxDQUFDLENBQUMsYUFBYTRCLENBQWQsQ0FBRCxDQUNDQyxJQURELENBQ00sT0FETixFQUVDQyxJQUZELENBRU0sU0FGTixFQUVpQixJQUZqQjtBQUdILE9BSkQ7QUFLQTlCLE1BQUFBLENBQUMsQ0FBQyxhQUFhZSxZQUFkLENBQUQsQ0FBNkJnQixRQUE3QixDQUFzQyxrQkFBdEM7QUFDSCxLQWxCb0U7QUFtQnJFQyxJQUFBQSxRQUFRLEVBQUU7QUFDTkMsTUFBQUEsR0FBRyxFQUFFO0FBREM7QUFuQjJELEdBQTNDLENBQTlCO0FBdUJBakMsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVa0MsRUFBVixDQUFhLFVBQWIsRUFBd0Isc0NBQXhCLEVBQStELFVBQVVOLENBQVYsRUFBYTtBQUN4RUEsSUFBQUEsQ0FBQyxDQUFDTyxjQUFGOztBQUNBLFFBQUduQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvQyxRQUFSLENBQWlCLGtCQUFqQixDQUFILEVBQXlDO0FBQ3JDcEMsTUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsV0FBUixDQUFvQixrQkFBcEI7QUFDQXRCLE1BQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0gsS0FIRCxNQUdPO0FBQ0hmLE1BQUFBLENBQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDcUMsV0FBMUMsQ0FBc0Qsa0JBQXREO0FBQ0FyQyxNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVErQixRQUFSLENBQWlCLGtCQUFqQjtBQUNBaEIsTUFBQUEsWUFBWSxHQUFHZixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQyxJQUFSLENBQWEsSUFBYixDQUFmO0FBQ0g7QUFDSixHQVZEO0FBV0F0QyxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVrQyxFQUFWLENBQWEsT0FBYixFQUFxQixzQ0FBckIsRUFBNEQsVUFBVU4sQ0FBVixFQUFhO0FBQ3JFQSxJQUFBQSxDQUFDLENBQUNPLGNBQUY7QUFDQSxRQUFNSSxLQUFLLEdBQUd2QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE2QixJQUFSLENBQWEsT0FBYixDQUFkOztBQUNBLFFBQUlVLEtBQUssQ0FBQ0gsUUFBTixDQUFlLGNBQWYsQ0FBSixFQUFvQztBQUNoQztBQUNILEtBRkQsTUFFSztBQUNELFVBQUdHLEtBQUssQ0FBQ0MsRUFBTixDQUFTLFVBQVQsQ0FBSCxFQUF3QjtBQUNwQkQsUUFBQUEsS0FBSyxDQUFDVCxJQUFOLENBQVcsU0FBWCxFQUFxQixLQUFyQjtBQUNBLFlBQU1XLEtBQUssR0FBR3pCLGFBQWEsQ0FBQzBCLE9BQWQsQ0FBc0JILEtBQUssQ0FBQ0QsSUFBTixDQUFXLFNBQVgsQ0FBdEIsQ0FBZDtBQUNBdEIsUUFBQUEsYUFBYSxDQUFDMkIsTUFBZCxDQUFxQkYsS0FBckIsRUFBMkIsQ0FBM0I7QUFDSCxPQUpELE1BSUs7QUFDREYsUUFBQUEsS0FBSyxDQUFDVCxJQUFOLENBQVcsU0FBWCxFQUFxQixJQUFyQjtBQUNBZCxRQUFBQSxhQUFhLENBQUM0QixJQUFkLENBQW1CTCxLQUFLLENBQUNELElBQU4sQ0FBVyxTQUFYLENBQW5CO0FBQ0g7QUFDSjs7QUFDRE8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk5QixhQUFaO0FBQ0gsR0FoQkQ7QUFpQkFoQixFQUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVkrQyxPQUFaO0FBQ0EvQyxFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmtDLEVBQXBCLENBQXVCLFFBQXZCLHVFQUFpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJjLFlBQUFBLE9BRHVCLEdBQ2JoRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpRCxHQUFSLEVBRGE7QUFFN0JoQyxZQUFBQSx1QkFBdUIsQ0FBQ2lDLE9BQXhCLEdBQWtDQyxNQUFsQyxDQUF5QyxFQUF6QztBQUNJQyxZQUFBQSxRQUh5QixHQUdkLEVBSGM7O0FBQUEsa0JBSTFCSixPQUFPLElBQUksRUFKZTtBQUFBO0FBQUE7QUFBQTs7QUFLekIsZ0JBQUdoRCxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNpRCxHQUFkLE1BQXVCLEVBQTFCLEVBQTZCO0FBQ3pCaEMsY0FBQUEsdUJBQXVCLENBQUNpQyxPQUF4QixDQUFnQyxDQUFoQyxFQUFtQ0MsTUFBbkMsQ0FBMENuRCxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNpRCxHQUFkLEVBQTFDO0FBQ0g7O0FBQ0RoQyxZQUFBQSx1QkFBdUIsQ0FBQ2lDLE9BQXhCLENBQWdDLENBQWhDLEVBQW1DQyxNQUFuQyxDQUEwQ0gsT0FBMUMsRUFBbURLLElBQW5EO0FBUnlCO0FBQUEsbUJBU0hDLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFrQlAsT0FBNUIsQ0FURzs7QUFBQTtBQVNuQlEsWUFBQUEsT0FUbUI7QUFVekJKLFlBQUFBLFFBQVEsR0FBR0ksT0FBTyxDQUFDQyxJQUFuQjtBQVZ5QjtBQUFBOztBQUFBO0FBWXpCeEMsWUFBQUEsdUJBQXVCLENBQUNpQyxPQUF4QixHQUFrQ0MsTUFBbEMsQ0FBeUMsRUFBekMsRUFBNkNFLElBQTdDOztBQUNBLGdCQUFHckQsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjaUQsR0FBZCxNQUF1QixFQUExQixFQUE2QjtBQUN6QmhDLGNBQUFBLHVCQUF1QixDQUFDaUMsT0FBeEIsQ0FBZ0MsQ0FBaEMsRUFBbUNDLE1BQW5DLENBQTBDbkQsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjaUQsR0FBZCxFQUExQyxFQUErREksSUFBL0Q7QUFDSDs7QUFmd0I7QUFpQjdCckQsWUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjBELElBQWhCLENBQXFCLEVBQXJCLEVBQXlCWCxPQUF6QjtBQUNBL0MsWUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjBELElBQWhCLENBQXFCTixRQUFyQixFQUErQkwsT0FBL0I7O0FBbEI2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFqQztBQW9CQS9DLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JrQyxFQUFoQixDQUFtQixRQUFuQix1RUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CeUIsWUFBQUEsWUFEbUIsR0FDSjNELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlELEdBQVIsRUFESTtBQUV6QmhDLFlBQUFBLHVCQUF1QixDQUFDaUMsT0FBeEIsR0FBa0NDLE1BQWxDLENBQXlDLEVBQXpDOztBQUNBLGdCQUFHbkQsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjaUQsR0FBZCxNQUF1QixFQUExQixFQUE2QjtBQUN6QmhDLGNBQUFBLHVCQUF1QixDQUFDaUMsT0FBeEIsQ0FBZ0MsQ0FBaEMsRUFBbUNDLE1BQW5DLENBQTBDbkQsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjaUQsR0FBZCxFQUExQztBQUNIOztBQUNHRyxZQUFBQSxRQU5xQixHQU1WLEVBTlU7O0FBQUEsa0JBT3RCTyxZQUFZLElBQUksRUFQTTtBQUFBO0FBQUE7QUFBQTs7QUFRckIxQyxZQUFBQSx1QkFBdUIsQ0FBQ2lDLE9BQXhCLENBQWdDLENBQWhDLEVBQW1DQyxNQUFuQyxDQUEwQ1EsWUFBMUMsRUFBd0ROLElBQXhEO0FBUnFCO0FBQUEsbUJBU0NDLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFrQkksWUFBNUIsQ0FURDs7QUFBQTtBQVNmSCxZQUFBQSxPQVRlO0FBVXJCSixZQUFBQSxRQUFRLEdBQUdJLE9BQU8sQ0FBQ0MsSUFBbkI7QUFWcUI7QUFBQTs7QUFBQTtBQVlyQnhDLFlBQUFBLHVCQUF1QixDQUFDaUMsT0FBeEIsQ0FBZ0MsQ0FBaEMsRUFBbUNDLE1BQW5DLENBQTBDbkQsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JpRCxHQUFwQixFQUExQyxFQUFxRUksSUFBckU7O0FBWnFCO0FBY3pCckQsWUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjBELElBQWhCLENBQXFCTixRQUFyQixFQUErQkwsT0FBL0I7O0FBZHlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCO0FBZ0JBL0MsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmtDLEVBQWhCLENBQW1CLFFBQW5CLHVFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkIwQixZQUFBQSxZQURtQixHQUNKNUQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUQsR0FBUixFQURJO0FBRXpCaEMsWUFBQUEsdUJBQXVCLENBQUNpQyxPQUF4QixHQUFrQ0MsTUFBbEMsQ0FBeUMsRUFBekM7O0FBQ0EsZ0JBQUduRCxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNpRCxHQUFkLE1BQXVCLEVBQTFCLEVBQTZCO0FBQ3pCaEMsY0FBQUEsdUJBQXVCLENBQUNpQyxPQUF4QixDQUFnQyxDQUFoQyxFQUFtQ0MsTUFBbkMsQ0FBMENuRCxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNpRCxHQUFkLEVBQTFDO0FBQ0g7O0FBTHdCLGtCQU10QlcsWUFBWSxJQUFJLEVBTk07QUFBQTtBQUFBO0FBQUE7O0FBT3JCM0MsWUFBQUEsdUJBQXVCLENBQUNpQyxPQUF4QixDQUFnQyxDQUFoQyxFQUFtQ0MsTUFBbkMsQ0FBMENTLFlBQTFDLEVBQXdEUCxJQUF4RDtBQVBxQjtBQUFBLG1CQVFDQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxtQkFBaUJLLFlBQTNCLENBUkQ7O0FBQUE7QUFRZkosWUFBQUEsT0FSZTtBQVNyQkosWUFBQUEsUUFBUSxHQUFHSSxPQUFPLENBQUNDLElBQW5CO0FBVHFCO0FBQUE7O0FBQUE7QUFXckJ4QyxZQUFBQSx1QkFBdUIsQ0FBQ2lDLE9BQXhCLENBQWdDLENBQWhDLEVBQW1DQyxNQUFuQyxDQUEwQ25ELENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JpRCxHQUFoQixFQUExQyxFQUFpRUksSUFBakU7O0FBWHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCO0FBY0FyRCxFQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNrQyxFQUFkLENBQWlCLFFBQWpCLHVFQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakIyQixZQUFBQSxPQURpQixHQUNQN0QsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUQsR0FBUixFQURPO0FBRXZCaEMsWUFBQUEsdUJBQXVCLENBQUNpQyxPQUF4QixDQUFnQyxDQUFoQyxFQUFtQ0MsTUFBbkMsQ0FBMENVLE9BQTFDLEVBQW1EUixJQUFuRDs7QUFGdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7QUFJQXJELEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtDLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLFdBQXJCO0FBQUEsd0VBQWtDLGtCQUFnQk4sQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM5QkEsY0FBQUEsQ0FBQyxDQUFDTyxjQUFGOztBQUQ4QixrQkFFMUJwQixZQUYwQjtBQUFBO0FBQUE7QUFBQTs7QUFHMUJaLGNBQUFBLEtBQUssQ0FBQzJELElBQU4sQ0FBVztBQUNQQyxnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsZ0JBQUFBLEtBQUssRUFBRTtBQUZBLGVBQVg7QUFIMEI7O0FBQUE7QUFTOUJDLGNBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLHVEQUFxRG5ELFlBQWpFLEVBQStFLFFBQS9FOztBQVQ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFsQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBZixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVrQyxFQUFWLENBQWEsT0FBYixFQUFxQixVQUFyQjtBQUFBLHdFQUFpQyxrQkFBZ0JOLENBQWhCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDN0JBLGNBQUFBLENBQUMsQ0FBQ08sY0FBRjs7QUFENkIsb0JBRTFCbkIsYUFBYSxDQUFDbUQsTUFBZCxLQUF5QixDQUZDO0FBQUE7QUFBQTtBQUFBOztBQUd6QmhFLGNBQUFBLEtBQUssQ0FBQzJELElBQU4sQ0FBVztBQUNQQyxnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsZ0JBQUFBLEtBQUssRUFBRTtBQUZBLGVBQVg7QUFIeUI7O0FBQUE7QUFTdkJELGNBQUFBLElBVHVCLEdBU2hCL0QsQ0FBQyxDQUFDLFlBQUQsQ0FUZTtBQVU3QitELGNBQUFBLElBQUksQ0FBQzFCLFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DTixRQUFwQyxDQUE2QyxvQkFBN0M7QUFDSXFDLGNBQUFBLFFBWHlCLEdBV2QsSUFBSUMsUUFBSixFQVhjO0FBWTdCRCxjQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsZUFBaEIsRUFBaUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFleEQsYUFBZixDQUFqQztBQVo2QjtBQUFBO0FBQUEscUJBY0hzQyxLQUFLLENBQUNtQixJQUFOLENBQVcsZ0RBQVgsRUFBNERMLFFBQTVELENBZEc7O0FBQUE7QUFjbkJaLGNBQUFBLE9BZG1CO0FBZW5CSixjQUFBQSxTQWZtQixHQWVSSSxPQUFPLENBQUNDLElBZkE7QUFnQnpCdEQsY0FBQUEsS0FBSyxDQUFDMkQsSUFBTixDQUFXO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxnQkFBQUEsS0FBSyxFQUFFWjtBQUZBLGVBQVg7QUFJQXBDLGNBQUFBLGFBQWEsR0FBRyxFQUFoQjtBQUNBQyxjQUFBQSx1QkFBdUIsQ0FBQ0ksSUFBeEIsQ0FBNkJxRCxNQUE3QixDQUFvQyxJQUFwQyxFQUF5QyxLQUF6QztBQUNBWCxjQUFBQSxJQUFJLENBQUNoQyxRQUFMLENBQWMsaUJBQWQsRUFBaUNNLFdBQWpDLENBQTZDLG9CQUE3QztBQXRCeUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF3Qm5Cc0MsY0FBQUEsT0F4Qm1CLEdBd0JULGFBQU12QixRQUFOLENBQWVLLElBeEJOO0FBeUJ6Qk0sY0FBQUEsSUFBSSxDQUFDaEMsUUFBTCxDQUFjLGlCQUFkLEVBQWlDTSxXQUFqQyxDQUE2QyxvQkFBN0M7O0FBekJ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFqQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRCQXJDLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtDLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLFdBQXJCO0FBQUEsd0VBQWtDLGtCQUFnQk4sQ0FBaEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM5QkEsY0FBQUEsQ0FBQyxDQUFDTyxjQUFGOztBQUQ4QixvQkFFM0JuQixhQUFhLENBQUNtRCxNQUFkLEtBQXlCLENBRkU7QUFBQTtBQUFBO0FBQUE7O0FBRzFCaEUsY0FBQUEsS0FBSyxDQUFDMkQsSUFBTixDQUFXO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxnQkFBQUEsS0FBSyxFQUFFO0FBRkEsZUFBWDtBQUgwQjs7QUFBQTtBQVN4QkQsY0FBQUEsSUFUd0IsR0FTakIvRCxDQUFDLENBQUMsYUFBRCxDQVRnQjtBQVU5QitELGNBQUFBLElBQUksQ0FBQzFCLFdBQUwsQ0FBaUIsdUJBQWpCLEVBQTBDTixRQUExQyxDQUFtRCx3QkFBbkQ7QUFDSXFDLGNBQUFBLFFBWDBCLEdBV2YsSUFBSUMsUUFBSixFQVhlO0FBWTlCRCxjQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsZUFBaEIsRUFBaUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFleEQsYUFBZixDQUFqQztBQVo4QjtBQUFBO0FBQUEscUJBY0pzQyxLQUFLLENBQUNtQixJQUFOLENBQVcsaURBQVgsRUFBNkRMLFFBQTdELENBZEk7O0FBQUE7QUFjcEJaLGNBQUFBLE9BZG9CO0FBZXBCSixjQUFBQSxVQWZvQixHQWVUSSxPQUFPLENBQUNDLElBZkM7QUFnQjFCdEQsY0FBQUEsS0FBSyxDQUFDMkQsSUFBTixDQUFXO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxnQkFBQUEsS0FBSyxFQUFFO0FBRkEsZUFBWDtBQUlBRCxjQUFBQSxJQUFJLENBQUNoQyxRQUFMLENBQWMsdUJBQWQsRUFBdUNNLFdBQXZDLENBQW1ELHdCQUFuRDtBQUNBNEIsY0FBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksd0JBQXNCZCxVQUFsQyxFQUEyQyxRQUEzQztBQXJCMEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF1QnBCdUIsY0FBQUEsT0F2Qm9CLEdBdUJWLGFBQU12QixRQUFOLENBQWVLLElBdkJMO0FBd0IxQk0sY0FBQUEsSUFBSSxDQUFDaEMsUUFBTCxDQUFjLHVCQUFkLEVBQXVDTSxXQUF2QyxDQUFtRCx3QkFBbkQ7O0FBeEIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFsQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRCQXJDLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtDLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLHVCQUFyQjtBQUFBLHdFQUE4QyxrQkFBZ0JOLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUNBLGNBQUFBLENBQUMsQ0FBQ08sY0FBRjtBQUNBOEIsY0FBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksbURBQVosRUFBZ0UsUUFBaEU7O0FBRjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTlDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0gsQ0FoTUQ7Ozs7Ozs7Ozs7O0FDQWE7QUFDYixlQUFlLHdIQUErQztBQUM5RCwwQkFBMEIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRXZFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7Ozs7Ozs7OztBQ1hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0EsNEJBQTRCLG1CQUFPLENBQUMseUdBQXNDOztBQUUxRTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLHVGQUE2Qjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBNkQ7QUFDakU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNUWTtBQUNiLFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDL0Msb0NBQW9DLG1CQUFPLENBQUMsK0hBQWlEO0FBQzdGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3BDRCxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLHFGQUE0QjtBQUN2RCw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDM0UsY0FBYyxtQkFBTyxDQUFDLHVGQUE2QjtBQUNuRCxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNkM7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaG9ub3JhaXJlL2dlc3Rpb25fYm9yZGVyYXV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfYm9yZGVyZWF1ID0gZmFsc2U7XHJcbiAgICBsZXQgaWRzX2JvcmRlcmF1eCA9IFtdO1xyXG4gICAgdmFyIHRhYmxlX2dlc3Rpb25fYm9yZGVyYXV4ID0gJChcIiNkYXRhYmxlc19nZXN0aW9uX2JvcmRlcmF1eFwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9ob25vcmFpcmUvZ2VzdGlvbl9ib3JkZXJhdXgvbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZHNfYm9yZGVyYXV4LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfYm9yZGVyZWF1KS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGFibGVzX2dlc3Rpb25fYm9yZGVyYXV4IHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9ib3JkZXJlYXUgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfZ2VzdGlvbl9ib3JkZXJhdXggdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9ib3JkZXJlYXUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9ib3JkZXJhdXggdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc0NsYXNzKCdjaGVja19zZWFuY2UnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkc19ib3JkZXJhdXguaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfYm9yZGVyYXV4LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWRzX2JvcmRlcmF1eC5wdXNoKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZHNfYm9yZGVyYXV4KTtcclxuICAgIH0pXHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ib3JkZXJhdXguY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fYm9yZGVyYXV4LmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fYm9yZGVyYXV4LmNvbHVtbnMoKS5zZWFyY2goJycpLmRyYXcoKTtcclxuICAgICAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ib3JkZXJhdXguY29sdW1ucygzKS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fYm9yZGVyYXV4LmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ib3JkZXJhdXguY29sdW1ucygzKS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDIpLnNlYXJjaChpZF9wcm9tb3Rpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fYm9yZGVyYXV4LmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjc2VtYWluZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgc2VtYWluZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ib3JkZXJhdXguY29sdW1ucygzKS5zZWFyY2goc2VtYWluZSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjaW1wcmltZXInLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfYm9yZGVyZWF1KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvaG9ub3JhaXJlL2NyZWF0aW9uX2JvcmRlcmF1eC9ob25vcmFpcmVfYm9yZGVyYXV4LycraWRfYm9yZGVyZWF1LCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNhbm51bGVyJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRzX2JvcmRlcmF1eC5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgYXUgbW9pbnMgdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYW5udWxlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRzX2JvcmRlcmF1eCcsIEpTT04uc3RyaW5naWZ5KGlkc19ib3JkZXJhdXgpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2hvbm9yYWlyZS9nZXN0aW9uX2JvcmRlcmF1eC9hbm51bGVyX2JvcmRlcmF1eCcsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlkc19ib3JkZXJhdXggPSBbXVxyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4cG9ydGVyJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRzX2JvcmRlcmF1eC5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgYXUgbW9pbnMgdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZXhwb3J0ZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYWIgZmEtdGVsZWdyYW0tcGxhbmUnKS5hZGRDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZHNfYm9yZGVyYXV4JywgSlNPTi5zdHJpbmdpZnkoaWRzX2JvcmRlcmF1eCkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvaG9ub3JhaXJlL2dlc3Rpb25fYm9yZGVyYXV4L2V4cG9ydGVyX2JvcmRlcmF1eCcsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1JhcHBydCBCaWVuIEfDqW7DqXJlcicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS10ZWxlZ3JhbS1wbGFuZScpLnJlbW92ZUNsYXNzKFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJy91cGxvYWRzL2hvbm9yYWlyZS8nK3Jlc3BvbnNlLCdfYmxhbmsnKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLXRlbGVncmFtLXBsYW5lJykucmVtb3ZlQ2xhc3MoXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXh0cmFjdGlvbl9ob25vcmFpcmUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB3aW5kb3cub3BlbignL2hvbm9yYWlyZS9nZXN0aW9uX2JvcmRlcmF1eC9leHRyYWN0aW9uX2hvbm9yYWlyZScsJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgIFxyXG59KSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIvLyBpdGVyYWJsZSBET00gY29sbGVjdGlvbnNcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBDU1NSdWxlTGlzdDogMCxcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcbiAgQ1NTVmFsdWVMaXN0OiAwLFxuICBDbGllbnRSZWN0TGlzdDogMCxcbiAgRE9NUmVjdExpc3Q6IDAsXG4gIERPTVN0cmluZ0xpc3Q6IDAsXG4gIERPTVRva2VuTGlzdDogMSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXG4gIEZpbGVMaXN0OiAwLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgSFRNTENvbGxlY3Rpb246IDAsXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gIE1lZGlhTGlzdDogMCxcbiAgTWltZVR5cGVBcnJheTogMCxcbiAgTmFtZWROb2RlTWFwOiAwLFxuICBOb2RlTGlzdDogMSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcbiAgUGx1Z2luOiAwLFxuICBQbHVnaW5BcnJheTogMCxcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcbiAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXG4gIFNWR1BvaW50TGlzdDogMCxcbiAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcbiAgU3R5bGVTaGVldExpc3Q6IDAsXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXG4gIFRleHRUcmFja0xpc3Q6IDAsXG4gIFRvdWNoTGlzdDogMFxufTtcbiIsIi8vIGluIG9sZCBXZWJLaXQgdmVyc2lvbnMsIGBlbGVtZW50LmNsYXNzTGlzdGAgaXMgbm90IGFuIGluc3RhbmNlIG9mIGdsb2JhbCBgRE9NVG9rZW5MaXN0YFxudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG52YXIgY2xhc3NMaXN0ID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdzcGFuJykuY2xhc3NMaXN0O1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IGNsYXNzTGlzdCAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBET01Ub2tlbkxpc3RQcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgPyB1bmRlZmluZWQgOiBET01Ub2tlbkxpc3RQcm90b3R5cGU7XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9ib3JkZXJlYXUiLCJpZHNfYm9yZGVyYXV4IiwidGFibGVfZ2VzdGlvbl9ib3JkZXJhdXgiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJmb3JFYWNoIiwiZSIsImZpbmQiLCJwcm9wIiwiYWRkQ2xhc3MiLCJsYW5ndWFnZSIsInVybCIsIm9uIiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInNlbGVjdDIiLCJpZF9ldGFiIiwidmFsIiwiY29sdW1ucyIsInNlYXJjaCIsInJlc3BvbnNlIiwiZHJhdyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwiaWRfcHJvbW90aW9uIiwic2VtYWluZSIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ3aW5kb3ciLCJvcGVuIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwicmVsb2FkIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=