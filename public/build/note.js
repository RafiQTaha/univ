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

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

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
    drawCallback: function drawCallback() {
      idEpreuves.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
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
  }()); // $("#cloture_epreuve").on('click', async function(e) {
  //     e.preventDefault();
  //     if(idEpreuves.length ==0) {
  //         Toast.fire({
  //             icon: 'error',
  //             title: 'Veuillez cochez une ou plusieurs ligne!',
  //         })
  //         return;
  //     }
  //     const icon = $("#cloture_epreuve i");
  //     icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
  //     try {
  //         let formData = new FormData();
  //         formData.append("epreuves", JSON.stringify(idEpreuves))
  //         const request = await axios.post('/administration/note/cloturer', formData);
  //         const response = request.data;
  //         icon.addClass('fa-lock').removeClass("fa-spinner fa-spin ");
  //         Toast.fire({
  //             icon: 'success',
  //             title: response,
  //         }) 
  //         table_notes_epreuve.ajax.reload(null, false)
  //         idEpreuves = [];
  //     } catch (error) {
  //         console.log(error)
  //         const message = error.response.data;
  //         Toast.fire({
  //             icon: 'error',
  //             title: message,
  //         }) 
  //         icon.addClass('fa-lock').removeClass("fa-spinner fa-spin ");
  //     }
  // })
  // $("#decloturer_epreuve").on('click', async function(e) {
  //     e.preventDefault();
  //     if(idEpreuves.length ==0) {
  //         Toast.fire({
  //             icon: 'error',
  //             title: 'Veuillez cochez une ou plusieurs ligne!',
  //         })
  //         return;
  //     }
  //     const icon = $("#decloturer_epreuve i");
  //     icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
  //     try {
  //         let formData = new FormData();
  //         formData.append("epreuves", JSON.stringify(idEpreuves))
  //         const request = await axios.post('/administration/note/decloturer', formData);
  //         const response = request.data;
  //         icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin ");
  //         Toast.fire({
  //             icon: 'success',
  //             title: response,
  //         }) 
  //         table_notes_epreuve.ajax.reload(null, false)
  //         idEpreuves =  []
  //     } catch (error) {
  //         console.log(error)
  //         const message = error.response.data;
  //         Toast.fire({
  //             icon: 'error',
  //             title: message,
  //         }) 
  //         icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin ");
  //     }
  // })
  // $('#epreuve_imprimer').on('click', async function(e){
  //     e.preventDefault();
  //     if(!id_epreuve) {
  //         Toast.fire({
  //             icon: 'error',
  //             title: 'Veuillez selection une ligne!',
  //         })
  //         return;
  //     }
  //     const icon = $("#epreuve_imprimer i");
  //     icon.removeClass('fa-copy').addClass("fa-spinner fa-spin");
  //     try {
  //         const request = await axios.get('/administration/note/checkifanonymat/'+id_epreuve);
  //         const response = request.data;
  //         console.log(response)
  //         icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");
  //         $("#imprimer_epreuve").modal("show")
  //         $('#imprimer_epreuve .etudiant_info').html(response.html);
  //         $('#imprimer_epreuve .epreuve_title').html(response.id);
  //         if(response.anonymat == "oui") {
  //             $('#imprimer_epreuve .actions').html(
  //                 `<a href="#" class="btn btn-success mt-3" id="impression_clair">Impression Clair</a>
  //                 <a href="#" class="btn btn-secondary mt-3" id="impression_anonymat">Impression Anonymat</a>`
  //             );
  //         } else {
  //             $('#imprimer_epreuve .actions').html(
  //                 `<a href="#" class="btn btn-success mt-3" id="impression_clair">Impression Clair</a>`
  //             );
  //         }
  //     } catch (error) {
  //         console.log(error)
  //         const message = error.response.data;
  //         Toast.fire({
  //             icon: 'error',
  //             title: message,
  //         }) 
  //         icon.addClass('fa-copy').removeClass("fa-spinner fa-spin ");
  //     }
  // })
  // $('body').on('click', '#impression_clair', function(e){
  //     e.preventDefault();
  //     window.open("/administration/note/impression/"+id_epreuve+"/0", '_blank');
  // })
  // $('body').on('click', '#impression_anonymat', function(e){
  //     e.preventDefault();
  //     window.open("/administration/note/impression/"+id_epreuve+"/1", '_blank');
  // })
  // $("#capitaliser_etudiant").on('click', async function(e) {
  //     e.preventDefault();
  //     if(idEpreuves.length ==0) {
  //         Toast.fire({
  //             icon: 'error',
  //             title: 'Veuillez cochez une ou plusieurs ligne!',
  //         })
  //         return;
  //     }
  //     const icon = $("#capitaliser_etudiant i");
  //     icon.removeClass('fa-archive').addClass("fa-spinner fa-spin");
  //     try {
  //         let formData = new FormData();
  //         formData.append("epreuves", JSON.stringify(idEpreuves))
  //         const request = await axios.post('/administration/note/capitaliser', formData);
  //         const response = request.data;
  //         icon.addClass('fa-archive').removeClass("fa-spinner fa-spin ");
  //         if(response.count>0) {
  //             window.open("/"+response.fileName ,"_blank");
  //         }
  //         idEpreuves =  []
  //     } catch (error) {
  //         console.log(error)
  //         const message = error.response.data;
  //         Toast.fire({
  //             icon: 'error',
  //             title: message,
  //         }) 
  //         icon.addClass('fa-archive').removeClass("fa-spinner fa-spin ");
  //     }
  // })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRtaW5pc3RyYXRpb24vbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgbGV0IGlkX2VwcmV1dmUgPSBmYWxzZTtcclxuICAgIGxldCBpZEVwcmV1dmVzID0gW107XHJcbiAgICB2YXIgdGFibGVfbm90ZXNfZXByZXV2ZSA9ICQoXCIjZGF0YWJsZXNfbm90ZXNfZXByZXV2ZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9hZG1pbmlzdHJhdGlvbi9ub3RlL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9lcHJldXZlKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVEcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2RhdGFibGVzX25vdGVzX2VwcmV1dmUnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2RhdGFibGVzX25vdGVzX2VwcmV1dmUnKS5EYXRhVGFibGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0Fib3J0IHByZXZpb3VzIGFqYXggcmVxdWVzdCBpZiBpdCBpcyBzdGlsbCBpbiBwcm9jZXNzLlxyXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gZHQuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiB0YWJsZV9ub3RlX2luc2NyaXB0aW9uKCl7XHJcbiAgICAgICAgdmFyIHRhYmxlX25vdGVzX2luc2NyaXB0aW9uID0gICQoXCIjZGF0YXRhYmxlc19ub3Rlc19pbnNjcmlwdGlvblwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBvcmRlcjogW1syLCBcImFzY1wiXV0sXHJcbiAgICAgICAgICAgIGFqYXg6IFwiL2FkbWluaXN0cmF0aW9uL25vdGUvbGlzdC9ub3RlX2luc2NyaXB0aW9uL1wiK2lkX2VwcmV1dmUsXHJcbiAgICAgICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdGVTYXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBiRGVzdHJveTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19ub3Rlc19lcHJldXZlIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRFcHJldXZlcy5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgICAgIGlkRXByZXV2ZXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICBpZEVwcmV1dmVzLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRFcHJldXZlcyk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhYmxlc19ub3Rlc19lcHJldXZlIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9lcHJldXZlID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RhdGFibGVzX25vdGVzX2VwcmV1dmUgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBpY29uID0gJCgnI25vdGUgaScpO1xyXG4gICAgICAgICAgICAvLyBpY29uLnJlbW92ZUNsYXNzKCdmYS1uZXdzcGFwZXInKS5hZGRDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJyk7XHJcbiAgICAgICAgICAgIGlkX2VwcmV1dmUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVfaW5zY3JpcHRpb24oKVxyXG4gICAgICAgICAgICAvLyBpY29uLmFkZENsYXNzKCdmYS1uZXdzcGFwZXInKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjcHJvZmVzc2V1clwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYgKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygpLnNlYXJjaChcIlwiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoMikuc2VhcmNoKGlkX3Byb21vdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDEpLnNlYXJjaCgkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJytpZF9zZW1lc3RyZSk7XHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygzKS5zZWFyY2goaWRfc2VtZXN0cmUpLmRyYXcoKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3Byb21vdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNtb2R1bGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmICgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDQpLnNlYXJjaChpZF9tb2R1bGUpLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI3NlbWVzdHJlXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2VsZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2VsZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZiAoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuY29sdW1ucyg1KS5zZWFyY2goaWRfZWxlbWVudCkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvZmVzc2V1clwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvZiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5jb2x1bW5zKDYpLnNlYXJjaChpZF9wcm9mKS5kcmF3KCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjbm90ZVwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9lcHJldXZlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbm90ZXNtb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsJy5zYXZlX25vdGUnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBpZF9leGdub3RlcyA9ICQodGhpcykuZmluZCgnaW5wdXQnKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGlmKCAkKHRoaXMpLmZpbmQoJ2lucHV0JykudmFsKCkgPCAwIHx8ICQodGhpcykuZmluZCgnaW5wdXQnKS52YWwoKSA+IDIwKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdMYSBOb3RlIGRvaXQgZXRyZSBlbnRyZSAwIGV0IDIwJyxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dCcpLmJsdXIoKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5uZXh0KCd0cicpLmZpbmQoJy5pbnB1dF9ub3RlJykuZm9jdXMoKTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL25vdGUvbm90ZV91cGRhdGUvJytpZF9leGdub3RlcywgZm9ybURhdGEpO1xyXG4gICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywnLnNhdmVfb2JzJywgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0JykuYmx1cigpO1xyXG4gICAgICAgIGxldCBpZF9leGdub3RlcyA9ICQodGhpcykuZmluZCgnaW5wdXQnKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoJ3RyJykuZmluZCgnLmlucHV0X29icycpLmZvY3VzKCk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9ub3RlL29ic2VydmF0aW9uX3VwZGF0ZS8nK2lkX2V4Z25vdGVzLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmNoZWNrX25vdGVfaW5zJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgbGV0IGlkX2V4Z25vdGVzID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYWJzZW5jZScsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vbm90ZS9hYnNlbmNlX3VwZGF0ZS8nK2lkX2V4Z25vdGVzLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIHRhYmxlX25vdGVzX2VwcmV1dmUuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYWJzZW5jZScsZmFsc2UpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL25vdGUvYWJzZW5jZV91cGRhdGUvJytpZF9leGdub3RlcywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2ltcG9ydFwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9lcHJldXZlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjaW1wb3J0X2VuX21hc3NlJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXByZXV2ZV9jYW52YXMnLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICB3aW5kb3cub3BlbignL2FkbWluaXN0cmF0aW9uL25vdGUvY2FudmFzLycraWRfZXByZXV2ZSwgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoXCIjaW1wb3J0X2VwcmV1dmVfc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNlcHJldXZlX2VucmVnaXN0cmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9ub3RlL2ltcG9ydC8nK2lkX2VwcmV1dmUsIGZvcm1EYXRhKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgdGFibGVfbm90ZV9pbnNjcmlwdGlvbigpXHJcbiAgICAgICAgICB0YWJsZV9ub3Rlc19lcHJldXZlLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gJChcIiNjbG90dXJlX2VwcmV1dmVcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PTApIHtcclxuICAgIC8vICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnN0IGljb24gPSAkKFwiI2Nsb3R1cmVfZXByZXV2ZSBpXCIpO1xyXG4gICAgLy8gICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBcclxuICAgIC8vICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIC8vICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZXByZXV2ZXNcIiwgSlNPTi5zdHJpbmdpZnkoaWRFcHJldXZlcykpXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vbm90ZS9jbG90dXJlcicsIGZvcm1EYXRhKTtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAvLyAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAvLyAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgLy8gICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgLy8gICAgICAgICB9KSBcclxuICAgIC8vICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgIC8vICAgICAgICAgaWRFcHJldXZlcyA9IFtdO1xyXG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgLy8gICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgIC8vICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAvLyAgICAgICAgIH0pIFxyXG4gICAgLy8gICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gJChcIiNkZWNsb3R1cmVyX2VwcmV1dmVcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICBpZihpZEVwcmV1dmVzLmxlbmd0aCA9PTApIHtcclxuICAgIC8vICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXogdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnN0IGljb24gPSAkKFwiI2RlY2xvdHVyZXJfZXByZXV2ZSBpXCIpO1xyXG4gICAgLy8gICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIHRyeSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgLy8gICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJlcHJldXZlc1wiLCBKU09OLnN0cmluZ2lmeShpZEVwcmV1dmVzKSlcclxuICAgIC8vICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9ub3RlL2RlY2xvdHVyZXInLCBmb3JtRGF0YSk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgLy8gICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAvLyAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgLy8gICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgLy8gICAgICAgICB9KSBcclxuICAgIC8vICAgICAgICAgdGFibGVfbm90ZXNfZXByZXV2ZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgIC8vICAgICAgICAgaWRFcHJldXZlcyA9ICBbXVxyXG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgLy8gICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgIC8vICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAvLyAgICAgICAgIH0pIFxyXG4gICAgLy8gICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pXHJcblxyXG5cclxuICAgIC8vICQoJyNlcHJldXZlX2ltcHJpbWVyJykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIGlmKCFpZF9lcHJldXZlKSB7XHJcbiAgICAvLyAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgLy8gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnN0IGljb24gPSAkKFwiI2VwcmV1dmVfaW1wcmltZXIgaVwiKTtcclxuICAgIC8vICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jb3B5JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FkbWluaXN0cmF0aW9uL25vdGUvY2hlY2tpZmFub255bWF0LycraWRfZXByZXV2ZSk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIC8vICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY29weScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIC8vICAgICAgICAgJChcIiNpbXByaW1lcl9lcHJldXZlXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgLy8gICAgICAgICAkKCcjaW1wcmltZXJfZXByZXV2ZSAuZXR1ZGlhbnRfaW5mbycpLmh0bWwocmVzcG9uc2UuaHRtbCk7XHJcbiAgICAvLyAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5lcHJldXZlX3RpdGxlJykuaHRtbChyZXNwb25zZS5pZCk7XHJcbiAgICAvLyAgICAgICAgIGlmKHJlc3BvbnNlLmFub255bWF0ID09IFwib3VpXCIpIHtcclxuICAgIC8vICAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5hY3Rpb25zJykuaHRtbChcclxuICAgIC8vICAgICAgICAgICAgICAgICBgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJpbXByZXNzaW9uX2NsYWlyXCI+SW1wcmVzc2lvbiBDbGFpcjwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbXQtM1wiIGlkPVwiaW1wcmVzc2lvbl9hbm9ueW1hdFwiPkltcHJlc3Npb24gQW5vbnltYXQ8L2E+YFxyXG4gICAgLy8gICAgICAgICAgICAgKTtcclxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICQoJyNpbXByaW1lcl9lcHJldXZlIC5hY3Rpb25zJykuaHRtbChcclxuICAgIC8vICAgICAgICAgICAgICAgICBgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgaWQ9XCJpbXByZXNzaW9uX2NsYWlyXCI+SW1wcmVzc2lvbiBDbGFpcjwvYT5gXHJcbiAgICAvLyAgICAgICAgICAgICApO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgLy8gICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgIC8vICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAvLyAgICAgICAgIH0pIFxyXG4gICAgLy8gICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jb3B5JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIC8vICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2ltcHJlc3Npb25fY2xhaXInLCBmdW5jdGlvbihlKXtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vbm90ZS9pbXByZXNzaW9uL1wiK2lkX2VwcmV1dmUrXCIvMFwiLCAnX2JsYW5rJyk7XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gJCgnYm9keScpLm9uKCdjbGljaycsICcjaW1wcmVzc2lvbl9hbm9ueW1hdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICB3aW5kb3cub3BlbihcIi9hZG1pbmlzdHJhdGlvbi9ub3RlL2ltcHJlc3Npb24vXCIraWRfZXByZXV2ZStcIi8xXCIsICdfYmxhbmsnKTtcclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8gJChcIiNjYXBpdGFsaXNlcl9ldHVkaWFudFwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIGlmKGlkRXByZXV2ZXMubGVuZ3RoID09MCkge1xyXG4gICAgLy8gICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgIC8vICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY29uc3QgaWNvbiA9ICQoXCIjY2FwaXRhbGlzZXJfZXR1ZGlhbnQgaVwiKTtcclxuICAgIC8vICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1hcmNoaXZlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAvLyAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImVwcmV1dmVzXCIsIEpTT04uc3RyaW5naWZ5KGlkRXByZXV2ZXMpKVxyXG4gICAgLy8gICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL25vdGUvY2FwaXRhbGlzZXInLCBmb3JtRGF0YSk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgLy8gICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgLy8gICAgICAgICBpZihyZXNwb25zZS5jb3VudD4wKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIityZXNwb25zZS5maWxlTmFtZSAsXCJfYmxhbmtcIik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgaWRFcHJldXZlcyA9ICBbXVxyXG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgLy8gICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgIC8vICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAvLyAgICAgICAgIH0pIFxyXG4gICAgLy8gICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1hcmNoaXZlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KVxyXG4gICAgXHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9lcHJldXZlIiwiaWRFcHJldXZlcyIsInRhYmxlX25vdGVzX2VwcmV1dmUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsInByZURyYXdDYWxsYmFjayIsInNldHRpbmdzIiwiZm4iLCJpc0RhdGFUYWJsZSIsImR0IiwianFYSFIiLCJhYm9ydCIsImxhbmd1YWdlIiwidXJsIiwidGFibGVfbm90ZV9pbnNjcmlwdGlvbiIsInRhYmxlX25vdGVzX2luc2NyaXB0aW9uIiwic3RhdGVTYXZlIiwiYkRlc3Ryb3kiLCJvbiIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJhdHRyIiwic3BsaWNlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3QyIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsImlkX3NlbWVzdHJlIiwiaWRfbW9kdWxlIiwiaWRfZWxlbWVudCIsImlkX3Byb2YiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwibW9kYWwiLCJpZF9leGdub3RlcyIsImJsdXIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicGFyZW50IiwibmV4dCIsImZvY3VzIiwicG9zdCIsInJlbG9hZCIsImFwcGVuZCIsIndpbmRvdyIsIm9wZW4iLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicHJlcGVuZCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9