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
              $("#importer-modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(data, "</p>\n            </div>"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcENELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ldmFsdWF0aW9uL3B2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgbGV0IGlkX3B2ID0gZmFsc2U7XHJcbiAgICAvLyBsZXQgaWRFcHJldXZlcyA9IFtdO1xyXG4gICAgdmFyIGRhdGFibGVfcHZzID0gJChcIiNkYXRhYmxlc19wdnNcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvZXZhbHVhdGlvbi9wdi9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGlkRXByZXV2ZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAvLyAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAvLyAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9wdikuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlRHJhd0NhbGxiYWNrOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJyNkYXRhYmxlc19wdnMnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2RhdGFibGVzX3B2cycpLkRhdGFUYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vQWJvcnQgcHJldmlvdXMgYWpheCByZXF1ZXN0IGlmIGl0IGlzIHN0aWxsIGluIHByb2Nlc3MuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSBkdC5zZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzWzBdLmpxWEhSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfbm90ZXNfZXByZXV2ZSB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAvLyAgICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAvLyAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCBpbmRleCA9IGlkRXByZXV2ZXMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgLy8gICAgICAgICBpZEVwcmV1dmVzLnNwbGljZShpbmRleCwxKTtcclxuICAgIC8vICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgIC8vICAgICAgICAgaWRFcHJldXZlcy5wdXNoKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGlkRXByZXV2ZXMpO1xyXG4gICAgLy8gfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfcHZzIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9wdiA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhYmxlc19wdnMgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBpY29uID0gJCgnI25vdGUgaScpO1xyXG4gICAgICAgICAgICAvLyBpY29uLnJlbW92ZUNsYXNzKCdmYS1uZXdzcGFwZXInKS5hZGRDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJyk7XHJcbiAgICAgICAgICAgIGlkX3B2ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAvLyB0YWJsZV9ub3RlX2luc2NyaXB0aW9uKClcclxuICAgICAgICAgICAgLy8gaWNvbi5hZGRDbGFzcygnZmEtbmV3c3BhcGVyJykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBkYXRhYmxlX3B2cy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBkYXRhYmxlX3B2cy5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRhdGFibGVfcHZzLmNvbHVtbnMoKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjYW5uZWUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBkYXRhYmxlX3B2cy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBkYXRhYmxlX3B2cy5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0YW5uZWUgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvYW5uZWUvJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZWFubmVlID0gcmVxdWVzdGFubmVlLmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGF0YWJsZV9wdnMuY29sdW1ucygwKS5zZWFyY2goJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNhbm5lZScpLmh0bWwocmVzcG9uc2Vhbm5lZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGRhdGFibGVfcHZzLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGRhdGFibGVfcHZzLmNvbHVtbnMoMikuc2VhcmNoKGlkX3Byb21vdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRhdGFibGVfcHZzLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgZGF0YWJsZV9wdnMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGRhdGFibGVfcHZzLmNvbHVtbnMoMykuc2VhcmNoKGlkX3NlbWVzdHJlKS5kcmF3KCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRhdGFibGVfcHZzLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjYW5uZWVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2FubmVlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBkYXRhYmxlX3B2cy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKGlkX2FubmVlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgZGF0YWJsZV9wdnMuY29sdW1ucyg0KS5zZWFyY2goaWRfYW5uZWUpLmRyYXcoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGF0YWJsZV9wdnMuY29sdW1ucygxKS5zZWFyY2goJChcIiNmb3JtYXRpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjYWpvdXRlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCQoXCIjYW5uZWVcIikudmFsKCkgPT0gXCJcIiB8fCAkKFwiI3NlbWVzdHJlXCIpLnZhbCgpID09IFwiXCIpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBhbm5lZSBldCB1bmUgc2VtZXN0cmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjYWpvdXRfcHZfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiI3B2X3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjYWpvdXRfcHZfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNwdl9zYXZlIC5idG4gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYW5uZWUnLCQoXCIjYW5uZWVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc2VtZXN0cmUnLCQoXCIjc2VtZXN0cmVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9wdi9ham91dGVyX3B2JywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNham91dF9wdl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJChcIiNwdl9zYXZlXCIpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIGRhdGFibGVfcHZzLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAkKCcjYWpvdXRfcHZfbW9kYWwnKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRfcHZfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IGdldFB2SW5mb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNtb2RpZmllcl9wdl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBheGlvcy5nZXQoJy9ldmFsdWF0aW9uL3B2L2dldFB2SW5mb3MvJytpZF9wdilcclxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1lZGl0XCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAgICAgICAgICAgJCgnI21vZGlmaWVyX3B2X21vZGFsICNwdl9tb2RpZmllcicpLmh0bWwoc3VjY2Vzcy5kYXRhKVxyXG4gICAgICAgICAgICAkKCcjbW9kaWZpZXJfcHZfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4gJykuYWRkQ2xhc3MoXCJmYS1lZGl0XCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAkKFwiI21vZGlmaWVyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRfcHYgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldFB2SW5mb3MoKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNwdl9tb2RpZmllclwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNtb2RpZmllcl9wdl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGlmKGlkX3B2ID09IGZhbHNlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNwdl9tb2RpZmllciAuYnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ0lEUHYnLGlkX3B2KVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vcHYvbW9kaWZpZXJfcHYvJytpZF9wdiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9wdl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJChcIiNwdl9tb2RpZmllclwiKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICBkYXRhYmxlX3B2cy5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgJCgnI21vZGlmaWVyX3B2X21vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX3B2X21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2ltcHJpbWVyJywgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYoIWlkX3B2KXtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvZXZhbHVhdGlvbi9wdi9pbXByZXNzaW9uUHYvJytpZF9wdiwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJCgnI2ltcG9ydGVyJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpZF9wdil7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2ltcG9ydGVyLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAkKCcjc2F2ZV9pbXBvcnQnKS5vbignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNpbXBvcnRlci1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICBpZighaWRfcHYpe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNzYXZlX2ltcG9ydCAuYnRuIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgJCgnLm15ZmlsZScpLnByb3AoJ2ZpbGVzJylbMF0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9ldmFsdWF0aW9uL3B2L2ltcG9ydFB2L1wiK2lkX3B2LCBmb3JtRGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICQoXCIjc2F2ZV9pbXBvcnRcIilbMF0ucmVzZXQoKTtcclxuICAgICAgICAkKFwiI2ltcG9ydGVyLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtkYXRhfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgLy8gdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIiNpbXBvcnRlci1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgXHJcbiAgXHJcbiAgfSk7XHJcbn0pOyIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX3B2IiwiZGF0YWJsZV9wdnMiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJhZGRDbGFzcyIsInByZURyYXdDYWxsYmFjayIsInNldHRpbmdzIiwiZm4iLCJpc0RhdGFUYWJsZSIsImR0IiwianFYSFIiLCJhYm9ydCIsImxhbmd1YWdlIiwidXJsIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsInNlbGVjdDIiLCJpZF9ldGFiIiwidmFsIiwiY29sdW1ucyIsInNlYXJjaCIsInJlc3BvbnNlIiwiZHJhdyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwicmVxdWVzdGFubmVlIiwicmVzcG9uc2Vhbm5lZSIsImlkX3Byb21vdGlvbiIsImlkX3NlbWVzdHJlIiwiaWRfYW5uZWUiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwibW9kYWwiLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJwcmVwZW5kIiwicmVzZXQiLCJyZWxvYWQiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImdldFB2SW5mb3MiLCJ0aGVuIiwic3VjY2VzcyIsImVyciIsIndpbmRvdyIsIm9wZW4iLCJwcm9wIiwiaGVhZGVycyIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9