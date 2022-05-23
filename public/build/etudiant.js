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

  var getAppelRdv = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var icon, request, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $('#rdv1').val("");
              $('#rdv2').val("");
              icon = $("#date-d-appel i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context.prev = 4;
              _context.next = 7;
              return axios.get('/etudiant/etudiants/getAppelRdv/' + id_etudiant);

            case 7:
              request = _context.sent;
              data = request.data;
              $('#rdv1').val(data['rdv1']);
              $('#rdv2').val(data['rdv2']);
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin");
              console.log(data);
              _context.next = 17;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](4);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 15]]);
    }));

    return function getAppelRdv() {
      return _ref.apply(this, arguments);
    };
  }();

  var getEtudiantInfos = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var icon, request, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              $('#modifier_modal #candidats_infos').html('');
              $('#modifier_modal #parents_infos').html('');
              $('#modifier_modal #academique_infos').html('');
              $('#modifier_modal #divers').html('');
              icon = $("#modifier i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context2.prev = 6;
              _context2.next = 9;
              return axios.get('/etudiant/etudiants/getEtudiantInfos/' + id_etudiant);

            case 9:
              request = _context2.sent;
              data = request.data;
              $('#modifier_modal #candidats_infos').html(data['candidats_infos']);
              $('#modifier_modal #parents_infos').html(data['parents_infos']);
              $('#modifier_modal #academique_infos').html(data['academique_infos']);
              $('#modifier_modal #divers').html(data['divers']);
              $('select').select2();
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin");
              console.log(data);
              _context2.next = 22;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](6);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 20]]);
    }));

    return function getEtudiantInfos() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getEtablissement = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var request, data;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios.get('/api/etablissement');

            case 3:
              request = _context3.sent;
              data = request.data;
              $('#etablissement').html(data).select2();
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0.response.data);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    return function getEtablissement() {
      return _ref3.apply(this, arguments);
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
    getAppelRdv();
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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault(); // alert('test');

              formdata = $(this).serialize();
              modalAlert = $("#validermodal .modal-body .alert");
              modalAlert.remove();
              icon = $(".form-valider .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context4.prev = 6;
              _context4.next = 9;
              return axios.post('/etudiant/etudiants/etudiant_valider/' + id_etudiant, formdata);

            case 9:
              request = _context4.sent;
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

              _context4.next = 21;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](6);
              message = _context4.t0.response.data;
              console.log(_context4.t0, _context4.t0.response);
              modalAlert.remove();
              $("#validermodal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 21:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2000);

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[6, 14]]);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
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
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();

              if (!($("#matiereDispo").val() == "" || $("#matiereNote").val() == "")) {
                _context5.next = 4;
                break;
              }

              $(".modal-body").prepend("<div class=\"alert alert-danger\">Veuillez remplir tout les champs</div>");
              return _context5.abrupt("return");

            case 4:
              formdata = new FormData();
              modalAlert = $("#releves-notes-modal .modal-body .alert");
              formdata.append('matiere', $("#matiereDispo").val());
              formdata.append('note', $("#matiereNote").val());
              console.log(formdata);
              $(".modal-body .alert").remove();
              icon = $("#relevenote_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context5.prev = 12;
              _context5.next = 15;
              return axios.post('/etudiant/etudiants/addmatiere/' + id_etudiant, formdata);

            case 15:
              request = _context5.sent;
              data = request.data;
              modalAlert.prepend("<div class=\"alert alert-success\">\n            <p>".concat(data, "</p>\n          </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              loadExistMatieres();
              _context5.next = 29;
              break;

            case 22:
              _context5.prev = 22;
              _context5.t0 = _context5["catch"](12);
              message = _context5.t0.response.data;
              console.log(_context5.t0, _context5.t0.response);
              modalAlert.remove();
              $("#releves-notes-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 29:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2000);

            case 30:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[12, 22]]);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
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
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var modalAlert, icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              modalAlert = $("#importer-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#save_import .btn i"); // const button = $("#import-group-ins .btn");

              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('file', $('.myfile').prop('files')[0]);
              console.log(formData);
              _context6.prev = 8;
              _context6.next = 11;
              return axios.post("/etudiant/etudiants/import", formData, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });

            case 11:
              request = _context6.sent;
              _context6.next = 14;
              return request.data;

            case 14:
              data = _context6.sent;
              $("#importer-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>Nombre d'insertion:<b>".concat(data.inserted, "</b></p>\n            <p<b>").concat(data.existed, "</b> \xE9tudiants exist</p>\n          </div>"));
              console.log(data.existed);

              if (data.existed > 0) {
                window.open("/etudiant/etudiants/download", '_blank');
              }

              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              table.ajax.reload(null, false);
              _context6.next = 29;
              break;

            case 22:
              _context6.prev = 22;
              _context6.t0 = _context6["catch"](8);
              message = _context6.t0.response.data;
              console.log(_context6.t0, _context6.t0.response);
              modalAlert.remove();
              $("#importer-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 29:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500); // $("#save_import")[0].reset();

            case 30:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[8, 22]]);
    }));

    return function (_x3) {
      return _ref6.apply(this, arguments);
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
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#date_appele_save")[0]);
              modalAlert = $("#date-d-appel-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#date_appele_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context7.prev = 6;
              _context7.next = 9;
              return axios.post('/etudiant/etudiants/datedernierappel/' + id_etudiant, formData);

            case 9:
              request = _context7.sent;
              response = request.data;
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>".concat(response, "</p>\n          </div>"));
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
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
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

    return function (_x4) {
      return _ref7.apply(this, arguments);
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
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#change_statut_save")[0]);
              modalAlert = $("#statut-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#change_statut_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context8.prev = 6;
              _context8.next = 9;
              return axios.post('/etudiant/etudiants/statut/persist/' + id_etudiant, formData);

            case 9:
              request = _context8.sent;
              response = request.data;
              $("#statut-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>".concat(response, "</p>\n          </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context8.next = 23;
              break;

            case 16:
              _context8.prev = 16;
              _context8.t0 = _context8["catch"](6);
              message = _context8.t0.response.data;
              console.log(_context8.t0, _context8.t0.response);
              modalAlert.remove();
              $("#statut-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 24:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[6, 16]]);
    }));

    return function (_x5) {
      return _ref8.apply(this, arguments);
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
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var res, formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault(); // alert('et');

              if (id_etudiant) {
                _context9.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir Un Etudiant!'
              });
              return _context9.abrupt("return");

            case 4:
              res = confirm('Vous voulez vraiment modifier cette enregistrement ?');

              if (!(res == 1)) {
                _context9.next = 29;
                break;
              }

              formData = new FormData($('#form_modifier')[0]);
              console.log(formData);
              modalAlert = $("#modifier_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#modifier_modal button i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context9.prev = 12;
              _context9.next = 15;
              return axios.post('/etudiant/etudiants/edit_infos/' + id_etudiant, formData);

            case 15:
              request = _context9.sent;
              response = request.data;
              $("#modifier_modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n              <p>".concat(response, "</p>\n            </div>"));
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context9.next = 29;
              break;

            case 22:
              _context9.prev = 22;
              _context9.t0 = _context9["catch"](12);
              message = _context9.t0.response.data;
              console.log(_context9.t0, _context9.t0.response);
              modalAlert.remove();
              $("#modifier_modal .modal-body").prepend("<div class=\"alert alert-danger\" style=\"width: 98%;margin: 0 auto;\">".concat(message, "</div>"));
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

            case 29:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 30:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[12, 22]]);
    }));

    return function (_x6) {
      return _ref9.apply(this, arguments);
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
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
      var res, formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault();
              res = confirm('Vous voulez vraiment ajouter cette enregistrement ?');

              if (!(res == 1)) {
                _context10.next = 26;
                break;
              }

              formData = new FormData($('#form_ajouter')[0]);
              console.log(formData);
              modalAlert = $("#ajouter_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#ajouter_modal button i");
              icon.removeClass('fa-plus').addClass("fa-spinner fa-spin");
              _context10.prev = 9;
              _context10.next = 12;
              return axios.post('/etudiant/etudiants/add_infos', formData);

            case 12:
              request = _context10.sent;
              response = request.data;
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n              <p>".concat(response, "</p>\n            </div>"));
              icon.addClass('fa-plus').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context10.next = 26;
              break;

            case 19:
              _context10.prev = 19;
              _context10.t0 = _context10["catch"](9);
              message = _context10.t0.response.data;
              console.log(_context10.t0, _context10.t0.response);
              modalAlert.remove();
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-danger\" style=\"width: 98%;margin: 0 auto;\">".concat(message, "</div>"));
              icon.addClass('fa-plus').removeClass("fa-spinner fa-spin ");

            case 26:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 27:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[9, 19]]);
    }));

    return function (_x7) {
      return _ref10.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBckJHO0FBc0JsQ0MsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUFtQixjQUFNSyxRQUF6QjtBQUNBK0IsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ0EvRCxjQUFBQSxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ2lFLE9BQWhDLGtGQUN3RUUsT0FEeEU7QUFHQWhELGNBQUFBLElBQUksQ0FBQ0wsUUFBTCxDQUFjLFNBQWQsRUFBeUJNLFdBQXpCLENBQXFDLHFCQUFyQzs7QUEzQmtDO0FBOEJ0Q2dELGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZwRSxnQkFBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IrRCxNQUF4QjtBQUNELGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBOUJzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF4Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtDRCxDQTFnQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ldHVkaWFudC9ldHVkaWFudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gIHRvYXN0OiB0cnVlLFxyXG4gIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gIHRpbWVyOiAzMDAwLFxyXG4gIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICB9LFxyXG59KVxyXG5sZXQgaWRfZXR1ZGlhbnQgPSBmYWxzZTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcblxyXG4gIHZhciB0YWJsZSA9ICQoXCIjZGF0YWJsZXNfZXR1ZGlhbnRcIikuRGF0YVRhYmxlKHtcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgXSxcclxuICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICBhamF4OiBcIi9ldHVkaWFudC9ldHVkaWFudHMvbGlzdFwiLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmKGlkX2V0dWRpYW50KSB7XHJcbiAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9ldHVkaWFudCkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBnZXRBcHBlbFJkdiA9IGFzeW5jICgpID0+IHtcclxuICAgICQoJyNyZHYxJykudmFsKFwiXCIpO1xyXG4gICAgJCgnI3JkdjInKS52YWwoXCJcIik7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RhdGUtZC1hcHBlbCBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9ldHVkaWFudC9ldHVkaWFudHMvZ2V0QXBwZWxSZHYvJytpZF9ldHVkaWFudCk7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgJCgnI3JkdjEnKS52YWwoZGF0YVsncmR2MSddKTtcclxuICAgICQoJyNyZHYyJykudmFsKGRhdGFbJ3JkdjInXSk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgfSAgXHJcbn1cclxuXHJcbiAgY29uc3QgZ2V0RXR1ZGlhbnRJbmZvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNjYW5kaWRhdHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNwYXJlbnRzX2luZm9zJykuaHRtbCgnJyk7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjYWNhZGVtaXF1ZV9pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoJycpO1xyXG4gICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllciBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2dldEV0dWRpYW50SW5mb3MvJytpZF9ldHVkaWFudCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjY2FuZGlkYXRzX2luZm9zJykuaHRtbChkYXRhWydjYW5kaWRhdHNfaW5mb3MnXSk7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjcGFyZW50c19pbmZvcycpLmh0bWwoZGF0YVsncGFyZW50c19pbmZvcyddKTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNhY2FkZW1pcXVlX2luZm9zJykuaHRtbChkYXRhWydhY2FkZW1pcXVlX2luZm9zJ10pO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoZGF0YVsnZGl2ZXJzJ10pO1xyXG4gICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9ICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEV0YWJsaXNzZW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2V0YWJsaXNzZW1lbnQnKTtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJCgnI2V0YWJsaXNzZW1lbnQnKS5odG1sKGRhdGEpLnNlbGVjdDIoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgIH0gIFxyXG4gIH1cclxuICBjb25zdCBsb2FkRXhpc3RNYXRpZXJlcyA9ICgpID0+IHtcclxuICAgICQoXCIubWF0aWVyZUV4aXN0IHRib2R5XCIpLmh0bWwoJzxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT4nKVxyXG4gICAgYXhpb3MuZ2V0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL21hdGllcmUvJytpZF9ldHVkaWFudClcclxuICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgJChcIi5tYXRpZXJlRXhpc3QgdGJvZHlcIikuaHRtbChzdWNjZXNzLmRhdGEudGFibGUpXHJcbiAgICAgICAgJChcIiNtYXRpZXJlRGlzcG9cIikuaHRtbChzdWNjZXNzLmRhdGEubWF0aWVyZXMpLnNlbGVjdDIoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWNjZXNzKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGxvYWRFdHVkaWFudFN0YXR1dCA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldCgnL2V0dWRpYW50L2V0dWRpYW50cy9zdGF0dXQvJytpZF9ldHVkaWFudClcclxuICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgJChcIiNzdGF0dXRcIikuaHRtbChzdWNjZXNzLmRhdGEpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuICB9XHJcbiAgZ2V0RXRhYmxpc3NlbWVudCgpO1xyXG5cclxuICBsZXQgdGFibGVMaXN0UHJlaW5zY3JpcHRpb247XHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZXR1ZGlhbnQgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICBpZF9ldHVkaWFudCA9IG51bGwsXHJcbiAgICAgICQoJyNkYXRhYmxlc19ldHVkaWFudCB0cicpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoJyNkYXRhYmxlc19ldHVkaWFudCB0cicpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICBpZF9ldHVkaWFudCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIHRhYmxlTGlzdFByZWluc2NyaXB0aW9uID0gJChcIiNkYXRhYmxlc19ldHVkaWFudF9tb2RhbFwiKS5EYXRhVGFibGUoe1xyXG4gICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgIF0sXHJcbiAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgIGFqYXg6IFwiL2V0dWRpYW50L2V0dWRpYW50cy9saXN0L3ByZWluc2NyaXB0aW9uL1wiK2lkX2V0dWRpYW50LFxyXG4gICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgICAgIGJEZXN0cm95OiB0cnVlXHJcbiAgICB9KTsgICAgXHJcbiAgICBsb2FkRXhpc3RNYXRpZXJlcygpO1xyXG4gICAgbG9hZEV0dWRpYW50U3RhdHV0KCk7XHJcbiAgICBnZXRFdHVkaWFudEluZm9zKCk7XHJcbiAgICBnZXRBcHBlbFJkdigpXHJcbiAgfSlcclxuICBcclxuICBsZXQgY2FuY2VsVG9rZW47XHJcbiAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCcjZXRhYmxpc3NlbWVudCcsZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgaWYgKHR5cGVvZiBjYW5jZWxUb2tlbiAhPSB0eXBlb2YgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY2FuY2VsVG9rZW4uY2FuY2VsKFwiT3BlcmF0aW9uIGNhbmNlbGVkIGR1ZSB0byBuZXcgcmVxdWVzdC5cIilcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAvL1NhdmUgdGhlIGNhbmNlbCB0b2tlbiBmb3IgdGhlIGN1cnJlbnQgcmVxdWVzdFxyXG4gICAgY2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbi5zb3VyY2UoKVxyXG4gICAgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIsIHsgY2FuY2VsVG9rZW46IGNhbmNlbFRva2VuLnRva2VuIH0pXHJcbiAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgJCgnLmZvcm1hdGlvbicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHN1Y2Nlc3MuZGF0YSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsJyNmb3JtYXRpb24nLGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgaWRfZm9ybWEgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgYXhpb3MuZ2V0KCcvYXBpL2FubmVlcmVzaWRhbmF0LycraWRfZm9ybWEpXHJcbiAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgaWYoc3VjY2Vzcy5kYXRhICE9PSAxKXtcclxuICAgICAgICAkKCcuYW5uZWUnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgICQoJyNhbm5lZScpLmh0bWwoc3VjY2Vzcy5kYXRhKS5zZWxlY3QyKCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICQoJy5hbm5lZScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJyNlbnJlZ2lzdHJlcicpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsJyNhbm5lZScsZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNlbnJlZ2lzdHJlcicpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcclxuICB9KVxyXG4gIFxyXG4gICQoXCIjdmFsaWRlci1tb2RhbFwiKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZF9ldHVkaWFudCk7XHJcbiAgICBpZighaWRfZXR1ZGlhbnQpe1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKFwiI3ZhbGlkZXJtb2RhbCAubW9kYWwtYm9keSAjYW5uZWUsI3ZhbGlkZXJtb2RhbCAubW9kYWwtYm9keSAjZm9ybWF0aW9uXCIpLmVtcHR5KCk7XHJcbiAgICAkKCcjdmFsaWRlcm1vZGFsJykubW9kYWwoXCJzaG93XCIpXHJcbiAgfSlcclxuICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsJy5mb3JtLXZhbGlkZXInLGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBhbGVydCgndGVzdCcpO1xyXG4gICAgbGV0IGZvcm1kYXRhID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjdmFsaWRlcm1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIi5mb3JtLXZhbGlkZXIgLmJ0biBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9ldHVkaWFudF92YWxpZGVyLycraWRfZXR1ZGlhbnQsZm9ybWRhdGEpXHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgIGlmIChkYXRhID09PSAxKSB7XHJcbiAgICAgICAgJChcIiN2YWxpZGVybW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+RXR1ZGlhbnQgZMOpamEgaW5zY3JpdCBkYW5zIGxhIG1lbWUgZm9ybWF0aW9uPC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICQoXCIjdmFsaWRlcm1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj4ke2RhdGF9PC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gbW9kYWxBbGVydC5wcmVwZW5kKFxyXG4gICAgICAgIC8vICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgLy8gICAgICAgPHA+JHtkYXRhfTwvcD5cclxuICAgICAgICAvLyAgICAgPC9kaXY+YFxyXG4gICAgICAgIC8vICk7ICBcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0YWJsZUxpc3RQcmVpbnNjcmlwdGlvbi5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgJChcIiN2YWxpZGVybW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH0gXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDIwMDApICBcclxuICB9KVxyXG5cclxuICAkKCcjcmVsZXZlX25vdGUnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZighaWRfZXR1ZGlhbnQpe1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKFwiI3JlbGV2ZXMtbm90ZXMtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gIH0pXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCAnI3JlbGV2ZW5vdGVfc2F2ZScsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZigkKFwiI21hdGllcmVEaXNwb1wiKS52YWwoKSA9PSBcIlwiIHx8ICQoXCIjbWF0aWVyZU5vdGVcIikudmFsKCkgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlZldWlsbGV6IHJlbXBsaXIgdG91dCBsZXMgY2hhbXBzPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjcmVsZXZlcy1ub3Rlcy1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoJ21hdGllcmUnLCAkKFwiI21hdGllcmVEaXNwb1wiKS52YWwoKSlcclxuICAgIGZvcm1kYXRhLmFwcGVuZCgnbm90ZScsICQoXCIjbWF0aWVyZU5vdGVcIikudmFsKCkpXHJcbiAgICBjb25zb2xlLmxvZyhmb3JtZGF0YSk7XHJcbiAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjcmVsZXZlbm90ZV9zYXZlIC5idG4gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9ldHVkaWFudC9ldHVkaWFudHMvYWRkbWF0aWVyZS8nK2lkX2V0dWRpYW50LGZvcm1kYXRhKVxyXG4gICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICBtb2RhbEFsZXJ0LnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIDxwPiR7ZGF0YX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7ICBcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGxvYWRFeGlzdE1hdGllcmVzKCk7XHJcbiAgICAgICBcclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI3JlbGV2ZXMtbm90ZXMtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjAwMClcclxuXHJcbiAgfSlcclxuICAkKFwiYm9keVwiKS5vbignY2xpY2snLCAnLmRlbGV0ZV9tYXRpZXJlJywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJmYS10cmFzaFwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KFwiL2V0dWRpYW50L2V0dWRpYW50cy9tYXRpZXJlL2RlbGV0ZS9cIitpZClcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgXHJcbiAgICAgIGxvYWRFeGlzdE1hdGllcmVzKCk7XHJcbiAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAkKCcjZXR1ZGlhbnRfaW1wb3J0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgJChcIiNpbXBvcnRlci1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSlcclxuICAkKCcjc2F2ZV9pbXBvcnQnKS5vbignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNpbXBvcnRlci1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNzYXZlX2ltcG9ydCAuYnRuIGlcIik7XHJcbiAgICAvLyBjb25zdCBidXR0b24gPSAkKFwiI2ltcG9ydC1ncm91cC1pbnMgLmJ0blwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCAkKCcubXlmaWxlJykucHJvcCgnZmlsZXMnKVswXSk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9ldHVkaWFudC9ldHVkaWFudHMvaW1wb3J0XCIsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjaW1wb3J0ZXItbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPHA+Tm9tYnJlIGQnaW5zZXJ0aW9uOjxiPiR7ZGF0YS5pbnNlcnRlZH08L2I+PC9wPlxyXG4gICAgICAgICAgICA8cDxiPiR7ZGF0YS5leGlzdGVkfTwvYj4gw6l0dWRpYW50cyBleGlzdDwvcD5cclxuICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5leGlzdGVkKTtcclxuICAgICAgaWYoZGF0YS5leGlzdGVkID4gMCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2V0dWRpYW50L2V0dWRpYW50cy9kb3dubG9hZFwiLCAnX2JsYW5rJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI2ltcG9ydGVyLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDI1MDApIFxyXG4gIFxyXG4gICAgLy8gJChcIiNzYXZlX2ltcG9ydFwiKVswXS5yZXNldCgpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgJChcIiNkYXRlLWQtYXBwZWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZighaWRfZXR1ZGlhbnQpe1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKFwiI2RhdGUtZC1hcHBlbC1tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICB9KVxyXG5cclxuICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjZGF0ZV9hcHBlbGVfc2F2ZVwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjZGF0ZV9hcHBlbGVfc2F2ZVwiKVswXSk7XHJcbiAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG5cclxuICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNkYXRlX2FwcGVsZV9zYXZlIC5idG4gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9kYXRlZGVybmllcmFwcGVsLycraWRfZXR1ZGlhbnQsIGZvcm1EYXRhKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDI1MDApIFxyXG4gICBcclxuICB9KVxyXG5cclxuICAkKFwiI2V0dWRpYW50X3N0YXR1dFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjc3RhdHV0LW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gIH0pXHJcbiAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsIFwiI2NoYW5nZV9zdGF0dXRfc2F2ZVwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjY2hhbmdlX3N0YXR1dF9zYXZlXCIpWzBdKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNzdGF0dXQtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcblxyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2NoYW5nZV9zdGF0dXRfc2F2ZSAuYnRuIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL3N0YXR1dC9wZXJzaXN0LycraWRfZXR1ZGlhbnQsIGZvcm1EYXRhKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjc3RhdHV0LW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjc3RhdHV0LW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDI1MDApIFxyXG4gIH0pXHJcbiAgJCgnLm5hdi1waWxscyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgJCh0aGlzKS50YWIoJ3Nob3cnKTtcclxuICB9KVxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCcjbW9kaWZpZXInLGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJCgnI21vZGlmaWVyX21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gIH0pXHJcbiAgXHJcbiAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsIFwiI2Zvcm1fbW9kaWZpZXJcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGFsZXJ0KCdldCcpO1xyXG4gICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgVW4gRXR1ZGlhbnQhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBtb2RpZmllciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKCcjZm9ybV9tb2RpZmllcicpWzBdKTtcclxuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjbW9kaWZpZXJfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyX21vZGFsIGJ1dHRvbiBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldHVkaWFudC9ldHVkaWFudHMvZWRpdF9pbmZvcy8nK2lkX2V0dWRpYW50LCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPlxyXG4gICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDI1MDApICBcclxuICB9KVxyXG4gICQoXCJib2R5XCIpLm9uKCdjbGljaycsIFwiI2Fqb3V0ZXJcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICQoJyNham91dGVyX21vZGFsICNjYW5kaWRhdHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgIC8vICQoJyNham91dGVyX21vZGFsICNwYXJlbnRzX2luZm9zJykuaHRtbCgnJyk7XHJcbiAgICAvLyAkKCcjYWpvdXRlcl9tb2RhbCAjYWNhZGVtaXF1ZV9pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgLy8gJCgnI2Fqb3V0ZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoJycpO1xyXG4gICAgJCgnI2Fqb3V0ZXJfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSlcclxuICBcclxuICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjZm9ybV9ham91dGVyXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgYWpvdXRlciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKCcjZm9ybV9ham91dGVyJylbMF0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICBjb25zdCBpY29uID0gJChcIiNham91dGVyX21vZGFsIGJ1dHRvbiBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1wbHVzJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldHVkaWFudC9ldHVkaWFudHMvYWRkX2luZm9zJywgZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPlxyXG4gICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1wbHVzJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXBsdXMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgIFxyXG4gIH0pXHJcbn0pIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX2V0dWRpYW50IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJhZGRDbGFzcyIsImxhbmd1YWdlIiwidXJsIiwiZ2V0QXBwZWxSZHYiLCJ2YWwiLCJpY29uIiwicmVtb3ZlQ2xhc3MiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldEV0dWRpYW50SW5mb3MiLCJodG1sIiwic2VsZWN0MiIsImdldEV0YWJsaXNzZW1lbnQiLCJyZXNwb25zZSIsImxvYWRFeGlzdE1hdGllcmVzIiwidGhlbiIsInN1Y2Nlc3MiLCJtYXRpZXJlcyIsImVyciIsImxvYWRFdHVkaWFudFN0YXR1dCIsInRhYmxlTGlzdFByZWluc2NyaXB0aW9uIiwib24iLCJoYXNDbGFzcyIsImF0dHIiLCJzdGF0ZVNhdmUiLCJiRGVzdHJveSIsImNhbmNlbFRva2VuIiwiaWRfZXRhYiIsInVuZGVmaW5lZCIsImNhbmNlbCIsIkNhbmNlbFRva2VuIiwic291cmNlIiwidG9rZW4iLCJjc3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJpZF9mb3JtYSIsInJlbW92ZUF0dHIiLCJmaXJlIiwidGl0bGUiLCJlbXB0eSIsIm1vZGFsIiwiZm9ybWRhdGEiLCJzZXJpYWxpemUiLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicG9zdCIsInByZXBlbmQiLCJyZWxvYWQiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaWQiLCJlcnJvciIsImZvcm1EYXRhIiwicHJvcCIsImhlYWRlcnMiLCJpbnNlcnRlZCIsImV4aXN0ZWQiLCJ3aW5kb3ciLCJvcGVuIiwidGFiIiwicmVzIiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=