(self["webpackChunk"] = self["webpackChunk"] || []).push([["centreappel"],{

/***/ "./assets/components/etudiant/centre_appel.js":
/*!****************************************************!*\
  !*** ./assets/components/etudiant/centre_appel.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

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
  var table = $("#datables_etudiant").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/etudiant/appel/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      if (id_etudiant) {
        $("body tr#" + id_etudiant).addClass('active_databales');
      }
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  var id_etudiant = false;
  $('select').select2();

  var getAppelRdv = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var icon, request, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $('#rdv1').val("");
              $('#rdv2').val("");
              $('#statut_appel').val("");
              $('#Observation').val("");
              icon = $("#date-d-appel i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context.prev = 6;
              _context.next = 9;
              return axios.get('/etudiant/appel/getAppelRdv_appel/' + id_etudiant);

            case 9:
              request = _context.sent;
              data = request.data;
              $('#rdv1').val(data['rdv1']);
              $('#rdv2').val(data['rdv2']);
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin");
              _context.next = 18;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](6);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 16]]);
    }));

    return function getAppelRdv() {
      return _ref.apply(this, arguments);
    };
  }();

  $('body').on('click', '#datables_etudiant tbody tr', function () {
    if ($(this).hasClass('active_databales')) {
      id_etudiant = null, $('#datables_etudiant tr').removeClass('active_databales');
      return;
    }

    $('#datables_etudiant tr').removeClass('active_databales');
    $(this).addClass('active_databales');
    id_etudiant = $(this).attr('id');
    getAppelRdv();
  });
  $("#date-d-appel").on("click", function () {
    if (!id_etudiant) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#date-d-appel-modal").modal("show");
  });
  $("body").on('submit', "#date_appele_save", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#date_appele_save")[0]);
              modalAlert = $("#date-d-appel-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#date_appele_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context2.prev = 6;
              _context2.next = 9;
              return axios.post('/etudiant/appel/rdvappel/' + id_etudiant, formData);

            case 9:
              request = _context2.sent;
              response = request.data;
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>".concat(response, "</p>\n            </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context2.next = 22;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](6);
              message = _context2.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 16]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function = global.Function;

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(isCallable(handler) ? handler : Function(handler), this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/etudiant/centre_appel.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VudHJlYXBwZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVztBQUNyQkMsRUFBQUEsS0FBSyxFQUFFLElBRGM7QUFFckJDLEVBQUFBLFFBQVEsRUFBRSxTQUZXO0FBR3JCQyxFQUFBQSxpQkFBaUIsRUFBRSxLQUhFO0FBSXJCQyxFQUFBQSxLQUFLLEVBQUUsSUFKYztBQUtyQkMsRUFBQUEsZ0JBQWdCLEVBQUUsSUFMRztBQU1yQkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFDTCxLQUFELEVBQVc7QUFDaEJBLElBQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1MsU0FBMUM7QUFDQVAsSUFBQUEsS0FBSyxDQUFDTSxnQkFBTixDQUF1QixZQUF2QixFQUFxQ1IsSUFBSSxDQUFDVSxXQUExQztBQUNIO0FBVG9CLENBQVgsQ0FBZDtBQVdBQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQWE7QUFDM0IsTUFBSUMsS0FBSyxHQUFHSCxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QkksU0FBeEIsQ0FBa0M7QUFDMUNDLElBQUFBLFVBQVUsRUFBRSxDQUNSLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixjQUF0QixDQURRLEVBRVIsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlEsQ0FEOEI7QUFLMUNDLElBQUFBLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FBRCxDQUxtQztBQU0xQ0MsSUFBQUEsSUFBSSxFQUFFLHNCQU5vQztBQU8xQ0MsSUFBQUEsVUFBVSxFQUFFLElBUDhCO0FBUTFDQyxJQUFBQSxVQUFVLEVBQUUsSUFSOEI7QUFTMUNDLElBQUFBLFdBQVcsRUFBRSxJQVQ2QjtBQVUxQ0MsSUFBQUEsVUFBVSxFQUFFLElBVjhCO0FBVzFDQyxJQUFBQSxPQUFPLEVBQUUsSUFYaUM7QUFZMUNDLElBQUFBLFlBQVksRUFBRSx3QkFBWTtBQUN0QixVQUFHQyxXQUFILEVBQWdCO0FBQ2hCZCxRQUFBQSxDQUFDLENBQUMsYUFBYWMsV0FBZCxDQUFELENBQTRCQyxRQUE1QixDQUFxQyxrQkFBckM7QUFDQztBQUNKLEtBaEJ5QztBQWlCMUNDLElBQUFBLFFBQVEsRUFBRTtBQUNOQyxNQUFBQSxHQUFHLEVBQUU7QUFEQztBQWpCZ0MsR0FBbEMsQ0FBWjtBQXFCQSxNQUFJSCxXQUFXLEdBQUcsS0FBbEI7QUFDQWQsRUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZa0IsT0FBWjs7QUFFQSxNQUFNQyxXQUFXO0FBQUEsdUVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCbkIsY0FBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXb0IsR0FBWCxDQUFlLEVBQWY7QUFDQXBCLGNBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29CLEdBQVgsQ0FBZSxFQUFmO0FBQ0FwQixjQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cb0IsR0FBbkIsQ0FBdUIsRUFBdkI7QUFDQXBCLGNBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JvQixHQUFsQixDQUFzQixFQUF0QjtBQUNNQyxjQUFBQSxJQUxVLEdBS0hyQixDQUFDLENBQUMsaUJBQUQsQ0FMRTtBQU1oQnFCLGNBQUFBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixTQUFqQixFQUE0QlAsUUFBNUIsQ0FBcUMsb0JBQXJDO0FBTmdCO0FBQUE7QUFBQSxxQkFRVVEsS0FBSyxDQUFDQyxHQUFOLENBQVUsdUNBQXFDVixXQUEvQyxDQVJWOztBQUFBO0FBUU5XLGNBQUFBLE9BUk07QUFTTkMsY0FBQUEsSUFUTSxHQVNDRCxPQUFPLENBQUNDLElBVFQ7QUFVWjFCLGNBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29CLEdBQVgsQ0FBZU0sSUFBSSxDQUFDLE1BQUQsQ0FBbkI7QUFDQTFCLGNBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29CLEdBQVgsQ0FBZU0sSUFBSSxDQUFDLE1BQUQsQ0FBbkI7QUFDQUwsY0FBQUEsSUFBSSxDQUFDTixRQUFMLENBQWMsU0FBZCxFQUF5Qk8sV0FBekIsQ0FBcUMsb0JBQXJDO0FBWlk7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEgsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFtQkFuQixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyQixFQUFWLENBQWEsT0FBYixFQUFxQiw2QkFBckIsRUFBbUQsWUFBWTtBQUMzRCxRQUFHM0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEIsUUFBUixDQUFpQixrQkFBakIsQ0FBSCxFQUF5QztBQUNyQ2QsTUFBQUEsV0FBVyxHQUFHLElBQWQsRUFDQWQsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJzQixXQUEzQixDQUF1QyxrQkFBdkMsQ0FEQTtBQUVBO0FBQ0g7O0FBQ0R0QixJQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQnNCLFdBQTNCLENBQXVDLGtCQUF2QztBQUNBdEIsSUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZSxRQUFSLENBQWlCLGtCQUFqQjtBQUNBRCxJQUFBQSxXQUFXLEdBQUdkLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZCLElBQVIsQ0FBYSxJQUFiLENBQWQ7QUFDQVYsSUFBQUEsV0FBVztBQUNkLEdBVkQ7QUFZQW5CLEVBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIyQixFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFNO0FBQ2pDLFFBQUcsQ0FBQ2IsV0FBSixFQUFnQjtBQUNaMUIsTUFBQUEsS0FBSyxDQUFDMEMsSUFBTixDQUFXO0FBQ1hULFFBQUFBLElBQUksRUFBRSxPQURLO0FBRVhVLFFBQUFBLEtBQUssRUFBRTtBQUZJLE9BQVg7QUFJQTtBQUNIOztBQUNEL0IsSUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJnQyxLQUF6QixDQUErQixNQUEvQjtBQUNILEdBVEQ7QUFXQWhDLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJCLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLG1CQUF2QjtBQUFBLHdFQUE0QyxrQkFBT00sQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNUNBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNJQyxjQUFBQSxRQUZ3QyxHQUU3QixJQUFJQyxRQUFKLENBQWFwQyxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QixDQUF2QixDQUFiLENBRjZCO0FBR3hDcUMsY0FBQUEsVUFId0MsR0FHM0JyQyxDQUFDLENBQUMsd0NBQUQsQ0FIMEI7QUFJNUNxQyxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDTWpCLGNBQUFBLElBTHNDLEdBSy9CckIsQ0FBQyxDQUFDLDBCQUFELENBTDhCO0FBTTVDcUIsY0FBQUEsSUFBSSxDQUFDQyxXQUFMLENBQWlCLGlCQUFqQixFQUFvQ1AsUUFBcEMsQ0FBNkMsb0JBQTdDO0FBTjRDO0FBQUE7QUFBQSxxQkFTbEJRLEtBQUssQ0FBQ2dCLElBQU4sQ0FBVyw4QkFBNEJ6QixXQUF2QyxFQUFvRHFCLFFBQXBELENBVGtCOztBQUFBO0FBU2xDVixjQUFBQSxPQVRrQztBQVVsQ2UsY0FBQUEsUUFWa0MsR0FVdkJmLE9BQU8sQ0FBQ0MsSUFWZTtBQVd4QzFCLGNBQUFBLENBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDeUMsT0FBckMsK0RBRVNELFFBRlQ7QUFLQW5CLGNBQUFBLElBQUksQ0FBQ04sUUFBTCxDQUFjLGlCQUFkLEVBQWlDTyxXQUFqQyxDQUE2QyxxQkFBN0M7QUFDQW5CLGNBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXbUMsTUFBWCxDQUFrQixJQUFsQixFQUF3QixLQUF4QjtBQWpCd0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFtQmxDQyxjQUFBQSxPQW5Ca0MsR0FtQnhCLGFBQU1ILFFBQU4sQ0FBZWQsSUFuQlMsRUFvQnhDOztBQUNBVyxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDQXRDLGNBQUFBLENBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDeUMsT0FBckMsNkNBQ21DRSxPQURuQztBQUdBdEIsY0FBQUEsSUFBSSxDQUFDTixRQUFMLENBQWMsaUJBQWQsRUFBaUNPLFdBQWpDLENBQTZDLHFCQUE3Qzs7QUF6QndDO0FBMkI1Q3NCLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2I1QyxnQkFBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JzQyxNQUF4QjtBQUNILGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBM0I0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE1Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdDSCxDQW5HRDs7Ozs7Ozs7OztBQ1hBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ldHVkaWFudC9jZW50cmVfYXBwZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG59KVxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgdmFyIHRhYmxlID0gJChcIiNkYXRhYmxlc19ldHVkaWFudFwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9ldHVkaWFudC9hcHBlbC9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYoaWRfZXR1ZGlhbnQpIHtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9ldHVkaWFudCkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBsZXQgaWRfZXR1ZGlhbnQgPSBmYWxzZTtcclxuICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcclxuXHJcbiAgICBjb25zdCBnZXRBcHBlbFJkdiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAkKCcjcmR2MScpLnZhbChcIlwiKTtcclxuICAgICAgICAkKCcjcmR2MicpLnZhbChcIlwiKTtcclxuICAgICAgICAkKCcjc3RhdHV0X2FwcGVsJykudmFsKFwiXCIpO1xyXG4gICAgICAgICQoJyNPYnNlcnZhdGlvbicpLnZhbChcIlwiKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNkYXRlLWQtYXBwZWwgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2V0dWRpYW50L2FwcGVsL2dldEFwcGVsUmR2X2FwcGVsLycraWRfZXR1ZGlhbnQpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKCcjcmR2MScpLnZhbChkYXRhWydyZHYxJ10pO1xyXG4gICAgICAgICAgICAkKCcjcmR2MicpLnZhbChkYXRhWydyZHYyJ10pO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZXR1ZGlhbnQgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgaWRfZXR1ZGlhbnQgPSBudWxsLFxyXG4gICAgICAgICAgICAkKCcjZGF0YWJsZXNfZXR1ZGlhbnQgdHInKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNkYXRhYmxlc19ldHVkaWFudCB0cicpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgIGlkX2V0dWRpYW50ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGdldEFwcGVsUmR2KClcclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNkYXRlLWQtYXBwZWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjZGF0ZV9hcHBlbGVfc2F2ZVwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjZGF0ZV9hcHBlbGVfc2F2ZVwiKVswXSk7XHJcbiAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2RhdGVfYXBwZWxlX3NhdmUgLmJ0biBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L2FwcGVsL3JkdmFwcGVsLycraWRfZXR1ZGlhbnQsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKFwiI2RhdGUtZC1hcHBlbC1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgXHJcblxyXG4gICAgfSlcclxufSkiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJpZF9ldHVkaWFudCIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJzZWxlY3QyIiwiZ2V0QXBwZWxSZHYiLCJ2YWwiLCJpY29uIiwicmVtb3ZlQ2xhc3MiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwib24iLCJoYXNDbGFzcyIsImF0dHIiLCJmaXJlIiwidGl0bGUiLCJtb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicG9zdCIsInJlc3BvbnNlIiwicHJlcGVuZCIsInJlbG9hZCIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==