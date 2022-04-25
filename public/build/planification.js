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
    $('.nav-pills a').on('click', function (e) {
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
            $('body #element').html(response).select2();

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
              formData = new FormData(this); // console.log(formData);

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
              _context15.next = 22;
              break;

            case 16:
              _context15.prev = 16;
              _context15.t0 = _context15["catch"](6);
              message = _context15.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#updateform_planif-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
              setTimeout(function () {
                $("#updateform_planif-modal .modal-body .alert").remove();
                $('#updateform_planif-modal').modal("hide");
              }, 4000);

            case 23:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this, [[6, 16]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IExvY2FsZSA9IHJlcXVpcmUoXCIuL2xvY2FsLWFsbFwiKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIGNvbnN0IHBpbGxzID0gKCkgPT4ge1xyXG4gICAgICAgICQoJy5uYXYtcGlsbHMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudGFiKCdzaG93Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGdldE1vZHVsZUJ5U2VtZXN0cmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJyskKCcjc2VtZXN0cmUnKS52YWwoKSk7XHJcbiAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAkKCcubW9kYWwtYWRkZm9ybV9wbGFuaWYgI21vZHVsZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGlkX3NlbWVzdHJlID0gZmFsc2U7XHJcbiAgICBsZXQgbml2ID0gMDtcclxuICAgIGxldCBjdXJyZW50d2VlayA9IGZhbHNlO1xyXG4gICAgbGV0IGhldXJfZGVidXQgPSBmYWxzZTtcclxuICAgIGxldCBoZXVyX2ZpbiA9IGZhbHNlO1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF5ID0gZC5nZXREYXkoKTtcclxuICAgIGxldCBjdXJyZW50RGF5ID0gZmFsc2U7XHJcbiAgICBsZXQgaWRfcGxhbm5pbmcgPSBmYWxzZTtcclxuICAgIGxldCBhbGx0aW1lID0gW107XHJcbiAgICAkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoe1xyXG4gICAgICAgIGxhbmc6IFwiZnJcIixcclxuICAgICAgICBjdXN0b21CdXR0b25zOiB7XHJcbiAgICAgICAgICAgIG15Q3VzdG9tQnV0dG9uOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSW1wcmltZXInLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFdlZWsgPSBtb21lbnQoJCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKCdnZXREYXRlJyksIFwiTU1ERFlZWVlcIikuaXNvV2VlaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wcmludF9wbGFubmluZy8nK2lkX3NlbWVzdHJlKycvJytuaXYrJy8nK2N1cnJlbnRXZWVrKycvJytjdXJyZW50RGF0ZSwgJ19ibGFuaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgdW5lIFNlbWVzdHJlISEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZW50czogYWxsdGltZSxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheSBteUN1c3RvbUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcclxuICAgICAgICAgICAgcmlnaHQ6ICdtb250aCxhZ2VuZGFXZWVrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVmYXVsdFZpZXc6ICdhZ2VuZGFXZWVrJyxcclxuICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICBldmVudExpbWl0OiB0cnVlLCAvLyBhbGxvdyBcIm1vcmVcIiBsaW5rIHdoZW4gdG9vIG1hbnkgZXZlbnRzXHJcbiAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcclxuICAgICAgICBzZWxlY3RIZWxwZXI6IHRydWUsXHJcbiAgICAgICAgbmF2TGlua3M6IHRydWUsXHJcbiAgICAgICAgaGVpZ2h0OiA0NTAsXHJcbiAgICAgICAgYWxsRGF5U2xvdDogZmFsc2UsXHJcbiAgICAgICAgbG9jYWxlOiBcImZyXCIsXHJcbiAgICAgICAgZmlyc3REYXk6IDEsXHJcbiAgICAgICAgbWluVGltZTogXCIwODowMDowMFwiLFxyXG4gICAgICAgIG1heFRpbWU6IFwiMTg6MDE6MDBcIixcclxuICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChzdGFydCwgZW5kLGRhdGUpIHtcclxuICAgICAgICAgICAgaWYoJCgnI3NlbWVzdHJlJykudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF5ID0gbW9tZW50KHN0YXJ0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnR3ZWVrID0gbW9tZW50KHN0YXJ0LCBcIk1NRERZWVlZXCIpLmlzb1dlZWsoKTtcclxuICAgICAgICAgICAgICAgIGhldXJfZGVidXQ9IG1vbWVudChzdGFydCkuZm9ybWF0KCdISDptbScpXHJcbiAgICAgICAgICAgICAgICBoZXVyX2Zpbj0gbW9tZW50KGVuZCkuZm9ybWF0KCdISDptbScpXHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25faW5mb3MvJysxMDcpXHJcbiAgICAgICAgICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYWRkZm9ybV9wbGFuaWYgLmFkZF9wbGFubmluZycpLmh0bWwoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYWRkZm9ybV9wbGFuaWYgI2hfZGVidXQnKS52YWwoaGV1cl9kZWJ1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmICNoX2ZpbicpLnZhbChoZXVyX2Zpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmIHNlbGVjdCcpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgICAgICAgICBnZXRNb2R1bGVCeVNlbWVzdHJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2FkZGZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBpbGxzKClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXZlbnRSZW5kZXI6IGZ1bmN0aW9uIChldmVudCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmJpbmQoJ2RibGNsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWRfcGxhbm5pbmcgPSBldmVudC5pZDtcclxuICAgICAgICAgICAgICAgIGlmIChpZF9wbGFubmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbl9pbmZvc19lZGl0LycraWRfcGxhbm5pbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC11cGRhdGVmb3JtX3BsYW5pZiAudXBkYXRlX3BsYW5uaW5nJykuaHRtbChzdWNjZXNzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtdXBkYXRlZm9ybV9wbGFuaWYgc2VsZWN0Jykuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpbGxzKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXZlbnREcm9wOiBmdW5jdGlvbiAoZXZlbnQsIGRlbHRhLCByZXZlcnRGdW5jKSB7IFxyXG4gICAgICAgICAgICBlZGl0KGV2ZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZW50UmVzaXplOiBmdW5jdGlvbiAoZXZlbnQsIGRheURlbHRhLCBtaW51dGVEZWx0YSwgcmV2ZXJ0RnVuYykgeyAvLyBzaSBjaGFuZ2VtZW50IGRlIGxvbmd1ZXVyXHJcbiAgICAgICAgICAgIGVkaXQoZXZlbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoXCJib2R5IHNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcbiAgICAvLyAkKFwiI25hdHVyZV9zZWFuY2VcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNzYWxsZVwiKS5zZWxlY3QyKCk7XHJcbiAgICBjb25zdCBhbGx0aW1lcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvY2FsZW5kYXIvJytpZF9zZW1lc3RyZSsnLycrbml2KVxyXG4gICAgICAgICAgICAvLyBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvY2FsZW5kYXIvMTA3LzknKVxyXG4gICAgICAgICAgICBhbGx0aW1lID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAvLyBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgLy8gICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ1NvbWUgRXJyb3IhIScsXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gYWxsdGltZXMoKVxyXG4gICAgY29uc3QgZWRpdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIHN0YXJ0ID0gZXZlbnQuc3RhcnQuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcbiAgICAgICAgaWYgKGV2ZW50LmVuZCkge1xyXG4gICAgICAgICAgICBlbmQgPSBldmVudC5lbmQuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW5kID0gc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkX2VtcHRpbWUgPSBldmVudC5pZDtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3N0YXJ0JyxzdGFydClcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VuZCcsZW5kKVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wbGFuaWZpY2F0aW9uc19lZGl0RXZlbnREYXRlLycraWRfZW1wdGltZSxmb3JtRGF0YSlcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QuZGF0YSA9PSAnb2snKSB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQbGFuaWZpY2F0aW9uIGJpZW4gTW9kaWZpZXIhIScsXHJcbiAgICAgICAgICAgICAgICB9KSAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BsYW5pZmljYXRpb24gYSBlY2hvdcOpISEnLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvciEhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgc2VtZXN0cmUgPSByZXF1ZXN0LmRhdGEgICAgICAgICAgICBcclxuICAgICAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChzZW1lc3RyZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0dCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYxLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgbml2MSA9IHJlcXVlc3R0LmRhdGEgIFxyXG4gICAgICAgICAgICAkKCcjbml2MScpLmh0bWwobml2MSkuc2VsZWN0MigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjbml2MVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2MSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgLy8gbml2ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYobml2MSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5pdiA9IG5pdjE7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2Mi8nK25pdjEpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuaXYgPSAwO1xyXG4gICAgICAgICAgICAvLyBhbGx0aW1lID0gW107XHJcbiAgICAgICAgICAgIC8vICQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcigncmVmZXRjaEV2ZW50cycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGx0aW1lID0gW107XHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnKTsgXHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdhZGRFdmVudFNvdXJjZScsIGFsbHRpbWUpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI25pdjJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdjIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKG5pdjIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBuaXYgPSBuaXYyO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjMvJytuaXYyKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbml2ID0gJCgnI25pdjEnKS52YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjbml2M1wiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2MyA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYobml2MyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5pdiA9IG5pdjM7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5pdiA9ICQoJyNuaXYyJykudmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ3JlZmV0Y2hFdmVudHMnKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2hhbmdlJywnI21vZHVsZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX21vZHVsZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZWxlbWVudC8nK2lkX21vZHVsZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJ2JvZHkgI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ2NoYW5nZScsJyNuYXR1cmVfc2VhbmNlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbmF0dXJlX3NlYW5jZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IGlkX2VsZW1lbnQgPSAkKCcjZWxlbWVudCcpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX2VsZW1lbnQgIT0gXCJcIiAmJiBpZF9uYXR1cmVfc2VhbmNlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbnNlaWduYW50c0J5UHJvZ3JhbW1lLycraWRfZWxlbWVudCsnLycraWRfbmF0dXJlX3NlYW5jZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIHBpbGxzKClcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Vuc2VpZ25hbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKCdjaGFuZ2UnLCcjZWxlbWVudCcsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2VsZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCBpZF9uYXR1cmVfc2VhbmNlID0gJCgnI25hdHVyZV9zZWFuY2UnKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZWxlbWVudCAhPSBcIlwiICYmIGlkX25hdHVyZV9zZWFuY2UgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Vuc2VpZ25hbnRzQnlQcm9ncmFtbWUvJytpZF9lbGVtZW50KycvJytpZF9uYXR1cmVfc2VhbmNlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgcGlsbHMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZW5zZWlnbmFudCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbignc3VibWl0JywnLmZvcm1fYWRkX3BsYW5uaW5nJywgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduX3NlbWFpbmUnLCBjdXJyZW50d2Vlayk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkYXknLCBjdXJyZW50RGF5KVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZ3JvdXBlJywgbml2KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI2FkZGZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiLmZvcm1fYWRkX3BsYW5uaW5nIC5idG4gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbnNfY2FsZW5kYXJfYWRkJyxmb3JtRGF0YSlcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNhZGRmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+JHtkYXRhfTwvZGl2PmBcclxuICAgICAgICAgICAgKTsgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAkKFwiI2FkZGZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgJCgnI2FkZGZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9LCA0MDAwKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNhZGRmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCcuZm9ybV91cGRhdGVfcGxhbm5pbmcnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIi5mb3JtX3VwZGF0ZV9wbGFubmluZyAuYnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25zX2NhbGVuZGFyX2VkaXQvJytpZF9wbGFubmluZyxmb3JtRGF0YSlcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+JHtkYXRhfTwvZGl2PmBcclxuICAgICAgICAgICAgKTsgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAkKFwiI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAkKCcjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwnKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjcGxhbm5pbmdfZGVsZXRlJywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihpZF9wbGFubmluZyl7XHJcbiAgICAgICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgZW5yZWdpc3RyZW1lbnQgPycpO1xyXG4gICAgICAgICAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNwbGFubmluZ19lbnJlZ2lzdHJlIC51cGRhdGVfcGxhbm5pbmcgaVwiKTtcclxuICAgICAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvZGVsZXRlX3BsYW5uaW5nLycraWRfcGxhbm5pbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCcjaW1wb3J0JywgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcjaW1wb3J0X2VuX21hc3NlJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNwbGFubmluZ19jYW52YXMnLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICB3aW5kb3cub3BlbignL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbm5pbmdfY2FudmFzJywgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNpbXBvcnRfcGxhbm5pbmdfc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcGxhbm5pbmdfZW5yZWdpc3RyZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9pbXBvcnQnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywnI2dlbmVyZXInLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9zZW1lc3RyZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVm91cyBkZXZleiBjaG9pc2lyIFNlbWVzdHJlIGV0IE5pdmVhdSEhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLy8vL1xyXG4gICAgICAgIC8vIGxldCBjcm50ZGF5ID0gbW9tZW50KCQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcignZ2V0RGF0ZScpKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxyXG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiBWcmFpbWVudCBHw6luw6lyZXIgbGVzIHBsYW5pZmljYXRpb25zIGRlIGNldHRlIHNlbWFpbmUgPycpO1xyXG4gICAgICAgIGlmIChyZXMgPT0gMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50d2VlayA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSwgXCJNTUREWVlZWVwiKS5pc29XZWVrKCk7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25zZW1haW5lJyxjdXJyZW50d2VlaylcclxuICAgICAgICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdjcm50ZGF5Jyxjcm50ZGF5KVxyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNnZW5lcmVyIGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykuYWRkQ2xhc3MoXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2dlbmVyZXJfcGxhbm5pbmcvJytpZF9zZW1lc3RyZSsnLycrbml2LCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvZ2VuZXJlcl9wbGFubmluZy8xMDcvOScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLnJlbW92ZUNsYXNzKFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnI3NlYW5jZV9hYnNlbmNlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3BsYW5uaW5nKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBTZWxlY3Rpb25uZXIgdW5lIFNlYW5jZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL0dldEFic2VuY2VCeUdyb3VwZS8nK2lkX3BsYW5uaW5nLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnI2ZpY2hlX3NlcXVlbmNlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3BsYW5uaW5nKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBTZWxlY3Rpb25uZXIgdW5lIFNlYW5jZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL0dldHNlcXVlbmNlLycraWRfcGxhbm5pbmcsICdfYmxhbmsnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIFxyXG59KVxyXG5cclxuLy8gY29uc3QgYWxsTG9jYWxlcyA9IHJlcXVpcmUoXCIuLi9pbmNsdWRlcy9sb2NhbC1hbGxcIik7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG52YXIgZmFjdG9yaWVzID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoQywgYXJnc0xlbmd0aCwgYXJncykge1xuICBpZiAoIWhhc093bihmYWN0b3JpZXMsIGFyZ3NMZW5ndGgpKSB7XG4gICAgZm9yICh2YXIgbGlzdCA9IFtdLCBpID0gMDsgaSA8IGFyZ3NMZW5ndGg7IGkrKykgbGlzdFtpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIGZhY3Rvcmllc1thcmdzTGVuZ3RoXSA9IEZ1bmN0aW9uKCdDLGEnLCAncmV0dXJuIG5ldyBDKCcgKyBqb2luKGxpc3QsICcsJykgKyAnKScpO1xuICB9IHJldHVybiBmYWN0b3JpZXNbYXJnc0xlbmd0aF0oQywgYXJncyk7XG59O1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5iaW5kIHx8IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgdmFyIEYgPSBhQ2FsbGFibGUodGhpcyk7XG4gIHZhciBQcm90b3R5cGUgPSBGLnByb3RvdHlwZTtcbiAgdmFyIHBhcnRBcmdzID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uIGJvdW5kKC8qIGFyZ3MuLi4gKi8pIHtcbiAgICB2YXIgYXJncyA9IGNvbmNhdChwYXJ0QXJncywgYXJyYXlTbGljZShhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kRnVuY3Rpb24gPyBjb25zdHJ1Y3QoRiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogRi5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfTtcbiAgaWYgKGlzT2JqZWN0KFByb3RvdHlwZSkpIGJvdW5kRnVuY3Rpb24ucHJvdG90eXBlID0gUHJvdG90eXBlO1xuICByZXR1cm4gYm91bmRGdW5jdGlvbjtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxudmFyIERhdGVQcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIHVuJERhdGVUb1N0cmluZyA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGVbVE9fU1RSSU5HXSk7XG52YXIgZ2V0VGltZSA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGUuZ2V0VGltZSk7XG5cbi8vIGBEYXRlLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoU3RyaW5nKG5ldyBEYXRlKE5hTikpICE9IElOVkFMSURfREFURSkge1xuICByZWRlZmluZShEYXRlUHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUodGhpcyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdW4kRGF0ZVRvU3RyaW5nKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZCcpO1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuJCh7IHRhcmdldDogJ0Z1bmN0aW9uJywgcHJvdG86IHRydWUgfSwge1xuICBiaW5kOiBiaW5kXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsInBpbGxzIiwib24iLCJlIiwidGFiIiwiZ2V0TW9kdWxlQnlTZW1lc3RyZSIsImF4aW9zIiwiZ2V0IiwidmFsIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsImh0bWwiLCJzZWxlY3QyIiwiaWRfc2VtZXN0cmUiLCJuaXYiLCJjdXJyZW50d2VlayIsImhldXJfZGVidXQiLCJoZXVyX2ZpbiIsImQiLCJEYXRlIiwiZGF5IiwiZ2V0RGF5IiwiY3VycmVudERheSIsImlkX3BsYW5uaW5nIiwiYWxsdGltZSIsImZ1bGxDYWxlbmRhciIsImxhbmciLCJjdXN0b21CdXR0b25zIiwibXlDdXN0b21CdXR0b24iLCJ0ZXh0IiwiY2xpY2siLCJjdXJyZW50V2VlayIsIm1vbWVudCIsImlzb1dlZWsiLCJjdXJyZW50RGF0ZSIsImZvcm1hdCIsIndpbmRvdyIsIm9wZW4iLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZXZlbnRzIiwiaGVhZGVyIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiZGVmYXVsdFZpZXciLCJlZGl0YWJsZSIsImV2ZW50TGltaXQiLCJzZWxlY3RhYmxlIiwic2VsZWN0SGVscGVyIiwibmF2TGlua3MiLCJoZWlnaHQiLCJhbGxEYXlTbG90IiwibG9jYWxlIiwiZmlyc3REYXkiLCJtaW5UaW1lIiwibWF4VGltZSIsInNlbGVjdCIsInN0YXJ0IiwiZW5kIiwiZGF0ZSIsInRoZW4iLCJzdWNjZXNzIiwibW9kYWwiLCJlcnIiLCJldmVudFJlbmRlciIsImV2ZW50IiwiZWxlbWVudCIsImJpbmQiLCJpZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJldmVudERyb3AiLCJkZWx0YSIsInJldmVydEZ1bmMiLCJlZGl0IiwiZXZlbnRSZXNpemUiLCJkYXlEZWx0YSIsIm1pbnV0ZURlbHRhIiwiYWxsdGltZXMiLCJwb3N0IiwiaWRfZW1wdGltZSIsImFwcGVuZCIsImlkX2V0YWIiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJzZW1lc3RyZSIsInJlcXVlc3R0Iiwibml2MSIsIm5pdjIiLCJuaXYzIiwiaWRfbW9kdWxlIiwiaWRfbmF0dXJlX3NlYW5jZSIsImlkX2VsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInByZXBlbmQiLCJzZXRUaW1lb3V0IiwibWVzc2FnZSIsInJlcyIsImNvbmZpcm0iXSwic291cmNlUm9vdCI6IiJ9