(self["webpackChunk"] = self["webpackChunk"] || []).push([["admission"],{

/***/ "./assets/components/admission/admissions.js":
/*!***************************************************!*\
  !*** ./assets/components/admission/admissions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

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
var id_etudiant = false;
var idpreins = [];
var idAdmissions = [];
$(document).ready(function () {
  var table = $("#datatables_candidat_admissibles").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/admission/admissions/candidat_addmissible_list",
    processing: true,
    serverSide: true,
    deferRender: true,
    drawCallback: function drawCallback() {
      idpreins.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  var tableAdmis = $("#datatables_candidat_admis").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/admission/admissions/candidat_admis_list",
    processing: true,
    serverSide: true,
    deferRender: true,
    // drawCallback: function () {
    //     idpreins.forEach((e) => {
    //         $("body tr#" + e)
    //         .find("input")
    //         .prop("checked", true);
    //     });
    // },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('.nav-pills a').on('click', function (e) {
    $(this).tab('show');

    if ($(this).html() == 'Candidats Admissibles') {
      $('.admissible_action').show('fast');
      $('.admis_action').hide('fast');
    } else {
      $('.admissible_action').hide('fast');
      $('.admis_action').show('fast');
    }
  });
  $('body').on('click', '#datatables_candidat_admissibles tbody tr', function () {
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
  $('body').on('click', '#datatables_candidat_admis tbody tr', function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idAdmissions.indexOf(input.attr("id"));
      idAdmissions.splice(index, 1);
    } else {
      input.prop("checked", true);
      idAdmissions.push(input.attr("id"));
    }
  });
  $('#admission').on('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!(idpreins.length < 1)) {
                _context.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cocher une or plusieurs ligne!'
              });
              return _context.abrupt("return");

            case 4:
              icon = $("#admission i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('idpreins', JSON.stringify(idpreins));
              _context.prev = 8;
              _context.next = 11;
              return axios.post("/admission/admissions/new", formData);

            case 11:
              request = _context.sent;
              _context.next = 14;
              return request.data;

            case 14:
              data = _context.sent;
              Toast.fire({
                icon: 'success',
                title: 'Admissions Bien Enregister'
              });
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              table.ajax.reload(null, false);
              tableAdmis.ajax.reload(null, false);
              _context.next = 27;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](8);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 21]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $('#annuler').on('click', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();

              if (!(idAdmissions.length < 1)) {
                _context2.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cocher une or plusieurs ligne!'
              });
              return _context2.abrupt("return");

            case 4:
              icon = $("#annuler i");
              icon.removeClass('fa-exclamation-triangle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('idAdmissions', JSON.stringify(idAdmissions));
              _context2.prev = 8;
              _context2.next = 11;
              return axios.post("/admission/admissions/annuler", formData);

            case 11:
              request = _context2.sent;
              _context2.next = 14;
              return request.data;

            case 14:
              data = _context2.sent;

              if (data.error) {
                Toast.fire({
                  icon: 'error',
                  title: data.error
                });
              } else {
                Toast.fire({
                  icon: 'success',
                  title: 'Admissions Bien Annuler'
                });
              }

              icon.addClass('fa-exclamation-triangle').removeClass("fa-spinner fa-spin");
              tableAdmis.ajax.reload(null, false);
              table.ajax.reload(null, false);
              _context2.next = 27;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](8);
              message = _context2.t0.response.data;
              console.log(_context2.t0, _context2.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-exclamation-triangle').removeClass("fa-spinner fa-spin");

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[8, 21]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
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

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/admission/admissions.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLG1HQUFtQztBQUNwRSxrQkFBa0IsbUJBQU8sQ0FBQyxxRkFBNEI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQTZEO0FBQ2pFO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2FkbWlzc2lvbi9hZG1pc3Npb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbnRvYXN0OiB0cnVlLFxyXG5wb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG5zaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbnRpbWVyOiAzMDAwLFxyXG50aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG5kaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG59LFxyXG59KVxyXG5sZXQgaWRfZXR1ZGlhbnQgPSBmYWxzZTtcclxubGV0IGlkcHJlaW5zID0gW107XHJcbmxldCBpZEFkbWlzc2lvbnMgPSBbXTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbnZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19jYW5kaWRhdF9hZG1pc3NpYmxlc1wiKS5EYXRhVGFibGUoe1xyXG4gICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgXSxcclxuICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICBhamF4OiBcIi9hZG1pc3Npb24vYWRtaXNzaW9ucy9jYW5kaWRhdF9hZGRtaXNzaWJsZV9saXN0XCIsXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWRwcmVpbnMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgIH0sXHJcbiAgICB9KTtcclxudmFyIHRhYmxlQWRtaXMgPSAkKFwiI2RhdGF0YWJsZXNfY2FuZGlkYXRfYWRtaXNcIikuRGF0YVRhYmxlKHtcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgIF0sXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgYWpheDogXCIvYWRtaXNzaW9uL2FkbWlzc2lvbnMvY2FuZGlkYXRfYWRtaXNfbGlzdFwiLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIC8vIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgIGlkcHJlaW5zLmZvckVhY2goKGUpID0+IHtcclxuICAgIC8vICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgLy8gICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAvLyAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgfSk7XHJcbiQoJy5uYXYtcGlsbHMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKHRoaXMpLnRhYignc2hvdycpXHJcbiAgICBpZiAoJCh0aGlzKS5odG1sKCkgPT0gJ0NhbmRpZGF0cyBBZG1pc3NpYmxlcycpIHtcclxuICAgICAgJCgnLmFkbWlzc2libGVfYWN0aW9uJykuc2hvdygnZmFzdCcpXHJcbiAgICAgICQoJy5hZG1pc19hY3Rpb24nKS5oaWRlKCdmYXN0JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnLmFkbWlzc2libGVfYWN0aW9uJykuaGlkZSgnZmFzdCcpXHJcbiAgICAgICAgJCgnLmFkbWlzX2FjdGlvbicpLnNob3coJ2Zhc3QnKVxyXG4gICAgfVxyXG4gICAgfSlcclxuJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhdGFibGVzX2NhbmRpZGF0X2FkbWlzc2libGVzIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBpZHByZWlucy5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgaWRwcmVpbnMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICBpZHByZWlucy5wdXNoKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhpZHByZWlucyk7XHJcbn0pXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YXRhYmxlc19jYW5kaWRhdF9hZG1pcyB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaWRBZG1pc3Npb25zLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICBpZEFkbWlzc2lvbnMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICBpZEFkbWlzc2lvbnMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgfVxyXG59KVxyXG4kKCcjYWRtaXNzaW9uJykub24oJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGlkcHJlaW5zLmxlbmd0aCA8IDEpe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGVyIHVuZSBvciBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2FkbWlzc2lvbiBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIFxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkcHJlaW5zJywgSlNPTi5zdHJpbmdpZnkoaWRwcmVpbnMpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYWRtaXNzaW9uL2FkbWlzc2lvbnMvbmV3XCIsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWRtaXNzaW9ucyBCaWVuIEVucmVnaXN0ZXInLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIHRhYmxlQWRtaXMuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgICAgfVxyXG59KVxyXG4kKCcjYW5udWxlcicpLm9uKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihpZEFkbWlzc2lvbnMubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXIgdW5lIG9yIHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjYW5udWxlciBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIFxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkQWRtaXNzaW9ucycsIEpTT04uc3RyaW5naWZ5KGlkQWRtaXNzaW9ucykpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hZG1pc3Npb24vYWRtaXNzaW9ucy9hbm51bGVyXCIsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIGlmKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuZXJyb3IsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0FkbWlzc2lvbnMgQmllbiBBbm51bGVyJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgICAgdGFibGVBZG1pcy5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1leGNsYW1hdGlvbi10cmlhbmdsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5cclxufSlcclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9ldHVkaWFudCIsImlkcHJlaW5zIiwiaWRBZG1pc3Npb25zIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImxhbmd1YWdlIiwidXJsIiwidGFibGVBZG1pcyIsIm9uIiwidGFiIiwiaHRtbCIsInNob3ciLCJoaWRlIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsImF0dHIiLCJzcGxpY2UiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImF4aW9zIiwicG9zdCIsInJlcXVlc3QiLCJkYXRhIiwicmVsb2FkIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9