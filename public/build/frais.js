(self["webpackChunk"] = self["webpackChunk"] || []).push([["frais"],{

/***/ "./assets/components/parametre/frais.js":
/*!**********************************************!*\
  !*** ./assets/components/parametre/frais.js ***!
  \**********************************************/
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
  var id_frais;
  var table = $("#datatables_gestion_frais").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/frais/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("select").select2();
  $('body').on('click', '#datatables_gestion_frais tbody tr', function () {
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_frais = null;
    } else {
      $("#datatables_gestion_frais tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_frais = $(this).attr('id');
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
    var id_formation;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();

            if (id_formation != "") {
              table.columns(1).search(id_formation).draw();
            } else {
              table.columns(1).search("").draw();
            }

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#ajouter").on("click", function () {
    if (!$("#formation").val() || $("#formation").val() == "") {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez choissir une formation!'
      });
      return;
    }

    $("#ajout_modal").modal("show");
  });
  $("#save").on("submit", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#save")[0]);
              formData.append("formation_id", $("#formation").val());
              icon = $("#save i");
              _context3.prev = 4;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context3.next = 8;
              return axios.post('/parametre/frais/new', formData);

            case 8:
              request = _context3.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              $('#save select').val('').trigger("change");
              table.ajax.reload();
              id_frais = false;
              Toast.fire({
                icon: 'success',
                title: 'Frais bien Ajouter'
              });
              $("#ajout_modal").modal("hide");
              _context3.next = 25;
              break;

            case 19:
              _context3.prev = 19;
              _context3.t0 = _context3["catch"](4);
              console.log(_context3.t0, _context3.t0.response);
              message = _context3.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[4, 19]]);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
  $("#modifier").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (id_frais) {
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
            return axios.get('/parametre/frais/details/' + id_frais);

          case 8:
            request = _context4.sent;
            response = request.data; // console.log(response)

            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("body #modifier_modal #udpate").html(response);
            $("select").select2();
            $("#modifier_modal").modal("show");
            _context4.next = 22;
            break;

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](4);
            console.log(_context4.t0, _context4.t0.response);
            message = _context4.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

          case 22:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 16]]);
  })));
  $("#udpate").on("submit", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#udpate")[0]);
              icon = $("#udpate i");
              _context5.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context5.next = 7;
              return axios.post('/parametre/frais/update/' + id_frais, formData);

            case 7:
              request = _context5.sent;
              response = request.data;
              table.ajax.reload();
              id_frais = false;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              Toast.fire({
                icon: 'success',
                title: response
              });
              $("#modifier_modal").modal("hide");
              _context5.next = 22;
              break;

            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](3);
              console.log(_context5.t0, _context5.t0.response);
              message = _context5.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[3, 16]]);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }());
  $("#supprimer").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var icon, res, request, response, message;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (id_frais) {
              _context6.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!'
            });
            return _context6.abrupt("return");

          case 3:
            icon = $("#supprimer i");
            res = confirm('Vous voulez vraiment supprimer ce frais ?');

            if (!(res == 1)) {
              _context6.next = 24;
              break;
            }

            _context6.prev = 6;
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            _context6.next = 10;
            return axios.post('/parametre/frais/delete/' + id_frais);

          case 10:
            request = _context6.sent;
            response = request.data;
            table.ajax.reload();
            id_frais = false;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context6.next = 24;
            break;

          case 18:
            _context6.prev = 18;
            _context6.t0 = _context6["catch"](6);
            console.log(_context6.t0, _context6.t0.response);
            message = _context6.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

          case 24:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[6, 18]]);
  })));
  $('body').on('click', '#extraction', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              window.open('/parametre/frais/ExtractionFrais', '_blank');

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8"], () => (__webpack_exec__("./assets/components/parametre/frais.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFyYW1ldHJlL2ZyYWlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxuICAgIH0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIGxldCBpZF9mcmFpcztcclxuICAgICAgICBcclxuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2ZyYWlzXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL3BhcmFtZXRyZS9mcmFpcy9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9mcmFpcyB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2ZyYWlzID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9mcmFpcyB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2ZyYWlzID0gJCh0aGlzKS5hdHRyKCdpZCcpOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oXCJjaGFuZ2VcIixhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygwKS5zZWFyY2goJCh0aGlzKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMCkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDEpLnNlYXJjaChcIlwiKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjYWpvdXRlclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZighJChcIiNmb3JtYXRpb25cIikudmFsKCkgfHwgJChcIiNmb3JtYXRpb25cIikudmFsKCkgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjaG9pc3NpciB1bmUgZm9ybWF0aW9uIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuXHJcbiAgICB9KVxyXG4gICAgJChcIiNzYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3NhdmVcIilbMF0pXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZm9ybWF0aW9uX2lkXCIsICQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlIGlcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvZnJhaXMvbmV3JywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAkKCcjc2F2ZScpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICQoJyNzYXZlIHNlbGVjdCcpLnZhbCgnJykudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgaWRfZnJhaXMgPSBmYWxzZVxyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRnJhaXMgYmllbiBBam91dGVyJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNtb2RpZmllclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoIWlkX2ZyYWlzKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbmVyIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyIGlcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvcGFyYW1ldHJlL2ZyYWlzL2RldGFpbHMvJytpZF9mcmFpcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJChcImJvZHkgI21vZGlmaWVyX21vZGFsICN1ZHBhdGVcIikuaHRtbChyZXNwb25zZSlcclxuICAgICAgICAgICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJChcIiN1ZHBhdGVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjdWRwYXRlXCIpWzBdKVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3VkcGF0ZSBpXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL2ZyYWlzL3VwZGF0ZS8nK2lkX2ZyYWlzLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBpZF9mcmFpcyA9IGZhbHNlXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNzdXBwcmltZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZighaWRfZnJhaXMpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uZXIgdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc3VwcHJpbWVyIGlcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IHN1cHByaW1lciBjZSBmcmFpcyA/Jyk7XHJcbiAgICAgICAgaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL2ZyYWlzL2RlbGV0ZS8nK2lkX2ZyYWlzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIGlkX2ZyYWlzID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgICAgICBcclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNleHRyYWN0aW9uJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9wYXJhbWV0cmUvZnJhaXMvRXh0cmFjdGlvbkZyYWlzJywgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgXHJcbn0pXHJcblxyXG5cclxuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaWRfZnJhaXMiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwibGFuZ3VhZ2UiLCJ1cmwiLCJzZWxlY3QyIiwib24iLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJhdHRyIiwiaWRfZXRhYiIsInZhbCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImNvbHVtbnMiLCJzZWFyY2giLCJkcmF3IiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJtb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJyZW1vdmUiLCJwb3N0IiwicmVzZXQiLCJ0cmlnZ2VyIiwicmVsb2FkIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJyZXMiLCJjb25maXJtIiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=