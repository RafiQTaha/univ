(self["webpackChunk"] = self["webpackChunk"] || []).push([["controle"],{

/***/ "./assets/components/administration/controle.js":
/*!******************************************************!*\
  !*** ./assets/components/administration/controle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(document).ready(function () {
  var Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: function didOpen(toast) {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });
  var table_imprimer = $("#datables_controle").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/administration/controle/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_controle')) {
        var dt = $('#datables_controle').DataTable(); //Abort previous ajax request if it is still in process.

        var settings = dt.settings();

        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("body").on('keydown', "#input1", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (e.which === 13) {
                $('#input2').focus();
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $("body").on('keydown', "#input2", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(e.which === 13)) {
                _context2.next = 19;
                break;
              }

              _context2.prev = 1;
              formData = new FormData();
              formData.append("inscription", $("#input1").val());
              formData.append("anonymat", $("#input2").val());
              _context2.next = 7;
              return axios.post('/administration/controle/validation', formData);

            case 7:
              request = _context2.sent;
              response = request.data;
              Toast.fire({
                icon: 'success',
                title: response
              });
              $("#input1").val("");
              $("#input2").val("");
              $("#input1").focus();
              _context2.next = 19;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](1);
              message = _context2.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 15]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  $('#datables_controle').on('click', 'tbody tr .get_cd', function (event) {
    var code = $(this).attr('role');
    window.open("/administration/controle/print/" + code + "/2", '_blank', "toolbar=yes,scrollbars=yes,top=500,left=500,width=400,height=330");
    event.preventDefault();
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/administration/controle.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBd0JpQyxFQUF4QixDQUEyQixPQUEzQixFQUFvQyxrQkFBcEMsRUFBd0QsVUFBVWlCLEtBQVYsRUFBaUI7QUFDdEUsUUFBSUMsSUFBSSxHQUFHbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0QsSUFBUixDQUFhLE1BQWIsQ0FBWDtBQUNBQyxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxvQ0FBb0NILElBQXBDLEdBQTJDLElBQXZELEVBQTRELFFBQTVELEVBQXNFLGtFQUF0RTtBQUNBRCxJQUFBQSxLQUFLLENBQUNLLGNBQU47QUFDSCxHQUpBO0FBTUgsQ0F4RUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9jb250cm9sZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiA1MDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICB2YXIgdGFibGVfaW1wcmltZXIgPSAkKFwiI2RhdGFibGVzX2NvbnRyb2xlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2FkbWluaXN0cmF0aW9uL2NvbnRyb2xlL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2RhdGFibGVzX2NvbnRyb2xlJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9ICQoJyNkYXRhYmxlc19jb250cm9sZScpLkRhdGFUYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGR0LnNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4kKFwiYm9keVwiKS5vbigna2V5ZG93bicsXCIjaW5wdXQxXCIsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XHJcbiAgICAgICAgJCgnI2lucHV0MicpLmZvY3VzKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4kKFwiYm9keVwiKS5vbigna2V5ZG93bicsXCIjaW5wdXQyXCIsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImluc2NyaXB0aW9uXCIsICQoXCIjaW5wdXQxXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhbm9ueW1hdFwiLCAkKFwiI2lucHV0MlwiKS52YWwoKSlcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9jb250cm9sZS92YWxpZGF0aW9uJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoXCIjaW5wdXQxXCIpLnZhbChcIlwiKVxyXG4gICAgICAgICAgICAkKFwiI2lucHV0MlwiKS52YWwoXCJcIilcclxuICAgICAgICAgICAgJChcIiNpbnB1dDFcIikuZm9jdXMoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuICAgICQoJyNkYXRhYmxlc19jb250cm9sZScpLm9uKCdjbGljaycsICd0Ym9keSB0ciAuZ2V0X2NkJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICB2YXIgY29kZSA9ICQodGhpcykuYXR0cigncm9sZScpO1xyXG4gICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vY29udHJvbGUvcHJpbnQvXCIgKyBjb2RlICsgXCIvMlwiLCdfYmxhbmsnLCBcInRvb2xiYXI9eWVzLHNjcm9sbGJhcnM9eWVzLHRvcD01MDAsbGVmdD01MDAsd2lkdGg9NDAwLGhlaWdodD0zMzBcIik7XHJcbiAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICB9KTtcclxuICAgIFxyXG59KTsiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJ0YWJsZV9pbXByaW1lciIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsInByZURyYXdDYWxsYmFjayIsInNldHRpbmdzIiwiZm4iLCJpc0RhdGFUYWJsZSIsImR0IiwianFYSFIiLCJhYm9ydCIsImxhbmd1YWdlIiwidXJsIiwib24iLCJlIiwid2hpY2giLCJmb2N1cyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ2YWwiLCJheGlvcyIsInBvc3QiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsIm1lc3NhZ2UiLCJldmVudCIsImNvZGUiLCJhdHRyIiwid2luZG93Iiwib3BlbiIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==