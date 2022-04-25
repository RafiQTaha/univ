(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestionHonoraire"],{

/***/ "./assets/components/honoraire/gestion_honoraire.js":
/*!**********************************************************!*\
  !*** ./assets/components/honoraire/gestion_honoraire.js ***!
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
  var id_seance = false;
  var ids_seances = [];
  var table_gestion_honoraires = $("#datables_gestion_honoraires").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/honoraire/gestion/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      ids_seances.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_seance).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('body').on('dblclick', '#datables_gestion_honoraires tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_seance = null;
    } else {
      $("#datables_gestion_honoraires tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_seance = $(this).attr('id');
    }
  });
  $('body').on('click', '#datables_gestion_honoraires tbody tr', function (e) {
    e.preventDefault();
    var input = $(this).find("input");

    if (input.hasClass('check_seance')) {
      return;
    } else {
      if (input.is(":checked")) {
        input.prop("checked", false);
        var index = ids_seances.indexOf(input.attr("data-id"));
        ids_seances.splice(index, 1);
      } else {
        input.prop("checked", true);
        ids_seances.push(input.attr("data-id"));
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
            table_gestion_honoraires.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 15;
              break;
            }

            if ($("#statut").val() != "") {
              table_gestion_honoraires.columns(4).search($("#statut").val());
            }

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            table_gestion_honoraires.columns(0).search(id_etab).draw();
            _context.next = 11;
            return axios.get('/api/formation/' + id_etab);

          case 11:
            request = _context.sent;
            response = request.data;
            _context.next = 20;
            break;

          case 15:
            // table_creation_borderaux.columns().search('').draw();
            table_gestion_honoraires.columns().search("").draw();

            if ($("#statut").val() != "") {
              table_gestion_honoraires.columns(4).search($("#statut").val()).draw();
            }

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val()).draw();
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val()).draw();
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val()).draw();
            }

          case 20:
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 23:
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
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 14;
              break;
            }

            table_gestion_honoraires.columns(1).search(id_formation).draw();
            _context2.next = 10;
            return axios.get('/api/promotion/' + id_formation);

          case 10:
            request = _context2.sent;
            response = request.data;
            _context2.next = 15;
            break;

          case 14:
            table_gestion_honoraires.columns(0).search($("#etablissement").val()).draw();

          case 15:
            $('#semestre').html('').select2();
            $('#promotion').html(response).select2();

          case 17:
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
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 13;
              break;
            }

            table_gestion_honoraires.columns(2).search(id_promotion).draw();
            _context3.next = 9;
            return axios.get('/api/semestre/' + id_promotion);

          case 9:
            request = _context3.sent;
            response = request.data;
            _context3.next = 14;
            break;

          case 13:
            table_gestion_honoraires.columns(1).search($("#formation").val()).draw();

          case 14:
            $('#semestre').html('').select2();
            $('#semestre').html(response).select2();

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_semestre, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_semestre = $(this).val();
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            if (!(id_semestre != "")) {
              _context4.next = 13;
              break;
            }

            table_gestion_honoraires.columns(3).search(id_semestre).draw();
            _context4.next = 9;
            return axios.get('/api/module/' + id_semestre);

          case 9:
            request = _context4.sent;
            response = request.data;
            _context4.next = 14;
            break;

          case 13:
            table_gestion_honoraires.columns(2).search($("#promotion").val()).draw();

          case 14:
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#module").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_module, request;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_module = $(this).val();
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            if (!(id_module != "")) {
              _context5.next = 13;
              break;
            }

            table_gestion_honoraires.columns(4).search(id_module).draw();
            _context5.next = 9;
            return axios.get('/api/element/' + id_module);

          case 9:
            request = _context5.sent;
            response = request.data;
            _context5.next = 14;
            break;

          case 13:
            table_gestion_honoraires.columns(3).search($("#semestre").val()).draw();

          case 14:
            $('#element').html(response).select2();

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#element").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_element;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_element = $(this).val();
            table_gestion_honoraires.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_honoraires.columns(5).search($("#semaine").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_honoraires.columns(6).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_honoraires.columns(7).search($("#grade").val());
            }

            table_gestion_honoraires.columns(5).search(id_element).draw();

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#statut").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var statut;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            statut = $(this).val();
            table_gestion_honoraires.columns(4).search(statut).draw();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#semaine").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var semaine;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            semaine = $(this).val();
            table_gestion_honoraires.columns(5).search(semaine).draw();

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("#professeur").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var id_prof;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id_prof = $(this).val();
            table_gestion_honoraires.columns(6).search(id_prof).draw();

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#grade").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var grade;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            grade = $(this).val();
            table_gestion_honoraires.columns(7).search(grade).draw();

          case 2:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $('body').on('click', '#annuler', /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var icon, formData, request, _response, message;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault();

              if (!(ids_seances.length === 0)) {
                _context11.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context11.abrupt("return");

            case 4:
              icon = $("#annuler i");
              icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_seances', JSON.stringify(ids_seances));
              _context11.prev = 8;
              _context11.next = 11;
              return axios.post('/honoraire/gestion/annuler_honoraires', formData);

            case 11:
              request = _context11.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: 'Honoraire Anullée Avec Succée'
              });
              table_gestion_honoraires.ajax.reload(null, false);
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              _context11.next = 22;
              break;

            case 18:
              _context11.prev = 18;
              _context11.t0 = _context11["catch"](8);
              message = _context11.t0.response.data;
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");

            case 22:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[8, 18]]);
    }));

    return function (_x) {
      return _ref11.apply(this, arguments);
    };
  }());
  $('body').on('click', '#regle', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var icon, formData, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();

              if (!(ids_seances.length === 0)) {
                _context12.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context12.abrupt("return");

            case 4:
              icon = $("#regle i");
              icon.removeClass('a-plus-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_seances', JSON.stringify(ids_seances));
              _context12.prev = 8;
              _context12.next = 11;
              return axios.post('/honoraire/gestion/regle_honoraires', formData);

            case 11:
              request = _context12.sent;
              _response2 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response2
              });
              table_gestion_honoraires.ajax.reload(null, false);
              icon.addClass('a-plus-circle').removeClass("fa-spinner fa-spin");
              _context12.next = 22;
              break;

            case 18:
              _context12.prev = 18;
              _context12.t0 = _context12["catch"](8);
              message = _context12.t0.response.data;
              icon.addClass('a-plus-circle').removeClass("fa-spinner fa-spin");

            case 22:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[8, 18]]);
    }));

    return function (_x2) {
      return _ref12.apply(this, arguments);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-37f3ea"], () => (__webpack_exec__("./assets/components/honoraire/gestion_honoraire.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eFJEOzs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLHFGQUE0QjtBQUMvQyxvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ob25vcmFpcmUvZ2VzdGlvbl9ob25vcmFpcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIGxldCBpZF9zZWFuY2UgPSBmYWxzZTtcclxuICAgIGxldCBpZHNfc2VhbmNlcyA9IFtdO1xyXG4gICAgdmFyIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcyA9ICQoXCIjZGF0YWJsZXNfZ2VzdGlvbl9ob25vcmFpcmVzXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2hvbm9yYWlyZS9nZXN0aW9uL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWRzX3NlYW5jZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9zZWFuY2UpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5vbignZGJsY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9ob25vcmFpcmVzIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zZWFuY2UgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfZ2VzdGlvbl9ob25vcmFpcmVzIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfc2VhbmNlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX2dlc3Rpb25faG9ub3JhaXJlcyB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZiAoaW5wdXQuaGFzQ2xhc3MoJ2NoZWNrX3NlYW5jZScpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRzX3NlYW5jZXMuaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfc2VhbmNlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlkc19zZWFuY2VzLnB1c2goaW5wdXQuYXR0cihcImRhdGEtaWRcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjc3RhdHV0XCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNCkuc2VhcmNoKCQoXCIjc3RhdHV0XCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gdGFibGVfY3JlYXRpb25fYm9yZGVyYXV4LmNvbHVtbnMoKS5zZWFyY2goJycpLmRyYXcoKTtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgICAgICBpZigkKFwiI3N0YXR1dFwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDQpLnNlYXJjaCgkKFwiI3N0YXR1dFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDIpLnNlYXJjaChpZF9wcm9tb3Rpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDEpLnNlYXJjaCgkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc2VtZXN0cmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMykuc2VhcmNoKGlkX3NlbWVzdHJlKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycraWRfc2VtZXN0cmUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygyKS5zZWFyY2goJChcIiNwcm9tb3Rpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI21vZHVsZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX21vZHVsZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDQpLnNlYXJjaChpZF9tb2R1bGUpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjc2VtZXN0cmVcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNlbGVtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9lbGVtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDUpLnNlYXJjaChpZF9lbGVtZW50KS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNzdGF0dXRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IHN0YXR1dCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNCkuc2VhcmNoKHN0YXR1dCkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc2VtYWluZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgc2VtYWluZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9ob25vcmFpcmVzLmNvbHVtbnMoNSkuc2VhcmNoKHNlbWFpbmUpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb2Zlc3NldXJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb2YgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDYpLnNlYXJjaChpZF9wcm9mKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNncmFkZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgZ3JhZGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcy5jb2x1bW5zKDcpLnNlYXJjaChncmFkZSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjYW5udWxlcicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkc19zZWFuY2VzLmxlbmd0aCA9PT0gMCApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIGF1IG1vaW5zIHVuZSBsaWduZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYW5udWxlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRzX3NlYW5jZXMnLCBKU09OLnN0cmluZ2lmeShpZHNfc2VhbmNlcykpOyBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2hvbm9yYWlyZS9nZXN0aW9uL2FubnVsZXJfaG9ub3JhaXJlcycsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0hvbm9yYWlyZSBBbnVsbMOpZSBBdmVjIFN1Y2PDqWUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10aW1lcy1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjcmVnbGUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZHNfc2VhbmNlcy5sZW5ndGggPT09IDAgKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBhdSBtb2lucyB1bmUgbGlnbmUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3JlZ2xlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnYS1wbHVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRzX3NlYW5jZXMnLCBKU09OLnN0cmluZ2lmeShpZHNfc2VhbmNlcykpOyBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2hvbm9yYWlyZS9nZXN0aW9uL3JlZ2xlX2hvbm9yYWlyZXMnLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX2hvbm9yYWlyZXMuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2EtcGx1cy1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnYS1wbHVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxufSkiLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9zZWFuY2UiLCJpZHNfc2VhbmNlcyIsInRhYmxlX2dlc3Rpb25faG9ub3JhaXJlcyIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsImxhbmd1YWdlIiwidXJsIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJzZWxlY3QyIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsImlkX3NlbWVzdHJlIiwiaWRfbW9kdWxlIiwiaWRfZWxlbWVudCIsInN0YXR1dCIsInNlbWFpbmUiLCJpZF9wcm9mIiwiZ3JhZGUiLCJsZW5ndGgiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwicmVsb2FkIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=