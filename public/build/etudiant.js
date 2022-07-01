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
  }(); // const getNatureDemande = async () => {
  //   try {
  //     const request = await axios.get('/api/nature_demande');
  //     const data = request.data;
  //     $('#naturedemande').html(data).select2();
  //   } catch (error) {
  //     // console.log(error.response.data);
  //   }  
  // }


  getEtablissement(); // getNatureDemande();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXR1ZGlhbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVc7QUFDdkJDLEVBQUFBLEtBQUssRUFBRSxJQURnQjtBQUV2QkMsRUFBQUEsUUFBUSxFQUFFLFNBRmE7QUFHdkJDLEVBQUFBLGlCQUFpQixFQUFFLEtBSEk7QUFJdkJDLEVBQUFBLEtBQUssRUFBRSxJQUpnQjtBQUt2QkMsRUFBQUEsZ0JBQWdCLEVBQUUsSUFMSztBQU12QkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFDTCxLQUFELEVBQVc7QUFDbEJBLElBQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1MsU0FBMUM7QUFDQVAsSUFBQUEsS0FBSyxDQUFDTSxnQkFBTixDQUF1QixZQUF2QixFQUFxQ1IsSUFBSSxDQUFDVSxXQUExQztBQUNEO0FBVHNCLENBQVgsQ0FBZDtBQVdBLElBQUlDLFdBQVcsR0FBRyxLQUFsQixFQUNBOztBQUNBQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQWE7QUFFN0IsTUFBSUMsS0FBSyxHQUFHSCxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QkksU0FBeEIsQ0FBa0M7QUFDNUNDLElBQUFBLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixjQUF0QixDQURVLEVBRVYsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlUsQ0FEZ0M7QUFLNUNDLElBQUFBLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FBRCxDQUxxQztBQU01Q0MsSUFBQUEsSUFBSSxFQUFFLDBCQU5zQztBQU81Q0MsSUFBQUEsVUFBVSxFQUFFLElBUGdDO0FBUTVDQyxJQUFBQSxVQUFVLEVBQUUsSUFSZ0M7QUFTNUNDLElBQUFBLFdBQVcsRUFBRSxJQVQrQjtBQVU1Q0MsSUFBQUEsVUFBVSxFQUFFLElBVmdDO0FBVzVDQyxJQUFBQSxPQUFPLEVBQUUsSUFYbUM7QUFZNUNDLElBQUFBLFlBQVksRUFBRSx3QkFBWTtBQUN4QixVQUFHZCxXQUFILEVBQWdCO0FBQ2RDLFFBQUFBLENBQUMsQ0FBQyxhQUFhRCxXQUFkLENBQUQsQ0FBNEJlLFFBQTVCLENBQXFDLGtCQUFyQztBQUNEO0FBQ0YsS0FoQjJDO0FBaUI1Q0MsSUFBQUEsUUFBUSxFQUFFO0FBQ1JDLE1BQUFBLEdBQUcsRUFBRTtBQURHO0FBakJrQyxHQUFsQyxDQUFaOztBQXNCQSxNQUFNQyxXQUFXO0FBQUEsdUVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCakIsY0FBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXa0IsR0FBWCxDQUFlLEVBQWY7QUFDQWxCLGNBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2tCLEdBQVgsQ0FBZSxFQUFmO0FBQ1FDLGNBQUFBLElBSFUsR0FHSG5CLENBQUMsQ0FBQyxpQkFBRCxDQUhFO0FBSWhCbUIsY0FBQUEsSUFBSSxDQUFDQyxXQUFMLENBQWlCLFNBQWpCLEVBQTRCTixRQUE1QixDQUFxQyxvQkFBckM7QUFKZ0I7QUFBQTtBQUFBLHFCQU1JTyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxxQ0FBbUN2QixXQUE3QyxDQU5KOztBQUFBO0FBTVp3QixjQUFBQSxPQU5ZO0FBT1pDLGNBQUFBLElBUFksR0FPTEQsT0FBTyxDQUFDQyxJQVBIO0FBUWxCeEIsY0FBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXa0IsR0FBWCxDQUFlTSxJQUFJLENBQUMsTUFBRCxDQUFuQjtBQUNBeEIsY0FBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXa0IsR0FBWCxDQUFlTSxJQUFJLENBQUMsTUFBRCxDQUFuQjtBQUNFTCxjQUFBQSxJQUFJLENBQUNMLFFBQUwsQ0FBYyxTQUFkLEVBQXlCTSxXQUF6QixDQUFxQyxvQkFBckMsRUFWZ0IsQ0FXbEI7O0FBWGtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhILFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBa0JBLE1BQU1RLGdCQUFnQjtBQUFBLHdFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQnpCLGNBQUFBLENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDMEIsSUFBdEMsQ0FBMkMsRUFBM0M7QUFDQTFCLGNBQUFBLENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DMEIsSUFBcEMsQ0FBeUMsRUFBekM7QUFDQTFCLGNBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDMEIsSUFBdkMsQ0FBNEMsRUFBNUM7QUFDQTFCLGNBQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCMEIsSUFBN0IsQ0FBa0MsRUFBbEM7QUFDTVAsY0FBQUEsSUFMZSxHQUtSbkIsQ0FBQyxDQUFDLGFBQUQsQ0FMTztBQU1yQm1CLGNBQUFBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixTQUFqQixFQUE0Qk4sUUFBNUIsQ0FBcUMsb0JBQXJDO0FBTnFCO0FBQUE7QUFBQSxxQkFRQ08sS0FBSyxDQUFDQyxHQUFOLENBQVUsMENBQXdDdkIsV0FBbEQsQ0FSRDs7QUFBQTtBQVFmd0IsY0FBQUEsT0FSZTtBQVNmQyxjQUFBQSxJQVRlLEdBU1JELE9BQU8sQ0FBQ0MsSUFUQTtBQVVyQnhCLGNBQUFBLENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDMEIsSUFBdEMsQ0FBMkNGLElBQUksQ0FBQyxpQkFBRCxDQUEvQztBQUNBeEIsY0FBQUEsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0MwQixJQUFwQyxDQUF5Q0YsSUFBSSxDQUFDLGVBQUQsQ0FBN0M7QUFDQXhCLGNBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDMEIsSUFBdkMsQ0FBNENGLElBQUksQ0FBQyxrQkFBRCxDQUFoRDtBQUNBeEIsY0FBQUEsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIwQixJQUE3QixDQUFrQ0YsSUFBSSxDQUFDLFFBQUQsQ0FBdEM7QUFDQXhCLGNBQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWTJCLE9BQVo7QUFDQVIsY0FBQUEsSUFBSSxDQUFDTCxRQUFMLENBQWMsU0FBZCxFQUF5Qk0sV0FBekIsQ0FBcUMsb0JBQXJDLEVBZnFCLENBZ0JyQjs7QUFoQnFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCSyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBdUJBLE1BQU1HLGdCQUFnQjtBQUFBLHdFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQ1AsS0FBSyxDQUFDQyxHQUFOLENBQVUsb0JBQVYsQ0FGRDs7QUFBQTtBQUVmQyxjQUFBQSxPQUZlO0FBR2ZDLGNBQUFBLElBSGUsR0FHUkQsT0FBTyxDQUFDQyxJQUhBO0FBSXJCeEIsY0FBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IwQixJQUFwQixDQUF5QkYsSUFBekIsRUFBK0JHLE9BQS9CO0FBSnFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCQyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEIsQ0FqRTZCLENBMkU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBQSxFQUFBQSxnQkFBZ0IsR0FyRmEsQ0FzRjdCOztBQUVBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QjdCLElBQUFBLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCMEIsSUFBekIsQ0FBOEIsd0NBQTlCO0FBQ0FMLElBQUFBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLGlDQUErQnZCLFdBQXpDLEVBQ0crQixJQURILENBQ1EsVUFBQUMsT0FBTyxFQUFJO0FBQ2YvQixNQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjBCLElBQXpCLENBQThCSyxPQUFPLENBQUNQLElBQVIsQ0FBYXJCLEtBQTNDO0FBQ0FILE1BQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIwQixJQUFuQixDQUF3QkssT0FBTyxDQUFDUCxJQUFSLENBQWFRLFFBQXJDLEVBQStDTCxPQUEvQyxHQUZlLENBR2Y7QUFDRCxLQUxILFdBTVMsVUFBQU0sR0FBRyxFQUFJLENBQ1o7QUFDRCxLQVJIO0FBU0QsR0FYRDs7QUFZQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0JiLElBQUFBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLGdDQUE4QnZCLFdBQXhDLEVBQ0crQixJQURILENBQ1EsVUFBQUMsT0FBTyxFQUFJO0FBQ2YvQixNQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWEwQixJQUFiLENBQWtCSyxPQUFPLENBQUNQLElBQTFCO0FBQ0QsS0FISCxXQUlTLFVBQUFTLEdBQUcsRUFBSSxDQUNaO0FBQ0QsS0FOSDtBQU9ELEdBUkQ7O0FBVUEsTUFBSUUsdUJBQUo7QUFFQW5DLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW9DLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLDZCQUFyQixFQUFtRCxZQUFZO0FBQzdELFFBQUdwQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxQyxRQUFSLENBQWlCLGtCQUFqQixDQUFILEVBQXlDO0FBQ3ZDdEMsTUFBQUEsV0FBVyxHQUFHLElBQWQsRUFDQUMsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJvQixXQUEzQixDQUF1QyxrQkFBdkMsQ0FEQTtBQUVBO0FBQ0Q7O0FBQ0RwQixJQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQm9CLFdBQTNCLENBQXVDLGtCQUF2QztBQUNBcEIsSUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxRQUFSLENBQWlCLGtCQUFqQjtBQUNBZixJQUFBQSxXQUFXLEdBQUdDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNDLElBQVIsQ0FBYSxJQUFiLENBQWQ7QUFDQUgsSUFBQUEsdUJBQXVCLEdBQUduQyxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkksU0FBOUIsQ0FBd0M7QUFDaEVDLE1BQUFBLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixjQUF0QixDQURVLEVBRVYsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlUsQ0FEb0Q7QUFLaEVDLE1BQUFBLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FBRCxDQUx5RDtBQU1oRUMsTUFBQUEsSUFBSSxFQUFFLDZDQUEyQ1IsV0FOZTtBQU9oRVMsTUFBQUEsVUFBVSxFQUFFLElBUG9EO0FBUWhFQyxNQUFBQSxVQUFVLEVBQUUsSUFSb0Q7QUFTaEVDLE1BQUFBLFdBQVcsRUFBRSxJQVRtRDtBQVVoRUssTUFBQUEsUUFBUSxFQUFFO0FBQ1JDLFFBQUFBLEdBQUcsRUFBRTtBQURHLE9BVnNEO0FBYWhFdUIsTUFBQUEsU0FBUyxFQUFFLElBYnFEO0FBY2hFQyxNQUFBQSxRQUFRLEVBQUU7QUFkc0QsS0FBeEMsQ0FBMUI7QUFnQkFYLElBQUFBLGlCQUFpQjtBQUNqQkssSUFBQUEsa0JBQWtCO0FBQ2xCVCxJQUFBQSxnQkFBZ0I7QUFDaEJSLElBQUFBLFdBQVc7QUFDWixHQTdCRDtBQStCQSxNQUFJd0IsV0FBSjtBQUNBekMsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVb0MsRUFBVixDQUFhLFFBQWIsRUFBc0IsZ0JBQXRCLEVBQXVDLFlBQVk7QUFDakQsUUFBSU0sT0FBTyxHQUFHMUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsR0FBUixFQUFkOztBQUNBLFFBQUksUUFBT3VCLFdBQVAsOEJBQUosRUFBNEM7QUFDeENBLE1BQUFBLFdBQVcsQ0FBQ0csTUFBWixDQUFtQix3Q0FBbkI7QUFDSCxLQUpnRCxDQU0vQzs7O0FBQ0ZILElBQUFBLFdBQVcsR0FBR3BCLEtBQUssQ0FBQ3dCLFdBQU4sQ0FBa0JDLE1BQWxCLEVBQWQ7QUFDQXpCLElBQUFBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFrQm9CLE9BQTVCLEVBQXFDO0FBQUVELE1BQUFBLFdBQVcsRUFBRUEsV0FBVyxDQUFDTTtBQUEzQixLQUFyQyxFQUNDakIsSUFERCxDQUNNLFVBQUFDLE9BQU8sRUFBSTtBQUNmL0IsTUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmdELEdBQWhCLENBQW9CLFNBQXBCLEVBQThCLE9BQTlCO0FBQ0FoRCxNQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEIsSUFBaEIsQ0FBcUJLLE9BQU8sQ0FBQ1AsSUFBN0IsRUFBbUNHLE9BQW5DO0FBQ0QsS0FKRDtBQUtELEdBYkQ7QUFlQTNCLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW9DLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLFlBQXRCLEVBQW1DLFVBQVVhLENBQVYsRUFBYTtBQUM5Q0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBSUMsUUFBUSxHQUFHbkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsR0FBUixFQUFmO0FBQ0FHLElBQUFBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLHlCQUF1QjZCLFFBQWpDLEVBQ0NyQixJQURELENBQ00sVUFBQUMsT0FBTyxFQUFJO0FBQ2YsVUFBR0EsT0FBTyxDQUFDUCxJQUFSLEtBQWlCLENBQXBCLEVBQXNCO0FBQ3BCeEIsUUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZZ0QsR0FBWixDQUFnQixTQUFoQixFQUEwQixPQUExQjtBQUNBaEQsUUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZMEIsSUFBWixDQUFpQkssT0FBTyxDQUFDUCxJQUF6QixFQUErQkcsT0FBL0I7QUFDRCxPQUhELE1BR0s7QUFDSDNCLFFBQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWdELEdBQVosQ0FBZ0IsU0FBaEIsRUFBMEIsTUFBMUI7QUFDRDtBQUNGLEtBUkQ7QUFTQWhELElBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JvRCxVQUFsQixDQUE2QixVQUE3QjtBQUNELEdBYkQ7QUFlQXBELEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW9DLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLFFBQXRCLEVBQStCLFVBQVVhLENBQVYsRUFBYTtBQUMxQ0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FsRCxJQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCb0QsVUFBbEIsQ0FBNkIsVUFBN0I7QUFDRCxHQUhEO0FBS0FwRCxFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQm9DLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFlBQU07QUFDcEM7QUFDQSxRQUFHLENBQUNyQyxXQUFKLEVBQWdCO0FBQ2RaLE1BQUFBLEtBQUssQ0FBQ2tFLElBQU4sQ0FBVztBQUNUbEMsUUFBQUEsSUFBSSxFQUFFLE9BREc7QUFFVG1DLFFBQUFBLEtBQUssRUFBRTtBQUZFLE9BQVg7QUFJQTtBQUNEOztBQUNEdEQsSUFBQUEsQ0FBQyxDQUFDLHVFQUFELENBQUQsQ0FBMkV1RCxLQUEzRTtBQUNBdkQsSUFBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQndELEtBQW5CLENBQXlCLE1BQXpCO0FBQ0QsR0FYRDtBQVlBeEQsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVb0MsRUFBVixDQUFhLFFBQWIsRUFBc0IsZUFBdEI7QUFBQSx3RUFBc0Msa0JBQWdCYSxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcENBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRixHQURvQyxDQUVwQzs7QUFDSU8sY0FBQUEsUUFIZ0MsR0FHckJ6RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEwRCxTQUFSLEVBSHFCO0FBSWhDQyxjQUFBQSxVQUpnQyxHQUlsQjNELENBQUMsQ0FBQyxrQ0FBRCxDQUppQjtBQUtwQzJELGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNNekMsY0FBQUEsSUFOOEIsR0FNdkJuQixDQUFDLENBQUMsc0JBQUQsQ0FOc0I7QUFPcENtQixjQUFBQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DTixRQUFwQyxDQUE2QyxvQkFBN0M7QUFQb0M7QUFBQTtBQUFBLHFCQVNYTyxLQUFLLENBQUN3QyxJQUFOLENBQVcsMENBQXdDOUQsV0FBbkQsRUFBK0QwRCxRQUEvRCxDQVRXOztBQUFBO0FBUzVCbEMsY0FBQUEsT0FUNEI7QUFVNUJDLGNBQUFBLElBVjRCLEdBVXJCRCxPQUFPLENBQUNDLElBVmE7O0FBV2xDLGtCQUFJQSxJQUFJLEtBQUssQ0FBYixFQUFnQjtBQUNkeEIsZ0JBQUFBLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCOEQsT0FBL0I7QUFHQTNDLGdCQUFBQSxJQUFJLENBQUNMLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ00sV0FBakMsQ0FBNkMsb0JBQTdDO0FBQ0QsZUFMRCxNQUtLO0FBQ0hwQixnQkFBQUEsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I4RCxPQUEvQiw4Q0FDc0N0QyxJQUR0QyxhQURHLENBSUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUwsZ0JBQUFBLElBQUksQ0FBQ0wsUUFBTCxDQUFjLGlCQUFkLEVBQWlDTSxXQUFqQyxDQUE2QyxvQkFBN0M7QUFDQWUsZ0JBQUFBLHVCQUF1QixDQUFDNUIsSUFBeEIsQ0FBNkJ3RCxNQUE3QixDQUFvQyxJQUFwQyxFQUEwQyxLQUExQztBQUNBNUQsZ0JBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXd0QsTUFBWCxDQUFrQixJQUFsQixFQUF3QixLQUF4QjtBQUNEOztBQTVCaUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE4QjVCQyxjQUFBQSxPQTlCNEIsR0E4QmxCLGFBQU1DLFFBQU4sQ0FBZXpDLElBOUJHLEVBK0JsQzs7QUFDQW1DLGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNBNUQsY0FBQUEsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I4RCxPQUEvQiw2Q0FDcUNFLE9BRHJDO0FBR0E3QyxjQUFBQSxJQUFJLENBQUNMLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ00sV0FBakMsQ0FBNkMscUJBQTdDOztBQXBDa0M7QUFzQ3BDOEMsY0FBQUEsVUFBVSxDQUFDLFlBQU07QUFDZmxFLGdCQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjRELE1BQXhCO0FBQ0QsZUFGUyxFQUVQLElBRk8sQ0FBVjs7QUF0Q29DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXRDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMkNBNUQsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9DLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFDbEMsUUFBRyxDQUFDckMsV0FBSixFQUFnQjtBQUNkWixNQUFBQSxLQUFLLENBQUNrRSxJQUFOLENBQVc7QUFDVGxDLFFBQUFBLElBQUksRUFBRSxPQURHO0FBRVRtQyxRQUFBQSxLQUFLLEVBQUU7QUFGRSxPQUFYO0FBSUE7QUFDRDs7QUFDRHRELElBQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCd0QsS0FBMUIsQ0FBZ0MsTUFBaEM7QUFDRCxHQVREO0FBV0F4RCxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVvQyxFQUFWLENBQWEsUUFBYixFQUF1QixrQkFBdkI7QUFBQSx3RUFBMkMsa0JBQU9hLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pDQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7O0FBRHlDLG9CQUV0Q2xELENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJrQixHQUFuQixNQUE0QixFQUE1QixJQUFrQ2xCLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JrQixHQUFsQixNQUEyQixFQUZ2QjtBQUFBO0FBQUE7QUFBQTs7QUFHdkNsQixjQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCOEQsT0FBakI7QUFIdUM7O0FBQUE7QUFRckNMLGNBQUFBLFFBUnFDLEdBUTFCLElBQUlVLFFBQUosRUFSMEI7QUFTckNSLGNBQUFBLFVBVHFDLEdBU3ZCM0QsQ0FBQyxDQUFDLHlDQUFELENBVHNCO0FBVXpDeUQsY0FBQUEsUUFBUSxDQUFDVyxNQUFULENBQWdCLFNBQWhCLEVBQTJCcEUsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmtCLEdBQW5CLEVBQTNCO0FBQ0F1QyxjQUFBQSxRQUFRLENBQUNXLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JwRSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCa0IsR0FBbEIsRUFBeEIsRUFYeUMsQ0FZekM7O0FBQ0FsQixjQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjRELE1BQXhCO0FBQ016QyxjQUFBQSxJQWRtQyxHQWM1Qm5CLENBQUMsQ0FBQyx5QkFBRCxDQWQyQjtBQWV6Q21CLGNBQUFBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixpQkFBakIsRUFBb0NOLFFBQXBDLENBQTZDLG9CQUE3QztBQWZ5QztBQUFBO0FBQUEscUJBaUJoQk8sS0FBSyxDQUFDd0MsSUFBTixDQUFXLG9DQUFrQzlELFdBQTdDLEVBQXlEMEQsUUFBekQsQ0FqQmdCOztBQUFBO0FBaUJqQ2xDLGNBQUFBLE9BakJpQztBQWtCakNDLGNBQUFBLElBbEJpQyxHQWtCMUJELE9BQU8sQ0FBQ0MsSUFsQmtCO0FBbUJ2Q21DLGNBQUFBLFVBQVUsQ0FBQ0csT0FBWCwrREFFV3RDLElBRlg7QUFLQUwsY0FBQUEsSUFBSSxDQUFDTCxRQUFMLENBQWMsaUJBQWQsRUFBaUNNLFdBQWpDLENBQTZDLG9CQUE3QztBQUNBUyxjQUFBQSxpQkFBaUI7QUF6QnNCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBNEJqQ21DLGNBQUFBLE9BNUJpQyxHQTRCdkIsYUFBTUMsUUFBTixDQUFlekMsSUE1QlEsRUE2QnZDOztBQUNBbUMsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ0E1RCxjQUFBQSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQzhELE9BQXRDLDZDQUNxQ0UsT0FEckM7QUFHQTdDLGNBQUFBLElBQUksQ0FBQ0wsUUFBTCxDQUFjLGlCQUFkLEVBQWlDTSxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBbEN1QztBQW9DekM4QyxjQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmbEUsZ0JBQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCNEQsTUFBeEI7QUFDRCxlQUZTLEVBRVAsSUFGTyxDQUFWOztBQXBDeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBM0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5Q0E1RCxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVvQyxFQUFWLENBQWEsT0FBYixFQUFzQixpQkFBdEIsRUFBeUMsWUFBVztBQUNsRCxRQUFJaUMsRUFBRSxHQUFHckUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0MsSUFBUixDQUFhLElBQWIsQ0FBVDtBQUNBdEMsSUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0IsV0FBUixDQUFvQixVQUFwQixFQUFnQ04sUUFBaEMsQ0FBeUMsb0JBQXpDOztBQUNBLFFBQUk7QUFDRixVQUFNUyxPQUFPLEdBQUdGLEtBQUssQ0FBQ3dDLElBQU4sQ0FBVyx3Q0FBc0NRLEVBQWpELENBQWhCO0FBQ0EsVUFBTTdDLElBQUksR0FBR0QsT0FBTyxDQUFDQyxJQUFyQjtBQUVBSyxNQUFBQSxpQkFBaUI7QUFFbEIsS0FORCxDQU1FLE9BQU95QyxLQUFQLEVBQWMsQ0FDZDtBQUNEO0FBQ0YsR0FaRDtBQWNBdEUsRUFBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JvQyxFQUF0QixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3RDcEMsSUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJ3RCxLQUFyQixDQUEyQixNQUEzQjtBQUNELEdBRkQ7QUFHQXhELEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JvQyxFQUFsQixDQUFxQixRQUFyQjtBQUFBLHdFQUErQixrQkFBT2EsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDN0JBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNJUyxjQUFBQSxVQUZ5QixHQUVaM0QsQ0FBQyxDQUFDLG9DQUFELENBRlc7QUFHN0IyRCxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDTXpDLGNBQUFBLElBSnVCLEdBSWhCbkIsQ0FBQyxDQUFDLHFCQUFELENBSmUsRUFLN0I7O0FBQ0FtQixjQUFBQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DTixRQUFwQyxDQUE2QyxvQkFBN0M7QUFDSXlELGNBQUFBLFFBUHlCLEdBT2QsSUFBSUosUUFBSixFQVBjO0FBUTdCSSxjQUFBQSxRQUFRLENBQUNILE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JwRSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWF3RSxJQUFiLENBQWtCLE9BQWxCLEVBQTJCLENBQTNCLENBQXhCLEVBUjZCLENBUzdCOztBQVQ2QjtBQUFBO0FBQUEscUJBV0xuRCxLQUFLLENBQUN3QyxJQUFOLENBQVcsNEJBQVgsRUFBeUNVLFFBQXpDLEVBQW1EO0FBQ3ZFRSxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQ7QUFEOEQsZUFBbkQsQ0FYSzs7QUFBQTtBQVdyQmxELGNBQUFBLE9BWHFCO0FBQUE7QUFBQSxxQkFnQlJBLE9BQU8sQ0FBQ0MsSUFoQkE7O0FBQUE7QUFnQnJCQSxjQUFBQSxJQWhCcUI7QUFpQjNCeEIsY0FBQUEsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM4RCxPQUFqQyxxRkFFaUN0QyxJQUFJLENBQUNrRCxRQUZ0Qyx3Q0FHYWxELElBQUksQ0FBQ21ELE9BSGxCLG9EQWpCMkIsQ0F1QjNCOztBQUNBLGtCQUFHbkQsSUFBSSxDQUFDbUQsT0FBTCxHQUFlLENBQWxCLEVBQXFCO0FBQ25CQyxnQkFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksOEJBQVosRUFBNEMsUUFBNUM7QUFDRDs7QUFDRDFELGNBQUFBLElBQUksQ0FBQ0wsUUFBTCxDQUFjLGlCQUFkLEVBQWlDTSxXQUFqQyxDQUE2QyxvQkFBN0M7QUFDQWpCLGNBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXd0QsTUFBWCxDQUFrQixJQUFsQixFQUF3QixLQUF4QjtBQTVCMkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE4QnJCQyxjQUFBQSxPQTlCcUIsR0E4QlgsYUFBTUMsUUFBTixDQUFlekMsSUE5QkosRUErQjNCOztBQUNBbUMsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ0E1RCxjQUFBQSxDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQzhELE9BQWpDLDZDQUNxQ0UsT0FEckM7QUFHQTdDLGNBQUFBLElBQUksQ0FBQ0wsUUFBTCxDQUFjLGlCQUFkLEVBQWlDTSxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBcEMyQjtBQXNDN0I4QyxjQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmbEUsZ0JBQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCNEQsTUFBeEI7QUFDRCxlQUZTLEVBRVAsSUFGTyxDQUFWLENBdEM2QixDQTBDN0I7O0FBMUM2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThDQTVELEVBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvQyxFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFNO0FBQ25DLFFBQUcsQ0FBQ3JDLFdBQUosRUFBZ0I7QUFDZFosTUFBQUEsS0FBSyxDQUFDa0UsSUFBTixDQUFXO0FBQ1RsQyxRQUFBQSxJQUFJLEVBQUUsT0FERztBQUVUbUMsUUFBQUEsS0FBSyxFQUFFO0FBRkUsT0FBWDtBQUlBO0FBQ0Q7O0FBQ0R0RCxJQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QndELEtBQXpCLENBQStCLE1BQS9CO0FBQ0QsR0FURDtBQVdBeEQsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVb0MsRUFBVixDQUFhLFFBQWIsRUFBdUIsbUJBQXZCO0FBQUEsd0VBQTRDLGtCQUFPYSxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQ0EsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0lxQixjQUFBQSxRQUZzQyxHQUUzQixJQUFJSixRQUFKLENBQWFuRSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QixDQUF2QixDQUFiLENBRjJCO0FBR3RDMkQsY0FBQUEsVUFIc0MsR0FHekIzRCxDQUFDLENBQUMsd0NBQUQsQ0FId0I7QUFLMUMyRCxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDTXpDLGNBQUFBLElBTm9DLEdBTTdCbkIsQ0FBQyxDQUFDLDBCQUFELENBTjRCO0FBTzFDbUIsY0FBQUEsSUFBSSxDQUFDQyxXQUFMLENBQWlCLGlCQUFqQixFQUFvQ04sUUFBcEMsQ0FBNkMsb0JBQTdDO0FBUDBDO0FBQUE7QUFBQSxxQkFVbEJPLEtBQUssQ0FBQ3dDLElBQU4sQ0FBVywwQ0FBd0M5RCxXQUFuRCxFQUFnRXdFLFFBQWhFLENBVmtCOztBQUFBO0FBVWxDaEQsY0FBQUEsT0FWa0M7QUFXbEMwQyxjQUFBQSxRQVhrQyxHQVd2QjFDLE9BQU8sQ0FBQ0MsSUFYZTtBQVl4Q3hCLGNBQUFBLENBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDOEQsT0FBckMsK0RBRVdHLFFBRlg7QUFLQTlDLGNBQUFBLElBQUksQ0FBQ0wsUUFBTCxDQUFjLGlCQUFkLEVBQWlDTSxXQUFqQyxDQUE2QyxxQkFBN0M7QUFDQWpCLGNBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXd0QsTUFBWCxDQUFrQixJQUFsQixFQUF3QixLQUF4QjtBQWxCd0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFvQmxDQyxjQUFBQSxPQXBCa0MsR0FvQnhCLGFBQU1DLFFBQU4sQ0FBZXpDLElBcEJTLEVBcUJ4Qzs7QUFDQW1DLGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNBNUQsY0FBQUEsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUM4RCxPQUFyQyw2Q0FDcUNFLE9BRHJDO0FBR0E3QyxjQUFBQSxJQUFJLENBQUNMLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ00sV0FBakMsQ0FBNkMscUJBQTdDOztBQTFCd0M7QUE0QjFDOEMsY0FBQUEsVUFBVSxDQUFDLFlBQU07QUFDZmxFLGdCQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjRELE1BQXhCO0FBQ0QsZUFGUyxFQUVQLElBRk8sQ0FBVjs7QUE1QjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTVDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0NBNUQsRUFBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JvQyxFQUF0QixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3RDLFFBQUcsQ0FBQ3JDLFdBQUosRUFBZ0I7QUFDZFosTUFBQUEsS0FBSyxDQUFDa0UsSUFBTixDQUFXO0FBQ1RsQyxRQUFBQSxJQUFJLEVBQUUsT0FERztBQUVUbUMsUUFBQUEsS0FBSyxFQUFFO0FBRkUsT0FBWDtBQUlBO0FBQ0Q7O0FBQ0R0RCxJQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cd0QsS0FBbkIsQ0FBeUIsTUFBekI7QUFDRCxHQVREO0FBVUF4RCxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVvQyxFQUFWLENBQWEsUUFBYixFQUF1QixxQkFBdkI7QUFBQSx3RUFBOEMsa0JBQU9hLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzVDQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDSXFCLGNBQUFBLFFBRndDLEdBRTdCLElBQUlKLFFBQUosQ0FBYW5FLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCLENBQXpCLENBQWIsQ0FGNkI7QUFHeEMyRCxjQUFBQSxVQUh3QyxHQUczQjNELENBQUMsQ0FBQyxrQ0FBRCxDQUgwQjtBQUs1QzJELGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNNekMsY0FBQUEsSUFOc0MsR0FNL0JuQixDQUFDLENBQUMsNEJBQUQsQ0FOOEI7QUFPNUNtQixjQUFBQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DTixRQUFwQyxDQUE2QyxvQkFBN0M7QUFQNEM7QUFBQTtBQUFBLHFCQVNwQk8sS0FBSyxDQUFDd0MsSUFBTixDQUFXLHdDQUFzQzlELFdBQWpELEVBQThEd0UsUUFBOUQsQ0FUb0I7O0FBQUE7QUFTcENoRCxjQUFBQSxPQVRvQztBQVVwQzBDLGNBQUFBLFFBVm9DLEdBVXpCMUMsT0FBTyxDQUFDQyxJQVZpQjtBQVcxQ3hCLGNBQUFBLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCOEQsT0FBL0IsK0RBRVdHLFFBRlg7QUFLQTlDLGNBQUFBLElBQUksQ0FBQ0wsUUFBTCxDQUFjLGlCQUFkLEVBQWlDTSxXQUFqQyxDQUE2QyxxQkFBN0M7QUFDQWpCLGNBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXd0QsTUFBWCxDQUFrQixJQUFsQixFQUF3QixLQUF4QjtBQWpCMEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFtQnBDQyxjQUFBQSxPQW5Cb0MsR0FtQjFCLGFBQU1DLFFBQU4sQ0FBZXpDLElBbkJXLEVBb0IxQzs7QUFDQW1DLGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNBNUQsY0FBQUEsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I4RCxPQUEvQiw2Q0FDcUNFLE9BRHJDO0FBR0E3QyxjQUFBQSxJQUFJLENBQUNMLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ00sV0FBakMsQ0FBNkMscUJBQTdDOztBQXpCMEM7QUEyQjVDOEMsY0FBQUEsVUFBVSxDQUFDLFlBQU07QUFDZmxFLGdCQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjRELE1BQXhCO0FBQ0QsZUFGUyxFQUVQLElBRk8sQ0FBVjs7QUEzQjRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTlDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBK0JBNUQsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm9DLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFVBQVVhLENBQVYsRUFBYTtBQUN2Q2pELElBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUThFLEdBQVIsQ0FBWSxNQUFaO0FBQ0gsR0FGRDtBQUdBOUUsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVb0MsRUFBVixDQUFhLE9BQWIsRUFBcUIsV0FBckIsRUFBaUMsWUFBWTtBQUMzQyxRQUFHLENBQUNyQyxXQUFKLEVBQWdCO0FBQ1paLE1BQUFBLEtBQUssQ0FBQ2tFLElBQU4sQ0FBVztBQUNQbEMsUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUG1DLFFBQUFBLEtBQUssRUFBRTtBQUZBLE9BQVg7QUFJQTtBQUNIOztBQUNEdEQsSUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJ3RCxLQUFyQixDQUEyQixNQUEzQjtBQUNELEdBVEQ7QUFXQXhELEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW9DLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLGdCQUF2QjtBQUFBLHdFQUF5QyxrQkFBT2EsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkNBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRixHQUR1QyxDQUV2Qzs7QUFGdUMsa0JBR25DbkQsV0FIbUM7QUFBQTtBQUFBO0FBQUE7O0FBSW5DWixjQUFBQSxLQUFLLENBQUNrRSxJQUFOLENBQVc7QUFDVGxDLGdCQUFBQSxJQUFJLEVBQUUsT0FERztBQUVUbUMsZ0JBQUFBLEtBQUssRUFBRTtBQUZFLGVBQVg7QUFKbUM7O0FBQUE7QUFVbkN5QixjQUFBQSxHQVZtQyxHQVU3QkMsT0FBTyxDQUFDLHNEQUFELENBVnNCOztBQUFBLG9CQVdwQ0QsR0FBRyxJQUFJLENBWDZCO0FBQUE7QUFBQTtBQUFBOztBQVlqQ1IsY0FBQUEsUUFaaUMsR0FZdEIsSUFBSUosUUFBSixDQUFhbkUsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsQ0FBcEIsQ0FBYixDQVpzQixFQWFyQzs7QUFDSTJELGNBQUFBLFVBZGlDLEdBY3BCM0QsQ0FBQyxDQUFDLG9DQUFELENBZG1CO0FBZXJDMkQsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ016QyxjQUFBQSxJQWhCK0IsR0FnQnhCbkIsQ0FBQyxDQUFDLDBCQUFELENBaEJ1QjtBQWlCckNtQixjQUFBQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsU0FBakIsRUFBNEJOLFFBQTVCLENBQXFDLG9CQUFyQztBQWpCcUM7QUFBQTtBQUFBLHFCQW1CYk8sS0FBSyxDQUFDd0MsSUFBTixDQUFXLG9DQUFrQzlELFdBQTdDLEVBQTBEd0UsUUFBMUQsQ0FuQmE7O0FBQUE7QUFtQjdCaEQsY0FBQUEsT0FuQjZCO0FBb0I3QjBDLGNBQUFBLFFBcEI2QixHQW9CbEIxQyxPQUFPLENBQUNDLElBcEJVO0FBcUJuQ3hCLGNBQUFBLENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDOEQsT0FBakMsc0dBRVdHLFFBRlg7QUFLQTlDLGNBQUFBLElBQUksQ0FBQ0wsUUFBTCxDQUFjLFNBQWQsRUFBeUJNLFdBQXpCLENBQXFDLHFCQUFyQztBQUNBakIsY0FBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVd3RCxNQUFYLENBQWtCLElBQWxCLEVBQXdCLEtBQXhCO0FBM0JtQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTZCN0JDLGNBQUFBLE9BN0I2QixHQTZCbkIsYUFBTUMsUUFBTixDQUFlekMsSUE3QkksRUE4Qm5DOztBQUNBbUMsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ0E1RCxjQUFBQSxDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQzhELE9BQWpDLGtGQUN3RUUsT0FEeEU7QUFHQTdDLGNBQUFBLElBQUksQ0FBQ0wsUUFBTCxDQUFjLFNBQWQsRUFBeUJNLFdBQXpCLENBQXFDLHFCQUFyQzs7QUFuQ21DO0FBc0N2QzhDLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2ZsRSxnQkFBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0I0RCxNQUF4QjtBQUNELGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBdEN1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF6Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBDQTVELEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW9DLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFVBQXRCLEVBQWtDLFVBQUNhLENBQUQsRUFBTztBQUN2Q0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRHVDLENBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUNBbEQsSUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0J3RCxLQUFwQixDQUEwQixNQUExQjtBQUNBeEQsSUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZMkIsT0FBWjtBQUNELEdBUkQ7QUFVQTNCLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVW9DLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLGVBQXZCO0FBQUEseUVBQXdDLG1CQUFPYSxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0Q0EsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0k2QixjQUFBQSxHQUZrQyxHQUU1QkMsT0FBTyxDQUFDLHFEQUFELENBRnFCOztBQUFBLG9CQUduQ0QsR0FBRyxJQUFJLENBSDRCO0FBQUE7QUFBQTtBQUFBOztBQUloQ1IsY0FBQUEsUUFKZ0MsR0FJckIsSUFBSUosUUFBSixDQUFhbkUsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQixDQUFuQixDQUFiLENBSnFCLEVBS3BDOztBQUNJMkQsY0FBQUEsVUFOZ0MsR0FNbkIzRCxDQUFDLENBQUMsbUNBQUQsQ0FOa0I7QUFPcEMyRCxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDTXpDLGNBQUFBLElBUjhCLEdBUXZCbkIsQ0FBQyxDQUFDLHlCQUFELENBUnNCO0FBU3BDbUIsY0FBQUEsSUFBSSxDQUFDQyxXQUFMLENBQWlCLFNBQWpCLEVBQTRCTixRQUE1QixDQUFxQyxvQkFBckM7QUFUb0M7QUFBQTtBQUFBLHFCQVdaTyxLQUFLLENBQUN3QyxJQUFOLENBQVcsK0JBQVgsRUFBNENVLFFBQTVDLENBWFk7O0FBQUE7QUFXNUJoRCxjQUFBQSxPQVg0QjtBQVk1QjBDLGNBQUFBLFFBWjRCLEdBWWpCMUMsT0FBTyxDQUFDQyxJQVpTO0FBYWxDeEIsY0FBQUEsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0M4RCxPQUFoQyxzR0FFV0csUUFGWDtBQUtBOUMsY0FBQUEsSUFBSSxDQUFDTCxRQUFMLENBQWMsU0FBZCxFQUF5Qk0sV0FBekIsQ0FBcUMscUJBQXJDO0FBQ0FqQixjQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBV3dELE1BQVgsQ0FBa0IsSUFBbEIsRUFBd0IsS0FBeEI7QUFuQmtDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBcUI1QkMsY0FBQUEsT0FyQjRCLEdBcUJsQixjQUFNQyxRQUFOLENBQWV6QyxJQXJCRyxFQXNCbEM7O0FBQ0FtQyxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDQTVELGNBQUFBLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDOEQsT0FBaEMsa0ZBQ3dFRSxPQUR4RTtBQUdBN0MsY0FBQUEsSUFBSSxDQUFDTCxRQUFMLENBQWMsU0FBZCxFQUF5Qk0sV0FBekIsQ0FBcUMscUJBQXJDOztBQTNCa0M7QUE4QnRDOEMsY0FBQUEsVUFBVSxDQUFDLFlBQU07QUFDZmxFLGdCQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjRELE1BQXhCO0FBQ0QsZUFGUyxFQUVQLElBRk8sQ0FBVjs7QUE5QnNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0NELENBdmhCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2V0dWRpYW50L2V0dWRpYW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgdG9hc3Q6IHRydWUsXHJcbiAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgdGltZXI6IDMwMDAsXHJcbiAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gIH0sXHJcbn0pXHJcbmxldCBpZF9ldHVkaWFudCA9IGZhbHNlO1xyXG4vLyAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcblxyXG4gIHZhciB0YWJsZSA9ICQoXCIjZGF0YWJsZXNfZXR1ZGlhbnRcIikuRGF0YVRhYmxlKHtcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgXSxcclxuICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICBhamF4OiBcIi9ldHVkaWFudC9ldHVkaWFudHMvbGlzdFwiLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmKGlkX2V0dWRpYW50KSB7XHJcbiAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9ldHVkaWFudCkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBnZXRBcHBlbFJkdiA9IGFzeW5jICgpID0+IHtcclxuICAgICQoJyNyZHYxJykudmFsKFwiXCIpO1xyXG4gICAgJCgnI3JkdjInKS52YWwoXCJcIik7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RhdGUtZC1hcHBlbCBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9ldHVkaWFudC9ldHVkaWFudHMvZ2V0QXBwZWxSZHYvJytpZF9ldHVkaWFudCk7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgJCgnI3JkdjEnKS52YWwoZGF0YVsncmR2MSddKTtcclxuICAgICQoJyNyZHYyJykudmFsKGRhdGFbJ3JkdjInXSk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgfSAgXHJcbn1cclxuXHJcbiAgY29uc3QgZ2V0RXR1ZGlhbnRJbmZvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNjYW5kaWRhdHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNwYXJlbnRzX2luZm9zJykuaHRtbCgnJyk7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjYWNhZGVtaXF1ZV9pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoJycpO1xyXG4gICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllciBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2dldEV0dWRpYW50SW5mb3MvJytpZF9ldHVkaWFudCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjY2FuZGlkYXRzX2luZm9zJykuaHRtbChkYXRhWydjYW5kaWRhdHNfaW5mb3MnXSk7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjcGFyZW50c19pbmZvcycpLmh0bWwoZGF0YVsncGFyZW50c19pbmZvcyddKTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNhY2FkZW1pcXVlX2luZm9zJykuaHRtbChkYXRhWydhY2FkZW1pcXVlX2luZm9zJ10pO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoZGF0YVsnZGl2ZXJzJ10pO1xyXG4gICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9ICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldEV0YWJsaXNzZW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2V0YWJsaXNzZW1lbnQnKTtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJCgnI2V0YWJsaXNzZW1lbnQnKS5odG1sKGRhdGEpLnNlbGVjdDIoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgIH0gIFxyXG4gIH1cclxuICAvLyBjb25zdCBnZXROYXR1cmVEZW1hbmRlID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgdHJ5IHtcclxuICAvLyAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uYXR1cmVfZGVtYW5kZScpO1xyXG4gIC8vICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gIC8vICAgICAkKCcjbmF0dXJlZGVtYW5kZScpLmh0bWwoZGF0YSkuc2VsZWN0MigpO1xyXG5cclxuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gIC8vICAgfSAgXHJcbiAgLy8gfVxyXG4gIGdldEV0YWJsaXNzZW1lbnQoKTtcclxuICAvLyBnZXROYXR1cmVEZW1hbmRlKCk7XHJcblxyXG4gIGNvbnN0IGxvYWRFeGlzdE1hdGllcmVzID0gKCkgPT4ge1xyXG4gICAgJChcIi5tYXRpZXJlRXhpc3QgdGJvZHlcIikuaHRtbCgnPGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPicpXHJcbiAgICBheGlvcy5nZXQoJy9ldHVkaWFudC9ldHVkaWFudHMvbWF0aWVyZS8nK2lkX2V0dWRpYW50KVxyXG4gICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAkKFwiLm1hdGllcmVFeGlzdCB0Ym9keVwiKS5odG1sKHN1Y2Nlc3MuZGF0YS50YWJsZSlcclxuICAgICAgICAkKFwiI21hdGllcmVEaXNwb1wiKS5odG1sKHN1Y2Nlc3MuZGF0YS5tYXRpZXJlcykuc2VsZWN0MigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Y2Nlc3MpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuICB9XHJcbiAgY29uc3QgbG9hZEV0dWRpYW50U3RhdHV0ID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL3N0YXR1dC8nK2lkX2V0dWRpYW50KVxyXG4gICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAkKFwiI3N0YXR1dFwiKS5odG1sKHN1Y2Nlc3MuZGF0YSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICBcclxuICBsZXQgdGFibGVMaXN0UHJlaW5zY3JpcHRpb247XHJcblxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZXR1ZGlhbnQgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICBpZF9ldHVkaWFudCA9IG51bGwsXHJcbiAgICAgICQoJyNkYXRhYmxlc19ldHVkaWFudCB0cicpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoJyNkYXRhYmxlc19ldHVkaWFudCB0cicpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICBpZF9ldHVkaWFudCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgIHRhYmxlTGlzdFByZWluc2NyaXB0aW9uID0gJChcIiNkYXRhYmxlc19ldHVkaWFudF9tb2RhbFwiKS5EYXRhVGFibGUoe1xyXG4gICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgIF0sXHJcbiAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgIGFqYXg6IFwiL2V0dWRpYW50L2V0dWRpYW50cy9saXN0L3ByZWluc2NyaXB0aW9uL1wiK2lkX2V0dWRpYW50LFxyXG4gICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgICAgIGJEZXN0cm95OiB0cnVlXHJcbiAgICB9KTsgICAgXHJcbiAgICBsb2FkRXhpc3RNYXRpZXJlcygpO1xyXG4gICAgbG9hZEV0dWRpYW50U3RhdHV0KCk7XHJcbiAgICBnZXRFdHVkaWFudEluZm9zKCk7XHJcbiAgICBnZXRBcHBlbFJkdigpXHJcbiAgfSlcclxuICBcclxuICBsZXQgY2FuY2VsVG9rZW47XHJcbiAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCcjZXRhYmxpc3NlbWVudCcsZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgaWYgKHR5cGVvZiBjYW5jZWxUb2tlbiAhPSB0eXBlb2YgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY2FuY2VsVG9rZW4uY2FuY2VsKFwiT3BlcmF0aW9uIGNhbmNlbGVkIGR1ZSB0byBuZXcgcmVxdWVzdC5cIilcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAvL1NhdmUgdGhlIGNhbmNlbCB0b2tlbiBmb3IgdGhlIGN1cnJlbnQgcmVxdWVzdFxyXG4gICAgY2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbi5zb3VyY2UoKVxyXG4gICAgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIsIHsgY2FuY2VsVG9rZW46IGNhbmNlbFRva2VuLnRva2VuIH0pXHJcbiAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgJCgnLmZvcm1hdGlvbicpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHN1Y2Nlc3MuZGF0YSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsJyNmb3JtYXRpb24nLGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgaWRfZm9ybWEgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgYXhpb3MuZ2V0KCcvYXBpL2FubmVlcmVzaWRhbmF0LycraWRfZm9ybWEpXHJcbiAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgaWYoc3VjY2Vzcy5kYXRhICE9PSAxKXtcclxuICAgICAgICAkKCcuYW5uZWUnKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgICQoJyNhbm5lZScpLmh0bWwoc3VjY2Vzcy5kYXRhKS5zZWxlY3QyKCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICQoJy5hbm5lZScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJyNlbnJlZ2lzdHJlcicpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcclxuICB9KVxyXG5cclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsJyNhbm5lZScsZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJyNlbnJlZ2lzdHJlcicpLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcclxuICB9KVxyXG4gIFxyXG4gICQoXCIjdmFsaWRlci1tb2RhbFwiKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpZF9ldHVkaWFudCk7XHJcbiAgICBpZighaWRfZXR1ZGlhbnQpe1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKFwiI3ZhbGlkZXJtb2RhbCAubW9kYWwtYm9keSAjYW5uZWUsI3ZhbGlkZXJtb2RhbCAubW9kYWwtYm9keSAjZm9ybWF0aW9uXCIpLmVtcHR5KCk7XHJcbiAgICAkKCcjdmFsaWRlcm1vZGFsJykubW9kYWwoXCJzaG93XCIpXHJcbiAgfSlcclxuICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsJy5mb3JtLXZhbGlkZXInLGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBhbGVydCgndGVzdCcpO1xyXG4gICAgbGV0IGZvcm1kYXRhID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjdmFsaWRlcm1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIi5mb3JtLXZhbGlkZXIgLmJ0biBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9ldHVkaWFudF92YWxpZGVyLycraWRfZXR1ZGlhbnQsZm9ybWRhdGEpXHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgIGlmIChkYXRhID09PSAxKSB7XHJcbiAgICAgICAgJChcIiN2YWxpZGVybW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+RXR1ZGlhbnQgZMOpamEgaW5zY3JpdCBkYW5zIGxhIG1lbWUgZm9ybWF0aW9uPC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICQoXCIjdmFsaWRlcm1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj4ke2RhdGF9PC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gbW9kYWxBbGVydC5wcmVwZW5kKFxyXG4gICAgICAgIC8vICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgLy8gICAgICAgPHA+JHtkYXRhfTwvcD5cclxuICAgICAgICAvLyAgICAgPC9kaXY+YFxyXG4gICAgICAgIC8vICk7ICBcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0YWJsZUxpc3RQcmVpbnNjcmlwdGlvbi5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgJChcIiN2YWxpZGVybW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH0gXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDIwMDApICBcclxuICB9KVxyXG5cclxuICAkKCcjcmVsZXZlX25vdGUnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZighaWRfZXR1ZGlhbnQpe1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKFwiI3JlbGV2ZXMtbm90ZXMtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gIH0pXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCAnI3JlbGV2ZW5vdGVfc2F2ZScsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZigkKFwiI21hdGllcmVEaXNwb1wiKS52YWwoKSA9PSBcIlwiIHx8ICQoXCIjbWF0aWVyZU5vdGVcIikudmFsKCkgPT0gXCJcIikge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlZldWlsbGV6IHJlbXBsaXIgdG91dCBsZXMgY2hhbXBzPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjcmVsZXZlcy1ub3Rlcy1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICBmb3JtZGF0YS5hcHBlbmQoJ21hdGllcmUnLCAkKFwiI21hdGllcmVEaXNwb1wiKS52YWwoKSlcclxuICAgIGZvcm1kYXRhLmFwcGVuZCgnbm90ZScsICQoXCIjbWF0aWVyZU5vdGVcIikudmFsKCkpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhmb3JtZGF0YSk7XHJcbiAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjcmVsZXZlbm90ZV9zYXZlIC5idG4gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9ldHVkaWFudC9ldHVkaWFudHMvYWRkbWF0aWVyZS8nK2lkX2V0dWRpYW50LGZvcm1kYXRhKVxyXG4gICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICBtb2RhbEFsZXJ0LnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIDxwPiR7ZGF0YX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7ICBcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGxvYWRFeGlzdE1hdGllcmVzKCk7XHJcbiAgICAgICBcclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI3JlbGV2ZXMtbm90ZXMtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjAwMClcclxuXHJcbiAgfSlcclxuICAkKFwiYm9keVwiKS5vbignY2xpY2snLCAnLmRlbGV0ZV9tYXRpZXJlJywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgaWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJmYS10cmFzaFwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBheGlvcy5wb3N0KFwiL2V0dWRpYW50L2V0dWRpYW50cy9tYXRpZXJlL2RlbGV0ZS9cIitpZClcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgXHJcbiAgICAgIGxvYWRFeGlzdE1hdGllcmVzKCk7XHJcbiAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAkKCcjZXR1ZGlhbnRfaW1wb3J0Jykub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgJChcIiNpbXBvcnRlci1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSlcclxuICAkKCcjc2F2ZV9pbXBvcnQnKS5vbignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNpbXBvcnRlci1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNzYXZlX2ltcG9ydCAuYnRuIGlcIik7XHJcbiAgICAvLyBjb25zdCBidXR0b24gPSAkKFwiI2ltcG9ydC1ncm91cC1pbnMgLmJ0blwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCAkKCcubXlmaWxlJykucHJvcCgnZmlsZXMnKVswXSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9ldHVkaWFudC9ldHVkaWFudHMvaW1wb3J0XCIsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjaW1wb3J0ZXItbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPHA+Tm9tYnJlIGQnaW5zZXJ0aW9uOjxiPiR7ZGF0YS5pbnNlcnRlZH08L2I+PC9wPlxyXG4gICAgICAgICAgICA8cDxiPiR7ZGF0YS5leGlzdGVkfTwvYj4gw6l0dWRpYW50cyBleGlzdDwvcD5cclxuICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5leGlzdGVkKTtcclxuICAgICAgaWYoZGF0YS5leGlzdGVkID4gMCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2V0dWRpYW50L2V0dWRpYW50cy9kb3dubG9hZFwiLCAnX2JsYW5rJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI2ltcG9ydGVyLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDI1MDApIFxyXG4gIFxyXG4gICAgLy8gJChcIiNzYXZlX2ltcG9ydFwiKVswXS5yZXNldCgpO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgJChcIiNkYXRlLWQtYXBwZWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZighaWRfZXR1ZGlhbnQpe1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKFwiI2RhdGUtZC1hcHBlbC1tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICB9KVxyXG5cclxuICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjZGF0ZV9hcHBlbGVfc2F2ZVwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjZGF0ZV9hcHBlbGVfc2F2ZVwiKVswXSk7XHJcbiAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG5cclxuICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNkYXRlX2FwcGVsZV9zYXZlIC5idG4gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9kYXRlZGVybmllcmFwcGVsLycraWRfZXR1ZGlhbnQsIGZvcm1EYXRhKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDI1MDApIFxyXG4gICBcclxuICB9KVxyXG5cclxuICAkKFwiI2V0dWRpYW50X3N0YXR1dFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjc3RhdHV0LW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gIH0pXHJcbiAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsIFwiI2NoYW5nZV9zdGF0dXRfc2F2ZVwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjY2hhbmdlX3N0YXR1dF9zYXZlXCIpWzBdKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNzdGF0dXQtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcblxyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2NoYW5nZV9zdGF0dXRfc2F2ZSAuYnRuIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL3N0YXR1dC9wZXJzaXN0LycraWRfZXR1ZGlhbnQsIGZvcm1EYXRhKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjc3RhdHV0LW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjc3RhdHV0LW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDI1MDApIFxyXG4gIH0pXHJcbiAgJCgnLm5hdi1waWxscyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgJCh0aGlzKS50YWIoJ3Nob3cnKTtcclxuICB9KVxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCcjbW9kaWZpZXInLGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJCgnI21vZGlmaWVyX21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gIH0pXHJcbiAgXHJcbiAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsIFwiI2Zvcm1fbW9kaWZpZXJcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGFsZXJ0KCdldCcpO1xyXG4gICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgVW4gRXR1ZGlhbnQhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBtb2RpZmllciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKCcjZm9ybV9tb2RpZmllcicpWzBdKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjbW9kaWZpZXJfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyX21vZGFsIGJ1dHRvbiBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldHVkaWFudC9ldHVkaWFudHMvZWRpdF9pbmZvcy8nK2lkX2V0dWRpYW50LCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPlxyXG4gICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICQoXCIjbW9kaWZpZXJfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDI1MDApICBcclxuICB9KVxyXG4gICQoXCJib2R5XCIpLm9uKCdjbGljaycsIFwiI2Fqb3V0ZXJcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICQoJyNham91dGVyX21vZGFsICNjYW5kaWRhdHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgIC8vICQoJyNham91dGVyX21vZGFsICNwYXJlbnRzX2luZm9zJykuaHRtbCgnJyk7XHJcbiAgICAvLyAkKCcjYWpvdXRlcl9tb2RhbCAjYWNhZGVtaXF1ZV9pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgLy8gJCgnI2Fqb3V0ZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoJycpO1xyXG4gICAgJCgnI2Fqb3V0ZXJfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgfSlcclxuICBcclxuICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjZm9ybV9ham91dGVyXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgYWpvdXRlciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKCcjZm9ybV9ham91dGVyJylbMF0pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICBjb25zdCBpY29uID0gJChcIiNham91dGVyX21vZGFsIGJ1dHRvbiBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1wbHVzJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldHVkaWFudC9ldHVkaWFudHMvYWRkX2luZm9zJywgZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPlxyXG4gICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1wbHVzJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICQoXCIjYWpvdXRlcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXBsdXMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgIFxyXG4gIH0pXHJcbn0pIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX2V0dWRpYW50IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJhZGRDbGFzcyIsImxhbmd1YWdlIiwidXJsIiwiZ2V0QXBwZWxSZHYiLCJ2YWwiLCJpY29uIiwicmVtb3ZlQ2xhc3MiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiZ2V0RXR1ZGlhbnRJbmZvcyIsImh0bWwiLCJzZWxlY3QyIiwiZ2V0RXRhYmxpc3NlbWVudCIsImxvYWRFeGlzdE1hdGllcmVzIiwidGhlbiIsInN1Y2Nlc3MiLCJtYXRpZXJlcyIsImVyciIsImxvYWRFdHVkaWFudFN0YXR1dCIsInRhYmxlTGlzdFByZWluc2NyaXB0aW9uIiwib24iLCJoYXNDbGFzcyIsImF0dHIiLCJzdGF0ZVNhdmUiLCJiRGVzdHJveSIsImNhbmNlbFRva2VuIiwiaWRfZXRhYiIsInVuZGVmaW5lZCIsImNhbmNlbCIsIkNhbmNlbFRva2VuIiwic291cmNlIiwidG9rZW4iLCJjc3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJpZF9mb3JtYSIsInJlbW92ZUF0dHIiLCJmaXJlIiwidGl0bGUiLCJlbXB0eSIsIm1vZGFsIiwiZm9ybWRhdGEiLCJzZXJpYWxpemUiLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicG9zdCIsInByZXBlbmQiLCJyZWxvYWQiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJzZXRUaW1lb3V0IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJpZCIsImVycm9yIiwiZm9ybURhdGEiLCJwcm9wIiwiaGVhZGVycyIsImluc2VydGVkIiwiZXhpc3RlZCIsIndpbmRvdyIsIm9wZW4iLCJ0YWIiLCJyZXMiLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==