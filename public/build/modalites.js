(self["webpackChunk"] = self["webpackChunk"] || []).push([["modalites"],{

/***/ "./assets/components/parametre/modalites.js":
/*!**************************************************!*\
  !*** ./assets/components/parametre/modalites.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

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
  var id_modalites;
  var table = $("#datatables_gestion_modalites").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/modalites/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("select").select2();
  $('body').on('click', '#datatables_gestion_modalites tbody tr', function () {
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_modalites = null;
    } else {
      $("#datatables_gestion_modalites tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_modalites = $(this).attr('id');
    }
  });
  $("#ajouter").on("click", function () {
    $("#ajout_modal").modal("show");
  });
  $("#save").on("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#save")[0]);
              icon = $("#save i");
              _context.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context.next = 7;
              return axios.post('/parametre/modalites/new', formData);

            case 7:
              request = _context.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              id_modalites = false;
              Toast.fire({
                icon: 'success',
                title: 'modalites bien Ajouter'
              });
              $("#ajout_modal").modal("hide");
              _context.next = 23;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](3);
              console.log(_context.t0, _context.t0.response);
              message = _context.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 17]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $("#modifier").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (id_modalites) {
              _context2.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!'
            });
            return _context2.abrupt("return");

          case 3:
            icon = $("#modifier i");
            _context2.prev = 4;
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            _context2.next = 8;
            return axios.get('/parametre/modalites/details/' + id_modalites);

          case 8:
            request = _context2.sent;
            response = request.data;
            console.log(response);
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("#modifier_modal #designation").val(response.designation);
            $("#modifier_modal #abreviation").val(response.abreviation);
            $("#modifier_modal").modal("show");
            _context2.next = 23;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](4);
            console.log(_context2.t0, _context2.t0.response);
            message = _context2.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 17]]);
  })));
  $("#udpate").on("submit", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#udpate")[0]);
              icon = $("#udpate i");
              _context3.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context3.next = 7;
              return axios.post('/parametre/modalites/update/' + id_modalites, formData);

            case 7:
              request = _context3.sent;
              response = request.data;
              table.ajax.reload();
              id_modalites = false;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              Toast.fire({
                icon: 'success',
                title: 'modalites bien Modifier'
              });
              $("#modifier_modal").modal("hide");
              _context3.next = 22;
              break;

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](3);
              console.log(_context3.t0, _context3.t0.response);
              message = _context3.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 16]]);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }());
  $("#supprimer").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (id_modalites) {
              _context4.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!'
            });
            return _context4.abrupt("return");

          case 3:
            icon = $("#udpate i");
            _context4.prev = 4;
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            _context4.next = 8;
            return axios.post('/parametre/modalites/delete/' + id_modalites);

          case 8:
            request = _context4.sent;
            response = request.data;
            table.ajax.reload();
            id_modalites = false;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            Toast.fire({
              icon: 'success',
              title: 'modalites bien Supprimer'
            });
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
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

          case 22:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 16]]);
  })));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/parametre/modalites.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rjs7QUFBQTtBQVdkMEIsWUFBQUEsT0FYYztBQVlkQyxZQUFBQSxRQVpjLEdBWUhELE9BQU8sQ0FBQ0UsSUFaTDtBQWFwQjNCLFlBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXeUIsTUFBWDtBQUNBOUIsWUFBQUEsWUFBWSxHQUFHLEtBQWY7QUFDQXNCLFlBQUFBLElBQUksQ0FBQ1AsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7QUFDQTdCLFlBQUFBLEtBQUssQ0FBQzhDLElBQU4sQ0FBVztBQUNQVCxjQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQVSxjQUFBQSxLQUFLLEVBQUU7QUFGQSxhQUFYO0FBaEJvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCcEJDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUFtQixhQUFNUCxRQUF6QjtBQUNNUSxZQUFBQSxPQXRCYyxHQXNCSixhQUFNUixRQUFOLENBQWVDLElBdEJYO0FBdUJwQjNDLFlBQUFBLEtBQUssQ0FBQzhDLElBQU4sQ0FBVztBQUNQVCxjQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQVSxjQUFBQSxLQUFLLEVBQUVHO0FBRkEsYUFBWDtBQUlBYixZQUFBQSxJQUFJLENBQUNQLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDOztBQTNCb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBNUI7QUFnQ0gsQ0F4SkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYXJhbWV0cmUvbW9kYWxpdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgbGV0IGlkX21vZGFsaXRlcztcclxuICAgICAgICBcclxuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX21vZGFsaXRlc1wiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9wYXJhbWV0cmUvbW9kYWxpdGVzL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YXRhYmxlc19nZXN0aW9uX21vZGFsaXRlcyB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX21vZGFsaXRlcyA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fbW9kYWxpdGVzIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfbW9kYWxpdGVzID0gJCh0aGlzKS5hdHRyKCdpZCcpOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIjYWpvdXRlclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAkKFwiI2Fqb3V0X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG5cclxuICAgIH0pXHJcbiAgICAkKFwiI3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjc2F2ZVwiKVswXSlcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlIGlcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvbW9kYWxpdGVzL25ldycsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJCgnI3NhdmUnKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBpZF9tb2RhbGl0ZXMgPSBmYWxzZVxyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWxpdGVzIGJpZW4gQWpvdXRlcicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjbW9kaWZpZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCFpZF9tb2RhbGl0ZXMpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uZXIgdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXIgaVwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9wYXJhbWV0cmUvbW9kYWxpdGVzL2RldGFpbHMvJytpZF9tb2RhbGl0ZXMpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgI2Rlc2lnbmF0aW9uXCIpLnZhbChyZXNwb25zZS5kZXNpZ25hdGlvbilcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAjYWJyZXZpYXRpb25cIikudmFsKHJlc3BvbnNlLmFicmV2aWF0aW9uKVxyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQoXCIjdWRwYXRlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3VkcGF0ZVwiKVswXSlcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiN1ZHBhdGUgaVwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9tb2RhbGl0ZXMvdXBkYXRlLycraWRfbW9kYWxpdGVzLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBpZF9tb2RhbGl0ZXMgPSBmYWxzZVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbGl0ZXMgYmllbiBNb2RpZmllcicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNzdXBwcmltZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZighaWRfbW9kYWxpdGVzKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbmVyIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3VkcGF0ZSBpXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL21vZGFsaXRlcy9kZWxldGUvJytpZF9tb2RhbGl0ZXMpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgaWRfbW9kYWxpdGVzID0gZmFsc2VcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWxpdGVzIGJpZW4gU3VwcHJpbWVyJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgXHJcbn0pXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaWRfbW9kYWxpdGVzIiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsIm1vZGFsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImljb24iLCJyZW1vdmUiLCJheGlvcyIsInBvc3QiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwicmVzZXQiLCJyZWxvYWQiLCJmaXJlIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImdldCIsInZhbCIsImRlc2lnbmF0aW9uIiwiYWJyZXZpYXRpb24iXSwic291cmNlUm9vdCI6IiJ9