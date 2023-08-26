(self["webpackChunk"] = self["webpackChunk"] || []).push([["inscription"],{

/***/ "./assets/components/inscription/gestioninscription.js":
/*!*************************************************************!*\
  !*** ./assets/components/inscription/gestioninscription.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

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
var id_inscription = false;
var idInscription = [];
var frais = [];
var facture_exist = false;
$(document).ready(function () {
  var table = $("#datatables_gestion_inscription").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/inscription/gestion/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      idInscription.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_inscription).addClass('active_databales');
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datatables_gestion_inscription')) {
        var dt = $('#datatables_gestion_inscription').DataTable(); //Abort previous ajax request if it is still in process.

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

  var getStatutInscription = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              icon = $('#statut-modal i');
              _context.prev = 1;
              icon.removeClass('fa-check').addClass('fa-spinner fa-spin');
              _context.next = 5;
              return axios.get("/inscription/gestion/getstatut/" + id_inscription);

            case 5:
              request = _context.sent;
              _context.next = 8;
              return request.data;

            case 8:
              data = _context.sent;
              $('#statut_inscription').html(data).select2();
              _context.next = 17;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              Toast.fire({
                icon: 'error',
                title: "Some Error"
              });

            case 17:
              icon.addClass('fa-check').removeClass('fa-spinner fa-spin');

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function getStatutInscription() {
      return _ref.apply(this, arguments);
    };
  }();

  $("#frais").on("change", function () {
    $("#montant").val($("#frais").find(":selected").data('frais'));
  });

  var getOrganisme = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios.get("/api/organisme");

            case 3:
              request = _context2.sent;
              _context2.next = 6;
              return request.data;

            case 6:
              data = _context2.sent;
              $('#organisme').html(data).select2();
              _context2.next = 15;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              message = _context2.t0.response.data;
              console.log(_context2.t0, _context2.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function getOrganisme() {
      return _ref2.apply(this, arguments);
    };
  }();

  getOrganisme();
  $("#etablissement").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_etab = $(this).val();
            table.columns().search("");
            table.columns(0).search(id_etab).draw();
            response = "";

            if (!(id_etab != "")) {
              _context3.next = 11;
              break;
            }

            _context3.next = 7;
            return axios.get('/api/formation/' + id_etab);

          case 7:
            request = _context3.sent;
            response = request.data;
            _context3.next = 13;
            break;

          case 11:
            $('#annee').html("").select2();
            $('#promotion').html("").select2();

          case 13:
            $('#formation').html(response).select2();

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_formation, responseAnnee, responsePromotion, requestPromotion, requestAnnee;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_formation = $(this).val();
            table.columns().search("");
            responseAnnee = "";
            responsePromotion = "";

            if (!(id_formation != "")) {
              _context4.next = 16;
              break;
            }

            table.columns(1).search(id_formation).draw();
            _context4.next = 8;
            return axios.get('/api/promotion/' + id_formation);

          case 8:
            requestPromotion = _context4.sent;
            responsePromotion = requestPromotion.data;
            _context4.next = 12;
            return axios.get('/api/annee/' + id_formation);

          case 12:
            requestAnnee = _context4.sent;
            responseAnnee = requestAnnee.data;
            _context4.next = 17;
            break;

          case 16:
            table.columns(0).search($("#etablissement").val()).draw();

          case 17:
            $('#annee').html(responseAnnee).select2();
            $('#promotion').html(responsePromotion).select2();

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
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
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#annee").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            table.columns().search("");

            if ($(this).val() != "") {
              table.columns(3).search($(this).val());
            }

            table.columns(2).search($("#promotion").val()).draw();

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $('body').on('click', '#datatables_gestion_inscription tbody tr', function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idInscription.indexOf(input.attr("id"));
      idInscription.splice(index, 1);
    } else {
      input.prop("checked", true);
      idInscription.push(input.attr("id"));
    }
  });
  $('body').on('dblclick', '#datatables_gestion_inscription tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_inscription = null;
    } else {
      $("#datatables_gestion_inscription tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_inscription = $(this).attr('id');
      getStatutInscription();
    }
  });

  var getFrais = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return axios.get("/inscription/gestion/frais/" + id_inscription);

            case 3:
              request = _context7.sent;
              _context7.next = 6;
              return request.data;

            case 6:
              data = _context7.sent;
              facture_exist = 1;
              $('#frais').html(data.list).select2();
              $('#code-facture').html(data.codefacture);
              _context7.next = 19;
              break;

            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](0);
              message = _context7.t0.response.data;
              facture_exist = false;
              Toast.fire({
                icon: 'error',
                title: 'Facture Introuvable!'
              });
              return _context7.abrupt("return");

            case 19:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 12]]);
    }));

    return function getFrais() {
      return _ref7.apply(this, arguments);
    };
  }();

  var getInscriptionInfos = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      var _icon, request, data, message;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _icon = $('#frais-modal i');

              _icon.removeClass('fa-money-bill-alt').addClass('fa-spinner fa-spin');

              _context8.next = 5;
              return axios.get("/inscription/gestion/info/" + id_inscription);

            case 5:
              request = _context8.sent;
              _context8.next = 8;
              return request.data;

            case 8:
              data = _context8.sent;
              $('.etudiant_info').html(data);

              _icon.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin');

              $("#frais_inscription-modal").modal("show");
              _context8.next = 20;
              break;

            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](0);
              message = _context8.t0.response.data;
              console.log(_context8.t0, _context8.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-money-bill-alt').removeClass('fa-spinner fa-spin');

            case 20:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 14]]);
    }));

    return function getInscriptionInfos() {
      return _ref8.apply(this, arguments);
    };
  }();

  $("#frais-modal").on("click", function () {
    if (!id_inscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    } // if(!facture_exist){
    //     Toast.fire({
    //       icon: 'error',
    //       title: 'Facture Introuvable!',
    //     })
    //     return;
    // }


    getFrais();
    getInscriptionInfos();
  });
  $('input[type=radio][name=organ]').on('change', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var request;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();

              if (!(this.value == 0)) {
                _context9.next = 10;
                break;
              }

              _context9.next = 4;
              return axios.get('/api/getorganismepasPayant');

            case 4:
              request = _context9.sent;
              response = request.data;
              $('.select-organ #org').html(response).select2();
              $('.select-organ').css('display', 'block');
              _context9.next = 12;
              break;

            case 10:
              $('.select-organ #org').html("");
              $('.select-organ').css('display', 'none');

            case 12:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    return function (_x) {
      return _ref9.apply(this, arguments);
    };
  }());
  $("#add_frais_gestion").on("click", function () {
    var fraisId = $("#frais").find(":selected").val();

    if (fraisId != "") {
      var fraisText = $("#frais").find(":selected").text();
      var prix = $("#montant").val();
      var ice = $("#ice").val();
      var organ = $('.select-organ #org').find(':selected').text();
      var organisme_id = $('.select-organ #org').val();

      if (!$.isNumeric(fraisId) || prix == "") {
        return;
      }

      if ($("input[name='organ']:checked").val() == 1) {
        organisme_id = 7;
        organ = "Payant";
      } else if (organisme_id == "") {
        return;
      }

      frais.push({
        index: Math.floor(Math.random() * 1000 + 1),
        id: fraisId,
        designation: fraisText,
        montant: prix,
        ice: ice,
        organisme_id: organisme_id,
        organisme: organ
      });
      rawFrais();
    }
  });
  $("body").on("click", '.delete_frais', function () {
    var _this = this;

    var index = frais.findIndex(function (frais) {
      return frais.index == $(_this).attr("id");
    });
    frais.splice(index, 1);
    rawFrais();
  });

  var rawFrais = function rawFrais() {
    var html = "";
    frais.map(function (f, i) {
      html += "\n            <tr>\n                <td>".concat(i + 1, "</td>\n                <td>").concat(f.designation, "</td>\n                <td>").concat(f.montant, "</td>\n                <td>").concat(f.ice, "</td>\n                <td>").concat(f.organisme, "</td>\n                <td><button class='delete_frais btn btn-danger'  id='").concat(f.index, "'><i class='fa fa-trash' ></i></button></td>\n            </tr>\n        ");
    }); // console.log(html);

    $(".table_frais_inscription").html(html);
  };

  $("#save_frais_gestion").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var formData, modalAlert, icon, request, _response, message;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            formData = new FormData();
            formData.append("frais", JSON.stringify(frais)); // formData.append("organisme", $("#organisme").val())

            modalAlert = $("#frais_inscription-modal .modal-body .alert");
            modalAlert.remove();
            icon = $("#save_frais_gestion i");
            icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
            _context10.prev = 6;
            _context10.next = 9;
            return axios.post('/inscription/gestion/addfrais/' + id_inscription, formData);

          case 9:
            request = _context10.sent;
            _response = request.data;
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>Bien Enregistre</p>\n              </div>");
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
            $(".table_frais_inscription").empty();
            frais = [];
            window.open("/inscription/gestion/facture/" + _response, '_blank');
            table.ajax.reload(null, false);
            _context10.next = 26;
            break;

          case 19:
            _context10.prev = 19;
            _context10.t0 = _context10["catch"](6);
            message = _context10.t0.response.data;
            console.log(_context10.t0, _context10.t0.response);
            modalAlert.remove();
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

          case 26:
            setTimeout(function () {
              $("#frais_inscription-modal .modal-body .alert").remove();
            }, 3000);

          case 27:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[6, 19]]);
  })));
  $("#statut-modal").on("click", function () {
    if (!id_inscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#statut_modal .modal-body .alert").remove();
    $("#statut_modal").modal("show");
  });
  $("#statut_save").on("submit", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var formData, modalAlert, icon, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#statut_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#statut_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context11.prev = 6;
              _context11.next = 9;
              return axios.post('/inscription/gestion/updatestatut/' + id_inscription, formData);

            case 9:
              request = _context11.sent;
              _response2 = request.data;
              $("#statut_modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response2, "</p>\n              </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $("#annee_inscription, #promotion_inscription").empty();
              table.ajax.reload(null, false);
              _context11.next = 24;
              break;

            case 17:
              _context11.prev = 17;
              _context11.t0 = _context11["catch"](6);
              message = _context11.t0.response.data;
              console.log(_context11.t0, _context11.t0.response);
              modalAlert.remove();
              $("#statut_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this, [[6, 17]]);
    }));

    return function (_x2) {
      return _ref11.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction', function () {
    window.open('/inscription/gestion/extraction_ins', '_blank');
  });
  $('body').on('click', '#extraction_annee', function (e) {
    e.preventDefault();
    $("#annee_extraction_inscription").modal('show');
  });
  $('body').on('click', '#export_inscription', function (e) {
    e.preventDefault();
    var annee = $('#annee_export').val(); // alert(annee);

    window.open('/inscription/gestion/extraction_ins_annee/' + annee, '_blank');
  });
  $('#annee_export').on('input', function () {
    var inputYear = parseInt($(this).val());
    var yearPlusOne = inputYear + 1;

    if (!isNaN(yearPlusOne)) {
      $('#year_plus_one').text(yearPlusOne);
    } else {
      $('#year_plus_one').text('');
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-9dcb8b"], () => (__webpack_exec__("./assets/components/inscription/gestioninscription.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zY3JpcHRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXO0FBQ3JCQyxFQUFBQSxLQUFLLEVBQUUsSUFEYztBQUVyQkMsRUFBQUEsUUFBUSxFQUFFLFNBRlc7QUFHckJDLEVBQUFBLGlCQUFpQixFQUFFLEtBSEU7QUFJckJDLEVBQUFBLEtBQUssRUFBRSxJQUpjO0FBS3JCQyxFQUFBQSxnQkFBZ0IsRUFBRSxJQUxHO0FBTXJCQyxFQUFBQSxPQUFPLEVBQUUsaUJBQUNMLEtBQUQsRUFBVztBQUNoQkEsSUFBQUEsS0FBSyxDQUFDTSxnQkFBTixDQUF1QixZQUF2QixFQUFxQ1IsSUFBSSxDQUFDUyxTQUExQztBQUNBUCxJQUFBQSxLQUFLLENBQUNNLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDUixJQUFJLENBQUNVLFdBQTFDO0FBQ0g7QUFUb0IsQ0FBWCxDQUFkO0FBV0ksSUFBSUMsY0FBYyxHQUFHLEtBQXJCO0FBQ0EsSUFBSUMsYUFBYSxHQUFHLEVBQXBCO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxJQUFJQyxhQUFhLEdBQUcsS0FBcEI7QUFDQUMsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFhO0FBQy9CLE1BQUlDLEtBQUssR0FBR0gsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNJLFNBQXJDLENBQStDO0FBQ3ZEQyxJQUFBQSxVQUFVLEVBQUUsQ0FDUixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsY0FBdEIsQ0FEUSxFQUVSLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixLQUF0QixDQUZRLENBRDJDO0FBS3ZEQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxNQUFKLENBQUQsQ0FMZ0Q7QUFNdkRDLElBQUFBLElBQUksRUFBRSwyQkFOaUQ7QUFPdkRDLElBQUFBLFVBQVUsRUFBRSxJQVAyQztBQVF2REMsSUFBQUEsVUFBVSxFQUFFLElBUjJDO0FBU3ZEQyxJQUFBQSxXQUFXLEVBQUUsSUFUMEM7QUFVdkRDLElBQUFBLFVBQVUsRUFBRSxJQVYyQztBQVd2REMsSUFBQUEsT0FBTyxFQUFFLElBWDhDO0FBWXZEQyxJQUFBQSxZQUFZLEVBQUUsd0JBQVk7QUFDdEJoQixNQUFBQSxhQUFhLENBQUNpQixPQUFkLENBQXNCLFVBQUNDLENBQUQsRUFBTztBQUN6QmYsUUFBQUEsQ0FBQyxDQUFDLGFBQWFlLENBQWQsQ0FBRCxDQUNDQyxJQURELENBQ00sT0FETixFQUVDQyxJQUZELENBRU0sU0FGTixFQUVpQixJQUZqQjtBQUdILE9BSkQ7QUFLQWpCLE1BQUFBLENBQUMsQ0FBQyxhQUFhSixjQUFkLENBQUQsQ0FBK0JzQixRQUEvQixDQUF3QyxrQkFBeEM7QUFDSCxLQW5Cc0Q7QUFvQnZEQyxJQUFBQSxlQUFlLEVBQUUseUJBQVNDLFFBQVQsRUFBbUI7QUFDaEMsVUFBSXBCLENBQUMsQ0FBQ3FCLEVBQUYsQ0FBS2pCLFNBQUwsQ0FBZWtCLFdBQWYsQ0FBMkIsaUNBQTNCLENBQUosRUFBbUU7QUFDL0QsWUFBSUMsRUFBRSxHQUFHdkIsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUNJLFNBQXJDLEVBQVQsQ0FEK0QsQ0FHL0Q7O0FBQ0EsWUFBSWdCLFFBQVEsR0FBR0csRUFBRSxDQUFDSCxRQUFILEVBQWY7O0FBQ0EsWUFBSUEsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZSSxLQUFoQixFQUF1QjtBQUNuQkosVUFBQUEsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZSSxLQUFaLENBQWtCQyxLQUFsQjtBQUNIO0FBQ0o7QUFDSixLQTlCc0Q7QUErQnZEQyxJQUFBQSxRQUFRLEVBQUU7QUFDTkMsTUFBQUEsR0FBRyxFQUFFO0FBREM7QUEvQjZDLEdBQS9DLENBQVo7O0FBb0NBLE1BQU1DLG9CQUFvQjtBQUFBLHVFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkMsY0FBQUEsSUFEbUIsR0FDWjdCLENBQUMsQ0FBQyxpQkFBRCxDQURXO0FBQUE7QUFHckI2QixjQUFBQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsVUFBakIsRUFBNkJaLFFBQTdCLENBQXNDLG9CQUF0QztBQUhxQjtBQUFBLHFCQUlDYSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxvQ0FBa0NwQyxjQUE1QyxDQUpEOztBQUFBO0FBSWZxQyxjQUFBQSxPQUplO0FBQUE7QUFBQSxxQkFLRkEsT0FBTyxDQUFDQyxJQUxOOztBQUFBO0FBS2ZBLGNBQUFBLElBTGU7QUFNckJsQyxjQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qm1DLElBQXpCLENBQThCRCxJQUE5QixFQUFvQ0UsT0FBcEM7QUFOcUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRZkMsY0FBQUEsT0FSZSxHQVFMLFlBQU1DLFFBQU4sQ0FBZUosSUFSVjtBQVNyQkssY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGNBQW1CLFlBQU1GLFFBQXpCO0FBQ0F0RCxjQUFBQSxLQUFLLENBQUN5RCxJQUFOLENBQVc7QUFDUFosZ0JBQUFBLElBQUksRUFBRSxPQURDO0FBRVBhLGdCQUFBQSxLQUFLLEVBQUU7QUFGQSxlQUFYOztBQVZxQjtBQWV6QmIsY0FBQUEsSUFBSSxDQUFDWCxRQUFMLENBQWMsVUFBZCxFQUEwQlksV0FBMUIsQ0FBc0Msb0JBQXRDOztBQWZ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFwQkYsb0JBQW9CO0FBQUE7QUFBQTtBQUFBLEtBQTFCOztBQWlCQTVCLEVBQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWTJDLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFlBQU07QUFDM0IzQyxJQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWM0QyxHQUFkLENBQWtCNUMsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZZ0IsSUFBWixDQUFpQixXQUFqQixFQUE4QmtCLElBQTlCLENBQW1DLE9BQW5DLENBQWxCO0FBQ0gsR0FGRDs7QUFHQSxNQUFNVyxZQUFZO0FBQUEsd0VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVTZCxLQUFLLENBQUNDLEdBQU4sQ0FBVSxnQkFBVixDQUZUOztBQUFBO0FBRVBDLGNBQUFBLE9BRk87QUFBQTtBQUFBLHFCQUdNQSxPQUFPLENBQUNDLElBSGQ7O0FBQUE7QUFHUEEsY0FBQUEsSUFITztBQUlibEMsY0FBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQm1DLElBQWhCLENBQXFCRCxJQUFyQixFQUEyQkUsT0FBM0I7QUFKYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1QQyxjQUFBQSxPQU5PLEdBTUcsYUFBTUMsUUFBTixDQUFlSixJQU5sQjtBQU9iSyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsZUFBbUIsYUFBTUYsUUFBekI7QUFDQXRELGNBQUFBLEtBQUssQ0FBQ3lELElBQU4sQ0FBVztBQUNQWixnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUGEsZ0JBQUFBLEtBQUssRUFBRTtBQUZBLGVBQVg7O0FBUmE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkcsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFjQUEsRUFBQUEsWUFBWTtBQUNaN0MsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JvQyxPQUFwQjtBQUNBcEMsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IyQyxFQUFwQixDQUF1QixRQUF2Qix1RUFBaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCRyxZQUFBQSxPQUR1QixHQUNiOUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsR0FBUixFQURhO0FBRTdCekMsWUFBQUEsS0FBSyxDQUFDNEMsT0FBTixHQUFnQkMsTUFBaEIsQ0FBdUIsRUFBdkI7QUFDQTdDLFlBQUFBLEtBQUssQ0FBQzRDLE9BQU4sQ0FBYyxDQUFkLEVBQWlCQyxNQUFqQixDQUF3QkYsT0FBeEIsRUFBaUNHLElBQWpDO0FBQ0lYLFlBQUFBLFFBSnlCLEdBSWQsRUFKYzs7QUFBQSxrQkFLMUJRLE9BQU8sSUFBSSxFQUxlO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBTUhmLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFrQmMsT0FBNUIsQ0FORzs7QUFBQTtBQU1uQmIsWUFBQUEsT0FObUI7QUFPekJLLFlBQUFBLFFBQVEsR0FBR0wsT0FBTyxDQUFDQyxJQUFuQjtBQVB5QjtBQUFBOztBQUFBO0FBU3pCbEMsWUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZbUMsSUFBWixDQUFpQixFQUFqQixFQUFxQkMsT0FBckI7QUFDQXBDLFlBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JtQyxJQUFoQixDQUFxQixFQUFyQixFQUF5QkMsT0FBekI7O0FBVnlCO0FBWTdCcEMsWUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQm1DLElBQWhCLENBQXFCRyxRQUFyQixFQUErQkYsT0FBL0I7O0FBWjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWpDO0FBY0FwQyxFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMkMsRUFBaEIsQ0FBbUIsUUFBbkIsdUVBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQk8sWUFBQUEsWUFEbUIsR0FDSmxELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFESTtBQUV6QnpDLFlBQUFBLEtBQUssQ0FBQzRDLE9BQU4sR0FBZ0JDLE1BQWhCLENBQXVCLEVBQXZCO0FBQ0lHLFlBQUFBLGFBSHFCLEdBR0wsRUFISztBQUlyQkMsWUFBQUEsaUJBSnFCLEdBSUQsRUFKQzs7QUFBQSxrQkFLdEJGLFlBQVksSUFBSSxFQUxNO0FBQUE7QUFBQTtBQUFBOztBQU1yQi9DLFlBQUFBLEtBQUssQ0FBQzRDLE9BQU4sQ0FBYyxDQUFkLEVBQWlCQyxNQUFqQixDQUF3QkUsWUFBeEIsRUFBc0NELElBQXRDO0FBTnFCO0FBQUEsbUJBT1VsQixLQUFLLENBQUNDLEdBQU4sQ0FBVSxvQkFBa0JrQixZQUE1QixDQVBWOztBQUFBO0FBT2ZHLFlBQUFBLGdCQVBlO0FBUXJCRCxZQUFBQSxpQkFBaUIsR0FBR0MsZ0JBQWdCLENBQUNuQixJQUFyQztBQVJxQjtBQUFBLG1CQVNNSCxLQUFLLENBQUNDLEdBQU4sQ0FBVSxnQkFBY2tCLFlBQXhCLENBVE47O0FBQUE7QUFTZkksWUFBQUEsWUFUZTtBQVVyQkgsWUFBQUEsYUFBYSxHQUFHRyxZQUFZLENBQUNwQixJQUE3QjtBQVZxQjtBQUFBOztBQUFBO0FBWXJCL0IsWUFBQUEsS0FBSyxDQUFDNEMsT0FBTixDQUFjLENBQWQsRUFBaUJDLE1BQWpCLENBQXdCaEQsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0I0QyxHQUFwQixFQUF4QixFQUFtREssSUFBbkQ7O0FBWnFCO0FBY3pCakQsWUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZbUMsSUFBWixDQUFpQmdCLGFBQWpCLEVBQWdDZixPQUFoQztBQUNBcEMsWUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQm1DLElBQWhCLENBQXFCaUIsaUJBQXJCLEVBQXdDaEIsT0FBeEM7O0FBZnlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCO0FBa0JBcEMsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjJDLEVBQWhCLENBQW1CLFFBQW5CLHVFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCeEMsWUFBQUEsS0FBSyxDQUFDNEMsT0FBTixHQUFnQkMsTUFBaEIsQ0FBdUIsRUFBdkI7O0FBQ0EsZ0JBQUdoRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLE1BQWlCLEVBQXBCLEVBQXdCO0FBQ3BCLGtCQUFHNUMsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZNEMsR0FBWixNQUFxQixFQUF4QixFQUE0QjtBQUN4QnpDLGdCQUFBQSxLQUFLLENBQUM0QyxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsTUFBakIsQ0FBd0JoRCxDQUFDLENBQUMsUUFBRCxDQUFELENBQVk0QyxHQUFaLEVBQXhCO0FBQ0g7O0FBQ0R6QyxjQUFBQSxLQUFLLENBQUM0QyxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsTUFBakIsQ0FBd0JoRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQXhCLEVBQXVDSyxJQUF2QztBQUNILGFBTEQsTUFLTztBQUNIOUMsY0FBQUEsS0FBSyxDQUFDNEMsT0FBTixDQUFjLENBQWQsRUFBaUJDLE1BQWpCLENBQXdCaEQsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRDLEdBQWhCLEVBQXhCLEVBQStDSyxJQUEvQztBQUNIOztBQVR3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3QjtBQVlBakQsRUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZMkMsRUFBWixDQUFlLFFBQWYsdUVBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckJ4QyxZQUFBQSxLQUFLLENBQUM0QyxPQUFOLEdBQWdCQyxNQUFoQixDQUF1QixFQUF2Qjs7QUFDQSxnQkFBR2hELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsTUFBaUIsRUFBcEIsRUFBd0I7QUFDcEJ6QyxjQUFBQSxLQUFLLENBQUM0QyxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsTUFBakIsQ0FBd0JoRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QyxHQUFSLEVBQXhCO0FBQ0g7O0FBQ0R6QyxZQUFBQSxLQUFLLENBQUM0QyxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsTUFBakIsQ0FBd0JoRCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNEMsR0FBaEIsRUFBeEIsRUFBK0NLLElBQS9DOztBQUxxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6QjtBQVFBakQsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkMsRUFBVixDQUFhLE9BQWIsRUFBcUIsMENBQXJCLEVBQWdFLFlBQVk7QUFDeEUsUUFBTVksS0FBSyxHQUFHdkQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0IsSUFBUixDQUFhLE9BQWIsQ0FBZDs7QUFDQSxRQUFHdUMsS0FBSyxDQUFDQyxFQUFOLENBQVMsVUFBVCxDQUFILEVBQXdCO0FBQ3BCRCxNQUFBQSxLQUFLLENBQUN0QyxJQUFOLENBQVcsU0FBWCxFQUFxQixLQUFyQjtBQUNBLFVBQU13QyxLQUFLLEdBQUc1RCxhQUFhLENBQUM2RCxPQUFkLENBQXNCSCxLQUFLLENBQUNJLElBQU4sQ0FBVyxJQUFYLENBQXRCLENBQWQ7QUFDQTlELE1BQUFBLGFBQWEsQ0FBQytELE1BQWQsQ0FBcUJILEtBQXJCLEVBQTJCLENBQTNCO0FBQ0gsS0FKRCxNQUlLO0FBQ0RGLE1BQUFBLEtBQUssQ0FBQ3RDLElBQU4sQ0FBVyxTQUFYLEVBQXFCLElBQXJCO0FBQ0FwQixNQUFBQSxhQUFhLENBQUNnRSxJQUFkLENBQW1CTixLQUFLLENBQUNJLElBQU4sQ0FBVyxJQUFYLENBQW5CO0FBQ0g7QUFDSixHQVZEO0FBV0EzRCxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyQyxFQUFWLENBQWEsVUFBYixFQUF3QiwwQ0FBeEIsRUFBbUUsWUFBWTtBQUMzRTtBQUVBLFFBQUczQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE4RCxRQUFSLENBQWlCLGtCQUFqQixDQUFILEVBQXlDO0FBQ3JDOUQsTUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFROEIsV0FBUixDQUFvQixrQkFBcEI7QUFDQWxDLE1BQUFBLGNBQWMsR0FBRyxJQUFqQjtBQUNILEtBSEQsTUFHTztBQUNISSxNQUFBQSxDQUFDLENBQUMsMENBQUQsQ0FBRCxDQUE4QzhCLFdBQTlDLENBQTBELGtCQUExRDtBQUNBOUIsTUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsUUFBUixDQUFpQixrQkFBakI7QUFDQXRCLE1BQUFBLGNBQWMsR0FBR0ksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkQsSUFBUixDQUFhLElBQWIsQ0FBakI7QUFDQS9CLE1BQUFBLG9CQUFvQjtBQUN2QjtBQUVKLEdBYkQ7O0FBY0EsTUFBTW1DLFFBQVE7QUFBQSx3RUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRWFoQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxnQ0FBOEJwQyxjQUF4QyxDQUZiOztBQUFBO0FBRUhxQyxjQUFBQSxPQUZHO0FBQUE7QUFBQSxxQkFHVUEsT0FBTyxDQUFDQyxJQUhsQjs7QUFBQTtBQUdIQSxjQUFBQSxJQUhHO0FBSVRuQyxjQUFBQSxhQUFhLEdBQUcsQ0FBaEI7QUFDQUMsY0FBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZbUMsSUFBWixDQUFpQkQsSUFBSSxDQUFDOEIsSUFBdEIsRUFBNEI1QixPQUE1QjtBQUNBcEMsY0FBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQm1DLElBQW5CLENBQXdCRCxJQUFJLENBQUMrQixXQUE3QjtBQU5TO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUUg1QixjQUFBQSxPQVJHLEdBUU8sYUFBTUMsUUFBTixDQUFlSixJQVJ0QjtBQVNUbkMsY0FBQUEsYUFBYSxHQUFHLEtBQWhCO0FBQ0FmLGNBQUFBLEtBQUssQ0FBQ3lELElBQU4sQ0FBVztBQUNQWixnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUGEsZ0JBQUFBLEtBQUssRUFBRTtBQUZBLGVBQVg7QUFWUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFScUIsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQXVCQSxNQUFNRyxtQkFBbUI7QUFBQSx3RUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZHJDLGNBQUFBLEtBRmMsR0FFUDdCLENBQUMsQ0FBQyxnQkFBRCxDQUZNOztBQUdwQjZCLGNBQUFBLEtBQUksQ0FBQ0MsV0FBTCxDQUFpQixtQkFBakIsRUFBc0NaLFFBQXRDLENBQStDLG9CQUEvQzs7QUFIb0I7QUFBQSxxQkFJRWEsS0FBSyxDQUFDQyxHQUFOLENBQVUsK0JBQTZCcEMsY0FBdkMsQ0FKRjs7QUFBQTtBQUlkcUMsY0FBQUEsT0FKYztBQUFBO0FBQUEscUJBS0RBLE9BQU8sQ0FBQ0MsSUFMUDs7QUFBQTtBQUtkQSxjQUFBQSxJQUxjO0FBTXBCbEMsY0FBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JtQyxJQUFwQixDQUF5QkQsSUFBekI7O0FBQ0FMLGNBQUFBLEtBQUksQ0FBQ1gsUUFBTCxDQUFjLG1CQUFkLEVBQW1DWSxXQUFuQyxDQUErQyxvQkFBL0M7O0FBQ0E5QixjQUFBQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1FLEtBQTlCLENBQW9DLE1BQXBDO0FBUm9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVWQ5QixjQUFBQSxPQVZjLEdBVUosYUFBTUMsUUFBTixDQUFlSixJQVZYO0FBV3BCSyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsZUFBbUIsYUFBTUYsUUFBekI7QUFDQXRELGNBQUFBLEtBQUssQ0FBQ3lELElBQU4sQ0FBVztBQUNQWixnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUGEsZ0JBQUFBLEtBQUssRUFBRTtBQUZBLGVBQVg7QUFJQWIsY0FBQUEsSUFBSSxDQUFDWCxRQUFMLENBQWMsbUJBQWQsRUFBbUNZLFdBQW5DLENBQStDLG9CQUEvQzs7QUFoQm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5Cb0MsbUJBQW1CO0FBQUE7QUFBQTtBQUFBLEtBQXpCOztBQW1CQWxFLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IyQyxFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFNO0FBQ2hDLFFBQUcsQ0FBQy9DLGNBQUosRUFBbUI7QUFDakJaLE1BQUFBLEtBQUssQ0FBQ3lELElBQU4sQ0FBVztBQUNUWixRQUFBQSxJQUFJLEVBQUUsT0FERztBQUVUYSxRQUFBQSxLQUFLLEVBQUU7QUFGRSxPQUFYO0FBSUE7QUFDRCxLQVArQixDQVFoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FxQixJQUFBQSxRQUFRO0FBQ1JHLElBQUFBLG1CQUFtQjtBQUN0QixHQWpCRDtBQW1CQWxFLEVBQUFBLENBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DMkMsRUFBbkMsQ0FBc0MsUUFBdEM7QUFBQSx3RUFBZ0Qsa0JBQWdCNUIsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzVDQSxjQUFBQSxDQUFDLENBQUNxRCxjQUFGOztBQUQ0QyxvQkFFeEMsS0FBS0MsS0FBTCxJQUFjLENBRjBCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBR2xCdEMsS0FBSyxDQUFDQyxHQUFOLENBQVUsNEJBQVYsQ0FIa0I7O0FBQUE7QUFHbENDLGNBQUFBLE9BSGtDO0FBSXhDSyxjQUFBQSxRQUFRLEdBQUdMLE9BQU8sQ0FBQ0MsSUFBbkI7QUFDQWxDLGNBQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCbUMsSUFBeEIsQ0FBNkJHLFFBQTdCLEVBQXVDRixPQUF2QztBQUNBcEMsY0FBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQnNFLEdBQW5CLENBQXVCLFNBQXZCLEVBQWlDLE9BQWpDO0FBTndDO0FBQUE7O0FBQUE7QUFReEN0RSxjQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qm1DLElBQXhCLENBQTZCLEVBQTdCO0FBQ0FuQyxjQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cc0UsR0FBbkIsQ0FBdUIsU0FBdkIsRUFBaUMsTUFBakM7O0FBVHdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUF0RSxFQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjJDLEVBQXhCLENBQTJCLE9BQTNCLEVBQW9DLFlBQU07QUFFdEMsUUFBSTRCLE9BQU8sR0FBR3ZFLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWdCLElBQVosQ0FBaUIsV0FBakIsRUFBOEI0QixHQUE5QixFQUFkOztBQUNBLFFBQUcyQixPQUFPLElBQUksRUFBZCxFQUFrQjtBQUNkLFVBQUlDLFNBQVMsR0FBR3hFLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWWdCLElBQVosQ0FBaUIsV0FBakIsRUFBOEJ5RCxJQUE5QixFQUFoQjtBQUNBLFVBQUlDLElBQUksR0FBRzFFLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYzRDLEdBQWQsRUFBWDtBQUNBLFVBQUkrQixHQUFHLEdBQUczRSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVU0QyxHQUFWLEVBQVY7QUFDQSxVQUFJZ0MsS0FBSyxHQUFJNUUsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JnQixJQUF4QixDQUE2QixXQUE3QixFQUEwQ3lELElBQTFDLEVBQWI7QUFDQSxVQUFJSSxZQUFZLEdBQUk3RSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjRDLEdBQXhCLEVBQXBCOztBQUNBLFVBQUksQ0FBQzVDLENBQUMsQ0FBQzhFLFNBQUYsQ0FBWVAsT0FBWixDQUFELElBQXlCRyxJQUFJLElBQUksRUFBckMsRUFBeUM7QUFDckM7QUFDSDs7QUFDRCxVQUFJMUUsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM0QyxHQUFqQyxNQUEwQyxDQUE5QyxFQUFpRDtBQUM3Q2lDLFFBQUFBLFlBQVksR0FBRyxDQUFmO0FBQ0FELFFBQUFBLEtBQUssR0FBRyxRQUFSO0FBQ0gsT0FIRCxNQUdNLElBQUdDLFlBQVksSUFBSSxFQUFuQixFQUFzQjtBQUN4QjtBQUNIOztBQUNEL0UsTUFBQUEsS0FBSyxDQUFDK0QsSUFBTixDQUFXO0FBQ1BKLFFBQUFBLEtBQUssRUFBR3NCLElBQUksQ0FBQ0MsS0FBTCxDQUFZRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsSUFBakIsR0FBeUIsQ0FBcEMsQ0FERDtBQUVQQyxRQUFBQSxFQUFFLEVBQUVYLE9BRkc7QUFHUFksUUFBQUEsV0FBVyxFQUFFWCxTQUhOO0FBSVBZLFFBQUFBLE9BQU8sRUFBRVYsSUFKRjtBQUtQQyxRQUFBQSxHQUFHLEVBQUVBLEdBTEU7QUFNUEUsUUFBQUEsWUFBWSxFQUFFQSxZQU5QO0FBT1BRLFFBQUFBLFNBQVMsRUFBRVQ7QUFQSixPQUFYO0FBU0FVLE1BQUFBLFFBQVE7QUFDWDtBQUNKLEdBN0JEO0FBOEJBdEYsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkMsRUFBVixDQUFhLE9BQWIsRUFBc0IsZUFBdEIsRUFBdUMsWUFBWTtBQUFBOztBQUMvQyxRQUFNYyxLQUFLLEdBQUczRCxLQUFLLENBQUN5RixTQUFOLENBQWdCLFVBQUF6RixLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDMkQsS0FBTixJQUFlekQsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFRMkQsSUFBUixDQUFhLElBQWIsQ0FBbkI7QUFBQSxLQUFyQixDQUFkO0FBQ0E3RCxJQUFBQSxLQUFLLENBQUM4RCxNQUFOLENBQWFILEtBQWIsRUFBbUIsQ0FBbkI7QUFDQTZCLElBQUFBLFFBQVE7QUFDWCxHQUpEOztBQUtBLE1BQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsUUFBSW5ELElBQUksR0FBRyxFQUFYO0FBQ0FyQyxJQUFBQSxLQUFLLENBQUMwRixHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDaEJ2RCxNQUFBQSxJQUFJLHNEQUVNdUQsQ0FBQyxHQUFHLENBRlYsd0NBR01ELENBQUMsQ0FBQ04sV0FIUix3Q0FJTU0sQ0FBQyxDQUFDTCxPQUpSLHdDQUtNSyxDQUFDLENBQUNkLEdBTFIsd0NBTU1jLENBQUMsQ0FBQ0osU0FOUix5RkFPdURJLENBQUMsQ0FBQ2hDLEtBUHpELDhFQUFKO0FBVUgsS0FYRCxFQUZtQixDQWNuQjs7QUFDQXpELElBQUFBLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCbUMsSUFBOUIsQ0FBbUNBLElBQW5DO0FBQ0gsR0FoQkQ7O0FBa0JBbkMsRUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUIyQyxFQUF6QixDQUE0QixPQUE1Qix1RUFBcUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM3QmdELFlBQUFBLFFBRDZCLEdBQ2xCLElBQUlDLFFBQUosRUFEa0I7QUFFakNELFlBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUF5QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVqRyxLQUFmLENBQXpCLEVBRmlDLENBR2pDOztBQUNJa0csWUFBQUEsVUFKNkIsR0FJaEJoRyxDQUFDLENBQUMsNkNBQUQsQ0FKZTtBQU1qQ2dHLFlBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNNcEUsWUFBQUEsSUFQMkIsR0FPcEI3QixDQUFDLENBQUMsdUJBQUQsQ0FQbUI7QUFRakM2QixZQUFBQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DWixRQUFwQyxDQUE2QyxvQkFBN0M7QUFSaUM7QUFBQTtBQUFBLG1CQVdUYSxLQUFLLENBQUNtRSxJQUFOLENBQVcsbUNBQWlDdEcsY0FBNUMsRUFBNEQrRixRQUE1RCxDQVhTOztBQUFBO0FBV3pCMUQsWUFBQUEsT0FYeUI7QUFZekJLLFlBQUFBLFNBWnlCLEdBWWRMLE9BQU8sQ0FBQ0MsSUFaTTtBQWEvQmxDLFlBQUFBLENBQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDbUcsT0FBMUM7QUFLQXRFLFlBQUFBLElBQUksQ0FBQ1gsUUFBTCxDQUFjLGlCQUFkLEVBQWlDWSxXQUFqQyxDQUE2QyxxQkFBN0M7QUFDQTlCLFlBQUFBLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCb0csS0FBOUI7QUFDQXRHLFlBQUFBLEtBQUssR0FBRyxFQUFSO0FBQ0F1RyxZQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxrQ0FBZ0NoRSxTQUE1QyxFQUFzRCxRQUF0RDtBQUNBbkMsWUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVdnRyxNQUFYLENBQWtCLElBQWxCLEVBQXdCLEtBQXhCO0FBdEIrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdCekJsRSxZQUFBQSxPQXhCeUIsR0F3QmYsY0FBTUMsUUFBTixDQUFlSixJQXhCQTtBQXlCL0JLLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBbUIsY0FBTUYsUUFBekI7QUFDQTBELFlBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNBakcsWUFBQUEsQ0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMENtRyxPQUExQyw2Q0FDcUM5RCxPQURyQztBQUdBUixZQUFBQSxJQUFJLENBQUNYLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ1ksV0FBakMsQ0FBNkMscUJBQTdDOztBQTlCK0I7QUFnQ2pDMEUsWUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDYnhHLGNBQUFBLENBQUMsQ0FBQyw2Q0FBRCxDQUFELENBQWlEaUcsTUFBakQ7QUFDSCxhQUZTLEVBRVAsSUFGTyxDQUFWOztBQWhDaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBckM7QUFzQ0FqRyxFQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CMkMsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNqQyxRQUFHLENBQUMvQyxjQUFKLEVBQW1CO0FBQ2pCWixNQUFBQSxLQUFLLENBQUN5RCxJQUFOLENBQVc7QUFDVFosUUFBQUEsSUFBSSxFQUFFLE9BREc7QUFFVGEsUUFBQUEsS0FBSyxFQUFFO0FBRkUsT0FBWDtBQUlBO0FBQ0Q7O0FBQ0QxQyxJQUFBQSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQ2lHLE1BQXRDO0FBQ0FqRyxJQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CbUUsS0FBbkIsQ0FBeUIsTUFBekI7QUFDSCxHQVZEO0FBWUFuRSxFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCMkMsRUFBbEIsQ0FBcUIsUUFBckI7QUFBQSx5RUFBK0IsbUJBQWdCNUIsQ0FBaEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMzQkEsY0FBQUEsQ0FBQyxDQUFDcUQsY0FBRjtBQUNJdUIsY0FBQUEsUUFGdUIsR0FFWixJQUFJQyxRQUFKLENBQWE1RixDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsQ0FBUixDQUFiLENBRlk7QUFHdkJnRyxjQUFBQSxVQUh1QixHQUdWaEcsQ0FBQyxDQUFDLGtDQUFELENBSFM7QUFLM0JnRyxjQUFBQSxVQUFVLENBQUNDLE1BQVg7QUFDTXBFLGNBQUFBLElBTnFCLEdBTWQ3QixDQUFDLENBQUMscUJBQUQsQ0FOYTtBQU8zQjZCLGNBQUFBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixpQkFBakIsRUFBb0NaLFFBQXBDLENBQTZDLG9CQUE3QztBQVAyQjtBQUFBO0FBQUEscUJBVUhhLEtBQUssQ0FBQ21FLElBQU4sQ0FBVyx1Q0FBcUN0RyxjQUFoRCxFQUFnRStGLFFBQWhFLENBVkc7O0FBQUE7QUFVbkIxRCxjQUFBQSxPQVZtQjtBQVduQkssY0FBQUEsVUFYbUIsR0FXUkwsT0FBTyxDQUFDQyxJQVhBO0FBWXpCbEMsY0FBQUEsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JtRyxPQUEvQixtRUFFVzdELFVBRlg7QUFLQVQsY0FBQUEsSUFBSSxDQUFDWCxRQUFMLENBQWMsaUJBQWQsRUFBaUNZLFdBQWpDLENBQTZDLHFCQUE3QztBQUNBOUIsY0FBQUEsQ0FBQyxDQUFDLDRDQUFELENBQUQsQ0FBZ0RvRyxLQUFoRDtBQUNBakcsY0FBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVdnRyxNQUFYLENBQWtCLElBQWxCLEVBQXdCLEtBQXhCO0FBbkJ5QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCbkJsRSxjQUFBQSxPQXJCbUIsR0FxQlQsY0FBTUMsUUFBTixDQUFlSixJQXJCTjtBQXNCekJLLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBbUIsY0FBTUYsUUFBekI7QUFDQTBELGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNBakcsY0FBQUEsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JtRyxPQUEvQiw2Q0FDcUM5RCxPQURyQztBQUdBUixjQUFBQSxJQUFJLENBQUNYLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ1ksV0FBakMsQ0FBNkMscUJBQTdDOztBQTNCeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4QkE5QixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyQyxFQUFWLENBQWEsT0FBYixFQUFxQixhQUFyQixFQUFvQyxZQUFXO0FBQzNDMEQsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVkscUNBQVosRUFBbUQsUUFBbkQ7QUFDSCxHQUZEO0FBR0F0RyxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyQyxFQUFWLENBQWEsT0FBYixFQUFxQixtQkFBckIsRUFBeUMsVUFBVTVCLENBQVYsRUFBYTtBQUNsREEsSUFBQUEsQ0FBQyxDQUFDcUQsY0FBRjtBQUNBcEUsSUFBQUEsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNtRSxLQUFuQyxDQUF5QyxNQUF6QztBQUNILEdBSEQ7QUFJQW5FLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJDLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLHFCQUFyQixFQUEyQyxVQUFVNUIsQ0FBVixFQUFhO0FBQ3BEQSxJQUFBQSxDQUFDLENBQUNxRCxjQUFGO0FBQ0EsUUFBSXFDLEtBQUssR0FBR3pHLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUI0QyxHQUFuQixFQUFaLENBRm9ELENBR3BEOztBQUNBeUQsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksK0NBQTZDRyxLQUF6RCxFQUFnRSxRQUFoRTtBQUNILEdBTEQ7QUFPQXpHLEVBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIyQyxFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFXO0FBQ3RDLFFBQUkrRCxTQUFTLEdBQUdDLFFBQVEsQ0FBQzNHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEdBQVIsRUFBRCxDQUF4QjtBQUNBLFFBQUlnRSxXQUFXLEdBQUdGLFNBQVMsR0FBRyxDQUE5Qjs7QUFDQSxRQUFJLENBQUNHLEtBQUssQ0FBQ0QsV0FBRCxDQUFWLEVBQXlCO0FBQ3ZCNUcsTUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0J5RSxJQUFwQixDQUF5Qm1DLFdBQXpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0w1RyxNQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQnlFLElBQXBCLENBQXlCLEVBQXpCO0FBQ0Q7QUFDSixHQVJEO0FBU0gsQ0E1WEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pbnNjcmlwdGlvbi9nZXN0aW9uaW5zY3JpcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbiAgICB9KVxyXG4gICAgbGV0IGlkX2luc2NyaXB0aW9uID0gZmFsc2U7XHJcbiAgICBsZXQgaWRJbnNjcmlwdGlvbiA9IFtdO1xyXG4gICAgbGV0IGZyYWlzID0gW107XHJcbiAgICBsZXQgZmFjdHVyZV9leGlzdCA9IGZhbHNlO1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2luc2NyaXB0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL2luc2NyaXB0aW9uL2dlc3Rpb24vbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb24uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9pbnNjcmlwdGlvbikuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlRHJhd0NhbGxiYWNrOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJyNkYXRhdGFibGVzX2dlc3Rpb25faW5zY3JpcHRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR0ID0gJCgnI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvbicpLkRhdGFUYWJsZSgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvL0Fib3J0IHByZXZpb3VzIGFqYXggcmVxdWVzdCBpZiBpdCBpcyBzdGlsbCBpbiBwcm9jZXNzLlxyXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gZHQuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nc1swXS5qcVhIUikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzWzBdLmpxWEhSLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFN0YXR1dEluc2NyaXB0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKCcjc3RhdHV0LW1vZGFsIGknKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9nZXRzdGF0dXQvXCIraWRfaW5zY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKCcjc3RhdHV0X2luc2NyaXB0aW9uJykuaHRtbChkYXRhKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNvbWUgRXJyb3JcIixcclxuICAgICAgICAgICAgfSkgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICB9XHJcbiAgICAkKFwiI2ZyYWlzXCIpLm9uKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICAkKFwiI21vbnRhbnRcIikudmFsKCQoXCIjZnJhaXNcIikuZmluZChcIjpzZWxlY3RlZFwiKS5kYXRhKCdmcmFpcycpKVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGdldE9yZ2FuaXNtZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9vcmdhbmlzbWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyNvcmdhbmlzbWUnKS5odG1sKGRhdGEpLnNlbGVjdDIoKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgICAgICB9KSAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRPcmdhbmlzbWUoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKClcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNhbm5lZScpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2VBbm5lZSA9IFwiXCJcclxuICAgICAgICBsZXQgcmVzcG9uc2VQcm9tb3Rpb24gPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RQcm9tb3Rpb24gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2VQcm9tb3Rpb24gPSByZXF1ZXN0UHJvbW90aW9uLmRhdGFcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdEFubmVlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2FubmVlLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2VBbm5lZSA9IHJlcXVlc3RBbm5lZS5kYXRhXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygwKS5zZWFyY2goJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNhbm5lZScpLmh0bWwocmVzcG9uc2VBbm5lZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlUHJvbW90aW9uKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgICAgICBpZigkKHRoaXMpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYoJChcIiNhbm5lZVwiKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI2FubmVlXCIpLnZhbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDIpLnNlYXJjaCgkKHRoaXMpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygxKS5zZWFyY2goJChcIiNmb3JtYXRpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQoXCIjYW5uZWVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMykuc2VhcmNoKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgdGFibGUuY29sdW1ucygyKS5zZWFyY2goJChcIiNwcm9tb3Rpb25cIikudmFsKCkpLmRyYXcoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhdGFibGVzX2dlc3Rpb25faW5zY3JpcHRpb24gdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZEluc2NyaXB0aW9uLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICAgICAgaWRJbnNjcmlwdGlvbi5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlkSW5zY3JpcHRpb24ucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCdib2R5Jykub24oJ2RibGNsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfaW5zY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2luc2NyaXB0aW9uIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfaW5zY3JpcHRpb24gPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIGdldFN0YXR1dEluc2NyaXB0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGdldEZyYWlzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9mcmFpcy9cIitpZF9pbnNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGZhY3R1cmVfZXhpc3QgPSAxO1xyXG4gICAgICAgICAgICAkKCcjZnJhaXMnKS5odG1sKGRhdGEubGlzdCkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKCcjY29kZS1mYWN0dXJlJykuaHRtbChkYXRhLmNvZGVmYWN0dXJlKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBmYWN0dXJlX2V4aXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmFjdHVyZSBJbnRyb3V2YWJsZSEnLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGdldEluc2NyaXB0aW9uSW5mb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICQoJyNmcmFpcy1tb2RhbCBpJylcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKS5hZGRDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL2luZm8vXCIraWRfaW5zY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAkKCcuZXR1ZGlhbnRfaW5mbycpLmh0bWwoZGF0YSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgICAgIH0pICAgIFxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICQoXCIjZnJhaXMtbW9kYWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlkX2luc2NyaXB0aW9uKXtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmKCFmYWN0dXJlX2V4aXN0KXtcclxuICAgICAgICAvLyAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgLy8gICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAvLyAgICAgICB0aXRsZTogJ0ZhY3R1cmUgSW50cm91dmFibGUhJyxcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBnZXRGcmFpcygpO1xyXG4gICAgICAgIGdldEluc2NyaXB0aW9uSW5mb3MoKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgICQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9b3JnYW5dJykub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldG9yZ2FuaXNtZXBhc1BheWFudCcpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3Qtb3JnYW4nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNhZGRfZnJhaXNfZ2VzdGlvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGZyYWlzSWQgPSAkKFwiI2ZyYWlzXCIpLmZpbmQoXCI6c2VsZWN0ZWRcIikudmFsKCk7XHJcbiAgICAgICAgaWYoZnJhaXNJZCAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxldCBmcmFpc1RleHQgPSAkKFwiI2ZyYWlzXCIpLmZpbmQoXCI6c2VsZWN0ZWRcIikudGV4dCgpO1xyXG4gICAgICAgICAgICBsZXQgcHJpeCA9ICQoXCIjbW9udGFudFwiKS52YWwoKTtcclxuICAgICAgICAgICAgbGV0IGljZSA9ICQoXCIjaWNlXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgb3JnYW4gID0gJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuZmluZCgnOnNlbGVjdGVkJykudGV4dCgpO1xyXG4gICAgICAgICAgICBsZXQgb3JnYW5pc21lX2lkICA9ICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLnZhbCgpO1xyXG4gICAgICAgICAgICBpZiAoISQuaXNOdW1lcmljKGZyYWlzSWQpIHx8IHByaXggPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoXCJpbnB1dFtuYW1lPSdvcmdhbiddOmNoZWNrZWRcIikudmFsKCkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgb3JnYW5pc21lX2lkID0gN1xyXG4gICAgICAgICAgICAgICAgb3JnYW4gPSBcIlBheWFudFwiXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG9yZ2FuaXNtZV9pZCA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZyYWlzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaW5kZXggOiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxKSxcclxuICAgICAgICAgICAgICAgIGlkOiBmcmFpc0lkLFxyXG4gICAgICAgICAgICAgICAgZGVzaWduYXRpb246IGZyYWlzVGV4dCxcclxuICAgICAgICAgICAgICAgIG1vbnRhbnQ6IHByaXgsXHJcbiAgICAgICAgICAgICAgICBpY2U6IGljZSxcclxuICAgICAgICAgICAgICAgIG9yZ2FuaXNtZV9pZDogb3JnYW5pc21lX2lkLFxyXG4gICAgICAgICAgICAgICAgb3JnYW5pc21lOiBvcmdhblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmF3RnJhaXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnLmRlbGV0ZV9mcmFpcycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGZyYWlzLmZpbmRJbmRleChmcmFpcyA9PiBmcmFpcy5pbmRleCA9PSAkKHRoaXMpLmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgZnJhaXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIHJhd0ZyYWlzKCk7XHJcbiAgICB9KVxyXG4gICAgY29uc3QgcmF3RnJhaXMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgICAgIGZyYWlzLm1hcCgoZiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2YuZGVzaWduYXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2YubW9udGFudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5pY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2Yub3JnYW5pc21lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz0nZGVsZXRlX2ZyYWlzIGJ0biBidG4tZGFuZ2VyJyAgaWQ9JyR7Zi5pbmRleH0nPjxpIGNsYXNzPSdmYSBmYS10cmFzaCcgPjwvaT48L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIGBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGh0bWwpO1xyXG4gICAgICAgICQoXCIudGFibGVfZnJhaXNfaW5zY3JpcHRpb25cIikuaHRtbChodG1sKVxyXG4gICAgfVxyXG5cclxuICAgICQoXCIjc2F2ZV9mcmFpc19nZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImZyYWlzXCIsIEpTT04uc3RyaW5naWZ5KGZyYWlzKSlcclxuICAgICAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJvcmdhbmlzbWVcIiwgJChcIiNvcmdhbmlzbWVcIikudmFsKCkpXHJcbiAgICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlX2ZyYWlzX2dlc3Rpb24gaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9pbnNjcmlwdGlvbi9nZXN0aW9uL2FkZGZyYWlzLycraWRfaW5zY3JpcHRpb24sIGZvcm1EYXRhKTtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPkJpZW4gRW5yZWdpc3RyZTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgJChcIi50YWJsZV9mcmFpc19pbnNjcmlwdGlvblwiKS5lbXB0eSgpXHJcbiAgICAgICAgICBmcmFpcyA9IFtdO1xyXG4gICAgICAgICAgd2luZG93Lm9wZW4oXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9mYWN0dXJlL1wiK3Jlc3BvbnNlLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH0pXHJcblxyXG5cclxuICAgICQoXCIjc3RhdHV0LW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpZF9pbnNjcmlwdGlvbil7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI3N0YXR1dF9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKClcclxuICAgICAgICAkKFwiI3N0YXR1dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNzdGF0dXRfc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjc3RhdHV0X21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgXHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzdGF0dXRfc2F2ZSAuYnRuIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvaW5zY3JpcHRpb24vZ2VzdGlvbi91cGRhdGVzdGF0dXQvJytpZF9pbnNjcmlwdGlvbiwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAkKFwiI3N0YXR1dF9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAkKFwiI2FubmVlX2luc2NyaXB0aW9uLCAjcHJvbW90aW9uX2luc2NyaXB0aW9uXCIpLmVtcHR5KClcclxuICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgJChcIiNzdGF0dXRfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNleHRyYWN0aW9uJywgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJy9pbnNjcmlwdGlvbi9nZXN0aW9uL2V4dHJhY3Rpb25faW5zJywgJ19ibGFuaycpO1xyXG4gICAgfSlcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXh0cmFjdGlvbl9hbm5lZScsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJChcIiNhbm5lZV9leHRyYWN0aW9uX2luc2NyaXB0aW9uXCIpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXhwb3J0X2luc2NyaXB0aW9uJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgYW5uZWUgPSAkKCcjYW5uZWVfZXhwb3J0JykudmFsKCk7XHJcbiAgICAgICAgLy8gYWxlcnQoYW5uZWUpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvaW5zY3JpcHRpb24vZ2VzdGlvbi9leHRyYWN0aW9uX2luc19hbm5lZS8nK2FubmVlLCAnX2JsYW5rJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYW5uZWVfZXhwb3J0Jykub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGlucHV0WWVhciA9IHBhcnNlSW50KCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIHZhciB5ZWFyUGx1c09uZSA9IGlucHV0WWVhciArIDE7XHJcbiAgICAgICAgaWYgKCFpc05hTih5ZWFyUGx1c09uZSkpIHtcclxuICAgICAgICAgICQoJyN5ZWFyX3BsdXNfb25lJykudGV4dCh5ZWFyUGx1c09uZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoJyN5ZWFyX3BsdXNfb25lJykudGV4dCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pXHJcblxyXG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfaW5zY3JpcHRpb24iLCJpZEluc2NyaXB0aW9uIiwiZnJhaXMiLCJmYWN0dXJlX2V4aXN0IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJmb3JFYWNoIiwiZSIsImZpbmQiLCJwcm9wIiwiYWRkQ2xhc3MiLCJwcmVEcmF3Q2FsbGJhY2siLCJzZXR0aW5ncyIsImZuIiwiaXNEYXRhVGFibGUiLCJkdCIsImpxWEhSIiwiYWJvcnQiLCJsYW5ndWFnZSIsInVybCIsImdldFN0YXR1dEluc2NyaXB0aW9uIiwiaWNvbiIsInJlbW92ZUNsYXNzIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJzZWxlY3QyIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImZpcmUiLCJ0aXRsZSIsIm9uIiwidmFsIiwiZ2V0T3JnYW5pc21lIiwiaWRfZXRhYiIsImNvbHVtbnMiLCJzZWFyY2giLCJkcmF3IiwiaWRfZm9ybWF0aW9uIiwicmVzcG9uc2VBbm5lZSIsInJlc3BvbnNlUHJvbW90aW9uIiwicmVxdWVzdFByb21vdGlvbiIsInJlcXVlc3RBbm5lZSIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJhdHRyIiwic3BsaWNlIiwicHVzaCIsImhhc0NsYXNzIiwiZ2V0RnJhaXMiLCJsaXN0IiwiY29kZWZhY3R1cmUiLCJnZXRJbnNjcmlwdGlvbkluZm9zIiwibW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiY3NzIiwiZnJhaXNJZCIsImZyYWlzVGV4dCIsInRleHQiLCJwcml4IiwiaWNlIiwib3JnYW4iLCJvcmdhbmlzbWVfaWQiLCJpc051bWVyaWMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpZCIsImRlc2lnbmF0aW9uIiwibW9udGFudCIsIm9yZ2FuaXNtZSIsInJhd0ZyYWlzIiwiZmluZEluZGV4IiwibWFwIiwiZiIsImkiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGFsQWxlcnQiLCJyZW1vdmUiLCJwb3N0IiwicHJlcGVuZCIsImVtcHR5Iiwid2luZG93Iiwib3BlbiIsInJlbG9hZCIsInNldFRpbWVvdXQiLCJhbm5lZSIsImlucHV0WWVhciIsInBhcnNlSW50IiwieWVhclBsdXNPbmUiLCJpc05hTiJdLCJzb3VyY2VSb290IjoiIn0=