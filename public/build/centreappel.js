(self["webpackChunk"] = self["webpackChunk"] || []).push([["centreappel"],{

/***/ "./assets/components/etudiant/centre_appel.js":
/*!****************************************************!*\
  !*** ./assets/components/etudiant/centre_appel.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
$(document).ready(function () {
  var table = $("#datables_etudiant").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/etudiant/appel/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      if (id_etudiant) {
        $("body tr#" + id_etudiant).addClass('active_databales');
      }
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_etudiant')) {
        var dt = $('#datables_etudiant').DataTable(); //Abort previous ajax request if it is still in process.

        var settings = dt.settings();

        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('select').select2();
  var id_etudiant = false;
  $("#filtre_stat_condidat").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var stat_condidat;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            stat_condidat = $(this).val();
            table.columns(0).search(stat_condidat).draw();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));

  var getAppelRdv = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var icon, request, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              $('select').val("").trigger('change.select2');
              $('#dateappelle').val("");
              $('#noteBac').val("");
              icon = $("#date-d-appel i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context2.prev = 5;
              _context2.next = 8;
              return axios.get('/etudiant/appel/getAppelRdv_appel/' + id_etudiant);

            case 8:
              request = _context2.sent;
              data = request.data;
              console.log(data['date']);
              $('#statut_appel').val(data['statut_appel']).trigger('change.select2');
              $('#statut_condidat').val(data['statut_condidat']).trigger('change.select2');
              $('#statut_rdv').val(data['statut_rdv']).trigger('change.select2');
              $('#dateappelle').val(data['date']);
              $('#noteBac').val(data['noteBac']);
              $('#rdv').val(data['rdv']).trigger('change.select2');
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin");
              _context2.next = 22;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](5);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 20]]);
    }));

    return function getAppelRdv() {
      return _ref2.apply(this, arguments);
    };
  }();

  $('body').on('click', '#datables_etudiant tbody tr', function () {
    if ($(this).hasClass('active_databales')) {
      id_etudiant = null, $('#datables_etudiant tr').removeClass('active_databales');
      return;
    }

    $('#datables_etudiant tr').removeClass('active_databales');
    $(this).addClass('active_databales');
    id_etudiant = $(this).attr('id');
    getAppelRdv();
  });
  $("#etablissement").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context3.next = 7;
              break;
            }

            _context3.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context3.sent;
            response = request.data;

          case 7:
            $('#formation').html(response).select2();

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#date-d-appel").on("click", function () {
    if (!id_etudiant) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#date-d-appel-modal").modal("show");
  });
  $("body").on('submit', "#date_appele_save", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#date_appele_save")[0]);
              modalAlert = $("#date-d-appel-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#date_appele_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context4.prev = 6;
              _context4.next = 9;
              return axios.post('/etudiant/appel/rdvappel/' + id_etudiant, formData);

            case 9:
              request = _context4.sent;
              response = request.data;
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>".concat(response, "</p>\n            </div>")); // document.getElementById("date_appele_save").reset();
              // $('select').val("").trigger('change.select2');
              // $('#dateappelle').val("");
              // $('#noteBac').val("");

              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context4.next = 22;
              break;

            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](6);
              message = _context4.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 23:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[6, 16]]);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction', function () {
    window.open('/etudiant/appel/extraction_appels', '_blank');
  });
});

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8"], () => (__webpack_exec__("./assets/components/etudiant/centre_appel.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ldHVkaWFudC9jZW50cmVfYXBwZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxufSlcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YWJsZXNfZXR1ZGlhbnRcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvZXR1ZGlhbnQvYXBwZWwvbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKGlkX2V0dWRpYW50KSB7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfZXR1ZGlhbnQpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZURyYXdDYWxsYmFjazogZnVuY3Rpb24oc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCcjZGF0YWJsZXNfZXR1ZGlhbnQnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2RhdGFibGVzX2V0dWRpYW50JykuRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGR0LnNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcclxuICAgIGxldCBpZF9ldHVkaWFudCA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICAkKFwiI2ZpbHRyZV9zdGF0X2NvbmRpZGF0XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBzdGF0X2NvbmRpZGF0ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaChzdGF0X2NvbmRpZGF0KS5kcmF3KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGdldEFwcGVsUmR2ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICQoJ3NlbGVjdCcpLnZhbChcIlwiKS50cmlnZ2VyKCdjaGFuZ2Uuc2VsZWN0MicpO1xyXG4gICAgICAgICQoJyNkYXRlYXBwZWxsZScpLnZhbChcIlwiKTtcclxuICAgICAgICAkKCcjbm90ZUJhYycpLnZhbChcIlwiKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNkYXRlLWQtYXBwZWwgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2V0dWRpYW50L2FwcGVsL2dldEFwcGVsUmR2X2FwcGVsLycraWRfZXR1ZGlhbnQpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhWydkYXRlJ10pXHJcbiAgICAgICAgICAgICQoJyNzdGF0dXRfYXBwZWwnKS52YWwoZGF0YVsnc3RhdHV0X2FwcGVsJ10pLnRyaWdnZXIoJ2NoYW5nZS5zZWxlY3QyJyk7XHJcbiAgICAgICAgICAgICQoJyNzdGF0dXRfY29uZGlkYXQnKS52YWwoZGF0YVsnc3RhdHV0X2NvbmRpZGF0J10pLnRyaWdnZXIoJ2NoYW5nZS5zZWxlY3QyJyk7XHJcbiAgICAgICAgICAgICQoJyNzdGF0dXRfcmR2JykudmFsKGRhdGFbJ3N0YXR1dF9yZHYnXSkudHJpZ2dlcignY2hhbmdlLnNlbGVjdDInKTtcclxuICAgICAgICAgICAgJCgnI2RhdGVhcHBlbGxlJykudmFsKGRhdGFbJ2RhdGUnXSk7XHJcbiAgICAgICAgICAgICQoJyNub3RlQmFjJykudmFsKGRhdGFbJ25vdGVCYWMnXSk7XHJcbiAgICAgICAgICAgICQoJyNyZHYnKS52YWwoZGF0YVsncmR2J10pLnRyaWdnZXIoJ2NoYW5nZS5zZWxlY3QyJyk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX2V0dWRpYW50IHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgIGlkX2V0dWRpYW50ID0gbnVsbCxcclxuICAgICAgICAgICAgJCgnI2RhdGFibGVzX2V0dWRpYW50IHRyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZGF0YWJsZXNfZXR1ZGlhbnQgdHInKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICBpZF9ldHVkaWFudCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICBnZXRBcHBlbFJkdigpXHJcbiAgICB9KVxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKFwiY2hhbmdlXCIsYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNkYXRlLWQtYXBwZWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjZGF0ZV9hcHBlbGVfc2F2ZVwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjZGF0ZV9hcHBlbGVfc2F2ZVwiKVswXSk7XHJcbiAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2RhdGVfYXBwZWxlX3NhdmUgLmJ0biBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L2FwcGVsL3JkdmFwcGVsLycraWRfZXR1ZGlhbnQsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKFwiI2RhdGUtZC1hcHBlbC1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlX2FwcGVsZV9zYXZlXCIpLnJlc2V0KCk7XHJcbiAgICAgICAgLy8gJCgnc2VsZWN0JykudmFsKFwiXCIpLnRyaWdnZXIoJ2NoYW5nZS5zZWxlY3QyJyk7XHJcbiAgICAgICAgLy8gJCgnI2RhdGVhcHBlbGxlJykudmFsKFwiXCIpO1xyXG4gICAgICAgIC8vICQoJyNub3RlQmFjJykudmFsKFwiXCIpO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDI1MDApIFxyXG5cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgIHdpbmRvdy5vcGVuKCcvZXR1ZGlhbnQvYXBwZWwvZXh0cmFjdGlvbl9hcHBlbHMnLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG59KSIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJyZXNwb25zaXZlIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImlkX2V0dWRpYW50IiwiYWRkQ2xhc3MiLCJwcmVEcmF3Q2FsbGJhY2siLCJzZXR0aW5ncyIsImZuIiwiaXNEYXRhVGFibGUiLCJkdCIsImpxWEhSIiwiYWJvcnQiLCJsYW5ndWFnZSIsInVybCIsInNlbGVjdDIiLCJvbiIsInN0YXRfY29uZGlkYXQiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsImdldEFwcGVsUmR2IiwidHJpZ2dlciIsImljb24iLCJyZW1vdmVDbGFzcyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFzQ2xhc3MiLCJhdHRyIiwiaWRfZXRhYiIsInJlc3BvbnNlIiwiaHRtbCIsImZpcmUiLCJ0aXRsZSIsIm1vZGFsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm1vZGFsQWxlcnQiLCJyZW1vdmUiLCJwb3N0IiwicHJlcGVuZCIsInJlbG9hZCIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0Iiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=