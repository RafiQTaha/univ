(self["webpackChunk"] = self["webpackChunk"] || []).push([["reglement"],{

/***/ "./assets/components/facture/reglement.js":
/*!************************************************!*\
  !*** ./assets/components/facture/reglement.js ***!
  \************************************************/
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
  var id_reglement = false;
  var ids_reglement = [];
  var table_reglement = $("#datables_reglement").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/facture/reglements/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      ids_reglement.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_reglement).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("#paiement").select2();
  $("#etablissement").select2();
  $("#bordereaux").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_reglement.columns(1).search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 13;
              break;
            }

            if ($("#paiement") && $("#paiement").val() != "") {
              table_reglement.columns(2).search($("#paiement").val());
            }

            if ($("#bordereaux").val() != "") {
              table_reglement.columns(3).search($("#bordereaux").val());
            }

            table_reglement.columns(0).search(id_etab).draw();
            _context.next = 9;
            return axios.get('/api/formation/' + id_etab);

          case 9:
            request = _context.sent;
            response = request.data;
            _context.next = 16;
            break;

          case 13:
            table_reglement.columns(0).search(id_etab).draw();

            if ($("#paiement") && $("#paiement").val() != "") {
              table_reglement.columns(2).search($("#paiement").val());
            }

            if ($("#bordereaux").val() != "") {
              table_reglement.columns(3).search($("#bordereaux").val());
            }

          case 16:
            $('#formation').html(response).select2();

          case 17:
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
            table_reglement.columns().search("");

            if ($("#paiement").val() != "") {
              table_reglement.columns(2).search($("#paiement").val());
            }

            if ($("#bordereaux").val() != "") {
              table_reglement.columns(3).search($("#bordereaux").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 13;
              break;
            }

            table_reglement.columns(1).search(id_formation).draw();
            _context2.next = 9;
            return axios.get('/api/promotion/' + id_formation);

          case 9:
            request = _context2.sent;
            response = request.data;
            _context2.next = 14;
            break;

          case 13:
            table_reglement.columns(0).search($("#etablissement").val()).draw();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#paiement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_paiement;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_paiement = $(this).val();
            table_reglement.columns(2).search(id_paiement).draw();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#bordereaux").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_bordereaux;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_bordereaux = $(this).val();
            table_reglement.columns(3).search(id_bordereaux).draw();

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $('body').on('dblclick', '#datables_reglement tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_reglement = null;
    } else {
      $("#datables_reglement tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_reglement = $(this).attr('id');
    }

    console.log(id_reglement);
  });
  $('body').on('click', '#datables_reglement tbody tr', function (e) {
    e.preventDefault();
    var input = $(this).find("input");

    if (input.hasClass('check_reg')) {
      return;
    } else {
      if (input.is(":checked")) {
        input.prop("checked", false);
        var index = ids_reglement.indexOf(input.attr("data-id"));
        ids_reglement.splice(index, 1);
      } else {
        input.prop("checked", true);
        ids_reglement.push(input.attr("data-id"));
      }
    }

    console.log(ids_reglement);
  });
  $("body").on("click", '#imprimer', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();

              if (id_reglement) {
                _context5.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context5.abrupt("return");

            case 4:
              window.open('/facture/reglements/reglementprint/' + id_reglement, '_blank');

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
  $("body").on("click", '#borderaux', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var modalAlert, icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              modalAlert = $("#modifier_org-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#borderaux i");
              icon.removeClass('fa-folder').addClass("fa-spinner fa-spin");

              if (!(ids_reglement.length === 0 || $("#etablissement").val() == "" || $('#formation').val() == "" || $("#paiement").val() == "")) {
                _context6.next = 8;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir l\'etablissement, la formation, mode de paiement et au moins une ligne, '
              });
              return _context6.abrupt("return");

            case 8:
              formData = new FormData();
              formData.append('ids_reglement', JSON.stringify(ids_reglement));
              _context6.prev = 10;
              _context6.next = 13;
              return axios.post("/facture/reglements/borderaux/" + $('#formation').val() + '/' + $("#paiement").val(), formData);

            case 13:
              request = _context6.sent;
              data = request.data;
              icon.addClass('fa-folder').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: 'Borderaux Bien Genere'
              });
              ids_reglement.length = [];
              window.open('/facture/reglements/printborderaux/' + data, '_blank');
              table_reglement.ajax.reload(null, false);
              _context6.next = 27;
              break;

            case 22:
              _context6.prev = 22;
              _context6.t0 = _context6["catch"](10);
              message = _context6.t0.response.data;
              console.log(_context6.t0, _context6.t0.response);
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 27:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[10, 22]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("body").on("click", '#imprimer_creance', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              window.open('/facture/reglements/creanceprint', '_blank');

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x3) {
      return _ref7.apply(this, arguments);
    };
  }());
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-37f3ea"], () => (__webpack_exec__("./assets/components/facture/reglement.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBTUgsQ0E1S0Q7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYixXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ZhY3R1cmUvcmVnbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfcmVnbGVtZW50ID0gZmFsc2U7XHJcbiAgICBsZXQgaWRzX3JlZ2xlbWVudCA9IFtdO1xyXG4gICAgdmFyIHRhYmxlX3JlZ2xlbWVudCA9ICQoXCIjZGF0YWJsZXNfcmVnbGVtZW50XCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgICAgIGFqYXg6IFwiL2ZhY3R1cmUvcmVnbGVtZW50cy9saXN0XCIsXHJcbiAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlkc19yZWdsZW1lbnQuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX3JlZ2xlbWVudCkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKFwiI3BhaWVtZW50XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2JvcmRlcmVhdXhcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygxKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAoJChcIiNwYWllbWVudFwiKSAmJiAkKFwiI3BhaWVtZW50XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3BhaWVtZW50XCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkKFwiI2JvcmRlcmVhdXhcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjYm9yZGVyZWF1eFwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBpZiAoJChcIiNwYWllbWVudFwiKSAmJiAkKFwiI3BhaWVtZW50XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3BhaWVtZW50XCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkKFwiI2JvcmRlcmVhdXhcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjYm9yZGVyZWF1eFwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI3BhaWVtZW50XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcGFpZW1lbnRcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkKFwiI2JvcmRlcmVhdXhcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygzKS5zZWFyY2goJChcIiNib3JkZXJlYXV4XCIpLnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygwKS5zZWFyY2goJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjcGFpZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3BhaWVtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygyKS5zZWFyY2goaWRfcGFpZW1lbnQpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2JvcmRlcmVhdXhcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2JvcmRlcmVhdXggPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDMpLnNlYXJjaChpZF9ib3JkZXJlYXV4KS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhYmxlc19yZWdsZW1lbnQgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3JlZ2xlbWVudCA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhYmxlc19yZWdsZW1lbnQgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9yZWdsZW1lbnQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkX3JlZ2xlbWVudCk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19yZWdsZW1lbnQgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc0NsYXNzKCdjaGVja19yZWcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkc19yZWdsZW1lbnQuaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfcmVnbGVtZW50LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWRzX3JlZ2xlbWVudC5wdXNoKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZHNfcmVnbGVtZW50KTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcjaW1wcmltZXInLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfcmVnbGVtZW50KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL3JlZ2xlbWVudHMvcmVnbGVtZW50cHJpbnQvJytpZF9yZWdsZW1lbnQsICdfYmxhbmsnKTtcclxuICAgIH0pO1xyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnI2JvcmRlcmF1eCcsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO2xldCBtb2RhbEFsZXJ0ID0gICQoXCIjbW9kaWZpZXJfb3JnLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2JvcmRlcmF1eCBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWZvbGRlcicpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGlmKGlkc19yZWdsZW1lbnQubGVuZ3RoID09PSAwfHwgJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpID09IFwiXCIgfHwgJCgnI2Zvcm1hdGlvbicpLnZhbCgpID09IFwiXCIgfHwgJChcIiNwYWllbWVudFwiKS52YWwoKSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBsXFwnZXRhYmxpc3NlbWVudCwgbGEgZm9ybWF0aW9uLCBtb2RlIGRlIHBhaWVtZW50IGV0IGF1IG1vaW5zIHVuZSBsaWduZSwgJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkc19yZWdsZW1lbnQnLCBKU09OLnN0cmluZ2lmeShpZHNfcmVnbGVtZW50KSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvZmFjdHVyZS9yZWdsZW1lbnRzL2JvcmRlcmF1eC9cIiskKCcjZm9ybWF0aW9uJykudmFsKCkrJy8nKyQoXCIjcGFpZW1lbnRcIikudmFsKCksIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZm9sZGVyJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdCb3JkZXJhdXggQmllbiBHZW5lcmUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZHNfcmVnbGVtZW50Lmxlbmd0aCA9IFtdO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvcmVnbGVtZW50cy9wcmludGJvcmRlcmF1eC8nK2RhdGEsICdfYmxhbmsnKTtcclxuICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNpbXByaW1lcl9jcmVhbmNlJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL3JlZ2xlbWVudHMvY3JlYW5jZXByaW50JywgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcblxyXG5cclxufSkiLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9yZWdsZW1lbnQiLCJpZHNfcmVnbGVtZW50IiwidGFibGVfcmVnbGVtZW50IiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJzZWxlY3QyIiwib24iLCJpZF9ldGFiIiwidmFsIiwiY29sdW1ucyIsInNlYXJjaCIsInJlc3BvbnNlIiwiZHJhdyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwiaWRfcGFpZW1lbnQiLCJpZF9ib3JkZXJlYXV4IiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dCIsImlzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ3aW5kb3ciLCJvcGVuIiwibW9kYWxBbGVydCIsInJlbW92ZSIsImxlbmd0aCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsInJlbG9hZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9