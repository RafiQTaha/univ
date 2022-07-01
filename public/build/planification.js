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
              Toast.fire({
                icon: 'success',
                title: request.data
              });
              _context3.next = 18;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](6);
              Toast.fire({
                icon: 'error',
                title: _context3.t0.response.data
              });
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);

            case 18:
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
                //    $("#addform_planif-modal .modal-body .alert").remove();
                $('#addform_planif-modal').modal("hide");
              }, 3000);
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
              setTimeout(function () {
                $("#addform_planif-modal .modal-body .alert").remove();
              }, 3000);

            case 28:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3JDO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNQRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsZ0JBQWdCLG1CQUFPLENBQUMsNkZBQWdDO0FBQ3hELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFbkQsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdDQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBMb2NhbGUgPSByZXF1aXJlKFwiLi9sb2NhbC1hbGxcIik7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBjb25zdCBwaWxscyA9ICgpID0+IHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLm5hdi1waWxscyBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50YWIoJ3Nob3cnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0TW9kdWxlQnlTZW1lc3RyZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nKyQoJyNzZW1lc3RyZScpLnZhbCgpKTtcclxuICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiAjbW9kdWxlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgaWRfc2VtZXN0cmUgPSBmYWxzZTtcclxuICAgIGxldCBuaXYgPSAwO1xyXG4gICAgbGV0IGN1cnJlbnR3ZWVrID0gZmFsc2U7XHJcbiAgICBsZXQgaGV1cl9kZWJ1dCA9IGZhbHNlO1xyXG4gICAgbGV0IGhldXJfZmluID0gZmFsc2U7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkYXkgPSBkLmdldERheSgpO1xyXG4gICAgbGV0IGN1cnJlbnREYXkgPSBmYWxzZTtcclxuICAgIGxldCBpZF9wbGFubmluZyA9IGZhbHNlO1xyXG4gICAgbGV0IGFsbHRpbWUgPSBbXTtcclxuICAgICQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcih7XHJcbiAgICAgICAgbGFuZzogXCJmclwiLFxyXG4gICAgICAgIGN1c3RvbUJ1dHRvbnM6IHtcclxuICAgICAgICAgICAgbXlDdXN0b21CdXR0b246IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdJbXByaW1lcicsXHJcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50V2VlayA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSwgXCJNTUREWVlZWVwiKS5pc29XZWVrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbW9tZW50KCQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcignZ2V0RGF0ZScpKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3ByaW50X3BsYW5uaW5nLycraWRfc2VtZXN0cmUrJy8nK25pdisnLycrY3VycmVudFdlZWsrJy8nK2N1cnJlbnREYXRlLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciB1bmUgU2VtZXN0cmUhIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXZlbnRzOiBhbGx0aW1lLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5IG15Q3VzdG9tQnV0dG9uJyxcclxuICAgICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxyXG4gICAgICAgICAgICByaWdodDogJ21vbnRoLGFnZW5kYVdlZWsnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0VmlldzogJ2FnZW5kYVdlZWsnLFxyXG4gICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgIGV2ZW50TGltaXQ6IHRydWUsIC8vIGFsbG93IFwibW9yZVwiIGxpbmsgd2hlbiB0b28gbWFueSBldmVudHNcclxuICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxyXG4gICAgICAgIHNlbGVjdEhlbHBlcjogdHJ1ZSxcclxuICAgICAgICBuYXZMaW5rczogdHJ1ZSxcclxuICAgICAgICBoZWlnaHQ6IDQ1MCxcclxuICAgICAgICBhbGxEYXlTbG90OiBmYWxzZSxcclxuICAgICAgICBsb2NhbGU6IFwiZnJcIixcclxuICAgICAgICBmaXJzdERheTogMSxcclxuICAgICAgICBtaW5UaW1lOiBcIjA4OjAwOjAwXCIsXHJcbiAgICAgICAgbWF4VGltZTogXCIxODowMTowMFwiLFxyXG4gICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKHN0YXJ0LCBlbmQsZGF0ZSkge1xyXG4gICAgICAgICAgICBpZigkKCcjc2VtZXN0cmUnKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnREYXkgPSBtb21lbnQoc3RhcnQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudHdlZWsgPSBtb21lbnQoc3RhcnQsIFwiTU1ERFlZWVlcIikuaXNvV2VlaygpO1xyXG4gICAgICAgICAgICAgICAgaGV1cl9kZWJ1dD0gbW9tZW50KHN0YXJ0KS5mb3JtYXQoJ0hIOm1tJylcclxuICAgICAgICAgICAgICAgIGhldXJfZmluPSBtb21lbnQoZW5kKS5mb3JtYXQoJ0hIOm1tJylcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbl9pbmZvcy8nKyQoJyNzZW1lc3RyZScpLnZhbCgpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmIC5hZGRfcGxhbm5pbmcnKS5odG1sKHN1Y2Nlc3MuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmICNoX2RlYnV0JykudmFsKGhldXJfZGVidXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiAjaF9maW4nKS52YWwoaGV1cl9maW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiBzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0TW9kdWxlQnlTZW1lc3RyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNhZGRmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBwaWxscygpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZW50UmVuZGVyOiBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdkYmxjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlkX3BsYW5uaW5nID0gZXZlbnQuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRfcGxhbm5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25faW5mb3NfZWRpdC8nK2lkX3BsYW5uaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtdXBkYXRlZm9ybV9wbGFuaWYgLnVwZGF0ZV9wbGFubmluZycpLmh0bWwoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLXVwZGF0ZWZvcm1fcGxhbmlmIHNlbGVjdCcpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWxscygpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZW50RHJvcDogZnVuY3Rpb24gKGV2ZW50LCBkZWx0YSwgcmV2ZXJ0RnVuYykgeyBcclxuICAgICAgICAgICAgZWRpdChldmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBldmVudFJlc2l6ZTogZnVuY3Rpb24gKGV2ZW50LCBkYXlEZWx0YSwgbWludXRlRGVsdGEsIHJldmVydEZ1bmMpIHsgLy8gc2kgY2hhbmdlbWVudCBkZSBsb25ndWV1clxyXG4gICAgICAgICAgICBlZGl0KGV2ZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKFwiYm9keSBzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgLy8gJChcIiNuYXR1cmVfc2VhbmNlXCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjc2FsbGVcIikuc2VsZWN0MigpO1xyXG4gICAgY29uc3QgYWxsdGltZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2NhbGVuZGFyLycraWRfc2VtZXN0cmUrJy8nK25pdilcclxuICAgICAgICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2NhbGVuZGFyLzEwNy85JylcclxuICAgICAgICAgICAgYWxsdGltZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgLy8gVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIC8vICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdTb21lIEVycm9yISEnLFxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFsbHRpbWVzKClcclxuICAgIGNvbnN0IGVkaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBzdGFydCA9IGV2ZW50LnN0YXJ0LmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgICAgIGlmIChldmVudC5lbmQpIHtcclxuICAgICAgICAgICAgZW5kID0gZXZlbnQuZW5kLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVuZCA9IHN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZF9lbXB0aW1lID0gZXZlbnQuaWQ7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdGFydCcsc3RhcnQpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbmQnLGVuZClcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbnNfZWRpdEV2ZW50RGF0ZS8nK2lkX2VtcHRpbWUsZm9ybURhdGEpXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlcXVlc3QuZGF0YSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnKTsgXHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdhZGRFdmVudFNvdXJjZScsIGFsbHRpbWUpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgc2VtZXN0cmUgPSByZXF1ZXN0LmRhdGEgICAgICAgICAgICBcclxuICAgICAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChzZW1lc3RyZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0dCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYxLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgbml2MSA9IHJlcXVlc3R0LmRhdGEgIFxyXG4gICAgICAgICAgICAkKCcjbml2MScpLmh0bWwobml2MSkuc2VsZWN0MigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjbml2MVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2MSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgLy8gbml2ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYobml2MSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5pdiA9IG5pdjE7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2Mi8nK25pdjEpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuaXYgPSAwO1xyXG4gICAgICAgICAgICAvLyBhbGx0aW1lID0gW107XHJcbiAgICAgICAgICAgIC8vICQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcigncmVmZXRjaEV2ZW50cycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGx0aW1lID0gW107XHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnKTsgXHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdhZGRFdmVudFNvdXJjZScsIGFsbHRpbWUpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI25pdjJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdjIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKG5pdjIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBuaXYgPSBuaXYyO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjMvJytuaXYyKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbml2ID0gJCgnI25pdjEnKS52YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjbml2M1wiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2MyA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYobml2MyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5pdiA9IG5pdjM7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5pdiA9ICQoJyNuaXYyJykudmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ3JlZmV0Y2hFdmVudHMnKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2hhbmdlJywnI21vZHVsZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX21vZHVsZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZWxlbWVudC8nK2lkX21vZHVsZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdjaGFuZ2UnLCcjbmF0dXJlX3NlYW5jZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX25hdHVyZV9zZWFuY2UgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCBpZF9lbGVtZW50ID0gJCgnI2VsZW1lbnQnKS52YWwoKTtcclxuICAgICAgICBpZihpZF9lbGVtZW50ICE9IFwiXCIgJiYgaWRfbmF0dXJlX3NlYW5jZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZW5zZWlnbmFudHNCeVByb2dyYW1tZS8nK2lkX2VsZW1lbnQrJy8nK2lkX25hdHVyZV9zZWFuY2UpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBwaWxscygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbnNlaWduYW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2hhbmdlJywnI2VsZW1lbnQnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9lbGVtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgaWRfbmF0dXJlX3NlYW5jZSA9ICQoJyNuYXR1cmVfc2VhbmNlJykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2VsZW1lbnQgIT0gXCJcIiAmJiBpZF9uYXR1cmVfc2VhbmNlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbnNlaWduYW50c0J5UHJvZ3JhbW1lLycraWRfZWxlbWVudCsnLycraWRfbmF0dXJlX3NlYW5jZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIHBpbGxzKClcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Vuc2VpZ25hbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsJy5mb3JtX2FkZF9wbGFubmluZycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbl9zZW1haW5lJywgY3VycmVudHdlZWspO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF5JywgY3VycmVudERheSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2dyb3VwZScsIG5pdilcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNhZGRmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIi5mb3JtX2FkZF9wbGFubmluZyAuYnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25zX2NhbGVuZGFyX2FkZCcsZm9ybURhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjYWRkZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7IFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgJChcIiNhZGRmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICQoJyNhZGRmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjYWRkZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNhZGRmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCcuZm9ybV91cGRhdGVfcGxhbm5pbmcnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ25fc2VtYWluZScsIGN1cnJlbnR3ZWVrKTtcclxuICAgICAgICAvLy8vLy8vLy8vLy9cclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiLmZvcm1fdXBkYXRlX3BsYW5uaW5nIC5idG4gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbnNfY2FsZW5kYXJfZWRpdC8nK2lkX3BsYW5uaW5nLGZvcm1EYXRhKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj4ke2RhdGF9PC9kaXY+YFxyXG4gICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICQoJyN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfSwgNDAwMCk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNwbGFubmluZ19kZWxldGUnLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkX3BsYW5uaW5nKXtcclxuICAgICAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICAgICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3BsYW5uaW5nX2VucmVnaXN0cmUgLnVwZGF0ZV9wbGFubmluZyBpXCIpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9kZWxldGVfcGxhbm5pbmcvJytpZF9wbGFubmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwnKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsJyNpbXBvcnQnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoJyNpbXBvcnRfZW5fbWFzc2UnKS5tb2RhbChcInNob3dcIik7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI3BsYW5uaW5nX2NhbnZhcycsIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wbGFubmluZ19jYW52YXMnLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiI2ltcG9ydF9wbGFubmluZ19zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNwbGFubmluZ19lbnJlZ2lzdHJlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2ltcG9ydCcsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCcjZ2VuZXJlcicsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3NlbWVzdHJlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWb3VzIGRldmV6IGNob2lzaXIgU2VtZXN0cmUgZXQgTml2ZWF1ISEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8vLy8vXHJcbiAgICAgICAgLy8gbGV0IGNybnRkYXkgPSBtb21lbnQoJCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKCdnZXREYXRlJykpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IFZyYWltZW50IEfDqW7DqXJlciBsZXMgcGxhbmlmaWNhdGlvbnMgZGUgY2V0dGUgc2VtYWluZSA/Jyk7XHJcbiAgICAgICAgaWYgKHJlcyA9PSAxKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnR3ZWVrID0gbW9tZW50KCQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcignZ2V0RGF0ZScpLCBcIk1NRERZWVlZXCIpLmlzb1dlZWsoKTtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbnNlbWFpbmUnLGN1cnJlbnR3ZWVrKVxyXG4gICAgICAgICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2NybnRkYXknLGNybnRkYXkpXHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2dlbmVyZXIgaVwiKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5hZGRDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvZ2VuZXJlcl9wbGFubmluZy8nK2lkX3NlbWVzdHJlKycvJytuaXYsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9nZW5lcmVyX3BsYW5uaW5nLzEwNy85JywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLnJlbW92ZUNsYXNzKFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcjc2VhbmNlX2Fic2VuY2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfcGxhbm5pbmcpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIFNlbGVjdGlvbm5lciB1bmUgU2VhbmNlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cub3BlbignL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvR2V0QWJzZW5jZUJ5R3JvdXBlLycraWRfcGxhbm5pbmcsICdfYmxhbmsnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcjZmljaGVfc2VxdWVuY2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfcGxhbm5pbmcpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIFNlbGVjdGlvbm5lciB1bmUgU2VhbmNlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cub3BlbignL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvR2V0c2VxdWVuY2UvJytpZF9wbGFubmluZywgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgXHJcbn0pXHJcblxyXG4vLyBjb25zdCBhbGxMb2NhbGVzID0gcmVxdWlyZShcIi4uL2luY2x1ZGVzL2xvY2FsLWFsbFwiKTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcbnZhciBmYWN0b3JpZXMgPSB7fTtcblxudmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uIChDLCBhcmdzTGVuZ3RoLCBhcmdzKSB7XG4gIGlmICghaGFzT3duKGZhY3RvcmllcywgYXJnc0xlbmd0aCkpIHtcbiAgICBmb3IgKHZhciBsaXN0ID0gW10sIGkgPSAwOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSBsaXN0W2ldID0gJ2FbJyArIGkgKyAnXSc7XG4gICAgZmFjdG9yaWVzW2FyZ3NMZW5ndGhdID0gRnVuY3Rpb24oJ0MsYScsICdyZXR1cm4gbmV3IEMoJyArIGpvaW4obGlzdCwgJywnKSArICcpJyk7XG4gIH0gcmV0dXJuIGZhY3Rvcmllc1thcmdzTGVuZ3RoXShDLCBhcmdzKTtcbn07XG5cbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLmJpbmQgfHwgZnVuY3Rpb24gYmluZCh0aGF0IC8qICwgLi4uYXJncyAqLykge1xuICB2YXIgRiA9IGFDYWxsYWJsZSh0aGlzKTtcbiAgdmFyIFByb3RvdHlwZSA9IEYucHJvdG90eXBlO1xuICB2YXIgcGFydEFyZ3MgPSBhcnJheVNsaWNlKGFyZ3VtZW50cywgMSk7XG4gIHZhciBib3VuZEZ1bmN0aW9uID0gZnVuY3Rpb24gYm91bmQoLyogYXJncy4uLiAqLykge1xuICAgIHZhciBhcmdzID0gY29uY2F0KHBhcnRBcmdzLCBhcnJheVNsaWNlKGFyZ3VtZW50cykpO1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgYm91bmRGdW5jdGlvbiA/IGNvbnN0cnVjdChGLCBhcmdzLmxlbmd0aCwgYXJncykgOiBGLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9O1xuICBpZiAoaXNPYmplY3QoUHJvdG90eXBlKSkgYm91bmRGdW5jdGlvbi5wcm90b3R5cGUgPSBQcm90b3R5cGU7XG4gIHJldHVybiBib3VuZEZ1bmN0aW9uO1xufTtcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG52YXIgRGF0ZVByb3RvdHlwZSA9IERhdGUucHJvdG90eXBlO1xudmFyIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgdW4kRGF0ZVRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRGF0ZVByb3RvdHlwZVtUT19TVFJJTkddKTtcbnZhciBnZXRUaW1lID0gdW5jdXJyeVRoaXMoRGF0ZVByb3RvdHlwZS5nZXRUaW1lKTtcblxuLy8gYERhdGUucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZGF0ZS5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChTdHJpbmcobmV3IERhdGUoTmFOKSkgIT0gSU5WQUxJRF9EQVRFKSB7XG4gIHJlZGVmaW5lKERhdGVQcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0VGltZSh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB1biREYXRlVG9TdHJpbmcodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kJyk7XG5cbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG4kKHsgdGFyZ2V0OiAnRnVuY3Rpb24nLCBwcm90bzogdHJ1ZSB9LCB7XG4gIGJpbmQ6IGJpbmRcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwicGlsbHMiLCJvbiIsImUiLCJ0YWIiLCJnZXRNb2R1bGVCeVNlbWVzdHJlIiwiYXhpb3MiLCJnZXQiLCJ2YWwiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwiaHRtbCIsInNlbGVjdDIiLCJpZF9zZW1lc3RyZSIsIm5pdiIsImN1cnJlbnR3ZWVrIiwiaGV1cl9kZWJ1dCIsImhldXJfZmluIiwiZCIsIkRhdGUiLCJkYXkiLCJnZXREYXkiLCJjdXJyZW50RGF5IiwiaWRfcGxhbm5pbmciLCJhbGx0aW1lIiwiZnVsbENhbGVuZGFyIiwibGFuZyIsImN1c3RvbUJ1dHRvbnMiLCJteUN1c3RvbUJ1dHRvbiIsInRleHQiLCJjbGljayIsImN1cnJlbnRXZWVrIiwibW9tZW50IiwiaXNvV2VlayIsImN1cnJlbnREYXRlIiwiZm9ybWF0Iiwid2luZG93Iiwib3BlbiIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJldmVudHMiLCJoZWFkZXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJkZWZhdWx0VmlldyIsImVkaXRhYmxlIiwiZXZlbnRMaW1pdCIsInNlbGVjdGFibGUiLCJzZWxlY3RIZWxwZXIiLCJuYXZMaW5rcyIsImhlaWdodCIsImFsbERheVNsb3QiLCJsb2NhbGUiLCJmaXJzdERheSIsIm1pblRpbWUiLCJtYXhUaW1lIiwic2VsZWN0Iiwic3RhcnQiLCJlbmQiLCJkYXRlIiwidGhlbiIsInN1Y2Nlc3MiLCJtb2RhbCIsImVyciIsImV2ZW50UmVuZGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiYmluZCIsImlkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImV2ZW50RHJvcCIsImRlbHRhIiwicmV2ZXJ0RnVuYyIsImVkaXQiLCJldmVudFJlc2l6ZSIsImRheURlbHRhIiwibWludXRlRGVsdGEiLCJhbGx0aW1lcyIsInBvc3QiLCJpZF9lbXB0aW1lIiwiYXBwZW5kIiwiaWRfZXRhYiIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsInNlbWVzdHJlIiwicmVxdWVzdHQiLCJuaXYxIiwibml2MiIsIm5pdjMiLCJpZF9tb2R1bGUiLCJpZF9uYXR1cmVfc2VhbmNlIiwiaWRfZWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm1vZGFsQWxlcnQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicHJlcGVuZCIsInNldFRpbWVvdXQiLCJtZXNzYWdlIiwicmVzIiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=