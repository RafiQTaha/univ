(self["webpackChunk"] = self["webpackChunk"] || []).push([["reglement"],{

/***/ "./assets/components/facture/reglement.js":
/*!************************************************!*\
  !*** ./assets/components/facture/reglement.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

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
  var id_reglement = false;
  var ids_reglement = [];
  var table_reglement = $("#datables_reglement").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/facture/reglements/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      // ids_reglement.forEach((e) => {
      //     $("body tr#" + e)
      //     .find("input")
      //     .prop("checked", true);
      // });
      $("body tr#" + id_reglement).addClass('active_databales');
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_reglement')) {
        var dt = $('#datables_reglement').DataTable(); //Abort previous ajax request if it is still in process.

        var settings = dt.settings();

        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });

  var getReglementInfos = function getReglementInfos() {
    var modalAlert = $("#modifier_org-modal .modal-body .alert");
    modalAlert.remove();
    var icon = $("#modifier i");
    icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
    axios.get('/facture/reglements/getReglementInfos/' + id_reglement).then(function (success) {
      icon.removeClass('fa-spinner fa-spin').addClass("fa-edit");
      console.log(success);
      $('#edit_modal .edit_reglement-form').html(success.data);
      $('#edit_modal .edit_reglement-form select').select2();
    })["catch"](function (err) {
      console.log(err);
      icon.removeClass('fa-spinner fa-spin ').addClass("fa-edit");
    });
  };

  $("select").select2(); // $("#paiement").select2();

  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_reglement.columns(1).search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 13;
              break;
            }

            if ($("#paiement") && $("#paiement").val() != "") {
              table_reglement.columns(2).search($("#paiement").val());
            }

            if ($("#bordereaux").val() != "") {
              table_reglement.columns(3).search($("#bordereaux").val());
            }

            table_reglement.columns(0).search(id_etab).draw();
            _context.next = 9;
            return axios.get('/api/formation/' + id_etab);

          case 9:
            request = _context.sent;
            response = request.data;
            _context.next = 16;
            break;

          case 13:
            table_reglement.columns(0).search(id_etab).draw();

            if ($("#paiement") && $("#paiement").val() != "") {
              table_reglement.columns(2).search($("#paiement").val());
            }

            if ($("#bordereaux").val() != "") {
              table_reglement.columns(3).search($("#bordereaux").val());
            }

          case 16:
            $('#formation').html(response).select2();

          case 17:
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
            table_reglement.columns().search("");

            if ($("#paiement").val() != "") {
              table_reglement.columns(2).search($("#paiement").val());
            }

            if ($("#bordereaux").val() != "") {
              table_reglement.columns(3).search($("#bordereaux").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 13;
              break;
            }

            table_reglement.columns(1).search(id_formation).draw();
            _context2.next = 9;
            return axios.get('/api/promotion/' + id_formation);

          case 9:
            request = _context2.sent;
            response = request.data;
            _context2.next = 14;
            break;

          case 13:
            table_reglement.columns(0).search($("#etablissement").val()).draw();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#paiement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_paiement;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_paiement = $(this).val();
            table_reglement.columns(2).search(id_paiement).draw();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#bordereaux").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_bordereaux;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_bordereaux = $(this).val();
            table_reglement.columns(3).search(id_bordereaux).draw();

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $('body').on('dblclick', '#datables_reglement tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_reglement = null;
    } else {
      $("#datables_reglement tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_reglement = $(this).attr('id');
      getReglementInfos();
    }

    console.log(id_reglement);
  }); // $('body').on('click','#datables_reglement tbody tr',function (e) {
  //     e.preventDefault();
  //     const input = $(this).find("input");
  //     // const input = $(this);
  //     if (input.hasClass('check_reg')) {
  //         return;
  //     }
  //     else{
  //         if(input.is(":checked")){
  //             input.prop("checked",false);
  //             const index = ids_reglement.indexOf(input.attr("data-id"));
  //             ids_reglement.splice(index,1);
  //         }else{
  //             input.prop("checked",true);
  //             ids_reglement.push(input.attr("data-id"));
  //         }
  //     }
  //     console.log(ids_reglement);
  // })

  $('body').on('click', '#check', function () {
    var input = $(this);
    console.log(input.attr("data-id"));

    if (input.is(":checked")) {
      ids_reglement.push(input.attr("data-id"));
    } else {
      var index = ids_reglement.indexOf(input.attr("data-id"));
      ids_reglement.splice(index, 1);
    }

    console.log(ids_reglement);
  });
  $("body").on("click", '#imprimer', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();

              if (id_reglement) {
                _context5.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context5.abrupt("return");

            case 4:
              window.open('/facture/reglements/reglementprint/' + id_reglement, '_blank');

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }());
  $("body").on("click", '#borderaux', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var modalAlert, icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              modalAlert = $("#modifier_org-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#borderaux i");

              if (!(ids_reglement.length === 0 || $("#etablissement").val() == "" || $('#formation').val() == "" || $("#paiement").val() == "")) {
                _context6.next = 7;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir l\'etablissement, la formation, mode de paiement et au moins une ligne, '
              });
              return _context6.abrupt("return");

            case 7:
              icon.removeClass('fa-folder').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_reglement', JSON.stringify(ids_reglement));
              _context6.prev = 10;
              _context6.next = 13;
              return axios.post("/facture/reglements/borderaux/" + $('#formation').val() + '/' + $("#paiement").val(), formData);

            case 13:
              request = _context6.sent;
              data = request.data;
              icon.addClass('fa-folder').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: 'Borderaux Bien Genere'
              });
              ids_reglement.length = [];
              window.open('/facture/reglements/printborderaux/' + data, '_blank');
              table_reglement.ajax.reload(null, false);
              console.log(ids_reglement);
              _context6.next = 29;
              break;

            case 23:
              _context6.prev = 23;
              _context6.t0 = _context6["catch"](10);
              message = _context6.t0.response.data;
              console.log(_context6.t0, _context6.t0.response);
              icon.addClass('fa-folder').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 29:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[10, 23]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("body").on("click", '#imprimer_creance', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              window.open('/facture/reglements/creanceprint', '_blank');

            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x3) {
      return _ref7.apply(this, arguments);
    };
  }()); // $('body').on('click','#ajouter',function (e) {
  //     e.preventDefault();
  //     if(!id_facture){
  //         Toast.fire({
  //             icon: 'error',
  //             title: 'Veuillez selection une ligne!',
  //         })
  //         return;
  //     }
  //     $("#ajouter_modal").modal('show');
  // });

  $('body').on('click', '#annuler', function (e) {
    e.preventDefault();

    if (!id_reglement) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de choisir un reglement'
      });
      return;
    }

    $('#annuler_reglement_modal').modal("show");
  });
  $('body').on('click', '#Annuler_reglement', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var res, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();

              if (id_reglement) {
                _context8.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de choisir un reglement'
              });
              return _context8.abrupt("return");

            case 4:
              if (!($('#motif_annuler').find(':selected').val() == "")) {
                _context8.next = 7;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir Le Motif d\'annulation'
              });
              return _context8.abrupt("return");

            case 7:
              // alert($('#annuler_select').val());
              res = confirm('Vous voulez vraiment Annuler cette Reglement ?');

              if (!(res == 1)) {
                _context8.next = 28;
                break;
              }

              icon = $("#Annuler_reglement i");
              icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('motif_annuler', $('#motif_annuler').val());
              _context8.prev = 13;
              _context8.next = 16;
              return axios.post('/facture/reglements/annuler_reglement/' + id_reglement, formData);

            case 16:
              request = _context8.sent;
              response = request.data;
              Toast.fire({
                icon: 'success',
                title: response
              });
              table_reglement.ajax.reload(null, false);
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              _context8.next = 28;
              break;

            case 23:
              _context8.prev = 23;
              _context8.t0 = _context8["catch"](13);
              message = _context8.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");

            case 28:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[13, 23]]);
    }));

    return function (_x4) {
      return _ref8.apply(this, arguments);
    };
  }());
  $('body').on('click', '#modifier', function (e) {
    e.preventDefault();

    if (!id_reglement) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#edit_modal").modal('show');
  });
  $("body").on("submit", '.edit_reglement-form', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault(); // alert('test');

              formdata = $(this).serialize();
              modalAlert = $("#edit_modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".edit_reglement-form .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context9.prev = 6;
              _context9.next = 9;
              return axios.post('/facture/reglements/modifier_reglement/' + id_reglement, formdata);

            case 9:
              request = _context9.sent;
              data = request.data;
              $("#edit_modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              reglement = false;
              table_reglement.ajax.reload(null, false);
              window.open('/facture/reglements/reglementprint/' + id_reglement, '_blank');
              _context9.next = 25;
              break;

            case 18:
              _context9.prev = 18;
              _context9.t0 = _context9["catch"](6);
              message = _context9.t0.response.data;
              console.log(_context9.t0, _context9.t0.response);
              modalAlert.remove();
              $("#edit_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 25:
              setTimeout(function () {
                $("#edit_modal .modal-body .alert").remove();
              }, 4000);

            case 26:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this, [[6, 18]]);
    }));

    return function (_x5) {
      return _ref9.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction', function () {
    window.open('/facture/reglements/extraction_reglement', '_blank');
  });
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/facture/reglement.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdDQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZmFjdHVyZS9yZWdsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfcmVnbGVtZW50ID0gZmFsc2U7XHJcbiAgICBsZXQgaWRzX3JlZ2xlbWVudCA9IFtdO1xyXG4gICAgdmFyIHRhYmxlX3JlZ2xlbWVudCA9ICQoXCIjZGF0YWJsZXNfcmVnbGVtZW50XCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgICAgIGFqYXg6IFwiL2ZhY3R1cmUvcmVnbGVtZW50cy9saXN0XCIsXHJcbiAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlkc19yZWdsZW1lbnQuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX3JlZ2xlbWVudCkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJlRHJhd0NhbGxiYWNrOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCcjZGF0YWJsZXNfcmVnbGVtZW50JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZHQgPSAkKCcjZGF0YWJsZXNfcmVnbGVtZW50JykuRGF0YVRhYmxlKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL0Fib3J0IHByZXZpb3VzIGFqYXggcmVxdWVzdCBpZiBpdCBpcyBzdGlsbCBpbiBwcm9jZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGR0LnNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzWzBdLmpxWEhSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGdldFJlZ2xlbWVudEluZm9zID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjbW9kaWZpZXJfb3JnLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2ZhY3R1cmUvcmVnbGVtZW50cy9nZXRSZWdsZW1lbnRJbmZvcy8nK2lkX3JlZ2xlbWVudClcclxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1lZGl0XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAgICAgICAgICAgJCgnI2VkaXRfbW9kYWwgLmVkaXRfcmVnbGVtZW50LWZvcm0nKS5odG1sKHN1Y2Nlc3MuZGF0YSlcclxuICAgICAgICAgICAgJCgnI2VkaXRfbW9kYWwgLmVkaXRfcmVnbGVtZW50LWZvcm0gc2VsZWN0Jykuc2VsZWN0MigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4gJykuYWRkQ2xhc3MoXCJmYS1lZGl0XCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgIC8vICQoXCIjcGFpZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygxKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAoJChcIiNwYWllbWVudFwiKSAmJiAkKFwiI3BhaWVtZW50XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3BhaWVtZW50XCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkKFwiI2JvcmRlcmVhdXhcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjYm9yZGVyZWF1eFwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBpZiAoJChcIiNwYWllbWVudFwiKSAmJiAkKFwiI3BhaWVtZW50XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3BhaWVtZW50XCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkKFwiI2JvcmRlcmVhdXhcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjYm9yZGVyZWF1eFwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI3BhaWVtZW50XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcGFpZW1lbnRcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkKFwiI2JvcmRlcmVhdXhcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygzKS5zZWFyY2goJChcIiNib3JkZXJlYXV4XCIpLnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygwKS5zZWFyY2goJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjcGFpZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3BhaWVtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygyKS5zZWFyY2goaWRfcGFpZW1lbnQpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2JvcmRlcmVhdXhcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2JvcmRlcmVhdXggPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDMpLnNlYXJjaChpZF9ib3JkZXJlYXV4KS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhYmxlc19yZWdsZW1lbnQgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3JlZ2xlbWVudCA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhYmxlc19yZWdsZW1lbnQgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9yZWdsZW1lbnQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIGdldFJlZ2xlbWVudEluZm9zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkX3JlZ2xlbWVudCk7XHJcbiAgICB9KVxyXG4gICAgLy8gJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19yZWdsZW1lbnQgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAvLyAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgLy8gICAgIGlmIChpbnB1dC5oYXNDbGFzcygnY2hlY2tfcmVnJykpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNle1xyXG4gICAgLy8gICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgIC8vICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZHNfcmVnbGVtZW50LmluZGV4T2YoaW5wdXQuYXR0cihcImRhdGEtaWRcIikpO1xyXG4gICAgLy8gICAgICAgICAgICAgaWRzX3JlZ2xlbWVudC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAvLyAgICAgICAgIH1lbHNle1xyXG4gICAgLy8gICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgIC8vICAgICAgICAgICAgIGlkc19yZWdsZW1lbnQucHVzaChpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaWRzX3JlZ2xlbWVudCk7XHJcbiAgICAvLyB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjY2hlY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcylcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSlcclxuICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgaWRzX3JlZ2xlbWVudC5wdXNoKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZHNfcmVnbGVtZW50LmluZGV4T2YoaW5wdXQuYXR0cihcImRhdGEtaWRcIikpO1xyXG4gICAgICAgICAgICBpZHNfcmVnbGVtZW50LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKGlkc19yZWdsZW1lbnQpXHJcbiAgICAgIH0pO1xyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnI2ltcHJpbWVyJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3JlZ2xlbWVudCl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvZmFjdHVyZS9yZWdsZW1lbnRzL3JlZ2xlbWVudHByaW50LycraWRfcmVnbGVtZW50LCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNib3JkZXJhdXgnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI21vZGlmaWVyX29yZy1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNib3JkZXJhdXggaVwiKTtcclxuICAgICAgICBpZihpZHNfcmVnbGVtZW50Lmxlbmd0aCA9PT0gMHx8ICQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSA9PSBcIlwiIHx8ICQoJyNmb3JtYXRpb24nKS52YWwoKSA9PSBcIlwiIHx8ICQoXCIjcGFpZW1lbnRcIikudmFsKCkgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgbFxcJ2V0YWJsaXNzZW1lbnQsIGxhIGZvcm1hdGlvbiwgbW9kZSBkZSBwYWllbWVudCBldCBhdSBtb2lucyB1bmUgbGlnbmUsICcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZm9sZGVyJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZHNfcmVnbGVtZW50JywgSlNPTi5zdHJpbmdpZnkoaWRzX3JlZ2xlbWVudCkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2ZhY3R1cmUvcmVnbGVtZW50cy9ib3JkZXJhdXgvXCIrJCgnI2Zvcm1hdGlvbicpLnZhbCgpKycvJyskKFwiI3BhaWVtZW50XCIpLnZhbCgpLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWZvbGRlcicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQm9yZGVyYXV4IEJpZW4gR2VuZXJlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWRzX3JlZ2xlbWVudC5sZW5ndGggPSBbXTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL3JlZ2xlbWVudHMvcHJpbnRib3JkZXJhdXgvJytkYXRhLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaWRzX3JlZ2xlbWVudCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWZvbGRlcicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNpbXByaW1lcl9jcmVhbmNlJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL3JlZ2xlbWVudHMvY3JlYW5jZXByaW50JywgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vICQoJ2JvZHknKS5vbignY2xpY2snLCcjYWpvdXRlcicsZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgaWYoIWlkX2ZhY3R1cmUpe1xyXG4gICAgLy8gICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgIC8vICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAkKFwiI2Fqb3V0ZXJfbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIC8vIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNhbm51bGVyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfcmVnbGVtZW50KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBjaG9pc2lyIHVuIHJlZ2xlbWVudCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2FubnVsZXJfcmVnbGVtZW50X21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjQW5udWxlcl9yZWdsZW1lbnQnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfcmVnbGVtZW50KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgY2hvaXNpciB1biByZWdsZW1lbnQnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoJyNtb3RpZl9hbm51bGVyJykuZmluZCgnOnNlbGVjdGVkJykudmFsKCkgPT0gXCJcIiApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgTGUgTW90aWYgZFxcJ2FubnVsYXRpb24nLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFsZXJ0KCQoJyNhbm51bGVyX3NlbGVjdCcpLnZhbCgpKTtcclxuICAgICAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgQW5udWxlciBjZXR0ZSBSZWdsZW1lbnQgPycpO1xyXG4gICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjQW5udWxlcl9yZWdsZW1lbnQgaVwiKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtdGltZXMtY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21vdGlmX2FubnVsZXInLCAkKCcjbW90aWZfYW5udWxlcicpLnZhbCgpKTsgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2ZhY3R1cmUvcmVnbGVtZW50cy9hbm51bGVyX3JlZ2xlbWVudC8nK2lkX3JlZ2xlbWVudCxmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI21vZGlmaWVyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfcmVnbGVtZW50KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNlZGl0X21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgJy5lZGl0X3JlZ2xlbWVudC1mb3JtJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gYWxlcnQoJ3Rlc3QnKTtcclxuICAgICAgICBsZXQgZm9ybWRhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpXHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNlZGl0X21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiLmVkaXRfcmVnbGVtZW50LWZvcm0gLmJ0biBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvZmFjdHVyZS9yZWdsZW1lbnRzL21vZGlmaWVyX3JlZ2xlbWVudC8nK2lkX3JlZ2xlbWVudCxmb3JtZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNlZGl0X21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj4ke2RhdGF9PC9kaXY+YFxyXG4gICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIHJlZ2xlbWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvcmVnbGVtZW50cy9yZWdsZW1lbnRwcmludC8nK2lkX3JlZ2xlbWVudCwgJ19ibGFuaycpO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2VkaXRfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAkKFwiI2VkaXRfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL3JlZ2xlbWVudHMvZXh0cmFjdGlvbl9yZWdsZW1lbnQnLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgXHJcbn0pIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcclxuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XHJcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XHJcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcclxudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XHJcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xyXG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XHJcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xyXG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xyXG5cclxuLy8gQEBzZWFyY2ggbG9naWNcclxuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXHJcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXHJcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XHJcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcclxuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XHJcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XHJcbiAgICB9LFxyXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxyXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xyXG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcclxuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xyXG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xyXG5cclxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xyXG5cclxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xyXG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XHJcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcclxuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xyXG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XHJcbiAgICB9XHJcbiAgXTtcclxufSk7XHJcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xyXG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcclxudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcclxudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xyXG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xyXG5cclxudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcclxudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xyXG5cclxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XHJcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XHJcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xyXG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcclxuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcclxuICB9O1xyXG59O1xyXG5cclxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxyXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xyXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xyXG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcclxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XHJcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXHJcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcclxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxyXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcclxufSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX3JlZ2xlbWVudCIsImlkc19yZWdsZW1lbnQiLCJ0YWJsZV9yZWdsZW1lbnQiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJhZGRDbGFzcyIsInByZURyYXdDYWxsYmFjayIsInNldHRpbmdzIiwiZm4iLCJpc0RhdGFUYWJsZSIsImR0IiwianFYSFIiLCJhYm9ydCIsImxhbmd1YWdlIiwidXJsIiwiZ2V0UmVnbGVtZW50SW5mb3MiLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwiaWNvbiIsInJlbW92ZUNsYXNzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJodG1sIiwiZGF0YSIsInNlbGVjdDIiLCJlcnIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwicmVzcG9uc2UiLCJkcmF3IiwicmVxdWVzdCIsImlkX2Zvcm1hdGlvbiIsImlkX3BhaWVtZW50IiwiaWRfYm9yZGVyZWF1eCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwiYXR0ciIsImlucHV0IiwiaXMiLCJwdXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZmlyZSIsInRpdGxlIiwid2luZG93Iiwib3BlbiIsImxlbmd0aCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsInJlbG9hZCIsIm1lc3NhZ2UiLCJtb2RhbCIsImZpbmQiLCJyZXMiLCJjb25maXJtIiwiZm9ybWRhdGEiLCJzZXJpYWxpemUiLCJwcmVwZW5kIiwicmVnbGVtZW50Iiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=