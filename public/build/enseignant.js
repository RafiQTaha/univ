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
  }); // $(this).val().length

  $("body #save #rib").on("input", function () {
    console.log($("body #save #rib").val().length);

    if ($("body #save #rib").val().length === 24) {
      // alert('We have a winner!'); 
      $("body #save .rib i").css('color', 'green');
    } else {
      $("body #save .rib i").css('color', 'currentcolor');
    }
  });
  $("body #update").on("input", "#rib", function () {
    console.log($("body #update #rib").val().length);

    if ($("body #update #rib").val().length === 24) {
      // alert('We have a winner!'); 
      $("body #update .rib i").css('color', 'green');
    } else {
      $("body #update .rib i").css('color', 'currentcolor');
    }
  });
  $("body .update #rib").on("input", function () {
    console.log($("body #rib").val().length);

    if ($("body .update #rib").val().length === 24) {
      $("body .update .rib i").css('color', 'green');
    } else {
      $("body .update .rib i").css('color', 'currentcolor');
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
              icon = $("#save button i");
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
  $(this).val().length;
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
              return axios.post('/parametre/enseignant/update/' + id_enseignant, formData);

            case 7:
              request = _context3.sent;
              response = request.data;
              $('#update')[0].reset();
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
  $("#supprimer").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var icon, res, request, response, _message4;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (id_enseignant) {
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
            res = confirm('Vous voulez vraiment supprimer cet enseignant ?');

            if (!(res == 1)) {
              _context4.next = 24;
              break;
            }

            _context4.prev = 6;
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            _context4.next = 10;
            return axios.post('/parametre/enseignant/delete/' + id_enseignant);

          case 10:
            request = _context4.sent;
            response = request.data;
            table.ajax.reload();
            id_enseignant = false;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            Toast.fire({
              icon: 'success',
              title: 'Enseignant bien Supprimer'
            });
            _context4.next = 24;
            break;

          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](6);
            console.log(_context4.t0, _context4.t0.response);
            _message4 = _context4.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: _message4
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/parametre/enseignant.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFSLGVBQW1CLGFBQU1jLFFBQXpCO0FBQ01NLFlBQUFBLFNBekJVLEdBeUJBLGFBQU1OLFFBQU4sQ0FBZUMsSUF6QmY7QUEwQmhCaEQsWUFBQUEsS0FBSyxDQUFDbUQsSUFBTixDQUFXO0FBQ1BULGNBQUFBLElBQUksRUFBRSxPQURDO0FBRVBVLGNBQUFBLEtBQUssRUFBRUM7QUFGQSxhQUFYO0FBSUFYLFlBQUFBLElBQUksQ0FBQ1osUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBOUJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE1QjtBQW9DSCxDQTVMRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhcmFtZXRyZS9lbnNlaWduYW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgJCgnc2VsZWN0Jykuc2VsZWN0MigpXHJcbiAgICBsZXQgaWRfZW5zZWlnbmFudDtcclxuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2Vuc2VpZ25hbnRcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvcGFyYW1ldHJlL2Vuc2VpZ25hbnQvbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YXRhYmxlc19nZXN0aW9uX2Vuc2VpZ25hbnQgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2Vuc2VpZ25hbnQgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2Vuc2VpZ25hbnQgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9lbnNlaWduYW50ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICAvLyAkKHRoaXMpLnZhbCgpLmxlbmd0aFxyXG4gICAgJChcImJvZHkgI3NhdmUgI3JpYlwiKS5vbihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygkKFwiYm9keSAjc2F2ZSAjcmliXCIpLnZhbCgpLmxlbmd0aCApXHJcbiAgICAgICAgaWYoICQoXCJib2R5ICNzYXZlICNyaWJcIikudmFsKCkubGVuZ3RoID09PSAyNCApIHsgXHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KCdXZSBoYXZlIGEgd2lubmVyIScpOyBcclxuICAgICAgICAgICAgJChcImJvZHkgI3NhdmUgLnJpYiBpXCIpLmNzcygnY29sb3InLCdncmVlbicpXHJcbiAgICAgICAgfWVsc2UgeyBcclxuICAgICAgICAgICAgJChcImJvZHkgI3NhdmUgLnJpYiBpXCIpLmNzcygnY29sb3InLCdjdXJyZW50Y29sb3InKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiYm9keSAjdXBkYXRlXCIpLm9uKFwiaW5wdXRcIixcIiNyaWJcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCQoXCJib2R5ICN1cGRhdGUgI3JpYlwiKS52YWwoKS5sZW5ndGggKVxyXG4gICAgICAgIGlmKCAkKFwiYm9keSAjdXBkYXRlICNyaWJcIikudmFsKCkubGVuZ3RoID09PSAyNCApIHsgXHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KCdXZSBoYXZlIGEgd2lubmVyIScpOyBcclxuICAgICAgICAgICAgJChcImJvZHkgI3VwZGF0ZSAucmliIGlcIikuY3NzKCdjb2xvcicsJ2dyZWVuJylcclxuICAgICAgICB9ZWxzZSB7IFxyXG4gICAgICAgICAgICAkKFwiYm9keSAjdXBkYXRlIC5yaWIgaVwiKS5jc3MoJ2NvbG9yJywnY3VycmVudGNvbG9yJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiYm9keSAudXBkYXRlICNyaWJcIikub24oXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJChcImJvZHkgI3JpYlwiKS52YWwoKS5sZW5ndGggKVxyXG4gICAgICAgIGlmKCAkKFwiYm9keSAudXBkYXRlICNyaWJcIikudmFsKCkubGVuZ3RoID09PSAyNCApIHtcclxuICAgICAgICAgICAgJChcImJvZHkgLnVwZGF0ZSAucmliIGlcIikuY3NzKCdjb2xvcicsJ2dyZWVuJylcclxuICAgICAgICB9ZWxzZSB7IFxyXG4gICAgICAgICAgICAkKFwiYm9keSAudXBkYXRlIC5yaWIgaVwiKS5jc3MoJ2NvbG9yJywnY3VycmVudGNvbG9yJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjYWpvdXRlclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAkKFwiI2Fqb3V0X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuICAgIC8vIFxyXG4gICAgJChcIiNzYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3NhdmVcIilbMF0pXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc2F2ZSBidXR0b24gaVwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9lbnNlaWduYW50L25ldycsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJCgnI3NhdmUnKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBpZF9lbnNlaWduYW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2NlZXMnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjbW9kaWZpZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCFpZF9lbnNlaWduYW50KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbmVyIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL3BhcmFtZXRyZS9lbnNlaWduYW50L2RldGFpbHMvJytpZF9lbnNlaWduYW50KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAkKFwiYm9keSAjbW9kaWZpZXJfbW9kYWwgI3VwZGF0ZVwiKS5odG1sKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkKHRoaXMpLnZhbCgpLmxlbmd0aFxyXG4gICAgJChcIiN1cGRhdGVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjdXBkYXRlXCIpWzBdKVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3VwZGF0ZSBidXR0b24gaVwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvZW5zZWlnbmFudC91cGRhdGUvJytpZF9lbnNlaWduYW50LCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKCcjdXBkYXRlJylbMF0ucmVzZXQoKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBpZF9lbnNlaWduYW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNzdXBwcmltZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZighaWRfZW5zZWlnbmFudCl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb25lciB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzdXBwcmltZXIgaVwiKTtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IHN1cHByaW1lciBjZXQgZW5zZWlnbmFudCA/Jyk7XHJcbiAgICAgICAgaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL2Vuc2VpZ25hbnQvZGVsZXRlLycraWRfZW5zZWlnbmFudCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICBpZF9lbnNlaWduYW50ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Vuc2VpZ25hbnQgYmllbiBTdXBwcmltZXInLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICBcclxufSlcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3QyIiwiaWRfZW5zZWlnbmFudCIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJsYW5ndWFnZSIsInVybCIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsImNvbnNvbGUiLCJsb2ciLCJ2YWwiLCJsZW5ndGgiLCJjc3MiLCJtb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpY29uIiwicmVtb3ZlIiwiYXhpb3MiLCJwb3N0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsInJlc2V0IiwicmVsb2FkIiwiZmlyZSIsInRpdGxlIiwibWVzc2FnZSIsImdldCIsImh0bWwiLCJyZXMiLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==