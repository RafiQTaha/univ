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
              _context.next = 16;
              break;
            }

            table_gestion_planification.columns(0).search(id_etab).draw();

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
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

            _context.next = 12;
            return axios.get('/api/formation/' + id_etab);

          case 12:
            request = _context.sent;
            response = request.data;
            _context.next = 22;
            break;

          case 16:
            table_gestion_planification.columns().search("").draw();

            if ($("#semaine").val() != "") {
              table_gestion_planification.columns(6).search($("#semaine").val());
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

          case 22:
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#promotion').html('').select2();
            $('#formation').html(response).select2();

          case 27:
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
              _context2.next = 16;
              break;
            }

            table_gestion_planification.columns(1).search(id_formation).draw();
            _context2.next = 12;
            return axios.get('/api/promotion/' + id_formation);

          case 12:
            request = _context2.sent;
            response = request.data;
            _context2.next = 17;
            break;

          case 16:
            table_gestion_planification.columns(0).search($("#etablissement").val()).draw();

          case 17:
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#promotion').html(response).select2();

          case 21:
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
              _context3.next = 15;
              break;
            }

            table_gestion_planification.columns(2).search(id_promotion).draw();
            _context3.next = 11;
            return axios.get('/api/semestre/' + id_promotion);

          case 11:
            request = _context3.sent;
            response = request.data;
            _context3.next = 16;
            break;

          case 15:
            table_gestion_planification.columns(1).search($("#formation").val()).draw();

          case 16:
            $('#semestre').html('').select2();
            $('#module').html('').select2();
            $('#element').html('').select2();
            $('#semestre').html(response).select2();

          case 20:
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
              _context4.next = 15;
              break;
            }

            _context4.next = 10;
            return axios.get('/api/module/' + id_semestre);

          case 10:
            request = _context4.sent;
            table_gestion_planification.columns(3).search(id_semestre).draw();
            response = request.data;
            _context4.next = 16;
            break;

          case 15:
            table_gestion_planification.columns(2).search($("#promotion").val()).draw();

          case 16:
            $('#element').html('').select2();
            $('#module').html(response).select2();

          case 18:
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
              _context5.next = 15;
              break;
            }

            table_gestion_planification.columns(4).search(id_module).draw();
            _context5.next = 11;
            return axios.get('/api/element/' + id_module);

          case 11:
            request = _context5.sent;
            response = request.data;
            _context5.next = 16;
            break;

          case 15:
            table_gestion_planification.columns(3).search($("#semestre").val()).draw();

          case 16:
            $('#element').html(response).select2();

          case 17:
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

          case 8:
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
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var res, icon, formData, request, _response, message;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();

              if (!(ids_planning.length === 0)) {
                _context12.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context12.abrupt("return");

            case 4:
              res = confirm('Vous voulez vraiment supprimer cette enregistrement ?');

              if (!(res == 1)) {
                _context12.next = 25;
                break;
              }

              icon = $("#supprimer i");
              icon.removeClass('fa-trash').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_planning', JSON.stringify(ids_planning));
              _context12.prev = 10;
              _context12.next = 13;
              return axios.post('/planification/gestions/gestion_delete_planning', formData);

            case 13:
              request = _context12.sent;
              _response = request.data;
              Toast.fire({
                icon: 'success',
                title: _response
              });
              ids_planning = [];
              table_gestion_planification.ajax.reload(null, false);
              icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
              _context12.next = 25;
              break;

            case 21:
              _context12.prev = 21;
              _context12.t0 = _context12["catch"](10);
              message = _context12.t0.response.data;
              icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");

            case 25:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[10, 21]]);
    }));

    return function (_x) {
      return _ref12.apply(this, arguments);
    };
  }());
  $('body').on('click', '#annulation', /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
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
              $('#annuler_planning_modal').modal("show"); // setTimeout(() => {
              //     $('#annuler_planning_modal').modal("hide");
              // }, 1000);

            case 5:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function (_x2) {
      return _ref13.apply(this, arguments);
    };
  }());
  $('body').on('click', '#Annuler_planning', /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
      var res, icon, formData, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              e.preventDefault();

              if (!(ids_planning.length === 0)) {
                _context14.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context14.abrupt("return");

            case 4:
              if (!($('#motif_annuler').val() == "")) {
                _context14.next = 7;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir Le Motif d\'annulation'
              });
              return _context14.abrupt("return");

            case 7:
              // alert($('#annuler_select').val());
              res = confirm('Vous voulez vraiment Annuler cette Seance ?');

              if (!(res == 1)) {
                _context14.next = 29;
                break;
              }

              icon = $("#Annuler_planning i");
              icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_planning', JSON.stringify(ids_planning));
              formData.append('motif_annuler', $('#motif_annuler').val());
              _context14.prev = 14;
              _context14.next = 17;
              return axios.post('/planification/gestions/gestion_annuler_planning', formData);

            case 17:
              request = _context14.sent;
              _response2 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response2
              });
              ids_planning = [];
              table_gestion_planification.ajax.reload(null, false);
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              _context14.next = 29;
              break;

            case 25:
              _context14.prev = 25;
              _context14.t0 = _context14["catch"](14);
              message = _context14.t0.response.data;
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");

            case 29:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14, null, [[14, 25]]);
    }));

    return function (_x3) {
      return _ref14.apply(this, arguments);
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
  $("body").on("click", '#fiche_sequence', function (e) {
    e.preventDefault();

    if (!id_planning) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de Selectionner une Seance'
      });
      return;
    }

    window.open('/planification/gestions/Getsequence_gestion/' + id_planning, '_blank');
  });
  $('body').on('click', '#validation', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var icon, formData, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              e.preventDefault();

              if (!(ids_planning.length === 0)) {
                _context15.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir au moins une ligne'
              });
              return _context15.abrupt("return");

            case 4:
              icon = $("#validation i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('ids_planning', JSON.stringify(ids_planning));
              _context15.prev = 8;
              _context15.next = 11;
              return axios.post('/planification/gestions/gestion_valider_planning', formData);

            case 11:
              request = _context15.sent;
              _response3 = request.data;
              Toast.fire({
                icon: 'success',
                title: _response3
              });
              table_gestion_planification.ajax.reload(null, false);
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              _context15.next = 22;
              break;

            case 18:
              _context15.prev = 18;
              _context15.t0 = _context15["catch"](8);
              message = _context15.t0.response.data;
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");

            case 22:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, null, [[8, 18]]);
    }));

    return function (_x4) {
      return _ref15.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsbUdBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNwQ0QsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BsYW5pZmljYXRpb24vZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICBsZXQgaWRfcGxhbm5pbmcgPSBmYWxzZTtcclxuICAgIGxldCBpZHNfcGxhbm5pbmcgPSBbXTtcclxuICAgIHZhciB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24gPSAkKFwiI2RhdGFibGVzX2dlc3Rpb25fcGxhbmlmaWNhdGlvblwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9wbGFuaWZpY2F0aW9uL2dlc3Rpb25zL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWRzX3BsYW5uaW5nLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfcGxhbm5pbmcpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjYW5udWxlclwiKS52YWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZigkKFwiI3ZhbGlkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiN2YWxpZGVcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCQoXCIjYW5udWxlclwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI2FubnVsZXJcIikudmFsKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoJChcIiN2YWxpZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjdmFsaWRlXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKFwiI3NlbWFpbmVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDYpLnNlYXJjaCgkKFwiI3NlbWFpbmVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNykuc2VhcmNoKCQoXCIjcHJvZmVzc2V1clwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNncmFkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOCkuc2VhcmNoKCQoXCIjZ3JhZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjYW5udWxlclwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoOSkuc2VhcmNoKCQoXCIjYW5udWxlclwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiN2YWxpZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDEwKS5zZWFyY2goJChcIiN2YWxpZGVcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKCcnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg5KS5zZWFyY2goJChcIiNhbm51bGVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3ZhbGlkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMTApLnNlYXJjaCgkKFwiI3ZhbGlkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMikuc2VhcmNoKGlkX3Byb21vdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwoJycpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2FubnVsZXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI2FubnVsZXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjdmFsaWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjdmFsaWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycraWRfc2VtZXN0cmUpO1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygzKS5zZWFyY2goaWRfc2VtZXN0cmUpLmRyYXcoKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbCgnJykuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNtb2R1bGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJChcIiNzZW1haW5lXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg2KS5zZWFyY2goJChcIiNzZW1haW5lXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDcpLnNlYXJjaCgkKFwiI3Byb2Zlc3NldXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjZ3JhZGVcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDgpLnNlYXJjaCgkKFwiI2dyYWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2FubnVsZXJcIikudmFsKCkgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDkpLnNlYXJjaCgkKFwiI2FubnVsZXJcIikudmFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoXCIjdmFsaWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMCkuc2VhcmNoKCQoXCIjdmFsaWRlXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9tb2R1bGUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg0KS5zZWFyY2goaWRfbW9kdWxlKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZWxlbWVudC8nK2lkX21vZHVsZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI3NlbWVzdHJlXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2VsZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2VsZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQoXCIjc2VtYWluZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNikuc2VhcmNoKCQoXCIjc2VtYWluZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg3KS5zZWFyY2goJChcIiNwcm9mZXNzZXVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI2dyYWRlXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg4KS5zZWFyY2goJChcIiNncmFkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJChcIiNhbm51bGVyXCIpLnZhbCgpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg5KS5zZWFyY2goJChcIiNhbm51bGVyXCIpLnZhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZigkKFwiI3ZhbGlkZVwiKS52YWwoKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoMTApLnNlYXJjaCgkKFwiI3ZhbGlkZVwiKS52YWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmNvbHVtbnMoNSkuc2VhcmNoKGlkX2VsZW1lbnQpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWFpbmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IHNlbWFpbmUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDYpLnNlYXJjaChzZW1haW5lKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9mZXNzZXVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9mID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg3KS5zZWFyY2goaWRfcHJvZikuZHJhdygpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZ3JhZGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGdyYWRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucyg4KS5zZWFyY2goZ3JhZGUpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2FubnVsZXJcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGFubnVsZXIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbi5jb2x1bW5zKDkpLnNlYXJjaChhbm51bGVyKS5kcmF3KCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiN2YWxpZGVyXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCB2YWxpZGVyID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uY29sdW1ucygxMCkuc2VhcmNoKHZhbGlkZXIpLmRyYXcoKTtcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGFibGVzX2dlc3Rpb25fcGxhbmlmaWNhdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfcGxhbm5pbmcgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YWJsZXNfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfcGxhbm5pbmcgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmIChpbnB1dC5oYXNDbGFzcygnY2hlY2tfcmVnJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZHNfcGxhbm5pbmcuaW5kZXhPZihpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfcGxhbm5pbmcuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZHNfcGxhbm5pbmcucHVzaChpbnB1dC5hdHRyKFwiZGF0YS1pZFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI3N1cHByaW1lcicsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKGlkc19wbGFubmluZy5sZW5ndGggPT09IDAgKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBhdSBtb2lucyB1bmUgbGlnbmUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBzdXBwcmltZXIgY2V0dGUgZW5yZWdpc3RyZW1lbnQgPycpO1xyXG4gICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc3VwcHJpbWVyIGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRyYXNoJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkc19wbGFubmluZycsIEpTT04uc3RyaW5naWZ5KGlkc19wbGFubmluZykpOyBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9nZXN0aW9ucy9nZXN0aW9uX2RlbGV0ZV9wbGFubmluZycsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlkc19wbGFubmluZyA9IFtdXHJcbiAgICAgICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10cmFzaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10cmFzaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgXHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNhbm51bGF0aW9uJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRzX3BsYW5uaW5nLmxlbmd0aCA9PT0gMCApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIGF1IG1vaW5zIHVuZSBsaWduZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2FubnVsZXJfcGxhbm5pbmdfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICQoJyNhbm51bGVyX3BsYW5uaW5nX21vZGFsJykubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgIC8vIH0sIDEwMDApO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNBbm51bGVyX3BsYW5uaW5nJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRzX3BsYW5uaW5nLmxlbmd0aCA9PT0gMCApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIGF1IG1vaW5zIHVuZSBsaWduZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJCgnI21vdGlmX2FubnVsZXInKS52YWwoKSA9PSBcIlwiICl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBMZSBNb3RpZiBkXFwnYW5udWxhdGlvbicsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYWxlcnQoJCgnI2FubnVsZXJfc2VsZWN0JykudmFsKCkpO1xyXG4gICAgICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBBbm51bGVyIGNldHRlIFNlYW5jZSA/Jyk7XHJcbiAgICAgICAgaWYocmVzID09IDEpe1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNBbm51bGVyX3BsYW5uaW5nIGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZHNfcGxhbm5pbmcnLCBKU09OLnN0cmluZ2lmeShpZHNfcGxhbm5pbmcpKTsgXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbW90aWZfYW5udWxlcicsICQoJyNtb3RpZl9hbm51bGVyJykudmFsKCkpOyBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9nZXN0aW9ucy9nZXN0aW9uX2FubnVsZXJfcGxhbm5pbmcnLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZHNfcGxhbm5pbmcgPSBbXVxyXG4gICAgICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wbGFuaWZpY2F0aW9uLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMtY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgXHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnI2xpc3RfYWJzZW5jZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgU2VsZWN0aW9ubmVyIHVuZSBTZWFuY2UnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9nZXN0aW9ucy9HZXRBYnNlbmNlQnlHcm91cGVfZ2VzdGlvbi8nK2lkX3BsYW5uaW5nLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJyNmaWNoZV9zZXF1ZW5jZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9wbGFubmluZyl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgU2VsZWN0aW9ubmVyIHVuZSBTZWFuY2UnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcGxhbmlmaWNhdGlvbi9nZXN0aW9ucy9HZXRzZXF1ZW5jZV9nZXN0aW9uLycraWRfcGxhbm5pbmcsICdfYmxhbmsnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyN2YWxpZGF0aW9uJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoaWRzX3BsYW5uaW5nLmxlbmd0aCA9PT0gMCApe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgYXUgbW9pbnMgdW5lIGxpZ25lJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiN2YWxpZGF0aW9uIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkc19wbGFubmluZycsIEpTT04uc3RyaW5naWZ5KGlkc19wbGFubmluZykpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGxhbmlmaWNhdGlvbi9nZXN0aW9ucy9nZXN0aW9uX3ZhbGlkZXJfcGxhbm5pbmcnLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3BsYW5pZmljYXRpb24uYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICBcclxuICAgIFxyXG59KSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIvLyBpdGVyYWJsZSBET00gY29sbGVjdGlvbnNcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBDU1NSdWxlTGlzdDogMCxcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcbiAgQ1NTVmFsdWVMaXN0OiAwLFxuICBDbGllbnRSZWN0TGlzdDogMCxcbiAgRE9NUmVjdExpc3Q6IDAsXG4gIERPTVN0cmluZ0xpc3Q6IDAsXG4gIERPTVRva2VuTGlzdDogMSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXG4gIEZpbGVMaXN0OiAwLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgSFRNTENvbGxlY3Rpb246IDAsXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gIE1lZGlhTGlzdDogMCxcbiAgTWltZVR5cGVBcnJheTogMCxcbiAgTmFtZWROb2RlTWFwOiAwLFxuICBOb2RlTGlzdDogMSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcbiAgUGx1Z2luOiAwLFxuICBQbHVnaW5BcnJheTogMCxcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcbiAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXG4gIFNWR1BvaW50TGlzdDogMCxcbiAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcbiAgU3R5bGVTaGVldExpc3Q6IDAsXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXG4gIFRleHRUcmFja0xpc3Q6IDAsXG4gIFRvdWNoTGlzdDogMFxufTtcbiIsIi8vIGluIG9sZCBXZWJLaXQgdmVyc2lvbnMsIGBlbGVtZW50LmNsYXNzTGlzdGAgaXMgbm90IGFuIGluc3RhbmNlIG9mIGdsb2JhbCBgRE9NVG9rZW5MaXN0YFxudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG52YXIgY2xhc3NMaXN0ID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdzcGFuJykuY2xhc3NMaXN0O1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IGNsYXNzTGlzdCAmJiBjbGFzc0xpc3QuY29uc3RydWN0b3IgJiYgY2xhc3NMaXN0LmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBET01Ub2tlbkxpc3RQcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGUgPyB1bmRlZmluZWQgOiBET01Ub2tlbkxpc3RQcm90b3R5cGU7XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9wbGFubmluZyIsImlkc19wbGFubmluZyIsInRhYmxlX2dlc3Rpb25fcGxhbmlmaWNhdGlvbiIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJyZXNwb25zZSIsImRyYXciLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsImlkX3NlbWVzdHJlIiwiaWRfbW9kdWxlIiwiaWRfZWxlbWVudCIsInNlbWFpbmUiLCJpZF9wcm9mIiwiZ3JhZGUiLCJhbm51bGVyIiwidmFsaWRlciIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImF0dHIiLCJpbnB1dCIsImlzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImxlbmd0aCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJyZXMiLCJjb25maXJtIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwicmVsb2FkIiwibWVzc2FnZSIsIm1vZGFsIiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=