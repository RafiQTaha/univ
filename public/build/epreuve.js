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
                  title: "Epreuves non capitaliser"
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
  $('body').on('click', '#open_upload_file', /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              e.preventDefault();
              $('body #inscriptions_ids').click();

            case 2:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }));

    return function (_x12) {
      return _ref17.apply(this, arguments);
    };
  }());
  $('body').on('submit', '#Affiler_inscriptions_ids', /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e) {
      var res, button, icon, modalAlert, formData, request, _response12, message;

      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              e.preventDefault();
              res = confirm('L\'affiliation est definitive, vous etes sur ?');

              if (!(res == 1)) {
                _context18.next = 38;
                break;
              }

              button = $('#Affiler_inscriptions_ids #Affiler_btn');
              icon = button.find('i');
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              modalAlert = $("#affilier_list_etudiant .modal-body .alert");
              modalAlert.remove();
              formData = new FormData($(this)[0]);
              formData.append("idEpreuve", id_epreuve);
              button.attr('disabled', true); // button.addClass("disabled");

              _context18.prev = 11;
              _context18.next = 14;
              return axios.post('/administration/epreuve/affiliation_ParInscriptions', formData);

            case 14:
              request = _context18.sent;
              _response12 = request.data;
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              $("#affilier_list_etudiant .modal-body").prepend("<div class=\"alert alert-success\">\n                        <p>".concat(_response12, "</p>\n                      </div>"));
              $(".list_etudiants").empty();
              $(this).trigger("reset");
              tableEpreuveRattrapage.ajax.reload(null, false);
              tableEpreuveNormal.ajax.reload(null, false);
              idInscriptions = [];
              setTimeout(function () {
                $("#affilier_list_etudiant .modal-body .alert").remove();
              }, 2000);
              $("#affilier_list_etudiant").modal("hide"); // button.removeClass("disabled");

              button.attr('disabled', false);
              Toast.fire({
                icon: 'success',
                title: _response12
              });
              _context18.next = 38;
              break;

            case 29:
              _context18.prev = 29;
              _context18.t0 = _context18["catch"](11);
              console.log(_context18.t0);
              message = _context18.t0.response.data;
              modalAlert.remove();
              $("#affilier_list_etudiant .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              setTimeout(function () {
                $("#affilier_list_etudiant .modal-body .alert").remove();
              }, 2000); // button.removeClass("disabled");

              button.attr('disabled', false);

            case 38:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this, [[11, 29]]);
    }));

    return function (_x13) {
      return _ref18.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdDQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbn0pXHJcblxyXG4gICAgbGV0IHJhdHRyYXBhZ2UgPSAwO1xyXG4gICAgbGV0IGlkX2VwcmV1dmUgPSBudWxsO1xyXG4gICAgbGV0IGlkRXByZXV2ZXMgPSBbXTtcclxuICAgIGxldCBpZEluc2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICB2YXIgdGFibGVFcHJldXZlTm9ybWFsID0gJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvbGlzdC9ub3JtYWxcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9lcHJldXZlKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlRHJhd0NhbGxiYWNrOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJyNsaXN0X2VwcmV1dmVfbm9ybWFsJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9ICQoJyNsaXN0X2VwcmV1dmVfbm9ybWFsJykuRGF0YVRhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGR0LnNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB2YXIgdGFibGVFcHJldXZlUmF0dHJhcGFnZSA9ICQoXCIjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2VcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9saXN0L3JhdHRyYXBhZ2VcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9lcHJldXZlKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlRHJhd0NhbGxiYWNrOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJyNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZScpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHQgPSAkKCcjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UnKS5EYXRhVGFibGUoKTtcclxuICAgICAgICAgICAgICAgIC8vQWJvcnQgcHJldmlvdXMgYWpheCByZXF1ZXN0IGlmIGl0IGlzIHN0aWxsIGluIHByb2Nlc3MuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSBkdC5zZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzWzBdLmpxWEhSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZEVwcmV1dmVzLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRFcHJldXZlcy5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICBpZEVwcmV1dmVzLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKCcjaW5zY3JpcHRpb24tbW9kYWwnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgaWRfZXByZXV2ZSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9lcHJldXZlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKCcjaW5zY3JpcHRpb24tbW9kYWwnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgaWRfZXByZXV2ZSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9lcHJldXZlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICAkKCcubmF2LXBpbGxzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQodGhpcykudGFiKCdzaG93JylcclxuICAgICAgICBpZF9lcHJldXZlID0gbnVsbDtcclxuICAgICAgICBpZEVwcmV1dmVzID0gW107XHJcbiAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICQoXCJpbnB1dFwiKS5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5odG1sKCkgPT0gJ1Nlc3Npb24gbm9ybWFsJykge1xyXG4gICAgICAgICAgICByYXR0cmFwYWdlID0gMDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmF0dHJhcGFnZSA9IDE7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgXHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXBvcnRfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKVxyXG4gICAgfSlcclxuICAgICQoXCIjZXByZXV2ZV9jYW52YXNcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvY2FudmFzXCIsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIjaW1wb3J0X2VwcmV1dmVfc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNlcHJldXZlX2VucmVnaXN0cmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2ltcG9ydCcsIGZvcm1EYXRhKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIityZXNwb25zZS5maWxlICxcIl9ibGFua1wiKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2FmZmlsaWVyX2V0dWRpYW50XCIpLm9uKCdjbGljaycgLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihyYXR0cmFwYWdlID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIHNlc3Npb24gbm9ybWFsXHJcbiAgICAgICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09MCkge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2FmZmlsaWVyX2V0dWRpYW50IGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxpbmsnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImVwcmV1dmVzXCIsIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2FmZmlsaWF0aW9uX25vcm1hbGUnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxpbmsnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS50b3RhbCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIityZXNwb25zZS56aXBuYW1lICxcIl9ibGFua1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdpbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRXByZXV2ZXMgZMOpamEgYWZmaWxpZXIgb3UgdmFsaWRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGlkRXByZXV2ZXMgPSBbXTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1saW5rJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZighaWRfZXByZXV2ZSkge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYWZmaWxpZXJfZXR1ZGlhbnQgaVwiKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbGluaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9ldHVkaWFudHMvJytpZF9lcHJldXZlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhOyAgICBcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxpbmsnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5saXN0X2V0dWRpYW50c1wiKS5odG1sKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgJChcIi5jaGVja19hbGxfZXR1ZGlhbnRcIikucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnRcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbGluaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcuY2hlY2tfZXR1ZGlhbnQnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGlkSW5zY3JpcHRpb25zLmluZGV4T2YoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgaWYoaW5kZXggIT0gLTEpe1xyXG4gICAgICAgICAgICBpZEluc2NyaXB0aW9ucy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb25zLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkSW5zY3JpcHRpb25zKTtcclxuXHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5jaGVja19hbGxfZXR1ZGlhbnQnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZEluc2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGluc2NyaXB0aW9ucyA9ICQoXCIuY2hlY2tfZXR1ZGlhbnRcIik7XHJcbiAgICAgICAgaWYoJChcIi5jaGVja19hbGxfZXR1ZGlhbnRcIikucHJvcCgnY2hlY2tlZCcpID09IHRydWUpIHtcclxuICAgICAgICAgICAgaW5zY3JpcHRpb25zLnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGluc2NyaXB0aW9ucy5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZEluc2NyaXB0aW9ucy5wdXNoKHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5zY3JpcHRpb25zLnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZEluc2NyaXB0aW9ucyk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNjbG90dXJlX2VwcmV1dmVcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PTApIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2Nsb3R1cmVfZXByZXV2ZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEVwcmV1dmVzXCIsICBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvY2xvdHVyZScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7ICAgIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWRFcHJldXZlcyA9IFtdXHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjZGVjbG90dXJlcl9lcHJldXZlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRFcHJldXZlcy5sZW5ndGggPT0wKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNkZWNsb3R1cmVyX2VwcmV1dmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrLW9wZW4nKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEVwcmV1dmVzXCIsICBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvZGVjbG90dXJlJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTsgICAgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMgPSBbXVxyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI3NhdmVfbGlzdF9ldHVkaWFudFwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkSW5zY3JpcHRpb25zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidXR0b24gPSAkKCcjc2F2ZV9saXN0X2V0dWRpYW50Jyk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJ1dHRvbi5maW5kKCdpJyk7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEluc2NyaXB0aW9uc1wiLCBKU09OLnN0cmluZ2lmeShpZEluc2NyaXB0aW9ucykpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaWRFcHJldXZlXCIsIGlkX2VwcmV1dmUpXHJcbiAgICAgICAgYnV0dG9uLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2FmZmlsaWF0aW9uX3JhdHRyYXBhZ2UnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhOyAgICBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgJChcIi5saXN0X2V0dWRpYW50c1wiKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZEluc2NyaXB0aW9ucyA9IFtdXHJcbiAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3R0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjEvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICBuaXYxID0gcmVxdWVzdHQuZGF0YSBcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJytpZF9zZW1lc3RyZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNtb2R1bGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiI2Fqb3V0ZXJfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpeyAgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNhZGRfZXByZXV2ZVwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgYWpvdXRlciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICAgICAgLy8gaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoJyNhZGRfZXByZXV2ZScpWzBdKTtcclxuICAgICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNham91dGVyX2VwcmV1dmUtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsIGJ1dHRvbiBpXCIpO1xyXG4gICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9hZGRfZXByZXV2ZScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPlxyXG4gICAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCAyNTAwKSAgXHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXBvcnRfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKVxyXG4gICAgfSlcclxuICAgICQoJyNlcHJldXZlX2ltcHJpbWVyJykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9lcHJldXZlKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VwcmV1dmVfaW1wcmltZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jb3B5JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2NoZWNraWZhbm9ueW1hdC8nK2lkX2VwcmV1dmUpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNvcHknKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjaW1wcmltZXJfZXByZXV2ZVwiKS5tb2RhbChcInNob3dcIilcclxuICAgICAgICAgICAgJCgnI2ltcHJpbWVyX2VwcmV1dmUgLmV0dWRpYW50X2luZm8nKS5odG1sKHJlc3BvbnNlLmh0bWwpO1xyXG4gICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuZXByZXV2ZV90aXRsZScpLmh0bWwocmVzcG9uc2UuaWQpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5hbm9ueW1hdCA9PSBcIm91aVwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuYWN0aW9ucycpLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9jbGFpclwiPkltcHJlc3Npb24gQ2xhaXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IG10LTNcIiBpZD1cImltcHJlc3Npb25fYW5vbnltYXRcIj5JbXByZXNzaW9uIEFub255bWF0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiZXh0cmFjdGlvbl9lbWFyZ2VtZW50XCI+RXh0cmFjdGlvbiBFbWFyZ2VtZW50PC9hPmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuYWN0aW9ucycpLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9jbGFpclwiPkltcHJlc3Npb24gQ2xhaXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJleHRyYWN0aW9uX2VtYXJnZW1lbnRcIj5FeHRyYWN0aW9uIEVtYXJnZW1lbnQ8L2E+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY29weScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJyNtb2RpZmllcl9lcHJldXZlJykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9lcHJldXZlKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyX2VwcmV1dmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2VkaXQvJytpZF9lcHJldXZlKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfZXByZXV2ZS1tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9lcHJldXZlLW1vZGFsICNlZGl0X2VwcmV1dmVcIikuaHRtbChyZXNwb25zZSk7ICAgIFxyXG4gICAgICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7ICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJyNlZGl0X2VwcmV1dmUnKS5vbignc3VibWl0JywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VkaXRfZXByZXV2ZSBidXR0b24gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvdXBkYXRlLycraWRfZXByZXV2ZSwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfZXByZXV2ZS1tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNpbXByZXNzaW9uX2NsYWlyJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvaW1wcmVzc2lvbi9cIitpZF9lcHJldXZlK1wiLzBcIiwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2ltcHJlc3Npb25fYW5vbnltYXQnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9pbXByZXNzaW9uL1wiK2lkX2VwcmV1dmUrXCIvMVwiLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjZXh0cmFjdGlvbl9lbWFyZ2VtZW50JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9lcHJldXZlKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9leHRyYWN0aW9uX2VtYXJnZW1lbnQvJytpZF9lcHJldXZlLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnI2NhcGl0YWxpc2VyX2V0dWRpYW50Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2NhcGl0YWxpc2VyX2V0dWRpYW50IGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5hZGRDbGFzcyhcImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkRXByZXV2ZXMnLCBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvY2FwaXRhbGlzZXInLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvdW50PjApIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBpZEVwcmV1dmVzID0gW107XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIityZXNwb25zZS5maWxlTmFtZSAsXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdpbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcHJldXZlcyBub24gY2FwaXRhbGlzZXJcIixcclxuICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNleHRyYWN0aW9uX2Vwdl92YWxpZGUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNleHRyYWN0aW9uX2Vwdl92YWxpZGUgaVwiKTtcclxuICAgICAgICB3aW5kb3cub3BlbignL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvZXh0cmFjdGlvbl9lcHJldXZlX3ZhbGlkZScsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI29wZW5fdXBsb2FkX2ZpbGUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCdib2R5ICNpbnNjcmlwdGlvbnNfaWRzJykuY2xpY2soKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsJyNBZmZpbGVyX2luc2NyaXB0aW9uc19pZHMnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgcmVzID0gY29uZmlybSgnTFxcJ2FmZmlsaWF0aW9uIGVzdCBkZWZpbml0aXZlLCB2b3VzIGV0ZXMgc3VyID8nKTtcclxuICAgICAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9ICQoJyNBZmZpbGVyX2luc2NyaXB0aW9uc19pZHMgI0FmZmlsZXJfYnRuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBidXR0b24uZmluZCgnaScpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEVwcmV1dmVcIiwgaWRfZXByZXV2ZSlcclxuICAgICAgICAgICAgYnV0dG9uLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgLy8gYnV0dG9uLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvYWZmaWxpYXRpb25fUGFySW5zY3JpcHRpb25zJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7ICAgIFxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpc3RfZXR1ZGlhbnRzXCIpLmVtcHR5KClcclxuICAgICAgICAgICAgICAgICQodGhpcykudHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWRJbnNjcmlwdGlvbnMgPSBbXVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnRcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gYnV0dG9uLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIC8vIGJ1dHRvbi5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xyXG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XHJcblxyXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcclxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcclxuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxyXG59IDogW10uZm9yRWFjaDtcclxuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXHJcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgQ1NTUnVsZUxpc3Q6IDAsXHJcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcclxuICBDU1NWYWx1ZUxpc3Q6IDAsXHJcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXHJcbiAgRE9NUmVjdExpc3Q6IDAsXHJcbiAgRE9NU3RyaW5nTGlzdDogMCxcclxuICBET01Ub2tlbkxpc3Q6IDEsXHJcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXHJcbiAgRmlsZUxpc3Q6IDAsXHJcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXHJcbiAgSFRNTENvbGxlY3Rpb246IDAsXHJcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxyXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxyXG4gIE1lZGlhTGlzdDogMCxcclxuICBNaW1lVHlwZUFycmF5OiAwLFxyXG4gIE5hbWVkTm9kZU1hcDogMCxcclxuICBOb2RlTGlzdDogMSxcclxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxyXG4gIFBsdWdpbjogMCxcclxuICBQbHVnaW5BcnJheTogMCxcclxuICBTVkdMZW5ndGhMaXN0OiAwLFxyXG4gIFNWR051bWJlckxpc3Q6IDAsXHJcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXHJcbiAgU1ZHUG9pbnRMaXN0OiAwLFxyXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXHJcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcclxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxyXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxyXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXHJcbiAgVGV4dFRyYWNrTGlzdDogMCxcclxuICBUb3VjaExpc3Q6IDBcclxufTtcclxuIiwiLy8gaW4gb2xkIFdlYktpdCB2ZXJzaW9ucywgYGVsZW1lbnQuY2xhc3NMaXN0YCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgZ2xvYmFsIGBET01Ub2tlbkxpc3RgXHJcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcclxuXHJcbnZhciBjbGFzc0xpc3QgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ3NwYW4nKS5jbGFzc0xpc3Q7XHJcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSBjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERPTVRva2VuTGlzdFByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSA/IHVuZGVmaW5lZCA6IERPTVRva2VuTGlzdFByb3RvdHlwZTtcclxuIiwiLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xyXG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcclxudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcclxudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcclxudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xyXG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XHJcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xyXG5cclxudmFyIEdUID0gJz4nO1xyXG52YXIgTFQgPSAnPCc7XHJcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcclxudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xyXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XHJcblxyXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcclxuXHJcbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xyXG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XHJcbn07XHJcblxyXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxyXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcclxuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XHJcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XHJcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcclxuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xyXG4gIHJldHVybiB0ZW1wO1xyXG59O1xyXG5cclxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxyXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXHJcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xyXG4gIHZhciBpZnJhbWVEb2N1bWVudDtcclxuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxyXG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xyXG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xyXG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XHJcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcclxuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcclxufTtcclxuXHJcbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcclxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxyXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcclxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcclxuLy8gYXZvaWQgSUUgR0MgYnVnXHJcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XHJcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGFjdGl2ZVhEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XHJcbiAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXHJcbiAgICA/IGRvY3VtZW50LmRvbWFpbiAmJiBhY3RpdmVYRG9jdW1lbnRcclxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXHJcbiAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcclxuICAgIDogTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpOyAvLyBXU0hcclxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xyXG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xyXG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcclxufTtcclxuXHJcbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcclxuXHJcbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xyXG4gIHZhciByZXN1bHQ7XHJcbiAgaWYgKE8gIT09IG51bGwpIHtcclxuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xyXG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcclxuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XHJcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXHJcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcclxuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XHJcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcclxufTtcclxuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XHJcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XHJcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcclxudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xyXG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xyXG5cclxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxyXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcclxuICBhbk9iamVjdChPKTtcclxuICB2YXIgcHJvcHMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XHJcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xyXG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcclxuICB2YXIgaW5kZXggPSAwO1xyXG4gIHZhciBrZXk7XHJcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xyXG4gIHJldHVybiBPO1xyXG59O1xyXG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XHJcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XHJcblxyXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qta2V5cyAtLSBzYWZlXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XHJcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XHJcbiAgZm9yRWFjaDogZm9yRWFjaFxyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xyXG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xyXG5cclxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXHJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcclxuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xyXG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG4gIH1cclxufSk7XHJcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xyXG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xyXG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xyXG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xyXG5cclxudmFyIGhhbmRsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XHJcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XHJcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xyXG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XHJcbiAgfVxyXG59O1xyXG5cclxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xyXG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xyXG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XHJcbiAgfVxyXG59XHJcblxyXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcclxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xyXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xyXG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XHJcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XHJcblxyXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xyXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XHJcblxyXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcclxuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcclxuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xyXG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xyXG4gIH07XHJcbn07XHJcblxyXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XHJcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXHJcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XHJcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcclxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcclxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXHJcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsInJhdHRyYXBhZ2UiLCJpZF9lcHJldXZlIiwiaWRFcHJldXZlcyIsImlkSW5zY3JpcHRpb25zIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZUVwcmV1dmVOb3JtYWwiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsInByZURyYXdDYWxsYmFjayIsInNldHRpbmdzIiwiZm4iLCJpc0RhdGFUYWJsZSIsImR0IiwianFYSFIiLCJhYm9ydCIsImxhbmd1YWdlIiwidXJsIiwidGFibGVFcHJldXZlUmF0dHJhcGFnZSIsIm9uIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsImF0dHIiLCJzcGxpY2UiLCJwdXNoIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRhYiIsImh0bWwiLCJtb2RhbCIsInJlbW92ZSIsIndpbmRvdyIsIm9wZW4iLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJtb2RhbEFsZXJ0IiwiaWNvbiIsImF4aW9zIiwicG9zdCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImRhdGEiLCJwcmVwZW5kIiwibWVzc2FnZSIsImZpbGUiLCJyZWxvYWQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZmlyZSIsInRpdGxlIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvdGFsIiwiemlwbmFtZSIsImdldCIsInZhbCIsImluc2NyaXB0aW9ucyIsIm1hcCIsInZhbHVlIiwiYnV0dG9uIiwiZW1wdHkiLCJzZWxlY3QyIiwiaWRfZXRhYiIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsInJlcXVlc3R0Iiwibml2MSIsImlkX3NlbWVzdHJlIiwiaWRfbW9kdWxlIiwic2V0VGltZW91dCIsImlkIiwiYW5vbnltYXQiLCJjb3VudCIsImZpbGVOYW1lIiwiY2xpY2siLCJyZXMiLCJjb25maXJtIiwidHJpZ2dlciJdLCJzb3VyY2VSb290IjoiIn0=