(self["webpackChunk"] = self["webpackChunk"] || []).push([["serieBac"],{

/***/ "./assets/components/parametre/serieBac.js":
/*!*************************************************!*\
  !*** ./assets/components/parametre/serieBac.js ***!
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
  var id_seriebac;
  var table = $("#datatables_gestion_seriebac").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/seriebac/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("select").select2();
  $('body').on('click', '#datatables_gestion_seriebac tbody tr', function () {
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_seriebac = null;
    } else {
      $("#datatables_gestion_seriebac tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_seriebac = $(this).attr('id');
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
              return axios.post('/parametre/seriebac/new', formData);

            case 7:
              request = _context.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              id_seriebac = false;
              Toast.fire({
                icon: 'success',
                title: 'seriebac bien Ajouter'
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
            if (id_seriebac) {
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
            return axios.get('/parametre/seriebac/details/' + id_seriebac);

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
              return axios.post('/parametre/seriebac/update/' + id_seriebac, formData);

            case 7:
              request = _context3.sent;
              response = request.data;
              table.ajax.reload();
              id_seriebac = false;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              Toast.fire({
                icon: 'success',
                title: 'seriebac bien Modifier'
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
            if (id_seriebac) {
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
            res = confirm('Vous voulez vraiment supprimer cette serie de bac ?');

            if (!(res == 1)) {
              _context4.next = 24;
              break;
            }

            _context4.prev = 6;
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            _context4.next = 10;
            return axios.post('/parametre/seriebac/delete/' + id_seriebac);

          case 10:
            request = _context4.sent;
            response = request.data;
            table.ajax.reload();
            id_seriebac = false;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            Toast.fire({
              icon: 'success',
              title: 'seriebac bien Supprimer'
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/parametre/serieBac.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxpQkFBWixFQUErQlIsUUFBL0IsQ0FBd0MscUJBQXhDO0FBYmdCO0FBQUEsbUJBY01TLEtBQUssQ0FBQ0MsSUFBTixDQUFXLGdDQUE4QnpCLFdBQXpDLENBZE47O0FBQUE7QUFjVjBCLFlBQUFBLE9BZFU7QUFlVkMsWUFBQUEsUUFmVSxHQWVDRCxPQUFPLENBQUNFLElBZlQ7QUFnQmhCM0IsWUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVd5QixNQUFYO0FBQ0E5QixZQUFBQSxXQUFXLEdBQUcsS0FBZDtBQUNBc0IsWUFBQUEsSUFBSSxDQUFDUCxRQUFMLENBQWMsaUJBQWQsRUFBaUNELFdBQWpDLENBQTZDLHFCQUE3QztBQUNBN0IsWUFBQUEsS0FBSyxDQUFDOEMsSUFBTixDQUFXO0FBQ1BULGNBQUFBLElBQUksRUFBRSxTQURDO0FBRVBVLGNBQUFBLEtBQUssRUFBRTtBQUZBLGFBQVg7QUFuQmdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBd0JoQkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQW1CLGFBQU1QLFFBQXpCO0FBQ01RLFlBQUFBLE9BekJVLEdBeUJBLGFBQU1SLFFBQU4sQ0FBZUMsSUF6QmY7QUEwQmhCM0MsWUFBQUEsS0FBSyxDQUFDOEMsSUFBTixDQUFXO0FBQ1BULGNBQUFBLElBQUksRUFBRSxPQURDO0FBRVBVLGNBQUFBLEtBQUssRUFBRUc7QUFGQSxhQUFYO0FBSUFiLFlBQUFBLElBQUksQ0FBQ1AsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBOUJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE1QjtBQW9DSCxDQTVKRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhcmFtZXRyZS9zZXJpZUJhYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxuICAgIH0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIGxldCBpZF9zZXJpZWJhYztcclxuICAgICAgICBcclxuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX3NlcmllYmFjXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL3BhcmFtZXRyZS9zZXJpZWJhYy9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9zZXJpZWJhYyB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3NlcmllYmFjID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9zZXJpZWJhYyB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3NlcmllYmFjID0gJCh0aGlzKS5hdHRyKCdpZCcpOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIjYWpvdXRlclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAkKFwiI2Fqb3V0X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG5cclxuICAgIH0pXHJcbiAgICAkKFwiI3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjc2F2ZVwiKVswXSlcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlIGlcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvc2VyaWViYWMvbmV3JywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAkKCcjc2F2ZScpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIGlkX3NlcmllYmFjID0gZmFsc2VcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3NlcmllYmFjIGJpZW4gQWpvdXRlcicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjbW9kaWZpZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCFpZF9zZXJpZWJhYyl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb25lciB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllciBpXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL3BhcmFtZXRyZS9zZXJpZWJhYy9kZXRhaWxzLycraWRfc2VyaWViYWMpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgI2Rlc2lnbmF0aW9uXCIpLnZhbChyZXNwb25zZS5kZXNpZ25hdGlvbilcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAjYWJyZXZpYXRpb25cIikudmFsKHJlc3BvbnNlLmFicmV2aWF0aW9uKVxyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQoXCIjdWRwYXRlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3VkcGF0ZVwiKVswXSlcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiN1ZHBhdGUgaVwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9zZXJpZWJhYy91cGRhdGUvJytpZF9zZXJpZWJhYywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgaWRfc2VyaWViYWMgPSBmYWxzZVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdzZXJpZWJhYyBiaWVuIE1vZGlmaWVyJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI3N1cHByaW1lclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKCFpZF9zZXJpZWJhYyl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb25lciB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiN1ZHBhdGUgaVwiKTtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBzZXJpZSBkZSBiYWMgPycpO1xyXG4gICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9zZXJpZWJhYy9kZWxldGUvJytpZF9zZXJpZWJhYyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICBpZF9zZXJpZWJhYyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdzZXJpZWJhYyBiaWVuIFN1cHByaW1lcicsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgIFxyXG59KVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImlkX3NlcmllYmFjIiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsIm1vZGFsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImljb24iLCJyZW1vdmUiLCJheGlvcyIsInBvc3QiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwicmVzZXQiLCJyZWxvYWQiLCJmaXJlIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImdldCIsInZhbCIsImRlc2lnbmF0aW9uIiwiYWJyZXZpYXRpb24iLCJyZXMiLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==