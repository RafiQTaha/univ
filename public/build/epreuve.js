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
      var icon, formData, request, _response2, message, _icon, _formData, _request, _response3, _message;

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
              _context16.next = 54;
              break;

            case 29:
              if (!(idEpreuves.length == 0)) {
                _context16.next = 32;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context16.abrupt("return");

            case 32:
              _icon = $("#affilier_etudiant i");

              _icon.removeClass('fa-link').addClass("fa-spinner fa-spin");

              _context16.prev = 34;
              _formData = new FormData();

              _formData.append("epreuves", JSON.stringify(idEpreuves));

              _context16.next = 39;
              return axios.post('/administration/epreuve/affiliation_rattrapage_Automatique', _formData);

            case 39:
              _request = _context16.sent;
              _response3 = _request.data;

              _icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

              if (_response3.total > 0) {
                window.open("/" + _response3.zipname, "_blank");
              } else {
                Toast.fire({
                  icon: 'info',
                  title: "Epreuves déja affilier ou valider"
                });
              }

              tableEpreuveNormal.ajax.reload(null, false);
              tableEpreuveRattrapage.ajax.reload(null, false);
              idEpreuves = [];
              _context16.next = 54;
              break;

            case 48:
              _context16.prev = 48;
              _context16.t1 = _context16["catch"](34);
              console.log(_context16.t1);
              _message = _context16.t1.response.data;
              Toast.fire({
                icon: 'error',
                title: _message
              });

              _icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

            case 54:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[7, 21], [34, 48]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNwQ0QsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyQkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFlBQVksbUJBQU8sQ0FBQyx1RkFBNkI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQztBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5ELHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3Q0FBd0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxufSlcclxuXHJcbiAgICBsZXQgcmF0dHJhcGFnZSA9IDA7XHJcbiAgICBsZXQgaWRfZXByZXV2ZSA9IG51bGw7XHJcbiAgICBsZXQgaWRFcHJldXZlcyA9IFtdO1xyXG4gICAgbGV0IGlkSW5zY3JpcHRpb25zID0gW107XHJcbiAgICBcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIHZhciB0YWJsZUVwcmV1dmVOb3JtYWwgPSAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9saXN0L25vcm1hbFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2VwcmV1dmUpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2xpc3RfZXByZXV2ZV9ub3JtYWwnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2xpc3RfZXByZXV2ZV9ub3JtYWwnKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0Fib3J0IHByZXZpb3VzIGFqYXggcmVxdWVzdCBpZiBpdCBpcyBzdGlsbCBpbiBwcm9jZXNzLlxyXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gZHQuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIHZhciB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlID0gJChcIiNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2xpc3QvcmF0dHJhcGFnZVwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2VwcmV1dmUpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9ICQoJyNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZScpLkRhdGFUYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGR0LnNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIGZpbHRlcnMgZm9yIHNlc3Npb24gbm9ybWFsZVxyXG5cclxuICAgICQoXCIjZXRhYmxpc3NlbWVudE5ybWxcIikuc2VsZWN0MigpO1xyXG4gICAgJChcImJvZHkgI2V0YWJsaXNzZW1lbnROcm1sXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIjZGF0ZUVwcmV1dmVOcm1sXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI2RhdGVFcHJldXZlTnJtbFwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZiAoJChcIiNkYXRlRXByZXV2ZU5ybWxcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjZGF0ZUVwcmV1dmVOcm1sXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZU5ybWwnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZU5ybWwnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnROcm1sJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb25Ocm1sJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb25Ocm1sJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5ICNmb3JtYXRpb25Ocm1sXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI2RhdGVFcHJldXZlTnJtbFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI2RhdGVFcHJldXZlTnJtbFwiKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCJib2R5ICNldGFibGlzc2VtZW50TnJtbFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmVOcm1sJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGVOcm1sJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50TnJtbCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uTnJtbCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keSAjcHJvbW90aW9uTnJtbFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNkYXRlRXByZXV2ZU5ybWxcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucyg2KS5zZWFyY2goJChcIiNkYXRlRXByZXV2ZU5ybWxcIikudmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygxKS5zZWFyY2goJChcImJvZHkgI2Zvcm1hdGlvbk5ybWxcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlTnJtbCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlTnJtbCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudE5ybWwnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlTnJtbCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keSAjc2VtZXN0cmVOcm1sXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYgKCQoXCIjZGF0ZUVwcmV1dmVOcm1sXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjZGF0ZUVwcmV1dmVOcm1sXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycraWRfc2VtZXN0cmUpO1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygzKS5zZWFyY2goaWRfc2VtZXN0cmUpLmRyYXcoKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoMikuc2VhcmNoKCQoXCJib2R5ICNwcm9tb3Rpb25Ocm1sXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNtb2R1bGVOcm1sJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50TnJtbCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlTnJtbCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keSAjbW9kdWxlTnJtbFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNkYXRlRXByZXV2ZU5ybWxcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucyg2KS5zZWFyY2goJChcIiNkYXRlRXByZXV2ZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoNCkuc2VhcmNoKGlkX21vZHVsZSkuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VsZW1lbnQvJytpZF9tb2R1bGUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucygzKS5zZWFyY2goJChcImJvZHkgI3NlbWVzdHJlTnJtbFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnI2VsZW1lbnROcm1sJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5ICNlbGVtZW50TnJtbFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZWxlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYgKCQoXCIjZGF0ZUVwcmV1dmVOcm1sXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjZGF0ZUVwcmV1dmVOcm1sXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuY29sdW1ucyg1KS5zZWFyY2goaWRfZWxlbWVudCkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZGF0ZUVwcmV1dmVOcm1sXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBkYXRlRXByZXV2ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0ZUVwcmV1dmUpO1xyXG4gICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5jb2x1bW5zKDYpLnNlYXJjaChkYXRlRXByZXV2ZSkuZHJhdygpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBlbmQgZmlsdGVycyBzZXNzaW9uIG5vcm1hbGVcclxuXHJcblxyXG4gICAgLy8gZmlsdGVycyBmb3Igc2Vzc2lvbiByYXR0cmFwYWdlXHJcblxyXG4gICAgJChcImJvZHkgI2V0YWJsaXNzZW1lbnRSYXR0XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCJib2R5ICNldGFibGlzc2VtZW50UmF0dFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAoJChcIiNkYXRlRXByZXV2ZVJhdHRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI2RhdGVFcHJldXZlUmF0dFwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYgKCQoXCIjZGF0ZUVwcmV1dmVSYXR0XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucyg2KS5zZWFyY2goJChcIiNkYXRlRXByZXV2ZVJhdHRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZVJhdHQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZVJhdHQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnRSYXR0JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb25SYXR0JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb25SYXR0JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5ICNmb3JtYXRpb25SYXR0XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNkYXRlRXByZXV2ZVJhdHRcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjZGF0ZUVwcmV1dmVSYXR0XCIpLnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDApLnNlYXJjaCgkKFwiYm9keSAjZXRhYmxpc3NlbWVudFJhdHRcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlUmF0dCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlUmF0dCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudFJhdHQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvblJhdHQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHkgI3Byb21vdGlvblJhdHRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI2RhdGVFcHJldXZlUmF0dFwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuY29sdW1ucyg2KS5zZWFyY2goJChcIiNkYXRlRXByZXV2ZVJhdHRcIikudmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoMikuc2VhcmNoKGlkX3Byb21vdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDEpLnNlYXJjaCgkKFwiYm9keSAjZm9ybWF0aW9uUmF0dFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmVSYXR0JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGVSYXR0JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50UmF0dCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmVSYXR0JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5ICNzZW1lc3RyZVJhdHRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYgKCQoXCIjZGF0ZUVwcmV1dmVSYXR0XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI2RhdGVFcHJldXZlUmF0dFwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nK2lkX3NlbWVzdHJlKTtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDMpLnNlYXJjaChpZF9zZW1lc3RyZSkuZHJhdygpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoMikuc2VhcmNoKCQoXCJib2R5ICNwcm9tb3Rpb25SYXR0XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNtb2R1bGVSYXR0JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50UmF0dCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlUmF0dCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keSAjbW9kdWxlUmF0dFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYgKCQoXCIjZGF0ZUVwcmV1dmVSYXR0XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI2RhdGVFcHJldXZlUmF0dFwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDQpLnNlYXJjaChpZF9tb2R1bGUpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiYm9keSAjc2VtZXN0cmVSYXR0XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjZWxlbWVudFJhdHQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHkgI2VsZW1lbnRSYXR0XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9lbGVtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYgKCQoXCIjZGF0ZUVwcmV1dmVSYXR0XCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI2RhdGVFcHJldXZlUmF0dFwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5jb2x1bW5zKDUpLnNlYXJjaChpZF9lbGVtZW50KS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNkYXRlRXByZXV2ZVJhdHRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGRhdGVFcHJldXZlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmNvbHVtbnMoNikuc2VhcmNoKGRhdGVFcHJldXZlKS5kcmF3KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGVuZCBmaWx0ZXJzIHNlc3Npb24gcmF0dHJhcHBhZ2VcclxuICAgIFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRFcHJldXZlcy5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICBpZEVwcmV1dmVzLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZSB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGlkRXByZXV2ZXMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgICAgICBpZEVwcmV1dmVzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5wdXNoKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignZGJsY2xpY2snLCcjbGlzdF9lcHJldXZlX25vcm1hbCB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCgnI2luc2NyaXB0aW9uLW1vZGFsJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGlkX2VwcmV1dmUgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfZXByZXV2ZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNsaXN0X2VwcmV1dmVfcmF0dHJhcGFnZSB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCgnI2luc2NyaXB0aW9uLW1vZGFsJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGlkX2VwcmV1dmUgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9yYXR0cmFwYWdlIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfZXByZXV2ZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgJCgnLm5hdi1waWxscyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAkKHRoaXMpLnRhYignc2hvdycpXHJcbiAgICAgICAgaWRfZXByZXV2ZSA9IG51bGw7XHJcbiAgICAgICAgaWRFcHJldXZlcyA9IFtdO1xyXG4gICAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICQoXCIjbGlzdF9lcHJldXZlX3JhdHRyYXBhZ2UgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAkKFwiaW5wdXRcIikucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaHRtbCgpID09ICdTZXNzaW9uIG5vcm1hbCcpIHtcclxuICAgICAgICAgICAgcmF0dHJhcGFnZSA9IDA7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJhdHRyYXBhZ2UgPSAxO1xyXG4gICAgICAgIH0gICBcclxuICAgIFxyXG4gICAgfSlcclxuICAgICQoXCIjaW1wb3J0X2VwcmV1dmVcIikub24oXCJjbGlja1wiLCAoKSA9PiB7ICBcclxuICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZVwiKS5tb2RhbChcInNob3dcIilcclxuICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKClcclxuICAgIH0pXHJcbiAgICAkKFwiI2VwcmV1dmVfY2FudmFzXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cub3BlbihcIi9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2NhbnZhc1wiLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiI2ltcG9ydF9lcHJldXZlX3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgIFxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZXByZXV2ZV9lbnJlZ2lzdHJlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9pbXBvcnQnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZS5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgd2luZG93Lm9wZW4oXCIvXCIrcmVzcG9uc2UuZmlsZSAsXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNhZmZpbGllcl9ldHVkaWFudFwiKS5vbignY2xpY2snICwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYocmF0dHJhcGFnZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBzZXNzaW9uIG5vcm1hbFxyXG4gICAgICAgICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PTApIHtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNhZmZpbGllcl9ldHVkaWFudCBpXCIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1saW5rJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJlcHJldXZlc1wiLCBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9hZmZpbGlhdGlvbl9ub3JtYWxlJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1saW5rJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UudG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCIvXCIrcmVzcG9uc2UuemlwbmFtZSAsXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVwcmV1dmVzIGTDqWphIGFmZmlsaWVyIG91IHZhbGlkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBpZEVwcmV1dmVzID0gW107XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbGluaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoaWRFcHJldXZlcy5sZW5ndGggPT0wKSB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjYWZmaWxpZXJfZXR1ZGlhbnQgaVwiKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbGluaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJlcHJldXZlc1wiLCBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9hZmZpbGlhdGlvbl9yYXR0cmFwYWdlX0F1dG9tYXRpcXVlJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1saW5rJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UudG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCIvXCIrcmVzcG9uc2UuemlwbmFtZSAsXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVwcmV1dmVzIGTDqWphIGFmZmlsaWVyIG91IHZhbGlkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBpZEVwcmV1dmVzID0gW107XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbGluaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmKCFpZF9lcHJldXZlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBjb25zdCBpY29uID0gJChcIiNhZmZpbGllcl9ldHVkaWFudCBpXCIpO1xyXG4gICAgICAgICAgICAvLyBpY29uLnJlbW92ZUNsYXNzKCdmYS1saW5rJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2V0dWRpYW50cy8nK2lkX2VwcmV1dmUpO1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7ICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgaWNvbi5hZGRDbGFzcygnZmEtbGluaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAkKFwiLmxpc3RfZXR1ZGlhbnRzXCIpLmh0bWwocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIC8vICAgICAkKFwiLmNoZWNrX2FsbF9ldHVkaWFudFwiKS5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgIC8vICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAvLyAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICBpY29uLmFkZENsYXNzKCdmYS1saW5rJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5jaGVja19ldHVkaWFudCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaWRJbnNjcmlwdGlvbnMuaW5kZXhPZigkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICBpZihpbmRleCAhPSAtMSl7XHJcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb25zLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWRJbnNjcmlwdGlvbnMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRJbnNjcmlwdGlvbnMpO1xyXG5cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmNoZWNrX2FsbF9ldHVkaWFudCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlkSW5zY3JpcHRpb25zID0gW107XHJcbiAgICAgICAgY29uc3QgaW5zY3JpcHRpb25zID0gJChcIi5jaGVja19ldHVkaWFudFwiKTtcclxuICAgICAgICBpZigkKFwiLmNoZWNrX2FsbF9ldHVkaWFudFwiKS5wcm9wKCdjaGVja2VkJykgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpbnNjcmlwdGlvbnMucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgaW5zY3JpcHRpb25zLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlkSW5zY3JpcHRpb25zLnB1c2godGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnNjcmlwdGlvbnMucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkSW5zY3JpcHRpb25zKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Nsb3R1cmVfZXByZXV2ZVwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09MCkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjY2xvdHVyZV9lcHJldXZlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbG9jaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkRXByZXV2ZXNcIiwgIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9jbG90dXJlJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTsgICAgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpZEVwcmV1dmVzID0gW11cclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNkZWNsb3R1cmVyX2VwcmV1dmVcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PTApIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RlY2xvdHVyZXJfZXByZXV2ZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkRXByZXV2ZXNcIiwgIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9kZWNsb3R1cmUnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhOyAgICBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jay1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWRFcHJldXZlcyA9IFtdXHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jay1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjc2F2ZV9saXN0X2V0dWRpYW50XCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRJbnNjcmlwdGlvbnMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9ICQoJyNzYXZlX2xpc3RfZXR1ZGlhbnQnKTtcclxuICAgICAgICBjb25zdCBpY29uID0gYnV0dG9uLmZpbmQoJ2knKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkSW5zY3JpcHRpb25zXCIsIEpTT04uc3RyaW5naWZ5KGlkSW5zY3JpcHRpb25zKSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEVwcmV1dmVcIiwgaWRfZXByZXV2ZSlcclxuICAgICAgICBidXR0b24uYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvYWZmaWxpYXRpb25fcmF0dHJhcGFnZScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7ICAgIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAkKFwiLmxpc3RfZXR1ZGlhbnRzXCIpLmVtcHR5KClcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZU5vcm1hbC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb25zID0gW11cclxuICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50XCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2MS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIG5pdjEgPSByZXF1ZXN0dC5kYXRhIFxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nK2lkX3NlbWVzdHJlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI21vZHVsZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihpZF9tb2R1bGUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VsZW1lbnQvJytpZF9tb2R1bGUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIjYWpvdXRlcl9lcHJldXZlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7ICBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJChcIiNham91dGVyX2VwcmV1dmUtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsIFwiI2FkZF9lcHJldXZlXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBham91dGVyIGNldHRlIGVucmVnaXN0cmVtZW50ID8nKTtcclxuICAgICAgICAvLyBpZihyZXMgPT0gMSl7XHJcbiAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCgnI2FkZF9lcHJldXZlJylbMF0pO1xyXG4gICAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2Fqb3V0ZXJfZXByZXV2ZS1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNham91dGVyX2VwcmV1dmUtbW9kYWwgYnV0dG9uIGlcIik7XHJcbiAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2FkZF9lcHJldXZlJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNham91dGVyX2VwcmV1dmUtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVSYXR0cmFwYWdlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNham91dGVyX2VwcmV1dmUtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPVwid2lkdGg6IDk4JTttYXJnaW46IDAgYXV0bztcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDI1MDApICBcclxuICAgIH0pXHJcbiAgICAkKFwiI2ltcG9ydF9lcHJldXZlXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4geyAgXHJcbiAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2VcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpXHJcbiAgICB9KVxyXG4gICAgJCgnI2VwcmV1dmVfaW1wcmltZXInKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX2VwcmV1dmUpIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZXByZXV2ZV9pbXByaW1lciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNvcHknKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvY2hlY2tpZmFub255bWF0LycraWRfZXByZXV2ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY29weScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJChcIiNpbXByaW1lcl9lcHJldXZlXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuZXR1ZGlhbnRfaW5mbycpLmh0bWwocmVzcG9uc2UuaHRtbCk7XHJcbiAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5lcHJldXZlX3RpdGxlJykuaHRtbChyZXNwb25zZS5pZCk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmFub255bWF0ID09IFwib3VpXCIpIHtcclxuICAgICAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5hY3Rpb25zJykuaHRtbChcclxuICAgICAgICAgICAgICAgICAgICBgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJpbXByZXNzaW9uX2NsYWlyXCI+SW1wcmVzc2lvbiBDbGFpcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9hbm9ueW1hdFwiPkltcHJlc3Npb24gQW5vbnltYXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJleHRyYWN0aW9uX2VtYXJnZW1lbnRcIj5FeHRyYWN0aW9uIEVtYXJnZW1lbnQ8L2E+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5hY3Rpb25zJykuaHRtbChcclxuICAgICAgICAgICAgICAgICAgICBgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJpbXByZXNzaW9uX2NsYWlyXCI+SW1wcmVzc2lvbiBDbGFpcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG10LTNcIiBpZD1cImV4dHJhY3Rpb25fZW1hcmdlbWVudFwiPkV4dHJhY3Rpb24gRW1hcmdlbWVudDwvYT5gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jb3B5JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnI21vZGlmaWVyX2VwcmV1dmUnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX2VwcmV1dmUpIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXJfZXByZXV2ZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvZWRpdC8nK2lkX2VwcmV1dmUpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9lcHJldXZlLW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX2VwcmV1dmUtbW9kYWwgI2VkaXRfZXByZXV2ZVwiKS5odG1sKHJlc3BvbnNlKTsgICAgXHJcbiAgICAgICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTsgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnI2VkaXRfZXByZXV2ZScpLm9uKCdzdWJtaXQnLCBhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZWRpdF9lcHJldXZlIGJ1dHRvbiBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS91cGRhdGUvJytpZF9lcHJldXZlLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9lcHJldXZlLW1vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxyXG4gICAgICAgICAgICB0YWJsZUVwcmV1dmVOb3JtYWwuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2ltcHJlc3Npb25fY2xhaXInLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9pbXByZXNzaW9uL1wiK2lkX2VwcmV1dmUrXCIvMFwiLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjaW1wcmVzc2lvbl9hbm9ueW1hdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB3aW5kb3cub3BlbihcIi9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2ltcHJlc3Npb24vXCIraWRfZXByZXV2ZStcIi8xXCIsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNleHRyYWN0aW9uX2VtYXJnZW1lbnQnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX2VwcmV1dmUpIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2V4dHJhY3Rpb25fZW1hcmdlbWVudC8nK2lkX2VwcmV1dmUsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICAkKCcjY2FwaXRhbGlzZXJfZXR1ZGlhbnQnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRFcHJldXZlcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjY2FwaXRhbGlzZXJfZXR1ZGlhbnQgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLmFkZENsYXNzKFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRFcHJldXZlcycsIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9jYXBpdGFsaXNlcicsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLnJlbW92ZUNsYXNzKFwiZmEgZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuY291bnQ+MCkge1xyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlUmF0dHJhcGFnZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIGlkRXByZXV2ZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiL1wiK3Jlc3BvbnNlLmZpbGVOYW1lICxcIl9ibGFua1wiKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVwcmV1dmVzIG5vbiBjYXBpdGFsaXNlclwiLFxyXG4gICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb25fZXB2X3ZhbGlkZScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2V4dHJhY3Rpb25fZXB2X3ZhbGlkZSBpXCIpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9leHRyYWN0aW9uX2VwcmV1dmVfdmFsaWRlJywgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXh0cmFjdGlvbl9lcHZfdmFsaWRlX3MyJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZXh0cmFjdGlvbl9lcHZfdmFsaWRlX3MyIGlcIik7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2V4dHJhY3Rpb25fZXByZXV2ZV92YWxpZGVfczInLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNvcGVuX3VwbG9hZF9maWxlJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnYm9keSAjaW5zY3JpcHRpb25zX2lkcycpLmNsaWNrKCk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCcjQWZmaWxlcl9pbnNjcmlwdGlvbnNfaWRzJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ0xcXCdhZmZpbGlhdGlvbiBlc3QgZGVmaW5pdGl2ZSwgdm91cyBldGVzIHN1ciA/Jyk7XHJcbiAgICAgICAgaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSAkKCcjQWZmaWxlcl9pbnNjcmlwdGlvbnNfaWRzICNBZmZpbGVyX2J0bicpO1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gYnV0dG9uLmZpbmQoJ2knKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaWRFcHJldXZlXCIsIGlkX2VwcmV1dmUpXHJcbiAgICAgICAgICAgIGJ1dHRvbi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbi5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2FmZmlsaWF0aW9uX1Bhckluc2NyaXB0aW9ucycsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhOyAgICBcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgJChcIi5saXN0X2V0dWRpYW50c1wiKS5lbXB0eSgpXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuICAgICAgICAgICAgICAgIHRhYmxlRXByZXV2ZVJhdHRyYXBhZ2UuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGFibGVFcHJldXZlTm9ybWFsLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlkSW5zY3JpcHRpb25zID0gW11cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50IC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgJChcIiNhZmZpbGllcl9saXN0X2V0dWRpYW50XCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIGJ1dHRvbi5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIjYWZmaWxpZXJfbGlzdF9ldHVkaWFudCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FmZmlsaWVyX2xpc3RfZXR1ZGlhbnQgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAvLyBidXR0b24ucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuIiwiLy8gaW4gb2xkIFdlYktpdCB2ZXJzaW9ucywgYGVsZW1lbnQuY2xhc3NMaXN0YCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgZ2xvYmFsIGBET01Ub2tlbkxpc3RgXG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbnZhciBjbGFzc0xpc3QgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ3NwYW4nKS5jbGFzc0xpc3Q7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gY2xhc3NMaXN0ICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3RvciAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTVRva2VuTGlzdFByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZSA/IHVuZGVmaW5lZCA6IERPTVRva2VuTGlzdFByb3RvdHlwZTtcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwicmF0dHJhcGFnZSIsImlkX2VwcmV1dmUiLCJpZEVwcmV1dmVzIiwiaWRJbnNjcmlwdGlvbnMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlRXByZXV2ZU5vcm1hbCIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImFkZENsYXNzIiwicHJlRHJhd0NhbGxiYWNrIiwic2V0dGluZ3MiLCJmbiIsImlzRGF0YVRhYmxlIiwiZHQiLCJqcVhIUiIsImFib3J0IiwibGFuZ3VhZ2UiLCJ1cmwiLCJ0YWJsZUVwcmV1dmVSYXR0cmFwYWdlIiwic2VsZWN0MiIsIm9uIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsImlkX3NlbWVzdHJlIiwiaWRfbW9kdWxlIiwiaWRfZWxlbWVudCIsImRhdGVFcHJldXZlIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsImF0dHIiLCJzcGxpY2UiLCJwdXNoIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRhYiIsIm1vZGFsIiwicmVtb3ZlIiwid2luZG93Iiwib3BlbiIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm1vZGFsQWxlcnQiLCJpY29uIiwicG9zdCIsInByZXBlbmQiLCJtZXNzYWdlIiwiZmlsZSIsInJlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJmaXJlIiwidGl0bGUiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidG90YWwiLCJ6aXBuYW1lIiwiaW5zY3JpcHRpb25zIiwibWFwIiwidmFsdWUiLCJidXR0b24iLCJlbXB0eSIsInJlcXVlc3R0Iiwibml2MSIsInNldFRpbWVvdXQiLCJpZCIsImFub255bWF0IiwiY291bnQiLCJmaWxlTmFtZSIsImNsaWNrIiwicmVzIiwiY29uZmlybSIsInRyaWdnZXIiXSwic291cmNlUm9vdCI6IiJ9