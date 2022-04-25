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
              table_gestion_borderaux.ajax.reload(null, false);
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              _context6.next = 22;
              break;

            case 18:
              _context6.prev = 18;
              _context6.t0 = _context6["catch"](8);
              message = _context6.t0.response.data;
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");

            case 22:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[8, 18]]);
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
              icon.removeClass('fa-telegram-plane').addClass("fa-spinner fa-spin");
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
              icon.addClass('fa-telegram-plane').removeClass("fa-spinner fa-spin");
              window.open('/uploads/honoraire/' + _response2, '_blank');
              _context7.next = 22;
              break;

            case 18:
              _context7.prev = 18;
              _context7.t0 = _context7["catch"](8);
              message = _context7.t0.response.data;
              icon.addClass('fa-telegram-plane').removeClass("fa-spinner fa-spin");

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-37f3ea"], () => (__webpack_exec__("./assets/components/honoraire/gestion_borderaux.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWQsRUFBbUNNLFdBQW5DLENBQStDLG9CQUEvQztBQUNBMEIsY0FBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksd0JBQXNCZCxVQUFsQyxFQUEyQyxRQUEzQztBQXJCMEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF1QnBCdUIsY0FBQUEsT0F2Qm9CLEdBdUJWLGFBQU12QixRQUFOLENBQWVLLElBdkJMO0FBd0IxQk0sY0FBQUEsSUFBSSxDQUFDOUIsUUFBTCxDQUFjLG1CQUFkLEVBQW1DTSxXQUFuQyxDQUErQyxvQkFBL0M7O0FBeEIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFsQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRCSCxDQXpMRDs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDL0Msb0NBQW9DLG1CQUFPLENBQUMsK0hBQWlEO0FBQzdGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaG9ub3JhaXJlL2dlc3Rpb25fYm9yZGVyYXV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfYm9yZGVyZWF1ID0gZmFsc2U7XHJcbiAgICBsZXQgaWRzX2JvcmRlcmF1eCA9IFtdO1xyXG4gICAgdmFyIHRhYmxlX2dlc3Rpb25fYm9yZGVyYXV4ID0gJChcIiNkYXRhYmxlc19nZXN0aW9uX2JvcmRlcmF1eFwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9ob25vcmFpcmUvZ2VzdGlvbl9ib3JkZXJhdXgvbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZHNfYm9yZGVyYXV4LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfYm9yZGVyZWF1KS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGFibGVzX2dlc3Rpb25fYm9yZGVyYXV4IHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9ib3JkZXJlYXUgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfZ2VzdGlvbl9ib3JkZXJhdXggdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9ib3JkZXJlYXUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9ib3JkZXJhdXggdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc0NsYXNzKCdjaGVja19zZWFuY2UnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkc19ib3JkZXJhdXguaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfYm9yZGVyYXV4LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWRzX2JvcmRlcmF1eC5wdXNoKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ib3JkZXJhdXguY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fYm9yZGVyYXV4LmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fYm9yZGVyYXV4LmNvbHVtbnMoKS5zZWFyY2goJycpLmRyYXcoKTtcclxuICAgICAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ib3JkZXJhdXguY29sdW1ucygzKS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fYm9yZGVyYXV4LmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ib3JkZXJhdXguY29sdW1ucygzKS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eC5jb2x1bW5zKDIpLnNlYXJjaChpZF9wcm9tb3Rpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fYm9yZGVyYXV4LmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjc2VtYWluZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgc2VtYWluZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ib3JkZXJhdXguY29sdW1ucygzKS5zZWFyY2goc2VtYWluZSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjaW1wcmltZXInLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfYm9yZGVyZWF1KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvaG9ub3JhaXJlL2NyZWF0aW9uX2JvcmRlcmF1eC9ob25vcmFpcmVfYm9yZGVyYXV4LycraWRfYm9yZGVyZWF1LCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNhbm51bGVyJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRzX2JvcmRlcmF1eC5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgYXUgbW9pbnMgdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYW5udWxlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRzX2JvcmRlcmF1eCcsIEpTT04uc3RyaW5naWZ5KGlkc19ib3JkZXJhdXgpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2hvbm9yYWlyZS9nZXN0aW9uX2JvcmRlcmF1eC9hbm51bGVyX2JvcmRlcmF1eCcsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fYm9yZGVyYXV4LmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10aW1lcy1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXhwb3J0ZXInLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZHNfYm9yZGVyYXV4Lmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBhdSBtb2lucyB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNleHBvcnRlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRlbGVncmFtLXBsYW5lJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZHNfYm9yZGVyYXV4JywgSlNPTi5zdHJpbmdpZnkoaWRzX2JvcmRlcmF1eCkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvaG9ub3JhaXJlL2dlc3Rpb25fYm9yZGVyYXV4L2V4cG9ydGVyX2JvcmRlcmF1eCcsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1JhcHBydCBCaWVuIEfDqW7DqXJlcicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRlbGVncmFtLXBsYW5lJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCcvdXBsb2Fkcy9ob25vcmFpcmUvJytyZXNwb25zZSwnX2JsYW5rJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRlbGVncmFtLXBsYW5lJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG59KSIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX2JvcmRlcmVhdSIsImlkc19ib3JkZXJhdXgiLCJ0YWJsZV9nZXN0aW9uX2JvcmRlcmF1eCIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsImxhbmd1YWdlIiwidXJsIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJzZWxlY3QyIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsInNlbWFpbmUiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwid2luZG93Iiwib3BlbiIsImxlbmd0aCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsInJlbG9hZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9