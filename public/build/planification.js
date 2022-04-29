(self["webpackChunk"] = self["webpackChunk"] || []).push([["planification"],{

/***/ "./assets/components/planification/planification.js":
/*!**********************************************************!*\
  !*** ./assets/components/planification/planification.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// const Locale = require("./local-all");
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

  var pills = function pills() {
    $('body').on('click', '.nav-pills a', function (e) {
      $(this).tab('show');
    });
  };

  var getModuleBySemestre = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var request;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get('/api/module/' + $('#semestre').val());

            case 2:
              request = _context.sent;
              response = request.data;
              $('.modal-addform_planif #module').html(response).select2();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getModuleBySemestre() {
      return _ref.apply(this, arguments);
    };
  }();

  var id_semestre = false;
  var niv = 0;
  var currentweek = false;
  var heur_debut = false;
  var heur_fin = false;
  var d = new Date();
  var day = d.getDay();
  var currentDay = false;
  var id_planning = false;
  var alltime = [];
  $('#calendar').fullCalendar({
    lang: "fr",
    customButtons: {
      myCustomButton: {
        text: 'Imprimer',
        click: function click() {
          var currentWeek = moment($('#calendar').fullCalendar('getDate'), "MMDDYYYY").isoWeek();
          var currentDate = moment($('#calendar').fullCalendar('getDate')).format('YYYY-MM-DD');

          if (id_semestre != "") {
            window.open('/planification/planifications/print_planning/' + id_semestre + '/' + niv + '/' + currentWeek + '/' + currentDate, '_blank');
          } else {
            Toast.fire({
              icon: 'error',
              title: 'Merci de Choisir une Semestre!!'
            });
          }
        }
      }
    },
    events: alltime,
    header: {
      left: 'prev,next today myCustomButton',
      center: 'title',
      right: 'month,agendaWeek'
    },
    defaultView: 'agendaWeek',
    editable: true,
    eventLimit: true,
    // allow "more" link when too many events
    selectable: true,
    selectHelper: true,
    navLinks: true,
    height: 450,
    allDaySlot: false,
    locale: "fr",
    firstDay: 1,
    minTime: "08:00:00",
    maxTime: "18:01:00",
    select: function select(start, end, date) {
      if ($('#semestre').val() != "") {
        currentDay = moment(start).format('YYYY-MM-DD');
        currentweek = moment(start, "MMDDYYYY").isoWeek();
        heur_debut = moment(start).format('HH:mm');
        heur_fin = moment(end).format('HH:mm');
        axios.get('/planification/planifications/planification_infos/' + 107).then(function (success) {
          $('.modal-addform_planif .add_planning').html(success.data);
          $('.modal-addform_planif #h_debut').val(heur_debut);
          $('.modal-addform_planif #h_fin').val(heur_fin);
          $('.modal-addform_planif select').select2();
          getModuleBySemestre();
          $('#addform_planif-modal').modal("show");
          pills();
        })["catch"](function (err) {// console.log(err);
        });
      }
    },
    eventRender: function eventRender(event, element) {
      element.bind('dblclick', function () {
        id_planning = event.id;

        if (id_planning) {
          var formData = new FormData();
          axios.get('/planification/planifications/planification_infos_edit/' + id_planning).then(function (success) {
            $('.modal-updateform_planif .update_planning').html(success.data);
            $('.modal-updateform_planif select').select2();
            $('#updateform_planif-modal').modal("show");
            pills();
          })["catch"](function (err) {// console.log(err);
          });
        }
      });
    },
    eventDrop: function eventDrop(event, delta, revertFunc) {
      edit(event);
    },
    eventResize: function eventResize(event, dayDelta, minuteDelta, revertFunc) {
      // si changement de longueur
      edit(event);
    }
  });
  $("body select").select2(); // $("#nature_seance").select2();

  $("#salle").select2();

  var alltimes = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var request;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios.post('/planification/planifications/calendar/' + id_semestre + '/' + niv);

            case 3:
              request = _context2.sent;
              // const request = await axios.post('/planification/planifications/calendar/107/9')
              alltime = request.data;
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);
              _context2.next = 14;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              alltime = [];
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime); // console.log(error)
              // Toast.fire({
              //     icon: 'error',
              //     title: 'Some Error!!',
              // })

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function alltimes() {
      return _ref2.apply(this, arguments);
    };
  }(); // alltimes()


  var edit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
      var formData, request;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              start = event.start.format('YYYY-MM-DD HH:mm:ss');

              if (event.end) {
                end = event.end.format('YYYY-MM-DD HH:mm:ss');
              } else {
                end = start;
              }

              id_emptime = event.id;
              formData = new FormData();
              formData.append('start', start);
              formData.append('end', end);
              _context3.prev = 6;
              _context3.next = 9;
              return axios.post('/planification/planifications/planifications_editEventDate/' + id_emptime, formData);

            case 9:
              request = _context3.sent;

              if (request.data == 'ok') {
                Toast.fire({
                  icon: 'success',
                  title: 'Planification bien Modifier!!'
                });
              } else {
                Toast.fire({
                  icon: 'error',
                  title: 'Planification a echoué!!'
                });
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](6);
              Toast.fire({
                icon: 'error',
                title: 'Some Error!!'
              });

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[6, 13]]);
    }));

    return function edit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  $("#etablissement").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context4.next = 7;
              break;
            }

            _context4.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context4.sent;
            response = request.data;

          case 7:
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_formation = $(this).val();
            response = "";

            if (!(id_formation != "")) {
              _context5.next = 7;
              break;
            }

            _context5.next = 5;
            return axios.get('/api/promotion/' + id_formation);

          case 5:
            request = _context5.sent;
            response = request.data;

          case 7:
            $('#semestre').html('').select2();
            $('#promotion').html(response).select2();

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_promotion, response, request, requestt;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_promotion = $(this).val();
            response = "";
            $('#semestre').html(response).select2();
            $('#niv1').html(response).select2();
            $('#niv2').html(response).select2();
            $('#niv3').html(response).select2();

            if (!(id_promotion != "")) {
              _context6.next = 17;
              break;
            }

            _context6.next = 9;
            return axios.get('/api/semestre/' + id_promotion);

          case 9:
            request = _context6.sent;
            semestre = request.data;
            $('#semestre').html(semestre).select2();
            _context6.next = 14;
            return axios.get('/api/niv1/' + id_promotion);

          case 14:
            requestt = _context6.sent;
            niv1 = requestt.data;
            $('#niv1').html(niv1).select2();

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id_semestre = $(this).val();

            if (id_semestre != "") {
              alltimes();
            } else {
              alltime = [];
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);
            }

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#niv1").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var niv1, response, request;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            niv1 = $(this).val(); // niv = $(this).val();

            response = "";

            if (!(niv1 != "")) {
              _context8.next = 10;
              break;
            }

            niv = niv1;
            _context8.next = 6;
            return axios.get('/api/niv2/' + niv1);

          case 6:
            request = _context8.sent;
            response = request.data;
            _context8.next = 11;
            break;

          case 10:
            niv = 0; // alltime = [];
            // $('#calendar').fullCalendar('refetchEvents');

          case 11:
            if (id_semestre != "") {
              alltimes();
            } else {
              alltime = [];
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);
            }

            $('#niv3').html("").select2();
            $('#niv2').html(response).select2();

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("#niv2").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var niv2, request;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            niv2 = $(this).val();

            if (!(niv2 != "")) {
              _context9.next = 9;
              break;
            }

            niv = niv2;
            _context9.next = 5;
            return axios.get('/api/niv3/' + niv2);

          case 5:
            request = _context9.sent;
            response = request.data;
            _context9.next = 10;
            break;

          case 9:
            niv = $('#niv1').val();

          case 10:
            if (id_semestre != "") {
              alltimes();
            } else {
              alltime = [];
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);
            }

            $('#niv3').html(response).select2();

          case 12:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#niv3").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var niv3;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            niv3 = $(this).val();

            if (niv3 != "") {
              niv = niv3;
            } else {
              niv = $('#niv2').val();
            }

            if (id_semestre != "") {
              alltimes();
            } else {
              alltime = [];
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);
            } // $('#calendar').fullCalendar('refetchEvents');


          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $("body").on('change', '#module', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var id_module, response, request;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            id_module = $(this).val();
            response = "";

            if (!(id_module != "")) {
              _context11.next = 7;
              break;
            }

            _context11.next = 5;
            return axios.get('/api/element/' + id_module);

          case 5:
            request = _context11.sent;
            response = request.data;

          case 7:
            $('#element').html(response).select2();

          case 8:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  })));
  $("body").on('change', '#nature_seance', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var id_nature_seance, id_element, request;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            id_nature_seance = $(this).val();
            id_element = $('#element').val();

            if (!(id_element != "" && id_nature_seance != "")) {
              _context12.next = 8;
              break;
            }

            _context12.next = 5;
            return axios.get('/api/enseignantsByProgramme/' + id_element + '/' + id_nature_seance);

          case 5:
            request = _context12.sent;
            response = request.data;
            pills();

          case 8:
            $('#enseignant').html(response).select2();

          case 9:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  })));
  $("body").on('change', '#element', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    var id_element, id_nature_seance, response, request;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            id_element = $(this).val();
            id_nature_seance = $('#nature_seance').val();
            response = "";

            if (!(id_element != "" && id_nature_seance != "")) {
              _context13.next = 9;
              break;
            }

            _context13.next = 6;
            return axios.get('/api/enseignantsByProgramme/' + id_element + '/' + id_nature_seance);

          case 6:
            request = _context13.sent;
            response = request.data;
            pills();

          case 9:
            $('#enseignant').html(response).select2();

          case 10:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  })));
  $("body").on('submit', '.form_add_planning', /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      var formData, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();
              formData = new FormData(this);
              formData.append('n_semaine', currentweek);
              formData.append('day', currentDay);
              formData.append('groupe', niv);
              console.log(formData);
              modalAlert = $("#addform_planif-modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".form_add_planning .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context14.prev = 10;
              _context14.next = 13;
              return axios.post('/planification/planifications/planifications_calendar_add', formData);

            case 13:
              request = _context14.sent;
              data = request.data;
              $("#addform_planif-modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              alltimes();
              setTimeout(function () {
                $("#addform_planif-modal .modal-body .alert").remove();
                $('#addform_planif-modal').modal("hide");
              }, 4000);
              _context14.next = 27;
              break;

            case 21:
              _context14.prev = 21;
              _context14.t0 = _context14["catch"](10);
              message = _context14.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#addform_planif-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 27:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, this, [[10, 21]]);
    }));

    return function (_x2) {
      return _ref14.apply(this, arguments);
    };
  }());
  $("body").on('submit', '.form_update_planning', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var formData, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              e.preventDefault();
              formData = new FormData(this); // formData.append('n_semaine', currentweek);
              ////////////

              modalAlert = $("#updateform_planif-modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".form_update_planning .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context15.prev = 6;
              _context15.next = 9;
              return axios.post('/planification/planifications/planifications_calendar_edit/' + id_planning, formData);

            case 9:
              request = _context15.sent;
              data = request.data;
              $("#updateform_planif-modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              alltimes();
              setTimeout(function () {
                $("#updateform_planif-modal .modal-body .alert").remove();
                $('#updateform_planif-modal').modal("hide");
              }, 4000);
              _context15.next = 23;
              break;

            case 17:
              _context15.prev = 17;
              _context15.t0 = _context15["catch"](6);
              message = _context15.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#updateform_planif-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this, [[6, 17]]);
    }));

    return function (_x3) {
      return _ref15.apply(this, arguments);
    };
  }());
  $('body').on('click', '#planning_delete', /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
      var res, icon, request, _response, message;

      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              e.preventDefault();

              if (!id_planning) {
                _context16.next = 22;
                break;
              }

              res = confirm('Vous voulez vraiment supprimer cette enregistrement ?');

              if (!(res == 1)) {
                _context16.next = 22;
                break;
              }

              icon = $("#planning_enregistre .update_planning i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context16.prev = 6;
              _context16.next = 9;
              return axios.post('/planification/planifications/delete_planning/' + id_planning);

            case 9:
              request = _context16.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: _response
              });
              alltimes();
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              _context16.next = 21;
              break;

            case 16:
              _context16.prev = 16;
              _context16.t0 = _context16["catch"](6);
              message = _context16.t0.response.data;
              Toast.fire({
                icon: 'success',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 21:
              setTimeout(function () {
                $('#updateform_planif-modal').modal("hide");
              }, 1000);

            case 22:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[6, 16]]);
    }));

    return function (_x4) {
      return _ref16.apply(this, arguments);
    };
  }());
  $("body").on('click', '#import', /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              e.preventDefault();
              $('#import_en_masse').modal("show");

            case 2:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }));

    return function (_x5) {
      return _ref17.apply(this, arguments);
    };
  }());
  $('body').on('click', '#planning_canvas', function () {
    window.open('/planification/planifications/planning_canvas', '_blank');
  });
  $("#import_planning_save").on("submit", /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e) {
      var formData, modalAlert, icon, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#import_en_masse .modal-body .alert");
              modalAlert.remove();
              icon = $("#planning_enregistre i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context18.prev = 6;
              _context18.next = 9;
              return axios.post('/planification/planifications/import', formData);

            case 9:
              request = _context18.sent;
              _response2 = request.data;
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n                    <p>".concat(_response2, "</p>\n                </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              _context18.next = 22;
              break;

            case 15:
              _context18.prev = 15;
              _context18.t0 = _context18["catch"](6);
              message = _context18.t0.response.data;
              console.log(_context18.t0, _context18.t0.response);
              modalAlert.remove();
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
              setTimeout(function () {
                $("#import_en_masse .modal-body .alert").remove();
              }, 4000);

            case 23:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, this, [[6, 15]]);
    }));

    return function (_x6) {
      return _ref18.apply(this, arguments);
    };
  }());
  $("body").on('click', '#generer', /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e) {
      var res, formData, icon, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              e.preventDefault();

              if (id_semestre) {
                _context19.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Vous devez choisir Semestre et Niveau!!'
              });
              return _context19.abrupt("return");

            case 4:
              //////
              // let crntday = moment($('#calendar').fullCalendar('getDate')).format('YYYY-MM-DD')
              res = confirm('Vous voulez Vraiment Générer les planifications de cette semaine ?');

              if (!(res == 1)) {
                _context19.next = 25;
                break;
              }

              currentweek = moment($('#calendar').fullCalendar('getDate'), "MMDDYYYY").isoWeek();
              formData = new FormData();
              formData.append('nsemaine', currentweek); // formData.append('crntday',crntday)

              icon = $("#generer i");
              icon.removeClass('fab fa-get-pocket').addClass("fas fa-spinner fa-spin");
              _context19.prev = 11;
              _context19.next = 14;
              return axios.post('/planification/planifications/generer_planning/' + id_semestre + '/' + niv, formData);

            case 14:
              request = _context19.sent;
              // const request = await axios.post('/planification/planifications/generer_planning/107/9', formData);
              _response3 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response3
              });
              icon.addClass('fab fa-get-pocket').removeClass("fas fa-spinner fa-spin ");
              _context19.next = 25;
              break;

            case 20:
              _context19.prev = 20;
              _context19.t0 = _context19["catch"](11);
              message = _context19.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fab fa-get-pocket').removeClass("fas fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, null, [[11, 20]]);
    }));

    return function (_x7) {
      return _ref19.apply(this, arguments);
    };
  }());
  $("body").on("click", '#seance_absence', function (e) {
    e.preventDefault();

    if (!id_planning) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de Selectionner une Seance'
      });
      return;
    }

    window.open('/planification/planifications/GetAbsenceByGroupe/' + id_planning, '_blank');
  });
  $("body").on("click", '#fiche_sequence', function (e) {
    e.preventDefault();

    if (!id_planning) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de Selectionner une Seance'
      });
      return;
    }

    window.open('/planification/planifications/Getsequence/' + id_planning, '_blank');
  });
}); // const allLocales = require("../includes/local-all");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var Function = global.Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var un$DateToString = uncurryThis(DatePrototype[TO_STRING]);
var getTime = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? un$DateToString(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/planification/planification.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IExvY2FsZSA9IHJlcXVpcmUoXCIuL2xvY2FsLWFsbFwiKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIGNvbnN0IHBpbGxzID0gKCkgPT4ge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcubmF2LXBpbGxzIGEnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRhYignc2hvdycpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRNb2R1bGVCeVNlbWVzdHJlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycrJCgnI3NlbWVzdHJlJykudmFsKCkpO1xyXG4gICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmICNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBpZF9zZW1lc3RyZSA9IGZhbHNlO1xyXG4gICAgbGV0IG5pdiA9IDA7XHJcbiAgICBsZXQgY3VycmVudHdlZWsgPSBmYWxzZTtcclxuICAgIGxldCBoZXVyX2RlYnV0ID0gZmFsc2U7XHJcbiAgICBsZXQgaGV1cl9maW4gPSBmYWxzZTtcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IGRheSA9IGQuZ2V0RGF5KCk7XHJcbiAgICBsZXQgY3VycmVudERheSA9IGZhbHNlO1xyXG4gICAgbGV0IGlkX3BsYW5uaW5nID0gZmFsc2U7XHJcbiAgICBsZXQgYWxsdGltZSA9IFtdO1xyXG4gICAgJCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKHtcclxuICAgICAgICBsYW5nOiBcImZyXCIsXHJcbiAgICAgICAgY3VzdG9tQnV0dG9uczoge1xyXG4gICAgICAgICAgICBteUN1c3RvbUJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0ltcHJpbWVyJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRXZWVrID0gbW9tZW50KCQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcignZ2V0RGF0ZScpLCBcIk1NRERZWVlZXCIpLmlzb1dlZWsoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudERhdGUgPSBtb21lbnQoJCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKCdnZXREYXRlJykpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbignL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcHJpbnRfcGxhbm5pbmcvJytpZF9zZW1lc3RyZSsnLycrbml2KycvJytjdXJyZW50V2VlaysnLycrY3VycmVudERhdGUsICdfYmxhbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIHVuZSBTZW1lc3RyZSEhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBldmVudHM6IGFsbHRpbWUsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6ICdwcmV2LG5leHQgdG9kYXkgbXlDdXN0b21CdXR0b24nLFxyXG4gICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAnbW9udGgsYWdlbmRhV2VlaydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmF1bHRWaWV3OiAnYWdlbmRhV2VlaycsXHJcbiAgICAgICAgZWRpdGFibGU6IHRydWUsXHJcbiAgICAgICAgZXZlbnRMaW1pdDogdHJ1ZSwgLy8gYWxsb3cgXCJtb3JlXCIgbGluayB3aGVuIHRvbyBtYW55IGV2ZW50c1xyXG4gICAgICAgIHNlbGVjdGFibGU6IHRydWUsXHJcbiAgICAgICAgc2VsZWN0SGVscGVyOiB0cnVlLFxyXG4gICAgICAgIG5hdkxpbmtzOiB0cnVlLFxyXG4gICAgICAgIGhlaWdodDogNDUwLFxyXG4gICAgICAgIGFsbERheVNsb3Q6IGZhbHNlLFxyXG4gICAgICAgIGxvY2FsZTogXCJmclwiLFxyXG4gICAgICAgIGZpcnN0RGF5OiAxLFxyXG4gICAgICAgIG1pblRpbWU6IFwiMDg6MDA6MDBcIixcclxuICAgICAgICBtYXhUaW1lOiBcIjE4OjAxOjAwXCIsXHJcbiAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoc3RhcnQsIGVuZCxkYXRlKSB7XHJcbiAgICAgICAgICAgIGlmKCQoJyNzZW1lc3RyZScpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudERheSA9IG1vbWVudChzdGFydCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50d2VlayA9IG1vbWVudChzdGFydCwgXCJNTUREWVlZWVwiKS5pc29XZWVrKCk7XHJcbiAgICAgICAgICAgICAgICBoZXVyX2RlYnV0PSBtb21lbnQoc3RhcnQpLmZvcm1hdCgnSEg6bW0nKVxyXG4gICAgICAgICAgICAgICAgaGV1cl9maW49IG1vbWVudChlbmQpLmZvcm1hdCgnSEg6bW0nKVxyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wbGFuaWZpY2F0aW9uX2luZm9zLycrMTA3KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmIC5hZGRfcGxhbm5pbmcnKS5odG1sKHN1Y2Nlc3MuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmICNoX2RlYnV0JykudmFsKGhldXJfZGVidXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiAjaF9maW4nKS52YWwoaGV1cl9maW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiBzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0TW9kdWxlQnlTZW1lc3RyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNhZGRmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBwaWxscygpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZW50UmVuZGVyOiBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdkYmxjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlkX3BsYW5uaW5nID0gZXZlbnQuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRfcGxhbm5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25faW5mb3NfZWRpdC8nK2lkX3BsYW5uaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtdXBkYXRlZm9ybV9wbGFuaWYgLnVwZGF0ZV9wbGFubmluZycpLmh0bWwoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLXVwZGF0ZWZvcm1fcGxhbmlmIHNlbGVjdCcpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWxscygpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZW50RHJvcDogZnVuY3Rpb24gKGV2ZW50LCBkZWx0YSwgcmV2ZXJ0RnVuYykgeyBcclxuICAgICAgICAgICAgZWRpdChldmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBldmVudFJlc2l6ZTogZnVuY3Rpb24gKGV2ZW50LCBkYXlEZWx0YSwgbWludXRlRGVsdGEsIHJldmVydEZ1bmMpIHsgLy8gc2kgY2hhbmdlbWVudCBkZSBsb25ndWV1clxyXG4gICAgICAgICAgICBlZGl0KGV2ZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKFwiYm9keSBzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgLy8gJChcIiNuYXR1cmVfc2VhbmNlXCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjc2FsbGVcIikuc2VsZWN0MigpO1xyXG4gICAgY29uc3QgYWxsdGltZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2NhbGVuZGFyLycraWRfc2VtZXN0cmUrJy8nK25pdilcclxuICAgICAgICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2NhbGVuZGFyLzEwNy85JylcclxuICAgICAgICAgICAgYWxsdGltZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgLy8gVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIC8vICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdTb21lIEVycm9yISEnLFxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFsbHRpbWVzKClcclxuICAgIGNvbnN0IGVkaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBzdGFydCA9IGV2ZW50LnN0YXJ0LmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgICAgIGlmIChldmVudC5lbmQpIHtcclxuICAgICAgICAgICAgZW5kID0gZXZlbnQuZW5kLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVuZCA9IHN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZF9lbXB0aW1lID0gZXZlbnQuaWQ7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdGFydCcsc3RhcnQpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbmQnLGVuZClcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbnNfZWRpdEV2ZW50RGF0ZS8nK2lkX2VtcHRpbWUsZm9ybURhdGEpXHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmRhdGEgPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxhbmlmaWNhdGlvbiBiaWVuIE1vZGlmaWVyISEnLFxyXG4gICAgICAgICAgICAgICAgfSkgIFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQbGFuaWZpY2F0aW9uIGEgZWNob3XDqSEhJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3IhIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjEnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjInKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHNlbWVzdHJlID0gcmVxdWVzdC5kYXRhICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoc2VtZXN0cmUpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2MS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIG5pdjEgPSByZXF1ZXN0dC5kYXRhICBcclxuICAgICAgICAgICAgJCgnI25pdjEnKS5odG1sKG5pdjEpLnNlbGVjdDIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI25pdjFcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdjEgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIC8vIG5pdiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKG5pdjEgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBuaXYgPSBuaXYxO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjIvJytuaXYxKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbml2ID0gMDtcclxuICAgICAgICAgICAgLy8gYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAvLyAkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ3JlZmV0Y2hFdmVudHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjInKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNuaXYyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBuaXYyID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihuaXYyICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbml2ID0gbml2MjtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYzLycrbml2Mik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5pdiA9ICQoJyNuaXYxJykudmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbml2MycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI25pdjNcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdjMgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKG5pdjMgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBuaXYgPSBuaXYzO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuaXYgPSAkKCcjbml2MicpLnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGx0aW1lID0gW107XHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnKTsgXHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdhZGRFdmVudFNvdXJjZScsIGFsbHRpbWUpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gJCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKCdyZWZldGNoRXZlbnRzJyk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ2NoYW5nZScsJyNtb2R1bGUnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9tb2R1bGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9tb2R1bGUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VsZW1lbnQvJytpZF9tb2R1bGUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2hhbmdlJywnI25hdHVyZV9zZWFuY2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9uYXR1cmVfc2VhbmNlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgaWRfZWxlbWVudCA9ICQoJyNlbGVtZW50JykudmFsKCk7XHJcbiAgICAgICAgaWYoaWRfZWxlbWVudCAhPSBcIlwiICYmIGlkX25hdHVyZV9zZWFuY2UgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Vuc2VpZ25hbnRzQnlQcm9ncmFtbWUvJytpZF9lbGVtZW50KycvJytpZF9uYXR1cmVfc2VhbmNlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgcGlsbHMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZW5zZWlnbmFudCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcImJvZHlcIikub24oJ2NoYW5nZScsJyNlbGVtZW50JywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZWxlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IGlkX25hdHVyZV9zZWFuY2UgPSAkKCcjbmF0dXJlX3NlYW5jZScpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9lbGVtZW50ICE9IFwiXCIgJiYgaWRfbmF0dXJlX3NlYW5jZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZW5zZWlnbmFudHNCeVByb2dyYW1tZS8nK2lkX2VsZW1lbnQrJy8nK2lkX25hdHVyZV9zZWFuY2UpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBwaWxscygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbnNlaWduYW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCcuZm9ybV9hZGRfcGxhbm5pbmcnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25fc2VtYWluZScsIGN1cnJlbnR3ZWVrKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RheScsIGN1cnJlbnREYXkpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdncm91cGUnLCBuaXYpXHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjYWRkZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIuZm9ybV9hZGRfcGxhbm5pbmcgLmJ0biBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wbGFuaWZpY2F0aW9uc19jYWxlbmRhcl9hZGQnLGZvcm1EYXRhKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI2FkZGZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj4ke2RhdGF9PC9kaXY+YFxyXG4gICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICQoXCIjYWRkZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAkKCcjYWRkZm9ybV9wbGFuaWYtbW9kYWwnKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH0sIDQwMDApO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2FkZGZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsJy5mb3JtX3VwZGF0ZV9wbGFubmluZycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnbl9zZW1haW5lJywgY3VycmVudHdlZWspO1xyXG4gICAgICAgIC8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIuZm9ybV91cGRhdGVfcGxhbm5pbmcgLmJ0biBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wbGFuaWZpY2F0aW9uc19jYWxlbmRhcl9lZGl0LycraWRfcGxhbm5pbmcsZm9ybURhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7IFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCIjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9LCA0MDAwKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI3BsYW5uaW5nX2RlbGV0ZScsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRfcGxhbm5pbmcpe1xyXG4gICAgICAgICAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGVucmVnaXN0cmVtZW50ID8nKTtcclxuICAgICAgICAgICAgaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcGxhbm5pbmdfZW5yZWdpc3RyZSAudXBkYXRlX3BsYW5uaW5nIGlcIik7XHJcbiAgICAgICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2RlbGV0ZV9wbGFubmluZy8nK2lkX3BsYW5uaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywnI2ltcG9ydCcsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnI2ltcG9ydF9lbl9tYXNzZScpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjcGxhbm5pbmdfY2FudmFzJywgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5uaW5nX2NhbnZhcycsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIjaW1wb3J0X3BsYW5uaW5nX3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3BsYW5uaW5nX2VucmVnaXN0cmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvaW1wb3J0JywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsJyNnZW5lcmVyJywgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfc2VtZXN0cmUpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZvdXMgZGV2ZXogY2hvaXNpciBTZW1lc3RyZSBldCBOaXZlYXUhIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy9cclxuICAgICAgICAvLyBsZXQgY3JudGRheSA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSkuZm9ybWF0KCdZWVlZLU1NLUREJylcclxuICAgICAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogVnJhaW1lbnQgR8OpbsOpcmVyIGxlcyBwbGFuaWZpY2F0aW9ucyBkZSBjZXR0ZSBzZW1haW5lID8nKTtcclxuICAgICAgICBpZiAocmVzID09IDEpIHtcclxuICAgICAgICAgICAgY3VycmVudHdlZWsgPSBtb21lbnQoJCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKCdnZXREYXRlJyksIFwiTU1ERFlZWVlcIikuaXNvV2VlaygpO1xyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduc2VtYWluZScsY3VycmVudHdlZWspXHJcbiAgICAgICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnY3JudGRheScsY3JudGRheSlcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZ2VuZXJlciBpXCIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLmFkZENsYXNzKFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9nZW5lcmVyX3BsYW5uaW5nLycraWRfc2VtZXN0cmUrJy8nK25pdiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2dlbmVyZXJfcGxhbm5pbmcvMTA3LzknLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNzZWFuY2VfYWJzZW5jZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgU2VsZWN0aW9ubmVyIHVuZSBTZWFuY2UnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9HZXRBYnNlbmNlQnlHcm91cGUvJytpZF9wbGFubmluZywgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNmaWNoZV9zZXF1ZW5jZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgU2VsZWN0aW9ubmVyIHVuZSBTZWFuY2UnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9HZXRzZXF1ZW5jZS8nK2lkX3BsYW5uaW5nLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICBcclxufSlcclxuXHJcbi8vIGNvbnN0IGFsbExvY2FsZXMgPSByZXF1aXJlKFwiLi4vaW5jbHVkZXMvbG9jYWwtYWxsXCIpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xudmFyIGZhY3RvcmllcyA9IHt9O1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKEMsIGFyZ3NMZW5ndGgsIGFyZ3MpIHtcbiAgaWYgKCFoYXNPd24oZmFjdG9yaWVzLCBhcmdzTGVuZ3RoKSkge1xuICAgIGZvciAodmFyIGxpc3QgPSBbXSwgaSA9IDA7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIGxpc3RbaV0gPSAnYVsnICsgaSArICddJztcbiAgICBmYWN0b3JpZXNbYXJnc0xlbmd0aF0gPSBGdW5jdGlvbignQyxhJywgJ3JldHVybiBuZXcgQygnICsgam9pbihsaXN0LCAnLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2FyZ3NMZW5ndGhdKEMsIGFyZ3MpO1xufTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uYmluZCB8fCBmdW5jdGlvbiBiaW5kKHRoYXQgLyogLCAuLi5hcmdzICovKSB7XG4gIHZhciBGID0gYUNhbGxhYmxlKHRoaXMpO1xuICB2YXIgUHJvdG90eXBlID0gRi5wcm90b3R5cGU7XG4gIHZhciBwYXJ0QXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKSB7XG4gICAgdmFyIGFyZ3MgPSBjb25jYXQocGFydEFyZ3MsIGFycmF5U2xpY2UoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZEZ1bmN0aW9uID8gY29uc3RydWN0KEYsIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IEYuYXBwbHkodGhhdCwgYXJncyk7XG4gIH07XG4gIGlmIChpc09iamVjdChQcm90b3R5cGUpKSBib3VuZEZ1bmN0aW9uLnByb3RvdHlwZSA9IFByb3RvdHlwZTtcbiAgcmV0dXJuIGJvdW5kRnVuY3Rpb247XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG52YXIgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSc7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciB1biREYXRlVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlW1RPX1NUUklOR10pO1xudmFyIGdldFRpbWUgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFRpbWUpO1xuXG4vLyBgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKFN0cmluZyhuZXcgRGF0ZShOYU4pKSAhPSBJTlZBTElEX0RBVEUpIHtcbiAgcmVkZWZpbmUoRGF0ZVByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRUaW1lKHRoaXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IHVuJERhdGVUb1N0cmluZyh0aGlzKSA6IElOVkFMSURfREFURTtcbiAgfSk7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQnKTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiQoeyB0YXJnZXQ6ICdGdW5jdGlvbicsIHByb3RvOiB0cnVlIH0sIHtcbiAgYmluZDogYmluZFxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJwaWxscyIsIm9uIiwiZSIsInRhYiIsImdldE1vZHVsZUJ5U2VtZXN0cmUiLCJheGlvcyIsImdldCIsInZhbCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImRhdGEiLCJodG1sIiwic2VsZWN0MiIsImlkX3NlbWVzdHJlIiwibml2IiwiY3VycmVudHdlZWsiLCJoZXVyX2RlYnV0IiwiaGV1cl9maW4iLCJkIiwiRGF0ZSIsImRheSIsImdldERheSIsImN1cnJlbnREYXkiLCJpZF9wbGFubmluZyIsImFsbHRpbWUiLCJmdWxsQ2FsZW5kYXIiLCJsYW5nIiwiY3VzdG9tQnV0dG9ucyIsIm15Q3VzdG9tQnV0dG9uIiwidGV4dCIsImNsaWNrIiwiY3VycmVudFdlZWsiLCJtb21lbnQiLCJpc29XZWVrIiwiY3VycmVudERhdGUiLCJmb3JtYXQiLCJ3aW5kb3ciLCJvcGVuIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsImV2ZW50cyIsImhlYWRlciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImRlZmF1bHRWaWV3IiwiZWRpdGFibGUiLCJldmVudExpbWl0Iiwic2VsZWN0YWJsZSIsInNlbGVjdEhlbHBlciIsIm5hdkxpbmtzIiwiaGVpZ2h0IiwiYWxsRGF5U2xvdCIsImxvY2FsZSIsImZpcnN0RGF5IiwibWluVGltZSIsIm1heFRpbWUiLCJzZWxlY3QiLCJzdGFydCIsImVuZCIsImRhdGUiLCJ0aGVuIiwic3VjY2VzcyIsIm1vZGFsIiwiZXJyIiwiZXZlbnRSZW5kZXIiLCJldmVudCIsImVsZW1lbnQiLCJiaW5kIiwiaWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZXZlbnREcm9wIiwiZGVsdGEiLCJyZXZlcnRGdW5jIiwiZWRpdCIsImV2ZW50UmVzaXplIiwiZGF5RGVsdGEiLCJtaW51dGVEZWx0YSIsImFsbHRpbWVzIiwicG9zdCIsImlkX2VtcHRpbWUiLCJhcHBlbmQiLCJpZF9ldGFiIiwiaWRfZm9ybWF0aW9uIiwiaWRfcHJvbW90aW9uIiwic2VtZXN0cmUiLCJyZXF1ZXN0dCIsIm5pdjEiLCJuaXYyIiwibml2MyIsImlkX21vZHVsZSIsImlkX25hdHVyZV9zZWFuY2UiLCJpZF9lbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwibW9kYWxBbGVydCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJwcmVwZW5kIiwic2V0VGltZW91dCIsIm1lc3NhZ2UiLCJyZXMiLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==