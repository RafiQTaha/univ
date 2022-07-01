(self["webpackChunk"] = self["webpackChunk"] || []).push([["note"],{

/***/ "./assets/components/administration/note.js":
/*!**************************************************!*\
  !*** ./assets/components/administration/note.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

$(document).ready(function () {
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
  var id_epreuve = false;
  var idEpreuves = [];
  var table_notes_epreuve = $("#datables_notes_epreuve").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/administration/note/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });

  function table_note_inscription() {
    var table_notes_inscription = $("#datatables_notes_inscription").DataTable({
      lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
      order: [[2, "asc"]],
      ajax: "/administration/note/list/note_inscription/" + id_epreuve,
      processing: true,
      serverSide: true,
      deferRender: true,
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
      },
      stateSave: true,
      bDestroy: true
    });
  }

  $('body').on('click', '#datables_notes_epreuve tbody tr', function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idEpreuves.indexOf(input.attr("id"));
      idEpreuves.splice(index, 1);
    } else {
      input.prop("checked", true);
      idEpreuves.push(input.attr("id"));
    }

    console.log(idEpreuves);
  });
  $('body').on('dblclick', '#datables_notes_epreuve tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_epreuve = null;
    } else {
      $("#datables_notes_epreuve tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales'); // const icon = $('#note i');
      // icon.removeClass('fa-newspaper').addClass('fa-spinner fa-spin');

      id_epreuve = $(this).attr('id');
      table_note_inscription(); // icon.addClass('fa-newspaper').removeClass('fa-spinner fa-spin')
    }
  });
  $("#etablissement").select2();
  $("#professeur").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_notes_epreuve.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 12;
              break;
            }

            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val());
            }

            table_notes_epreuve.columns(0).search(id_etab).draw();
            _context.next = 8;
            return axios.get('/api/formation/' + id_etab);

          case 8:
            request = _context.sent;
            response = request.data;
            _context.next = 13;
            break;

          case 12:
            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val()).draw();
            } else {
              table_notes_epreuve.columns().search("").draw();
            }

          case 13:
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            table_notes_epreuve.columns().search("");

            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 12;
              break;
            }

            table_notes_epreuve.columns(1).search(id_formation).draw();
            _context2.next = 8;
            return axios.get('/api/promotion/' + id_formation);

          case 8:
            request = _context2.sent;
            response = request.data;
            _context2.next = 13;
            break;

          case 12:
            table_notes_epreuve.columns(0).search($("#etablissement").val()).draw();

          case 13:
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#promotion').html(response).select2();

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_promotion, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_promotion = $(this).val();
            table_notes_epreuve.columns().search("");

            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 11;
              break;
            }

            table_notes_epreuve.columns(2).search(id_promotion).draw();
            _context3.next = 7;
            return axios.get('/api/semestre/' + id_promotion);

          case 7:
            request = _context3.sent;
            response = request.data;
            _context3.next = 12;
            break;

          case 11:
            table_notes_epreuve.columns(1).search($("#formation").val()).draw();

          case 12:
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#semestre').html(response).select2();

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_semestre, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_semestre = $(this).val();
            table_notes_epreuve.columns().search("");

            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val());
            }

            if (!(id_semestre != "")) {
              _context4.next = 11;
              break;
            }

            _context4.next = 6;
            return axios.get('/api/module/' + id_semestre);

          case 6:
            request = _context4.sent;
            table_notes_epreuve.columns(3).search(id_semestre).draw();
            response = request.data;
            _context4.next = 12;
            break;

          case 11:
            table_notes_epreuve.columns(2).search($("#promotion").val()).draw();

          case 12:
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#module").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_module, request;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_module = $(this).val();
            table_notes_epreuve.columns().search("");

            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val());
            }

            if (!(id_module != "")) {
              _context5.next = 11;
              break;
            }

            table_notes_epreuve.columns(4).search(id_module).draw();
            _context5.next = 7;
            return axios.get('/api/element/' + id_module);

          case 7:
            request = _context5.sent;
            response = request.data;
            _context5.next = 12;
            break;

          case 11:
            table_notes_epreuve.columns(3).search($("#semestre").val()).draw();

          case 12:
            $('#element').html(response).select2();

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#element").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_element;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_element = $(this).val();
            table_notes_epreuve.columns().search("");

            if ($("#professeur").val() != "") {
              table_notes_epreuve.columns(6).search($("#professeur").val());
            }

            table_notes_epreuve.columns(5).search(id_element).draw();

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#professeur").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var id_prof;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id_prof = $(this).val();
            table_notes_epreuve.columns(6).search(id_prof).draw();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#note").on('click', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context8.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context8.abrupt("return");

            case 4:
              $('#notesmodal').modal("show");

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x) {
      return _ref8.apply(this, arguments);
    };
  }());
  $('body').on('submit', '.save_note', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var id_exgnotes, formData, request, data;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();
              id_exgnotes = $(this).find('input').attr('id');

              if (!($(this).find('input').val() < 0 || $(this).find('input').val() > 20)) {
                _context9.next = 5;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'La Note doit etre entre 0 et 20'
              });
              return _context9.abrupt("return");

            case 5:
              $(this).find('input').blur();
              formData = new FormData($(this)[0]);
              $(this).parent().parent().next('tr').find('.input_note').focus();
              _context9.next = 10;
              return axios.post('/administration/note/note_update/' + id_exgnotes, formData);

            case 10:
              request = _context9.sent;
              response = request.data;
              _context9.next = 14;
              return request.data;

            case 14:
              data = _context9.sent;
              table_notes_epreuve.ajax.reload(null, false);

            case 16:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    return function (_x2) {
      return _ref9.apply(this, arguments);
    };
  }());
  $('body').on('submit', '.save_obs', /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
      var id_exgnotes, formData, request, data;
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault();
              $(this).find('input').blur();
              id_exgnotes = $(this).find('input').attr('id');
              formData = new FormData($(this)[0]);
              $(this).parent().parent().next('tr').find('.input_obs').focus();
              _context10.next = 7;
              return axios.post('/administration/note/observation_update/' + id_exgnotes, formData);

            case 7:
              request = _context10.sent;
              _context10.next = 10;
              return request.data;

            case 10:
              data = _context10.sent;

            case 11:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));

    return function (_x3) {
      return _ref10.apply(this, arguments);
    };
  }());
  $('body').on('click', '.check_note_ins', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var formData, id_exgnotes, request, data, _request, _data;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            formData = new FormData();
            id_exgnotes = $(this).attr('id');

            if (!($(this).prop('checked') == true)) {
              _context11.next = 14;
              break;
            }

            formData.append('absence', true);
            _context11.next = 6;
            return axios.post('/administration/note/absence_update/' + id_exgnotes, formData);

          case 6:
            request = _context11.sent;
            _context11.next = 9;
            return request.data;

          case 9:
            data = _context11.sent;
            table_notes_epreuve.ajax.reload(null, false);
            ;
            _context11.next = 23;
            break;

          case 14:
            formData.append('absence', false);
            _context11.next = 17;
            return axios.post('/administration/note/absence_update/' + id_exgnotes, formData);

          case 17:
            _request = _context11.sent;
            _context11.next = 20;
            return _request.data;

          case 20:
            _data = _context11.sent;
            table_notes_epreuve.ajax.reload(null, false);
            ;

          case 23:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  })));
  $("#import").on('click', /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
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
              $('#import_en_masse').modal("show");

            case 5:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function (_x4) {
      return _ref12.apply(this, arguments);
    };
  }());
  $('body').on('click', '#epreuve_canvas', function () {
    window.open('/administration/note/canvas/' + id_epreuve, '_blank');
  });
  $("#import_epreuve_save").on("submit", /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
      var formData, modalAlert, icon, request, _response, message;

      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#import_en_masse .modal-body .alert");
              modalAlert.remove();
              icon = $("#epreuve_enregistre i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context13.prev = 6;
              _context13.next = 9;
              return axios.post('/administration/note/import/' + id_epreuve, formData);

            case 9:
              request = _context13.sent;
              _response = request.data;
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response, "</p>\n              </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table_note_inscription();
              _context13.next = 23;
              break;

            case 16:
              _context13.prev = 16;
              _context13.t0 = _context13["catch"](6);
              message = _context13.t0.response.data;
              console.log(_context13.t0, _context13.t0.response);
              modalAlert.remove();
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this, [[6, 16]]);
    }));

    return function (_x5) {
      return _ref13.apply(this, arguments);
    };
  }());
  $("#cloture_epreuve").on('click', /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      var icon, formData, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();

              if (!(idEpreuves.length == 0)) {
                _context14.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!'
              });
              return _context14.abrupt("return");

            case 4:
              icon = $("#cloture_epreuve i");
              icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
              _context14.prev = 6;
              formData = new FormData();
              formData.append("epreuves", JSON.stringify(idEpreuves));
              _context14.next = 11;
              return axios.post('/administration/note/cloturer', formData);

            case 11:
              request = _context14.sent;
              _response2 = request.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin ");
              Toast.fire({
                icon: 'success',
                title: _response2
              });
              table_notes_epreuve.ajax.reload(null, false);
              idEpreuves = [];
              _context14.next = 25;
              break;

            case 19:
              _context14.prev = 19;
              _context14.t0 = _context14["catch"](6);
              console.log(_context14.t0);
              message = _context14.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, null, [[6, 19]]);
    }));

    return function (_x6) {
      return _ref14.apply(this, arguments);
    };
  }());
  $("#decloturer_epreuve").on('click', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var icon, formData, request, _response3, message;

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
              icon = $("#decloturer_epreuve i");
              icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
              _context15.prev = 6;
              formData = new FormData();
              formData.append("epreuves", JSON.stringify(idEpreuves));
              _context15.next = 11;
              return axios.post('/administration/note/decloturer', formData);

            case 11:
              request = _context15.sent;
              _response3 = request.data;
              icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin ");
              Toast.fire({
                icon: 'success',
                title: _response3
              });
              table_notes_epreuve.ajax.reload(null, false);
              idEpreuves = [];
              _context15.next = 25;
              break;

            case 19:
              _context15.prev = 19;
              _context15.t0 = _context15["catch"](6);
              console.log(_context15.t0);
              message = _context15.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[6, 19]]);
    }));

    return function (_x7) {
      return _ref15.apply(this, arguments);
    };
  }());
  $('#epreuve_imprimer').on('click', /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
      var icon, request, _response4, message;

      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context16.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context16.abrupt("return");

            case 4:
              icon = $("#epreuve_imprimer i");
              icon.removeClass('fa-copy').addClass("fa-spinner fa-spin");
              _context16.prev = 6;
              _context16.next = 9;
              return axios.get('/administration/note/checkifanonymat/' + id_epreuve);

            case 9:
              request = _context16.sent;
              _response4 = request.data;
              console.log(_response4);
              icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");
              $("#imprimer_epreuve").modal("show");
              $('#imprimer_epreuve .etudiant_info').html(_response4.html);
              $('#imprimer_epreuve .epreuve_title').html(_response4.id);

              if (_response4.anonymat == "oui") {
                $('#imprimer_epreuve .actions').html("<a href=\"#\" class=\"btn btn-success mt-3\" id=\"impression_clair\">Impression Clair</a>\n                    <a href=\"#\" class=\"btn btn-secondary mt-3\" id=\"impression_anonymat\">Impression Anonymat</a>");
              } else {
                $('#imprimer_epreuve .actions').html("<a href=\"#\" class=\"btn btn-success mt-3\" id=\"impression_clair\">Impression Clair</a>");
              }

              _context16.next = 25;
              break;

            case 19:
              _context16.prev = 19;
              _context16.t0 = _context16["catch"](6);
              console.log(_context16.t0);
              message = _context16.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[6, 19]]);
    }));

    return function (_x8) {
      return _ref16.apply(this, arguments);
    };
  }());
  $('body').on('click', '#impression_clair', function (e) {
    e.preventDefault();
    window.open("/administration/note/impression/" + id_epreuve + "/0", '_blank');
  });
  $('body').on('click', '#impression_anonymat', function (e) {
    e.preventDefault();
    window.open("/administration/note/impression/" + id_epreuve + "/1", '_blank');
  });
  $("#capitaliser_etudiant").on('click', /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
      var icon, formData, request, _response5, message;

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
              icon = $("#capitaliser_etudiant i");
              icon.removeClass('fa-archive').addClass("fa-spinner fa-spin");
              _context17.prev = 6;
              formData = new FormData();
              formData.append("epreuves", JSON.stringify(idEpreuves));
              _context17.next = 11;
              return axios.post('/administration/note/capitaliser', formData);

            case 11:
              request = _context17.sent;
              _response5 = request.data;
              icon.addClass('fa-archive').removeClass("fa-spinner fa-spin ");

              if (_response5.count > 0) {
                window.open("/" + _response5.fileName, "_blank");
              }

              idEpreuves = [];
              _context17.next = 24;
              break;

            case 18:
              _context17.prev = 18;
              _context17.t0 = _context17["catch"](6);
              console.log(_context17.t0);
              message = _context17.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-archive').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[6, 18]]);
    }));

    return function (_x9) {
      return _ref17.apply(this, arguments);
    };
  }());
});

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/administration/note.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyw2RUFBd0I7QUFDL0MsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRpb24vbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgbGV0IGlkX2VwcmV1dmUgPSBmYWxzZTtcclxuICAgIGxldCBpZEVwcmV1dmVzID0gW107XHJcbiAgICB2YXIgdGFibGVfbm90ZXNfZXByZXV2ZSA9ICQoXCIjZGF0YWJsZXNfbm90ZXNfZXByZXV2ZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9hZG1pbmlzdHJhdGlvbi9ub3RlL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGZ1bmN0aW9uIHRhYmxlX25vdGVfaW5zY3JpcHRpb24oKXtcclxuICAgICAgICB2YXIgdGFibGVfbm90ZXNfaW5zY3JpcHRpb24gPSAgJChcIiNkYXRhdGFibGVzX25vdGVzX2luc2NyaXB0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG9yZGVyOiBbWzIsIFwiYXNjXCJdXSxcclxuICAgICAgICAgICAgYWpheDogXCIvYWRtaW5pc3RyYXRpb24vbm90ZS9saXN0L25vdGVfaW5zY3JpcHRpb24vXCIraWRfZXByZXV2ZSxcclxuICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgICAgICAgICAgIGJEZXN0cm95OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX25vdGVzX2VwcmV1dmUgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZEVwcmV1dmVzLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICAgICAgaWRFcHJldXZlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZEVwcmV1dmVzKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGFibGVzX25vdGVzX2VwcmV1dmUgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2VwcmV1dmUgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfbm90ZXNfZXByZXV2ZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGljb24gPSAkKCcjbm90ZSBpJyk7XHJcbiAgICAgICAgICAgIC8vIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLW5ld3NwYXBlcicpLmFkZENsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKTtcclxuICAgICAgICAgICAgaWRfZXByZXV2ZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgdGFibGVfbm90ZV9pbnNjcmlwdGlvbigpXHJcbiAgICAgICAgICAgIC8vIGljb24uYWRkQ2xhc3MoJ2ZhLW5ld3NwYXBlcicpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNwcm9mZXNzZXVyXCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZiAoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygwKS5zZWFyY2goJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nK2lkX3NlbWVzdHJlKTtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDMpLnNlYXJjaChpZF9zZW1lc3RyZSkuZHJhdygpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI21vZHVsZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYgKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9tb2R1bGUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNCkuc2VhcmNoKGlkX21vZHVsZSkuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VsZW1lbnQvJytpZF9tb2R1bGUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjc2VtZXN0cmVcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZWxlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZWxlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDUpLnNlYXJjaChpZF9lbGVtZW50KS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9mZXNzZXVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9mID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKGlkX3Byb2YpLmRyYXcoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNub3RlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX2VwcmV1dmUpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNub3Rlc21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywnLnNhdmVfbm90ZScsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGlkX2V4Z25vdGVzID0gJCh0aGlzKS5maW5kKCdpbnB1dCcpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgaWYoICQodGhpcykuZmluZCgnaW5wdXQnKS52YWwoKSA8IDAgfHwgJCh0aGlzKS5maW5kKCdpbnB1dCcpLnZhbCgpID4gMjApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xhIE5vdGUgZG9pdCBldHJlIGVudHJlIDAgZXQgMjAnLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0JykuYmx1cigpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoJ3RyJykuZmluZCgnLmlucHV0X25vdGUnKS5mb2N1cygpO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vbm90ZS9ub3RlX3VwZGF0ZS8nK2lkX2V4Z25vdGVzLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCcuc2F2ZV9vYnMnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnaW5wdXQnKS5ibHVyKCk7XHJcbiAgICAgICAgbGV0IGlkX2V4Z25vdGVzID0gJCh0aGlzKS5maW5kKCdpbnB1dCcpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgndHInKS5maW5kKCcuaW5wdXRfb2JzJykuZm9jdXMoKTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL25vdGUvb2JzZXJ2YXRpb25fdXBkYXRlLycraWRfZXhnbm90ZXMsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcuY2hlY2tfbm90ZV9pbnMnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBsZXQgaWRfZXhnbm90ZXMgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpID09IHRydWUpIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhYnNlbmNlJyx0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9ub3RlL2Fic2VuY2VfdXBkYXRlLycraWRfZXhnbm90ZXMsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5hamF4LnJlbG9hZChudWxsLGZhbHNlKTs7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYWJzZW5jZScsZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL25vdGUvYWJzZW5jZV91cGRhdGUvJytpZF9leGdub3RlcywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpOztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXBvcnRcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZXByZXV2ZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2ltcG9ydF9lbl9tYXNzZScpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2VwcmV1dmVfY2FudmFzJywgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9hZG1pbmlzdHJhdGlvbi9ub3RlL2NhbnZhcy8nK2lkX2VwcmV1dmUsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2ltcG9ydF9lcHJldXZlX3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgIFxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZXByZXV2ZV9lbnJlZ2lzdHJlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vbm90ZS9pbXBvcnQvJytpZF9lcHJldXZlLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgIHRhYmxlX25vdGVfaW5zY3JpcHRpb24oKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgIFxyXG4gICAgJChcIiNjbG90dXJlX2VwcmV1dmVcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PTApIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2Nsb3R1cmVfZXByZXV2ZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZXByZXV2ZXNcIiwgSlNPTi5zdHJpbmdpZnkoaWRFcHJldXZlcykpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vbm90ZS9jbG90dXJlcicsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgaWRFcHJldXZlcyA9IFtdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNkZWNsb3R1cmVyX2VwcmV1dmVcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PTApIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RlY2xvdHVyZXJfZXByZXV2ZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJlcHJldXZlc1wiLCBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9ub3RlL2RlY2xvdHVyZXInLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgaWRFcHJldXZlcyA9ICBbXVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgICQoJyNlcHJldXZlX2ltcHJpbWVyJykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9lcHJldXZlKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VwcmV1dmVfaW1wcmltZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jb3B5JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FkbWluaXN0cmF0aW9uL25vdGUvY2hlY2tpZmFub255bWF0LycraWRfZXByZXV2ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY29weScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJChcIiNpbXByaW1lcl9lcHJldXZlXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuZXR1ZGlhbnRfaW5mbycpLmh0bWwocmVzcG9uc2UuaHRtbCk7XHJcbiAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5lcHJldXZlX3RpdGxlJykuaHRtbChyZXNwb25zZS5pZCk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmFub255bWF0ID09IFwib3VpXCIpIHtcclxuICAgICAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5hY3Rpb25zJykuaHRtbChcclxuICAgICAgICAgICAgICAgICAgICBgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJpbXByZXNzaW9uX2NsYWlyXCI+SW1wcmVzc2lvbiBDbGFpcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9hbm9ueW1hdFwiPkltcHJlc3Npb24gQW5vbnltYXQ8L2E+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5hY3Rpb25zJykuaHRtbChcclxuICAgICAgICAgICAgICAgICAgICBgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJpbXByZXNzaW9uX2NsYWlyXCI+SW1wcmVzc2lvbiBDbGFpcjwvYT5gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jb3B5JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2ltcHJlc3Npb25fY2xhaXInLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vbm90ZS9pbXByZXNzaW9uL1wiK2lkX2VwcmV1dmUrXCIvMFwiLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjaW1wcmVzc2lvbl9hbm9ueW1hdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB3aW5kb3cub3BlbihcIi9hZG1pbmlzdHJhdGlvbi9ub3RlL2ltcHJlc3Npb24vXCIraWRfZXByZXV2ZStcIi8xXCIsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNjYXBpdGFsaXNlcl9ldHVkaWFudFwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09MCkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjY2FwaXRhbGlzZXJfZXR1ZGlhbnQgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1hcmNoaXZlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImVwcmV1dmVzXCIsIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL25vdGUvY2FwaXRhbGlzZXInLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb3VudD4wKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIityZXNwb25zZS5maWxlTmFtZSAsXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWRFcHJldXZlcyA9ICBbXVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbn0pOyIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX2VwcmV1dmUiLCJpZEVwcmV1dmVzIiwidGFibGVfbm90ZXNfZXByZXV2ZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwibGFuZ3VhZ2UiLCJ1cmwiLCJ0YWJsZV9ub3RlX2luc2NyaXB0aW9uIiwidGFibGVfbm90ZXNfaW5zY3JpcHRpb24iLCJzdGF0ZVNhdmUiLCJiRGVzdHJveSIsIm9uIiwiaW5wdXQiLCJmaW5kIiwiaXMiLCJwcm9wIiwiaW5kZXgiLCJpbmRleE9mIiwiYXR0ciIsInNwbGljZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2VsZWN0MiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwicmVzcG9uc2UiLCJkcmF3IiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJpZF9zZW1lc3RyZSIsImlkX21vZHVsZSIsImlkX2VsZW1lbnQiLCJpZF9wcm9mIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsIm1vZGFsIiwiaWRfZXhnbm90ZXMiLCJibHVyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInBhcmVudCIsIm5leHQiLCJmb2N1cyIsInBvc3QiLCJyZWxvYWQiLCJhcHBlbmQiLCJ3aW5kb3ciLCJvcGVuIiwibW9kYWxBbGVydCIsInJlbW92ZSIsInByZXBlbmQiLCJtZXNzYWdlIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwiYW5vbnltYXQiLCJjb3VudCIsImZpbGVOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==