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

  var load_etud_info = function load_etud_info() {
    if (id_preinscription) {
      var _icon = $("#frais_preinscription i");

      _icon.removeClass('fa-money-bill-alt').addClass("fa-spinner fa-spin");

      axios.get('/preinscription/gestion/frais_preins_modals/' + id_preinscription).then(function (success) {
        $('.modal-preins .etudiant_info').html(success.data);

        _icon.removeClass("fa-spinner fa-spin").addClass('fa-money-bill-alt'); // success.data

      })["catch"](function (err) {
        console.log(err);

        _icon.removeClass("fa-spinner fa-spin").addClass('fa-money-bill-alt');
      });
    }
  };

  var load_frais_preins = function load_frais_preins() {
    if (id_preinscription) {
      // icon.addClass('fa-spinner fa-spin').removeClass('fa-money-bill-alt')
      axios.get('/preinscription/gestion/article_frais/' + id_preinscription).then(function (success) {
        $('.modal-preins .article #frais').html(success.data.list).select2();
        $('.modal-preins #code-facture').html(success.data.codefacture); // success.data
      })["catch"](function (err) {
        console.log(err);
        icon.removeClass("fa-spinner fa-spin").addClass('fa-money-bill-alt');
      });
    }
  };

  var getDocumentsPreins = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _icon2, request, data, message;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _icon2 = $('#doc_preinscription i');

              _icon2.removeClass('fa-check').addClass('fa-spinner fa-spin');

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

              _icon2.addClass('fa-check').removeClass('fa-spinner fa-spin');

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
  $('body').on('click', '#frais_preinscription', function (e) {
    e.preventDefault();

    if (!id_preinscription) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $('#frais_preinscription-modal').modal("show");
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
      load_etud_info();
      load_frais_preins();
      getDocumentsPreins();
      getEtudiantInfos();
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

              if (id_preinscription) {
                _context8.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!'
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
              icon.addClass('fa-times-circle').removeClass("fa-spinner fa-spin");
              table_gestion_preins.ajax.reload(null, false);
              _context8.next = 25;
              break;

            case 20:
              _context8.prev = 20;
              _context8.t0 = _context8["catch"](8);
              message = _context8.t0.response.data;
              console.log(_context8.t0, _context8.t0.response);
              Toast.fire({
                icon: 'error',
                title: 'Some Error'
              });

            case 25:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[8, 20]]);
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
                title: 'Veuillez cocher une or plusieurs ligne!'
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

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError = global.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $findIndex = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/preinscription/gestionpreinscription.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFlBQVksbUJBQU8sQ0FBQyx1RkFBNkI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQztBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5ELHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3Q0FBd0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3ByZWluc2NyaXB0aW9uL2dlc3Rpb25wcmVpbnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG59KVxyXG5sZXQgaWRfcHJlaW5zY3JpcHRpb24gPSBmYWxzZTtcclxubGV0IGlkcHJlaW5zID0gW107XHJcbmxldCBmcmFpcyA9IFtdO1xyXG4vLyB2YXIgdGFibGVfcHJlaW5zID0gJChcIiNkYXRhYmxlc19wcmVpbnNjcmlwdGlvblwiKS5EYXRhVGFibGUoe1xyXG4vLyAgICAgbGVuZ3RoTWVudTogW1xyXG4vLyAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbi8vICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4vLyAgICAgXSxcclxuLy8gICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXHJcbi8vICAgICBhamF4OiBcIi9wcmVpbnNjcmlwdGlvbi9saXN0XCIsXHJcbi8vICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4vLyAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuLy8gICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4vLyAgICAgbGFuZ3VhZ2U6IHtcclxuLy8gICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbi8vICAgICB9LFxyXG4vLyB9KTtcclxuXHJcbnZhciB0YWJsZV9nZXN0aW9uX3ByZWlucyA9ICQoXCIjZGF0YWJsZXNfZ2VzdGlvbl9wcmVpbnNjcmlwdGlvblwiKS5EYXRhVGFibGUoe1xyXG4gICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgXSxcclxuICAgIG9yZGVyOiBbWzEsIFwiZGVzY1wiXV0sXHJcbiAgICBhamF4OiBcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2xpc3QvZ2VzdGlvbl9wcmVpbnNjcmlwdGlvbi9cIixcclxuICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWRwcmVpbnMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXHJcbiAgICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgICAgLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgbG9hZF9ldHVkX2luZm8gPSAoKSA9PiB7XHJcbiAgICBpZihpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZnJhaXNfcHJlaW5zY3JpcHRpb24gaVwiKTtcclxuICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICBheGlvcy5nZXQoJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2ZyYWlzX3ByZWluc19tb2RhbHMvJytpZF9wcmVpbnNjcmlwdGlvbilcclxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgJCgnLm1vZGFsLXByZWlucyAuZXR1ZGlhbnRfaW5mbycpLmh0bWwoc3VjY2Vzcy5kYXRhKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKS5hZGRDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKTtcclxuICAgICAgICAgICAgLy8gc3VjY2Vzcy5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKS5hZGRDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuY29uc3QgbG9hZF9mcmFpc19wcmVpbnMgPSAoKSA9PiB7XHJcbiAgICBpZihpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgLy8gaWNvbi5hZGRDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykucmVtb3ZlQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JylcclxuICAgICAgICBheGlvcy5nZXQoJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2FydGljbGVfZnJhaXMvJytpZF9wcmVpbnNjcmlwdGlvbilcclxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgJCgnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjZnJhaXMnKS5odG1sKHN1Y2Nlc3MuZGF0YS5saXN0KS5zZWxlY3QyKCk7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1wcmVpbnMgI2NvZGUtZmFjdHVyZScpLmh0bWwoc3VjY2Vzcy5kYXRhLmNvZGVmYWN0dXJlKTtcclxuICAgICAgICAgICAgLy8gc3VjY2Vzcy5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKS5hZGRDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxufVxyXG5jb25zdCBnZXREb2N1bWVudHNQcmVpbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKCcjZG9jX3ByZWluc2NyaXB0aW9uIGknKVxyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2dldGRvY19wcmVpbnNjcmlwdGlvbi9cIitpZF9wcmVpbnNjcmlwdGlvbik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKCcubXMtc2VsZWN0YWJsZSAubXMtbGlzdCcpLmh0bWwoZGF0YS5kb2N1bWVudHMpXHJcbiAgICAgICAgJCgnLm1zLXNlbGVjdGlvbiAubXMtbGlzdCcpLmh0bWwoZGF0YS5kb2N1bWVudHNFeGlzdHMpXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcclxuICAgICAgICB9KSAgICBcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgfVxyXG59XHJcbiQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKCk7XHJcbiQoXCIjZm9ybWF0aW9uXCIpLnNlbGVjdDIoKTtcclxuJChcIiNuYXR1cmVcIikuc2VsZWN0MigpO1xyXG4kKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG5cclxuICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgIH1cclxuICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbn0pXHJcbiQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5jb2x1bW5zKDIpLnNlYXJjaChcIlwiKS5kcmF3KCk7XHJcbiAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxufSlcclxuJChcIiNuYXR1cmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuY29sdW1ucygyKS5zZWFyY2goJCh0aGlzKS52YWwoKSkuZHJhdygpO1xyXG59KVxyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsJyNmcmFpc19wcmVpbnNjcmlwdGlvbicsZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKCcjZnJhaXNfcHJlaW5zY3JpcHRpb24tbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcbn0pO1xyXG4kKCdib2R5Jykub24oJ2NoYW5nZScsJy5tb2RhbC1wcmVpbnMgLmFydGljbGUgI2ZyYWlzJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGZyYWlzID0gJCh0aGlzKS5maW5kKCc6c2VsZWN0ZWQnKS5hdHRyKCdkYXRhLWlkJyk7XHJcbiAgICAkKCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNtb250YW50JykudmFsKGZyYWlzKTtcclxufSk7XHJcbiQoJ2lucHV0W3R5cGU9cmFkaW9dW25hbWU9b3JnYW5dJykub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uIChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLnZhbHVlID09IDApIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2dldG9yZ2FuaXNtZXBhc1BheWFudCcpO1xyXG4gICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJy5zZWxlY3Qtb3JnYW4nKS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuaHRtbChcIlwiKTtcclxuICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgfVxyXG59KVxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnLm1vZGFsICNhZGQtYnRuJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZnJhaXNJZCAgPSAkKCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNmcmFpcycpLnZhbCgpO1xyXG4gICAgbGV0IGZyYWlzVGV4dCAgPSAkKCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNmcmFpcycpLmZpbmQoJzpzZWxlY3RlZCcpLnRleHQoKTtcclxuICAgIGxldCBwcml4ICA9ICQoJy5tb2RhbC1wcmVpbnMgLmFydGljbGUgI21vbnRhbnQnKS52YWwoKTtcclxuICAgIGxldCBvcmdhbiAgPSAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS5maW5kKCc6c2VsZWN0ZWQnKS50ZXh0KCk7XHJcbiAgICBsZXQgb3JnYW5pc21lX2lkICA9ICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLnZhbCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZnJhaXNJZClcclxuICAgIGlmICghJC5pc051bWVyaWMoZnJhaXNJZCkgfHwgcHJpeCA9PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoJChcImlucHV0W25hbWU9J29yZ2FuJ106Y2hlY2tlZFwiKS52YWwoKSA9PSAxKSB7XHJcbiAgICAgICAgb3JnYW5pc21lX2lkID0gN1xyXG4gICAgICAgIG9yZ2FuID0gXCJQYXlhbnRcIlxyXG4gICAgfWVsc2UgaWYob3JnYW5pc21lX2lkID09IFwiXCIpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgZnJhaXMucHVzaCh7XHJcbiAgICAgICAgaW5kZXggOiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxKSxcclxuICAgICAgICBpZDogZnJhaXNJZCAsXHJcbiAgICAgICAgZGVzaWduYXRpb246IGZyYWlzVGV4dCxcclxuICAgICAgICBtb250YW50OiBwcml4LFxyXG4gICAgICAgIG9yZ2FuaXNtZV9pZDogb3JnYW5pc21lX2lkLFxyXG4gICAgICAgIG9yZ2FuaXNtZTogb3JnYW5cclxuICAgIH0pO1xyXG4gICAgcmF3RnJhaXMoKTtcclxufSlcclxuICAgIGNvbnN0IHJhd0ZyYWlzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBodG1sID0gXCJcIjtcclxuICAgICAgICBmcmFpcy5tYXAoKGYsIGkpID0+IHtcclxuICAgICAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2kgKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLmRlc2lnbmF0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLm1vbnRhbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4ke2Yub3JnYW5pc21lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz0nZGVsZXRlX2ZyYWlzIGJ0biBidG4tZGFuZ2VyJyBpZD0nJHtmLmluZGV4fSc+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoJz48L2k+PC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICBgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKFwiLm1vZGFsLXByZWlucyAudGFibGUtZmVlIHRib2R5XCIpLmh0bWwoaHRtbClcclxuICAgIH1cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgJy5kZWxldGVfZnJhaXMnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBmcmFpcy5maW5kSW5kZXgoZnJhaXMgPT4gZnJhaXMuaW5kZXggPT0gJCh0aGlzKS5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIGZyYWlzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICByYXdGcmFpcygpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcubW9kYWwgLnNhdmUnLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihmcmFpcy5sZW5ndGggPCAxKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogQWpvdXRlciBEZXMgRnJhaXMhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhmcmFpcylcclxuICAgICAgICAvLyByZXR1cm5cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIi5tb2RhbCAuc2F2ZSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZnJhaXMnLCBKU09OLnN0cmluZ2lmeShmcmFpcykpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vYWRkZnJhaXMvXCIraWRfcHJlaW5zY3JpcHRpb24sIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgJChcIiNmcmFpc19wcmVpbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QmllbiBFbnJlZ2lzdHJlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgJChcIi5tb2RhbC1wcmVpbnMgLnRhYmxlLWZlZSB0Ym9keVwiKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgICAgICAgICAgZnJhaXMgPSBbXTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2ZhY3R1cmUvJytkYXRhLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICQoXCIjZnJhaXNfcHJlaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKFwiI2ZyYWlzX3ByZWluc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNkYXRhYmxlc19nZXN0aW9uX3ByZWluc2NyaXB0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpe1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpZHByZWlucy5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgICAgIGlkcHJlaW5zLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgaWRwcmVpbnMucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZHByZWlucyk7XHJcbiAgICB9KVxyXG4gICAgY29uc3QgZ2V0RXR1ZGlhbnRJbmZvcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2NhbmRpZGF0c19pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjcGFyZW50c19pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjYWNhZGVtaXF1ZV9pbmZvcycpLmh0bWwoJycpO1xyXG4gICAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjZGl2ZXJzJykuaHRtbCgnJyk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vZ2V0RXR1ZGlhbnRJbmZvc3ByZWlucy8nK2lkX3ByZWluc2NyaXB0aW9uKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjY2FuZGlkYXRzX2luZm9zJykuaHRtbChkYXRhWydjYW5kaWRhdHNfaW5mb3MnXSk7XHJcbiAgICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNwYXJlbnRzX2luZm9zJykuaHRtbChkYXRhWydwYXJlbnRzX2luZm9zJ10pO1xyXG4gICAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjYWNhZGVtaXF1ZV9pbmZvcycpLmh0bWwoZGF0YVsnYWNhZGVtaXF1ZV9pbmZvcyddKTtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoZGF0YVsnZGl2ZXJzJ10pO1xyXG4gICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gIFxyXG4gICAgfVxyXG4gICAgJCgnYm9keScpLm9uKCdkYmxjbGljaycsJyNkYXRhYmxlc19nZXN0aW9uX3ByZWluc2NyaXB0aW9uIHRib2R5IHRyJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3ByZWluc2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2RhdGFibGVzX2dlc3Rpb25fcHJlaW5zY3JpcHRpb24gdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9wcmVpbnNjcmlwdGlvbiA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgbG9hZF9ldHVkX2luZm8oKTtcclxuICAgICAgICAgICAgbG9hZF9mcmFpc19wcmVpbnMoKTtcclxuICAgICAgICAgICAgZ2V0RG9jdW1lbnRzUHJlaW5zKCk7XHJcbiAgICAgICAgICAgIGdldEV0dWRpYW50SW5mb3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRfcHJlaW5zY3JpcHRpb24pO1xyXG4gICAgfSlcclxuXHJcbiQoXCIjYW5udWxhdGlvblwiKS5vbignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2FubnVsYXRpb24gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkcHJlaW5zJywgSlNPTi5zdHJpbmdpZnkoaWRwcmVpbnMpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9hbm51bGF0aW9uX3ByZWluc2NyaXB0aW9uXCIsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUHJlaW5zY3JpcHRpb24gQmllbiBBbm51bGVyJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1NvbWUgRXJyb3InLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcbiQoXCIjYWRtaXNzaW9uXCIpLm9uKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihpZHByZWlucy5sZW5ndGggPCAxKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IGNvY2hlciB1bmUgb3IgcGx1c2lldXJzIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNhZG1pc3Npb24gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICBcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZHByZWlucycsIEpTT04uc3RyaW5naWZ5KGlkcHJlaW5zKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vYWRtaXNzaW9uX3ByZWluc2NyaXB0aW9uXCIsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWRtaXNzaW9ucyBCaWVuIEVucmVnaXN0ZXInLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICB9XHJcbn0pXHJcbiQoXCIjZG9jX3ByZWluc2NyaXB0aW9uXCIpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoJyNkb2N1bWVudF9wcmVpbnNfbW9kYWwnKS5tb2RhbChcInNob3dcIik7XHJcblxyXG59KVxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLm1zLWVsZW0tc2VsZWN0YWJsZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICQoJy5tcy1zZWxlY3Rpb24gLm1zLWxpc3QnKS5wcmVwZW5kKCQodGhpcykuY2xvbmUoKS5yZW1vdmVDbGFzcyhcIm1zLWVsZW0tc2VsZWN0YWJsZVwiKS5hZGRDbGFzcyhcIm1zLWVsZW0tc2VsZWN0aW9uXCIpKVxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkRG9jdW1lbnQnLCAkKHRoaXMpLmF0dHIoXCJpZFwiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRQcmVpbnNjcmlwdGlvbicsIGlkX3ByZWluc2NyaXB0aW9uKTtcclxuICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vYWRkZG9jdW1lbnRzX3ByZWluc1wiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnZXJyb3InLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcbiQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIubXMtZWxlbS1zZWxlY3Rpb25cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubXMtc2VsZWN0YWJsZSAubXMtbGlzdCcpLnByZXBlbmQoJCh0aGlzKS5jbG9uZSgpLnJlbW92ZUNsYXNzKFwibXMtZWxlbS1zZWxlY3Rpb25cIikuYWRkQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGFibGVcIikpXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWREb2N1bWVudCcsICQodGhpcykuYXR0cihcImlkXCIpKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZFByZWluc2NyaXB0aW9uJywgaWRfcHJlaW5zY3JpcHRpb24pO1xyXG4gICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9kZWxldGVkb2N1bWVudHNfcHJlaW5zXCIsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdlcnJvcicsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcjYXR0X3ByZWluc2NyaXB0aW9uJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHdpbmRvdy5vcGVuKCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9hdHRlc3RhdGlvbl9wcmVpbnNjcmlwdGlvbi8nK2lkX3ByZWluc2NyaXB0aW9uLCAnX2JsYW5rJyk7XHJcbn0pXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnI2NmY19wcmVpbnNjcmlwdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbignL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vY2ZjX3ByZWluc2NyaXB0aW9uLycraWRfcHJlaW5zY3JpcHRpb24sICdfYmxhbmsnKTtcclxufSlcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcjbW9kaWZpZXInLGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJCgnI21vZGlmaWVyX21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG59KVxyXG5cclxuJChcImJvZHlcIikub24oJ3N1Ym1pdCcsIFwiI2Zvcm1fbW9kaWZpZXJcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGFsZXJ0KCdldCcpO1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ01lcmNpIGRlIENob2lzaXIgVW4gRXR1ZGlhbnQhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciByZXMgPSBjb25maXJtKCdWb3VzIHZvdWxleiB2cmFpbWVudCBtb2RpZmllciBjZXR0ZSBlbnJlZ2lzdHJlbWVudCA/Jyk7XHJcbiAgICBpZihyZXMgPT0gMSl7XHJcbiAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKCcjZm9ybV9tb2RpZmllcicpWzBdKTtcclxuICAgIC8vICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjbW9kaWZpZXJfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXHJcbiAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyX21vZGFsIGJ1dHRvbiBpXCIpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2VkaXRfaW5mb3NfcHJlaW5zLycraWRfcHJlaW5zY3JpcHRpb24sIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+XHJcbiAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgaWRfcHJlaW5zY3JpcHRpb24gPSBmYWxzZTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcclxuICAgICAgfWNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcclxuICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHN0eWxlPVwid2lkdGg6IDk4JTttYXJnaW46IDAgYXV0bztcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgIH0sIDI1MDApICBcclxuICAgIH1cclxuICB9KVxyXG4gIFxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCcjZXh0cmFjdGlvbicsIGZ1bmN0aW9uICgpe1xyXG4gICAgd2luZG93Lm9wZW4oJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2V4dHJhY3Rpb25fcHJlaW5zJywgJ19ibGFuaycpO1xyXG4gIH0pXHJcbiAgJCgnYm9keScpLm9uKCdjbGljaycsJyNpbXByaW1lcl9kb2NzJywgZnVuY3Rpb24gKCl7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnTWVyY2kgZGUgQ2hvaXNpciBVbiBFdHVkaWFudCEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93Lm9wZW4oJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL3ByaW50X2RvY3VtZW50c19wcmVpbnNjcmlwdGlvbi8nK2lkX3ByZWluc2NyaXB0aW9uLCAnX2JsYW5rJyk7XHJcbiAgfSlcclxuICBcclxuJCgnLm5hdi1waWxscyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICQodGhpcykudGFiKCdzaG93Jyk7XHJcbn0pXHJcblxyXG59KVxyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCA9ICdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZEluZGV4O1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EX0lOREVYID0gJ2ZpbmRJbmRleCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkRfSU5ERVggaW4gW10pIEFycmF5KDEpW0ZJTkRfSU5ERVhdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRpbmRleFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZEluZGV4KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORF9JTkRFWCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9wcmVpbnNjcmlwdGlvbiIsImlkcHJlaW5zIiwiZnJhaXMiLCJ0YWJsZV9nZXN0aW9uX3ByZWlucyIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJsYW5ndWFnZSIsInVybCIsImxvYWRfZXR1ZF9pbmZvIiwiaWNvbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJheGlvcyIsImdldCIsInRoZW4iLCJzdWNjZXNzIiwiaHRtbCIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibG9hZF9mcmFpc19wcmVpbnMiLCJsaXN0Iiwic2VsZWN0MiIsImNvZGVmYWN0dXJlIiwiZ2V0RG9jdW1lbnRzUHJlaW5zIiwicmVxdWVzdCIsImRvY3VtZW50cyIsImRvY3VtZW50c0V4aXN0cyIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImZpcmUiLCJ0aXRsZSIsIm9uIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJkcmF3IiwiaWRfZm9ybWF0aW9uIiwicHJldmVudERlZmF1bHQiLCJtb2RhbCIsImF0dHIiLCJ2YWx1ZSIsImNzcyIsImZyYWlzSWQiLCJmcmFpc1RleHQiLCJ0ZXh0IiwicHJpeCIsIm9yZ2FuIiwib3JnYW5pc21lX2lkIiwiaXNOdW1lcmljIiwicHVzaCIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJkZXNpZ25hdGlvbiIsIm1vbnRhbnQiLCJvcmdhbmlzbWUiLCJyYXdGcmFpcyIsIm1hcCIsImYiLCJpIiwiZmluZEluZGV4Iiwic3BsaWNlIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwicHJlcGVuZCIsImVtcHR5IiwicmVsb2FkIiwid2luZG93Iiwib3BlbiIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJpbnB1dCIsImlzIiwiaW5kZXhPZiIsImdldEV0dWRpYW50SW5mb3MiLCJoYXNDbGFzcyIsImNsb25lIiwicmVzIiwiY29uZmlybSIsIm1vZGFsQWxlcnQiLCJ0YWIiXSwic291cmNlUm9vdCI6IiJ9