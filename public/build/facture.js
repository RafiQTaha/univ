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

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(document).ready(function () {
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: function didOpen(toast) {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
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
      $("body tr#" + id_facture).addClass("active_databales");
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable("#datables_facture")) {
        var dt = $("#datables_facture").DataTable(); //Abort previous ajax request if it is still in process.

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
  $("#etablissement").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_facture.columns(1).search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 12;
              break;
            }

            if ($("#reglement") && $("#reglement").val() != "") {
              table_facture.columns(2).search($("#reglement").val());
            } // if ($("#organisme").val() != "") {
            //     table_facture.columns(3).search($("#organisme").val())
            // }


            table_facture.columns(0).search(id_etab).draw();
            _context.next = 8;
            return axios.get("/api/formation/" + id_etab);

          case 8:
            request = _context.sent;
            response = request.data;
            _context.next = 14;
            break;

          case 12:
            table_facture.columns(0).search(id_etab).draw();

            if ($("#reglement") && $("#reglement").val() != "") {
              table_facture.columns(2).search($("#reglement").val());
            } // if ($("#organisme").val() != "") {
            //     table_facture.columns(3).search($("#organisme").val())
            // }


          case 14:
            $("#formation").html(response).select2();

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            table_facture.columns().search("");

            if ($("#reglement") && $("#reglement").val() != "") {
              table_facture.columns(2).search($("#reglement").val());
            } // if ($("#organisme").val() != "") {
            //     table_facture.columns(3).search($("#organisme").val());
            // }


            response = "";

            if (!(id_formation != "")) {
              _context2.next = 12;
              break;
            }

            table_facture.columns(1).search(id_formation).draw();
            _context2.next = 8;
            return axios.get("/api/promotion/" + id_formation);

          case 8:
            request = _context2.sent;
            response = request.data;
            _context2.next = 13;
            break;

          case 12:
            table_facture.columns(0).search($("#etablissement").val()).draw();

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#reglement").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
  }))); // $("#organisme").on('change', async function (){
  //     const id_organisme = $(this).val();
  //     table_facture.columns(3).search(id_organisme).draw();
  // })

  var reglement = false;

  var getMontant = function getMontant() {
    axios.get("/facture/factures/getMontant/" + id_facture).then(function (success) {
      reglement = null;
      $("#ajouter").removeClass("btn-primary").addClass("btn-secondary").attr("disabled", false);

      if (success.data != "vide") {
        reglement = 12; // $("#montant").val(success.data['montant']);
        // $("#montant2").val(success.data['montant']);

        $("#montant_facture").val(success.data["montant_facture"]);
        $("#ajouter").removeClass("btn-secondary").addClass("btn-primary").attr("disabled", true);
      }
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var getFacture = function getFacture() {
    var icon = $("#facture i");
    icon.removeClass("fa-money-bill-alt").addClass("fa-spinner fa-spin");
    axios.get("/facture/factures/detaille_facture/" + id_facture).then(function (success) {
      if (success.data[0] == 0) {
        $(".modal-facture #add_detaille").css("display", "none");
        $(".modal-facture #add").css("display", "none");
        $(".modal-facture #detaille_active").css("display", "none");
        $(".modal-facture #delete_detaille").css("display", "none");
      } else {
        $(".modal-facture #add_detaille").css("display", "block");
        $(".modal-facture #add").css("display", "flex");
        $(".modal-facture #detaille_active").css("display", "block");
        $(".modal-facture #delete_detaille").css("display", "block");
      }

      $(".table_detaille_facture tbody").html(success.data[1]);
      icon.removeClass("fa-spinner fa-spin").addClass("fa-money-bill-alt"); // console.log(success.data[0]);
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
      axios.get("/facture/factures/article_frais/" + id_facture).then(function (success) {
        console.log(success.data[0]);

        if (success.data[0] == 0) {
          $("#detail_facture_modal #orgDiv").css("display", "block");
        } else {
          $("#detail_facture_modal #orgDiv").css("display", "none");
        }

        $("#detail_facture_modal #frais").html(success.data[1]).select2();
        $("#detail_facture_modal #montantt").val("");
      })["catch"](function (err) {
        console.log(err);
      });
    }
  };

  $("body").on("click", "#datables_facture tbody tr", function (e) {
    e.preventDefault();

    if ($(this).hasClass("active_databales")) {
      $(this).removeClass("active_databales");
      id_facture = null;
      reglement = null;
      $("#ajouter").removeClass("btn-primary").addClass("btn-secondary").attr("disabled", false);
    } else {
      $("#datables_facture tbody tr").removeClass("active_databales");
      $(this).addClass("active_databales");
      id_facture = $(this).attr("id");
      console.log(id_facture); // getOrganismeByFacture()

      getMontant();
      getFacture();
      load_frais_preins();
    }
  });
  $("body").on("click", "#facture", function (e) {
    e.preventDefault();

    if (!id_facture) {
      Toast.fire({
        icon: "error",
        title: "Veuillez selection une ligne!"
      });
      return;
    }

    $("#detail_facture_modal").modal("show");
  });
  $("input[type=radio][name=organ]").on("change", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var request;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();

              if (!(this.value == 0)) {
                _context4.next = 10;
                break;
              }

              _context4.next = 4;
              return axios.get("/api/getorganismepasPayant");

            case 4:
              request = _context4.sent;
              response = request.data;
              $(".select-organ #org").html(response).select2();
              $(".select-organ").css("display", "block");
              _context4.next = 12;
              break;

            case 10:
              $(".select-organ #org").html("");
              $(".select-organ").css("display", "none");

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
  $("body").on("change", ".modal-facture #frais", function (e) {
    e.preventDefault();
    var frais = $(this).find(":selected").attr("data-id");

    if (frais != "") {
      $(".modal-facture #montantt").val();
    }

    $(".modal-facture #montantt").val(frais);
  });
  $("body").on("click", "#add_detaille", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var icon, formData, modalAlert, request, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              icon = $(this).find("i");
              icon.removeClass("fa-plus").addClass("fa-spinner fa-spin"); // let organisme_id  = $('.select-organ #org').val();
              // if ($("input[name='organ']:checked").val() == 1) {
              //     organisme_id = 7
              // }

              formData = new FormData();
              formData.append("frais", $("#frais").val());
              formData.append("montant", $("#montantt").val());
              formData.append("ice", $("#ice").val());
              formData.append("organismeType", $("#organismeType").val());
              modalAlert = $(".modal-facture .modal-body .alert");
              modalAlert.remove();
              _context5.prev = 10;
              _context5.next = 13;
              return axios.post("/facture/factures/add_detaille/" + id_facture, formData);

            case 13:
              request = _context5.sent;
              getFacture();
              load_frais_preins();
              $(".modal-facture .modal-body").prepend("<div class=\"alert alert-success\">Facture Bien Ajouter</div>");
              $("select").val("");
              icon.removeClass("fa-spinner fa-spin").addClass("fa-plus");
              getMontant();
              table_facture.ajax.reload(null, false);
              _context5.next = 28;
              break;

            case 23:
              _context5.prev = 23;
              _context5.t0 = _context5["catch"](10);
              message = _context5.t0.response.data;
              $(".modal-facture .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.removeClass("fa-spinner fa-spin").addClass("fa-plus");

            case 28:
              setTimeout(function () {
                $(".modal-facture .modal-body .alert").remove();
              }, 4000);

            case 29:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[10, 23]]);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }()); ////////////////////delete all

  $("body").on("click", "#delete_detaille", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var res, icon, request, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault(); // alert(id_facture)
              // let id_det = $(this).attr('id');

              res = confirm("Vous voulez vraiment desactiver tout les frais ?");

              if (!(res == 1)) {
                _context6.next = 20;
                break;
              }

              icon = $(this).find("i");
              icon.removeClass("fa-window-close").addClass("fa-spinner fa-spin");
              _context6.prev = 5;
              _context6.next = 8;
              return axios.post("/facture/factures/cloture_all_detaille/" + id_facture);

            case 8:
              request = _context6.sent;
              getMontant();
              getFacture();
              table_facture.ajax.reload(null, false);
              icon.removeClass("fa-spinner fa-spin").addClass("fa-window-close");
              _context6.next = 20;
              break;

            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](5);
              message = _context6.t0.response.data;
              Toast.fire({
                icon: "error",
                title: message
              });
              icon.removeClass("fa-spinner fa-spin").addClass("fa-window-close");

            case 20:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[5, 15]]);
    }));

    return function (_x3) {
      return _ref6.apply(this, arguments);
    };
  }()); ////////////////////delete all

  $("body").on("click", ".detaille_cloture", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var icon, id_det, request, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              icon = $(this).find("i");
              icon.removeClass("fa-window-close").addClass("fa-spinner fa-spin");
              id_det = $(this).attr("id");
              _context7.prev = 4;
              _context7.next = 7;
              return axios.post("/facture/factures/cloture_detaille/" + id_det);

            case 7:
              request = _context7.sent;
              getMontant();
              getFacture();
              table_facture.ajax.reload(null, false);
              icon.removeClass("fa-spinner fa-spin").addClass("fa-window-close");
              _context7.next = 18;
              break;

            case 14:
              _context7.prev = 14;
              _context7.t0 = _context7["catch"](4);
              message = _context7.t0.response.data;
              icon.removeClass("fa-spinner fa-spin").addClass("fa-window-close");

            case 18:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[4, 14]]);
    }));

    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }());
  $("body").on("click", "#ajouter", function (e) {
    e.preventDefault();

    if (!id_facture) {
      Toast.fire({
        icon: "error",
        title: "Veuillez selection une ligne!"
      });
      return;
    }

    if (!reglement) {
      Toast.fire({
        icon: "error",
        title: "Cette Facture N'a Aucun Detail!"
      });
      return;
    }

    $("#ajouter_modal").modal("show");
  });
  $("body").on("submit", ".new_facture-form", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();
              formdata = $(this).serialize();
              modalAlert = $("#ajouter_modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".new_facture-form .btn i");
              icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");
              $(".new_facture-form #save_reglement").addClass("disabled").attr("disabled", true); // $("#enregistrer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false)

              _context8.prev = 7;
              _context8.next = 10;
              return axios.post("/facture/factures/ajouter_reglement/" + id_facture, formdata);

            case 10:
              request = _context8.sent;
              data = request.data;
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-success\">Reglement Bien Ajouter</div>");
              $(this).trigger("reset");
              $(".new_facture-form select").val("").trigger("change");
              getMontant();
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin");
              $(".new_facture-form #save_reglement").removeClass("disabled").attr("disabled", false);
              reglement = false;
              table_facture.ajax.reload(null, false);
              window.open("/facture/factures/facture/" + id_facture + "/" + data, "_blank");
              _context8.next = 31;
              break;

            case 23:
              _context8.prev = 23;
              _context8.t0 = _context8["catch"](7);
              message = _context8.t0.response.data;
              console.log(_context8.t0, _context8.t0.response);
              modalAlert.remove();
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
              $(".new_facture-form #save_reglement").removeClass("disabled").attr("disabled", false);

            case 31:
              setTimeout(function () {
                $("#ajouter_modal .modal-body .alert").remove();
              }, 4000);

            case 32:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this, [[7, 23]]);
    }));

    return function (_x5) {
      return _ref8.apply(this, arguments);
    };
  }());
  $("body").on("click", "#imprimer", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();

              if (id_facture) {
                _context9.next = 4;
                break;
              }

              Toast.fire({
                icon: "error",
                title: "Veuillez selection une ligne!"
              });
              return _context9.abrupt("return");

            case 4:
              window.open("/facture/factures/printfacture/" + id_facture, "_blank");

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x6) {
      return _ref9.apply(this, arguments);
    };
  }());
  $("body").on("click", "#releve", /*#__PURE__*/function () {
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
                icon: "error",
                title: "Veuillez selection une ligne!"
              });
              return _context10.abrupt("return");

            case 4:
              window.open("/facture/factures/releve/" + id_facture, "_blank");

            case 5:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x7) {
      return _ref10.apply(this, arguments);
    };
  }());
  $("body").on("click", "#extraction", function () {
    window.open("/facture/factures/extraction_factures", "_blank");
  });
  $("body").on("click", "#extra_frais", function (e) {
    e.preventDefault();
    $("#annee_extraction_frais").modal("show");
  });
  $("body").on("click", "#export_frais", function (e) {
    e.preventDefault();
    var annee = $("#annee").val(); // alert(annee);

    window.open("/facture/factures/extraction_factures_by_annee/" + annee, "_blank");
  });
  $("body").on("click", "#export_non_inscrit", function (e) {
    e.preventDefault();
    var annee = $("#annee").val(); // alert(annee);

    window.open("/facture/factures/extraction_factures_nonInscrits/" + annee, "_blank");
  });
  $("#valider").on("click", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var icon, formData, res, request, _response, message;

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
                icon: "error",
                title: "Veuillez selection une ligne!"
              });
              return _context11.abrupt("return");

            case 4:
              icon = $("#valider i");
              icon.removeClass("fa-lock").addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append("facture", id_facture);
              res = confirm("Vous voulez vraiment valider cette facture ?");

              if (!(res == 1)) {
                _context11.next = 28;
                break;
              }

              _context11.prev = 10;
              _context11.next = 13;
              return axios.post("/facture/factures/valider", formData);

            case 13:
              request = _context11.sent;
              _response = request.data;
              icon.addClass("fa-lock").removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: "success",
                title: _response
              });
              getFacture();
              id_facture = false;
              table_facture.ajax.reload(null, false);
              _context11.next = 28;
              break;

            case 22:
              _context11.prev = 22;
              _context11.t0 = _context11["catch"](10);
              console.log(_context11.t0);
              message = _context11.t0.response.data;
              icon.addClass("fa-lock").removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: "error",
                title: message
              });

            case 28:
              icon.addClass("fa-lock").removeClass("fa-spinner fa-spin");

            case 29:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[10, 22]]);
    }));

    return function (_x8) {
      return _ref11.apply(this, arguments);
    };
  }());
  $("#new_fac_organisme").on("click", /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var formData, res, icon, request, _response2, message;

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
                icon: "error",
                title: 'Veuillez selection une Facture Inscription "Payant"!'
              });
              return _context12.abrupt("return");

            case 4:
              formData = new FormData();
              formData.append("facture", id_facture);
              res = confirm('Vous voulez vraiment Cree une facture "Organisme" ?');

              if (!(res == 1)) {
                _context12.next = 25;
                break;
              }

              icon = $("#new_fac_organisme i");
              icon.removeClass("fa-file-invoice-dollar").addClass("fa-spinner fa-spin");
              _context12.prev = 10;
              _context12.next = 13;
              return axios.post("/facture/factures/new_fac_organisme", formData);

            case 13:
              request = _context12.sent;
              _response2 = request.data;
              icon.addClass("fa-file-invoice-dollar").removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: "success",
                title: _response2
              }); // id_facture = false
              // table_facture.ajax.reload(null, false);

              _context12.next = 25;
              break;

            case 19:
              _context12.prev = 19;
              _context12.t0 = _context12["catch"](10);
              console.log(_context12.t0);
              message = _context12.t0.response.data;
              icon.addClass("fa-file-invoice-dollar").removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: "error",
                title: message
              });

            case 25:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[10, 19]]);
    }));

    return function (_x9) {
      return _ref12.apply(this, arguments);
    };
  }());
  $("#new_fac_payant").on("click", /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
      var formData, res, icon, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault();

              if (id_facture) {
                _context13.next = 4;
                break;
              }

              Toast.fire({
                icon: "error",
                title: 'Veuillez selection une Facture Inscription Source "PYT"!'
              });
              return _context13.abrupt("return");

            case 4:
              formData = new FormData();
              formData.append("facture", id_facture);
              res = confirm('Vous voulez vraiment Cree une facture "Payant" ?');

              if (!(res == 1)) {
                _context13.next = 25;
                break;
              }

              icon = $("#new_fac_payant i");
              icon.removeClass("fa-file-invoice-dollar").addClass("fa-spinner fa-spin");
              _context13.prev = 10;
              _context13.next = 13;
              return axios.post("/facture/factures/new_fac_payant", formData);

            case 13:
              request = _context13.sent;
              _response3 = request.data;
              icon.addClass("fa-file-invoice-dollar").removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: "success",
                title: _response3
              }); // id_facture = false
              // table_facture.ajax.reload(null, false);

              _context13.next = 25;
              break;

            case 19:
              _context13.prev = 19;
              _context13.t0 = _context13["catch"](10);
              console.log(_context13.t0);
              message = _context13.t0.response.data;
              icon.addClass("fa-file-invoice-dollar").removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: "error",
                title: message
              });

            case 25:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[10, 19]]);
    }));

    return function (_x10) {
      return _ref13.apply(this, arguments);
    };
  }());
  $("#annee").on("input", function () {
    var inputYear = parseInt($(this).val());
    var yearPlusOne = inputYear + 1;

    if (!isNaN(yearPlusOne)) {
      $("#year_plus_one").text(yearPlusOne);
    } else {
      $("#year_plus_one").text("");
    }
  }); // ** reinscription factures en masse

  $("#facture-masse").on("click", function (e) {
    e.preventDefault(); // alert("hi");

    $("#facture_en_masse").modal("show");
    $("#facture_en_masse .modal-body .alert").remove();
  });
  $("body").on("click", "#facture_masse_enregistre", /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      var formData, fileInput, modalAlert, icon, request, _response4, message;

      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();
              formData = new FormData();
              fileInput = $("body #file")[0];
              formData.append("file", fileInput.files[0]);
              modalAlert = $("#facture_en_masse .modal-body .alert");
              modalAlert.remove();
              icon = $("#facture_masse_enregistre i");
              icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");
              _context14.prev = 8;
              _context14.next = 11;
              return axios.post("/facture/factures/facturation_reinscription", formData, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });

            case 11:
              request = _context14.sent;
              _response4 = request.data;
              $("#facture_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response4.message, "</p>\n              </div>")); // if (response.count > 0) {
              //   window.open("/" + response.file, "_blank");
              // }

              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
              table_facture.ajax.reload(null, false);
              _context14.next = 25;
              break;

            case 18:
              _context14.prev = 18;
              _context14.t0 = _context14["catch"](8);
              message = _context14.t0.response.data;
              console.log(_context14.t0, _context14.t0.response);
              modalAlert.remove();
              $("#facture_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, null, [[8, 18]]);
    }));

    return function (_x11) {
      return _ref14.apply(this, arguments);
    };
  }());
  $("#facture_canvas").on("click", function () {
    window.open("/facture/factures/canvas", "_blank");
  });
  $("#ouverture_facture").on("click", /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var formData, res, icon, request, _response5, message;

      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              e.preventDefault();

              if (id_facture) {
                _context15.next = 4;
                break;
              }

              Toast.fire({
                icon: "error",
                title: 'Veuillez selection une Facture Inscription Source "PYT"!'
              });
              return _context15.abrupt("return");

            case 4:
              formData = new FormData();
              formData.append("facture", id_facture);
              res = confirm('Vous voulez vraiment ouvrir une facture ?');

              if (!(res == 1)) {
                _context15.next = 26;
                break;
              }

              icon = $("#ouverture_facture i");
              icon.removeClass("fa-file-invoice-dollar").addClass("fa-spinner fa-spin");
              _context15.prev = 10;
              _context15.next = 13;
              return axios.post("/facture/factures/ouverture_facture", formData);

            case 13:
              request = _context15.sent;
              _response5 = request.data;
              icon.addClass("fa-file-invoice-dollar").removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: "success",
                title: _response5
              }); // id_facture = false

              table_facture.ajax.reload(null, false);
              _context15.next = 26;
              break;

            case 20:
              _context15.prev = 20;
              _context15.t0 = _context15["catch"](10);
              console.log(_context15.t0);
              message = _context15.t0.response.data;
              icon.addClass("fa-file-invoice-dollar").removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: "error",
                title: message
              });

            case 26:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[10, 20]]);
    }));

    return function (_x12) {
      return _ref15.apply(this, arguments);
    };
  }());
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_parse-i-2f0119"], () => (__webpack_exec__("./assets/components/facture/facture.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9mYWN0dXJlL2ZhY3R1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiBcInRvcC1lbmRcIixcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBTd2FsLnN0b3BUaW1lcik7XHJcbiAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIFN3YWwucmVzdW1lVGltZXIpO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBsZXQgaWRfZmFjdHVyZSA9IGZhbHNlO1xyXG4gIHZhciB0YWJsZV9mYWN0dXJlID0gJChcIiNkYXRhYmxlc19mYWN0dXJlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgIF0sXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgYWpheDogXCIvZmFjdHVyZS9mYWN0dXJlcy9saXN0XCIsXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2ZhY3R1cmUpLmFkZENsYXNzKFwiYWN0aXZlX2RhdGFiYWxlc1wiKTtcclxuICAgIH0sXHJcbiAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uIChzZXR0aW5ncykge1xyXG4gICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZGF0YWJsZXNfZmFjdHVyZVwiKSkge1xyXG4gICAgICAgIHZhciBkdCA9ICQoXCIjZGF0YWJsZXNfZmFjdHVyZVwiKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICB2YXIgc2V0dGluZ3MgPSBkdC5zZXR0aW5ncygpO1xyXG4gICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuXHJcbiAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDEpLnNlYXJjaChcIlwiKTtcclxuICAgIGxldCByZXNwb25zZSA9IFwiXCI7XHJcbiAgICBpZiAoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgIGlmICgkKFwiI3JlZ2xlbWVudFwiKSAmJiAkKFwiI3JlZ2xlbWVudFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3JlZ2xlbWVudFwiKS52YWwoKSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgLy8gICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygzKS5zZWFyY2goJChcIiNvcmdhbmlzbWVcIikudmFsKCkpXHJcbiAgICAgIC8vIH1cclxuICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2Zvcm1hdGlvbi9cIiArIGlkX2V0YWIpO1xyXG4gICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICBpZiAoJChcIiNyZWdsZW1lbnRcIikgJiYgJChcIiNyZWdsZW1lbnRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygyKS5zZWFyY2goJChcIiNyZWdsZW1lbnRcIikudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmICgkKFwiI29yZ2FuaXNtZVwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgIC8vICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpKVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgfSk7XHJcbiAgJChcIiNmb3JtYXRpb25cIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgIGlmICgkKFwiI3JlZ2xlbWVudFwiKSAmJiAkKFwiI3JlZ2xlbWVudFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgIHRhYmxlX2ZhY3R1cmUuY29sdW1ucygyKS5zZWFyY2goJChcIiNyZWdsZW1lbnRcIikudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgIC8vICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjb3JnYW5pc21lXCIpLnZhbCgpKTtcclxuICAgIC8vIH1cclxuICAgIGxldCByZXNwb25zZSA9IFwiXCI7XHJcbiAgICBpZiAoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvcHJvbW90aW9uL1wiICsgaWRfZm9ybWF0aW9uKTtcclxuICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjcmVnbGVtZW50XCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlkX3JlZ2xlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICB0YWJsZV9mYWN0dXJlLmNvbHVtbnMoMikuc2VhcmNoKGlkX3JlZ2xlbWVudCkuZHJhdygpO1xyXG4gIH0pO1xyXG4gIC8vICQoXCIjb3JnYW5pc21lXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAvLyAgICAgY29uc3QgaWRfb3JnYW5pc21lID0gJCh0aGlzKS52YWwoKTtcclxuICAvLyAgICAgdGFibGVfZmFjdHVyZS5jb2x1bW5zKDMpLnNlYXJjaChpZF9vcmdhbmlzbWUpLmRyYXcoKTtcclxuICAvLyB9KVxyXG4gIGxldCByZWdsZW1lbnQgPSBmYWxzZTtcclxuICBjb25zdCBnZXRNb250YW50ID0gKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcIi9mYWN0dXJlL2ZhY3R1cmVzL2dldE1vbnRhbnQvXCIgKyBpZF9mYWN0dXJlKVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHJlZ2xlbWVudCA9IG51bGw7XHJcbiAgICAgICAgJChcIiNham91dGVyXCIpXHJcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tcHJpbWFyeVwiKVxyXG4gICAgICAgICAgLmFkZENsYXNzKFwiYnRuLXNlY29uZGFyeVwiKVxyXG4gICAgICAgICAgLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3MuZGF0YSAhPSBcInZpZGVcIikge1xyXG4gICAgICAgICAgcmVnbGVtZW50ID0gMTI7XHJcbiAgICAgICAgICAvLyAkKFwiI21vbnRhbnRcIikudmFsKHN1Y2Nlc3MuZGF0YVsnbW9udGFudCddKTtcclxuICAgICAgICAgIC8vICQoXCIjbW9udGFudDJcIikudmFsKHN1Y2Nlc3MuZGF0YVsnbW9udGFudCddKTtcclxuICAgICAgICAgICQoXCIjbW9udGFudF9mYWN0dXJlXCIpLnZhbChzdWNjZXNzLmRhdGFbXCJtb250YW50X2ZhY3R1cmVcIl0pO1xyXG4gICAgICAgICAgJChcIiNham91dGVyXCIpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIilcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiYnRuLXByaW1hcnlcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBnZXRGYWN0dXJlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjZmFjdHVyZSBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLW1vbmV5LWJpbGwtYWx0XCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcIi9mYWN0dXJlL2ZhY3R1cmVzL2RldGFpbGxlX2ZhY3R1cmUvXCIgKyBpZF9mYWN0dXJlKVxyXG4gICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIGlmIChzdWNjZXNzLmRhdGFbMF0gPT0gMCkge1xyXG4gICAgICAgICAgJChcIi5tb2RhbC1mYWN0dXJlICNhZGRfZGV0YWlsbGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgICAkKFwiLm1vZGFsLWZhY3R1cmUgI2FkZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICAgICAgICQoXCIubW9kYWwtZmFjdHVyZSAjZGV0YWlsbGVfYWN0aXZlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgJChcIi5tb2RhbC1mYWN0dXJlICNkZWxldGVfZGV0YWlsbGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoXCIubW9kYWwtZmFjdHVyZSAjYWRkX2RldGFpbGxlXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAgICQoXCIubW9kYWwtZmFjdHVyZSAjYWRkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xyXG4gICAgICAgICAgJChcIi5tb2RhbC1mYWN0dXJlICNkZXRhaWxsZV9hY3RpdmVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgJChcIi5tb2RhbC1mYWN0dXJlICNkZWxldGVfZGV0YWlsbGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiLnRhYmxlX2RldGFpbGxlX2ZhY3R1cmUgdGJvZHlcIikuaHRtbChzdWNjZXNzLmRhdGFbMV0pO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIikuYWRkQ2xhc3MoXCJmYS1tb25leS1iaWxsLWFsdFwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWNjZXNzLmRhdGFbMF0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgLy8gY29uc3QgZ2V0T3JnYW5pc21lQnlGYWN0dXJlID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBpZihpZF9mYWN0dXJlKXtcclxuICAvLyAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvb3JnYW5pc21lLycraWRfZmFjdHVyZSk7XHJcbiAgLy8gICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gIC8vICAgICAgICAgJCgnI29yZycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAvLyAgICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgY29uc3QgbG9hZF9mcmFpc19wcmVpbnMgPSAoKSA9PiB7XHJcbiAgICBpZiAoaWRfZmFjdHVyZSkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoXCIvZmFjdHVyZS9mYWN0dXJlcy9hcnRpY2xlX2ZyYWlzL1wiICsgaWRfZmFjdHVyZSlcclxuICAgICAgICAudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzcy5kYXRhWzBdKTtcclxuICAgICAgICAgIGlmIChzdWNjZXNzLmRhdGFbMF0gPT0gMCkge1xyXG4gICAgICAgICAgICAkKFwiI2RldGFpbF9mYWN0dXJlX21vZGFsICNvcmdEaXZcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkZXRhaWxfZmFjdHVyZV9tb2RhbCAjb3JnRGl2XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJChcIiNkZXRhaWxfZmFjdHVyZV9tb2RhbCAjZnJhaXNcIikuaHRtbChzdWNjZXNzLmRhdGFbMV0pLnNlbGVjdDIoKTtcclxuICAgICAgICAgICQoXCIjZGV0YWlsX2ZhY3R1cmVfbW9kYWwgI21vbnRhbnR0XCIpLnZhbChcIlwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNkYXRhYmxlc19mYWN0dXJlIHRib2R5IHRyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZV9kYXRhYmFsZXNcIikpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZV9kYXRhYmFsZXNcIik7XHJcbiAgICAgIGlkX2ZhY3R1cmUgPSBudWxsO1xyXG4gICAgICByZWdsZW1lbnQgPSBudWxsO1xyXG4gICAgICAkKFwiI2Fqb3V0ZXJcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tcHJpbWFyeVwiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIilcclxuICAgICAgICAuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIjZGF0YWJsZXNfZmFjdHVyZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZV9kYXRhYmFsZXNcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVfZGF0YWJhbGVzXCIpO1xyXG4gICAgICBpZF9mYWN0dXJlID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlkX2ZhY3R1cmUpO1xyXG4gICAgICAvLyBnZXRPcmdhbmlzbWVCeUZhY3R1cmUoKVxyXG4gICAgICBnZXRNb250YW50KCk7XHJcbiAgICAgIGdldEZhY3R1cmUoKTtcclxuICAgICAgbG9hZF9mcmFpc19wcmVpbnMoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNmYWN0dXJlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWlkX2ZhY3R1cmUpIHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKFwiI2RldGFpbF9mYWN0dXJlX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICB9KTtcclxuXHJcbiAgJChcImlucHV0W3R5cGU9cmFkaW9dW25hbWU9b3JnYW5dXCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy52YWx1ZSA9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2dldG9yZ2FuaXNtZXBhc1BheWFudFwiKTtcclxuICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIuc2VsZWN0LW9yZ2FuICNvcmdcIikuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAkKFwiLnNlbGVjdC1vcmdhblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnNlbGVjdC1vcmdhbiAjb3JnXCIpLmh0bWwoXCJcIik7XHJcbiAgICAgICQoXCIuc2VsZWN0LW9yZ2FuXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiLm1vZGFsLWZhY3R1cmUgI2ZyYWlzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZnJhaXMgPSAkKHRoaXMpLmZpbmQoXCI6c2VsZWN0ZWRcIikuYXR0cihcImRhdGEtaWRcIik7XHJcbiAgICBpZiAoZnJhaXMgIT0gXCJcIikge1xyXG4gICAgICAkKFwiLm1vZGFsLWZhY3R1cmUgI21vbnRhbnR0XCIpLnZhbCgpO1xyXG4gICAgfVxyXG4gICAgJChcIi5tb2RhbC1mYWN0dXJlICNtb250YW50dFwiKS52YWwoZnJhaXMpO1xyXG4gIH0pO1xyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjYWRkX2RldGFpbGxlXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpY29uID0gJCh0aGlzKS5maW5kKFwiaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1wbHVzXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgLy8gbGV0IG9yZ2FuaXNtZV9pZCAgPSAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS52YWwoKTtcclxuICAgIC8vIGlmICgkKFwiaW5wdXRbbmFtZT0nb3JnYW4nXTpjaGVja2VkXCIpLnZhbCgpID09IDEpIHtcclxuICAgIC8vICAgICBvcmdhbmlzbWVfaWQgPSA3XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmcmFpc1wiLCAkKFwiI2ZyYWlzXCIpLnZhbCgpKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcIm1vbnRhbnRcIiwgJChcIiNtb250YW50dFwiKS52YWwoKSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpY2VcIiwgJChcIiNpY2VcIikudmFsKCkpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwib3JnYW5pc21lVHlwZVwiLCAkKFwiI29yZ2FuaXNtZVR5cGVcIikudmFsKCkpO1xyXG5cclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIi5tb2RhbC1mYWN0dXJlIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcIi9mYWN0dXJlL2ZhY3R1cmVzL2FkZF9kZXRhaWxsZS9cIiArIGlkX2ZhY3R1cmUsXHJcbiAgICAgICAgZm9ybURhdGFcclxuICAgICAgKTtcclxuICAgICAgZ2V0RmFjdHVyZSgpO1xyXG4gICAgICBsb2FkX2ZyYWlzX3ByZWlucygpO1xyXG4gICAgICAkKFwiLm1vZGFsLWZhY3R1cmUgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5GYWN0dXJlIEJpZW4gQWpvdXRlcjwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgJChcInNlbGVjdFwiKS52YWwoXCJcIik7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIikuYWRkQ2xhc3MoXCJmYS1wbHVzXCIpO1xyXG4gICAgICBnZXRNb250YW50KCk7XHJcbiAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICQoXCIubW9kYWwtZmFjdHVyZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKS5hZGRDbGFzcyhcImZhLXBsdXNcIik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1mYWN0dXJlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDQwMDApO1xyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vZGVsZXRlIGFsbFxyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjZGVsZXRlX2RldGFpbGxlXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBhbGVydChpZF9mYWN0dXJlKVxyXG4gICAgLy8gbGV0IGlkX2RldCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuXHJcbiAgICB2YXIgcmVzID0gY29uZmlybShcIlZvdXMgdm91bGV6IHZyYWltZW50IGRlc2FjdGl2ZXIgdG91dCBsZXMgZnJhaXMgP1wiKTtcclxuICAgIGlmIChyZXMgPT0gMSkge1xyXG4gICAgICBjb25zdCBpY29uID0gJCh0aGlzKS5maW5kKFwiaVwiKTtcclxuICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLXdpbmRvdy1jbG9zZVwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgIFwiL2ZhY3R1cmUvZmFjdHVyZXMvY2xvdHVyZV9hbGxfZGV0YWlsbGUvXCIgKyBpZF9mYWN0dXJlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBnZXRNb250YW50KCk7XHJcbiAgICAgICAgZ2V0RmFjdHVyZSgpO1xyXG4gICAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIikuYWRkQ2xhc3MoXCJmYS13aW5kb3ctY2xvc2VcIik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpLmFkZENsYXNzKFwiZmEtd2luZG93LWNsb3NlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy9kZWxldGUgYWxsXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5kZXRhaWxsZV9jbG90dXJlXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpY29uID0gJCh0aGlzKS5maW5kKFwiaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS13aW5kb3ctY2xvc2VcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICBsZXQgaWRfZGV0ID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcIi9mYWN0dXJlL2ZhY3R1cmVzL2Nsb3R1cmVfZGV0YWlsbGUvXCIgKyBpZF9kZXRcclxuICAgICAgKTtcclxuICAgICAgZ2V0TW9udGFudCgpO1xyXG4gICAgICBnZXRGYWN0dXJlKCk7XHJcbiAgICAgIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpLmFkZENsYXNzKFwiZmEtd2luZG93LWNsb3NlXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIikuYWRkQ2xhc3MoXCJmYS13aW5kb3ctY2xvc2VcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNham91dGVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWlkX2ZhY3R1cmUpIHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlZ2xlbWVudCkge1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiQ2V0dGUgRmFjdHVyZSBOJ2EgQXVjdW4gRGV0YWlsIVwiLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJChcIiNham91dGVyX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICB9KTtcclxuXHJcbiAgJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgXCIubmV3X2ZhY3R1cmUtZm9ybVwiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZvcm1kYXRhID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIi5uZXdfZmFjdHVyZS1mb3JtIC5idG4gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAkKFwiLm5ld19mYWN0dXJlLWZvcm0gI3NhdmVfcmVnbGVtZW50XCIpXHJcbiAgICAgIC5hZGRDbGFzcyhcImRpc2FibGVkXCIpXHJcbiAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAvLyAkKFwiI2VucmVnaXN0cmVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1pbmZvJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiL2ZhY3R1cmUvZmFjdHVyZXMvYWpvdXRlcl9yZWdsZW1lbnQvXCIgKyBpZF9mYWN0dXJlLFxyXG4gICAgICAgIGZvcm1kYXRhXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlJlZ2xlbWVudCBCaWVuIEFqb3V0ZXI8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgICQodGhpcykudHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICAkKFwiLm5ld19mYWN0dXJlLWZvcm0gc2VsZWN0XCIpLnZhbChcIlwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICBnZXRNb250YW50KCk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICQoXCIubmV3X2ZhY3R1cmUtZm9ybSAjc2F2ZV9yZWdsZW1lbnRcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKVxyXG4gICAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICByZWdsZW1lbnQgPSBmYWxzZTtcclxuICAgICAgdGFibGVfZmFjdHVyZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgIHdpbmRvdy5vcGVuKFxyXG4gICAgICAgIFwiL2ZhY3R1cmUvZmFjdHVyZXMvZmFjdHVyZS9cIiArIGlkX2ZhY3R1cmUgKyBcIi9cIiArIGRhdGEsXHJcbiAgICAgICAgXCJfYmxhbmtcIlxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICQoXCIubmV3X2ZhY3R1cmUtZm9ybSAjc2F2ZV9yZWdsZW1lbnRcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKVxyXG4gICAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCA0MDAwKTtcclxuICB9KTtcclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2ltcHJpbWVyXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWlkX2ZhY3R1cmUpIHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbihcIi9mYWN0dXJlL2ZhY3R1cmVzL3ByaW50ZmFjdHVyZS9cIiArIGlkX2ZhY3R1cmUsIFwiX2JsYW5rXCIpO1xyXG4gIH0pO1xyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjcmVsZXZlXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWlkX2ZhY3R1cmUpIHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbihcIi9mYWN0dXJlL2ZhY3R1cmVzL3JlbGV2ZS9cIiArIGlkX2ZhY3R1cmUsIFwiX2JsYW5rXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2V4dHJhY3Rpb25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgd2luZG93Lm9wZW4oXCIvZmFjdHVyZS9mYWN0dXJlcy9leHRyYWN0aW9uX2ZhY3R1cmVzXCIsIFwiX2JsYW5rXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2V4dHJhX2ZyYWlzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKFwiI2FubmVlX2V4dHJhY3Rpb25fZnJhaXNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gIH0pO1xyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjZXhwb3J0X2ZyYWlzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgYW5uZWUgPSAkKFwiI2FubmVlXCIpLnZhbCgpO1xyXG4gICAgLy8gYWxlcnQoYW5uZWUpO1xyXG4gICAgd2luZG93Lm9wZW4oXHJcbiAgICAgIFwiL2ZhY3R1cmUvZmFjdHVyZXMvZXh0cmFjdGlvbl9mYWN0dXJlc19ieV9hbm5lZS9cIiArIGFubmVlLFxyXG4gICAgICBcIl9ibGFua1wiXHJcbiAgICApO1xyXG4gIH0pO1xyXG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjZXhwb3J0X25vbl9pbnNjcml0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgYW5uZWUgPSAkKFwiI2FubmVlXCIpLnZhbCgpO1xyXG4gICAgLy8gYWxlcnQoYW5uZWUpO1xyXG4gICAgd2luZG93Lm9wZW4oXHJcbiAgICAgIFwiL2ZhY3R1cmUvZmFjdHVyZXMvZXh0cmFjdGlvbl9mYWN0dXJlc19ub25JbnNjcml0cy9cIiArIGFubmVlLFxyXG4gICAgICBcIl9ibGFua1wiXHJcbiAgICApO1xyXG4gIH0pO1xyXG4gICQoXCIjdmFsaWRlclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWlkX2ZhY3R1cmUpIHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpY29uID0gJChcIiN2YWxpZGVyIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtbG9ja1wiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmFjdHVyZVwiLCBpZF9mYWN0dXJlKTtcclxuICAgIHZhciByZXMgPSBjb25maXJtKFwiVm91cyB2b3VsZXogdnJhaW1lbnQgdmFsaWRlciBjZXR0ZSBmYWN0dXJlID9cIik7XHJcbiAgICBpZiAocmVzID09IDEpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9mYWN0dXJlL2ZhY3R1cmVzL3ZhbGlkZXJcIiwgZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1sb2NrXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2V0RmFjdHVyZSgpO1xyXG4gICAgICAgIGlkX2ZhY3R1cmUgPSBmYWxzZTtcclxuICAgICAgICB0YWJsZV9mYWN0dXJlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWxvY2tcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWNvbi5hZGRDbGFzcyhcImZhLWxvY2tcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgfSk7XHJcbiAgJChcIiNuZXdfZmFjX29yZ2FuaXNtZVwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWlkX2ZhY3R1cmUpIHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBGYWN0dXJlIEluc2NyaXB0aW9uIFwiUGF5YW50XCIhJyxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmFjdHVyZVwiLCBpZF9mYWN0dXJlKTtcclxuICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBDcmVlIHVuZSBmYWN0dXJlIFwiT3JnYW5pc21lXCIgPycpO1xyXG4gICAgaWYgKHJlcyA9PSAxKSB7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI25ld19mYWNfb3JnYW5pc21lIGlcIik7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1maWxlLWludm9pY2UtZG9sbGFyXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgXCIvZmFjdHVyZS9mYWN0dXJlcy9uZXdfZmFjX29yZ2FuaXNtZVwiLFxyXG4gICAgICAgICAgZm9ybURhdGFcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIGljb25cclxuICAgICAgICAgIC5hZGRDbGFzcyhcImZhLWZpbGUtaW52b2ljZS1kb2xsYXJcIilcclxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGlkX2ZhY3R1cmUgPSBmYWxzZVxyXG4gICAgICAgIC8vIHRhYmxlX2ZhY3R1cmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBpY29uXHJcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJmYS1maWxlLWludm9pY2UtZG9sbGFyXCIpXHJcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjbmV3X2ZhY19wYXlhbnRcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCFpZF9mYWN0dXJlKSB7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgRmFjdHVyZSBJbnNjcmlwdGlvbiBTb3VyY2UgXCJQWVRcIiEnLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJmYWN0dXJlXCIsIGlkX2ZhY3R1cmUpO1xyXG4gICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IENyZWUgdW5lIGZhY3R1cmUgXCJQYXlhbnRcIiA/Jyk7XHJcbiAgICBpZiAocmVzID09IDEpIHtcclxuICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbmV3X2ZhY19wYXlhbnQgaVwiKTtcclxuICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLWZpbGUtaW52b2ljZS1kb2xsYXJcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBcIi9mYWN0dXJlL2ZhY3R1cmVzL25ld19mYWNfcGF5YW50XCIsXHJcbiAgICAgICAgICBmb3JtRGF0YVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgaWNvblxyXG4gICAgICAgICAgLmFkZENsYXNzKFwiZmEtZmlsZS1pbnZvaWNlLWRvbGxhclwiKVxyXG4gICAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gaWRfZmFjdHVyZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gdGFibGVfZmFjdHVyZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGljb25cclxuICAgICAgICAgIC5hZGRDbGFzcyhcImZhLWZpbGUtaW52b2ljZS1kb2xsYXJcIilcclxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjYW5uZWVcIikub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaW5wdXRZZWFyID0gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSk7XHJcbiAgICB2YXIgeWVhclBsdXNPbmUgPSBpbnB1dFllYXIgKyAxO1xyXG4gICAgaWYgKCFpc05hTih5ZWFyUGx1c09uZSkpIHtcclxuICAgICAgJChcIiN5ZWFyX3BsdXNfb25lXCIpLnRleHQoeWVhclBsdXNPbmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIiN5ZWFyX3BsdXNfb25lXCIpLnRleHQoXCJcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vICoqIHJlaW5zY3JpcHRpb24gZmFjdHVyZXMgZW4gbWFzc2VcclxuXHJcbiAgJChcIiNmYWN0dXJlLW1hc3NlXCIpLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGFsZXJ0KFwiaGlcIik7XHJcbiAgICAkKFwiI2ZhY3R1cmVfZW5fbWFzc2VcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgJChcIiNmYWN0dXJlX2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICB9KTtcclxuXHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNmYWN0dXJlX21hc3NlX2VucmVnaXN0cmVcIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBjb25zdCBmaWxlSW5wdXQgPSAkKFwiYm9keSAjZmlsZVwiKVswXTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZmlsZUlucHV0LmZpbGVzWzBdKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNmYWN0dXJlX2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuXHJcbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjZmFjdHVyZV9tYXNzZV9lbnJlZ2lzdHJlIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiL2ZhY3R1cmUvZmFjdHVyZXMvZmFjdHVyYXRpb25fcmVpbnNjcmlwdGlvblwiLFxyXG4gICAgICAgIGZvcm1EYXRhLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjZmFjdHVyZV9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZS5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIGlmIChyZXNwb25zZS5jb3VudCA+IDApIHtcclxuICAgICAgLy8gICB3aW5kb3cub3BlbihcIi9cIiArIHJlc3BvbnNlLmZpbGUsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICB0YWJsZV9mYWN0dXJlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI2ZhY3R1cmVfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjZmFjdHVyZV9jYW52YXNcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cub3BlbihcIi9mYWN0dXJlL2ZhY3R1cmVzL2NhbnZhc1wiLCBcIl9ibGFua1wiKTtcclxuICB9KTtcclxuICBcclxuICAkKFwiI291dmVydHVyZV9mYWN0dXJlXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghaWRfZmFjdHVyZSkge1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIEZhY3R1cmUgSW5zY3JpcHRpb24gU291cmNlIFwiUFlUXCIhJyxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmFjdHVyZVwiLCBpZF9mYWN0dXJlKTtcclxuICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBvdXZyaXIgdW5lIGZhY3R1cmUgPycpO1xyXG4gICAgaWYgKHJlcyA9PSAxKSB7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI291dmVydHVyZV9mYWN0dXJlIGlcIik7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1maWxlLWludm9pY2UtZG9sbGFyXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgXCIvZmFjdHVyZS9mYWN0dXJlcy9vdXZlcnR1cmVfZmFjdHVyZVwiLFxyXG4gICAgICAgICAgZm9ybURhdGFcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1maWxlLWludm9pY2UtZG9sbGFyXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gaWRfZmFjdHVyZSA9IGZhbHNlXHJcbiAgICAgICAgdGFibGVfZmFjdHVyZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1maWxlLWludm9pY2UtZG9sbGFyXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX2ZhY3R1cmUiLCJ0YWJsZV9mYWN0dXJlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiYWRkQ2xhc3MiLCJwcmVEcmF3Q2FsbGJhY2siLCJzZXR0aW5ncyIsImZuIiwiaXNEYXRhVGFibGUiLCJkdCIsImpxWEhSIiwiYWJvcnQiLCJsYW5ndWFnZSIsInVybCIsInNlbGVjdDIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwicmVzcG9uc2UiLCJkcmF3IiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9yZWdsZW1lbnQiLCJyZWdsZW1lbnQiLCJnZXRNb250YW50IiwidGhlbiIsInN1Y2Nlc3MiLCJyZW1vdmVDbGFzcyIsImF0dHIiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0RmFjdHVyZSIsImljb24iLCJjc3MiLCJsb2FkX2ZyYWlzX3ByZWlucyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwiZmlyZSIsInRpdGxlIiwibW9kYWwiLCJ2YWx1ZSIsImZyYWlzIiwiZmluZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicG9zdCIsInByZXBlbmQiLCJyZWxvYWQiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsInJlcyIsImNvbmZpcm0iLCJpZF9kZXQiLCJmb3JtZGF0YSIsInNlcmlhbGl6ZSIsInRyaWdnZXIiLCJ3aW5kb3ciLCJvcGVuIiwiYW5uZWUiLCJpbnB1dFllYXIiLCJwYXJzZUludCIsInllYXJQbHVzT25lIiwiaXNOYU4iLCJ0ZXh0IiwiZmlsZUlucHV0IiwiZmlsZXMiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==