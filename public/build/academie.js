(self["webpackChunk"] = self["webpackChunk"] || []).push([["academie"],{

/***/ "./assets/components/parametre/academie.js":
/*!*************************************************!*\
  !*** ./assets/components/parametre/academie.js ***!
  \*************************************************/
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
  var id_academie;
  var table = $("#datatables_gestion_academie").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/academie/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("select").select2();
  $('body').on('click', '#datatables_gestion_academie tbody tr', function () {
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_academie = null;
    } else {
      $("#datatables_gestion_academie tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_academie = $(this).attr('id');
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
              return axios.post('/parametre/academie/new', formData);

            case 7:
              request = _context.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              id_academie = false;
              Toast.fire({
                icon: 'success',
                title: 'Academie bien Ajouter'
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
            if (id_academie) {
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
            return axios.get('/parametre/academie/details/' + id_academie);

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
              return axios.post('/parametre/academie/update/' + id_academie, formData);

            case 7:
              request = _context3.sent;
              response = request.data;
              table.ajax.reload();
              id_academie = false;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              Toast.fire({
                icon: 'success',
                title: 'Academie bien Modifier'
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
    var icon, res, request, response, message;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (id_academie) {
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
            res = confirm('Vous voulez vraiment supprimer cette academie ?');

            if (!(res == 1)) {
              _context4.next = 24;
              break;
            }

            _context4.prev = 6;
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            _context4.next = 10;
            return axios.post('/parametre/academie/delete/' + id_academie);

          case 10:
            request = _context4.sent;
            response = request.data;
            table.ajax.reload();
            id_academie = false;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            Toast.fire({
              icon: 'success',
              title: 'Academie bien Supprimer'
            });
            _context4.next = 24;
            break;

          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](6);
            console.log(_context4.t0, _context4.t0.response);
            message = _context4.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

          case 24:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[6, 18]]);
  })));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/parametre/academie.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxpQkFBWixFQUErQlIsUUFBL0IsQ0FBd0MscUJBQXhDO0FBZGdCO0FBQUEsbUJBZU1TLEtBQUssQ0FBQ0MsSUFBTixDQUFXLGdDQUE4QnpCLFdBQXpDLENBZk47O0FBQUE7QUFlVjBCLFlBQUFBLE9BZlU7QUFnQlZDLFlBQUFBLFFBaEJVLEdBZ0JDRCxPQUFPLENBQUNFLElBaEJUO0FBaUJoQjNCLFlBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXeUIsTUFBWDtBQUNBOUIsWUFBQUEsV0FBVyxHQUFHLEtBQWQ7QUFDQXNCLFlBQUFBLElBQUksQ0FBQ1AsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7QUFDQTdCLFlBQUFBLEtBQUssQ0FBQzhDLElBQU4sQ0FBVztBQUNQVCxjQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQVSxjQUFBQSxLQUFLLEVBQUU7QUFGQSxhQUFYO0FBcEJnQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXlCaEJDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUFtQixhQUFNUCxRQUF6QjtBQUNNUSxZQUFBQSxPQTFCVSxHQTBCQSxhQUFNUixRQUFOLENBQWVDLElBMUJmO0FBMkJoQjNDLFlBQUFBLEtBQUssQ0FBQzhDLElBQU4sQ0FBVztBQUNQVCxjQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQVSxjQUFBQSxLQUFLLEVBQUVHO0FBRkEsYUFBWDtBQUlBYixZQUFBQSxJQUFJLENBQUNQLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDOztBQS9CZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBNUI7QUFxQ0gsQ0E5SkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wYXJhbWV0cmUvYWNhZGVtaWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICBsZXQgaWRfYWNhZGVtaWU7XHJcbiAgICAgICAgXHJcbiAgICB2YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9hY2FkZW1pZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9wYXJhbWV0cmUvYWNhZGVtaWUvbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhdGFibGVzX2dlc3Rpb25fYWNhZGVtaWUgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9hY2FkZW1pZSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fYWNhZGVtaWUgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9hY2FkZW1pZSA9ICQodGhpcykuYXR0cignaWQnKTsgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiI2Fqb3V0ZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuXHJcbiAgICB9KVxyXG4gICAgJChcIiNzYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3NhdmVcIilbMF0pXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc2F2ZSBpXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL2FjYWRlbWllL25ldycsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJCgnI3NhdmUnKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBpZF9hY2FkZW1pZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBY2FkZW1pZSBiaWVuIEFqb3V0ZXInLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKFwiI2Fqb3V0X21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI21vZGlmaWVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBhbGVydCgnaGknKVxyXG4gICAgICAgIGlmKCFpZF9hY2FkZW1pZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb25lciB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllciBpXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL3BhcmFtZXRyZS9hY2FkZW1pZS9kZXRhaWxzLycraWRfYWNhZGVtaWUpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgI2Rlc2lnbmF0aW9uXCIpLnZhbChyZXNwb25zZS5kZXNpZ25hdGlvbilcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAjYWJyZXZpYXRpb25cIikudmFsKHJlc3BvbnNlLmFicmV2aWF0aW9uKVxyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQoXCIjdWRwYXRlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3VkcGF0ZVwiKVswXSlcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiN1ZHBhdGUgaVwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9hY2FkZW1pZS91cGRhdGUvJytpZF9hY2FkZW1pZSwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgaWRfYWNhZGVtaWUgPSBmYWxzZVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBY2FkZW1pZSBiaWVuIE1vZGlmaWVyJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI3N1cHByaW1lclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIGFsZXJ0KGlkX2FjYWRlbWllKTtcclxuICAgICAgICBpZighaWRfYWNhZGVtaWUpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uZXIgdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjdWRwYXRlIGlcIik7XHJcblxyXG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgYWNhZGVtaWUgPycpO1xyXG4gICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9hY2FkZW1pZS9kZWxldGUvJytpZF9hY2FkZW1pZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICBpZF9hY2FkZW1pZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBY2FkZW1pZSBiaWVuIFN1cHByaW1lcicsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgIFxyXG59KVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImlkX2FjYWRlbWllIiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsIm1vZGFsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImljb24iLCJyZW1vdmUiLCJheGlvcyIsInBvc3QiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwicmVzZXQiLCJyZWxvYWQiLCJmaXJlIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImdldCIsInZhbCIsImRlc2lnbmF0aW9uIiwiYWJyZXZpYXRpb24iLCJyZXMiLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==