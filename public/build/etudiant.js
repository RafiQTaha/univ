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

              _context4.next = 20;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](6);
              message = _context4.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#validermodal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 20:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2000);

            case 21:
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
              formdata.append('note', $("#matiereNote").val()); // console.log(formdata);

              $(".modal-body .alert").remove();
              icon = $("#relevenote_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context5.prev = 11;
              _context5.next = 14;
              return axios.post('/etudiant/etudiants/addmatiere/' + id_etudiant, formdata);

            case 14:
              request = _context5.sent;
              data = request.data;
              modalAlert.prepend("<div class=\"alert alert-success\">\n            <p>".concat(data, "</p>\n          </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              loadExistMatieres();
              _context5.next = 27;
              break;

            case 21:
              _context5.prev = 21;
              _context5.t0 = _context5["catch"](11);
              message = _context5.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#releves-notes-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 27:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2000);

            case 28:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[11, 21]]);
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
    } catch (error) {// console.log(error.response.data)
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
              formData.append('file', $('.myfile').prop('files')[0]); // console.log(formData);

              _context6.prev = 7;
              _context6.next = 10;
              return axios.post("/etudiant/etudiants/import", formData, {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              });

            case 10:
              request = _context6.sent;
              _context6.next = 13;
              return request.data;

            case 13:
              data = _context6.sent;
              $("#importer-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>Nombre d'insertion:<b>".concat(data.inserted, "</b></p>\n            <p<b>").concat(data.existed, "</b> \xE9tudiants exist</p>\n          </div>")); // console.log(data.existed);

              if (data.existed > 0) {
                window.open("/etudiant/etudiants/download", '_blank');
              }

              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              table.ajax.reload(null, false);
              _context6.next = 26;
              break;

            case 20:
              _context6.prev = 20;
              _context6.t0 = _context6["catch"](7);
              message = _context6.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#importer-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 26:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500); // $("#save_import")[0].reset();

            case 27:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[7, 20]]);
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
              _context7.next = 22;
              break;

            case 16:
              _context7.prev = 16;
              _context7.t0 = _context7["catch"](6);
              message = _context7.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 23:
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
              _context8.next = 22;
              break;

            case 16:
              _context8.prev = 16;
              _context8.t0 = _context8["catch"](6);
              message = _context8.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#statut-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
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
                _context9.next = 27;
                break;
              }

              formData = new FormData($('#form_modifier')[0]); // console.log(formData);

              modalAlert = $("#modifier_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#modifier_modal button i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context9.prev = 11;
              _context9.next = 14;
              return axios.post('/etudiant/etudiants/edit_infos/' + id_etudiant, formData);

            case 14:
              request = _context9.sent;
              response = request.data;
              $("#modifier_modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n              <p>".concat(response, "</p>\n            </div>"));
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context9.next = 27;
              break;

            case 21:
              _context9.prev = 21;
              _context9.t0 = _context9["catch"](11);
              message = _context9.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#modifier_modal .modal-body").prepend("<div class=\"alert alert-danger\" style=\"width: 98%;margin: 0 auto;\">".concat(message, "</div>"));
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

            case 27:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 28:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[11, 21]]);
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
    $('select').select2();
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
                _context10.next = 24;
                break;
              }

              formData = new FormData($('#form_ajouter')[0]); // console.log(formData);

              modalAlert = $("#ajouter_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#ajouter_modal button i");
              icon.removeClass('fa-plus').addClass("fa-spinner fa-spin");
              _context10.prev = 8;
              _context10.next = 11;
              return axios.post('/etudiant/etudiants/add_infos', formData);

            case 11:
              request = _context10.sent;
              response = request.data;
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n              <p>".concat(response, "</p>\n            </div>"));
              icon.addClass('fa-plus').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context10.next = 24;
              break;

            case 18:
              _context10.prev = 18;
              _context10.t0 = _context10["catch"](8);
              message = _context10.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#ajouter_modal .modal-body").prepend("<div class=\"alert alert-danger\" style=\"width: 98%;margin: 0 auto;\">".concat(message, "</div>"));
              icon.addClass('fa-plus').removeClass("fa-spinner fa-spin ");

            case 24:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 25:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[8, 18]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjFDLE9BQU8sQ0FBQ0MsSUFaUztBQWFsQ3hCLGNBQUFBLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDOEQsT0FBaEMsc0dBRVdHLFFBRlg7QUFLQTlDLGNBQUFBLElBQUksQ0FBQ0wsUUFBTCxDQUFjLFNBQWQsRUFBeUJNLFdBQXpCLENBQXFDLHFCQUFyQztBQUNBakIsY0FBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVd3RCxNQUFYLENBQWtCLElBQWxCLEVBQXdCLEtBQXhCO0FBbkJrQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCNUJDLGNBQUFBLE9BckI0QixHQXFCbEIsY0FBTUMsUUFBTixDQUFlekMsSUFyQkcsRUFzQmxDOztBQUNBbUMsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ0E1RCxjQUFBQSxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzhELE9BQWhDLGtGQUN3RUUsT0FEeEU7QUFHQTdDLGNBQUFBLElBQUksQ0FBQ0wsUUFBTCxDQUFjLFNBQWQsRUFBeUJNLFdBQXpCLENBQXFDLHFCQUFyQzs7QUEzQmtDO0FBOEJ0QzhDLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZsRSxnQkFBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0I0RCxNQUF4QjtBQUNELGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBOUJzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF4Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtDRCxDQTNnQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ldHVkaWFudC9ldHVkaWFudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gIHRvYXN0OiB0cnVlLFxyXG4gIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gIHRpbWVyOiAzMDAwLFxyXG4gIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICB9LFxyXG59KVxyXG5sZXQgaWRfZXR1ZGlhbnQgPSBmYWxzZTtcclxuLy8gJCgnc2VsZWN0Jykuc2VsZWN0MigpO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG5cclxuICB2YXIgdGFibGUgPSAkKFwiI2RhdGFibGVzX2V0dWRpYW50XCIpLkRhdGFUYWJsZSh7XHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgIF0sXHJcbiAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgYWpheDogXCIvZXR1ZGlhbnQvZXR1ZGlhbnRzL2xpc3RcIixcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZihpZF9ldHVkaWFudCkge1xyXG4gICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfZXR1ZGlhbnQpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0QXBwZWxSZHYgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAkKCcjcmR2MScpLnZhbChcIlwiKTtcclxuICAgICQoJyNyZHYyJykudmFsKFwiXCIpO1xyXG4gICAgICBjb25zdCBpY29uID0gJChcIiNkYXRlLWQtYXBwZWwgaVwiKTtcclxuICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2dldEFwcGVsUmR2LycraWRfZXR1ZGlhbnQpO1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICQoJyNyZHYxJykudmFsKGRhdGFbJ3JkdjEnXSk7XHJcbiAgICAkKCcjcmR2MicpLnZhbChkYXRhWydyZHYyJ10pO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gIH0gIFxyXG59XHJcblxyXG4gIGNvbnN0IGdldEV0dWRpYW50SW5mb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjY2FuZGlkYXRzX2luZm9zJykuaHRtbCgnJyk7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjcGFyZW50c19pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2FjYWRlbWlxdWVfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNkaXZlcnMnKS5odG1sKCcnKTtcclxuICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXIgaVwiKTtcclxuICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2V0dWRpYW50L2V0dWRpYW50cy9nZXRFdHVkaWFudEluZm9zLycraWRfZXR1ZGlhbnQpO1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2NhbmRpZGF0c19pbmZvcycpLmh0bWwoZGF0YVsnY2FuZGlkYXRzX2luZm9zJ10pO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI3BhcmVudHNfaW5mb3MnKS5odG1sKGRhdGFbJ3BhcmVudHNfaW5mb3MnXSk7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjYWNhZGVtaXF1ZV9pbmZvcycpLmh0bWwoZGF0YVsnYWNhZGVtaXF1ZV9pbmZvcyddKTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNkaXZlcnMnKS5odG1sKGRhdGFbJ2RpdmVycyddKTtcclxuICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0MigpO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRFdGFibGlzc2VtZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9ldGFibGlzc2VtZW50Jyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoJyNldGFibGlzc2VtZW50JykuaHRtbChkYXRhKS5zZWxlY3QyKCk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9ICBcclxuICB9XHJcbiAgY29uc3QgbG9hZEV4aXN0TWF0aWVyZXMgPSAoKSA9PiB7XHJcbiAgICAkKFwiLm1hdGllcmVFeGlzdCB0Ym9keVwiKS5odG1sKCc8aSBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+JylcclxuICAgIGF4aW9zLmdldCgnL2V0dWRpYW50L2V0dWRpYW50cy9tYXRpZXJlLycraWRfZXR1ZGlhbnQpXHJcbiAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICQoXCIubWF0aWVyZUV4aXN0IHRib2R5XCIpLmh0bWwoc3VjY2Vzcy5kYXRhLnRhYmxlKVxyXG4gICAgICAgICQoXCIjbWF0aWVyZURpc3BvXCIpLmh0bWwoc3VjY2Vzcy5kYXRhLm1hdGllcmVzKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3VjY2VzcylcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICBjb25zdCBsb2FkRXR1ZGlhbnRTdGF0dXQgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoJy9ldHVkaWFudC9ldHVkaWFudHMvc3RhdHV0LycraWRfZXR1ZGlhbnQpXHJcbiAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICQoXCIjc3RhdHV0XCIpLmh0bWwoc3VjY2Vzcy5kYXRhKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIGdldEV0YWJsaXNzZW1lbnQoKTtcclxuXHJcbiAgbGV0IHRhYmxlTGlzdFByZWluc2NyaXB0aW9uO1xyXG5cclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX2V0dWRpYW50IHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgaWRfZXR1ZGlhbnQgPSBudWxsLFxyXG4gICAgICAkKCcjZGF0YWJsZXNfZXR1ZGlhbnQgdHInKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKCcjZGF0YWJsZXNfZXR1ZGlhbnQgdHInKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgaWRfZXR1ZGlhbnQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICB0YWJsZUxpc3RQcmVpbnNjcmlwdGlvbiA9ICQoXCIjZGF0YWJsZXNfZXR1ZGlhbnRfbW9kYWxcIikuRGF0YVRhYmxlKHtcclxuICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICBdLFxyXG4gICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICBhamF4OiBcIi9ldHVkaWFudC9ldHVkaWFudHMvbGlzdC9wcmVpbnNjcmlwdGlvbi9cIitpZF9ldHVkaWFudCxcclxuICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgfSxcclxuICAgICAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gICAgICBiRGVzdHJveTogdHJ1ZVxyXG4gICAgfSk7ICAgIFxyXG4gICAgbG9hZEV4aXN0TWF0aWVyZXMoKTtcclxuICAgIGxvYWRFdHVkaWFudFN0YXR1dCgpO1xyXG4gICAgZ2V0RXR1ZGlhbnRJbmZvcygpO1xyXG4gICAgZ2V0QXBwZWxSZHYoKVxyXG4gIH0pXHJcbiAgXHJcbiAgbGV0IGNhbmNlbFRva2VuO1xyXG4gICQoJ2JvZHknKS5vbignY2hhbmdlJywnI2V0YWJsaXNzZW1lbnQnLGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGlmICh0eXBlb2YgY2FuY2VsVG9rZW4gIT0gdHlwZW9mIHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNhbmNlbFRva2VuLmNhbmNlbChcIk9wZXJhdGlvbiBjYW5jZWxlZCBkdWUgdG8gbmV3IHJlcXVlc3QuXCIpXHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgLy9TYXZlIHRoZSBjYW5jZWwgdG9rZW4gZm9yIHRoZSBjdXJyZW50IHJlcXVlc3RcclxuICAgIGNhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW4uc291cmNlKClcclxuICAgIGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiLCB7IGNhbmNlbFRva2VuOiBjYW5jZWxUb2tlbi50b2tlbiB9KVxyXG4gICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICQoJy5mb3JtYXRpb24nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChzdWNjZXNzLmRhdGEpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCcjZm9ybWF0aW9uJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGlkX2Zvcm1hID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGF4aW9zLmdldCgnL2FwaS9hbm5lZXJlc2lkYW5hdC8nK2lkX2Zvcm1hKVxyXG4gICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgIGlmKHN1Y2Nlc3MuZGF0YSAhPT0gMSl7XHJcbiAgICAgICAgJCgnLmFubmVlJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgICAkKCcjYW5uZWUnKS5odG1sKHN1Y2Nlc3MuZGF0YSkuc2VsZWN0MigpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAkKCcuYW5uZWUnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCcjZW5yZWdpc3RyZXInKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XHJcbiAgfSlcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCcjYW5uZWUnLGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcjZW5yZWdpc3RyZXInKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XHJcbiAgfSlcclxuICBcclxuICAkKFwiI3ZhbGlkZXItbW9kYWxcIikub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coaWRfZXR1ZGlhbnQpO1xyXG4gICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJChcIiN2YWxpZGVybW9kYWwgLm1vZGFsLWJvZHkgI2FubmVlLCN2YWxpZGVybW9kYWwgLm1vZGFsLWJvZHkgI2Zvcm1hdGlvblwiKS5lbXB0eSgpO1xyXG4gICAgJCgnI3ZhbGlkZXJtb2RhbCcpLm1vZGFsKFwic2hvd1wiKVxyXG4gIH0pXHJcbiAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCcuZm9ybS12YWxpZGVyJyxhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gYWxlcnQoJ3Rlc3QnKTtcclxuICAgIGxldCBmb3JtZGF0YSA9ICQodGhpcykuc2VyaWFsaXplKCk7XHJcbiAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI3ZhbGlkZXJtb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIuZm9ybS12YWxpZGVyIC5idG4gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9ldHVkaWFudC9ldHVkaWFudHMvZXR1ZGlhbnRfdmFsaWRlci8nK2lkX2V0dWRpYW50LGZvcm1kYXRhKVxyXG4gICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICBpZiAoZGF0YSA9PT0gMSkge1xyXG4gICAgICAgICQoXCIjdmFsaWRlcm1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPkV0dWRpYW50IGTDqWphIGluc2NyaXQgZGFucyBsYSBtZW1lIGZvcm1hdGlvbjwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAkKFwiI3ZhbGlkZXJtb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+JHtkYXRhfTwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIG1vZGFsQWxlcnQucHJlcGVuZChcclxuICAgICAgICAvLyAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgIC8vICAgICAgIDxwPiR7ZGF0YX08L3A+XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PmBcclxuICAgICAgICAvLyApOyAgXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdGFibGVMaXN0UHJlaW5zY3JpcHRpb24uYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjdmFsaWRlcm1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9IFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCAyMDAwKSAgXHJcbiAgfSlcclxuXHJcbiAgJCgnI3JlbGV2ZV9ub3RlJykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJChcIiNyZWxldmVzLW5vdGVzLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICB9KVxyXG5cclxuICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgJyNyZWxldmVub3RlX3NhdmUnLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoJChcIiNtYXRpZXJlRGlzcG9cIikudmFsKCkgPT0gXCJcIiB8fCAkKFwiI21hdGllcmVOb3RlXCIpLnZhbCgpID09IFwiXCIpIHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5WZXVpbGxleiByZW1wbGlyIHRvdXQgbGVzIGNoYW1wczwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI3JlbGV2ZXMtbm90ZXMtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgZm9ybWRhdGEuYXBwZW5kKCdtYXRpZXJlJywgJChcIiNtYXRpZXJlRGlzcG9cIikudmFsKCkpXHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoJ25vdGUnLCAkKFwiI21hdGllcmVOb3RlXCIpLnZhbCgpKVxyXG4gICAgLy8gY29uc29sZS5sb2coZm9ybWRhdGEpO1xyXG4gICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI3JlbGV2ZW5vdGVfc2F2ZSAuYnRuIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2FkZG1hdGllcmUvJytpZF9ldHVkaWFudCxmb3JtZGF0YSlcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgbW9kYWxBbGVydC5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8cD4ke2RhdGF9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+YFxyXG4gICAgICApOyAgXHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICBsb2FkRXhpc3RNYXRpZXJlcygpO1xyXG4gICAgICAgXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgJChcIiNyZWxldmVzLW5vdGVzLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDIwMDApXHJcblxyXG4gIH0pXHJcbiAgJChcImJvZHlcIikub24oJ2NsaWNrJywgJy5kZWxldGVfbWF0aWVyZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZmEtdHJhc2hcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdChcIi9ldHVkaWFudC9ldHVkaWFudHMvbWF0aWVyZS9kZWxldGUvXCIraWQpXHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgIFxyXG4gICAgICBsb2FkRXhpc3RNYXRpZXJlcygpO1xyXG4gICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgJCgnI2V0dWRpYW50X2ltcG9ydCcpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICQoXCIjaW1wb3J0ZXItbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gIH0pXHJcbiAgJCgnI3NhdmVfaW1wb3J0Jykub24oJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjaW1wb3J0ZXItbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjc2F2ZV9pbXBvcnQgLmJ0biBpXCIpO1xyXG4gICAgLy8gY29uc3QgYnV0dG9uID0gJChcIiNpbXBvcnQtZ3JvdXAtaW5zIC5idG5cIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgJCgnLm15ZmlsZScpLnByb3AoJ2ZpbGVzJylbMF0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvZXR1ZGlhbnQvZXR1ZGlhbnRzL2ltcG9ydFwiLCBmb3JtRGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiI2ltcG9ydGVyLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIDxwPk5vbWJyZSBkJ2luc2VydGlvbjo8Yj4ke2RhdGEuaW5zZXJ0ZWR9PC9iPjwvcD5cclxuICAgICAgICAgICAgPHA8Yj4ke2RhdGEuZXhpc3RlZH08L2I+IMOpdHVkaWFudHMgZXhpc3Q8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZXhpc3RlZCk7XHJcbiAgICAgIGlmKGRhdGEuZXhpc3RlZCA+IDApIHtcclxuICAgICAgICB3aW5kb3cub3BlbihcIi9ldHVkaWFudC9ldHVkaWFudHMvZG93bmxvYWRcIiwgJ19ibGFuaycpO1xyXG4gICAgICB9XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgJChcIiNpbXBvcnRlci1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCAyNTAwKSBcclxuICBcclxuICAgIC8vICQoXCIjc2F2ZV9pbXBvcnRcIilbMF0ucmVzZXQoKTtcclxuICB9KTtcclxuXHJcblxyXG4gICQoXCIjZGF0ZS1kLWFwcGVsXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJChcIiNkYXRlLWQtYXBwZWwtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgfSlcclxuXHJcbiAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsIFwiI2RhdGVfYXBwZWxlX3NhdmVcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI2RhdGVfYXBwZWxlX3NhdmVcIilbMF0pO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2RhdGUtZC1hcHBlbC1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuXHJcbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjZGF0ZV9hcHBlbGVfc2F2ZSAuYnRuIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldHVkaWFudC9ldHVkaWFudHMvZGF0ZWRlcm5pZXJhcHBlbC8nK2lkX2V0dWRpYW50LCBmb3JtRGF0YSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiI2RhdGUtZC1hcHBlbC1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI2RhdGUtZC1hcHBlbC1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCAyNTAwKSBcclxuICAgXHJcbiAgfSlcclxuXHJcbiAgJChcIiNldHVkaWFudF9zdGF0dXRcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZighaWRfZXR1ZGlhbnQpe1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKFwiI3N0YXR1dC1tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICB9KVxyXG4gICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNjaGFuZ2Vfc3RhdHV0X3NhdmVcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI2NoYW5nZV9zdGF0dXRfc2F2ZVwiKVswXSk7XHJcbiAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjc3RhdHV0LW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG5cclxuICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNjaGFuZ2Vfc3RhdHV0X3NhdmUgLmJ0biBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9zdGF0dXQvcGVyc2lzdC8nK2lkX2V0dWRpYW50LCBmb3JtRGF0YSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiI3N0YXR1dC1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI3N0YXR1dC1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCAyNTAwKSBcclxuICB9KVxyXG4gICQoJy5uYXYtcGlsbHMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICQodGhpcykudGFiKCdzaG93Jyk7XHJcbiAgfSlcclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywnI21vZGlmaWVyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBpZighaWRfZXR1ZGlhbnQpe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoJyNtb2RpZmllcl9tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICB9KVxyXG4gIFxyXG4gICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNmb3JtX21vZGlmaWVyXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBhbGVydCgnZXQnKTtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIFVuIEV0dWRpYW50IScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgbW9kaWZpZXIgY2V0dGUgZW5yZWdpc3RyZW1lbnQgPycpO1xyXG4gICAgaWYocmVzID09IDEpe1xyXG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCgnI2Zvcm1fbW9kaWZpZXInKVswXSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI21vZGlmaWVyX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllcl9tb2RhbCBidXR0b24gaVwiKTtcclxuICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2VkaXRfaW5mb3MvJytpZF9ldHVkaWFudCwgZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPVwid2lkdGg6IDk4JTttYXJnaW46IDAgYXV0bztcIj5cclxuICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPVwid2lkdGg6IDk4JTttYXJnaW46IDAgYXV0bztcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCAyNTAwKSAgXHJcbiAgfSlcclxuICAkKFwiYm9keVwiKS5vbignY2xpY2snLCBcIiNham91dGVyXCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAkKCcjYWpvdXRlcl9tb2RhbCAjY2FuZGlkYXRzX2luZm9zJykuaHRtbCgnJyk7XHJcbiAgICAvLyAkKCcjYWpvdXRlcl9tb2RhbCAjcGFyZW50c19pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgLy8gJCgnI2Fqb3V0ZXJfbW9kYWwgI2FjYWRlbWlxdWVfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgIC8vICQoJyNham91dGVyX21vZGFsICNkaXZlcnMnKS5odG1sKCcnKTtcclxuICAgICQoJyNham91dGVyX21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgJCgnc2VsZWN0Jykuc2VsZWN0MigpO1xyXG4gIH0pXHJcbiAgXHJcbiAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsIFwiI2Zvcm1fYWpvdXRlclwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IGFqb3V0ZXIgY2V0dGUgZW5yZWdpc3RyZW1lbnQgPycpO1xyXG4gICAgaWYocmVzID09IDEpe1xyXG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCgnI2Zvcm1fYWpvdXRlcicpWzBdKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYWpvdXRlcl9tb2RhbCBidXR0b24gaVwiKTtcclxuICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtcGx1cycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2FkZF9pbmZvcycsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKFwiI2Fqb3V0ZXJfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPVwid2lkdGg6IDk4JTttYXJnaW46IDAgYXV0bztcIj5cclxuICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtcGx1cycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAkKFwiI2Fqb3V0ZXJfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1wbHVzJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDI1MDApICBcclxuICB9KVxyXG59KSJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9ldHVkaWFudCIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInJlc3BvbnNpdmUiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiYWRkQ2xhc3MiLCJsYW5ndWFnZSIsInVybCIsImdldEFwcGVsUmR2IiwidmFsIiwiaWNvbiIsInJlbW92ZUNsYXNzIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImdldEV0dWRpYW50SW5mb3MiLCJodG1sIiwic2VsZWN0MiIsImdldEV0YWJsaXNzZW1lbnQiLCJsb2FkRXhpc3RNYXRpZXJlcyIsInRoZW4iLCJzdWNjZXNzIiwibWF0aWVyZXMiLCJlcnIiLCJsb2FkRXR1ZGlhbnRTdGF0dXQiLCJ0YWJsZUxpc3RQcmVpbnNjcmlwdGlvbiIsIm9uIiwiaGFzQ2xhc3MiLCJhdHRyIiwic3RhdGVTYXZlIiwiYkRlc3Ryb3kiLCJjYW5jZWxUb2tlbiIsImlkX2V0YWIiLCJ1bmRlZmluZWQiLCJjYW5jZWwiLCJDYW5jZWxUb2tlbiIsInNvdXJjZSIsInRva2VuIiwiY3NzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaWRfZm9ybWEiLCJyZW1vdmVBdHRyIiwiZmlyZSIsInRpdGxlIiwiZW1wdHkiLCJtb2RhbCIsImZvcm1kYXRhIiwic2VyaWFsaXplIiwibW9kYWxBbGVydCIsInJlbW92ZSIsInBvc3QiLCJwcmVwZW5kIiwicmVsb2FkIiwibWVzc2FnZSIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaWQiLCJlcnJvciIsImZvcm1EYXRhIiwicHJvcCIsImhlYWRlcnMiLCJpbnNlcnRlZCIsImV4aXN0ZWQiLCJ3aW5kb3ciLCJvcGVuIiwidGFiIiwicmVzIiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=