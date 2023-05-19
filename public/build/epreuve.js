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

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

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
  }); // filters for session normale

  $("#etablissementNrml").select2();
  $("body #etablissementNrml").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            tableEpreuveNormal.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 12;
              break;
            }

            if ($("#dateEpreuveNrml").val() != "") {
              tableEpreuveNormal.columns(6).search($("#dateEpreuveNrml").val());
            }

            tableEpreuveNormal.columns(0).search(id_etab).draw();
            _context.next = 8;
            return axios.get('/api/formation/' + id_etab);

          case 8:
            request = _context.sent;
            response = request.data;
            _context.next = 13;
            break;

          case 12:
            if ($("#dateEpreuveNrml").val() != "") {
              tableEpreuveNormal.columns(6).search($("#dateEpreuveNrml").val()).draw();
            } else {
              tableEpreuveNormal.columns().search("").draw();
            }

          case 13:
            $('#semestreNrml').html('').select2();
            $('#moduleNrml').html('').select2();
            $('#elementNrml').html('').select2();
            $('#promotionNrml').html('').select2();
            $('#formationNrml').html(response).select2();

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("body #formationNrml").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            tableEpreuveNormal.columns().search("");

            if ($("#dateEpreuveNrml").val() != "") {
              tableEpreuveNormal.columns(6).search($("#dateEpreuveNrml").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 12;
              break;
            }

            tableEpreuveNormal.columns(1).search(id_formation).draw();
            _context2.next = 8;
            return axios.get('/api/promotion/' + id_formation);

          case 8:
            request = _context2.sent;
            response = request.data;
            _context2.next = 13;
            break;

          case 12:
            tableEpreuveNormal.columns(0).search($("body #etablissementNrml").val()).draw();

          case 13:
            $('#semestreNrml').html('').select2();
            $('#moduleNrml').html('').select2();
            $('#elementNrml').html('').select2();
            $('#promotionNrml').html(response).select2();

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("body #promotionNrml").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_promotion, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_promotion = $(this).val();
            tableEpreuveNormal.columns().search("");

            if ($("#dateEpreuveNrml").val() != "") {
              tableEpreuveNormal.columns(6).search($("#dateEpreuveNrml").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 11;
              break;
            }

            tableEpreuveNormal.columns(2).search(id_promotion).draw();
            _context3.next = 7;
            return axios.get('/api/semestre/' + id_promotion);

          case 7:
            request = _context3.sent;
            response = request.data;
            _context3.next = 12;
            break;

          case 11:
            tableEpreuveNormal.columns(1).search($("body #formationNrml").val()).draw();

          case 12:
            $('#semestreNrml').html('').select2();
            $('#moduleNrml').html('').select2();
            $('#elementNrml').html('').select2();
            $('#semestreNrml').html(response).select2();

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("body #semestreNrml").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_semestre, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_semestre = $(this).val();
            tableEpreuveNormal.columns().search("");

            if ($("#dateEpreuveNrml").val() != "") {
              tableEpreuveNormal.columns(6).search($("#dateEpreuveNrml").val());
            }

            if (!(id_semestre != "")) {
              _context4.next = 11;
              break;
            }

            _context4.next = 6;
            return axios.get('/api/module/' + id_semestre);

          case 6:
            request = _context4.sent;
            tableEpreuveNormal.columns(3).search(id_semestre).draw();
            response = request.data;
            _context4.next = 12;
            break;

          case 11:
            tableEpreuveNormal.columns(2).search($("body #promotionNrml").val()).draw();

          case 12:
            $('#moduleNrml').html('').select2();
            $('#elementNrml').html('').select2();
            $('#moduleNrml').html(response).select2();

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("body #moduleNrml").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_module, request;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_module = $(this).val();
            tableEpreuveNormal.columns().search("");

            if ($("#dateEpreuveNrml").val() != "") {
              tableEpreuveNormal.columns(6).search($("#dateEpreuve").val());
            }

            if (!(id_module != "")) {
              _context5.next = 11;
              break;
            }

            tableEpreuveNormal.columns(4).search(id_module).draw();
            _context5.next = 7;
            return axios.get('/api/element/' + id_module);

          case 7:
            request = _context5.sent;
            response = request.data;
            _context5.next = 12;
            break;

          case 11:
            tableEpreuveNormal.columns(3).search($("body #semestreNrml").val()).draw();

          case 12:
            $('#elementNrml').html(response).select2();

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("body #elementNrml").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_element;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_element = $(this).val();
            tableEpreuveNormal.columns().search("");

            if ($("#dateEpreuveNrml").val() != "") {
              tableEpreuveNormal.columns(6).search($("#dateEpreuveNrml").val());
            }

            tableEpreuveNormal.columns(5).search(id_element).draw();

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#dateEpreuveNrml").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var dateEpreuve;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            dateEpreuve = $(this).val(); // console.log(dateEpreuve);

            tableEpreuveNormal.columns(6).search(dateEpreuve).draw();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }))); // end filters session normale
  // filters for session rattrapage

  $("body #etablissementRatt").select2();
  $("body #etablissementRatt").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id_etab = $(this).val();
            tableEpreuveRattrapage.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context8.next = 12;
              break;
            }

            if ($("#dateEpreuveRatt").val() != "") {
              tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val());
            }

            tableEpreuveRattrapage.columns(0).search(id_etab).draw();
            _context8.next = 8;
            return axios.get('/api/formation/' + id_etab);

          case 8:
            request = _context8.sent;
            response = request.data;
            _context8.next = 13;
            break;

          case 12:
            if ($("#dateEpreuveRatt").val() != "") {
              tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val()).draw();
            } else {
              tableEpreuveRattrapage.columns().search("").draw();
            }

          case 13:
            $('#semestreRatt').html('').select2();
            $('#moduleRatt').html('').select2();
            $('#elementRatt').html('').select2();
            $('#promotionRatt').html('').select2();
            $('#formationRatt').html(response).select2();

          case 18:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("body #formationRatt").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id_formation = $(this).val();
            tableEpreuveRattrapage.columns().search("");

            if ($("#dateEpreuveRatt").val() != "") {
              tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context9.next = 12;
              break;
            }

            tableEpreuveRattrapage.columns(1).search(id_formation).draw();
            _context9.next = 8;
            return axios.get('/api/promotion/' + id_formation);

          case 8:
            request = _context9.sent;
            response = request.data;
            _context9.next = 13;
            break;

          case 12:
            tableEpreuveRattrapage.columns(0).search($("body #etablissementRatt").val()).draw();

          case 13:
            $('#semestreRatt').html('').select2();
            $('#moduleRatt').html('').select2();
            $('#elementRatt').html('').select2();
            $('#promotionRatt').html(response).select2();

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("body #promotionRatt").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var id_promotion, request;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id_promotion = $(this).val();
            tableEpreuveRattrapage.columns().search("");

            if ($("#dateEpreuveRatt").val() != "") {
              tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val());
            }

            if (!(id_promotion != "")) {
              _context10.next = 11;
              break;
            }

            tableEpreuveRattrapage.columns(2).search(id_promotion).draw();
            _context10.next = 7;
            return axios.get('/api/semestre/' + id_promotion);

          case 7:
            request = _context10.sent;
            response = request.data;
            _context10.next = 12;
            break;

          case 11:
            tableEpreuveRattrapage.columns(1).search($("body #formationRatt").val()).draw();

          case 12:
            $('#semestreRatt').html('').select2();
            $('#moduleRatt').html('').select2();
            $('#elementRatt').html('').select2();
            $('#semestreRatt').html(response).select2();

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $("body #semestreRatt").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var id_semestre, request;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id_semestre = $(this).val();
            tableEpreuveRattrapage.columns().search("");

            if ($("#dateEpreuveRatt").val() != "") {
              tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val());
            }

            if (!(id_semestre != "")) {
              _context11.next = 11;
              break;
            }

            _context11.next = 6;
            return axios.get('/api/module/' + id_semestre);

          case 6:
            request = _context11.sent;
            tableEpreuveRattrapage.columns(3).search(id_semestre).draw();
            response = request.data;
            _context11.next = 12;
            break;

          case 11:
            tableEpreuveRattrapage.columns(2).search($("body #promotionRatt").val()).draw();

          case 12:
            $('#moduleRatt').html('').select2();
            $('#elementRatt').html('').select2();
            $('#moduleRatt').html(response).select2();

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  })));
  $("body #moduleRatt").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var id_module, request;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            id_module = $(this).val();
            tableEpreuveRattrapage.columns().search("");

            if ($("#dateEpreuveRatt").val() != "") {
              tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val());
            }

            if (!(id_module != "")) {
              _context12.next = 11;
              break;
            }

            tableEpreuveRattrapage.columns(4).search(id_module).draw();
            _context12.next = 7;
            return axios.get('/api/element/' + id_module);

          case 7:
            request = _context12.sent;
            response = request.data;
            _context12.next = 12;
            break;

          case 11:
            tableEpreuveRattrapage.columns(3).search($("body #semestreRatt").val()).draw();

          case 12:
            $('#elementRatt').html(response).select2();

          case 13:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  })));
  $("body #elementRatt").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    var id_element;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            id_element = $(this).val();
            tableEpreuveRattrapage.columns().search("");

            if ($("#dateEpreuveRatt").val() != "") {
              tableEpreuveRattrapage.columns(6).search($("#dateEpreuveRatt").val());
            }

            tableEpreuveRattrapage.columns(5).search(id_element).draw();

          case 4:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  })));
  $("#dateEpreuveRatt").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
    var dateEpreuve;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            dateEpreuve = $(this).val();
            tableEpreuveRattrapage.columns(6).search(dateEpreuve).draw();

          case 2:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, this);
  }))); // end filters session rattrappage

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
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var formData, modalAlert, icon, request, _response, message;

      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#import_en_masse .modal-body .alert");
              modalAlert.remove();
              icon = $("#epreuve_enregistre i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context15.prev = 6;
              _context15.next = 9;
              return axios.post('/administration/epreuve/import', formData);

            case 9:
              request = _context15.sent;
              _response = request.data;
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response.message, "</p>\n              </div>"));
              window.open("/" + _response.file, "_blank");
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context15.next = 25;
              break;

            case 18:
              _context15.prev = 18;
              _context15.t0 = _context15["catch"](6);
              message = _context15.t0.response.data;
              console.log(_context15.t0, _context15.t0.response);
              modalAlert.remove();
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this, [[6, 18]]);
    }));

    return function (_x) {
      return _ref15.apply(this, arguments);
    };
  }());
  $("#affilier_etudiant").on('click', /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
      var icon, formData, request, _response2, message, _icon, _request, _response3, _message;

      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              e.preventDefault();

              if (!(rattrapage === 0)) {
                _context16.next = 29;
                break;
              }

              if (!(idEpreuves.length == 0)) {
                _context16.next = 5;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context16.abrupt("return");

            case 5:
              icon = $("#affilier_etudiant i");
              icon.removeClass('fa-link').addClass("fa-spinner fa-spin");
              _context16.prev = 7;
              formData = new FormData();
              formData.append("epreuves", JSON.stringify(idEpreuves));
              _context16.next = 12;
              return axios.post('/administration/epreuve/affiliation_normale', formData);

            case 12:
              request = _context16.sent;
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
              _context16.next = 27;
              break;

            case 21:
              _context16.prev = 21;
              _context16.t0 = _context16["catch"](7);
              console.log(_context16.t0);
              message = _context16.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

            case 27:
              _context16.next = 52;
              break;

            case 29:
              if (id_epreuve) {
                _context16.next = 32;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context16.abrupt("return");

            case 32:
              _icon = $("#affilier_etudiant i");

              _icon.removeClass('fa-link').addClass("fa-spinner fa-spin");

              _context16.prev = 34;
              _context16.next = 37;
              return axios.get('/administration/epreuve/etudiants/' + id_epreuve);

            case 37:
              _request = _context16.sent;
              _response3 = _request.data;

              _icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

              $(".list_etudiants").html(_response3);
              $(".check_all_etudiant").prop("checked", false);
              $("#affilier_list_etudiant").modal("show");
              $("#affilier_list_etudiant .modal-body .alert").remove();
              _context16.next = 52;
              break;

            case 46:
              _context16.prev = 46;
              _context16.t1 = _context16["catch"](34);
              console.log(_context16.t1);
              _message = _context16.t1.response.data;
              Toast.fire({
                icon: 'error',
                title: _message
              });

              _icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

            case 52:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[7, 21], [34, 46]]);
    }));

    return function (_x2) {
      return _ref16.apply(this, arguments);
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
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
      var icon, formData, request, _response4, message;

      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context17.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context17.abrupt("return");

            case 4:
              icon = $("#cloture_epreuve i");
              icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append("idEpreuves", JSON.stringify(idEpreuves));
              _context17.prev = 8;
              _context17.next = 11;
              return axios.post('/administration/epreuve/cloture', formData);

            case 11:
              request = _context17.sent;
              _response4 = request.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: _response4
              });
              idEpreuves = [];
              tableEpreuveRattrapage.ajax.reload(null, false);
              tableEpreuveNormal.ajax.reload(null, false);
              _context17.next = 26;
              break;

            case 20:
              _context17.prev = 20;
              _context17.t0 = _context17["catch"](8);
              console.log(_context17.t0);
              message = _context17.t0.response.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 26:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[8, 20]]);
    }));

    return function (_x3) {
      return _ref17.apply(this, arguments);
    };
  }());
  $("#decloturer_epreuve").on('click', /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e) {
      var icon, formData, request, _response5, message;

      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context18.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context18.abrupt("return");

            case 4:
              icon = $("#decloturer_epreuve i");
              icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append("idEpreuves", JSON.stringify(idEpreuves));
              _context18.prev = 8;
              _context18.next = 11;
              return axios.post('/administration/epreuve/decloture', formData);

            case 11:
              request = _context18.sent;
              _response5 = request.data;
              icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: _response5
              });
              idEpreuves = [];
              tableEpreuveRattrapage.ajax.reload(null, false);
              tableEpreuveNormal.ajax.reload(null, false);
              _context18.next = 26;
              break;

            case 20:
              _context18.prev = 20;
              _context18.t0 = _context18["catch"](8);
              console.log(_context18.t0);
              message = _context18.t0.response.data;
              icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 26:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, null, [[8, 20]]);
    }));

    return function (_x4) {
      return _ref18.apply(this, arguments);
    };
  }());
  $("#save_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e) {
      var button, icon, modalAlert, formData, request, _response6, message;

      return regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              e.preventDefault();

              if (!(idInscriptions.length == 0)) {
                _context19.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context19.abrupt("return");

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
              _context19.prev = 13;
              _context19.next = 16;
              return axios.post('/administration/epreuve/affiliation_rattrapage', formData);

            case 16:
              request = _context19.sent;
              _response6 = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              $("#affilier_list_etudiant .modal-body").prepend("<div class=\"alert alert-success\">\n                    <p>".concat(_response6, "</p>\n                  </div>"));
              $(".list_etudiants").empty();
              tableEpreuveRattrapage.ajax.reload(null, false);
              tableEpreuveNormal.ajax.reload(null, false);
              idInscriptions = [];
              $("#affilier_list_etudiant").modal("hide");
              button.removeClass("disabled");
              _context19.next = 36;
              break;

            case 28:
              _context19.prev = 28;
              _context19.t0 = _context19["catch"](13);
              console.log(_context19.t0);
              message = _context19.t0.response.data;
              modalAlert.remove();
              $("#affilier_list_etudiant .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              button.removeClass("disabled");

            case 36:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, null, [[13, 28]]);
    }));

    return function (_x5) {
      return _ref19.apply(this, arguments);
    };
  }());
  $('select').select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context20.next = 7;
              break;
            }

            _context20.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context20.sent;
            response = request.data;

          case 7:
            $('#element').html('').select2();
            $('#module').html('').select2();
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 12:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            id_formation = $(this).val();
            response = "";

            if (!(id_formation != "")) {
              _context21.next = 7;
              break;
            }

            _context21.next = 5;
            return axios.get('/api/promotion/' + id_formation);

          case 5:
            request = _context21.sent;
            response = request.data;

          case 7:
            $('#element').html('').select2();
            $('#module').html('').select2();
            $('#semestre').html('').select2();
            $('#promotion').html(response).select2();

          case 11:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
    var id_promotion, request, requestt;
    return regeneratorRuntime.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            id_promotion = $(this).val();

            if (!(id_promotion != "")) {
              _context22.next = 10;
              break;
            }

            _context22.next = 4;
            return axios.get('/api/semestre/' + id_promotion);

          case 4:
            request = _context22.sent;
            response = request.data;
            _context22.next = 8;
            return axios.get('/api/niv1/' + id_promotion);

          case 8:
            requestt = _context22.sent;
            niv1 = requestt.data;

          case 10:
            $('#element').html('').select2();
            $('#module').html('').select2();
            $('#semestre').html(response).select2();

          case 13:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
    var id_semestre, request;
    return regeneratorRuntime.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            id_semestre = $(this).val();

            if (!(id_semestre != "")) {
              _context23.next = 6;
              break;
            }

            _context23.next = 4;
            return axios.get('/api/module/' + id_semestre);

          case 4:
            request = _context23.sent;
            response = request.data;

          case 6:
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 8:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, this);
  })));
  $("#module").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
    var id_module, request;
    return regeneratorRuntime.wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            id_module = $(this).val();

            if (!(id_module != "")) {
              _context24.next = 6;
              break;
            }

            _context24.next = 4;
            return axios.get('/api/element/' + id_module);

          case 4:
            request = _context24.sent;
            response = request.data;

          case 6:
            $('#element').html(response).select2();

          case 7:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, this);
  })));
  $("#ajouter_epreuve").on("click", function (e) {
    e.preventDefault();
    $("#ajouter_epreuve-modal").modal("show");
  });
  $("body").on('submit', "#add_epreuve", /*#__PURE__*/function () {
    var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(e) {
      var formData, modalAlert, icon, request, _response7, message;

      return regeneratorRuntime.wrap(function _callee25$(_context25) {
        while (1) {
          switch (_context25.prev = _context25.next) {
            case 0:
              e.preventDefault(); // var res = confirm('Vous voulez vraiment ajouter cette enregistrement ?');
              // if(res == 1){

              formData = new FormData($('#add_epreuve')[0]);
              modalAlert = $("#ajouter_epreuve-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#ajouter_epreuve-modal button i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              _context25.prev = 6;
              _context25.next = 9;
              return axios.post('/administration/epreuve/add_epreuve', formData);

            case 9:
              request = _context25.sent;
              _response7 = request.data;
              $("#ajouter_epreuve-modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n                  <p>".concat(_response7, "</p>\n                </div>"));
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context25.next = 23;
              break;

            case 17:
              _context25.prev = 17;
              _context25.t0 = _context25["catch"](6);
              message = _context25.t0.response.data;
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
              return _context25.stop();
          }
        }
      }, _callee25, null, [[6, 17]]);
    }));

    return function (_x6) {
      return _ref25.apply(this, arguments);
    };
  }());
  $("#import_epreuve").on("click", function () {
    $("#import_en_masse").modal("show");
    $("#import_en_masse .modal-body .alert").remove();
  });
  $('#epreuve_imprimer').on('click', /*#__PURE__*/function () {
    var _ref26 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(e) {
      var icon, request, _response8, message;

      return regeneratorRuntime.wrap(function _callee26$(_context26) {
        while (1) {
          switch (_context26.prev = _context26.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context26.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context26.abrupt("return");

            case 4:
              icon = $("#epreuve_imprimer i");
              icon.removeClass('fa-copy').addClass("fa-spinner fa-spin");
              _context26.prev = 6;
              _context26.next = 9;
              return axios.get('/administration/epreuve/checkifanonymat/' + id_epreuve);

            case 9:
              request = _context26.sent;
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

              _context26.next = 25;
              break;

            case 19:
              _context26.prev = 19;
              _context26.t0 = _context26["catch"](6);
              console.log(_context26.t0);
              message = _context26.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context26.stop();
          }
        }
      }, _callee26, null, [[6, 19]]);
    }));

    return function (_x7) {
      return _ref26.apply(this, arguments);
    };
  }());
  $('#modifier_epreuve').on('click', /*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(e) {
      var icon, request, _response9, message;

      return regeneratorRuntime.wrap(function _callee27$(_context27) {
        while (1) {
          switch (_context27.prev = _context27.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context27.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context27.abrupt("return");

            case 4:
              icon = $("#modifier_epreuve i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context27.prev = 6;
              _context27.next = 9;
              return axios.get('/administration/epreuve/edit/' + id_epreuve);

            case 9:
              request = _context27.sent;
              _response9 = request.data;
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
              $("#modifier_epreuve-modal").modal("show");
              $("#modifier_epreuve-modal #edit_epreuve").html(_response9);
              $('select').select2();
              _context27.next = 23;
              break;

            case 17:
              _context27.prev = 17;
              _context27.t0 = _context27["catch"](6);
              console.log(_context27.t0);
              message = _context27.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context27.stop();
          }
        }
      }, _callee27, null, [[6, 17]]);
    }));

    return function (_x8) {
      return _ref27.apply(this, arguments);
    };
  }());
  $('#edit_epreuve').on('submit', /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(e) {
      var icon, formData, request, _response10, message;

      return regeneratorRuntime.wrap(function _callee28$(_context28) {
        while (1) {
          switch (_context28.prev = _context28.next) {
            case 0:
              e.preventDefault();
              icon = $("#edit_epreuve button i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              formData = new FormData($(this)[0]);
              _context28.prev = 4;
              _context28.next = 7;
              return axios.post('/administration/epreuve/update/' + id_epreuve, formData);

            case 7:
              request = _context28.sent;
              _response10 = request.data;
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
              $("#modifier_epreuve-modal").modal("hide");
              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              _context28.next = 21;
              break;

            case 15:
              _context28.prev = 15;
              _context28.t0 = _context28["catch"](4);
              console.log(_context28.t0);
              message = _context28.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");

            case 21:
            case "end":
              return _context28.stop();
          }
        }
      }, _callee28, this, [[4, 15]]);
    }));

    return function (_x9) {
      return _ref28.apply(this, arguments);
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
    var _ref29 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(e) {
      var icon, formData, request, _response11, message;

      return regeneratorRuntime.wrap(function _callee29$(_context29) {
        while (1) {
          switch (_context29.prev = _context29.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context29.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context29.abrupt("return");

            case 4:
              icon = $("#capitaliser_etudiant i");
              icon.removeClass('fab fa-get-pocket').addClass("fa fa-spinner fa-spin");
              formData = new FormData();
              formData.append('idEpreuves', JSON.stringify(idEpreuves));
              _context29.prev = 8;
              _context29.next = 11;
              return axios.post('/administration/epreuve/capitaliser', formData);

            case 11:
              request = _context29.sent;
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

              _context29.next = 24;
              break;

            case 18:
              _context29.prev = 18;
              _context29.t0 = _context29["catch"](8);
              console.log(_context29.t0);
              message = _context29.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fab fa-get-pocket').removeClass("fa fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context29.stop();
          }
        }
      }, _callee29, null, [[8, 18]]);
    }));

    return function (_x10) {
      return _ref29.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction_epv_valide', /*#__PURE__*/function () {
    var _ref30 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(e) {
      var icon;
      return regeneratorRuntime.wrap(function _callee30$(_context30) {
        while (1) {
          switch (_context30.prev = _context30.next) {
            case 0:
              e.preventDefault();
              icon = $("#extraction_epv_valide i");
              window.open('/administration/epreuve/extraction_epreuve_valide', '_blank');

            case 3:
            case "end":
              return _context30.stop();
          }
        }
      }, _callee30);
    }));

    return function (_x11) {
      return _ref30.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction_epv_valide_s2', /*#__PURE__*/function () {
    var _ref31 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(e) {
      var icon;
      return regeneratorRuntime.wrap(function _callee31$(_context31) {
        while (1) {
          switch (_context31.prev = _context31.next) {
            case 0:
              e.preventDefault();
              icon = $("#extraction_epv_valide_s2 i");
              window.open('/administration/epreuve/extraction_epreuve_valide_s2', '_blank');

            case 3:
            case "end":
              return _context31.stop();
          }
        }
      }, _callee31);
    }));

    return function (_x12) {
      return _ref31.apply(this, arguments);
    };
  }());
  $('body').on('click', '#open_upload_file', /*#__PURE__*/function () {
    var _ref32 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(e) {
      return regeneratorRuntime.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              e.preventDefault();
              $('body #inscriptions_ids').click();

            case 2:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32);
    }));

    return function (_x13) {
      return _ref32.apply(this, arguments);
    };
  }());
  $('body').on('submit', '#Affiler_inscriptions_ids', /*#__PURE__*/function () {
    var _ref33 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(e) {
      var res, button, icon, modalAlert, formData, request, _response12, message;

      return regeneratorRuntime.wrap(function _callee33$(_context33) {
        while (1) {
          switch (_context33.prev = _context33.next) {
            case 0:
              e.preventDefault();
              res = confirm('L\'affiliation est definitive, vous etes sur ?');

              if (!(res == 1)) {
                _context33.next = 38;
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

              _context33.prev = 11;
              _context33.next = 14;
              return axios.post('/administration/epreuve/affiliation_ParInscriptions', formData);

            case 14:
              request = _context33.sent;
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
              _context33.next = 38;
              break;

            case 29:
              _context33.prev = 29;
              _context33.t0 = _context33["catch"](11);
              console.log(_context33.t0);
              message = _context33.t0.response.data;
              modalAlert.remove();
              $("#affilier_list_etudiant .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              setTimeout(function () {
                $("#affilier_list_etudiant .modal-body .alert").remove();
              }, 2000); // button.removeClass("disabled");

              button.attr('disabled', false);

            case 38:
            case "end":
              return _context33.stop();
          }
        }
      }, _callee33, this, [[11, 29]]);
    }));

    return function (_x14) {
      return _ref33.apply(this, arguments);
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

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ ((module) => {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
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

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/administration/epreuve.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsZ0JBQWdCLG1CQUFPLENBQUMsNkZBQWdDO0FBQ3hELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFbkQsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdDQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG59KVxyXG5cclxuICAgIGxldCByYXR0cmFwYWdlID0gMDtcclxuICAgIGxldCBpZF9lcHJldXZlID0gbnVsbDtcclxuICAgIGxldCBpZEVwcmV1dmVzID0gW107XHJcbiAgICBsZXQgaWRJbnNjcmlwdGlvbnMgPSBbXTtcclxuICAgIFxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgdmFyIHRhYmxlRXByZXV2ZU5vcm1hbCA9ICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2xpc3Qvbm9ybWFsXCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZEVwcmV1dmVzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfZXByZXV2ZSkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZURyYXdDYWxsYmFjazogZnVuY3Rpb24oc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCcjbGlzdF9lcHJldXZlX25vcm1hbCcpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHQgPSAkKCcjbGlzdF9lcHJldXZlX25vcm1hbCcpLkRhdGFUYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vQWJvcnQgcHJldmlvdXMgYWpheCByZXF1ZXN0IGlmIGl0IGlzIHN0aWxsIGluIHByb2Nlc3MuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSBkdC5zZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzWzBdLmpxWEhSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgdmFyIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UgPSAkKFwiI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvbGlzdC9yYXR0cmFwYWdlXCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZEVwcmV1dmVzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfZXByZXV2ZSkuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZURyYXdDYWxsYmFjazogZnVuY3Rpb24oc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCcjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlJykuRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAvL0Fib3J0IHByZXZpb3VzIGFqYXggcmVxdWVzdCBpZiBpdCBpcyBzdGlsbCBpbiBwcm9jZXNzLlxyXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gZHQuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gZmlsdGVycyBmb3Igc2Vzc2lvbiBub3JtYWxlXHJcblxyXG4gICAgJChcIiNldGFibGlzc2VtZW50TnJtbFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiYm9keSAjZXRhYmxpc3NlbWVudE5ybWxcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAoJChcIiNkYXRlRXByZXV2ZU5ybWxcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjZGF0ZUVwcmV1dmVOcm1sXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmICgkKFwiI2RhdGVFcHJldXZlTnJtbFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucyg2KS5zZWFyY2goJChcIiNkYXRlRXByZXV2ZU5ybWxcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygpLnNlYXJjaChcIlwiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlTnJtbCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlTnJtbCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudE5ybWwnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbk5ybWwnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbk5ybWwnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHkgI2Zvcm1hdGlvbk5ybWxcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYgKCQoXCIjZGF0ZUVwcmV1dmVOcm1sXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjZGF0ZUVwcmV1dmVOcm1sXCIpLnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygwKS5zZWFyY2goJChcImJvZHkgI2V0YWJsaXNzZW1lbnROcm1sXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZU5ybWwnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZU5ybWwnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnROcm1sJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb25Ocm1sJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5ICNwcm9tb3Rpb25Ocm1sXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI2RhdGVFcHJldXZlTnJtbFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI2RhdGVFcHJldXZlTnJtbFwiKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKDIpLnNlYXJjaChpZF9wcm9tb3Rpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKDEpLnNlYXJjaCgkKFwiYm9keSAjZm9ybWF0aW9uTnJtbFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmVOcm1sJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGVOcm1sJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50TnJtbCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmVOcm1sJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5ICNzZW1lc3RyZU5ybWxcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNkYXRlRXByZXV2ZU5ybWxcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucyg2KS5zZWFyY2goJChcIiNkYXRlRXByZXV2ZU5ybWxcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJytpZF9zZW1lc3RyZSk7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKDMpLnNlYXJjaChpZF9zZW1lc3RyZSkuZHJhdygpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygyKS5zZWFyY2goJChcImJvZHkgI3Byb21vdGlvbk5ybWxcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI21vZHVsZU5ybWwnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnROcm1sJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGVOcm1sJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5ICNtb2R1bGVOcm1sXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9tb2R1bGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI2RhdGVFcHJldXZlTnJtbFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI2RhdGVFcHJldXZlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9tb2R1bGUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucyg0KS5zZWFyY2goaWRfbW9kdWxlKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZWxlbWVudC8nK2lkX21vZHVsZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiYm9keSAjc2VtZXN0cmVOcm1sXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjZWxlbWVudE5ybWwnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHkgI2VsZW1lbnROcm1sXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9lbGVtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNkYXRlRXByZXV2ZU5ybWxcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucyg2KS5zZWFyY2goJChcIiNkYXRlRXByZXV2ZU5ybWxcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKDUpLnNlYXJjaChpZF9lbGVtZW50KS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNkYXRlRXByZXV2ZU5ybWxcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGRhdGVFcHJldXZlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlRXByZXV2ZSk7XHJcbiAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoNikuc2VhcmNoKGRhdGVFcHJldXZlKS5kcmF3KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGVuZCBmaWx0ZXJzIHNlc3Npb24gbm9ybWFsZVxyXG5cclxuXHJcbiAgICAvLyBmaWx0ZXJzIGZvciBzZXNzaW9uIHJhdHRyYXBhZ2VcclxuXHJcbiAgICAkKFwiYm9keSAjZXRhYmxpc3NlbWVudFJhdHRcIikuc2VsZWN0MigpO1xyXG4gICAgJChcImJvZHkgI2V0YWJsaXNzZW1lbnRSYXR0XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiI2RhdGVFcHJldXZlUmF0dFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjZGF0ZUVwcmV1dmVSYXR0XCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZiAoJChcIiNkYXRlRXByZXV2ZVJhdHRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI2RhdGVFcHJldXZlUmF0dFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucygpLnNlYXJjaChcIlwiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlUmF0dCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlUmF0dCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudFJhdHQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvblJhdHQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvblJhdHQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHkgI2Zvcm1hdGlvblJhdHRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI2RhdGVFcHJldXZlUmF0dFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucyg2KS5zZWFyY2goJChcIiNkYXRlRXByZXV2ZVJhdHRcIikudmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCJib2R5ICNldGFibGlzc2VtZW50UmF0dFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmVSYXR0JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGVSYXR0JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50UmF0dCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uUmF0dCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keSAjcHJvbW90aW9uUmF0dFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYgKCQoXCIjZGF0ZUVwcmV1dmVSYXR0XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI2RhdGVFcHJldXZlUmF0dFwiKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCJib2R5ICNmb3JtYXRpb25SYXR0XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZVJhdHQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZVJhdHQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnRSYXR0JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZVJhdHQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHkgI3NlbWVzdHJlUmF0dFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNkYXRlRXByZXV2ZVJhdHRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjZGF0ZUVwcmV1dmVSYXR0XCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycraWRfc2VtZXN0cmUpO1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoMykuc2VhcmNoKGlkX3NlbWVzdHJlKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucygyKS5zZWFyY2goJChcImJvZHkgI3Byb21vdGlvblJhdHRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI21vZHVsZVJhdHQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnRSYXR0JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGVSYXR0JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5ICNtb2R1bGVSYXR0XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9tb2R1bGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNkYXRlRXByZXV2ZVJhdHRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjZGF0ZUVwcmV1dmVSYXR0XCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9tb2R1bGUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoNCkuc2VhcmNoKGlkX21vZHVsZSkuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VsZW1lbnQvJytpZF9tb2R1bGUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoMykuc2VhcmNoKCQoXCJib2R5ICNzZW1lc3RyZVJhdHRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNlbGVtZW50UmF0dCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keSAjZWxlbWVudFJhdHRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2VsZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNkYXRlRXByZXV2ZVJhdHRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjZGF0ZUVwcmV1dmVSYXR0XCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoNSkuc2VhcmNoKGlkX2VsZW1lbnQpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2RhdGVFcHJldXZlUmF0dFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgZGF0ZUVwcmV1dmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucyg2KS5zZWFyY2goZGF0ZUVwcmV1dmUpLmRyYXcoKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gZW5kIGZpbHRlcnMgc2Vzc2lvbiByYXR0cmFwcGFnZVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZEVwcmV1dmVzLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRFcHJldXZlcy5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICBpZEVwcmV1dmVzLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKCcjaW5zY3JpcHRpb24tbW9kYWwnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgaWRfZXByZXV2ZSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9lcHJldXZlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKCcjaW5zY3JpcHRpb24tbW9kYWwnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgaWRfZXByZXV2ZSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9lcHJldXZlID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICAkKCcubmF2LXBpbGxzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQodGhpcykudGFiKCdzaG93JylcclxuICAgICAgICBpZF9lcHJldXZlID0gbnVsbDtcclxuICAgICAgICBpZEVwcmV1dmVzID0gW107XHJcbiAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICQoXCJpbnB1dFwiKS5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5odG1sKCkgPT0gJ1Nlc3Npb24gbm9ybWFsJykge1xyXG4gICAgICAgICAgICByYXR0cmFwYWdlID0gMDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmF0dHJhcGFnZSA9IDE7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgXHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXBvcnRfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKVxyXG4gICAgfSlcclxuICAgICQoXCIjZXByZXV2ZV9jYW52YXNcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvY2FudmFzXCIsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIjaW1wb3J0X2VwcmV1dmVfc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNlcHJldXZlX2VucmVnaXN0cmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2ltcG9ydCcsIGZvcm1EYXRhKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIityZXNwb25zZS5maWxlICxcIl9ibGFua1wiKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2FmZmlsaWVyX2V0dWRpYW50XCIpLm9uKCdjbGljaycgLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihyYXR0cmFwYWdlID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIHNlc3Npb24gbm9ybWFsXHJcbiAgICAgICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09MCkge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2FmZmlsaWVyX2V0dWRpYW50IGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxpbmsnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImVwcmV1dmVzXCIsIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2FmZmlsaWF0aW9uX25vcm1hbGUnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxpbmsnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS50b3RhbCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIityZXNwb25zZS56aXBuYW1lICxcIl9ibGFua1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdpbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRXByZXV2ZXMgZMOpamEgYWZmaWxpZXIgb3UgdmFsaWRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGlkRXByZXV2ZXMgPSBbXTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1saW5rJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZighaWRfZXByZXV2ZSkge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYWZmaWxpZXJfZXR1ZGlhbnQgaVwiKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbGluaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9ldHVkaWFudHMvJytpZF9lcHJldXZlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhOyAgICBcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxpbmsnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5saXN0X2V0dWRpYW50c1wiKS5odG1sKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgJChcIi5jaGVja19hbGxfZXR1ZGlhbnRcIikucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnRcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbGluaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcuY2hlY2tfZXR1ZGlhbnQnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGlkSW5zY3JpcHRpb25zLmluZGV4T2YoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgaWYoaW5kZXggIT0gLTEpe1xyXG4gICAgICAgICAgICBpZEluc2NyaXB0aW9ucy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb25zLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkSW5zY3JpcHRpb25zKTtcclxuXHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5jaGVja19hbGxfZXR1ZGlhbnQnLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZEluc2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGluc2NyaXB0aW9ucyA9ICQoXCIuY2hlY2tfZXR1ZGlhbnRcIik7XHJcbiAgICAgICAgaWYoJChcIi5jaGVja19hbGxfZXR1ZGlhbnRcIikucHJvcCgnY2hlY2tlZCcpID09IHRydWUpIHtcclxuICAgICAgICAgICAgaW5zY3JpcHRpb25zLnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGluc2NyaXB0aW9ucy5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZEluc2NyaXB0aW9ucy5wdXNoKHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5zY3JpcHRpb25zLnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZEluc2NyaXB0aW9ucyk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNjbG90dXJlX2VwcmV1dmVcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PTApIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2Nsb3R1cmVfZXByZXV2ZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEVwcmV1dmVzXCIsICBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvY2xvdHVyZScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7ICAgIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWRFcHJldXZlcyA9IFtdXHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjZGVjbG90dXJlcl9lcHJldXZlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRFcHJldXZlcy5sZW5ndGggPT0wKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNkZWNsb3R1cmVyX2VwcmV1dmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrLW9wZW4nKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEVwcmV1dmVzXCIsICBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvZGVjbG90dXJlJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTsgICAgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMgPSBbXVxyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI3NhdmVfbGlzdF9ldHVkaWFudFwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkSW5zY3JpcHRpb25zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidXR0b24gPSAkKCcjc2F2ZV9saXN0X2V0dWRpYW50Jyk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJ1dHRvbi5maW5kKCdpJyk7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEluc2NyaXB0aW9uc1wiLCBKU09OLnN0cmluZ2lmeShpZEluc2NyaXB0aW9ucykpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaWRFcHJldXZlXCIsIGlkX2VwcmV1dmUpXHJcbiAgICAgICAgYnV0dG9uLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2FmZmlsaWF0aW9uX3JhdHRyYXBhZ2UnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhOyAgICBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgJChcIi5saXN0X2V0dWRpYW50c1wiKS5lbXB0eSgpXHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZEluc2NyaXB0aW9ucyA9IFtdXHJcbiAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3R0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjEvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICBuaXYxID0gcmVxdWVzdHQuZGF0YSBcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJytpZF9zZW1lc3RyZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNtb2R1bGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiI2Fqb3V0ZXJfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpeyAgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNhZGRfZXByZXV2ZVwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgYWpvdXRlciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICAgICAgLy8gaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoJyNhZGRfZXByZXV2ZScpWzBdKTtcclxuICAgICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNham91dGVyX2VwcmV1dmUtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsIGJ1dHRvbiBpXCIpO1xyXG4gICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9hZGRfZXByZXV2ZScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPlxyXG4gICAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRlcl9lcHJldXZlLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCAyNTAwKSAgXHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXBvcnRfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKVxyXG4gICAgfSlcclxuICAgICQoJyNlcHJldXZlX2ltcHJpbWVyJykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9lcHJldXZlKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VwcmV1dmVfaW1wcmltZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jb3B5JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2NoZWNraWZhbm9ueW1hdC8nK2lkX2VwcmV1dmUpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNvcHknKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjaW1wcmltZXJfZXByZXV2ZVwiKS5tb2RhbChcInNob3dcIilcclxuICAgICAgICAgICAgJCgnI2ltcHJpbWVyX2VwcmV1dmUgLmV0dWRpYW50X2luZm8nKS5odG1sKHJlc3BvbnNlLmh0bWwpO1xyXG4gICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuZXByZXV2ZV90aXRsZScpLmh0bWwocmVzcG9uc2UuaWQpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5hbm9ueW1hdCA9PSBcIm91aVwiKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuYWN0aW9ucycpLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9jbGFpclwiPkltcHJlc3Npb24gQ2xhaXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IG10LTNcIiBpZD1cImltcHJlc3Npb25fYW5vbnltYXRcIj5JbXByZXNzaW9uIEFub255bWF0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiZXh0cmFjdGlvbl9lbWFyZ2VtZW50XCI+RXh0cmFjdGlvbiBFbWFyZ2VtZW50PC9hPmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuYWN0aW9ucycpLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgYDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9jbGFpclwiPkltcHJlc3Npb24gQ2xhaXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJleHRyYWN0aW9uX2VtYXJnZW1lbnRcIj5FeHRyYWN0aW9uIEVtYXJnZW1lbnQ8L2E+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY29weScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJyNtb2RpZmllcl9lcHJldXZlJykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9lcHJldXZlKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyX2VwcmV1dmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2VkaXQvJytpZF9lcHJldXZlKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfZXByZXV2ZS1tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9lcHJldXZlLW1vZGFsICNlZGl0X2VwcmV1dmVcIikuaHRtbChyZXNwb25zZSk7ICAgIFxyXG4gICAgICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7ICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJyNlZGl0X2VwcmV1dmUnKS5vbignc3VibWl0JywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VkaXRfZXByZXV2ZSBidXR0b24gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvdXBkYXRlLycraWRfZXByZXV2ZSwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICQoXCIjbW9kaWZpZXJfZXByZXV2ZS1tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNpbXByZXNzaW9uX2NsYWlyJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvaW1wcmVzc2lvbi9cIitpZF9lcHJldXZlK1wiLzBcIiwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2ltcHJlc3Npb25fYW5vbnltYXQnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9pbXByZXNzaW9uL1wiK2lkX2VwcmV1dmUrXCIvMVwiLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjZXh0cmFjdGlvbl9lbWFyZ2VtZW50JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9lcHJldXZlKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9leHRyYWN0aW9uX2VtYXJnZW1lbnQvJytpZF9lcHJldXZlLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnI2NhcGl0YWxpc2VyX2V0dWRpYW50Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2NhcGl0YWxpc2VyX2V0dWRpYW50IGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5hZGRDbGFzcyhcImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkRXByZXV2ZXMnLCBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvY2FwaXRhbGlzZXInLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNvdW50PjApIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBpZEVwcmV1dmVzID0gW107XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIityZXNwb25zZS5maWxlTmFtZSAsXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdpbmZvJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcHJldXZlcyBub24gY2FwaXRhbGlzZXJcIixcclxuICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNleHRyYWN0aW9uX2Vwdl92YWxpZGUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNleHRyYWN0aW9uX2Vwdl92YWxpZGUgaVwiKTtcclxuICAgICAgICB3aW5kb3cub3BlbignL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvZXh0cmFjdGlvbl9lcHJldXZlX3ZhbGlkZScsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb25fZXB2X3ZhbGlkZV9zMicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2V4dHJhY3Rpb25fZXB2X3ZhbGlkZV9zMiBpXCIpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9leHRyYWN0aW9uX2VwcmV1dmVfdmFsaWRlX3MyJywgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjb3Blbl91cGxvYWRfZmlsZScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJ2JvZHkgI2luc2NyaXB0aW9uc19pZHMnKS5jbGljaygpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywnI0FmZmlsZXJfaW5zY3JpcHRpb25zX2lkcycsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdMXFwnYWZmaWxpYXRpb24gZXN0IGRlZmluaXRpdmUsIHZvdXMgZXRlcyBzdXIgPycpO1xyXG4gICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gJCgnI0FmZmlsZXJfaW5zY3JpcHRpb25zX2lkcyAjQWZmaWxlcl9idG4nKTtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGJ1dHRvbi5maW5kKCdpJyk7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkRXByZXV2ZVwiLCBpZF9lcHJldXZlKVxyXG4gICAgICAgICAgICBidXR0b24uYXR0cignZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgICAgICAvLyBidXR0b24uYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9hZmZpbGlhdGlvbl9QYXJJbnNjcmlwdGlvbnMnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTsgICAgXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICQoXCIubGlzdF9ldHVkaWFudHNcIikuZW1wdHkoKVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZEluc2NyaXB0aW9ucyA9IFtdXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBidXR0b24ucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgLy8gYnV0dG9uLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIvLyBpdGVyYWJsZSBET00gY29sbGVjdGlvbnNcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBDU1NSdWxlTGlzdDogMCxcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcbiAgQ1NTVmFsdWVMaXN0OiAwLFxuICBDbGllbnRSZWN0TGlzdDogMCxcbiAgRE9NUmVjdExpc3Q6IDAsXG4gIERPTVN0cmluZ0xpc3Q6IDAsXG4gIERPTVRva2VuTGlzdDogMSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXG4gIEZpbGVMaXN0OiAwLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgSFRNTENvbGxlY3Rpb246IDAsXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gIE1lZGlhTGlzdDogMCxcbiAgTWltZVR5cGVBcnJheTogMCxcbiAgTmFtZWROb2RlTWFwOiAwLFxuICBOb2RlTGlzdDogMSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcbiAgUGx1Z2luOiAwLFxuICBQbHVnaW5BcnJheTogMCxcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcbiAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXG4gIFNWR1BvaW50TGlzdDogMCxcbiAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcbiAgU3R5bGVTaGVldExpc3Q6IDAsXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXG4gIFRleHRUcmFja0xpc3Q6IDAsXG4gIFRvdWNoTGlzdDogMFxufTtcbiIsIi8vIGluIG9sZCBXZWJLaXQgdmVyc2lvbnMsIGBlbGVtZW50LmNsYXNzTGlzdGAgaXMgbm90IGFuIGluc3RhbmNlIG9mIGdsb2JhbCBgRE9NVG9rZW5MaXN0YFxudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG52YXIgY2xhc3NMaXN0ID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdzcGFuJykuY2xhc3NMaXN0O1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IGNsYXNzTGlzdCAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBET01Ub2tlbkxpc3RQcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgPyB1bmRlZmluZWQgOiBET01Ub2tlbkxpc3RQcm90b3R5cGU7XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xuICB9XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsInJhdHRyYXBhZ2UiLCJpZF9lcHJldXZlIiwiaWRFcHJldXZlcyIsImlkSW5zY3JpcHRpb25zIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZUVwcmV1dmVOb3JtYWwiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsInByZURyYXdDYWxsYmFjayIsInNldHRpbmdzIiwiZm4iLCJpc0RhdGFUYWJsZSIsImR0IiwianFYSFIiLCJhYm9ydCIsImxhbmd1YWdlIiwidXJsIiwidGFibGVFcHJldXZlUmF0dHJhcGFnZSIsInNlbGVjdDIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwicmVzcG9uc2UiLCJkcmF3IiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJpZF9zZW1lc3RyZSIsImlkX21vZHVsZSIsImlkX2VsZW1lbnQiLCJkYXRlRXByZXV2ZSIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJhdHRyIiwic3BsaWNlIiwicHVzaCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ0YWIiLCJtb2RhbCIsInJlbW92ZSIsIndpbmRvdyIsIm9wZW4iLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJtb2RhbEFsZXJ0IiwiaWNvbiIsInBvc3QiLCJwcmVwZW5kIiwibWVzc2FnZSIsImZpbGUiLCJyZWxvYWQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZmlyZSIsInRpdGxlIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvdGFsIiwiemlwbmFtZSIsImluc2NyaXB0aW9ucyIsIm1hcCIsInZhbHVlIiwiYnV0dG9uIiwiZW1wdHkiLCJyZXF1ZXN0dCIsIm5pdjEiLCJzZXRUaW1lb3V0IiwiaWQiLCJhbm9ueW1hdCIsImNvdW50IiwiZmlsZU5hbWUiLCJjbGljayIsInJlcyIsImNvbmZpcm0iLCJ0cmlnZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==