(self["webpackChunk"] = self["webpackChunk"] || []).push([["evaluationPv"],{

/***/ "./assets/components/evaluation/pv.js":
/*!********************************************!*\
  !*** ./assets/components/evaluation/pv.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

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
  var id_pv = false; // let idEpreuves = [];

  var datable_pvs = $("#datables_pvs").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/evaluation/pv/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      // idEpreuves.forEach((e) => {
      //     $("body tr#" + e)
      //     .find("input")
      //     .prop("checked", true);
      // });
      $("body tr#" + id_pv).addClass('active_databales');
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_pvs')) {
        var dt = $('#datables_pvs').DataTable(); //Abort previous ajax request if it is still in process.

        var settings = dt.settings();

        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  }); // $('body').on('click','#datables_notes_epreuve tbody tr',function () {
  //     const input = $(this).find("input");
  //     if(input.is(":checked")){
  //         input.prop("checked",false);
  //         const index = idEpreuves.indexOf(input.attr("id"));
  //         idEpreuves.splice(index,1);
  //     }else{
  //         input.prop("checked",true);
  //         idEpreuves.push(input.attr("id"));
  //     }
  //     console.log(idEpreuves);
  // })

  $('body').on('click', '#datables_pvs tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_pv = null;
    } else {
      $("#datables_pvs tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales'); // const icon = $('#note i');
      // icon.removeClass('fa-newspaper').addClass('fa-spinner fa-spin');

      id_pv = $(this).attr('id'); // table_note_inscription()
      // icon.addClass('fa-newspaper').removeClass('fa-spinner fa-spin')
    }
  });
  $("select").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            datable_pvs.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 11;
              break;
            }

            datable_pvs.columns(0).search(id_etab).draw();
            _context.next = 7;
            return axios.get('/api/formation/' + id_etab);

          case 7:
            request = _context.sent;
            response = request.data;
            _context.next = 12;
            break;

          case 11:
            datable_pvs.columns().search("").draw();

          case 12:
            $('#annee').html('').select2();
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation, response, request, requestannee;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            datable_pvs.columns().search("");
            response = "";

            if (!(id_formation != "")) {
              _context2.next = 15;
              break;
            }

            datable_pvs.columns(1).search(id_formation).draw();
            _context2.next = 7;
            return axios.get('/api/promotion/' + id_formation);

          case 7:
            request = _context2.sent;
            response = request.data;
            _context2.next = 11;
            return axios.get('/api/annee/' + id_formation);

          case 11:
            requestannee = _context2.sent;
            responseannee = requestannee.data;
            _context2.next = 16;
            break;

          case 15:
            datable_pvs.columns(0).search($("#etablissement").val()).draw();

          case 16:
            $('#semestre').html('').select2();
            $('#promotion').html(response).select2();
            $('#annee').html(responseannee).select2();

          case 19:
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
            datable_pvs.columns().search("");
            response = "";

            if (!(id_promotion != "")) {
              _context3.next = 11;
              break;
            }

            datable_pvs.columns(2).search(id_promotion).draw();
            _context3.next = 7;
            return axios.get('/api/semestre/' + id_promotion);

          case 7:
            request = _context3.sent;
            response = request.data;
            _context3.next = 12;
            break;

          case 11:
            datable_pvs.columns(1).search($("#formation").val()).draw();

          case 12:
            $('#semestre').html(response).select2();

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_semestre;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_semestre = $(this).val();
            datable_pvs.columns().search("");

            if (id_semestre != "") {
              datable_pvs.columns(3).search(id_semestre).draw();
            } else {
              datable_pvs.columns(2).search($("#promotion").val()).draw();
            }

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#annee").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_annee;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_annee = $(this).val();
            datable_pvs.columns().search("");

            if (id_annee != "") {
              datable_pvs.columns(4).search(id_annee).draw();
            } else {
              datable_pvs.columns(1).search($("#formation").val()).draw();
            }

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#ajouter").on('click', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();

              if (!($("#annee").val() == "" || $("#semestre").val() == "")) {
                _context6.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une annee et une semestre!'
              });
              return _context6.abrupt("return");

            case 4:
              $('#ajout_pv_modal').modal("show");

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("#pv_save").on("submit", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var modalAlert, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              modalAlert = $("#ajout_pv_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#pv_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context7.prev = 5;
              formData = new FormData($(this)[0]);
              formData.append('annee', $("#annee").val());
              formData.append('semestre', $("#semestre").val());
              _context7.next = 11;
              return axios.post('/evaluation/pv/ajouter_pv', formData);

            case 11:
              request = _context7.sent;
              response = request.data;
              $("#ajout_pv_modal .modal-body").prepend("<div class=\"alert alert-success\">\n                    <p>".concat(response, "</p>\n                </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $("#pv_save")[0].reset();
              datable_pvs.ajax.reload(null, false);
              $('#ajout_pv_modal').modal("hide");
              _context7.next = 27;
              break;

            case 20:
              _context7.prev = 20;
              _context7.t0 = _context7["catch"](5);
              message = _context7.t0.response.data;
              console.log(_context7.t0, _context7.t0.response);
              modalAlert.remove();
              $("#ajout_pv_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 27:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[5, 20]]);
    }));

    return function (_x2) {
      return _ref7.apply(this, arguments);
    };
  }());

  var getPvInfos = function getPvInfos() {
    var modalAlert = $("#modifier_pv_modal .modal-body .alert");
    modalAlert.remove();
    var icon = $("#modifier i");
    icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
    axios.get('/evaluation/pv/getPvInfos/' + id_pv).then(function (success) {
      icon.removeClass('fa-spinner fa-spin').addClass("fa-edit"); // console.log(success);

      $('#modifier_pv_modal #pv_modifier').html(success.data);
      $('#modifier_pv_modal').modal("show");
    })["catch"](function (err) {
      // console.log(err)
      icon.removeClass('fa-spinner fa-spin ').addClass("fa-edit");
    });
  };

  $("#modifier").on('click', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();

              if (!(id_pv == false)) {
                _context8.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context8.abrupt("return");

            case 4:
              getPvInfos();

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x3) {
      return _ref8.apply(this, arguments);
    };
  }());
  $("#pv_modifier").on("submit", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var modalAlert, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();
              modalAlert = $("#modifier_pv_modal .modal-body .alert");
              modalAlert.remove();

              if (!(id_pv == false)) {
                _context9.next = 6;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context9.abrupt("return");

            case 6:
              icon = $("#pv_modifier .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context9.prev = 8;
              formData = new FormData($(this)[0]); // formData.append('IDPv',id_pv)

              _context9.next = 12;
              return axios.post('/evaluation/pv/modifier_pv/' + id_pv, formData);

            case 12:
              request = _context9.sent;
              response = request.data;
              $("#modifier_pv_modal .modal-body").prepend("<div class=\"alert alert-success\">\n                    <p>".concat(response, "</p>\n                </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $("#pv_modifier")[0].reset();
              datable_pvs.ajax.reload(null, false);
              $('#modifier_pv_modal').modal("hide");
              _context9.next = 28;
              break;

            case 21:
              _context9.prev = 21;
              _context9.t0 = _context9["catch"](8);
              message = _context9.t0.response.data;
              console.log(_context9.t0, _context9.t0.response);
              modalAlert.remove();
              $("#modifier_pv_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 28:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this, [[8, 21]]);
    }));

    return function (_x4) {
      return _ref9.apply(this, arguments);
    };
  }());
  $('body').on('click', '#imprimer', function () {
    if (!id_pv) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    window.open('/evaluation/pv/impressionPv/' + id_pv, '_blank');
  });
  $('body').on('click', '#imprimerpresidence ', function () {
    if (!id_pv) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    window.open('/evaluation/pv/impressionPresidence/' + id_pv, '_blank');
  });
  $('#importer').on('click', function () {
    if (!id_pv) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#importer-modal").modal("show");
  });
  $('#save_import').on('submit', /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
      var modalAlert, icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault();
              modalAlert = $("#importer-modal .modal-body .alert");
              modalAlert.remove();

              if (id_pv) {
                _context10.next = 6;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context10.abrupt("return");

            case 6:
              icon = $("#save_import .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('file', $('.myfile').prop('files')[0]); // console.log(formData);

              _context10.prev = 10;
              _context10.next = 13;
              return axios.post("/evaluation/pv/importPv/" + id_pv, formData, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });

            case 13:
              request = _context10.sent;
              _context10.next = 16;
              return request.data;

            case 16:
              data = _context10.sent;
              $("#save_import")[0].reset();
              $("#importer-modal .modal-body").prepend("<div class=\"alert alert-success\">\n                    <p>".concat(data, "</p>\n                </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin"); // table.ajax.reload(null, false);

              _context10.next = 28;
              break;

            case 22:
              _context10.prev = 22;
              _context10.t0 = _context10["catch"](10);
              message = _context10.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#importer-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 28:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 29:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[10, 22]]);
    }));

    return function (_x5) {
      return _ref10.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ ((module) => {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8"], () => (__webpack_exec__("./assets/components/evaluation/pv.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsK0hBQWlEO0FBQzdGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3BDRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsZ0JBQWdCLG1CQUFPLENBQUMsNkZBQWdDO0FBQ3hELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFbkQsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdDQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZXZhbHVhdGlvbi9wdi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIGxldCBpZF9wdiA9IGZhbHNlO1xyXG4gICAgLy8gbGV0IGlkRXByZXV2ZXMgPSBbXTtcclxuICAgIHZhciBkYXRhYmxlX3B2cyA9ICQoXCIjZGF0YWJsZXNfcHZzXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2V2YWx1YXRpb24vcHYvbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBpZEVwcmV1dmVzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgLy8gICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgLy8gICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfcHYpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZURyYXdDYWxsYmFjazogZnVuY3Rpb24oc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCcjZGF0YWJsZXNfcHZzJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9ICQoJyNkYXRhYmxlc19wdnMnKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0Fib3J0IHByZXZpb3VzIGFqYXggcmVxdWVzdCBpZiBpdCBpcyBzdGlsbCBpbiBwcm9jZXNzLlxyXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gZHQuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLyAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX25vdGVzX2VwcmV1dmUgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgLy8gICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgLy8gICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgY29uc3QgaW5kZXggPSBpZEVwcmV1dmVzLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgIC8vICAgICAgICAgaWRFcHJldXZlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgIGlkRXByZXV2ZXMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpZEVwcmV1dmVzKTtcclxuICAgIC8vIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX3B2cyB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfcHYgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfcHZzIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgaWNvbiA9ICQoJyNub3RlIGknKTtcclxuICAgICAgICAgICAgLy8gaWNvbi5yZW1vdmVDbGFzcygnZmEtbmV3c3BhcGVyJykuYWRkQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpO1xyXG4gICAgICAgICAgICBpZF9wdiA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgLy8gdGFibGVfbm90ZV9pbnNjcmlwdGlvbigpXHJcbiAgICAgICAgICAgIC8vIGljb24uYWRkQ2xhc3MoJ2ZhLW5ld3NwYXBlcicpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgZGF0YWJsZV9wdnMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgZGF0YWJsZV9wdnMuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkYXRhYmxlX3B2cy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2FubmVlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgZGF0YWJsZV9wdnMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgZGF0YWJsZV9wdnMuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdGFubmVlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FubmVlLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2Vhbm5lZSA9IHJlcXVlc3Rhbm5lZS5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRhdGFibGVfcHZzLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjYW5uZWUnKS5odG1sKHJlc3BvbnNlYW5uZWUpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBkYXRhYmxlX3B2cy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBkYXRhYmxlX3B2cy5jb2x1bW5zKDIpLnNlYXJjaChpZF9wcm9tb3Rpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkYXRhYmxlX3B2cy5jb2x1bW5zKDEpLnNlYXJjaCgkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGRhdGFibGVfcHZzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBkYXRhYmxlX3B2cy5jb2x1bW5zKDMpLnNlYXJjaChpZF9zZW1lc3RyZSkuZHJhdygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkYXRhYmxlX3B2cy5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3Byb21vdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2FubmVlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9hbm5lZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgZGF0YWJsZV9wdnMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZihpZF9hbm5lZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGRhdGFibGVfcHZzLmNvbHVtbnMoNCkuc2VhcmNoKGlkX2FubmVlKS5kcmF3KCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRhdGFibGVfcHZzLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2Fqb3V0ZXJcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZigkKFwiI2FubmVlXCIpLnZhbCgpID09IFwiXCIgfHwgJChcIiNzZW1lc3RyZVwiKS52YWwoKSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgYW5uZWUgZXQgdW5lIHNlbWVzdHJlIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Fqb3V0X3B2X21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNwdl9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2Fqb3V0X3B2X21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcHZfc2F2ZSAuYnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FubmVlJywkKFwiI2FubmVlXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NlbWVzdHJlJywkKFwiI3NlbWVzdHJlXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vcHYvYWpvdXRlcl9wdicsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRfcHZfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjcHZfc2F2ZVwiKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICBkYXRhYmxlX3B2cy5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgJCgnI2Fqb3V0X3B2X21vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2Fqb3V0X3B2X21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBnZXRQdkluZm9zID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjbW9kaWZpZXJfcHZfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvZXZhbHVhdGlvbi9wdi9nZXRQdkluZm9zLycraWRfcHYpXHJcbiAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtZWRpdFwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICQoJyNtb2RpZmllcl9wdl9tb2RhbCAjcHZfbW9kaWZpZXInKS5odG1sKHN1Y2Nlc3MuZGF0YSlcclxuICAgICAgICAgICAgJCgnI21vZGlmaWVyX3B2X21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluICcpLmFkZENsYXNzKFwiZmEtZWRpdFwiKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgJChcIiNtb2RpZmllclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkX3B2ID09IGZhbHNlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRQdkluZm9zKClcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIjcHZfbW9kaWZpZXJcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjbW9kaWZpZXJfcHZfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBpZihpZF9wdiA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcHZfbW9kaWZpZXIgLmJ0biBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdJRFB2JyxpZF9wdilcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL3B2L21vZGlmaWVyX3B2LycraWRfcHYsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfcHZfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjcHZfbW9kaWZpZXJcIilbMF0ucmVzZXQoKTtcclxuICAgICAgICAgICAgZGF0YWJsZV9wdnMuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICQoJyNtb2RpZmllcl9wdl9tb2RhbCcpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9wdl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNpbXByaW1lcicsIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKCFpZF9wdil7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cub3BlbignL2V2YWx1YXRpb24vcHYvaW1wcmVzc2lvblB2LycraWRfcHYsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjaW1wcmltZXJwcmVzaWRlbmNlICcsIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKCFpZF9wdil7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cub3BlbignL2V2YWx1YXRpb24vcHYvaW1wcmVzc2lvblByZXNpZGVuY2UvJytpZF9wdiwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoJyNpbXBvcnRlcicpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZighaWRfcHYpe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNpbXBvcnRlci1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKCcjc2F2ZV9pbXBvcnQnKS5vbignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydGVyLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYoIWlkX3B2KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3NhdmVfaW1wb3J0IC5idG4gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCAkKCcubXlmaWxlJykucHJvcCgnZmlsZXMnKVswXSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2V2YWx1YXRpb24vcHYvaW1wb3J0UHYvXCIraWRfcHYsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjc2F2ZV9pbXBvcnRcIilbMF0ucmVzZXQoKTtcclxuICAgICAgICAgICAgJChcIiNpbXBvcnRlci1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtkYXRhfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIC8vIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNpbXBvcnRlci1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDI1MDApIFxyXG4gIFxyXG4gICAgfSk7XHJcbiAgIFxyXG59KTsiLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9wdiIsImRhdGFibGVfcHZzIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiYWRkQ2xhc3MiLCJwcmVEcmF3Q2FsbGJhY2siLCJzZXR0aW5ncyIsImZuIiwiaXNEYXRhVGFibGUiLCJkdCIsImpxWEhSIiwiYWJvcnQiLCJsYW5ndWFnZSIsInVybCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImF0dHIiLCJzZWxlY3QyIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsInJlcXVlc3Rhbm5lZSIsInJlc3BvbnNlYW5uZWUiLCJpZF9wcm9tb3Rpb24iLCJpZF9zZW1lc3RyZSIsImlkX2FubmVlIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsIm1vZGFsIiwibW9kYWxBbGVydCIsInJlbW92ZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwicHJlcGVuZCIsInJlc2V0IiwicmVsb2FkIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRQdkluZm9zIiwidGhlbiIsInN1Y2Nlc3MiLCJlcnIiLCJ3aW5kb3ciLCJvcGVuIiwicHJvcCIsImhlYWRlcnMiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==