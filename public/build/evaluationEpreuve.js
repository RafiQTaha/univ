(self["webpackChunk"] = self["webpackChunk"] || []).push([["evaluationEpreuve"],{

/***/ "./assets/components/evaluation/epreuve.js":
/*!*************************************************!*\
  !*** ./assets/components/evaluation/epreuve.js ***!
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
var check;
$(document).ready(function () {
  $("#enregister, #valider, #devalider, #imprimer").attr('disabled', true);

  var enableButtons = function enableButtons() {
    $("#imprimer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false);

    if (check == 0) {
      $("#enregister").removeClass('btn-secondary').addClass('btn-primary').attr('disabled', false);
      $("#valider").removeClass('btn-secondary').addClass('btn-danger').attr('disabled', false);
      $("#devalider").addClass('btn-secondary').removeClass('btn-success').attr('disabled', true);
    } else {
      $("#enregister").addClass('btn-secondary').removeClass('btn-primary').attr('disabled', true);
      $("#valider").addClass('btn-secondary').removeClass('btn-danger').attr('disabled', true);
      $("#devalider").removeClass('btn-secondary').addClass('btn-success').attr('disabled', false);
    }
  };

  var natureDesEpreuves = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(nature) {
      var request, response, message;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios.post('/api/nature_erpeuve/' + nature);

            case 3:
              request = _context.sent;
              response = request.data;
              $("#nepreuve").html(response).select2();
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              message = _context.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function natureDesEpreuves(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  natureDesEpreuves("normale");
  $('.nav-pills a').on('click', function (e) {
    $(this).tab('show');
    $("#list_epreuve_normal").empty();

    if ($(this).html() == 'Session normal') {
      natureDesEpreuves("normale");
    } else {
      natureDesEpreuves("rattrapage");
    }
  });
  $("#etablissement").select2();
  $("#nepreuve").select2();
  $("#order").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context2.next = 7;
              break;
            }

            _context2.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context2.sent;
            response = request.data;

          case 7:
            $('#formation').html(response).select2();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_formation = $(this).val();
            response = "";

            if (!(id_formation != "")) {
              _context3.next = 7;
              break;
            }

            _context3.next = 5;
            return axios.get('/api/promotion/' + id_formation);

          case 5:
            request = _context3.sent;
            response = request.data;

          case 7:
            $('#promotion').html(response).select2();

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_promotion, response, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_promotion = $(this).val();
            response = "";

            if (!(id_promotion != "")) {
              _context4.next = 7;
              break;
            }

            _context4.next = 5;
            return axios.get('/api/semestre/' + id_promotion);

          case 5:
            request = _context4.sent;
            response = request.data;

          case 7:
            $('#semestre').html(response).select2();

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_semestre, response, request;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_semestre = $(this).val();
            response = "";

            if (!(id_semestre != "")) {
              _context5.next = 7;
              break;
            }

            _context5.next = 5;
            return axios.get('/api/module/' + id_semestre);

          case 5:
            request = _context5.sent;
            response = request.data;

          case 7:
            $('#module').html(response).select2();

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#module").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_module, response, request;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_module = $(this).val();
            response = "";

            if (!(id_module != "")) {
              _context6.next = 7;
              break;
            }

            _context6.next = 5;
            return axios.get('/api/element/' + id_module);

          case 5:
            request = _context6.sent;
            response = request.data;

          case 7:
            $('#element').html(response).select2();

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#get_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var element_id, nature_epreuve_id, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              $("#list_epreuve_normal").empty();
              element_id = $('#element').val();
              nature_epreuve_id = $('#nepreuve').val();

              if (!(element_id == "" || !element_id)) {
                _context7.next = 7;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection element!'
              });
              return _context7.abrupt("return");

            case 7:
              if (!(nature_epreuve_id == "" || !nature_epreuve_id)) {
                _context7.next = 10;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection nature d\'epreuve!'
              });
              return _context7.abrupt("return");

            case 10:
              icon = $("#get_list_etudiant i");
              icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
              _context7.prev = 12;
              formData = new FormData();
              formData.append("order", $("#order").val());
              _context7.next = 17;
              return axios.post('/evaluation/epreuve/list/' + element_id + '/' + nature_epreuve_id, formData);

            case 17:
              request = _context7.sent;
              response = request.data;

              if ($.fn.DataTable.isDataTable("#list_epreuve_normal")) {
                $('#list_epreuve_normal').DataTable().clear().destroy();
              }

              $("#list_epreuve_normal").html(response.html).DataTable({
                language: {
                  url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                }
              });
              check = response.check;

              if (check == 1) {
                Toast.fire({
                  icon: 'info',
                  title: "Operation déja valider"
                });
              }

              enableButtons();
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              _context7.next = 33;
              break;

            case 27:
              _context7.prev = 27;
              _context7.t0 = _context7["catch"](12);
              console.log(_context7.t0);
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              message = _context7.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 33:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[12, 27]]);
    }));

    return function (_x2) {
      return _ref7.apply(this, arguments);
    };
  }());
  $("#imprimer").on("click", function () {
    $("#imprimer_list").modal("show");
  });
  $("#valider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            icon = $("#valider i");
            icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
            _context8.prev = 2;
            _context8.next = 5;
            return axios.post('/evaluation/epreuve/valider');

          case 5:
            request = _context8.sent;
            response = request.data;
            check = 1;
            enableButtons();
            Toast.fire({
              icon: 'success',
              title: response
            });
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            _context8.next = 19;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](2);
            console.log(_context8.t0);
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            message = _context8.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 19:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 13]]);
  })));
  $("#devalider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            icon = $("#devalider i");
            icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
            _context9.prev = 2;
            _context9.next = 5;
            return axios.post('/evaluation/epreuve/devalider');

          case 5:
            request = _context9.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context9.next = 19;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](2);
            console.log(_context9.t0);
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            message = _context9.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 19:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 13]]);
  })));
  $("#enregister").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            icon = $("#enregister i");
            icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
            _context10.prev = 2;
            _context10.next = 5;
            return axios.post('/evaluation/epreuve/enregistre');

          case 5:
            request = _context10.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context10.next = 19;
            break;

          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10["catch"](2);
            console.log(_context10.t0);
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
            message = _context10.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 19:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 13]]);
  })));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/evaluation/epreuve.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BSmU7QUFLakJDLFlBQUFBLFFBTGlCLEdBS05ELE9BQU8sQ0FBQ0UsSUFMRjtBQU1yQmQsWUFBQUEsS0FBSyxHQUFHLENBQVI7QUFDQUssWUFBQUEsYUFBYTtBQUNiYyxZQUFBQSxJQUFJLENBQUNaLFFBQUwsQ0FBYyxVQUFkLEVBQTBCRCxXQUExQixDQUFzQyxvQkFBdEM7QUFDQWxCLFlBQUFBLEtBQUssQ0FBQzhCLElBQU4sQ0FBVztBQUNQQyxjQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxjQUFBQSxLQUFLLEVBQUVQO0FBRkEsYUFBWDtBQVRxQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWNyQmdDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUjtBQUNBM0IsWUFBQUEsSUFBSSxDQUFDWixRQUFMLENBQWMsVUFBZCxFQUEwQkQsV0FBMUIsQ0FBc0Msb0JBQXRDO0FBQ01XLFlBQUFBLE9BaEJlLEdBZ0JMLGNBQU1KLFFBQU4sQ0FBZUMsSUFoQlY7QUFpQnJCMUIsWUFBQUEsS0FBSyxDQUFDOEIsSUFBTixDQUFXO0FBQ1BDLGNBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGNBQUFBLEtBQUssRUFBRUg7QUFGQSxhQUFYOztBQWpCcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBN0I7QUF5QkgsQ0E1TkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ldmFsdWF0aW9uL2VwcmV1dmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbn0pXHJcblxyXG4gICAgbGV0IGNoZWNrO1xyXG4gICAgXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICAkKFwiI2VucmVnaXN0ZXIsICN2YWxpZGVyLCAjZGV2YWxpZGVyLCAjaW1wcmltZXJcIikuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxyXG5cclxuICAgIGNvbnN0IGVuYWJsZUJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgJChcIiNpbXByaW1lclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4taW5mbycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgaWYoY2hlY2sgPT0gMCkge1xyXG4gICAgICAgICAgICAkKFwiI2VucmVnaXN0ZXJcIikucmVtb3ZlQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5hZGRDbGFzcygnYnRuLXByaW1hcnknKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAkKFwiI3ZhbGlkZXJcIikucmVtb3ZlQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5hZGRDbGFzcygnYnRuLWRhbmdlcicpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgICQoXCIjZGV2YWxpZGVyXCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi1zdWNjZXNzJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZW5yZWdpc3RlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgJChcIiN2YWxpZGVyXCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi1kYW5nZXInKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgICAgICQoXCIjZGV2YWxpZGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1zdWNjZXNzJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBuYXR1cmVEZXNFcHJldXZlcyA9IGFzeW5jIChuYXR1cmUpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9uYXR1cmVfZXJwZXV2ZS8nK25hdHVyZSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAkKFwiI25lcHJldXZlXCIpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuYXR1cmVEZXNFcHJldXZlcyhcIm5vcm1hbGVcIik7XHJcbiAgICAkKCcubmF2LXBpbGxzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQodGhpcykudGFiKCdzaG93JylcclxuICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuZW1wdHkoKVxyXG4gICAgICAgIGlmICgkKHRoaXMpLmh0bWwoKSA9PSAnU2Vzc2lvbiBub3JtYWwnKSB7XHJcbiAgICAgICAgICAgIG5hdHVyZURlc0VwcmV1dmVzKFwibm9ybWFsZVwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmF0dXJlRGVzRXByZXV2ZXMoXCJyYXR0cmFwYWdlXCIpO1xyXG4gICAgICAgIH0gICBcclxuICAgIFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjbmVwcmV1dmVcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNvcmRlclwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc2VtZXN0cmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nK2lkX3NlbWVzdHJlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI21vZHVsZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnRcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKS5lbXB0eSgpXHJcbiAgICAgICAgbGV0IGVsZW1lbnRfaWQgPSAkKCcjZWxlbWVudCcpLnZhbCgpO1xyXG4gICAgICAgIGxldCBuYXR1cmVfZXByZXV2ZV9pZCA9ICQoJyNuZXByZXV2ZScpLnZhbCgpO1xyXG4gICAgICAgIGlmKGVsZW1lbnRfaWQgPT0gXCJcIiB8fCAhZWxlbWVudF9pZCkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiBlbGVtZW50IScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobmF0dXJlX2VwcmV1dmVfaWQgPT0gXCJcIiB8fCAhbmF0dXJlX2VwcmV1dmVfaWQpIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gbmF0dXJlIGRcXCdlcHJldXZlIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnQgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zZWFyY2gnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwib3JkZXJcIiwgJChcIiNvcmRlclwiKS52YWwoKSlcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL2VwcmV1dmUvbGlzdC8nK2VsZW1lbnRfaWQrJy8nK25hdHVyZV9lcHJldXZlX2lkLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2xpc3RfZXByZXV2ZV9ub3JtYWwnKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuaHRtbChyZXNwb25zZS5odG1sKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNoZWNrID0gcmVzcG9uc2UuY2hlY2s7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrID09IDEpe1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9wZXJhdGlvbiBkw6lqYSB2YWxpZGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXNlYXJjaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zZWFyY2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQoXCIjaW1wcmltZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7ICBcclxuICAgICAgICAkKFwiI2ltcHJpbWVyX2xpc3RcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjdmFsaWRlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3ZhbGlkZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL2VwcmV1dmUvdmFsaWRlcicpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgY2hlY2sgPSAxO1xyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjZGV2YWxpZGVyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZGV2YWxpZGVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbG9jay1vcGVuJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL2VwcmV1dmUvZGV2YWxpZGVyJyk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBjaGVjayA9IDA7XHJcbiAgICAgICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jay1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jay1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjZW5yZWdpc3RlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VucmVnaXN0ZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9lcHJldXZlL2VucmVnaXN0cmUnKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNoZWNrID0gMDtcclxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBcclxufSlcclxuXHJcblxyXG4gICAgXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImNoZWNrIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhdHRyIiwiZW5hYmxlQnV0dG9ucyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJuYXR1cmVEZXNFcHJldXZlcyIsIm5hdHVyZSIsImF4aW9zIiwicG9zdCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImRhdGEiLCJodG1sIiwic2VsZWN0MiIsIm1lc3NhZ2UiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwib24iLCJlIiwidGFiIiwiZW1wdHkiLCJpZF9ldGFiIiwidmFsIiwiZ2V0IiwiaWRfZm9ybWF0aW9uIiwiaWRfcHJvbW90aW9uIiwiaWRfc2VtZXN0cmUiLCJpZF9tb2R1bGUiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnRfaWQiLCJuYXR1cmVfZXByZXV2ZV9pZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmbiIsIkRhdGFUYWJsZSIsImlzRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95IiwibGFuZ3VhZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwibW9kYWwiXSwic291cmNlUm9vdCI6IiJ9