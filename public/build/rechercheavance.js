(self["webpackChunk"] = self["webpackChunk"] || []).push([["rechercheavance"],{

/***/ "./assets/components/etudiant/rechercheavance.js":
/*!*******************************************************!*\
  !*** ./assets/components/etudiant/rechercheavance.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

$(document).ready(function () {
  $('.nav-pills a').on('click', function (e) {
    $(this).tab('show');
  });
  var typingTimer; //timer identifier

  var doneTypingInterval = 1000;
  var id_admission = null;
  $("#etudiant").select2({
    minimumInputLength: 3,
    // required enter 3 characters or more
    allowClear: true,
    placeholder: 'Etudiant',
    language: "fr",
    ajax: {
      dataType: 'json',
      url: '/etudiant/rechercheavance/find',
      //    delay: 5,  // ini bebas mau di pake atau tidak
      data: function data(params) {
        return {
          search: params.term
        };
      },
      processResults: function processResults(data, page) {
        var dataArray = data.map(function (item) {
          return {
            text: item.code + " " + item.nom + " " + item.prenom,
            id: item.id
          };
        });
        return {
          results: dataArray
        };
      }
    }
  });
  $("body").on("change", "#etudiant", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var request, response, message;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios.post('/etudiant/rechercheavance/findAnnee/' + $(this).val());

          case 3:
            request = _context.sent;
            response = request.data;
            $("#annee").html(response).select2();
            _context.next = 13;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            message = _context.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  })));
  $("body").on("click", "#recherche", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var request, response, message;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return axios.post('/etudiant/rechercheavance/recherche/' + $("#annee").val());

          case 3:
            request = _context2.sent;
            response = request.data;
            $(".information").html(response.informations);
            $("#administratif").html(response.administratif);
            $("#academique").html(response.academique);
            _context2.next = 15;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            message = _context2.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  })));
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/etudiant/rechercheavance.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEyQztBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ldHVkaWFudC9yZWNoZXJjaGVhdmFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgICQoJy5uYXYtcGlsbHMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJCh0aGlzKS50YWIoJ3Nob3cnKVxyXG4gICAgfSlcclxuICAgIHZhciB0eXBpbmdUaW1lcjsgICAgICAgICAgICAgICAgLy90aW1lciBpZGVudGlmaWVyXHJcbiAgICB2YXIgZG9uZVR5cGluZ0ludGVydmFsID0gMTAwMDtcclxuICAgIGxldCBpZF9hZG1pc3Npb24gPSBudWxsO1xyXG4gICAgJChcIiNldHVkaWFudFwiKS5zZWxlY3QyKHtcclxuICAgICAgICBtaW5pbXVtSW5wdXRMZW5ndGg6IDMsICAvLyByZXF1aXJlZCBlbnRlciAzIGNoYXJhY3RlcnMgb3IgbW9yZVxyXG4gICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdHVkaWFudCcsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiZnJcIixcclxuICAgICAgICBhamF4OiB7XHJcbiAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICB1cmw6ICcvZXR1ZGlhbnQvcmVjaGVyY2hlYXZhbmNlL2ZpbmQnLCAgXHJcbiAgICAgICAgLy8gICAgZGVsYXk6IDUsICAvLyBpbmkgYmViYXMgbWF1IGRpIHBha2UgYXRhdSB0aWRha1xyXG4gICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgc2VhcmNoOiBwYXJhbXMudGVybVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgcHJvY2Vzc1Jlc3VsdHM6IGZ1bmN0aW9uIChkYXRhLCBwYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhQXJyYXkgPSBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLmNvZGUgK1wiIFwiK2l0ZW0ubm9tICsgXCIgXCIgK2l0ZW0ucHJlbm9tLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzOiBkYXRhQXJyYXlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgfSxcclxuICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgXHJcblxyXG4gICAgJChcImJvZHlcIikub24oXCJjaGFuZ2VcIiwgXCIjZXR1ZGlhbnRcIiwgYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L3JlY2hlcmNoZWF2YW5jZS9maW5kQW5uZWUvJyskKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgICQoXCIjYW5uZWVcIikuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNyZWNoZXJjaGVcIiwgYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L3JlY2hlcmNoZWF2YW5jZS9yZWNoZXJjaGUvJyskKFwiI2FubmVlXCIpLnZhbCgpKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgICQoXCIuaW5mb3JtYXRpb25cIikuaHRtbChyZXNwb25zZS5pbmZvcm1hdGlvbnMpO1xyXG4gICAgICAgICAgICAkKFwiI2FkbWluaXN0cmF0aWZcIikuaHRtbChyZXNwb25zZS5hZG1pbmlzdHJhdGlmKTtcclxuICAgICAgICAgICAgJChcIiNhY2FkZW1pcXVlXCIpLmh0bWwocmVzcG9uc2UuYWNhZGVtaXF1ZSk7XHJcblxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KSIsInZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXgsIGZpbHRlclJlamVjdCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBJU19GSUxURVJfUkVKRUNUID0gVFlQRSA9PSA3O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIHRoYXQpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShzZWxmKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiB8fCBJU19GSUxURVJfUkVKRUNUID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxuICAgICAgICAgIGNhc2UgNzogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJSZWplY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlclJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWZpbHRlcmluZ1xuICBmaWx0ZXJSZWplY3Q6IGNyZWF0ZU1ldGhvZCg3KVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jb25zdHJ1Y3RvcicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIEFycmF5ID0gZ2xvYmFsLkFycmF5O1xuXG4vLyBhIHBhcnQgb2YgYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmIChpc0NvbnN0cnVjdG9yKEMpICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuIiwidmFyIGFycmF5U3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxuLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKGFycmF5U3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsQXJyYXkpKShsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoKTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PSAnQXJyYXknO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImUiLCJ0YWIiLCJ0eXBpbmdUaW1lciIsImRvbmVUeXBpbmdJbnRlcnZhbCIsImlkX2FkbWlzc2lvbiIsInNlbGVjdDIiLCJtaW5pbXVtSW5wdXRMZW5ndGgiLCJhbGxvd0NsZWFyIiwicGxhY2Vob2xkZXIiLCJsYW5ndWFnZSIsImFqYXgiLCJkYXRhVHlwZSIsInVybCIsImRhdGEiLCJwYXJhbXMiLCJzZWFyY2giLCJ0ZXJtIiwicHJvY2Vzc1Jlc3VsdHMiLCJwYWdlIiwiZGF0YUFycmF5IiwibWFwIiwiaXRlbSIsInRleHQiLCJjb2RlIiwibm9tIiwicHJlbm9tIiwiaWQiLCJyZXN1bHRzIiwiYXhpb3MiLCJwb3N0IiwidmFsIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiaHRtbCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiVG9hc3QiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiaW5mb3JtYXRpb25zIiwiYWRtaW5pc3RyYXRpZiIsImFjYWRlbWlxdWUiXSwic291cmNlUm9vdCI6IiJ9