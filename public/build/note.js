(self["webpackChunk"] = self["webpackChunk"] || []).push([["note"],{

/***/ "./assets/components/administration/note.js":
/*!**************************************************!*\
  !*** ./assets/components/administration/note.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    scrollX: true,
    drawCallback: function drawCallback() {
      // idEpreuves.forEach((e) => {
      //     $("body tr#" + e)
      //     .find("input")
      //     .prop("checked", true);
      // });
      $("body tr#" + id_epreuve).addClass('active_databales');
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_notes_epreuve')) {
        var dt = $('#datables_notes_epreuve').DataTable(); //Abort previous ajax request if it is still in process.

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
  } // $('body').on('click','#datables_notes_epreuve tbody tr',function () {
  //     const input = $(this).find("input");
  //     if(input.is(":checked")){
  //         input.prop("checked",false);
  //         const index = idEpreuves.indexOf(input.attr("id"));
  //         idEpreuves.splice(index,1);
  //     }else{
  //         input.prop("checked",true);
  //         idEpreuves.push(input.attr("id"));
  //     }
  //     console.log(idEpreuves);
  // })


  $('body').on('click', '#datables_notes_epreuve tbody tr', function (e) {
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
              _context11.next = 13;
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
            _context11.next = 21;
            break;

          case 13:
            formData.append('absence', false);
            _context11.next = 16;
            return axios.post('/administration/note/absence_update/' + id_exgnotes, formData);

          case 16:
            _request = _context11.sent;
            _context11.next = 19;
            return _request.data;

          case 19:
            _data = _context11.sent;
            table_notes_epreuve.ajax.reload(null, false);

          case 21:
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
              table_notes_epreuve.ajax.reload(null, false);
              _context13.next = 24;
              break;

            case 17:
              _context13.prev = 17;
              _context13.t0 = _context13["catch"](6);
              message = _context13.t0.response.data;
              console.log(_context13.t0, _context13.t0.response);
              modalAlert.remove();
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this, [[6, 17]]);
    }));

    return function (_x5) {
      return _ref13.apply(this, arguments);
    };
  }()); // -------------------- FROM idEpreuves.JS  --------------------------------

  $("#cloture_epreuve").on('click', /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      var idEpreuves, icon, formData, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context14.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context14.abrupt("return");

            case 4:
              idEpreuves = [];
              idEpreuves.push(id_epreuve);
              icon = $("#cloture_epreuve i");
              icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append("idEpreuves", JSON.stringify(idEpreuves));
              _context14.prev = 10;
              _context14.next = 13;
              return axios.post('/administration/epreuve/cloture', formData);

            case 13:
              request = _context14.sent;
              _response2 = request.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: _response2
              });
              idEpreuves = [];
              table_notes_epreuve.ajax.reload(null, false);
              _context14.next = 27;
              break;

            case 21:
              _context14.prev = 21;
              _context14.t0 = _context14["catch"](10);
              console.log(_context14.t0);
              message = _context14.t0.response.data;
              icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 27:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, null, [[10, 21]]);
    }));

    return function (_x6) {
      return _ref14.apply(this, arguments);
    };
  }());
  $('#capitaliser_etudiant').on('click', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var idEpreuves, icon, formData, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              e.preventDefault();

              if (id_epreuve) {
                _context15.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
              });
              return _context15.abrupt("return");

            case 4:
              idEpreuves = [];
              idEpreuves.push(id_epreuve);
              icon = $("#capitaliser_etudiant i");
              icon.removeClass('fab fa-get-pocket').addClass("fa fa-spinner fa-spin");
              formData = new FormData();
              formData.append('idEpreuves', JSON.stringify(idEpreuves));
              _context15.prev = 10;
              _context15.next = 13;
              return axios.post('/administration/epreuve/capitaliser', formData);

            case 13:
              request = _context15.sent;
              _response3 = request.data;
              console.log(_response3);
              icon.addClass('fab fa-get-pocket').removeClass("fa fa-spinner fa-spin ");

              if (_response3.count > 0) {
                idEpreuves = [];
                table_notes_epreuve.ajax.reload(null, false);
                window.open("/" + _response3.fileName, "_blank");
              } else {
                Toast.fire({
                  icon: 'info',
                  title: "Epreuves non capitaliser"
                });
              }

              _context15.next = 26;
              break;

            case 20:
              _context15.prev = 20;
              _context15.t0 = _context15["catch"](10);
              console.log(_context15.t0);
              message = _context15.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fab fa-get-pocket').removeClass("fa fa-spinner fa-spin ");

            case 26:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[10, 20]]);
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
              return axios.get('/administration/epreuve/checkifanonymat/' + id_epreuve);

            case 9:
              request = _context16.sent;
              _response4 = request.data;
              console.log(_response4);
              icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");
              $("#imprimer_epreuve").modal("show");
              $('#imprimer_epreuve .etudiant_info').html(_response4.html);
              $('#imprimer_epreuve .epreuve_title').html(_response4.id);

              if (_response4.anonymat == "oui") {
                $('#imprimer_epreuve .actions').html("<a href=\"#\" class=\"btn btn-success mt-3\" id=\"impression_clair\">Impression Clair</a>\n                    <a href=\"#\" class=\"btn btn-secondary mt-3\" id=\"impression_anonymat\">Impression Anonymat</a>\n                    <a href=\"#\" class=\"btn btn-success mt-3\" id=\"extraction_emargement\">Extraction Emargement</a>");
              } else {
                $('#imprimer_epreuve .actions').html("<a href=\"#\" class=\"btn btn-success mt-3\" id=\"impression_clair\">Impression Clair</a>\n                    <a href=\"#\" class=\"btn btn-success mt-3\" id=\"extraction_emargement\">Extraction Emargement</a>");
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
});

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


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

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8"], () => (__webpack_exec__("./assets/components/administration/note.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9ub3RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgbGV0IGlkX2VwcmV1dmUgPSBmYWxzZTtcclxuICAgIGxldCBpZEVwcmV1dmVzID0gW107XHJcbiAgICB2YXIgdGFibGVfbm90ZXNfZXByZXV2ZSA9ICQoXCIjZGF0YWJsZXNfbm90ZXNfZXByZXV2ZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9hZG1pbmlzdHJhdGlvbi9ub3RlL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gaWRFcHJldXZlcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgIC8vICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgIC8vICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX2VwcmV1dmUpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZURyYXdDYWxsYmFjazogZnVuY3Rpb24oc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCcjZGF0YWJsZXNfbm90ZXNfZXByZXV2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHQgPSAkKCcjZGF0YWJsZXNfbm90ZXNfZXByZXV2ZScpLkRhdGFUYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vQWJvcnQgcHJldmlvdXMgYWpheCByZXF1ZXN0IGlmIGl0IGlzIHN0aWxsIGluIHByb2Nlc3MuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSBkdC5zZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzWzBdLmpxWEhSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGZ1bmN0aW9uIHRhYmxlX25vdGVfaW5zY3JpcHRpb24oKXtcclxuICAgICAgICB2YXIgdGFibGVfbm90ZXNfaW5zY3JpcHRpb24gPSAgJChcIiNkYXRhdGFibGVzX25vdGVzX2luc2NyaXB0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG9yZGVyOiBbWzIsIFwiYXNjXCJdXSxcclxuICAgICAgICAgICAgYWpheDogXCIvYWRtaW5pc3RyYXRpb24vbm90ZS9saXN0L25vdGVfaW5zY3JpcHRpb24vXCIraWRfZXByZXV2ZSxcclxuICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdGF0ZVNhdmU6IHRydWUsXHJcbiAgICAgICAgICAgIGJEZXN0cm95OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX25vdGVzX2VwcmV1dmUgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgLy8gICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgLy8gICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgIC8vICAgICAgICAgY29uc3QgaW5kZXggPSBpZEVwcmV1dmVzLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgIC8vICAgICAgICAgaWRFcHJldXZlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgIGlkRXByZXV2ZXMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpZEVwcmV1dmVzKTtcclxuICAgIC8vIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGFibGVzX25vdGVzX2VwcmV1dmUgdGJvZHkgdHInLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX2VwcmV1dmUgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfbm90ZXNfZXByZXV2ZSB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGljb24gPSAkKCcjbm90ZSBpJyk7XHJcbiAgICAgICAgICAgIC8vIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLW5ld3NwYXBlcicpLmFkZENsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKTtcclxuICAgICAgICAgICAgaWRfZXByZXV2ZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgdGFibGVfbm90ZV9pbnNjcmlwdGlvbigpXHJcbiAgICAgICAgICAgIC8vIGljb24uYWRkQ2xhc3MoJ2ZhLW5ld3NwYXBlcicpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNwcm9mZXNzZXVyXCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZiAoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygwKS5zZWFyY2goJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygyKS5zZWFyY2goaWRfcHJvbW90aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nK2lkX3NlbWVzdHJlKTtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDMpLnNlYXJjaChpZF9zZW1lc3RyZSkuZHJhdygpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI21vZHVsZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYgKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucyg2KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9tb2R1bGUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNCkuc2VhcmNoKGlkX21vZHVsZSkuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VsZW1lbnQvJytpZF9tb2R1bGUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjc2VtZXN0cmVcIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZWxlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZWxlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDUpLnNlYXJjaChpZF9lbGVtZW50KS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9mZXNzZXVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9mID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKGlkX3Byb2YpLmRyYXcoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNub3RlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX2VwcmV1dmUpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNub3Rlc21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywnLnNhdmVfbm90ZScsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGlkX2V4Z25vdGVzID0gJCh0aGlzKS5maW5kKCdpbnB1dCcpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgaWYoICQodGhpcykuZmluZCgnaW5wdXQnKS52YWwoKSA8IDAgfHwgJCh0aGlzKS5maW5kKCdpbnB1dCcpLnZhbCgpID4gMjApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0xhIE5vdGUgZG9pdCBldHJlIGVudHJlIDAgZXQgMjAnLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0JykuYmx1cigpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoJ3RyJykuZmluZCgnLmlucHV0X25vdGUnKS5mb2N1cygpO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vbm90ZS9ub3RlX3VwZGF0ZS8nK2lkX2V4Z25vdGVzLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCcuc2F2ZV9vYnMnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnaW5wdXQnKS5ibHVyKCk7XHJcbiAgICAgICAgbGV0IGlkX2V4Z25vdGVzID0gJCh0aGlzKS5maW5kKCdpbnB1dCcpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgndHInKS5maW5kKCcuaW5wdXRfb2JzJykuZm9jdXMoKTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL25vdGUvb2JzZXJ2YXRpb25fdXBkYXRlLycraWRfZXhnbm90ZXMsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcuY2hlY2tfbm90ZV9pbnMnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBsZXQgaWRfZXhnbm90ZXMgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgaWYgKCQodGhpcykucHJvcCgnY2hlY2tlZCcpID09IHRydWUpIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhYnNlbmNlJyx0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9ub3RlL2Fic2VuY2VfdXBkYXRlLycraWRfZXhnbm90ZXMsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhYnNlbmNlJyxmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vbm90ZS9hYnNlbmNlX3VwZGF0ZS8nK2lkX2V4Z25vdGVzLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjaW1wb3J0XCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX2VwcmV1dmUpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNpbXBvcnRfZW5fbWFzc2UnKS5tb2RhbChcInNob3dcIik7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNlcHJldXZlX2NhbnZhcycsIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvYWRtaW5pc3RyYXRpb24vbm90ZS9jYW52YXMvJytpZF9lcHJldXZlLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXBvcnRfZXByZXV2ZV9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICBcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VwcmV1dmVfZW5yZWdpc3RyZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL25vdGUvaW1wb3J0LycraWRfZXByZXV2ZSwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICB0YWJsZV9ub3RlX2luc2NyaXB0aW9uKClcclxuICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tIEZST00gaWRFcHJldXZlcy5KUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICQoXCIjY2xvdHVyZV9lcHJldXZlXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX2VwcmV1dmUpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpZEVwcmV1dmVzID0gW107XHJcbiAgICAgICAgaWRFcHJldXZlcy5wdXNoKGlkX2VwcmV1dmUpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2Nsb3R1cmVfZXByZXV2ZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZEVwcmV1dmVzXCIsICBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvY2xvdHVyZScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7ICAgIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWRFcHJldXZlcyA9IFtdXHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnI2NhcGl0YWxpc2VyX2V0dWRpYW50Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9lcHJldXZlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaWRFcHJldXZlcyA9IFtdO1xyXG4gICAgICAgIGlkRXByZXV2ZXMucHVzaChpZF9lcHJldXZlKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNjYXBpdGFsaXNlcl9ldHVkaWFudCBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykuYWRkQ2xhc3MoXCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZEVwcmV1dmVzJywgSlNPTi5zdHJpbmdpZnkoaWRFcHJldXZlcykpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2NhcGl0YWxpc2VyJywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5jb3VudD4wKSB7XHJcbiAgICAgICAgICAgICAgICBpZEVwcmV1dmVzID0gW107XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiL1wiK3Jlc3BvbnNlLmZpbGVOYW1lICxcIl9ibGFua1wiKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVwcmV1dmVzIG5vbiBjYXBpdGFsaXNlclwiLFxyXG4gICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhIGZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJCgnI2VwcmV1dmVfaW1wcmltZXInKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX2VwcmV1dmUpIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZXByZXV2ZV9pbXByaW1lciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNvcHknKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvY2hlY2tpZmFub255bWF0LycraWRfZXByZXV2ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY29weScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJChcIiNpbXByaW1lcl9lcHJldXZlXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuZXR1ZGlhbnRfaW5mbycpLmh0bWwocmVzcG9uc2UuaHRtbCk7XHJcbiAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5lcHJldXZlX3RpdGxlJykuaHRtbChyZXNwb25zZS5pZCk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmFub255bWF0ID09IFwib3VpXCIpIHtcclxuICAgICAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5hY3Rpb25zJykuaHRtbChcclxuICAgICAgICAgICAgICAgICAgICBgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJpbXByZXNzaW9uX2NsYWlyXCI+SW1wcmVzc2lvbiBDbGFpcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9hbm9ueW1hdFwiPkltcHJlc3Npb24gQW5vbnltYXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJleHRyYWN0aW9uX2VtYXJnZW1lbnRcIj5FeHRyYWN0aW9uIEVtYXJnZW1lbnQ8L2E+YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5hY3Rpb25zJykuaHRtbChcclxuICAgICAgICAgICAgICAgICAgICBgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJpbXByZXNzaW9uX2NsYWlyXCI+SW1wcmVzc2lvbiBDbGFpcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG10LTNcIiBpZD1cImV4dHJhY3Rpb25fZW1hcmdlbWVudFwiPkV4dHJhY3Rpb24gRW1hcmdlbWVudDwvYT5gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jb3B5JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjaW1wcmVzc2lvbl9jbGFpcicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB3aW5kb3cub3BlbihcIi9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2ltcHJlc3Npb24vXCIraWRfZXByZXV2ZStcIi8wXCIsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNpbXByZXNzaW9uX2Fub255bWF0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKFwiL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvaW1wcmVzc2lvbi9cIitpZF9lcHJldXZlK1wiLzFcIiwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2V4dHJhY3Rpb25fZW1hcmdlbWVudCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfZXByZXV2ZSkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cub3BlbignL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvZXh0cmFjdGlvbl9lbWFyZ2VtZW50LycraWRfZXByZXV2ZSwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxufSk7IiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG52YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJ2YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4LCBmaWx0ZXJSZWplY3QgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgSVNfRklMVEVSX1JFSkVDVCA9IFRZUEUgPT0gNztcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0KTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2Uoc2VsZik7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY3JlYXRlID0gc3BlY2lmaWNDcmVhdGUgfHwgYXJyYXlTcGVjaWVzQ3JlYXRlO1xuICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgfHwgSVNfRklMVEVSX1JFSkVDVCA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbHVlLCByZXN1bHQ7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWx1ZSA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzdWx0ID0gYm91bmRGdW5jdGlvbih2YWx1ZSwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgdGFyZ2V0W2luZGV4XSA9IHJlc3VsdDsgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdCkgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWx1ZTsgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHB1c2godGFyZ2V0LCB2YWx1ZSk7ICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDQ6IHJldHVybiBmYWxzZTsgICAgICAgICAgICAgLy8gZXZlcnlcbiAgICAgICAgICBjYXNlIDc6IHB1c2godGFyZ2V0LCB2YWx1ZSk7ICAgICAgLy8gZmlsdGVyUmVqZWN0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gIGZvckVhY2g6IGNyZWF0ZU1ldGhvZCgwKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbiAgbWFwOiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4gIHNvbWU6IGNyZWF0ZU1ldGhvZCgzKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XG4gIGV2ZXJ5OiBjcmVhdGVNZXRob2QoNCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuICBmaW5kSW5kZXg6IGNyZWF0ZU1ldGhvZCg2KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJSZWplY3RgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1hcnJheS1maWx0ZXJpbmdcbiAgZmlsdGVyUmVqZWN0OiBjcmVhdGVNZXRob2QoNylcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgQXJyYXkgPSBnbG9iYWwuQXJyYXk7XG5cbi8vIGEgcGFydCBvZiBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5KSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuICAgIEMgPSBvcmlnaW5hbEFycmF5LmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKGlzQ29uc3RydWN0b3IoQykgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG4iLCJ2YXIgYXJyYXlTcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG4vLyBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyAoYXJyYXlTcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWxBcnJheSkpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09ICdBcnJheSc7XG59O1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfZXByZXV2ZSIsImlkRXByZXV2ZXMiLCJ0YWJsZV9ub3Rlc19lcHJldXZlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiYWRkQ2xhc3MiLCJwcmVEcmF3Q2FsbGJhY2siLCJzZXR0aW5ncyIsImZuIiwiaXNEYXRhVGFibGUiLCJkdCIsImpxWEhSIiwiYWJvcnQiLCJsYW5ndWFnZSIsInVybCIsInRhYmxlX25vdGVfaW5zY3JpcHRpb24iLCJ0YWJsZV9ub3Rlc19pbnNjcmlwdGlvbiIsInN0YXRlU2F2ZSIsImJEZXN0cm95Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsInNlbGVjdDIiLCJpZF9ldGFiIiwidmFsIiwiY29sdW1ucyIsInNlYXJjaCIsInJlc3BvbnNlIiwiZHJhdyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwiaWRfcHJvbW90aW9uIiwiaWRfc2VtZXN0cmUiLCJpZF9tb2R1bGUiLCJpZF9lbGVtZW50IiwiaWRfcHJvZiIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJtb2RhbCIsImlkX2V4Z25vdGVzIiwiZmluZCIsImJsdXIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicGFyZW50IiwibmV4dCIsImZvY3VzIiwicG9zdCIsInJlbG9hZCIsInByb3AiLCJhcHBlbmQiLCJ3aW5kb3ciLCJvcGVuIiwibW9kYWxBbGVydCIsInJlbW92ZSIsInByZXBlbmQiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5IiwiY291bnQiLCJmaWxlTmFtZSIsImlkIiwiYW5vbnltYXQiXSwic291cmNlUm9vdCI6IiJ9