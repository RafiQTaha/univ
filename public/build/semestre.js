(self["webpackChunk"] = self["webpackChunk"] || []).push([["semestre"],{

/***/ "./assets/components/parametre/semestre.js":
/*!*************************************************!*\
  !*** ./assets/components/parametre/semestre.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

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
  var id_semestre;
  var table = $("#datatables_gestion_semestre").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/semestre/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("#etablissement").select2();
  $('body').on('click', '#datatables_gestion_semestre tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_semestre = null;
    } else {
      $("#datatables_gestion_semestre tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_semestre = $(this).attr('id');
    }
  });
  $("#etablissement").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context.sent;
            response = request.data;
            table.columns(0).search($(this).val()).draw();
            _context.next = 11;
            break;

          case 10:
            table.columns(0).search("").draw();

          case 11:
            $('#formation').html(response).select2();

          case 12:
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
            response = "";

            if (!(id_formation != "")) {
              _context2.next = 10;
              break;
            }

            table.columns(1).search(id_formation).draw();
            _context2.next = 6;
            return axios.get('/api/promotion/' + id_formation);

          case 6:
            request = _context2.sent;
            response = request.data;
            _context2.next = 11;
            break;

          case 10:
            table.columns(1).search("").draw();

          case 11:
            $('#promotion').html(response).select2();

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_promotion;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_promotion = $(this).val();

            if (id_promotion != "") {
              table.columns(2).search(id_promotion).draw();
            } else {
              table.columns(2).search("").draw();
            }

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#ajouter").on("click", function () {
    // alert($("#formation").val())
    if (!$("#promotion").val() || $("#promotion").val() == "") {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez choissir une promotion!'
      });
      return;
    }

    $("#ajout_modal").modal("show");
  });
  $("#modifier").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (id_semestre) {
              _context4.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!'
            });
            return _context4.abrupt("return");

          case 3:
            icon = $("#modifier i");
            _context4.prev = 4;
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            _context4.next = 8;
            return axios.get('/parametre/semestre/details/' + id_semestre);

          case 8:
            request = _context4.sent;
            response = request.data;
            console.log(response);
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("#modifier_modal #designation").val(response.designation);

            if (response.active == 1) {
              $("#modifier_modal #active").prop("checked", true);
            } else {
              $("#modifier_modal #active").prop("checked", false);
            }

            $("#modifier_modal").modal("show");
            _context4.next = 23;
            break;

          case 17:
            _context4.prev = 17;
            _context4.t0 = _context4["catch"](4);
            console.log(_context4.t0, _context4.t0.response);
            message = _context4.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 17]]);
  })));
  $("#save").on("submit", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#save")[0]);
              formData.append("promotion_id", $("#promotion").val());
              icon = $("#save i");
              _context5.prev = 4;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context5.next = 8;
              return axios.post('/parametre/semestre/new', formData);

            case 8:
              request = _context5.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              id_semestre = false;
              $("#ajout_modal").modal("hide");
              _context5.next = 23;
              break;

            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5["catch"](4);
              console.log(_context5.t0, _context5.t0.response);
              message = _context5.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[4, 17]]);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }());
  $("#udpate").on("submit", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#udpate")[0]);
              icon = $("#udpate i");
              _context6.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context6.next = 7;
              return axios.post('/parametre/semestre/update/' + id_semestre, formData);

            case 7:
              request = _context6.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload();
              id_semestre = false;
              $("#modifier_modal").modal("hide");
              _context6.next = 21;
              break;

            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](3);
              console.log(_context6.t0, _context6.t0.response);
              message = _context6.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 21:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[3, 15]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("#supprimer").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var icon, res, request, response, message;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (id_semestre) {
              _context7.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!'
            });
            return _context7.abrupt("return");

          case 3:
            icon = $("#supprimer i");
            res = confirm('Vous voulez vraiment supprimer cette semestre ?');

            if (!(res == 1)) {
              _context7.next = 24;
              break;
            }

            _context7.prev = 6;
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            _context7.next = 10;
            return axios.post('/parametre/semestre/delete/' + id_semestre);

          case 10:
            request = _context7.sent;
            response = request.data;
            table.ajax.reload();
            id_etab = false;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            Toast.fire({
              icon: 'success',
              title: 'Semestre bien Supprimer'
            });
            _context7.next = 24;
            break;

          case 18:
            _context7.prev = 18;
            _context7.t0 = _context7["catch"](6);
            console.log(_context7.t0, _context7.t0.response);
            message = _context7.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

          case 24:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[6, 18]]);
  })));
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8"], () => (__webpack_exec__("./assets/components/parametre/semestre.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VtZXN0cmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXO0FBQ3JCQyxFQUFBQSxLQUFLLEVBQUUsSUFEYztBQUVyQkMsRUFBQUEsUUFBUSxFQUFFLFNBRlc7QUFHckJDLEVBQUFBLGlCQUFpQixFQUFFLEtBSEU7QUFJckJDLEVBQUFBLEtBQUssRUFBRSxJQUpjO0FBS3JCQyxFQUFBQSxnQkFBZ0IsRUFBRSxJQUxHO0FBTXJCQyxFQUFBQSxPQUFPLEVBQUUsaUJBQUNMLEtBQUQsRUFBVztBQUNoQkEsSUFBQUEsS0FBSyxDQUFDTSxnQkFBTixDQUF1QixZQUF2QixFQUFxQ1IsSUFBSSxDQUFDUyxTQUExQztBQUNBUCxJQUFBQSxLQUFLLENBQUNNLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDUixJQUFJLENBQUNVLFdBQTFDO0FBQ0g7QUFUb0IsQ0FBWCxDQUFkO0FBYUlDLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBYTtBQUMvQixNQUFJQyxXQUFKO0FBRUEsTUFBSUMsS0FBSyxHQUFHSixDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ0ssU0FBbEMsQ0FBNEM7QUFDcERDLElBQUFBLFVBQVUsRUFBRSxDQUNSLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixjQUF0QixDQURRLEVBRVIsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlEsQ0FEd0M7QUFLcERDLElBQUFBLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FBRCxDQUw2QztBQU1wREMsSUFBQUEsSUFBSSxFQUFFLDBCQU44QztBQU9wREMsSUFBQUEsVUFBVSxFQUFFLElBUHdDO0FBUXBEQyxJQUFBQSxVQUFVLEVBQUUsSUFSd0M7QUFTcERDLElBQUFBLFdBQVcsRUFBRSxJQVR1QztBQVVwREMsSUFBQUEsUUFBUSxFQUFFO0FBQ05DLE1BQUFBLEdBQUcsRUFBRTtBQURDO0FBVjBDLEdBQTVDLENBQVo7QUFjQWIsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JjLE9BQXBCO0FBQ0FkLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWUsRUFBVixDQUFhLE9BQWIsRUFBcUIsdUNBQXJCLEVBQTZELFlBQVk7QUFDckU7QUFFQSxRQUFHZixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnQixRQUFSLENBQWlCLGtCQUFqQixDQUFILEVBQXlDO0FBQ3JDaEIsTUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUIsV0FBUixDQUFvQixrQkFBcEI7QUFDQWQsTUFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDSCxLQUhELE1BR087QUFDSEgsTUFBQUEsQ0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNpQixXQUEzQyxDQUF1RCxrQkFBdkQ7QUFDQWpCLE1BQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtCLFFBQVIsQ0FBaUIsa0JBQWpCO0FBQ0FmLE1BQUFBLFdBQVcsR0FBR0gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUIsSUFBUixDQUFhLElBQWIsQ0FBZDtBQUNIO0FBRUosR0FaRDtBQWFBbkIsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JlLEVBQXBCLENBQXVCLFFBQXZCLHVFQUFnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEJLLFlBQUFBLE9BRHNCLEdBQ1pwQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxQixHQUFSLEVBRFk7QUFFeEJDLFlBQUFBLFFBRndCLEdBRWIsRUFGYTs7QUFBQSxrQkFHekJGLE9BQU8sSUFBSSxFQUhjO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUZHLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFrQkosT0FBNUIsQ0FKRTs7QUFBQTtBQUlsQkssWUFBQUEsT0FKa0I7QUFLeEJILFlBQUFBLFFBQVEsR0FBR0csT0FBTyxDQUFDQyxJQUFuQjtBQUNBdEIsWUFBQUEsS0FBSyxDQUFDdUIsT0FBTixDQUFjLENBQWQsRUFBaUJDLE1BQWpCLENBQXdCNUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUIsR0FBUixFQUF4QixFQUF1Q1EsSUFBdkM7QUFOd0I7QUFBQTs7QUFBQTtBQVF4QnpCLFlBQUFBLEtBQUssQ0FBQ3VCLE9BQU4sQ0FBYyxDQUFkLEVBQWlCQyxNQUFqQixDQUF3QixFQUF4QixFQUE0QkMsSUFBNUI7O0FBUndCO0FBVTVCN0IsWUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjhCLElBQWhCLENBQXFCUixRQUFyQixFQUErQlIsT0FBL0I7O0FBVjRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWhDO0FBWUFkLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JlLEVBQWhCLENBQW1CLFFBQW5CLHVFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJnQixZQUFBQSxZQURtQixHQUNKL0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUIsR0FBUixFQURJO0FBRXJCQyxZQUFBQSxRQUZxQixHQUVWLEVBRlU7O0FBQUEsa0JBSXRCUyxZQUFZLElBQUksRUFKTTtBQUFBO0FBQUE7QUFBQTs7QUFLckIzQixZQUFBQSxLQUFLLENBQUN1QixPQUFOLENBQWMsQ0FBZCxFQUFpQkMsTUFBakIsQ0FBd0JHLFlBQXhCLEVBQXNDRixJQUF0QztBQUxxQjtBQUFBLG1CQU1DTixLQUFLLENBQUNDLEdBQU4sQ0FBVSxvQkFBa0JPLFlBQTVCLENBTkQ7O0FBQUE7QUFNZk4sWUFBQUEsT0FOZTtBQU9yQkgsWUFBQUEsUUFBUSxHQUFHRyxPQUFPLENBQUNDLElBQW5CO0FBUHFCO0FBQUE7O0FBQUE7QUFTckJ0QixZQUFBQSxLQUFLLENBQUN1QixPQUFOLENBQWMsQ0FBZCxFQUFpQkMsTUFBakIsQ0FBd0IsRUFBeEIsRUFBNEJDLElBQTVCOztBQVRxQjtBQVd6QjdCLFlBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I4QixJQUFoQixDQUFxQlIsUUFBckIsRUFBK0JSLE9BQS9COztBQVh5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3QjtBQWNBZCxFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCZSxFQUFoQixDQUFtQixRQUFuQix1RUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CaUIsWUFBQUEsWUFEbUIsR0FDSmhDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLEdBQVIsRUFESTs7QUFHekIsZ0JBQUdXLFlBQVksSUFBSSxFQUFuQixFQUF1QjtBQUNuQjVCLGNBQUFBLEtBQUssQ0FBQ3VCLE9BQU4sQ0FBYyxDQUFkLEVBQWlCQyxNQUFqQixDQUF3QkksWUFBeEIsRUFBc0NILElBQXRDO0FBRUgsYUFIRCxNQUdPO0FBQ0h6QixjQUFBQSxLQUFLLENBQUN1QixPQUFOLENBQWMsQ0FBZCxFQUFpQkMsTUFBakIsQ0FBd0IsRUFBeEIsRUFBNEJDLElBQTVCO0FBQ0g7O0FBUndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCO0FBV0E3QixFQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNlLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsWUFBTTtBQUM1QjtBQUNBLFFBQUcsQ0FBQ2YsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnFCLEdBQWhCLEVBQUQsSUFBMEJyQixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCcUIsR0FBaEIsTUFBeUIsRUFBdEQsRUFBeUQ7QUFDckRqQyxNQUFBQSxLQUFLLENBQUM2QyxJQUFOLENBQVc7QUFDVEMsUUFBQUEsSUFBSSxFQUFFLE9BREc7QUFFVEMsUUFBQUEsS0FBSyxFQUFFO0FBRkUsT0FBWDtBQUlBO0FBQ0g7O0FBQ0RuQyxJQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0MsS0FBbEIsQ0FBd0IsTUFBeEI7QUFFSCxHQVhEO0FBWUFwQyxFQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVlLEVBQWYsQ0FBa0IsT0FBbEIsdUVBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUNuQlosV0FEbUI7QUFBQTtBQUFBO0FBQUE7O0FBRW5CZixZQUFBQSxLQUFLLENBQUM2QyxJQUFOLENBQVc7QUFDVEMsY0FBQUEsSUFBSSxFQUFFLE9BREc7QUFFVEMsY0FBQUEsS0FBSyxFQUFFO0FBRkUsYUFBWDtBQUZtQjs7QUFBQTtBQVFqQkQsWUFBQUEsSUFSaUIsR0FRVmxDLENBQUMsQ0FBQyxhQUFELENBUlM7QUFBQTtBQVduQmtDLFlBQUFBLElBQUksQ0FBQ0csTUFBTCxDQUFZLFNBQVosRUFBdUJuQixRQUF2QixDQUFnQyxxQkFBaEM7QUFYbUI7QUFBQSxtQkFZR0ssS0FBSyxDQUFDQyxHQUFOLENBQVUsaUNBQStCckIsV0FBekMsQ0FaSDs7QUFBQTtBQVlic0IsWUFBQUEsT0FaYTtBQWFiSCxZQUFBQSxRQWJhLEdBYUZHLE9BQU8sQ0FBQ0MsSUFiTjtBQWNuQlksWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlqQixRQUFaO0FBQ0FZLFlBQUFBLElBQUksQ0FBQ2hCLFFBQUwsQ0FBYyxTQUFkLEVBQXlCRCxXQUF6QixDQUFxQyxxQkFBckM7QUFDQWpCLFlBQUFBLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDcUIsR0FBbEMsQ0FBc0NDLFFBQVEsQ0FBQ2tCLFdBQS9DOztBQUNBLGdCQUFHbEIsUUFBUSxDQUFDbUIsTUFBVCxJQUFtQixDQUF0QixFQUF3QjtBQUNwQnpDLGNBQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCMEMsSUFBN0IsQ0FBa0MsU0FBbEMsRUFBNkMsSUFBN0M7QUFDSCxhQUZELE1BRU07QUFDRjFDLGNBQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCMEMsSUFBN0IsQ0FBa0MsU0FBbEMsRUFBNkMsS0FBN0M7QUFDSDs7QUFDRDFDLFlBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCb0MsS0FBckIsQ0FBMkIsTUFBM0I7QUF0Qm1CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBd0JuQkUsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQW1CLGFBQU1qQixRQUF6QjtBQUNNcUIsWUFBQUEsT0F6QmEsR0F5QkgsYUFBTXJCLFFBQU4sQ0FBZUksSUF6Qlo7QUEwQm5CdEMsWUFBQUEsS0FBSyxDQUFDNkMsSUFBTixDQUFXO0FBQ1BDLGNBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGNBQUFBLEtBQUssRUFBRVE7QUFGQSxhQUFYO0FBSUFULFlBQUFBLElBQUksQ0FBQ2hCLFFBQUwsQ0FBYyxTQUFkLEVBQXlCRCxXQUF6QixDQUFxQyxxQkFBckM7O0FBOUJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjtBQW1DQWpCLEVBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2UsRUFBWCxDQUFjLFFBQWQ7QUFBQSx3RUFBd0Isa0JBQU82QixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0lDLGNBQUFBLFFBRmdCLEdBRUwsSUFBSUMsUUFBSixDQUFhL0MsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXLENBQVgsQ0FBYixDQUZLO0FBR3BCOEMsY0FBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCLGNBQWhCLEVBQWdDaEQsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnFCLEdBQWhCLEVBQWhDO0FBQ01hLGNBQUFBLElBSmMsR0FJUGxDLENBQUMsQ0FBQyxTQUFELENBSk07QUFBQTtBQU9oQmtDLGNBQUFBLElBQUksQ0FBQ0csTUFBTCxDQUFZLGlCQUFaLEVBQStCbkIsUUFBL0IsQ0FBd0MscUJBQXhDO0FBUGdCO0FBQUEscUJBUU1LLEtBQUssQ0FBQzBCLElBQU4sQ0FBVyx5QkFBWCxFQUFzQ0gsUUFBdEMsQ0FSTjs7QUFBQTtBQVFWckIsY0FBQUEsT0FSVTtBQVNWSCxjQUFBQSxRQVRVLEdBU0NHLE9BQU8sQ0FBQ0MsSUFUVDtBQVVoQlEsY0FBQUEsSUFBSSxDQUFDaEIsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7QUFDQWpCLGNBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVyxDQUFYLEVBQWNrRCxLQUFkO0FBQ0E5QyxjQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBVzJDLE1BQVg7QUFDQWhELGNBQUFBLFdBQVcsR0FBRyxLQUFkO0FBQ0FILGNBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JvQyxLQUFsQixDQUF3QixNQUF4QjtBQWRnQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdCaEJFLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUFtQixhQUFNakIsUUFBekI7QUFDTXFCLGNBQUFBLE9BakJVLEdBaUJBLGFBQU1yQixRQUFOLENBQWVJLElBakJmO0FBa0JoQnRDLGNBQUFBLEtBQUssQ0FBQzZDLElBQU4sQ0FBVztBQUNQQyxnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsZ0JBQUFBLEtBQUssRUFBRVE7QUFGQSxlQUFYO0FBSUFULGNBQUFBLElBQUksQ0FBQ2hCLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDOztBQXRCZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEwQkFqQixFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFlLEVBQWIsQ0FBZ0IsUUFBaEI7QUFBQSx3RUFBMEIsa0JBQU82QixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0lDLGNBQUFBLFFBRmtCLEdBRVAsSUFBSUMsUUFBSixDQUFhL0MsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLENBQWIsQ0FBYixDQUZPO0FBSWhCa0MsY0FBQUEsSUFKZ0IsR0FJVGxDLENBQUMsQ0FBQyxXQUFELENBSlE7QUFBQTtBQU9sQmtDLGNBQUFBLElBQUksQ0FBQ0csTUFBTCxDQUFZLGlCQUFaLEVBQStCbkIsUUFBL0IsQ0FBd0MscUJBQXhDO0FBUGtCO0FBQUEscUJBUUlLLEtBQUssQ0FBQzBCLElBQU4sQ0FBVyxnQ0FBOEI5QyxXQUF6QyxFQUFzRDJDLFFBQXRELENBUko7O0FBQUE7QUFRWnJCLGNBQUFBLE9BUlk7QUFTWkgsY0FBQUEsUUFUWSxHQVNERyxPQUFPLENBQUNDLElBVFA7QUFVbEJRLGNBQUFBLElBQUksQ0FBQ2hCLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDO0FBQ0FiLGNBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXMkMsTUFBWDtBQUNBaEQsY0FBQUEsV0FBVyxHQUFHLEtBQWQ7QUFDQUgsY0FBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJvQyxLQUFyQixDQUEyQixNQUEzQjtBQWJrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWVsQkUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQW1CLGFBQU1qQixRQUF6QjtBQUNNcUIsY0FBQUEsT0FoQlksR0FnQkYsYUFBTXJCLFFBQU4sQ0FBZUksSUFoQmI7QUFpQmxCdEMsY0FBQUEsS0FBSyxDQUFDNkMsSUFBTixDQUFXO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxnQkFBQUEsS0FBSyxFQUFFUTtBQUZBLGVBQVg7QUFJQVQsY0FBQUEsSUFBSSxDQUFDaEIsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBckJrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUExQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBCQWpCLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JlLEVBQWhCLENBQW1CLE9BQW5CLHVFQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDcEJaLFdBRG9CO0FBQUE7QUFBQTtBQUFBOztBQUVwQmYsWUFBQUEsS0FBSyxDQUFDNkMsSUFBTixDQUFXO0FBQ1RDLGNBQUFBLElBQUksRUFBRSxPQURHO0FBRVRDLGNBQUFBLEtBQUssRUFBRTtBQUZFLGFBQVg7QUFGb0I7O0FBQUE7QUFRbEJELFlBQUFBLElBUmtCLEdBUVhsQyxDQUFDLENBQUMsY0FBRCxDQVJVO0FBVXBCb0QsWUFBQUEsR0FWb0IsR0FVZEMsT0FBTyxDQUFDLGlEQUFELENBVk87O0FBQUEsa0JBV3JCRCxHQUFHLElBQUksQ0FYYztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWFoQmxCLFlBQUFBLElBQUksQ0FBQ0csTUFBTCxDQUFZLGlCQUFaLEVBQStCbkIsUUFBL0IsQ0FBd0MscUJBQXhDO0FBYmdCO0FBQUEsbUJBY01LLEtBQUssQ0FBQzBCLElBQU4sQ0FBVyxnQ0FBOEI5QyxXQUF6QyxDQWROOztBQUFBO0FBY1ZzQixZQUFBQSxPQWRVO0FBZVZILFlBQUFBLFFBZlUsR0FlQ0csT0FBTyxDQUFDQyxJQWZUO0FBZ0JoQnRCLFlBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXMkMsTUFBWDtBQUNBL0IsWUFBQUEsT0FBTyxHQUFHLEtBQVY7QUFDQWMsWUFBQUEsSUFBSSxDQUFDaEIsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7QUFDQTdCLFlBQUFBLEtBQUssQ0FBQzZDLElBQU4sQ0FBVztBQUNQQyxjQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxjQUFBQSxLQUFLLEVBQUU7QUFGQSxhQUFYO0FBbkJnQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdCaEJHLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUFtQixhQUFNakIsUUFBekI7QUFDTXFCLFlBQUFBLE9BekJVLEdBeUJBLGFBQU1yQixRQUFOLENBQWVJLElBekJmO0FBMEJoQnRDLFlBQUFBLEtBQUssQ0FBQzZDLElBQU4sQ0FBVztBQUNQQyxjQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxjQUFBQSxLQUFLLEVBQUVRO0FBRkEsYUFBWDtBQUlBVCxZQUFBQSxJQUFJLENBQUNoQixRQUFMLENBQWMsaUJBQWQsRUFBaUNELFdBQWpDLENBQTZDLHFCQUE3Qzs7QUE5QmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVCO0FBb0NILENBM01HOzs7Ozs7Ozs7O0FDYko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLHFGQUE0QjtBQUMvQyxvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYXJhbWV0cmUvc2VtZXN0cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgbGV0IGlkX3NlbWVzdHJlO1xyXG4gICBcclxuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX3NlbWVzdHJlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL3BhcmFtZXRyZS9zZW1lc3RyZS9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YXRhYmxlc19nZXN0aW9uX3NlbWVzdHJlIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zZW1lc3RyZSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fc2VtZXN0cmUgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zZW1lc3RyZSA9ICQodGhpcykuYXR0cignaWQnKTsgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKFwiY2hhbmdlXCIsYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMCkuc2VhcmNoKCQodGhpcykudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaChcIlwiKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG5cclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgIFxyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDIpLnNlYXJjaChpZF9wcm9tb3Rpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygyKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfSlcclxuICAgICQoXCIjYWpvdXRlclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBhbGVydCgkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSlcclxuICAgICAgICBpZighJChcIiNwcm9tb3Rpb25cIikudmFsKCkgfHwgJChcIiNwcm9tb3Rpb25cIikudmFsKCkgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjaG9pc3NpciB1bmUgcHJvbW90aW9uIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuXHJcbiAgICB9KVxyXG4gICAgJChcIiNtb2RpZmllclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoIWlkX3NlbWVzdHJlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbmVyIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyIGlcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvcGFyYW1ldHJlL3NlbWVzdHJlL2RldGFpbHMvJytpZF9zZW1lc3RyZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAjZGVzaWduYXRpb25cIikudmFsKHJlc3BvbnNlLmRlc2lnbmF0aW9uKVxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5hY3RpdmUgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsICNhY3RpdmVcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAjYWN0aXZlXCIpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJChcIiNzYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3NhdmVcIilbMF0pXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvbW90aW9uX2lkXCIsICQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlIGlcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL3NlbWVzdHJlL25ldycsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJCgnI3NhdmUnKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBpZF9zZW1lc3RyZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkKFwiI2Fqb3V0X21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI3VkcGF0ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiN1ZHBhdGVcIilbMF0pXHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiN1ZHBhdGUgaVwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvc2VtZXN0cmUvdXBkYXRlLycraWRfc2VtZXN0cmUsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgaWRfc2VtZXN0cmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjc3VwcHJpbWVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoIWlkX3NlbWVzdHJlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbmVyIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3N1cHByaW1lciBpXCIpO1xyXG5cclxuICAgICAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIHNlbWVzdHJlID8nKTtcclxuICAgICAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvc2VtZXN0cmUvZGVsZXRlLycraWRfc2VtZXN0cmUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgaWRfZXRhYiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTZW1lc3RyZSBiaWVuIFN1cHByaW1lcicsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgIFxyXG59KVxyXG5cclxuXHJcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImlkX3NlbWVzdHJlIiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsImlkX2V0YWIiLCJ2YWwiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwibW9kYWwiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiZGVzaWduYXRpb24iLCJhY3RpdmUiLCJwcm9wIiwibWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwicmVzZXQiLCJyZWxvYWQiLCJyZXMiLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==