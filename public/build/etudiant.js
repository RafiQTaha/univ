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
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_etudiant')) {
        var dt = $('#datables_etudiant').DataTable(); //Abort previous ajax request if it is still in process.

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
    loadEtudiantStatut(); // getEtudiantInfos();
    // getAppelRdv()
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

    getEtudiantInfos();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXR1ZGlhbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVc7QUFDdkJDLEVBQUFBLEtBQUssRUFBRSxJQURnQjtBQUV2QkMsRUFBQUEsUUFBUSxFQUFFLFNBRmE7QUFHdkJDLEVBQUFBLGlCQUFpQixFQUFFLEtBSEk7QUFJdkJDLEVBQUFBLEtBQUssRUFBRSxJQUpnQjtBQUt2QkMsRUFBQUEsZ0JBQWdCLEVBQUUsSUFMSztBQU12QkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFDTCxLQUFELEVBQVc7QUFDbEJBLElBQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1MsU0FBMUM7QUFDQVAsSUFBQUEsS0FBSyxDQUFDTSxnQkFBTixDQUF1QixZQUF2QixFQUFxQ1IsSUFBSSxDQUFDVSxXQUExQztBQUNEO0FBVHNCLENBQVgsQ0FBZDtBQVdBLElBQUlDLFdBQVcsR0FBRyxLQUFsQixFQUNBOztBQUNBQyxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQWE7QUFFN0IsTUFBSUMsS0FBSyxHQUFHSCxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QkksU0FBeEIsQ0FBa0M7QUFDNUNDLElBQUFBLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixjQUF0QixDQURVLEVBRVYsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlUsQ0FEZ0M7QUFLNUNDLElBQUFBLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FBRCxDQUxxQztBQU01Q0MsSUFBQUEsSUFBSSxFQUFFLDBCQU5zQztBQU81Q0MsSUFBQUEsVUFBVSxFQUFFLElBUGdDO0FBUTVDQyxJQUFBQSxVQUFVLEVBQUUsSUFSZ0M7QUFTNUNDLElBQUFBLFdBQVcsRUFBRSxJQVQrQjtBQVU1Q0MsSUFBQUEsVUFBVSxFQUFFLElBVmdDO0FBVzVDQyxJQUFBQSxPQUFPLEVBQUUsSUFYbUM7QUFZNUNDLElBQUFBLFlBQVksRUFBRSx3QkFBWTtBQUN4QixVQUFHZCxXQUFILEVBQWdCO0FBQ2RDLFFBQUFBLENBQUMsQ0FBQyxhQUFhRCxXQUFkLENBQUQsQ0FBNEJlLFFBQTVCLENBQXFDLGtCQUFyQztBQUNEO0FBQ0YsS0FoQjJDO0FBaUI1Q0MsSUFBQUEsZUFBZSxFQUFFLHlCQUFTQyxRQUFULEVBQW1CO0FBQ2hDLFVBQUloQixDQUFDLENBQUNpQixFQUFGLENBQUtiLFNBQUwsQ0FBZWMsV0FBZixDQUEyQixvQkFBM0IsQ0FBSixFQUFzRDtBQUNsRCxZQUFJQyxFQUFFLEdBQUduQixDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QkksU0FBeEIsRUFBVCxDQURrRCxDQUdsRDs7QUFDQSxZQUFJWSxRQUFRLEdBQUdHLEVBQUUsQ0FBQ0gsUUFBSCxFQUFmOztBQUNBLFlBQUlBLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUksS0FBaEIsRUFBdUI7QUFDbkJKLFVBQUFBLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUksS0FBWixDQUFrQkMsS0FBbEI7QUFDSDtBQUNKO0FBQ0osS0EzQjJDO0FBNEI1Q0MsSUFBQUEsUUFBUSxFQUFFO0FBQ1JDLE1BQUFBLEdBQUcsRUFBRTtBQURHO0FBNUJrQyxHQUFsQyxDQUFaOztBQWlDQSxNQUFNQyxXQUFXO0FBQUEsdUVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCeEIsY0FBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXeUIsR0FBWCxDQUFlLEVBQWY7QUFDQXpCLGNBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3lCLEdBQVgsQ0FBZSxFQUFmO0FBQ1FDLGNBQUFBLElBSFUsR0FHSDFCLENBQUMsQ0FBQyxpQkFBRCxDQUhFO0FBSWhCMEIsY0FBQUEsSUFBSSxDQUFDQyxXQUFMLENBQWlCLFNBQWpCLEVBQTRCYixRQUE1QixDQUFxQyxvQkFBckM7QUFKZ0I7QUFBQTtBQUFBLHFCQU1JYyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxxQ0FBbUM5QixXQUE3QyxDQU5KOztBQUFBO0FBTVorQixjQUFBQSxPQU5ZO0FBT1pDLGNBQUFBLElBUFksR0FPTEQsT0FBTyxDQUFDQyxJQVBIO0FBUWxCL0IsY0FBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXeUIsR0FBWCxDQUFlTSxJQUFJLENBQUMsTUFBRCxDQUFuQjtBQUNBL0IsY0FBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXeUIsR0FBWCxDQUFlTSxJQUFJLENBQUMsTUFBRCxDQUFuQjtBQUNFTCxjQUFBQSxJQUFJLENBQUNaLFFBQUwsQ0FBYyxTQUFkLEVBQXlCYSxXQUF6QixDQUFxQyxvQkFBckMsRUFWZ0IsQ0FXbEI7O0FBWGtCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhILFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBa0JBLE1BQU1RLGdCQUFnQjtBQUFBLHdFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQmhDLGNBQUFBLENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDaUMsSUFBdEMsQ0FBMkMsRUFBM0M7QUFDQWpDLGNBQUFBLENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DaUMsSUFBcEMsQ0FBeUMsRUFBekM7QUFDQWpDLGNBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDaUMsSUFBdkMsQ0FBNEMsRUFBNUM7QUFDQWpDLGNBQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCaUMsSUFBN0IsQ0FBa0MsRUFBbEM7QUFDTVAsY0FBQUEsSUFMZSxHQUtSMUIsQ0FBQyxDQUFDLGFBQUQsQ0FMTztBQU1yQjBCLGNBQUFBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixTQUFqQixFQUE0QmIsUUFBNUIsQ0FBcUMsb0JBQXJDO0FBTnFCO0FBQUE7QUFBQSxxQkFRQ2MsS0FBSyxDQUFDQyxHQUFOLENBQVUsMENBQXdDOUIsV0FBbEQsQ0FSRDs7QUFBQTtBQVFmK0IsY0FBQUEsT0FSZTtBQVNmQyxjQUFBQSxJQVRlLEdBU1JELE9BQU8sQ0FBQ0MsSUFUQTtBQVVyQi9CLGNBQUFBLENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDaUMsSUFBdEMsQ0FBMkNGLElBQUksQ0FBQyxpQkFBRCxDQUEvQztBQUNBL0IsY0FBQUEsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NpQyxJQUFwQyxDQUF5Q0YsSUFBSSxDQUFDLGVBQUQsQ0FBN0M7QUFDQS9CLGNBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDaUMsSUFBdkMsQ0FBNENGLElBQUksQ0FBQyxrQkFBRCxDQUFoRDtBQUNBL0IsY0FBQUEsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJpQyxJQUE3QixDQUFrQ0YsSUFBSSxDQUFDLFFBQUQsQ0FBdEM7QUFDQS9CLGNBQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWtDLE9BQVo7QUFDQVIsY0FBQUEsSUFBSSxDQUFDWixRQUFMLENBQWMsU0FBZCxFQUF5QmEsV0FBekIsQ0FBcUMsb0JBQXJDLEVBZnFCLENBZ0JyQjs7QUFoQnFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCSyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBdUJBLE1BQU1HLGdCQUFnQjtBQUFBLHdFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQ1AsS0FBSyxDQUFDQyxHQUFOLENBQVUsb0JBQVYsQ0FGRDs7QUFBQTtBQUVmQyxjQUFBQSxPQUZlO0FBR2ZDLGNBQUFBLElBSGUsR0FHUkQsT0FBTyxDQUFDQyxJQUhBO0FBSXJCL0IsY0FBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JpQyxJQUFwQixDQUF5QkYsSUFBekIsRUFBK0JHLE9BQS9CO0FBSnFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCQyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEIsQ0E1RTZCLENBc0Y3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBQSxFQUFBQSxnQkFBZ0IsR0FoR2EsQ0FpRzdCOztBQUVBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QnBDLElBQUFBLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCaUMsSUFBekIsQ0FBOEIsd0NBQTlCO0FBQ0FMLElBQUFBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLGlDQUErQjlCLFdBQXpDLEVBQ0dzQyxJQURILENBQ1EsVUFBQUMsT0FBTyxFQUFJO0FBQ2Z0QyxNQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QmlDLElBQXpCLENBQThCSyxPQUFPLENBQUNQLElBQVIsQ0FBYTVCLEtBQTNDO0FBQ0FILE1BQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJpQyxJQUFuQixDQUF3QkssT0FBTyxDQUFDUCxJQUFSLENBQWFRLFFBQXJDLEVBQStDTCxPQUEvQyxHQUZlLENBR2Y7QUFDRCxLQUxILFdBTVMsVUFBQU0sR0FBRyxFQUFJLENBQ1o7QUFDRCxLQVJIO0FBU0QsR0FYRDs7QUFZQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0JiLElBQUFBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLGdDQUE4QjlCLFdBQXhDLEVBQ0dzQyxJQURILENBQ1EsVUFBQUMsT0FBTyxFQUFJO0FBQ2Z0QyxNQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFpQyxJQUFiLENBQWtCSyxPQUFPLENBQUNQLElBQTFCO0FBQ0QsS0FISCxXQUlTLFVBQUFTLEdBQUcsRUFBSSxDQUNaO0FBQ0QsS0FOSDtBQU9ELEdBUkQ7O0FBVUEsTUFBSUUsdUJBQUo7QUFFQTFDLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJDLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLDZCQUFyQixFQUFtRCxZQUFZO0FBQzdELFFBQUczQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxRQUFSLENBQWlCLGtCQUFqQixDQUFILEVBQXlDO0FBQ3ZDN0MsTUFBQUEsV0FBVyxHQUFHLElBQWQsRUFDQUMsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkIyQixXQUEzQixDQUF1QyxrQkFBdkMsQ0FEQTtBQUVBO0FBQ0Q7O0FBQ0QzQixJQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQjJCLFdBQTNCLENBQXVDLGtCQUF2QztBQUNBM0IsSUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxRQUFSLENBQWlCLGtCQUFqQjtBQUNBZixJQUFBQSxXQUFXLEdBQUdDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZDLElBQVIsQ0FBYSxJQUFiLENBQWQ7QUFDQUgsSUFBQUEsdUJBQXVCLEdBQUcxQyxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkksU0FBOUIsQ0FBd0M7QUFDaEVDLE1BQUFBLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixjQUF0QixDQURVLEVBRVYsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlUsQ0FEb0Q7QUFLaEVDLE1BQUFBLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FBRCxDQUx5RDtBQU1oRUMsTUFBQUEsSUFBSSxFQUFFLDZDQUEyQ1IsV0FOZTtBQU9oRVMsTUFBQUEsVUFBVSxFQUFFLElBUG9EO0FBUWhFQyxNQUFBQSxVQUFVLEVBQUUsSUFSb0Q7QUFTaEVDLE1BQUFBLFdBQVcsRUFBRSxJQVRtRDtBQVVoRVksTUFBQUEsUUFBUSxFQUFFO0FBQ1JDLFFBQUFBLEdBQUcsRUFBRTtBQURHLE9BVnNEO0FBYWhFdUIsTUFBQUEsU0FBUyxFQUFFLElBYnFEO0FBY2hFQyxNQUFBQSxRQUFRLEVBQUU7QUFkc0QsS0FBeEMsQ0FBMUI7QUFnQkFYLElBQUFBLGlCQUFpQjtBQUNqQkssSUFBQUEsa0JBQWtCLEdBMUIyQyxDQTJCN0Q7QUFDQTtBQUNELEdBN0JEO0FBK0JBLE1BQUlPLFdBQUo7QUFDQWhELEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJDLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLGdCQUF0QixFQUF1QyxZQUFZO0FBQ2pELFFBQUlNLE9BQU8sR0FBR2pELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlCLEdBQVIsRUFBZDs7QUFDQSxRQUFJLFFBQU91QixXQUFQLDhCQUFKLEVBQTRDO0FBQ3hDQSxNQUFBQSxXQUFXLENBQUNHLE1BQVosQ0FBbUIsd0NBQW5CO0FBQ0gsS0FKZ0QsQ0FNL0M7OztBQUNGSCxJQUFBQSxXQUFXLEdBQUdwQixLQUFLLENBQUN3QixXQUFOLENBQWtCQyxNQUFsQixFQUFkO0FBQ0F6QixJQUFBQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxvQkFBa0JvQixPQUE1QixFQUFxQztBQUFFRCxNQUFBQSxXQUFXLEVBQUVBLFdBQVcsQ0FBQ007QUFBM0IsS0FBckMsRUFDQ2pCLElBREQsQ0FDTSxVQUFBQyxPQUFPLEVBQUk7QUFDZnRDLE1BQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J1RCxHQUFoQixDQUFvQixTQUFwQixFQUE4QixPQUE5QjtBQUNBdkQsTUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmlDLElBQWhCLENBQXFCSyxPQUFPLENBQUNQLElBQTdCLEVBQW1DRyxPQUFuQztBQUNELEtBSkQ7QUFLRCxHQWJEO0FBZUFsQyxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyQyxFQUFWLENBQWEsUUFBYixFQUFzQixZQUF0QixFQUFtQyxVQUFVYSxDQUFWLEVBQWE7QUFDOUNBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlDLFFBQVEsR0FBRzFELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlCLEdBQVIsRUFBZjtBQUNBRyxJQUFBQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSx5QkFBdUI2QixRQUFqQyxFQUNDckIsSUFERCxDQUNNLFVBQUFDLE9BQU8sRUFBSTtBQUNmLFVBQUdBLE9BQU8sQ0FBQ1AsSUFBUixLQUFpQixDQUFwQixFQUFzQjtBQUNwQi9CLFFBQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWXVELEdBQVosQ0FBZ0IsU0FBaEIsRUFBMEIsT0FBMUI7QUFDQXZELFFBQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWlDLElBQVosQ0FBaUJLLE9BQU8sQ0FBQ1AsSUFBekIsRUFBK0JHLE9BQS9CO0FBQ0QsT0FIRCxNQUdLO0FBQ0hsQyxRQUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVl1RCxHQUFaLENBQWdCLFNBQWhCLEVBQTBCLE1BQTFCO0FBQ0Q7QUFDRixLQVJEO0FBU0F2RCxJQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCMkQsVUFBbEIsQ0FBNkIsVUFBN0I7QUFDRCxHQWJEO0FBZUEzRCxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyQyxFQUFWLENBQWEsUUFBYixFQUFzQixRQUF0QixFQUErQixVQUFVYSxDQUFWLEVBQWE7QUFDMUNBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBekQsSUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjJELFVBQWxCLENBQTZCLFVBQTdCO0FBQ0QsR0FIRDtBQUtBM0QsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IyQyxFQUFwQixDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ3BDO0FBQ0EsUUFBRyxDQUFDNUMsV0FBSixFQUFnQjtBQUNkWixNQUFBQSxLQUFLLENBQUN5RSxJQUFOLENBQVc7QUFDVGxDLFFBQUFBLElBQUksRUFBRSxPQURHO0FBRVRtQyxRQUFBQSxLQUFLLEVBQUU7QUFGRSxPQUFYO0FBSUE7QUFDRDs7QUFDRDdELElBQUFBLENBQUMsQ0FBQyx1RUFBRCxDQUFELENBQTJFOEQsS0FBM0U7QUFDQTlELElBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIrRCxLQUFuQixDQUF5QixNQUF6QjtBQUNELEdBWEQ7QUFZQS9ELEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJDLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLGVBQXRCO0FBQUEsd0VBQXNDLGtCQUFnQmEsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BDQSxjQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEb0MsQ0FFcEM7O0FBQ0lPLGNBQUFBLFFBSGdDLEdBR3JCaEUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUUsU0FBUixFQUhxQjtBQUloQ0MsY0FBQUEsVUFKZ0MsR0FJbEJsRSxDQUFDLENBQUMsa0NBQUQsQ0FKaUI7QUFLcENrRSxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDTXpDLGNBQUFBLElBTjhCLEdBTXZCMUIsQ0FBQyxDQUFDLHNCQUFELENBTnNCO0FBT3BDMEIsY0FBQUEsSUFBSSxDQUFDQyxXQUFMLENBQWlCLGlCQUFqQixFQUFvQ2IsUUFBcEMsQ0FBNkMsb0JBQTdDO0FBUG9DO0FBQUE7QUFBQSxxQkFTWGMsS0FBSyxDQUFDd0MsSUFBTixDQUFXLDBDQUF3Q3JFLFdBQW5ELEVBQStEaUUsUUFBL0QsQ0FUVzs7QUFBQTtBQVM1QmxDLGNBQUFBLE9BVDRCO0FBVTVCQyxjQUFBQSxJQVY0QixHQVVyQkQsT0FBTyxDQUFDQyxJQVZhOztBQVdsQyxrQkFBSUEsSUFBSSxLQUFLLENBQWIsRUFBZ0I7QUFDZC9CLGdCQUFBQSxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQnFFLE9BQS9CO0FBR0EzQyxnQkFBQUEsSUFBSSxDQUFDWixRQUFMLENBQWMsaUJBQWQsRUFBaUNhLFdBQWpDLENBQTZDLG9CQUE3QztBQUNELGVBTEQsTUFLSztBQUNIM0IsZ0JBQUFBLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCcUUsT0FBL0IsOENBQ3NDdEMsSUFEdEMsYUFERyxDQUlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FMLGdCQUFBQSxJQUFJLENBQUNaLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ2EsV0FBakMsQ0FBNkMsb0JBQTdDO0FBQ0FlLGdCQUFBQSx1QkFBdUIsQ0FBQ25DLElBQXhCLENBQTZCK0QsTUFBN0IsQ0FBb0MsSUFBcEMsRUFBMEMsS0FBMUM7QUFDQW5FLGdCQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBVytELE1BQVgsQ0FBa0IsSUFBbEIsRUFBd0IsS0FBeEI7QUFDRDs7QUE1QmlDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBOEI1QkMsY0FBQUEsT0E5QjRCLEdBOEJsQixhQUFNQyxRQUFOLENBQWV6QyxJQTlCRyxFQStCbEM7O0FBQ0FtQyxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDQW5FLGNBQUFBLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCcUUsT0FBL0IsNkNBQ3FDRSxPQURyQztBQUdBN0MsY0FBQUEsSUFBSSxDQUFDWixRQUFMLENBQWMsaUJBQWQsRUFBaUNhLFdBQWpDLENBQTZDLHFCQUE3Qzs7QUFwQ2tDO0FBc0NwQzhDLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2Z6RSxnQkFBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JtRSxNQUF4QjtBQUNELGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBdENvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF0Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJDQW5FLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IyQyxFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFNO0FBQ2xDLFFBQUcsQ0FBQzVDLFdBQUosRUFBZ0I7QUFDZFosTUFBQUEsS0FBSyxDQUFDeUUsSUFBTixDQUFXO0FBQ1RsQyxRQUFBQSxJQUFJLEVBQUUsT0FERztBQUVUbUMsUUFBQUEsS0FBSyxFQUFFO0FBRkUsT0FBWDtBQUlBO0FBQ0Q7O0FBQ0Q3RCxJQUFBQSxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQitELEtBQTFCLENBQWdDLE1BQWhDO0FBQ0QsR0FURDtBQVdBL0QsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkMsRUFBVixDQUFhLFFBQWIsRUFBdUIsa0JBQXZCO0FBQUEsd0VBQTJDLGtCQUFPYSxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6Q0EsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUR5QyxvQkFFdEN6RCxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CeUIsR0FBbkIsTUFBNEIsRUFBNUIsSUFBa0N6QixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCeUIsR0FBbEIsTUFBMkIsRUFGdkI7QUFBQTtBQUFBO0FBQUE7O0FBR3ZDekIsY0FBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQnFFLE9BQWpCO0FBSHVDOztBQUFBO0FBUXJDTCxjQUFBQSxRQVJxQyxHQVExQixJQUFJVSxRQUFKLEVBUjBCO0FBU3JDUixjQUFBQSxVQVRxQyxHQVN2QmxFLENBQUMsQ0FBQyx5Q0FBRCxDQVRzQjtBQVV6Q2dFLGNBQUFBLFFBQVEsQ0FBQ1csTUFBVCxDQUFnQixTQUFoQixFQUEyQjNFLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJ5QixHQUFuQixFQUEzQjtBQUNBdUMsY0FBQUEsUUFBUSxDQUFDVyxNQUFULENBQWdCLE1BQWhCLEVBQXdCM0UsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnlCLEdBQWxCLEVBQXhCLEVBWHlDLENBWXpDOztBQUNBekIsY0FBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JtRSxNQUF4QjtBQUNNekMsY0FBQUEsSUFkbUMsR0FjNUIxQixDQUFDLENBQUMseUJBQUQsQ0FkMkI7QUFlekMwQixjQUFBQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DYixRQUFwQyxDQUE2QyxvQkFBN0M7QUFmeUM7QUFBQTtBQUFBLHFCQWlCaEJjLEtBQUssQ0FBQ3dDLElBQU4sQ0FBVyxvQ0FBa0NyRSxXQUE3QyxFQUF5RGlFLFFBQXpELENBakJnQjs7QUFBQTtBQWlCakNsQyxjQUFBQSxPQWpCaUM7QUFrQmpDQyxjQUFBQSxJQWxCaUMsR0FrQjFCRCxPQUFPLENBQUNDLElBbEJrQjtBQW1CdkNtQyxjQUFBQSxVQUFVLENBQUNHLE9BQVgsK0RBRVd0QyxJQUZYO0FBS0FMLGNBQUFBLElBQUksQ0FBQ1osUUFBTCxDQUFjLGlCQUFkLEVBQWlDYSxXQUFqQyxDQUE2QyxvQkFBN0M7QUFDQVMsY0FBQUEsaUJBQWlCO0FBekJzQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTRCakNtQyxjQUFBQSxPQTVCaUMsR0E0QnZCLGFBQU1DLFFBQU4sQ0FBZXpDLElBNUJRLEVBNkJ2Qzs7QUFDQW1DLGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNBbkUsY0FBQUEsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NxRSxPQUF0Qyw2Q0FDcUNFLE9BRHJDO0FBR0E3QyxjQUFBQSxJQUFJLENBQUNaLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ2EsV0FBakMsQ0FBNkMscUJBQTdDOztBQWxDdUM7QUFvQ3pDOEMsY0FBQUEsVUFBVSxDQUFDLFlBQU07QUFDZnpFLGdCQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qm1FLE1BQXhCO0FBQ0QsZUFGUyxFQUVQLElBRk8sQ0FBVjs7QUFwQ3lDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTNDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeUNBbkUsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkMsRUFBVixDQUFhLE9BQWIsRUFBc0IsaUJBQXRCLEVBQXlDLFlBQVc7QUFDbEQsUUFBSWlDLEVBQUUsR0FBRzVFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZDLElBQVIsQ0FBYSxJQUFiLENBQVQ7QUFDQTdDLElBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJCLFdBQVIsQ0FBb0IsVUFBcEIsRUFBZ0NiLFFBQWhDLENBQXlDLG9CQUF6Qzs7QUFDQSxRQUFJO0FBQ0YsVUFBTWdCLE9BQU8sR0FBR0YsS0FBSyxDQUFDd0MsSUFBTixDQUFXLHdDQUFzQ1EsRUFBakQsQ0FBaEI7QUFDQSxVQUFNN0MsSUFBSSxHQUFHRCxPQUFPLENBQUNDLElBQXJCO0FBRUFLLE1BQUFBLGlCQUFpQjtBQUVsQixLQU5ELENBTUUsT0FBT3lDLEtBQVAsRUFBYyxDQUNkO0FBQ0Q7QUFDRixHQVpEO0FBY0E3RSxFQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjJDLEVBQXRCLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdEMzQyxJQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQitELEtBQXJCLENBQTJCLE1BQTNCO0FBQ0QsR0FGRDtBQUdBL0QsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjJDLEVBQWxCLENBQXFCLFFBQXJCO0FBQUEsd0VBQStCLGtCQUFPYSxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3QkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0lTLGNBQUFBLFVBRnlCLEdBRVpsRSxDQUFDLENBQUMsb0NBQUQsQ0FGVztBQUc3QmtFLGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNNekMsY0FBQUEsSUFKdUIsR0FJaEIxQixDQUFDLENBQUMscUJBQUQsQ0FKZSxFQUs3Qjs7QUFDQTBCLGNBQUFBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixpQkFBakIsRUFBb0NiLFFBQXBDLENBQTZDLG9CQUE3QztBQUNJZ0UsY0FBQUEsUUFQeUIsR0FPZCxJQUFJSixRQUFKLEVBUGM7QUFRN0JJLGNBQUFBLFFBQVEsQ0FBQ0gsTUFBVCxDQUFnQixNQUFoQixFQUF3QjNFLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYStFLElBQWIsQ0FBa0IsT0FBbEIsRUFBMkIsQ0FBM0IsQ0FBeEIsRUFSNkIsQ0FTN0I7O0FBVDZCO0FBQUE7QUFBQSxxQkFXTG5ELEtBQUssQ0FBQ3dDLElBQU4sQ0FBVyw0QkFBWCxFQUF5Q1UsUUFBekMsRUFBbUQ7QUFDdkVFLGdCQUFBQSxPQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVDtBQUQ4RCxlQUFuRCxDQVhLOztBQUFBO0FBV3JCbEQsY0FBQUEsT0FYcUI7QUFBQTtBQUFBLHFCQWdCUkEsT0FBTyxDQUFDQyxJQWhCQTs7QUFBQTtBQWdCckJBLGNBQUFBLElBaEJxQjtBQWlCM0IvQixjQUFBQSxDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ3FFLE9BQWpDLHFGQUVpQ3RDLElBQUksQ0FBQ2tELFFBRnRDLHdDQUdhbEQsSUFBSSxDQUFDbUQsT0FIbEIsb0RBakIyQixDQXVCM0I7O0FBQ0Esa0JBQUduRCxJQUFJLENBQUNtRCxPQUFMLEdBQWUsQ0FBbEIsRUFBcUI7QUFDbkJDLGdCQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSw4QkFBWixFQUE0QyxRQUE1QztBQUNEOztBQUNEMUQsY0FBQUEsSUFBSSxDQUFDWixRQUFMLENBQWMsaUJBQWQsRUFBaUNhLFdBQWpDLENBQTZDLG9CQUE3QztBQUNBeEIsY0FBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcrRCxNQUFYLENBQWtCLElBQWxCLEVBQXdCLEtBQXhCO0FBNUIyQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQThCckJDLGNBQUFBLE9BOUJxQixHQThCWCxhQUFNQyxRQUFOLENBQWV6QyxJQTlCSixFQStCM0I7O0FBQ0FtQyxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDQW5FLGNBQUFBLENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDcUUsT0FBakMsNkNBQ3FDRSxPQURyQztBQUdBN0MsY0FBQUEsSUFBSSxDQUFDWixRQUFMLENBQWMsaUJBQWQsRUFBaUNhLFdBQWpDLENBQTZDLHFCQUE3Qzs7QUFwQzJCO0FBc0M3QjhDLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2Z6RSxnQkFBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JtRSxNQUF4QjtBQUNELGVBRlMsRUFFUCxJQUZPLENBQVYsQ0F0QzZCLENBMEM3Qjs7QUExQzZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQS9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOENBbkUsRUFBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQjJDLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQU07QUFDbkMsUUFBRyxDQUFDNUMsV0FBSixFQUFnQjtBQUNkWixNQUFBQSxLQUFLLENBQUN5RSxJQUFOLENBQVc7QUFDVGxDLFFBQUFBLElBQUksRUFBRSxPQURHO0FBRVRtQyxRQUFBQSxLQUFLLEVBQUU7QUFGRSxPQUFYO0FBSUE7QUFDRDs7QUFDRDdELElBQUFBLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCK0QsS0FBekIsQ0FBK0IsTUFBL0I7QUFDRCxHQVREO0FBV0EvRCxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyQyxFQUFWLENBQWEsUUFBYixFQUF1QixtQkFBdkI7QUFBQSx3RUFBNEMsa0JBQU9hLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFDQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDSXFCLGNBQUFBLFFBRnNDLEdBRTNCLElBQUlKLFFBQUosQ0FBYTFFLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCLENBQXZCLENBQWIsQ0FGMkI7QUFHdENrRSxjQUFBQSxVQUhzQyxHQUd6QmxFLENBQUMsQ0FBQyx3Q0FBRCxDQUh3QjtBQUsxQ2tFLGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNNekMsY0FBQUEsSUFOb0MsR0FNN0IxQixDQUFDLENBQUMsMEJBQUQsQ0FONEI7QUFPMUMwQixjQUFBQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DYixRQUFwQyxDQUE2QyxvQkFBN0M7QUFQMEM7QUFBQTtBQUFBLHFCQVVsQmMsS0FBSyxDQUFDd0MsSUFBTixDQUFXLDBDQUF3Q3JFLFdBQW5ELEVBQWdFK0UsUUFBaEUsQ0FWa0I7O0FBQUE7QUFVbENoRCxjQUFBQSxPQVZrQztBQVdsQzBDLGNBQUFBLFFBWGtDLEdBV3ZCMUMsT0FBTyxDQUFDQyxJQVhlO0FBWXhDL0IsY0FBQUEsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNxRSxPQUFyQywrREFFV0csUUFGWDtBQUtBOUMsY0FBQUEsSUFBSSxDQUFDWixRQUFMLENBQWMsaUJBQWQsRUFBaUNhLFdBQWpDLENBQTZDLHFCQUE3QztBQUNBeEIsY0FBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcrRCxNQUFYLENBQWtCLElBQWxCLEVBQXdCLEtBQXhCO0FBbEJ3QztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW9CbENDLGNBQUFBLE9BcEJrQyxHQW9CeEIsYUFBTUMsUUFBTixDQUFlekMsSUFwQlMsRUFxQnhDOztBQUNBbUMsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ0FuRSxjQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ3FFLE9BQXJDLDZDQUNxQ0UsT0FEckM7QUFHQTdDLGNBQUFBLElBQUksQ0FBQ1osUUFBTCxDQUFjLGlCQUFkLEVBQWlDYSxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBMUJ3QztBQTRCMUM4QyxjQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmekUsZ0JBQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCbUUsTUFBeEI7QUFDRCxlQUZTLEVBRVAsSUFGTyxDQUFWOztBQTVCMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQ0FuRSxFQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjJDLEVBQXRCLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdEMsUUFBRyxDQUFDNUMsV0FBSixFQUFnQjtBQUNkWixNQUFBQSxLQUFLLENBQUN5RSxJQUFOLENBQVc7QUFDVGxDLFFBQUFBLElBQUksRUFBRSxPQURHO0FBRVRtQyxRQUFBQSxLQUFLLEVBQUU7QUFGRSxPQUFYO0FBSUE7QUFDRDs7QUFDRDdELElBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIrRCxLQUFuQixDQUF5QixNQUF6QjtBQUNELEdBVEQ7QUFVQS9ELEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLHFCQUF2QjtBQUFBLHdFQUE4QyxrQkFBT2EsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNUNBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNJcUIsY0FBQUEsUUFGd0MsR0FFN0IsSUFBSUosUUFBSixDQUFhMUUsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUIsQ0FBekIsQ0FBYixDQUY2QjtBQUd4Q2tFLGNBQUFBLFVBSHdDLEdBRzNCbEUsQ0FBQyxDQUFDLGtDQUFELENBSDBCO0FBSzVDa0UsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ016QyxjQUFBQSxJQU5zQyxHQU0vQjFCLENBQUMsQ0FBQyw0QkFBRCxDQU44QjtBQU81QzBCLGNBQUFBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixpQkFBakIsRUFBb0NiLFFBQXBDLENBQTZDLG9CQUE3QztBQVA0QztBQUFBO0FBQUEscUJBU3BCYyxLQUFLLENBQUN3QyxJQUFOLENBQVcsd0NBQXNDckUsV0FBakQsRUFBOEQrRSxRQUE5RCxDQVRvQjs7QUFBQTtBQVNwQ2hELGNBQUFBLE9BVG9DO0FBVXBDMEMsY0FBQUEsUUFWb0MsR0FVekIxQyxPQUFPLENBQUNDLElBVmlCO0FBVzFDL0IsY0FBQUEsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JxRSxPQUEvQiwrREFFV0csUUFGWDtBQUtBOUMsY0FBQUEsSUFBSSxDQUFDWixRQUFMLENBQWMsaUJBQWQsRUFBaUNhLFdBQWpDLENBQTZDLHFCQUE3QztBQUNBeEIsY0FBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVcrRCxNQUFYLENBQWtCLElBQWxCLEVBQXdCLEtBQXhCO0FBakIwQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW1CcENDLGNBQUFBLE9BbkJvQyxHQW1CMUIsYUFBTUMsUUFBTixDQUFlekMsSUFuQlcsRUFvQjFDOztBQUNBbUMsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ0FuRSxjQUFBQSxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQnFFLE9BQS9CLDZDQUNxQ0UsT0FEckM7QUFHQTdDLGNBQUFBLElBQUksQ0FBQ1osUUFBTCxDQUFjLGlCQUFkLEVBQWlDYSxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBekIwQztBQTJCNUM4QyxjQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmekUsZ0JBQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCbUUsTUFBeEI7QUFDRCxlQUZTLEVBRVAsSUFGTyxDQUFWOztBQTNCNEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErQkFuRSxFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCMkMsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsVUFBVWEsQ0FBVixFQUFhO0FBQ3ZDeEQsSUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUYsR0FBUixDQUFZLE1BQVo7QUFDSCxHQUZEO0FBR0FyRixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyQyxFQUFWLENBQWEsT0FBYixFQUFxQixXQUFyQixFQUFpQyxZQUFZO0FBQzNDLFFBQUcsQ0FBQzVDLFdBQUosRUFBZ0I7QUFDWlosTUFBQUEsS0FBSyxDQUFDeUUsSUFBTixDQUFXO0FBQ1BsQyxRQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQbUMsUUFBQUEsS0FBSyxFQUFFO0FBRkEsT0FBWDtBQUlBO0FBQ0g7O0FBQ0Q3QixJQUFBQSxnQkFBZ0I7QUFDaEJoQyxJQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQitELEtBQXJCLENBQTJCLE1BQTNCO0FBQ0QsR0FWRDtBQVlBL0QsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkMsRUFBVixDQUFhLFFBQWIsRUFBdUIsZ0JBQXZCO0FBQUEsd0VBQXlDLGtCQUFPYSxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2Q0EsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRHVDLENBRXZDOztBQUZ1QyxrQkFHbkMxRCxXQUhtQztBQUFBO0FBQUE7QUFBQTs7QUFJbkNaLGNBQUFBLEtBQUssQ0FBQ3lFLElBQU4sQ0FBVztBQUNUbEMsZ0JBQUFBLElBQUksRUFBRSxPQURHO0FBRVRtQyxnQkFBQUEsS0FBSyxFQUFFO0FBRkUsZUFBWDtBQUptQzs7QUFBQTtBQVVuQ3lCLGNBQUFBLEdBVm1DLEdBVTdCQyxPQUFPLENBQUMsc0RBQUQsQ0FWc0I7O0FBQUEsb0JBV3BDRCxHQUFHLElBQUksQ0FYNkI7QUFBQTtBQUFBO0FBQUE7O0FBWWpDUixjQUFBQSxRQVppQyxHQVl0QixJQUFJSixRQUFKLENBQWExRSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixDQUFwQixDQUFiLENBWnNCLEVBYXJDOztBQUNJa0UsY0FBQUEsVUFkaUMsR0FjcEJsRSxDQUFDLENBQUMsb0NBQUQsQ0FkbUI7QUFlckNrRSxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDTXpDLGNBQUFBLElBaEIrQixHQWdCeEIxQixDQUFDLENBQUMsMEJBQUQsQ0FoQnVCO0FBaUJyQzBCLGNBQUFBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixTQUFqQixFQUE0QmIsUUFBNUIsQ0FBcUMsb0JBQXJDO0FBakJxQztBQUFBO0FBQUEscUJBbUJiYyxLQUFLLENBQUN3QyxJQUFOLENBQVcsb0NBQWtDckUsV0FBN0MsRUFBMEQrRSxRQUExRCxDQW5CYTs7QUFBQTtBQW1CN0JoRCxjQUFBQSxPQW5CNkI7QUFvQjdCMEMsY0FBQUEsUUFwQjZCLEdBb0JsQjFDLE9BQU8sQ0FBQ0MsSUFwQlU7QUFxQm5DL0IsY0FBQUEsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNxRSxPQUFqQyxzR0FFV0csUUFGWDtBQUtBOUMsY0FBQUEsSUFBSSxDQUFDWixRQUFMLENBQWMsU0FBZCxFQUF5QmEsV0FBekIsQ0FBcUMscUJBQXJDO0FBQ0F4QixjQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBVytELE1BQVgsQ0FBa0IsSUFBbEIsRUFBd0IsS0FBeEI7QUEzQm1DO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBNkI3QkMsY0FBQUEsT0E3QjZCLEdBNkJuQixhQUFNQyxRQUFOLENBQWV6QyxJQTdCSSxFQThCbkM7O0FBQ0FtQyxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDQW5FLGNBQUFBLENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDcUUsT0FBakMsa0ZBQ3dFRSxPQUR4RTtBQUdBN0MsY0FBQUEsSUFBSSxDQUFDWixRQUFMLENBQWMsU0FBZCxFQUF5QmEsV0FBekIsQ0FBcUMscUJBQXJDOztBQW5DbUM7QUFzQ3ZDOEMsY0FBQUEsVUFBVSxDQUFDLFlBQU07QUFDZnpFLGdCQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qm1FLE1BQXhCO0FBQ0QsZUFGUyxFQUVQLElBRk8sQ0FBVjs7QUF0Q3VDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXpDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMENBbkUsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkMsRUFBVixDQUFhLE9BQWIsRUFBc0IsVUFBdEIsRUFBa0MsVUFBQ2EsQ0FBRCxFQUFPO0FBQ3ZDQSxJQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEdUMsQ0FFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0F6RCxJQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQitELEtBQXBCLENBQTBCLE1BQTFCO0FBQ0EvRCxJQUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlrQyxPQUFaO0FBQ0QsR0FSRDtBQVVBbEMsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkMsRUFBVixDQUFhLFFBQWIsRUFBdUIsZUFBdkI7QUFBQSx5RUFBd0MsbUJBQU9hLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3RDQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDSTZCLGNBQUFBLEdBRmtDLEdBRTVCQyxPQUFPLENBQUMscURBQUQsQ0FGcUI7O0FBQUEsb0JBR25DRCxHQUFHLElBQUksQ0FINEI7QUFBQTtBQUFBO0FBQUE7O0FBSWhDUixjQUFBQSxRQUpnQyxHQUlyQixJQUFJSixRQUFKLENBQWExRSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CLENBQW5CLENBQWIsQ0FKcUIsRUFLcEM7O0FBQ0lrRSxjQUFBQSxVQU5nQyxHQU1uQmxFLENBQUMsQ0FBQyxtQ0FBRCxDQU5rQjtBQU9wQ2tFLGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNNekMsY0FBQUEsSUFSOEIsR0FRdkIxQixDQUFDLENBQUMseUJBQUQsQ0FSc0I7QUFTcEMwQixjQUFBQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsU0FBakIsRUFBNEJiLFFBQTVCLENBQXFDLG9CQUFyQztBQVRvQztBQUFBO0FBQUEscUJBV1pjLEtBQUssQ0FBQ3dDLElBQU4sQ0FBVywrQkFBWCxFQUE0Q1UsUUFBNUMsQ0FYWTs7QUFBQTtBQVc1QmhELGNBQUFBLE9BWDRCO0FBWTVCMEMsY0FBQUEsUUFaNEIsR0FZakIxQyxPQUFPLENBQUNDLElBWlM7QUFhbEMvQixjQUFBQSxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ3FFLE9BQWhDLHNHQUVXRyxRQUZYO0FBS0E5QyxjQUFBQSxJQUFJLENBQUNaLFFBQUwsQ0FBYyxTQUFkLEVBQXlCYSxXQUF6QixDQUFxQyxxQkFBckM7QUFDQXhCLGNBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXK0QsTUFBWCxDQUFrQixJQUFsQixFQUF3QixLQUF4QjtBQW5Ca0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFxQjVCQyxjQUFBQSxPQXJCNEIsR0FxQmxCLGNBQU1DLFFBQU4sQ0FBZXpDLElBckJHLEVBc0JsQzs7QUFDQW1DLGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNBbkUsY0FBQUEsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NxRSxPQUFoQyxrRkFDd0VFLE9BRHhFO0FBR0E3QyxjQUFBQSxJQUFJLENBQUNaLFFBQUwsQ0FBYyxTQUFkLEVBQXlCYSxXQUF6QixDQUFxQyxxQkFBckM7O0FBM0JrQztBQThCdEM4QyxjQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmekUsZ0JBQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCbUUsTUFBeEI7QUFDRCxlQUZTLEVBRVAsSUFGTyxDQUFWOztBQTlCc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQ0QsQ0FuaUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZXR1ZGlhbnQvZXR1ZGlhbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICB0b2FzdDogdHJ1ZSxcclxuICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICB0aW1lcjogMzAwMCxcclxuICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgfSxcclxufSlcclxubGV0IGlkX2V0dWRpYW50ID0gZmFsc2U7XHJcbi8vICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuXHJcbiAgdmFyIHRhYmxlID0gJChcIiNkYXRhYmxlc19ldHVkaWFudFwiKS5EYXRhVGFibGUoe1xyXG4gICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICBdLFxyXG4gICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgIGFqYXg6IFwiL2V0dWRpYW50L2V0dWRpYW50cy9saXN0XCIsXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYoaWRfZXR1ZGlhbnQpIHtcclxuICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2V0dWRpYW50KS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJlRHJhd0NhbGxiYWNrOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG4gICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2RhdGFibGVzX2V0dWRpYW50JykpIHtcclxuICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2RhdGFibGVzX2V0dWRpYW50JykuRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICAvL0Fib3J0IHByZXZpb3VzIGFqYXggcmVxdWVzdCBpZiBpdCBpcyBzdGlsbCBpbiBwcm9jZXNzLlxyXG4gICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSBkdC5zZXR0aW5ncygpO1xyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGdldEFwcGVsUmR2ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgJCgnI3JkdjEnKS52YWwoXCJcIik7XHJcbiAgICAkKCcjcmR2MicpLnZhbChcIlwiKTtcclxuICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZGF0ZS1kLWFwcGVsIGlcIik7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2V0dWRpYW50L2V0dWRpYW50cy9nZXRBcHBlbFJkdi8nK2lkX2V0dWRpYW50KTtcclxuICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAkKCcjcmR2MScpLnZhbChkYXRhWydyZHYxJ10pO1xyXG4gICAgJCgnI3JkdjInKS52YWwoZGF0YVsncmR2MiddKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICB9ICBcclxufVxyXG5cclxuICBjb25zdCBnZXRFdHVkaWFudEluZm9zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2NhbmRpZGF0c19pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI3BhcmVudHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNhY2FkZW1pcXVlX2luZm9zJykuaHRtbCgnJyk7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjZGl2ZXJzJykuaHRtbCgnJyk7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyIGlcIik7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9ldHVkaWFudC9ldHVkaWFudHMvZ2V0RXR1ZGlhbnRJbmZvcy8nK2lkX2V0dWRpYW50KTtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNjYW5kaWRhdHNfaW5mb3MnKS5odG1sKGRhdGFbJ2NhbmRpZGF0c19pbmZvcyddKTtcclxuICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNwYXJlbnRzX2luZm9zJykuaHRtbChkYXRhWydwYXJlbnRzX2luZm9zJ10pO1xyXG4gICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2FjYWRlbWlxdWVfaW5mb3MnKS5odG1sKGRhdGFbJ2FjYWRlbWlxdWVfaW5mb3MnXSk7XHJcbiAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjZGl2ZXJzJykuaHRtbChkYXRhWydkaXZlcnMnXSk7XHJcbiAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgIH0gIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RXRhYmxpc3NlbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZXRhYmxpc3NlbWVudCcpO1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKCcjZXRhYmxpc3NlbWVudCcpLmh0bWwoZGF0YSkuc2VsZWN0MigpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSAgXHJcbiAgfVxyXG4gIC8vIGNvbnN0IGdldE5hdHVyZURlbWFuZGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICB0cnkge1xyXG4gIC8vICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25hdHVyZV9kZW1hbmRlJyk7XHJcbiAgLy8gICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgLy8gICAgICQoJyNuYXR1cmVkZW1hbmRlJykuaHRtbChkYXRhKS5zZWxlY3QyKCk7XHJcblxyXG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgLy8gICB9ICBcclxuICAvLyB9XHJcbiAgZ2V0RXRhYmxpc3NlbWVudCgpO1xyXG4gIC8vIGdldE5hdHVyZURlbWFuZGUoKTtcclxuXHJcbiAgY29uc3QgbG9hZEV4aXN0TWF0aWVyZXMgPSAoKSA9PiB7XHJcbiAgICAkKFwiLm1hdGllcmVFeGlzdCB0Ym9keVwiKS5odG1sKCc8aSBjbGFzcz1cImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIj48L2k+JylcclxuICAgIGF4aW9zLmdldCgnL2V0dWRpYW50L2V0dWRpYW50cy9tYXRpZXJlLycraWRfZXR1ZGlhbnQpXHJcbiAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICQoXCIubWF0aWVyZUV4aXN0IHRib2R5XCIpLmh0bWwoc3VjY2Vzcy5kYXRhLnRhYmxlKVxyXG4gICAgICAgICQoXCIjbWF0aWVyZURpc3BvXCIpLmh0bWwoc3VjY2Vzcy5kYXRhLm1hdGllcmVzKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3VjY2VzcylcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICBjb25zdCBsb2FkRXR1ZGlhbnRTdGF0dXQgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoJy9ldHVkaWFudC9ldHVkaWFudHMvc3RhdHV0LycraWRfZXR1ZGlhbnQpXHJcbiAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICQoXCIjc3RhdHV0XCIpLmh0bWwoc3VjY2Vzcy5kYXRhKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIGxldCB0YWJsZUxpc3RQcmVpbnNjcmlwdGlvbjtcclxuXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19ldHVkaWFudCB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgIGlkX2V0dWRpYW50ID0gbnVsbCxcclxuICAgICAgJCgnI2RhdGFibGVzX2V0dWRpYW50IHRyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJCgnI2RhdGFibGVzX2V0dWRpYW50IHRyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgIGlkX2V0dWRpYW50ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgdGFibGVMaXN0UHJlaW5zY3JpcHRpb24gPSAkKFwiI2RhdGFibGVzX2V0dWRpYW50X21vZGFsXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgXSxcclxuICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgYWpheDogXCIvZXR1ZGlhbnQvZXR1ZGlhbnRzL2xpc3QvcHJlaW5zY3JpcHRpb24vXCIraWRfZXR1ZGlhbnQsXHJcbiAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXRlU2F2ZTogdHJ1ZSxcclxuICAgICAgYkRlc3Ryb3k6IHRydWVcclxuICAgIH0pOyAgICBcclxuICAgIGxvYWRFeGlzdE1hdGllcmVzKCk7XHJcbiAgICBsb2FkRXR1ZGlhbnRTdGF0dXQoKTtcclxuICAgIC8vIGdldEV0dWRpYW50SW5mb3MoKTtcclxuICAgIC8vIGdldEFwcGVsUmR2KClcclxuICB9KVxyXG4gIFxyXG4gIGxldCBjYW5jZWxUb2tlbjtcclxuICAkKCdib2R5Jykub24oJ2NoYW5nZScsJyNldGFibGlzc2VtZW50JyxmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICBpZiAodHlwZW9mIGNhbmNlbFRva2VuICE9IHR5cGVvZiB1bmRlZmluZWQpIHtcclxuICAgICAgICBjYW5jZWxUb2tlbi5jYW5jZWwoXCJPcGVyYXRpb24gY2FuY2VsZWQgZHVlIHRvIG5ldyByZXF1ZXN0LlwiKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIC8vU2F2ZSB0aGUgY2FuY2VsIHRva2VuIGZvciB0aGUgY3VycmVudCByZXF1ZXN0XHJcbiAgICBjYW5jZWxUb2tlbiA9IGF4aW9zLkNhbmNlbFRva2VuLnNvdXJjZSgpXHJcbiAgICBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYiwgeyBjYW5jZWxUb2tlbjogY2FuY2VsVG9rZW4udG9rZW4gfSlcclxuICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAkKCcuZm9ybWF0aW9uJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwoc3VjY2Vzcy5kYXRhKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2hhbmdlJywnI2Zvcm1hdGlvbicsZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBpZF9mb3JtYSA9ICQodGhpcykudmFsKCk7XHJcbiAgICBheGlvcy5nZXQoJy9hcGkvYW5uZWVyZXNpZGFuYXQvJytpZF9mb3JtYSlcclxuICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICBpZihzdWNjZXNzLmRhdGEgIT09IDEpe1xyXG4gICAgICAgICQoJy5hbm5lZScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICAgJCgnI2FubmVlJykuaHRtbChzdWNjZXNzLmRhdGEpLnNlbGVjdDIoKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgJCgnLmFubmVlJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnI2VucmVnaXN0cmVyJykucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gIH0pXHJcblxyXG4gICQoJ2JvZHknKS5vbignY2hhbmdlJywnI2FubmVlJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnI2VucmVnaXN0cmVyJykucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gIH0pXHJcbiAgXHJcbiAgJChcIiN2YWxpZGVyLW1vZGFsXCIpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGlkX2V0dWRpYW50KTtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjdmFsaWRlcm1vZGFsIC5tb2RhbC1ib2R5ICNhbm5lZSwjdmFsaWRlcm1vZGFsIC5tb2RhbC1ib2R5ICNmb3JtYXRpb25cIikuZW1wdHkoKTtcclxuICAgICQoJyN2YWxpZGVybW9kYWwnKS5tb2RhbChcInNob3dcIilcclxuICB9KVxyXG4gICQoJ2JvZHknKS5vbignc3VibWl0JywnLmZvcm0tdmFsaWRlcicsYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGFsZXJ0KCd0ZXN0Jyk7XHJcbiAgICBsZXQgZm9ybWRhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiN2YWxpZGVybW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiLmZvcm0tdmFsaWRlciAuYnRuIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2V0dWRpYW50X3ZhbGlkZXIvJytpZF9ldHVkaWFudCxmb3JtZGF0YSlcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgaWYgKGRhdGEgPT09IDEpIHtcclxuICAgICAgICAkKFwiI3ZhbGlkZXJtb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5FdHVkaWFudCBkw6lqYSBpbnNjcml0IGRhbnMgbGEgbWVtZSBmb3JtYXRpb248L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgJChcIiN2YWxpZGVybW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBtb2RhbEFsZXJ0LnByZXBlbmQoXHJcbiAgICAgICAgLy8gICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAvLyAgICAgICA8cD4ke2RhdGF9PC9wPlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj5gXHJcbiAgICAgICAgLy8gKTsgIFxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRhYmxlTGlzdFByZWluc2NyaXB0aW9uLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI3ZhbGlkZXJtb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfSBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjAwMCkgIFxyXG4gIH0pXHJcblxyXG4gICQoJyNyZWxldmVfbm90ZScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjcmVsZXZlcy1ub3Rlcy1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSlcclxuXHJcbiAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsICcjcmVsZXZlbm90ZV9zYXZlJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKCQoXCIjbWF0aWVyZURpc3BvXCIpLnZhbCgpID09IFwiXCIgfHwgJChcIiNtYXRpZXJlTm90ZVwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+VmV1aWxsZXogcmVtcGxpciB0b3V0IGxlcyBjaGFtcHM8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNyZWxldmVzLW5vdGVzLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgIGZvcm1kYXRhLmFwcGVuZCgnbWF0aWVyZScsICQoXCIjbWF0aWVyZURpc3BvXCIpLnZhbCgpKVxyXG4gICAgZm9ybWRhdGEuYXBwZW5kKCdub3RlJywgJChcIiNtYXRpZXJlTm90ZVwiKS52YWwoKSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGZvcm1kYXRhKTtcclxuICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNyZWxldmVub3RlX3NhdmUgLmJ0biBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9hZGRtYXRpZXJlLycraWRfZXR1ZGlhbnQsZm9ybWRhdGEpXHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgIG1vZGFsQWxlcnQucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPHA+JHtkYXRhfTwvcD5cclxuICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgKTsgIFxyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgbG9hZEV4aXN0TWF0aWVyZXMoKTtcclxuICAgICAgIFxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjcmVsZXZlcy1ub3Rlcy1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCAyMDAwKVxyXG5cclxuICB9KVxyXG4gICQoXCJib2R5XCIpLm9uKCdjbGljaycsICcuZGVsZXRlX21hdGllcmUnLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBpZCA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImZhLXRyYXNoXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF4aW9zLnBvc3QoXCIvZXR1ZGlhbnQvZXR1ZGlhbnRzL21hdGllcmUvZGVsZXRlL1wiK2lkKVxyXG4gICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICBcclxuICAgICAgbG9hZEV4aXN0TWF0aWVyZXMoKTtcclxuICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gICQoJyNldHVkaWFudF9pbXBvcnQnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAkKFwiI2ltcG9ydGVyLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICB9KVxyXG4gICQoJyNzYXZlX2ltcG9ydCcpLm9uKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydGVyLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI3NhdmVfaW1wb3J0IC5idG4gaVwiKTtcclxuICAgIC8vIGNvbnN0IGJ1dHRvbiA9ICQoXCIjaW1wb3J0LWdyb3VwLWlucyAuYnRuXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsICQoJy5teWZpbGUnKS5wcm9wKCdmaWxlcycpWzBdKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2V0dWRpYW50L2V0dWRpYW50cy9pbXBvcnRcIiwgZm9ybURhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNpbXBvcnRlci1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8cD5Ob21icmUgZCdpbnNlcnRpb246PGI+JHtkYXRhLmluc2VydGVkfTwvYj48L3A+XHJcbiAgICAgICAgICAgIDxwPGI+JHtkYXRhLmV4aXN0ZWR9PC9iPiDDqXR1ZGlhbnRzIGV4aXN0PC9wPlxyXG4gICAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmV4aXN0ZWQpO1xyXG4gICAgICBpZihkYXRhLmV4aXN0ZWQgPiAwKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvZXR1ZGlhbnQvZXR1ZGlhbnRzL2Rvd25sb2FkXCIsICdfYmxhbmsnKTtcclxuICAgICAgfVxyXG4gICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICQoXCIjaW1wb3J0ZXItbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgXHJcbiAgXHJcbiAgICAvLyAkKFwiI3NhdmVfaW1wb3J0XCIpWzBdLnJlc2V0KCk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAkKFwiI2RhdGUtZC1hcHBlbFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmKCFpZF9ldHVkaWFudCl7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoXCIjZGF0ZS1kLWFwcGVsLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gIH0pXHJcblxyXG4gICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNkYXRlX2FwcGVsZV9zYXZlXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiNkYXRlX2FwcGVsZV9zYXZlXCIpWzBdKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcblxyXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2RhdGVfYXBwZWxlX3NhdmUgLmJ0biBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXR1ZGlhbnQvZXR1ZGlhbnRzL2RhdGVkZXJuaWVyYXBwZWwvJytpZF9ldHVkaWFudCwgZm9ybURhdGEpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgXHJcbiAgIFxyXG4gIH0pXHJcblxyXG4gICQoXCIjZXR1ZGlhbnRfc3RhdHV0XCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJChcIiNzdGF0dXQtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgfSlcclxuICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjY2hhbmdlX3N0YXR1dF9zYXZlXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiNjaGFuZ2Vfc3RhdHV0X3NhdmVcIilbMF0pO1xyXG4gICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI3N0YXR1dC1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuXHJcbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjY2hhbmdlX3N0YXR1dF9zYXZlIC5idG4gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldHVkaWFudC9ldHVkaWFudHMvc3RhdHV0L3BlcnNpc3QvJytpZF9ldHVkaWFudCwgZm9ybURhdGEpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNzdGF0dXQtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgJChcIiNzdGF0dXQtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgXHJcbiAgfSlcclxuICAkKCcubmF2LXBpbGxzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKHRoaXMpLnRhYignc2hvdycpO1xyXG4gIH0pXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsJyNtb2RpZmllcicsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoIWlkX2V0dWRpYW50KXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBnZXRFdHVkaWFudEluZm9zKCk7XHJcbiAgICAkKCcjbW9kaWZpZXJfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSlcclxuICBcclxuICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjZm9ybV9tb2RpZmllclwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gYWxlcnQoJ2V0Jyk7XHJcbiAgICBpZighaWRfZXR1ZGlhbnQpe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBVbiBFdHVkaWFudCEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IG1vZGlmaWVyIGNldHRlIGVucmVnaXN0cmVtZW50ID8nKTtcclxuICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoJyNmb3JtX21vZGlmaWVyJylbMF0pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNtb2RpZmllcl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXJfbW9kYWwgYnV0dG9uIGlcIik7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9lZGl0X2luZm9zLycraWRfZXR1ZGlhbnQsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+XHJcbiAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgfSwgMjUwMCkgIFxyXG4gIH0pXHJcbiAgJChcImJvZHlcIikub24oJ2NsaWNrJywgXCIjYWpvdXRlclwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gJCgnI2Fqb3V0ZXJfbW9kYWwgI2NhbmRpZGF0c19pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgLy8gJCgnI2Fqb3V0ZXJfbW9kYWwgI3BhcmVudHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgIC8vICQoJyNham91dGVyX21vZGFsICNhY2FkZW1pcXVlX2luZm9zJykuaHRtbCgnJyk7XHJcbiAgICAvLyAkKCcjYWpvdXRlcl9tb2RhbCAjZGl2ZXJzJykuaHRtbCgnJyk7XHJcbiAgICAkKCcjYWpvdXRlcl9tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcclxuICB9KVxyXG4gIFxyXG4gICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNmb3JtX2Fqb3V0ZXJcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBham91dGVyIGNldHRlIGVucmVnaXN0cmVtZW50ID8nKTtcclxuICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoJyNmb3JtX2Fqb3V0ZXInKVswXSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2Fqb3V0ZXJfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI2Fqb3V0ZXJfbW9kYWwgYnV0dG9uIGlcIik7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXBsdXMnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V0dWRpYW50L2V0dWRpYW50cy9hZGRfaW5mb3MnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+XHJcbiAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXBsdXMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIiNham91dGVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPVwid2lkdGg6IDk4JTttYXJnaW46IDAgYXV0bztcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtcGx1cycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICB9LCAyNTAwKSAgXHJcbiAgfSlcclxufSkiXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfZXR1ZGlhbnQiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJyZXNwb25zaXZlIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImFkZENsYXNzIiwicHJlRHJhd0NhbGxiYWNrIiwic2V0dGluZ3MiLCJmbiIsImlzRGF0YVRhYmxlIiwiZHQiLCJqcVhIUiIsImFib3J0IiwibGFuZ3VhZ2UiLCJ1cmwiLCJnZXRBcHBlbFJkdiIsInZhbCIsImljb24iLCJyZW1vdmVDbGFzcyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJnZXRFdHVkaWFudEluZm9zIiwiaHRtbCIsInNlbGVjdDIiLCJnZXRFdGFibGlzc2VtZW50IiwibG9hZEV4aXN0TWF0aWVyZXMiLCJ0aGVuIiwic3VjY2VzcyIsIm1hdGllcmVzIiwiZXJyIiwibG9hZEV0dWRpYW50U3RhdHV0IiwidGFibGVMaXN0UHJlaW5zY3JpcHRpb24iLCJvbiIsImhhc0NsYXNzIiwiYXR0ciIsInN0YXRlU2F2ZSIsImJEZXN0cm95IiwiY2FuY2VsVG9rZW4iLCJpZF9ldGFiIiwidW5kZWZpbmVkIiwiY2FuY2VsIiwiQ2FuY2VsVG9rZW4iLCJzb3VyY2UiLCJ0b2tlbiIsImNzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlkX2Zvcm1hIiwicmVtb3ZlQXR0ciIsImZpcmUiLCJ0aXRsZSIsImVtcHR5IiwibW9kYWwiLCJmb3JtZGF0YSIsInNlcmlhbGl6ZSIsIm1vZGFsQWxlcnQiLCJyZW1vdmUiLCJwb3N0IiwicHJlcGVuZCIsInJlbG9hZCIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJGb3JtRGF0YSIsImFwcGVuZCIsImlkIiwiZXJyb3IiLCJmb3JtRGF0YSIsInByb3AiLCJoZWFkZXJzIiwiaW5zZXJ0ZWQiLCJleGlzdGVkIiwid2luZG93Iiwib3BlbiIsInRhYiIsInJlcyIsImNvbmZpcm0iXSwic291cmNlUm9vdCI6IiJ9