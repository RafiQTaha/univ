(self["webpackChunk"] = self["webpackChunk"] || []).push([["enseignant"],{

/***/ "./assets/components/parametre/enseignant.js":
/*!***************************************************!*\
  !*** ./assets/components/parametre/enseignant.js ***!
  \***************************************************/
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
  $('select').select2();
  var id_enseignant;
  var table = $("#datatables_gestion_enseignant").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/enseignant/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('body').on('click', '#datatables_gestion_enseignant tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_enseignant = null;
    } else {
      $("#datatables_gestion_enseignant tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_enseignant = $(this).attr('id');
    }
  });
  $("#ajouter").on("click", function () {
    $("#ajout_modal").modal("show");
  }); // 

  $("#save").on("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var formData, icon, request, response, _message;

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
              return axios.post('/parametre/enseignant/new', formData);

            case 7:
              request = _context.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              id_enseignant = false;
              $("#ajout_modal").modal("hide");
              Toast.fire({
                icon: 'succees',
                title: message
              });
              _context.next = 23;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](3);
              console.log(_context.t0, _context.t0.response);
              _message = _context.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: _message
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
    var icon, request, response, _message2;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (id_enseignant) {
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
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            _context2.prev = 5;
            _context2.next = 8;
            return axios.get('/parametre/enseignant/details/' + id_enseignant);

          case 8:
            request = _context2.sent;
            response = request.data;
            console.log(response);
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("body #modifier_modal #udpate").html(response);
            $('select').select2();
            $("#modifier_modal").modal("show");
            _context2.next = 23;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](5);
            console.log(_context2.t0, _context2.t0.response);
            _message2 = _context2.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: _message2
            });
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 17]]);
  })));
  $("#udpate").on("submit", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var formData, icon, request, response, _message3;

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
              return axios.post('/parametre/enseignant/update/' + id_enseignant, formData);

            case 7:
              request = _context3.sent;
              response = request.data;
              $('#udpate')[0].reset();
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload();
              id_enseignant = false;
              $("#modifier_modal").modal("hide");
              Toast.fire({
                icon: 'success',
                title: response
              });
              _context3.next = 23;
              break;

            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](3);
              console.log(_context3.t0, _context3.t0.response);
              _message3 = _context3.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: _message3
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 17]]);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/parametre/enseignant.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBN0IsY0FBQUEsYUFBYSxHQUFHLEtBQWhCO0FBQ0FKLGNBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCb0IsS0FBckIsQ0FBMkIsTUFBM0I7QUFDQWhDLGNBQUFBLEtBQUssQ0FBQzhDLElBQU4sQ0FBVztBQUNQVCxnQkFBQUEsSUFBSSxFQUFFLFNBREM7QUFFUFUsZ0JBQUFBLEtBQUssRUFBRUw7QUFGQSxlQUFYO0FBZGtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbUJsQk8sY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQW1CLGFBQU1SLFFBQXpCO0FBQ01NLGNBQUFBLFNBcEJZLEdBb0JGLGFBQU1OLFFBQU4sQ0FBZUMsSUFwQmI7QUFxQmxCM0MsY0FBQUEsS0FBSyxDQUFDOEMsSUFBTixDQUFXO0FBQ1BULGdCQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQVSxnQkFBQUEsS0FBSyxFQUFFQztBQUZBLGVBQVg7QUFJQVgsY0FBQUEsSUFBSSxDQUFDUCxRQUFMLENBQWMsaUJBQWQsRUFBaUNELFdBQWpDLENBQTZDLHFCQUE3Qzs7QUF6QmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEJILENBM0hHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFyYW1ldHJlL2Vuc2VpZ25hbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKClcclxuICAgIGxldCBpZF9lbnNlaWduYW50O1xyXG4gICAgdmFyIHRhYmxlID0gJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fZW5zZWlnbmFudFwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9wYXJhbWV0cmUvZW5zZWlnbmFudC9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhdGFibGVzX2dlc3Rpb25fZW5zZWlnbmFudCB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfZW5zZWlnbmFudCA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fZW5zZWlnbmFudCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2Vuc2VpZ25hbnQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2Fqb3V0ZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcbiAgICAvLyBcclxuICAgICQoXCIjc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiNzYXZlXCIpWzBdKVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3NhdmUgaVwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9lbnNlaWduYW50L25ldycsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJCgnI3NhdmUnKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBpZF9lbnNlaWduYW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2NlZXMnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjbW9kaWZpZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCFpZF9lbnNlaWduYW50KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbmVyIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL3BhcmFtZXRyZS9lbnNlaWduYW50L2RldGFpbHMvJytpZF9lbnNlaWduYW50KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAkKFwiYm9keSAjbW9kaWZpZXJfbW9kYWwgI3VkcGF0ZVwiKS5odG1sKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkKFwiI3VkcGF0ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiN1ZHBhdGVcIilbMF0pXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjdWRwYXRlIGlcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL2Vuc2VpZ25hbnQvdXBkYXRlLycraWRfZW5zZWlnbmFudCwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJCgnI3VkcGF0ZScpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgaWRfZW5zZWlnbmFudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICBcclxufSlcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3QyIiwiaWRfZW5zZWlnbmFudCIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJsYW5ndWFnZSIsInVybCIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsIm1vZGFsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImljb24iLCJyZW1vdmUiLCJheGlvcyIsInBvc3QiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwicmVzZXQiLCJyZWxvYWQiLCJmaXJlIiwidGl0bGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImdldCIsImh0bWwiXSwic291cmNlUm9vdCI6IiJ9