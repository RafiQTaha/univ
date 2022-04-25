(self["webpackChunk"] = self["webpackChunk"] || []).push([["etudiant"],{

/***/ "./assets/components/etudiant/etudiant.js":
/*!************************************************!*\
  !*** ./assets/components/etudiant/etudiant.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
var id_etudiant = false;
$(document).ready(function () {
  var table = $("#datables_etudiant").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/etudiant/etudiants/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      if (id_etudiant) {
        $("body tr#" + id_etudiant).addClass('active_databales');
      }
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });

  var getEtudiantInfos = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var request, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $('#modifier_modal #candidats_infos').html('');
              $('#modifier_modal #parents_infos').html('');
              $('#modifier_modal #academique_infos').html('');
              $('#modifier_modal #divers').html('');
              _context.prev = 4;
              _context.next = 7;
              return axios.get('/etudiant/etudiants/getEtudiantInfos/' + id_etudiant);

            case 7:
              request = _context.sent;
              data = request.data;
              $('#modifier_modal #candidats_infos').html(data['candidats_infos']);
              $('#modifier_modal #parents_infos').html(data['parents_infos']);
              $('#modifier_modal #academique_infos').html(data['academique_infos']);
              $('#modifier_modal #divers').html(data['divers']);
              $('select').select2();
              console.log(data);
              _context.next = 19;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](4);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 17]]);
    }));

    return function getEtudiantInfos() {
      return _ref.apply(this, arguments);
    };
  }();

  var getEtablissement = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var request, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios.get('/api/etablissement');

            case 3:
              request = _context2.sent;
              data = request.data;
              $('#etablissement').html(data).select2();
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0.response.data);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function getEtablissement() {
      return _ref2.apply(this, arguments);
    };
  }();

  var loadExistMatieres = function loadExistMatieres() {
    $(".matiereExist tbody").html('<i class="fas fa-spinner fa-spin"></i>');
    axios.get('/etudiant/etudiants/matiere/' + id_etudiant).then(function (success) {
      $(".matiereExist tbody").html(success.data.table);
      $("#matiereDispo").html(success.data.matieres).select2(); // console.log(success)
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var loadEtudiantStatut = function loadEtudiantStatut() {
    axios.get('/etudiant/etudiants/statut/' + id_etudiant).then(function (success) {
      $("#statut").html(success.data);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  getEtablissement();
  var tableListPreinscription;
  $('body').on('click', '#datables_etudiant tbody tr', function () {
    if ($(this).hasClass('active_databales')) {
      id_etudiant = null, $('#datables_etudiant tr').removeClass('active_databales');
      return;
    }

    $('#datables_etudiant tr').removeClass('active_databales');
    $(this).addClass('active_databales');
    id_etudiant = $(this).attr('id');
    tableListPreinscription = $("#datables_etudiant_modal").DataTable({
      lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
      order: [[0, "desc"]],
      ajax: "/etudiant/etudiants/list/preinscription/" + id_etudiant,
      processing: true,
      serverSide: true,
      deferRender: true,
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
      },
      stateSave: true,
      bDestroy: true
    });
    loadExistMatieres();
    loadEtudiantStatut();
    getEtudiantInfos();
  });
  var cancelToken;
  $('body').on('change', '#etablissement', function () {
    var id_etab = $(this).val();

    if (_typeof(cancelToken) != ( true ? "undefined" : 0)) {
      cancelToken.cancel("Operation canceled due to new request.");
    } //Save the cancel token for the current request


    cancelToken = axios.CancelToken.source();
    axios.get('/api/formation/' + id_etab, {
      cancelToken: cancelToken.token
    }).then(function (success) {
      $('.formation').css('display', 'block');
      $('#formation').html(success.data).select2();
    });
  });
  $('body').on('change', '#formation', function (e) {
    e.preventDefault();
    var id_forma = $(this).val();
    axios.get('/api/anneeresidanat/' + id_forma).then(function (success) {
      if (success.data !== 1) {
        $('.annee').css('display', 'block');
        $('#annee').html(success.data).select2();
      } else {
        $('.annee').css('display', 'none');
      }
    });
    $('#enregistrer').removeAttr("disabled");
  });
  $('body').on('change', '#annee', function (e) {
    e.preventDefault();
    $('#enregistrer').removeAttr("disabled");
  });
  $("#valider-modal").on('click', function () {
    console.log(id_etudiant);

    if (!id_etudiant) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#validermodal .modal-body #annee,#validermodal .modal-body #formation").empty();
    $('#validermodal').modal("show");
  });
  $('body').on('submit', '.form-valider', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault(); // alert('test');

              formdata = $(this).serialize();
              modalAlert = $("#validermodal .modal-body .alert");
              modalAlert.remove();
              icon = $(".form-valider .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context3.prev = 6;
              _context3.next = 9;
              return axios.post('/etudiant/etudiants/etudiant_valider/' + id_etudiant, formdata);

            case 9:
              request = _context3.sent;
              data = request.data;

              if (data === 1) {
                $("#validermodal .modal-body").prepend("<div class=\"alert alert-danger\">Etudiant d\xE9ja inscrit dans la meme formation</div>");
                icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              } else {
                $("#validermodal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>")); // modalAlert.prepend(
                //   `<div class="alert alert-success">
                //       <p>${data}</p>
                //     </div>`
                // );  

                icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
                tableListPreinscription.ajax.reload(null, false);
                table.ajax.reload(null, false);
              }

              _context3.next = 21;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](6);
              message = _context3.t0.response.data;
              console.log(_context3.t0, _context3.t0.response);
              modalAlert.remove();
              $("#validermodal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 21:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2000);

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[6, 14]]);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
  $('#releve_note').on('click', function () {
    if (!id_etudiant) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#releves-notes-modal").modal("show");
  });
  $("body").on('submit', '#relevenote_save', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();

              if (!($("#matiereDispo").val() == "" || $("#matiereNote").val() == "")) {
                _context4.next = 4;
                break;
              }

              $(".modal-body").prepend("<div class=\"alert alert-danger\">Veuillez remplir tout les champs</div>");
              return _context4.abrupt("return");

            case 4:
              formdata = new FormData();
              modalAlert = $("#releves-notes-modal .modal-body .alert");
              formdata.append('matiere', $("#matiereDispo").val());
              formdata.append('note', $("#matiereNote").val());
              console.log(formdata);
              $(".modal-body .alert").remove();
              icon = $("#relevenote_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context4.prev = 12;
              _context4.next = 15;
              return axios.post('/etudiant/etudiants/addmatiere/' + id_etudiant, formdata);

            case 15:
              request = _context4.sent;
              data = request.data;
              modalAlert.prepend("<div class=\"alert alert-success\">\n            <p>".concat(data, "</p>\n          </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              loadExistMatieres();
              _context4.next = 29;
              break;

            case 22:
              _context4.prev = 22;
              _context4.t0 = _context4["catch"](12);
              message = _context4.t0.response.data;
              console.log(_context4.t0, _context4.t0.response);
              modalAlert.remove();
              $("#releves-notes-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 29:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2000);

            case 30:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[12, 22]]);
    }));

    return function (_x2) {
      return _ref4.apply(this, arguments);
    };
  }());
  $("body").on('click', '.delete_matiere', function () {
    var id = $(this).attr("id");
    $(this).removeClass("fa-trash").addClass("fa-spinner fa-spin");

    try {
      var request = axios.post("/etudiant/etudiants/matiere/delete/" + id);
      var data = request.data;
      loadExistMatieres();
    } catch (error) {
      console.log(error.response.data);
    }
  });
  $('#etudiant_import').on('click', function () {
    $("#importer-modal").modal("show");
  });
  $('#save_import').on('submit', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var modalAlert, icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              modalAlert = $("#importer-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#save_import .btn i"); // const button = $("#import-group-ins .btn");

              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('file', $('.myfile').prop('files')[0]);
              console.log(formData);
              _context5.prev = 8;
              _context5.next = 11;
              return axios.post("/etudiant/etudiants/import", formData, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });

            case 11:
              request = _context5.sent;
              _context5.next = 14;
              return request.data;

            case 14:
              data = _context5.sent;
              $("#importer-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>Nombre d'insertion:<b>".concat(data.inserted, "</b></p>\n            <p<b>").concat(data.existed, "</b> \xE9tudiants exist</p>\n          </div>"));
              console.log(data.existed);

              if (data.existed > 0) {
                window.open("/etudiant/etudiants/download", '_blank');
              }

              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              table.ajax.reload(null, false);
              _context5.next = 29;
              break;

            case 22:
              _context5.prev = 22;
              _context5.t0 = _context5["catch"](8);
              message = _context5.t0.response.data;
              console.log(_context5.t0, _context5.t0.response);
              modalAlert.remove();
              $("#importer-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 29:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500); // $("#save_import")[0].reset();

            case 30:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[8, 22]]);
    }));

    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }());
  $("#date-d-appel").on("click", function () {
    if (!id_etudiant) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#date-d-appel-modal").modal("show");
  });
  $("body").on('submit', "#date_appele_save", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#date_appele_save")[0]);
              modalAlert = $("#date-d-appel-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#date_appele_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context6.prev = 6;
              _context6.next = 9;
              return axios.post('/etudiant/etudiants/datedernierappel/' + id_etudiant, formData);

            case 9:
              request = _context6.sent;
              response = request.data;
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>".concat(response, "</p>\n          </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context6.next = 23;
              break;

            case 16:
              _context6.prev = 16;
              _context6.t0 = _context6["catch"](6);
              message = _context6.t0.response.data;
              console.log(_context6.t0, _context6.t0.response);
              modalAlert.remove();
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 24:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[6, 16]]);
    }));

    return function (_x4) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("#etudiant_statut").on("click", function () {
    if (!id_etudiant) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#statut-modal").modal("show");
  });
  $("body").on('submit', "#change_statut_save", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#change_statut_save")[0]);
              modalAlert = $("#statut-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#change_statut_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context7.prev = 6;
              _context7.next = 9;
              return axios.post('/etudiant/etudiants/statut/persist/' + id_etudiant, formData);

            case 9:
              request = _context7.sent;
              response = request.data;
              $("#statut-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>".concat(response, "</p>\n          </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context7.next = 23;
              break;

            case 16:
              _context7.prev = 16;
              _context7.t0 = _context7["catch"](6);
              message = _context7.t0.response.data;
              console.log(_context7.t0, _context7.t0.response);
              modalAlert.remove();
              $("#statut-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 24:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[6, 16]]);
    }));

    return function (_x5) {
      return _ref7.apply(this, arguments);
    };
  }());
  $('.nav-pills a').on('click', function (e) {
    $(this).tab('show');
  });
  $('body').on('click', '#modifier', function () {
    if (!id_etudiant) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $('#modifier_modal').modal("show");
  });
  $("body").on('submit', "#form_modifier", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var res, formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault(); // alert('et');

              if (id_etudiant) {
                _context8.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir Un Etudiant!'
              });
              return _context8.abrupt("return");

            case 4:
              res = confirm('Vous voulez vraiment modifier cette enregistrement ?');

              if (!(res == 1)) {
                _context8.next = 29;
                break;
              }

              formData = new FormData($('#form_modifier')[0]);
              console.log(formData);
              modalAlert = $("#modifier_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#modifier_modal button i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context8.prev = 12;
              _context8.next = 15;
              return axios.post('/etudiant/etudiants/edit_infos/' + id_etudiant, formData);

            case 15:
              request = _context8.sent;
              response = request.data;
              $("#modifier_modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n              <p>".concat(response, "</p>\n            </div>"));
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context8.next = 29;
              break;

            case 22:
              _context8.prev = 22;
              _context8.t0 = _context8["catch"](12);
              message = _context8.t0.response.data;
              console.log(_context8.t0, _context8.t0.response);
              modalAlert.remove();
              $("#modifier_modal .modal-body").prepend("<div class=\"alert alert-danger\" style=\"width: 98%;margin: 0 auto;\">".concat(message, "</div>"));
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

            case 29:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 30:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[12, 22]]);
    }));

    return function (_x6) {
      return _ref8.apply(this, arguments);
    };
  }());
  $("body").on('click', "#ajouter", function (e) {
    e.preventDefault(); // $('#ajouter_modal #candidats_infos').html('');
    // $('#ajouter_modal #parents_infos').html('');
    // $('#ajouter_modal #academique_infos').html('');
    // $('#ajouter_modal #divers').html('');

    $('#ajouter_modal').modal("show");
  });
  $("body").on('submit', "#form_ajouter", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var res, formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();
              res = confirm('Vous voulez vraiment ajouter cette enregistrement ?');

              if (!(res == 1)) {
                _context9.next = 26;
                break;
              }

              formData = new FormData($('#form_ajouter')[0]);
              console.log(formData);
              modalAlert = $("#ajouter_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#ajouter_modal button i");
              icon.removeClass('fa-plus').addClass("fa-spinner fa-spin");
              _context9.prev = 9;
              _context9.next = 12;
              return axios.post('/etudiant/etudiants/add_infos', formData);

            case 12:
              request = _context9.sent;
              response = request.data;
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n              <p>".concat(response, "</p>\n            </div>"));
              icon.addClass('fa-plus').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context9.next = 26;
              break;

            case 19:
              _context9.prev = 19;
              _context9.t0 = _context9["catch"](9);
              message = _context9.t0.response.data;
              console.log(_context9.t0, _context9.t0.response);
              modalAlert.remove();
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-danger\" style=\"width: 98%;margin: 0 auto;\">".concat(message, "</div>"));
              icon.addClass('fa-plus').removeClass("fa-spinner fa-spin ");

            case 26:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 27:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[9, 19]]);
    }));

    return function (_x7) {
      return _ref9.apply(this, arguments);
    };
  }());
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_strin-40879e","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-40d38b"], () => (__webpack_exec__("./assets/components/etudiant/etudiant.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQVIsZUFBbUIsYUFBTUUsUUFBekI7QUFDQWtDLGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNBOUQsY0FBQUEsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NnRSxPQUFoQyxrRkFDd0VFLE9BRHhFO0FBR0FYLGNBQUFBLElBQUksQ0FBQ3pDLFFBQUwsQ0FBYyxTQUFkLEVBQXlCdUIsV0FBekIsQ0FBcUMscUJBQXJDOztBQTNCa0M7QUE4QnRDOEIsY0FBQUEsVUFBVSxDQUFDLFlBQU07QUFDZm5FLGdCQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjhELE1BQXhCO0FBQ0QsZUFGUyxFQUVQLElBRk8sQ0FBVjs7QUE5QnNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0NELENBcGZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZXR1ZGlhbnQvZXR1ZGlhbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICB0b2FzdDogdHJ1ZSxcclxuICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICB0aW1lcjogMzAwMCxcclxuICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgfSxcclxufSlcclxubGV0IGlkX2V0dWRpYW50ID0gZmFsc2U7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG5cclxuICB2YXIgdGFibGUgPSAkKFwiI2RhdGFibGVzX2V0dWRpYW50XCIpLkRhdGFUYWJsZSh7XHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgIF0sXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgYWpheDogXCIvZXR1ZGlhbnQvZXR1ZGlhbnRzL2xpc3RcIixcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZihpZF9ldHVkaWFudCkge1xyXG4gICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfZXR1ZGlhbnQpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0RXR1ZGlhbnRJbmZvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNjYW5kaWRhdHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNwYXJlbnRzX2luZm9zJykuaHRtbCgnJyk7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjYWNhZGVtaXF1ZV9pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoJycpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2V0dWRpYW50L2V0dWRpYW50cy9nZXRFdHVkaWFudEluZm9zLycraWRfZXR1ZGlhbnQpO1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2NhbmRpZGF0c19pbmZvcycpLmh0bWwoZGF0YVsnY2FuZGlkYXRzX2luZm9zJ10pO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI3BhcmVudHNfaW5mb3MnKS5odG1sKGRhdGFbJ3BhcmVudHNfaW5mb3MnXSk7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjYWNhZGVtaXF1ZV9pbmZvcycpLmh0bWwoZGF0YVsnYWNhZGVtaXF1ZV9pbmZvcyddKTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNkaXZlcnMnKS5odG1sKGRhdGFbJ2RpdmVycyddKTtcclxuICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0MigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgIH0gIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RXRhYmxpc3NlbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZXRhYmxpc3NlbWVudCcpO1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKCcjZXRhYmxpc3NlbWVudCcpLmh0bWwoZGF0YSkuc2VsZWN0MigpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSAgXHJcbiAgfVxyXG4gIGNvbnN0IGxvYWRFeGlzdE1hdGllcmVzID0gKCkgPT4ge1xyXG4gICAgJChcIi5tYXRpZXJlRXhpc3QgdGJvZHlcIikuaHRtbCgnPGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPicpXHJcbiAgICBheGlvcy5nZXQoJy9ldHVkaWFudC9ldHVkaWFudHMvbWF0aWVyZS8nK2lkX2V0dWRpYW50KVxyXG4gICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAkKFwiLm1hdGllcmVFeGlzdCB0Ym9keVwiKS5odG1sKHN1Y2Nlc3MuZGF0YS50YWJsZSlcclxuICAgICAgICAkKFwiI21hdGllcmVEaXNwb1wiKS5odG1sKHN1Y2Nlc3MuZGF0YS5tYXRpZXJlcykuc2VsZWN0MigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Y2Nlc3MpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuICB9XHJcbiAgY29uc3QgbG9hZEV0dWRpYW50U3RhdHV0ID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL3N0YXR1dC8nK2lkX2V0dWRpYW50KVxyXG4gICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAkKFwiI3N0YXR1dFwiKS5odG1sKHN1Y2Nlc3MuZGF0YSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICBnZXRFdGFibGlzc2VtZW50KCk7XHJcblxyXG4gIGxldCB0YWJsZUxpc3RQcmVpbnNjcmlwdGlvbjtcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19ldHVkaWFudCB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgIGlkX2V0dWRpYW50ID0gbnVsbCxcclxuICAgICAgJCgnI2RhdGFibGVzX2V0dWRpYW50IHRyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJCgnI2RhdGFibGVzX2V0dWRpYW50IHRyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgIGlkX2V0dWRpYW50ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgdGFibGVMaXN0UHJlaW5zY3JpcHRpb24gPSAkKFwiI2RhdGFibGVzX2V0dWRpYW50X21vZGFsXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgXSxcclxuICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgYWpheDogXCIvZXR1ZGlhbnQvZXR1ZGlhbnRzL2xpc3QvcHJlaW5zY3JpcHRpb24vXCIraWRfZXR1ZGlhbnQsXHJcbiAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXRlU2F2ZTogdHJ1ZSxcclxuICAgICAgYkRlc3Ryb3k6IHRydWVcclxuICAgIH0pOyAgICBcclxuICAgIGxvYWRFeGlzdE1hdGllcmVzKCk7XHJcbiAgICBsb2FkRXR1ZGlhbnRTdGF0dXQoKTtcclxuICAgIGdldEV0dWRpYW50SW5mb3MoKTtcclxuICB9KVxyXG4gIFxyXG4gIGxldCBjYW5jZWxUb2tlbjtcclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsJyNldGFibGlzc2VtZW50JyxmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICBpZiAodHlwZW9mIGNhbmNlbFRva2VuICE9IHR5cGVvZiB1bmRlZmluZWQpIHtcclxuICAgICAgICBjYW5jZWxUb2tlbi5jYW5jZWwoXCJPcGVyYXRpb24gY2FuY2VsZWQgZHVlIHRvIG5ldyByZXF1ZXN0LlwiKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIC8vU2F2ZSB0aGUgY2FuY2VsIHRva2VuIGZvciB0aGUgY3VycmVudCByZXF1ZXN0XHJcbiAgICBjYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuLnNvdXJjZSgpXHJcbiAgICBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYiwgeyBjYW5jZWxUb2tlbjogY2FuY2VsVG9rZW4udG9rZW4gfSlcclxuICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAkKCcuZm9ybWF0aW9uJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwoc3VjY2Vzcy5kYXRhKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2hhbmdlJywnI2Zvcm1hdGlvbicsZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBpZF9mb3JtYSA9ICQodGhpcykudmFsKCk7XHJcbiAgICBheGlvcy5nZXQoJy9hcGkvYW5uZWVyZXNpZGFuYXQvJytpZF9mb3JtYSlcclxuICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICBpZihzdWNjZXNzLmRhdGEgIT09IDEpe1xyXG4gICAgICAgICQoJy5hbm5lZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICAgJCgnI2FubmVlJykuaHRtbChzdWNjZXNzLmRhdGEpLnNlbGVjdDIoKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgJCgnLmFubmVlJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnI2VucmVnaXN0cmVyJykucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gIH0pXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2hhbmdlJywnI2FubmVlJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI2VucmVnaXN0cmVyJykucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gIH0pXHJcbiAgXHJcbiAgJChcIiN2YWxpZGVyLW1vZGFsXCIpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkX2V0dWRpYW50KTtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjdmFsaWRlcm1vZGFsIC5tb2RhbC1ib2R5ICNhbm5lZSwjdmFsaWRlcm1vZGFsIC5tb2RhbC1ib2R5ICNmb3JtYXRpb25cIikuZW1wdHkoKTtcclxuICAgICQoJyN2YWxpZGVybW9kYWwnKS5tb2RhbChcInNob3dcIilcclxuICB9KVxyXG4gICQoJ2JvZHknKS5vbignc3VibWl0JywnLmZvcm0tdmFsaWRlcicsYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGFsZXJ0KCd0ZXN0Jyk7XHJcbiAgICBsZXQgZm9ybWRhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiN2YWxpZGVybW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiLmZvcm0tdmFsaWRlciAuYnRuIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2V0dWRpYW50X3ZhbGlkZXIvJytpZF9ldHVkaWFudCxmb3JtZGF0YSlcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgaWYgKGRhdGEgPT09IDEpIHtcclxuICAgICAgICAkKFwiI3ZhbGlkZXJtb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5FdHVkaWFudCBkw6lqYSBpbnNjcml0IGRhbnMgbGEgbWVtZSBmb3JtYXRpb248L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgJChcIiN2YWxpZGVybW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBtb2RhbEFsZXJ0LnByZXBlbmQoXHJcbiAgICAgICAgLy8gICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAvLyAgICAgICA8cD4ke2RhdGF9PC9wPlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj5gXHJcbiAgICAgICAgLy8gKTsgIFxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRhYmxlTGlzdFByZWluc2NyaXB0aW9uLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI3ZhbGlkZXJtb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfSBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjAwMCkgIFxyXG4gIH0pXHJcblxyXG4gICQoJyNyZWxldmVfbm90ZScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjcmVsZXZlcy1ub3Rlcy1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSlcclxuXHJcbiAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsICcjcmVsZXZlbm90ZV9zYXZlJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKCQoXCIjbWF0aWVyZURpc3BvXCIpLnZhbCgpID09IFwiXCIgfHwgJChcIiNtYXRpZXJlTm90ZVwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+VmV1aWxsZXogcmVtcGxpciB0b3V0IGxlcyBjaGFtcHM8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNyZWxldmVzLW5vdGVzLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZCgnbWF0aWVyZScsICQoXCIjbWF0aWVyZURpc3BvXCIpLnZhbCgpKVxyXG4gICAgZm9ybWRhdGEuYXBwZW5kKCdub3RlJywgJChcIiNtYXRpZXJlTm90ZVwiKS52YWwoKSlcclxuICAgIGNvbnNvbGUubG9nKGZvcm1kYXRhKTtcclxuICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNyZWxldmVub3RlX3NhdmUgLmJ0biBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9hZGRtYXRpZXJlLycraWRfZXR1ZGlhbnQsZm9ybWRhdGEpXHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgIG1vZGFsQWxlcnQucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPHA+JHtkYXRhfTwvcD5cclxuICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgKTsgIFxyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgbG9hZEV4aXN0TWF0aWVyZXMoKTtcclxuICAgICAgIFxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjcmVsZXZlcy1ub3Rlcy1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCAyMDAwKVxyXG5cclxuICB9KVxyXG4gICQoXCJib2R5XCIpLm9uKCdjbGljaycsICcuZGVsZXRlX21hdGllcmUnLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImZhLXRyYXNoXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QoXCIvZXR1ZGlhbnQvZXR1ZGlhbnRzL21hdGllcmUvZGVsZXRlL1wiK2lkKVxyXG4gICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICBcclxuICAgICAgbG9hZEV4aXN0TWF0aWVyZXMoKTtcclxuICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gICQoJyNldHVkaWFudF9pbXBvcnQnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAkKFwiI2ltcG9ydGVyLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICB9KVxyXG4gICQoJyNzYXZlX2ltcG9ydCcpLm9uKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydGVyLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI3NhdmVfaW1wb3J0IC5idG4gaVwiKTtcclxuICAgIC8vIGNvbnN0IGJ1dHRvbiA9ICQoXCIjaW1wb3J0LWdyb3VwLWlucyAuYnRuXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsICQoJy5teWZpbGUnKS5wcm9wKCdmaWxlcycpWzBdKTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2V0dWRpYW50L2V0dWRpYW50cy9pbXBvcnRcIiwgZm9ybURhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNpbXBvcnRlci1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8cD5Ob21icmUgZCdpbnNlcnRpb246PGI+JHtkYXRhLmluc2VydGVkfTwvYj48L3A+XHJcbiAgICAgICAgICAgIDxwPGI+JHtkYXRhLmV4aXN0ZWR9PC9iPiDDqXR1ZGlhbnRzIGV4aXN0PC9wPlxyXG4gICAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmV4aXN0ZWQpO1xyXG4gICAgICBpZihkYXRhLmV4aXN0ZWQgPiAwKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvZXR1ZGlhbnQvZXR1ZGlhbnRzL2Rvd25sb2FkXCIsICdfYmxhbmsnKTtcclxuICAgICAgfVxyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjaW1wb3J0ZXItbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgXHJcbiAgXHJcbiAgICAvLyAkKFwiI3NhdmVfaW1wb3J0XCIpWzBdLnJlc2V0KCk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAkKFwiI2RhdGUtZC1hcHBlbFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gIH0pXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNkYXRlX2FwcGVsZV9zYXZlXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiNkYXRlX2FwcGVsZV9zYXZlXCIpWzBdKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcblxyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2RhdGVfYXBwZWxlX3NhdmUgLmJ0biBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2RhdGVkZXJuaWVyYXBwZWwvJytpZF9ldHVkaWFudCwgZm9ybURhdGEpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgXHJcbiAgIFxyXG4gIH0pXHJcblxyXG4gICQoXCIjZXR1ZGlhbnRfc3RhdHV0XCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJChcIiNzdGF0dXQtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgfSlcclxuICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjY2hhbmdlX3N0YXR1dF9zYXZlXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiNjaGFuZ2Vfc3RhdHV0X3NhdmVcIilbMF0pO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI3N0YXR1dC1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuXHJcbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjY2hhbmdlX3N0YXR1dF9zYXZlIC5idG4gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldHVkaWFudC9ldHVkaWFudHMvc3RhdHV0L3BlcnNpc3QvJytpZF9ldHVkaWFudCwgZm9ybURhdGEpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNzdGF0dXQtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgJChcIiNzdGF0dXQtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgXHJcbiAgfSlcclxuICAkKCcubmF2LXBpbGxzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKHRoaXMpLnRhYignc2hvdycpO1xyXG4gIH0pXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsJyNtb2RpZmllcicsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKCcjbW9kaWZpZXJfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSlcclxuICBcclxuICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjZm9ybV9tb2RpZmllclwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gYWxlcnQoJ2V0Jyk7XHJcbiAgICBpZighaWRfZXR1ZGlhbnQpe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBVbiBFdHVkaWFudCEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IG1vZGlmaWVyIGNldHRlIGVucmVnaXN0cmVtZW50ID8nKTtcclxuICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoJyNmb3JtX21vZGlmaWVyJylbMF0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNtb2RpZmllcl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXJfbW9kYWwgYnV0dG9uIGlcIik7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9lZGl0X2luZm9zLycraWRfZXR1ZGlhbnQsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+XHJcbiAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgIFxyXG4gIH0pXHJcbiAgJChcImJvZHlcIikub24oJ2NsaWNrJywgXCIjYWpvdXRlclwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gJCgnI2Fqb3V0ZXJfbW9kYWwgI2NhbmRpZGF0c19pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgLy8gJCgnI2Fqb3V0ZXJfbW9kYWwgI3BhcmVudHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgIC8vICQoJyNham91dGVyX21vZGFsICNhY2FkZW1pcXVlX2luZm9zJykuaHRtbCgnJyk7XHJcbiAgICAvLyAkKCcjYWpvdXRlcl9tb2RhbCAjZGl2ZXJzJykuaHRtbCgnJyk7XHJcbiAgICAkKCcjYWpvdXRlcl9tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICB9KVxyXG4gIFxyXG4gICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNmb3JtX2Fqb3V0ZXJcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBham91dGVyIGNldHRlIGVucmVnaXN0cmVtZW50ID8nKTtcclxuICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoJyNmb3JtX2Fqb3V0ZXInKVswXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2Fqb3V0ZXJfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI2Fqb3V0ZXJfbW9kYWwgYnV0dG9uIGlcIik7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXBsdXMnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9hZGRfaW5mb3MnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+XHJcbiAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXBsdXMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPVwid2lkdGg6IDk4JTttYXJnaW46IDAgYXV0bztcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtcGx1cycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCAyNTAwKSAgXHJcbiAgfSlcclxufSkiXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfZXR1ZGlhbnQiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJyZXNwb25zaXZlIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJnZXRFdHVkaWFudEluZm9zIiwiaHRtbCIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJzZWxlY3QyIiwiY29uc29sZSIsImxvZyIsImdldEV0YWJsaXNzZW1lbnQiLCJyZXNwb25zZSIsImxvYWRFeGlzdE1hdGllcmVzIiwidGhlbiIsInN1Y2Nlc3MiLCJtYXRpZXJlcyIsImVyciIsImxvYWRFdHVkaWFudFN0YXR1dCIsInRhYmxlTGlzdFByZWluc2NyaXB0aW9uIiwib24iLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsInN0YXRlU2F2ZSIsImJEZXN0cm95IiwiY2FuY2VsVG9rZW4iLCJpZF9ldGFiIiwidmFsIiwidW5kZWZpbmVkIiwiY2FuY2VsIiwiQ2FuY2VsVG9rZW4iLCJzb3VyY2UiLCJ0b2tlbiIsImNzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlkX2Zvcm1hIiwicmVtb3ZlQXR0ciIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJlbXB0eSIsIm1vZGFsIiwiZm9ybWRhdGEiLCJzZXJpYWxpemUiLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicG9zdCIsInByZXBlbmQiLCJyZWxvYWQiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaWQiLCJlcnJvciIsImZvcm1EYXRhIiwicHJvcCIsImhlYWRlcnMiLCJpbnNlcnRlZCIsImV4aXN0ZWQiLCJ3aW5kb3ciLCJvcGVuIiwidGFiIiwicmVzIiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=