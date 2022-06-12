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
  $('body').on('click', '#datables_reglement tbody tr', function (e) {
    e.preventDefault();
    var input = $(this).find("input");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZmFjdHVyZS9yZWdsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfcmVnbGVtZW50ID0gZmFsc2U7XHJcbiAgICBsZXQgaWRzX3JlZ2xlbWVudCA9IFtdO1xyXG4gICAgdmFyIHRhYmxlX3JlZ2xlbWVudCA9ICQoXCIjZGF0YWJsZXNfcmVnbGVtZW50XCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgICAgIGFqYXg6IFwiL2ZhY3R1cmUvcmVnbGVtZW50cy9saXN0XCIsXHJcbiAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlkc19yZWdsZW1lbnQuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX3JlZ2xlbWVudCkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBnZXRSZWdsZW1lbnRJbmZvcyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI21vZGlmaWVyX29yZy1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBheGlvcy5nZXQoJy9mYWN0dXJlL3JlZ2xlbWVudHMvZ2V0UmVnbGVtZW50SW5mb3MvJytpZF9yZWdsZW1lbnQpXHJcbiAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtZWRpdFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICQoJyNlZGl0X21vZGFsIC5lZGl0X3JlZ2xlbWVudC1mb3JtJykuaHRtbChzdWNjZXNzLmRhdGEpXHJcbiAgICAgICAgICAgICQoJyNlZGl0X21vZGFsIC5lZGl0X3JlZ2xlbWVudC1mb3JtIHNlbGVjdCcpLnNlbGVjdDIoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluICcpLmFkZENsYXNzKFwiZmEtZWRpdFwiKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI3BhaWVtZW50XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMSkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIjcGFpZW1lbnRcIikgJiYgJChcIiNwYWllbWVudFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygyKS5zZWFyY2goJChcIiNwYWllbWVudFwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChcIiNib3JkZXJlYXV4XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI2JvcmRlcmVhdXhcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgICAgICAgICAgaWYgKCQoXCIjcGFpZW1lbnRcIikgJiYgJChcIiNwYWllbWVudFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygyKS5zZWFyY2goJChcIiNwYWllbWVudFwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChcIiNib3JkZXJlYXV4XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI2JvcmRlcmVhdXhcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNwYWllbWVudFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3BhaWVtZW50XCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJChcIiNib3JkZXJlYXV4XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjYm9yZGVyZWF1eFwiKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI3BhaWVtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wYWllbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfcmVnbGVtZW50LmNvbHVtbnMoMikuc2VhcmNoKGlkX3BhaWVtZW50KS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNib3JkZXJlYXV4XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ib3JkZXJlYXV4ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9yZWdsZW1lbnQuY29sdW1ucygzKS5zZWFyY2goaWRfYm9yZGVyZWF1eCkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignZGJsY2xpY2snLCcjZGF0YWJsZXNfcmVnbGVtZW50IHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9yZWdsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfcmVnbGVtZW50IHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfcmVnbGVtZW50ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICBnZXRSZWdsZW1lbnRJbmZvcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZF9yZWdsZW1lbnQpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfcmVnbGVtZW50IHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmIChpbnB1dC5oYXNDbGFzcygnY2hlY2tfcmVnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZHNfcmVnbGVtZW50LmluZGV4T2YoaW5wdXQuYXR0cihcImRhdGEtaWRcIikpO1xyXG4gICAgICAgICAgICAgICAgaWRzX3JlZ2xlbWVudC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlkc19yZWdsZW1lbnQucHVzaChpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRzX3JlZ2xlbWVudCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnI2ltcHJpbWVyJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3JlZ2xlbWVudCl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvZmFjdHVyZS9yZWdsZW1lbnRzL3JlZ2xlbWVudHByaW50LycraWRfcmVnbGVtZW50LCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNib3JkZXJhdXgnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI21vZGlmaWVyX29yZy1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNib3JkZXJhdXggaVwiKTtcclxuICAgICAgICBpZihpZHNfcmVnbGVtZW50Lmxlbmd0aCA9PT0gMHx8ICQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSA9PSBcIlwiIHx8ICQoJyNmb3JtYXRpb24nKS52YWwoKSA9PSBcIlwiIHx8ICQoXCIjcGFpZW1lbnRcIikudmFsKCkgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgbFxcJ2V0YWJsaXNzZW1lbnQsIGxhIGZvcm1hdGlvbiwgbW9kZSBkZSBwYWllbWVudCBldCBhdSBtb2lucyB1bmUgbGlnbmUsICcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZm9sZGVyJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZHNfcmVnbGVtZW50JywgSlNPTi5zdHJpbmdpZnkoaWRzX3JlZ2xlbWVudCkpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2ZhY3R1cmUvcmVnbGVtZW50cy9ib3JkZXJhdXgvXCIrJCgnI2Zvcm1hdGlvbicpLnZhbCgpKycvJyskKFwiI3BhaWVtZW50XCIpLnZhbCgpLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWZvbGRlcicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQm9yZGVyYXV4IEJpZW4gR2VuZXJlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWRzX3JlZ2xlbWVudC5sZW5ndGggPSBbXTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL3JlZ2xlbWVudHMvcHJpbnRib3JkZXJhdXgvJytkYXRhLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgIHRhYmxlX3JlZ2xlbWVudC5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZm9sZGVyJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnI2ltcHJpbWVyX2NyZWFuY2UnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvcmVnbGVtZW50cy9jcmVhbmNlcHJpbnQnLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gJCgnYm9keScpLm9uKCdjbGljaycsJyNham91dGVyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICBpZighaWRfZmFjdHVyZSl7XHJcbiAgICAvLyAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgLy8gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgICQoXCIjYWpvdXRlcl9tb2RhbFwiKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgLy8gfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2FubnVsZXInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9yZWdsZW1lbnQpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIGNob2lzaXIgdW4gcmVnbGVtZW50JyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjYW5udWxlcl9yZWdsZW1lbnRfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNBbm51bGVyX3JlZ2xlbWVudCcsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9yZWdsZW1lbnQpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBjaG9pc2lyIHVuIHJlZ2xlbWVudCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJCgnI21vdGlmX2FubnVsZXInKS5maW5kKCc6c2VsZWN0ZWQnKS52YWwoKSA9PSBcIlwiICl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBMZSBNb3RpZiBkXFwnYW5udWxhdGlvbicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYWxlcnQoJCgnI2FubnVsZXJfc2VsZWN0JykudmFsKCkpO1xyXG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBBbm51bGVyIGNldHRlIFJlZ2xlbWVudCA/Jyk7XHJcbiAgICAgICAgaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNBbm51bGVyX3JlZ2xlbWVudCBpXCIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS10aW1lcy1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbW90aWZfYW5udWxlcicsICQoJyNtb3RpZl9hbm51bGVyJykudmFsKCkpOyBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZmFjdHVyZS9yZWdsZW1lbnRzL2FubnVsZXJfcmVnbGVtZW50LycraWRfcmVnbGVtZW50LGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10aW1lcy1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI21vZGlmaWVyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfcmVnbGVtZW50KXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNlZGl0X21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgJy5lZGl0X3JlZ2xlbWVudC1mb3JtJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gYWxlcnQoJ3Rlc3QnKTtcclxuICAgICAgICBsZXQgZm9ybWRhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpXHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNlZGl0X21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiLmVkaXRfcmVnbGVtZW50LWZvcm0gLmJ0biBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvZmFjdHVyZS9yZWdsZW1lbnRzL21vZGlmaWVyX3JlZ2xlbWVudC8nK2lkX3JlZ2xlbWVudCxmb3JtZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNlZGl0X21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj4ke2RhdGF9PC9kaXY+YFxyXG4gICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIHJlZ2xlbWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0YWJsZV9yZWdsZW1lbnQuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvcmVnbGVtZW50cy9yZWdsZW1lbnRwcmludC8nK2lkX3JlZ2xlbWVudCwgJ19ibGFuaycpO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2VkaXRfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAkKFwiI2VkaXRfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL3JlZ2xlbWVudHMvZXh0cmFjdGlvbl9yZWdsZW1lbnQnLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgXHJcbn0pIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX3JlZ2xlbWVudCIsImlkc19yZWdsZW1lbnQiLCJ0YWJsZV9yZWdsZW1lbnQiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJmb3JFYWNoIiwiZSIsImZpbmQiLCJwcm9wIiwiYWRkQ2xhc3MiLCJsYW5ndWFnZSIsInVybCIsImdldFJlZ2xlbWVudEluZm9zIiwibW9kYWxBbGVydCIsInJlbW92ZSIsImljb24iLCJyZW1vdmVDbGFzcyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImRhdGEiLCJzZWxlY3QyIiwiZXJyIiwib24iLCJpZF9ldGFiIiwidmFsIiwiY29sdW1ucyIsInNlYXJjaCIsInJlc3BvbnNlIiwiZHJhdyIsInJlcXVlc3QiLCJpZF9mb3JtYXRpb24iLCJpZF9wYWllbWVudCIsImlkX2JvcmRlcmVhdXgiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwiYXR0ciIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiZmlyZSIsInRpdGxlIiwid2luZG93Iiwib3BlbiIsImxlbmd0aCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsInJlbG9hZCIsIm1lc3NhZ2UiLCJtb2RhbCIsInJlcyIsImNvbmZpcm0iLCJmb3JtZGF0YSIsInNlcmlhbGl6ZSIsInByZXBlbmQiLCJyZWdsZW1lbnQiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==