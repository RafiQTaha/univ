(self["webpackChunk"] = self["webpackChunk"] || []).push([["salles"],{

/***/ "./assets/components/parametre/salles.js":
/*!***********************************************!*\
  !*** ./assets/components/parametre/salles.js ***!
  \***********************************************/
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
  var table = $("#datatables_gestion_salles").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/salles/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('body').on('click', '#datatables_gestion_salles tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_salle = null;
    } else {
      $("#datatables_gestion_salles tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_salle = $(this).attr('id');
    }

    console.log(id_salle);
  });
  $("#ajouter").on("click", function () {
    $("#ajout_modal").modal("show");
  }); // // 

  $("#save").on("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var formData, icon, request, response, _message;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#save")[0]);
              icon = $("#save button i");
              _context.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context.next = 7;
              return axios.post('/parametre/salles/new', formData);

            case 7:
              request = _context.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              id_salle = false;
              $("#ajout_modal").modal("hide");
              Toast.fire({
                icon: 'success',
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
            if (id_salle) {
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
            return axios.get('/parametre/salles/details/' + id_salle);

          case 8:
            request = _context2.sent;
            response = request.data;
            console.log(response);
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("body #modifier_modal #update").html(response);
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
  $("#update").on("submit", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var formData, icon, request, response, _message3;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#update")[0]);
              icon = $("#update button i");
              _context3.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context3.next = 7;
              return axios.post('/parametre/salles/update/' + id_salle, formData);

            case 7:
              request = _context3.sent;
              response = request.data;
              $('#update')[0].reset();
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload();
              id_salle = false;
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
  $("#supprimer").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var icon, res, request, response, _message4;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (id_salle) {
              _context4.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!'
            });
            return _context4.abrupt("return");

          case 3:
            icon = $("#supprimer i");
            res = confirm('Vous voulez vraiment supprimer cette salle ?');

            if (!(res == 1)) {
              _context4.next = 24;
              break;
            }

            icon.removeClass('fa-trash').addClass("fa-spinner fa-spin ");
            _context4.prev = 7;
            _context4.next = 10;
            return axios.post('/parametre/salles/delete/' + id_salle);

          case 10:
            request = _context4.sent;
            response = request.data;
            table.ajax.reload();
            id_salle = false;
            icon.addClass('fa-trash').removeClass("fa-spinner fa-spin ");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context4.next = 24;
            break;

          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](7);
            console.log(_context4.t0, _context4.t0.response);
            _message4 = _context4.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: _message4
            });
            icon.addClass('fa-trash').removeClass("fa-spinner fa-spin ");

          case 24:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[7, 18]]);
  })));
  $("#extraction").on("click", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var icon, request, response, _message5;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              icon = $("#extraction i");
              icon.removeClass("fa-print").addClass("fa-spinner fa-spin");
              _context5.prev = 3;
              _context5.next = 6;
              return axios.post("/parametre/salles/extraction");

            case 6:
              request = _context5.sent;
              response = request.data;
              window.open("/" + response.file, "_blank");
              icon.addClass("fa-print").removeClass("fa-spinner fa-spin ");
              _context5.next = 18;
              break;

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](3);
              _message5 = _context5.t0.response.data;
              console.log(_context5.t0, _context5.t0.response);
              Toast.fire({
                icon: "error",
                title: _message5
              });
              icon.addClass("fa-print").removeClass("fa-spinner fa-spin ");

            case 18:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[3, 12]]);
    }));

    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }());
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/parametre/salles.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQ3pCQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFTUcsY0FBQUEsSUFIbUIsR0FHWjVCLENBQUMsQ0FBQyxlQUFELENBSFc7QUFJekI0QixjQUFBQSxJQUFJLENBQUNYLFdBQUwsQ0FBaUIsVUFBakIsRUFBNkJFLFFBQTdCLENBQXNDLG9CQUF0QztBQUp5QjtBQUFBO0FBQUEscUJBT0NXLEtBQUssQ0FBQ0MsSUFBTixDQUNsQiw4QkFEa0IsQ0FQRDs7QUFBQTtBQU9mQyxjQUFBQSxPQVBlO0FBVWZDLGNBQUFBLFFBVmUsR0FVSkQsT0FBTyxDQUFDRSxJQVZKO0FBWXJCVSxjQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxNQUFNWixRQUFRLENBQUNhLElBQTNCLEVBQWlDLFFBQWpDO0FBQ0FsQixjQUFBQSxJQUFJLENBQUNULFFBQUwsQ0FBYyxVQUFkLEVBQTBCRixXQUExQixDQUFzQyxxQkFBdEM7QUFicUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlZnNCLGNBQUFBLFNBZmUsR0FlTCxhQUFNTixRQUFOLENBQWVDLElBZlY7QUFnQnJCYixjQUFBQSxPQUFPLENBQUNDLEdBQVIsZUFBbUIsYUFBTVcsUUFBekI7QUFDQTdDLGNBQUFBLEtBQUssQ0FBQ2lELElBQU4sQ0FBVztBQUNQVCxnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUFUsZ0JBQUFBLEtBQUssRUFBRUM7QUFGQSxlQUFYO0FBSUFYLGNBQUFBLElBQUksQ0FBQ1QsUUFBTCxDQUFjLFVBQWQsRUFBMEJGLFdBQTFCLENBQXNDLHFCQUF0Qzs7QUFyQnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUJILENBMUxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFyYW1ldHJlL3NhbGxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxuICAgIH0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKVxyXG4gICAgbGV0IGlkX2Vuc2VpZ25hbnQ7XHJcbiAgICB2YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9zYWxsZXNcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvcGFyYW1ldHJlL3NhbGxlcy9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhdGFibGVzX2dlc3Rpb25fc2FsbGVzIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zYWxsZSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25fc2FsbGVzIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfc2FsbGUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkX3NhbGxlKTtcclxuICAgIH0pXHJcbiAgICBcclxuXHJcbiAgICAkKFwiI2Fqb3V0ZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcbiAgICAvLyAvLyBcclxuICAgICQoXCIjc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiNzYXZlXCIpWzBdKVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3NhdmUgYnV0dG9uIGlcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvc2FsbGVzL25ldycsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJCgnI3NhdmUnKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBpZF9zYWxsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkKFwiI2Fqb3V0X21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNtb2RpZmllclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoIWlkX3NhbGxlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbmVyIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL3BhcmFtZXRyZS9zYWxsZXMvZGV0YWlscy8nK2lkX3NhbGxlKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAkKFwiYm9keSAjbW9kaWZpZXJfbW9kYWwgI3VwZGF0ZVwiKS5odG1sKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkKFwiI3VwZGF0ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiN1cGRhdGVcIilbMF0pXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjdXBkYXRlIGJ1dHRvbiBpXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9zYWxsZXMvdXBkYXRlLycraWRfc2FsbGUsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyN1cGRhdGUnKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIGlkX3NhbGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNzdXBwcmltZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZighaWRfc2FsbGUpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uZXIgdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc3VwcHJpbWVyIGlcIik7XHJcblxyXG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgc2FsbGUgPycpO1xyXG4gICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtdHJhc2gnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9zYWxsZXMvZGVsZXRlLycraWRfc2FsbGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgaWRfc2FsbGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdHJhc2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdHJhc2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNleHRyYWN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2V4dHJhY3Rpb24gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtcHJpbnRcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgXCIvcGFyYW1ldHJlL3NhbGxlcy9leHRyYWN0aW9uXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIiArIHJlc3BvbnNlLmZpbGUsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtcHJpbnRcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXByaW50XCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgXHJcbn0pXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwic2VsZWN0MiIsImlkX2Vuc2VpZ25hbnQiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwibGFuZ3VhZ2UiLCJ1cmwiLCJvbiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJpZF9zYWxsZSIsImFkZENsYXNzIiwiYXR0ciIsImNvbnNvbGUiLCJsb2ciLCJtb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpY29uIiwicmVtb3ZlIiwiYXhpb3MiLCJwb3N0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsInJlc2V0IiwicmVsb2FkIiwiZmlyZSIsInRpdGxlIiwibWVzc2FnZSIsImdldCIsImh0bWwiLCJyZXMiLCJjb25maXJtIiwid2luZG93Iiwib3BlbiIsImZpbGUiXSwic291cmNlUm9vdCI6IiJ9