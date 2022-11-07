(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestionPlanification"],{

/***/ "./assets/components/planification/gestion_planification.js":
/*!******************************************************************!*\
  !*** ./assets/components/planification/gestion_planification.js ***!
  \******************************************************************/
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
  var id_planning = false;
  var ids_planning = [];
  var table_gestion_planification = $("#datables_gestion_planification").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/planification/gestions/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      ids_planning.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_planning).addClass('active_databales');
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_gestion_planification')) {
        var dt = $('#datables_gestion_planification').DataTable(); //Abort previous ajax request if it is still in process.

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
  $("select").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            table_gestion_planification.columns().search("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 17;
              break;
            }

            table_gestion_planification.columns(0).search(id_etab).draw();

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#semaine_day").val() != "") {
              table_gestion_planification.columns(11).search($("#semaine_day").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

            _context.next = 13;
            return axios.get('/api/formation/' + id_etab);

          case 13:
            request = _context.sent;
            response = request.data;
            _context.next = 24;
            break;

          case 17:
            table_gestion_planification.columns().search("").draw();

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#semaine_day").val() != "") {
              table_gestion_planification.columns(11).search($("#semaine_day").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

          case 24:
            $('#semestre_day').html('').select2();
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 30:
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
            table_gestion_planification.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#semaine_day").val() != "") {
              table_gestion_planification.columns(11).search($("#semaine_day").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

            response = "";

            if (!(id_formation != "")) {
              _context2.next = 17;
              break;
            }

            table_gestion_planification.columns(1).search(id_formation).draw();
            _context2.next = 13;
            return axios.get('/api/promotion/' + id_formation);

          case 13:
            request = _context2.sent;
            response = request.data;
            _context2.next = 18;
            break;

          case 17:
            table_gestion_planification.columns(0).search($("#etablissement").val()).draw();

          case 18:
            $('#semestre_day').html('').select2();
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#promotion').html(response).select2();

          case 23:
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
            table_gestion_planification.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#semaine_day").val() != "") {
              table_gestion_planification.columns(11).search($("#semaine_day").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

            if (!(id_promotion != "")) {
              _context3.next = 16;
              break;
            }

            table_gestion_planification.columns(2).search(id_promotion).draw();
            _context3.next = 12;
            return axios.get('/api/semestre/' + id_promotion);

          case 12:
            request = _context3.sent;
            response = request.data;
            _context3.next = 17;
            break;

          case 16:
            table_gestion_planification.columns(1).search($("#formation").val()).draw();

          case 17:
            $('#semestre_day').html('').select2();
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#semestre').html(response).select2();

          case 22:
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
            table_gestion_planification.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#semaine_day").val() != "") {
              table_gestion_planification.columns(11).search($("#semaine_day").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

            if (!(id_semestre != "")) {
              _context4.next = 16;
              break;
            }

            _context4.next = 11;
            return axios.get('/api/module/' + id_semestre);

          case 11:
            request = _context4.sent;
            table_gestion_planification.columns(3).search(id_semestre).draw();
            response = request.data;
            _context4.next = 17;
            break;

          case 16:
            table_gestion_planification.columns(2).search($("#promotion").val()).draw();

          case 17:
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 19:
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
            table_gestion_planification.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#semaine_day").val() != "") {
              table_gestion_planification.columns(11).search($("#semaine_day").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

            if (!(id_module != "")) {
              _context5.next = 16;
              break;
            }

            table_gestion_planification.columns(4).search(id_module).draw();
            _context5.next = 12;
            return axios.get('/api/element/' + id_module);

          case 12:
            request = _context5.sent;
            response = request.data;
            _context5.next = 17;
            break;

          case 16:
            table_gestion_planification.columns(3).search($("#semestre").val()).draw();

          case 17:
            $('#element').html(response).select2();

          case 18:
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
            table_gestion_planification.columns().search("");

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
            }

            if ($("#semaine_day").val() != "") {
              table_gestion_planification.columns(11).search($("#semaine_day").val());
            }

            if ($("#professeur").val() != "") {
              table_gestion_planification.columns(7).search($("#professeur").val());
            }

            if ($("#grade").val() != "") {
              table_gestion_planification.columns(8).search($("#grade").val());
            }

            if ($("#annuler").val() != "") {
              table_gestion_planification.columns(9).search($("#annuler").val());
            }

            if ($("#valide").val() != "") {
              table_gestion_planification.columns(10).search($("#valide").val());
            }

            table_gestion_planification.columns(5).search(id_element).draw();

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#semaine").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var semaine;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            semaine = $(this).val();
            table_gestion_planification.columns(6).search(semaine).draw();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#professeur").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var id_prof;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id_prof = $(this).val();
            table_gestion_planification.columns(7).search(id_prof).draw();

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  })));
  $("#grade").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var grade;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            grade = $(this).val();
            table_gestion_planification.columns(8).search(grade).draw();

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  })));
  $("#annuler").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var annuler;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            annuler = $(this).val();
            table_gestion_planification.columns(9).search(annuler).draw();

          case 2:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $("#valider").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var valider;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            valider = $(this).val();
            table_gestion_planification.columns(10).search(valider).draw();

          case 2:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this);
  })));
  $("#semaine_day").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var semaine_day;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            semaine_day = $(this).val();
            console.log(semaine_day);
            table_gestion_planification.columns(11).search(semaine_day).draw();

          case 3:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }))); // $("#semaine_day").select2({
  //     minimumInputLength: 10,  // required enter 3 characters or more
  //     allowClear: true,
  //     placeholder: '2022-10-10',
  //     language: "fr",
  //     ajax: {
  //        dataType: 'json',
  //        url: '/planification/gestions/findSemainePlanning',  
  //        delay: 5,  // ini bebas mau di pake atau tidak
  //        data: function(params) {
  //          return {
  //            search: params.term
  //          }
  //        },
  //        processResults: function (data, page) {
  //         console.log(data)
  //         var list = {
  //             text: "Semaine " +data.nsemaine +" de: "+data.debut + " à " +data.fin,
  //             id: data.id
  //         }
  //         return {
  //             results:  [list]
  //         };
  //      },
  //    }
  // })

  $('body').on('dblclick', '#datables_gestion_planification tbody tr', function (e) {
    e.preventDefault();

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_planning = null;
    } else {
      $("#datables_gestion_planification tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_planning = $(this).attr('id');
    }
  });
  $('body').on('click', '#datables_gestion_planification tbody tr', function (e) {
    e.preventDefault();
    var input = $(this).find("input");

    if (input.hasClass('check_reg')) {
      return;
    } else {
      if (input.is(":checked")) {
        input.prop("checked", false);
        var index = ids_planning.indexOf(input.attr("data-id"));
        ids_planning.splice(index, 1);
      } else {
        input.prop("checked", true);
        ids_planning.push(input.attr("data-id"));
      }
    }
  });
  $('body').on('click', '#supprimer', /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
      var res, icon, formData, request, _response, message;

      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault();

              if (!(ids_planning.length === 0)) {
                _context13.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context13.abrupt("return");

            case 4:
              res = confirm('Vous voulez vraiment supprimer cette enregistrement ?');

              if (!(res == 1)) {
                _context13.next = 25;
                break;
              }

              icon = $("#supprimer i");
              icon.removeClass('fa-trash').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_planning', JSON.stringify(ids_planning));
              _context13.prev = 10;
              _context13.next = 13;
              return axios.post('/planification/gestions/gestion_delete_planning', formData);

            case 13:
              request = _context13.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: _response
              });
              ids_planning = [];
              table_gestion_planification.ajax.reload(null, false);
              icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
              _context13.next = 25;
              break;

            case 21:
              _context13.prev = 21;
              _context13.t0 = _context13["catch"](10);
              message = _context13.t0.response.data;
              icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");

            case 25:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, null, [[10, 21]]);
    }));

    return function (_x) {
      return _ref13.apply(this, arguments);
    };
  }());
  $('body').on('click', '#annulation', /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();

              if (id_planning) {
                _context14.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir une ligne'
              });
              return _context14.abrupt("return");

            case 4:
              $('#annuler_planning_modal').modal("show"); // setTimeout(() => {
              //     $('#annuler_planning_modal').modal("hide");
              // }, 1000);

            case 5:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    return function (_x2) {
      return _ref14.apply(this, arguments);
    };
  }());
  $("body #motif_annuler").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            if ($('#motif_annuler').val() == "Autre") {
              $("body #autre_motif").removeClass('d-none').addClass('d-block');
            } else {
              $("body #autre_motif").removeClass('d-block').addClass('d-none');
            }

          case 1:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  })));
  $('body').on('click', '#Annuler_planning', /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(e) {
      var res, icon, formData, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              e.preventDefault(); // if(ids_planning.length === 0 ){
              //     Toast.fire({
              //     icon: 'error',
              //     title: 'Merci de Choisir au moins une ligne',
              //     })
              //     return;
              // }

              if (id_planning) {
                _context16.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir une ligne'
              });
              return _context16.abrupt("return");

            case 4:
              if (!($('#motif_annuler').val() == "")) {
                _context16.next = 7;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir Le Motif d\'annulation'
              });
              return _context16.abrupt("return");

            case 7:
              // alert($('#annuler_select').val());
              res = confirm('Vous voulez vraiment Annuler cette Seance ?');

              if (!(res == 1)) {
                _context16.next = 31;
                break;
              }

              icon = $("#Annuler_planning i");
              icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
              formData = new FormData(); // formData.append('ids_planning', JSON.stringify(ids_planning)); 

              formData.append('motif_annuler', $('#motif_annuler').val());
              formData.append('autre_motif', $('#autre_motif').val());
              _context16.prev = 14;
              _context16.next = 17;
              return axios.post('/planification/gestions/gestion_annuler_planning/' + id_planning, formData);

            case 17:
              request = _context16.sent;
              _response2 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response2
              }); // ids_planning = []

              id_planning = false;
              $('#annuler_planning_modal').modal("hide");
              table_gestion_planification.ajax.reload(null, false);
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              _context16.next = 31;
              break;

            case 26:
              _context16.prev = 26;
              _context16.t0 = _context16["catch"](14);
              message = _context16.t0.response.data;
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 31:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16, null, [[14, 26]]);
    }));

    return function (_x3) {
      return _ref16.apply(this, arguments);
    };
  }());
  $("body").on("click", '#list_absence', function (e) {
    e.preventDefault();

    if (!id_planning) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de Selectionner une Seance'
      });
      return;
    }

    window.open('/planification/gestions/GetAbsenceByGroupe_gestion/' + id_planning, '_blank');
  });
  $("body").on("click", '#fiche_sequence', /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              e.preventDefault();

              if (id_planning) {
                _context17.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Selectionner une Seance'
              });
              return _context17.abrupt("return");

            case 4:
              window.open('/planification/gestions/Getsequence_gestion/' + id_planning, '_blank');

            case 5:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }));

    return function (_x4) {
      return _ref17.apply(this, arguments);
    };
  }());
  $('body').on('click', '#validation', /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(e) {
      var icon, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              e.preventDefault();

              if (id_planning) {
                _context18.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir une ligne'
              });
              return _context18.abrupt("return");

            case 4:
              icon = $("#validation i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin"); // var formData = new FormData();
              // formData.append('ids_planning', JSON.stringify(ids_planning));

              _context18.prev = 6;
              _context18.next = 9;
              return axios.post('/planification/gestions/gestion_valider_planning/' + id_planning);

            case 9:
              request = _context18.sent;
              _response3 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response3
              });
              table_gestion_planification.ajax.reload(null, false);
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              _context18.next = 21;
              break;

            case 16:
              _context18.prev = 16;
              _context18.t0 = _context18["catch"](6);
              message = _context18.t0.response.data;
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 21:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18, null, [[6, 16]]);
    }));

    return function (_x5) {
      return _ref18.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction', /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e) {
      var icon;
      return regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              e.preventDefault();
              icon = $("#extraction i");
              window.open('/planification/gestions/extraction_planning', '_blank');

            case 3:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }));

    return function (_x6) {
      return _ref19.apply(this, arguments);
    };
  }());
  $('body').on('click', '#devalidation', /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(e) {
      var res, icon, request, _response4, message;

      return regeneratorRuntime.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              e.preventDefault();

              if (id_planning) {
                _context20.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Sélectionner une ligne'
              });
              return _context20.abrupt("return");

            case 4:
              res = confirm('Vous voulez vraiment dévalider cette seance ?');

              if (!(res == 1)) {
                _context20.next = 23;
                break;
              }

              icon = $("#devalidation i");
              icon.removeClass('fa-times').addClass("fa-spinner fa-spin");
              _context20.prev = 8;
              _context20.next = 11;
              return axios.post('/planification/gestions/gestion_devalider_planning/' + id_planning);

            case 11:
              request = _context20.sent;
              _response4 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response4
              });
              table_gestion_planification.ajax.reload(null, false);
              icon.addClass('fa-times').removeClass("fa-spinner fa-spin");
              _context20.next = 23;
              break;

            case 18:
              _context20.prev = 18;
              _context20.t0 = _context20["catch"](8);
              message = _context20.t0.response.data;
              icon.addClass('fa-times').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 23:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, null, [[8, 18]]);
    }));

    return function (_x7) {
      return _ref20.apply(this, arguments);
    };
  }());
  $('body').on('click', '#degenerer', /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(e) {
      var res, icon, request, _response5, message;

      return regeneratorRuntime.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              e.preventDefault();

              if (id_planning) {
                _context21.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Sélectionner une ligne'
              });
              return _context21.abrupt("return");

            case 4:
              res = confirm('Vous voulez vraiment dégénérer cette seance ?');

              if (!(res == 1)) {
                _context21.next = 23;
                break;
              }

              icon = $("#degenerer i");
              icon.removeClass('fa-times').addClass("fa-spinner fa-spin");
              _context21.prev = 8;
              _context21.next = 11;
              return axios.post('/planification/gestions/gestion_degenerer_planning/' + id_planning);

            case 11:
              request = _context21.sent;
              _response5 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response5
              });
              table_gestion_planification.ajax.reload(null, false);
              icon.addClass('fa-times').removeClass("fa-spinner fa-spin");
              _context21.next = 23;
              break;

            case 18:
              _context21.prev = 18;
              _context21.t0 = _context21["catch"](8);
              message = _context21.t0.response.data;
              icon.addClass('fa-times').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 23:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, null, [[8, 18]]);
    }));

    return function (_x8) {
      return _ref21.apply(this, arguments);
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/planification/gestion_planification.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUE2RDtBQUNqRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1RZO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLHFGQUE0QjtBQUMvQyxvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcENELGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMscUZBQTRCO0FBQ3ZELDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1QztBQUMzRSxjQUFjLG1CQUFPLENBQUMsdUZBQTZCO0FBQ25ELGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2Qzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wbGFuaWZpY2F0aW9uL2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2FtZS12YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgICAgICB0b2FzdDogdHJ1ZSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogMzAwMCxcclxuICAgICAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgbGV0IGlkX3BsYW5uaW5nID0gZmFsc2U7XHJcbiAgICBsZXQgaWRzX3BsYW5uaW5nID0gW107XHJcbiAgICB2YXIgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uID0gJChcIiNkYXRhYmxlc19nZXN0aW9uX3BsYW5pZmljYXRpb25cIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvcGxhbmlmaWNhdGlvbi9nZXN0aW9ucy9saXN0XCIsXHJcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlkc19wbGFubmluZy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGlkX3BsYW5uaW5nKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlRHJhd0NhbGxiYWNrOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJyNkYXRhYmxlc19nZXN0aW9uX3BsYW5pZmljYXRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2RhdGFibGVzX2dlc3Rpb25fcGxhbmlmaWNhdGlvbicpLkRhdGFUYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vQWJvcnQgcHJldmlvdXMgYWpheCByZXF1ZXN0IGlmIGl0IGlzIHN0aWxsIGluIHByb2Nlc3MuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSBkdC5zZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzWzBdLmpxWEhSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjc2VtYWluZV9kYXlcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMSkuc2VhcmNoKCQoXCIjc2VtYWluZV9kYXlcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjYW5udWxlclwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3ZhbGlkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiN2YWxpZGVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjc2VtYWluZV9kYXlcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMSkuc2VhcmNoKCQoXCIjc2VtYWluZV9kYXlcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjYW5udWxlclwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3ZhbGlkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiN2YWxpZGVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlX2RheScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVfZGF5XCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMSkuc2VhcmNoKCQoXCIjc2VtYWluZV9kYXlcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjYW5udWxlclwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjYW5udWxlclwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiN2YWxpZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiN2YWxpZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmVfZGF5JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVfZGF5XCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMSkuc2VhcmNoKCQoXCIjc2VtYWluZV9kYXlcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjYW5udWxlclwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjYW5udWxlclwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiN2YWxpZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiN2YWxpZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDIpLnNlYXJjaChpZF9wcm9tb3Rpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEpLnNlYXJjaCgkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmVfZGF5JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVfZGF5XCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMSkuc2VhcmNoKCQoXCIjc2VtYWluZV9kYXlcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjYW5udWxlclwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjYW5udWxlclwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiN2YWxpZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiN2YWxpZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJytpZF9zZW1lc3RyZSk7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDMpLnNlYXJjaChpZF9zZW1lc3RyZSkuZHJhdygpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygyKS5zZWFyY2goJChcIiNwcm9tb3Rpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI21vZHVsZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfbW9kdWxlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZV9kYXlcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDExKS5zZWFyY2goJChcIiNzZW1haW5lX2RheVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg5KS5zZWFyY2goJChcIiNhbm51bGVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3ZhbGlkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMTApLnNlYXJjaCgkKFwiI3ZhbGlkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfbW9kdWxlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNCkuc2VhcmNoKGlkX21vZHVsZSkuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VsZW1lbnQvJytpZF9tb2R1bGUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygzKS5zZWFyY2goJChcIiNzZW1lc3RyZVwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNlbGVtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9lbGVtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZV9kYXlcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDExKS5zZWFyY2goJChcIiNzZW1haW5lX2RheVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg5KS5zZWFyY2goJChcIiNhbm51bGVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3ZhbGlkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMTApLnNlYXJjaCgkKFwiI3ZhbGlkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNSkuc2VhcmNoKGlkX2VsZW1lbnQpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWFpbmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IHNlbWFpbmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDYpLnNlYXJjaChzZW1haW5lKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9mZXNzZXVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9mID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg3KS5zZWFyY2goaWRfcHJvZikuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZ3JhZGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGdyYWRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg4KS5zZWFyY2goZ3JhZGUpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2FubnVsZXJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGFubnVsZXIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDkpLnNlYXJjaChhbm51bGVyKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiN2YWxpZGVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCB2YWxpZGVyID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMCkuc2VhcmNoKHZhbGlkZXIpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWFpbmVfZGF5XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBzZW1haW5lX2RheSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VtYWluZV9kYXkpXHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMTEpLnNlYXJjaChzZW1haW5lX2RheSkuZHJhdygpO1xyXG4gICAgfSlcclxuICAgIC8vICQoXCIjc2VtYWluZV9kYXlcIikuc2VsZWN0Mih7XHJcbiAgICAvLyAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAxMCwgIC8vIHJlcXVpcmVkIGVudGVyIDMgY2hhcmFjdGVycyBvciBtb3JlXHJcbiAgICAvLyAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgIC8vICAgICBwbGFjZWhvbGRlcjogJzIwMjItMTAtMTAnLFxyXG4gICAgLy8gICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAvLyAgICAgYWpheDoge1xyXG4gICAgLy8gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAvLyAgICAgICAgdXJsOiAnL3BsYW5pZmljYXRpb24vZ2VzdGlvbnMvZmluZFNlbWFpbmVQbGFubmluZycsICBcclxuICAgIC8vICAgICAgICBkZWxheTogNSwgIC8vIGluaSBiZWJhcyBtYXUgZGkgcGFrZSBhdGF1IHRpZGFrXHJcbiAgICAvLyAgICAgICAgZGF0YTogZnVuY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAvLyAgICAgICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAgICBzZWFyY2g6IHBhcmFtcy50ZXJtXHJcbiAgICAvLyAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgfSxcclxuICAgIC8vICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKGRhdGEsIHBhZ2UpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgdmFyIGxpc3QgPSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0ZXh0OiBcIlNlbWFpbmUgXCIgK2RhdGEubnNlbWFpbmUgK1wiIGRlOiBcIitkYXRhLmRlYnV0ICsgXCIgw6AgXCIgK2RhdGEuZmluLFxyXG4gICAgLy8gICAgICAgICAgICAgaWQ6IGRhdGEuaWRcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgICAgIHJlc3VsdHM6ICBbbGlzdF1cclxuICAgIC8vICAgICAgICAgfTtcclxuICAgIC8vICAgICAgfSxcclxuICAgIC8vICAgIH1cclxuICAgIC8vIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGFibGVzX2dlc3Rpb25fcGxhbmlmaWNhdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfcGxhbm5pbmcgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfcGxhbm5pbmcgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmIChpbnB1dC5oYXNDbGFzcygnY2hlY2tfcmVnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZHNfcGxhbm5pbmcuaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfcGxhbm5pbmcuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfcGxhbm5pbmcucHVzaChpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI3N1cHByaW1lcicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkc19wbGFubmluZy5sZW5ndGggPT09IDAgKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBhdSBtb2lucyB1bmUgbGlnbmUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgZW5yZWdpc3RyZW1lbnQgPycpO1xyXG4gICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc3VwcHJpbWVyIGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRyYXNoJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkc19wbGFubmluZycsIEpTT04uc3RyaW5naWZ5KGlkc19wbGFubmluZykpOyBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9nZXN0aW9ucy9nZXN0aW9uX2RlbGV0ZV9wbGFubmluZycsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlkc19wbGFubmluZyA9IFtdXHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10cmFzaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10cmFzaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgXHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNhbm51bGF0aW9uJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3BsYW5uaW5nKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIHVuZSBsaWduZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2FubnVsZXJfcGxhbm5pbmdfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICQoJyNhbm51bGVyX3BsYW5uaW5nX21vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIC8vIH0sIDEwMDApO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICAkKFwiYm9keSAjbW90aWZfYW5udWxlclwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYgKCQoJyNtb3RpZl9hbm51bGVyJykudmFsKCkgPT0gXCJBdXRyZVwiICkge1xyXG4gICAgICAgICAgICAkKFwiYm9keSAjYXV0cmVfbW90aWZcIikucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpLmFkZENsYXNzKCdkLWJsb2NrJylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJChcImJvZHkgI2F1dHJlX21vdGlmXCIpLnJlbW92ZUNsYXNzKCdkLWJsb2NrJykuYWRkQ2xhc3MoJ2Qtbm9uZScpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjQW5udWxlcl9wbGFubmluZycsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGlmKGlkc19wbGFubmluZy5sZW5ndGggPT09IDAgKXtcclxuICAgICAgICAvLyAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgLy8gICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgLy8gICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBhdSBtb2lucyB1bmUgbGlnbmUnLFxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciB1bmUgbGlnbmUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoJyNtb3RpZl9hbm51bGVyJykudmFsKCkgPT0gXCJcIiApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgTGUgTW90aWYgZFxcJ2FubnVsYXRpb24nLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFsZXJ0KCQoJyNhbm51bGVyX3NlbGVjdCcpLnZhbCgpKTtcclxuICAgICAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgQW5udWxlciBjZXR0ZSBTZWFuY2UgPycpO1xyXG4gICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjQW5udWxlcl9wbGFubmluZyBpXCIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS10aW1lcy1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnaWRzX3BsYW5uaW5nJywgSlNPTi5zdHJpbmdpZnkoaWRzX3BsYW5uaW5nKSk7IFxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21vdGlmX2FubnVsZXInLCAkKCcjbW90aWZfYW5udWxlcicpLnZhbCgpKTsgXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYXV0cmVfbW90aWYnLCAkKCcjYXV0cmVfbW90aWYnKS52YWwoKSk7IFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL2dlc3Rpb25zL2dlc3Rpb25fYW5udWxlcl9wbGFubmluZycsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL2dlc3Rpb25zL2dlc3Rpb25fYW5udWxlcl9wbGFubmluZy8nK2lkX3BsYW5uaW5nLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyBpZHNfcGxhbm5pbmcgPSBbXVxyXG4gICAgICAgICAgICAgICAgaWRfcGxhbm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICQoJyNhbm51bGVyX3BsYW5uaW5nX21vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgIH0pXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcjbGlzdF9hYnNlbmNlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3BsYW5uaW5nKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBTZWxlY3Rpb25uZXIgdW5lIFNlYW5jZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL2dlc3Rpb25zL0dldEFic2VuY2VCeUdyb3VwZV9nZXN0aW9uLycraWRfcGxhbm5pbmcsICdfYmxhbmsnKTtcclxuICAgIH0pO1xyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnI2ZpY2hlX3NlcXVlbmNlJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3BsYW5uaW5nKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBTZWxlY3Rpb25uZXIgdW5lIFNlYW5jZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9wbGFuaWZpY2F0aW9uL2dlc3Rpb25zL0dldHNlcXVlbmNlX2dlc3Rpb24vJytpZF9wbGFubmluZywgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI3ZhbGlkYXRpb24nLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfcGxhbm5pbmcpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgdW5lIGxpZ25lJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiN2YWxpZGF0aW9uIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAvLyB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoJ2lkc19wbGFubmluZycsIEpTT04uc3RyaW5naWZ5KGlkc19wbGFubmluZykpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9nZXN0aW9ucy9nZXN0aW9uX3ZhbGlkZXJfcGxhbm5pbmcvJytpZF9wbGFubmluZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXh0cmFjdGlvbicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2V4dHJhY3Rpb24gaVwiKTtcclxuICAgICAgICB3aW5kb3cub3BlbignL3BsYW5pZmljYXRpb24vZ2VzdGlvbnMvZXh0cmFjdGlvbl9wbGFubmluZycsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICAgXHJcbiAgICBcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGV2YWxpZGF0aW9uJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3BsYW5uaW5nKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBTw6lsZWN0aW9ubmVyIHVuZSBsaWduZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IGTDqXZhbGlkZXIgY2V0dGUgc2VhbmNlID8nKTtcclxuICAgICAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RldmFsaWRhdGlvbiBpXCIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS10aW1lcycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wbGFuaWZpY2F0aW9uL2dlc3Rpb25zL2dlc3Rpb25fZGV2YWxpZGVyX3BsYW5uaW5nLycraWRfcGxhbm5pbmcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGVnZW5lcmVyJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX3BsYW5uaW5nKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBTw6lsZWN0aW9ubmVyIHVuZSBsaWduZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IGTDqWfDqW7DqXJlciBjZXR0ZSBzZWFuY2UgPycpO1xyXG4gICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZGVnZW5lcmVyIGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BsYW5pZmljYXRpb24vZ2VzdGlvbnMvZ2VzdGlvbl9kZWdlbmVyZXJfcGxhbm5pbmcvJytpZF9wbGFubmluZyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkiLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCIvLyBpbiBvbGQgV2ViS2l0IHZlcnNpb25zLCBgZWxlbWVudC5jbGFzc0xpc3RgIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBnbG9iYWwgYERPTVRva2VuTGlzdGBcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxudmFyIGNsYXNzTGlzdCA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnc3BhbicpLmNsYXNzTGlzdDtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSBjbGFzc0xpc3QgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yICYmIGNsYXNzTGlzdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NVG9rZW5MaXN0UHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlID8gdW5kZWZpbmVkIDogRE9NVG9rZW5MaXN0UHJvdG90eXBlO1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xuICB9XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfcGxhbm5pbmciLCJpZHNfcGxhbm5pbmciLCJ0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24iLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJmb3JFYWNoIiwiZSIsImZpbmQiLCJwcm9wIiwiYWRkQ2xhc3MiLCJwcmVEcmF3Q2FsbGJhY2siLCJzZXR0aW5ncyIsImZuIiwiaXNEYXRhVGFibGUiLCJkdCIsImpxWEhSIiwiYWJvcnQiLCJsYW5ndWFnZSIsInVybCIsInNlbGVjdDIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJjb2x1bW5zIiwic2VhcmNoIiwicmVzcG9uc2UiLCJkcmF3IiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJpZF9zZW1lc3RyZSIsImlkX21vZHVsZSIsImlkX2VsZW1lbnQiLCJzZW1haW5lIiwiaWRfcHJvZiIsImdyYWRlIiwiYW5udWxlciIsInZhbGlkZXIiLCJzZW1haW5lX2RheSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhdHRyIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInB1c2giLCJsZW5ndGgiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwicmVzIiwiY29uZmlybSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicG9zdCIsInJlbG9hZCIsIm1lc3NhZ2UiLCJtb2RhbCIsIndpbmRvdyIsIm9wZW4iXSwic291cmNlUm9vdCI6IiJ9