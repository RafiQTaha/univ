(self["webpackChunk"] = self["webpackChunk"] || []).push([["typeBac"],{

/***/ "./assets/components/parametre/typeBac.js":
/*!************************************************!*\
  !*** ./assets/components/parametre/typeBac.js ***!
  \************************************************/
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
  var id_typebac;
  var table = $("#datatables_gestion_typebac").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/typebac/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("select").select2();
  $('body').on('click', '#datatables_gestion_typebac tbody tr', function () {
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_typebac = null;
    } else {
      $("#datatables_gestion_typebac tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_typebac = $(this).attr('id');
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
              return axios.post('/parametre/typebac/new', formData);

            case 7:
              request = _context.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              id_typebac = false;
              Toast.fire({
                icon: 'success',
                title: 'typebac bien Ajouter'
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
            if (id_typebac) {
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
            return axios.get('/parametre/typebac/details/' + id_typebac);

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
              return axios.post('/parametre/typebac/update/' + id_typebac, formData);

            case 7:
              request = _context3.sent;
              response = request.data;
              table.ajax.reload();
              id_typebac = false;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              Toast.fire({
                icon: 'success',
                title: 'typebac bien Modifier'
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
            if (id_typebac) {
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
            res = confirm('Vous voulez vraiment supprimer ce type de bac ?');

            if (!(res == 1)) {
              _context4.next = 24;
              break;
            }

            _context4.prev = 6;
            icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
            _context4.next = 10;
            return axios.post('/parametre/typebac/delete/' + id_typebac);

          case 10:
            request = _context4.sent;
            response = request.data;
            table.ajax.reload();
            id_typebac = false;
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            Toast.fire({
              icon: 'success',
              title: 'typebac bien Supprimer'
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/parametre/typeBac.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZUJhYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVztBQUNyQkMsRUFBQUEsS0FBSyxFQUFFLElBRGM7QUFFckJDLEVBQUFBLFFBQVEsRUFBRSxTQUZXO0FBR3JCQyxFQUFBQSxpQkFBaUIsRUFBRSxLQUhFO0FBSXJCQyxFQUFBQSxLQUFLLEVBQUUsSUFKYztBQUtyQkMsRUFBQUEsZ0JBQWdCLEVBQUUsSUFMRztBQU1yQkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFDTCxLQUFELEVBQVc7QUFDaEJBLElBQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1MsU0FBMUM7QUFDQVAsSUFBQUEsS0FBSyxDQUFDTSxnQkFBTixDQUF1QixZQUF2QixFQUFxQ1IsSUFBSSxDQUFDVSxXQUExQztBQUNIO0FBVG9CLENBQVgsQ0FBZDtBQWFJQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQWE7QUFDL0IsTUFBSUMsVUFBSjtBQUVBLE1BQUlDLEtBQUssR0FBR0osQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNLLFNBQWpDLENBQTJDO0FBQ25EQyxJQUFBQSxVQUFVLEVBQUUsQ0FDUixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsY0FBdEIsQ0FEUSxFQUVSLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixLQUF0QixDQUZRLENBRHVDO0FBS25EQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxNQUFKLENBQUQsQ0FMNEM7QUFNbkRDLElBQUFBLElBQUksRUFBRSx5QkFONkM7QUFPbkRDLElBQUFBLFVBQVUsRUFBRSxJQVB1QztBQVFuREMsSUFBQUEsVUFBVSxFQUFFLElBUnVDO0FBU25EQyxJQUFBQSxXQUFXLEVBQUUsSUFUc0M7QUFVbkRDLElBQUFBLFFBQVEsRUFBRTtBQUNOQyxNQUFBQSxHQUFHLEVBQUU7QUFEQztBQVZ5QyxHQUEzQyxDQUFaO0FBY0FiLEVBQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWMsT0FBWjtBQUNBZCxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVlLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLHNDQUFyQixFQUE0RCxZQUFZO0FBQ3BFLFFBQUdmLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdCLFFBQVIsQ0FBaUIsa0JBQWpCLENBQUgsRUFBeUM7QUFDckNoQixNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpQixXQUFSLENBQW9CLGtCQUFwQjtBQUNBZCxNQUFBQSxVQUFVLEdBQUcsSUFBYjtBQUNILEtBSEQsTUFHTztBQUNISCxNQUFBQSxDQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQ2lCLFdBQTFDLENBQXNELGtCQUF0RDtBQUNBakIsTUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsUUFBUixDQUFpQixrQkFBakI7QUFDQWYsTUFBQUEsVUFBVSxHQUFHSCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtQixJQUFSLENBQWEsSUFBYixDQUFiO0FBQ0g7QUFFSixHQVZEO0FBWUFuQixFQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNlLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsWUFBTTtBQUM1QmYsSUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9CLEtBQWxCLENBQXdCLE1BQXhCO0FBRUgsR0FIRDtBQUlBcEIsRUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXZSxFQUFYLENBQWMsUUFBZDtBQUFBLHVFQUF3QixpQkFBT00sQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNJQyxjQUFBQSxRQUZnQixHQUVMLElBQUlDLFFBQUosQ0FBYXhCLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVyxDQUFYLENBQWIsQ0FGSztBQUdkeUIsY0FBQUEsSUFIYyxHQUdQekIsQ0FBQyxDQUFDLFNBQUQsQ0FITTtBQUFBO0FBS2hCeUIsY0FBQUEsSUFBSSxDQUFDQyxNQUFMLENBQVksaUJBQVosRUFBK0JSLFFBQS9CLENBQXdDLHFCQUF4QztBQUxnQjtBQUFBLHFCQU1NUyxLQUFLLENBQUNDLElBQU4sQ0FBVyx3QkFBWCxFQUFxQ0wsUUFBckMsQ0FOTjs7QUFBQTtBQU1WTSxjQUFBQSxPQU5VO0FBT1ZDLGNBQUFBLFFBUFUsR0FPQ0QsT0FBTyxDQUFDRSxJQVBUO0FBUWhCTixjQUFBQSxJQUFJLENBQUNQLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDO0FBQ0FqQixjQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcsQ0FBWCxFQUFjZ0MsS0FBZDtBQUNBNUIsY0FBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVd5QixNQUFYO0FBQ0E5QixjQUFBQSxVQUFVLEdBQUcsS0FBYjtBQUNBZixjQUFBQSxLQUFLLENBQUM4QyxJQUFOLENBQVc7QUFDUFQsZ0JBQUFBLElBQUksRUFBRSxTQURDO0FBRVBVLGdCQUFBQSxLQUFLLEVBQUU7QUFGQSxlQUFYO0FBSUFuQyxjQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0IsS0FBbEIsQ0FBd0IsTUFBeEI7QUFoQmdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBa0JoQmdCLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixjQUFtQixZQUFNUCxRQUF6QjtBQUNNUSxjQUFBQSxPQW5CVSxHQW1CQSxZQUFNUixRQUFOLENBQWVDLElBbkJmO0FBb0JoQjNDLGNBQUFBLEtBQUssQ0FBQzhDLElBQU4sQ0FBVztBQUNQVCxnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUFUsZ0JBQUFBLEtBQUssRUFBRUc7QUFGQSxlQUFYO0FBSUFiLGNBQUFBLElBQUksQ0FBQ1AsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBeEJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJCQWpCLEVBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZWUsRUFBZixDQUFrQixPQUFsQix1RUFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ25CWixVQURtQjtBQUFBO0FBQUE7QUFBQTs7QUFFbkJmLFlBQUFBLEtBQUssQ0FBQzhDLElBQU4sQ0FBVztBQUNUVCxjQUFBQSxJQUFJLEVBQUUsT0FERztBQUVUVSxjQUFBQSxLQUFLLEVBQUU7QUFGRSxhQUFYO0FBRm1COztBQUFBO0FBUWpCVixZQUFBQSxJQVJpQixHQVFWekIsQ0FBQyxDQUFDLGFBQUQsQ0FSUztBQUFBO0FBV25CeUIsWUFBQUEsSUFBSSxDQUFDQyxNQUFMLENBQVksU0FBWixFQUF1QlIsUUFBdkIsQ0FBZ0MscUJBQWhDO0FBWG1CO0FBQUEsbUJBWUdTLEtBQUssQ0FBQ1ksR0FBTixDQUFVLGdDQUE4QnBDLFVBQXhDLENBWkg7O0FBQUE7QUFZYjBCLFlBQUFBLE9BWmE7QUFhYkMsWUFBQUEsUUFiYSxHQWFGRCxPQUFPLENBQUNFLElBYk47QUFjbkJLLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxRQUFaO0FBQ0FMLFlBQUFBLElBQUksQ0FBQ1AsUUFBTCxDQUFjLFNBQWQsRUFBeUJELFdBQXpCLENBQXFDLHFCQUFyQztBQUNBakIsWUFBQUEsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0N3QyxHQUFsQyxDQUFzQ1YsUUFBUSxDQUFDVyxXQUEvQztBQUNBekMsWUFBQUEsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0N3QyxHQUFsQyxDQUFzQ1YsUUFBUSxDQUFDWSxXQUEvQztBQUNBMUMsWUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJvQixLQUFyQixDQUEyQixNQUEzQjtBQWxCbUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFvQm5CZ0IsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQW1CLGFBQU1QLFFBQXpCO0FBQ01RLFlBQUFBLE9BckJhLEdBcUJILGFBQU1SLFFBQU4sQ0FBZUMsSUFyQlo7QUFzQm5CM0MsWUFBQUEsS0FBSyxDQUFDOEMsSUFBTixDQUFXO0FBQ1BULGNBQUFBLElBQUksRUFBRSxPQURDO0FBRVBVLGNBQUFBLEtBQUssRUFBRUc7QUFGQSxhQUFYO0FBSUFiLFlBQUFBLElBQUksQ0FBQ1AsUUFBTCxDQUFjLFNBQWQsRUFBeUJELFdBQXpCLENBQXFDLHFCQUFyQzs7QUExQm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTNCO0FBK0JBakIsRUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhZSxFQUFiLENBQWdCLFFBQWhCO0FBQUEsd0VBQTBCLGtCQUFPTSxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0lDLGNBQUFBLFFBRmtCLEdBRVAsSUFBSUMsUUFBSixDQUFheEIsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLENBQWIsQ0FBYixDQUZPO0FBR2hCeUIsY0FBQUEsSUFIZ0IsR0FHVHpCLENBQUMsQ0FBQyxXQUFELENBSFE7QUFBQTtBQUtsQnlCLGNBQUFBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLGlCQUFaLEVBQStCUixRQUEvQixDQUF3QyxxQkFBeEM7QUFMa0I7QUFBQSxxQkFNSVMsS0FBSyxDQUFDQyxJQUFOLENBQVcsK0JBQTZCekIsVUFBeEMsRUFBb0RvQixRQUFwRCxDQU5KOztBQUFBO0FBTVpNLGNBQUFBLE9BTlk7QUFPWkMsY0FBQUEsUUFQWSxHQU9ERCxPQUFPLENBQUNFLElBUFA7QUFRbEIzQixjQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBV3lCLE1BQVg7QUFDQTlCLGNBQUFBLFVBQVUsR0FBRyxLQUFiO0FBQ0FzQixjQUFBQSxJQUFJLENBQUNQLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDO0FBQ0E3QixjQUFBQSxLQUFLLENBQUM4QyxJQUFOLENBQVc7QUFDUFQsZ0JBQUFBLElBQUksRUFBRSxTQURDO0FBRVBVLGdCQUFBQSxLQUFLLEVBQUU7QUFGQSxlQUFYO0FBSUFuQyxjQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQm9CLEtBQXJCLENBQTJCLE1BQTNCO0FBZmtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBaUJsQmdCLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUFtQixhQUFNUCxRQUF6QjtBQUNNUSxjQUFBQSxPQWxCWSxHQWtCRixhQUFNUixRQUFOLENBQWVDLElBbEJiO0FBbUJsQjNDLGNBQUFBLEtBQUssQ0FBQzhDLElBQU4sQ0FBVztBQUNQVCxnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUFUsZ0JBQUFBLEtBQUssRUFBRUc7QUFGQSxlQUFYO0FBSUFiLGNBQUFBLElBQUksQ0FBQ1AsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBdkJrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUExQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRCQWpCLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JlLEVBQWhCLENBQW1CLE9BQW5CLHVFQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDcEJaLFVBRG9CO0FBQUE7QUFBQTtBQUFBOztBQUVwQmYsWUFBQUEsS0FBSyxDQUFDOEMsSUFBTixDQUFXO0FBQ1RULGNBQUFBLElBQUksRUFBRSxPQURHO0FBRVRVLGNBQUFBLEtBQUssRUFBRTtBQUZFLGFBQVg7QUFGb0I7O0FBQUE7QUFRbEJWLFlBQUFBLElBUmtCLEdBUVh6QixDQUFDLENBQUMsV0FBRCxDQVJVO0FBVXBCMkMsWUFBQUEsR0FWb0IsR0FVZEMsT0FBTyxDQUFDLGlEQUFELENBVk87O0FBQUEsa0JBV3JCRCxHQUFHLElBQUksQ0FYYztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWFoQmxCLFlBQUFBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLGlCQUFaLEVBQStCUixRQUEvQixDQUF3QyxxQkFBeEM7QUFiZ0I7QUFBQSxtQkFjTVMsS0FBSyxDQUFDQyxJQUFOLENBQVcsK0JBQTZCekIsVUFBeEMsQ0FkTjs7QUFBQTtBQWNWMEIsWUFBQUEsT0FkVTtBQWVWQyxZQUFBQSxRQWZVLEdBZUNELE9BQU8sQ0FBQ0UsSUFmVDtBQWdCaEIzQixZQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBV3lCLE1BQVg7QUFDQTlCLFlBQUFBLFVBQVUsR0FBRyxLQUFiO0FBQ0FzQixZQUFBQSxJQUFJLENBQUNQLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDO0FBQ0E3QixZQUFBQSxLQUFLLENBQUM4QyxJQUFOLENBQVc7QUFDUFQsY0FBQUEsSUFBSSxFQUFFLFNBREM7QUFFUFUsY0FBQUEsS0FBSyxFQUFFO0FBRkEsYUFBWDtBQW5CZ0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF3QmhCQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsZUFBbUIsYUFBTVAsUUFBekI7QUFDTVEsWUFBQUEsT0F6QlUsR0F5QkEsYUFBTVIsUUFBTixDQUFlQyxJQXpCZjtBQTBCaEIzQyxZQUFBQSxLQUFLLENBQUM4QyxJQUFOLENBQVc7QUFDUFQsY0FBQUEsSUFBSSxFQUFFLE9BREM7QUFFUFUsY0FBQUEsS0FBSyxFQUFFRztBQUZBLGFBQVg7QUFJQWIsWUFBQUEsSUFBSSxDQUFDUCxRQUFMLENBQWMsaUJBQWQsRUFBaUNELFdBQWpDLENBQTZDLHFCQUE3Qzs7QUE5QmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVCO0FBb0NILENBNUpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFyYW1ldHJlL3R5cGVCYWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICBsZXQgaWRfdHlwZWJhYztcclxuICAgICAgICBcclxuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX3R5cGViYWNcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvcGFyYW1ldHJlL3R5cGViYWMvbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhdGFibGVzX2dlc3Rpb25fdHlwZWJhYyB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3R5cGViYWMgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX3R5cGViYWMgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF90eXBlYmFjID0gJCh0aGlzKS5hdHRyKCdpZCcpOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIjYWpvdXRlclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAkKFwiI2Fqb3V0X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG5cclxuICAgIH0pXHJcbiAgICAkKFwiI3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjc2F2ZVwiKVswXSlcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlIGlcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvdHlwZWJhYy9uZXcnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoJyNzYXZlJylbMF0ucmVzZXQoKTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgaWRfdHlwZWJhYyA9IGZhbHNlXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd0eXBlYmFjIGJpZW4gQWpvdXRlcicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjbW9kaWZpZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCFpZF90eXBlYmFjKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbmVyIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyIGlcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvcGFyYW1ldHJlL3R5cGViYWMvZGV0YWlscy8nK2lkX3R5cGViYWMpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgI2Rlc2lnbmF0aW9uXCIpLnZhbChyZXNwb25zZS5kZXNpZ25hdGlvbilcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAjYWJyZXZpYXRpb25cIikudmFsKHJlc3BvbnNlLmFicmV2aWF0aW9uKVxyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQoXCIjdWRwYXRlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3VkcGF0ZVwiKVswXSlcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiN1ZHBhdGUgaVwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS90eXBlYmFjL3VwZGF0ZS8nK2lkX3R5cGViYWMsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIGlkX3R5cGViYWMgPSBmYWxzZVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICd0eXBlYmFjIGJpZW4gTW9kaWZpZXInLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjc3VwcHJpbWVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoIWlkX3R5cGViYWMpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uZXIgdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjdWRwYXRlIGlcIik7XHJcblxyXG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBzdXBwcmltZXIgY2UgdHlwZSBkZSBiYWMgPycpO1xyXG4gICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS90eXBlYmFjL2RlbGV0ZS8nK2lkX3R5cGViYWMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgaWRfdHlwZWJhYyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICd0eXBlYmFjIGJpZW4gU3VwcHJpbWVyJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgXHJcbn0pXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaWRfdHlwZWJhYyIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJsYW5ndWFnZSIsInVybCIsInNlbGVjdDIiLCJvbiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImF0dHIiLCJtb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJpY29uIiwicmVtb3ZlIiwiYXhpb3MiLCJwb3N0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsInJlc2V0IiwicmVsb2FkIiwiZmlyZSIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJnZXQiLCJ2YWwiLCJkZXNpZ25hdGlvbiIsImFicmV2aWF0aW9uIiwicmVzIiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=