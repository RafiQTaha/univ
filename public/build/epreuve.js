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
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#list_epreuve_normal')) {
        var dt = $('#list_epreuve_normal').DataTable(); //Abort previous ajax request if it is still in process.

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
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#list_epreuve_rattrapage')) {
        var dt = $('#list_epreuve_rattrapage').DataTable(); //Abort previous ajax request if it is still in process.

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
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response.message, "</p>\n              </div>"));
              window.open("/" + _response.file, "_blank");
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context.next = 25;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](6);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              modalAlert.remove();
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[6, 18]]);
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
                _context2.next = 29;
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
              idEpreuves = [];
              _context2.next = 27;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](7);
              console.log(_context2.t0);
              message = _context2.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

            case 27:
              _context2.next = 52;
              break;

            case 29:
              if (id_epreuve) {
                _context2.next = 32;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context2.abrupt("return");

            case 32:
              _icon = $("#affilier_etudiant i");

              _icon.removeClass('fa-link').addClass("fa-spinner fa-spin");

              _context2.prev = 34;
              _context2.next = 37;
              return axios.get('/administration/epreuve/etudiants/' + id_epreuve);

            case 37:
              _request = _context2.sent;
              _response3 = _request.data;

              _icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

              $(".list_etudiants").html(_response3);
              $(".check_all_etudiant").prop("checked", false);
              $("#affilier_list_etudiant").modal("show");
              $("#affilier_list_etudiant .modal-body .alert").remove();
              _context2.next = 52;
              break;

            case 46:
              _context2.prev = 46;
              _context2.t1 = _context2["catch"](34);
              console.log(_context2.t1);
              _message = _context2.t1.response.data;
              Toast.fire({
                icon: 'error',
                title: _message
              });

              _icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

            case 52:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[7, 21], [34, 46]]);
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
  $("#cloture_epreuve").on('click', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var icon, formData, request, _response4, message;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context3.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context3.abrupt("return");

            case 4:
              icon = $("#cloture_epreuve i");
              icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append("idEpreuves", JSON.stringify(idEpreuves));
              _context3.prev = 8;
              _context3.next = 11;
              return axios.post('/administration/epreuve/cloture', formData);

            case 11:
              request = _context3.sent;
              _response4 = request.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: _response4
              });
              idEpreuves = [];
              tableEpreuveRattrapage.ajax.reload(null, false);
              tableEpreuveNormal.ajax.reload(null, false);
              _context3.next = 26;
              break;

            case 20:
              _context3.prev = 20;
              _context3.t0 = _context3["catch"](8);
              console.log(_context3.t0);
              message = _context3.t0.response.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 26:
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
  $("#decloturer_epreuve").on('click', /*#__PURE__*/function () {
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
              icon = $("#decloturer_epreuve i");
              icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append("idEpreuves", JSON.stringify(idEpreuves));
              _context4.prev = 8;
              _context4.next = 11;
              return axios.post('/administration/epreuve/decloture', formData);

            case 11:
              request = _context4.sent;
              _response5 = request.data;
              icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: _response5
              });
              idEpreuves = [];
              tableEpreuveRattrapage.ajax.reload(null, false);
              tableEpreuveNormal.ajax.reload(null, false);
              _context4.next = 26;
              break;

            case 20:
              _context4.prev = 20;
              _context4.t0 = _context4["catch"](8);
              console.log(_context4.t0);
              message = _context4.t0.response.data;
              icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 26:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[8, 20]]);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  $("#save_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var button, icon, modalAlert, formData, request, _response6, message;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();

              if (!(idInscriptions.length == 0)) {
                _context5.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context5.abrupt("return");

            case 4:
              button = $('#save_list_etudiant');
              icon = button.find('i');
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              modalAlert = $("#affilier_list_etudiant .modal-body .alert");
              modalAlert.remove();
              formData = new FormData();
              formData.append("idInscriptions", JSON.stringify(idInscriptions));
              formData.append("idEpreuve", id_epreuve);
              button.addClass("disabled");
              _context5.prev = 13;
              _context5.next = 16;
              return axios.post('/administration/epreuve/affiliation_rattrapage', formData);

            case 16:
              request = _context5.sent;
              _response6 = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              $("#affilier_list_etudiant .modal-body").prepend("<div class=\"alert alert-success\">\n                    <p>".concat(_response6, "</p>\n                  </div>"));
              $(".list_etudiants").empty();
              tableEpreuveRattrapage.ajax.reload(null, false);
              tableEpreuveNormal.ajax.reload(null, false);
              idInscriptions = [];
              $("#affilier_list_etudiant").modal("hide");
              button.removeClass("disabled");
              _context5.next = 36;
              break;

            case 28:
              _context5.prev = 28;
              _context5.t0 = _context5["catch"](13);
              console.log(_context5.t0);
              message = _context5.t0.response.data;
              modalAlert.remove();
              $("#affilier_list_etudiant .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              button.removeClass("disabled");

            case 36:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[13, 28]]);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());
  $('select').select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context6.next = 7;
              break;
            }

            _context6.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context6.sent;
            response = request.data;

          case 7:
            $('#element').html('').select2();
            $('#module').html('').select2();
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id_formation = $(this).val();
            response = "";

            if (!(id_formation != "")) {
              _context7.next = 7;
              break;
            }

            _context7.next = 5;
            return axios.get('/api/promotion/' + id_formation);

          case 5:
            request = _context7.sent;
            response = request.data;

          case 7:
            $('#element').html('').select2();
            $('#module').html('').select2();
            $('#semestre').html('').select2();
            $('#promotion').html(response).select2();

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var id_promotion, request, requestt;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id_promotion = $(this).val();

            if (!(id_promotion != "")) {
              _context8.next = 10;
              break;
            }

            _context8.next = 4;
            return axios.get('/api/semestre/' + id_promotion);

          case 4:
            request = _context8.sent;
            response = request.data;
            _context8.next = 8;
            return axios.get('/api/niv1/' + id_promotion);

          case 8:
            requestt = _context8.sent;
            niv1 = requestt.data;

          case 10:
            $('#element').html('').select2();
            $('#module').html('').select2();
            $('#semestre').html(response).select2();

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var id_semestre, request;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id_semestre = $(this).val();

            if (!(id_semestre != "")) {
              _context9.next = 6;
              break;
            }

            _context9.next = 4;
            return axios.get('/api/module/' + id_semestre);

          case 4:
            request = _context9.sent;
            response = request.data;

          case 6:
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 8:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#module").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var id_module, request;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id_module = $(this).val();

            if (!(id_module != "")) {
              _context10.next = 6;
              break;
            }

            _context10.next = 4;
            return axios.get('/api/element/' + id_module);

          case 4:
            request = _context10.sent;
            response = request.data;

          case 6:
            $('#element').html(response).select2();

          case 7:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $("#ajouter_epreuve").on("click", function (e) {
    e.preventDefault();
    $("#ajouter_epreuve-modal").modal("show");
  });
  $("body").on('submit', "#add_epreuve", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var formData, modalAlert, icon, request, _response7, message;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault(); // var res = confirm('Vous voulez vraiment ajouter cette enregistrement ?');
              // if(res == 1){

              formData = new FormData($('#add_epreuve')[0]);
              modalAlert = $("#ajouter_epreuve-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#ajouter_epreuve-modal button i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              _context11.prev = 6;
              _context11.next = 9;
              return axios.post('/administration/epreuve/add_epreuve', formData);

            case 9:
              request = _context11.sent;
              _response7 = request.data;
              $("#ajouter_epreuve-modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n                  <p>".concat(_response7, "</p>\n                </div>"));
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context11.next = 23;
              break;

            case 17:
              _context11.prev = 17;
              _context11.t0 = _context11["catch"](6);
              message = _context11.t0.response.data;
              modalAlert.remove();
              $("#ajouter_epreuve-modal .modal-body").prepend("<div class=\"alert alert-danger\" style=\"width: 98%;margin: 0 auto;\">".concat(message, "</div>"));
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");

            case 23:
              // }
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 24:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[6, 17]]);
    }));

    return function (_x6) {
      return _ref11.apply(this, arguments);
    };
  }());
  $("#import_epreuve").on("click", function () {
    $("#import_en_masse").modal("show");
    $("#import_en_masse .modal-body .alert").remove();
  });
  $('#epreuve_imprimer').on('click', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var icon, request, _response8, message;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context12.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context12.abrupt("return");

            case 4:
              icon = $("#epreuve_imprimer i");
              icon.removeClass('fa-copy').addClass("fa-spinner fa-spin");
              _context12.prev = 6;
              _context12.next = 9;
              return axios.get('/administration/epreuve/checkifanonymat/' + id_epreuve);

            case 9:
              request = _context12.sent;
              _response8 = request.data;
              console.log(_response8);
              icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");
              $("#imprimer_epreuve").modal("show");
              $('#imprimer_epreuve .etudiant_info').html(_response8.html);
              $('#imprimer_epreuve .epreuve_title').html(_response8.id);

              if (_response8.anonymat == "oui") {
                $('#imprimer_epreuve .actions').html("<a href=\"#\" class=\"btn btn-success mt-3\" id=\"impression_clair\">Impression Clair</a>\n                    <a href=\"#\" class=\"btn btn-secondary mt-3\" id=\"impression_anonymat\">Impression Anonymat</a>\n                    <a href=\"#\" class=\"btn btn-success mt-3\" id=\"extraction_emargement\">Extraction Emargement</a>");
              } else {
                $('#imprimer_epreuve .actions').html("<a href=\"#\" class=\"btn btn-success mt-3\" id=\"impression_clair\">Impression Clair</a>\n                    <a href=\"#\" class=\"btn btn-success mt-3\" id=\"extraction_emargement\">Extraction Emargement</a>");
              }

              _context12.next = 25;
              break;

            case 19:
              _context12.prev = 19;
              _context12.t0 = _context12["catch"](6);
              console.log(_context12.t0);
              message = _context12.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[6, 19]]);
    }));

    return function (_x7) {
      return _ref12.apply(this, arguments);
    };
  }());
  $('#modifier_epreuve').on('click', /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
      var icon, request, _response9, message;

      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context13.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context13.abrupt("return");

            case 4:
              icon = $("#modifier_epreuve i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context13.prev = 6;
              _context13.next = 9;
              return axios.get('/administration/epreuve/edit/' + id_epreuve);

            case 9:
              request = _context13.sent;
              _response9 = request.data;
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
              $("#modifier_epreuve-modal").modal("show");
              $("#modifier_epreuve-modal #edit_epreuve").html(_response9);
              $('select').select2();
              _context13.next = 23;
              break;

            case 17:
              _context13.prev = 17;
              _context13.t0 = _context13["catch"](6);
              console.log(_context13.t0);
              message = _context13.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[6, 17]]);
    }));

    return function (_x8) {
      return _ref13.apply(this, arguments);
    };
  }());
  $('#edit_epreuve').on('submit', /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      var icon, formData, request, _response10, message;

      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();
              icon = $("#edit_epreuve button i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              formData = new FormData($(this)[0]);
              _context14.prev = 4;
              _context14.next = 7;
              return axios.post('/administration/epreuve/update/' + id_epreuve, formData);

            case 7:
              request = _context14.sent;
              _response10 = request.data;
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
              $("#modifier_epreuve-modal").modal("hide");
              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context14.next = 21;
              break;

            case 15:
              _context14.prev = 15;
              _context14.t0 = _context14["catch"](4);
              console.log(_context14.t0);
              message = _context14.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");

            case 21:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this, [[4, 15]]);
    }));

    return function (_x9) {
      return _ref14.apply(this, arguments);
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
  $('body').on('click', '#extraction_emargement', function (e) {
    e.preventDefault();

    if (!id_epreuve) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    window.open('/administration/epreuve/extraction_emargement/' + id_epreuve, '_blank');
  });
  $('#capitaliser_etudiant').on('click', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var icon, formData, request, _response11, message;

      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context15.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context15.abrupt("return");

            case 4:
              icon = $("#capitaliser_etudiant i");
              icon.removeClass('fab fa-get-pocket').addClass("fa fa-spinner fa-spin");
              formData = new FormData();
              formData.append('idEpreuves', JSON.stringify(idEpreuves));
              _context15.prev = 8;
              _context15.next = 11;
              return axios.post('/administration/epreuve/capitaliser', formData);

            case 11:
              request = _context15.sent;
              _response11 = request.data;
              console.log(_response11);
              icon.addClass('fab fa-get-pocket').removeClass("fa fa-spinner fa-spin ");

              if (_response11.count > 0) {
                tableEpreuveNormal.ajax.reload(null, false);
                tableEpreuveRattrapage.ajax.reload(null, false);
                idEpreuves = [];
                window.open("/" + _response11.fileName, "_blank");
              } else {
                Toast.fire({
                  icon: 'info',
                  title: "Epreuves no capitaliser"
                });
              }

              _context15.next = 24;
              break;

            case 18:
              _context15.prev = 18;
              _context15.t0 = _context15["catch"](8);
              console.log(_context15.t0);
              message = _context15.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fab fa-get-pocket').removeClass("fa fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[8, 18]]);
    }));

    return function (_x10) {
      return _ref15.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction_epv_valide', /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
      var icon;
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              e.preventDefault();
              icon = $("#extraction_epv_valide i");
              window.open('/administration/epreuve/extraction_epreuve_valide', '_blank');

            case 3:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }));

    return function (_x11) {
      return _ref16.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


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

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/administration/epreuve.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckJBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxufSlcclxuXHJcbiAgICBsZXQgcmF0dHJhcGFnZSA9IDA7XHJcbiAgICBsZXQgaWRfZXByZXV2ZSA9IG51bGw7XHJcbiAgICBsZXQgaWRFcHJldXZlcyA9IFtdO1xyXG4gICAgbGV0IGlkSW5zY3JpcHRpb25zID0gW107XHJcbiAgICBcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIHZhciB0YWJsZUVwcmV1dmVOb3JtYWwgPSAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9saXN0L25vcm1hbFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2VwcmV1dmUpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2xpc3RfZXByZXV2ZV9ub3JtYWwnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2xpc3RfZXByZXV2ZV9ub3JtYWwnKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0Fib3J0IHByZXZpb3VzIGFqYXggcmVxdWVzdCBpZiBpdCBpcyBzdGlsbCBpbiBwcm9jZXNzLlxyXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gZHQuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIHZhciB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlID0gJChcIiNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2xpc3QvcmF0dHJhcGFnZVwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2VwcmV1dmUpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9ICQoJyNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZScpLkRhdGFUYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGR0LnNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjbGlzdF9lcHJldXZlX25vcm1hbCB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkRXByZXV2ZXMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgICAgICBpZEVwcmV1dmVzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5wdXNoKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZEVwcmV1dmVzLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQoJyNpbnNjcmlwdGlvbi1tb2RhbCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZF9lcHJldXZlID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2VwcmV1dmUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignZGJsY2xpY2snLCcjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQoJyNpbnNjcmlwdGlvbi1tb2RhbCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZF9lcHJldXZlID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2VwcmV1dmUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgICQoJy5uYXYtcGlsbHMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgJCh0aGlzKS50YWIoJ3Nob3cnKVxyXG4gICAgICAgIGlkX2VwcmV1dmUgPSBudWxsO1xyXG4gICAgICAgIGlkRXByZXV2ZXMgPSBbXTtcclxuICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgJChcImlucHV0XCIpLnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmh0bWwoKSA9PSAnU2Vzc2lvbiBub3JtYWwnKSB7XHJcbiAgICAgICAgICAgIHJhdHRyYXBhZ2UgPSAwO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByYXR0cmFwYWdlID0gMTtcclxuICAgICAgICB9ICAgXHJcbiAgICBcclxuICAgIH0pXHJcbiAgICAkKFwiI2ltcG9ydF9lcHJldXZlXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4geyAgXHJcbiAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2VcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpXHJcbiAgICB9KVxyXG4gICAgJChcIiNlcHJldXZlX2NhbnZhc1wiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9jYW52YXNcIiwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2ltcG9ydF9lcHJldXZlX3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgIFxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZXByZXV2ZV9lbnJlZ2lzdHJlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9pbXBvcnQnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZS5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgd2luZG93Lm9wZW4oXCIvXCIrcmVzcG9uc2UuZmlsZSAsXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNhZmZpbGllcl9ldHVkaWFudFwiKS5vbignY2xpY2snICwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYocmF0dHJhcGFnZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBzZXNzaW9uIG5vcm1hbFxyXG4gICAgICAgICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PTApIHtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNhZmZpbGllcl9ldHVkaWFudCBpXCIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1saW5rJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJlcHJldXZlc1wiLCBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9hZmZpbGlhdGlvbl9ub3JtYWxlJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1saW5rJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UudG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCIvXCIrcmVzcG9uc2UuemlwbmFtZSAsXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVwcmV1dmVzIGTDqWphIGFmZmlsaWVyIG91IHZhbGlkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBpZEVwcmV1dmVzID0gW107XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbGluaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIWlkX2VwcmV1dmUpIHtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2FmZmlsaWVyX2V0dWRpYW50IGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxpbmsnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvZXR1ZGlhbnRzLycraWRfZXByZXV2ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTsgICAgXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1saW5rJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIubGlzdF9ldHVkaWFudHNcIikuaHRtbChyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICQoXCIuY2hlY2tfYWxsX2V0dWRpYW50XCIpLnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50XCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxpbmsnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmNoZWNrX2V0dWRpYW50JyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBpZEluc2NyaXB0aW9ucy5pbmRleE9mKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIGlmKGluZGV4ICE9IC0xKXtcclxuICAgICAgICAgICAgaWRJbnNjcmlwdGlvbnMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZEluc2NyaXB0aW9ucy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZEluc2NyaXB0aW9ucyk7XHJcblxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcuY2hlY2tfYWxsX2V0dWRpYW50JyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWRJbnNjcmlwdGlvbnMgPSBbXTtcclxuICAgICAgICBjb25zdCBpbnNjcmlwdGlvbnMgPSAkKFwiLmNoZWNrX2V0dWRpYW50XCIpO1xyXG4gICAgICAgIGlmKCQoXCIuY2hlY2tfYWxsX2V0dWRpYW50XCIpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGluc2NyaXB0aW9ucy5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICBpbnNjcmlwdGlvbnMubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWRJbnNjcmlwdGlvbnMucHVzaCh0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluc2NyaXB0aW9ucy5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRJbnNjcmlwdGlvbnMpO1xyXG4gICAgfSlcclxuICAgICQoXCIjY2xvdHVyZV9lcHJldXZlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRFcHJldXZlcy5sZW5ndGggPT0wKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNjbG90dXJlX2VwcmV1dmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaWRFcHJldXZlc1wiLCAgSlNPTi5zdHJpbmdpZnkoaWRFcHJldXZlcykpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2Nsb3R1cmUnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhOyAgICBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMgPSBbXVxyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2RlY2xvdHVyZXJfZXByZXV2ZVwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09MCkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZGVjbG90dXJlcl9lcHJldXZlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbG9jay1vcGVuJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaWRFcHJldXZlc1wiLCAgSlNPTi5zdHJpbmdpZnkoaWRFcHJldXZlcykpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2RlY2xvdHVyZScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7ICAgIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpZEVwcmV1dmVzID0gW11cclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNzYXZlX2xpc3RfZXR1ZGlhbnRcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZEluc2NyaXB0aW9ucy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gJCgnI3NhdmVfbGlzdF9ldHVkaWFudCcpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBidXR0b24uZmluZCgnaScpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaWRJbnNjcmlwdGlvbnNcIiwgSlNPTi5zdHJpbmdpZnkoaWRJbnNjcmlwdGlvbnMpKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkRXByZXV2ZVwiLCBpZF9lcHJldXZlKVxyXG4gICAgICAgIGJ1dHRvbi5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9hZmZpbGlhdGlvbl9yYXR0cmFwYWdlJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTsgICAgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICQoXCIubGlzdF9ldHVkaWFudHNcIikuZW1wdHkoKVxyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWRJbnNjcmlwdGlvbnMgPSBbXVxyXG4gICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnRcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCgnc2VsZWN0Jykuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0dCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYxLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgbml2MSA9IHJlcXVlc3R0LmRhdGEgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjc2VtZXN0cmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycraWRfc2VtZXN0cmUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjbW9kdWxlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9tb2R1bGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX21vZHVsZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZWxlbWVudC8nK2lkX21vZHVsZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNham91dGVyX2VwcmV1dmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKXsgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiI2Fqb3V0ZXJfZXByZXV2ZS1tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbignc3VibWl0JywgXCIjYWRkX2VwcmV1dmVcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IGFqb3V0ZXIgY2V0dGUgZW5yZWdpc3RyZW1lbnQgPycpO1xyXG4gICAgICAgIC8vIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKCcjYWRkX2VwcmV1dmUnKVswXSk7XHJcbiAgICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2Fqb3V0ZXJfZXByZXV2ZS1tb2RhbCBidXR0b24gaVwiKTtcclxuICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvYWRkX2VwcmV1dmUnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI2Fqb3V0ZXJfZXByZXV2ZS1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHN0eWxlPVwid2lkdGg6IDk4JTttYXJnaW46IDAgYXV0bztcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2Fqb3V0ZXJfZXByZXV2ZS1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICQoXCIubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgMjUwMCkgIFxyXG4gICAgfSlcclxuICAgICQoXCIjaW1wb3J0X2VwcmV1dmVcIikub24oXCJjbGlja1wiLCAoKSA9PiB7ICBcclxuICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZVwiKS5tb2RhbChcInNob3dcIilcclxuICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKClcclxuICAgIH0pXHJcbiAgICAkKCcjZXByZXV2ZV9pbXByaW1lcicpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZXByZXV2ZSkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNlcHJldXZlX2ltcHJpbWVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY29weScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9jaGVja2lmYW5vbnltYXQvJytpZF9lcHJldXZlKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jb3B5JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAkKFwiI2ltcHJpbWVyX2VwcmV1dmVcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5ldHVkaWFudF9pbmZvJykuaHRtbChyZXNwb25zZS5odG1sKTtcclxuICAgICAgICAgICAgJCgnI2ltcHJpbWVyX2VwcmV1dmUgLmVwcmV1dmVfdGl0bGUnKS5odG1sKHJlc3BvbnNlLmlkKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuYW5vbnltYXQgPT0gXCJvdWlcIikge1xyXG4gICAgICAgICAgICAgICAgJCgnI2ltcHJpbWVyX2VwcmV1dmUgLmFjdGlvbnMnKS5odG1sKFxyXG4gICAgICAgICAgICAgICAgICAgIGA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG10LTNcIiBpZD1cImltcHJlc3Npb25fY2xhaXJcIj5JbXByZXNzaW9uIENsYWlyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBtdC0zXCIgaWQ9XCJpbXByZXNzaW9uX2Fub255bWF0XCI+SW1wcmVzc2lvbiBBbm9ueW1hdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG10LTNcIiBpZD1cImV4dHJhY3Rpb25fZW1hcmdlbWVudFwiPkV4dHJhY3Rpb24gRW1hcmdlbWVudDwvYT5gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnI2ltcHJpbWVyX2VwcmV1dmUgLmFjdGlvbnMnKS5odG1sKFxyXG4gICAgICAgICAgICAgICAgICAgIGA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG10LTNcIiBpZD1cImltcHJlc3Npb25fY2xhaXJcIj5JbXByZXNzaW9uIENsYWlyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiZXh0cmFjdGlvbl9lbWFyZ2VtZW50XCI+RXh0cmFjdGlvbiBFbWFyZ2VtZW50PC9hPmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNvcHknKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCcjbW9kaWZpZXJfZXByZXV2ZScpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZXByZXV2ZSkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllcl9lcHJldXZlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9lZGl0LycraWRfZXByZXV2ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX2VwcmV1dmUtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfZXByZXV2ZS1tb2RhbCAjZWRpdF9lcHJldXZlXCIpLmh0bWwocmVzcG9uc2UpOyAgICBcclxuICAgICAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0MigpOyAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCcjZWRpdF9lcHJldXZlJykub24oJ3N1Ym1pdCcsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNlZGl0X2VwcmV1dmUgYnV0dG9uIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL3VwZGF0ZS8nK2lkX2VwcmV1dmUsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX2VwcmV1dmUtbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjaW1wcmVzc2lvbl9jbGFpcicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB3aW5kb3cub3BlbihcIi9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2ltcHJlc3Npb24vXCIraWRfZXByZXV2ZStcIi8wXCIsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNpbXByZXNzaW9uX2Fub255bWF0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvaW1wcmVzc2lvbi9cIitpZF9lcHJldXZlK1wiLzFcIiwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2V4dHJhY3Rpb25fZW1hcmdlbWVudCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZXByZXV2ZSkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cub3BlbignL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvZXh0cmFjdGlvbl9lbWFyZ2VtZW50LycraWRfZXByZXV2ZSwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoJyNjYXBpdGFsaXNlcl9ldHVkaWFudCcpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNjYXBpdGFsaXNlcl9ldHVkaWFudCBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykuYWRkQ2xhc3MoXCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZEVwcmV1dmVzJywgSlNPTi5zdHJpbmdpZnkoaWRFcHJldXZlcykpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2NhcGl0YWxpc2VyJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb3VudD4wKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgaWRFcHJldXZlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCIvXCIrcmVzcG9uc2UuZmlsZU5hbWUgLFwiX2JsYW5rXCIpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRXByZXV2ZXMgbm8gY2FwaXRhbGlzZXJcIixcclxuICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNleHRyYWN0aW9uX2Vwdl92YWxpZGUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNleHRyYWN0aW9uX2Vwdl92YWxpZGUgaVwiKTtcclxuICAgICAgICB3aW5kb3cub3BlbignL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvZXh0cmFjdGlvbl9lcHJldXZlX3ZhbGlkZScsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbn0pIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuIiwiLy8gaW4gb2xkIFdlYktpdCB2ZXJzaW9ucywgYGVsZW1lbnQuY2xhc3NMaXN0YCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgZ2xvYmFsIGBET01Ub2tlbkxpc3RgXG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbnZhciBjbGFzc0xpc3QgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ3NwYW4nKS5jbGFzc0xpc3Q7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gY2xhc3NMaXN0ICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3RvciAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTVRva2VuTGlzdFByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSA/IHVuZGVmaW5lZCA6IERPTVRva2VuTGlzdFByb3RvdHlwZTtcbiIsIi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwicmF0dHJhcGFnZSIsImlkX2VwcmV1dmUiLCJpZEVwcmV1dmVzIiwiaWRJbnNjcmlwdGlvbnMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlRXByZXV2ZU5vcm1hbCIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwicHJlRHJhd0NhbGxiYWNrIiwic2V0dGluZ3MiLCJmbiIsImlzRGF0YVRhYmxlIiwiZHQiLCJqcVhIUiIsImFib3J0IiwibGFuZ3VhZ2UiLCJ1cmwiLCJ0YWJsZUVwcmV1dmVSYXR0cmFwYWdlIiwib24iLCJpbnB1dCIsImlzIiwiaW5kZXgiLCJpbmRleE9mIiwiYXR0ciIsInNwbGljZSIsInB1c2giLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwidGFiIiwiaHRtbCIsIm1vZGFsIiwicmVtb3ZlIiwid2luZG93Iiwib3BlbiIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm1vZGFsQWxlcnQiLCJpY29uIiwiYXhpb3MiLCJwb3N0IiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsInByZXBlbmQiLCJtZXNzYWdlIiwiZmlsZSIsInJlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJmaXJlIiwidGl0bGUiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidG90YWwiLCJ6aXBuYW1lIiwiZ2V0IiwidmFsIiwiaW5zY3JpcHRpb25zIiwibWFwIiwidmFsdWUiLCJidXR0b24iLCJlbXB0eSIsInNlbGVjdDIiLCJpZF9ldGFiIiwiaWRfZm9ybWF0aW9uIiwiaWRfcHJvbW90aW9uIiwicmVxdWVzdHQiLCJuaXYxIiwiaWRfc2VtZXN0cmUiLCJpZF9tb2R1bGUiLCJzZXRUaW1lb3V0IiwiaWQiLCJhbm9ueW1hdCIsImNvdW50IiwiZmlsZU5hbWUiXSwic291cmNlUm9vdCI6IiJ9