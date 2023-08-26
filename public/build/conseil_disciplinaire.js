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

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

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
      getConvocationInfos(); // getNotificationInfos();
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
  }))); // $("#notification").on("click", () => {
  //     if(!id_sanction){
  //       Toast.fire({
  //         icon: 'error',
  //         title: 'Veuillez selection une ligne!',
  //       })
  //       return;
  //     }
  //     $("#notification_modal .modal-body .alert").remove()
  //     $("#notification_modal").modal("show")
  // })
  // $("#notification_save").on("submit", async function (e){
  //     e.preventDefault();
  //     let formData = new FormData($(this)[0]);
  //     let modalAlert = $("#notification_modal .modal-body .alert")
  //     modalAlert.remove();
  //     const icon = $("#notification_save .submitBtn i");
  //     icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
  //     let inputs = $('#autre_sanction_text input');
  //     var autreSanctions = []
  //     inputs.map(async function(input)  {
  //         if( $.trim($(this).val())  != "") {
  //             autreSanctions.push($(this).val());
  //         } 
  //     }) 
  //     console.log(autreSanctions)
  //     formData.append("newSanctions",  JSON.stringify(autreSanctions));
  //     // return
  //     try {
  //       const request = await axios.post('/conseil/disciplinaire/ajouter_notification/'+id_sanction, formData);
  //       const response = request.data;
  //       $("#notification_modal .modal-body").prepend(
  //         `<div class="alert alert-success">
  //             <p>${response}</p>
  //           </div>`
  //       );
  //       icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
  //       $("#notification_modal select").val("").select2();
  //       $("#notification_save")[0].reset();
  //       table.ajax.reload(null, false)
  //     } catch (error) {
  //       const message = error.response.data;
  //       console.log(error, error.response);
  //       modalAlert.remove();
  //       $("#notification_modal .modal-body").prepend(
  //         `<div class="alert alert-danger">${message}</div>`
  //       );
  //       icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
  //     }
  // })

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
  $('body').on('click', '#annuler_convocation', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var confirmation, icon, formData, request, response, message;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            if (id_sanction) {
              _context10.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection une ligne!'
            });
            return _context10.abrupt("return");

          case 3:
            confirmation = confirm('Vous voulez vraiment annuler cette enregistrement ?');

            if (!(confirmation == 1)) {
              _context10.next = 26;
              break;
            }

            icon = $("#annuler_convocation i");
            icon.removeClass('fa-trash').addClass("fa-spinner fa-spin");
            formData = new FormData();
            formData.append("id_sanction", id_sanction);
            _context10.prev = 9;
            _context10.next = 12;
            return axios.post('/conseil/disciplinaire/annuler_convocation', formData);

          case 12:
            request = _context10.sent;
            response = request.data;
            id_sanction = false;
            table.ajax.reload(null, false);
            icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context10.next = 26;
            break;

          case 20:
            _context10.prev = 20;
            _context10.t0 = _context10["catch"](9);
            message = _context10.t0.response.data;
            console.log(_context10.t0, _context10.t0.response);
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");

          case 26:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[9, 20]]);
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
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var formdata, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault(); // alert('test');

              formdata = $(this).serialize();
              modalAlert = $("#convocation_update_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#convocation_update .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context11.prev = 6;
              _context11.next = 9;
              return axios.post('/conseil/disciplinaire/modifier_convocation/' + id_sanction, formdata);

            case 9:
              request = _context11.sent;
              data = request.data;
              $("#convocation_update_modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin"); // id_sanction = false;
              // table_reglement.ajax.reload(null, false);
              // window.open('/conseil/disciplinaire/reglementprint/'+id_reglement, '_blank');

              _context11.next = 22;
              break;

            case 15:
              _context11.prev = 15;
              _context11.t0 = _context11["catch"](6);
              message = _context11.t0.response.data;
              console.log(_context11.t0, _context11.t0.response);
              modalAlert.remove();
              $("#convocation_update_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
              setTimeout(function () {
                $("#convocation_update_modal .modal-body .alert").remove();
              }, 4000);

            case 23:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this, [[6, 15]]);
    }));

    return function (_x2) {
      return _ref11.apply(this, arguments);
    };
  }()); /////////// End Updating Convocation Block ///////////////

  var getNotificationInfos = function getNotificationInfos() {
    var modalAlert = $("#modifier_org-modal .modal-body .alert");
    modalAlert.remove();
    var icon = $("#modifier_notification i");
    icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
    axios.get('/conseil/disciplinaire/getnotificationInfos/' + id_sanction).then(function (success) {
      icon.removeClass('fa-spinner fa-spin').addClass("fa-edit"); // console.log(success);

      $('#notification_update_modal #notification_update').html(success.data);
      $('#notification_update_modal #notification_update select').select2();
      $("#notification_update_modal").modal('show');
    })["catch"](function (err) {
      // console.log(err)
      icon.removeClass('fa-spinner fa-spin ').addClass("fa-edit");
    });
  };

  $("#agressions").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var id_agression, incident, sanction, request, requestsanction;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            id_agression = $(this).val();
            incident = "";
            sanction = "";

            if (!(id_agression != "")) {
              _context12.next = 14;
              break;
            }

            _context12.next = 6;
            return axios.get('/api/sousagression/' + id_agression);

          case 6:
            request = _context12.sent;
            incident = request.data;
            _context12.next = 10;
            return axios.get('/api/sanction/' + id_agression);

          case 10:
            requestsanction = _context12.sent;
            sanction = requestsanction.data;
            _context12.next = 16;
            break;

          case 14:
            $('#incident').html("").select2();
            $('#sanction').html("").select2();

          case 16:
            $('#incident').html(incident).select2();
            $('#sanction').html(sanction).select2();

          case 18:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  })));
  $("body").on('change', '#Modifieragressions', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    var id_agression, incident, sanction, request, requestsanction;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            // alert('hi');
            id_agression = $(this).val();
            incident = "";
            sanction = "";

            if (!(id_agression != "")) {
              _context13.next = 15;
              break;
            }

            _context13.next = 6;
            return axios.get('/api/sousagression/' + id_agression);

          case 6:
            request = _context13.sent;
            incident = request.data;
            _context13.next = 10;
            return axios.get('/api/sanction/' + id_agression);

          case 10:
            requestsanction = _context13.sent;
            sanction = requestsanction.data;
            console.log(sanction);
            _context13.next = 17;
            break;

          case 15:
            $('#Modifierincident').html("").select2();
            $('#Modifiersanction').html("").select2();

          case 17:
            $('#Modifierincident').html(incident).select2();
            $('#Modifiersanction').html(sanction).select2();

          case 19:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, this);
  })));
  $('body').on('click', '#newSanction', function () {
    var newSanction = $(this).parent().parent();
    newSanction.append("<div class=\"d-flex  mt-2\">\n            <input type=\"text\" name=\"autre_sanction\" id=\"autre_sanction\" class=\"form-control\" placeholder=\"Autre Sanction\">\n            <button type=\"button\" class=\"btn btn-danger  ml-2\" id=\"removenewSanction\"><i class=\"fas fa-minus\"></i></button>\n          </div>");
    console.log(newSanction);
  });
  $('body').on('click', '#removenewSanction', function () {
    $(this).parent().remove();
  });
  $('body').on('click', '#ModifnewSanction', function () {
    var newSanction = $(this).parent().parent();
    newSanction.append("<div class=\"d-flex  mt-2\">\n            <input type=\"text\" name=\"autre_sanction\" id=\"autre_sanction\" class=\"form-control\" placeholder=\"Autre Sanction\">\n            <button type=\"button\" class=\"btn btn-danger  ml-2\" id=\"ModifremovenewSanction\"><i class=\"fas fa-minus\"></i></button>\n          </div>");
    console.log(newSanction);
  });
  $('body').on('click', '#ModifremovenewSanction', function () {
    $(this).parent().remove();
  });
  $('body').on('click', '#modifier_notification', function (e) {
    e.preventDefault(); // alert('hi');

    if (!id_sanction) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    getNotificationInfos();
  });
  $("body").on("submit", '#notification_update', /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e) {
      var formData, inputs, autreSanctions, modalAlert, icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              e.preventDefault(); // alert('test');

              formData = new FormData($(this)[0]);
              inputs = $('#notification_update #autre_sanction_text input');
              autreSanctions = [];
              inputs.map( /*#__PURE__*/function () {
                var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(input) {
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          if ($.trim($(this).val()) != "") {
                            autreSanctions.push($(this).val());
                          }

                        case 1:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14, this);
                }));

                return function (_x4) {
                  return _ref15.apply(this, arguments);
                };
              }());
              console.log(autreSanctions);
              formData.append("newSanctions", JSON.stringify(autreSanctions));
              modalAlert = $("#notification_update_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#notification_update .submitBtn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context15.prev = 11;
              _context15.next = 14;
              return axios.post('/conseil/disciplinaire/modifier_notification/' + id_sanction, formData);

            case 14:
              request = _context15.sent;
              data = request.data;
              $("#notification_update_modal .modal-body").prepend("<div class=\"alert alert-success\">".concat(data, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin"); // id_sanction = false;
              // table_reglement.ajax.reload(null, false);
              // window.open('/conseil/disciplinaire/reglementprint/'+id_reglement, '_blank');

              _context15.next = 27;
              break;

            case 20:
              _context15.prev = 20;
              _context15.t0 = _context15["catch"](11);
              message = _context15.t0.response.data;
              console.log(_context15.t0, _context15.t0.response);
              modalAlert.remove();
              $("#notification_update_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 27:
              setTimeout(function () {
                $("#notification_update_modal .modal-body .alert").remove();
              }, 4000);

            case 28:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this, [[11, 20]]);
    }));

    return function (_x3) {
      return _ref14.apply(this, arguments);
    };
  }());
  $('body').on('click', '#etat_notification', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            if (id_sanction) {
              _context16.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selection une ligne!'
            });
            return _context16.abrupt("return");

          case 3:
            icon = $("#etat_notification i");
            icon.removeClass('fa-print').addClass("fa-spinner fa-spin");
            _context16.prev = 5;
            _context16.next = 8;
            return axios.post('/conseil/disciplinaire/verification_notification/' + id_sanction);

          case 8:
            request = _context16.sent;
            response = request.data;
            icon.addClass('fa-print').removeClass("fa-spinner fa-spin ");
            window.open('/conseil/disciplinaire/etatNotification/' + id_sanction, '_blank');
            _context16.next = 20;
            break;

          case 14:
            _context16.prev = 14;
            _context16.t0 = _context16["catch"](5);
            message = _context16.t0.response.data;
            console.log(_context16.t0, _context16.t0.response);
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-print').removeClass("fa-spinner fa-spin ");

          case 20:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[5, 14]]);
  })));
  $('body').on('click', '#extraction_historique', function (e) {
    e.preventDefault();
    window.open('/conseil/disciplinaire/extraction_historique', '_blank');
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_map_js-node_modules_core-js_modules_es_string_s-d07aea"], () => (__webpack_exec__("./assets/components/conseil/conseil_disciplinaire.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2NvbnNlaWwvY29uc2VpbF9kaXNjaXBsaW5haXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG4gICAgfSlcclxuICAgIGxldCBpZF9zYW5jdGlvbiA9IGZhbHNlO1xyXG4gICAgbGV0IGF1dHJlU2FuY3Rpb25zID0gW107XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgdmFyIHRhYmxlID0gJChcIiNkYXRhdGFibGVzX2Rpc2NpcGxpbmFpcmVfaW5zY3JpcHRpb25cIikuRGF0YVRhYmxlKHtcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbiAgICAgICAgYWpheDogXCIvY29uc2VpbC9kaXNjaXBsaW5haXJlL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBpZEluc2NyaXB0aW9uLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgLy8gICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgLy8gICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfc2FuY3Rpb24pLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZURyYXdDYWxsYmFjazogZnVuY3Rpb24oc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKCcjZGF0YXRhYmxlc19kaXNjaXBsaW5haXJlX2luc2NyaXB0aW9uJykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9ICQoJyNkYXRhdGFibGVzX2Rpc2NpcGxpbmFpcmVfaW5zY3JpcHRpb24nKS5EYXRhVGFibGUoKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5ncyA9IGR0LnNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpXHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjYW5uZWUnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlQW5uZWUgPSBcIlwiXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlUHJvbW90aW9uID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0UHJvbW90aW9uID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbW90aW9uID0gcmVxdWVzdFByb21vdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RBbm5lZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9hbm5lZS8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlQW5uZWUgPSByZXF1ZXN0QW5uZWUuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjYW5uZWUnKS5odG1sKHJlc3BvbnNlQW5uZWUpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZVByb21vdGlvbikuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjYW5uZWVcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuY29sdW1ucygzKS5zZWFyY2goJChcIiNhbm5lZVwiKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygyKS5zZWFyY2goJCh0aGlzKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAkKFwiI2FubmVlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgICAgIGlmKCQodGhpcykudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjZXR1ZGlhbnRcIikuc2VsZWN0Mih7XHJcbiAgICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAzLCAgLy8gcmVxdWlyZWQgZW50ZXIgMyBjaGFyYWN0ZXJzIG9yIG1vcmVcclxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXR1ZGlhbnQnLFxyXG4gICAgICAgIGxhbmd1YWdlOiBcImZyXCIsXHJcbiAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgdXJsOiAnL2V0dWRpYW50L3JlY2hlcmNoZWF2YW5jZS9maW5kJywgIFxyXG4gICAgICAgIC8vICAgIGRlbGF5OiA1LCAgLy8gaW5pIGJlYmFzIG1hdSBkaSBwYWtlIGF0YXUgdGlkYWtcclxuICAgICAgICAgICBkYXRhOiBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgIHNlYXJjaDogcGFyYW1zLnRlcm1cclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIHByb2Nlc3NSZXN1bHRzOiBmdW5jdGlvbiAoZGF0YSwgcGFnZSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YUFycmF5ID0gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbS5jb2RlICtcIiBcIitpdGVtLm5vbSArIFwiIFwiICtpdGVtLnByZW5vbSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0czogZGF0YUFycmF5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgIFxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiI2V0dWRpYW50XCIsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldHVkaWFudC9yZWNoZXJjaGVhdmFuY2UvZmluZEFubmVlLycrJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAkKFwiI2FubmVlMlwiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAvLyAgICAgaWYoaW5wdXQuaXMoXCI6Y2hlY2tlZFwiKSl7XHJcbiAgICAvLyAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCBpbmRleCA9IGlkSW5zY3JpcHRpb24uaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgLy8gICAgICAgICBpZEluc2NyaXB0aW9uLnNwbGljZShpbmRleCwxKTtcclxuICAgIC8vICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgIC8vICAgICAgICAgaWRJbnNjcmlwdGlvbi5wdXNoKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YXRhYmxlc19kaXNjaXBsaW5haXJlX2luc2NyaXB0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zYW5jdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhdGFibGVzX2Rpc2NpcGxpbmFpcmVfaW5zY3JpcHRpb24gdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9zYW5jdGlvbiA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgZ2V0Q29udm9jYXRpb25JbmZvcygpXHJcbiAgICAgICAgICAgIC8vIGdldE5vdGlmaWNhdGlvbkluZm9zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkX3NhbmN0aW9uKVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgICQoXCIjY29udm9jYXRpb25cIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgJChcIiNjb252b2NhdGlvbl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKClcclxuICAgICAgICAkKFwiI2NvbnZvY2F0aW9uX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNjb252b2NhdGlvbl9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNjb252b2NhdGlvbl9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIilcclxuICAgIFxyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjY29udm9jYXRpb25fc2F2ZSAuYnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvY29uc2VpbC9kaXNjaXBsaW5haXJlL2Fqb3V0ZXJfY29udm9jYXRpb24nLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICQoXCIjY29udm9jYXRpb25fbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgJChcIiNjb252b2NhdGlvbl9zYXZlXCIpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICQoXCIjY29udm9jYXRpb25fbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjdmFsaWRhdGlvblwiKS5vbihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZighaWRfc2FuY3Rpb24pe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjdmFsaWRhdGlvbiAgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvY29uc2VpbC9kaXNjaXBsaW5haXJlL2NvbnZvY2F0aW9uX3ZhbGlkYXRpb24vJytpZF9zYW5jdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBpZF9zYW5jdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNkZXZhbGlkYXRpb25cIikub24oXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7ICAgICBcclxuICAgICAgICBpZighaWRfc2FuY3Rpb24pe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbmZpcm1hdGlvbiA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IGRldmFsaWRlciBjZXR0ZSBjb252b2NhdGlvbiA/Jyk7XHJcbiAgICAgICAgaWYgKGNvbmZpcm1hdGlvbiA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RldmFsaWRhdGlvbiBpXCIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS10aW1lcycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImlkX3NhbmN0aW9uXCIsICBpZF9zYW5jdGlvbik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2NvbnNlaWwvZGlzY2lwbGluYWlyZS9jb252b2NhdGlvbl9kZXZhbGlkYXRpb24nLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWRfc2FuY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdGltZXMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjc2Fuc19zdWl0ZVwiKS5vbihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZighaWRfc2FuY3Rpb24pe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc2Fuc19zdWl0ZSAgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS11bmRvJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9jb25zZWlsL2Rpc2NpcGxpbmFpcmUvY29udm9jYXRpb25fc2Fuc19zdWl0ZS8nK2lkX3NhbmN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIC8vIGlkX3NhbmN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdW5kbycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXVuZG8nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuXHJcbiAgICAvLyAkKFwiI25vdGlmaWNhdGlvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vICAgICBpZighaWRfc2FuY3Rpb24pe1xyXG4gICAgLy8gICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAvLyAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAvLyAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgJChcIiNub3RpZmljYXRpb25fbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpXHJcbiAgICAvLyAgICAgJChcIiNub3RpZmljYXRpb25fbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAvLyB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgLy8gJChcIiNub3RpZmljYXRpb25fc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgIC8vICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjbm90aWZpY2F0aW9uX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgLy8gICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAvLyAgICAgY29uc3QgaWNvbiA9ICQoXCIjbm90aWZpY2F0aW9uX3NhdmUgLnN1Ym1pdEJ0biBpXCIpO1xyXG4gICAgLy8gICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIGxldCBpbnB1dHMgPSAkKCcjYXV0cmVfc2FuY3Rpb25fdGV4dCBpbnB1dCcpO1xyXG4gICAgLy8gICAgIHZhciBhdXRyZVNhbmN0aW9ucyA9IFtdXHJcbiAgICAvLyAgICAgaW5wdXRzLm1hcChhc3luYyBmdW5jdGlvbihpbnB1dCkgIHtcclxuICAgIC8vICAgICAgICAgaWYoICQudHJpbSgkKHRoaXMpLnZhbCgpKSAgIT0gXCJcIikge1xyXG4gICAgLy8gICAgICAgICAgICAgYXV0cmVTYW5jdGlvbnMucHVzaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIC8vICAgICAgICAgfSBcclxuICAgIC8vICAgICB9KSBcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhhdXRyZVNhbmN0aW9ucylcclxuICAgIC8vICAgICBmb3JtRGF0YS5hcHBlbmQoXCJuZXdTYW5jdGlvbnNcIiwgIEpTT04uc3RyaW5naWZ5KGF1dHJlU2FuY3Rpb25zKSk7XHJcbiAgICAvLyAgICAgLy8gcmV0dXJuXHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvY29uc2VpbC9kaXNjaXBsaW5haXJlL2Fqb3V0ZXJfbm90aWZpY2F0aW9uLycraWRfc2FuY3Rpb24sIGZvcm1EYXRhKTtcclxuICAgIC8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgLy8gICAgICAgJChcIiNub3RpZmljYXRpb25fbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgIC8vICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAvLyAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgIC8vICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAvLyAgICAgICApO1xyXG4gICAgLy8gICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgLy8gICAgICAgJChcIiNub3RpZmljYXRpb25fbW9kYWwgc2VsZWN0XCIpLnZhbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAvLyAgICAgICAkKFwiI25vdGlmaWNhdGlvbl9zYXZlXCIpWzBdLnJlc2V0KCk7XHJcbiAgICAvLyAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgLy8gICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgIC8vICAgICAgICQoXCIjbm90aWZpY2F0aW9uX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAvLyAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgIC8vICAgICAgICk7XHJcbiAgICAvLyAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V0YXRfY29udm9jYXRpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICBpZighaWRfc2FuY3Rpb24pe1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9jb25zZWlsL2Rpc2NpcGxpbmFpcmUvZXRhdENvbnZvY2F0aW9uLycraWRfc2FuY3Rpb24sICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjYW5udWxlcl9jb252b2NhdGlvbicsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGlmKCFpZF9zYW5jdGlvbil7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29uZmlybWF0aW9uID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgYW5udWxlciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICAgICAgaWYgKGNvbmZpcm1hdGlvbiA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2FubnVsZXJfY29udm9jYXRpb24gaVwiKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtdHJhc2gnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZF9zYW5jdGlvblwiLCAgaWRfc2FuY3Rpb24pO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9jb25zZWlsL2Rpc2NpcGxpbmFpcmUvYW5udWxlcl9jb252b2NhdGlvbicsZm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZF9zYW5jdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10cmFzaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdHJhc2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vLy8vLy8vLy8vIHN0YXJ0IFVwZGF0aW5nIENvbnZvY2F0aW9uIEJsb2NrIC8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIGNvbnN0IGdldENvbnZvY2F0aW9uSW5mb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNtb2RpZmllcl9vcmctbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXJfY29udm9jYXRpb24gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvY29uc2VpbC9kaXNjaXBsaW5haXJlL2dldGNvbnZvY2F0aW9uSW5mb3MvJytpZF9zYW5jdGlvbilcclxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1lZGl0XCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAgICAgICAgICAgJCgnI2NvbnZvY2F0aW9uX3VwZGF0ZV9tb2RhbCAjY29udm9jYXRpb25fdXBkYXRlJykuaHRtbChzdWNjZXNzLmRhdGEpXHJcbiAgICAgICAgICAgICQoJyNjb252b2NhdGlvbl91cGRhdGVfbW9kYWwgI2NvbnZvY2F0aW9uX3VwZGF0ZSBzZWxlY3QnKS5zZWxlY3QyKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbiAnKS5hZGRDbGFzcyhcImZhLWVkaXRcIik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjbW9kaWZpZXJfY29udm9jYXRpb24nLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCFpZF9zYW5jdGlvbil7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjY29udm9jYXRpb25fdXBkYXRlX21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChcImJvZHlcIikub24oXCJzdWJtaXRcIiwgJyNjb252b2NhdGlvbl91cGRhdGUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBhbGVydCgndGVzdCcpO1xyXG4gICAgICAgIGxldCBmb3JtZGF0YSA9ICQodGhpcykuc2VyaWFsaXplKClcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI2NvbnZvY2F0aW9uX3VwZGF0ZV9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNjb252b2NhdGlvbl91cGRhdGUgLmJ0biBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0ICBheGlvcy5wb3N0KCcvY29uc2VpbC9kaXNjaXBsaW5haXJlL21vZGlmaWVyX2NvbnZvY2F0aW9uLycraWRfc2FuY3Rpb24sZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjY29udm9jYXRpb25fdXBkYXRlX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj4ke2RhdGF9PC9kaXY+YFxyXG4gICAgICAgICAgICApOyBcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIC8vIGlkX3NhbmN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRhYmxlX3JlZ2xlbWVudC5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIHdpbmRvdy5vcGVuKCcvY29uc2VpbC9kaXNjaXBsaW5haXJlL3JlZ2xlbWVudHByaW50LycraWRfcmVnbGVtZW50LCAnX2JsYW5rJyk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoXCIjY29udm9jYXRpb25fdXBkYXRlX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgJChcIiNjb252b2NhdGlvbl91cGRhdGVfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDQwMDApO1xyXG4gICAgfSk7XHJcbiAgICAvLy8vLy8vLy8vLyBFbmQgVXBkYXRpbmcgQ29udm9jYXRpb24gQmxvY2sgLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgY29uc3QgZ2V0Tm90aWZpY2F0aW9uSW5mb3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAgJChcIiNtb2RpZmllcl9vcmctbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXJfbm90aWZpY2F0aW9uIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2NvbnNlaWwvZGlzY2lwbGluYWlyZS9nZXRub3RpZmljYXRpb25JbmZvcy8nK2lkX3NhbmN0aW9uKVxyXG4gICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLWVkaXRcIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAkKCcjbm90aWZpY2F0aW9uX3VwZGF0ZV9tb2RhbCAjbm90aWZpY2F0aW9uX3VwZGF0ZScpLmh0bWwoc3VjY2Vzcy5kYXRhKVxyXG4gICAgICAgICAgICAkKCcjbm90aWZpY2F0aW9uX3VwZGF0ZV9tb2RhbCAjbm90aWZpY2F0aW9uX3VwZGF0ZSBzZWxlY3QnKS5zZWxlY3QyKClcclxuICAgICAgICAgICAgJChcIiNub3RpZmljYXRpb25fdXBkYXRlX21vZGFsXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4gJykuYWRkQ2xhc3MoXCJmYS1lZGl0XCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgICQoXCIjYWdyZXNzaW9uc1wiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfYWdyZXNzaW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgaW5jaWRlbnQgPSBcIlwiXHJcbiAgICAgICAgbGV0IHNhbmN0aW9uID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2FncmVzc2lvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc291c2FncmVzc2lvbi8nK2lkX2FncmVzc2lvbik7XHJcbiAgICAgICAgICAgIGluY2lkZW50ID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RzYW5jdGlvbiA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zYW5jdGlvbi8nK2lkX2FncmVzc2lvbik7XHJcbiAgICAgICAgICAgIHNhbmN0aW9uID0gcmVxdWVzdHNhbmN0aW9uLmRhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjaW5jaWRlbnQnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAgICAgJCgnI3NhbmN0aW9uJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNpbmNpZGVudCcpLmh0bWwoaW5jaWRlbnQpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjc2FuY3Rpb24nKS5odG1sKHNhbmN0aW9uKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oJ2NoYW5nZScsJyNNb2RpZmllcmFncmVzc2lvbnMnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICAvLyBhbGVydCgnaGknKTtcclxuICAgICAgICBjb25zdCBpZF9hZ3Jlc3Npb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCBpbmNpZGVudCA9IFwiXCJcclxuICAgICAgICBsZXQgc2FuY3Rpb24gPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfYWdyZXNzaW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zb3VzYWdyZXNzaW9uLycraWRfYWdyZXNzaW9uKTtcclxuICAgICAgICAgICAgaW5jaWRlbnQgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdHNhbmN0aW9uID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NhbmN0aW9uLycraWRfYWdyZXNzaW9uKTtcclxuICAgICAgICAgICAgc2FuY3Rpb24gPSByZXF1ZXN0c2FuY3Rpb24uZGF0YVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2FuY3Rpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNNb2RpZmllcmluY2lkZW50JykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJyNNb2RpZmllcnNhbmN0aW9uJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNNb2RpZmllcmluY2lkZW50JykuaHRtbChpbmNpZGVudCkuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNNb2RpZmllcnNhbmN0aW9uJykuaHRtbChzYW5jdGlvbikuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI25ld1NhbmN0aW9uJywgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgbGV0IG5ld1NhbmN0aW9uID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKTtcclxuICAgICAgICBuZXdTYW5jdGlvbi5hcHBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiZC1mbGV4ICBtdC0yXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhdXRyZV9zYW5jdGlvblwiIGlkPVwiYXV0cmVfc2FuY3Rpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQXV0cmUgU2FuY3Rpb25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciAgbWwtMlwiIGlkPVwicmVtb3ZlbmV3U2FuY3Rpb25cIj48aSBjbGFzcz1cImZhcyBmYS1taW51c1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1NhbmN0aW9uKVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjcmVtb3ZlbmV3U2FuY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI01vZGlmbmV3U2FuY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICBsZXQgbmV3U2FuY3Rpb24gPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgIG5ld1NhbmN0aW9uLmFwcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJkLWZsZXggIG10LTJcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImF1dHJlX3NhbmN0aW9uXCIgaWQ9XCJhdXRyZV9zYW5jdGlvblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJBdXRyZSBTYW5jdGlvblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyICBtbC0yXCIgaWQ9XCJNb2RpZnJlbW92ZW5ld1NhbmN0aW9uXCI+PGkgY2xhc3M9XCJmYXMgZmEtbWludXNcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdTYW5jdGlvbilcclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI01vZGlmcmVtb3ZlbmV3U2FuY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjbW9kaWZpZXJfbm90aWZpY2F0aW9uJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBhbGVydCgnaGknKTtcclxuICAgICAgICBpZighaWRfc2FuY3Rpb24pe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXROb3RpZmljYXRpb25JbmZvcygpXHJcbiAgICB9KTtcclxuICAgICQoXCJib2R5XCIpLm9uKFwic3VibWl0XCIsICcjbm90aWZpY2F0aW9uX3VwZGF0ZScsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIGFsZXJ0KCd0ZXN0Jyk7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcylbMF0pO1xyXG5cclxuICAgICAgICBsZXQgaW5wdXRzID0gJCgnI25vdGlmaWNhdGlvbl91cGRhdGUgI2F1dHJlX3NhbmN0aW9uX3RleHQgaW5wdXQnKTtcclxuICAgICAgICB2YXIgYXV0cmVTYW5jdGlvbnMgPSBbXVxyXG4gICAgICAgIGlucHV0cy5tYXAoYXN5bmMgZnVuY3Rpb24oaW5wdXQpICB7XHJcbiAgICAgICAgICAgIGlmKCAkLnRyaW0oJCh0aGlzKS52YWwoKSkgICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGF1dHJlU2FuY3Rpb25zLnB1c2goJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgY29uc29sZS5sb2coYXV0cmVTYW5jdGlvbnMpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibmV3U2FuY3Rpb25zXCIsICBKU09OLnN0cmluZ2lmeShhdXRyZVNhbmN0aW9ucykpO1xyXG5cclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICAkKFwiI25vdGlmaWNhdGlvbl91cGRhdGVfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbm90aWZpY2F0aW9uX3VwZGF0ZSAuc3VibWl0QnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgIGF4aW9zLnBvc3QoJy9jb25zZWlsL2Rpc2NpcGxpbmFpcmUvbW9kaWZpZXJfbm90aWZpY2F0aW9uLycraWRfc2FuY3Rpb24sZm9ybURhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjbm90aWZpY2F0aW9uX3VwZGF0ZV9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+JHtkYXRhfTwvZGl2PmBcclxuICAgICAgICAgICAgKTsgXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAvLyBpZF9zYW5jdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0YWJsZV9yZWdsZW1lbnQuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyB3aW5kb3cub3BlbignL2NvbnNlaWwvZGlzY2lwbGluYWlyZS9yZWdsZW1lbnRwcmludC8nK2lkX3JlZ2xlbWVudCwgJ19ibGFuaycpO1xyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpOyBcclxuICAgICAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNub3RpZmljYXRpb25fdXBkYXRlX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgJChcIiNub3RpZmljYXRpb25fdXBkYXRlX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCA0MDAwKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V0YXRfbm90aWZpY2F0aW9uJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgaWYoIWlkX3NhbmN0aW9uKXtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2V0YXRfbm90aWZpY2F0aW9uIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtcHJpbnQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2NvbnNlaWwvZGlzY2lwbGluYWlyZS92ZXJpZmljYXRpb25fbm90aWZpY2F0aW9uLycraWRfc2FuY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtcHJpbnQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCcvY29uc2VpbC9kaXNjaXBsaW5haXJlL2V0YXROb3RpZmljYXRpb24vJytpZF9zYW5jdGlvbiwgJ19ibGFuaycpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXByaW50JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXh0cmFjdGlvbl9oaXN0b3JpcXVlJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB3aW5kb3cub3BlbignL2NvbnNlaWwvZGlzY2lwbGluYWlyZS9leHRyYWN0aW9uX2hpc3RvcmlxdWUnLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxufSlcclxuXHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9zYW5jdGlvbiIsImF1dHJlU2FuY3Rpb25zIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJhZGRDbGFzcyIsInByZURyYXdDYWxsYmFjayIsInNldHRpbmdzIiwiZm4iLCJpc0RhdGFUYWJsZSIsImR0IiwianFYSFIiLCJhYm9ydCIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJkcmF3IiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsInJlc3BvbnNlQW5uZWUiLCJyZXNwb25zZVByb21vdGlvbiIsInJlcXVlc3RQcm9tb3Rpb24iLCJyZXF1ZXN0QW5uZWUiLCJtaW5pbXVtSW5wdXRMZW5ndGgiLCJhbGxvd0NsZWFyIiwicGxhY2Vob2xkZXIiLCJkYXRhVHlwZSIsInBhcmFtcyIsInRlcm0iLCJwcm9jZXNzUmVzdWx0cyIsInBhZ2UiLCJkYXRhQXJyYXkiLCJtYXAiLCJpdGVtIiwidGV4dCIsImNvZGUiLCJub20iLCJwcmVub20iLCJpZCIsInJlc3VsdHMiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImF0dHIiLCJnZXRDb252b2NhdGlvbkluZm9zIiwicmVtb3ZlIiwibW9kYWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwibW9kYWxBbGVydCIsInByZXBlbmQiLCJyZXNldCIsInJlbG9hZCIsImNvbmZpcm1hdGlvbiIsImNvbmZpcm0iLCJhcHBlbmQiLCJ3aW5kb3ciLCJvcGVuIiwidGhlbiIsInN1Y2Nlc3MiLCJlcnIiLCJmb3JtZGF0YSIsInNlcmlhbGl6ZSIsInNldFRpbWVvdXQiLCJnZXROb3RpZmljYXRpb25JbmZvcyIsImlkX2FncmVzc2lvbiIsImluY2lkZW50Iiwic2FuY3Rpb24iLCJyZXF1ZXN0c2FuY3Rpb24iLCJuZXdTYW5jdGlvbiIsInBhcmVudCIsImlucHV0cyIsImlucHV0IiwidHJpbSIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==