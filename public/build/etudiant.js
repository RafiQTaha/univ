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
var id_etudiant = false; // $('select').select2();

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
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin"); // console.log(data);

              _context.next = 16;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](4);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 14]]);
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
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin"); // console.log(data);

              _context2.next = 21;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](6);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 19]]);
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
              _context3.next = 10;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);

            case 10:
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

  var getNatureDemande = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var request, data;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios.get('/api/nature_demande');

            case 3:
              request = _context4.sent;
              data = request.data;
              $('#naturedemande').html(data).select2();
              _context4.next = 10;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));

    return function getNatureDemande() {
      return _ref4.apply(this, arguments);
    };
  }();

  var loadExistMatieres = function loadExistMatieres() {
    $(".matiereExist tbody").html('<i class="fas fa-spinner fa-spin"></i>');
    axios.get('/etudiant/etudiants/matiere/' + id_etudiant).then(function (success) {
      $(".matiereExist tbody").html(success.data.table);
      $("#matiereDispo").html(success.data.matieres).select2(); // console.log(success)
    })["catch"](function (err) {// console.log(err)
    });
  };

  var loadEtudiantStatut = function loadEtudiantStatut() {
    axios.get('/etudiant/etudiants/statut/' + id_etudiant).then(function (success) {
      $("#statut").html(success.data);
    })["catch"](function (err) {// console.log(err)
    });
  };

  getEtablissement();
  getNatureDemande();
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
    // console.log(id_etudiant);
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
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault(); // alert('test');

              formdata = $(this).serialize();
              modalAlert = $("#validermodal .modal-body .alert");
              modalAlert.remove();
              icon = $(".form-valider .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context5.prev = 6;
              _context5.next = 9;
              return axios.post('/etudiant/etudiants/etudiant_valider/' + id_etudiant, formdata);

            case 9:
              request = _context5.sent;
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

              _context5.next = 20;
              break;

            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](6);
              message = _context5.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#validermodal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 20:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2000);

            case 21:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[6, 14]]);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
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
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();

              if (!($("#matiereDispo").val() == "" || $("#matiereNote").val() == "")) {
                _context6.next = 4;
                break;
              }

              $(".modal-body").prepend("<div class=\"alert alert-danger\">Veuillez remplir tout les champs</div>");
              return _context6.abrupt("return");

            case 4:
              formdata = new FormData();
              modalAlert = $("#releves-notes-modal .modal-body .alert");
              formdata.append('matiere', $("#matiereDispo").val());
              formdata.append('note', $("#matiereNote").val()); // console.log(formdata);

              $(".modal-body .alert").remove();
              icon = $("#relevenote_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context6.prev = 11;
              _context6.next = 14;
              return axios.post('/etudiant/etudiants/addmatiere/' + id_etudiant, formdata);

            case 14:
              request = _context6.sent;
              data = request.data;
              modalAlert.prepend("<div class=\"alert alert-success\">\n            <p>".concat(data, "</p>\n          </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              loadExistMatieres();
              _context6.next = 27;
              break;

            case 21:
              _context6.prev = 21;
              _context6.t0 = _context6["catch"](11);
              message = _context6.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#releves-notes-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 27:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2000);

            case 28:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[11, 21]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("body").on('click', '.delete_matiere', function () {
    var id = $(this).attr("id");
    $(this).removeClass("fa-trash").addClass("fa-spinner fa-spin");

    try {
      var request = axios.post("/etudiant/etudiants/matiere/delete/" + id);
      var data = request.data;
      loadExistMatieres();
    } catch (error) {// console.log(error.response.data)
    }
  });
  $('#etudiant_import').on('click', function () {
    $("#importer-modal").modal("show");
  });
  $('#save_import').on('submit', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var modalAlert, icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              modalAlert = $("#importer-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#save_import .btn i"); // const button = $("#import-group-ins .btn");

              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('file', $('.myfile').prop('files')[0]); // console.log(formData);

              _context7.prev = 7;
              _context7.next = 10;
              return axios.post("/etudiant/etudiants/import", formData, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });

            case 10:
              request = _context7.sent;
              _context7.next = 13;
              return request.data;

            case 13:
              data = _context7.sent;
              $("#importer-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>Nombre d'insertion:<b>".concat(data.inserted, "</b></p>\n            <p<b>").concat(data.existed, "</b> \xE9tudiants exist</p>\n          </div>")); // console.log(data.existed);

              if (data.existed > 0) {
                window.open("/etudiant/etudiants/download", '_blank');
              }

              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              table.ajax.reload(null, false);
              _context7.next = 26;
              break;

            case 20:
              _context7.prev = 20;
              _context7.t0 = _context7["catch"](7);
              message = _context7.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#importer-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 26:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500); // $("#save_import")[0].reset();

            case 27:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[7, 20]]);
    }));

    return function (_x3) {
      return _ref7.apply(this, arguments);
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
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#date_appele_save")[0]);
              modalAlert = $("#date-d-appel-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#date_appele_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context8.prev = 6;
              _context8.next = 9;
              return axios.post('/etudiant/etudiants/datedernierappel/' + id_etudiant, formData);

            case 9:
              request = _context8.sent;
              response = request.data;
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>".concat(response, "</p>\n          </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context8.next = 22;
              break;

            case 16:
              _context8.prev = 16;
              _context8.t0 = _context8["catch"](6);
              message = _context8.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 23:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[6, 16]]);
    }));

    return function (_x4) {
      return _ref8.apply(this, arguments);
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
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#change_statut_save")[0]);
              modalAlert = $("#statut-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#change_statut_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context9.prev = 6;
              _context9.next = 9;
              return axios.post('/etudiant/etudiants/statut/persist/' + id_etudiant, formData);

            case 9:
              request = _context9.sent;
              response = request.data;
              $("#statut-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>".concat(response, "</p>\n          </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context9.next = 22;
              break;

            case 16:
              _context9.prev = 16;
              _context9.t0 = _context9["catch"](6);
              message = _context9.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#statut-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 23:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[6, 16]]);
    }));

    return function (_x5) {
      return _ref9.apply(this, arguments);
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
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
      var res, formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault(); // alert('et');

              if (id_etudiant) {
                _context10.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir Un Etudiant!'
              });
              return _context10.abrupt("return");

            case 4:
              res = confirm('Vous voulez vraiment modifier cette enregistrement ?');

              if (!(res == 1)) {
                _context10.next = 27;
                break;
              }

              formData = new FormData($('#form_modifier')[0]); // console.log(formData);

              modalAlert = $("#modifier_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#modifier_modal button i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context10.prev = 11;
              _context10.next = 14;
              return axios.post('/etudiant/etudiants/edit_infos/' + id_etudiant, formData);

            case 14:
              request = _context10.sent;
              response = request.data;
              $("#modifier_modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n              <p>".concat(response, "</p>\n            </div>"));
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context10.next = 27;
              break;

            case 21:
              _context10.prev = 21;
              _context10.t0 = _context10["catch"](11);
              message = _context10.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#modifier_modal .modal-body").prepend("<div class=\"alert alert-danger\" style=\"width: 98%;margin: 0 auto;\">".concat(message, "</div>"));
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

            case 27:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 28:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[11, 21]]);
    }));

    return function (_x6) {
      return _ref10.apply(this, arguments);
    };
  }());
  $("body").on('click', "#ajouter", function (e) {
    e.preventDefault(); // $('#ajouter_modal #candidats_infos').html('');
    // $('#ajouter_modal #parents_infos').html('');
    // $('#ajouter_modal #academique_infos').html('');
    // $('#ajouter_modal #divers').html('');

    $('#ajouter_modal').modal("show");
    $('select').select2();
  });
  $("body").on('submit', "#form_ajouter", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var res, formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault();
              res = confirm('Vous voulez vraiment ajouter cette enregistrement ?');

              if (!(res == 1)) {
                _context11.next = 24;
                break;
              }

              formData = new FormData($('#form_ajouter')[0]); // console.log(formData);

              modalAlert = $("#ajouter_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#ajouter_modal button i");
              icon.removeClass('fa-plus').addClass("fa-spinner fa-spin");
              _context11.prev = 8;
              _context11.next = 11;
              return axios.post('/etudiant/etudiants/add_infos', formData);

            case 11:
              request = _context11.sent;
              response = request.data;
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n              <p>".concat(response, "</p>\n            </div>"));
              icon.addClass('fa-plus').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context11.next = 24;
              break;

            case 18:
              _context11.prev = 18;
              _context11.t0 = _context11["catch"](8);
              message = _context11.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-danger\" style=\"width: 98%;margin: 0 auto;\">".concat(message, "</div>"));
              icon.addClass('fa-plus').removeClass("fa-spinner fa-spin ");

            case 24:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 25:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[8, 18]]);
    }));

    return function (_x7) {
      return _ref11.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBRCxDQUF3QjZELE1BQXhCO0FBQ0QsZUFGUyxFQUVQLElBRk8sQ0FBVjs7QUE5QnNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0NELENBdGhCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2V0dWRpYW50L2V0dWRpYW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgdG9hc3Q6IHRydWUsXHJcbiAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgdGltZXI6IDMwMDAsXHJcbiAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gIH0sXHJcbn0pXHJcbmxldCBpZF9ldHVkaWFudCA9IGZhbHNlO1xyXG4vLyAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcblxyXG4gIHZhciB0YWJsZSA9ICQoXCIjZGF0YWJsZXNfZXR1ZGlhbnRcIikuRGF0YVRhYmxlKHtcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgXSxcclxuICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICBhamF4OiBcIi9ldHVkaWFudC9ldHVkaWFudHMvbGlzdFwiLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmKGlkX2V0dWRpYW50KSB7XHJcbiAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9ldHVkaWFudCkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBnZXRBcHBlbFJkdiA9IGFzeW5jICgpID0+IHtcclxuICAgICQoJyNyZHYxJykudmFsKFwiXCIpO1xyXG4gICAgJCgnI3JkdjInKS52YWwoXCJcIik7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RhdGUtZC1hcHBlbCBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9ldHVkaWFudC9ldHVkaWFudHMvZ2V0QXBwZWxSZHYvJytpZF9ldHVkaWFudCk7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgJCgnI3JkdjEnKS52YWwoZGF0YVsncmR2MSddKTtcclxuICAgICQoJyNyZHYyJykudmFsKGRhdGFbJ3JkdjInXSk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgfSAgXHJcbn1cclxuXHJcbiAgY29uc3QgZ2V0RXR1ZGlhbnRJbmZvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNjYW5kaWRhdHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNwYXJlbnRzX2luZm9zJykuaHRtbCgnJyk7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjYWNhZGVtaXF1ZV9pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoJycpO1xyXG4gICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllciBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2dldEV0dWRpYW50SW5mb3MvJytpZF9ldHVkaWFudCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjY2FuZGlkYXRzX2luZm9zJykuaHRtbChkYXRhWydjYW5kaWRhdHNfaW5mb3MnXSk7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjcGFyZW50c19pbmZvcycpLmh0bWwoZGF0YVsncGFyZW50c19pbmZvcyddKTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNhY2FkZW1pcXVlX2luZm9zJykuaHRtbChkYXRhWydhY2FkZW1pcXVlX2luZm9zJ10pO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoZGF0YVsnZGl2ZXJzJ10pO1xyXG4gICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9ICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEV0YWJsaXNzZW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2V0YWJsaXNzZW1lbnQnKTtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJCgnI2V0YWJsaXNzZW1lbnQnKS5odG1sKGRhdGEpLnNlbGVjdDIoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgIH0gIFxyXG4gIH1cclxuICBjb25zdCBnZXROYXR1cmVEZW1hbmRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uYXR1cmVfZGVtYW5kZScpO1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKCcjbmF0dXJlZGVtYW5kZScpLmh0bWwoZGF0YSkuc2VsZWN0MigpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSAgXHJcbiAgfVxyXG4gIGNvbnN0IGxvYWRFeGlzdE1hdGllcmVzID0gKCkgPT4ge1xyXG4gICAgJChcIi5tYXRpZXJlRXhpc3QgdGJvZHlcIikuaHRtbCgnPGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPicpXHJcbiAgICBheGlvcy5nZXQoJy9ldHVkaWFudC9ldHVkaWFudHMvbWF0aWVyZS8nK2lkX2V0dWRpYW50KVxyXG4gICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAkKFwiLm1hdGllcmVFeGlzdCB0Ym9keVwiKS5odG1sKHN1Y2Nlc3MuZGF0YS50YWJsZSlcclxuICAgICAgICAkKFwiI21hdGllcmVEaXNwb1wiKS5odG1sKHN1Y2Nlc3MuZGF0YS5tYXRpZXJlcykuc2VsZWN0MigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Y2Nlc3MpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuICB9XHJcbiAgY29uc3QgbG9hZEV0dWRpYW50U3RhdHV0ID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL3N0YXR1dC8nK2lkX2V0dWRpYW50KVxyXG4gICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAkKFwiI3N0YXR1dFwiKS5odG1sKHN1Y2Nlc3MuZGF0YSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICBnZXRFdGFibGlzc2VtZW50KCk7XHJcbiAgZ2V0TmF0dXJlRGVtYW5kZSgpO1xyXG4gIFxyXG4gIGxldCB0YWJsZUxpc3RQcmVpbnNjcmlwdGlvbjtcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19ldHVkaWFudCB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgIGlkX2V0dWRpYW50ID0gbnVsbCxcclxuICAgICAgJCgnI2RhdGFibGVzX2V0dWRpYW50IHRyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJCgnI2RhdGFibGVzX2V0dWRpYW50IHRyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgIGlkX2V0dWRpYW50ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgdGFibGVMaXN0UHJlaW5zY3JpcHRpb24gPSAkKFwiI2RhdGFibGVzX2V0dWRpYW50X21vZGFsXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgXSxcclxuICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgYWpheDogXCIvZXR1ZGlhbnQvZXR1ZGlhbnRzL2xpc3QvcHJlaW5zY3JpcHRpb24vXCIraWRfZXR1ZGlhbnQsXHJcbiAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXRlU2F2ZTogdHJ1ZSxcclxuICAgICAgYkRlc3Ryb3k6IHRydWVcclxuICAgIH0pOyAgICBcclxuICAgIGxvYWRFeGlzdE1hdGllcmVzKCk7XHJcbiAgICBsb2FkRXR1ZGlhbnRTdGF0dXQoKTtcclxuICAgIGdldEV0dWRpYW50SW5mb3MoKTtcclxuICAgIGdldEFwcGVsUmR2KClcclxuICB9KVxyXG4gIFxyXG4gIGxldCBjYW5jZWxUb2tlbjtcclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsJyNldGFibGlzc2VtZW50JyxmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICBpZiAodHlwZW9mIGNhbmNlbFRva2VuICE9IHR5cGVvZiB1bmRlZmluZWQpIHtcclxuICAgICAgICBjYW5jZWxUb2tlbi5jYW5jZWwoXCJPcGVyYXRpb24gY2FuY2VsZWQgZHVlIHRvIG5ldyByZXF1ZXN0LlwiKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIC8vU2F2ZSB0aGUgY2FuY2VsIHRva2VuIGZvciB0aGUgY3VycmVudCByZXF1ZXN0XHJcbiAgICBjYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuLnNvdXJjZSgpXHJcbiAgICBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYiwgeyBjYW5jZWxUb2tlbjogY2FuY2VsVG9rZW4udG9rZW4gfSlcclxuICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAkKCcuZm9ybWF0aW9uJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwoc3VjY2Vzcy5kYXRhKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2hhbmdlJywnI2Zvcm1hdGlvbicsZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBpZF9mb3JtYSA9ICQodGhpcykudmFsKCk7XHJcbiAgICBheGlvcy5nZXQoJy9hcGkvYW5uZWVyZXNpZGFuYXQvJytpZF9mb3JtYSlcclxuICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICBpZihzdWNjZXNzLmRhdGEgIT09IDEpe1xyXG4gICAgICAgICQoJy5hbm5lZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICAgJCgnI2FubmVlJykuaHRtbChzdWNjZXNzLmRhdGEpLnNlbGVjdDIoKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgJCgnLmFubmVlJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnI2VucmVnaXN0cmVyJykucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gIH0pXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2hhbmdlJywnI2FubmVlJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI2VucmVnaXN0cmVyJykucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gIH0pXHJcbiAgXHJcbiAgJChcIiN2YWxpZGVyLW1vZGFsXCIpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGlkX2V0dWRpYW50KTtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjdmFsaWRlcm1vZGFsIC5tb2RhbC1ib2R5ICNhbm5lZSwjdmFsaWRlcm1vZGFsIC5tb2RhbC1ib2R5ICNmb3JtYXRpb25cIikuZW1wdHkoKTtcclxuICAgICQoJyN2YWxpZGVybW9kYWwnKS5tb2RhbChcInNob3dcIilcclxuICB9KVxyXG4gICQoJ2JvZHknKS5vbignc3VibWl0JywnLmZvcm0tdmFsaWRlcicsYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGFsZXJ0KCd0ZXN0Jyk7XHJcbiAgICBsZXQgZm9ybWRhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiN2YWxpZGVybW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiLmZvcm0tdmFsaWRlciAuYnRuIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2V0dWRpYW50X3ZhbGlkZXIvJytpZF9ldHVkaWFudCxmb3JtZGF0YSlcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgaWYgKGRhdGEgPT09IDEpIHtcclxuICAgICAgICAkKFwiI3ZhbGlkZXJtb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5FdHVkaWFudCBkw6lqYSBpbnNjcml0IGRhbnMgbGEgbWVtZSBmb3JtYXRpb248L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgJChcIiN2YWxpZGVybW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBtb2RhbEFsZXJ0LnByZXBlbmQoXHJcbiAgICAgICAgLy8gICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAvLyAgICAgICA8cD4ke2RhdGF9PC9wPlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj5gXHJcbiAgICAgICAgLy8gKTsgIFxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRhYmxlTGlzdFByZWluc2NyaXB0aW9uLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI3ZhbGlkZXJtb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfSBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjAwMCkgIFxyXG4gIH0pXHJcblxyXG4gICQoJyNyZWxldmVfbm90ZScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjcmVsZXZlcy1ub3Rlcy1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSlcclxuXHJcbiAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsICcjcmVsZXZlbm90ZV9zYXZlJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKCQoXCIjbWF0aWVyZURpc3BvXCIpLnZhbCgpID09IFwiXCIgfHwgJChcIiNtYXRpZXJlTm90ZVwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+VmV1aWxsZXogcmVtcGxpciB0b3V0IGxlcyBjaGFtcHM8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNyZWxldmVzLW5vdGVzLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZCgnbWF0aWVyZScsICQoXCIjbWF0aWVyZURpc3BvXCIpLnZhbCgpKVxyXG4gICAgZm9ybWRhdGEuYXBwZW5kKCdub3RlJywgJChcIiNtYXRpZXJlTm90ZVwiKS52YWwoKSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGZvcm1kYXRhKTtcclxuICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNyZWxldmVub3RlX3NhdmUgLmJ0biBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9hZGRtYXRpZXJlLycraWRfZXR1ZGlhbnQsZm9ybWRhdGEpXHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgIG1vZGFsQWxlcnQucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPHA+JHtkYXRhfTwvcD5cclxuICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgKTsgIFxyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgbG9hZEV4aXN0TWF0aWVyZXMoKTtcclxuICAgICAgIFxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjcmVsZXZlcy1ub3Rlcy1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCAyMDAwKVxyXG5cclxuICB9KVxyXG4gICQoXCJib2R5XCIpLm9uKCdjbGljaycsICcuZGVsZXRlX21hdGllcmUnLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImZhLXRyYXNoXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QoXCIvZXR1ZGlhbnQvZXR1ZGlhbnRzL21hdGllcmUvZGVsZXRlL1wiK2lkKVxyXG4gICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICBcclxuICAgICAgbG9hZEV4aXN0TWF0aWVyZXMoKTtcclxuICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gICQoJyNldHVkaWFudF9pbXBvcnQnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAkKFwiI2ltcG9ydGVyLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICB9KVxyXG4gICQoJyNzYXZlX2ltcG9ydCcpLm9uKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydGVyLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI3NhdmVfaW1wb3J0IC5idG4gaVwiKTtcclxuICAgIC8vIGNvbnN0IGJ1dHRvbiA9ICQoXCIjaW1wb3J0LWdyb3VwLWlucyAuYnRuXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsICQoJy5teWZpbGUnKS5wcm9wKCdmaWxlcycpWzBdKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2V0dWRpYW50L2V0dWRpYW50cy9pbXBvcnRcIiwgZm9ybURhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNpbXBvcnRlci1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8cD5Ob21icmUgZCdpbnNlcnRpb246PGI+JHtkYXRhLmluc2VydGVkfTwvYj48L3A+XHJcbiAgICAgICAgICAgIDxwPGI+JHtkYXRhLmV4aXN0ZWR9PC9iPiDDqXR1ZGlhbnRzIGV4aXN0PC9wPlxyXG4gICAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmV4aXN0ZWQpO1xyXG4gICAgICBpZihkYXRhLmV4aXN0ZWQgPiAwKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvZXR1ZGlhbnQvZXR1ZGlhbnRzL2Rvd25sb2FkXCIsICdfYmxhbmsnKTtcclxuICAgICAgfVxyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjaW1wb3J0ZXItbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgXHJcbiAgXHJcbiAgICAvLyAkKFwiI3NhdmVfaW1wb3J0XCIpWzBdLnJlc2V0KCk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAkKFwiI2RhdGUtZC1hcHBlbFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gIH0pXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNkYXRlX2FwcGVsZV9zYXZlXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiNkYXRlX2FwcGVsZV9zYXZlXCIpWzBdKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcblxyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2RhdGVfYXBwZWxlX3NhdmUgLmJ0biBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2RhdGVkZXJuaWVyYXBwZWwvJytpZF9ldHVkaWFudCwgZm9ybURhdGEpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgXHJcbiAgIFxyXG4gIH0pXHJcblxyXG4gICQoXCIjZXR1ZGlhbnRfc3RhdHV0XCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJChcIiNzdGF0dXQtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgfSlcclxuICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjY2hhbmdlX3N0YXR1dF9zYXZlXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiNjaGFuZ2Vfc3RhdHV0X3NhdmVcIilbMF0pO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI3N0YXR1dC1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuXHJcbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjY2hhbmdlX3N0YXR1dF9zYXZlIC5idG4gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldHVkaWFudC9ldHVkaWFudHMvc3RhdHV0L3BlcnNpc3QvJytpZF9ldHVkaWFudCwgZm9ybURhdGEpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNzdGF0dXQtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgJChcIiNzdGF0dXQtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgXHJcbiAgfSlcclxuICAkKCcubmF2LXBpbGxzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKHRoaXMpLnRhYignc2hvdycpO1xyXG4gIH0pXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsJyNtb2RpZmllcicsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKCcjbW9kaWZpZXJfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSlcclxuICBcclxuICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjZm9ybV9tb2RpZmllclwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gYWxlcnQoJ2V0Jyk7XHJcbiAgICBpZighaWRfZXR1ZGlhbnQpe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBVbiBFdHVkaWFudCEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IG1vZGlmaWVyIGNldHRlIGVucmVnaXN0cmVtZW50ID8nKTtcclxuICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoJyNmb3JtX21vZGlmaWVyJylbMF0pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNtb2RpZmllcl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXJfbW9kYWwgYnV0dG9uIGlcIik7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9lZGl0X2luZm9zLycraWRfZXR1ZGlhbnQsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+XHJcbiAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgIFxyXG4gIH0pXHJcbiAgJChcImJvZHlcIikub24oJ2NsaWNrJywgXCIjYWpvdXRlclwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gJCgnI2Fqb3V0ZXJfbW9kYWwgI2NhbmRpZGF0c19pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgLy8gJCgnI2Fqb3V0ZXJfbW9kYWwgI3BhcmVudHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgIC8vICQoJyNham91dGVyX21vZGFsICNhY2FkZW1pcXVlX2luZm9zJykuaHRtbCgnJyk7XHJcbiAgICAvLyAkKCcjYWpvdXRlcl9tb2RhbCAjZGl2ZXJzJykuaHRtbCgnJyk7XHJcbiAgICAkKCcjYWpvdXRlcl9tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcclxuICB9KVxyXG4gIFxyXG4gICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNmb3JtX2Fqb3V0ZXJcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBham91dGVyIGNldHRlIGVucmVnaXN0cmVtZW50ID8nKTtcclxuICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoJyNmb3JtX2Fqb3V0ZXInKVswXSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2Fqb3V0ZXJfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI2Fqb3V0ZXJfbW9kYWwgYnV0dG9uIGlcIik7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXBsdXMnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9hZGRfaW5mb3MnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+XHJcbiAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXBsdXMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPVwid2lkdGg6IDk4JTttYXJnaW46IDAgYXV0bztcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtcGx1cycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCAyNTAwKSAgXHJcbiAgfSlcclxufSkiXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfZXR1ZGlhbnQiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJyZXNwb25zaXZlIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImFkZENsYXNzIiwibGFuZ3VhZ2UiLCJ1cmwiLCJnZXRBcHBlbFJkdiIsInZhbCIsImljb24iLCJyZW1vdmVDbGFzcyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJnZXRFdHVkaWFudEluZm9zIiwiaHRtbCIsInNlbGVjdDIiLCJnZXRFdGFibGlzc2VtZW50IiwiZ2V0TmF0dXJlRGVtYW5kZSIsImxvYWRFeGlzdE1hdGllcmVzIiwidGhlbiIsInN1Y2Nlc3MiLCJtYXRpZXJlcyIsImVyciIsImxvYWRFdHVkaWFudFN0YXR1dCIsInRhYmxlTGlzdFByZWluc2NyaXB0aW9uIiwib24iLCJoYXNDbGFzcyIsImF0dHIiLCJzdGF0ZVNhdmUiLCJiRGVzdHJveSIsImNhbmNlbFRva2VuIiwiaWRfZXRhYiIsInVuZGVmaW5lZCIsImNhbmNlbCIsIkNhbmNlbFRva2VuIiwic291cmNlIiwidG9rZW4iLCJjc3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJpZF9mb3JtYSIsInJlbW92ZUF0dHIiLCJmaXJlIiwidGl0bGUiLCJlbXB0eSIsIm1vZGFsIiwiZm9ybWRhdGEiLCJzZXJpYWxpemUiLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicG9zdCIsInByZXBlbmQiLCJyZWxvYWQiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJpZCIsImVycm9yIiwiZm9ybURhdGEiLCJwcm9wIiwiaGVhZGVycyIsImluc2VydGVkIiwiZXhpc3RlZCIsIndpbmRvdyIsIm9wZW4iLCJ0YWIiLCJyZXMiLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==