(self["webpackChunk"] = self["webpackChunk"] || []).push([["evaluationFormation"],{

/***/ "./assets/components/evaluation/formation.js":
/*!***************************************************!*\
  !*** ./assets/components/evaluation/formation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js"),
    async = _require.async;

var Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: function didOpen(toast) {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});
var check;
$(document).ready(function () {
  $(" #enregistrer, #imprimer, #recalculer , #ExtracDip").attr("disabled", true);
  typeSearch = 'all';
  console.log(typeSearch);
  $("#notes").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);

  var enableButtons = function enableButtons() {
    if (check == 1) {
      $("#enregistrer").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
      $("#imprimer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
      $("#recalculer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
      $("#ExtracDip").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
    } else if (check == 2) {
      $("#enregistrer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
      $("#imprimer").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
      $("#recalculer").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
      $("#ExtracDip").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
    } else {
      $("#enregistrer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
      $("#imprimer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
      $("#recalculer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
      $("#ExtracDip").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
    }
  };

  $("select").select2();
  $("#etablissement").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context.next = 7;
              break;
            }

            _context.next = 5;
            return axios.get("/api/formation/" + id_etab);

          case 5:
            request = _context.sent;
            response = request.data;

          case 7:
            $("#formation").html(response).select2();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            response = "";

            if (!(id_formation != "")) {
              _context2.next = 7;
              break;
            }

            _context2.next = 5;
            return axios.get("/api/annee/" + id_formation);

          case 5:
            request = _context2.sent;
            response = request.data;

          case 7:
            $("#annee").html(response).select2();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }))); // Event listener to the custom filter

  $("#min").change(function () {
    table.draw();
  });
  $("#recherche").on("click", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var annee_id, formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              admissions = [];
              e.preventDefault();
              $("#list_etu").empty();
              annee_id = $("#annee").val();

              if (!(annee_id == "" || !annee_id)) {
                _context3.next = 7;
                break;
              }

              Toast.fire({
                icon: "error",
                title: "Veuillez selection une annee!"
              });
              return _context3.abrupt("return");

            case 7:
              formData = new FormData();
              formData.append("typeSearch", typeSearch);
              icon = $("#recherche i");
              icon.removeClass("fa-search").addClass("fa-spinner fa-spin");
              _context3.prev = 11;
              _context3.next = 14;
              return axios.post("/evaluation/formation/list/" + annee_id, formData);

            case 14:
              request = _context3.sent;
              response = request.data; // console.log(response.html2);

              $("#infos").html(response.html1); // $("#list_etu").DataTable().destroy();

              if ($.fn.DataTable.isDataTable("#list_etu")) {
                $("#list_etu").DataTable().clear().destroy();
              }

              $("#list_etu").html(response.html2).DataTable({
                scrollX: true,
                language: {
                  url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                },
                lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
              });
              check = response.check; // console.log(check)

              enableButtons();
              icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
              element = '<div id="select-box" class="col-md-1"><label for="etablissement">Choix:</label> <select id="choice" class="form-control"><option value="all" default>All</option><option value="Full">Complet</option><option value="notFull">Incomplet</option></select> </div>';

              if ($('body .first-card .row #select-box').length == 0) {
                $("body .first-card .row").append(element);
                $('select').select2();
              }

              _context3.next = 32;
              break;

            case 26:
              _context3.prev = 26;
              _context3.t0 = _context3["catch"](11);
              console.log(_context3.t0);
              icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
              message = _context3.t0.response.data;
              Toast.fire({
                icon: "error",
                title: message
              });

            case 32:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[11, 26]]);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
  var id_admission = ""; // get etudiant notes

  var getEtudiantNotes = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var request, data;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              $('#editNotes #candidat_notes').html('');
              $('#editNotes  .alert').hide();
              _context4.prev = 2;
              _context4.next = 5;
              return axios.get('/evaluation/formation/getEtudiantNotes/' + id_admission);

            case 5:
              request = _context4.sent;
              data = request.data;
              $('#editNotes #candidat_notes').html(data['candidats_notes']);
              $('select').select2(); // console.log(data);

              _context4.next = 13;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](2);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 11]]);
    }));

    return function getEtudiantNotes() {
      return _ref4.apply(this, arguments);
    };
  }(); // pop up triggre after double click tr


  $("body").on("dblclick", "#list_etu tbody tr", function () {
    if (id_admission) {
      $("#" + id_admission).removeClass('active_databales');
      id_admission = "";
    } else {
      id_admission = $(this).attr("id");
      $(this).addClass('active_databales');
    }
  });
  $("#notes").on("click", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (id_admission == "") {
                Toast.fire({
                  icon: "error",
                  title: "Veuillez selectionner un etudiant!"
                });
              } else {
                getEtudiantNotes();
                $('#editNotes').modal('show');
              }

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }());
  $("#etatDip").on("click", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(id_admission == "")) {
                _context6.next = 3;
                break;
              }

              Toast.fire({
                icon: "error",
                title: "Veuillez selectionner un etudiant!"
              });
              return _context6.abrupt("return");

            case 3:
              window.open('/evaluation/formation/impressionDiplome/' + id_admission, '_blank');

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x3) {
      return _ref6.apply(this, arguments);
    };
  }()); // Insertion des notes or modification

  $('body').on('keyup', '.noteExterne', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var note, annee, _icon, formData, request, response, message;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!(e.which === 13)) {
                _context7.next = 33;
                break;
              }

              //on enter key
              note = $(this).val();
              annee = $(this).attr('annee');
              _icon = $(this).next().find('i');

              _icon.removeClass("fa-check").addClass("fa-spinner fa-spin");

              _icon.css('display', 'block');

              formData = new FormData();
              formData.append("note", note);
              formData.append("annee", annee);
              formData.append("admission", id_admission);
              _context7.prev = 10;
              _context7.next = 13;
              return axios.post("/evaluation/formation/add_notes", formData);

            case 13:
              request = _context7.sent;
              response = request.data;

              _icon.addClass("fa-check").removeClass("fa-spinner fa-spin");

              _icon.css('color', '#2ecc71');

              $(this).css('border-color', '#2ecc71');
              Toast.fire({
                icon: "success",
                title: response
              });
              check = response.check;
              enableButtons();
              $("#recherche").trigger("click");
              _context7.next = 32;
              break;

            case 24:
              _context7.prev = 24;
              _context7.t0 = _context7["catch"](10);
              console.log(_context7.t0);

              _icon.addClass("fa-times").removeClass("fa-spinner fa-spin");

              _icon.css('color', '#c0392b');

              $(this).css('border-color', '#c0392b');
              message = _context7.t0.response.data;
              Toast.fire({
                icon: "error",
                title: message
              });

            case 32:
              window.setTimeout(function () {
                _icon.css('display', 'none');

                $('body .noteExterne').css('border-color', '#696b7d');
                $('#editNotes').modal('hide');
              }, 2000);

            case 33:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[10, 24]]);
    }));

    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }()); // custom filter

  $("body ").on("change", "#choice", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var annee_id, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();
              annee_id = $("#annee").val();

              if ($(this).val() != undefined) {
                typeSearch = $(this).val();
              }

              console.log(typeSearch);
              formData = new FormData();
              formData.append("typeSearch", typeSearch);
              _context8.prev = 6;

              // $("#list_etu").DataTable().destroy();
              if ($.fn.DataTable.isDataTable("#list_etu")) {
                $("#list_etu").DataTable().clear().destroy();
              }

              _context8.next = 10;
              return axios.post("/evaluation/formation/list/" + annee_id, formData);

            case 10:
              request = _context8.sent;
              response = request.data;
              $("#infos").html(response.html1);
              $("#list_etu").html(response.html2).DataTable({
                scrollX: true,
                language: {
                  url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                },
                lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
              });
              check = response.check; // console.log(check)

              enableButtons();
              icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
              element = '<div id="select-box" class="col-md-1"><label for="etablissement">Choix:</label> <select id="choice" class="form-control"><option value="all" default>All</option><option value="notFull">not Full</option></select> </div>';

              if ($('body .first-card .row #select-box').length == 0) {
                $("body .first-card .row").append(element);
              }

              _context8.next = 27;
              break;

            case 21:
              _context8.prev = 21;
              _context8.t0 = _context8["catch"](6);
              console.log(_context8.t0);
              icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
              message = _context8.t0.response.data;
              Toast.fire({
                icon: "error",
                title: message
              });

            case 27:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this, [[6, 21]]);
    }));

    return function (_x5) {
      return _ref8.apply(this, arguments);
    };
  }());
  $("#enregistrer").on("click", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              icon = $("#enregistrer i");
              icon.removeClass("fa-check").addClass("fa-spinner fa-spin");
              _context9.prev = 2;
              _context9.next = 5;
              return axios.post("/evaluation/formation/enregistrer");

            case 5:
              request = _context9.sent;
              response = request.data;
              icon.addClass("fa-check").removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: "success",
                title: response.message
              });
              check = response.check;
              enableButtons();
              _context9.next = 19;
              break;

            case 13:
              _context9.prev = 13;
              _context9.t0 = _context9["catch"](2);
              console.log(_context9.t0);
              icon.addClass("fa-check").removeClass("fa-spinner fa-spin");
              message = _context9.t0.response.data;
              Toast.fire({
                icon: "error",
                title: message
              });

            case 19:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[2, 13]]);
    }));

    return function (_x6) {
      return _ref9.apply(this, arguments);
    };
  }());
  $("#imprimer").on("click", function () {
    window.open('/evaluation/formation/impression', '_blank');
  }); // $("#affichage").on("change", function () {
  //     let affichage = $(this).val();
  //     $("#impression_list").attr(
  //         "href",
  //         $("#impression_list").attr("href").slice(0, -1) + affichage
  //     );
  //     $("#impression_clair").attr(
  //         "href",
  //         $("#impression_clair").attr("href").slice(0, -1) + affichage
  //     );
  //     $("#impression_anonymat").attr(
  //         "href",
  //         $("#impression_anonymat").attr("href").slice(0, -1) + affichage
  //     );
  //     $("#impression_rat").attr(
  //         "href",
  //         $("#impression_rat").attr("href").slice(0, -1) + affichage
  //     );
  // });

  $("#recalculer").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            icon = $("#recalculer i");
            icon.removeClass("fa-redo-alt").addClass("fa-spinner fa-spin");
            _context10.prev = 2;
            _context10.next = 5;
            return axios.post("/evaluation/formation/recalculer");

          case 5:
            request = _context10.sent;
            response = request.data;
            icon.addClass("fa-redo-alt").removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: "success",
              title: response
            });
            _context10.next = 17;
            break;

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](2);
            console.log(_context10.t0);
            icon.addClass("fa-redo-alt").removeClass("fa-spinner fa-spin");
            message = _context10.t0.response.data;
            Toast.fire({
              icon: "error",
              title: message
            });

          case 17:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 11]]);
  }))); // $("#ExtracDip").on('click',function(){
  //     window.open('/evaluation/formation/extractiondiplome', '_blank');
  // })

  admissions = [];
  $("body").on("click", "#list_etu tbody tr", function () {
    var input = $(this).find("input.check_etu");

    if (input.prop("checked") == true) {
      input.prop("checked", false);
      var index = admissions.indexOf(input.attr("id"));
      admissions.splice(index, 1);
    } else {
      input.prop("checked", true);
      admissions.push(input.attr("id"));
    }

    console.log(admissions);
  }); // $('body').on('click','.check_etu',function (e) {
  //     e.preventDefault();
  // })

  $("body").on("click", ".check_all_formation", function () {
    // alert('test')
    admissions = [];
    var etu = $("body .check_etu");

    if ($(".check_all_formation").prop("checked") == true) {
      etu.prop("checked", true);
      etu.map(function () {
        admissions.push(this.value);
      }); // console.log(admissions);
    } else {
      etu.prop("checked", false);
    }

    console.log(admissions);
  });
  $("#ExtracDip").on("click", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              console.log(admissions);
              e.preventDefault();

              if (!(admissions.length == 0)) {
                _context11.next = 5;
                break;
              }

              Toast.fire({
                icon: "error",
                title: "Veuillez cochez une ou plusieurs ligne!"
              });
              return _context11.abrupt("return");

            case 5:
              formData = new FormData();
              formData.append("admissions", JSON.stringify(admissions));
              icon = $("#ExtracDip i");
              icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");
              _context11.prev = 9;
              _context11.next = 12;
              return axios.post("/evaluation/formation/extractiondiplome", formData);

            case 12:
              request = _context11.sent;
              response = request.data;
              window.open("/" + response.file, "_blank");
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
              _context11.next = 24;
              break;

            case 18:
              _context11.prev = 18;
              _context11.t0 = _context11["catch"](9);
              message = _context11.t0.response.data;
              console.log(_context11.t0, _context11.t0.response);
              Toast.fire({
                icon: "error",
                title: message
              });
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, null, [[9, 18]]);
    }));

    return function (_x7) {
      return _ref11.apply(this, arguments);
    };
  }());
  $('body').on('click', '#impression_diplome', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            if (id_sanction) {
              _context12.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection un etudiant!'
            });
            return _context12.abrupt("return");

          case 3:
            icon = $("#etat_notification i");
            icon.removeClass('fa-print').addClass("fa-spinner fa-spin");
            _context12.prev = 5;
            _context12.next = 8;
            return axios.post('/conseil/disciplinaire/verification_notification/' + id_sanction);

          case 8:
            request = _context12.sent;
            response = request.data;
            icon.addClass('fa-print').removeClass("fa-spinner fa-spin ");
            window.open('/conseil/disciplinaire/etatNotification/' + id_sanction, '_blank');
            _context12.next = 20;
            break;

          case 14:
            _context12.prev = 14;
            _context12.t0 = _context12["catch"](5);
            message = _context12.t0.response.data;
            console.log(_context12.t0, _context12.t0.response);
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-print').removeClass("fa-spinner fa-spin ");

          case 20:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[5, 14]]);
  }))); // $('body').on('click','#imprimer_diplome', async function (){
  //     if(!id_sanction){
  //         Toast.fire({
  //             icon: 'error',
  //             title: 'Veuillez selection un etudiant!',
  //         })
  //         return;
  //     }
  //     const icon = $("#etat_notification i");
  //     icon.removeClass('fa-print').addClass("fa-spinner fa-spin");
  //     try {
  //         const request = await axios.post('/conseil/disciplinaire/verification_notification/'+id_sanction);
  //         const response = request.data;
  //         icon.addClass('fa-print').removeClass("fa-spinner fa-spin ");
  //         window.open('/conseil/disciplinaire/etatNotification/'+id_sanction, '_blank');
  //       } catch (error) {
  //         const message = error.response.data;
  //         console.log(error, error.response);
  //         Toast.fire({
  //           icon: 'error',
  //           title: message,
  //         })
  //         icon.addClass('fa-print').removeClass("fa-spinner fa-spin ");
  //       }
  // })
});

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/evaluation/formation.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ldmFsdWF0aW9uL2Zvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhc3luYyB9ID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XHJcblxyXG5jb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBTd2FsLnN0b3BUaW1lcik7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgU3dhbC5yZXN1bWVUaW1lcik7XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmxldCBjaGVjaztcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiICNlbnJlZ2lzdHJlciwgI2ltcHJpbWVyLCAjcmVjYWxjdWxlciAsICNFeHRyYWNEaXBcIikuYXR0cihcclxuICAgICAgICBcImRpc2FibGVkXCIsXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuXHJcbiAgICB0eXBlU2VhcmNoID0gJ2FsbCc7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlU2VhcmNoKTtcclxuICAgICQoXCIjbm90ZXNcIikucmVtb3ZlQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmFkZENsYXNzKFwiYnRuLWluZm9cIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgIGNvbnN0IGVuYWJsZUJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoZWNrID09IDEpIHtcclxuICAgICAgICAgICAgJChcIiNlbnJlZ2lzdHJlclwiKS5yZW1vdmVDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYWRkQ2xhc3MoXCJidG4taW5mb1wiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAkKFwiI2ltcHJpbWVyXCIpLnJlbW92ZUNsYXNzKFwiYnRuLWluZm9cIikuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiNyZWNhbGN1bGVyXCIpLnJlbW92ZUNsYXNzKFwiYnRuLWluZm9cIikuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiNFeHRyYWNEaXBcIikucmVtb3ZlQ2xhc3MoXCJidG4taW5mb1wiKS5hZGRDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2sgPT0gMikge1xyXG4gICAgICAgICAgICAkKFwiI2VucmVnaXN0cmVyXCIpLnJlbW92ZUNsYXNzKFwiYnRuLWluZm9cIikuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiNpbXByaW1lclwiKS5yZW1vdmVDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYWRkQ2xhc3MoXCJidG4taW5mb1wiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAkKFwiI3JlY2FsY3VsZXJcIikucmVtb3ZlQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmFkZENsYXNzKFwiYnRuLWluZm9cIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgJChcIiNFeHRyYWNEaXBcIikucmVtb3ZlQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmFkZENsYXNzKFwiYnRuLWluZm9cIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2VucmVnaXN0cmVyXCIpLnJlbW92ZUNsYXNzKFwiYnRuLWluZm9cIikuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiNpbXByaW1lclwiKS5yZW1vdmVDbGFzcyhcImJ0bi1pbmZvXCIpLmFkZENsYXNzKFwiYnRuLXNlY29uZGFyeVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoXCIjcmVjYWxjdWxlclwiKS5yZW1vdmVDbGFzcyhcImJ0bi1pbmZvXCIpLmFkZENsYXNzKFwiYnRuLXNlY29uZGFyeVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoXCIjRXh0cmFjRGlwXCIpLnJlbW92ZUNsYXNzKFwiYnRuLWluZm9cIikuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiO1xyXG4gICAgICAgIGlmIChpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZm9ybWF0aW9uL1wiICsgaWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2Zvcm1hdGlvblwiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2FubmVlL1wiICsgaWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjYW5uZWVcIikuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gdGhlIGN1c3RvbSBmaWx0ZXJcclxuICAgICQoXCIjbWluXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGFibGUuZHJhdygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNyZWNoZXJjaGVcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGFkbWlzc2lvbnMgPSBbXTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJChcIiNsaXN0X2V0dVwiKS5lbXB0eSgpO1xyXG4gICAgICAgIGxldCBhbm5lZV9pZCA9ICQoXCIjYW5uZWVcIikudmFsKCk7XHJcbiAgICAgICAgaWYgKGFubmVlX2lkID09IFwiXCIgfHwgIWFubmVlX2lkKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBhbm5lZSFcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInR5cGVTZWFyY2hcIiwgdHlwZVNlYXJjaCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcmVjaGVyY2hlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLXNlYXJjaFwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFwiL2V2YWx1YXRpb24vZm9ybWF0aW9uL2xpc3QvXCIgKyBhbm5lZV9pZCAsIGZvcm1EYXRhICAgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuaHRtbDIpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNpbmZvc1wiKS5odG1sKHJlc3BvbnNlLmh0bWwxKTtcclxuICAgICAgICAgICAgLy8gJChcIiNsaXN0X2V0dVwiKS5EYXRhVGFibGUoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNsaXN0X2V0dVwiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNsaXN0X2V0dVwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI2xpc3RfZXR1XCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChyZXNwb25zZS5odG1sMilcclxuICAgICAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2hlY2sgPSByZXNwb25zZS5jaGVjaztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2hlY2spXHJcbiAgICAgICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXNlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSAnPGRpdiBpZD1cInNlbGVjdC1ib3hcIiBjbGFzcz1cImNvbC1tZC0xXCI+PGxhYmVsIGZvcj1cImV0YWJsaXNzZW1lbnRcIj5DaG9peDo8L2xhYmVsPiA8c2VsZWN0IGlkPVwiY2hvaWNlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj48b3B0aW9uIHZhbHVlPVwiYWxsXCIgZGVmYXVsdD5BbGw8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiRnVsbFwiPkNvbXBsZXQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibm90RnVsbFwiPkluY29tcGxldDwvb3B0aW9uPjwvc2VsZWN0PiA8L2Rpdj4nO1xyXG4gICAgICAgICAgICBpZigkKCdib2R5IC5maXJzdC1jYXJkIC5yb3cgI3NlbGVjdC1ib3gnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgLmZpcnN0LWNhcmQgLnJvd1wiKS5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1zZWFyY2hcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhciBpZF9hZG1pc3Npb24gPSBcIlwiO1xyXG4gICAgLy8gZ2V0IGV0dWRpYW50IG5vdGVzXHJcbiAgICBjb25zdCBnZXRFdHVkaWFudE5vdGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICQoJyNlZGl0Tm90ZXMgI2NhbmRpZGF0X25vdGVzJykuaHRtbCgnJyk7XHJcbiAgICAgICAgJCgnI2VkaXROb3RlcyAgLmFsZXJ0JykuaGlkZSgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9ldmFsdWF0aW9uL2Zvcm1hdGlvbi9nZXRFdHVkaWFudE5vdGVzLycraWRfYWRtaXNzaW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJCgnI2VkaXROb3RlcyAjY2FuZGlkYXRfbm90ZXMnKS5odG1sKGRhdGFbJ2NhbmRpZGF0c19ub3RlcyddKTtcclxuICAgICAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHBvcCB1cCB0cmlnZ3JlIGFmdGVyIGRvdWJsZSBjbGljayB0clxyXG4gICAgJChcImJvZHlcIikub24oXCJkYmxjbGlja1wiLCBcIiNsaXN0X2V0dSB0Ym9keSB0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGlkX2FkbWlzc2lvbikge1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgaWRfYWRtaXNzaW9uKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9hZG1pc3Npb24gPSBcIlwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZF9hZG1pc3Npb24gPSAkKHRoaXMpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIjbm90ZXNcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChpZF9hZG1pc3Npb24gPT0gXCJcIikge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IHNlbGVjdGlvbm5lciB1biBldHVkaWFudCFcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGdldEV0dWRpYW50Tm90ZXMoKTtcclxuICAgICAgICAgICAgJCgnI2VkaXROb3RlcycpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNldGF0RGlwXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoaWRfYWRtaXNzaW9uID09IFwiXCIpIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJWZXVpbGxleiBzZWxlY3Rpb25uZXIgdW4gZXR1ZGlhbnQhXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9ldmFsdWF0aW9uL2Zvcm1hdGlvbi9pbXByZXNzaW9uRGlwbG9tZS8nK2lkX2FkbWlzc2lvbiwgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSW5zZXJ0aW9uIGRlcyBub3RlcyBvciBtb2RpZmljYXRpb25cclxuICAgICQoJ2JvZHknKS5vbigna2V5dXAnLCAnLm5vdGVFeHRlcm5lJyxhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMpIHsgLy9vbiBlbnRlciBrZXlcclxuICAgICAgICAgICAgbGV0IG5vdGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgYW5uZWUgPSAkKHRoaXMpLmF0dHIoJ2FubmVlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKHRoaXMpLm5leHQoKS5maW5kKCdpJyk7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1jaGVja1wiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgaWNvbi5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5vdGVcIiwgbm90ZSk7IFxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhbm5lZVwiLCBhbm5lZSk7IFxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhZG1pc3Npb25cIiwgaWRfYWRtaXNzaW9uKTsgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgICAgICBcIi9ldmFsdWF0aW9uL2Zvcm1hdGlvbi9hZGRfbm90ZXNcIiwgZm9ybURhdGFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2tcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICBpY29uLmNzcygnY29sb3InLCcjMmVjYzcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyLWNvbG9yJywnIzJlY2M3MScpO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IHJlc3BvbnNlLmNoZWNrO1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNyZWNoZXJjaGVcIikudHJpZ2dlcihcImNsaWNrXCIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXRpbWVzXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5jc3MoJ2NvbG9yJywnI2MwMzkyYicpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlci1jb2xvcicsJyNjMDM5MmInKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoICBcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkgeyAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keSAubm90ZUV4dGVybmUnKS5jc3MoJ2JvcmRlci1jb2xvcicsJyM2OTZiN2QnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdE5vdGVzJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIH0sICBcclxuICAgICAgICAgICAgICAgIDIwMDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuLy8gY3VzdG9tIGZpbHRlclxyXG4gICAgJChcImJvZHkgXCIpLm9uKFwiY2hhbmdlXCIsXCIjY2hvaWNlXCIsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IGFubmVlX2lkID0gJChcIiNhbm5lZVwiKS52YWwoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLnZhbCgpICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHR5cGVTZWFyY2ggPSAkKHRoaXMpLnZhbCgpIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVTZWFyY2gpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInR5cGVTZWFyY2hcIiwgdHlwZVNlYXJjaCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vICQoXCIjbGlzdF9ldHVcIikuRGF0YVRhYmxlKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjbGlzdF9ldHVcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbGlzdF9ldHVcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgXCIvZXZhbHVhdGlvbi9mb3JtYXRpb24vbGlzdC9cIiArIGFubmVlX2lkICwgZm9ybURhdGEgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAkKFwiI2luZm9zXCIpLmh0bWwocmVzcG9uc2UuaHRtbDEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJChcIiNsaXN0X2V0dVwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwocmVzcG9uc2UuaHRtbDIpXHJcbiAgICAgICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNoZWNrID0gcmVzcG9uc2UuY2hlY2s7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoZWNrKVxyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1zZWFyY2hcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50ID0gJzxkaXYgaWQ9XCJzZWxlY3QtYm94XCIgY2xhc3M9XCJjb2wtbWQtMVwiPjxsYWJlbCBmb3I9XCJldGFibGlzc2VtZW50XCI+Q2hvaXg6PC9sYWJlbD4gPHNlbGVjdCBpZD1cImNob2ljZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+PG9wdGlvbiB2YWx1ZT1cImFsbFwiIGRlZmF1bHQ+QWxsPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIm5vdEZ1bGxcIj5ub3QgRnVsbDwvb3B0aW9uPjwvc2VsZWN0PiA8L2Rpdj4nO1xyXG4gICAgICAgICAgICBpZigkKCdib2R5IC5maXJzdC1jYXJkIC5yb3cgI3NlbGVjdC1ib3gnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgLmZpcnN0LWNhcmQgLnJvd1wiKS5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtc2VhcmNoXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2VucmVnaXN0cmVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZW5yZWdpc3RyZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2tcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICBcIi9ldmFsdWF0aW9uL2Zvcm1hdGlvbi9lbnJlZ2lzdHJlclwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjaGVjayA9IHJlc3BvbnNlLmNoZWNrO1xyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2tcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI2ltcHJpbWVyXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvZXZhbHVhdGlvbi9mb3JtYXRpb24vaW1wcmVzc2lvbicsICdfYmxhbmsnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICQoXCIjYWZmaWNoYWdlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICBsZXQgYWZmaWNoYWdlID0gJCh0aGlzKS52YWwoKTtcclxuICAgIC8vICAgICAkKFwiI2ltcHJlc3Npb25fbGlzdFwiKS5hdHRyKFxyXG4gICAgLy8gICAgICAgICBcImhyZWZcIixcclxuICAgIC8vICAgICAgICAgJChcIiNpbXByZXNzaW9uX2xpc3RcIikuYXR0cihcImhyZWZcIikuc2xpY2UoMCwgLTEpICsgYWZmaWNoYWdlXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICAkKFwiI2ltcHJlc3Npb25fY2xhaXJcIikuYXR0cihcclxuICAgIC8vICAgICAgICAgXCJocmVmXCIsXHJcbiAgICAvLyAgICAgICAgICQoXCIjaW1wcmVzc2lvbl9jbGFpclwiKS5hdHRyKFwiaHJlZlwiKS5zbGljZSgwLCAtMSkgKyBhZmZpY2hhZ2VcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICAgICQoXCIjaW1wcmVzc2lvbl9hbm9ueW1hdFwiKS5hdHRyKFxyXG4gICAgLy8gICAgICAgICBcImhyZWZcIixcclxuICAgIC8vICAgICAgICAgJChcIiNpbXByZXNzaW9uX2Fub255bWF0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsIC0xKSArIGFmZmljaGFnZVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgICAgJChcIiNpbXByZXNzaW9uX3JhdFwiKS5hdHRyKFxyXG4gICAgLy8gICAgICAgICBcImhyZWZcIixcclxuICAgIC8vICAgICAgICAgJChcIiNpbXByZXNzaW9uX3JhdFwiKS5hdHRyKFwiaHJlZlwiKS5zbGljZSgwLCAtMSkgKyBhZmZpY2hhZ2VcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJChcIiNyZWNhbGN1bGVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3JlY2FsY3VsZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtcmVkby1hbHRcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICBcIi9ldmFsdWF0aW9uL2Zvcm1hdGlvbi9yZWNhbGN1bGVyXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtcmVkby1hbHRcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXJlZG8tYWx0XCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gJChcIiNFeHRyYWNEaXBcIikub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgIHdpbmRvdy5vcGVuKCcvZXZhbHVhdGlvbi9mb3JtYXRpb24vZXh0cmFjdGlvbmRpcGxvbWUnLCAnX2JsYW5rJyk7XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIGFkbWlzc2lvbnMgPSBbXTtcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2xpc3RfZXR1IHRib2R5IHRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0LmNoZWNrX2V0dVwiKTtcclxuICAgICAgICBpZiAoaW5wdXQucHJvcChcImNoZWNrZWRcIikgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYWRtaXNzaW9ucy5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgICAgIGFkbWlzc2lvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgYWRtaXNzaW9ucy5wdXNoKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFkbWlzc2lvbnMpO1xyXG4gICAgfSk7XHJcbiAgICAvLyAkKCdib2R5Jykub24oJ2NsaWNrJywnLmNoZWNrX2V0dScsZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNoZWNrX2FsbF9mb3JtYXRpb25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGFsZXJ0KCd0ZXN0JylcclxuICAgICAgICBhZG1pc3Npb25zID0gW107XHJcbiAgICAgICAgY29uc3QgZXR1ID0gJChcImJvZHkgLmNoZWNrX2V0dVwiKTtcclxuICAgICAgICBpZiAoJChcIi5jaGVja19hbGxfZm9ybWF0aW9uXCIpLnByb3AoXCJjaGVja2VkXCIpID09IHRydWUpIHtcclxuICAgICAgICAgICAgZXR1LnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBldHUubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFkbWlzc2lvbnMucHVzaCh0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFkbWlzc2lvbnMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV0dS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFkbWlzc2lvbnMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNFeHRyYWNEaXBcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFkbWlzc2lvbnMpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoYWRtaXNzaW9ucy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhZG1pc3Npb25zXCIsIEpTT04uc3RyaW5naWZ5KGFkbWlzc2lvbnMpKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjRXh0cmFjRGlwIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICBcIi9ldmFsdWF0aW9uL2Zvcm1hdGlvbi9leHRyYWN0aW9uZGlwbG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIiArIHJlc3BvbnNlLmZpbGUsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2ltcHJlc3Npb25fZGlwbG9tZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKCFpZF9zYW5jdGlvbil7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuIGV0dWRpYW50IScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZXRhdF9ub3RpZmljYXRpb24gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1wcmludCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvY29uc2VpbC9kaXNjaXBsaW5haXJlL3ZlcmlmaWNhdGlvbl9ub3RpZmljYXRpb24vJytpZF9zYW5jdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1wcmludCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9jb25zZWlsL2Rpc2NpcGxpbmFpcmUvZXRhdE5vdGlmaWNhdGlvbi8nK2lkX3NhbmN0aW9uLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtcHJpbnQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8gJCgnYm9keScpLm9uKCdjbGljaycsJyNpbXByaW1lcl9kaXBsb21lJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAvLyAgICAgaWYoIWlkX3NhbmN0aW9uKXtcclxuICAgIC8vICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAvLyAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW4gZXR1ZGlhbnQhJyxcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgICAgICBcclxuICAgIC8vICAgICBjb25zdCBpY29uID0gJChcIiNldGF0X25vdGlmaWNhdGlvbiBpXCIpO1xyXG4gICAgLy8gICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXByaW50JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAvLyAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9jb25zZWlsL2Rpc2NpcGxpbmFpcmUvdmVyaWZpY2F0aW9uX25vdGlmaWNhdGlvbi8nK2lkX3NhbmN0aW9uKTtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAvLyAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXByaW50JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgLy8gICAgICAgICB3aW5kb3cub3BlbignL2NvbnNlaWwvZGlzY2lwbGluYWlyZS9ldGF0Tm90aWZpY2F0aW9uLycraWRfc2FuY3Rpb24sICdfYmxhbmsnKTtcclxuICAgIC8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgLy8gICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgIC8vICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgLy8gICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1wcmludCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vIH0pXHJcbn0pO1xyXG4iLCIvKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAtLSBvbGQgSUUsIFdTSCAqL1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDsgLy8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCdcbiAgICA/IGRvY3VtZW50LmRvbWFpbiAmJiBhY3RpdmVYRG9jdW1lbnRcbiAgICAgID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIC8vIG9sZCBJRVxuICAgICAgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKVxuICAgIDogTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpOyAvLyBXU0hcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBwcm9wc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qta2V5cyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJhc3luYyIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImNoZWNrIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhdHRyIiwidHlwZVNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZW5hYmxlQnV0dG9ucyIsInNlbGVjdDIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwiY2hhbmdlIiwidGFibGUiLCJkcmF3IiwiZSIsImFkbWlzc2lvbnMiLCJwcmV2ZW50RGVmYXVsdCIsImVtcHR5IiwiYW5uZWVfaWQiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJodG1sMSIsImZuIiwiRGF0YVRhYmxlIiwiaXNEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJodG1sMiIsInNjcm9sbFgiLCJsYW5ndWFnZSIsInVybCIsImxlbmd0aE1lbnUiLCJlbGVtZW50IiwibGVuZ3RoIiwibWVzc2FnZSIsImlkX2FkbWlzc2lvbiIsImdldEV0dWRpYW50Tm90ZXMiLCJoaWRlIiwibW9kYWwiLCJ3aW5kb3ciLCJvcGVuIiwid2hpY2giLCJub3RlIiwiYW5uZWUiLCJuZXh0IiwiZmluZCIsImNzcyIsInRyaWdnZXIiLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwiaW5wdXQiLCJwcm9wIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImV0dSIsIm1hcCIsInZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbGUiLCJpZF9zYW5jdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=