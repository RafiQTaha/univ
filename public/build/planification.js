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

  var edit_groupe = 0;
  var id_semestre = false;
  var professeur = null;
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
            window.open('/planification/planifications/print_planning/' + id_semestre + '/' + niv + '/' + currentDate + '/' + professeur, '_blank'); // window.open('/planification/planifications/print_planning/'+id_semestre+'/'+niv+'/'+currentWeek+'/'+currentDate+'/'+professeur, '_blank');
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
        edit_groupe = 0;
        currentweek = moment(event.start, "MMDDYYYY").isoWeek();
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
      var formData, request;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              formData = new FormData();
              formData.append('semestre', $("#semestre").val());
              formData.append('niv', niv);
              formData.append('professeur', professeur);
              _context2.next = 7;
              return axios.post('/planification/planifications/calendar_planning', formData);

            case 7:
              request = _context2.sent;
              // const request = await  axios.post('/planification/planifications/calendar/'+id_semestre+'/'+niv)
              // const request = await  axios.post('/planification/planifications/calendar/'+id_semestre+'/'+niv)
              alltime = request.data;
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);
              _context2.next = 18;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              alltime = [];
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime); // console.log(error)
              // Toast.fire({
              //     icon: 'error',
              //     title: 'Some Error!!',
              // })

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
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
            $('#niv1').html('').select2();
            $('#niv2').html('').select2();
            $('#niv3').html('').select2();
            $('#semestre').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 13:
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
            $('#niv1').html('').select2();
            $('#niv2').html('').select2();
            $('#niv3').html('').select2();
            $('#semestre').html('').select2();
            $('#promotion').html(response).select2();

          case 12:
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
            niv = 0;

            if (!(id_promotion != "")) {
              _context6.next = 18;
              break;
            }

            _context6.next = 10;
            return axios.get('/api/semestre/' + id_promotion);

          case 10:
            request = _context6.sent;
            semestre = request.data;
            $('#semestre').html(semestre).select2();
            _context6.next = 15;
            return axios.get('/api/niv1/' + id_promotion);

          case 15:
            requestt = _context6.sent;
            niv1 = requestt.data;
            $('#niv1').html(niv1).select2();

          case 18:
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
  $("#professeur").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            professeur = $(this).val();

            if (professeur == "") {
              professeur = null;
            }

            if (id_semestre != "") {
              alltimes();
            } else {
              alltime = [];
              $("#calendar").fullCalendar('removeEvents');
              $("#calendar").fullCalendar('addEventSource', alltime);
            }

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("#niv1").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var niv1, response, request;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            niv1 = $(this).val(); // niv = $(this).val();

            response = "";

            if (!(niv1 != "")) {
              _context9.next = 10;
              break;
            }

            niv = niv1;
            _context9.next = 6;
            return axios.get('/api/niv2/' + niv1);

          case 6:
            request = _context9.sent;
            response = request.data;
            _context9.next = 11;
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
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#niv2").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var niv2, request;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            niv2 = $(this).val();

            if (!(niv2 != "")) {
              _context10.next = 9;
              break;
            }

            niv = niv2;
            _context10.next = 5;
            return axios.get('/api/niv3/' + niv2);

          case 5:
            request = _context10.sent;
            response = request.data;
            _context10.next = 10;
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
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $("#niv3").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var niv3;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
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
            return _context11.stop();
        }
      }
    }, _callee11, this);
  })));
  $("body").on('change', '#module', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var id_module, response, request;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            id_module = $(this).val();
            response = "";

            if (!(id_module != "")) {
              _context12.next = 7;
              break;
            }

            _context12.next = 5;
            return axios.get('/api/element/' + id_module);

          case 5:
            request = _context12.sent;
            response = request.data;

          case 7:
            $('#element').html(response).select2();

          case 8:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  })));
  $("body").on('change', '#nature_seance', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    var id_nature_seance, id_element, request;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            id_nature_seance = $(this).val();
            id_element = $('#element').val();

            if (!(id_element != "" && id_nature_seance != "")) {
              _context13.next = 8;
              break;
            }

            _context13.next = 5;
            return axios.get('/api/enseignantsByProgramme/' + id_element + '/' + id_nature_seance);

          case 5:
            request = _context13.sent;
            response = request.data;
            pills();

          case 8:
            $('#enseignant').html(response).select2();

          case 9:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  })));
  $("body").on('change', '#element', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
    var id_element, id_nature_seance, response, request;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            id_element = $(this).val();
            id_nature_seance = $('#nature_seance').val();
            response = "";

            if (!(id_element != "" && id_nature_seance != "")) {
              _context14.next = 9;
              break;
            }

            _context14.next = 6;
            return axios.get('/api/enseignantsByProgramme/' + id_element + '/' + id_nature_seance);

          case 6:
            request = _context14.sent;
            response = request.data;
            pills();

          case 9:
            $('#enseignant').html(response).select2();

          case 10:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, this);
  })));
  $("body").on('submit', '.form_add_planning', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var formData, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
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
              _context15.prev = 10;
              _context15.next = 13;
              return axios.post('/planification/planifications/planifications_calendar_add', formData);

            case 13:
              request = _context15.sent;
              data = request.data;
              $("#addform_planif-modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              alltimes();
              setTimeout(function () {
                //    $("#addform_planif-modal .modal-body .alert").remove();
                $('#addform_planif-modal').modal("hide");
              }, 3000);
              _context15.next = 27;
              break;

            case 21:
              _context15.prev = 21;
              _context15.t0 = _context15["catch"](10);
              message = _context15.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#addform_planif-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 27:
              setTimeout(function () {
                $("#addform_planif-modal .modal-body .alert").remove();
              }, 3000);

            case 28:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this, [[10, 21]]);
    }));

    return function (_x2) {
      return _ref15.apply(this, arguments);
    };
  }());
  $("body").on('submit', '.form_update_planning', /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
      var formData, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              e.preventDefault();
              formData = new FormData(this);
              formData.append('edit_groupe', edit_groupe);
              formData.append('n_semaine', currentweek); ////////////

              modalAlert = $("#updateform_planif-modal .modal-body .alert");
              modalAlert.remove();
              icon = $(".form_update_planning .btn_update_planning i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context16.prev = 8;
              _context16.next = 11;
              return axios.post('/planification/planifications/planifications_calendar_edit/' + id_planning, formData);

            case 11:
              request = _context16.sent;
              data = request.data;
              $("#updateform_planif-modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              alltimes();
              setTimeout(function () {
                $("#updateform_planif-modal .modal-body .alert").remove();
                $('#updateform_planif-modal').modal("hide");
              }, 4000);
              _context16.next = 25;
              break;

            case 19:
              _context16.prev = 19;
              _context16.t0 = _context16["catch"](8);
              message = _context16.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#updateform_planif-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, this, [[8, 19]]);
    }));

    return function (_x3) {
      return _ref16.apply(this, arguments);
    };
  }());
  $('body').on('click', '#planning_delete', /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
      var icon, res, request, _response, message;

      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              e.preventDefault();
              icon = $("body #planning_delete i");

              if (!id_planning) {
                _context17.next = 22;
                break;
              }

              res = confirm('Vous voulez vraiment supprimer cette enregistrement ?');

              if (!(res == 1)) {
                _context17.next = 22;
                break;
              }

              // const icon = $("#planning_enregistre .update_planning i");
              icon.removeClass('fa-trash').addClass("fa-spinner fa-spin");
              _context17.prev = 6;
              _context17.next = 9;
              return axios.post('/planification/planifications/delete_planning/' + id_planning);

            case 9:
              request = _context17.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: _response
              });
              alltimes();
              icon.addClass('fa-trash').removeClass("fa-spinner fa-spin ");
              _context17.next = 21;
              break;

            case 16:
              _context17.prev = 16;
              _context17.t0 = _context17["catch"](6);
              message = _context17.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-trash').removeClass("fa-spinner fa-spin ");

            case 21:
              setTimeout(function () {
                $('#updateform_planif-modal').modal("hide");
              }, 1000);

            case 22:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[6, 16]]);
    }));

    return function (_x4) {
      return _ref17.apply(this, arguments);
    };
  }());
  $("body").on('click', '#import', /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e) {
      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              e.preventDefault();
              $('#import_en_masse').modal("show");

            case 2:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }));

    return function (_x5) {
      return _ref18.apply(this, arguments);
    };
  }());
  $('body').on('click', '#planning_canvas', function () {
    window.open('/planification/planifications/planning_canvas', '_blank');
  });
  $("#import_planning_save").on("submit", /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e) {
      var formData, modalAlert, icon, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#import_en_masse .modal-body .alert");
              modalAlert.remove();
              icon = $("#planning_enregistre i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context19.prev = 6;
              _context19.next = 9;
              return axios.post('/planification/planifications/import', formData);

            case 9:
              request = _context19.sent;
              _response2 = request.data;
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n                    <p>".concat(_response2, "</p>\n                </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              _context19.next = 22;
              break;

            case 15:
              _context19.prev = 15;
              _context19.t0 = _context19["catch"](6);
              message = _context19.t0.response.data;
              console.log(_context19.t0, _context19.t0.response);
              modalAlert.remove();
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
              setTimeout(function () {
                $("#import_en_masse .modal-body .alert").remove();
              }, 4000);

            case 23:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this, [[6, 15]]);
    }));

    return function (_x6) {
      return _ref19.apply(this, arguments);
    };
  }());
  $("body").on('click', '#generer', /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(e) {
      var res, formData, icon, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              e.preventDefault();

              if (id_semestre) {
                _context20.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Vous devez choisir Semestre et Niveau!!'
              });
              return _context20.abrupt("return");

            case 4:
              //////
              // let crntday = moment($('#calendar').fullCalendar('getDate')).format('YYYY-MM-DD')
              res = confirm('Vous voulez Vraiment Générer les planifications de cette semaine ?');

              if (!(res == 1)) {
                _context20.next = 25;
                break;
              }

              currentweek = moment($('#calendar').fullCalendar('getDate'), "MMDDYYYY").isoWeek();
              formData = new FormData();
              formData.append('nsemaine', currentweek); // formData.append('crntday',crntday)

              icon = $("#generer i");
              icon.removeClass('fab fa-get-pocket').addClass("fas fa-spinner fa-spin");
              _context20.prev = 11;
              _context20.next = 14;
              return axios.post('/planification/planifications/generer_planning/' + id_semestre + '/' + niv, formData);

            case 14:
              request = _context20.sent;
              // const request = await axios.post('/planification/planifications/generer_planning/107/9', formData);
              _response3 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response3
              });
              icon.addClass('fab fa-get-pocket').removeClass("fas fa-spinner fa-spin ");
              _context20.next = 25;
              break;

            case 20:
              _context20.prev = 20;
              _context20.t0 = _context20["catch"](11);
              message = _context20.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fab fa-get-pocket').removeClass("fas fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, null, [[11, 20]]);
    }));

    return function (_x7) {
      return _ref20.apply(this, arguments);
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
  $("body").on('change', "#niveau1", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
    var niveau1, response, request;
    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            niveau1 = $(this).val(); // niv = $(this).val();

            response = "";

            if (!(niveau1 != "")) {
              _context21.next = 10;
              break;
            }

            edit_groupe = niveau1;
            _context21.next = 6;
            return axios.get('/api/niv2/' + niveau1);

          case 6:
            request = _context21.sent;
            response = request.data;
            _context21.next = 11;
            break;

          case 10:
            edit_groupe = 0;

          case 11:
            $('#niveau3').html("").select2();
            $('#niveau2').html(response).select2();

          case 13:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, this);
  })));
  $("body").on('change', "#niveau2", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
    var niveau2, request;
    return regeneratorRuntime.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            niveau2 = $(this).val();

            if (!(niveau2 != "")) {
              _context22.next = 9;
              break;
            }

            edit_groupe = niveau2;
            _context22.next = 5;
            return axios.get('/api/niv3/' + niveau2);

          case 5:
            request = _context22.sent;
            response = request.data;
            _context22.next = 10;
            break;

          case 9:
            edit_groupe = $('#niveau2').val();

          case 10:
            $('#niveau3').html(response).select2();

          case 11:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, this);
  })));
  $("body").on('change', "#niveau3", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
    var niveau3;
    return regeneratorRuntime.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            niveau3 = $(this).val();

            if (niveau3 != "") {
              edit_groupe = niveau3;
            } else {
              edit_groupe = $('#niveau2').val();
            }

          case 2:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, this);
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbmlmaWNhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVc7QUFDckJDLElBQUFBLEtBQUssRUFBRSxJQURjO0FBRXJCQyxJQUFBQSxRQUFRLEVBQUUsU0FGVztBQUdyQkMsSUFBQUEsaUJBQWlCLEVBQUUsS0FIRTtBQUlyQkMsSUFBQUEsS0FBSyxFQUFFLElBSmM7QUFLckJDLElBQUFBLGdCQUFnQixFQUFFLElBTEc7QUFNckJDLElBQUFBLE9BQU8sRUFBRSxpQkFBQ0wsS0FBRCxFQUFXO0FBQ2hCQSxNQUFBQSxLQUFLLENBQUNNLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDUixJQUFJLENBQUNTLFNBQTFDO0FBQ0FQLE1BQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1UsV0FBMUM7QUFDSDtBQVRvQixHQUFYLENBQWQ7O0FBV0EsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNoQmYsSUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVZ0IsRUFBVixDQUFhLE9BQWIsRUFBcUIsY0FBckIsRUFBcUMsVUFBVUMsQ0FBVixFQUFhO0FBQzlDakIsTUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsR0FBUixDQUFZLE1BQVo7QUFDSCxLQUZEO0FBR0gsR0FKRDs7QUFLQSxNQUFNQyxtQkFBbUI7QUFBQSx1RUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNGQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxpQkFBZXJCLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZXNCLEdBQWYsRUFBekIsQ0FERTs7QUFBQTtBQUNsQkMsY0FBQUEsT0FEa0I7QUFFeEJDLGNBQUFBLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxJQUFuQjtBQUNBekIsY0FBQUEsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUMwQixJQUFuQyxDQUF3Q0YsUUFBeEMsRUFBa0RHLE9BQWxEOztBQUh3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQlIsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQU1BLE1BQUlTLFdBQVcsR0FBRyxDQUFsQjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxLQUFsQjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxJQUFqQjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxDQUFWO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLEtBQWxCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLEtBQWpCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFDQSxNQUFNQyxDQUFDLEdBQUcsSUFBSUMsSUFBSixFQUFWO0FBQ0EsTUFBSUMsR0FBRyxHQUFHRixDQUFDLENBQUNHLE1BQUYsRUFBVjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxLQUFqQjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxLQUFsQjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxFQUFkO0FBQ0F6QyxFQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWUwQyxZQUFmLENBQTRCO0FBQ3hCQyxJQUFBQSxJQUFJLEVBQUUsSUFEa0I7QUFFeEJDLElBQUFBLGFBQWEsRUFBRTtBQUNYQyxNQUFBQSxjQUFjLEVBQUU7QUFDWkMsUUFBQUEsSUFBSSxFQUFFLFVBRE07QUFFWkMsUUFBQUEsS0FBSyxFQUFFLGlCQUFZO0FBQ2YsY0FBSUMsV0FBVyxHQUFHQyxNQUFNLENBQUNqRCxDQUFDLENBQUMsV0FBRCxDQUFELENBQWUwQyxZQUFmLENBQTRCLFNBQTVCLENBQUQsRUFBeUMsVUFBekMsQ0FBTixDQUEyRFEsT0FBM0QsRUFBbEI7QUFDQSxjQUFJQyxXQUFXLEdBQUdGLE1BQU0sQ0FBQ2pELENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTBDLFlBQWYsQ0FBNEIsU0FBNUIsQ0FBRCxDQUFOLENBQStDVSxNQUEvQyxDQUFzRCxZQUF0RCxDQUFsQjs7QUFDQSxjQUFHdkIsV0FBVyxJQUFJLEVBQWxCLEVBQXFCO0FBQ2pCd0IsWUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksa0RBQWdEekIsV0FBaEQsR0FBNEQsR0FBNUQsR0FBZ0VFLEdBQWhFLEdBQW9FLEdBQXBFLEdBQXdFb0IsV0FBeEUsR0FBb0YsR0FBcEYsR0FBd0ZyQixVQUFwRyxFQUFnSCxRQUFoSCxFQURpQixDQUVqQjtBQUNILFdBSEQsTUFHSztBQUNEM0IsWUFBQUEsS0FBSyxDQUFDb0QsSUFBTixDQUFXO0FBQ1BDLGNBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGNBQUFBLEtBQUssRUFBRTtBQUZBLGFBQVg7QUFJSDtBQUNKO0FBZFc7QUFETCxLQUZTO0FBb0J4QkMsSUFBQUEsTUFBTSxFQUFFakIsT0FwQmdCO0FBcUJ4QmtCLElBQUFBLE1BQU0sRUFBRTtBQUNKQyxNQUFBQSxJQUFJLEVBQUUsZ0NBREY7QUFFSkMsTUFBQUEsTUFBTSxFQUFFLE9BRko7QUFHSkMsTUFBQUEsS0FBSyxFQUFFO0FBSEgsS0FyQmdCO0FBMEJ4QkMsSUFBQUEsV0FBVyxFQUFFLFlBMUJXO0FBMkJ4QkMsSUFBQUEsUUFBUSxFQUFFLElBM0JjO0FBNEJ4QkMsSUFBQUEsVUFBVSxFQUFFLElBNUJZO0FBNEJOO0FBQ2xCQyxJQUFBQSxVQUFVLEVBQUUsSUE3Qlk7QUE4QnhCQyxJQUFBQSxZQUFZLEVBQUUsSUE5QlU7QUErQnhCQyxJQUFBQSxRQUFRLEVBQUUsSUEvQmM7QUFnQ3hCQyxJQUFBQSxNQUFNLEVBQUUsR0FoQ2dCO0FBaUN4QkMsSUFBQUEsVUFBVSxFQUFFLEtBakNZO0FBa0N4QkMsSUFBQUEsTUFBTSxFQUFFLElBbENnQjtBQW1DeEJDLElBQUFBLFFBQVEsRUFBRSxDQW5DYztBQW9DeEJDLElBQUFBLE9BQU8sRUFBRSxVQXBDZTtBQXFDeEJDLElBQUFBLE9BQU8sRUFBRSxVQXJDZTtBQXNDeEJDLElBQUFBLE1BQU0sRUFBRSxnQkFBVUMsS0FBVixFQUFpQkMsR0FBakIsRUFBcUJDLElBQXJCLEVBQTJCO0FBQy9CLFVBQUc5RSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVzQixHQUFmLE1BQXdCLEVBQTNCLEVBQThCO0FBQzFCaUIsUUFBQUEsVUFBVSxHQUFHVSxNQUFNLENBQUMyQixLQUFELENBQU4sQ0FBY3hCLE1BQWQsQ0FBcUIsWUFBckIsQ0FBYjtBQUNBcEIsUUFBQUEsV0FBVyxHQUFHaUIsTUFBTSxDQUFDMkIsS0FBRCxFQUFRLFVBQVIsQ0FBTixDQUEwQjFCLE9BQTFCLEVBQWQ7QUFDQWpCLFFBQUFBLFVBQVUsR0FBRWdCLE1BQU0sQ0FBQzJCLEtBQUQsQ0FBTixDQUFjeEIsTUFBZCxDQUFxQixPQUFyQixDQUFaO0FBQ0FsQixRQUFBQSxRQUFRLEdBQUVlLE1BQU0sQ0FBQzRCLEdBQUQsQ0FBTixDQUFZekIsTUFBWixDQUFtQixPQUFuQixDQUFWO0FBQ0FoQyxRQUFBQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSx1REFBcURyQixDQUFDLENBQUMsV0FBRCxDQUFELENBQWVzQixHQUFmLEVBQS9ELEVBQ0N5RCxJQURELENBQ00sVUFBQUMsT0FBTyxFQUFJO0FBQ2JoRixVQUFBQSxDQUFDLENBQUMscUNBQUQsQ0FBRCxDQUF5QzBCLElBQXpDLENBQThDc0QsT0FBTyxDQUFDdkQsSUFBdEQ7QUFDQXpCLFVBQUFBLENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9Dc0IsR0FBcEMsQ0FBd0NXLFVBQXhDO0FBQ0FqQyxVQUFBQSxDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ3NCLEdBQWxDLENBQXNDWSxRQUF0QztBQUNBbEMsVUFBQUEsQ0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0MyQixPQUFsQztBQUNBUixVQUFBQSxtQkFBbUI7QUFDbkJuQixVQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQmlGLEtBQTNCLENBQWlDLE1BQWpDO0FBQ0FsRSxVQUFBQSxLQUFLO0FBQ1IsU0FURCxXQVVPLFVBQUFtRSxHQUFHLEVBQUksQ0FDVjtBQUNILFNBWkQ7QUFhSDtBQUNKLEtBMUR1QjtBQTJEeEJDLElBQUFBLFdBQVcsRUFBRSxxQkFBVUMsS0FBVixFQUFpQkMsT0FBakIsRUFBMEI7QUFDbkNBLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLFVBQWIsRUFBeUIsWUFBWTtBQUNqQzFELFFBQUFBLFdBQVcsR0FBRyxDQUFkO0FBQ0FJLFFBQUFBLFdBQVcsR0FBR2lCLE1BQU0sQ0FBQ21DLEtBQUssQ0FBQ1IsS0FBUCxFQUFjLFVBQWQsQ0FBTixDQUFnQzFCLE9BQWhDLEVBQWQ7QUFDQVYsUUFBQUEsV0FBVyxHQUFHNEMsS0FBSyxDQUFDRyxFQUFwQjs7QUFDQSxZQUFJL0MsV0FBSixFQUFpQjtBQUNiLGNBQUlnRCxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFmO0FBQ0FyRSxVQUFBQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSw0REFBMERtQixXQUFwRSxFQUNDdUMsSUFERCxDQUNNLFVBQUFDLE9BQU8sRUFBSTtBQUNiaEYsWUFBQUEsQ0FBQyxDQUFDLDJDQUFELENBQUQsQ0FBK0MwQixJQUEvQyxDQUFvRHNELE9BQU8sQ0FBQ3ZELElBQTVEO0FBQ0F6QixZQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQzJCLE9BQXJDO0FBQ0EzQixZQUFBQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QmlGLEtBQTlCLENBQW9DLE1BQXBDO0FBQ0FsRSxZQUFBQSxLQUFLO0FBQ1IsV0FORCxXQU9PLFVBQUFtRSxHQUFHLEVBQUksQ0FDVjtBQUNILFdBVEQ7QUFVSDtBQUNKLE9BakJEO0FBa0JILEtBOUV1QjtBQStFeEJRLElBQUFBLFNBQVMsRUFBRSxtQkFBVU4sS0FBVixFQUFpQk8sS0FBakIsRUFBd0JDLFVBQXhCLEVBQW9DO0FBQzNDQyxNQUFBQSxJQUFJLENBQUNULEtBQUQsQ0FBSjtBQUNILEtBakZ1QjtBQWtGeEJVLElBQUFBLFdBQVcsRUFBRSxxQkFBVVYsS0FBVixFQUFpQlcsUUFBakIsRUFBMkJDLFdBQTNCLEVBQXdDSixVQUF4QyxFQUFvRDtBQUFFO0FBQy9EQyxNQUFBQSxJQUFJLENBQUNULEtBQUQsQ0FBSjtBQUNIO0FBcEZ1QixHQUE1QjtBQXNGQXBGLEVBQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIyQixPQUFqQixHQXpIMEIsQ0EwSDFCOztBQUNBM0IsRUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZMkIsT0FBWjs7QUFDQSxNQUFNc0UsUUFBUTtBQUFBLHdFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUxULGNBQUFBLFFBRkssR0FFTSxJQUFJQyxRQUFKLEVBRk47QUFHVEQsY0FBQUEsUUFBUSxDQUFDVSxNQUFULENBQWdCLFVBQWhCLEVBQTRCbEcsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlc0IsR0FBZixFQUE1QjtBQUNBa0UsY0FBQUEsUUFBUSxDQUFDVSxNQUFULENBQWdCLEtBQWhCLEVBQXVCbkUsR0FBdkI7QUFDQXlELGNBQUFBLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixZQUFoQixFQUErQnBFLFVBQS9CO0FBTFM7QUFBQSxxQkFNYVYsS0FBSyxDQUFDK0UsSUFBTixDQUFXLGlEQUFYLEVBQTZEWCxRQUE3RCxDQU5iOztBQUFBO0FBTUhqRSxjQUFBQSxPQU5HO0FBT1Q7QUFDQTtBQUNBa0IsY0FBQUEsT0FBTyxHQUFHbEIsT0FBTyxDQUFDRSxJQUFsQjtBQUNBekIsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEMsWUFBZixDQUE0QixjQUE1QjtBQUNBMUMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEMsWUFBZixDQUE0QixnQkFBNUIsRUFBOENELE9BQTlDO0FBWFM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFhVEEsY0FBQUEsT0FBTyxHQUFHLEVBQVY7QUFDQXpDLGNBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTBDLFlBQWYsQ0FBNEIsY0FBNUI7QUFDQTFDLGNBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTBDLFlBQWYsQ0FBNEIsZ0JBQTVCLEVBQThDRCxPQUE5QyxFQWZTLENBZ0JUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcEJTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJ3RCxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQsQ0E1SDBCLENBbUoxQjs7O0FBQ0EsTUFBTUosSUFBSTtBQUFBLHdFQUFHLGtCQUFPVCxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUUixjQUFBQSxLQUFLLEdBQUdRLEtBQUssQ0FBQ1IsS0FBTixDQUFZeEIsTUFBWixDQUFtQixxQkFBbkIsQ0FBUjs7QUFDQSxrQkFBSWdDLEtBQUssQ0FBQ1AsR0FBVixFQUFlO0FBQ1hBLGdCQUFBQSxHQUFHLEdBQUdPLEtBQUssQ0FBQ1AsR0FBTixDQUFVekIsTUFBVixDQUFpQixxQkFBakIsQ0FBTjtBQUNILGVBRkQsTUFFTztBQUNIeUIsZ0JBQUFBLEdBQUcsR0FBR0QsS0FBTjtBQUNIOztBQUNEd0IsY0FBQUEsVUFBVSxHQUFHaEIsS0FBSyxDQUFDRyxFQUFuQjtBQUNJQyxjQUFBQSxRQVJLLEdBUU0sSUFBSUMsUUFBSixFQVJOO0FBU1RELGNBQUFBLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixPQUFoQixFQUF3QnRCLEtBQXhCO0FBQ0FZLGNBQUFBLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixLQUFoQixFQUFzQnJCLEdBQXRCO0FBVlM7QUFBQTtBQUFBLHFCQVlrQnpELEtBQUssQ0FBQytFLElBQU4sQ0FBVyxnRUFBOERDLFVBQXpFLEVBQW9GWixRQUFwRixDQVpsQjs7QUFBQTtBQVlDakUsY0FBQUEsT0FaRDtBQWFMcEIsY0FBQUEsS0FBSyxDQUFDb0QsSUFBTixDQUFXO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxnQkFBQUEsS0FBSyxFQUFFbEMsT0FBTyxDQUFDRTtBQUZSLGVBQVg7QUFiSztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCTHRCLGNBQUFBLEtBQUssQ0FBQ29ELElBQU4sQ0FBVztBQUNQQyxnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsZ0JBQUFBLEtBQUssRUFBRSxhQUFNakMsUUFBTixDQUFlQztBQUZmLGVBQVg7QUFJQXpCLGNBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTBDLFlBQWYsQ0FBNEIsY0FBNUI7QUFDQTFDLGNBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTBDLFlBQWYsQ0FBNEIsZ0JBQTVCLEVBQThDRCxPQUE5Qzs7QUF2Qks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBSm9ELElBQUk7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUEwQkE3RixFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjJCLE9BQXBCO0FBQ0EzQixFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmdCLEVBQXBCLENBQXVCLFFBQXZCLHVFQUFpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJxRixZQUFBQSxPQUR1QixHQUNickcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsR0FBUixFQURhO0FBRXpCRSxZQUFBQSxRQUZ5QixHQUVkLEVBRmM7O0FBQUEsa0JBRzFCNkUsT0FBTyxJQUFJLEVBSGU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJSGpGLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFrQmdGLE9BQTVCLENBSkc7O0FBQUE7QUFJbkI5RSxZQUFBQSxPQUptQjtBQUt6QkMsWUFBQUEsUUFBUSxHQUFHRCxPQUFPLENBQUNFLElBQW5COztBQUx5QjtBQU83QnpCLFlBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVzBCLElBQVgsQ0FBZ0IsRUFBaEIsRUFBb0JDLE9BQXBCO0FBQ0EzQixZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcwQixJQUFYLENBQWdCLEVBQWhCLEVBQW9CQyxPQUFwQjtBQUNBM0IsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXMEIsSUFBWCxDQUFnQixFQUFoQixFQUFvQkMsT0FBcEI7QUFDQTNCLFlBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTBCLElBQWYsQ0FBb0IsRUFBcEIsRUFBd0JDLE9BQXhCO0FBQ0EzQixZQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEIsSUFBaEIsQ0FBcUIsRUFBckIsRUFBeUJDLE9BQXpCO0FBQ0EzQixZQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEIsSUFBaEIsQ0FBcUJGLFFBQXJCLEVBQStCRyxPQUEvQjs7QUFaNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBakM7QUFjQTNCLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JnQixFQUFoQixDQUFtQixRQUFuQix1RUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25Cc0YsWUFBQUEsWUFEbUIsR0FDSnRHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEdBQVIsRUFESTtBQUVyQkUsWUFBQUEsUUFGcUIsR0FFVixFQUZVOztBQUFBLGtCQUd0QjhFLFlBQVksSUFBSSxFQUhNO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUNsRixLQUFLLENBQUNDLEdBQU4sQ0FBVSxvQkFBa0JpRixZQUE1QixDQUpEOztBQUFBO0FBSWYvRSxZQUFBQSxPQUplO0FBS3JCQyxZQUFBQSxRQUFRLEdBQUdELE9BQU8sQ0FBQ0UsSUFBbkI7O0FBTHFCO0FBT3pCekIsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXMEIsSUFBWCxDQUFnQixFQUFoQixFQUFvQkMsT0FBcEI7QUFDQTNCLFlBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVzBCLElBQVgsQ0FBZ0IsRUFBaEIsRUFBb0JDLE9BQXBCO0FBQ0EzQixZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcwQixJQUFYLENBQWdCLEVBQWhCLEVBQW9CQyxPQUFwQjtBQUNBM0IsWUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEIsSUFBZixDQUFvQixFQUFwQixFQUF3QkMsT0FBeEI7QUFDQTNCLFlBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IwQixJQUFoQixDQUFxQkYsUUFBckIsRUFBK0JHLE9BQS9COztBQVh5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3QjtBQWFBM0IsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmdCLEVBQWhCLENBQW1CLFFBQW5CLHVFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJ1RixZQUFBQSxZQURtQixHQUNKdkcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsR0FBUixFQURJO0FBRXJCRSxZQUFBQSxRQUZxQixHQUVWLEVBRlU7QUFHekJ4QixZQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWUwQixJQUFmLENBQW9CRixRQUFwQixFQUE4QkcsT0FBOUI7QUFDQTNCLFlBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVzBCLElBQVgsQ0FBZ0JGLFFBQWhCLEVBQTBCRyxPQUExQjtBQUNBM0IsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXMEIsSUFBWCxDQUFnQkYsUUFBaEIsRUFBMEJHLE9BQTFCO0FBQ0EzQixZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcwQixJQUFYLENBQWdCRixRQUFoQixFQUEwQkcsT0FBMUI7QUFDQUksWUFBQUEsR0FBRyxHQUFHLENBQU47O0FBUHlCLGtCQVF0QndFLFlBQVksSUFBSSxFQVJNO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBU0NuRixLQUFLLENBQUNDLEdBQU4sQ0FBVSxtQkFBaUJrRixZQUEzQixDQVREOztBQUFBO0FBU2ZoRixZQUFBQSxPQVRlO0FBVXJCaUYsWUFBQUEsUUFBUSxHQUFHakYsT0FBTyxDQUFDRSxJQUFuQjtBQUNBekIsWUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEIsSUFBZixDQUFvQjhFLFFBQXBCLEVBQThCN0UsT0FBOUI7QUFYcUI7QUFBQSxtQkFZRVAsS0FBSyxDQUFDQyxHQUFOLENBQVUsZUFBYWtGLFlBQXZCLENBWkY7O0FBQUE7QUFZZkUsWUFBQUEsUUFaZTtBQWFyQkMsWUFBQUEsSUFBSSxHQUFHRCxRQUFRLENBQUNoRixJQUFoQjtBQUNBekIsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXMEIsSUFBWCxDQUFnQmdGLElBQWhCLEVBQXNCL0UsT0FBdEI7O0FBZHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCO0FBaUJBM0IsRUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlZ0IsRUFBZixDQUFrQixRQUFsQix1RUFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN4QmEsWUFBQUEsV0FBVyxHQUFHN0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsR0FBUixFQUFkOztBQUNBLGdCQUFHTyxXQUFXLElBQUksRUFBbEIsRUFBcUI7QUFDakJvRSxjQUFBQSxRQUFRO0FBQ1gsYUFGRCxNQUVLO0FBQ0R4RCxjQUFBQSxPQUFPLEdBQUcsRUFBVjtBQUNBekMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEMsWUFBZixDQUE0QixjQUE1QjtBQUNBMUMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEMsWUFBZixDQUE0QixnQkFBNUIsRUFBOENELE9BQTlDO0FBQ0g7O0FBUnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVCO0FBVUF6QyxFQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCZ0IsRUFBakIsQ0FBb0IsUUFBcEIsdUVBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUJjLFlBQUFBLFVBQVUsR0FBRzlCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEdBQVIsRUFBYjs7QUFDQSxnQkFBSVEsVUFBVSxJQUFJLEVBQWxCLEVBQXNCO0FBQ2xCQSxjQUFBQSxVQUFVLEdBQUcsSUFBYjtBQUNIOztBQUNELGdCQUFHRCxXQUFXLElBQUksRUFBbEIsRUFBc0I7QUFDbEJvRSxjQUFBQSxRQUFRO0FBQ1gsYUFGRCxNQUVLO0FBQ0R4RCxjQUFBQSxPQUFPLEdBQUcsRUFBVjtBQUNBekMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEMsWUFBZixDQUE0QixjQUE1QjtBQUNBMUMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEMsWUFBZixDQUE0QixnQkFBNUIsRUFBOENELE9BQTlDO0FBQ0g7O0FBWHlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTlCO0FBYUF6QyxFQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnQixFQUFYLENBQWMsUUFBZCx1RUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QwRixZQUFBQSxJQURjLEdBQ1AxRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQixHQUFSLEVBRE8sRUFFcEI7O0FBQ0lFLFlBQUFBLFFBSGdCLEdBR0wsRUFISzs7QUFBQSxrQkFJakJrRixJQUFJLElBQUksRUFKUztBQUFBO0FBQUE7QUFBQTs7QUFLaEIzRSxZQUFBQSxHQUFHLEdBQUcyRSxJQUFOO0FBTGdCO0FBQUEsbUJBTU10RixLQUFLLENBQUNDLEdBQU4sQ0FBVSxlQUFhcUYsSUFBdkIsQ0FOTjs7QUFBQTtBQU1WbkYsWUFBQUEsT0FOVTtBQU9oQkMsWUFBQUEsUUFBUSxHQUFHRCxPQUFPLENBQUNFLElBQW5CO0FBUGdCO0FBQUE7O0FBQUE7QUFTaEJNLFlBQUFBLEdBQUcsR0FBRyxDQUFOLENBVGdCLENBVWhCO0FBQ0E7O0FBWGdCO0FBYXBCLGdCQUFHRixXQUFXLElBQUksRUFBbEIsRUFBcUI7QUFDakJvRSxjQUFBQSxRQUFRO0FBQ1gsYUFGRCxNQUVLO0FBQ0R4RCxjQUFBQSxPQUFPLEdBQUcsRUFBVjtBQUNBekMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEMsWUFBZixDQUE0QixjQUE1QjtBQUNBMUMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEMsWUFBZixDQUE0QixnQkFBNUIsRUFBOENELE9BQTlDO0FBQ0g7O0FBQ0R6QyxZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcwQixJQUFYLENBQWdCLEVBQWhCLEVBQW9CQyxPQUFwQjtBQUNBM0IsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXMEIsSUFBWCxDQUFnQkYsUUFBaEIsRUFBMEJHLE9BQTFCOztBQXJCb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7QUF1QkEzQixFQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdnQixFQUFYLENBQWMsUUFBZCx1RUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QyRixZQUFBQSxJQURjLEdBQ1AzRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQixHQUFSLEVBRE87O0FBQUEsa0JBRWpCcUYsSUFBSSxJQUFJLEVBRlM7QUFBQTtBQUFBO0FBQUE7O0FBR2hCNUUsWUFBQUEsR0FBRyxHQUFHNEUsSUFBTjtBQUhnQjtBQUFBLG1CQUlNdkYsS0FBSyxDQUFDQyxHQUFOLENBQVUsZUFBYXNGLElBQXZCLENBSk47O0FBQUE7QUFJVnBGLFlBQUFBLE9BSlU7QUFLaEJDLFlBQUFBLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxJQUFuQjtBQUxnQjtBQUFBOztBQUFBO0FBT2hCTSxZQUFBQSxHQUFHLEdBQUcvQixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdzQixHQUFYLEVBQU47O0FBUGdCO0FBU3BCLGdCQUFHTyxXQUFXLElBQUksRUFBbEIsRUFBcUI7QUFDakJvRSxjQUFBQSxRQUFRO0FBQ1gsYUFGRCxNQUVLO0FBQ0R4RCxjQUFBQSxPQUFPLEdBQUcsRUFBVjtBQUNBekMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEMsWUFBZixDQUE0QixjQUE1QjtBQUNBMUMsY0FBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEMsWUFBZixDQUE0QixnQkFBNUIsRUFBOENELE9BQTlDO0FBQ0g7O0FBQ0R6QyxZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcwQixJQUFYLENBQWdCRixRQUFoQixFQUEwQkcsT0FBMUI7O0FBaEJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4QjtBQWtCQTNCLEVBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2dCLEVBQVgsQ0FBYyxRQUFkLHVFQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZDRGLFlBQUFBLElBRGMsR0FDUDVHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEdBQVIsRUFETzs7QUFFcEIsZ0JBQUdzRixJQUFJLElBQUksRUFBWCxFQUFlO0FBQ1g3RSxjQUFBQSxHQUFHLEdBQUc2RSxJQUFOO0FBQ0gsYUFGRCxNQUVLO0FBQ0Q3RSxjQUFBQSxHQUFHLEdBQUcvQixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdzQixHQUFYLEVBQU47QUFDSDs7QUFDRCxnQkFBR08sV0FBVyxJQUFJLEVBQWxCLEVBQXFCO0FBQ2pCb0UsY0FBQUEsUUFBUTtBQUNYLGFBRkQsTUFFSztBQUNEeEQsY0FBQUEsT0FBTyxHQUFHLEVBQVY7QUFDQXpDLGNBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTBDLFlBQWYsQ0FBNEIsY0FBNUI7QUFDQTFDLGNBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTBDLFlBQWYsQ0FBNEIsZ0JBQTVCLEVBQThDRCxPQUE5QztBQUNILGFBYm1CLENBY3BCOzs7QUFkb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7QUFnQkF6QyxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsUUFBYixFQUFzQixTQUF0Qix1RUFBaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCNkYsWUFBQUEsU0FEdUIsR0FDWDdHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEdBQVIsRUFEVztBQUV6QkUsWUFBQUEsUUFGeUIsR0FFZCxFQUZjOztBQUFBLGtCQUcxQnFGLFNBQVMsSUFBSSxFQUhhO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUh6RixLQUFLLENBQUNDLEdBQU4sQ0FBVSxrQkFBZ0J3RixTQUExQixDQUpHOztBQUFBO0FBSW5CdEYsWUFBQUEsT0FKbUI7QUFLekJDLFlBQUFBLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxJQUFuQjs7QUFMeUI7QUFPN0J6QixZQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMwQixJQUFkLENBQW1CRixRQUFuQixFQUE2QkcsT0FBN0I7O0FBUDZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWpDO0FBU0EzQixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsUUFBYixFQUFzQixnQkFBdEIsdUVBQXdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM5QjhGLFlBQUFBLGdCQUQ4QixHQUNYOUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsR0FBUixFQURXO0FBRWhDeUYsWUFBQUEsVUFGZ0MsR0FFbkIvRyxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNzQixHQUFkLEVBRm1COztBQUFBLGtCQUdqQ3lGLFVBQVUsSUFBSSxFQUFkLElBQW9CRCxnQkFBZ0IsSUFBSSxFQUhQO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSVYxRixLQUFLLENBQUNDLEdBQU4sQ0FBVSxpQ0FBK0IwRixVQUEvQixHQUEwQyxHQUExQyxHQUE4Q0QsZ0JBQXhELENBSlU7O0FBQUE7QUFJMUJ2RixZQUFBQSxPQUowQjtBQUtoQ0MsWUFBQUEsUUFBUSxHQUFHRCxPQUFPLENBQUNFLElBQW5CO0FBQ0FWLFlBQUFBLEtBQUs7O0FBTjJCO0FBUXBDZixZQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCMEIsSUFBakIsQ0FBc0JGLFFBQXRCLEVBQWdDRyxPQUFoQzs7QUFSb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEM7QUFXQTNCLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdCLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLFVBQXRCLHVFQUFrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEIrRixZQUFBQSxVQUR3QixHQUNYL0csQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsR0FBUixFQURXO0FBRTFCd0YsWUFBQUEsZ0JBRjBCLEdBRVA5RyxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQnNCLEdBQXBCLEVBRk87QUFHMUJFLFlBQUFBLFFBSDBCLEdBR2YsRUFIZTs7QUFBQSxrQkFJM0J1RixVQUFVLElBQUksRUFBZCxJQUFvQkQsZ0JBQWdCLElBQUksRUFKYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUtKMUYsS0FBSyxDQUFDQyxHQUFOLENBQVUsaUNBQStCMEYsVUFBL0IsR0FBMEMsR0FBMUMsR0FBOENELGdCQUF4RCxDQUxJOztBQUFBO0FBS3BCdkYsWUFBQUEsT0FMb0I7QUFNMUJDLFlBQUFBLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxJQUFuQjtBQUNBVixZQUFBQSxLQUFLOztBQVBxQjtBQVM5QmYsWUFBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQjBCLElBQWpCLENBQXNCRixRQUF0QixFQUFnQ0csT0FBaEM7O0FBVDhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWxDO0FBV0EzQixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsUUFBYixFQUFzQixvQkFBdEI7QUFBQSx5RUFBNEMsbUJBQWdCQyxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeENBLGNBQUFBLENBQUMsQ0FBQytGLGNBQUY7QUFDSXhCLGNBQUFBLFFBRm9DLEdBRXpCLElBQUlDLFFBQUosQ0FBYSxJQUFiLENBRnlCO0FBR3hDRCxjQUFBQSxRQUFRLENBQUNVLE1BQVQsQ0FBZ0IsV0FBaEIsRUFBNkJsRSxXQUE3QjtBQUNBd0QsY0FBQUEsUUFBUSxDQUFDVSxNQUFULENBQWdCLEtBQWhCLEVBQXVCM0QsVUFBdkI7QUFDQWlELGNBQUFBLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixRQUFoQixFQUEwQm5FLEdBQTFCO0FBQ0FrRixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTFCLFFBQVo7QUFDSTJCLGNBQUFBLFVBUG9DLEdBT3RCbkgsQ0FBQyxDQUFDLDBDQUFELENBUHFCO0FBUXhDbUgsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ001RCxjQUFBQSxJQVRrQyxHQVMzQnhELENBQUMsQ0FBQywyQkFBRCxDQVQwQjtBQVV4Q3dELGNBQUFBLElBQUksQ0FBQzZELFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DQyxRQUFwQyxDQUE2QyxvQkFBN0M7QUFWd0M7QUFBQTtBQUFBLHFCQVlibEcsS0FBSyxDQUFDK0UsSUFBTixDQUFXLDJEQUFYLEVBQXVFWCxRQUF2RSxDQVphOztBQUFBO0FBWTlCakUsY0FBQUEsT0FaOEI7QUFhOUJFLGNBQUFBLElBYjhCLEdBYXZCRixPQUFPLENBQUNFLElBYmU7QUFjcEN6QixjQUFBQSxDQUFDLENBQUMsbUNBQUQsQ0FBRCxDQUF1Q3VILE9BQXZDLDhDQUN3QzlGLElBRHhDO0FBR0ErQixjQUFBQSxJQUFJLENBQUM4RCxRQUFMLENBQWMsaUJBQWQsRUFBaUNELFdBQWpDLENBQTZDLG9CQUE3QztBQUNBcEIsY0FBQUEsUUFBUTtBQUNSdUIsY0FBQUEsVUFBVSxDQUFDLFlBQU07QUFDakI7QUFDR3hILGdCQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQmlGLEtBQTNCLENBQWlDLE1BQWpDO0FBQ0YsZUFIUyxFQUdQLElBSE8sQ0FBVjtBQW5Cb0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF3QjlCd0MsY0FBQUEsT0F4QjhCLEdBd0JwQixjQUFNakcsUUFBTixDQUFlQyxJQXhCSyxFQXlCcEM7O0FBQ0EwRixjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDQXBILGNBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDdUgsT0FBdkMsNkNBQ3VDRSxPQUR2QztBQUdBakUsY0FBQUEsSUFBSSxDQUFDOEQsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBOUJvQztBQWdDeENHLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2J4SCxnQkFBQUEsQ0FBQyxDQUFDLDBDQUFELENBQUQsQ0FBOENvSCxNQUE5QztBQUNGLGVBRlEsRUFFTixJQUZNLENBQVY7O0FBaEN3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE1Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9DQXBILEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdCLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLHVCQUF0QjtBQUFBLHlFQUErQyxtQkFBZ0JDLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMzQ0EsY0FBQUEsQ0FBQyxDQUFDK0YsY0FBRjtBQUNJeEIsY0FBQUEsUUFGdUMsR0FFNUIsSUFBSUMsUUFBSixDQUFhLElBQWIsQ0FGNEI7QUFHM0NELGNBQUFBLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQixhQUFoQixFQUErQnRFLFdBQS9CO0FBQ0E0RCxjQUFBQSxRQUFRLENBQUNVLE1BQVQsQ0FBZ0IsV0FBaEIsRUFBNkJsRSxXQUE3QixFQUoyQyxDQUszQzs7QUFDSW1GLGNBQUFBLFVBTnVDLEdBTXpCbkgsQ0FBQyxDQUFDLDZDQUFELENBTndCO0FBTzNDbUgsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ001RCxjQUFBQSxJQVJxQyxHQVE5QnhELENBQUMsQ0FBQyw4Q0FBRCxDQVI2QjtBQVMzQ3dELGNBQUFBLElBQUksQ0FBQzZELFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DQyxRQUFwQyxDQUE2QyxvQkFBN0M7QUFUMkM7QUFBQTtBQUFBLHFCQVdoQmxHLEtBQUssQ0FBQytFLElBQU4sQ0FBVyxnRUFBOEQzRCxXQUF6RSxFQUFxRmdELFFBQXJGLENBWGdCOztBQUFBO0FBV2pDakUsY0FBQUEsT0FYaUM7QUFZakNFLGNBQUFBLElBWmlDLEdBWTFCRixPQUFPLENBQUNFLElBWmtCO0FBYXZDekIsY0FBQUEsQ0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMEN1SCxPQUExQyw4Q0FDd0M5RixJQUR4QztBQUdBK0IsY0FBQUEsSUFBSSxDQUFDOEQsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxvQkFBN0M7QUFDQXBCLGNBQUFBLFFBQVE7QUFDUnVCLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2J4SCxnQkFBQUEsQ0FBQyxDQUFDLDZDQUFELENBQUQsQ0FBaURvSCxNQUFqRDtBQUNBcEgsZ0JBQUFBLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCaUYsS0FBOUIsQ0FBb0MsTUFBcEM7QUFDSCxlQUhTLEVBR1AsSUFITyxDQUFWO0FBbEJ1QztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXVCakN3QyxjQUFBQSxPQXZCaUMsR0F1QnZCLGNBQU1qRyxRQUFOLENBQWVDLElBdkJRLEVBd0J2Qzs7QUFDQTBGLGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNBcEgsY0FBQUEsQ0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMEN1SCxPQUExQyw2Q0FDdUNFLE9BRHZDO0FBR0FqRSxjQUFBQSxJQUFJLENBQUM4RCxRQUFMLENBQWMsaUJBQWQsRUFBaUNELFdBQWpDLENBQTZDLHFCQUE3Qzs7QUE3QnVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQS9DOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUNBckgsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVZ0IsRUFBVixDQUFhLE9BQWIsRUFBcUIsa0JBQXJCO0FBQUEseUVBQXlDLG1CQUFlQyxDQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckNBLGNBQUFBLENBQUMsQ0FBQytGLGNBQUY7QUFDTXhELGNBQUFBLElBRitCLEdBRXhCeEQsQ0FBQyxDQUFDLHlCQUFELENBRnVCOztBQUFBLG1CQUdsQ3dDLFdBSGtDO0FBQUE7QUFBQTtBQUFBOztBQUk3QmtGLGNBQUFBLEdBSjZCLEdBSXZCQyxPQUFPLENBQUMsdURBQUQsQ0FKZ0I7O0FBQUEsb0JBSzlCRCxHQUFHLElBQUksQ0FMdUI7QUFBQTtBQUFBO0FBQUE7O0FBTTdCO0FBQ0FsRSxjQUFBQSxJQUFJLENBQUM2RCxXQUFMLENBQWlCLFVBQWpCLEVBQTZCQyxRQUE3QixDQUFzQyxvQkFBdEM7QUFQNkI7QUFBQTtBQUFBLHFCQVNIbEcsS0FBSyxDQUFDK0UsSUFBTixDQUFXLG1EQUFpRDNELFdBQTVELENBVEc7O0FBQUE7QUFTbkJqQixjQUFBQSxPQVRtQjtBQVVuQkMsY0FBQUEsU0FWbUIsR0FVUkQsT0FBTyxDQUFDRSxJQVZBO0FBV3pCdEIsY0FBQUEsS0FBSyxDQUFDb0QsSUFBTixDQUFXO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxnQkFBQUEsS0FBSyxFQUFFakM7QUFGQSxlQUFYO0FBSUF5RSxjQUFBQSxRQUFRO0FBQ1J6QyxjQUFBQSxJQUFJLENBQUM4RCxRQUFMLENBQWMsVUFBZCxFQUEwQkQsV0FBMUIsQ0FBc0MscUJBQXRDO0FBaEJ5QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCbkJJLGNBQUFBLE9BbEJtQixHQWtCVCxjQUFNakcsUUFBTixDQUFlQyxJQWxCTjtBQW1CekJ0QixjQUFBQSxLQUFLLENBQUNvRCxJQUFOLENBQVc7QUFDUEMsZ0JBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGdCQUFBQSxLQUFLLEVBQUVnRTtBQUZBLGVBQVg7QUFJQWpFLGNBQUFBLElBQUksQ0FBQzhELFFBQUwsQ0FBYyxVQUFkLEVBQTBCRCxXQUExQixDQUFzQyxxQkFBdEM7O0FBdkJ5QjtBQXlCN0JHLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2J4SCxnQkFBQUEsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJpRixLQUE5QixDQUFvQyxNQUFwQztBQUNILGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBekI2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF6Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdDQWpGLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdCLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLFNBQXJCO0FBQUEseUVBQWdDLG1CQUFnQkMsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM1QkEsY0FBQUEsQ0FBQyxDQUFDK0YsY0FBRjtBQUNBaEgsY0FBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JpRixLQUF0QixDQUE0QixNQUE1Qjs7QUFGNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQWpGLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdCLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLGtCQUFyQixFQUF5QyxZQUFXO0FBQ2hEcUMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksK0NBQVosRUFBNkQsUUFBN0Q7QUFDSCxHQUZEO0FBSUF0RCxFQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQmdCLEVBQTNCLENBQThCLFFBQTlCO0FBQUEseUVBQXdDLG1CQUFlQyxDQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcENBLGNBQUFBLENBQUMsQ0FBQytGLGNBQUY7QUFDSXhCLGNBQUFBLFFBRmdDLEdBRXJCLElBQUlDLFFBQUosQ0FBYXpGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxDQUFSLENBQWIsQ0FGcUI7QUFHaENtSCxjQUFBQSxVQUhnQyxHQUduQm5ILENBQUMsQ0FBQyxxQ0FBRCxDQUhrQjtBQUlwQ21ILGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNNNUQsY0FBQUEsSUFMOEIsR0FLdkJ4RCxDQUFDLENBQUMsd0JBQUQsQ0FMc0I7QUFNcEN3RCxjQUFBQSxJQUFJLENBQUM2RCxXQUFMLENBQWlCLGlCQUFqQixFQUFvQ0MsUUFBcEMsQ0FBNkMsb0JBQTdDO0FBTm9DO0FBQUE7QUFBQSxxQkFRVmxHLEtBQUssQ0FBQytFLElBQU4sQ0FBVyxzQ0FBWCxFQUFtRFgsUUFBbkQsQ0FSVTs7QUFBQTtBQVExQmpFLGNBQUFBLE9BUjBCO0FBUzFCQyxjQUFBQSxVQVQwQixHQVNmRCxPQUFPLENBQUNFLElBVE87QUFVaEN6QixjQUFBQSxDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ3VILE9BQWxDLHVFQUVhL0YsVUFGYjtBQUtBZ0MsY0FBQUEsSUFBSSxDQUFDOEQsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7QUFmZ0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFpQjFCSSxjQUFBQSxPQWpCMEIsR0FpQmhCLGNBQU1qRyxRQUFOLENBQWVDLElBakJDO0FBa0JoQ3dGLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBbUIsY0FBTTFGLFFBQXpCO0FBQ0EyRixjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDQXBILGNBQUFBLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDdUgsT0FBbEMsNkNBQ3VDRSxPQUR2QztBQUdBakUsY0FBQUEsSUFBSSxDQUFDOEQsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBdkJnQztBQXlCcENHLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2J4SCxnQkFBQUEsQ0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNvSCxNQUF6QztBQUNILGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBekJvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF4Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThCQXBILEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdCLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLFVBQXJCO0FBQUEseUVBQWlDLG1CQUFnQkMsQ0FBaEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3QkEsY0FBQUEsQ0FBQyxDQUFDK0YsY0FBRjs7QUFENkIsa0JBRXpCbkYsV0FGeUI7QUFBQTtBQUFBO0FBQUE7O0FBR3pCMUIsY0FBQUEsS0FBSyxDQUFDb0QsSUFBTixDQUFXO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxnQkFBQUEsS0FBSyxFQUFFO0FBRkEsZUFBWDtBQUh5Qjs7QUFBQTtBQVM3QjtBQUNBO0FBQ0lpRSxjQUFBQSxHQVh5QixHQVduQkMsT0FBTyxDQUFDLG9FQUFELENBWFk7O0FBQUEsb0JBWXpCRCxHQUFHLElBQUksQ0Faa0I7QUFBQTtBQUFBO0FBQUE7O0FBYXpCMUYsY0FBQUEsV0FBVyxHQUFHaUIsTUFBTSxDQUFDakQsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlMEMsWUFBZixDQUE0QixTQUE1QixDQUFELEVBQXlDLFVBQXpDLENBQU4sQ0FBMkRRLE9BQTNELEVBQWQ7QUFDSXNDLGNBQUFBLFFBZHFCLEdBY1YsSUFBSUMsUUFBSixFQWRVO0FBZXpCRCxjQUFBQSxRQUFRLENBQUNVLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBMkJsRSxXQUEzQixFQWZ5QixDQWdCekI7O0FBQ013QixjQUFBQSxJQWpCbUIsR0FpQlp4RCxDQUFDLENBQUMsWUFBRCxDQWpCVztBQWtCekJ3RCxjQUFBQSxJQUFJLENBQUM2RCxXQUFMLENBQWlCLG1CQUFqQixFQUFzQ0MsUUFBdEMsQ0FBK0Msd0JBQS9DO0FBbEJ5QjtBQUFBO0FBQUEscUJBb0JDbEcsS0FBSyxDQUFDK0UsSUFBTixDQUFXLG9EQUFrRHRFLFdBQWxELEdBQThELEdBQTlELEdBQWtFRSxHQUE3RSxFQUFrRnlELFFBQWxGLENBcEJEOztBQUFBO0FBb0JmakUsY0FBQUEsT0FwQmU7QUFxQnJCO0FBQ01DLGNBQUFBLFVBdEJlLEdBc0JKRCxPQUFPLENBQUNFLElBdEJKO0FBdUJyQnRCLGNBQUFBLEtBQUssQ0FBQ29ELElBQU4sQ0FBVztBQUNQQyxnQkFBQUEsSUFBSSxFQUFFLFNBREM7QUFFUEMsZ0JBQUFBLEtBQUssRUFBRWpDO0FBRkEsZUFBWDtBQUlBZ0MsY0FBQUEsSUFBSSxDQUFDOEQsUUFBTCxDQUFjLG1CQUFkLEVBQW1DRCxXQUFuQyxDQUErQyx5QkFBL0M7QUEzQnFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBNkJmSSxjQUFBQSxPQTdCZSxHQTZCTCxjQUFNakcsUUFBTixDQUFlQyxJQTdCVjtBQThCckJ0QixjQUFBQSxLQUFLLENBQUNvRCxJQUFOLENBQVc7QUFDUEMsZ0JBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGdCQUFBQSxLQUFLLEVBQUVnRTtBQUZBLGVBQVg7QUFJQWpFLGNBQUFBLElBQUksQ0FBQzhELFFBQUwsQ0FBYyxtQkFBZCxFQUFtQ0QsV0FBbkMsQ0FBK0MseUJBQS9DOztBQWxDcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBakM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1Q0FySCxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsT0FBYixFQUFzQixpQkFBdEIsRUFBeUMsVUFBVUMsQ0FBVixFQUFhO0FBQ2xEQSxJQUFBQSxDQUFDLENBQUMrRixjQUFGOztBQUNBLFFBQUcsQ0FBQ3hFLFdBQUosRUFBZ0I7QUFDWnJDLE1BQUFBLEtBQUssQ0FBQ29ELElBQU4sQ0FBVztBQUNQQyxRQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxRQUFBQSxLQUFLLEVBQUU7QUFGQSxPQUFYO0FBSUE7QUFDSDs7QUFDREosSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksc0RBQW9EZCxXQUFoRSxFQUE2RSxRQUE3RTtBQUNILEdBVkQ7QUFZQXhDLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWdCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLGlCQUF0QixFQUF5QyxVQUFVQyxDQUFWLEVBQWE7QUFDbERBLElBQUFBLENBQUMsQ0FBQytGLGNBQUY7O0FBQ0EsUUFBRyxDQUFDeEUsV0FBSixFQUFnQjtBQUNackMsTUFBQUEsS0FBSyxDQUFDb0QsSUFBTixDQUFXO0FBQ1BDLFFBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLFFBQUFBLEtBQUssRUFBRTtBQUZBLE9BQVg7QUFJQTtBQUNIOztBQUNESixJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSwrQ0FBNkNkLFdBQXpELEVBQXNFLFFBQXRFO0FBQ0gsR0FWRDtBQVlBeEMsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVZ0IsRUFBVixDQUFhLFFBQWIsRUFBc0IsVUFBdEIsdUVBQWtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN4QjRHLFlBQUFBLE9BRHdCLEdBQ2Q1SCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQixHQUFSLEVBRGMsRUFFOUI7O0FBQ0lFLFlBQUFBLFFBSDBCLEdBR2YsRUFIZTs7QUFBQSxrQkFJM0JvRyxPQUFPLElBQUksRUFKZ0I7QUFBQTtBQUFBO0FBQUE7O0FBSzFCaEcsWUFBQUEsV0FBVyxHQUFHZ0csT0FBZDtBQUwwQjtBQUFBLG1CQU1KeEcsS0FBSyxDQUFDQyxHQUFOLENBQVUsZUFBYXVHLE9BQXZCLENBTkk7O0FBQUE7QUFNcEJyRyxZQUFBQSxPQU5vQjtBQU8xQkMsWUFBQUEsUUFBUSxHQUFHRCxPQUFPLENBQUNFLElBQW5CO0FBUDBCO0FBQUE7O0FBQUE7QUFTMUJHLFlBQUFBLFdBQVcsR0FBRyxDQUFkOztBQVQwQjtBQVc5QjVCLFlBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYzBCLElBQWQsQ0FBbUIsRUFBbkIsRUFBdUJDLE9BQXZCO0FBQ0EzQixZQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMwQixJQUFkLENBQW1CRixRQUFuQixFQUE2QkcsT0FBN0I7O0FBWjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWxDO0FBY0EzQixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsUUFBYixFQUFzQixVQUF0Qix1RUFBa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hCNkcsWUFBQUEsT0FEd0IsR0FDZDdILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEdBQVIsRUFEYzs7QUFBQSxrQkFFM0J1RyxPQUFPLElBQUksRUFGZ0I7QUFBQTtBQUFBO0FBQUE7O0FBRzFCakcsWUFBQUEsV0FBVyxHQUFHaUcsT0FBZDtBQUgwQjtBQUFBLG1CQUlKekcsS0FBSyxDQUFDQyxHQUFOLENBQVUsZUFBYXdHLE9BQXZCLENBSkk7O0FBQUE7QUFJcEJ0RyxZQUFBQSxPQUpvQjtBQUsxQkMsWUFBQUEsUUFBUSxHQUFHRCxPQUFPLENBQUNFLElBQW5CO0FBTDBCO0FBQUE7O0FBQUE7QUFPMUJHLFlBQUFBLFdBQVcsR0FBRzVCLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3NCLEdBQWQsRUFBZDs7QUFQMEI7QUFTOUJ0QixZQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWMwQixJQUFkLENBQW1CRixRQUFuQixFQUE2QkcsT0FBN0I7O0FBVDhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWxDO0FBV0EzQixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVnQixFQUFWLENBQWEsUUFBYixFQUFzQixVQUF0Qix1RUFBa0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hCOEcsWUFBQUEsT0FEd0IsR0FDZDlILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEdBQVIsRUFEYzs7QUFFOUIsZ0JBQUd3RyxPQUFPLElBQUksRUFBZCxFQUFrQjtBQUNkbEcsY0FBQUEsV0FBVyxHQUFHa0csT0FBZDtBQUNILGFBRkQsTUFFSztBQUNEbEcsY0FBQUEsV0FBVyxHQUFHNUIsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjc0IsR0FBZCxFQUFkO0FBQ0g7O0FBTjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWxDO0FBUUgsQ0F0akJELEdBd2pCQTs7Ozs7Ozs7Ozs7QUMxakJhO0FBQ2IsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsYUFBYSxtQkFBTyxDQUFDLDJGQUErQjtBQUNwRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hDQSxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLDJFQUF1Qjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUNqQkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG1CQUFPLENBQUMscUZBQTRCOztBQUUvQztBQUNBO0FBQ0EsSUFBSSxpQ0FBaUM7QUFDckM7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1BELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IExvY2FsZSA9IHJlcXVpcmUoXCIuL2xvY2FsLWFsbFwiKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICAgICAgdGltZXI6IDMwMDAsXHJcbiAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIGNvbnN0IHBpbGxzID0gKCkgPT4ge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcubmF2LXBpbGxzIGEnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRhYignc2hvdycpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRNb2R1bGVCeVNlbWVzdHJlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycrJCgnI3NlbWVzdHJlJykudmFsKCkpO1xyXG4gICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmICNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBlZGl0X2dyb3VwZSA9IDA7XHJcbiAgICBsZXQgaWRfc2VtZXN0cmUgPSBmYWxzZTtcclxuICAgIGxldCBwcm9mZXNzZXVyID0gbnVsbDtcclxuICAgIGxldCBuaXYgPSAwO1xyXG4gICAgbGV0IGN1cnJlbnR3ZWVrID0gZmFsc2U7XHJcbiAgICBsZXQgaGV1cl9kZWJ1dCA9IGZhbHNlO1xyXG4gICAgbGV0IGhldXJfZmluID0gZmFsc2U7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBkYXkgPSBkLmdldERheSgpO1xyXG4gICAgbGV0IGN1cnJlbnREYXkgPSBmYWxzZTtcclxuICAgIGxldCBpZF9wbGFubmluZyA9IGZhbHNlO1xyXG4gICAgbGV0IGFsbHRpbWUgPSBbXTtcclxuICAgICQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcih7XHJcbiAgICAgICAgbGFuZzogXCJmclwiLFxyXG4gICAgICAgIGN1c3RvbUJ1dHRvbnM6IHtcclxuICAgICAgICAgICAgbXlDdXN0b21CdXR0b246IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdJbXByaW1lcicsXHJcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50V2VlayA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSwgXCJNTUREWVlZWVwiKS5pc29XZWVrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbW9tZW50KCQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcignZ2V0RGF0ZScpKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3ByaW50X3BsYW5uaW5nLycraWRfc2VtZXN0cmUrJy8nK25pdisnLycrY3VycmVudERhdGUrJy8nK3Byb2Zlc3NldXIsICdfYmxhbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3ByaW50X3BsYW5uaW5nLycraWRfc2VtZXN0cmUrJy8nK25pdisnLycrY3VycmVudFdlZWsrJy8nK2N1cnJlbnREYXRlKycvJytwcm9mZXNzZXVyLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciB1bmUgU2VtZXN0cmUhIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXZlbnRzOiBhbGx0aW1lLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5IG15Q3VzdG9tQnV0dG9uJyxcclxuICAgICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxyXG4gICAgICAgICAgICByaWdodDogJ21vbnRoLGFnZW5kYVdlZWsnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0VmlldzogJ2FnZW5kYVdlZWsnLFxyXG4gICAgICAgIGVkaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgIGV2ZW50TGltaXQ6IHRydWUsIC8vIGFsbG93IFwibW9yZVwiIGxpbmsgd2hlbiB0b28gbWFueSBldmVudHNcclxuICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxyXG4gICAgICAgIHNlbGVjdEhlbHBlcjogdHJ1ZSxcclxuICAgICAgICBuYXZMaW5rczogdHJ1ZSxcclxuICAgICAgICBoZWlnaHQ6IDQ1MCxcclxuICAgICAgICBhbGxEYXlTbG90OiBmYWxzZSxcclxuICAgICAgICBsb2NhbGU6IFwiZnJcIixcclxuICAgICAgICBmaXJzdERheTogMSxcclxuICAgICAgICBtaW5UaW1lOiBcIjA4OjAwOjAwXCIsXHJcbiAgICAgICAgbWF4VGltZTogXCIxODowMTowMFwiLFxyXG4gICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKHN0YXJ0LCBlbmQsZGF0ZSkge1xyXG4gICAgICAgICAgICBpZigkKCcjc2VtZXN0cmUnKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnREYXkgPSBtb21lbnQoc3RhcnQpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudHdlZWsgPSBtb21lbnQoc3RhcnQsIFwiTU1ERFlZWVlcIikuaXNvV2VlaygpO1xyXG4gICAgICAgICAgICAgICAgaGV1cl9kZWJ1dD0gbW9tZW50KHN0YXJ0KS5mb3JtYXQoJ0hIOm1tJylcclxuICAgICAgICAgICAgICAgIGhldXJfZmluPSBtb21lbnQoZW5kKS5mb3JtYXQoJ0hIOm1tJylcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbl9pbmZvcy8nKyQoJyNzZW1lc3RyZScpLnZhbCgpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmIC5hZGRfcGxhbm5pbmcnKS5odG1sKHN1Y2Nlc3MuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWFkZGZvcm1fcGxhbmlmICNoX2RlYnV0JykudmFsKGhldXJfZGVidXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiAjaF9maW4nKS52YWwoaGV1cl9maW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiBzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0TW9kdWxlQnlTZW1lc3RyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNhZGRmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBwaWxscygpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZW50UmVuZGVyOiBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5iaW5kKCdkYmxjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGVkaXRfZ3JvdXBlID0gMDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnR3ZWVrID0gbW9tZW50KGV2ZW50LnN0YXJ0LCBcIk1NRERZWVlZXCIpLmlzb1dlZWsoKTtcclxuICAgICAgICAgICAgICAgIGlkX3BsYW5uaW5nID0gZXZlbnQuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRfcGxhbm5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25faW5mb3NfZWRpdC8nK2lkX3BsYW5uaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtdXBkYXRlZm9ybV9wbGFuaWYgLnVwZGF0ZV9wbGFubmluZycpLmh0bWwoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLXVwZGF0ZWZvcm1fcGxhbmlmIHNlbGVjdCcpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWxscygpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZW50RHJvcDogZnVuY3Rpb24gKGV2ZW50LCBkZWx0YSwgcmV2ZXJ0RnVuYykgeyBcclxuICAgICAgICAgICAgZWRpdChldmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBldmVudFJlc2l6ZTogZnVuY3Rpb24gKGV2ZW50LCBkYXlEZWx0YSwgbWludXRlRGVsdGEsIHJldmVydEZ1bmMpIHsgLy8gc2kgY2hhbmdlbWVudCBkZSBsb25ndWV1clxyXG4gICAgICAgICAgICBlZGl0KGV2ZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKFwiYm9keSBzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgLy8gJChcIiNuYXR1cmVfc2VhbmNlXCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjc2FsbGVcIikuc2VsZWN0MigpO1xyXG4gICAgY29uc3QgYWxsdGltZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NlbWVzdHJlJywgJChcIiNzZW1lc3RyZVwiKS52YWwoKSk7IFxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25pdicsIG5pdik7IFxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2Zlc3NldXInLCAgcHJvZmVzc2V1cik7IFxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvY2FsZW5kYXJfcGxhbm5pbmcnLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9jYWxlbmRhci8nK2lkX3NlbWVzdHJlKycvJytuaXYpXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvY2FsZW5kYXIvJytpZF9zZW1lc3RyZSsnLycrbml2KVxyXG4gICAgICAgICAgICBhbGx0aW1lID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAvLyBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgLy8gICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ1NvbWUgRXJyb3IhIScsXHJcbiAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gYWxsdGltZXMoKVxyXG4gICAgY29uc3QgZWRpdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIHN0YXJ0ID0gZXZlbnQuc3RhcnQuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcbiAgICAgICAgaWYgKGV2ZW50LmVuZCkge1xyXG4gICAgICAgICAgICBlbmQgPSBldmVudC5lbmQuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW5kID0gc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlkX2VtcHRpbWUgPSBldmVudC5pZDtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3N0YXJ0JyxzdGFydClcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VuZCcsZW5kKVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wbGFuaWZpY2F0aW9uc19lZGl0RXZlbnREYXRlLycraWRfZW1wdGltZSxmb3JtRGF0YSlcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVxdWVzdC5kYXRhLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI25pdjEnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjInKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbml2MScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MycpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYxJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYyJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgIG5pdiA9IDA7XHJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHNlbWVzdHJlID0gcmVxdWVzdC5kYXRhICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoc2VtZXN0cmUpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2MS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIG5pdjEgPSByZXF1ZXN0dC5kYXRhICBcclxuICAgICAgICAgICAgJCgnI25pdjEnKS5odG1sKG5pdjEpLnNlbGVjdDIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb2Zlc3NldXJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHByb2Zlc3NldXIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmIChwcm9mZXNzZXVyID09IFwiXCIpIHtcclxuICAgICAgICAgICAgcHJvZmVzc2V1ciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIgKXtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGx0aW1lID0gW107XHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnKTsgXHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdhZGRFdmVudFNvdXJjZScsIGFsbHRpbWUpOyBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNuaXYxXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBuaXYxID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAvLyBuaXYgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihuaXYxICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbml2ID0gbml2MTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYyLycrbml2MSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5pdiA9IDA7XHJcbiAgICAgICAgICAgIC8vIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgLy8gJCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKCdyZWZldGNoRXZlbnRzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbml2MycpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYyJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjbml2MlwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2MiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYobml2MiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5pdiA9IG5pdjI7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2My8nK25pdjIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuaXYgPSAkKCcjbml2MScpLnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGx0aW1lID0gW107XHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnKTsgXHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdhZGRFdmVudFNvdXJjZScsIGFsbHRpbWUpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNuaXYzXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBuaXYzID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihuaXYzICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbml2ID0gbml2MztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbml2ID0gJCgnI25pdjInKS52YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vICQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcigncmVmZXRjaEV2ZW50cycpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdjaGFuZ2UnLCcjbW9kdWxlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbGVtZW50LycraWRfbW9kdWxlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ2NoYW5nZScsJyNuYXR1cmVfc2VhbmNlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbmF0dXJlX3NlYW5jZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IGlkX2VsZW1lbnQgPSAkKCcjZWxlbWVudCcpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX2VsZW1lbnQgIT0gXCJcIiAmJiBpZF9uYXR1cmVfc2VhbmNlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbnNlaWduYW50c0J5UHJvZ3JhbW1lLycraWRfZWxlbWVudCsnLycraWRfbmF0dXJlX3NlYW5jZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIHBpbGxzKClcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Vuc2VpZ25hbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKCdjaGFuZ2UnLCcjZWxlbWVudCcsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2VsZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCBpZF9uYXR1cmVfc2VhbmNlID0gJCgnI25hdHVyZV9zZWFuY2UnKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZWxlbWVudCAhPSBcIlwiICYmIGlkX25hdHVyZV9zZWFuY2UgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Vuc2VpZ25hbnRzQnlQcm9ncmFtbWUvJytpZF9lbGVtZW50KycvJytpZF9uYXR1cmVfc2VhbmNlKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgcGlsbHMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZW5zZWlnbmFudCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbignc3VibWl0JywnLmZvcm1fYWRkX3BsYW5uaW5nJywgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduX3NlbWFpbmUnLCBjdXJyZW50d2Vlayk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkYXknLCBjdXJyZW50RGF5KVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZ3JvdXBlJywgbml2KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI2FkZGZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiLmZvcm1fYWRkX3BsYW5uaW5nIC5idG4gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbnNfY2FsZW5kYXJfYWRkJyxmb3JtRGF0YSlcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNhZGRmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+JHtkYXRhfTwvZGl2PmBcclxuICAgICAgICAgICAgKTsgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAkKFwiI2FkZGZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgJCgnI2FkZGZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNhZGRmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI2FkZGZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsJy5mb3JtX3VwZGF0ZV9wbGFubmluZycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZWRpdF9ncm91cGUnLCBlZGl0X2dyb3VwZSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduX3NlbWFpbmUnLCBjdXJyZW50d2Vlayk7XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIi5mb3JtX3VwZGF0ZV9wbGFubmluZyAuYnRuX3VwZGF0ZV9wbGFubmluZyBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wbGFuaWZpY2F0aW9uc19jYWxlbmRhcl9lZGl0LycraWRfcGxhbm5pbmcsZm9ybURhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7IFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCIjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9LCA0MDAwKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI3BsYW5uaW5nX2RlbGV0ZScsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCJib2R5ICNwbGFubmluZ19kZWxldGUgaVwiKTtcclxuICAgICAgICBpZihpZF9wbGFubmluZyl7XHJcbiAgICAgICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgZW5yZWdpc3RyZW1lbnQgPycpO1xyXG4gICAgICAgICAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBpY29uID0gJChcIiNwbGFubmluZ19lbnJlZ2lzdHJlIC51cGRhdGVfcGxhbm5pbmcgaVwiKTtcclxuICAgICAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRyYXNoJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9kZWxldGVfcGxhbm5pbmcvJytpZF9wbGFubmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRyYXNoJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10cmFzaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywnI2ltcG9ydCcsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnI2ltcG9ydF9lbl9tYXNzZScpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjcGxhbm5pbmdfY2FudmFzJywgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5uaW5nX2NhbnZhcycsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCIjaW1wb3J0X3BsYW5uaW5nX3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3BsYW5uaW5nX2VucmVnaXN0cmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvaW1wb3J0JywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsJyNnZW5lcmVyJywgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfc2VtZXN0cmUpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZvdXMgZGV2ZXogY2hvaXNpciBTZW1lc3RyZSBldCBOaXZlYXUhIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy9cclxuICAgICAgICAvLyBsZXQgY3JudGRheSA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSkuZm9ybWF0KCdZWVlZLU1NLUREJylcclxuICAgICAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogVnJhaW1lbnQgR8OpbsOpcmVyIGxlcyBwbGFuaWZpY2F0aW9ucyBkZSBjZXR0ZSBzZW1haW5lID8nKTtcclxuICAgICAgICBpZiAocmVzID09IDEpIHtcclxuICAgICAgICAgICAgY3VycmVudHdlZWsgPSBtb21lbnQoJCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKCdnZXREYXRlJyksIFwiTU1ERFlZWVlcIikuaXNvV2VlaygpO1xyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduc2VtYWluZScsY3VycmVudHdlZWspXHJcbiAgICAgICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnY3JudGRheScsY3JudGRheSlcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZ2VuZXJlciBpXCIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLmFkZENsYXNzKFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9nZW5lcmVyX3BsYW5uaW5nLycraWRfc2VtZXN0cmUrJy8nK25pdiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2dlbmVyZXJfcGxhbm5pbmcvMTA3LzknLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykucmVtb3ZlQ2xhc3MoXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNzZWFuY2VfYWJzZW5jZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgU2VsZWN0aW9ubmVyIHVuZSBTZWFuY2UnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9HZXRBYnNlbmNlQnlHcm91cGUvJytpZF9wbGFubmluZywgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNmaWNoZV9zZXF1ZW5jZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgU2VsZWN0aW9ubmVyIHVuZSBTZWFuY2UnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9HZXRzZXF1ZW5jZS8nK2lkX3BsYW5uaW5nLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2hhbmdlJyxcIiNuaXZlYXUxXCIsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdmVhdTEgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIC8vIG5pdiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKG5pdmVhdTEgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBlZGl0X2dyb3VwZSA9IG5pdmVhdTE7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2Mi8nK25pdmVhdTEpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBlZGl0X2dyb3VwZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXZlYXUzJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdmVhdTInKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ2NoYW5nZScsXCIjbml2ZWF1MlwiLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBuaXZlYXUyID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihuaXZlYXUyICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgZWRpdF9ncm91cGUgPSBuaXZlYXUyO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjMvJytuaXZlYXUyKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZWRpdF9ncm91cGUgPSAkKCcjbml2ZWF1MicpLnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjbml2ZWF1MycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2hhbmdlJyxcIiNuaXZlYXUzXCIsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdmVhdTMgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKG5pdmVhdTMgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBlZGl0X2dyb3VwZSA9IG5pdmVhdTM7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGVkaXRfZ3JvdXBlID0gJCgnI25pdmVhdTInKS52YWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KSAgIFxyXG59KVxyXG5cclxuLy8gY29uc3QgYWxsTG9jYWxlcyA9IHJlcXVpcmUoXCIuLi9pbmNsdWRlcy9sb2NhbC1hbGxcIik7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG52YXIgZmFjdG9yaWVzID0ge307XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoQywgYXJnc0xlbmd0aCwgYXJncykge1xuICBpZiAoIWhhc093bihmYWN0b3JpZXMsIGFyZ3NMZW5ndGgpKSB7XG4gICAgZm9yICh2YXIgbGlzdCA9IFtdLCBpID0gMDsgaSA8IGFyZ3NMZW5ndGg7IGkrKykgbGlzdFtpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIGZhY3Rvcmllc1thcmdzTGVuZ3RoXSA9IEZ1bmN0aW9uKCdDLGEnLCAncmV0dXJuIG5ldyBDKCcgKyBqb2luKGxpc3QsICcsJykgKyAnKScpO1xuICB9IHJldHVybiBmYWN0b3JpZXNbYXJnc0xlbmd0aF0oQywgYXJncyk7XG59O1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5iaW5kIHx8IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgdmFyIEYgPSBhQ2FsbGFibGUodGhpcyk7XG4gIHZhciBQcm90b3R5cGUgPSBGLnByb3RvdHlwZTtcbiAgdmFyIHBhcnRBcmdzID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uIGJvdW5kKC8qIGFyZ3MuLi4gKi8pIHtcbiAgICB2YXIgYXJncyA9IGNvbmNhdChwYXJ0QXJncywgYXJyYXlTbGljZShhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kRnVuY3Rpb24gPyBjb25zdHJ1Y3QoRiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogRi5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfTtcbiAgaWYgKGlzT2JqZWN0KFByb3RvdHlwZSkpIGJvdW5kRnVuY3Rpb24ucHJvdG90eXBlID0gUHJvdG90eXBlO1xuICByZXR1cm4gYm91bmRGdW5jdGlvbjtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxudmFyIERhdGVQcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIHVuJERhdGVUb1N0cmluZyA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGVbVE9fU1RSSU5HXSk7XG52YXIgZ2V0VGltZSA9IHVuY3VycnlUaGlzKERhdGVQcm90b3R5cGUuZ2V0VGltZSk7XG5cbi8vIGBEYXRlLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoU3RyaW5nKG5ldyBEYXRlKE5hTikpICE9IElOVkFMSURfREFURSkge1xuICByZWRlZmluZShEYXRlUHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUodGhpcyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdW4kRGF0ZVRvU3RyaW5nKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZCcpO1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuJCh7IHRhcmdldDogJ0Z1bmN0aW9uJywgcHJvdG86IHRydWUgfSwge1xuICBiaW5kOiBiaW5kXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsInBpbGxzIiwib24iLCJlIiwidGFiIiwiZ2V0TW9kdWxlQnlTZW1lc3RyZSIsImF4aW9zIiwiZ2V0IiwidmFsIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsImh0bWwiLCJzZWxlY3QyIiwiZWRpdF9ncm91cGUiLCJpZF9zZW1lc3RyZSIsInByb2Zlc3NldXIiLCJuaXYiLCJjdXJyZW50d2VlayIsImhldXJfZGVidXQiLCJoZXVyX2ZpbiIsImQiLCJEYXRlIiwiZGF5IiwiZ2V0RGF5IiwiY3VycmVudERheSIsImlkX3BsYW5uaW5nIiwiYWxsdGltZSIsImZ1bGxDYWxlbmRhciIsImxhbmciLCJjdXN0b21CdXR0b25zIiwibXlDdXN0b21CdXR0b24iLCJ0ZXh0IiwiY2xpY2siLCJjdXJyZW50V2VlayIsIm1vbWVudCIsImlzb1dlZWsiLCJjdXJyZW50RGF0ZSIsImZvcm1hdCIsIndpbmRvdyIsIm9wZW4iLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZXZlbnRzIiwiaGVhZGVyIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiZGVmYXVsdFZpZXciLCJlZGl0YWJsZSIsImV2ZW50TGltaXQiLCJzZWxlY3RhYmxlIiwic2VsZWN0SGVscGVyIiwibmF2TGlua3MiLCJoZWlnaHQiLCJhbGxEYXlTbG90IiwibG9jYWxlIiwiZmlyc3REYXkiLCJtaW5UaW1lIiwibWF4VGltZSIsInNlbGVjdCIsInN0YXJ0IiwiZW5kIiwiZGF0ZSIsInRoZW4iLCJzdWNjZXNzIiwibW9kYWwiLCJlcnIiLCJldmVudFJlbmRlciIsImV2ZW50IiwiZWxlbWVudCIsImJpbmQiLCJpZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJldmVudERyb3AiLCJkZWx0YSIsInJldmVydEZ1bmMiLCJlZGl0IiwiZXZlbnRSZXNpemUiLCJkYXlEZWx0YSIsIm1pbnV0ZURlbHRhIiwiYWxsdGltZXMiLCJhcHBlbmQiLCJwb3N0IiwiaWRfZW1wdGltZSIsImlkX2V0YWIiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJzZW1lc3RyZSIsInJlcXVlc3R0Iiwibml2MSIsIm5pdjIiLCJuaXYzIiwiaWRfbW9kdWxlIiwiaWRfbmF0dXJlX3NlYW5jZSIsImlkX2VsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInByZXBlbmQiLCJzZXRUaW1lb3V0IiwibWVzc2FnZSIsInJlcyIsImNvbmZpcm0iLCJuaXZlYXUxIiwibml2ZWF1MiIsIm5pdmVhdTMiXSwic291cmNlUm9vdCI6IiJ9