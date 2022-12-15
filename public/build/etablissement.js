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
      $("#datatables_gestion_etablissement tbody tr").removeClass('active_databales');
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
              $("#modifier_modal #active").prop("checked", false);
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
              id_etab = false;
              $("#ajout_modal").modal("hide");
              _context2.next = 22;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](3);
              console.log(_context2.t0, _context2.t0.response);
              message = _context2.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 16]]);
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
              id_etab = false;
              $("#modifier_modal").modal("hide");
              _context3.next = 21;
              break;

            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](3);
              console.log(_context3.t0, _context3.t0.response);
              message = _context3.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 15]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxxQkFRVE8sS0FBSyxDQUFDbUIsSUFBTixDQUFXLHFDQUFtQ3hDLE9BQTlDLEVBQXVEc0MsUUFBdkQsQ0FSUzs7QUFBQTtBQVF6QmYsY0FBQUEsT0FSeUI7QUFTekJDLGNBQUFBLFFBVHlCLEdBU2RELE9BQU8sQ0FBQ0UsSUFUTTtBQVUvQlAsY0FBQUEsSUFBSSxDQUFDSixRQUFMLENBQWMsaUJBQWQsRUFBaUNELFdBQWpDLENBQTZDLHFCQUE3QztBQUNBWixjQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBV3FDLE1BQVg7QUFDQTFDLGNBQUFBLE9BQU8sR0FBRyxLQUFWO0FBQ0FILGNBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCbUIsS0FBckIsQ0FBMkIsTUFBM0I7QUFiK0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlL0JVLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUFtQixhQUFNSCxRQUF6QjtBQUNNVyxjQUFBQSxPQWhCeUIsR0FnQmYsYUFBTVgsUUFBTixDQUFlQyxJQWhCQTtBQWlCL0J4QyxjQUFBQSxLQUFLLENBQUNnQyxJQUFOLENBQVc7QUFDUEMsZ0JBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGdCQUFBQSxLQUFLLEVBQUVnQjtBQUZBLGVBQVg7QUFJQWpCLGNBQUFBLElBQUksQ0FBQ0osUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBckIrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF2Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBCSCxDQS9IRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhcmFtZXRyZS9ldGFibGlzc2VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgbGV0IGlkX2V0YWI7XHJcbiAgIFxyXG4gICAgdmFyIHRhYmxlID0gJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fZXRhYmxpc3NlbWVudFwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9wYXJhbWV0cmUvZXRhYmxpc3NlbWVudC9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhdGFibGVzX2dlc3Rpb25fZXRhYmxpc3NlbWVudCB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfZXRhYiA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fZXRhYmxpc3NlbWVudCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2V0YWIgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2Fqb3V0ZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcbiAgICAkKFwiI21vZGlmaWVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZighaWRfZXRhYil7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb25lciB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllciBpXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL3BhcmFtZXRyZS9ldGFibGlzc2VtZW50L2RldGFpbHMvJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsICNkZXNpZ25hdGlvblwiKS52YWwocmVzcG9uc2UuZGVzaWduYXRpb24pXHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgI2FicmV2aWF0aW9uXCIpLnZhbChyZXNwb25zZS5hYnJldmlhdGlvbilcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAjbmF0dXJlXCIpLnZhbChyZXNwb25zZS5uYXR1cmUpXHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgI2RhdGVcIikudmFsKHJlc3BvbnNlLmRhdGUpXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmFjdGl2ZSA9PSAxKXtcclxuICAgICAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgI2FjdGl2ZVwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsICNhY3RpdmVcIikucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkKFwiI2V0YWJsaXNzZW1udF9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI2V0YWJsaXNzZW1udF9zYXZlXCIpWzBdKVxyXG4gICAgICAgIC8vIHZhciBmb3JtRGF0YSA9IFsuLi5uZXcgRm9ybURhdGEoJChcIiNldGFibGlzc2VtbnRfc2F2ZVwiKVswXSldXHJcbiAgICAgICAgLy8gdmFyIGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZXRhYmxpc3NlbW50X3NhdmUgaVwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvZXRhYmxpc3NlbWVudC9uZXcnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoJyNldGFibGlzc2VtbnRfc2F2ZScpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIGlkX2V0YWIgPSBmYWxzZTtcclxuICAgICAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNldGFibGlzc2VtbnRfdWRwYXRlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI2V0YWJsaXNzZW1udF91ZHBhdGVcIilbMF0pXHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNldGFibGlzc2VtbnRfdWRwYXRlIGlcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL2V0YWJsaXNzZW1lbnQvdXBkYXRlLycraWRfZXRhYiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBpZF9ldGFiID0gZmFsc2U7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgXHJcbn0pXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaWRfZXRhYiIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJsYW5ndWFnZSIsInVybCIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsIm1vZGFsIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInJlbW92ZSIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ2YWwiLCJkZXNpZ25hdGlvbiIsImFicmV2aWF0aW9uIiwibmF0dXJlIiwiZGF0ZSIsImFjdGl2ZSIsInByb3AiLCJtZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInBvc3QiLCJyZXNldCIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=