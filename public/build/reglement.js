(self["webpackChunk"] = self["webpackChunk"] || []).push([["reglement"],{

/***/ "./assets/components/facture/reglement.js":
/*!************************************************!*\
  !*** ./assets/components/facture/reglement.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

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
      ids_reglement.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
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

  $("select").select2();
  $("#paiement").select2();
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
  });
  $('body').on('click', '#datables_reglement tbody tr input', function (e) {
    e.preventDefault(); // const input = $(this).find("input");

    var input = $(this);

    if (input.hasClass('check_reg')) {
      return;
    } else {
      if (input.is(":checked")) {
        input.prop("checked", false);
        var index = ids_reglement.indexOf(input.attr("data-id"));
        ids_reglement.splice(index, 1);
      } else {
        input.prop("checked", true);
        ids_reglement.push(input.attr("data-id"));
      }
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
              _context6.next = 28;
              break;

            case 22:
              _context6.prev = 22;
              _context6.t0 = _context6["catch"](10);
              message = _context6.t0.response.data;
              console.log(_context6.t0, _context6.t0.response);
              icon.addClass('fa-folder').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 28:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[10, 22]]);
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
                _context8.next = 27;
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
              _context8.next = 27;
              break;

            case 23:
              _context8.prev = 23;
              _context8.t0 = _context8["catch"](13);
              message = _context8.t0.response.data;
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");

            case 27:
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

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


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

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcENELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9mYWN0dXJlL3JlZ2xlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIGxldCBpZF9yZWdsZW1lbnQgPSBmYWxzZTtcclxuICAgIGxldCBpZHNfcmVnbGVtZW50ID0gW107XHJcbiAgICB2YXIgdGFibGVfcmVnbGVtZW50ID0gJChcIiNkYXRhYmxlc19yZWdsZW1lbnRcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICAgICAgYWpheDogXCIvZmFjdHVyZS9yZWdsZW1lbnRzL2xpc3RcIixcclxuICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWRzX3JlZ2xlbWVudC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfcmVnbGVtZW50KS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJyNkYXRhYmxlc19yZWdsZW1lbnQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkdCA9ICQoJyNkYXRhYmxlc19yZWdsZW1lbnQnKS5EYXRhVGFibGUoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vQWJvcnQgcHJldmlvdXMgYWpheCByZXF1ZXN0IGlmIGl0IGlzIHN0aWxsIGluIHByb2Nlc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gZHQuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZ2V0UmVnbGVtZW50SW5mb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNtb2RpZmllcl9vcmctbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvZmFjdHVyZS9yZWdsZW1lbnRzL2dldFJlZ2xlbWVudEluZm9zLycraWRfcmVnbGVtZW50KVxyXG4gICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLWVkaXRcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAkKCcjZWRpdF9tb2RhbCAuZWRpdF9yZWdsZW1lbnQtZm9ybScpLmh0bWwoc3VjY2Vzcy5kYXRhKVxyXG4gICAgICAgICAgICAkKCcjZWRpdF9tb2RhbCAuZWRpdF9yZWdsZW1lbnQtZm9ybSBzZWxlY3QnKS5zZWxlY3QyKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbiAnKS5hZGRDbGFzcyhcImZhLWVkaXRcIik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNwYWllbWVudFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDEpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiI3BhaWVtZW50XCIpICYmICQoXCIjcGFpZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcGFpZW1lbnRcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoXCIjYm9yZGVyZWF1eFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygzKS5zZWFyY2goJChcIiNib3JkZXJlYXV4XCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGlmICgkKFwiI3BhaWVtZW50XCIpICYmICQoXCIjcGFpZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcGFpZW1lbnRcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoXCIjYm9yZGVyZWF1eFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygzKS5zZWFyY2goJChcIiNib3JkZXJlYXV4XCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYgKCQoXCIjcGFpZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygyKS5zZWFyY2goJChcIiNwYWllbWVudFwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCQoXCIjYm9yZGVyZWF1eFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI2JvcmRlcmVhdXhcIikudmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNwYWllbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcGFpZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDIpLnNlYXJjaChpZF9wYWllbWVudCkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjYm9yZGVyZWF1eFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfYm9yZGVyZWF1eCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMykuc2VhcmNoKGlkX2JvcmRlcmVhdXgpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGFibGVzX3JlZ2xlbWVudCB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfcmVnbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RhdGFibGVzX3JlZ2xlbWVudCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3JlZ2xlbWVudCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgZ2V0UmVnbGVtZW50SW5mb3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRfcmVnbGVtZW50KTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX3JlZ2xlbWVudCB0Ym9keSB0ciBpbnB1dCcsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc0NsYXNzKCdjaGVja19yZWcnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkc19yZWdsZW1lbnQuaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfcmVnbGVtZW50LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWRzX3JlZ2xlbWVudC5wdXNoKGlucHV0LmF0dHIoXCJkYXRhLWlkXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZHNfcmVnbGVtZW50KTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcjaW1wcmltZXInLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfcmVnbGVtZW50KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL3JlZ2xlbWVudHMvcmVnbGVtZW50cHJpbnQvJytpZF9yZWdsZW1lbnQsICdfYmxhbmsnKTtcclxuICAgIH0pO1xyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnI2JvcmRlcmF1eCcsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjbW9kaWZpZXJfb3JnLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2JvcmRlcmF1eCBpXCIpO1xyXG4gICAgICAgIGlmKGlkc19yZWdsZW1lbnQubGVuZ3RoID09PSAwfHwgJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpID09IFwiXCIgfHwgJCgnI2Zvcm1hdGlvbicpLnZhbCgpID09IFwiXCIgfHwgJChcIiNwYWllbWVudFwiKS52YWwoKSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBsXFwnZXRhYmxpc3NlbWVudCwgbGEgZm9ybWF0aW9uLCBtb2RlIGRlIHBhaWVtZW50IGV0IGF1IG1vaW5zIHVuZSBsaWduZSwgJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1mb2xkZXInKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkc19yZWdsZW1lbnQnLCBKU09OLnN0cmluZ2lmeShpZHNfcmVnbGVtZW50KSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvZmFjdHVyZS9yZWdsZW1lbnRzL2JvcmRlcmF1eC9cIiskKCcjZm9ybWF0aW9uJykudmFsKCkrJy8nKyQoXCIjcGFpZW1lbnRcIikudmFsKCksIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZm9sZGVyJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdCb3JkZXJhdXggQmllbiBHZW5lcmUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZHNfcmVnbGVtZW50Lmxlbmd0aCA9IFtdO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvcmVnbGVtZW50cy9wcmludGJvcmRlcmF1eC8nK2RhdGEsICdfYmxhbmsnKTtcclxuICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1mb2xkZXInKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcjaW1wcmltZXJfY3JlYW5jZScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvZmFjdHVyZS9yZWdsZW1lbnRzL2NyZWFuY2VwcmludCcsICdfYmxhbmsnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyAkKCdib2R5Jykub24oJ2NsaWNrJywnI2Fqb3V0ZXInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIGlmKCFpZF9mYWN0dXJlKXtcclxuICAgIC8vICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgJChcIiNham91dGVyX21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAvLyB9KTtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjYW5udWxlcicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3JlZ2xlbWVudCl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgY2hvaXNpciB1biByZWdsZW1lbnQnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNhbm51bGVyX3JlZ2xlbWVudF9tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI0FubnVsZXJfcmVnbGVtZW50JywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3JlZ2xlbWVudCl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIGNob2lzaXIgdW4gcmVnbGVtZW50JyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKCcjbW90aWZfYW5udWxlcicpLmZpbmQoJzpzZWxlY3RlZCcpLnZhbCgpID09IFwiXCIgKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIExlIE1vdGlmIGRcXCdhbm51bGF0aW9uJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhbGVydCgkKCcjYW5udWxlcl9zZWxlY3QnKS52YWwoKSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IEFubnVsZXIgY2V0dGUgUmVnbGVtZW50ID8nKTtcclxuICAgICAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI0FubnVsZXJfcmVnbGVtZW50IGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdtb3RpZl9hbm51bGVyJywgJCgnI21vdGlmX2FubnVsZXInKS52YWwoKSk7IFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9mYWN0dXJlL3JlZ2xlbWVudHMvYW5udWxlcl9yZWdsZW1lbnQvJytpZF9yZWdsZW1lbnQsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10aW1lcy1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjbW9kaWZpZXInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9yZWdsZW1lbnQpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2VkaXRfbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKFwiYm9keVwiKS5vbihcInN1Ym1pdFwiLCAnLmVkaXRfcmVnbGVtZW50LWZvcm0nLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBhbGVydCgndGVzdCcpO1xyXG4gICAgICAgIGxldCBmb3JtZGF0YSA9ICQodGhpcykuc2VyaWFsaXplKClcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI2VkaXRfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIuZWRpdF9yZWdsZW1lbnQtZm9ybSAuYnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9mYWN0dXJlL3JlZ2xlbWVudHMvbW9kaWZpZXJfcmVnbGVtZW50LycraWRfcmVnbGVtZW50LGZvcm1kYXRhKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI2VkaXRfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7IFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgcmVnbGVtZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCcvZmFjdHVyZS9yZWdsZW1lbnRzL3JlZ2xlbWVudHByaW50LycraWRfcmVnbGVtZW50LCAnX2JsYW5rJyk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjZWRpdF9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICQoXCIjZWRpdF9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICB9KTtcclxuICBcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXh0cmFjdGlvbicsIGZ1bmN0aW9uICgpe1xyXG4gICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvcmVnbGVtZW50cy9leHRyYWN0aW9uX3JlZ2xlbWVudCcsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICBcclxufSkiLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfcmVnbGVtZW50IiwiaWRzX3JlZ2xlbWVudCIsInRhYmxlX3JlZ2xlbWVudCIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsInByZURyYXdDYWxsYmFjayIsInNldHRpbmdzIiwiZm4iLCJpc0RhdGFUYWJsZSIsImR0IiwianFYSFIiLCJhYm9ydCIsImxhbmd1YWdlIiwidXJsIiwiZ2V0UmVnbGVtZW50SW5mb3MiLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwiaWNvbiIsInJlbW92ZUNsYXNzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJodG1sIiwiZGF0YSIsInNlbGVjdDIiLCJlcnIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwicmVzcG9uc2UiLCJkcmF3IiwicmVxdWVzdCIsImlkX2Zvcm1hdGlvbiIsImlkX3BhaWVtZW50IiwiaWRfYm9yZGVyZWF1eCIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJhdHRyIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJmaXJlIiwidGl0bGUiLCJ3aW5kb3ciLCJvcGVuIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwicmVsb2FkIiwibWVzc2FnZSIsIm1vZGFsIiwicmVzIiwiY29uZmlybSIsImZvcm1kYXRhIiwic2VyaWFsaXplIiwicHJlcGVuZCIsInJlZ2xlbWVudCIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9