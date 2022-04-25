(self["webpackChunk"] = self["webpackChunk"] || []).push([["impression"],{

/***/ "./assets/components/administration/impression.js":
/*!********************************************************!*\
  !*** ./assets/components/administration/impression.js ***!
  \********************************************************/
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
var check = 0;
var inscription_id = null;
$(document).ready(function () {
  // $("#valider, #import, #simuler").attr('disabled', true)
  var enableButtons = function enableButtons() {
    if (check == 0) {
      // $("#valider").removeClass('btn-secondary').addClass('btn-danger').attr('disabled', false)
      // $("#import").addClass('btn-secondary').removeClass('btn-success').attr('disabled', true)
      $("#imprimer").addClass('btn-secondary').removeClass('btn-info').attr('disabled', true);
    } else {
      // $("#valider").addClass('btn-secondary').removeClass('btn-danger').attr('disabled', true)
      // $("#import").removeClass('btn-secondary').addClass('btn-success').attr('disabled', false)
      $("#imprimer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false);
    }
  };

  enableButtons();
  $("#etablissement").select2();
  $("#order").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context.next = 7;
              break;
            }

            _context.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context.sent;
            response = request.data;

          case 7:
            $('#formation').html(response).select2();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            response = "";

            if (!(id_formation != "")) {
              _context2.next = 7;
              break;
            }

            _context2.next = 5;
            return axios.get('/api/promotion/' + id_formation);

          case 5:
            request = _context2.sent;
            response = request.data;

          case 7:
            $('#promotion').html(response).select2();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_promotion, response, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_promotion = $(this).val();
            response = "";

            if (!(id_promotion != "")) {
              _context3.next = 7;
              break;
            }

            _context3.next = 5;
            return axios.get('/api/salle/' + id_promotion);

          case 5:
            request = _context3.sent;
            response = request.data;

          case 7:
            $('#salle').html(response).select2();

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#get_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var promotion_id, salle, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              $("#list_etudiants").empty();
              promotion_id = $('#promotion').val();

              if (!(promotion_id == "" || !promotion_id)) {
                _context4.next = 6;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection promotion!'
              });
              return _context4.abrupt("return");

            case 6:
              salle = $('#salle').val();

              if (!(salle == "" || !salle)) {
                _context4.next = 10;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une salle!'
              });
              return _context4.abrupt("return");

            case 10:
              icon = $("#get_list_etudiant i");
              icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
              _context4.prev = 12;
              formData = new FormData();
              formData.append("order", $("#order").val());
              _context4.next = 17;
              return axios.post('/administration/impression/list/' + promotion_id + "/" + salle, formData);

            case 17:
              request = _context4.sent;
              response = request.data; // $("#list_epreuve_normal").DataTable().destroy()

              if ($.fn.DataTable.isDataTable("#list_etudiants")) {
                $('#list_etudiants').DataTable().clear().destroy();
              }

              $("#list_etudiants").html(response).DataTable({
                scrollX: true,
                scrollY: true,
                language: {
                  url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                }
              });
              check = 1;
              enableButtons();
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              _context4.next = 32;
              break;

            case 26:
              _context4.prev = 26;
              _context4.t0 = _context4["catch"](12);
              console.log(_context4.t0);
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              message = _context4.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 32:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[12, 26]]);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
  $("#import").on('click', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              $('#import_en_masse').modal("show");

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }());
  $("#impression_canvas").on('click', function () {
    window.open("/administration/impression/canvas", '_blank');
  });
  $("#import_impression_save").on("submit", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#import_en_masse .modal-body .alert");
              modalAlert.remove();
              icon = $("#impression_enregistre i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context6.prev = 6;
              _context6.next = 9;
              return axios.post('/administration/impression/import', formData);

            case 9:
              request = _context6.sent;
              response = request.data;
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(response, "</p>\n              </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $("#get_list_etudiant").trigger("click");
              _context6.next = 23;
              break;

            case 16:
              _context6.prev = 16;
              _context6.t0 = _context6["catch"](6);
              message = _context6.t0.response.data;
              console.log(_context6.t0, _context6.t0.response);
              modalAlert.remove();
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[6, 16]]);
    }));

    return function (_x3) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("#imprimer").on('click', function () {
    window.open("/administration/impression/imprimer", '_blank');
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/administration/impression.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wcmVzc2lvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVztBQUNyQkMsRUFBQUEsS0FBSyxFQUFFLElBRGM7QUFFckJDLEVBQUFBLFFBQVEsRUFBRSxTQUZXO0FBR3JCQyxFQUFBQSxpQkFBaUIsRUFBRSxLQUhFO0FBSXJCQyxFQUFBQSxLQUFLLEVBQUUsSUFKYztBQUtyQkMsRUFBQUEsZ0JBQWdCLEVBQUUsSUFMRztBQU1yQkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFDTCxLQUFELEVBQVc7QUFDaEJBLElBQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1MsU0FBMUM7QUFDQVAsSUFBQUEsS0FBSyxDQUFDTSxnQkFBTixDQUF1QixZQUF2QixFQUFxQ1IsSUFBSSxDQUFDVSxXQUExQztBQUNIO0FBVG9CLENBQVgsQ0FBZDtBQVlBLElBQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLElBQXJCO0FBRUFDLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBYTtBQUMzQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QixRQUFHTCxLQUFLLElBQUksQ0FBWixFQUFlO0FBQ1g7QUFDQTtBQUNBRSxNQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVJLFFBQWYsQ0FBd0IsZUFBeEIsRUFBeUNDLFdBQXpDLENBQXFELFVBQXJELEVBQWlFQyxJQUFqRSxDQUFzRSxVQUF0RSxFQUFrRixJQUFsRjtBQUNILEtBSkQsTUFJTztBQUNIO0FBQ0E7QUFDQU4sTUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlSyxXQUFmLENBQTJCLGVBQTNCLEVBQTRDRCxRQUE1QyxDQUFxRCxVQUFyRCxFQUFpRUUsSUFBakUsQ0FBc0UsVUFBdEUsRUFBa0YsS0FBbEY7QUFDSDtBQUNKLEdBVkQ7O0FBV0FILEVBQUFBLGFBQWE7QUFDYkgsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JPLE9BQXBCO0FBQ0FQLEVBQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWU8sT0FBWjtBQUNBUCxFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQlEsRUFBcEIsQ0FBdUIsUUFBdkIsdUVBQWlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QkMsWUFBQUEsT0FEdUIsR0FDYlQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxHQUFSLEVBRGE7QUFFekJDLFlBQUFBLFFBRnlCLEdBRWQsRUFGYzs7QUFBQSxrQkFHMUJGLE9BQU8sSUFBSSxFQUhlO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUhHLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFrQkosT0FBNUIsQ0FKRzs7QUFBQTtBQUluQkssWUFBQUEsT0FKbUI7QUFLekJILFlBQUFBLFFBQVEsR0FBR0csT0FBTyxDQUFDQyxJQUFuQjs7QUFMeUI7QUFPN0JmLFlBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JnQixJQUFoQixDQUFxQkwsUUFBckIsRUFBK0JKLE9BQS9COztBQVA2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFqQztBQVNBUCxFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCUSxFQUFoQixDQUFtQixRQUFuQix1RUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CUyxZQUFBQSxZQURtQixHQUNKakIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxHQUFSLEVBREk7QUFFckJDLFlBQUFBLFFBRnFCLEdBRVYsRUFGVTs7QUFBQSxrQkFHdEJNLFlBQVksSUFBSSxFQUhNO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUNMLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFrQkksWUFBNUIsQ0FKRDs7QUFBQTtBQUlmSCxZQUFBQSxPQUplO0FBS3JCSCxZQUFBQSxRQUFRLEdBQUdHLE9BQU8sQ0FBQ0MsSUFBbkI7O0FBTHFCO0FBT3pCZixZQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCZ0IsSUFBaEIsQ0FBcUJMLFFBQXJCLEVBQStCSixPQUEvQjs7QUFQeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBN0I7QUFTQVAsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlEsRUFBaEIsQ0FBbUIsUUFBbkIsdUVBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQlUsWUFBQUEsWUFEbUIsR0FDSmxCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsR0FBUixFQURJO0FBRXJCQyxZQUFBQSxRQUZxQixHQUVWLEVBRlU7O0FBQUEsa0JBR3RCTyxZQUFZLElBQUksRUFITTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUlDTixLQUFLLENBQUNDLEdBQU4sQ0FBVSxnQkFBY0ssWUFBeEIsQ0FKRDs7QUFBQTtBQUlmSixZQUFBQSxPQUplO0FBS3JCSCxZQUFBQSxRQUFRLEdBQUdHLE9BQU8sQ0FBQ0MsSUFBbkI7O0FBTHFCO0FBT3pCZixZQUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlnQixJQUFaLENBQWlCTCxRQUFqQixFQUEyQkosT0FBM0I7O0FBUHlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCO0FBV0FQLEVBQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCUSxFQUF4QixDQUEyQixPQUEzQjtBQUFBLHdFQUFvQyxrQkFBZVcsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaENBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBcEIsY0FBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJxQixLQUFyQjtBQUNJQyxjQUFBQSxZQUg0QixHQUdidEIsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlUsR0FBaEIsRUFIYTs7QUFBQSxvQkFJN0JZLFlBQVksSUFBSSxFQUFoQixJQUFzQixDQUFDQSxZQUpNO0FBQUE7QUFBQTtBQUFBOztBQUs1QnBDLGNBQUFBLEtBQUssQ0FBQ3FDLElBQU4sQ0FBVztBQUNQQyxnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsZ0JBQUFBLEtBQUssRUFBRTtBQUZBLGVBQVg7QUFMNEI7O0FBQUE7QUFXNUJDLGNBQUFBLEtBWDRCLEdBV3BCMUIsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZVSxHQUFaLEVBWG9COztBQUFBLG9CQVk3QmdCLEtBQUssSUFBSSxFQUFULElBQWUsQ0FBQ0EsS0FaYTtBQUFBO0FBQUE7QUFBQTs7QUFhNUJ4QyxjQUFBQSxLQUFLLENBQUNxQyxJQUFOLENBQVc7QUFDUEMsZ0JBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGdCQUFBQSxLQUFLLEVBQUU7QUFGQSxlQUFYO0FBYjRCOztBQUFBO0FBbUIxQkQsY0FBQUEsSUFuQjBCLEdBbUJuQnhCLENBQUMsQ0FBQyxzQkFBRCxDQW5Ca0I7QUFvQmhDd0IsY0FBQUEsSUFBSSxDQUFDbkIsV0FBTCxDQUFpQixXQUFqQixFQUE4QkQsUUFBOUIsQ0FBdUMsb0JBQXZDO0FBcEJnQztBQXNCeEJ1QixjQUFBQSxRQXRCd0IsR0FzQmIsSUFBSUMsUUFBSixFQXRCYTtBQXVCNUJELGNBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUF5QjdCLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWVUsR0FBWixFQUF6QjtBQXZCNEI7QUFBQSxxQkF3Qk5FLEtBQUssQ0FBQ2tCLElBQU4sQ0FBVyxxQ0FBbUNSLFlBQW5DLEdBQWdELEdBQWhELEdBQW9ESSxLQUEvRCxFQUFzRUMsUUFBdEUsQ0F4Qk07O0FBQUE7QUF3QnRCYixjQUFBQSxPQXhCc0I7QUF5QnhCSCxjQUFBQSxRQXpCd0IsR0F5QmJHLE9BQU8sQ0FBQ0MsSUF6QkssRUEwQjVCOztBQUNBLGtCQUFJZixDQUFDLENBQUMrQixFQUFGLENBQUtDLFNBQUwsQ0FBZUMsV0FBZixDQUEyQixpQkFBM0IsQ0FBSixFQUFtRDtBQUMvQ2pDLGdCQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmdDLFNBQXJCLEdBQWlDRSxLQUFqQyxHQUF5Q0MsT0FBekM7QUFDRDs7QUFDSG5DLGNBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCZ0IsSUFBckIsQ0FBMEJMLFFBQTFCLEVBQW9DcUIsU0FBcEMsQ0FBOEM7QUFDMUNJLGdCQUFBQSxPQUFPLEVBQUUsSUFEaUM7QUFFMUNDLGdCQUFBQSxPQUFPLEVBQUUsSUFGaUM7QUFHMUNDLGdCQUFBQSxRQUFRLEVBQUU7QUFDTkMsa0JBQUFBLEdBQUcsRUFBRTtBQURDO0FBSGdDLGVBQTlDO0FBT0F6QyxjQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNBSyxjQUFBQSxhQUFhO0FBQ2JxQixjQUFBQSxJQUFJLENBQUNwQixRQUFMLENBQWMsV0FBZCxFQUEyQkMsV0FBM0IsQ0FBdUMsb0JBQXZDO0FBdkM0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXlDNUJtQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7QUFDQWpCLGNBQUFBLElBQUksQ0FBQ3BCLFFBQUwsQ0FBYyxXQUFkLEVBQTJCQyxXQUEzQixDQUF1QyxvQkFBdkM7QUFDTXFDLGNBQUFBLE9BM0NzQixHQTJDWixhQUFNL0IsUUFBTixDQUFlSSxJQTNDSDtBQTRDNUI3QixjQUFBQSxLQUFLLENBQUNxQyxJQUFOLENBQVc7QUFDUEMsZ0JBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGdCQUFBQSxLQUFLLEVBQUVpQjtBQUZBLGVBQVg7O0FBNUM0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFwQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFEQTFDLEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVEsRUFBYixDQUFnQixPQUFoQjtBQUFBLHdFQUF5QixrQkFBZ0JXLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckJBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBcEIsY0FBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0IyQyxLQUF0QixDQUE0QixNQUE1Qjs7QUFGcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTNDLEVBQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCUSxFQUF4QixDQUEyQixPQUEzQixFQUFvQyxZQUFZO0FBQzVDb0MsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksbUNBQVosRUFBaUQsUUFBakQ7QUFDSCxHQUZEO0FBR0E3QyxFQUFBQSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QlEsRUFBN0IsQ0FBZ0MsUUFBaEM7QUFBQSx3RUFBMEMsa0JBQWVXLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3RDQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDSU8sY0FBQUEsUUFGa0MsR0FFdkIsSUFBSUMsUUFBSixDQUFhNUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLENBQVIsQ0FBYixDQUZ1QjtBQUdsQzhDLGNBQUFBLFVBSGtDLEdBR3JCOUMsQ0FBQyxDQUFDLHFDQUFELENBSG9CO0FBS3RDOEMsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ012QixjQUFBQSxJQU5nQyxHQU16QnhCLENBQUMsQ0FBQywwQkFBRCxDQU53QjtBQU90Q3dCLGNBQUFBLElBQUksQ0FBQ25CLFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DRCxRQUFwQyxDQUE2QyxvQkFBN0M7QUFQc0M7QUFBQTtBQUFBLHFCQVVkUSxLQUFLLENBQUNrQixJQUFOLENBQVcsbUNBQVgsRUFBZ0RILFFBQWhELENBVmM7O0FBQUE7QUFVOUJiLGNBQUFBLE9BVjhCO0FBVzlCSCxjQUFBQSxRQVg4QixHQVduQkcsT0FBTyxDQUFDQyxJQVhXO0FBWXBDZixjQUFBQSxDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ2dELE9BQWxDLG1FQUVXckMsUUFGWDtBQUtBYSxjQUFBQSxJQUFJLENBQUNwQixRQUFMLENBQWMsaUJBQWQsRUFBaUNDLFdBQWpDLENBQTZDLHFCQUE3QztBQUNBTCxjQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QmlELE9BQXhCLENBQWdDLE9BQWhDO0FBbEJvQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCOUJQLGNBQUFBLE9BckI4QixHQXFCcEIsYUFBTS9CLFFBQU4sQ0FBZUksSUFyQks7QUFzQnBDeUIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQW1CLGFBQU05QixRQUF6QjtBQUNBbUMsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ0EvQyxjQUFBQSxDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ2dELE9BQWxDLDZDQUNxQ04sT0FEckM7QUFHQWxCLGNBQUFBLElBQUksQ0FBQ3BCLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0MsV0FBakMsQ0FBNkMscUJBQTdDOztBQTNCb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErQkFMLEVBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZVEsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUFZO0FBQ25Db0MsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVkscUNBQVosRUFBbUQsUUFBbkQ7QUFDSCxHQUZEO0FBR0gsQ0EzSUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9pbXByZXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG59KVxyXG5cclxubGV0IGNoZWNrID0gMDtcclxubGV0IGluc2NyaXB0aW9uX2lkID0gbnVsbDtcclxuICAgIFxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgLy8gJChcIiN2YWxpZGVyLCAjaW1wb3J0LCAjc2ltdWxlclwiKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICBjb25zdCBlbmFibGVCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGNoZWNrID09IDApIHtcclxuICAgICAgICAgICAgLy8gJChcIiN2YWxpZGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1kYW5nZXInKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAvLyAkKFwiI2ltcG9ydFwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4tc3VjY2VzcycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgJChcIiNpbXByaW1lclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4taW5mbycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAkKFwiI3ZhbGlkZXJcIikuYWRkQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5yZW1vdmVDbGFzcygnYnRuLWRhbmdlcicpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgLy8gJChcIiNpbXBvcnRcIikucmVtb3ZlQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5hZGRDbGFzcygnYnRuLXN1Y2Nlc3MnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAkKFwiI2ltcHJpbWVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1pbmZvJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNvcmRlclwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NhbGxlLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NhbGxlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgIFxyXG5cclxuICAgICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnRcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIjbGlzdF9ldHVkaWFudHNcIikuZW1wdHkoKVxyXG4gICAgICAgIGxldCBwcm9tb3Rpb25faWQgPSAkKCcjcHJvbW90aW9uJykudmFsKCk7XHJcbiAgICAgICAgaWYocHJvbW90aW9uX2lkID09IFwiXCIgfHwgIXByb21vdGlvbl9pZCkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiBwcm9tb3Rpb24hJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2FsbGUgPSAkKCcjc2FsbGUnKS52YWwoKTtcclxuICAgICAgICBpZihzYWxsZSA9PSBcIlwiIHx8ICFzYWxsZSkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgc2FsbGUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNnZXRfbGlzdF9ldHVkaWFudCBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNlYXJjaCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJvcmRlclwiLCAkKFwiI29yZGVyXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2ltcHJlc3Npb24vbGlzdC8nK3Byb21vdGlvbl9pZCtcIi9cIitzYWxsZSwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgLy8gJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLkRhdGFUYWJsZSgpLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjbGlzdF9ldHVkaWFudHNcIikpIHtcclxuICAgICAgICAgICAgICAgICQoJyNsaXN0X2V0dWRpYW50cycpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChcIiNsaXN0X2V0dWRpYW50c1wiKS5odG1sKHJlc3BvbnNlKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbFk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2hlY2sgPSAxO1xyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXNlYXJjaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zZWFyY2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgIFxyXG5cclxuICAgICQoXCIjaW1wb3J0XCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnI2ltcG9ydF9lbl9tYXNzZScpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2ltcHJlc3Npb25fY2FudmFzXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cub3BlbihcIi9hZG1pbmlzdHJhdGlvbi9pbXByZXNzaW9uL2NhbnZhc1wiLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXBvcnRfaW1wcmVzc2lvbl9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICBcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2ltcHJlc3Npb25fZW5yZWdpc3RyZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2ltcHJlc3Npb24vaW1wb3J0JywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAkKFwiI2dldF9saXN0X2V0dWRpYW50XCIpLnRyaWdnZXIoXCJjbGlja1wiKVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXByaW1lclwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vaW1wcmVzc2lvbi9pbXByaW1lclwiLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiY2hlY2siLCJpbnNjcmlwdGlvbl9pZCIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiZW5hYmxlQnV0dG9ucyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwic2VsZWN0MiIsIm9uIiwiaWRfZXRhYiIsInZhbCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJlbXB0eSIsInByb21vdGlvbl9pZCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJzYWxsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsInNjcm9sbFgiLCJzY3JvbGxZIiwibGFuZ3VhZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIm1vZGFsIiwid2luZG93Iiwib3BlbiIsIm1vZGFsQWxlcnQiLCJyZW1vdmUiLCJwcmVwZW5kIiwidHJpZ2dlciJdLCJzb3VyY2VSb290IjoiIn0=