(self["webpackChunk"] = self["webpackChunk"] || []).push([["gestionPreinscription"],{

/***/ "./assets/components/preinscription/gestionpreinscription.js":
/*!*******************************************************************!*\
  !*** ./assets/components/preinscription/gestionpreinscription.js ***!
  \*******************************************************************/
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

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

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
  var id_preinscription = false;
  var idpreins = [];
  var frais = []; // var table_preins = $("#datables_preinscription").DataTable({
  //     lengthMenu: [
  //         [10, 15, 25, 50, 100, 20000000000000],
  //         [10, 15, 25, 50, 100, "All"],
  //     ],
  //     order: [[0, "desc"]],
  //     ajax: "/preinscription/list",
  //     processing: true,
  //     serverSide: true,
  //     deferRender: true,
  //     language: {
  //     url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
  //     },
  // });

  var table_gestion_preins = $("#datables_gestion_preinscription").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[1, "desc"]],
    ajax: "/preinscription/gestion/list/gestion_preinscription/",
    processing: true,
    serverSide: true,
    deferRender: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      idpreins.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });

  var getDocumentsPreins = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _icon, request, data, message;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _icon = $('#doc_preinscription i');

              _icon.removeClass('fa-check').addClass('fa-spinner fa-spin');

              _context.next = 5;
              return axios.get("/preinscription/gestion/getdoc_preinscription/" + id_preinscription);

            case 5:
              request = _context.sent;
              _context.next = 8;
              return request.data;

            case 8:
              data = _context.sent;
              $('.ms-selectable .ms-list').html(data.documents);
              $('.ms-selection .ms-list').html(data.documentsExists);

              _icon.addClass('fa-check').removeClass('fa-spinner fa-spin');

              _context.next = 20;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-check').removeClass('fa-spinner fa-spin');

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function getDocumentsPreins() {
      return _ref.apply(this, arguments);
    };
  }();

  $("#etablissement").select2();
  $("#formation").select2();
  $("#nature").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_etab = $(this).val();
            table_gestion_preins.columns().search("");
            table_gestion_preins.columns(0).search(id_etab).draw();
            response = "";

            if (!(id_etab != "")) {
              _context2.next = 9;
              break;
            }

            _context2.next = 7;
            return axios.get('/api/formation/' + id_etab);

          case 7:
            request = _context2.sent;
            response = request.data;

          case 9:
            $('#formation').html(response).select2();

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_formation;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_formation = $(this).val();
            table_gestion_preins.columns(2).search("").draw();
            table_gestion_preins.columns(1).search(id_formation).draw();

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#nature").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            table_gestion_preins.columns(2).search($(this).val()).draw();

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));

  var load_etud_info = function load_etud_info() {
    if (id_preinscription) {
      var _icon2 = $("#frais_preinscription i");

      _icon2.removeClass('fa-money-bill-alt').addClass("fa-spinner fa-spin");

      axios.get('/preinscription/gestion/frais_preins_modals/' + id_preinscription).then(function (success) {
        $('.modal-preins .etudiant_info').html(success.data);

        _icon2.removeClass("fa-spinner fa-spin").addClass('fa-money-bill-alt'); // success.data

      })["catch"](function (err) {
        console.log(err);

        _icon2.removeClass("fa-spinner fa-spin").addClass('fa-money-bill-alt');
      });
    }
  };

  var load_frais_preins = function load_frais_preins() {
    if (id_preinscription) {
      // icon.addClass('fa-spinner fa-spin').removeClass('fa-money-bill-alt')
      axios.get('/preinscription/gestion/article_frais/' + id_preinscription).then(function (success) {
        $('.modal-preins .article #frais').html(success.data.list).select2();
        $('.modal-preins #code-facture').html(success.data.codefacture);
        $('#frais_preinscription-modal').modal("show"); // success.data
      })["catch"](function (err) {
        console.log(err);
        icon.removeClass("fa-spinner fa-spin").addClass('fa-money-bill-alt');
      });
    }
  };

  $('body').on('click', '#frais_preinscription', function (e) {
    e.preventDefault();

    if (!id_preinscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    load_etud_info();
    load_frais_preins();
  });
  $('body').on('change', '.modal-preins .article #frais', function (e) {
    e.preventDefault();
    var frais = $(this).find(':selected').attr('data-id');
    $('.modal-preins .article #montant').val(frais);
  });
  $('input[type=radio][name=organ]').on('change', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var request;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();

              if (!(this.value == 0)) {
                _context5.next = 10;
                break;
              }

              _context5.next = 4;
              return axios.get('/api/getorganismepasPayant');

            case 4:
              request = _context5.sent;
              response = request.data;
              $('.select-organ #org').html(response).select2();
              $('.select-organ').css('display', 'block');
              _context5.next = 12;
              break;

            case 10:
              $('.select-organ #org').html("");
              $('.select-organ').css('display', 'none');

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }());
  $('body').on('click', '.modal #add-btn', function () {
    var fraisId = $('.modal-preins .article #frais').val();
    var fraisText = $('.modal-preins .article #frais').find(':selected').text();
    var prix = $('.modal-preins .article #montant').val();
    var organ = $('.select-organ #org').find(':selected').text();
    var organisme_id = $('.select-organ #org').val(); // console.log(fraisId)

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
      organisme_id: organisme_id,
      organisme: organ
    });
    rawFrais();
  });

  var rawFrais = function rawFrais() {
    var html = "";
    frais.map(function (f, i) {
      html += "\n            <tr>\n                <td>".concat(i + 1, "</td>\n                <td>").concat(f.designation, "</td>\n                <td>").concat(f.montant, "</td>\n                <td>").concat(f.organisme, "</td>\n                <td><button class='delete_frais btn btn-danger' id='").concat(f.index, "'><i class='fa fa-trash'></i></button></td>\n            </tr>\n        ");
    });
    $(".modal-preins .table-fee tbody").html(html);
  };

  $("body").on("click", '.delete_frais', function () {
    var _this = this;

    var index = frais.findIndex(function (frais) {
      return frais.index == $(_this).attr("id");
    });
    frais.splice(index, 1);
    rawFrais();
  });
  $("body").on("click", '.modal .save', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();

              if (!(frais.length < 1)) {
                _context6.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez Ajouter Des Frais!'
              });
              return _context6.abrupt("return");

            case 4:
              console.log(frais); // return

              icon = $(".modal .save i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('frais', JSON.stringify(frais));
              _context6.prev = 9;
              _context6.next = 12;
              return axios.post("/preinscription/gestion/addfrais/" + id_preinscription, formData);

            case 12:
              request = _context6.sent;
              _context6.next = 15;
              return request.data;

            case 15:
              data = _context6.sent;
              $("#frais_preinscription-modal .modal-body").prepend("<div class=\"alert alert-success\">\n                    <p>Bien Enregistre</p>\n                </div>");
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
              $(".modal-preins .table-fee tbody").empty();
              table_gestion_preins.ajax.reload(null, false);
              frais = [];
              window.open('/preinscription/gestion/facture/' + data, '_blank');
              _context6.next = 30;
              break;

            case 24:
              _context6.prev = 24;
              _context6.t0 = _context6["catch"](9);
              message = _context6.t0.response.data;
              console.log(_context6.t0, _context6.t0.response);
              $("#frais_preinscription-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");

            case 30:
              setTimeout(function () {
                $("#frais_preinscription-modal .modal-body .alert").remove();
              }, 3000);

            case 31:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[9, 24]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
  $('body').on('click', '#datables_gestion_preinscription tbody tr', function (e) {
    e.preventDefault();
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idpreins.indexOf(input.attr("id"));
      idpreins.splice(index, 1);
    } else {
      input.prop("checked", true);
      idpreins.push(input.attr("id"));
    }

    console.log(idpreins);
  });

  var getEtudiantInfos = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var icon, request, data;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              $('#modifier_modal #candidats_infos').html('');
              $('#modifier_modal #parents_infos').html('');
              $('#modifier_modal #academique_infos').html('');
              $('#modifier_modal #divers').html('');
              icon = $("#modifier i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context7.prev = 6;
              _context7.next = 9;
              return axios.get('/preinscription/gestion/getEtudiantInfospreins/' + id_preinscription);

            case 9:
              request = _context7.sent;
              data = request.data;
              $('#modifier_modal #candidats_infos').html(data['candidats_infos']);
              $('#modifier_modal #parents_infos').html(data['parents_infos']);
              $('#modifier_modal #academique_infos').html(data['academique_infos']);
              $('#modifier_modal #divers').html(data['divers']);
              $('select').select2();
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin"); // console.log(data);

              _context7.next = 21;
              break;

            case 19:
              _context7.prev = 19;
              _context7.t0 = _context7["catch"](6);

            case 21:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[6, 19]]);
    }));

    return function getEtudiantInfos() {
      return _ref7.apply(this, arguments);
    };
  }();

  $('body').on('dblclick', '#datables_gestion_preinscription tbody tr', function (e) {
    e.preventDefault(); // const input = $(this).find("input");

    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_preinscription = null;
    } else {
      $("#datables_gestion_preinscription tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_preinscription = $(this).attr('id');
      getDocumentsPreins(); // getEtudiantInfos();
    }

    console.log(id_preinscription);
  });
  $("#annulation").on('click', /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();

              if (!(idpreins.length < 1)) {
                _context8.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cocher une ou plusieurs ligne!'
              });
              return _context8.abrupt("return");

            case 4:
              icon = $("#annulation i");
              icon.removeClass('fa-times-circle').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('idpreins', JSON.stringify(idpreins));
              _context8.prev = 8;
              _context8.next = 11;
              return axios.post("/preinscription/gestion/annulation_preinscription", formData);

            case 11:
              request = _context8.sent;
              _context8.next = 14;
              return request.data;

            case 14:
              data = _context8.sent;
              Toast.fire({
                icon: 'success',
                title: 'Preinscription Bien Annuler'
              });
              idpreins = [];
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              table_gestion_preins.ajax.reload(null, false);
              _context8.next = 26;
              break;

            case 21:
              _context8.prev = 21;
              _context8.t0 = _context8["catch"](8);
              message = _context8.t0.response.data;
              console.log(_context8.t0, _context8.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });

            case 26:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[8, 21]]);
    }));

    return function (_x3) {
      return _ref8.apply(this, arguments);
    };
  }());
  $("#admission").on('click', /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var icon, formData, request, data, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();

              if (!(idpreins.length < 1)) {
                _context9.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez cocher une ou plusieurs ligne!'
              });
              return _context9.abrupt("return");

            case 4:
              icon = $("#admission i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              formData = new FormData();
              formData.append('idpreins', JSON.stringify(idpreins));
              _context9.prev = 8;
              _context9.next = 11;
              return axios.post("/preinscription/gestion/admission_preinscription", formData);

            case 11:
              request = _context9.sent;
              _context9.next = 14;
              return request.data;

            case 14:
              data = _context9.sent;
              Toast.fire({
                icon: 'success',
                title: 'Admissions Bien Enregister'
              });
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              table_gestion_preins.ajax.reload(null, false);
              _context9.next = 26;
              break;

            case 20:
              _context9.prev = 20;
              _context9.t0 = _context9["catch"](8);
              message = _context9.t0.response.data;
              console.log(_context9.t0, _context9.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");

            case 26:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[8, 20]]);
    }));

    return function (_x4) {
      return _ref9.apply(this, arguments);
    };
  }());
  $("#doc_preinscription").on('click', function () {
    if (!id_preinscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $('#document_preins_modal').modal("show");
  });
  $("body").on("click", ".ms-elem-selectable", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var formData, request, data;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            $('.ms-selection .ms-list').prepend($(this).clone().removeClass("ms-elem-selectable").addClass("ms-elem-selection"));
            formData = new FormData();
            formData.append('idDocument', $(this).attr("id"));
            formData.append('idPreinscription', id_preinscription);
            $(this).remove();
            _context10.prev = 5;
            _context10.next = 8;
            return axios.post("/preinscription/gestion/adddocuments_preins", formData);

          case 8:
            request = _context10.sent;
            _context10.next = 11;
            return request.data;

          case 11:
            data = _context10.sent;
            _context10.next = 17;
            break;

          case 14:
            _context10.prev = 14;
            _context10.t0 = _context10["catch"](5);
            Toast.fire({
              icon: 'error',
              title: 'error'
            });

          case 17:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this, [[5, 14]]);
  })));
  $("body").on("click", ".ms-elem-selection", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var formData, request, data;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            $('.ms-selectable .ms-list').prepend($(this).clone().removeClass("ms-elem-selection").addClass("ms-elem-selectable"));
            formData = new FormData();
            formData.append('idDocument', $(this).attr("id"));
            formData.append('idPreinscription', id_preinscription);
            $(this).remove();
            _context11.prev = 5;
            _context11.next = 8;
            return axios.post("/preinscription/gestion/deletedocuments_preins", formData);

          case 8:
            request = _context11.sent;
            _context11.next = 11;
            return request.data;

          case 11:
            data = _context11.sent;
            _context11.next = 17;
            break;

          case 14:
            _context11.prev = 14;
            _context11.t0 = _context11["catch"](5);
            Toast.fire({
              icon: 'error',
              title: 'error'
            });

          case 17:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, this, [[5, 14]]);
  })));
  $('body').on('click', '#att_preinscription', function () {
    if (!id_preinscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    window.open('/preinscription/gestion/attestation_preinscription/' + id_preinscription, '_blank');
  });
  $('body').on('click', '#cfc_preinscription', function () {
    if (!id_preinscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    window.open('/preinscription/gestion/cfc_preinscription/' + id_preinscription, '_blank');
  });
  $('body').on('click', '#modifier', function () {
    if (!id_preinscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    getEtudiantInfos();
    $('#modifier_modal').modal("show");
  });
  $("body").on('submit', "#form_modifier", /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(e) {
      var res, formData, modalAlert, _icon3, request, _response, message;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              e.preventDefault(); // alert('et');

              if (id_preinscription) {
                _context12.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Merci de Choisir Un Etudiant!'
              });
              return _context12.abrupt("return");

            case 4:
              res = confirm('Vous voulez vraiment modifier cette enregistrement ?');

              if (!(res == 1)) {
                _context12.next = 29;
                break;
              }

              formData = new FormData($('#form_modifier')[0]); //   console.log(formData);

              modalAlert = $("#modifier_modal .modal-body .alert");
              modalAlert.remove();
              _icon3 = $("#modifier_modal button i");

              _icon3.removeClass('fa-edit').addClass("fa-spinner fa-spin");

              _context12.prev = 11;
              _context12.next = 14;
              return axios.post('/preinscription/gestion/edit_infos_preins/' + id_preinscription, formData);

            case 14:
              request = _context12.sent;
              _response = request.data;
              $("#modifier_modal .modal-body").prepend("<div class=\"alert alert-success\" style=\"width: 98%;margin: 0 auto;\">\n              <p>".concat(_response, "</p>\n            </div>"));

              _icon3.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

              id_preinscription = false;
              table_gestion_preins.ajax.reload(null, false);
              _context12.next = 28;
              break;

            case 22:
              _context12.prev = 22;
              _context12.t0 = _context12["catch"](11);
              // console.log(error, error.response);
              message = _context12.t0.response.data;
              modalAlert.remove();
              $("#modifier_modal .modal-body").prepend("<div class=\"alert alert-danger\" style=\"width: 98%;margin: 0 auto;\">".concat(message, "</div>"));

              _icon3.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

            case 28:
              setTimeout(function () {
                $(".modal-body .alert").remove(); // modalAlert.remove();
              }, 2500);

            case 29:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12, null, [[11, 22]]);
    }));

    return function (_x5) {
      return _ref12.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction', function () {
    window.open('/preinscription/gestion/extraction_preins', '_blank');
  });
  $('body').on('click', '#imprimer_docs', function () {
    if (!id_preinscription) {
      Toast.fire({
        icon: 'error',
        title: 'Merci de Choisir Un Etudiant!'
      });
      return;
    }

    window.open('/preinscription/gestion/print_documents_preinscription/' + id_preinscription, '_blank');
  });
  $('.nav-pills a').on('click', function (e) {
    $(this).tab('show');
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-8c63a7"], () => (__webpack_exec__("./assets/components/preinscription/gestionpreinscription.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCb0QsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsVUFBVXZCLENBQVYsRUFBYTtBQUN2QzdCLElBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9ILEdBQVIsQ0FBWSxNQUFaO0FBQ0gsR0FGRDtBQUlDLENBMWZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbnByZWluc2NyaXB0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbn0pXHJcbmxldCBpZF9wcmVpbnNjcmlwdGlvbiA9IGZhbHNlO1xyXG5sZXQgaWRwcmVpbnMgPSBbXTtcclxubGV0IGZyYWlzID0gW107XHJcbi8vIHZhciB0YWJsZV9wcmVpbnMgPSAkKFwiI2RhdGFibGVzX3ByZWluc2NyaXB0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbi8vICAgICBsZW5ndGhNZW51OiBbXHJcbi8vICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuLy8gICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbi8vICAgICBdLFxyXG4vLyAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuLy8gICAgIGFqYXg6IFwiL3ByZWluc2NyaXB0aW9uL2xpc3RcIixcclxuLy8gICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbi8vICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4vLyAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbi8vICAgICBsYW5ndWFnZToge1xyXG4vLyAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuLy8gICAgIH0sXHJcbi8vIH0pO1xyXG5cclxudmFyIHRhYmxlX2dlc3Rpb25fcHJlaW5zID0gJChcIiNkYXRhYmxlc19nZXN0aW9uX3ByZWluc2NyaXB0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICBdLFxyXG4gICAgb3JkZXI6IFtbMSwgXCJkZXNjXCJdXSxcclxuICAgIGFqYXg6IFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vbGlzdC9nZXN0aW9uX3ByZWluc2NyaXB0aW9uL1wiLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZHByZWlucy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgfSxcclxufSk7XHJcbmNvbnN0IGdldERvY3VtZW50c1ByZWlucyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoJyNkb2NfcHJlaW5zY3JpcHRpb24gaScpXHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vZ2V0ZG9jX3ByZWluc2NyaXB0aW9uL1wiK2lkX3ByZWluc2NyaXB0aW9uKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICQoJy5tcy1zZWxlY3RhYmxlIC5tcy1saXN0JykuaHRtbChkYXRhLmRvY3VtZW50cylcclxuICAgICAgICAkKCcubXMtc2VsZWN0aW9uIC5tcy1saXN0JykuaHRtbChkYXRhLmRvY3VtZW50c0V4aXN0cylcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgIH0pICAgIFxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICB9XHJcbn1cclxuJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuJChcIiNmb3JtYXRpb25cIikuc2VsZWN0MigpO1xyXG4kKFwiI25hdHVyZVwiKS5zZWxlY3QyKCk7XHJcbiQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcblxyXG4gICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuY29sdW1ucygwKS5zZWFyY2goaWRfZXRhYikuZHJhdygpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgfVxyXG4gICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxufSlcclxuJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmNvbHVtbnMoMikuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG59KVxyXG4kKFwiI25hdHVyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5jb2x1bW5zKDIpLnNlYXJjaCgkKHRoaXMpLnZhbCgpKS5kcmF3KCk7XHJcbn0pXHJcblxyXG5cclxuY29uc3QgbG9hZF9ldHVkX2luZm8gPSAoKSA9PiB7XHJcbiAgICBpZihpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZnJhaXNfcHJlaW5zY3JpcHRpb24gaVwiKTtcclxuICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBheGlvcy5nZXQoJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2ZyYWlzX3ByZWluc19tb2RhbHMvJytpZF9wcmVpbnNjcmlwdGlvbilcclxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgJCgnLm1vZGFsLXByZWlucyAuZXR1ZGlhbnRfaW5mbycpLmh0bWwoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKS5hZGRDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKTtcclxuICAgICAgICAgICAgLy8gc3VjY2Vzcy5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKS5hZGRDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuY29uc3QgbG9hZF9mcmFpc19wcmVpbnMgPSAoKSA9PiB7XHJcbiAgICBpZihpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgLy8gaWNvbi5hZGRDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykucmVtb3ZlQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JylcclxuICAgICAgICBheGlvcy5nZXQoJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2FydGljbGVfZnJhaXMvJytpZF9wcmVpbnNjcmlwdGlvbilcclxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgJCgnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjZnJhaXMnKS5odG1sKHN1Y2Nlc3MuZGF0YS5saXN0KS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1wcmVpbnMgI2NvZGUtZmFjdHVyZScpLmh0bWwoc3VjY2Vzcy5kYXRhLmNvZGVmYWN0dXJlKTtcclxuICAgICAgICAgICAgJCgnI2ZyYWlzX3ByZWluc2NyaXB0aW9uLW1vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAvLyBzdWNjZXNzLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpLmFkZENsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9ICAgIFxyXG59XHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcjZnJhaXNfcHJlaW5zY3JpcHRpb24nLGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbG9hZF9ldHVkX2luZm8oKTtcclxuICAgIGxvYWRfZnJhaXNfcHJlaW5zKCk7XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsJy5tb2RhbC1wcmVpbnMgLmFydGljbGUgI2ZyYWlzJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZyYWlzID0gJCh0aGlzKS5maW5kKCc6c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAkKCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNtb250YW50JykudmFsKGZyYWlzKTtcclxufSk7XHJcbiQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9b3JnYW5dJykub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLnZhbHVlID09IDApIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldG9yZ2FuaXNtZXBhc1BheWFudCcpO1xyXG4gICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJy5zZWxlY3Qtb3JnYW4nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuaHRtbChcIlwiKTtcclxuICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgfVxyXG59KVxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnLm1vZGFsICNhZGQtYnRuJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZnJhaXNJZCAgPSAkKCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNmcmFpcycpLnZhbCgpO1xyXG4gICAgbGV0IGZyYWlzVGV4dCAgPSAkKCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNmcmFpcycpLmZpbmQoJzpzZWxlY3RlZCcpLnRleHQoKTtcclxuICAgIGxldCBwcml4ICA9ICQoJy5tb2RhbC1wcmVpbnMgLmFydGljbGUgI21vbnRhbnQnKS52YWwoKTtcclxuICAgIGxldCBvcmdhbiAgPSAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5maW5kKCc6c2VsZWN0ZWQnKS50ZXh0KCk7XHJcbiAgICBsZXQgb3JnYW5pc21lX2lkICA9ICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLnZhbCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZnJhaXNJZClcclxuICAgIGlmICghJC5pc051bWVyaWMoZnJhaXNJZCkgfHwgcHJpeCA9PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoJChcImlucHV0W25hbWU9J29yZ2FuJ106Y2hlY2tlZFwiKS52YWwoKSA9PSAxKSB7XHJcbiAgICAgICAgb3JnYW5pc21lX2lkID0gN1xyXG4gICAgICAgIG9yZ2FuID0gXCJQYXlhbnRcIlxyXG4gICAgfWVsc2UgaWYob3JnYW5pc21lX2lkID09IFwiXCIpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgZnJhaXMucHVzaCh7XHJcbiAgICAgICAgaW5kZXggOiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxKSxcclxuICAgICAgICBpZDogZnJhaXNJZCAsXHJcbiAgICAgICAgZGVzaWduYXRpb246IGZyYWlzVGV4dCxcclxuICAgICAgICBtb250YW50OiBwcml4LFxyXG4gICAgICAgIG9yZ2FuaXNtZV9pZDogb3JnYW5pc21lX2lkLFxyXG4gICAgICAgIG9yZ2FuaXNtZTogb3JnYW5cclxuICAgIH0pO1xyXG4gICAgcmF3RnJhaXMoKTtcclxufSlcclxuICAgIGNvbnN0IHJhd0ZyYWlzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBodG1sID0gXCJcIjtcclxuICAgICAgICBmcmFpcy5tYXAoKGYsIGkpID0+IHtcclxuICAgICAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLmRlc2lnbmF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLm1vbnRhbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2Yub3JnYW5pc21lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz0nZGVsZXRlX2ZyYWlzIGJ0biBidG4tZGFuZ2VyJyBpZD0nJHtmLmluZGV4fSc+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+PC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICBgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKFwiLm1vZGFsLXByZWlucyAudGFibGUtZmVlIHRib2R5XCIpLmh0bWwoaHRtbClcclxuICAgIH1cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJy5kZWxldGVfZnJhaXMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBmcmFpcy5maW5kSW5kZXgoZnJhaXMgPT4gZnJhaXMuaW5kZXggPT0gJCh0aGlzKS5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIGZyYWlzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICByYXdGcmFpcygpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcubW9kYWwgLnNhdmUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihmcmFpcy5sZW5ndGggPCAxKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogQWpvdXRlciBEZXMgRnJhaXMhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhmcmFpcylcclxuICAgICAgICAvLyByZXR1cm5cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIi5tb2RhbCAuc2F2ZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZnJhaXMnLCBKU09OLnN0cmluZ2lmeShmcmFpcykpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vYWRkZnJhaXMvXCIraWRfcHJlaW5zY3JpcHRpb24sIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNmcmFpc19wcmVpbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QmllbiBFbnJlZ2lzdHJlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1wcmVpbnMgLnRhYmxlLWZlZSB0Ym9keVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICAgICAgZnJhaXMgPSBbXTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2ZhY3R1cmUvJytkYXRhLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICQoXCIjZnJhaXNfcHJlaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI2ZyYWlzX3ByZWluc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19nZXN0aW9uX3ByZWluc2NyaXB0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZHByZWlucy5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgICAgIGlkcHJlaW5zLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgaWRwcmVpbnMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZHByZWlucyk7XHJcbiAgICB9KVxyXG4gICAgY29uc3QgZ2V0RXR1ZGlhbnRJbmZvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2NhbmRpZGF0c19pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjcGFyZW50c19pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjYWNhZGVtaXF1ZV9pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjZGl2ZXJzJykuaHRtbCgnJyk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vZ2V0RXR1ZGlhbnRJbmZvc3ByZWlucy8nK2lkX3ByZWluc2NyaXB0aW9uKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjY2FuZGlkYXRzX2luZm9zJykuaHRtbChkYXRhWydjYW5kaWRhdHNfaW5mb3MnXSk7XHJcbiAgICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNwYXJlbnRzX2luZm9zJykuaHRtbChkYXRhWydwYXJlbnRzX2luZm9zJ10pO1xyXG4gICAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjYWNhZGVtaXF1ZV9pbmZvcycpLmh0bWwoZGF0YVsnYWNhZGVtaXF1ZV9pbmZvcyddKTtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoZGF0YVsnZGl2ZXJzJ10pO1xyXG4gICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gIFxyXG4gICAgfVxyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhYmxlc19nZXN0aW9uX3ByZWluc2NyaXB0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3ByZWluc2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RhdGFibGVzX2dlc3Rpb25fcHJlaW5zY3JpcHRpb24gdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9wcmVpbnNjcmlwdGlvbiA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgZ2V0RG9jdW1lbnRzUHJlaW5zKCk7XHJcbiAgICAgICAgICAgIC8vIGdldEV0dWRpYW50SW5mb3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRfcHJlaW5zY3JpcHRpb24pO1xyXG4gICAgfSlcclxuXHJcbiQoXCIjYW5udWxhdGlvblwiKS5vbignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoaWRwcmVpbnMubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXIgdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjYW5udWxhdGlvbiBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtdGltZXMtY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRwcmVpbnMnLCBKU09OLnN0cmluZ2lmeShpZHByZWlucykpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2FubnVsYXRpb25fcHJlaW5zY3JpcHRpb25cIiwgZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdQcmVpbnNjcmlwdGlvbiBCaWVuIEFubnVsZXInLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWRwcmVpbnMgPSBbXVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcbiQoXCIjYWRtaXNzaW9uXCIpLm9uKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihpZHByZWlucy5sZW5ndGggPCAxKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hlciB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNhZG1pc3Npb24gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICBcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZHByZWlucycsIEpTT04uc3RyaW5naWZ5KGlkcHJlaW5zKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vYWRtaXNzaW9uX3ByZWluc2NyaXB0aW9uXCIsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWRtaXNzaW9ucyBCaWVuIEVucmVnaXN0ZXInLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICB9XHJcbn0pXHJcbiQoXCIjZG9jX3ByZWluc2NyaXB0aW9uXCIpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoJyNkb2N1bWVudF9wcmVpbnNfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcblxyXG59KVxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLm1zLWVsZW0tc2VsZWN0YWJsZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICQoJy5tcy1zZWxlY3Rpb24gLm1zLWxpc3QnKS5wcmVwZW5kKCQodGhpcykuY2xvbmUoKS5yZW1vdmVDbGFzcyhcIm1zLWVsZW0tc2VsZWN0YWJsZVwiKS5hZGRDbGFzcyhcIm1zLWVsZW0tc2VsZWN0aW9uXCIpKVxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkRG9jdW1lbnQnLCAkKHRoaXMpLmF0dHIoXCJpZFwiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRQcmVpbnNjcmlwdGlvbicsIGlkX3ByZWluc2NyaXB0aW9uKTtcclxuICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vYWRkZG9jdW1lbnRzX3ByZWluc1wiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnZXJyb3InLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIubXMtZWxlbS1zZWxlY3Rpb25cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubXMtc2VsZWN0YWJsZSAubXMtbGlzdCcpLnByZXBlbmQoJCh0aGlzKS5jbG9uZSgpLnJlbW92ZUNsYXNzKFwibXMtZWxlbS1zZWxlY3Rpb25cIikuYWRkQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGFibGVcIikpXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWREb2N1bWVudCcsICQodGhpcykuYXR0cihcImlkXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZFByZWluc2NyaXB0aW9uJywgaWRfcHJlaW5zY3JpcHRpb24pO1xyXG4gICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9kZWxldGVkb2N1bWVudHNfcHJlaW5zXCIsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdlcnJvcicsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcjYXR0X3ByZWluc2NyaXB0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHdpbmRvdy5vcGVuKCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9hdHRlc3RhdGlvbl9wcmVpbnNjcmlwdGlvbi8nK2lkX3ByZWluc2NyaXB0aW9uLCAnX2JsYW5rJyk7XHJcbn0pXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnI2NmY19wcmVpbnNjcmlwdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbignL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vY2ZjX3ByZWluc2NyaXB0aW9uLycraWRfcHJlaW5zY3JpcHRpb24sICdfYmxhbmsnKTtcclxufSlcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcjbW9kaWZpZXInLGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZ2V0RXR1ZGlhbnRJbmZvcygpO1xyXG4gICAgJCgnI21vZGlmaWVyX21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG59KVxyXG5cclxuJChcImJvZHlcIikub24oJ3N1Ym1pdCcsIFwiI2Zvcm1fbW9kaWZpZXJcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGFsZXJ0KCdldCcpO1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgVW4gRXR1ZGlhbnQhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBtb2RpZmllciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKCcjZm9ybV9tb2RpZmllcicpWzBdKTtcclxuICAgIC8vICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjbW9kaWZpZXJfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyX21vZGFsIGJ1dHRvbiBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2VkaXRfaW5mb3NfcHJlaW5zLycraWRfcHJlaW5zY3JpcHRpb24sIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+XHJcbiAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgaWRfcHJlaW5zY3JpcHRpb24gPSBmYWxzZTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPVwid2lkdGg6IDk4JTttYXJnaW46IDAgYXV0bztcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgIH0sIDI1MDApICBcclxuICAgIH1cclxuICB9KVxyXG4gIFxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXh0cmFjdGlvbicsIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9leHRyYWN0aW9uX3ByZWlucycsICdfYmxhbmsnKTtcclxuICB9KVxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCcjaW1wcmltZXJfZG9jcycsIGZ1bmN0aW9uICgpe1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgVW4gRXR1ZGlhbnQhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHdpbmRvdy5vcGVuKCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9wcmludF9kb2N1bWVudHNfcHJlaW5zY3JpcHRpb24vJytpZF9wcmVpbnNjcmlwdGlvbiwgJ19ibGFuaycpO1xyXG4gIH0pXHJcbiAgXHJcbiQoJy5uYXYtcGlsbHMgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAkKHRoaXMpLnRhYignc2hvdycpO1xyXG59KVxyXG5cclxufSlcclxuXHJcbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImlkX3ByZWluc2NyaXB0aW9uIiwiaWRwcmVpbnMiLCJmcmFpcyIsInRhYmxlX2dlc3Rpb25fcHJlaW5zIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJzY3JvbGxYIiwiZHJhd0NhbGxiYWNrIiwiZm9yRWFjaCIsImUiLCJmaW5kIiwicHJvcCIsImxhbmd1YWdlIiwidXJsIiwiZ2V0RG9jdW1lbnRzUHJlaW5zIiwiaWNvbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImRvY3VtZW50cyIsImRvY3VtZW50c0V4aXN0cyIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJmaXJlIiwidGl0bGUiLCJzZWxlY3QyIiwib24iLCJpZF9ldGFiIiwidmFsIiwiY29sdW1ucyIsInNlYXJjaCIsImRyYXciLCJpZF9mb3JtYXRpb24iLCJsb2FkX2V0dWRfaW5mbyIsInRoZW4iLCJzdWNjZXNzIiwiZXJyIiwibG9hZF9mcmFpc19wcmVpbnMiLCJsaXN0IiwiY29kZWZhY3R1cmUiLCJtb2RhbCIsInByZXZlbnREZWZhdWx0IiwiYXR0ciIsInZhbHVlIiwiY3NzIiwiZnJhaXNJZCIsImZyYWlzVGV4dCIsInRleHQiLCJwcml4Iiwib3JnYW4iLCJvcmdhbmlzbWVfaWQiLCJpc051bWVyaWMiLCJwdXNoIiwiaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpZCIsImRlc2lnbmF0aW9uIiwibW9udGFudCIsIm9yZ2FuaXNtZSIsInJhd0ZyYWlzIiwibWFwIiwiZiIsImkiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJsZW5ndGgiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInBvc3QiLCJwcmVwZW5kIiwiZW1wdHkiLCJyZWxvYWQiLCJ3aW5kb3ciLCJvcGVuIiwic2V0VGltZW91dCIsInJlbW92ZSIsImlucHV0IiwiaXMiLCJpbmRleE9mIiwiZ2V0RXR1ZGlhbnRJbmZvcyIsImhhc0NsYXNzIiwiY2xvbmUiLCJyZXMiLCJjb25maXJtIiwibW9kYWxBbGVydCIsInRhYiJdLCJzb3VyY2VSb290IjoiIn0=