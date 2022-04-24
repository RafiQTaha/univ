(self["webpackChunk"] = self["webpackChunk"] || []).push([["etablissement"],{

/***/ "./assets/components/parametre/etablissement.js":
/*!******************************************************!*\
  !*** ./assets/components/parametre/etablissement.js ***!
  \******************************************************/
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
  var id_etab;
  var table = $("#datatables_gestion_etablissement").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/etablissement/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('body').on('click', '#datatables_gestion_etablissement tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_etab = null;
    } else {
      $("#datatables_gestion_inscription tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_etab = $(this).attr('id');
    }
  });
  $("#ajouter").on("click", function () {
    $("#ajout_modal").modal("show");
  });
  $("#modifier").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (id_etab) {
              _context.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!'
            });
            return _context.abrupt("return");

          case 3:
            icon = $("#modifier i");
            _context.prev = 4;
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            _context.next = 8;
            return axios.get('/parametre/etablissement/details/' + id_etab);

          case 8:
            request = _context.sent;
            response = request.data;
            console.log(response);
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("#modifier_modal #designation").val(response.designation);
            $("#modifier_modal #abreviation").val(response.abreviation);
            $("#modifier_modal #nature").val(response.nature);
            $("#modifier_modal #date").val(response.date);

            if (response.active == 1) {
              $("#modifier_modal #active").prop("checked", true);
            } else {
              $("#modifier_modal #active").prop("checked", fale);
            }

            $("#modifier_modal").modal("show");
            _context.next = 26;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](4);
            console.log(_context.t0, _context.t0.response);
            message = _context.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 20]]);
  })));
  $("#etablissemnt_save").on("submit", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#etablissemnt_save")[0]); // var formData = [...new FormData($("#etablissemnt_save")[0])]
              // var data = Object.fromEntries(formData);

              icon = $("#etablissemnt_save i");
              _context2.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context2.next = 7;
              return axios.post('/parametre/etablissement/new', formData);

            case 7:
              request = _context2.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#etablissemnt_save')[0].reset();
              table.ajax.reload();
              $("#ajout_modal").modal("hide");
              _context2.next = 21;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](3);
              console.log(_context2.t0, _context2.t0.response);
              message = _context2.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 15]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  $("#etablissemnt_udpate").on("submit", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#etablissemnt_udpate")[0]);
              icon = $("#etablissemnt_udpate i");
              _context3.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context3.next = 7;
              return axios.post('/parametre/etablissement/update/' + id_etab, formData);

            case 7:
              request = _context3.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload();
              $("#modifier_modal").modal("hide");
              _context3.next = 20;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](3);
              console.log(_context3.t0, _context3.t0.response);
              message = _context3.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 20:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 14]]);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }());
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/parametre/etablissement.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBVyxxQ0FBbUN6QyxPQUE5QyxFQUF1RHVDLFFBQXZELENBUlM7O0FBQUE7QUFRekJoQixjQUFBQSxPQVJ5QjtBQVN6QkMsY0FBQUEsUUFUeUIsR0FTZEQsT0FBTyxDQUFDRSxJQVRNO0FBVS9CUCxjQUFBQSxJQUFJLENBQUNKLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDO0FBQ0FaLGNBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXc0MsTUFBWDtBQUNBOUMsY0FBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJtQixLQUFyQixDQUEyQixNQUEzQjtBQVorQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWMvQlUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQW1CLGFBQU1ILFFBQXpCO0FBQ01ZLGNBQUFBLE9BZnlCLEdBZWYsYUFBTVosUUFBTixDQUFlQyxJQWZBO0FBZ0IvQnhDLGNBQUFBLEtBQUssQ0FBQ2dDLElBQU4sQ0FBVztBQUNQQyxnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsZ0JBQUFBLEtBQUssRUFBRWlCO0FBRkEsZUFBWDtBQUlBbEIsY0FBQUEsSUFBSSxDQUFDSixRQUFMLENBQWMsaUJBQWQsRUFBaUNELFdBQWpDLENBQTZDLHFCQUE3Qzs7QUFwQitCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXZDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUJILENBN0hHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFyYW1ldHJlL2V0YWJsaXNzZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICBsZXQgaWRfZXRhYjtcclxuICAgXHJcbiAgICB2YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9ldGFibGlzc2VtZW50XCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL3BhcmFtZXRyZS9ldGFibGlzc2VtZW50L2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9ldGFibGlzc2VtZW50IHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9ldGFiID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvbiB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2V0YWIgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2Fqb3V0ZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcbiAgICAkKFwiI21vZGlmaWVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZighaWRfZXRhYil7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb25lciB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllciBpXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL3BhcmFtZXRyZS9ldGFibGlzc2VtZW50L2RldGFpbHMvJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsICNkZXNpZ25hdGlvblwiKS52YWwocmVzcG9uc2UuZGVzaWduYXRpb24pXHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgI2FicmV2aWF0aW9uXCIpLnZhbChyZXNwb25zZS5hYnJldmlhdGlvbilcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAjbmF0dXJlXCIpLnZhbChyZXNwb25zZS5uYXR1cmUpXHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgI2RhdGVcIikudmFsKHJlc3BvbnNlLmRhdGUpXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmFjdGl2ZSA9PSAxKXtcclxuICAgICAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgI2FjdGl2ZVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsICNhY3RpdmVcIikucHJvcChcImNoZWNrZWRcIiwgZmFsZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQoXCIjZXRhYmxpc3NlbW50X3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjZXRhYmxpc3NlbW50X3NhdmVcIilbMF0pXHJcbiAgICAgICAgLy8gdmFyIGZvcm1EYXRhID0gWy4uLm5ldyBGb3JtRGF0YSgkKFwiI2V0YWJsaXNzZW1udF9zYXZlXCIpWzBdKV1cclxuICAgICAgICAvLyB2YXIgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSk7XHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNldGFibGlzc2VtbnRfc2F2ZSBpXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9ldGFibGlzc2VtZW50L25ldycsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJCgnI2V0YWJsaXNzZW1udF9zYXZlJylbMF0ucmVzZXQoKTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNldGFibGlzc2VtbnRfdWRwYXRlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI2V0YWJsaXNzZW1udF91ZHBhdGVcIilbMF0pXHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNldGFibGlzc2VtbnRfdWRwYXRlIGlcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL2V0YWJsaXNzZW1lbnQvdXBkYXRlLycraWRfZXRhYiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgIFxyXG59KVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImlkX2V0YWIiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwibGFuZ3VhZ2UiLCJ1cmwiLCJvbiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImF0dHIiLCJtb2RhbCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJyZW1vdmUiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidmFsIiwiZGVzaWduYXRpb24iLCJhYnJldmlhdGlvbiIsIm5hdHVyZSIsImRhdGUiLCJhY3RpdmUiLCJwcm9wIiwiZmFsZSIsIm1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicG9zdCIsInJlc2V0IiwicmVsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==