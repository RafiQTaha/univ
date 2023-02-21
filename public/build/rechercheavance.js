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
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!$("#annee").val() || $("#annee").val() == '')) {
              _context2.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection une Année!'
            });
            return _context2.abrupt("return");

          case 3:
            icon = $("#recherche i");
            icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
            _context2.prev = 5;
            _context2.next = 8;
            return axios.post('/etudiant/rechercheavance/recherche/' + $("#annee").val());

          case 8:
            request = _context2.sent;
            response = request.data;
            $(".information").html(response.informations);
            $("#administratif").html(response.administratif);
            $("#academique").html(response.academique);
            icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
            _context2.next = 22;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](5);
            console.log(_context2.t0);
            message = _context2.t0.response.data;
            icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 16]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEyQztBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBNEQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2V0dWRpYW50L3JlY2hlcmNoZWF2YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgJCgnLm5hdi1waWxscyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAkKHRoaXMpLnRhYignc2hvdycpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICB2YXIgdHlwaW5nVGltZXI7ICAgICAgICAgICAgICAgIC8vdGltZXIgaWRlbnRpZmllclxyXG4gICAgdmFyIGRvbmVUeXBpbmdJbnRlcnZhbCA9IDEwMDA7XHJcbiAgICBsZXQgaWRfYWRtaXNzaW9uID0gbnVsbDtcclxuICAgICQoXCIjZXR1ZGlhbnRcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAzLCAgLy8gcmVxdWlyZWQgZW50ZXIgMyBjaGFyYWN0ZXJzIG9yIG1vcmVcclxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXR1ZGlhbnQnLFxyXG4gICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgdXJsOiAnL2V0dWRpYW50L3JlY2hlcmNoZWF2YW5jZS9maW5kJywgIFxyXG4gICAgICAgIC8vICAgIGRlbGF5OiA1LCAgLy8gaW5pIGJlYmFzIG1hdSBkaSBwYWtlIGF0YXUgdGlkYWtcclxuICAgICAgICAgICBkYXRhOiBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgIHNlYXJjaDogcGFyYW1zLnRlcm1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAoZGF0YSwgcGFnZSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YUFycmF5ID0gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5jb2RlICtcIiBcIitpdGVtLm5vbSArIFwiIFwiICtpdGVtLnByZW5vbSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0czogZGF0YUFycmF5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgIFxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiI2V0dWRpYW50XCIsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldHVkaWFudC9yZWNoZXJjaGVhdmFuY2UvZmluZEFubmVlLycrJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAkKFwiI2FubmVlXCIpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjcmVjaGVyY2hlXCIsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJChcIiNhbm5lZVwiKS52YWwoKSlcclxuICAgICAgICAvLyByZXR1cm5cclxuICAgICAgICBpZighJChcIiNhbm5lZVwiKS52YWwoKSB8fCAkKFwiI2FubmVlXCIpLnZhbCgpID09ICcnKXtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgQW5uw6llIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNyZWNoZXJjaGUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zZWFyY2gnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L3JlY2hlcmNoZWF2YW5jZS9yZWNoZXJjaGUvJyskKFwiI2FubmVlXCIpLnZhbCgpKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgICQoXCIuaW5mb3JtYXRpb25cIikuaHRtbChyZXNwb25zZS5pbmZvcm1hdGlvbnMpO1xyXG4gICAgICAgICAgICAkKFwiI2FkbWluaXN0cmF0aWZcIikuaHRtbChyZXNwb25zZS5hZG1pbmlzdHJhdGlmKTtcclxuICAgICAgICAgICAgJChcIiNhY2FkZW1pcXVlXCIpLmh0bWwocmVzcG9uc2UuYWNhZGVtaXF1ZSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXNlYXJjaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zZWFyY2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pIiwidmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XHJcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcclxudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcclxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xyXG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcclxudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xyXG5cclxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUueyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIGZpbmQsIGZpbmRJbmRleCwgZmlsdGVyUmVqZWN0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cclxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XHJcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcclxuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xyXG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xyXG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcclxuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcclxuICB2YXIgSVNfRklMVEVSX1JFSkVDVCA9IFRZUEUgPT0gNztcclxuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcclxuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0LCBzcGVjaWZpY0NyZWF0ZSkge1xyXG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XHJcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XHJcbiAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgdGhhdCk7XHJcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2Uoc2VsZik7XHJcbiAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcclxuICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgfHwgSVNfRklMVEVSX1JFSkVDVCA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XHJcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcclxuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xyXG4gICAgICB2YWx1ZSA9IHNlbGZbaW5kZXhdO1xyXG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XHJcbiAgICAgIGlmIChUWVBFKSB7XHJcbiAgICAgICAgaWYgKElTX01BUCkgdGFyZ2V0W2luZGV4XSA9IHJlc3VsdDsgLy8gbWFwXHJcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcclxuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAvLyBzb21lXHJcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWx1ZTsgICAgICAgICAgICAgLy8gZmluZFxyXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxyXG4gICAgICAgICAgY2FzZSAyOiBwdXNoKHRhcmdldCwgdmFsdWUpOyAgICAgIC8vIGZpbHRlclxyXG4gICAgICAgIH0gZWxzZSBzd2l0Y2ggKFRZUEUpIHtcclxuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxyXG4gICAgICAgICAgY2FzZSA3OiBwdXNoKHRhcmdldCwgdmFsdWUpOyAgICAgIC8vIGZpbHRlclJlamVjdFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcclxuICB9O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2RcclxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXHJcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxyXG4gIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcclxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcclxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcclxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXHJcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXHJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXHJcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5zb21lYCBtZXRob2RcclxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXHJcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxyXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XHJcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcclxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcclxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXHJcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxyXG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxyXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyUmVqZWN0YCBtZXRob2RcclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maWx0ZXJpbmdcclxuICBmaWx0ZXJSZWplY3Q6IGNyZWF0ZU1ldGhvZCg3KVxyXG59O1xyXG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcclxudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xyXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xyXG5cclxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XHJcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXHJcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XHJcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcnJheSA9IFtdO1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcclxuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4geyBmb286IDEgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcclxuICB9KTtcclxufTtcclxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcclxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcclxudmFyIGlzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY29uc3RydWN0b3InKTtcclxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xyXG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XHJcblxyXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xyXG52YXIgQXJyYXkgPSBnbG9iYWwuQXJyYXk7XHJcblxyXG4vLyBhIHBhcnQgb2YgYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXkpIHtcclxuICB2YXIgQztcclxuICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xyXG4gICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XHJcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xyXG4gICAgaWYgKGlzQ29uc3RydWN0b3IoQykgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcclxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XHJcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xyXG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XHJcbn07XHJcbiIsInZhciBhcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XHJcblxyXG4vLyBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSwgbGVuZ3RoKSB7XHJcbiAgcmV0dXJuIG5ldyAoYXJyYXlTcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWxBcnJheSkpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xyXG59O1xyXG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xyXG5cclxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxyXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xyXG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PSAnQXJyYXknO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XHJcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XHJcblxyXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xyXG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XHJcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJlIiwidGFiIiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwidHlwaW5nVGltZXIiLCJkb25lVHlwaW5nSW50ZXJ2YWwiLCJpZF9hZG1pc3Npb24iLCJzZWxlY3QyIiwibWluaW11bUlucHV0TGVuZ3RoIiwiYWxsb3dDbGVhciIsInBsYWNlaG9sZGVyIiwibGFuZ3VhZ2UiLCJhamF4IiwiZGF0YVR5cGUiLCJ1cmwiLCJkYXRhIiwicGFyYW1zIiwic2VhcmNoIiwidGVybSIsInByb2Nlc3NSZXN1bHRzIiwicGFnZSIsImRhdGFBcnJheSIsIm1hcCIsIml0ZW0iLCJ0ZXh0IiwiY29kZSIsIm5vbSIsInByZW5vbSIsImlkIiwicmVzdWx0cyIsImF4aW9zIiwicG9zdCIsInZhbCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImh0bWwiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaW5mb3JtYXRpb25zIiwiYWRtaW5pc3RyYXRpZiIsImFjYWRlbWlxdWUiXSwic291cmNlUm9vdCI6IiJ9