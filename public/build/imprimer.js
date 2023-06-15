(self["webpackChunk"] = self["webpackChunk"] || []).push([["imprimer"],{

/***/ "./assets/components/administration/imprimer.js":
/*!******************************************************!*\
  !*** ./assets/components/administration/imprimer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(document).ready(function () {
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
  var table_imprimer = $("#datables_imprimer").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/administration/imprimer/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_imprimer')) {
        var dt = $('#datables_imprimer').DataTable(); //Abort previous ajax request if it is still in process.

        var settings = dt.settings();

        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  }); // --kiosk-printing
  // window.print();

  $("#id_etudiant").on('keydown', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      var nombre_etiquettes, formData, request, response, win, message;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(event.which == 13)) {
                _context.next = 27;
                break;
              }

              if (!($('#id_etudiant').val() == "")) {
                _context.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez Entrez un Id Inscription!'
              });
              return _context.abrupt("return");

            case 4:
              nombre_etiquettes = 1;

              if ($('#nombre_etiquettes').val() > 1) {
                nombre_etiquettes = $('#nombre_etiquettes').val();
              }

              _context.prev = 6;
              formData = new FormData();
              formData.append("inscription", $("#id_etudiant").val());
              formData.append("nombre_etiquettes", nombre_etiquettes);
              _context.next = 12;
              return axios.post('/administration/imprimer/new', formData);

            case 12:
              request = _context.sent;
              response = request.data;
              Toast.fire({
                icon: 'success',
                title: response
              });
              win = window.open("/administration/imprimer/print/" + $('#id_etudiant').val() + "/" + nombre_etiquettes, '_blank', "toolbar=yes,scrollbars=yes,top=500,left=500,width=400,height=320");

              win.onfocus = function () {
                win.print();
                setTimeout(function () {
                  win.close();
                }, 3500);
              }; // }


              $("#id_etudiant").val("");
              table_imprimer.ajax.reload(null, false);
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              _context.next = 27;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](6);
              console.log(_context.t0); // icon.addClass('fa-search').removeClass("fa-spinner fa-spin");

              message = _context.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 22]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $('#datables_imprimer').on('click', 'tbody tr .get_cd', function (event) {
    var code = $(this).attr('role');
    var win = window.open("/administration/imprimer/print/" + code + "/1", '_blank', "toolbar=yes,scrollbars=yes,top=500,left=500,width=400,height=330");

    win.onfocus = function () {
      win.print();
    };

    event.preventDefault();
  });
  $('#anonymat').on('click', function (event) {
    $('#change_anonymat').modal("show");
    event.preventDefault();
  });
  $("#change_anonymat_save").on("submit", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              icon = $("#anonymat_changed i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context2.prev = 4;
              _context2.next = 7;
              return axios.post('/api/changeAnonymat', formData);

            case 7:
              request = _context2.sent;
              response = request.data;
              $('body #c-anonymat').html(response);
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#change_anonymat').modal("hide");
              Toast.fire({
                icon: 'success',
                title: 'Le type d\'anonymat est bien changé'
              });
              return _context2.abrupt("return");

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](4);
              message = _context2.t0.response.data;
              console.log(_context2.t0, _context2.t0.response);
              $('#change_anonymat').modal("hide");
              Toast.fire({
                icon: 'success',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[4, 16]]);
    }));

    return function (_x2) {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/administration/imprimer.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBa0IxQnNCLGNBQUFBLE9BbEIwQixHQWtCaEIsYUFBTWQsUUFBTixDQUFlQyxJQWxCQztBQW1CaENXLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUFtQixhQUFNYixRQUF6QjtBQUNBL0MsY0FBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JpRSxLQUF0QixDQUE0QixNQUE1QjtBQUNBOUQsY0FBQUEsS0FBSyxDQUFDa0MsSUFBTixDQUFXO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxnQkFBQUEsS0FBSyxFQUFFc0I7QUFGQSxlQUFYO0FBSUF2QixjQUFBQSxJQUFJLENBQUNtQixRQUFMLENBQWMsaUJBQWQsRUFBaUNDLFdBQWpDLENBQTZDLHFCQUE3Qzs7QUF6QmdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEJILENBOUhEOzs7Ozs7Ozs7O0FDQUEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFlBQVksbUJBQU8sQ0FBQyx1RkFBNkI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQztBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5ELHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3Q0FBd0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2FkbWluaXN0cmF0aW9uL2ltcHJpbWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICB2YXIgdGFibGVfaW1wcmltZXIgPSAkKFwiI2RhdGFibGVzX2ltcHJpbWVyXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2FkbWluaXN0cmF0aW9uL2ltcHJpbWVyL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2RhdGFibGVzX2ltcHJpbWVyJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9ICQoJyNkYXRhYmxlc19pbXByaW1lcicpLkRhdGFUYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGR0LnNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gLS1raW9zay1wcmludGluZ1xyXG4gICAgLy8gd2luZG93LnByaW50KCk7XHJcbiAgICAkKFwiI2lkX2V0dWRpYW50XCIpLm9uKCdrZXlkb3duJywgYXN5bmMgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIGlmIChldmVudC53aGljaCA9PSAxMykge1xyXG4gICAgICAgICAgICBpZigkKCcjaWRfZXR1ZGlhbnQnKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogRW50cmV6IHVuIElkIEluc2NyaXB0aW9uIScsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBub21icmVfZXRpcXVldHRlcyA9IDE7XHJcbiAgICAgICAgICAgIGlmICgkKCcjbm9tYnJlX2V0aXF1ZXR0ZXMnKS52YWwoKSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIG5vbWJyZV9ldGlxdWV0dGVzID0gJCgnI25vbWJyZV9ldGlxdWV0dGVzJykudmFsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaW5zY3JpcHRpb25cIiwgJChcIiNpZF9ldHVkaWFudFwiKS52YWwoKSlcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5vbWJyZV9ldGlxdWV0dGVzXCIsIG5vbWJyZV9ldGlxdWV0dGVzKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9pbXByaW1lci9uZXcnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgbGV0IHdpbiA9IHdpbmRvdy5vcGVuKFwiL2FkbWluaXN0cmF0aW9uL2ltcHJpbWVyL3ByaW50L1wiICsgJCgnI2lkX2V0dWRpYW50JykudmFsKCkgKyBcIi9cIitub21icmVfZXRpcXVldHRlcywnX2JsYW5rJywgXCJ0b29sYmFyPXllcyxzY3JvbGxiYXJzPXllcyx0b3A9NTAwLGxlZnQ9NTAwLHdpZHRoPTQwMCxoZWlnaHQ9MzIwXCIpO1xyXG4gICAgICAgICAgICAgICAgd2luLm9uZm9jdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luLnByaW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDM1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgJChcIiNpZF9ldHVkaWFudFwiKS52YWwoXCJcIilcclxuICAgICAgICAgICAgICAgIHRhYmxlX2ltcHJpbWVyLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtc2VhcmNoJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIC8vIGljb24uYWRkQ2xhc3MoJ2ZhLXNlYXJjaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoJyNkYXRhYmxlc19pbXByaW1lcicpLm9uKCdjbGljaycsICd0Ym9keSB0ciAuZ2V0X2NkJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGNvZGUgPSAkKHRoaXMpLmF0dHIoJ3JvbGUnKTtcclxuICAgICAgICBsZXQgd2luID0gd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vaW1wcmltZXIvcHJpbnQvXCIgKyBjb2RlICsgXCIvMVwiLCdfYmxhbmsnLCBcInRvb2xiYXI9eWVzLHNjcm9sbGJhcnM9eWVzLHRvcD01MDAsbGVmdD01MDAsd2lkdGg9NDAwLGhlaWdodD0zMzBcIik7XHJcbiAgICAgICAgd2luLm9uZm9jdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbi5wcmludCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcjYW5vbnltYXQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAkKCcjY2hhbmdlX2Fub255bWF0JykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjY2hhbmdlX2Fub255bWF0X3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYW5vbnltYXRfY2hhbmdlZCBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2NoYW5nZUFub255bWF0JywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJCgnYm9keSAjYy1hbm9ueW1hdCcpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoJyNjaGFuZ2VfYW5vbnltYXQnKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMZSB0eXBlIGRcXCdhbm9ueW1hdCBlc3QgYmllbiBjaGFuZ8OpJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAkKCcjY2hhbmdlX2Fub255bWF0JykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgXHJcbiAgICBcclxufSk7IiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwidGFibGVfaW1wcmltZXIiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInNjcm9sbFgiLCJwcmVEcmF3Q2FsbGJhY2siLCJzZXR0aW5ncyIsImZuIiwiaXNEYXRhVGFibGUiLCJkdCIsImpxWEhSIiwiYWJvcnQiLCJsYW5ndWFnZSIsInVybCIsIm9uIiwiZXZlbnQiLCJ3aGljaCIsInZhbCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJub21icmVfZXRpcXVldHRlcyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJheGlvcyIsInBvc3QiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwid2luIiwid2luZG93Iiwib3BlbiIsIm9uZm9jdXMiLCJwcmludCIsInNldFRpbWVvdXQiLCJjbG9zZSIsInJlbG9hZCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImNvZGUiLCJhdHRyIiwicHJldmVudERlZmF1bHQiLCJtb2RhbCIsImUiLCJodG1sIl0sInNvdXJjZVJvb3QiOiIifQ==