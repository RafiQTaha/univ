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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsQkEseUJBQXlCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ3BFLGtCQUFrQixtQkFBTyxDQUFDLHFGQUE0QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUE2RDtBQUNqRTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pc3Npb24vYWRtaXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG50b2FzdDogdHJ1ZSxcclxucG9zaXRpb246ICd0b3AtZW5kJyxcclxuc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG50aW1lcjogMzAwMCxcclxudGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxufSxcclxufSlcclxubGV0IGlkX2V0dWRpYW50ID0gZmFsc2U7XHJcbmxldCBpZHByZWlucyA9IFtdO1xyXG5sZXQgaWRBZG1pc3Npb25zID0gW107XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG52YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZXNfY2FuZGlkYXRfYWRtaXNzaWJsZXNcIikuRGF0YVRhYmxlKHtcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgIF0sXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgYWpheDogXCIvYWRtaXNzaW9uL2FkbWlzc2lvbnMvY2FuZGlkYXRfYWRkbWlzc2libGVfbGlzdFwiLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlkcHJlaW5zLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgfSk7XHJcbnZhciB0YWJsZUFkbWlzID0gJChcIiNkYXRhdGFibGVzX2NhbmRpZGF0X2FkbWlzXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICBdLFxyXG4gICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgIGFqYXg6IFwiL2FkbWlzc2lvbi9hZG1pc3Npb25zL2NhbmRpZGF0X2FkbWlzX2xpc3RcIixcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAvLyBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICBpZHByZWlucy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgIC8vICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgLy8gICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9LFxyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgfSxcclxuICAgIH0pO1xyXG4kKCcubmF2LXBpbGxzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCh0aGlzKS50YWIoJ3Nob3cnKVxyXG4gICAgaWYgKCQodGhpcykuaHRtbCgpID09ICdDYW5kaWRhdHMgQWRtaXNzaWJsZXMnKSB7XHJcbiAgICAgICQoJy5hZG1pc3NpYmxlX2FjdGlvbicpLnNob3coJ2Zhc3QnKVxyXG4gICAgICAkKCcuYWRtaXNfYWN0aW9uJykuaGlkZSgnZmFzdCcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJy5hZG1pc3NpYmxlX2FjdGlvbicpLmhpZGUoJ2Zhc3QnKVxyXG4gICAgICAgICQoJy5hZG1pc19hY3Rpb24nKS5zaG93KCdmYXN0JylcclxuICAgIH1cclxuICAgIH0pXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YXRhYmxlc19jYW5kaWRhdF9hZG1pc3NpYmxlcyB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaWRwcmVpbnMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIGlkcHJlaW5zLnNwbGljZShpbmRleCwxKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgaWRwcmVpbnMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coaWRwcmVpbnMpO1xyXG59KVxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGF0YWJsZXNfY2FuZGlkYXRfYWRtaXMgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGlkQWRtaXNzaW9ucy5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgaWRBZG1pc3Npb25zLnNwbGljZShpbmRleCwxKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgaWRBZG1pc3Npb25zLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgIH1cclxufSlcclxuJCgnI2FkbWlzc2lvbicpLm9uKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihpZHByZWlucy5sZW5ndGggPCAxKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hlciB1bmUgb3IgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNhZG1pc3Npb24gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICBcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZHByZWlucycsIEpTT04uc3RyaW5naWZ5KGlkcHJlaW5zKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FkbWlzc2lvbi9hZG1pc3Npb25zL25ld1wiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0FkbWlzc2lvbnMgQmllbiBFbnJlZ2lzdGVyJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICB0YWJsZUFkbWlzLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgIH1cclxufSlcclxuJCgnI2FubnVsZXInKS5vbignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoaWRBZG1pc3Npb25zLmxlbmd0aCA8IDEpe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGVyIHVuZSBvciBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2FubnVsZXIgaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICBcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZEFkbWlzc2lvbnMnLCBKU09OLnN0cmluZ2lmeShpZEFkbWlzc2lvbnMpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYWRtaXNzaW9uL2FkbWlzc2lvbnMvYW5udWxlclwiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICBpZihkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLmVycm9yLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBZG1pc3Npb25zIEJpZW4gQW5udWxlcicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgIHRhYmxlQWRtaXMuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZXhjbGFtYXRpb24tdHJpYW5nbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuXHJcbn0pXHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XHJcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcclxuXHJcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xyXG5cclxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxyXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xyXG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXHJcbn0gOiBbXS5mb3JFYWNoO1xyXG4iLCIvKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAtLSBvbGQgSUUsIFdTSCAqL1xyXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XHJcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xyXG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xyXG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xyXG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XHJcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcclxudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XHJcblxyXG52YXIgR1QgPSAnPic7XHJcbnZhciBMVCA9ICc8JztcclxudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xyXG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XHJcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcclxuXHJcbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xyXG5cclxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcclxufTtcclxuXHJcbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXHJcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xyXG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcclxuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcclxuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xyXG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7IC8vIGF2b2lkIG1lbW9yeSBsZWFrXHJcbiAgcmV0dXJuIHRlbXA7XHJcbn07XHJcblxyXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXHJcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcclxuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XHJcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xyXG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XHJcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XHJcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcclxuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XHJcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcclxuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xyXG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xyXG59O1xyXG5cclxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxyXG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XHJcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxyXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxyXG4vLyBhdm9pZCBJRSBHQyBidWdcclxudmFyIGFjdGl2ZVhEb2N1bWVudDtcclxudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICB0cnkge1xyXG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cclxuICBOdWxsUHJvdG9PYmplY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCdcclxuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxyXG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcclxuICAgICAgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKVxyXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxyXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XHJcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XHJcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xyXG59O1xyXG5cclxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xyXG5cclxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XHJcbiAgdmFyIHJlc3VsdDtcclxuICBpZiAoTyAhPT0gbnVsbCkge1xyXG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XHJcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xyXG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcclxuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcclxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xyXG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcclxuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xyXG59O1xyXG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcclxudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xyXG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XHJcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XHJcblxyXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXHJcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xyXG4gIGFuT2JqZWN0KE8pO1xyXG4gIHZhciBwcm9wcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcclxuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XHJcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xyXG4gIHZhciBpbmRleCA9IDA7XHJcbiAgdmFyIGtleTtcclxuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgcHJvcHNba2V5XSk7XHJcbiAgcmV0dXJuIE87XHJcbn07XHJcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcclxudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcclxuXHJcbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcclxuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcclxuICBmb3JFYWNoOiBmb3JFYWNoXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfZXR1ZGlhbnQiLCJpZHByZWlucyIsImlkQWRtaXNzaW9ucyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJsYW5ndWFnZSIsInVybCIsInRhYmxlQWRtaXMiLCJvbiIsInRhYiIsImh0bWwiLCJzaG93IiwiaGlkZSIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJhdHRyIiwic3BsaWNlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJheGlvcyIsInBvc3QiLCJyZXF1ZXN0IiwiZGF0YSIsInJlbG9hZCIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==