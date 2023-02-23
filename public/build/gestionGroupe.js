(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestionGroupe"],{

/***/ "./assets/components/inscription/gestiongroupe.js":
/*!********************************************************!*\
  !*** ./assets/components/inscription/gestiongroupe.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

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
var id_inscription = false;
var idInscription = [];
var frais = [];
$(document).ready(function () {
  var table = $("#datatables_gestion_inscription").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/inscription/groupes/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      idInscription.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_inscription).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("#etablissement").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table.columns().search("");
            table.columns(0).search(id_etab).draw();
            response = "";

            if (!(id_etab != "")) {
              _context.next = 11;
              break;
            }

            _context.next = 7;
            return axios.get('/api/formation/' + id_etab);

          case 7:
            request = _context.sent;
            response = request.data;
            _context.next = 13;
            break;

          case 11:
            $('#annee').html("").select2();
            $('#promotion').html("").select2();

          case 13:
            $('#formation').html(response).select2();

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation, responseAnnee, responsePromotion, requestPromotion, requestAnnee;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            table.columns().search("");
            responseAnnee = "";
            responsePromotion = "";

            if (!(id_formation != "")) {
              _context2.next = 16;
              break;
            }

            table.columns(1).search(id_formation).draw();
            _context2.next = 8;
            return axios.get('/api/promotion/' + id_formation);

          case 8:
            requestPromotion = _context2.sent;
            responsePromotion = requestPromotion.data;
            _context2.next = 12;
            return axios.get('/api/annee/' + id_formation);

          case 12:
            requestAnnee = _context2.sent;
            responseAnnee = requestAnnee.data;
            _context2.next = 17;
            break;

          case 16:
            table.columns(0).search($("#etablissement").val()).draw();

          case 17:
            $('#annee').html(responseAnnee).select2();
            $('#promotion').html(responsePromotion).select2();

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            table.columns().search("");

            if ($(this).val() != "") {
              if ($("#annee").val() != "") {
                table.columns(3).search($("#annee").val());
              }

              table.columns(2).search($(this).val()).draw();
            } else {
              table.columns(1).search($("#formation").val()).draw();
            }

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#annee").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            table.columns().search("");

            if ($(this).val() != "") {
              table.columns(3).search($(this).val());
            }

            table.columns(2).search($("#promotion").val()).draw();

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $('body').on('click', '#datatables_gestion_inscription tbody tr', function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idInscription.indexOf(input.attr("id"));
      idInscription.splice(index, 1);
    } else {
      input.prop("checked", true);
      idInscription.push(input.attr("id"));
    }
  });
  $('body').on('dblclick', '#datatables_gestion_inscription tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_inscription = null;
    } else {
      $("#datatables_gestion_inscription tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_inscription = $(this).attr('id');
      getStatutInscription();
      getInscriptionInfos();
      getFrais();
    }
  });
  $("body").on('click', '#import', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              $('#import_affectation').modal("show");

            case 2:
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
  $('body').on('click', '#affectation_canvas', function () {
    window.open('/inscription/groupes/affectation_canvas', '_blank');
  });
  $('body').on('click', '#groupes_canvas', function () {
    window.open('/inscription/groupes/groupes_canvas', '_blank');
  });
  $("#import_groupes_save").on("submit", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#import_affectation .modal-body .alert");
              modalAlert.remove();
              icon = $("#affectation_enregistre i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context6.prev = 6;
              _context6.next = 9;
              return axios.post('/inscription/groupes/import_groupe', formData);

            case 9:
              request = _context6.sent;
              response = request.data;
              $("#import_affectation .modal-body").prepend("<div class=\"alert alert-success\">\n                    <p>".concat(response, "</p>\n                </div>"));
              table.ajax.reload(null, false);
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              _context6.next = 23;
              break;

            case 16:
              _context6.prev = 16;
              _context6.t0 = _context6["catch"](6);
              message = _context6.t0.response.data;
              console.log(_context6.t0, _context6.t0.response);
              modalAlert.remove();
              $("#import_affectation .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
              setTimeout(function () {
                $("#import_affectation .modal-body .alert").remove();
              }, 4000);

            case 24:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[6, 16]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("#export").on("click", function (e) {
    e.preventDefault(); // if($("#promotion").val() == "" || $("#annee").val() == ""){
    //     Toast.fire({
    //         icon: 'error',
    //         title: 'Merci de Choisir une Promotion, Une Année!',
    //     })
    //     return;
    // }
    // if($("#formation").val() == "" || $("#annee").val() == ""){
    //     Toast.fire({
    //         icon: 'error',
    //         title: 'Merci de Choisir une formation, Une Année!',
    //     })
    //     return;
    // }

    window.open('/inscription/groupes/exportAllgroupes', '_blank'); // window.open('/inscription/groupes/exportbyformation/'+$("#annee").val(), '_blank');
    // window.open('/inscription/groupes/exportbypromotion/'+$("#promotion").val()+'/'+$("#annee").val(), '_blank');
  }); // })
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

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function = global.Function;

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(isCallable(handler) ? handler : Function(handler), this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/inscription/gestiongroupe.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3BDRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsZ0JBQWdCLG1CQUFPLENBQUMsNkZBQWdDO0FBQ3hELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRDtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdDQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaW5zY3JpcHRpb24vZ2VzdGlvbmdyb3VwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfaW5zY3JpcHRpb24gPSBmYWxzZTtcclxuICAgIGxldCBpZEluc2NyaXB0aW9uID0gW107XHJcbiAgICBsZXQgZnJhaXMgPSBbXTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2luc2NyaXB0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2luc2NyaXB0aW9uL2dyb3VwZXMvbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb24uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9pbnNjcmlwdGlvbikuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpXHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjYW5uZWUnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlQW5uZWUgPSBcIlwiXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlUHJvbW90aW9uID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0UHJvbW90aW9uID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbW90aW9uID0gcmVxdWVzdFByb21vdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RBbm5lZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9hbm5lZS8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlQW5uZWUgPSByZXF1ZXN0QW5uZWUuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjYW5uZWUnKS5odG1sKHJlc3BvbnNlQW5uZWUpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZVByb21vdGlvbikuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjYW5uZWVcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuY29sdW1ucygzKS5zZWFyY2goJChcIiNhbm5lZVwiKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygyKS5zZWFyY2goJCh0aGlzKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkKFwiI2FubmVlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQodGhpcykudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YXRhYmxlc19nZXN0aW9uX2luc2NyaXB0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRJbnNjcmlwdGlvbi5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb24uc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICBpZEluc2NyaXB0aW9uLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhdGFibGVzX2dlc3Rpb25faW5zY3JpcHRpb24gdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2luc2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvbiB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2luc2NyaXB0aW9uID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICBnZXRTdGF0dXRJbnNjcmlwdGlvbigpO1xyXG4gICAgICAgICAgICBnZXRJbnNjcmlwdGlvbkluZm9zKCk7XHJcbiAgICAgICAgICAgIGdldEZyYWlzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCcjaW1wb3J0JywgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcjaW1wb3J0X2FmZmVjdGF0aW9uJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNhZmZlY3RhdGlvbl9jYW52YXMnLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICB3aW5kb3cub3BlbignL2luc2NyaXB0aW9uL2dyb3VwZXMvYWZmZWN0YXRpb25fY2FudmFzJywgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2dyb3VwZXNfY2FudmFzJywgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9pbnNjcmlwdGlvbi9ncm91cGVzL2dyb3VwZXNfY2FudmFzJywgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2ltcG9ydF9ncm91cGVzX3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydF9hZmZlY3RhdGlvbiAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2FmZmVjdGF0aW9uX2VucmVnaXN0cmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2luc2NyaXB0aW9uL2dyb3VwZXMvaW1wb3J0X2dyb3VwZScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjaW1wb3J0X2FmZmVjdGF0aW9uIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNpbXBvcnRfYWZmZWN0YXRpb24gLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNpbXBvcnRfYWZmZWN0YXRpb24gLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNleHBvcnRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGlmKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpID09IFwiXCIgfHwgJChcIiNhbm5lZVwiKS52YWwoKSA9PSBcIlwiKXtcclxuICAgICAgICAvLyAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgLy8gICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIC8vICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIHVuZSBQcm9tb3Rpb24sIFVuZSBBbm7DqWUhJyxcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZigkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSA9PSBcIlwiIHx8ICQoXCIjYW5uZWVcIikudmFsKCkgPT0gXCJcIil7XHJcbiAgICAgICAgLy8gICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIC8vICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAvLyAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciB1bmUgZm9ybWF0aW9uLCBVbmUgQW5uw6llIScsXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9pbnNjcmlwdGlvbi9ncm91cGVzL2V4cG9ydEFsbGdyb3VwZXMnLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgLy8gd2luZG93Lm9wZW4oJy9pbnNjcmlwdGlvbi9ncm91cGVzL2V4cG9ydGJ5Zm9ybWF0aW9uLycrJChcIiNhbm5lZVwiKS52YWwoKSwgJ19ibGFuaycpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5vcGVuKCcvaW5zY3JpcHRpb24vZ3JvdXBlcy9leHBvcnRieXByb21vdGlvbi8nKyQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKycvJyskKFwiI2FubmVlXCIpLnZhbCgpLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgLy8gfSlcclxuXHJcbn0pXHJcblxyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xyXG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XHJcblxyXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcclxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcclxuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxyXG59IDogW10uZm9yRWFjaDtcclxuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcclxuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcclxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcclxuICBmb3JFYWNoOiBmb3JFYWNoXHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcclxudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xyXG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcclxudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XHJcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcclxudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XHJcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XHJcblxyXG4vLyBAQHNlYXJjaCBsb2dpY1xyXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcclxuICByZXR1cm4gW1xyXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcclxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcclxuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xyXG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcclxuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcclxuICAgIH0sXHJcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXHJcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xyXG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XHJcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XHJcblxyXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XHJcblxyXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XHJcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcclxuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xyXG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XHJcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcclxuICAgIH1cclxuICBdO1xyXG59KTtcclxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xyXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xyXG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XHJcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XHJcblxyXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xyXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XHJcblxyXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcclxuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcclxuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xyXG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xyXG4gIH07XHJcbn07XHJcblxyXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XHJcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXHJcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XHJcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcclxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcclxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXHJcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX2luc2NyaXB0aW9uIiwiaWRJbnNjcmlwdGlvbiIsImZyYWlzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJmb3JFYWNoIiwiZSIsImZpbmQiLCJwcm9wIiwiYWRkQ2xhc3MiLCJsYW5ndWFnZSIsInVybCIsInNlbGVjdDIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJyZXNwb25zZUFubmVlIiwicmVzcG9uc2VQcm9tb3Rpb24iLCJyZXF1ZXN0UHJvbW90aW9uIiwicmVxdWVzdEFubmVlIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsImF0dHIiLCJzcGxpY2UiLCJwdXNoIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImdldFN0YXR1dEluc2NyaXB0aW9uIiwiZ2V0SW5zY3JpcHRpb25JbmZvcyIsImdldEZyYWlzIiwicHJldmVudERlZmF1bHQiLCJtb2RhbCIsIndpbmRvdyIsIm9wZW4iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwibW9kYWxBbGVydCIsInJlbW92ZSIsImljb24iLCJwb3N0IiwicHJlcGVuZCIsInJlbG9hZCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=