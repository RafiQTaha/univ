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
  }; // const getOrganismeByFacture = async () => {
  //     if(id_facture){
  //         const request = await axios.get('/api/organisme/'+id_facture);
  //         response = request.data
  //         $('#org').html(response).select2();
  //     }    
  // }


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
      console.log(id_facture); // getOrganismeByFacture()

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
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var request;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();

              if (!(this.value == 0)) {
                _context5.next = 10;
                break;
              }

              _context5.next = 4;
              return axios.get('/api/getorganismepasPayant');

            case 4:
              request = _context5.sent;
              response = request.data;
              $('.select-organ #org').html(response).select2();
              $('.select-organ').css('display', 'block');
              _context5.next = 12;
              break;

            case 10:
              $('.select-organ #org').html("");
              $('.select-organ').css('display', 'none');

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
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
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var icon, organisme_id, formData, modalAlert, request, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
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
              _context6.prev = 12;
              _context6.next = 15;
              return axios.post('/facture/factures/add_detaille/' + id_facture, formData);

            case 15:
              request = _context6.sent;
              getFacture();
              $(".modal-facture .modal-body").prepend("<div class=\"alert alert-success\">Facture Bien Ajouter</div>");
              $('select').val('');
              icon.removeClass('fa-spinner fa-spin').addClass("fa-plus");
              getMontant();
              table_facture.ajax.reload(null, false);
              _context6.next = 29;
              break;

            case 24:
              _context6.prev = 24;
              _context6.t0 = _context6["catch"](12);
              message = _context6.t0.response.data;
              $(".modal-facture .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.removeClass('fa-spinner fa-spin').addClass("fa-plus");

            case 29:
              setTimeout(function () {
                $(".modal-facture .modal-body .alert").remove();
              }, 4000);

            case 30:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[12, 24]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }()); ////////////////////delete all

  $('body').on('click', '#delete_detaille', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var res, icon, request, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault(); // alert(id_facture)
              // let id_det = $(this).attr('id');

              res = confirm('Vous voulez vraiment desactiver tout les frais ?');

              if (!(res == 1)) {
                _context7.next = 20;
                break;
              }

              icon = $(this).find('i');
              icon.removeClass('fa-window-close').addClass("fa-spinner fa-spin");
              _context7.prev = 5;
              _context7.next = 8;
              return axios.post('/facture/factures/cloture_all_detaille/' + id_facture);

            case 8:
              request = _context7.sent;
              getMontant();
              getFacture();
              table_facture.ajax.reload(null, false);
              icon.removeClass('fa-spinner fa-spin').addClass("fa-window-close");
              _context7.next = 20;
              break;

            case 15:
              _context7.prev = 15;
              _context7.t0 = _context7["catch"](5);
              message = _context7.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.removeClass('fa-spinner fa-spin').addClass("fa-window-close");

            case 20:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[5, 15]]);
    }));

    return function (_x3) {
      return _ref7.apply(this, arguments);
    };
  }()); ////////////////////delete all

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

    return function (_x4) {
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
              $('.new_facture-form #save_reglement').addClass('disabled').attr('disabled', true); // $("#enregistrer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false)

              _context9.prev = 7;
              _context9.next = 10;
              return axios.post('/facture/factures/ajouter_reglement/' + id_facture, formdata);

            case 10:
              request = _context9.sent;
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
              _context9.next = 31;
              break;

            case 23:
              _context9.prev = 23;
              _context9.t0 = _context9["catch"](7);
              message = _context9.t0.response.data;
              console.log(_context9.t0, _context9.t0.response);
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
              return _context9.stop();
          }
        }
      }, _callee9, this, [[7, 23]]);
    }));

    return function (_x5) {
      return _ref9.apply(this, arguments);
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
              window.open('/facture/factures/printfacture/' + id_facture, '_blank');

            case 5:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x6) {
      return _ref10.apply(this, arguments);
    };
  }());
  $("body").on("click", '#releve', /*#__PURE__*/function () {
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
              window.open('/facture/factures/releve/' + id_facture, '_blank');

            case 5:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x7) {
      return _ref11.apply(this, arguments);
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
  $("#cloturer").on('click', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var icon, formData, res, request, _response, message;

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
              icon = $("#cloturer i");
              icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append("facture", id_facture);
              res = confirm('Vous voulez vraiment cloturer cette facture ?');

              if (!(res == 1)) {
                _context12.next = 28;
                break;
              }

              _context12.prev = 10;
              _context12.next = 13;
              return axios.post('/facture/factures/cloture', formData);

            case 13:
              request = _context12.sent;
              _response = request.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: _response
              });
              getFacture();
              id_facture = false;
              table_facture.ajax.reload(null, false);
              _context12.next = 28;
              break;

            case 22:
              _context12.prev = 22;
              _context12.t0 = _context12["catch"](10);
              console.log(_context12.t0);
              message = _context12.t0.response.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 28:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[10, 22]]);
    }));

    return function (_x8) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdHVyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVc7QUFDckJDLElBQUFBLEtBQUssRUFBRSxJQURjO0FBRXJCQyxJQUFBQSxRQUFRLEVBQUUsU0FGVztBQUdyQkMsSUFBQUEsaUJBQWlCLEVBQUUsS0FIRTtBQUlyQkMsSUFBQUEsS0FBSyxFQUFFLElBSmM7QUFLckJDLElBQUFBLGdCQUFnQixFQUFFLElBTEc7QUFNckJDLElBQUFBLE9BQU8sRUFBRSxpQkFBQ0wsS0FBRCxFQUFXO0FBQ2hCQSxNQUFBQSxLQUFLLENBQUNNLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDUixJQUFJLENBQUNTLFNBQTFDO0FBQ0FQLE1BQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1UsV0FBMUM7QUFDSDtBQVRvQixHQUFYLENBQWQ7QUFXQSxNQUFJQyxVQUFVLEdBQUcsS0FBakI7QUFDQSxNQUFJQyxhQUFhLEdBQUdoQixDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QmlCLFNBQXZCLENBQWlDO0FBQ2pEQyxJQUFBQSxVQUFVLEVBQUUsQ0FDUixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsY0FBdEIsQ0FEUSxFQUVSLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixLQUF0QixDQUZRLENBRHFDO0FBS2pEQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxNQUFKLENBQUQsQ0FMMEM7QUFNakRDLElBQUFBLElBQUksRUFBRSx3QkFOMkM7QUFPakRDLElBQUFBLFVBQVUsRUFBRSxJQVBxQztBQVFqREMsSUFBQUEsVUFBVSxFQUFFLElBUnFDO0FBU2pEQyxJQUFBQSxXQUFXLEVBQUUsSUFUb0M7QUFVakRDLElBQUFBLE9BQU8sRUFBRSxJQVZ3QztBQVdqREMsSUFBQUEsWUFBWSxFQUFFLHdCQUFZO0FBQ2xCekIsTUFBQUEsQ0FBQyxDQUFDLGFBQWFlLFVBQWQsQ0FBRCxDQUEyQlcsUUFBM0IsQ0FBb0Msa0JBQXBDO0FBQ1AsS0FiZ0Q7QUFjakRDLElBQUFBLGVBQWUsRUFBRSx5QkFBU0MsUUFBVCxFQUFtQjtBQUNoQyxVQUFJNUIsQ0FBQyxDQUFDNkIsRUFBRixDQUFLWixTQUFMLENBQWVhLFdBQWYsQ0FBMkIsbUJBQTNCLENBQUosRUFBcUQ7QUFDakQsWUFBSUMsRUFBRSxHQUFHL0IsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJpQixTQUF2QixFQUFULENBRGlELENBR2pEOztBQUNBLFlBQUlXLFFBQVEsR0FBR0csRUFBRSxDQUFDSCxRQUFILEVBQWY7O0FBQ0EsWUFBSUEsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZSSxLQUFoQixFQUF1QjtBQUNuQkosVUFBQUEsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZSSxLQUFaLENBQWtCQyxLQUFsQjtBQUNIO0FBQ0o7QUFDSixLQXhCZ0Q7QUF5QmpEQyxJQUFBQSxRQUFRLEVBQUU7QUFDVkMsTUFBQUEsR0FBRyxFQUFFO0FBREs7QUF6QnVDLEdBQWpDLENBQXBCO0FBNkJBbkMsRUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZb0MsT0FBWjtBQUVBcEMsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JxQyxFQUFwQixDQUF1QixRQUF2Qix1RUFBaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCQyxZQUFBQSxPQUR1QixHQUNidEMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUMsR0FBUixFQURhO0FBRTdCdkIsWUFBQUEsYUFBYSxDQUFDd0IsT0FBZCxDQUFzQixDQUF0QixFQUF5QkMsTUFBekIsQ0FBZ0MsRUFBaEM7QUFDSUMsWUFBQUEsUUFIeUIsR0FHZCxFQUhjOztBQUFBLGtCQUkxQkosT0FBTyxJQUFJLEVBSmU7QUFBQTtBQUFBO0FBQUE7O0FBS3pCLGdCQUFJdEMsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxJQUFtQkEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnVDLEdBQWhCLE1BQXlCLEVBQWhELEVBQW9EO0FBQ2hEdkIsY0FBQUEsYUFBYSxDQUFDd0IsT0FBZCxDQUFzQixDQUF0QixFQUF5QkMsTUFBekIsQ0FBZ0N6QyxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCdUMsR0FBaEIsRUFBaEM7QUFDSDs7QUFDRCxnQkFBSXZDLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J1QyxHQUFoQixNQUF5QixFQUE3QixFQUFpQztBQUM3QnZCLGNBQUFBLGFBQWEsQ0FBQ3dCLE9BQWQsQ0FBc0IsQ0FBdEIsRUFBeUJDLE1BQXpCLENBQWdDekMsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnVDLEdBQWhCLEVBQWhDO0FBQ0g7O0FBQ0R2QixZQUFBQSxhQUFhLENBQUN3QixPQUFkLENBQXNCLENBQXRCLEVBQXlCQyxNQUF6QixDQUFnQ0gsT0FBaEMsRUFBeUNLLElBQXpDO0FBWHlCO0FBQUEsbUJBWUhDLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFrQlAsT0FBNUIsQ0FaRzs7QUFBQTtBQVluQlEsWUFBQUEsT0FabUI7QUFhekJKLFlBQUFBLFFBQVEsR0FBR0ksT0FBTyxDQUFDQyxJQUFuQjtBQWJ5QjtBQUFBOztBQUFBO0FBZXpCL0IsWUFBQUEsYUFBYSxDQUFDd0IsT0FBZCxDQUFzQixDQUF0QixFQUF5QkMsTUFBekIsQ0FBZ0NILE9BQWhDLEVBQXlDSyxJQUF6Qzs7QUFDQSxnQkFBSTNDLENBQUMsQ0FBQyxZQUFELENBQUQsSUFBbUJBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J1QyxHQUFoQixNQUF5QixFQUFoRCxFQUFvRDtBQUNoRHZCLGNBQUFBLGFBQWEsQ0FBQ3dCLE9BQWQsQ0FBc0IsQ0FBdEIsRUFBeUJDLE1BQXpCLENBQWdDekMsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnVDLEdBQWhCLEVBQWhDO0FBQ0g7O0FBQ0QsZ0JBQUl2QyxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCdUMsR0FBaEIsTUFBeUIsRUFBN0IsRUFBaUM7QUFDN0J2QixjQUFBQSxhQUFhLENBQUN3QixPQUFkLENBQXNCLENBQXRCLEVBQXlCQyxNQUF6QixDQUFnQ3pDLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J1QyxHQUFoQixFQUFoQztBQUNIOztBQXJCd0I7QUF1QjdCdkMsWUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmdELElBQWhCLENBQXFCTixRQUFyQixFQUErQk4sT0FBL0I7O0FBdkI2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFqQztBQXlCQXBDLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JxQyxFQUFoQixDQUFtQixRQUFuQix1RUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CWSxZQUFBQSxZQURtQixHQUNKakQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUMsR0FBUixFQURJO0FBRXpCdkIsWUFBQUEsYUFBYSxDQUFDd0IsT0FBZCxHQUF3QkMsTUFBeEIsQ0FBK0IsRUFBL0I7O0FBQ0EsZ0JBQUl6QyxDQUFDLENBQUMsWUFBRCxDQUFELElBQW1CQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCdUMsR0FBaEIsTUFBeUIsRUFBaEQsRUFBb0Q7QUFDaER2QixjQUFBQSxhQUFhLENBQUN3QixPQUFkLENBQXNCLENBQXRCLEVBQXlCQyxNQUF6QixDQUFnQ3pDLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J1QyxHQUFoQixFQUFoQztBQUNIOztBQUNELGdCQUFJdkMsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnVDLEdBQWhCLE1BQXlCLEVBQTdCLEVBQWlDO0FBQzdCdkIsY0FBQUEsYUFBYSxDQUFDd0IsT0FBZCxDQUFzQixDQUF0QixFQUF5QkMsTUFBekIsQ0FBZ0N6QyxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCdUMsR0FBaEIsRUFBaEM7QUFDSDs7QUFDR0csWUFBQUEsUUFUcUIsR0FTVixFQVRVOztBQUFBLGtCQVV0Qk8sWUFBWSxJQUFJLEVBVk07QUFBQTtBQUFBO0FBQUE7O0FBV3JCakMsWUFBQUEsYUFBYSxDQUFDd0IsT0FBZCxDQUFzQixDQUF0QixFQUF5QkMsTUFBekIsQ0FBZ0NRLFlBQWhDLEVBQThDTixJQUE5QztBQVhxQjtBQUFBLG1CQVlDQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxvQkFBa0JJLFlBQTVCLENBWkQ7O0FBQUE7QUFZZkgsWUFBQUEsT0FaZTtBQWFyQkosWUFBQUEsUUFBUSxHQUFHSSxPQUFPLENBQUNDLElBQW5CO0FBYnFCO0FBQUE7O0FBQUE7QUFlckIvQixZQUFBQSxhQUFhLENBQUN3QixPQUFkLENBQXNCLENBQXRCLEVBQXlCQyxNQUF6QixDQUFnQ3pDLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CdUMsR0FBcEIsRUFBaEMsRUFBMkRJLElBQTNEOztBQWZxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3QjtBQWtCQTNDLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JxQyxFQUFoQixDQUFtQixRQUFuQix1RUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CYSxZQUFBQSxZQURtQixHQUNKbEQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUMsR0FBUixFQURJO0FBRXpCdkIsWUFBQUEsYUFBYSxDQUFDd0IsT0FBZCxDQUFzQixDQUF0QixFQUF5QkMsTUFBekIsQ0FBZ0NTLFlBQWhDLEVBQThDUCxJQUE5Qzs7QUFGeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBN0I7QUFJQTNDLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JxQyxFQUFoQixDQUFtQixRQUFuQix1RUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CYyxZQUFBQSxZQURtQixHQUNKbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUMsR0FBUixFQURJO0FBRXpCdkIsWUFBQUEsYUFBYSxDQUFDd0IsT0FBZCxDQUFzQixDQUF0QixFQUF5QkMsTUFBekIsQ0FBZ0NVLFlBQWhDLEVBQThDUixJQUE5Qzs7QUFGeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBN0I7QUFJQSxNQUFJUyxTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQlQsSUFBQUEsS0FBSyxDQUFDQyxHQUFOLENBQVUsa0NBQWdDOUIsVUFBMUMsRUFDQ3VDLElBREQsQ0FDTSxVQUFBQyxPQUFPLEVBQUk7QUFDYkgsTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDQXBELE1BQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3dELFdBQWQsQ0FBMEIsYUFBMUIsRUFBeUM5QixRQUF6QyxDQUFrRCxlQUFsRCxFQUFtRStCLElBQW5FLENBQXdFLFVBQXhFLEVBQW9GLEtBQXBGOztBQUNBLFVBQUlGLE9BQU8sQ0FBQ1IsSUFBUixJQUFnQixNQUFwQixFQUE0QjtBQUN4QkssUUFBQUEsU0FBUyxHQUFHLEVBQVosQ0FEd0IsQ0FFeEI7QUFDQTs7QUFDQXBELFFBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCdUMsR0FBdEIsQ0FBMEJnQixPQUFPLENBQUNSLElBQVIsQ0FBYSxpQkFBYixDQUExQjtBQUNBL0MsUUFBQUEsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjd0QsV0FBZCxDQUEwQixlQUExQixFQUEyQzlCLFFBQTNDLENBQW9ELGFBQXBELEVBQW1FK0IsSUFBbkUsQ0FBd0UsVUFBeEUsRUFBb0YsSUFBcEY7QUFDSDtBQUNKLEtBWEQsV0FZTyxVQUFBQyxHQUFHLEVBQUk7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDSCxLQWREO0FBZUgsR0FoQkQ7O0FBaUJBLE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsUUFBTUMsSUFBSSxHQUFHOUQsQ0FBQyxDQUFDLFlBQUQsQ0FBZDtBQUNBOEQsSUFBQUEsSUFBSSxDQUFDTixXQUFMLENBQWlCLG1CQUFqQixFQUFzQzlCLFFBQXRDLENBQStDLG9CQUEvQztBQUNBa0IsSUFBQUEsS0FBSyxDQUFDQyxHQUFOLENBQVUsd0NBQXNDOUIsVUFBaEQsRUFDQ3VDLElBREQsQ0FDTSxVQUFBQyxPQUFPLEVBQUk7QUFDYixVQUFHQSxPQUFPLENBQUNSLElBQVIsQ0FBYSxDQUFiLEtBQW1CLENBQXRCLEVBQXdCO0FBQ3BCL0MsUUFBQUEsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0MrRCxHQUFsQyxDQUFzQyxTQUF0QyxFQUFnRCxNQUFoRDtBQUNBL0QsUUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUIrRCxHQUF6QixDQUE2QixTQUE3QixFQUF1QyxNQUF2QztBQUNBL0QsUUFBQUEsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUMrRCxHQUFyQyxDQUF5QyxTQUF6QyxFQUFtRCxNQUFuRDtBQUNILE9BSkQsTUFJSztBQUNEL0QsUUFBQUEsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0MrRCxHQUFsQyxDQUFzQyxTQUF0QyxFQUFnRCxPQUFoRDtBQUNBL0QsUUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUIrRCxHQUF6QixDQUE2QixTQUE3QixFQUF1QyxNQUF2QztBQUNBL0QsUUFBQUEsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUMrRCxHQUFyQyxDQUF5QyxTQUF6QyxFQUFtRCxPQUFuRDtBQUNIOztBQUNEL0QsTUFBQUEsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNnRCxJQUFuQyxDQUF3Q08sT0FBTyxDQUFDUixJQUFSLENBQWEsQ0FBYixDQUF4QztBQUNBZSxNQUFBQSxJQUFJLENBQUNOLFdBQUwsQ0FBaUIsb0JBQWpCLEVBQXVDOUIsUUFBdkMsQ0FBZ0QsbUJBQWhELEVBWGEsQ0FZYjtBQUNILEtBZEQsV0FlTyxVQUFBZ0MsR0FBRyxFQUFJO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0gsS0FqQkQ7QUFrQkgsR0FyQkQsQ0FqSDBCLENBdUkxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTU0saUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCLFFBQUdqRCxVQUFILEVBQWM7QUFDVjZCLE1BQUFBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLHFDQUFtQzlCLFVBQTdDLEVBQ0N1QyxJQURELENBQ00sVUFBQUMsT0FBTyxFQUFJO0FBQ2J2RCxRQUFBQSxDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ2dELElBQWxDLENBQXVDTyxPQUFPLENBQUNSLElBQS9DLEVBQXFEWCxPQUFyRDtBQUNBcEMsUUFBQUEsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUN1QyxHQUFyQyxDQUF5QyxFQUF6QztBQUNILE9BSkQsV0FLTyxVQUFBbUIsR0FBRyxFQUFJO0FBQ1ZDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0gsT0FQRDtBQVFIO0FBQ0osR0FYRDs7QUFZQTFELEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXFDLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLDRCQUFyQixFQUFrRCxVQUFVNEIsQ0FBVixFQUFhO0FBQzNEQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7O0FBQ0EsUUFBR2xFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1FLFFBQVIsQ0FBaUIsa0JBQWpCLENBQUgsRUFBeUM7QUFDckNuRSxNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF3RCxXQUFSLENBQW9CLGtCQUFwQjtBQUNBekMsTUFBQUEsVUFBVSxHQUFHLElBQWI7QUFDQXFDLE1BQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0FwRCxNQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWN3RCxXQUFkLENBQTBCLGFBQTFCLEVBQXlDOUIsUUFBekMsQ0FBa0QsZUFBbEQsRUFBbUUrQixJQUFuRSxDQUF3RSxVQUF4RSxFQUFvRixLQUFwRjtBQUNILEtBTEQsTUFLTztBQUNIekQsTUFBQUEsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0N3RCxXQUFoQyxDQUE0QyxrQkFBNUM7QUFDQXhELE1BQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBCLFFBQVIsQ0FBaUIsa0JBQWpCO0FBQ0FYLE1BQUFBLFVBQVUsR0FBR2YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUQsSUFBUixDQUFhLElBQWIsQ0FBYjtBQUNBRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTdDLFVBQVosRUFKRyxDQUtIOztBQUNBc0MsTUFBQUEsVUFBVTtBQUNWUSxNQUFBQSxVQUFVO0FBQ1ZHLE1BQUFBLGlCQUFpQjtBQUNwQjtBQUNKLEdBakJEO0FBbUJBaEUsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVcUMsRUFBVixDQUFhLE9BQWIsRUFBcUIsVUFBckIsRUFBZ0MsVUFBVTRCLENBQVYsRUFBYTtBQUN6Q0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUcsQ0FBQ25ELFVBQUosRUFBZTtBQUNYWixNQUFBQSxLQUFLLENBQUNpRSxJQUFOLENBQVc7QUFDWE4sUUFBQUEsSUFBSSxFQUFFLE9BREs7QUFFWE8sUUFBQUEsS0FBSyxFQUFFO0FBRkksT0FBWDtBQUlBO0FBQ0g7O0FBQ0RyRSxJQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQnNFLEtBQTNCLENBQWlDLE1BQWpDO0FBQ0gsR0FWRDtBQVlBdEUsRUFBQUEsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNxQyxFQUFuQyxDQUFzQyxRQUF0QztBQUFBLHdFQUFnRCxrQkFBZ0I0QixDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNUNBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFENEMsb0JBRXhDLEtBQUtLLEtBQUwsSUFBYyxDQUYwQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUdsQjNCLEtBQUssQ0FBQ0MsR0FBTixDQUFVLDRCQUFWLENBSGtCOztBQUFBO0FBR2xDQyxjQUFBQSxPQUhrQztBQUl4Q0osY0FBQUEsUUFBUSxHQUFHSSxPQUFPLENBQUNDLElBQW5CO0FBQ0EvQyxjQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QmdELElBQXhCLENBQTZCTixRQUE3QixFQUF1Q04sT0FBdkM7QUFDQXBDLGNBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIrRCxHQUFuQixDQUF1QixTQUF2QixFQUFpQyxPQUFqQztBQU53QztBQUFBOztBQUFBO0FBUXhDL0QsY0FBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JnRCxJQUF4QixDQUE2QixFQUE3QjtBQUNBaEQsY0FBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQitELEdBQW5CLENBQXVCLFNBQXZCLEVBQWlDLE1BQWpDOztBQVR3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFoRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBL0QsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVcUMsRUFBVixDQUFhLFFBQWIsRUFBc0IsdUJBQXRCLEVBQThDLFVBQVU0QixDQUFWLEVBQWE7QUFDdkRBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlNLEtBQUssR0FBR3hFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlFLElBQVIsQ0FBYSxXQUFiLEVBQTBCaEIsSUFBMUIsQ0FBK0IsU0FBL0IsQ0FBWjs7QUFDQSxRQUFHZSxLQUFLLElBQUksRUFBWixFQUFlO0FBQ1h4RSxNQUFBQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QnVDLEdBQTlCO0FBQ0g7O0FBQ0R2QyxJQUFBQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QnVDLEdBQTlCLENBQWtDaUMsS0FBbEM7QUFDSCxHQVBEO0FBUUF4RSxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVxQyxFQUFWLENBQWEsT0FBYixFQUFxQixlQUFyQjtBQUFBLHdFQUFxQyxrQkFBZ0I0QixDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakNBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNNSixjQUFBQSxJQUYyQixHQUVwQjlELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlFLElBQVIsQ0FBYSxHQUFiLENBRm9CO0FBR2pDWCxjQUFBQSxJQUFJLENBQUNOLFdBQUwsQ0FBaUIsU0FBakIsRUFBNEI5QixRQUE1QixDQUFxQyxvQkFBckM7QUFDSWdELGNBQUFBLFlBSjZCLEdBSWIxRSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QnVDLEdBQXhCLEVBSmE7O0FBS2pDLGtCQUFJdkMsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUN1QyxHQUFqQyxNQUEwQyxDQUE5QyxFQUFpRDtBQUM3Q21DLGdCQUFBQSxZQUFZLEdBQUcsQ0FBZjtBQUNIOztBQUVHQyxjQUFBQSxRQVQ2QixHQVNsQixJQUFJQyxRQUFKLEVBVGtCO0FBVWpDRCxjQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUI3RSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVl1QyxHQUFaLEVBQXpCO0FBQ0FvQyxjQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkI3RSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWV1QyxHQUFmLEVBQTNCO0FBQ0FvQyxjQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBdUI3RSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVV1QyxHQUFWLEVBQXZCO0FBQ0FvQyxjQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsY0FBaEIsRUFBZ0NILFlBQWhDO0FBRUlJLGNBQUFBLFVBZjZCLEdBZWY5RSxDQUFDLENBQUMsbUNBQUQsQ0FmYztBQWdCakM4RSxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFoQmlDO0FBQUE7QUFBQSxxQkFrQlBuQyxLQUFLLENBQUNvQyxJQUFOLENBQVcsb0NBQWtDakUsVUFBN0MsRUFBd0Q0RCxRQUF4RCxDQWxCTzs7QUFBQTtBQWtCdkI3QixjQUFBQSxPQWxCdUI7QUFtQjdCZSxjQUFBQSxVQUFVO0FBQ1Y3RCxjQUFBQSxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ2lGLE9BQWhDO0FBR0FqRixjQUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVl1QyxHQUFaLENBQWdCLEVBQWhCO0FBQ0F1QixjQUFBQSxJQUFJLENBQUNOLFdBQUwsQ0FBaUIsb0JBQWpCLEVBQXVDOUIsUUFBdkMsQ0FBZ0QsU0FBaEQ7QUFDQTJCLGNBQUFBLFVBQVU7QUFDVnJDLGNBQUFBLGFBQWEsQ0FBQ0ksSUFBZCxDQUFtQjhELE1BQW5CLENBQTBCLElBQTFCLEVBQWdDLEtBQWhDO0FBMUI2QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTRCdkJDLGNBQUFBLE9BNUJ1QixHQTRCYixhQUFNekMsUUFBTixDQUFlSyxJQTVCRjtBQTZCN0IvQyxjQUFBQSxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ2lGLE9BQWhDLDZDQUN1Q0UsT0FEdkM7QUFHQXJCLGNBQUFBLElBQUksQ0FBQ04sV0FBTCxDQUFpQixvQkFBakIsRUFBdUM5QixRQUF2QyxDQUFnRCxTQUFoRDs7QUFoQzZCO0FBa0NqQzBELGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2JwRixnQkFBQUEsQ0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUMrRSxNQUF2QztBQUNILGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBbENpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFyQzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQTlNMEIsQ0FvUDFCOztBQUNJL0UsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVcUMsRUFBVixDQUFhLE9BQWIsRUFBcUIsa0JBQXJCO0FBQUEsd0VBQXdDLGtCQUFnQjRCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQ0EsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRG9DLENBRXBDO0FBQ0E7O0FBRUltQixjQUFBQSxHQUxnQyxHQUsxQkMsT0FBTyxDQUFDLGtEQUFELENBTG1COztBQUFBLG9CQU1qQ0QsR0FBRyxJQUFJLENBTjBCO0FBQUE7QUFBQTtBQUFBOztBQU8xQnZCLGNBQUFBLElBUDBCLEdBT25COUQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUUsSUFBUixDQUFhLEdBQWIsQ0FQbUI7QUFRaENYLGNBQUFBLElBQUksQ0FBQ04sV0FBTCxDQUFpQixpQkFBakIsRUFBb0M5QixRQUFwQyxDQUE2QyxvQkFBN0M7QUFSZ0M7QUFBQTtBQUFBLHFCQVVMa0IsS0FBSyxDQUFDb0MsSUFBTixDQUFXLDRDQUEwQ2pFLFVBQXJELENBVks7O0FBQUE7QUFVdEIrQixjQUFBQSxPQVZzQjtBQVc1Qk8sY0FBQUEsVUFBVTtBQUNWUSxjQUFBQSxVQUFVO0FBQ1Y3QyxjQUFBQSxhQUFhLENBQUNJLElBQWQsQ0FBbUI4RCxNQUFuQixDQUEwQixJQUExQixFQUFnQyxLQUFoQztBQUNBcEIsY0FBQUEsSUFBSSxDQUFDTixXQUFMLENBQWlCLG9CQUFqQixFQUF1QzlCLFFBQXZDLENBQWdELGlCQUFoRDtBQWQ0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdCdEJ5RCxjQUFBQSxPQWhCc0IsR0FnQlosYUFBTXpDLFFBQU4sQ0FBZUssSUFoQkg7QUFpQjVCNUMsY0FBQUEsS0FBSyxDQUFDaUUsSUFBTixDQUFXO0FBQ1BOLGdCQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQTyxnQkFBQUEsS0FBSyxFQUFFYztBQUZBLGVBQVg7QUFJQXJCLGNBQUFBLElBQUksQ0FBQ04sV0FBTCxDQUFpQixvQkFBakIsRUFBdUM5QixRQUF2QyxDQUFnRCxpQkFBaEQ7O0FBckI0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF4Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQXJQc0IsQ0E4UTFCOztBQUNBMUIsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVcUMsRUFBVixDQUFhLE9BQWIsRUFBcUIsbUJBQXJCO0FBQUEsd0VBQXlDLGtCQUFnQjRCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQ0EsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ01KLGNBQUFBLElBRitCLEdBRXhCOUQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUUsSUFBUixDQUFhLEdBQWIsQ0FGd0I7QUFHckNYLGNBQUFBLElBQUksQ0FBQ04sV0FBTCxDQUFpQixpQkFBakIsRUFBb0M5QixRQUFwQyxDQUE2QyxvQkFBN0M7QUFDSTZELGNBQUFBLE1BSmlDLEdBSXhCdkYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUQsSUFBUixDQUFhLElBQWIsQ0FKd0I7QUFBQTtBQUFBO0FBQUEscUJBTVZiLEtBQUssQ0FBQ29DLElBQU4sQ0FBVyx3Q0FBc0NPLE1BQWpELENBTlU7O0FBQUE7QUFNM0J6QyxjQUFBQSxPQU4yQjtBQU9qQ08sY0FBQUEsVUFBVTtBQUNWUSxjQUFBQSxVQUFVO0FBQ1Y3QyxjQUFBQSxhQUFhLENBQUNJLElBQWQsQ0FBbUI4RCxNQUFuQixDQUEwQixJQUExQixFQUFnQyxLQUFoQztBQUNBcEIsY0FBQUEsSUFBSSxDQUFDTixXQUFMLENBQWlCLG9CQUFqQixFQUF1QzlCLFFBQXZDLENBQWdELGlCQUFoRDtBQVZpQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVkzQnlELGNBQUFBLE9BWjJCLEdBWWpCLGFBQU16QyxRQUFOLENBQWVLLElBWkU7QUFhakNlLGNBQUFBLElBQUksQ0FBQ04sV0FBTCxDQUFpQixvQkFBakIsRUFBdUM5QixRQUF2QyxDQUFnRCxpQkFBaEQ7O0FBYmlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXpDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBMUIsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVcUMsRUFBVixDQUFhLE9BQWIsRUFBcUIsVUFBckIsRUFBZ0MsVUFBVTRCLENBQVYsRUFBYTtBQUN6Q0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUcsQ0FBQ25ELFVBQUosRUFBZTtBQUNYWixNQUFBQSxLQUFLLENBQUNpRSxJQUFOLENBQVc7QUFDUE4sUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUE8sUUFBQUEsS0FBSyxFQUFFO0FBRkEsT0FBWDtBQUlBO0FBQ0g7O0FBQ0QsUUFBRyxDQUFDakIsU0FBSixFQUFjO0FBQ1ZqRCxNQUFBQSxLQUFLLENBQUNpRSxJQUFOLENBQVc7QUFDUE4sUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUE8sUUFBQUEsS0FBSyxFQUFFO0FBRkEsT0FBWDtBQUlBO0FBQ0g7O0FBQ0RyRSxJQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQnNFLEtBQXBCLENBQTBCLE1BQTFCO0FBQ0gsR0FqQkQ7QUFtQkF0RSxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVxQyxFQUFWLENBQWEsUUFBYixFQUF1QixtQkFBdkI7QUFBQSx3RUFBNEMsa0JBQWdCNEIsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hDQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDSXNCLGNBQUFBLFFBRm9DLEdBRXpCeEYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUYsU0FBUixFQUZ5QjtBQUdwQ1gsY0FBQUEsVUFIb0MsR0FHdEI5RSxDQUFDLENBQUMsbUNBQUQsQ0FIcUI7QUFJeEM4RSxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDTWpCLGNBQUFBLElBTGtDLEdBSzNCOUQsQ0FBQyxDQUFDLDBCQUFELENBTDBCO0FBTXhDOEQsY0FBQUEsSUFBSSxDQUFDTixXQUFMLENBQWlCLGlCQUFqQixFQUFvQzlCLFFBQXBDLENBQTZDLG9CQUE3QztBQUNBMUIsY0FBQUEsQ0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUMwQixRQUF2QyxDQUFnRCxVQUFoRCxFQUE0RCtCLElBQTVELENBQWlFLFVBQWpFLEVBQTZFLElBQTdFLEVBUHdDLENBUXhDOztBQVJ3QztBQUFBO0FBQUEscUJBVWJiLEtBQUssQ0FBQ29DLElBQU4sQ0FBVyx5Q0FBdUNqRSxVQUFsRCxFQUE2RHlFLFFBQTdELENBVmE7O0FBQUE7QUFVOUIxQyxjQUFBQSxPQVY4QjtBQVc5QkMsY0FBQUEsSUFYOEIsR0FXdkJELE9BQU8sQ0FBQ0MsSUFYZTtBQVlwQy9DLGNBQUFBLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDaUYsT0FBaEM7QUFHQWpGLGNBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBGLE9BQVIsQ0FBZ0IsT0FBaEI7QUFDQTFGLGNBQUFBLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCdUMsR0FBOUIsQ0FBa0MsRUFBbEMsRUFBc0NtRCxPQUF0QyxDQUE4QyxRQUE5QztBQUNBckMsY0FBQUEsVUFBVTtBQUNWUyxjQUFBQSxJQUFJLENBQUNwQyxRQUFMLENBQWMsaUJBQWQsRUFBaUM4QixXQUFqQyxDQUE2QyxvQkFBN0M7QUFDQXhELGNBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDd0QsV0FBdkMsQ0FBbUQsVUFBbkQsRUFBK0RDLElBQS9ELENBQW9FLFVBQXBFLEVBQWdGLEtBQWhGO0FBQ0FMLGNBQUFBLFNBQVMsR0FBRyxLQUFaO0FBQ0FwQyxjQUFBQSxhQUFhLENBQUNJLElBQWQsQ0FBbUI4RCxNQUFuQixDQUEwQixJQUExQixFQUFnQyxLQUFoQztBQUNBUyxjQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSwrQkFBNkI3RSxVQUE3QixHQUF3QyxHQUF4QyxHQUE0Q2dDLElBQXhELEVBQThELFFBQTlEO0FBdEJvQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdCOUJvQyxjQUFBQSxPQXhCOEIsR0F3QnBCLGFBQU16QyxRQUFOLENBQWVLLElBeEJLO0FBeUJwQ1ksY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQW1CLGFBQU1sQixRQUF6QjtBQUNBb0MsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ0EvRSxjQUFBQSxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ2lGLE9BQWhDLDZDQUN1Q0UsT0FEdkM7QUFHQXJCLGNBQUFBLElBQUksQ0FBQ3BDLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQzhCLFdBQWpDLENBQTZDLHFCQUE3QztBQUNBeEQsY0FBQUEsQ0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUN3RCxXQUF2QyxDQUFtRCxVQUFuRCxFQUErREMsSUFBL0QsQ0FBb0UsVUFBcEUsRUFBZ0YsS0FBaEY7O0FBL0JvQztBQWlDeEMyQixjQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNkcEYsZ0JBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDK0UsTUFBdkM7QUFDRixlQUZTLEVBRVAsSUFGTyxDQUFWOztBQWpDd0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNUM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FsVDBCLENBdVYxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQS9FLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXFDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFdBQXRCO0FBQUEseUVBQW1DLG1CQUFnQjRCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDL0JBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFEK0Isa0JBRTNCbkQsVUFGMkI7QUFBQTtBQUFBO0FBQUE7O0FBRzNCWixjQUFBQSxLQUFLLENBQUNpRSxJQUFOLENBQVc7QUFDWE4sZ0JBQUFBLElBQUksRUFBRSxPQURLO0FBRVhPLGdCQUFBQSxLQUFLLEVBQUU7QUFGSSxlQUFYO0FBSDJCOztBQUFBO0FBUy9Cc0IsY0FBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksb0NBQWtDN0UsVUFBOUMsRUFBMEQsUUFBMUQ7O0FBVCtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW5DOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0FmLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXFDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFNBQXRCO0FBQUEseUVBQWlDLG1CQUFnQjRCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDN0JBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFENkIsa0JBRXpCbkQsVUFGeUI7QUFBQTtBQUFBO0FBQUE7O0FBR3pCWixjQUFBQSxLQUFLLENBQUNpRSxJQUFOLENBQVc7QUFDWE4sZ0JBQUFBLElBQUksRUFBRSxPQURLO0FBRVhPLGdCQUFBQSxLQUFLLEVBQUU7QUFGSSxlQUFYO0FBSHlCOztBQUFBO0FBUzdCc0IsY0FBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksOEJBQTRCN0UsVUFBeEMsRUFBb0QsUUFBcEQ7O0FBVDZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWpDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUFmLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXFDLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLGFBQXJCLEVBQW9DLFlBQVc7QUFDN0NzRCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSx1Q0FBWixFQUFxRCxRQUFyRDtBQUNELEdBRkQ7QUFJQTVGLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXFDLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLGNBQXJCLEVBQW9DLFVBQVU0QixDQUFWLEVBQWE7QUFDN0NBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBbEUsSUFBQUEsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJzRSxLQUE3QixDQUFtQyxNQUFuQztBQUNILEdBSEQ7QUFJQXRFLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXFDLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLGVBQXJCLEVBQXFDLFVBQVU0QixDQUFWLEVBQWE7QUFDOUNBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUkyQixLQUFLLEdBQUc3RixDQUFDLENBQUMsUUFBRCxDQUFELENBQVl1QyxHQUFaLEVBQVosQ0FGOEMsQ0FHOUM7O0FBQ0FvRCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxvREFBa0RDLEtBQTlELEVBQXFFLFFBQXJFO0FBQ0gsR0FMRDtBQU1BN0YsRUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlcUMsRUFBZixDQUFrQixPQUFsQjtBQUFBLHlFQUEyQixtQkFBZTRCLENBQWY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUR1QixrQkFFbkJuRCxVQUZtQjtBQUFBO0FBQUE7QUFBQTs7QUFHbkJaLGNBQUFBLEtBQUssQ0FBQ2lFLElBQU4sQ0FBVztBQUNYTixnQkFBQUEsSUFBSSxFQUFFLE9BREs7QUFFWE8sZ0JBQUFBLEtBQUssRUFBRTtBQUZJLGVBQVg7QUFIbUI7O0FBQUE7QUFTakJQLGNBQUFBLElBVGlCLEdBU1Y5RCxDQUFDLENBQUMsYUFBRCxDQVRTO0FBVXZCOEQsY0FBQUEsSUFBSSxDQUFDTixXQUFMLENBQWlCLFNBQWpCLEVBQTRCOUIsUUFBNUIsQ0FBcUMsb0JBQXJDO0FBQ0lpRCxjQUFBQSxRQVhtQixHQVdSLElBQUlDLFFBQUosRUFYUTtBQVl2QkQsY0FBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCLFNBQWhCLEVBQTRCOUQsVUFBNUI7QUFDSXNFLGNBQUFBLEdBYm1CLEdBYWJDLE9BQU8sQ0FBQywrQ0FBRCxDQWJNOztBQUFBLG9CQWNwQkQsR0FBRyxJQUFJLENBZGE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQWdCT3pDLEtBQUssQ0FBQ29DLElBQU4sQ0FBVywyQkFBWCxFQUF3Q0wsUUFBeEMsQ0FoQlA7O0FBQUE7QUFnQlQ3QixjQUFBQSxPQWhCUztBQWlCVEosY0FBQUEsU0FqQlMsR0FpQkVJLE9BQU8sQ0FBQ0MsSUFqQlY7QUFrQmZlLGNBQUFBLElBQUksQ0FBQ3BDLFFBQUwsQ0FBYyxTQUFkLEVBQXlCOEIsV0FBekIsQ0FBcUMsb0JBQXJDO0FBQ0FyRCxjQUFBQSxLQUFLLENBQUNpRSxJQUFOLENBQVc7QUFDUE4sZ0JBQUFBLElBQUksRUFBRSxTQURDO0FBRVBPLGdCQUFBQSxLQUFLLEVBQUUzQjtBQUZBLGVBQVg7QUFJQW1CLGNBQUFBLFVBQVU7QUFDVjlDLGNBQUFBLFVBQVUsR0FBRyxLQUFiO0FBQ0FDLGNBQUFBLGFBQWEsQ0FBQ0ksSUFBZCxDQUFtQjhELE1BQW5CLENBQTBCLElBQTFCLEVBQWdDLEtBQWhDO0FBekJlO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBMkJmdkIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ011QixjQUFBQSxPQTVCUyxHQTRCQyxjQUFNekMsUUFBTixDQUFlSyxJQTVCaEI7QUE2QmZlLGNBQUFBLElBQUksQ0FBQ3BDLFFBQUwsQ0FBYyxTQUFkLEVBQXlCOEIsV0FBekIsQ0FBcUMsb0JBQXJDO0FBQ0FyRCxjQUFBQSxLQUFLLENBQUNpRSxJQUFOLENBQVc7QUFDUE4sZ0JBQUFBLElBQUksRUFBRSxPQURDO0FBRVBPLGdCQUFBQSxLQUFLLEVBQUVjO0FBRkEsZUFBWDs7QUE5QmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzQ0gsQ0E1Y0Q7Ozs7Ozs7Ozs7QUNBQSxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsYUFBYSxtQkFBTyxDQUFDLHFGQUE0QjtBQUNqRCwyQkFBMkIsbUJBQU8sQ0FBQyx1R0FBcUM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25CQSxXQUFXLG1CQUFPLENBQUMscUdBQW9DO0FBQ3ZELGtCQUFrQixtQkFBTyxDQUFDLHFHQUFvQztBQUM5RCxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDekQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyx3QkFBd0IsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDbkUseUJBQXlCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrRUFBa0U7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDRDQUE0QztBQUM1Qyw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1QyxVQUFVO0FBQ1YsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDeEVBLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsY0FBYyxtQkFBTyxDQUFDLDJFQUF1QjtBQUM3QyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDekQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7Ozs7Ozs7Ozs7O0FDdEJBLDhCQUE4QixtQkFBTyxDQUFDLDZHQUF3QztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLGlGQUEwQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVkscUhBQTRDO0FBQ3hELHVCQUF1QixtQkFBTyxDQUFDLCtGQUFpQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHNCQUFzQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFtRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYixXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DLG9DQUFvQyxtQkFBTyxDQUFDLCtIQUFpRDtBQUM3RixlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNwQ0QsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFlBQVksbUJBQU8sQ0FBQyx1RkFBNkI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQztBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQ7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3Q0FBd0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2ZhY3R1cmUvZmFjdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfZmFjdHVyZSA9IGZhbHNlO1xyXG4gICAgdmFyIHRhYmxlX2ZhY3R1cmUgPSAkKFwiI2RhdGFibGVzX2ZhY3R1cmVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvZmFjdHVyZS9mYWN0dXJlcy9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2ZhY3R1cmUpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2RhdGFibGVzX2ZhY3R1cmUnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2RhdGFibGVzX2ZhY3R1cmUnKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0Fib3J0IHByZXZpb3VzIGFqYXggcmVxdWVzdCBpZiBpdCBpcyBzdGlsbCBpbiBwcm9jZXNzLlxyXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gZHQuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgIFxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMSkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIjcmVnbGVtZW50XCIpICYmICQoXCIjcmVnbGVtZW50XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygyKS5zZWFyY2goJChcIiNyZWdsZW1lbnRcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygzKS5zZWFyY2goJChcIiNvcmdhbmlzbWVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBpZiAoJChcIiNyZWdsZW1lbnRcIikgJiYgJChcIiNyZWdsZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3JlZ2xlbWVudFwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChcIiNvcmdhbmlzbWVcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI29yZ2FuaXNtZVwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNyZWdsZW1lbnRcIikgJiYgJChcIiNyZWdsZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcmVnbGVtZW50XCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJChcIiNvcmdhbmlzbWVcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDApLnNlYXJjaCgkKFwiI2V0YWJsaXNzZW1lbnRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNyZWdsZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3JlZ2xlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDIpLnNlYXJjaChpZF9yZWdsZW1lbnQpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI29yZ2FuaXNtZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfb3JnYW5pc21lID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMykuc2VhcmNoKGlkX29yZ2FuaXNtZSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgIGxldCByZWdsZW1lbnQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGdldE1vbnRhbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvZmFjdHVyZS9mYWN0dXJlcy9nZXRNb250YW50LycraWRfZmFjdHVyZSlcclxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgcmVnbGVtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgJChcIiNham91dGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzLmRhdGEgIT0gJ3ZpZGUnKSB7XHJcbiAgICAgICAgICAgICAgICByZWdsZW1lbnQgPSAxMjtcclxuICAgICAgICAgICAgICAgIC8vICQoXCIjbW9udGFudFwiKS52YWwoc3VjY2Vzcy5kYXRhWydtb250YW50J10pO1xyXG4gICAgICAgICAgICAgICAgLy8gJChcIiNtb250YW50MlwiKS52YWwoc3VjY2Vzcy5kYXRhWydtb250YW50J10pO1xyXG4gICAgICAgICAgICAgICAgJChcIiNtb250YW50X2ZhY3R1cmVcIikudmFsKHN1Y2Nlc3MuZGF0YVsnbW9udGFudF9mYWN0dXJlJ10pO1xyXG4gICAgICAgICAgICAgICAgJChcIiNham91dGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0RmFjdHVyZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNmYWN0dXJlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBheGlvcy5nZXQoJy9mYWN0dXJlL2ZhY3R1cmVzL2RldGFpbGxlX2ZhY3R1cmUvJytpZF9mYWN0dXJlKVxyXG4gICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICBpZihzdWNjZXNzLmRhdGFbMF0gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjYWRkX2RldGFpbGxlJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI2FkZCcpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5tb2RhbC1mYWN0dXJlICNkZXRhaWxsZV9hY3RpdmUnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI2FkZF9kZXRhaWxsZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjYWRkJykuY3NzKCdkaXNwbGF5JywnZmxleCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI2RldGFpbGxlX2FjdGl2ZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnLnRhYmxlX2RldGFpbGxlX2ZhY3R1cmUgdGJvZHknKS5odG1sKHN1Y2Nlc3MuZGF0YVsxXSlcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1tb25leS1iaWxsLWFsdFwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3VjY2Vzcy5kYXRhWzBdKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IGdldE9yZ2FuaXNtZUJ5RmFjdHVyZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICBpZihpZF9mYWN0dXJlKXtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9vcmdhbmlzbWUvJytpZF9mYWN0dXJlKTtcclxuICAgIC8vICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgIC8vICAgICAgICAgJCgnI29yZycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIC8vICAgICB9ICAgIFxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICBjb25zdCBsb2FkX2ZyYWlzX3ByZWlucyA9ICgpID0+IHtcclxuICAgICAgICBpZihpZF9mYWN0dXJlKXtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvZmFjdHVyZS9mYWN0dXJlcy9hcnRpY2xlX2ZyYWlzLycraWRfZmFjdHVyZSlcclxuICAgICAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCcjZGV0YWlsX2ZhY3R1cmVfbW9kYWwgI2ZyYWlzJykuaHRtbChzdWNjZXNzLmRhdGEpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgICAgICQoJyNkZXRhaWxfZmFjdHVyZV9tb2RhbCAjbW9udGFudHQnKS52YWwoJycpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZmFjdHVyZSB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfZmFjdHVyZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJlZ2xlbWVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfZmFjdHVyZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2ZhY3R1cmUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkX2ZhY3R1cmUpO1xyXG4gICAgICAgICAgICAvLyBnZXRPcmdhbmlzbWVCeUZhY3R1cmUoKVxyXG4gICAgICAgICAgICBnZXRNb250YW50KCk7XHJcbiAgICAgICAgICAgIGdldEZhY3R1cmUoKTtcclxuICAgICAgICAgICAgbG9hZF9mcmFpc19wcmVpbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2ZhY3R1cmUnLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9mYWN0dXJlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjZGV0YWlsX2ZhY3R1cmVfbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPW9yZ2FuXScpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9nZXRvcmdhbmlzbWVwYXNQYXlhbnQnKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuaHRtbChcIlwiKTtcclxuICAgICAgICAgICAgJCgnLnNlbGVjdC1vcmdhbicpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCcubW9kYWwtZmFjdHVyZSAjZnJhaXMnLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmcmFpcyA9ICQodGhpcykuZmluZCgnOnNlbGVjdGVkJykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgIGlmKGZyYWlzICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAkKCcubW9kYWwtZmFjdHVyZSAjbW9udGFudHQnKS52YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnLm1vZGFsLWZhY3R1cmUgI21vbnRhbnR0JykudmFsKGZyYWlzKTtcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNhZGRfZGV0YWlsbGUnLGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKHRoaXMpLmZpbmQoJ2knKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1wbHVzJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgbGV0IG9yZ2FuaXNtZV9pZCAgPSAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS52YWwoKTtcclxuICAgICAgICBpZiAoJChcImlucHV0W25hbWU9J29yZ2FuJ106Y2hlY2tlZFwiKS52YWwoKSA9PSAxKSB7XHJcbiAgICAgICAgICAgIG9yZ2FuaXNtZV9pZCA9IDdcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmcmFpcycsICQoJyNmcmFpcycpLnZhbCgpKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21vbnRhbnQnLCAkKCcjbW9udGFudHQnKS52YWwoKSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpY2UnLCAkKCcjaWNlJykudmFsKCkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnb3JnYW5pc21lX2lkJywgb3JnYW5pc21lX2lkKTtcclxuXHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIi5tb2RhbC1mYWN0dXJlIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9mYWN0dXJlL2ZhY3R1cmVzL2FkZF9kZXRhaWxsZS8nK2lkX2ZhY3R1cmUsZm9ybURhdGEpXHJcbiAgICAgICAgICAgIGdldEZhY3R1cmUoKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1mYWN0dXJlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5GYWN0dXJlIEJpZW4gQWpvdXRlcjwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgJCgnc2VsZWN0JykudmFsKCcnKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1wbHVzXCIpO1xyXG4gICAgICAgICAgICBnZXRNb250YW50KCk7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiLm1vZGFsLWZhY3R1cmUgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1wbHVzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1mYWN0dXJlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH0pO1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy9kZWxldGUgYWxsXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkZWxldGVfZGV0YWlsbGUnLGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoaWRfZmFjdHVyZSlcclxuICAgICAgICAgICAgLy8gbGV0IGlkX2RldCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBkZXNhY3RpdmVyIHRvdXQgbGVzIGZyYWlzID8nKTtcclxuICAgICAgICAgICAgaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQodGhpcykuZmluZCgnaScpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtd2luZG93LWNsb3NlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvZmFjdHVyZS9mYWN0dXJlcy9jbG90dXJlX2FsbF9kZXRhaWxsZS8nK2lkX2ZhY3R1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0TW9udGFudCgpXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmFjdHVyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtd2luZG93LWNsb3NlXCIpO1xyXG4gICAgICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLXdpbmRvdy1jbG9zZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy9kZWxldGUgYWxsXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmRldGFpbGxlX2Nsb3R1cmUnLGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKHRoaXMpLmZpbmQoJ2knKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS13aW5kb3ctY2xvc2UnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgaWRfZGV0ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvZmFjdHVyZS9mYWN0dXJlcy9jbG90dXJlX2RldGFpbGxlLycraWRfZGV0KVxyXG4gICAgICAgICAgICBnZXRNb250YW50KClcclxuICAgICAgICAgICAgZ2V0RmFjdHVyZSgpO1xyXG4gICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS13aW5kb3ctY2xvc2VcIik7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtd2luZG93LWNsb3NlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNham91dGVyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZmFjdHVyZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFyZWdsZW1lbnQpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NldHRlIEZhY3R1cmUgTlxcJ2EgQXVjdW4gRGV0YWlsIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNham91dGVyX21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgJy5uZXdfZmFjdHVyZS1mb3JtJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm1kYXRhID0gJCh0aGlzKS5zZXJpYWxpemUoKVxyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIi5uZXdfZmFjdHVyZS1mb3JtIC5idG4gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAkKCcubmV3X2ZhY3R1cmUtZm9ybSAjc2F2ZV9yZWdsZW1lbnQnKS5hZGRDbGFzcygnZGlzYWJsZWQnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgLy8gJChcIiNlbnJlZ2lzdHJlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4taW5mbycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9mYWN0dXJlL2ZhY3R1cmVzL2Fqb3V0ZXJfcmVnbGVtZW50LycraWRfZmFjdHVyZSxmb3JtZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5SZWdsZW1lbnQgQmllbiBBam91dGVyPC9kaXY+YFxyXG4gICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgICAgICAgICQoJy5uZXdfZmFjdHVyZS1mb3JtIHNlbGVjdCcpLnZhbCgnJykudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgZ2V0TW9udGFudCgpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgJCgnLm5ld19mYWN0dXJlLWZvcm0gI3NhdmVfcmVnbGVtZW50JykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAgICAgcmVnbGVtZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvZmFjdHVyZXMvZmFjdHVyZS8nK2lkX2ZhY3R1cmUrJy8nK2RhdGEsICdfYmxhbmsnKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJCgnLm5ld19mYWN0dXJlLWZvcm0gI3NhdmVfcmVnbGVtZW50JykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH0pO1xyXG4gICAgLy8gJCgnYm9keScpLm9uKCdjbGljaycsJyNtb2RpZmllcicsYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgLy8gaWYoIWlkX2ZhY3R1cmUpe1xyXG4gICAgLy8gICAgIC8vICAgICBUb2FzdC5maXJlKHtcclxuICAgIC8vICAgICAvLyAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgIC8vICAgICAvLyAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAvLyAgICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgLy8gICAgIHJldHVybjtcclxuICAgIC8vICAgICAvLyB9XHJcbiAgICAvLyAgICAgLy8gJChcIiNtb2RpZmllcl9vcmctbW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIC8vIH0pO1xyXG4gICAgXHJcbiAgICAvLyAkKCdib2R5Jykub24oJ2NsaWNrJywnI21vZGlmaWVyX29yZycsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI21vZGlmaWVyX29yZy1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAvLyAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIC8vICAgICBjb25zdCBpY29uID0gJChcIi5tb2RhbF9tb2RpZmllcl9vcmctZmFjdHVyZSAuYnRuIGlcIik7XHJcbiAgICAvLyAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAvLyAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAvLyAgICAgZm9ybURhdGEuYXBwZW5kKCdvcmdhbmlzbWUnLCAkKCcjb3JnJykudmFsKCkpO1xyXG4gICAgLy8gICAgIHRyeXtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9mYWN0dXJlL2ZhY3R1cmVzL21vZGlmaWVyX29yZ2FuaXNtZV9mYWN0dXJlLycraWRfZmFjdHVyZSxmb3JtRGF0YSlcclxuICAgIC8vICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgIC8vICAgICAgICAgJChcIiNtb2RpZmllcl9vcmctbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgIC8vICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXHJcbiAgICAvLyAgICAgICAgICk7IFxyXG4gICAgLy8gICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIC8vICAgICAgICAgdGFibGVfZmFjdHVyZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgICQoJyNvcmcnKS5zZWxlY3QyKClcclxuICAgIC8vICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgLy8gICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgIC8vICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIC8vICAgICAgICAgJChcIiNtb2RpZmllcl9vcmctbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgIC8vICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgIC8vICAgICAgICAgKTtcclxuICAgIC8vICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICAgICAkKFwiI21vZGlmaWVyX29yZy1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAvLyAgICAgfSwgNDAwMCk7XHJcblxyXG4gICAgLy8gfSlcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNpbXByaW1lcicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9mYWN0dXJlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvZmFjdHVyZS9mYWN0dXJlcy9wcmludGZhY3R1cmUvJytpZF9mYWN0dXJlLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNyZWxldmUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZmFjdHVyZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvZmFjdHVyZXMvcmVsZXZlLycraWRfZmFjdHVyZSwgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgd2luZG93Lm9wZW4oJy9mYWN0dXJlL2ZhY3R1cmVzL2V4dHJhY3Rpb25fZmFjdHVyZXMnLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhX2ZyYWlzJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiI2FubmVlX2V4dHJhY3Rpb25fZnJhaXNcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNleHBvcnRfZnJhaXMnLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBhbm5lZSA9ICQoJyNhbm5lZScpLnZhbCgpO1xyXG4gICAgICAgIC8vIGFsZXJ0KGFubmVlKTtcclxuICAgICAgICB3aW5kb3cub3BlbignL2ZhY3R1cmUvZmFjdHVyZXMvZXh0cmFjdGlvbl9mYWN0dXJlc19ieV9hbm5lZS8nK2FubmVlLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjY2xvdHVyZXJcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZmFjdHVyZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNjbG90dXJlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmYWN0dXJlXCIsICBpZF9mYWN0dXJlKVxyXG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBjbG90dXJlciBjZXR0ZSBmYWN0dXJlID8nKTtcclxuICAgICAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2ZhY3R1cmUvZmFjdHVyZXMvY2xvdHVyZScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhOyAgICBcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIGdldEZhY3R1cmUoKVxyXG4gICAgICAgICAgICAgICAgaWRfZmFjdHVyZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0YWJsZV9mYWN0dXJlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSk7IiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xyXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcclxudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcclxuXHJcbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcclxudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xyXG5cclxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcclxuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcclxuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xyXG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcclxufTtcclxuIiwidmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XHJcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcclxudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcclxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xyXG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcclxudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xyXG5cclxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUueyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIGZpbmQsIGZpbmRJbmRleCwgZmlsdGVyUmVqZWN0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cclxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XHJcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcclxuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xyXG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xyXG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcclxuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcclxuICB2YXIgSVNfRklMVEVSX1JFSkVDVCA9IFRZUEUgPT0gNztcclxuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcclxuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0LCBzcGVjaWZpY0NyZWF0ZSkge1xyXG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XHJcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XHJcbiAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgdGhhdCk7XHJcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2Uoc2VsZik7XHJcbiAgICB2YXIgaW5kZXggPSAwO1xyXG4gICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcclxuICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgfHwgSVNfRklMVEVSX1JFSkVDVCA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XHJcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcclxuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xyXG4gICAgICB2YWx1ZSA9IHNlbGZbaW5kZXhdO1xyXG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XHJcbiAgICAgIGlmIChUWVBFKSB7XHJcbiAgICAgICAgaWYgKElTX01BUCkgdGFyZ2V0W2luZGV4XSA9IHJlc3VsdDsgLy8gbWFwXHJcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcclxuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAvLyBzb21lXHJcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWx1ZTsgICAgICAgICAgICAgLy8gZmluZFxyXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxyXG4gICAgICAgICAgY2FzZSAyOiBwdXNoKHRhcmdldCwgdmFsdWUpOyAgICAgIC8vIGZpbHRlclxyXG4gICAgICAgIH0gZWxzZSBzd2l0Y2ggKFRZUEUpIHtcclxuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxyXG4gICAgICAgICAgY2FzZSA3OiBwdXNoKHRhcmdldCwgdmFsdWUpOyAgICAgIC8vIGZpbHRlclJlamVjdFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcclxuICB9O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2RcclxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXHJcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxyXG4gIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcclxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcclxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcclxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXHJcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXHJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXHJcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5zb21lYCBtZXRob2RcclxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXHJcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxyXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XHJcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcclxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcclxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXHJcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxyXG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxyXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyUmVqZWN0YCBtZXRob2RcclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maWx0ZXJpbmdcclxuICBmaWx0ZXJSZWplY3Q6IGNyZWF0ZU1ldGhvZCg3KVxyXG59O1xyXG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xyXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xyXG52YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jb25zdHJ1Y3RvcicpO1xyXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XHJcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcclxuXHJcbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XHJcbnZhciBBcnJheSA9IGdsb2JhbC5BcnJheTtcclxuXHJcbi8vIGEgcGFydCBvZiBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSkge1xyXG4gIHZhciBDO1xyXG4gIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XHJcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcclxuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXHJcbiAgICBpZiAoaXNDb25zdHJ1Y3RvcihDKSAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xyXG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcclxuICAgICAgQyA9IENbU1BFQ0lFU107XHJcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcclxufTtcclxuIiwidmFyIGFycmF5U3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcclxuXHJcbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcclxuICByZXR1cm4gbmV3IChhcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbEFycmF5KSkobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XHJcbn07XHJcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XHJcblxyXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXHJcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XHJcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09ICdBcnJheSc7XHJcbn07XHJcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXHJcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xyXG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcclxuXHJcbnZhciBGSU5EID0gJ2ZpbmQnO1xyXG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xyXG5cclxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcclxuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcclxuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XHJcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXHJcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xyXG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xyXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XHJcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xyXG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcclxudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xyXG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcclxudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcclxuXHJcbi8vIEBAc2VhcmNoIGxvZ2ljXHJcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xyXG4gIHJldHVybiBbXHJcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxyXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xyXG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XHJcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xyXG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xyXG4gICAgfSxcclxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXHJcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcclxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XHJcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcclxuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcclxuXHJcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcclxuXHJcbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcclxuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xyXG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XHJcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcclxuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xyXG4gICAgfVxyXG4gIF07XHJcbn0pO1xyXG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcclxudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XHJcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XHJcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcclxudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcclxuXHJcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXHJcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcclxuXHJcbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xyXG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xyXG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcclxuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XHJcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XHJcbiAgfTtcclxufTtcclxuXHJcbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcclxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcclxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcclxuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXHJcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxyXG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxyXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXHJcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcclxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9mYWN0dXJlIiwidGFibGVfZmFjdHVyZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImFkZENsYXNzIiwicHJlRHJhd0NhbGxiYWNrIiwic2V0dGluZ3MiLCJmbiIsImlzRGF0YVRhYmxlIiwiZHQiLCJqcVhIUiIsImFib3J0IiwibGFuZ3VhZ2UiLCJ1cmwiLCJzZWxlY3QyIiwib24iLCJpZF9ldGFiIiwidmFsIiwiY29sdW1ucyIsInNlYXJjaCIsInJlc3BvbnNlIiwiZHJhdyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwiaWRfcmVnbGVtZW50IiwiaWRfb3JnYW5pc21lIiwicmVnbGVtZW50IiwiZ2V0TW9udGFudCIsInRoZW4iLCJzdWNjZXNzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImdldEZhY3R1cmUiLCJpY29uIiwiY3NzIiwibG9hZF9mcmFpc19wcmVpbnMiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsImZpcmUiLCJ0aXRsZSIsIm1vZGFsIiwidmFsdWUiLCJmcmFpcyIsImZpbmQiLCJvcmdhbmlzbWVfaWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibW9kYWxBbGVydCIsInJlbW92ZSIsInBvc3QiLCJwcmVwZW5kIiwicmVsb2FkIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJyZXMiLCJjb25maXJtIiwiaWRfZGV0IiwiZm9ybWRhdGEiLCJzZXJpYWxpemUiLCJ0cmlnZ2VyIiwid2luZG93Iiwib3BlbiIsImFubmVlIl0sInNvdXJjZVJvb3QiOiIifQ==