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
      var res, icon, request, _response, message;

      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              e.preventDefault();

              if (!id_planning) {
                _context17.next = 22;
                break;
              }

              res = confirm('Vous voulez vraiment supprimer cette enregistrement ?');

              if (!(res == 1)) {
                _context17.next = 22;
                break;
              }

              icon = $("#planning_enregistre .update_planning i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
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
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
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
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQ0Esa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELGVBQWUsbUJBQU8sQ0FBQywyRUFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUNqQkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG1CQUFPLENBQUMscUZBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLElBQUksaUNBQWlDO0FBQ3JDO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNQRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsZ0JBQWdCLG1CQUFPLENBQUMsNkZBQWdDO0FBQ3hELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRDtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdDQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBMb2NhbGUgPSByZXF1aXJlKFwiLi9sb2NhbC1hbGxcIik7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBjb25zdCBwaWxscyA9ICgpID0+IHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLm5hdi1waWxscyBhJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50YWIoJ3Nob3cnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0TW9kdWxlQnlTZW1lc3RyZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL21vZHVsZS8nKyQoJyNzZW1lc3RyZScpLnZhbCgpKTtcclxuICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiAjbW9kdWxlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgZWRpdF9ncm91cGUgPSAwO1xyXG4gICAgbGV0IGlkX3NlbWVzdHJlID0gZmFsc2U7XHJcbiAgICBsZXQgcHJvZmVzc2V1ciA9IG51bGw7XHJcbiAgICBsZXQgbml2ID0gMDtcclxuICAgIGxldCBjdXJyZW50d2VlayA9IGZhbHNlO1xyXG4gICAgbGV0IGhldXJfZGVidXQgPSBmYWxzZTtcclxuICAgIGxldCBoZXVyX2ZpbiA9IGZhbHNlO1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgZGF5ID0gZC5nZXREYXkoKTtcclxuICAgIGxldCBjdXJyZW50RGF5ID0gZmFsc2U7XHJcbiAgICBsZXQgaWRfcGxhbm5pbmcgPSBmYWxzZTtcclxuICAgIGxldCBhbGx0aW1lID0gW107XHJcbiAgICAkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoe1xyXG4gICAgICAgIGxhbmc6IFwiZnJcIixcclxuICAgICAgICBjdXN0b21CdXR0b25zOiB7XHJcbiAgICAgICAgICAgIG15Q3VzdG9tQnV0dG9uOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSW1wcmltZXInLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFdlZWsgPSBtb21lbnQoJCgnI2NhbGVuZGFyJykuZnVsbENhbGVuZGFyKCdnZXREYXRlJyksIFwiTU1ERFlZWVlcIikuaXNvV2VlaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wcmludF9wbGFubmluZy8nK2lkX3NlbWVzdHJlKycvJytuaXYrJy8nK2N1cnJlbnREYXRlKycvJytwcm9mZXNzZXVyLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wcmludF9wbGFubmluZy8nK2lkX3NlbWVzdHJlKycvJytuaXYrJy8nK2N1cnJlbnRXZWVrKycvJytjdXJyZW50RGF0ZSsnLycrcHJvZmVzc2V1ciwgJ19ibGFuaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgdW5lIFNlbWVzdHJlISEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZW50czogYWxsdGltZSxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheSBteUN1c3RvbUJ1dHRvbicsXHJcbiAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcclxuICAgICAgICAgICAgcmlnaHQ6ICdtb250aCxhZ2VuZGFXZWVrJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVmYXVsdFZpZXc6ICdhZ2VuZGFXZWVrJyxcclxuICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICBldmVudExpbWl0OiB0cnVlLCAvLyBhbGxvdyBcIm1vcmVcIiBsaW5rIHdoZW4gdG9vIG1hbnkgZXZlbnRzXHJcbiAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcclxuICAgICAgICBzZWxlY3RIZWxwZXI6IHRydWUsXHJcbiAgICAgICAgbmF2TGlua3M6IHRydWUsXHJcbiAgICAgICAgaGVpZ2h0OiA0NTAsXHJcbiAgICAgICAgYWxsRGF5U2xvdDogZmFsc2UsXHJcbiAgICAgICAgbG9jYWxlOiBcImZyXCIsXHJcbiAgICAgICAgZmlyc3REYXk6IDEsXHJcbiAgICAgICAgbWluVGltZTogXCIwODowMDowMFwiLFxyXG4gICAgICAgIG1heFRpbWU6IFwiMTg6MDE6MDBcIixcclxuICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChzdGFydCwgZW5kLGRhdGUpIHtcclxuICAgICAgICAgICAgaWYoJCgnI3NlbWVzdHJlJykudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF5ID0gbW9tZW50KHN0YXJ0KS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnR3ZWVrID0gbW9tZW50KHN0YXJ0LCBcIk1NRERZWVlZXCIpLmlzb1dlZWsoKTtcclxuICAgICAgICAgICAgICAgIGhldXJfZGVidXQ9IG1vbWVudChzdGFydCkuZm9ybWF0KCdISDptbScpXHJcbiAgICAgICAgICAgICAgICBoZXVyX2Zpbj0gbW9tZW50KGVuZCkuZm9ybWF0KCdISDptbScpXHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25faW5mb3MvJyskKCcjc2VtZXN0cmUnKS52YWwoKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiAuYWRkX3BsYW5uaW5nJykuaHRtbChzdWNjZXNzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1hZGRmb3JtX3BsYW5pZiAjaF9kZWJ1dCcpLnZhbChoZXVyX2RlYnV0KTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYWRkZm9ybV9wbGFuaWYgI2hfZmluJykudmFsKGhldXJfZmluKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYWRkZm9ybV9wbGFuaWYgc2VsZWN0Jykuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdldE1vZHVsZUJ5U2VtZXN0cmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjYWRkZm9ybV9wbGFuaWYtbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGlsbHMoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBldmVudFJlbmRlcjogZnVuY3Rpb24gKGV2ZW50LCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYmluZCgnZGJsY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBlZGl0X2dyb3VwZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50d2VlayA9IG1vbWVudChldmVudC5zdGFydCwgXCJNTUREWVlZWVwiKS5pc29XZWVrKCk7XHJcbiAgICAgICAgICAgICAgICBpZF9wbGFubmluZyA9IGV2ZW50LmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkX3BsYW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9wbGFuaWZpY2F0aW9uX2luZm9zX2VkaXQvJytpZF9wbGFubmluZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLXVwZGF0ZWZvcm1fcGxhbmlmIC51cGRhdGVfcGxhbm5pbmcnKS5odG1sKHN1Y2Nlc3MuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC11cGRhdGVmb3JtX3BsYW5pZiBzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGlsbHMoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBldmVudERyb3A6IGZ1bmN0aW9uIChldmVudCwgZGVsdGEsIHJldmVydEZ1bmMpIHsgXHJcbiAgICAgICAgICAgIGVkaXQoZXZlbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXZlbnRSZXNpemU6IGZ1bmN0aW9uIChldmVudCwgZGF5RGVsdGEsIG1pbnV0ZURlbHRhLCByZXZlcnRGdW5jKSB7IC8vIHNpIGNoYW5nZW1lbnQgZGUgbG9uZ3VldXJcclxuICAgICAgICAgICAgZWRpdChldmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgJChcImJvZHkgc2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgIC8vICQoXCIjbmF0dXJlX3NlYW5jZVwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI3NhbGxlXCIpLnNlbGVjdDIoKTtcclxuICAgIGNvbnN0IGFsbHRpbWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzZW1lc3RyZScsICQoXCIjc2VtZXN0cmVcIikudmFsKCkpOyBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduaXYnLCBuaXYpOyBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9mZXNzZXVyJywgIHByb2Zlc3NldXIpOyBcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2NhbGVuZGFyX3BsYW5uaW5nJyxmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvY2FsZW5kYXIvJytpZF9zZW1lc3RyZSsnLycrbml2KVxyXG4gICAgICAgICAgICAvLyBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2NhbGVuZGFyLycraWRfc2VtZXN0cmUrJy8nK25pdilcclxuICAgICAgICAgICAgYWxsdGltZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgLy8gVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIC8vICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdTb21lIEVycm9yISEnLFxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGFsbHRpbWVzKClcclxuICAgIGNvbnN0IGVkaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBzdGFydCA9IGV2ZW50LnN0YXJ0LmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgICAgIGlmIChldmVudC5lbmQpIHtcclxuICAgICAgICAgICAgZW5kID0gZXZlbnQuZW5kLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVuZCA9IHN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZF9lbXB0aW1lID0gZXZlbnQuaWQ7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzdGFydCcsc3RhcnQpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdlbmQnLGVuZClcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbnNfZWRpdEV2ZW50RGF0ZS8nK2lkX2VtcHRpbWUsZm9ybURhdGEpXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlcXVlc3QuZGF0YSxcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnKTsgXHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdhZGRFdmVudFNvdXJjZScsIGFsbHRpbWUpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXYxJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYyJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI25pdjEnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjInKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICBuaXYgPSAwO1xyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICBzZW1lc3RyZSA9IHJlcXVlc3QuZGF0YSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHNlbWVzdHJlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3R0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjEvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICBuaXYxID0gcmVxdWVzdHQuZGF0YSAgXHJcbiAgICAgICAgICAgICQoJyNuaXYxJykuaHRtbChuaXYxKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjc2VtZXN0cmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlkX3NlbWVzdHJlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGx0aW1lID0gW107XHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnKTsgXHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdhZGRFdmVudFNvdXJjZScsIGFsbHRpbWUpOyBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9mZXNzZXVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBwcm9mZXNzZXVyID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZiAocHJvZmVzc2V1ciA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHByb2Zlc3NldXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiICl7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjbml2MVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2MSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgLy8gbml2ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYobml2MSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5pdiA9IG5pdjE7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2Mi8nK25pdjEpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBuaXYgPSAwO1xyXG4gICAgICAgICAgICAvLyBhbGx0aW1lID0gW107XHJcbiAgICAgICAgICAgIC8vICQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcigncmVmZXRjaEV2ZW50cycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGx0aW1lID0gW107XHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdyZW1vdmVFdmVudHMnKTsgXHJcbiAgICAgICAgICAgICQoXCIjY2FsZW5kYXJcIikuZnVsbENhbGVuZGFyKCdhZGRFdmVudFNvdXJjZScsIGFsbHRpbWUpOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI25pdjMnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2MicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI25pdjJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdjIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKG5pdjIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBuaXYgPSBuaXYyO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL25pdjMvJytuaXYyKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbml2ID0gJCgnI25pdjEnKS52YWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfc2VtZXN0cmUgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYWxsdGltZSA9IFtdO1xyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcigncmVtb3ZlRXZlbnRzJyk7IFxyXG4gICAgICAgICAgICAkKFwiI2NhbGVuZGFyXCIpLmZ1bGxDYWxlbmRhcignYWRkRXZlbnRTb3VyY2UnLCBhbGx0aW1lKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXYzJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjbml2M1wiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2MyA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYobml2MyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIG5pdiA9IG5pdjM7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG5pdiA9ICQoJyNuaXYyJykudmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpe1xyXG4gICAgICAgICAgICBhbGx0aW1lcygpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsbHRpbWUgPSBbXTtcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycpOyBcclxuICAgICAgICAgICAgJChcIiNjYWxlbmRhclwiKS5mdWxsQ2FsZW5kYXIoJ2FkZEV2ZW50U291cmNlJywgYWxsdGltZSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ3JlZmV0Y2hFdmVudHMnKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2hhbmdlJywnI21vZHVsZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX21vZHVsZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZWxlbWVudC8nK2lkX21vZHVsZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdjaGFuZ2UnLCcjbmF0dXJlX3NlYW5jZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX25hdHVyZV9zZWFuY2UgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCBpZF9lbGVtZW50ID0gJCgnI2VsZW1lbnQnKS52YWwoKTtcclxuICAgICAgICBpZihpZF9lbGVtZW50ICE9IFwiXCIgJiYgaWRfbmF0dXJlX3NlYW5jZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZW5zZWlnbmFudHNCeVByb2dyYW1tZS8nK2lkX2VsZW1lbnQrJy8nK2lkX25hdHVyZV9zZWFuY2UpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBwaWxscygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbnNlaWduYW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2hhbmdlJywnI2VsZW1lbnQnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9lbGVtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgaWRfbmF0dXJlX3NlYW5jZSA9ICQoJyNuYXR1cmVfc2VhbmNlJykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2VsZW1lbnQgIT0gXCJcIiAmJiBpZF9uYXR1cmVfc2VhbmNlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9lbnNlaWduYW50c0J5UHJvZ3JhbW1lLycraWRfZWxlbWVudCsnLycraWRfbmF0dXJlX3NlYW5jZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIHBpbGxzKClcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Vuc2VpZ25hbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ3N1Ym1pdCcsJy5mb3JtX2FkZF9wbGFubmluZycsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbl9zZW1haW5lJywgY3VycmVudHdlZWspO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF5JywgY3VycmVudERheSlcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2dyb3VwZScsIG5pdilcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNhZGRmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIi5mb3JtX2FkZF9wbGFubmluZyAuYnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL3BsYW5pZmljYXRpb25zX2NhbGVuZGFyX2FkZCcsZm9ybURhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjYWRkZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPiR7ZGF0YX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7IFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgJChcIiNhZGRmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICQoJyNhZGRmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjYWRkZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNhZGRmb3JtX3BsYW5pZi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCcuZm9ybV91cGRhdGVfcGxhbm5pbmcnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2VkaXRfZ3JvdXBlJywgZWRpdF9ncm91cGUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbl9zZW1haW5lJywgY3VycmVudHdlZWspO1xyXG4gICAgICAgIC8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIuZm9ybV91cGRhdGVfcGxhbm5pbmcgLmJ0bl91cGRhdGVfcGxhbm5pbmcgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbmlmaWNhdGlvbnNfY2FsZW5kYXJfZWRpdC8nK2lkX3BsYW5uaW5nLGZvcm1EYXRhKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj4ke2RhdGF9PC9kaXY+YFxyXG4gICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGFsbHRpbWVzKClcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICQoJyN1cGRhdGVmb3JtX3BsYW5pZi1tb2RhbCcpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfSwgNDAwMCk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjdXBkYXRlZm9ybV9wbGFuaWYtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNwbGFubmluZ19kZWxldGUnLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkX3BsYW5uaW5nKXtcclxuICAgICAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IHN1cHByaW1lciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICAgICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3BsYW5uaW5nX2VucmVnaXN0cmUgLnVwZGF0ZV9wbGFubmluZyBpXCIpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9kZWxldGVfcGxhbm5pbmcvJytpZF9wbGFubmluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsdGltZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3VwZGF0ZWZvcm1fcGxhbmlmLW1vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCcjaW1wb3J0JywgYXN5bmMgZnVuY3Rpb24gKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcjaW1wb3J0X2VuX21hc3NlJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNwbGFubmluZ19jYW52YXMnLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICB3aW5kb3cub3BlbignL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvcGxhbm5pbmdfY2FudmFzJywgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNpbXBvcnRfcGxhbm5pbmdfc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcGxhbm5pbmdfZW5yZWdpc3RyZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9wbGFuaWZpY2F0aW9ucy9pbXBvcnQnLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywnI2dlbmVyZXInLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9zZW1lc3RyZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVm91cyBkZXZleiBjaG9pc2lyIFNlbWVzdHJlIGV0IE5pdmVhdSEhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLy8vL1xyXG4gICAgICAgIC8vIGxldCBjcm50ZGF5ID0gbW9tZW50KCQoJyNjYWxlbmRhcicpLmZ1bGxDYWxlbmRhcignZ2V0RGF0ZScpKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxyXG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiBWcmFpbWVudCBHw6luw6lyZXIgbGVzIHBsYW5pZmljYXRpb25zIGRlIGNldHRlIHNlbWFpbmUgPycpO1xyXG4gICAgICAgIGlmIChyZXMgPT0gMSkge1xyXG4gICAgICAgICAgICBjdXJyZW50d2VlayA9IG1vbWVudCgkKCcjY2FsZW5kYXInKS5mdWxsQ2FsZW5kYXIoJ2dldERhdGUnKSwgXCJNTUREWVlZWVwiKS5pc29XZWVrKCk7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25zZW1haW5lJyxjdXJyZW50d2VlaylcclxuICAgICAgICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdjcm50ZGF5Jyxjcm50ZGF5KVxyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNnZW5lcmVyIGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhYiBmYS1nZXQtcG9ja2V0JykuYWRkQ2xhc3MoXCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL2dlbmVyZXJfcGxhbm5pbmcvJytpZF9zZW1lc3RyZSsnLycrbml2LCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vcGxhbmlmaWNhdGlvbnMvZ2VuZXJlcl9wbGFubmluZy8xMDcvOScsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYWIgZmEtZ2V0LXBvY2tldCcpLnJlbW92ZUNsYXNzKFwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmFiIGZhLWdldC1wb2NrZXQnKS5yZW1vdmVDbGFzcyhcImZhcyBmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnI3NlYW5jZV9hYnNlbmNlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3BsYW5uaW5nKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBTZWxlY3Rpb25uZXIgdW5lIFNlYW5jZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL0dldEFic2VuY2VCeUdyb3VwZS8nK2lkX3BsYW5uaW5nLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnI2ZpY2hlX3NlcXVlbmNlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3BsYW5uaW5nKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBTZWxlY3Rpb25uZXIgdW5lIFNlYW5jZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL3BsYW5pZmljYXRpb25zL0dldHNlcXVlbmNlLycraWRfcGxhbm5pbmcsICdfYmxhbmsnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKCdjaGFuZ2UnLFwiI25pdmVhdTFcIiwgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2ZWF1MSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgLy8gbml2ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYobml2ZWF1MSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGVkaXRfZ3JvdXBlID0gbml2ZWF1MTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9uaXYyLycrbml2ZWF1MSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGVkaXRfZ3JvdXBlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI25pdmVhdTMnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbml2ZWF1MicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbignY2hhbmdlJyxcIiNuaXZlYXUyXCIsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IG5pdmVhdTIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKG5pdmVhdTIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBlZGl0X2dyb3VwZSA9IG5pdmVhdTI7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbml2My8nK25pdmVhdTIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBlZGl0X2dyb3VwZSA9ICQoJyNuaXZlYXUyJykudmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNuaXZlYXUzJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCJib2R5XCIpLm9uKCdjaGFuZ2UnLFwiI25pdmVhdTNcIiwgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3Qgbml2ZWF1MyA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgaWYobml2ZWF1MyAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGVkaXRfZ3JvdXBlID0gbml2ZWF1MztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZWRpdF9ncm91cGUgPSAkKCcjbml2ZWF1MicpLnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pICAgXHJcbn0pXHJcblxyXG4vLyBjb25zdCBhbGxMb2NhbGVzID0gcmVxdWlyZShcIi4uL2luY2x1ZGVzL2xvY2FsLWFsbFwiKTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcclxudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XHJcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcclxudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XHJcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XHJcblxyXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XHJcbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xyXG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xyXG52YXIgZmFjdG9yaWVzID0ge307XHJcblxyXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKEMsIGFyZ3NMZW5ndGgsIGFyZ3MpIHtcclxuICBpZiAoIWhhc093bihmYWN0b3JpZXMsIGFyZ3NMZW5ndGgpKSB7XHJcbiAgICBmb3IgKHZhciBsaXN0ID0gW10sIGkgPSAwOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSBsaXN0W2ldID0gJ2FbJyArIGkgKyAnXSc7XHJcbiAgICBmYWN0b3JpZXNbYXJnc0xlbmd0aF0gPSBGdW5jdGlvbignQyxhJywgJ3JldHVybiBuZXcgQygnICsgam9pbihsaXN0LCAnLCcpICsgJyknKTtcclxuICB9IHJldHVybiBmYWN0b3JpZXNbYXJnc0xlbmd0aF0oQywgYXJncyk7XHJcbn07XHJcblxyXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXHJcbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uYmluZCB8fCBmdW5jdGlvbiBiaW5kKHRoYXQgLyogLCAuLi5hcmdzICovKSB7XHJcbiAgdmFyIEYgPSBhQ2FsbGFibGUodGhpcyk7XHJcbiAgdmFyIFByb3RvdHlwZSA9IEYucHJvdG90eXBlO1xyXG4gIHZhciBwYXJ0QXJncyA9IGFycmF5U2xpY2UoYXJndW1lbnRzLCAxKTtcclxuICB2YXIgYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uIGJvdW5kKC8qIGFyZ3MuLi4gKi8pIHtcclxuICAgIHZhciBhcmdzID0gY29uY2F0KHBhcnRBcmdzLCBhcnJheVNsaWNlKGFyZ3VtZW50cykpO1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZEZ1bmN0aW9uID8gY29uc3RydWN0KEYsIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IEYuYXBwbHkodGhhdCwgYXJncyk7XHJcbiAgfTtcclxuICBpZiAoaXNPYmplY3QoUHJvdG90eXBlKSkgYm91bmRGdW5jdGlvbi5wcm90b3R5cGUgPSBQcm90b3R5cGU7XHJcbiAgcmV0dXJuIGJvdW5kRnVuY3Rpb247XHJcbn07XHJcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcclxudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XHJcblxyXG52YXIgRGF0ZVByb3RvdHlwZSA9IERhdGUucHJvdG90eXBlO1xyXG52YXIgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSc7XHJcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xyXG52YXIgdW4kRGF0ZVRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRGF0ZVByb3RvdHlwZVtUT19TVFJJTkddKTtcclxudmFyIGdldFRpbWUgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFRpbWUpO1xyXG5cclxuLy8gYERhdGUucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS50b3N0cmluZ1xyXG5pZiAoU3RyaW5nKG5ldyBEYXRlKE5hTikpICE9IElOVkFMSURfREFURSkge1xyXG4gIHJlZGVmaW5lKERhdGVQcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICB2YXIgdmFsdWUgPSBnZXRUaW1lKHRoaXMpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB1biREYXRlVG9TdHJpbmcodGhpcykgOiBJTlZBTElEX0RBVEU7XHJcbiAgfSk7XHJcbn1cclxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQnKTtcclxuXHJcbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcclxuJCh7IHRhcmdldDogJ0Z1bmN0aW9uJywgcHJvdG86IHRydWUgfSwge1xyXG4gIGJpbmQ6IGJpbmRcclxufSk7XHJcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xyXG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcclxudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcclxudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xyXG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xyXG5cclxudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcclxudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xyXG5cclxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XHJcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XHJcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xyXG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcclxuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcclxuICB9O1xyXG59O1xyXG5cclxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxyXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xyXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xyXG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcclxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XHJcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXHJcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcclxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxyXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcclxufSk7XHJcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsInBpbGxzIiwib24iLCJlIiwidGFiIiwiZ2V0TW9kdWxlQnlTZW1lc3RyZSIsImF4aW9zIiwiZ2V0IiwidmFsIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsImh0bWwiLCJzZWxlY3QyIiwiZWRpdF9ncm91cGUiLCJpZF9zZW1lc3RyZSIsInByb2Zlc3NldXIiLCJuaXYiLCJjdXJyZW50d2VlayIsImhldXJfZGVidXQiLCJoZXVyX2ZpbiIsImQiLCJEYXRlIiwiZGF5IiwiZ2V0RGF5IiwiY3VycmVudERheSIsImlkX3BsYW5uaW5nIiwiYWxsdGltZSIsImZ1bGxDYWxlbmRhciIsImxhbmciLCJjdXN0b21CdXR0b25zIiwibXlDdXN0b21CdXR0b24iLCJ0ZXh0IiwiY2xpY2siLCJjdXJyZW50V2VlayIsIm1vbWVudCIsImlzb1dlZWsiLCJjdXJyZW50RGF0ZSIsImZvcm1hdCIsIndpbmRvdyIsIm9wZW4iLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZXZlbnRzIiwiaGVhZGVyIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiZGVmYXVsdFZpZXciLCJlZGl0YWJsZSIsImV2ZW50TGltaXQiLCJzZWxlY3RhYmxlIiwic2VsZWN0SGVscGVyIiwibmF2TGlua3MiLCJoZWlnaHQiLCJhbGxEYXlTbG90IiwibG9jYWxlIiwiZmlyc3REYXkiLCJtaW5UaW1lIiwibWF4VGltZSIsInNlbGVjdCIsInN0YXJ0IiwiZW5kIiwiZGF0ZSIsInRoZW4iLCJzdWNjZXNzIiwibW9kYWwiLCJlcnIiLCJldmVudFJlbmRlciIsImV2ZW50IiwiZWxlbWVudCIsImJpbmQiLCJpZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJldmVudERyb3AiLCJkZWx0YSIsInJldmVydEZ1bmMiLCJlZGl0IiwiZXZlbnRSZXNpemUiLCJkYXlEZWx0YSIsIm1pbnV0ZURlbHRhIiwiYWxsdGltZXMiLCJhcHBlbmQiLCJwb3N0IiwiaWRfZW1wdGltZSIsImlkX2V0YWIiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJzZW1lc3RyZSIsInJlcXVlc3R0Iiwibml2MSIsIm5pdjIiLCJuaXYzIiwiaWRfbW9kdWxlIiwiaWRfbmF0dXJlX3NlYW5jZSIsImlkX2VsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInByZXBlbmQiLCJzZXRUaW1lb3V0IiwibWVzc2FnZSIsInJlcyIsImNvbmZpcm0iLCJuaXZlYXUxIiwibml2ZWF1MiIsIm5pdmVhdTMiXSwic291cmNlUm9vdCI6IiJ9