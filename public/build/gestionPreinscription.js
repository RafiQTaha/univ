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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdGlvblByZWluc2NyaXB0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDOUIsTUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVztBQUNyQkMsSUFBQUEsS0FBSyxFQUFFLElBRGM7QUFFckJDLElBQUFBLFFBQVEsRUFBRSxTQUZXO0FBR3JCQyxJQUFBQSxpQkFBaUIsRUFBRSxLQUhFO0FBSXJCQyxJQUFBQSxLQUFLLEVBQUUsSUFKYztBQUtyQkMsSUFBQUEsZ0JBQWdCLEVBQUUsSUFMRztBQU1yQkMsSUFBQUEsT0FBTyxFQUFFLGlCQUFDTCxLQUFELEVBQVc7QUFDaEJBLE1BQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1MsU0FBMUM7QUFDQVAsTUFBQUEsS0FBSyxDQUFDTSxnQkFBTixDQUF1QixZQUF2QixFQUFxQ1IsSUFBSSxDQUFDVSxXQUExQztBQUNIO0FBVG9CLEdBQVgsQ0FBZDtBQVdBLE1BQUlDLGlCQUFpQixHQUFHLEtBQXhCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWixDQWQ4QixDQWU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUlDLG9CQUFvQixHQUFHbEIsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NtQixTQUF0QyxDQUFnRDtBQUN2RUMsSUFBQUEsVUFBVSxFQUFFLENBQ1IsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLGNBQXRCLENBRFEsRUFFUixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsS0FBdEIsQ0FGUSxDQUQyRDtBQUt2RUMsSUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksTUFBSixDQUFELENBTGdFO0FBTXZFQyxJQUFBQSxJQUFJLEVBQUUsc0RBTmlFO0FBT3ZFQyxJQUFBQSxVQUFVLEVBQUUsSUFQMkQ7QUFRdkVDLElBQUFBLFVBQVUsRUFBRSxJQVIyRDtBQVN2RUMsSUFBQUEsV0FBVyxFQUFFLElBVDBEO0FBVXZFQyxJQUFBQSxPQUFPLEVBQUUsSUFWOEQ7QUFXdkVDLElBQUFBLFlBQVksRUFBRSx3QkFBWTtBQUN0QlgsTUFBQUEsUUFBUSxDQUFDWSxPQUFULENBQWlCLFVBQUNDLENBQUQsRUFBTztBQUNwQjdCLFFBQUFBLENBQUMsQ0FBQyxhQUFhNkIsQ0FBZCxDQUFELENBQ0NDLElBREQsQ0FDTSxPQUROLEVBRUNDLElBRkQsQ0FFTSxTQUZOLEVBRWlCLElBRmpCO0FBR0gsT0FKRDtBQUtILEtBakJzRTtBQWtCdkVDLElBQUFBLFFBQVEsRUFBRTtBQUNOQyxNQUFBQSxHQUFHLEVBQUU7QUFEQztBQWxCNkQsR0FBaEQsQ0FBM0I7O0FBdUJBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixRQUFHbkIsaUJBQUgsRUFBcUI7QUFDakIsVUFBTW9CLEtBQUksR0FBR25DLENBQUMsQ0FBQyx5QkFBRCxDQUFkOztBQUNDbUMsTUFBQUEsS0FBSSxDQUFDQyxXQUFMLENBQWlCLG1CQUFqQixFQUFzQ0MsUUFBdEMsQ0FBK0Msb0JBQS9DOztBQUNEQyxNQUFBQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxpREFBK0N4QixpQkFBekQsRUFDQ3lCLElBREQsQ0FDTSxVQUFBQyxPQUFPLEVBQUk7QUFDYnpDLFFBQUFBLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDMEMsSUFBbEMsQ0FBdUNELE9BQU8sQ0FBQ0UsSUFBL0M7O0FBQ0FSLFFBQUFBLEtBQUksQ0FBQ0MsV0FBTCxDQUFpQixvQkFBakIsRUFBdUNDLFFBQXZDLENBQWdELG1CQUFoRCxFQUZhLENBR2I7O0FBQ0gsT0FMRCxXQU1PLFVBQUFPLEdBQUcsRUFBSTtBQUNWQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjs7QUFDQVQsUUFBQUEsS0FBSSxDQUFDQyxXQUFMLENBQWlCLG9CQUFqQixFQUF1Q0MsUUFBdkMsQ0FBZ0QsbUJBQWhEO0FBQ0gsT0FURDtBQVVIO0FBQ0osR0FmRDs7QUFpQkEsTUFBTVUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCLFFBQUdoQyxpQkFBSCxFQUFxQjtBQUNqQjtBQUNBdUIsTUFBQUEsS0FBSyxDQUFDQyxHQUFOLENBQVUsMkNBQXlDeEIsaUJBQW5ELEVBQ0N5QixJQURELENBQ00sVUFBQUMsT0FBTyxFQUFJO0FBQ2J6QyxRQUFBQSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQzBDLElBQW5DLENBQXdDRCxPQUFPLENBQUNFLElBQVIsQ0FBYUssSUFBckQsRUFBMkRDLE9BQTNEO0FBQ0FqRCxRQUFBQSxDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQzBDLElBQWpDLENBQXNDRCxPQUFPLENBQUNFLElBQVIsQ0FBYU8sV0FBbkQsRUFGYSxDQUdiO0FBQ0gsT0FMRCxXQU1PLFVBQUFOLEdBQUcsRUFBSTtBQUNWQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBVCxRQUFBQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsb0JBQWpCLEVBQXVDQyxRQUF2QyxDQUFnRCxtQkFBaEQ7QUFDSCxPQVREO0FBVUg7QUFDSixHQWREOztBQWVBLE1BQU1jLGtCQUFrQjtBQUFBLHVFQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUViaEIsY0FBQUEsTUFGYSxHQUVObkMsQ0FBQyxDQUFDLHVCQUFELENBRks7O0FBR25CbUMsY0FBQUEsTUFBSSxDQUFDQyxXQUFMLENBQWlCLFVBQWpCLEVBQTZCQyxRQUE3QixDQUFzQyxvQkFBdEM7O0FBSG1CO0FBQUEscUJBSUdDLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG1EQUFpRHhCLGlCQUEzRCxDQUpIOztBQUFBO0FBSWJxQyxjQUFBQSxPQUphO0FBQUE7QUFBQSxxQkFLQUEsT0FBTyxDQUFDVCxJQUxSOztBQUFBO0FBS2JBLGNBQUFBLElBTGE7QUFNbkIzQyxjQUFBQSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QjBDLElBQTdCLENBQWtDQyxJQUFJLENBQUNVLFNBQXZDO0FBQ0FyRCxjQUFBQSxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QjBDLElBQTVCLENBQWlDQyxJQUFJLENBQUNXLGVBQXRDOztBQUNBbkIsY0FBQUEsTUFBSSxDQUFDRSxRQUFMLENBQWMsVUFBZCxFQUEwQkQsV0FBMUIsQ0FBc0Msb0JBQXRDOztBQVJtQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVVibUIsY0FBQUEsT0FWYSxHQVVILFlBQU1DLFFBQU4sQ0FBZWIsSUFWWjtBQVduQkUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGNBQW1CLFlBQU1VLFFBQXpCO0FBQ0FyRCxjQUFBQSxLQUFLLENBQUNzRCxJQUFOLENBQVc7QUFDUHRCLGdCQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQdUIsZ0JBQUFBLEtBQUssRUFBRTtBQUZBLGVBQVg7QUFJQXZCLGNBQUFBLElBQUksQ0FBQ0UsUUFBTCxDQUFjLFVBQWQsRUFBMEJELFdBQTFCLENBQXNDLG9CQUF0Qzs7QUFoQm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWxCZSxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsS0FBeEI7O0FBbUJBbkQsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JpRCxPQUFwQjtBQUNBakQsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmlELE9BQWhCO0FBQ0FqRCxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFpRCxPQUFiO0FBQ0FqRCxFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjJELEVBQXBCLENBQXVCLFFBQXZCLHVFQUFpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJDLFlBQUFBLE9BRHVCLEdBQ2I1RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE2RCxHQUFSLEVBRGE7QUFFN0IzQyxZQUFBQSxvQkFBb0IsQ0FBQzRDLE9BQXJCLEdBQStCQyxNQUEvQixDQUFzQyxFQUF0QztBQUVBN0MsWUFBQUEsb0JBQW9CLENBQUM0QyxPQUFyQixDQUE2QixDQUE3QixFQUFnQ0MsTUFBaEMsQ0FBdUNILE9BQXZDLEVBQWdESSxJQUFoRDtBQUNJUixZQUFBQSxRQUx5QixHQUtkLEVBTGM7O0FBQUEsa0JBTTFCSSxPQUFPLElBQUksRUFOZTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQU9IdEIsS0FBSyxDQUFDQyxHQUFOLENBQVUsb0JBQWtCcUIsT0FBNUIsQ0FQRzs7QUFBQTtBQU9uQlIsWUFBQUEsT0FQbUI7QUFRekJJLFlBQUFBLFFBQVEsR0FBR0osT0FBTyxDQUFDVCxJQUFuQjs7QUFSeUI7QUFVN0IzQyxZQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEMsSUFBaEIsQ0FBcUJjLFFBQXJCLEVBQStCUCxPQUEvQjs7QUFWNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBakM7QUFZQWpELEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IyRCxFQUFoQixDQUFtQixRQUFuQix1RUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CTSxZQUFBQSxZQURtQixHQUNKakUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkQsR0FBUixFQURJO0FBRXpCM0MsWUFBQUEsb0JBQW9CLENBQUM0QyxPQUFyQixDQUE2QixDQUE3QixFQUFnQ0MsTUFBaEMsQ0FBdUMsRUFBdkMsRUFBMkNDLElBQTNDO0FBQ0E5QyxZQUFBQSxvQkFBb0IsQ0FBQzRDLE9BQXJCLENBQTZCLENBQTdCLEVBQWdDQyxNQUFoQyxDQUF1Q0UsWUFBdkMsRUFBcURELElBQXJEOztBQUh5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3QjtBQUtBaEUsRUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhMkQsRUFBYixDQUFnQixRQUFoQix1RUFBMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QnpDLFlBQUFBLG9CQUFvQixDQUFDNEMsT0FBckIsQ0FBNkIsQ0FBN0IsRUFBZ0NDLE1BQWhDLENBQXVDL0QsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkQsR0FBUixFQUF2QyxFQUFzREcsSUFBdEQ7O0FBRHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCO0FBSUFoRSxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyRCxFQUFWLENBQWEsT0FBYixFQUFxQix1QkFBckIsRUFBNkMsVUFBVTlCLENBQVYsRUFBYTtBQUN0REEsSUFBQUEsQ0FBQyxDQUFDcUMsY0FBRjs7QUFDQSxRQUFHLENBQUNuRCxpQkFBSixFQUFzQjtBQUNsQlosTUFBQUEsS0FBSyxDQUFDc0QsSUFBTixDQUFXO0FBQ1R0QixRQUFBQSxJQUFJLEVBQUUsT0FERztBQUVUdUIsUUFBQUEsS0FBSyxFQUFFO0FBRkUsT0FBWDtBQUlBO0FBQ0g7O0FBQ0QxRCxJQUFBQSxDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ21FLEtBQWpDLENBQXVDLE1BQXZDO0FBQ0gsR0FWRDtBQVdBbkUsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkQsRUFBVixDQUFhLFFBQWIsRUFBc0IsK0JBQXRCLEVBQXNELFVBQVU5QixDQUFWLEVBQWE7QUFDL0RBLElBQUFBLENBQUMsQ0FBQ3FDLGNBQUY7QUFDQSxRQUFJakQsS0FBSyxHQUFHakIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFROEIsSUFBUixDQUFhLFdBQWIsRUFBMEJzQyxJQUExQixDQUErQixTQUEvQixDQUFaO0FBQ0FwRSxJQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQzZELEdBQXJDLENBQXlDNUMsS0FBekM7QUFDSCxHQUpEO0FBS0FqQixFQUFBQSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQzJELEVBQW5DLENBQXNDLFFBQXRDO0FBQUEsd0VBQWdELGtCQUFnQjlCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM1Q0EsY0FBQUEsQ0FBQyxDQUFDcUMsY0FBRjs7QUFENEMsb0JBRXhDLEtBQUtHLEtBQUwsSUFBYyxDQUYwQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUdsQi9CLEtBQUssQ0FBQ0MsR0FBTixDQUFVLDRCQUFWLENBSGtCOztBQUFBO0FBR2xDYSxjQUFBQSxPQUhrQztBQUl4Q0ksY0FBQUEsUUFBUSxHQUFHSixPQUFPLENBQUNULElBQW5CO0FBQ0EzQyxjQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjBDLElBQXhCLENBQTZCYyxRQUE3QixFQUF1Q1AsT0FBdkM7QUFDQWpELGNBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJzRSxHQUFuQixDQUF1QixTQUF2QixFQUFpQyxPQUFqQztBQU53QztBQUFBOztBQUFBO0FBUXhDdEUsY0FBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IwQyxJQUF4QixDQUE2QixFQUE3QjtBQUNBMUMsY0FBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQnNFLEdBQW5CLENBQXVCLFNBQXZCLEVBQWlDLE1BQWpDOztBQVR3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFoRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBdEUsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkQsRUFBVixDQUFhLE9BQWIsRUFBcUIsaUJBQXJCLEVBQXVDLFlBQVk7QUFDL0MsUUFBSVksT0FBTyxHQUFJdkUsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUM2RCxHQUFuQyxFQUFmO0FBQ0EsUUFBSVcsU0FBUyxHQUFJeEUsQ0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUM4QixJQUFuQyxDQUF3QyxXQUF4QyxFQUFxRDJDLElBQXJELEVBQWpCO0FBQ0EsUUFBSUMsSUFBSSxHQUFJMUUsQ0FBQyxDQUFDLGlDQUFELENBQUQsQ0FBcUM2RCxHQUFyQyxFQUFaO0FBQ0EsUUFBSWMsS0FBSyxHQUFJM0UsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0I4QixJQUF4QixDQUE2QixXQUE3QixFQUEwQzJDLElBQTFDLEVBQWI7QUFDQSxRQUFJRyxZQUFZLEdBQUk1RSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QjZELEdBQXhCLEVBQXBCLENBTCtDLENBTS9DOztBQUNBLFFBQUksQ0FBQzdELENBQUMsQ0FBQzZFLFNBQUYsQ0FBWU4sT0FBWixDQUFELElBQXlCRyxJQUFJLElBQUksRUFBckMsRUFBeUM7QUFDckM7QUFDSDs7QUFDRCxRQUFJMUUsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUM2RCxHQUFqQyxNQUEwQyxDQUE5QyxFQUFpRDtBQUM3Q2UsTUFBQUEsWUFBWSxHQUFHLENBQWY7QUFDQUQsTUFBQUEsS0FBSyxHQUFHLFFBQVI7QUFDSCxLQUhELE1BR00sSUFBR0MsWUFBWSxJQUFJLEVBQW5CLEVBQXNCO0FBQ3hCO0FBQ0g7O0FBQ0QzRCxJQUFBQSxLQUFLLENBQUM2RCxJQUFOLENBQVc7QUFDUEMsTUFBQUEsS0FBSyxFQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBWUQsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLElBQWpCLEdBQXlCLENBQXBDLENBREQ7QUFFUEMsTUFBQUEsRUFBRSxFQUFFWixPQUZHO0FBR1BhLE1BQUFBLFdBQVcsRUFBRVosU0FITjtBQUlQYSxNQUFBQSxPQUFPLEVBQUVYLElBSkY7QUFLUEUsTUFBQUEsWUFBWSxFQUFFQSxZQUxQO0FBTVBVLE1BQUFBLFNBQVMsRUFBRVg7QUFOSixLQUFYO0FBUUFZLElBQUFBLFFBQVE7QUFDWCxHQXpCRDs7QUEwQkksTUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixRQUFJN0MsSUFBSSxHQUFHLEVBQVg7QUFDQXpCLElBQUFBLEtBQUssQ0FBQ3VFLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNoQmhELE1BQUFBLElBQUksc0RBRU1nRCxDQUFDLEdBQUcsQ0FGVix3Q0FHTUQsQ0FBQyxDQUFDTCxXQUhSLHdDQUlNSyxDQUFDLENBQUNKLE9BSlIsd0NBS01JLENBQUMsQ0FBQ0gsU0FMUix3RkFNc0RHLENBQUMsQ0FBQ1YsS0FOeEQsNkVBQUo7QUFTSCxLQVZEO0FBV0EvRSxJQUFBQSxDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQzBDLElBQXBDLENBQXlDQSxJQUF6QztBQUNILEdBZEQ7O0FBZUExQyxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyRCxFQUFWLENBQWEsT0FBYixFQUFzQixlQUF0QixFQUF1QyxZQUFZO0FBQUE7O0FBQy9DLFFBQU1vQixLQUFLLEdBQUc5RCxLQUFLLENBQUMwRSxTQUFOLENBQWdCLFVBQUExRSxLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDOEQsS0FBTixJQUFlL0UsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFRb0UsSUFBUixDQUFhLElBQWIsQ0FBbkI7QUFBQSxLQUFyQixDQUFkO0FBQ0FuRCxJQUFBQSxLQUFLLENBQUMyRSxNQUFOLENBQWFiLEtBQWIsRUFBbUIsQ0FBbkI7QUFDQVEsSUFBQUEsUUFBUTtBQUNYLEdBSkQ7QUFNQXZGLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJELEVBQVYsQ0FBYSxPQUFiLEVBQXNCLGNBQXRCO0FBQUEsd0VBQXNDLGtCQUFnQjlCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQ0EsY0FBQUEsQ0FBQyxDQUFDcUMsY0FBRjs7QUFEa0Msb0JBRS9CakQsS0FBSyxDQUFDNEUsTUFBTixHQUFlLENBRmdCO0FBQUE7QUFBQTtBQUFBOztBQUc5QjFGLGNBQUFBLEtBQUssQ0FBQ3NELElBQU4sQ0FBVztBQUNYdEIsZ0JBQUFBLElBQUksRUFBRSxPQURLO0FBRVh1QixnQkFBQUEsS0FBSyxFQUFFO0FBRkksZUFBWDtBQUg4Qjs7QUFBQTtBQVNsQ2IsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk3QixLQUFaLEVBVGtDLENBVWxDOztBQUNNa0IsY0FBQUEsSUFYNEIsR0FXckJuQyxDQUFDLENBQUMsZ0JBQUQsQ0FYb0I7QUFZbENtQyxjQUFBQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsaUJBQWpCLEVBQW9DQyxRQUFwQyxDQUE2QyxvQkFBN0M7QUFDSXlELGNBQUFBLFFBYjhCLEdBYW5CLElBQUlDLFFBQUosRUFibUI7QUFjbENELGNBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUF5QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVqRixLQUFmLENBQXpCO0FBZGtDO0FBQUE7QUFBQSxxQkFnQlJxQixLQUFLLENBQUM2RCxJQUFOLENBQVcsc0NBQW9DcEYsaUJBQS9DLEVBQWtFK0UsUUFBbEUsQ0FoQlE7O0FBQUE7QUFnQnhCMUMsY0FBQUEsT0FoQndCO0FBQUE7QUFBQSxxQkFpQlhBLE9BQU8sQ0FBQ1QsSUFqQkc7O0FBQUE7QUFpQnhCQSxjQUFBQSxJQWpCd0I7QUFrQjlCM0MsY0FBQUEsQ0FBQyxDQUFDLHlDQUFELENBQUQsQ0FBNkNvRyxPQUE3QztBQUtBakUsY0FBQUEsSUFBSSxDQUFDRSxRQUFMLENBQWMsaUJBQWQsRUFBaUNELFdBQWpDLENBQTZDLG9CQUE3QztBQUNBcEMsY0FBQUEsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NxRyxLQUFwQztBQUNBbkYsY0FBQUEsb0JBQW9CLENBQUNJLElBQXJCLENBQTBCZ0YsTUFBMUIsQ0FBaUMsSUFBakMsRUFBc0MsS0FBdEM7QUFDQXJGLGNBQUFBLEtBQUssR0FBRyxFQUFSO0FBQ0FzRixjQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxxQ0FBbUM3RCxJQUEvQyxFQUFxRCxRQUFyRDtBQTNCOEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE2QnhCWSxjQUFBQSxPQTdCd0IsR0E2QmQsYUFBTUMsUUFBTixDQUFlYixJQTdCRDtBQThCOUJFLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUFtQixhQUFNVSxRQUF6QjtBQUNBeEQsY0FBQUEsQ0FBQyxDQUFDLHlDQUFELENBQUQsQ0FBNkNvRyxPQUE3Qyw2Q0FDdUM3QyxPQUR2QztBQUdBcEIsY0FBQUEsSUFBSSxDQUFDRSxRQUFMLENBQWMsaUJBQWQsRUFBaUNELFdBQWpDLENBQTZDLG9CQUE3Qzs7QUFsQzhCO0FBb0NsQ3FFLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2J6RyxnQkFBQUEsQ0FBQyxDQUFDLGdEQUFELENBQUQsQ0FBb0QwRyxNQUFwRDtBQUNILGVBRlMsRUFFUCxJQUZPLENBQVY7O0FBcENrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF0Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXlDQTFHLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJELEVBQVYsQ0FBYSxPQUFiLEVBQXFCLDJDQUFyQixFQUFpRSxVQUFVOUIsQ0FBVixFQUFhO0FBQzFFQSxJQUFBQSxDQUFDLENBQUNxQyxjQUFGO0FBQ0EsUUFBTXlDLEtBQUssR0FBRzNHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUThCLElBQVIsQ0FBYSxPQUFiLENBQWQ7O0FBQ0EsUUFBRzZFLEtBQUssQ0FBQ0MsRUFBTixDQUFTLFVBQVQsQ0FBSCxFQUF3QjtBQUNwQkQsTUFBQUEsS0FBSyxDQUFDNUUsSUFBTixDQUFXLFNBQVgsRUFBcUIsS0FBckI7QUFDQSxVQUFNZ0QsS0FBSyxHQUFHL0QsUUFBUSxDQUFDNkYsT0FBVCxDQUFpQkYsS0FBSyxDQUFDdkMsSUFBTixDQUFXLElBQVgsQ0FBakIsQ0FBZDtBQUNBcEQsTUFBQUEsUUFBUSxDQUFDNEUsTUFBVCxDQUFnQmIsS0FBaEIsRUFBc0IsQ0FBdEI7QUFDSCxLQUpELE1BSUs7QUFDRDRCLE1BQUFBLEtBQUssQ0FBQzVFLElBQU4sQ0FBVyxTQUFYLEVBQXFCLElBQXJCO0FBQ0FmLE1BQUFBLFFBQVEsQ0FBQzhELElBQVQsQ0FBYzZCLEtBQUssQ0FBQ3ZDLElBQU4sQ0FBVyxJQUFYLENBQWQ7QUFDSDs7QUFDRHZCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZOUIsUUFBWjtBQUNILEdBWkQ7O0FBYUEsTUFBTThGLGdCQUFnQjtBQUFBLHdFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQjlHLGNBQUFBLENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDMEMsSUFBdEMsQ0FBMkMsRUFBM0M7QUFDQTFDLGNBQUFBLENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DMEMsSUFBcEMsQ0FBeUMsRUFBekM7QUFDQTFDLGNBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDMEMsSUFBdkMsQ0FBNEMsRUFBNUM7QUFDQTFDLGNBQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCMEMsSUFBN0IsQ0FBa0MsRUFBbEM7QUFDTVAsY0FBQUEsSUFMZSxHQUtSbkMsQ0FBQyxDQUFDLGFBQUQsQ0FMTztBQU1yQm1DLGNBQUFBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQixTQUFqQixFQUE0QkMsUUFBNUIsQ0FBcUMsb0JBQXJDO0FBTnFCO0FBQUE7QUFBQSxxQkFRQ0MsS0FBSyxDQUFDQyxHQUFOLENBQVUsb0RBQWtEeEIsaUJBQTVELENBUkQ7O0FBQUE7QUFRZnFDLGNBQUFBLE9BUmU7QUFTZlQsY0FBQUEsSUFUZSxHQVNSUyxPQUFPLENBQUNULElBVEE7QUFVckIzQyxjQUFBQSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUFzQzBDLElBQXRDLENBQTJDQyxJQUFJLENBQUMsaUJBQUQsQ0FBL0M7QUFDQTNDLGNBQUFBLENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DMEMsSUFBcEMsQ0FBeUNDLElBQUksQ0FBQyxlQUFELENBQTdDO0FBQ0EzQyxjQUFBQSxDQUFDLENBQUMsbUNBQUQsQ0FBRCxDQUF1QzBDLElBQXZDLENBQTRDQyxJQUFJLENBQUMsa0JBQUQsQ0FBaEQ7QUFDQTNDLGNBQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCMEMsSUFBN0IsQ0FBa0NDLElBQUksQ0FBQyxRQUFELENBQXRDO0FBQ0EzQyxjQUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVlpRCxPQUFaO0FBQ0FkLGNBQUFBLElBQUksQ0FBQ0UsUUFBTCxDQUFjLFNBQWQsRUFBeUJELFdBQXpCLENBQXFDLG9CQUFyQyxFQWZxQixDQWdCckI7O0FBaEJxQjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFoQjBFLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFzQkE5RyxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyRCxFQUFWLENBQWEsVUFBYixFQUF3QiwyQ0FBeEIsRUFBb0UsVUFBVTlCLENBQVYsRUFBYTtBQUM3RUEsSUFBQUEsQ0FBQyxDQUFDcUMsY0FBRixHQUQ2RSxDQUU3RTs7QUFDQSxRQUFHbEUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0csUUFBUixDQUFpQixrQkFBakIsQ0FBSCxFQUF5QztBQUNyQy9HLE1BQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9DLFdBQVIsQ0FBb0Isa0JBQXBCO0FBQ0FyQixNQUFBQSxpQkFBaUIsR0FBRyxJQUFwQjtBQUNILEtBSEQsTUFHTztBQUNIZixNQUFBQSxDQUFDLENBQUMsMkNBQUQsQ0FBRCxDQUErQ29DLFdBQS9DLENBQTJELGtCQUEzRDtBQUNBcEMsTUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUMsUUFBUixDQUFpQixrQkFBakI7QUFDQXRCLE1BQUFBLGlCQUFpQixHQUFHZixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvRSxJQUFSLENBQWEsSUFBYixDQUFwQjtBQUNBbEMsTUFBQUEsY0FBYztBQUNkYSxNQUFBQSxpQkFBaUI7QUFDakJJLE1BQUFBLGtCQUFrQjtBQUNsQjJELE1BQUFBLGdCQUFnQjtBQUNuQjs7QUFDRGpFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZL0IsaUJBQVo7QUFDSCxHQWhCRDtBQWtCSmYsRUFBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQjJELEVBQWpCLENBQW9CLE9BQXBCO0FBQUEsd0VBQTZCLGtCQUFPOUIsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekJBLGNBQUFBLENBQUMsQ0FBQ3FDLGNBQUY7O0FBRHlCLGtCQUVyQm5ELGlCQUZxQjtBQUFBO0FBQUE7QUFBQTs7QUFHckJaLGNBQUFBLEtBQUssQ0FBQ3NELElBQU4sQ0FBVztBQUNUdEIsZ0JBQUFBLElBQUksRUFBRSxPQURHO0FBRVR1QixnQkFBQUEsS0FBSyxFQUFFO0FBRkUsZUFBWDtBQUhxQjs7QUFBQTtBQVNuQnZCLGNBQUFBLElBVG1CLEdBU1puQyxDQUFDLENBQUMsZUFBRCxDQVRXO0FBVXpCbUMsY0FBQUEsSUFBSSxDQUFDQyxXQUFMLENBQWlCLGlCQUFqQixFQUFvQ0MsUUFBcEMsQ0FBNkMsb0JBQTdDO0FBQ0l5RCxjQUFBQSxRQVhxQixHQVdWLElBQUlDLFFBQUosRUFYVTtBQVl6QkQsY0FBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCLFVBQWhCLEVBQTRCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWxGLFFBQWYsQ0FBNUI7QUFaeUI7QUFBQTtBQUFBLHFCQWNDc0IsS0FBSyxDQUFDNkQsSUFBTixDQUFXLG1EQUFYLEVBQWdFTCxRQUFoRSxDQWREOztBQUFBO0FBY2YxQyxjQUFBQSxPQWRlO0FBQUE7QUFBQSxxQkFlRkEsT0FBTyxDQUFDVCxJQWZOOztBQUFBO0FBZWZBLGNBQUFBLElBZmU7QUFnQnJCeEMsY0FBQUEsS0FBSyxDQUFDc0QsSUFBTixDQUFXO0FBQ1B0QixnQkFBQUEsSUFBSSxFQUFFLFNBREM7QUFFUHVCLGdCQUFBQSxLQUFLLEVBQUU7QUFGQSxlQUFYO0FBSUF2QixjQUFBQSxJQUFJLENBQUNFLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMsb0JBQTdDO0FBQ0FsQixjQUFBQSxvQkFBb0IsQ0FBQ0ksSUFBckIsQ0FBMEJnRixNQUExQixDQUFpQyxJQUFqQyxFQUFzQyxLQUF0QztBQXJCcUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF1QmYvQyxjQUFBQSxPQXZCZSxHQXVCTCxhQUFNQyxRQUFOLENBQWViLElBdkJWO0FBd0JyQkUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQW1CLGFBQU1VLFFBQXpCO0FBQ0FyRCxjQUFBQSxLQUFLLENBQUNzRCxJQUFOLENBQVc7QUFDUHRCLGdCQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQdUIsZ0JBQUFBLEtBQUssRUFBRTtBQUZBLGVBQVg7O0FBekJxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStCQTFELEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IyRCxFQUFoQixDQUFtQixPQUFuQjtBQUFBLHdFQUE0QixrQkFBTzlCLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hCQSxjQUFBQSxDQUFDLENBQUNxQyxjQUFGOztBQUR3QixvQkFFckJsRCxRQUFRLENBQUM2RSxNQUFULEdBQWtCLENBRkc7QUFBQTtBQUFBO0FBQUE7O0FBR3BCMUYsY0FBQUEsS0FBSyxDQUFDc0QsSUFBTixDQUFXO0FBQ1R0QixnQkFBQUEsSUFBSSxFQUFFLE9BREc7QUFFVHVCLGdCQUFBQSxLQUFLLEVBQUU7QUFGRSxlQUFYO0FBSG9COztBQUFBO0FBU2xCdkIsY0FBQUEsSUFUa0IsR0FTWG5DLENBQUMsQ0FBQyxjQUFELENBVFU7QUFVeEJtQyxjQUFBQSxJQUFJLENBQUNDLFdBQUwsQ0FBaUIsVUFBakIsRUFBNkJDLFFBQTdCLENBQXNDLG9CQUF0QztBQUVJeUQsY0FBQUEsUUFab0IsR0FZVCxJQUFJQyxRQUFKLEVBWlM7QUFheEJELGNBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFoQixFQUE0QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVsRixRQUFmLENBQTVCO0FBYndCO0FBQUE7QUFBQSxxQkFlRXNCLEtBQUssQ0FBQzZELElBQU4sQ0FBVyxrREFBWCxFQUErREwsUUFBL0QsQ0FmRjs7QUFBQTtBQWVkMUMsY0FBQUEsT0FmYztBQUFBO0FBQUEscUJBZ0JEQSxPQUFPLENBQUNULElBaEJQOztBQUFBO0FBZ0JkQSxjQUFBQSxJQWhCYztBQWlCcEJ4QyxjQUFBQSxLQUFLLENBQUNzRCxJQUFOLENBQVc7QUFDUHRCLGdCQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQdUIsZ0JBQUFBLEtBQUssRUFBRTtBQUZBLGVBQVg7QUFJQXZCLGNBQUFBLElBQUksQ0FBQ0UsUUFBTCxDQUFjLFVBQWQsRUFBMEJELFdBQTFCLENBQXNDLG9CQUF0QztBQUVBbEIsY0FBQUEsb0JBQW9CLENBQUNJLElBQXJCLENBQTBCZ0YsTUFBMUIsQ0FBaUMsSUFBakMsRUFBc0MsS0FBdEM7QUF2Qm9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBeUJkL0MsY0FBQUEsT0F6QmMsR0F5QkosYUFBTUMsUUFBTixDQUFlYixJQXpCWDtBQTBCcEJFLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUFtQixhQUFNVSxRQUF6QjtBQUNBckQsY0FBQUEsS0FBSyxDQUFDc0QsSUFBTixDQUFXO0FBQ1B0QixnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUHVCLGdCQUFBQSxLQUFLLEVBQUU7QUFGQSxlQUFYO0FBSUF2QixjQUFBQSxJQUFJLENBQUNFLFFBQUwsQ0FBYyxVQUFkLEVBQTBCRCxXQUExQixDQUFzQyxvQkFBdEM7O0FBL0JvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1DQXBDLEVBQUFBLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCMkQsRUFBekIsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUN2QyxRQUFHLENBQUM1QyxpQkFBSixFQUFzQjtBQUNwQlosTUFBQUEsS0FBSyxDQUFDc0QsSUFBTixDQUFXO0FBQ1R0QixRQUFBQSxJQUFJLEVBQUUsT0FERztBQUVUdUIsUUFBQUEsS0FBSyxFQUFFO0FBRkUsT0FBWDtBQUlBO0FBQ0Q7O0FBQ0QxRCxJQUFBQSxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0Qm1FLEtBQTVCLENBQWtDLE1BQWxDO0FBRUgsR0FWRDtBQVdBbkUsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkQsRUFBVixDQUFhLE9BQWIsRUFBc0IscUJBQXRCLHVFQUE2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekMzRCxZQUFBQSxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0Qm9HLE9BQTVCLENBQW9DcEcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0gsS0FBUixHQUFnQjVFLFdBQWhCLENBQTRCLG9CQUE1QixFQUFrREMsUUFBbEQsQ0FBMkQsbUJBQTNELENBQXBDO0FBQ0l5RCxZQUFBQSxRQUZxQyxHQUUxQixJQUFJQyxRQUFKLEVBRjBCO0FBR3pDRCxZQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsWUFBaEIsRUFBOEJoRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvRSxJQUFSLENBQWEsSUFBYixDQUE5QjtBQUNBMEIsWUFBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCLGtCQUFoQixFQUFvQ2pGLGlCQUFwQztBQUNBZixZQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEwRyxNQUFSO0FBTHlDO0FBQUE7QUFBQSxtQkFPZnBFLEtBQUssQ0FBQzZELElBQU4sQ0FBVyw2Q0FBWCxFQUEwREwsUUFBMUQsQ0FQZTs7QUFBQTtBQU8vQjFDLFlBQUFBLE9BUCtCO0FBQUE7QUFBQSxtQkFRbEJBLE9BQU8sQ0FBQ1QsSUFSVTs7QUFBQTtBQVEvQkEsWUFBQUEsSUFSK0I7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVVyQ3hDLFlBQUFBLEtBQUssQ0FBQ3NELElBQU4sQ0FBVztBQUNQdEIsY0FBQUEsSUFBSSxFQUFFLE9BREM7QUFFUHVCLGNBQUFBLEtBQUssRUFBRTtBQUZBLGFBQVg7O0FBVnFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdDO0FBZ0JBMUQsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkQsRUFBVixDQUFhLE9BQWIsRUFBc0Isb0JBQXRCLHVFQUE0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEMzRCxZQUFBQSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2Qm9HLE9BQTdCLENBQXFDcEcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0gsS0FBUixHQUFnQjVFLFdBQWhCLENBQTRCLG1CQUE1QixFQUFpREMsUUFBakQsQ0FBMEQsb0JBQTFELENBQXJDO0FBQ0l5RCxZQUFBQSxRQUZvQyxHQUV6QixJQUFJQyxRQUFKLEVBRnlCO0FBR3hDRCxZQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsWUFBaEIsRUFBOEJoRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvRSxJQUFSLENBQWEsSUFBYixDQUE5QjtBQUNBMEIsWUFBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCLGtCQUFoQixFQUFvQ2pGLGlCQUFwQztBQUNBZixZQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEwRyxNQUFSO0FBTHdDO0FBQUE7QUFBQSxtQkFPZHBFLEtBQUssQ0FBQzZELElBQU4sQ0FBVyxnREFBWCxFQUE2REwsUUFBN0QsQ0FQYzs7QUFBQTtBQU85QjFDLFlBQUFBLE9BUDhCO0FBQUE7QUFBQSxtQkFRakJBLE9BQU8sQ0FBQ1QsSUFSUzs7QUFBQTtBQVE5QkEsWUFBQUEsSUFSOEI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdwQ3hDLFlBQUFBLEtBQUssQ0FBQ3NELElBQU4sQ0FBVztBQUNQdEIsY0FBQUEsSUFBSSxFQUFFLE9BREM7QUFFUHVCLGNBQUFBLEtBQUssRUFBRTtBQUZBLGFBQVg7O0FBWG9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVDO0FBa0JBMUQsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMkQsRUFBVixDQUFhLE9BQWIsRUFBcUIscUJBQXJCLEVBQTJDLFlBQVk7QUFDbkQsUUFBRyxDQUFDNUMsaUJBQUosRUFBc0I7QUFDbEJaLE1BQUFBLEtBQUssQ0FBQ3NELElBQU4sQ0FBVztBQUNQdEIsUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUHVCLFFBQUFBLEtBQUssRUFBRTtBQUZBLE9BQVg7QUFJQTtBQUNIOztBQUNENkMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksd0RBQXNEekYsaUJBQWxFLEVBQXFGLFFBQXJGO0FBQ0gsR0FURDtBQVdBZixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyRCxFQUFWLENBQWEsT0FBYixFQUFxQixxQkFBckIsRUFBMkMsWUFBWTtBQUNuRCxRQUFHLENBQUM1QyxpQkFBSixFQUFzQjtBQUNsQlosTUFBQUEsS0FBSyxDQUFDc0QsSUFBTixDQUFXO0FBQ1B0QixRQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQdUIsUUFBQUEsS0FBSyxFQUFFO0FBRkEsT0FBWDtBQUlBO0FBQ0g7O0FBQ0Q2QyxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxnREFBOEN6RixpQkFBMUQsRUFBNkUsUUFBN0U7QUFDSCxHQVREO0FBV0FmLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJELEVBQVYsQ0FBYSxPQUFiLEVBQXFCLFdBQXJCLEVBQWlDLFlBQVk7QUFDekMsUUFBRyxDQUFDNUMsaUJBQUosRUFBc0I7QUFDbEJaLE1BQUFBLEtBQUssQ0FBQ3NELElBQU4sQ0FBVztBQUNQdEIsUUFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUHVCLFFBQUFBLEtBQUssRUFBRTtBQUZBLE9BQVg7QUFJQTtBQUNIOztBQUNEMUQsSUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJtRSxLQUFyQixDQUEyQixNQUEzQjtBQUNILEdBVEQ7QUFXQW5FLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJELEVBQVYsQ0FBYSxRQUFiLEVBQXVCLGdCQUF2QjtBQUFBLHlFQUF5QyxtQkFBTzlCLENBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQ0EsY0FBQUEsQ0FBQyxDQUFDcUMsY0FBRixHQURxQyxDQUVyQzs7QUFGcUMsa0JBR2pDbkQsaUJBSGlDO0FBQUE7QUFBQTtBQUFBOztBQUlqQ1osY0FBQUEsS0FBSyxDQUFDc0QsSUFBTixDQUFXO0FBQ1R0QixnQkFBQUEsSUFBSSxFQUFFLE9BREc7QUFFVHVCLGdCQUFBQSxLQUFLLEVBQUU7QUFGRSxlQUFYO0FBSmlDOztBQUFBO0FBVWpDdUQsY0FBQUEsR0FWaUMsR0FVM0JDLE9BQU8sQ0FBQyxzREFBRCxDQVZvQjs7QUFBQSxvQkFXbENELEdBQUcsSUFBSSxDQVgyQjtBQUFBO0FBQUE7QUFBQTs7QUFZL0JuQixjQUFBQSxRQVorQixHQVlwQixJQUFJQyxRQUFKLENBQWEvRixDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixDQUFwQixDQUFiLENBWm9CLEVBYXJDOztBQUNNbUgsY0FBQUEsVUFkK0IsR0FjbEJuSCxDQUFDLENBQUMsb0NBQUQsQ0FkaUI7QUFlbkNtSCxjQUFBQSxVQUFVLENBQUNULE1BQVg7QUFDTXZFLGNBQUFBLE1BaEI2QixHQWdCdEJuQyxDQUFDLENBQUMsMEJBQUQsQ0FoQnFCOztBQWlCbkNtQyxjQUFBQSxNQUFJLENBQUNDLFdBQUwsQ0FBaUIsU0FBakIsRUFBNEJDLFFBQTVCLENBQXFDLG9CQUFyQzs7QUFqQm1DO0FBQUE7QUFBQSxxQkFtQlhDLEtBQUssQ0FBQzZELElBQU4sQ0FBVywrQ0FBNkNwRixpQkFBeEQsRUFBMkUrRSxRQUEzRSxDQW5CVzs7QUFBQTtBQW1CM0IxQyxjQUFBQSxPQW5CMkI7QUFvQjNCSSxjQUFBQSxTQXBCMkIsR0FvQmhCSixPQUFPLENBQUNULElBcEJRO0FBcUJqQzNDLGNBQUFBLENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDb0csT0FBakMsc0dBRVc1QyxTQUZYOztBQUtBckIsY0FBQUEsTUFBSSxDQUFDRSxRQUFMLENBQWMsU0FBZCxFQUF5QkQsV0FBekIsQ0FBcUMscUJBQXJDOztBQUNBckIsY0FBQUEsaUJBQWlCLEdBQUcsS0FBcEI7QUFDQUcsY0FBQUEsb0JBQW9CLENBQUNJLElBQXJCLENBQTBCZ0YsTUFBMUIsQ0FBaUMsSUFBakMsRUFBdUMsS0FBdkM7QUE1QmlDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBOEJqQztBQUNNL0MsY0FBQUEsT0EvQjJCLEdBK0JqQixjQUFNQyxRQUFOLENBQWViLElBL0JFO0FBZ0NqQ3dFLGNBQUFBLFVBQVUsQ0FBQ1QsTUFBWDtBQUNBMUcsY0FBQUEsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNvRyxPQUFqQyxrRkFDd0U3QyxPQUR4RTs7QUFHQXBCLGNBQUFBLE1BQUksQ0FBQ0UsUUFBTCxDQUFjLFNBQWQsRUFBeUJELFdBQXpCLENBQXFDLHFCQUFyQzs7QUFwQ2lDO0FBc0NuQ3FFLGNBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2Z6RyxnQkFBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IwRyxNQUF4QixHQURlLENBRWY7QUFDRCxlQUhTLEVBR1AsSUFITyxDQUFWOztBQXRDbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBekM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2Q0UxRyxFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUyRCxFQUFWLENBQWEsT0FBYixFQUFxQixhQUFyQixFQUFvQyxZQUFXO0FBQzdDNEMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksMkNBQVosRUFBeUQsUUFBekQ7QUFDRCxHQUZEO0FBSUZ4RyxFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCMkQsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsVUFBVTlCLENBQVYsRUFBYTtBQUN2QzdCLElBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9ILEdBQVIsQ0FBWSxNQUFaO0FBQ0gsR0FGRDtBQUlDLENBOWVEOzs7Ozs7Ozs7OztBQ0FhO0FBQ2IsZUFBZSx3SEFBK0M7QUFDOUQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7QUNYRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxjQUFjLG1CQUFPLENBQUMsMkVBQXVCO0FBQzdDLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyx3QkFBd0IsbUJBQU8sQ0FBQyxtR0FBbUM7QUFDbkUscUJBQXFCLG1CQUFPLENBQUMseUZBQThCO0FBQzNELHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQztBQUNwRSxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUYsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELGlCQUFpQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBOEM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM5RFk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGlCQUFpQiwwSEFBaUQ7QUFDbEUsdUJBQXVCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUVoRTtBQUNBOztBQUVBO0FBQ0EseURBQXlELHNCQUFzQjs7QUFFL0U7QUFDQTtBQUNBLElBQUksbURBQW1EO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMsdUZBQTZCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUE2RDtBQUNqRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1RZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG9IQUEyQztBQUN0RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2RZO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLHFGQUE0QjtBQUMvQyxvQ0FBb0MsbUJBQU8sQ0FBQywrSEFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDNUUsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDcENELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsdUZBQTZCO0FBQ2pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCOztBQUVuRCx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9ucHJlaW5zY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5jb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxufSlcclxubGV0IGlkX3ByZWluc2NyaXB0aW9uID0gZmFsc2U7XHJcbmxldCBpZHByZWlucyA9IFtdO1xyXG5sZXQgZnJhaXMgPSBbXTtcclxuLy8gdmFyIHRhYmxlX3ByZWlucyA9ICQoXCIjZGF0YWJsZXNfcHJlaW5zY3JpcHRpb25cIikuRGF0YVRhYmxlKHtcclxuLy8gICAgIGxlbmd0aE1lbnU6IFtcclxuLy8gICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4vLyAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuLy8gICAgIF0sXHJcbi8vICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4vLyAgICAgYWpheDogXCIvcHJlaW5zY3JpcHRpb24vbGlzdFwiLFxyXG4vLyAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuLy8gICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbi8vICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuLy8gICAgIGxhbmd1YWdlOiB7XHJcbi8vICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4vLyAgICAgfSxcclxuLy8gfSk7XHJcblxyXG52YXIgdGFibGVfZ2VzdGlvbl9wcmVpbnMgPSAkKFwiI2RhdGFibGVzX2dlc3Rpb25fcHJlaW5zY3JpcHRpb25cIikuRGF0YVRhYmxlKHtcclxuICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgIF0sXHJcbiAgICBvcmRlcjogW1sxLCBcImRlc2NcIl1dLFxyXG4gICAgYWpheDogXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9saXN0L2dlc3Rpb25fcHJlaW5zY3JpcHRpb24vXCIsXHJcbiAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxyXG4gICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlkcHJlaW5zLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgJChcImJvZHkgdHIjXCIgKyBlKVxyXG4gICAgICAgICAgICAuZmluZChcImlucHV0XCIpXHJcbiAgICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGxvYWRfZXR1ZF9pbmZvID0gKCkgPT4ge1xyXG4gICAgaWYoaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2ZyYWlzX3ByZWluc2NyaXB0aW9uIGlcIik7XHJcbiAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9mcmFpc19wcmVpbnNfbW9kYWxzLycraWRfcHJlaW5zY3JpcHRpb24pXHJcbiAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1wcmVpbnMgLmV0dWRpYW50X2luZm8nKS5odG1sKHN1Y2Nlc3MuZGF0YSk7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIikuYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0Jyk7XHJcbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIikuYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmNvbnN0IGxvYWRfZnJhaXNfcHJlaW5zID0gKCkgPT4ge1xyXG4gICAgaWYoaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIC8vIGljb24uYWRkQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLnJlbW92ZUNsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpXHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9hcnRpY2xlX2ZyYWlzLycraWRfcHJlaW5zY3JpcHRpb24pXHJcbiAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1wcmVpbnMgLmFydGljbGUgI2ZyYWlzJykuaHRtbChzdWNjZXNzLmRhdGEubGlzdCkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKCcubW9kYWwtcHJlaW5zICNjb2RlLWZhY3R1cmUnKS5odG1sKHN1Y2Nlc3MuZGF0YS5jb2RlZmFjdHVyZSk7XHJcbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIikuYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuY29uc3QgZ2V0RG9jdW1lbnRzUHJlaW5zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBpY29uID0gJCgnI2RvY19wcmVpbnNjcmlwdGlvbiBpJylcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9nZXRkb2NfcHJlaW5zY3JpcHRpb24vXCIraWRfcHJlaW5zY3JpcHRpb24pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgJCgnLm1zLXNlbGVjdGFibGUgLm1zLWxpc3QnKS5odG1sKGRhdGEuZG9jdW1lbnRzKVxyXG4gICAgICAgICQoJy5tcy1zZWxlY3Rpb24gLm1zLWxpc3QnKS5odG1sKGRhdGEuZG9jdW1lbnRzRXhpc3RzKVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgfSkgICAgXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgIH1cclxufVxyXG4kKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4kKFwiI2Zvcm1hdGlvblwiKS5zZWxlY3QyKCk7XHJcbiQoXCIjbmF0dXJlXCIpLnNlbGVjdDIoKTtcclxuJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuXHJcbiAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICB9XHJcbiAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG59KVxyXG4kKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuY29sdW1ucygyKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbn0pXHJcbiQoXCIjbmF0dXJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmNvbHVtbnMoMikuc2VhcmNoKCQodGhpcykudmFsKCkpLmRyYXcoKTtcclxufSlcclxuXHJcbiQoJ2JvZHknKS5vbignY2xpY2snLCcjZnJhaXNfcHJlaW5zY3JpcHRpb24nLGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJCgnI2ZyYWlzX3ByZWluc2NyaXB0aW9uLW1vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNmcmFpcycsZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBmcmFpcyA9ICQodGhpcykuZmluZCgnOnNlbGVjdGVkJykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgJCgnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjbW9udGFudCcpLnZhbChmcmFpcyk7XHJcbn0pO1xyXG4kKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPW9yZ2FuXScpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy52YWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9nZXRvcmdhbmlzbWVwYXNQYXlhbnQnKTtcclxuICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLmh0bWwoXCJcIik7XHJcbiAgICAgICAgJCgnLnNlbGVjdC1vcmdhbicpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgIH1cclxufSlcclxuJCgnYm9keScpLm9uKCdjbGljaycsJy5tb2RhbCAjYWRkLWJ0bicsZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGZyYWlzSWQgID0gJCgnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjZnJhaXMnKS52YWwoKTtcclxuICAgIGxldCBmcmFpc1RleHQgID0gJCgnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjZnJhaXMnKS5maW5kKCc6c2VsZWN0ZWQnKS50ZXh0KCk7XHJcbiAgICBsZXQgcHJpeCAgPSAkKCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNtb250YW50JykudmFsKCk7XHJcbiAgICBsZXQgb3JnYW4gID0gJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuZmluZCgnOnNlbGVjdGVkJykudGV4dCgpO1xyXG4gICAgbGV0IG9yZ2FuaXNtZV9pZCAgPSAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS52YWwoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZyYWlzSWQpXHJcbiAgICBpZiAoISQuaXNOdW1lcmljKGZyYWlzSWQpIHx8IHByaXggPT0gXCJcIikge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKCQoXCJpbnB1dFtuYW1lPSdvcmdhbiddOmNoZWNrZWRcIikudmFsKCkgPT0gMSkge1xyXG4gICAgICAgIG9yZ2FuaXNtZV9pZCA9IDdcclxuICAgICAgICBvcmdhbiA9IFwiUGF5YW50XCJcclxuICAgIH1lbHNlIGlmKG9yZ2FuaXNtZV9pZCA9PSBcIlwiKXtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGZyYWlzLnB1c2goe1xyXG4gICAgICAgIGluZGV4IDogTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMSksXHJcbiAgICAgICAgaWQ6IGZyYWlzSWQgLFxyXG4gICAgICAgIGRlc2lnbmF0aW9uOiBmcmFpc1RleHQsXHJcbiAgICAgICAgbW9udGFudDogcHJpeCxcclxuICAgICAgICBvcmdhbmlzbWVfaWQ6IG9yZ2FuaXNtZV9pZCxcclxuICAgICAgICBvcmdhbmlzbWU6IG9yZ2FuXHJcbiAgICB9KTtcclxuICAgIHJhd0ZyYWlzKCk7XHJcbn0pXHJcbiAgICBjb25zdCByYXdGcmFpcyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgaHRtbCA9IFwiXCI7XHJcbiAgICAgICAgZnJhaXMubWFwKChmLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5kZXNpZ25hdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5tb250YW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLm9yZ2FuaXNtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9J2RlbGV0ZV9mcmFpcyBidG4gYnRuLWRhbmdlcicgaWQ9JyR7Zi5pbmRleH0nPjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChcIi5tb2RhbC1wcmVpbnMgLnRhYmxlLWZlZSB0Ym9keVwiKS5odG1sKGh0bWwpXHJcbiAgICB9XHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcuZGVsZXRlX2ZyYWlzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZnJhaXMuZmluZEluZGV4KGZyYWlzID0+IGZyYWlzLmluZGV4ID09ICQodGhpcykuYXR0cihcImlkXCIpKTtcclxuICAgICAgICBmcmFpcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgcmF3RnJhaXMoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnLm1vZGFsIC5zYXZlJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoZnJhaXMubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IEFqb3V0ZXIgRGVzIEZyYWlzIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZnJhaXMpXHJcbiAgICAgICAgLy8gcmV0dXJuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIubW9kYWwgLnNhdmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZyYWlzJywgSlNPTi5zdHJpbmdpZnkoZnJhaXMpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2FkZGZyYWlzL1wiK2lkX3ByZWluc2NyaXB0aW9uLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjZnJhaXNfcHJlaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkJpZW4gRW5yZWdpc3RyZTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWwtcHJlaW5zIC50YWJsZS1mZWUgdGJvZHlcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgIGZyYWlzID0gW107XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9mYWN0dXJlLycrZGF0YSwgJ19ibGFuaycpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAkKFwiI2ZyYWlzX3ByZWluc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNmcmFpc19wcmVpbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9wcmVpbnNjcmlwdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRwcmVpbnMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgICAgICBpZHByZWlucy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlkcHJlaW5zLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRwcmVpbnMpO1xyXG4gICAgfSlcclxuICAgIGNvbnN0IGdldEV0dWRpYW50SW5mb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNjYW5kaWRhdHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI3BhcmVudHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2FjYWRlbWlxdWVfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoJycpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2dldEV0dWRpYW50SW5mb3NwcmVpbnMvJytpZF9wcmVpbnNjcmlwdGlvbik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2NhbmRpZGF0c19pbmZvcycpLmh0bWwoZGF0YVsnY2FuZGlkYXRzX2luZm9zJ10pO1xyXG4gICAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjcGFyZW50c19pbmZvcycpLmh0bWwoZGF0YVsncGFyZW50c19pbmZvcyddKTtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2FjYWRlbWlxdWVfaW5mb3MnKS5odG1sKGRhdGFbJ2FjYWRlbWlxdWVfaW5mb3MnXSk7XHJcbiAgICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNkaXZlcnMnKS5odG1sKGRhdGFbJ2RpdmVycyddKTtcclxuICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9ICBcclxuICAgIH1cclxuICAgICQoJ2JvZHknKS5vbignZGJsY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9wcmVpbnNjcmlwdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9wcmVpbnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhYmxlc19nZXN0aW9uX3ByZWluc2NyaXB0aW9uIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfcHJlaW5zY3JpcHRpb24gPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIGxvYWRfZXR1ZF9pbmZvKCk7XHJcbiAgICAgICAgICAgIGxvYWRfZnJhaXNfcHJlaW5zKCk7XHJcbiAgICAgICAgICAgIGdldERvY3VtZW50c1ByZWlucygpO1xyXG4gICAgICAgICAgICBnZXRFdHVkaWFudEluZm9zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkX3ByZWluc2NyaXB0aW9uKTtcclxuICAgIH0pXHJcblxyXG4kKFwiI2FubnVsYXRpb25cIikub24oJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNhbm51bGF0aW9uIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS10aW1lcy1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZHByZWlucycsIEpTT04uc3RyaW5naWZ5KGlkcHJlaW5zKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vYW5udWxhdGlvbl9wcmVpbnNjcmlwdGlvblwiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ByZWluc2NyaXB0aW9uIEJpZW4gQW5udWxlcicsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10aW1lcy1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG4kKFwiI2FkbWlzc2lvblwiKS5vbignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoaWRwcmVpbnMubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXIgdW5lIG9yIHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjYWRtaXNzaW9uIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRwcmVpbnMnLCBKU09OLnN0cmluZ2lmeShpZHByZWlucykpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2FkbWlzc2lvbl9wcmVpbnNjcmlwdGlvblwiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0FkbWlzc2lvbnMgQmllbiBFbnJlZ2lzdGVyJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgICAgfVxyXG59KVxyXG4kKFwiI2RvY19wcmVpbnNjcmlwdGlvblwiKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKCcjZG9jdW1lbnRfcHJlaW5zX21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG5cclxufSlcclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5tcy1lbGVtLXNlbGVjdGFibGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubXMtc2VsZWN0aW9uIC5tcy1saXN0JykucHJlcGVuZCgkKHRoaXMpLmNsb25lKCkucmVtb3ZlQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGFibGVcIikuYWRkQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGlvblwiKSlcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZERvY3VtZW50JywgJCh0aGlzKS5hdHRyKFwiaWRcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkUHJlaW5zY3JpcHRpb24nLCBpZF9wcmVpbnNjcmlwdGlvbik7XHJcbiAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2FkZGRvY3VtZW50c19wcmVpbnNcIiwgZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ2Vycm9yJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLm1zLWVsZW0tc2VsZWN0aW9uXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm1zLXNlbGVjdGFibGUgLm1zLWxpc3QnKS5wcmVwZW5kKCQodGhpcykuY2xvbmUoKS5yZW1vdmVDbGFzcyhcIm1zLWVsZW0tc2VsZWN0aW9uXCIpLmFkZENsYXNzKFwibXMtZWxlbS1zZWxlY3RhYmxlXCIpKVxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkRG9jdW1lbnQnLCAkKHRoaXMpLmF0dHIoXCJpZFwiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRQcmVpbnNjcmlwdGlvbicsIGlkX3ByZWluc2NyaXB0aW9uKTtcclxuICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vZGVsZXRlZG9jdW1lbnRzX3ByZWluc1wiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnZXJyb3InLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnI2F0dF9wcmVpbnNjcmlwdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbignL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vYXR0ZXN0YXRpb25fcHJlaW5zY3JpcHRpb24vJytpZF9wcmVpbnNjcmlwdGlvbiwgJ19ibGFuaycpO1xyXG59KVxyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsJyNjZmNfcHJlaW5zY3JpcHRpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93Lm9wZW4oJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2NmY19wcmVpbnNjcmlwdGlvbi8nK2lkX3ByZWluc2NyaXB0aW9uLCAnX2JsYW5rJyk7XHJcbn0pXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnI21vZGlmaWVyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICQoJyNtb2RpZmllcl9tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxufSlcclxuXHJcbiQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNmb3JtX21vZGlmaWVyXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBhbGVydCgnZXQnKTtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIFVuIEV0dWRpYW50IScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgbW9kaWZpZXIgY2V0dGUgZW5yZWdpc3RyZW1lbnQgPycpO1xyXG4gICAgaWYocmVzID09IDEpe1xyXG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCgnI2Zvcm1fbW9kaWZpZXInKVswXSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI21vZGlmaWVyX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllcl9tb2RhbCBidXR0b24gaVwiKTtcclxuICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9lZGl0X2luZm9zX3ByZWlucy8nK2lkX3ByZWluc2NyaXB0aW9uLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPlxyXG4gICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIGlkX3ByZWluc2NyaXB0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAvLyBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICB9LCAyNTAwKSAgXHJcbiAgICB9XHJcbiAgfSlcclxuICBcclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgIHdpbmRvdy5vcGVuKCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9leHRyYWN0aW9uX3ByZWlucycsICdfYmxhbmsnKTtcclxuICB9KVxyXG5cclxuJCgnLm5hdi1waWxscyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICQodGhpcykudGFiKCdzaG93Jyk7XHJcbn0pXHJcblxyXG59KVxyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCA9ICdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKEUpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZEluZGV4O1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EX0lOREVYID0gJ2ZpbmRJbmRleCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEZJTkRfSU5ERVggaW4gW10pIEFycmF5KDEpW0ZJTkRfSU5ERVhdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRpbmRleFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZEluZGV4KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORF9JTkRFWCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xuXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIEZ1bmN0aW9uID0gZ2xvYmFsLkZ1bmN0aW9uO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSwgdGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9wcmVpbnNjcmlwdGlvbiIsImlkcHJlaW5zIiwiZnJhaXMiLCJ0YWJsZV9nZXN0aW9uX3ByZWlucyIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJsYW5ndWFnZSIsInVybCIsImxvYWRfZXR1ZF9pbmZvIiwiaWNvbiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJheGlvcyIsImdldCIsInRoZW4iLCJzdWNjZXNzIiwiaHRtbCIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibG9hZF9mcmFpc19wcmVpbnMiLCJsaXN0Iiwic2VsZWN0MiIsImNvZGVmYWN0dXJlIiwiZ2V0RG9jdW1lbnRzUHJlaW5zIiwicmVxdWVzdCIsImRvY3VtZW50cyIsImRvY3VtZW50c0V4aXN0cyIsIm1lc3NhZ2UiLCJyZXNwb25zZSIsImZpcmUiLCJ0aXRsZSIsIm9uIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJkcmF3IiwiaWRfZm9ybWF0aW9uIiwicHJldmVudERlZmF1bHQiLCJtb2RhbCIsImF0dHIiLCJ2YWx1ZSIsImNzcyIsImZyYWlzSWQiLCJmcmFpc1RleHQiLCJ0ZXh0IiwicHJpeCIsIm9yZ2FuIiwib3JnYW5pc21lX2lkIiwiaXNOdW1lcmljIiwicHVzaCIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJkZXNpZ25hdGlvbiIsIm1vbnRhbnQiLCJvcmdhbmlzbWUiLCJyYXdGcmFpcyIsIm1hcCIsImYiLCJpIiwiZmluZEluZGV4Iiwic3BsaWNlIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwicHJlcGVuZCIsImVtcHR5IiwicmVsb2FkIiwid2luZG93Iiwib3BlbiIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJpbnB1dCIsImlzIiwiaW5kZXhPZiIsImdldEV0dWRpYW50SW5mb3MiLCJoYXNDbGFzcyIsImNsb25lIiwicmVzIiwiY29uZmlybSIsIm1vZGFsQWxlcnQiLCJ0YWIiXSwic291cmNlUm9vdCI6IiJ9