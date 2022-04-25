(self["webpackChunk"] = self["webpackChunk"] || []).push([["epreuve"],{

/***/ "./assets/components/administration/epreuve.js":
/*!*****************************************************!*\
  !*** ./assets/components/administration/epreuve.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

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
var rattrapage = 0;
var id_epreuve = null;
var idEpreuves = [];
var idInscriptions = [];
$(document).ready(function () {
  var tableEpreuveNormal = $("#list_epreuve_normal").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/administration/epreuve/list/normal",
    processing: true,
    serverSide: true,
    deferRender: true,
    drawCallback: function drawCallback() {
      idEpreuves.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_epreuve).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  var tableEpreuveRattrapage = $("#list_epreuve_rattrapage").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/administration/epreuve/list/rattrapage",
    processing: true,
    serverSide: true,
    deferRender: true,
    drawCallback: function drawCallback() {
      idEpreuves.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_epreuve).addClass('active_databales');
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('body').on('click', '#list_epreuve_normal tbody tr', function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idEpreuves.indexOf(input.attr("id"));
      idEpreuves.splice(index, 1);
    } else {
      input.prop("checked", true);
      idEpreuves.push(input.attr("id"));
    }
  });
  $('body').on('click', '#list_epreuve_rattrapage tbody tr', function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idEpreuves.indexOf(input.attr("id"));
      idEpreuves.splice(index, 1);
    } else {
      input.prop("checked", true);
      idEpreuves.push(input.attr("id"));
    }
  });
  $('body').on('dblclick', '#list_epreuve_normal tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      $('#inscription-modal').attr('disabled', true);
      id_epreuve = null;
    } else {
      $("#list_epreuve_normal tbody tr").removeClass('active_databales');
      $("#list_epreuve_rattrapage tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_epreuve = $(this).attr('id');
    }
  });
  $('body').on('dblclick', '#list_epreuve_rattrapage tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      $('#inscription-modal').attr('disabled', true);
      id_epreuve = null;
    } else {
      $("#list_epreuve_normal tbody tr").removeClass('active_databales');
      $("#list_epreuve_rattrapage tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_epreuve = $(this).attr('id');
    }
  });
  $('.nav-pills a').on('click', function (e) {
    $(this).tab('show');
    id_epreuve = null;
    idEpreuves = [];
    $("#list_epreuve_normal tbody tr").removeClass('active_databales');
    $("#list_epreuve_rattrapage tbody tr").removeClass('active_databales');
    $("input").prop("checked", false);

    if ($(this).html() == 'Session normal') {
      rattrapage = 0;
    } else {
      rattrapage = 1;
    }
  });
  $("#import_epreuve").on("click", function () {
    $("#import_en_masse").modal("show");
    $("#import_en_masse .modal-body .alert").remove();
  });
  $("#epreuve_canvas").on('click', function () {
    window.open("/administration/epreuve/canvas", '_blank');
  });
  $("#import_epreuve_save").on("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var formData, modalAlert, icon, request, _response, message;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#import_en_masse .modal-body .alert");
              modalAlert.remove();
              icon = $("#epreuve_enregistre i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context.prev = 6;
              _context.next = 9;
              return axios.post('/administration/epreuve/import', formData);

            case 9:
              request = _context.sent;
              _response = request.data;
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response, "</p>\n              </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context.next = 24;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](6);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              modalAlert.remove();
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[6, 17]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $("#affilier_etudiant").on('click', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var icon, formData, request, _response2, message, _icon, _request, _response3, _message;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();

              if (!(rattrapage === 0)) {
                _context2.next = 28;
                break;
              }

              if (!(idEpreuves.length == 0)) {
                _context2.next = 5;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context2.abrupt("return");

            case 5:
              icon = $("#affilier_etudiant i");
              icon.removeClass('fa-link').addClass("fa-spinner fa-spin");
              _context2.prev = 7;
              formData = new FormData();
              formData.append("epreuves", JSON.stringify(idEpreuves));
              _context2.next = 12;
              return axios.post('/administration/epreuve/affiliation_normale', formData);

            case 12:
              request = _context2.sent;
              _response2 = request.data;
              icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

              if (_response2.total > 0) {
                window.open("/" + _response2.zipname, "_blank");
              } else {
                Toast.fire({
                  icon: 'info',
                  title: "Epreuves déja affilier ou valider"
                });
              }

              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context2.next = 26;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](7);
              console.log(_context2.t0);
              message = _context2.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

            case 26:
              _context2.next = 51;
              break;

            case 28:
              if (id_epreuve) {
                _context2.next = 31;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context2.abrupt("return");

            case 31:
              _icon = $("#affilier_etudiant i");

              _icon.removeClass('fa-link').addClass("fa-spinner fa-spin");

              _context2.prev = 33;
              _context2.next = 36;
              return axios.get('/administration/epreuve/etudiants/' + id_epreuve);

            case 36:
              _request = _context2.sent;
              _response3 = _request.data;

              _icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

              $(".list_etudiants").html(_response3);
              $(".check_all_etudiant").prop("checked", false);
              $("#affilier_list_etudiant").modal("show");
              $("#affilier_list_etudiant .modal-body .alert").remove();
              _context2.next = 51;
              break;

            case 45:
              _context2.prev = 45;
              _context2.t1 = _context2["catch"](33);
              console.log(_context2.t1);
              _message = _context2.t1.response.data;
              Toast.fire({
                icon: 'error',
                title: _message
              });

              _icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

            case 51:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[7, 20], [33, 45]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  $('body').on('click', '.check_etudiant', function () {
    var index = idInscriptions.indexOf($(this).val());

    if (index != -1) {
      idInscriptions.splice(index, 1);
    } else {
      idInscriptions.push($(this).val());
    }

    console.log(idInscriptions);
  });
  $('body').on('click', '.check_all_etudiant', function () {
    idInscriptions = [];
    var inscriptions = $(".check_etudiant");

    if ($(".check_all_etudiant").prop('checked') == true) {
      inscriptions.prop("checked", true);
      inscriptions.map(function () {
        idInscriptions.push(this.value);
      });
    } else {
      inscriptions.prop("checked", false);
    }

    console.log(idInscriptions);
  });
  $("#save_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var icon, modalAlert, formData, request, _response4, message;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              icon = $("#save_list_etudiant i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              modalAlert = $("#affilier_list_etudiant .modal-body .alert");
              modalAlert.remove();
              formData = new FormData();
              formData.append("idInscriptions", JSON.stringify(idInscriptions));
              formData.append("idEpreuve", id_epreuve);
              _context3.prev = 8;
              _context3.next = 11;
              return axios.post('/administration/epreuve/affiliation_rattrapage', formData);

            case 11:
              request = _context3.sent;
              _response4 = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              $("#affilier_list_etudiant .modal-body").prepend("<div class=\"alert alert-success\">\n                    <p>".concat(_response4, "</p>\n                  </div>"));
              $(".list_etudiants").empty();
              tableEpreuveRattrapage.ajax.reload(null, false);
              tableEpreuveNormal.ajax.reload(null, false);
              _context3.next = 27;
              break;

            case 20:
              _context3.prev = 20;
              _context3.t0 = _context3["catch"](8);
              console.log(_context3.t0);
              message = _context3.t0.response.data;
              modalAlert.remove();
              $("#affilier_list_etudiant .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");

            case 27:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[8, 20]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  $("#cloture_epreuve").on('click', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var icon, formData, request, _response5, message;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context4.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context4.abrupt("return");

            case 4:
              icon = $("#cloture_epreuve i");
              icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
              _context4.prev = 6;
              formData = new FormData();
              formData.append("epreuves", JSON.stringify(idEpreuves));
              _context4.next = 11;
              return axios.post('/administration/epreuve/cloturer', formData);

            case 11:
              request = _context4.sent;
              _response5 = request.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin ");
              Toast.fire({
                icon: 'success',
                title: _response5
              });
              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context4.next = 25;
              break;

            case 19:
              _context4.prev = 19;
              _context4.t0 = _context4["catch"](6);
              console.log(_context4.t0);
              message = _context4.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[6, 19]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  $("#decloturer_epreuve").on('click', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var icon, formData, request, _response6, message;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context5.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context5.abrupt("return");

            case 4:
              icon = $("#decloturer_epreuve i");
              icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
              _context5.prev = 6;
              formData = new FormData();
              formData.append("epreuves", JSON.stringify(idEpreuves));
              _context5.next = 11;
              return axios.post('/administration/epreuve/decloturer', formData);

            case 11:
              request = _context5.sent;
              _response6 = request.data;
              icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin ");
              Toast.fire({
                icon: 'success',
                title: _response6
              });
              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context5.next = 25;
              break;

            case 19:
              _context5.prev = 19;
              _context5.t0 = _context5["catch"](6);
              console.log(_context5.t0);
              message = _context5.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[6, 19]]);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());
  $('#epreuve_imprimer').on('click', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var icon, request, _response7, message;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context6.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context6.abrupt("return");

            case 4:
              icon = $("#epreuve_imprimer i");
              icon.removeClass('fa-copy').addClass("fa-spinner fa-spin");
              _context6.prev = 6;
              _context6.next = 9;
              return axios.get('/administration/epreuve/checkifanonymat/' + id_epreuve);

            case 9:
              request = _context6.sent;
              _response7 = request.data;
              console.log(_response7);
              icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");
              $("#imprimer_epreuve").modal("show");
              $('#imprimer_epreuve .etudiant_info').html(_response7.html);
              $('#imprimer_epreuve .epreuve_title').html(_response7.id);

              if (_response7.anonymat == "oui") {
                $('#imprimer_epreuve .actions').html("<a href=\"#\" class=\"btn btn-success mt-3\" id=\"impression_clair\">Impression Clair</a>\n                    <a href=\"#\" class=\"btn btn-secondary mt-3\" id=\"impression_anonymat\">Impression Anonymat</a>");
              } else {
                $('#imprimer_epreuve .actions').html("<a href=\"#\" class=\"btn btn-success mt-3\" id=\"impression_clair\">Impression Clair</a>");
              }

              _context6.next = 25;
              break;

            case 19:
              _context6.prev = 19;
              _context6.t0 = _context6["catch"](6);
              console.log(_context6.t0);
              message = _context6.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[6, 19]]);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }());
  $('body').on('click', '#impression_clair', function (e) {
    e.preventDefault();
    window.open("/administration/epreuve/impression/" + id_epreuve + "/0", '_blank');
  });
  $('body').on('click', '#impression_anonymat', function (e) {
    e.preventDefault();
    window.open("/administration/epreuve/impression/" + id_epreuve + "/1", '_blank');
  });
  $('select').select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context7.next = 7;
              break;
            }

            _context7.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context7.sent;
            response = request.data;

          case 7:
            $('#element').html('').select2();
            $('#module').html('').select2();
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id_formation = $(this).val();
            response = "";

            if (!(id_formation != "")) {
              _context8.next = 7;
              break;
            }

            _context8.next = 5;
            return axios.get('/api/promotion/' + id_formation);

          case 5:
            request = _context8.sent;
            response = request.data;

          case 7:
            $('#element').html('').select2();
            $('#module').html('').select2();
            $('#semestre').html('').select2();
            $('#promotion').html(response).select2();

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var id_promotion, request, requestt;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id_promotion = $(this).val();

            if (!(id_promotion != "")) {
              _context9.next = 10;
              break;
            }

            _context9.next = 4;
            return axios.get('/api/semestre/' + id_promotion);

          case 4:
            request = _context9.sent;
            response = request.data;
            _context9.next = 8;
            return axios.get('/api/niv1/' + id_promotion);

          case 8:
            requestt = _context9.sent;
            niv1 = requestt.data;

          case 10:
            $('#element').html('').select2();
            $('#module').html('').select2();
            $('#semestre').html(response).select2();

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var id_semestre, request;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id_semestre = $(this).val();

            if (!(id_semestre != "")) {
              _context10.next = 6;
              break;
            }

            _context10.next = 4;
            return axios.get('/api/module/' + id_semestre);

          case 4:
            request = _context10.sent;
            response = request.data;

          case 6:
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 8:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $("#module").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var id_module, request;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id_module = $(this).val();

            if (!(id_module != "")) {
              _context11.next = 6;
              break;
            }

            _context11.next = 4;
            return axios.get('/api/element/' + id_module);

          case 4:
            request = _context11.sent;
            response = request.data;

          case 6:
            $('#element').html(response).select2();

          case 7:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  })));
  $("#ajouter_epreuve").on("click", function (e) {
    e.preventDefault();
    $("#ajouter_epreuve-modal").modal("show");
  });
  $("body").on('submit', "#add_epreuve", /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var formData, modalAlert, icon, request, _response8, message;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault(); // var res = confirm('Vous voulez vraiment ajouter cette enregistrement ?');
              // if(res == 1){

              formData = new FormData($('#add_epreuve')[0]);
              modalAlert = $("#ajouter_epreuve-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#ajouter_epreuve-modal button i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              _context12.prev = 6;
              _context12.next = 9;
              return axios.post('/administration/epreuve/add_epreuve', formData);

            case 9:
              request = _context12.sent;
              _response8 = request.data;
              $("#ajouter_epreuve-modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n                  <p>".concat(_response8, "</p>\n                </div>"));
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
              tableEpreuveNormal.ajax.reload(null, false);
              _context12.next = 22;
              break;

            case 16:
              _context12.prev = 16;
              _context12.t0 = _context12["catch"](6);
              message = _context12.t0.response.data;
              modalAlert.remove();
              $("#ajouter_epreuve-modal .modal-body").prepend("<div class=\"alert alert-danger\" style=\"width: 98%;margin: 0 auto;\">".concat(message, "</div>"));
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");

            case 22:
              // }
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 23:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[6, 16]]);
    }));

    return function (_x7) {
      return _ref12.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-37f3ea"], () => (__webpack_exec__("./assets/components/administration/epreuve.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx1RkFBNkI7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyQkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFlBQVksbUJBQU8sQ0FBQyx1RkFBNkI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQztBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5ELHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3Q0FBd0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG59KVxyXG5cclxuICAgIGxldCByYXR0cmFwYWdlID0gMDtcclxuICAgIGxldCBpZF9lcHJldXZlID0gbnVsbDtcclxuICAgIGxldCBpZEVwcmV1dmVzID0gW107XHJcbiAgICBsZXQgaWRJbnNjcmlwdGlvbnMgPSBbXTtcclxuICAgIFxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgdmFyIHRhYmxlRXByZXV2ZU5vcm1hbCA9ICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2xpc3Qvbm9ybWFsXCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZEVwcmV1dmVzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfZXByZXV2ZSkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIHZhciB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlID0gJChcIiNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2xpc3QvcmF0dHJhcGFnZVwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2VwcmV1dmUpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjbGlzdF9lcHJldXZlX25vcm1hbCB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkRXByZXV2ZXMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgICAgICBpZEVwcmV1dmVzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5wdXNoKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZEVwcmV1dmVzLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQoJyNpbnNjcmlwdGlvbi1tb2RhbCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZF9lcHJldXZlID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2VwcmV1dmUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignZGJsY2xpY2snLCcjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQoJyNpbnNjcmlwdGlvbi1tb2RhbCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZF9lcHJldXZlID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2VwcmV1dmUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgICQoJy5uYXYtcGlsbHMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJCh0aGlzKS50YWIoJ3Nob3cnKVxyXG4gICAgICAgIGlkX2VwcmV1dmUgPSBudWxsO1xyXG4gICAgICAgIGlkRXByZXV2ZXMgPSBbXTtcclxuICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgJChcImlucHV0XCIpLnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmh0bWwoKSA9PSAnU2Vzc2lvbiBub3JtYWwnKSB7XHJcbiAgICAgICAgICAgIHJhdHRyYXBhZ2UgPSAwO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByYXR0cmFwYWdlID0gMTtcclxuICAgICAgICB9ICAgXHJcbiAgICBcclxuICAgIH0pXHJcbiAgICAkKFwiI2ltcG9ydF9lcHJldXZlXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4geyAgXHJcbiAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2VcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpXHJcbiAgICB9KVxyXG4gICAgJChcIiNlcHJldXZlX2NhbnZhc1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9jYW52YXNcIiwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2ltcG9ydF9lcHJldXZlX3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgIFxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZXByZXV2ZV9lbnJlZ2lzdHJlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9pbXBvcnQnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2FmZmlsaWVyX2V0dWRpYW50XCIpLm9uKCdjbGljaycgLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihyYXR0cmFwYWdlID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIHNlc3Npb24gbm9ybWFsXHJcbiAgICAgICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09MCkge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2FmZmlsaWVyX2V0dWRpYW50IGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxpbmsnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImVwcmV1dmVzXCIsIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2FmZmlsaWF0aW9uX25vcm1hbGUnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxpbmsnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS50b3RhbCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIityZXNwb25zZS56aXBuYW1lICxcIl9ibGFua1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdpbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRXByZXV2ZXMgZMOpamEgYWZmaWxpZXIgb3UgdmFsaWRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1saW5rJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZighaWRfZXByZXV2ZSkge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYWZmaWxpZXJfZXR1ZGlhbnQgaVwiKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbGluaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9ldHVkaWFudHMvJytpZF9lcHJldXZlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhOyAgICBcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxpbmsnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5saXN0X2V0dWRpYW50c1wiKS5odG1sKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgJChcIi5jaGVja19hbGxfZXR1ZGlhbnRcIikucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnRcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbGluaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5jaGVja19ldHVkaWFudCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaWRJbnNjcmlwdGlvbnMuaW5kZXhPZigkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICBpZihpbmRleCAhPSAtMSl7XHJcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb25zLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWRJbnNjcmlwdGlvbnMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRJbnNjcmlwdGlvbnMpO1xyXG5cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmNoZWNrX2FsbF9ldHVkaWFudCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlkSW5zY3JpcHRpb25zID0gW107XHJcbiAgICAgICAgY29uc3QgaW5zY3JpcHRpb25zID0gJChcIi5jaGVja19ldHVkaWFudFwiKTtcclxuICAgICAgICBpZigkKFwiLmNoZWNrX2FsbF9ldHVkaWFudFwiKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpbnNjcmlwdGlvbnMucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgaW5zY3JpcHRpb25zLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlkSW5zY3JpcHRpb25zLnB1c2godGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnNjcmlwdGlvbnMucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkSW5zY3JpcHRpb25zKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNzYXZlX2xpc3RfZXR1ZGlhbnRcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlX2xpc3RfZXR1ZGlhbnQgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkSW5zY3JpcHRpb25zXCIsIEpTT04uc3RyaW5naWZ5KGlkSW5zY3JpcHRpb25zKSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEVwcmV1dmVcIiwgaWRfZXByZXV2ZSlcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2FmZmlsaWF0aW9uX3JhdHRyYXBhZ2UnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhOyAgICBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgJChcIi5saXN0X2V0dWRpYW50c1wiKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjY2xvdHVyZV9lcHJldXZlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRFcHJldXZlcy5sZW5ndGggPT0wKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNjbG90dXJlX2VwcmV1dmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImVwcmV1dmVzXCIsIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvY2xvdHVyZXInLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjZGVjbG90dXJlcl9lcHJldXZlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRFcHJldXZlcy5sZW5ndGggPT0wKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNkZWNsb3R1cmVyX2VwcmV1dmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrLW9wZW4nKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZXByZXV2ZXNcIiwgSlNPTi5zdHJpbmdpZnkoaWRFcHJldXZlcykpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9kZWNsb3R1cmVyJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jay1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jay1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAkKCcjZXByZXV2ZV9pbXByaW1lcicpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZXByZXV2ZSkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNlcHJldXZlX2ltcHJpbWVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY29weScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2NoZWNraWZhbm9ueW1hdC8nK2lkX2VwcmV1dmUpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNvcHknKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjaW1wcmltZXJfZXByZXV2ZVwiKS5tb2RhbChcInNob3dcIilcclxuICAgICAgICAgICAgJCgnI2ltcHJpbWVyX2VwcmV1dmUgLmV0dWRpYW50X2luZm8nKS5odG1sKHJlc3BvbnNlLmh0bWwpO1xyXG4gICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuZXByZXV2ZV90aXRsZScpLmh0bWwocmVzcG9uc2UuaWQpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5hbm9ueW1hdCA9PSBcIm91aVwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuYWN0aW9ucycpLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9jbGFpclwiPkltcHJlc3Npb24gQ2xhaXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IG10LTNcIiBpZD1cImltcHJlc3Npb25fYW5vbnltYXRcIj5JbXByZXNzaW9uIEFub255bWF0PC9hPmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuYWN0aW9ucycpLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9jbGFpclwiPkltcHJlc3Npb24gQ2xhaXI8L2E+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY29weScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNpbXByZXNzaW9uX2NsYWlyJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvaW1wcmVzc2lvbi9cIitpZF9lcHJldXZlK1wiLzBcIiwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2ltcHJlc3Npb25fYW5vbnltYXQnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9pbXByZXNzaW9uL1wiK2lkX2VwcmV1dmUrXCIvMVwiLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnc2VsZWN0Jykuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0dCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYxLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgbml2MSA9IHJlcXVlc3R0LmRhdGEgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc2VtZXN0cmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycraWRfc2VtZXN0cmUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjbW9kdWxlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9tb2R1bGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX21vZHVsZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZWxlbWVudC8nK2lkX21vZHVsZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNham91dGVyX2VwcmV1dmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXsgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiI2Fqb3V0ZXJfZXByZXV2ZS1tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjYWRkX2VwcmV1dmVcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IGFqb3V0ZXIgY2V0dGUgZW5yZWdpc3RyZW1lbnQgPycpO1xyXG4gICAgICAgIC8vIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKCcjYWRkX2VwcmV1dmUnKVswXSk7XHJcbiAgICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2Fqb3V0ZXJfZXByZXV2ZS1tb2RhbCBidXR0b24gaVwiKTtcclxuICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvYWRkX2VwcmV1dmUnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI2Fqb3V0ZXJfZXByZXV2ZS1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPVwid2lkdGg6IDk4JTttYXJnaW46IDAgYXV0bztcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2Fqb3V0ZXJfZXByZXV2ZS1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgMjUwMCkgIFxyXG4gICAgICB9KVxyXG4gICAgXHJcbn0pIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCIvLyBpbiBvbGQgV2ViS2l0IHZlcnNpb25zLCBgZWxlbWVudC5jbGFzc0xpc3RgIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBnbG9iYWwgYERPTVRva2VuTGlzdGBcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxudmFyIGNsYXNzTGlzdCA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnc3BhbicpLmNsYXNzTGlzdDtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSBjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NVG9rZW5MaXN0UHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlID8gdW5kZWZpbmVkIDogRE9NVG9rZW5MaXN0UHJvdG90eXBlO1xuIiwiLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7IC8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gICAgPyBkb2N1bWVudC5kb21haW4gJiYgYWN0aXZlWERvY3VtZW50XG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcbiAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcbiAgICA6IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KTsgLy8gV1NIXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIgcHJvcHMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgcHJvcHNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIGhhbmRsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIHtcbiAgICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcbiAgfVxufVxuXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJyYXR0cmFwYWdlIiwiaWRfZXByZXV2ZSIsImlkRXByZXV2ZXMiLCJpZEluc2NyaXB0aW9ucyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGVFcHJldXZlTm9ybWFsIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJkcmF3Q2FsbGJhY2siLCJmb3JFYWNoIiwiZSIsImZpbmQiLCJwcm9wIiwiYWRkQ2xhc3MiLCJsYW5ndWFnZSIsInVybCIsInRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UiLCJvbiIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJhdHRyIiwic3BsaWNlIiwicHVzaCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0YWIiLCJodG1sIiwibW9kYWwiLCJyZW1vdmUiLCJ3aW5kb3ciLCJvcGVuIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwibW9kYWxBbGVydCIsImljb24iLCJheGlvcyIsInBvc3QiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwicHJlcGVuZCIsInJlbG9hZCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZmlyZSIsInRpdGxlIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvdGFsIiwiemlwbmFtZSIsImdldCIsInZhbCIsImluc2NyaXB0aW9ucyIsIm1hcCIsInZhbHVlIiwiZW1wdHkiLCJpZCIsImFub255bWF0Iiwic2VsZWN0MiIsImlkX2V0YWIiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJyZXF1ZXN0dCIsIm5pdjEiLCJpZF9zZW1lc3RyZSIsImlkX21vZHVsZSIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9