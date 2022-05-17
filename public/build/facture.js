(self["webpackChunk"] = self["webpackChunk"] || []).push([["facture"],{

/***/ "./assets/components/facture/facture.js":
/*!**********************************************!*\
  !*** ./assets/components/facture/facture.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

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
  var id_facture = false;
  var table_facture = $("#datables_facture").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/facture/factures/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      $("body tr#" + id_facture).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  }); // $("#banque").select2();
  // $("#paiement").select2();
  // $("#etablissement").select2();
  // $("#modifier_org-modal #org").select2();
  // $("#organisme").select2();
  // $("#reglement").select2();

  $("select").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_facture.columns(1).search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 13;
              break;
            }

            if ($("#reglement") && $("#reglement").val() != "") {
              table_facture.columns(2).search($("#reglement").val());
            }

            if ($("#organisme").val() != "") {
              table_facture.columns(3).search($("#organisme").val());
            }

            table_facture.columns(0).search(id_etab).draw();
            _context.next = 9;
            return axios.get('/api/formation/' + id_etab);

          case 9:
            request = _context.sent;
            response = request.data;
            _context.next = 16;
            break;

          case 13:
            table_facture.columns(0).search(id_etab).draw();

            if ($("#reglement") && $("#reglement").val() != "") {
              table_facture.columns(2).search($("#reglement").val());
            }

            if ($("#organisme").val() != "") {
              table_facture.columns(3).search($("#organisme").val());
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
            table_facture.columns().search("");

            if ($("#reglement") && $("#reglement").val() != "") {
              table_facture.columns(2).search($("#reglement").val());
            }

            if ($("#organisme").val() != "") {
              table_facture.columns(3).search($("#organisme").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 13;
              break;
            }

            table_facture.columns(1).search(id_formation).draw();
            _context2.next = 9;
            return axios.get('/api/promotion/' + id_formation);

          case 9:
            request = _context2.sent;
            response = request.data;
            _context2.next = 14;
            break;

          case 13:
            table_facture.columns(0).search($("#etablissement").val()).draw();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#reglement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_reglement;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_reglement = $(this).val();
            table_facture.columns(2).search(id_reglement).draw();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#organisme").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_organisme;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_organisme = $(this).val();
            table_facture.columns(3).search(id_organisme).draw();

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  var reglement = false;

  var getMontant = function getMontant() {
    axios.get('/facture/factures/getMontant/' + id_facture).then(function (success) {
      reglement = null;
      $("#ajouter").removeClass('btn-primary').addClass('btn-secondary').attr('disabled', false);

      if (success.data != 'vide') {
        reglement = 12;
        $("#montant").val(success.data);
        $("#montant2").val(success.data);
        $("#ajouter").removeClass('btn-secondary').addClass('btn-primary').attr('disabled', true);
      }
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var getFacture = function getFacture() {
    var icon = $("#facture i");
    icon.removeClass('fa-money-bill-alt').addClass("fa-spinner fa-spin");
    axios.get('/facture/factures/detaille_facture/' + id_facture).then(function (success) {
      if (success.data[0] == 0) {
        $('.modal-facture #add_detaille').css('display', 'none');
        $('.modal-facture #add').css('display', 'none');
        $('.modal-facture #detaille_active').css('display', 'none');
      } else {
        $('.modal-facture #add_detaille').css('display', 'block');
        $('.modal-facture #add').css('display', 'flex');
        $('.modal-facture #detaille_active').css('display', 'block');
      }

      $('.table_detaille_facture tbody').html(success.data[1]);
      icon.removeClass('fa-spinner fa-spin').addClass("fa-money-bill-alt"); // console.log(success.data[0]);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var getOrganismeByFacture = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var request;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!id_facture) {
                _context5.next = 6;
                break;
              }

              _context5.next = 3;
              return axios.get('/api/organisme/' + id_facture);

            case 3:
              request = _context5.sent;
              response = request.data;
              $('#org').html(response).select2();

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getOrganismeByFacture() {
      return _ref5.apply(this, arguments);
    };
  }();

  var load_frais_preins = function load_frais_preins() {
    if (id_facture) {
      axios.get('/facture/factures/article_frais/' + id_facture).then(function (success) {
        $('#detail_facture_modal #frais').html(success.data).select2();
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  $('body').on('click', '#datables_facture tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_facture = null;
      reglement = null;
      $("#ajouter").removeClass('btn-primary').addClass('btn-secondary').attr('disabled', false);
    } else {
      $("#datables_facture tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_facture = $(this).attr('id');
      console.log(id_facture);
      getOrganismeByFacture();
      getMontant();
      getFacture();
      load_frais_preins();
    }
  });
  $('body').on('click', '#facture', function (e) {
    e.preventDefault();

    if (!id_facture) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#detail_facture_modal").modal('show');
  });
  $('input[type=radio][name=organ]').on('change', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var request;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();

              if (!(this.value == 0)) {
                _context6.next = 10;
                break;
              }

              _context6.next = 4;
              return axios.get('/api/getorganismepasPayant');

            case 4:
              request = _context6.sent;
              response = request.data;
              $('.select-organ #org').html(response).select2();
              $('.select-organ').css('display', 'block');
              _context6.next = 12;
              break;

            case 10:
              $('.select-organ #org').html("");
              $('.select-organ').css('display', 'none');

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    return function (_x) {
      return _ref6.apply(this, arguments);
    };
  }());
  $('body').on('change', '.modal-facture #frais', function (e) {
    e.preventDefault();
    var frais = $(this).find(':selected').attr('data-id');

    if (frais != "") {
      $('.modal-facture #montantt').val();
    }

    $('.modal-facture #montantt').val(frais);
  });
  $('body').on('click', '#add_detaille', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var icon, organisme_id, formData, modalAlert, request, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              icon = $(this).find('i');
              icon.removeClass('fa-plus').addClass("fa-spinner fa-spin");
              organisme_id = $('.select-organ #org').val();

              if ($("input[name='organ']:checked").val() == 1) {
                organisme_id = 7;
              }

              formData = new FormData();
              formData.append('frais', $('#frais').val());
              formData.append('montant', $('#montantt').val());
              formData.append('ice', $('#ice').val());
              formData.append('organisme_id', organisme_id);
              modalAlert = $(".modal-facture .modal-body .alert");
              modalAlert.remove();
              _context7.prev = 12;
              _context7.next = 15;
              return axios.post('/facture/factures/add_detaille/' + id_facture, formData);

            case 15:
              request = _context7.sent;
              getFacture();
              $(".modal-facture .modal-body").prepend("<div class=\"alert alert-success\">Facture Bien Ajouter</div>");
              icon.removeClass('fa-spinner fa-spin').addClass("fa-plus");
              getMontant();
              table_facture.ajax.reload(null, false);
              _context7.next = 28;
              break;

            case 23:
              _context7.prev = 23;
              _context7.t0 = _context7["catch"](12);
              message = _context7.t0.response.data;
              $(".modal-facture .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.removeClass('fa-spinner fa-spin').addClass("fa-plus");

            case 28:
              setTimeout(function () {
                $(".modal-facture .modal-body .alert").remove();
              }, 4000);

            case 29:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[12, 23]]);
    }));

    return function (_x2) {
      return _ref7.apply(this, arguments);
    };
  }());
  $('body').on('click', '.detaille_cloture', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var icon, id_det, request, message;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();
              icon = $(this).find('i');
              icon.removeClass('fa-window-close').addClass("fa-spinner fa-spin");
              id_det = $(this).attr('id');
              _context8.prev = 4;
              _context8.next = 7;
              return axios.post('/facture/factures/cloture_detaille/' + id_det);

            case 7:
              request = _context8.sent;
              getMontant();
              getFacture();
              table_facture.ajax.reload(null, false);
              icon.removeClass('fa-spinner fa-spin').addClass("fa-window-close");
              _context8.next = 18;
              break;

            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](4);
              message = _context8.t0.response.data;
              icon.removeClass('fa-spinner fa-spin').addClass("fa-window-close");

            case 18:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this, [[4, 14]]);
    }));

    return function (_x3) {
      return _ref8.apply(this, arguments);
    };
  }());
  $('body').on('click', '#ajouter', function (e) {
    e.preventDefault();

    if (!id_facture) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    if (!reglement) {
      Toast.fire({
        icon: 'error',
        title: 'Cette Facture N\'a Aucun Detail!'
      });
      return;
    }

    $("#ajouter_modal").modal('show');
  });
  $("body").on("submit", '.new_facture-form', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();
              formdata = $(this).serialize();
              modalAlert = $("#ajouter_modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".new_facture-form .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context9.prev = 6;
              _context9.next = 9;
              return axios.post('/facture/factures/ajouter_reglement/' + id_facture, formdata);

            case 9:
              request = _context9.sent;
              data = request.data;
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-success\">Reglement Bien Ajouter</div>");
              $(this).trigger("reset");
              getMontant();
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              reglement = false;
              table_facture.ajax.reload(null, false);
              window.open('/facture/factures/facture/' + id_facture + '/' + data, '_blank');
              _context9.next = 27;
              break;

            case 20:
              _context9.prev = 20;
              _context9.t0 = _context9["catch"](6);
              message = _context9.t0.response.data;
              console.log(_context9.t0, _context9.t0.response);
              modalAlert.remove();
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 27:
              setTimeout(function () {
                $("#ajouter_modal .modal-body .alert").remove();
              }, 4000);

            case 28:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this, [[6, 20]]);
    }));

    return function (_x4) {
      return _ref9.apply(this, arguments);
    };
  }());
  $('body').on('click', '#modifier', /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault();

              if (id_facture) {
                _context10.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context10.abrupt("return");

            case 4:
              $("#modifier_org-modal").modal('show');

            case 5:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x5) {
      return _ref10.apply(this, arguments);
    };
  }());
  $('body').on('click', '#modifier_org', /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var modalAlert, icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault();
              modalAlert = $("#modifier_org-modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".modal_modifier_org-facture .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('organisme', $('#org').val());
              _context11.prev = 7;
              _context11.next = 10;
              return axios.post('/facture/factures/modifier_organisme_facture/' + id_facture, formData);

            case 10:
              request = _context11.sent;
              data = request.data;
              $("#modifier_org-modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              table_facture.ajax.reload(null, false);
              $('#org').select2();
              _context11.next = 24;
              break;

            case 18:
              _context11.prev = 18;
              _context11.t0 = _context11["catch"](7);
              message = _context11.t0.response.data;
              modalAlert.remove();
              $("#modifier_org-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
              setTimeout(function () {
                $("#modifier_org-modal .modal-body .alert").remove();
              }, 4000);

            case 25:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[7, 18]]);
    }));

    return function (_x6) {
      return _ref11.apply(this, arguments);
    };
  }());
  $("body").on("click", '#imprimer', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();

              if (id_facture) {
                _context12.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context12.abrupt("return");

            case 4:
              window.open('/facture/factures/printfacture/' + id_facture, '_blank');

            case 5:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function (_x7) {
      return _ref12.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


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

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8"], () => (__webpack_exec__("./assets/components/facture/facture.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNwQ0QsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFlBQVksbUJBQU8sQ0FBQyx1RkFBNkI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQztBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5ELHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3Q0FBd0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ZhY3R1cmUvZmFjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfZmFjdHVyZSA9IGZhbHNlO1xyXG4gICAgdmFyIHRhYmxlX2ZhY3R1cmUgPSAkKFwiI2RhdGFibGVzX2ZhY3R1cmVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvZmFjdHVyZS9mYWN0dXJlcy9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2ZhY3R1cmUpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gJChcIiNiYW5xdWVcIikuc2VsZWN0MigpO1xyXG4gICAgLy8gJChcIiNwYWllbWVudFwiKS5zZWxlY3QyKCk7XHJcbiAgICAvLyAkKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICAgLy8gJChcIiNtb2RpZmllcl9vcmctbW9kYWwgI29yZ1wiKS5zZWxlY3QyKCk7XHJcbiAgICAvLyAkKFwiI29yZ2FuaXNtZVwiKS5zZWxlY3QyKCk7XHJcbiAgICAvLyAkKFwiI3JlZ2xlbWVudFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgIFxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMSkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIjcmVnbGVtZW50XCIpICYmICQoXCIjcmVnbGVtZW50XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygyKS5zZWFyY2goJChcIiNyZWdsZW1lbnRcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygzKS5zZWFyY2goJChcIiNvcmdhbmlzbWVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBpZiAoJChcIiNyZWdsZW1lbnRcIikgJiYgJChcIiNyZWdsZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3JlZ2xlbWVudFwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChcIiNvcmdhbmlzbWVcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI29yZ2FuaXNtZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNyZWdsZW1lbnRcIikgJiYgJChcIiNyZWdsZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcmVnbGVtZW50XCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJChcIiNvcmdhbmlzbWVcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNyZWdsZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3JlZ2xlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDIpLnNlYXJjaChpZF9yZWdsZW1lbnQpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI29yZ2FuaXNtZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfb3JnYW5pc21lID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMykuc2VhcmNoKGlkX29yZ2FuaXNtZSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgIGxldCByZWdsZW1lbnQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGdldE1vbnRhbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvZmFjdHVyZS9mYWN0dXJlcy9nZXRNb250YW50LycraWRfZmFjdHVyZSlcclxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgcmVnbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgJChcIiNham91dGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzLmRhdGEgIT0gJ3ZpZGUnKSB7XHJcbiAgICAgICAgICAgICAgICByZWdsZW1lbnQgPSAxMjtcclxuICAgICAgICAgICAgICAgICQoXCIjbW9udGFudFwiKS52YWwoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICQoXCIjbW9udGFudDJcIikudmFsKHN1Y2Nlc3MuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Fqb3V0ZXJcIikucmVtb3ZlQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5hZGRDbGFzcygnYnRuLXByaW1hcnknKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRGYWN0dXJlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2ZhY3R1cmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2ZhY3R1cmUvZmFjdHVyZXMvZGV0YWlsbGVfZmFjdHVyZS8nK2lkX2ZhY3R1cmUpXHJcbiAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHN1Y2Nlc3MuZGF0YVswXSA9PSAwKXtcclxuICAgICAgICAgICAgICAgICQoJy5tb2RhbC1mYWN0dXJlICNhZGRfZGV0YWlsbGUnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjYWRkJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI2RldGFpbGxlX2FjdGl2ZScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjYWRkX2RldGFpbGxlJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgICAgICAgICAgICQoJy5tb2RhbC1mYWN0dXJlICNhZGQnKS5jc3MoJ2Rpc3BsYXknLCdmbGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjZGV0YWlsbGVfYWN0aXZlJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcudGFibGVfZGV0YWlsbGVfZmFjdHVyZSB0Ym9keScpLmh0bWwoc3VjY2Vzcy5kYXRhWzFdKVxyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLW1vbmV5LWJpbGwtYWx0XCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWNjZXNzLmRhdGFbMF0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0T3JnYW5pc21lQnlGYWN0dXJlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmKGlkX2ZhY3R1cmUpe1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL29yZ2FuaXNtZS8nK2lkX2ZhY3R1cmUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAkKCcjb3JnJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGxvYWRfZnJhaXNfcHJlaW5zID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGlkX2ZhY3R1cmUpe1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9mYWN0dXJlL2ZhY3R1cmVzL2FydGljbGVfZnJhaXMvJytpZF9mYWN0dXJlKVxyXG4gICAgICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgICAgICQoJyNkZXRhaWxfZmFjdHVyZV9tb2RhbCAjZnJhaXMnKS5odG1sKHN1Y2Nlc3MuZGF0YSkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZmFjdHVyZSB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfZmFjdHVyZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJlZ2xlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfZmFjdHVyZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2ZhY3R1cmUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkX2ZhY3R1cmUpO1xyXG4gICAgICAgICAgICBnZXRPcmdhbmlzbWVCeUZhY3R1cmUoKVxyXG4gICAgICAgICAgICBnZXRNb250YW50KCk7XHJcbiAgICAgICAgICAgIGdldEZhY3R1cmUoKTtcclxuICAgICAgICAgICAgbG9hZF9mcmFpc19wcmVpbnMoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNmYWN0dXJlJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZmFjdHVyZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2RldGFpbF9mYWN0dXJlX21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9b3JnYW5dJykub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldG9yZ2FuaXNtZXBhc1BheWFudCcpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NoYW5nZScsJy5tb2RhbC1mYWN0dXJlICNmcmFpcycsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZyYWlzID0gJCh0aGlzKS5maW5kKCc6c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgaWYoZnJhaXMgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1mYWN0dXJlICNtb250YW50dCcpLnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjbW9udGFudHQnKS52YWwoZnJhaXMpO1xyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2FkZF9kZXRhaWxsZScsYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQodGhpcykuZmluZCgnaScpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXBsdXMnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgb3JnYW5pc21lX2lkICA9ICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLnZhbCgpO1xyXG4gICAgICAgIGlmICgkKFwiaW5wdXRbbmFtZT0nb3JnYW4nXTpjaGVja2VkXCIpLnZhbCgpID09IDEpIHtcclxuICAgICAgICAgICAgb3JnYW5pc21lX2lkID0gN1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZyYWlzJywgJCgnI2ZyYWlzJykudmFsKCkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbW9udGFudCcsICQoJyNtb250YW50dCcpLnZhbCgpKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ljZScsICQoJyNpY2UnKS52YWwoKSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdvcmdhbmlzbWVfaWQnLCBvcmdhbmlzbWVfaWQpO1xyXG5cclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiLm1vZGFsLWZhY3R1cmUgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2ZhY3R1cmUvZmFjdHVyZXMvYWRkX2RldGFpbGxlLycraWRfZmFjdHVyZSxmb3JtRGF0YSlcclxuICAgICAgICAgICAgZ2V0RmFjdHVyZSgpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLWZhY3R1cmUgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPkZhY3R1cmUgQmllbiBBam91dGVyPC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLXBsdXNcIik7XHJcbiAgICAgICAgICAgIGdldE1vbnRhbnQoKTtcclxuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIubW9kYWwtZmFjdHVyZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLXBsdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLWZhY3R1cmUgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmRldGFpbGxlX2Nsb3R1cmUnLGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKHRoaXMpLmZpbmQoJ2knKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS13aW5kb3ctY2xvc2UnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgaWRfZGV0ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvZmFjdHVyZS9mYWN0dXJlcy9jbG90dXJlX2RldGFpbGxlLycraWRfZGV0KVxyXG4gICAgICAgICAgICBnZXRNb250YW50KClcclxuICAgICAgICAgICAgZ2V0RmFjdHVyZSgpO1xyXG4gICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS13aW5kb3ctY2xvc2VcIik7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtd2luZG93LWNsb3NlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNham91dGVyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZmFjdHVyZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFyZWdsZW1lbnQpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NldHRlIEZhY3R1cmUgTlxcJ2EgQXVjdW4gRGV0YWlsIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNham91dGVyX21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgJy5uZXdfZmFjdHVyZS1mb3JtJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm1kYXRhID0gJCh0aGlzKS5zZXJpYWxpemUoKVxyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIi5uZXdfZmFjdHVyZS1mb3JtIC5idG4gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL2ZhY3R1cmUvZmFjdHVyZXMvYWpvdXRlcl9yZWdsZW1lbnQvJytpZF9mYWN0dXJlLGZvcm1kYXRhKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI2Fqb3V0ZXJfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlJlZ2xlbWVudCBCaWVuIEFqb3V0ZXI8L2Rpdj5gXHJcbiAgICAgICAgICAgICk7IFxyXG4gICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgICAgZ2V0TW9udGFudCgpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgcmVnbGVtZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvZmFjdHVyZXMvZmFjdHVyZS8nK2lkX2ZhY3R1cmUrJy8nK2RhdGEsICdfYmxhbmsnKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNtb2RpZmllcicsYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX2ZhY3R1cmUpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNtb2RpZmllcl9vcmctbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI21vZGlmaWVyX29yZycsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI21vZGlmaWVyX29yZy1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIi5tb2RhbF9tb2RpZmllcl9vcmctZmFjdHVyZSAuYnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdvcmdhbmlzbWUnLCAkKCcjb3JnJykudmFsKCkpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9mYWN0dXJlL2ZhY3R1cmVzL21vZGlmaWVyX29yZ2FuaXNtZV9mYWN0dXJlLycraWRfZmFjdHVyZSxmb3JtRGF0YSlcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9vcmctbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7IFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICQoJyNvcmcnKS5zZWxlY3QyKClcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9vcmctbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAkKFwiI21vZGlmaWVyX29yZy1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcblxyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNpbXByaW1lcicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9mYWN0dXJlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvZmFjdHVyZS9mYWN0dXJlcy9wcmludGZhY3R1cmUvJytpZF9mYWN0dXJlLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG59KTsiLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXgsIGZpbHRlclJlamVjdCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBJU19GSUxURVJfUkVKRUNUID0gVFlQRSA9PSA3O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIHRoYXQpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShzZWxmKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiB8fCBJU19GSUxURVJfUkVKRUNUID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxuICAgICAgICAgIGNhc2UgNzogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJSZWplY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlclJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWZpbHRlcmluZ1xuICBmaWx0ZXJSZWplY3Q6IGNyZWF0ZU1ldGhvZCg3KVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY29uc3RydWN0b3InKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBBcnJheSA9IGdsb2JhbC5BcnJheTtcblxuLy8gYSBwYXJ0IG9mIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXkpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG4gICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAoaXNDb25zdHJ1Y3RvcihDKSAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbiIsInZhciBhcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChhcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbEFycmF5KSkobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT0gJ0FycmF5Jztcbn07XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9mYWN0dXJlIiwidGFibGVfZmFjdHVyZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJzZWxlY3QyIiwib24iLCJpZF9ldGFiIiwidmFsIiwiY29sdW1ucyIsInNlYXJjaCIsInJlc3BvbnNlIiwiZHJhdyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwiaWRfcmVnbGVtZW50IiwiaWRfb3JnYW5pc21lIiwicmVnbGVtZW50IiwiZ2V0TW9udGFudCIsInRoZW4iLCJzdWNjZXNzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImdldEZhY3R1cmUiLCJpY29uIiwiY3NzIiwiZ2V0T3JnYW5pc21lQnlGYWN0dXJlIiwibG9hZF9mcmFpc19wcmVpbnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsImZpcmUiLCJ0aXRsZSIsIm1vZGFsIiwidmFsdWUiLCJmcmFpcyIsImZpbmQiLCJvcmdhbmlzbWVfaWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibW9kYWxBbGVydCIsInJlbW92ZSIsInBvc3QiLCJwcmVwZW5kIiwicmVsb2FkIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJpZF9kZXQiLCJmb3JtZGF0YSIsInNlcmlhbGl6ZSIsInRyaWdnZXIiLCJ3aW5kb3ciLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==