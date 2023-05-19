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
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_gestion_preinscription')) {
        var dt = $('#datables_gestion_preinscription').DataTable(); //Abort previous ajax request if it is still in process.

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLENBQUNDLElBQVAsQ0FBWSwyQ0FBWixFQUF5RCxRQUF6RDtBQUNMLEdBRkQ7QUFHQS9HLEVBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTJELEVBQVYsQ0FBYSxPQUFiLEVBQXFCLGdCQUFyQixFQUF1QyxZQUFXO0FBQ2hELFFBQUcsQ0FBQzVDLGlCQUFKLEVBQXNCO0FBQ2xCWixNQUFBQSxLQUFLLENBQUNxRCxJQUFOLENBQVc7QUFDVGQsUUFBQUEsSUFBSSxFQUFFLE9BREc7QUFFVGUsUUFBQUEsS0FBSyxFQUFFO0FBRkUsT0FBWDtBQUlBO0FBQ0g7O0FBQ0RxRCxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSw0REFBMERoRyxpQkFBdEUsRUFBeUYsUUFBekY7QUFDRCxHQVREO0FBV0ZmLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IyRCxFQUFsQixDQUFxQixPQUFyQixFQUE4QixVQUFVOUIsQ0FBVixFQUFhO0FBQ3ZDN0IsSUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkgsR0FBUixDQUFZLE1BQVo7QUFDSCxHQUZEO0FBSUMsQ0FyZ0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbnByZWluc2NyaXB0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbn0pXHJcbmxldCBpZF9wcmVpbnNjcmlwdGlvbiA9IGZhbHNlO1xyXG5sZXQgaWRwcmVpbnMgPSBbXTtcclxubGV0IGZyYWlzID0gW107XHJcbi8vIHZhciB0YWJsZV9wcmVpbnMgPSAkKFwiI2RhdGFibGVzX3ByZWluc2NyaXB0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbi8vICAgICBsZW5ndGhNZW51OiBbXHJcbi8vICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuLy8gICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbi8vICAgICBdLFxyXG4vLyAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuLy8gICAgIGFqYXg6IFwiL3ByZWluc2NyaXB0aW9uL2xpc3RcIixcclxuLy8gICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbi8vICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4vLyAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbi8vICAgICBsYW5ndWFnZToge1xyXG4vLyAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuLy8gICAgIH0sXHJcbi8vIH0pO1xyXG5cclxudmFyIHRhYmxlX2dlc3Rpb25fcHJlaW5zID0gJChcIiNkYXRhYmxlc19nZXN0aW9uX3ByZWluc2NyaXB0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICBdLFxyXG4gICAgb3JkZXI6IFtbMSwgXCJkZXNjXCJdXSxcclxuICAgIGFqYXg6IFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vbGlzdC9nZXN0aW9uX3ByZWluc2NyaXB0aW9uL1wiLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZHByZWlucy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICAucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcHJlRHJhd0NhbGxiYWNrOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG4gICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2RhdGFibGVzX2dlc3Rpb25fcHJlaW5zY3JpcHRpb24nKSkge1xyXG4gICAgICAgICAgICB2YXIgZHQgPSAkKCcjZGF0YWJsZXNfZ2VzdGlvbl9wcmVpbnNjcmlwdGlvbicpLkRhdGFUYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9BYm9ydCBwcmV2aW91cyBhamF4IHJlcXVlc3QgaWYgaXQgaXMgc3RpbGwgaW4gcHJvY2Vzcy5cclxuICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gZHQuc2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzWzBdLmpxWEhSKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nc1swXS5qcVhIUi5hYm9ydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgIH0sXHJcbn0pO1xyXG5jb25zdCBnZXREb2N1bWVudHNQcmVpbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKCcjZG9jX3ByZWluc2NyaXB0aW9uIGknKVxyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2dldGRvY19wcmVpbnNjcmlwdGlvbi9cIitpZF9wcmVpbnNjcmlwdGlvbik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKCcubXMtc2VsZWN0YWJsZSAubXMtbGlzdCcpLmh0bWwoZGF0YS5kb2N1bWVudHMpXHJcbiAgICAgICAgJCgnLm1zLXNlbGVjdGlvbiAubXMtbGlzdCcpLmh0bWwoZGF0YS5kb2N1bWVudHNFeGlzdHMpXHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJylcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcclxuICAgICAgICB9KSAgICBcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKVxyXG4gICAgfVxyXG59XHJcbiQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKCk7XHJcbiQoXCIjZm9ybWF0aW9uXCIpLnNlbGVjdDIoKTtcclxuJChcIiNuYXR1cmVcIikuc2VsZWN0MigpO1xyXG4kKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG5cclxuICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcclxuICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgIH1cclxuICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbn0pXHJcbiQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5jb2x1bW5zKDIpLnNlYXJjaChcIlwiKS5kcmF3KCk7XHJcbiAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5jb2x1bW5zKDEpLnNlYXJjaChpZF9mb3JtYXRpb24pLmRyYXcoKTtcclxufSlcclxuJChcIiNuYXR1cmVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuY29sdW1ucygyKS5zZWFyY2goJCh0aGlzKS52YWwoKSkuZHJhdygpO1xyXG59KVxyXG5cclxuXHJcbmNvbnN0IGxvYWRfZXR1ZF9pbmZvID0gKCkgPT4ge1xyXG4gICAgaWYoaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2ZyYWlzX3ByZWluc2NyaXB0aW9uIGlcIik7XHJcbiAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9mcmFpc19wcmVpbnNfbW9kYWxzLycraWRfcHJlaW5zY3JpcHRpb24pXHJcbiAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1wcmVpbnMgLmV0dWRpYW50X2luZm8nKS5odG1sKHN1Y2Nlc3MuZGF0YSk7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIikuYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0Jyk7XHJcbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIikuYWRkQ2xhc3MoJ2ZhLW1vbmV5LWJpbGwtYWx0Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmNvbnN0IGxvYWRfZnJhaXNfcHJlaW5zID0gKCkgPT4ge1xyXG4gICAgaWYoaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIC8vIGljb24uYWRkQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLnJlbW92ZUNsYXNzKCdmYS1tb25leS1iaWxsLWFsdCcpXHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9hcnRpY2xlX2ZyYWlzLycraWRfcHJlaW5zY3JpcHRpb24pXHJcbiAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1wcmVpbnMgLmFydGljbGUgI2ZyYWlzJykuaHRtbChzdWNjZXNzLmRhdGEubGlzdCkuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKCcubW9kYWwtcHJlaW5zICNjb2RlLWZhY3R1cmUnKS5odG1sKHN1Y2Nlc3MuZGF0YS5jb2RlZmFjdHVyZSk7XHJcbiAgICAgICAgICAgICQoJyNmcmFpc19wcmVpbnNjcmlwdGlvbi1tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgLy8gc3VjY2Vzcy5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKS5hZGRDbGFzcygnZmEtbW9uZXktYmlsbC1hbHQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSAgICBcclxufVxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnI2ZyYWlzX3ByZWluc2NyaXB0aW9uJyxmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxvYWRfZXR1ZF9pbmZvKCk7XHJcbiAgICBsb2FkX2ZyYWlzX3ByZWlucygpO1xyXG59KTtcclxuJCgnYm9keScpLm9uKCdjaGFuZ2UnLCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNmcmFpcycsZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBmcmFpcyA9ICQodGhpcykuZmluZCgnOnNlbGVjdGVkJykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgJCgnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjbW9udGFudCcpLnZhbChmcmFpcyk7XHJcbn0pO1xyXG4kKCdpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPW9yZ2FuXScpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodGhpcy52YWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9nZXRvcmdhbmlzbWVwYXNQYXlhbnQnKTtcclxuICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcuc2VsZWN0LW9yZ2FuJykuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoJy5zZWxlY3Qtb3JnYW4gI29yZycpLmh0bWwoXCJcIik7XHJcbiAgICAgICAgJCgnLnNlbGVjdC1vcmdhbicpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICAgIH1cclxufSlcclxuJCgnYm9keScpLm9uKCdjbGljaycsJy5tb2RhbCAjYWRkLWJ0bicsZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGZyYWlzSWQgID0gJCgnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjZnJhaXMnKS52YWwoKTtcclxuICAgIGxldCBmcmFpc1RleHQgID0gJCgnLm1vZGFsLXByZWlucyAuYXJ0aWNsZSAjZnJhaXMnKS5maW5kKCc6c2VsZWN0ZWQnKS50ZXh0KCk7XHJcbiAgICBsZXQgcHJpeCAgPSAkKCcubW9kYWwtcHJlaW5zIC5hcnRpY2xlICNtb250YW50JykudmFsKCk7XHJcbiAgICBsZXQgb3JnYW4gID0gJCgnLnNlbGVjdC1vcmdhbiAjb3JnJykuZmluZCgnOnNlbGVjdGVkJykudGV4dCgpO1xyXG4gICAgbGV0IG9yZ2FuaXNtZV9pZCAgPSAkKCcuc2VsZWN0LW9yZ2FuICNvcmcnKS52YWwoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZyYWlzSWQpXHJcbiAgICBpZiAoISQuaXNOdW1lcmljKGZyYWlzSWQpIHx8IHByaXggPT0gXCJcIikge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKCQoXCJpbnB1dFtuYW1lPSdvcmdhbiddOmNoZWNrZWRcIikudmFsKCkgPT0gMSkge1xyXG4gICAgICAgIG9yZ2FuaXNtZV9pZCA9IDdcclxuICAgICAgICBvcmdhbiA9IFwiUGF5YW50XCJcclxuICAgIH1lbHNlIGlmKG9yZ2FuaXNtZV9pZCA9PSBcIlwiKXtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGZyYWlzLnB1c2goe1xyXG4gICAgICAgIGluZGV4IDogTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMSksXHJcbiAgICAgICAgaWQ6IGZyYWlzSWQgLFxyXG4gICAgICAgIGRlc2lnbmF0aW9uOiBmcmFpc1RleHQsXHJcbiAgICAgICAgbW9udGFudDogcHJpeCxcclxuICAgICAgICBvcmdhbmlzbWVfaWQ6IG9yZ2FuaXNtZV9pZCxcclxuICAgICAgICBvcmdhbmlzbWU6IG9yZ2FuXHJcbiAgICB9KTtcclxuICAgIHJhd0ZyYWlzKCk7XHJcbn0pXHJcbiAgICBjb25zdCByYXdGcmFpcyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgaHRtbCA9IFwiXCI7XHJcbiAgICAgICAgZnJhaXMubWFwKChmLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5kZXNpZ25hdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5tb250YW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLm9yZ2FuaXNtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9J2RlbGV0ZV9mcmFpcyBidG4gYnRuLWRhbmdlcicgaWQ9JyR7Zi5pbmRleH0nPjxpIGNsYXNzPSdmYSBmYS10cmFzaCc+PC9pPjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChcIi5tb2RhbC1wcmVpbnMgLnRhYmxlLWZlZSB0Ym9keVwiKS5odG1sKGh0bWwpXHJcbiAgICB9XHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsICcuZGVsZXRlX2ZyYWlzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZnJhaXMuZmluZEluZGV4KGZyYWlzID0+IGZyYWlzLmluZGV4ID09ICQodGhpcykuYXR0cihcImlkXCIpKTtcclxuICAgICAgICBmcmFpcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgcmF3RnJhaXMoKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnLm1vZGFsIC5zYXZlJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoZnJhaXMubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IEFqb3V0ZXIgRGVzIEZyYWlzIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZnJhaXMpXHJcbiAgICAgICAgLy8gcmV0dXJuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIubW9kYWwgLnNhdmUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZyYWlzJywgSlNPTi5zdHJpbmdpZnkoZnJhaXMpKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2FkZGZyYWlzL1wiK2lkX3ByZWluc2NyaXB0aW9uLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoXCIjZnJhaXNfcHJlaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcclxuICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkJpZW4gRW5yZWdpc3RyZTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICQoXCIubW9kYWwtcHJlaW5zIC50YWJsZS1mZWUgdGJvZHlcIikuZW1wdHkoKTtcclxuICAgICAgICAgICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuYWpheC5yZWxvYWQobnVsbCxmYWxzZSk7XHJcbiAgICAgICAgICAgIGZyYWlzID0gW107XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9mYWN0dXJlLycrZGF0YSwgJ19ibGFuaycpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAkKFwiI2ZyYWlzX3ByZWluc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJChcIiNmcmFpc19wcmVpbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9wcmVpbnNjcmlwdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZihpbnB1dC5pcyhcIjpjaGVja2VkXCIpKXtcclxuICAgICAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIixmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaWRwcmVpbnMuaW5kZXhPZihpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICAgICAgICBpZHByZWlucy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlkcHJlaW5zLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRwcmVpbnMpO1xyXG4gICAgfSlcclxuICAgIGNvbnN0IGdldEV0dWRpYW50SW5mb3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNjYW5kaWRhdHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI3BhcmVudHNfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2FjYWRlbWlxdWVfaW5mb3MnKS5odG1sKCcnKTtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2RpdmVycycpLmh0bWwoJycpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI21vZGlmaWVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2dldEV0dWRpYW50SW5mb3NwcmVpbnMvJytpZF9wcmVpbnNjcmlwdGlvbik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2NhbmRpZGF0c19pbmZvcycpLmh0bWwoZGF0YVsnY2FuZGlkYXRzX2luZm9zJ10pO1xyXG4gICAgICAgICQoJyNtb2RpZmllcl9tb2RhbCAjcGFyZW50c19pbmZvcycpLmh0bWwoZGF0YVsncGFyZW50c19pbmZvcyddKTtcclxuICAgICAgICAkKCcjbW9kaWZpZXJfbW9kYWwgI2FjYWRlbWlxdWVfaW5mb3MnKS5odG1sKGRhdGFbJ2FjYWRlbWlxdWVfaW5mb3MnXSk7XHJcbiAgICAgICAgJCgnI21vZGlmaWVyX21vZGFsICNkaXZlcnMnKS5odG1sKGRhdGFbJ2RpdmVycyddKTtcclxuICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9ICBcclxuICAgIH1cclxuICAgICQoJ2JvZHknKS5vbignZGJsY2xpY2snLCcjZGF0YWJsZXNfZ2VzdGlvbl9wcmVpbnNjcmlwdGlvbiB0Ym9keSB0cicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9wcmVpbnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNkYXRhYmxlc19nZXN0aW9uX3ByZWluc2NyaXB0aW9uIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfcHJlaW5zY3JpcHRpb24gPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIGdldERvY3VtZW50c1ByZWlucygpO1xyXG4gICAgICAgICAgICAvLyBnZXRFdHVkaWFudEluZm9zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkX3ByZWluc2NyaXB0aW9uKTtcclxuICAgIH0pXHJcblxyXG4kKFwiI2FubnVsYXRpb25cIikub24oJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGlkcHJlaW5zLmxlbmd0aCA8IDEpe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY29jaGVyIHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2FubnVsYXRpb24gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRpbWVzLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkcHJlaW5zJywgSlNPTi5zdHJpbmdpZnkoaWRwcmVpbnMpKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9hbm51bGF0aW9uX3ByZWluc2NyaXB0aW9uXCIsIGZvcm1EYXRhKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUHJlaW5zY3JpcHRpb24gQmllbiBBbm51bGVyJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlkcHJlaW5zID0gW11cclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS10aW1lcy1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0YWJsZV9nZXN0aW9uX3ByZWlucy5hamF4LnJlbG9hZChudWxsLGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdTb21lIEVycm9yJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG4kKFwiI2FkbWlzc2lvblwiKS5vbignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoaWRwcmVpbnMubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBjb2NoZXIgdW5lIG91IHBsdXNpZXVycyBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjYWRtaXNzaW9uIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgXHJcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRwcmVpbnMnLCBKU09OLnN0cmluZ2lmeShpZHByZWlucykpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2FkbWlzc2lvbl9wcmVpbnNjcmlwdGlvblwiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0FkbWlzc2lvbnMgQmllbiBFbnJlZ2lzdGVyJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgIHRhYmxlX2dlc3Rpb25fcHJlaW5zLmFqYXgucmVsb2FkKG51bGwsZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnU29tZSBFcnJvcicsXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgICAgfVxyXG59KVxyXG4kKFwiI2RvY19wcmVpbnNjcmlwdGlvblwiKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKCcjZG9jdW1lbnRfcHJlaW5zX21vZGFsJykubW9kYWwoXCJzaG93XCIpO1xyXG5cclxufSlcclxuJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5tcy1lbGVtLXNlbGVjdGFibGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcubXMtc2VsZWN0aW9uIC5tcy1saXN0JykucHJlcGVuZCgkKHRoaXMpLmNsb25lKCkucmVtb3ZlQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGFibGVcIikuYWRkQ2xhc3MoXCJtcy1lbGVtLXNlbGVjdGlvblwiKSlcclxuICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpZERvY3VtZW50JywgJCh0aGlzKS5hdHRyKFwiaWRcIikpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkUHJlaW5zY3JpcHRpb24nLCBpZF9wcmVpbnNjcmlwdGlvbik7XHJcbiAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2FkZGRvY3VtZW50c19wcmVpbnNcIiwgZm9ybURhdGEpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ2Vycm9yJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLm1zLWVsZW0tc2VsZWN0aW9uXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm1zLXNlbGVjdGFibGUgLm1zLWxpc3QnKS5wcmVwZW5kKCQodGhpcykuY2xvbmUoKS5yZW1vdmVDbGFzcyhcIm1zLWVsZW0tc2VsZWN0aW9uXCIpLmFkZENsYXNzKFwibXMtZWxlbS1zZWxlY3RhYmxlXCIpKVxyXG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkRG9jdW1lbnQnLCAkKHRoaXMpLmF0dHIoXCJpZFwiKSlcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnaWRQcmVpbnNjcmlwdGlvbicsIGlkX3ByZWluc2NyaXB0aW9uKTtcclxuICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vZGVsZXRlZG9jdW1lbnRzX3ByZWluc1wiLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnZXJyb3InLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnI2F0dF9wcmVpbnNjcmlwdGlvbicsZnVuY3Rpb24gKCkge1xyXG4gICAgaWYoIWlkX3ByZWluc2NyaXB0aW9uKXtcclxuICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGxpZ25lIScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbignL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vYXR0ZXN0YXRpb25fcHJlaW5zY3JpcHRpb24vJytpZF9wcmVpbnNjcmlwdGlvbiwgJ19ibGFuaycpO1xyXG59KVxyXG5cclxuJCgnYm9keScpLm9uKCdjbGljaycsJyNjZmNfcHJlaW5zY3JpcHRpb24nLGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSEnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgd2luZG93Lm9wZW4oJy9wcmVpbnNjcmlwdGlvbi9nZXN0aW9uL2NmY19wcmVpbnNjcmlwdGlvbi8nK2lkX3ByZWluc2NyaXB0aW9uLCAnX2JsYW5rJyk7XHJcbn0pXHJcblxyXG4kKCdib2R5Jykub24oJ2NsaWNrJywnI21vZGlmaWVyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBpZighaWRfcHJlaW5zY3JpcHRpb24pe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGdldEV0dWRpYW50SW5mb3MoKTtcclxuICAgICQoJyNtb2RpZmllcl9tb2RhbCcpLm1vZGFsKFwic2hvd1wiKTtcclxufSlcclxuXHJcbiQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNmb3JtX21vZGlmaWVyXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBhbGVydCgnZXQnKTtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIFVuIEV0dWRpYW50IScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgbW9kaWZpZXIgY2V0dGUgZW5yZWdpc3RyZW1lbnQgPycpO1xyXG4gICAgaWYocmVzID09IDEpe1xyXG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCgnI2Zvcm1fbW9kaWZpZXInKVswXSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI21vZGlmaWVyX21vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKVxyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllcl9tb2RhbCBidXR0b24gaVwiKTtcclxuICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtZWRpdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcHJlaW5zY3JpcHRpb24vZ2VzdGlvbi9lZGl0X2luZm9zX3ByZWlucy8nK2lkX3ByZWluc2NyaXB0aW9uLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgc3R5bGU9XCJ3aWR0aDogOTglO21hcmdpbjogMCBhdXRvO1wiPlxyXG4gICAgICAgICAgICAgIDxwPiR7cmVzcG9uc2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIGlkX3ByZWluc2NyaXB0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGFibGVfZ2VzdGlvbl9wcmVpbnMuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpXHJcbiAgICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiBzdHlsZT1cIndpZHRoOiA5OCU7bWFyZ2luOiAwIGF1dG87XCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgJChcIi5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgICAgICAvLyBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICB9LCAyNTAwKSAgXHJcbiAgICB9XHJcbiAgfSlcclxuICBcclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICB3aW5kb3cub3BlbignL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vZXh0cmFjdGlvbl9wcmVpbnMnLCAnX2JsYW5rJyk7XHJcbiAgfSlcclxuICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2ltcHJpbWVyX2RvY3MnLCBmdW5jdGlvbiAoKXtcclxuICAgIGlmKCFpZF9wcmVpbnNjcmlwdGlvbil7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdNZXJjaSBkZSBDaG9pc2lyIFVuIEV0dWRpYW50IScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbignL3ByZWluc2NyaXB0aW9uL2dlc3Rpb24vcHJpbnRfZG9jdW1lbnRzX3ByZWluc2NyaXB0aW9uLycraWRfcHJlaW5zY3JpcHRpb24sICdfYmxhbmsnKTtcclxuICB9KVxyXG4gIFxyXG4kKCcubmF2LXBpbGxzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgJCh0aGlzKS50YWIoJ3Nob3cnKTtcclxufSlcclxuXHJcbn0pXHJcblxyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9wcmVpbnNjcmlwdGlvbiIsImlkcHJlaW5zIiwiZnJhaXMiLCJ0YWJsZV9nZXN0aW9uX3ByZWlucyIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJwcmVEcmF3Q2FsbGJhY2siLCJzZXR0aW5ncyIsImZuIiwiaXNEYXRhVGFibGUiLCJkdCIsImpxWEhSIiwiYWJvcnQiLCJsYW5ndWFnZSIsInVybCIsImdldERvY3VtZW50c1ByZWlucyIsImljb24iLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJkb2N1bWVudHMiLCJkb2N1bWVudHNFeGlzdHMiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZmlyZSIsInRpdGxlIiwic2VsZWN0MiIsIm9uIiwiaWRfZXRhYiIsInZhbCIsImNvbHVtbnMiLCJzZWFyY2giLCJkcmF3IiwiaWRfZm9ybWF0aW9uIiwibG9hZF9ldHVkX2luZm8iLCJ0aGVuIiwic3VjY2VzcyIsImVyciIsImxvYWRfZnJhaXNfcHJlaW5zIiwibGlzdCIsImNvZGVmYWN0dXJlIiwibW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsImF0dHIiLCJ2YWx1ZSIsImNzcyIsImZyYWlzSWQiLCJmcmFpc1RleHQiLCJ0ZXh0IiwicHJpeCIsIm9yZ2FuIiwib3JnYW5pc21lX2lkIiwiaXNOdW1lcmljIiwicHVzaCIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJkZXNpZ25hdGlvbiIsIm1vbnRhbnQiLCJvcmdhbmlzbWUiLCJyYXdGcmFpcyIsIm1hcCIsImYiLCJpIiwiZmluZEluZGV4Iiwic3BsaWNlIiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwicHJlcGVuZCIsImVtcHR5IiwicmVsb2FkIiwid2luZG93Iiwib3BlbiIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJpbnB1dCIsImlzIiwiaW5kZXhPZiIsImdldEV0dWRpYW50SW5mb3MiLCJoYXNDbGFzcyIsImNsb25lIiwicmVzIiwiY29uZmlybSIsIm1vZGFsQWxlcnQiLCJ0YWIiXSwic291cmNlUm9vdCI6IiJ9