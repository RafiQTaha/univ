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
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_facture')) {
        var dt = $('#datables_facture').DataTable(); //Abort previous ajax request if it is still in process.

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
        reglement = 12; // $("#montant").val(success.data['montant']);
        // $("#montant2").val(success.data['montant']);

        $("#montant_facture").val(success.data['montant_facture']);
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
        $('#detail_facture_modal #montantt').val('');
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
  extra_frais;
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
              $('select').val('');
              icon.removeClass('fa-spinner fa-spin').addClass("fa-plus");
              getMontant();
              table_facture.ajax.reload(null, false);
              _context7.next = 29;
              break;

            case 24:
              _context7.prev = 24;
              _context7.t0 = _context7["catch"](12);
              message = _context7.t0.response.data;
              $(".modal-facture .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.removeClass('fa-spinner fa-spin').addClass("fa-plus");

            case 29:
              setTimeout(function () {
                $(".modal-facture .modal-body .alert").remove();
              }, 4000);

            case 30:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[12, 24]]);
    }));

    return function (_x2) {
      return _ref7.apply(this, arguments);
    };
  }()); ////////////////////delete all

  $('body').on('click', '#delete_detaille', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var res, icon, request, message;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault(); // alert(id_facture)
              // let id_det = $(this).attr('id');

              res = confirm('Vous voulez vraiment desactiver tout les frais ?');

              if (!(res == 1)) {
                _context8.next = 19;
                break;
              }

              icon = $(this).find('i');
              icon.removeClass('fa-window-close').addClass("fa-spinner fa-spin");
              _context8.prev = 5;
              _context8.next = 8;
              return axios.post('/facture/factures/cloture_all_detaille/' + id_facture);

            case 8:
              request = _context8.sent;
              getMontant();
              getFacture();
              table_facture.ajax.reload(null, false);
              icon.removeClass('fa-spinner fa-spin').addClass("fa-window-close");
              _context8.next = 19;
              break;

            case 15:
              _context8.prev = 15;
              _context8.t0 = _context8["catch"](5);
              message = _context8.t0.response.data;
              icon.removeClass('fa-spinner fa-spin').addClass("fa-window-close");

            case 19:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this, [[5, 15]]);
    }));

    return function (_x3) {
      return _ref8.apply(this, arguments);
    };
  }()); ////////////////////delete all

  $('body').on('click', '.detaille_cloture', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var icon, id_det, request, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();
              icon = $(this).find('i');
              icon.removeClass('fa-window-close').addClass("fa-spinner fa-spin");
              id_det = $(this).attr('id');
              _context9.prev = 4;
              _context9.next = 7;
              return axios.post('/facture/factures/cloture_detaille/' + id_det);

            case 7:
              request = _context9.sent;
              getMontant();
              getFacture();
              table_facture.ajax.reload(null, false);
              icon.removeClass('fa-spinner fa-spin').addClass("fa-window-close");
              _context9.next = 18;
              break;

            case 14:
              _context9.prev = 14;
              _context9.t0 = _context9["catch"](4);
              message = _context9.t0.response.data;
              icon.removeClass('fa-spinner fa-spin').addClass("fa-window-close");

            case 18:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this, [[4, 14]]);
    }));

    return function (_x4) {
      return _ref9.apply(this, arguments);
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
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault();
              formdata = $(this).serialize();
              modalAlert = $("#ajouter_modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".new_facture-form .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              $('.new_facture-form #save_reglement').addClass('disabled').attr('disabled', true); // $("#enregistrer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false)

              _context10.prev = 7;
              _context10.next = 10;
              return axios.post('/facture/factures/ajouter_reglement/' + id_facture, formdata);

            case 10:
              request = _context10.sent;
              data = request.data;
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-success\">Reglement Bien Ajouter</div>");
              $(this).trigger("reset");
              $('.new_facture-form select').val('').trigger("change");
              getMontant();
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              $('.new_facture-form #save_reglement').removeClass('disabled').attr('disabled', false);
              reglement = false;
              table_facture.ajax.reload(null, false);
              window.open('/facture/factures/facture/' + id_facture + '/' + data, '_blank');
              _context10.next = 31;
              break;

            case 23:
              _context10.prev = 23;
              _context10.t0 = _context10["catch"](7);
              message = _context10.t0.response.data;
              console.log(_context10.t0, _context10.t0.response);
              modalAlert.remove();
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('.new_facture-form #save_reglement').removeClass('disabled').attr('disabled', false);

            case 31:
              setTimeout(function () {
                $("#ajouter_modal .modal-body .alert").remove();
              }, 4000);

            case 32:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this, [[7, 23]]);
    }));

    return function (_x5) {
      return _ref10.apply(this, arguments);
    };
  }()); // $('body').on('click','#modifier',async function (e) {
  //     e.preventDefault();
  //     // if(!id_facture){
  //     //     Toast.fire({
  //     //     icon: 'error',
  //     //     title: 'Veuillez selection une ligne!',
  //     //     })
  //     //     return;
  //     // }
  //     // $("#modifier_org-modal").modal('show');
  // });
  // $('body').on('click','#modifier_org', async function(e){
  //     e.preventDefault();
  //     let modalAlert =  $("#modifier_org-modal .modal-body .alert");
  //     modalAlert.remove();
  //     const icon = $(".modal_modifier_org-facture .btn i");
  //     icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
  //     let formData = new FormData();
  //     formData.append('organisme', $('#org').val());
  //     try{
  //         const request = await axios.post('/facture/factures/modifier_organisme_facture/'+id_facture,formData)
  //         const data = request.data;
  //         $("#modifier_org-modal .modal-body").prepend(
  //             `<div class="alert alert-success">${data}</div>`
  //         ); 
  //         icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
  //         table_facture.ajax.reload(null, false);
  //         $('#org').select2()
  //     }catch(error){
  //         const message = error.response.data;
  //         modalAlert.remove();
  //         $("#modifier_org-modal .modal-body").prepend(
  //             `<div class="alert alert-danger">${message}</div>`
  //         );
  //         icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
  //     }
  //     setTimeout(() => {
  //        $("#modifier_org-modal .modal-body .alert").remove();
  //     }, 4000);
  // })

  $("body").on("click", '#imprimer', /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault();

              if (id_facture) {
                _context11.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context11.abrupt("return");

            case 4:
              window.open('/facture/factures/printfacture/' + id_facture, '_blank');

            case 5:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x6) {
      return _ref11.apply(this, arguments);
    };
  }());
  $("body").on("click", '#releve', /*#__PURE__*/function () {
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
              window.open('/facture/factures/releve/' + id_facture, '_blank');

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
  $('body').on('click', '#extraction', function () {
    window.open('/facture/factures/extraction_factures', '_blank');
  });
  $('body').on('click', '#extra_frais', function (e) {
    e.preventDefault();
    $("#annee_extraction_frais").modal('show');
  });
  $('body').on('click', '#export_frais', function (e) {
    e.preventDefault();
    var annee = $('#annee').val(); // alert(annee);

    window.open('/facture/factures/extraction_factures_by_annee/' + annee, '_blank');
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE0QjtBQUMvQyxvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcENELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9mYWN0dXJlL2ZhY3R1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgbGV0IGlkX2ZhY3R1cmUgPSBmYWxzZTtcclxuICAgIHZhciB0YWJsZV9mYWN0dXJlID0gJChcIiNkYXRhYmxlc19mYWN0dXJlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2ZhY3R1cmUvZmFjdHVyZXMvbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9mYWN0dXJlKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlRHJhd0NhbGxiYWNrOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJyNkYXRhYmxlc19mYWN0dXJlJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9ICQoJyNkYXRhYmxlc19mYWN0dXJlJykuRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGR0LnNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcbiAgICBcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDEpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiI3JlZ2xlbWVudFwiKSAmJiAkKFwiI3JlZ2xlbWVudFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcmVnbGVtZW50XCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkKFwiI29yZ2FuaXNtZVwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgICAgICAgICAgaWYgKCQoXCIjcmVnbGVtZW50XCIpICYmICQoXCIjcmVnbGVtZW50XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygyKS5zZWFyY2goJChcIiNyZWdsZW1lbnRcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygzKS5zZWFyY2goJChcIiNvcmdhbmlzbWVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYgKCQoXCIjcmVnbGVtZW50XCIpICYmICQoXCIjcmVnbGVtZW50XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3JlZ2xlbWVudFwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI29yZ2FuaXNtZVwiKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygwKS5zZWFyY2goJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjcmVnbGVtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9yZWdsZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygyKS5zZWFyY2goaWRfcmVnbGVtZW50KS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNvcmdhbmlzbWVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX29yZ2FuaXNtZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDMpLnNlYXJjaChpZF9vcmdhbmlzbWUpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICBsZXQgcmVnbGVtZW50ID0gZmFsc2U7XHJcbiAgICBjb25zdCBnZXRNb250YW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2ZhY3R1cmUvZmFjdHVyZXMvZ2V0TW9udGFudC8nK2lkX2ZhY3R1cmUpXHJcbiAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgIHJlZ2xlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzcy5kYXRhICE9ICd2aWRlJykge1xyXG4gICAgICAgICAgICAgICAgcmVnbGVtZW50ID0gMTI7XHJcbiAgICAgICAgICAgICAgICAvLyAkKFwiI21vbnRhbnRcIikudmFsKHN1Y2Nlc3MuZGF0YVsnbW9udGFudCddKTtcclxuICAgICAgICAgICAgICAgIC8vICQoXCIjbW9udGFudDJcIikudmFsKHN1Y2Nlc3MuZGF0YVsnbW9udGFudCddKTtcclxuICAgICAgICAgICAgICAgICQoXCIjbW9udGFudF9mYWN0dXJlXCIpLnZhbChzdWNjZXNzLmRhdGFbJ21vbnRhbnRfZmFjdHVyZSddKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYWpvdXRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tcHJpbWFyeScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGdldEZhY3R1cmUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZmFjdHVyZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvZmFjdHVyZS9mYWN0dXJlcy9kZXRhaWxsZV9mYWN0dXJlLycraWRfZmFjdHVyZSlcclxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgaWYoc3VjY2Vzcy5kYXRhWzBdID09IDApe1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI2FkZF9kZXRhaWxsZScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5tb2RhbC1mYWN0dXJlICNhZGQnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjZGV0YWlsbGVfYWN0aXZlJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJy5tb2RhbC1mYWN0dXJlICNhZGRfZGV0YWlsbGUnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI2FkZCcpLmNzcygnZGlzcGxheScsJ2ZsZXgnKTtcclxuICAgICAgICAgICAgICAgICQoJy5tb2RhbC1mYWN0dXJlICNkZXRhaWxsZV9hY3RpdmUnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJy50YWJsZV9kZXRhaWxsZV9mYWN0dXJlIHRib2R5JykuaHRtbChzdWNjZXNzLmRhdGFbMV0pXHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtbW9uZXktYmlsbC1hbHRcIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Y2Nlc3MuZGF0YVswXSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRPcmdhbmlzbWVCeUZhY3R1cmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYoaWRfZmFjdHVyZSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvb3JnYW5pc21lLycraWRfZmFjdHVyZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgICQoJyNvcmcnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgbG9hZF9mcmFpc19wcmVpbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoaWRfZmFjdHVyZSl7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2ZhY3R1cmUvZmFjdHVyZXMvYXJ0aWNsZV9mcmFpcy8nK2lkX2ZhY3R1cmUpXHJcbiAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnI2RldGFpbF9mYWN0dXJlX21vZGFsICNmcmFpcycpLmh0bWwoc3VjY2Vzcy5kYXRhKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjZGV0YWlsX2ZhY3R1cmVfbW9kYWwgI21vbnRhbnR0JykudmFsKCcnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX2ZhY3R1cmUgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2ZhY3R1cmUgPSBudWxsO1xyXG4gICAgICAgICAgICByZWdsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAkKFwiI2Fqb3V0ZXJcIikucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5JykuYWRkQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RhdGFibGVzX2ZhY3R1cmUgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9mYWN0dXJlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZF9mYWN0dXJlKTtcclxuICAgICAgICAgICAgZ2V0T3JnYW5pc21lQnlGYWN0dXJlKClcclxuICAgICAgICAgICAgZ2V0TW9udGFudCgpO1xyXG4gICAgICAgICAgICBnZXRGYWN0dXJlKCk7XHJcbiAgICAgICAgICAgIGxvYWRfZnJhaXNfcHJlaW5zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNmYWN0dXJlJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZmFjdHVyZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2RldGFpbF9mYWN0dXJlX21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgIGV4dHJhX2ZyYWlzXHJcbiAgICAkKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPW9yZ2FuXScpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9nZXRvcmdhbmlzbWVwYXNQYXlhbnQnKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuaHRtbChcIlwiKTtcclxuICAgICAgICAgICAgJCgnLnNlbGVjdC1vcmdhbicpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCcubW9kYWwtZmFjdHVyZSAjZnJhaXMnLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmcmFpcyA9ICQodGhpcykuZmluZCgnOnNlbGVjdGVkJykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgIGlmKGZyYWlzICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjbW9udGFudHQnKS52YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI21vbnRhbnR0JykudmFsKGZyYWlzKTtcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNhZGRfZGV0YWlsbGUnLGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKHRoaXMpLmZpbmQoJ2knKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1wbHVzJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgbGV0IG9yZ2FuaXNtZV9pZCAgPSAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS52YWwoKTtcclxuICAgICAgICBpZiAoJChcImlucHV0W25hbWU9J29yZ2FuJ106Y2hlY2tlZFwiKS52YWwoKSA9PSAxKSB7XHJcbiAgICAgICAgICAgIG9yZ2FuaXNtZV9pZCA9IDdcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmcmFpcycsICQoJyNmcmFpcycpLnZhbCgpKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21vbnRhbnQnLCAkKCcjbW9udGFudHQnKS52YWwoKSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpY2UnLCAkKCcjaWNlJykudmFsKCkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnb3JnYW5pc21lX2lkJywgb3JnYW5pc21lX2lkKTtcclxuXHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIi5tb2RhbC1mYWN0dXJlIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9mYWN0dXJlL2ZhY3R1cmVzL2FkZF9kZXRhaWxsZS8nK2lkX2ZhY3R1cmUsZm9ybURhdGEpXHJcbiAgICAgICAgICAgIGdldEZhY3R1cmUoKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1mYWN0dXJlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5GYWN0dXJlIEJpZW4gQWpvdXRlcjwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgJCgnc2VsZWN0JykudmFsKCcnKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1wbHVzXCIpO1xyXG4gICAgICAgICAgICBnZXRNb250YW50KCk7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLWZhY3R1cmUgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1wbHVzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1mYWN0dXJlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH0pO1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy9kZWxldGUgYWxsXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkZWxldGVfZGV0YWlsbGUnLGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoaWRfZmFjdHVyZSlcclxuICAgICAgICAgICAgLy8gbGV0IGlkX2RldCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBkZXNhY3RpdmVyIHRvdXQgbGVzIGZyYWlzID8nKTtcclxuICAgICAgICAgICAgaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQodGhpcykuZmluZCgnaScpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtd2luZG93LWNsb3NlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvZmFjdHVyZS9mYWN0dXJlcy9jbG90dXJlX2FsbF9kZXRhaWxsZS8nK2lkX2ZhY3R1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0TW9udGFudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmFjdHVyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtd2luZG93LWNsb3NlXCIpO1xyXG4gICAgICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLXdpbmRvdy1jbG9zZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy9kZWxldGUgYWxsXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmRldGFpbGxlX2Nsb3R1cmUnLGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKHRoaXMpLmZpbmQoJ2knKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS13aW5kb3ctY2xvc2UnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgaWRfZGV0ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvZmFjdHVyZS9mYWN0dXJlcy9jbG90dXJlX2RldGFpbGxlLycraWRfZGV0KVxyXG4gICAgICAgICAgICBnZXRNb250YW50KClcclxuICAgICAgICAgICAgZ2V0RmFjdHVyZSgpO1xyXG4gICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS13aW5kb3ctY2xvc2VcIik7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtd2luZG93LWNsb3NlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNham91dGVyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZmFjdHVyZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFyZWdsZW1lbnQpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NldHRlIEZhY3R1cmUgTlxcJ2EgQXVjdW4gRGV0YWlsIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNham91dGVyX21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgJy5uZXdfZmFjdHVyZS1mb3JtJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm1kYXRhID0gJCh0aGlzKS5zZXJpYWxpemUoKVxyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIi5uZXdfZmFjdHVyZS1mb3JtIC5idG4gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAkKCcubmV3X2ZhY3R1cmUtZm9ybSAjc2F2ZV9yZWdsZW1lbnQnKS5hZGRDbGFzcygnZGlzYWJsZWQnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgLy8gJChcIiNlbnJlZ2lzdHJlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4taW5mbycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9mYWN0dXJlL2ZhY3R1cmVzL2Fqb3V0ZXJfcmVnbGVtZW50LycraWRfZmFjdHVyZSxmb3JtZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5SZWdsZW1lbnQgQmllbiBBam91dGVyPC9kaXY+YFxyXG4gICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgICAgICAgICQoJy5uZXdfZmFjdHVyZS1mb3JtIHNlbGVjdCcpLnZhbCgnJykudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgZ2V0TW9udGFudCgpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgJCgnLm5ld19mYWN0dXJlLWZvcm0gI3NhdmVfcmVnbGVtZW50JykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAgICAgcmVnbGVtZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvZmFjdHVyZXMvZmFjdHVyZS8nK2lkX2ZhY3R1cmUrJy8nK2RhdGEsICdfYmxhbmsnKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJCgnLm5ld19mYWN0dXJlLWZvcm0gI3NhdmVfcmVnbGVtZW50JykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH0pO1xyXG4gICAgLy8gJCgnYm9keScpLm9uKCdjbGljaycsJyNtb2RpZmllcicsYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgLy8gaWYoIWlkX2ZhY3R1cmUpe1xyXG4gICAgLy8gICAgIC8vICAgICBUb2FzdC5maXJlKHtcclxuICAgIC8vICAgICAvLyAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgIC8vICAgICAvLyAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAvLyAgICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgLy8gICAgIHJldHVybjtcclxuICAgIC8vICAgICAvLyB9XHJcbiAgICAvLyAgICAgLy8gJChcIiNtb2RpZmllcl9vcmctbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIC8vIH0pO1xyXG4gICAgXHJcbiAgICAvLyAkKCdib2R5Jykub24oJ2NsaWNrJywnI21vZGlmaWVyX29yZycsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI21vZGlmaWVyX29yZy1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAvLyAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIC8vICAgICBjb25zdCBpY29uID0gJChcIi5tb2RhbF9tb2RpZmllcl9vcmctZmFjdHVyZSAuYnRuIGlcIik7XHJcbiAgICAvLyAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAvLyAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAvLyAgICAgZm9ybURhdGEuYXBwZW5kKCdvcmdhbmlzbWUnLCAkKCcjb3JnJykudmFsKCkpO1xyXG4gICAgLy8gICAgIHRyeXtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9mYWN0dXJlL2ZhY3R1cmVzL21vZGlmaWVyX29yZ2FuaXNtZV9mYWN0dXJlLycraWRfZmFjdHVyZSxmb3JtRGF0YSlcclxuICAgIC8vICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgIC8vICAgICAgICAgJChcIiNtb2RpZmllcl9vcmctbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgIC8vICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXHJcbiAgICAvLyAgICAgICAgICk7IFxyXG4gICAgLy8gICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIC8vICAgICAgICAgdGFibGVfZmFjdHVyZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgICQoJyNvcmcnKS5zZWxlY3QyKClcclxuICAgIC8vICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgLy8gICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgIC8vICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIC8vICAgICAgICAgJChcIiNtb2RpZmllcl9vcmctbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgIC8vICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgIC8vICAgICAgICAgKTtcclxuICAgIC8vICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICAgICAkKFwiI21vZGlmaWVyX29yZy1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAvLyAgICAgfSwgNDAwMCk7XHJcblxyXG4gICAgLy8gfSlcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNpbXByaW1lcicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9mYWN0dXJlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvZmFjdHVyZS9mYWN0dXJlcy9wcmludGZhY3R1cmUvJytpZF9mYWN0dXJlLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNyZWxldmUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZmFjdHVyZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvZmFjdHVyZXMvcmVsZXZlLycraWRfZmFjdHVyZSwgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL2ZhY3R1cmVzL2V4dHJhY3Rpb25fZmFjdHVyZXMnLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhX2ZyYWlzJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiI2FubmVlX2V4dHJhY3Rpb25fZnJhaXNcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNleHBvcnRfZnJhaXMnLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBhbm5lZSA9ICQoJyNhbm5lZScpLnZhbCgpO1xyXG4gICAgICAgIC8vIGFsZXJ0KGFubmVlKTtcclxuICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvZmFjdHVyZXMvZXh0cmFjdGlvbl9mYWN0dXJlc19ieV9hbm5lZS8nK2FubmVlLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxufSk7IiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG52YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJ2YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4LCBmaWx0ZXJSZWplY3QgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgSVNfRklMVEVSX1JFSkVDVCA9IFRZUEUgPT0gNztcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0KTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2Uoc2VsZik7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY3JlYXRlID0gc3BlY2lmaWNDcmVhdGUgfHwgYXJyYXlTcGVjaWVzQ3JlYXRlO1xuICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgfHwgSVNfRklMVEVSX1JFSkVDVCA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbHVlLCByZXN1bHQ7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWx1ZSA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzdWx0ID0gYm91bmRGdW5jdGlvbih2YWx1ZSwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgdGFyZ2V0W2luZGV4XSA9IHJlc3VsdDsgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdCkgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWx1ZTsgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHB1c2godGFyZ2V0LCB2YWx1ZSk7ICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDQ6IHJldHVybiBmYWxzZTsgICAgICAgICAgICAgLy8gZXZlcnlcbiAgICAgICAgICBjYXNlIDc6IHB1c2godGFyZ2V0LCB2YWx1ZSk7ICAgICAgLy8gZmlsdGVyUmVqZWN0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gIGZvckVhY2g6IGNyZWF0ZU1ldGhvZCgwKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbiAgbWFwOiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4gIHNvbWU6IGNyZWF0ZU1ldGhvZCgzKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XG4gIGV2ZXJ5OiBjcmVhdGVNZXRob2QoNCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuICBmaW5kSW5kZXg6IGNyZWF0ZU1ldGhvZCg2KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJSZWplY3RgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maWx0ZXJpbmdcbiAgZmlsdGVyUmVqZWN0OiBjcmVhdGVNZXRob2QoNylcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgQXJyYXkgPSBnbG9iYWwuQXJyYXk7XG5cbi8vIGEgcGFydCBvZiBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5KSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuICAgIEMgPSBvcmlnaW5hbEFycmF5LmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKGlzQ29uc3RydWN0b3IoQykgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG4iLCJ2YXIgYXJyYXlTcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG4vLyBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoYXJyYXlTcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWxBcnJheSkpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09ICdBcnJheSc7XG59O1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfZmFjdHVyZSIsInRhYmxlX2ZhY3R1cmUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJhZGRDbGFzcyIsInByZURyYXdDYWxsYmFjayIsInNldHRpbmdzIiwiZm4iLCJpc0RhdGFUYWJsZSIsImR0IiwianFYSFIiLCJhYm9ydCIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3JlZ2xlbWVudCIsImlkX29yZ2FuaXNtZSIsInJlZ2xlbWVudCIsImdldE1vbnRhbnQiLCJ0aGVuIiwic3VjY2VzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJnZXRGYWN0dXJlIiwiaWNvbiIsImNzcyIsImdldE9yZ2FuaXNtZUJ5RmFjdHVyZSIsImxvYWRfZnJhaXNfcHJlaW5zIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJmaXJlIiwidGl0bGUiLCJtb2RhbCIsImV4dHJhX2ZyYWlzIiwidmFsdWUiLCJmcmFpcyIsImZpbmQiLCJvcmdhbmlzbWVfaWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibW9kYWxBbGVydCIsInJlbW92ZSIsInBvc3QiLCJwcmVwZW5kIiwicmVsb2FkIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJyZXMiLCJjb25maXJtIiwiaWRfZGV0IiwiZm9ybWRhdGEiLCJzZXJpYWxpemUiLCJ0cmlnZ2VyIiwid2luZG93Iiwib3BlbiIsImFubmVlIl0sInNvdXJjZVJvb3QiOiIifQ==