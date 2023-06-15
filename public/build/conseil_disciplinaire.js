(self["webpackChunk"] = self["webpackChunk"] || []).push([["conseil_disciplinaire"],{

/***/ "./assets/components/conseil/conseil_disciplinaire.js":
/*!************************************************************!*\
  !*** ./assets/components/conseil/conseil_disciplinaire.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
var id_sanction = false;
var autreSanctions = [];
$(document).ready(function () {
  var table = $("#datatables_disciplinaire_inscription").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/conseil/disciplinaire/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      // idInscription.forEach((e) => {
      //     $("body tr#" + e)
      //     .find("input")
      //     .prop("checked", true);
      // });
      $("body tr#" + id_sanction).addClass('active_databales');
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datatables_disciplinaire_inscription')) {
        var dt = $('#datatables_disciplinaire_inscription').DataTable(); //Abort previous ajax request if it is still in process.

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
            table.columns().search("");
            table.columns(0).search(id_etab).draw();
            response = "";

            if (!(id_etab != "")) {
              _context.next = 11;
              break;
            }

            _context.next = 7;
            return axios.get('/api/formation/' + id_etab);

          case 7:
            request = _context.sent;
            response = request.data;
            _context.next = 13;
            break;

          case 11:
            $('#annee').html("").select2();
            $('#promotion').html("").select2();

          case 13:
            $('#formation').html(response).select2();

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation, responseAnnee, responsePromotion, requestPromotion, requestAnnee;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            table.columns().search("");
            responseAnnee = "";
            responsePromotion = "";

            if (!(id_formation != "")) {
              _context2.next = 16;
              break;
            }

            table.columns(1).search(id_formation).draw();
            _context2.next = 8;
            return axios.get('/api/promotion/' + id_formation);

          case 8:
            requestPromotion = _context2.sent;
            responsePromotion = requestPromotion.data;
            _context2.next = 12;
            return axios.get('/api/annee/' + id_formation);

          case 12:
            requestAnnee = _context2.sent;
            responseAnnee = requestAnnee.data;
            _context2.next = 17;
            break;

          case 16:
            table.columns(0).search($("#etablissement").val()).draw();

          case 17:
            $('#annee').html(responseAnnee).select2();
            $('#promotion').html(responsePromotion).select2();

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            table.columns().search("");

            if ($(this).val() != "") {
              if ($("#annee").val() != "") {
                table.columns(3).search($("#annee").val());
              }

              table.columns(2).search($(this).val()).draw();
            } else {
              table.columns(1).search($("#formation").val()).draw();
            }

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#annee").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            table.columns().search("");

            if ($(this).val() != "") {
              table.columns(3).search($(this).val());
            }

            table.columns(2).search($("#promotion").val()).draw();

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#etudiant").select2({
    minimumInputLength: 3,
    // required enter 3 characters or more
    allowClear: true,
    placeholder: 'Etudiant',
    language: "fr",
    ajax: {
      dataType: 'json',
      url: '/etudiant/rechercheavance/find',
      //    delay: 5,  // ini bebas mau di pake atau tidak
      data: function data(params) {
        return {
          search: params.term
        };
      },
      processResults: function processResults(data, page) {
        var dataArray = data.map(function (item) {
          return {
            text: item.code + " " + item.nom + " " + item.prenom,
            id: item.id
          };
        });
        return {
          results: dataArray
        };
      }
    }
  });
  $("body").on("change", "#etudiant", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var request, response, message;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return axios.post('/etudiant/rechercheavance/findAnnee/' + $(this).val());

          case 3:
            request = _context5.sent;
            response = request.data;
            $("#annee2").html(response).select2();
            _context5.next = 13;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            message = _context5.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 8]]);
  }))); // $('body').on('click','#datatables_gestion_inscription tbody tr',function () {
  //     const input = $(this).find("input");
  //     if(input.is(":checked")){
  //         input.prop("checked",false);
  //         const index = idInscription.indexOf(input.attr("id"));
  //         idInscription.splice(index,1);
  //     }else{
  //         input.prop("checked",true);
  //         idInscription.push(input.attr("id"));
  //     }
  // })

  $('body').on('click', '#datatables_disciplinaire_inscription tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_sanction = null;
    } else {
      $("#datatables_disciplinaire_inscription tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_sanction = $(this).attr('id');
      getConvocationInfos();
    }

    console.log(id_sanction);
  });
  $("#convocation").on("click", function () {
    $("#convocation_modal .modal-body .alert").remove();
    $("#convocation_modal").modal("show");
  });
  $("#convocation_save").on("submit", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#convocation_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#convocation_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context6.prev = 6;
              _context6.next = 9;
              return axios.post('/conseil/disciplinaire/ajouter_convocation', formData);

            case 9:
              request = _context6.sent;
              response = request.data;
              $("#convocation_modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(response, "</p>\n              </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $("#convocation_save")[0].reset();
              table.ajax.reload(null, false);
              _context6.next = 24;
              break;

            case 17:
              _context6.prev = 17;
              _context6.t0 = _context6["catch"](6);
              message = _context6.t0.response.data;
              console.log(_context6.t0, _context6.t0.response);
              modalAlert.remove();
              $("#convocation_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[6, 17]]);
    }));

    return function (_x) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("#validation").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (id_sanction) {
              _context7.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection une ligne!'
            });
            return _context7.abrupt("return");

          case 3:
            icon = $("#validation  i");
            icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
            _context7.prev = 5;
            _context7.next = 8;
            return axios.post('/conseil/disciplinaire/convocation_validation/' + id_sanction);

          case 8:
            request = _context7.sent;
            response = request.data;
            id_sanction = false;
            table.ajax.reload(null, false);
            Toast.fire({
              icon: 'success',
              title: response
            });
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
            _context7.next = 22;
            break;

          case 16:
            _context7.prev = 16;
            _context7.t0 = _context7["catch"](5);
            message = _context7.t0.response.data;
            console.log(_context7.t0, _context7.t0.response);
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");

          case 22:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[5, 16]]);
  })));
  $("#devalidation").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var confirmation, icon, formData, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (id_sanction) {
              _context8.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection une ligne!'
            });
            return _context8.abrupt("return");

          case 3:
            confirmation = confirm('Vous voulez vraiment devalider cette convocation ?');

            if (!(confirmation == 1)) {
              _context8.next = 26;
              break;
            }

            icon = $("#devalidation i");
            icon.removeClass('fa-times').addClass("fa-spinner fa-spin");
            formData = new FormData();
            formData.append("id_sanction", id_sanction);
            _context8.prev = 9;
            _context8.next = 12;
            return axios.post('/conseil/disciplinaire/convocation_devalidation', formData);

          case 12:
            request = _context8.sent;
            response = request.data;
            id_sanction = false;
            table.ajax.reload(null, false);
            icon.addClass('fa-times').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context8.next = 26;
            break;

          case 20:
            _context8.prev = 20;
            _context8.t0 = _context8["catch"](9);
            message = _context8.t0.response.data;
            console.log(_context8.t0, _context8.t0.response);
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-times').removeClass("fa-spinner fa-spin");

          case 26:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[9, 20]]);
  })));
  $("#sans_suite").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (id_sanction) {
              _context9.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection une ligne!'
            });
            return _context9.abrupt("return");

          case 3:
            icon = $("#sans_suite  i");
            icon.removeClass('fa-undo').addClass("fa-spinner fa-spin");
            _context9.prev = 5;
            _context9.next = 8;
            return axios.post('/conseil/disciplinaire/convocation_sans_suite/' + id_sanction);

          case 8:
            request = _context9.sent;
            response = request.data; // id_sanction = false;
            // table.ajax.reload(null, false)

            Toast.fire({
              icon: 'success',
              title: response
            });
            icon.addClass('fa-undo').removeClass("fa-spinner fa-spin ");
            _context9.next = 20;
            break;

          case 14:
            _context9.prev = 14;
            _context9.t0 = _context9["catch"](5);
            message = _context9.t0.response.data;
            console.log(_context9.t0, _context9.t0.response);
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-undo').removeClass("fa-spinner fa-spin ");

          case 20:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[5, 14]]);
  })));
  $("#notification").on("click", function () {
    if (!id_sanction) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#notification_modal .modal-body .alert").remove();
    $("#notification_modal").modal("show");
  });
  $("#agressions").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var id_agression, incident, sanction, request, requestsanction;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id_agression = $(this).val();
            incident = "";
            sanction = "";

            if (!(id_agression != "")) {
              _context10.next = 14;
              break;
            }

            _context10.next = 6;
            return axios.get('/api/sousagression/' + id_agression);

          case 6:
            request = _context10.sent;
            incident = request.data;
            _context10.next = 10;
            return axios.get('/api/sanction/' + id_agression);

          case 10:
            requestsanction = _context10.sent;
            sanction = requestsanction.data;
            _context10.next = 16;
            break;

          case 14:
            $('#incident').html("").select2();
            $('#sanction').html("").select2();

          case 16:
            $('#incident').html(incident).select2();
            $('#sanction').html(sanction).select2();

          case 18:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  })));
  $('body').on('click', '#newSanction', function () {
    var newSanction = $(this).parent().parent();
    newSanction.append("<div class=\"d-flex  mt-2\">\n            <input type=\"text\" name=\"autre_sanction\" id=\"autre_sanction\" class=\"form-control\" placeholder=\"Autre Sanction\">\n            <button type=\"button\" class=\"btn btn-danger  ml-2\" id=\"removenewSanction\"><i class=\"fas fa-minus\"></i></button>\n          </div>");
    console.log(newSanction);
  });
  $('body').on('click', '#removenewSanction', function () {
    $(this).parent().remove();
  });
  $("#notification_save").on("submit", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var formData, modalAlert, icon, inputs, autreSanctions, request, response, message;
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#notification_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#notification_save .submitBtn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              inputs = $('#autre_sanction_text input');
              autreSanctions = [];
              inputs.map( /*#__PURE__*/function () {
                var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(input) {
                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          if ($.trim($(this).val()) != "") {
                            autreSanctions.push($(this).val());
                          }

                        case 1:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11, this);
                }));

                return function (_x3) {
                  return _ref12.apply(this, arguments);
                };
              }());
              console.log(autreSanctions);
              formData.append("newSanctions", JSON.stringify(autreSanctions)); // return

              _context12.prev = 11;
              _context12.next = 14;
              return axios.post('/conseil/disciplinaire/ajouter_notification/' + id_sanction, formData);

            case 14:
              request = _context12.sent;
              response = request.data;
              $("#notification_modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(response, "</p>\n              </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $("#notification_modal select").val("").select2();
              $("#notification_save")[0].reset();
              table.ajax.reload(null, false);
              _context12.next = 30;
              break;

            case 23:
              _context12.prev = 23;
              _context12.t0 = _context12["catch"](11);
              message = _context12.t0.response.data;
              console.log(_context12.t0, _context12.t0.response);
              modalAlert.remove();
              $("#notification_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 30:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, this, [[11, 23]]);
    }));

    return function (_x2) {
      return _ref11.apply(this, arguments);
    };
  }());
  $('body').on('click', '#etat_convocation', function () {
    if (!id_sanction) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    window.open('/conseil/disciplinaire/etatConvocation/' + id_sanction, '_blank');
  });
  $('body').on('click', '#etat_notification', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            if (id_sanction) {
              _context13.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection une ligne!'
            });
            return _context13.abrupt("return");

          case 3:
            icon = $("#etat_notification i");
            icon.removeClass('fa-print').addClass("fa-spinner fa-spin");
            _context13.prev = 5;
            _context13.next = 8;
            return axios.post('/conseil/disciplinaire/verification_notification/' + id_sanction);

          case 8:
            request = _context13.sent;
            response = request.data;
            icon.addClass('fa-print').removeClass("fa-spinner fa-spin ");
            window.open('/conseil/disciplinaire/etatNotification/' + id_sanction, '_blank');
            _context13.next = 20;
            break;

          case 14:
            _context13.prev = 14;
            _context13.t0 = _context13["catch"](5);
            message = _context13.t0.response.data;
            console.log(_context13.t0, _context13.t0.response);
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-print').removeClass("fa-spinner fa-spin ");

          case 20:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[5, 14]]);
  })));
  $('body').on('click', '#extraction_historique', function (e) {
    e.preventDefault();
    window.open('/conseil/disciplinaire/extraction_historique', '_blank');
  });
  $('body').on('click', '#annuler_convocation', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
    var confirmation, icon, formData, request, response, message;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            if (id_sanction) {
              _context14.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection une ligne!'
            });
            return _context14.abrupt("return");

          case 3:
            confirmation = confirm('Vous voulez vraiment annuler cette enregistrement ?');

            if (!(confirmation == 1)) {
              _context14.next = 26;
              break;
            }

            icon = $("#annuler_convocation i");
            icon.removeClass('fa-trash').addClass("fa-spinner fa-spin");
            formData = new FormData();
            formData.append("id_sanction", id_sanction);
            _context14.prev = 9;
            _context14.next = 12;
            return axios.post('/conseil/disciplinaire/annuler_convocation', formData);

          case 12:
            request = _context14.sent;
            response = request.data;
            id_sanction = false;
            table.ajax.reload(null, false);
            icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context14.next = 26;
            break;

          case 20:
            _context14.prev = 20;
            _context14.t0 = _context14["catch"](9);
            message = _context14.t0.response.data;
            console.log(_context14.t0, _context14.t0.response);
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");

          case 26:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[9, 20]]);
  }))); /////////// start Updating Convocation Block ///////////////

  var getConvocationInfos = function getConvocationInfos() {
    var modalAlert = $("#modifier_org-modal .modal-body .alert");
    modalAlert.remove();
    var icon = $("#modifier_convocation i");
    icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
    axios.get('/conseil/disciplinaire/getconvocationInfos/' + id_sanction).then(function (success) {
      icon.removeClass('fa-spinner fa-spin').addClass("fa-edit"); // console.log(success);

      $('#convocation_update_modal #convocation_update').html(success.data);
      $('#convocation_update_modal #convocation_update select').select2();
    })["catch"](function (err) {
      // console.log(err)
      icon.removeClass('fa-spinner fa-spin ').addClass("fa-edit");
    });
  };

  $('body').on('click', '#modifier_convocation', function (e) {
    e.preventDefault();

    if (!id_sanction) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#convocation_update_modal").modal('show');
  });
  $("body").on("submit", '#convocation_update', /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              e.preventDefault(); // alert('test');

              formdata = $(this).serialize();
              modalAlert = $("#convocation_update_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#convocation_update .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context15.prev = 6;
              _context15.next = 9;
              return axios.post('/conseil/disciplinaire/modifier_convocation/' + id_sanction, formdata);

            case 9:
              request = _context15.sent;
              data = request.data;
              $("#convocation_update_modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin"); // id_sanction = false;
              // table_reglement.ajax.reload(null, false);
              // window.open('/conseil/disciplinaire/reglementprint/'+id_reglement, '_blank');

              _context15.next = 22;
              break;

            case 15:
              _context15.prev = 15;
              _context15.t0 = _context15["catch"](6);
              message = _context15.t0.response.data;
              console.log(_context15.t0, _context15.t0.response);
              modalAlert.remove();
              $("#convocation_update_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
              setTimeout(function () {
                $("#convocation_update_modal .modal-body .alert").remove();
              }, 4000);

            case 23:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this, [[6, 15]]);
    }));

    return function (_x4) {
      return _ref15.apply(this, arguments);
    };
  }()); /////////// End Updating Convocation Block ///////////////
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_map_js-node_modules_core-js_modules_es_string_s-d07aea"], () => (__webpack_exec__("./assets/components/conseil/conseil_disciplinaire.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CaENMLGNBQUFBLE9BbkJnQyxHQW1CdEIsY0FBTS9CLFFBQU4sQ0FBZUksSUFuQk87QUFvQnRDeUIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUFtQixjQUFNOUIsUUFBekI7QUFDQTZDLGNBQUFBLFVBQVUsQ0FBQ04sTUFBWDtBQUNBdEUsY0FBQUEsQ0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkM2RSxPQUEzQyw2Q0FDdUNmLE9BRHZDO0FBR0FFLGNBQUFBLElBQUksQ0FBQ2xELFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ3FELFdBQWpDLENBQTZDLHFCQUE3Qzs7QUF6QnNDO0FBMkIxQ21DLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2R0RyxnQkFBQUEsQ0FBQyxDQUFDLDhDQUFELENBQUQsQ0FBa0RzRSxNQUFsRDtBQUNGLGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBM0IwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE5Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQTNlK0IsQ0EwZ0IvQjtBQUNILENBM2dCRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbnNlaWwvY29uc2VpbF9kaXNjaXBsaW5haXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG4gICAgfSlcclxuICAgIGxldCBpZF9zYW5jdGlvbiA9IGZhbHNlO1xyXG4gICAgbGV0IGF1dHJlU2FuY3Rpb25zID0gW107XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgdmFyIHRhYmxlID0gJChcIiNkYXRhdGFibGVzX2Rpc2NpcGxpbmFpcmVfaW5zY3JpcHRpb25cIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvY29uc2VpbC9kaXNjaXBsaW5haXJlL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBpZEluc2NyaXB0aW9uLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgLy8gICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgLy8gICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfc2FuY3Rpb24pLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZURyYXdDYWxsYmFjazogZnVuY3Rpb24oc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCcjZGF0YXRhYmxlc19kaXNjaXBsaW5haXJlX2luc2NyaXB0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9ICQoJyNkYXRhdGFibGVzX2Rpc2NpcGxpbmFpcmVfaW5zY3JpcHRpb24nKS5EYXRhVGFibGUoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGR0LnNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpXHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjYW5uZWUnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlQW5uZWUgPSBcIlwiXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlUHJvbW90aW9uID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0UHJvbW90aW9uID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbW90aW9uID0gcmVxdWVzdFByb21vdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RBbm5lZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9hbm5lZS8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlQW5uZWUgPSByZXF1ZXN0QW5uZWUuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjYW5uZWUnKS5odG1sKHJlc3BvbnNlQW5uZWUpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZVByb21vdGlvbikuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjYW5uZWVcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuY29sdW1ucygzKS5zZWFyY2goJChcIiNhbm5lZVwiKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygyKS5zZWFyY2goJCh0aGlzKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkKFwiI2FubmVlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQodGhpcykudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjZXR1ZGlhbnRcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAzLCAgLy8gcmVxdWlyZWQgZW50ZXIgMyBjaGFyYWN0ZXJzIG9yIG1vcmVcclxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXR1ZGlhbnQnLFxyXG4gICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgdXJsOiAnL2V0dWRpYW50L3JlY2hlcmNoZWF2YW5jZS9maW5kJywgIFxyXG4gICAgICAgIC8vICAgIGRlbGF5OiA1LCAgLy8gaW5pIGJlYmFzIG1hdSBkaSBwYWtlIGF0YXUgdGlkYWtcclxuICAgICAgICAgICBkYXRhOiBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgIHNlYXJjaDogcGFyYW1zLnRlcm1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAoZGF0YSwgcGFnZSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YUFycmF5ID0gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5jb2RlICtcIiBcIitpdGVtLm5vbSArIFwiIFwiICtpdGVtLnByZW5vbSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0czogZGF0YUFycmF5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgIFxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiI2V0dWRpYW50XCIsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldHVkaWFudC9yZWNoZXJjaGVhdmFuY2UvZmluZEFubmVlLycrJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAkKFwiI2FubmVlMlwiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAvLyAgICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAvLyAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCBpbmRleCA9IGlkSW5zY3JpcHRpb24uaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgLy8gICAgICAgICBpZEluc2NyaXB0aW9uLnNwbGljZShpbmRleCwxKTtcclxuICAgIC8vICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgIC8vICAgICAgICAgaWRJbnNjcmlwdGlvbi5wdXNoKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YXRhYmxlc19kaXNjaXBsaW5haXJlX2luc2NyaXB0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zYW5jdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2Rpc2NpcGxpbmFpcmVfaW5zY3JpcHRpb24gdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zYW5jdGlvbiA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgZ2V0Q29udm9jYXRpb25JbmZvcygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkX3NhbmN0aW9uKVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgICQoXCIjY29udm9jYXRpb25cIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgJChcIiNjb252b2NhdGlvbl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKClcclxuICAgICAgICAkKFwiI2NvbnZvY2F0aW9uX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNjb252b2NhdGlvbl9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNjb252b2NhdGlvbl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgIFxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjY29udm9jYXRpb25fc2F2ZSAuYnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvY29uc2VpbC9kaXNjaXBsaW5haXJlL2Fqb3V0ZXJfY29udm9jYXRpb24nLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICQoXCIjY29udm9jYXRpb25fbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgJChcIiNjb252b2NhdGlvbl9zYXZlXCIpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICQoXCIjY29udm9jYXRpb25fbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjdmFsaWRhdGlvblwiKS5vbihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZighaWRfc2FuY3Rpb24pe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjdmFsaWRhdGlvbiAgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvY29uc2VpbC9kaXNjaXBsaW5haXJlL2NvbnZvY2F0aW9uX3ZhbGlkYXRpb24vJytpZF9zYW5jdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBpZF9zYW5jdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNkZXZhbGlkYXRpb25cIikub24oXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7ICAgICBcclxuICAgICAgICBpZighaWRfc2FuY3Rpb24pe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbmZpcm1hdGlvbiA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IGRldmFsaWRlciBjZXR0ZSBjb252b2NhdGlvbiA/Jyk7XHJcbiAgICAgICAgaWYgKGNvbmZpcm1hdGlvbiA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RldmFsaWRhdGlvbiBpXCIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS10aW1lcycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkX3NhbmN0aW9uXCIsICBpZF9zYW5jdGlvbik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2NvbnNlaWwvZGlzY2lwbGluYWlyZS9jb252b2NhdGlvbl9kZXZhbGlkYXRpb24nLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWRfc2FuY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjc2Fuc19zdWl0ZVwiKS5vbihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZighaWRfc2FuY3Rpb24pe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc2Fuc19zdWl0ZSAgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS11bmRvJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9jb25zZWlsL2Rpc2NpcGxpbmFpcmUvY29udm9jYXRpb25fc2Fuc19zdWl0ZS8nK2lkX3NhbmN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIC8vIGlkX3NhbmN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdW5kbycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXVuZG8nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI25vdGlmaWNhdGlvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZighaWRfc2FuY3Rpb24pe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNub3RpZmljYXRpb25fbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpXHJcbiAgICAgICAgJChcIiNub3RpZmljYXRpb25fbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiI2FncmVzc2lvbnNcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2FncmVzc2lvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IGluY2lkZW50ID0gXCJcIlxyXG4gICAgICAgIGxldCBzYW5jdGlvbiA9IFwiXCJcclxuICAgICAgICBpZihpZF9hZ3Jlc3Npb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NvdXNhZ3Jlc3Npb24vJytpZF9hZ3Jlc3Npb24pO1xyXG4gICAgICAgICAgICBpbmNpZGVudCA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0c2FuY3Rpb24gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2FuY3Rpb24vJytpZF9hZ3Jlc3Npb24pO1xyXG4gICAgICAgICAgICBzYW5jdGlvbiA9IHJlcXVlc3RzYW5jdGlvbi5kYXRhXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI2luY2lkZW50JykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJyNzYW5jdGlvbicpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjaW5jaWRlbnQnKS5odG1sKGluY2lkZW50KS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI3NhbmN0aW9uJykuaHRtbChzYW5jdGlvbikuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjbmV3U2FuY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICBsZXQgbmV3U2FuY3Rpb24gPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgIG5ld1NhbmN0aW9uLmFwcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJkLWZsZXggIG10LTJcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImF1dHJlX3NhbmN0aW9uXCIgaWQ9XCJhdXRyZV9zYW5jdGlvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJBdXRyZSBTYW5jdGlvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyICBtbC0yXCIgaWQ9XCJyZW1vdmVuZXdTYW5jdGlvblwiPjxpIGNsYXNzPVwiZmFzIGZhLW1pbnVzXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3U2FuY3Rpb24pXHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNyZW1vdmVuZXdTYW5jdGlvbicsIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiI25vdGlmaWNhdGlvbl9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNub3RpZmljYXRpb25fbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNub3RpZmljYXRpb25fc2F2ZSAuc3VibWl0QnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGlucHV0cyA9ICQoJyNhdXRyZV9zYW5jdGlvbl90ZXh0IGlucHV0Jyk7XHJcbiAgICAgICAgdmFyIGF1dHJlU2FuY3Rpb25zID0gW11cclxuICAgICAgICBpbnB1dHMubWFwKGFzeW5jIGZ1bmN0aW9uKGlucHV0KSAge1xyXG4gICAgICAgICAgICBpZiggJC50cmltKCQodGhpcykudmFsKCkpICAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBhdXRyZVNhbmN0aW9ucy5wdXNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0pIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGF1dHJlU2FuY3Rpb25zKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5ld1NhbmN0aW9uc1wiLCAgSlNPTi5zdHJpbmdpZnkoYXV0cmVTYW5jdGlvbnMpKTtcclxuICAgICAgICAvLyByZXR1cm5cclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9jb25zZWlsL2Rpc2NpcGxpbmFpcmUvYWpvdXRlcl9ub3RpZmljYXRpb24vJytpZF9zYW5jdGlvbiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAkKFwiI25vdGlmaWNhdGlvbl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAkKFwiI25vdGlmaWNhdGlvbl9tb2RhbCBzZWxlY3RcIikudmFsKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICQoXCIjbm90aWZpY2F0aW9uX3NhdmVcIilbMF0ucmVzZXQoKTtcclxuICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgJChcIiNub3RpZmljYXRpb25fbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNldGF0X2NvbnZvY2F0aW9uJywgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYoIWlkX3NhbmN0aW9uKXtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvY29uc2VpbC9kaXNjaXBsaW5haXJlL2V0YXRDb252b2NhdGlvbi8nK2lkX3NhbmN0aW9uLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNldGF0X25vdGlmaWNhdGlvbicsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKCFpZF9zYW5jdGlvbil7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNldGF0X25vdGlmaWNhdGlvbiBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXByaW50JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9jb25zZWlsL2Rpc2NpcGxpbmFpcmUvdmVyaWZpY2F0aW9uX25vdGlmaWNhdGlvbi8nK2lkX3NhbmN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXByaW50JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbignL2NvbnNlaWwvZGlzY2lwbGluYWlyZS9ldGF0Tm90aWZpY2F0aW9uLycraWRfc2FuY3Rpb24sICdfYmxhbmsnKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1wcmludCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb25faGlzdG9yaXF1ZScsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9jb25zZWlsL2Rpc2NpcGxpbmFpcmUvZXh0cmFjdGlvbl9oaXN0b3JpcXVlJywgJ19ibGFuaycpO1xyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2FubnVsZXJfY29udm9jYXRpb24nLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZighaWRfc2FuY3Rpb24pe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbmZpcm1hdGlvbiA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IGFubnVsZXIgY2V0dGUgZW5yZWdpc3RyZW1lbnQgPycpO1xyXG4gICAgICAgIGlmIChjb25maXJtYXRpb24gPT0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJChcIiNhbm51bGVyX2NvbnZvY2F0aW9uIGlcIik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRyYXNoJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaWRfc2FuY3Rpb25cIiwgIGlkX3NhbmN0aW9uKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvY29uc2VpbC9kaXNjaXBsaW5haXJlL2FubnVsZXJfY29udm9jYXRpb24nLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWRfc2FuY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdHJhc2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRyYXNoJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAvLy8vLy8vLy8vLyBzdGFydCBVcGRhdGluZyBDb252b2NhdGlvbiBCbG9jayAvLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBjb25zdCBnZXRDb252b2NhdGlvbkluZm9zID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gICQoXCIjbW9kaWZpZXJfb3JnLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKTtcclxuICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyX2NvbnZvY2F0aW9uIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2NvbnNlaWwvZGlzY2lwbGluYWlyZS9nZXRjb252b2NhdGlvbkluZm9zLycraWRfc2FuY3Rpb24pXHJcbiAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtZWRpdFwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICQoJyNjb252b2NhdGlvbl91cGRhdGVfbW9kYWwgI2NvbnZvY2F0aW9uX3VwZGF0ZScpLmh0bWwoc3VjY2Vzcy5kYXRhKVxyXG4gICAgICAgICAgICAkKCcjY29udm9jYXRpb25fdXBkYXRlX21vZGFsICNjb252b2NhdGlvbl91cGRhdGUgc2VsZWN0Jykuc2VsZWN0MigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4gJykuYWRkQ2xhc3MoXCJmYS1lZGl0XCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI21vZGlmaWVyX2NvbnZvY2F0aW9uJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighaWRfc2FuY3Rpb24pe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2NvbnZvY2F0aW9uX3VwZGF0ZV9tb2RhbFwiKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsICcjY29udm9jYXRpb25fdXBkYXRlJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gYWxlcnQoJ3Rlc3QnKTtcclxuICAgICAgICBsZXQgZm9ybWRhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpXHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNjb252b2NhdGlvbl91cGRhdGVfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjY29udm9jYXRpb25fdXBkYXRlIC5idG4gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL2NvbnNlaWwvZGlzY2lwbGluYWlyZS9tb2RpZmllcl9jb252b2NhdGlvbi8nK2lkX3NhbmN0aW9uLGZvcm1kYXRhKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnZvY2F0aW9uX3VwZGF0ZV9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+JHtkYXRhfTwvZGl2PmBcclxuICAgICAgICAgICAgKTsgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAvLyBpZF9zYW5jdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0YWJsZV9yZWdsZW1lbnQuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyB3aW5kb3cub3BlbignL2NvbnNlaWwvZGlzY2lwbGluYWlyZS9yZWdsZW1lbnRwcmludC8nK2lkX3JlZ2xlbWVudCwgJ19ibGFuaycpO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKFwiI2NvbnZvY2F0aW9uX3VwZGF0ZV9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICQoXCIjY29udm9jYXRpb25fdXBkYXRlX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH0pO1xyXG4gICAgLy8vLy8vLy8vLy8gRW5kIFVwZGF0aW5nIENvbnZvY2F0aW9uIEJsb2NrIC8vLy8vLy8vLy8vLy8vL1xyXG59KVxyXG5cclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX3NhbmN0aW9uIiwiYXV0cmVTYW5jdGlvbnMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJyZXNwb25zaXZlIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImFkZENsYXNzIiwicHJlRHJhd0NhbGxiYWNrIiwic2V0dGluZ3MiLCJmbiIsImlzRGF0YVRhYmxlIiwiZHQiLCJqcVhIUiIsImFib3J0IiwibGFuZ3VhZ2UiLCJ1cmwiLCJzZWxlY3QyIiwib24iLCJpZF9ldGFiIiwidmFsIiwiY29sdW1ucyIsInNlYXJjaCIsImRyYXciLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwicmVzcG9uc2VBbm5lZSIsInJlc3BvbnNlUHJvbW90aW9uIiwicmVxdWVzdFByb21vdGlvbiIsInJlcXVlc3RBbm5lZSIsIm1pbmltdW1JbnB1dExlbmd0aCIsImFsbG93Q2xlYXIiLCJwbGFjZWhvbGRlciIsImRhdGFUeXBlIiwicGFyYW1zIiwidGVybSIsInByb2Nlc3NSZXN1bHRzIiwicGFnZSIsImRhdGFBcnJheSIsIm1hcCIsIml0ZW0iLCJ0ZXh0IiwiY29kZSIsIm5vbSIsInByZW5vbSIsImlkIiwicmVzdWx0cyIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsImdldENvbnZvY2F0aW9uSW5mb3MiLCJyZW1vdmUiLCJtb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJtb2RhbEFsZXJ0IiwicHJlcGVuZCIsInJlc2V0IiwicmVsb2FkIiwiY29uZmlybWF0aW9uIiwiY29uZmlybSIsImFwcGVuZCIsImlkX2FncmVzc2lvbiIsImluY2lkZW50Iiwic2FuY3Rpb24iLCJyZXF1ZXN0c2FuY3Rpb24iLCJuZXdTYW5jdGlvbiIsInBhcmVudCIsImlucHV0cyIsImlucHV0IiwidHJpbSIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5Iiwid2luZG93Iiwib3BlbiIsInRoZW4iLCJzdWNjZXNzIiwiZXJyIiwiZm9ybWRhdGEiLCJzZXJpYWxpemUiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==