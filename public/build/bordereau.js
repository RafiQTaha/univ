(self["webpackChunk"] = self["webpackChunk"] || []).push([["bordereau"],{

/***/ "./assets/components/facture/bordereau.js":
/*!************************************************!*\
  !*** ./assets/components/facture/bordereau.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  var table_borderaux = $("#datables_borderaux").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/facture/bordereau/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_borderaux')) {
        var dt = $('#datables_borderaux').DataTable(); //Abort previous ajax request if it is still in process.

        var settings = dt.settings();

        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    },
    // drawCallback: function () {
    // ids_reglement.forEach((e) => {
    //     $("body tr#" + e)
    //     .find("input")
    //     .prop("checked", true);
    // });
    // $("body tr#" + id_bordereau).addClass('active_databales');
    // },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("#etablissement").select2();
  $("#paiement").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_borderaux.columns(0).search(id_etab).draw();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#paiement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_paiement;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_paiement = $(this).val();
            table_borderaux.columns(1).search(id_paiement).draw();

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $('body').on('click', '#datables_borderaux tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_bordereau = null;
    } else {
      $("#datables_borderaux tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_bordereau = $(this).attr('id');
    }
  });
  $("body").on("click", '#imprimer', function (e) {
    e.preventDefault();

    if (!id_bordereau) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de Choisir un bordereau!'
      });
      return;
    }

    window.open('/facture/bordereau/print_borderaux/' + id_bordereau, '_blank');
  });
  $("body").on("click", '#supprimer', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();

              if (id_bordereau) {
                _context4.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir un bordereau!'
              });
              return _context4.abrupt("return");

            case 4:
              Swal.fire({
                position: 'top-end',
                text: "Vous voulez vraiment supprimer cette enregistrement ?",
                icon: 'warning',
                confirmButtonColor: '#d33',
                confirmButtonText: 'Je Confirme'
              }).then( /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(result) {
                  var icon, request, data, message;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!result.isConfirmed) {
                            _context3.next = 18;
                            break;
                          }

                          icon = $("#supprimer i");
                          icon.removeClass('fa-trash').addClass("fa-spinner fa-spin");
                          _context3.prev = 3;
                          _context3.next = 6;
                          return axios.post("/facture/bordereau/supprimer_borderaux/" + id_bordereau);

                        case 6:
                          request = _context3.sent;
                          data = request.data;
                          icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
                          Toast.fire({
                            icon: 'success',
                            title: 'Borderaux Supprimer'
                          });
                          table_borderaux.ajax.reload(null, false);
                          _context3.next = 18;
                          break;

                        case 13:
                          _context3.prev = 13;
                          _context3.t0 = _context3["catch"](3);
                          message = _context3.t0.response.data;
                          icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
                          Toast.fire({
                            icon: 'error',
                            title: 'Some Error'
                          });

                        case 18:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, null, [[3, 13]]);
                }));

                return function (_x2) {
                  return _ref4.apply(this, arguments);
                };
              }());

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction', function () {
    if (!id_bordereau) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de Choisir un bordereau!'
      });
      return;
    }

    window.open('/facture/bordereau/extraction_borderaux/' + id_bordereau, '_blank');
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8"], () => (__webpack_exec__("./assets/components/facture/bordereau.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FEQztBQUVQQyxRQUFBQSxLQUFLLEVBQUU7QUFGQSxPQUFYO0FBSUE7QUFDSDs7QUFDSEMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksNkNBQTJDckMsWUFBdkQsRUFBcUUsUUFBckU7QUFDRCxHQVREO0FBVUgsQ0FoSUQ7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYixXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ZhY3R1cmUvYm9yZGVyZWF1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfYm9yZGVyZWF1ID0gZmFsc2U7XHJcbiAgICB2YXIgdGFibGVfYm9yZGVyYXV4ID0gJChcIiNkYXRhYmxlc19ib3JkZXJhdXhcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICAgICAgYWpheDogXCIvZmFjdHVyZS9ib3JkZXJlYXUvbGlzdFwiLFxyXG4gICAgICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICAgICAgcHJlRHJhd0NhbGxiYWNrOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCcjZGF0YWJsZXNfYm9yZGVyYXV4JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZHQgPSAkKCcjZGF0YWJsZXNfYm9yZGVyYXV4JykuRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSBkdC5zZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZHNfcmVnbGVtZW50LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gJChcImJvZHkgdHIjXCIgKyBpZF9ib3JkZXJlYXUpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjcGFpZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9ib3JkZXJhdXguY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcGFpZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3BhaWVtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9ib3JkZXJhdXguY29sdW1ucygxKS5zZWFyY2goaWRfcGFpZW1lbnQpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX2JvcmRlcmF1eCB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfYm9yZGVyZWF1ID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RhdGFibGVzX2JvcmRlcmF1eCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2JvcmRlcmVhdSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnI2ltcHJpbWVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX2JvcmRlcmVhdSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciB1biBib3JkZXJlYXUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvYm9yZGVyZWF1L3ByaW50X2JvcmRlcmF1eC8nK2lkX2JvcmRlcmVhdSwgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNzdXBwcmltZXInLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfYm9yZGVyZWF1KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIHVuIGJvcmRlcmVhdSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiVm91cyB2b3VsZXogdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGVucmVnaXN0cmVtZW50ID9cIixcclxuICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjZDMzJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdKZSBDb25maXJtZSdcclxuICAgICAgICAgIH0pLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3N1cHByaW1lciBpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRyYXNoJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvZmFjdHVyZS9ib3JkZXJlYXUvc3VwcHJpbWVyX2JvcmRlcmF1eC9cIitpZF9ib3JkZXJlYXUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10cmFzaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQm9yZGVyYXV4IFN1cHByaW1lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlX2JvcmRlcmF1eC5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdHJhc2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZighaWRfYm9yZGVyZWF1KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIHVuIGJvcmRlcmVhdSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvYm9yZGVyZWF1L2V4dHJhY3Rpb25fYm9yZGVyYXV4LycraWRfYm9yZGVyZWF1LCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG59KSIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXHJcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xyXG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xyXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XHJcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xyXG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcclxudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xyXG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcclxudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcclxuXHJcbi8vIEBAc2VhcmNoIGxvZ2ljXHJcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xyXG4gIHJldHVybiBbXHJcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxyXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xyXG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XHJcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xyXG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xyXG4gICAgfSxcclxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXHJcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcclxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XHJcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcclxuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcclxuXHJcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcclxuXHJcbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcclxuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xyXG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XHJcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcclxuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xyXG4gICAgfVxyXG4gIF07XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9ib3JkZXJlYXUiLCJ0YWJsZV9ib3JkZXJhdXgiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInNjcm9sbFgiLCJwcmVEcmF3Q2FsbGJhY2siLCJzZXR0aW5ncyIsImZuIiwiaXNEYXRhVGFibGUiLCJkdCIsImpxWEhSIiwiYWJvcnQiLCJsYW5ndWFnZSIsInVybCIsInNlbGVjdDIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsImlkX3BhaWVtZW50IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ3aW5kb3ciLCJvcGVuIiwidGV4dCIsImNvbmZpcm1CdXR0b25Db2xvciIsImNvbmZpcm1CdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiYXhpb3MiLCJwb3N0IiwicmVxdWVzdCIsImRhdGEiLCJyZWxvYWQiLCJtZXNzYWdlIiwicmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9