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
        axios.get('/planification/planifications/planification_infos/' + $('#semestre').val()).then(function (success) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsZ0JBQWdCLG1CQUFPLENBQUMsNkZBQWdDO0FBQ3hELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFbkQsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdDQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBMb2NhbGUgPSByZXF1aXJlKFwiLi9sb2NhbC1hbGxcIik7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBjb25zdCBwaWxscyA9ICgpID0+IHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLm5hdi1waWxscyBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50YWIoJ3Nob3cnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0TW9kdWxlQnlTZW1lc3RyZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nKyQoJyNzZW1lc3RyZScpLnZhbCgpKTtcclxuICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiAjbW9kdWxlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgaWRfc2VtZXN0cmUgPSBmYWxzZTtcclxuICAgIGxldCBuaXYgPSAwO1xyXG4gICAgbGV0IGN1cnJlbnR3ZWVrID0gZmFsc2U7XHJcbiAgICBsZXQgaGV1cl9kZWJ1dCA9IGZhbHNlO1xyXG4gICAgbGV0IGhldXJfZmluID0gZmFsc2U7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkYXkgPSBkLmdldERheSgpO1xyXG4gICAgbGV0IGN1cnJlbnREYXkgPSBmYWxzZTtcclxuICAgIGxldCBpZF9wbGFubmluZyA9IGZhbHNlO1xyXG4gICAgbGV0IGFsbHRpbWUgPSBbXTtcclxuICAgICQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcih7XHJcbiAgICAgICAgbGFuZzogXCJmclwiLFxyXG4gICAgICAgIGN1c3RvbUJ1dHRvbnM6IHtcclxuICAgICAgICAgICAgbXlDdXN0b21CdXR0b246IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdJbXByaW1lcicsXHJcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50V2VlayA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSwgXCJNTUREWVlZWVwiKS5pc29XZWVrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbW9tZW50KCQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcignZ2V0RGF0ZScpKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3ByaW50X3BsYW5uaW5nLycraWRfc2VtZXN0cmUrJy8nK25pdisnLycrY3VycmVudFdlZWsrJy8nK2N1cnJlbnREYXRlLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciB1bmUgU2VtZXN0cmUhIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXZlbnRzOiBhbGx0aW1lLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5IG15Q3VzdG9tQnV0dG9uJyxcclxuICAgICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxyXG4gICAgICAgICAgICByaWdodDogJ21vbnRoLGFnZW5kYVdlZWsnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0VmlldzogJ2FnZW5kYVdlZWsnLFxyXG4gICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgIGV2ZW50TGltaXQ6IHRydWUsIC8vIGFsbG93IFwibW9yZVwiIGxpbmsgd2hlbiB0b28gbWFueSBldmVudHNcclxuICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxyXG4gICAgICAgIHNlbGVjdEhlbHBlcjogdHJ1ZSxcclxuICAgICAgICBuYXZMaW5rczogdHJ1ZSxcclxuICAgICAgICBoZWlnaHQ6IDQ1MCxcclxuICAgICAgICBhbGxEYXlTbG90OiBmYWxzZSxcclxuICAgICAgICBsb2NhbGU6IFwiZnJcIixcclxuICAgICAgICBmaXJzdERheTogMSxcclxuICAgICAgICBtaW5UaW1lOiBcIjA4OjAwOjAwXCIsXHJcbiAgICAgICAgbWF4VGltZTogXCIxODowMTowMFwiLFxyXG4gICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKHN0YXJ0LCBlbmQsZGF0ZSkge1xyXG4gICAgICAgICAgICBpZigkKCcjc2VtZXN0cmUnKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnREYXkgPSBtb21lbnQoc3RhcnQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudHdlZWsgPSBtb21lbnQoc3RhcnQsIFwiTU1ERFlZWVlcIikuaXNvV2VlaygpO1xyXG4gICAgICAgICAgICAgICAgaGV1cl9kZWJ1dD0gbW9tZW50KHN0YXJ0KS5mb3JtYXQoJ0hIOm1tJylcclxuICAgICAgICAgICAgICAgIGhldXJfZmluPSBtb21lbnQoZW5kKS5mb3JtYXQoJ0hIOm1tJylcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbl9pbmZvcy8nKyQoJyNzZW1lc3RyZScpLnZhbCgpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmIC5hZGRfcGxhbm5pbmcnKS5odG1sKHN1Y2Nlc3MuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmICNoX2RlYnV0JykudmFsKGhldXJfZGVidXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiAjaF9maW4nKS52YWwoaGV1cl9maW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiBzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0TW9kdWxlQnlTZW1lc3RyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNhZGRmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBwaWxscygpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZW50UmVuZGVyOiBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdkYmxjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlkX3BsYW5uaW5nID0gZXZlbnQuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRfcGxhbm5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25faW5mb3NfZWRpdC8nK2lkX3BsYW5uaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtdXBkYXRlZm9ybV9wbGFuaWYgLnVwZGF0ZV9wbGFubmluZycpLmh0bWwoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLXVwZGF0ZWZvcm1fcGxhbmlmIHNlbGVjdCcpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWxscygpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZW50RHJvcDogZnVuY3Rpb24gKGV2ZW50LCBkZWx0YSwgcmV2ZXJ0RnVuYykgeyBcclxuICAgICAgICAgICAgZWRpdChldmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBldmVudFJlc2l6ZTogZnVuY3Rpb24gKGV2ZW50LCBkYXlEZWx0YSwgbWludXRlRGVsdGEsIHJldmVydEZ1bmMpIHsgLy8gc2kgY2hhbmdlbWVudCBkZSBsb25ndWV1clxyXG4gICAgICAgICAgICBlZGl0KGV2ZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKFwiYm9keSBzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgLy8gJChcIiNuYXR1cmVfc2VhbmNlXCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjc2FsbGVcIikuc2VsZWN0MigpO1xyXG4gICAgY29uc3QgYWxsdGltZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2NhbGVuZGFyLycraWRfc2VtZXN0cmUrJy8nK25pdilcclxuICAgICAgICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2NhbGVuZGFyLzEwNy85JylcclxuICAgICAgICAgICAgYWxsdGltZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgLy8gVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIC8vICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdTb21lIEVycm9yISEnLFxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFsbHRpbWVzKClcclxuICAgIGNvbnN0IGVkaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBzdGFydCA9IGV2ZW50LnN0YXJ0LmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgICAgIGlmIChldmVudC5lbmQpIHtcclxuICAgICAgICAgICAgZW5kID0gZXZlbnQuZW5kLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVuZCA9IHN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZF9lbXB0aW1lID0gZXZlbnQuaWQ7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdGFydCcsc3RhcnQpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbmQnLGVuZClcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbnNfZWRpdEV2ZW50RGF0ZS8nK2lkX2VtcHRpbWUsZm9ybURhdGEpXHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmRhdGEgPT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxhbmlmaWNhdGlvbiBiaWVuIE1vZGlmaWVyISEnLFxyXG4gICAgICAgICAgICAgICAgfSkgIFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQbGFuaWZpY2F0aW9uIGEgZWNob3XDqSEhJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3IhIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjEnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjInKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHNlbWVzdHJlID0gcmVxdWVzdC5kYXRhICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoc2VtZXN0cmUpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2MS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIG5pdjEgPSByZXF1ZXN0dC5kYXRhICBcclxuICAgICAgICAgICAgJCgnI25pdjEnKS5odG1sKG5pdjEpLnNlbGVjdDIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI25pdjFcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdjEgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIC8vIG5pdiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKG5pdjEgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBuaXYgPSBuaXYxO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjIvJytuaXYxKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbml2ID0gMDtcclxuICAgICAgICAgICAgLy8gYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAvLyAkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ3JlZmV0Y2hFdmVudHMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjInKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNuaXYyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBuaXYyID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihuaXYyICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbml2ID0gbml2MjtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYzLycrbml2Mik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5pdiA9ICQoJyNuaXYxJykudmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbml2MycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI25pdjNcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdjMgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKG5pdjMgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBuaXYgPSBuaXYzO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuaXYgPSAkKCcjbml2MicpLnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGx0aW1lID0gW107XHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnKTsgXHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdhZGRFdmVudFNvdXJjZScsIGFsbHRpbWUpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gJCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKCdyZWZldGNoRXZlbnRzJyk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ2NoYW5nZScsJyNtb2R1bGUnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9tb2R1bGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9tb2R1bGUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VsZW1lbnQvJytpZF9tb2R1bGUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2hhbmdlJywnI25hdHVyZV9zZWFuY2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9uYXR1cmVfc2VhbmNlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgaWRfZWxlbWVudCA9ICQoJyNlbGVtZW50JykudmFsKCk7XHJcbiAgICAgICAgaWYoaWRfZWxlbWVudCAhPSBcIlwiICYmIGlkX25hdHVyZV9zZWFuY2UgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Vuc2VpZ25hbnRzQnlQcm9ncmFtbWUvJytpZF9lbGVtZW50KycvJytpZF9uYXR1cmVfc2VhbmNlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgcGlsbHMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZW5zZWlnbmFudCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcImJvZHlcIikub24oJ2NoYW5nZScsJyNlbGVtZW50JywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZWxlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IGlkX25hdHVyZV9zZWFuY2UgPSAkKCcjbmF0dXJlX3NlYW5jZScpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9lbGVtZW50ICE9IFwiXCIgJiYgaWRfbmF0dXJlX3NlYW5jZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZW5zZWlnbmFudHNCeVByb2dyYW1tZS8nK2lkX2VsZW1lbnQrJy8nK2lkX25hdHVyZV9zZWFuY2UpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBwaWxscygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbnNlaWduYW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCcuZm9ybV9hZGRfcGxhbm5pbmcnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25fc2VtYWluZScsIGN1cnJlbnR3ZWVrKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RheScsIGN1cnJlbnREYXkpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdncm91cGUnLCBuaXYpXHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjYWRkZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIuZm9ybV9hZGRfcGxhbm5pbmcgLmJ0biBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wbGFuaWZpY2F0aW9uc19jYWxlbmRhcl9hZGQnLGZvcm1EYXRhKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI2FkZGZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj4ke2RhdGF9PC9kaXY+YFxyXG4gICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICQoXCIjYWRkZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAkKCcjYWRkZm9ybV9wbGFuaWYtbW9kYWwnKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgIH0sIDQwMDApO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2FkZGZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsJy5mb3JtX3VwZGF0ZV9wbGFubmluZycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnbl9zZW1haW5lJywgY3VycmVudHdlZWspO1xyXG4gICAgICAgIC8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIuZm9ybV91cGRhdGVfcGxhbm5pbmcgLmJ0biBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wbGFuaWZpY2F0aW9uc19jYWxlbmRhcl9lZGl0LycraWRfcGxhbm5pbmcsZm9ybURhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7IFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCIjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9LCA0MDAwKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI3BsYW5uaW5nX2RlbGV0ZScsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRfcGxhbm5pbmcpe1xyXG4gICAgICAgICAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIGVucmVnaXN0cmVtZW50ID8nKTtcclxuICAgICAgICAgICAgaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcGxhbm5pbmdfZW5yZWdpc3RyZSAudXBkYXRlX3BsYW5uaW5nIGlcIik7XHJcbiAgICAgICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2RlbGV0ZV9wbGFubmluZy8nK2lkX3BsYW5uaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywnI2ltcG9ydCcsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnI2ltcG9ydF9lbl9tYXNzZScpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjcGxhbm5pbmdfY2FudmFzJywgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5uaW5nX2NhbnZhcycsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIjaW1wb3J0X3BsYW5uaW5nX3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3BsYW5uaW5nX2VucmVnaXN0cmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvaW1wb3J0JywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsJyNnZW5lcmVyJywgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfc2VtZXN0cmUpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZvdXMgZGV2ZXogY2hvaXNpciBTZW1lc3RyZSBldCBOaXZlYXUhIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy9cclxuICAgICAgICAvLyBsZXQgY3JudGRheSA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSkuZm9ybWF0KCdZWVlZLU1NLUREJylcclxuICAgICAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogVnJhaW1lbnQgR8OpbsOpcmVyIGxlcyBwbGFuaWZpY2F0aW9ucyBkZSBjZXR0ZSBzZW1haW5lID8nKTtcclxuICAgICAgICBpZiAocmVzID09IDEpIHtcclxuICAgICAgICAgICAgY3VycmVudHdlZWsgPSBtb21lbnQoJCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKCdnZXREYXRlJyksIFwiTU1ERFlZWVlcIikuaXNvV2VlaygpO1xyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduc2VtYWluZScsY3VycmVudHdlZWspXHJcbiAgICAgICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnY3JudGRheScsY3JudGRheSlcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZ2VuZXJlciBpXCIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLmFkZENsYXNzKFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9nZW5lcmVyX3BsYW5uaW5nLycraWRfc2VtZXN0cmUrJy8nK25pdiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2dlbmVyZXJfcGxhbm5pbmcvMTA3LzknLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNzZWFuY2VfYWJzZW5jZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgU2VsZWN0aW9ubmVyIHVuZSBTZWFuY2UnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9HZXRBYnNlbmNlQnlHcm91cGUvJytpZF9wbGFubmluZywgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNmaWNoZV9zZXF1ZW5jZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgU2VsZWN0aW9ubmVyIHVuZSBTZWFuY2UnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9HZXRzZXF1ZW5jZS8nK2lkX3BsYW5uaW5nLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICBcclxufSlcclxuXHJcbi8vIGNvbnN0IGFsbExvY2FsZXMgPSByZXF1aXJlKFwiLi4vaW5jbHVkZXMvbG9jYWwtYWxsXCIpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xudmFyIGZhY3RvcmllcyA9IHt9O1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKEMsIGFyZ3NMZW5ndGgsIGFyZ3MpIHtcbiAgaWYgKCFoYXNPd24oZmFjdG9yaWVzLCBhcmdzTGVuZ3RoKSkge1xuICAgIGZvciAodmFyIGxpc3QgPSBbXSwgaSA9IDA7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIGxpc3RbaV0gPSAnYVsnICsgaSArICddJztcbiAgICBmYWN0b3JpZXNbYXJnc0xlbmd0aF0gPSBGdW5jdGlvbignQyxhJywgJ3JldHVybiBuZXcgQygnICsgam9pbihsaXN0LCAnLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2FyZ3NMZW5ndGhdKEMsIGFyZ3MpO1xufTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uYmluZCB8fCBmdW5jdGlvbiBiaW5kKHRoYXQgLyogLCAuLi5hcmdzICovKSB7XG4gIHZhciBGID0gYUNhbGxhYmxlKHRoaXMpO1xuICB2YXIgUHJvdG90eXBlID0gRi5wcm90b3R5cGU7XG4gIHZhciBwYXJ0QXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKSB7XG4gICAgdmFyIGFyZ3MgPSBjb25jYXQocGFydEFyZ3MsIGFycmF5U2xpY2UoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZEZ1bmN0aW9uID8gY29uc3RydWN0KEYsIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IEYuYXBwbHkodGhhdCwgYXJncyk7XG4gIH07XG4gIGlmIChpc09iamVjdChQcm90b3R5cGUpKSBib3VuZEZ1bmN0aW9uLnByb3RvdHlwZSA9IFByb3RvdHlwZTtcbiAgcmV0dXJuIGJvdW5kRnVuY3Rpb247XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG52YXIgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSc7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciB1biREYXRlVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlW1RPX1NUUklOR10pO1xudmFyIGdldFRpbWUgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFRpbWUpO1xuXG4vLyBgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKFN0cmluZyhuZXcgRGF0ZShOYU4pKSAhPSBJTlZBTElEX0RBVEUpIHtcbiAgcmVkZWZpbmUoRGF0ZVByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRUaW1lKHRoaXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IHVuJERhdGVUb1N0cmluZyh0aGlzKSA6IElOVkFMSURfREFURTtcbiAgfSk7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQnKTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiQoeyB0YXJnZXQ6ICdGdW5jdGlvbicsIHByb3RvOiB0cnVlIH0sIHtcbiAgYmluZDogYmluZFxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJwaWxscyIsIm9uIiwiZSIsInRhYiIsImdldE1vZHVsZUJ5U2VtZXN0cmUiLCJheGlvcyIsImdldCIsInZhbCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImRhdGEiLCJodG1sIiwic2VsZWN0MiIsImlkX3NlbWVzdHJlIiwibml2IiwiY3VycmVudHdlZWsiLCJoZXVyX2RlYnV0IiwiaGV1cl9maW4iLCJkIiwiRGF0ZSIsImRheSIsImdldERheSIsImN1cnJlbnREYXkiLCJpZF9wbGFubmluZyIsImFsbHRpbWUiLCJmdWxsQ2FsZW5kYXIiLCJsYW5nIiwiY3VzdG9tQnV0dG9ucyIsIm15Q3VzdG9tQnV0dG9uIiwidGV4dCIsImNsaWNrIiwiY3VycmVudFdlZWsiLCJtb21lbnQiLCJpc29XZWVrIiwiY3VycmVudERhdGUiLCJmb3JtYXQiLCJ3aW5kb3ciLCJvcGVuIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsImV2ZW50cyIsImhlYWRlciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImRlZmF1bHRWaWV3IiwiZWRpdGFibGUiLCJldmVudExpbWl0Iiwic2VsZWN0YWJsZSIsInNlbGVjdEhlbHBlciIsIm5hdkxpbmtzIiwiaGVpZ2h0IiwiYWxsRGF5U2xvdCIsImxvY2FsZSIsImZpcnN0RGF5IiwibWluVGltZSIsIm1heFRpbWUiLCJzZWxlY3QiLCJzdGFydCIsImVuZCIsImRhdGUiLCJ0aGVuIiwic3VjY2VzcyIsIm1vZGFsIiwiZXJyIiwiZXZlbnRSZW5kZXIiLCJldmVudCIsImVsZW1lbnQiLCJiaW5kIiwiaWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZXZlbnREcm9wIiwiZGVsdGEiLCJyZXZlcnRGdW5jIiwiZWRpdCIsImV2ZW50UmVzaXplIiwiZGF5RGVsdGEiLCJtaW51dGVEZWx0YSIsImFsbHRpbWVzIiwicG9zdCIsImlkX2VtcHRpbWUiLCJhcHBlbmQiLCJpZF9ldGFiIiwiaWRfZm9ybWF0aW9uIiwiaWRfcHJvbW90aW9uIiwic2VtZXN0cmUiLCJyZXF1ZXN0dCIsIm5pdjEiLCJuaXYyIiwibml2MyIsImlkX21vZHVsZSIsImlkX25hdHVyZV9zZWFuY2UiLCJpZF9lbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwibW9kYWxBbGVydCIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJwcmVwZW5kIiwic2V0VGltZW91dCIsIm1lc3NhZ2UiLCJyZXMiLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==