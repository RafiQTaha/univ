(self["webpackChunk"] = self["webpackChunk"] || []).push([["evaluationSimulationDeliberation"],{

/***/ "./assets/components/evaluation/simulationdeliberation.js":
/*!****************************************************************!*\
  !*** ./assets/components/evaluation/simulationdeliberation.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

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
var check;
var inscription_id = null;
$(document).ready(function () {
  $("#valider, #devalider, #simuler").attr('disabled', true);

  var enableButtons = function enableButtons() {
    if (check == 0) {
      $("#valider").removeClass('btn-secondary').addClass('btn-danger').attr('disabled', false);
      $("#simuler").removeClass('btn-secondary').addClass('btn-primary').attr('disabled', false);
      $("#devalider").addClass('btn-secondary').removeClass('btn-success').attr('disabled', true);
    } else {
      $("#valider").addClass('btn-secondary').removeClass('btn-danger').attr('disabled', true);
      $("#simuler").addClass('btn-secondary').removeClass('btn-primary').attr('disabled', true);
      $("#devalider").removeClass('btn-secondary').addClass('btn-success').attr('disabled', false);
    }
  };

  $("#etablissement").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context.sent;
            response = request.data;

          case 7:
            $('#formation').html(response).select2();

          case 8:
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
            response = "";

            if (!(id_formation != "")) {
              _context2.next = 7;
              break;
            }

            _context2.next = 5;
            return axios.get('/api/promotion/' + id_formation);

          case 5:
            request = _context2.sent;
            response = request.data;

          case 7:
            $('#promotion').html(response).select2();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_promotion, response, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_promotion = $(this).val();
            response = "";

            if (!(id_promotion != "")) {
              _context3.next = 7;
              break;
            }

            _context3.next = 5;
            return axios.get('/api/semestre/' + id_promotion);

          case 5:
            request = _context3.sent;
            response = request.data;

          case 7:
            $('#semestre').html(response).select2();

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#get_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var semestre_id, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              $("#list_epreuve_normal").empty();
              semestre_id = $('#semestre').val();

              if (!(semestre_id == "" || !semestre_id)) {
                _context4.next = 6;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection semestre!'
              });
              return _context4.abrupt("return");

            case 6:
              icon = $("#get_list_etudiant i");
              icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
              _context4.prev = 8;
              _context4.next = 11;
              return axios.post('/evaluation/simulationdeliberation/list/' + semestre_id);

            case 11:
              request = _context4.sent;
              response = request.data; // $("#list_epreuve_normal").DataTable().destroy()

              if ($.fn.DataTable.isDataTable("#list_epreuve_normal")) {
                $('#list_epreuve_normal').DataTable().clear().destroy();
              }

              $("#list_epreuve_normal").html(response.html).DataTable({
                scrollX: true,
                scrollY: true,
                language: {
                  url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                }
              });
              check = response.check;

              if (check == 1) {
                Toast.fire({
                  icon: 'info',
                  title: "Operation déja valider"
                });
              }

              enableButtons();
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              _context4.next = 27;
              break;

            case 21:
              _context4.prev = 21;
              _context4.t0 = _context4["catch"](8);
              console.log(_context4.t0);
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              message = _context4.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 27:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[8, 21]]);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
  $('body').on('click', '#list_epreuve_normal tbody tr', function () {
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales'); // $('#inscription-modal').attr('disabled', true);

      inscription_id = null;
    } else {
      $("#list_epreuve_normal tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      inscription_id = $(this).attr("id");
    }
  });
  $("#simuler").on("click", function () {
    $("#note_modal").modal("show");
    getSimulerDetails();
  });

  var getSimulerDetails = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var request, response, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios.post('/evaluation/simulationdeliberation/simuler/' + inscription_id + "/" + $("#semestre").val());

            case 3:
              request = _context5.sent;
              response = request.data;
              $("#note_modal .modal-body").html(response); // Toast.fire({
              //     icon: 'success',
              //     title: response,
              // });

              setColorRed();
              _context5.next = 14;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);
              message = _context5.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 9]]);
    }));

    return function getSimulerDetails() {
      return _ref5.apply(this, arguments);
    };
  }();

  $("body").on("click", ".open h3", function () {
    $(this).parent().find(".elements").slideToggle("slow");
  });
  $("body").on("keyup change", ".KU3", function () {
    var value = $(this).attr('id'); // var elementCount = $(this).parent().parent().parent().parent().parent().parent().find(".elements_container");

    var elements = $(this).parent().parent().parent().parent().parent().parent().find(".elements_container");
    var modulex = $(this).parent().parent().parent().parent().parent().parent();
    var modules = $(this).parent().parent().parent().parent().parent().parent().parent().parent().find(".modules");
    var rachat = $(this).parent().parent();
    var cc_rachat = rachat.find(".cc_rachat").val();
    var tp_rachat = rachat.find(".tp_rachat").val();
    var ef_rachat = rachat.find(".ef_rachat").val();
    var element = rachat.find(".element_rachat");
    var coeff_module = Number($(this).parent().parent().parent().parent().parent().parent().find(".coefficcient_module").val());
    var coeff_exams = $(this).parent().parent().parent().parent().parent().find(".coefficcient_element_epreuve").val();
    var coefficcient_element_epreuve = coeff_exams.split(" ");
    var coeff_cc = Number(coefficcient_element_epreuve[0]);
    var coeff_tp = Number(coefficcient_element_epreuve[1]);
    var coeff_ef = Number(coefficcient_element_epreuve[2]);
    console.log(elements);
    var calculeNrachatElement = (Number(cc_rachat) * coeff_cc + Number(tp_rachat) * coeff_tp + Number(ef_rachat) * coeff_ef) / (coeff_cc + coeff_tp + coeff_ef);
    element.val(Number(calculeNrachatElement.toFixed(2)));
    var calculeNrachatModule = 0;
    var elementSomme = 0;
    elements.map(function () {
      // console.log($(this).find(".element_rachat").val(), $(this).find(".coefficcient_element").val());
      calculeNrachatModule += Number($(this).find(".element_rachat").val()) * Number($(this).find(".coefficcient_element").val());
      elementSomme += Number($(this).find(".coefficcient_element").val());
    });
    var calculeNrachatModulex = calculeNrachatModule / elementSomme;
    modulex.find(".module_rachat").val(Number(calculeNrachatModulex.toFixed(2))); // console.log(Number(modulex.find(".noteModuleOG").val()) + Number((calculeNrachatModulex).toFixed(2)));

    if (Number(modulex.find(".noteModuleOG").val()) + Number(calculeNrachatModulex.toFixed(2)) > 20) {
      // console.log(Number(modulex.find(".noteModuleOG").val()))
      modulex.find(".noteModule").val(Number(modulex.find(".noteModuleOG").val()));
    } else {
      // console.log(Number(modulex.find(".noteModuleOG").val()) + Number((calculeNrachatModulex)))
      modulex.find(".noteModule").val((Number(modulex.find(".noteModuleOG").val()) + Number(calculeNrachatModulex)).toFixed(2));
    }

    var calculeNrachatSemestre = 0;
    var moduleSomme = 0;
    modules.map(function () {
      // console.log($(this).find(".module_rachat").val(), $(this).find(".coefficcient_module").val());
      calculeNrachatSemestre += Number($(this).find(".module_rachat").val()) * Number($(this).find(".coefficcient_module").val());
      moduleSomme += Number($(this).find(".coefficcient_module").val());
    });
    var calculeNrachatSemestrex = Number((calculeNrachatSemestre / moduleSomme).toFixed(2));
    $('.semestre_rachat').val(Number(calculeNrachatSemestrex.toFixed(2)));

    if (Number($('.semestre_note').val()) + calculeNrachatSemestrex > 20) {
      $('.semestre_note').val(Number($('.semestre_noteOG').val()));
    } else {
      $('.semestre_note').val(Number($('.semestre_noteOG').val()) + Number(calculeNrachatSemestrex.toFixed(2)));
    }
  });

  var setColorRed = function setColorRed() {
    $("body .colorRed").map(function () {
      // console.log(this, this.value, $(this), $(this).val())
      if ($(this).val() == 1) {
        // console.log($(this).parent().parent())
        $(this).parent().find(".titleModule").css("color", "red");
      }
    });
  };

  $("body").on("click", "#save_rachat", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var icon, data, noteSemestreRachat, noteModules, modules, noteElements, elements, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              icon = $("#save_rachat i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              data = [];
              noteSemestreRachat = {
                'id': $(".semestre_rachat").attr("data-id"),
                'note_rachat': $(".semestre_rachat").val()
              };
              data.push({
                'semestre': noteSemestreRachat
              });
              noteModules = [];
              modules = $(".modules");
              modules.map(function () {
                noteModules.push({
                  'id': $(this).attr('data-id'),
                  'note_rachat': $(this).find(".module_rachat").val()
                });
              });
              data.push({
                'modules': noteModules
              });
              noteElements = [];
              elements = $(".elements_container");
              elements.map(function () {
                noteElements.push({
                  'id': $(this).attr('data-id'),
                  'note_rachat': $(this).find(".element_rachat").val(),
                  'cc_rachat': $(this).find(".cc_rachat").val(),
                  'tp_rachat': $(this).find(".tp_rachat").val(),
                  'ef_rachat': $(this).find(".ef_rachat").val()
                });
              });
              data.push({
                'elements': noteElements
              });
              _context6.prev = 14;
              formData = new FormData();
              formData.append("data", JSON.stringify(data));
              _context6.next = 19;
              return axios.post('/evaluation/simulationdeliberation/saverachat', formData);

            case 19:
              request = _context6.sent;
              response = request.data;
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: response
              });
              $("#note_modal").modal("hide");
              _context6.next = 32;
              break;

            case 26:
              _context6.prev = 26;
              _context6.t0 = _context6["catch"](14);
              console.log(_context6.t0);
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              message = _context6.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 32:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[14, 26]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("#valider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            icon = $("#valider i");
            icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
            _context7.prev = 2;
            _context7.next = 5;
            return axios.post('/evaluation/simulationdeliberation/valider');

          case 5:
            request = _context7.sent;
            response = request.data;
            check = 1;
            enableButtons();
            Toast.fire({
              icon: 'success',
              title: response
            });
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            _context7.next = 19;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            message = _context7.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 19:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 13]]);
  })));
  $("#devalider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            icon = $("#devalider i");
            icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
            _context8.prev = 2;
            _context8.next = 5;
            return axios.post('/evaluation/simulationdeliberation/devalider');

          case 5:
            request = _context8.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context8.next = 19;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](2);
            console.log(_context8.t0);
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            message = _context8.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 19:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 13]]);
  })));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-d805d8","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--0c063b"], () => (__webpack_exec__("./assets/components/evaluation/simulationdeliberation.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFJLENBQUNuQixXQUFMLENBQWlCLGNBQWpCLEVBQWlDQyxRQUFqQyxDQUEwQyxvQkFBMUM7QUFGd0I7QUFBQTtBQUFBLG1CQUlFTSxLQUFLLENBQUNjLElBQU4sQ0FBVyw4Q0FBWCxDQUpGOztBQUFBO0FBSWRaLFlBQUFBLE9BSmM7QUFLaEJILFlBQUFBLFFBTGdCLEdBS0xHLE9BQU8sQ0FBQ0MsSUFMSDtBQU1wQmpCLFlBQUFBLEtBQUssR0FBRyxDQUFSO0FBQ0FNLFlBQUFBLGFBQWE7QUFDYm9CLFlBQUFBLElBQUksQ0FBQ2xCLFFBQUwsQ0FBYyxjQUFkLEVBQThCRCxXQUE5QixDQUEwQyxvQkFBMUM7QUFDQW5CLFlBQUFBLEtBQUssQ0FBQ3FDLElBQU4sQ0FBVztBQUNQQyxjQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxjQUFBQSxLQUFLLEVBQUVkO0FBRkEsYUFBWDtBQVRvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWNwQnlCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUjtBQUNBYixZQUFBQSxJQUFJLENBQUNsQixRQUFMLENBQWMsY0FBZCxFQUE4QkQsV0FBOUIsQ0FBMEMsb0JBQTFDO0FBQ01pQyxZQUFBQSxPQWhCYyxHQWdCSixhQUFNM0IsUUFBTixDQUFlSSxJQWhCWDtBQWlCcEI3QixZQUFBQSxLQUFLLENBQUNxQyxJQUFOLENBQVc7QUFDUEMsY0FBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsY0FBQUEsS0FBSyxFQUFFYTtBQUZBLGFBQVg7O0FBakJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE1QjtBQXVCSCxDQTdURCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2V2YWx1YXRpb24vc2ltdWxhdGlvbmRlbGliZXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxufSlcclxuXHJcbmxldCBjaGVjaztcclxubGV0IGluc2NyaXB0aW9uX2lkID0gbnVsbDtcclxuICAgIFxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgJChcIiN2YWxpZGVyLCAjZGV2YWxpZGVyLCAjc2ltdWxlclwiKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICBjb25zdCBlbmFibGVCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGNoZWNrID09IDApIHtcclxuICAgICAgICAgICAgJChcIiN2YWxpZGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1kYW5nZXInKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAkKFwiI3NpbXVsZXJcIikucmVtb3ZlQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5hZGRDbGFzcygnYnRuLXByaW1hcnknKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAkKFwiI2RldmFsaWRlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4tc3VjY2VzcycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI3ZhbGlkZXJcIikuYWRkQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5yZW1vdmVDbGFzcygnYnRuLWRhbmdlcicpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgJChcIiNzaW11bGVyXCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgICAgICAkKFwiI2RldmFsaWRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tc3VjY2VzcycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcblxyXG4gICAgJChcIiNnZXRfbGlzdF9ldHVkaWFudFwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLmVtcHR5KClcclxuICAgICAgICBsZXQgc2VtZXN0cmVfaWQgPSAkKCcjc2VtZXN0cmUnKS52YWwoKTtcclxuICAgICAgICBpZihzZW1lc3RyZV9pZCA9PSBcIlwiIHx8ICFzZW1lc3RyZV9pZCkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiBzZW1lc3RyZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2dldF9saXN0X2V0dWRpYW50IGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc2VhcmNoJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL3NpbXVsYXRpb25kZWxpYmVyYXRpb24vbGlzdC8nK3NlbWVzdHJlX2lkKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIC8vICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKS5EYXRhVGFibGUoKS5kZXN0cm95KClcclxuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikpIHtcclxuICAgICAgICAgICAgICAgICQoJyNsaXN0X2VwcmV1dmVfbm9ybWFsJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuaHRtbChyZXNwb25zZS5odG1sKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbFk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2hlY2sgPSByZXNwb25zZS5jaGVjaztcclxuICAgICAgICAgICAgaWYoY2hlY2sgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiT3BlcmF0aW9uIGTDqWphIHZhbGlkZXJcIixcclxuICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtc2VhcmNoJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXNlYXJjaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgLy8gJCgnI2luc2NyaXB0aW9uLW1vZGFsJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgaW5zY3JpcHRpb25faWQgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7ICBcclxuICAgICAgICAgICAgaW5zY3JpcHRpb25faWQgPSAkKHRoaXMpLmF0dHIoXCJpZFwiKSAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgIFxyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgJChcIiNzaW11bGVyXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4geyAgXHJcbiAgICAgICAgJChcIiNub3RlX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgIGdldFNpbXVsZXJEZXRhaWxzKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb25zdCBnZXRTaW11bGVyRGV0YWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vc2ltdWxhdGlvbmRlbGliZXJhdGlvbi9zaW11bGVyLycraW5zY3JpcHRpb25faWQrXCIvXCIrJChcIiNzZW1lc3RyZVwiKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAkKFwiI25vdGVfbW9kYWwgLm1vZGFsLWJvZHlcIikuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIC8vIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAvLyAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgc2V0Q29sb3JSZWQoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLm9wZW4gaDNcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoXCIuZWxlbWVudHNcIikuc2xpZGVUb2dnbGUoXCJzbG93XCIpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImtleXVwIGNoYW5nZVwiLCBcIi5LVTNcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAvLyB2YXIgZWxlbWVudENvdW50ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmVsZW1lbnRzX2NvbnRhaW5lclwiKTtcclxuICAgICAgICB2YXIgZWxlbWVudHMgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIuZWxlbWVudHNfY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHZhciBtb2R1bGV4ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKVxyXG4gICAgICAgIHZhciBtb2R1bGVzID0gICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZChcIi5tb2R1bGVzXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciByYWNoYXQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpO1xyXG4gICAgICAgIHZhciBjY19yYWNoYXQgPSAgcmFjaGF0LmZpbmQoXCIuY2NfcmFjaGF0XCIpLnZhbCgpIFxyXG4gICAgICAgIHZhciB0cF9yYWNoYXQgPSAgcmFjaGF0LmZpbmQoXCIudHBfcmFjaGF0XCIpLnZhbCgpIFxyXG4gICAgICAgIHZhciBlZl9yYWNoYXQgPSAgcmFjaGF0LmZpbmQoXCIuZWZfcmFjaGF0XCIpLnZhbCgpIFxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gcmFjaGF0LmZpbmQoXCIuZWxlbWVudF9yYWNoYXRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGNvZWZmX21vZHVsZSA9ICBOdW1iZXIoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmNvZWZmaWNjaWVudF9tb2R1bGVcIikudmFsKCkpIDtcclxuICAgICAgICB2YXIgY29lZmZfZXhhbXMgPSAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmNvZWZmaWNjaWVudF9lbGVtZW50X2VwcmV1dmVcIikudmFsKCkgO1xyXG4gICAgICAgIHZhciBjb2VmZmljY2llbnRfZWxlbWVudF9lcHJldXZlID0gY29lZmZfZXhhbXMuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIHZhciBjb2VmZl9jYyA9ICBOdW1iZXIoY29lZmZpY2NpZW50X2VsZW1lbnRfZXByZXV2ZVswXSk7XHJcbiAgICAgICAgdmFyIGNvZWZmX3RwID0gIE51bWJlcihjb2VmZmljY2llbnRfZWxlbWVudF9lcHJldXZlWzFdKTtcclxuICAgICAgICB2YXIgY29lZmZfZWYgPSAgTnVtYmVyKGNvZWZmaWNjaWVudF9lbGVtZW50X2VwcmV1dmVbMl0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRzKVxyXG5cclxuICAgICAgICB2YXIgY2FsY3VsZU5yYWNoYXRFbGVtZW50ID0gKCAoIE51bWJlcihjY19yYWNoYXQpICogY29lZmZfY2MgKSArICggTnVtYmVyKHRwX3JhY2hhdCkgKiBjb2VmZl90cCApICsgKCBOdW1iZXIoZWZfcmFjaGF0KSAqIGNvZWZmX2VmICkgKSAvICggY29lZmZfY2MgKyBjb2VmZl90cCArIGNvZWZmX2VmICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWxlbWVudC52YWwoTnVtYmVyKChjYWxjdWxlTnJhY2hhdEVsZW1lbnQpLnRvRml4ZWQoMikpKTtcclxuICBcclxuICBcclxuICAgICAgICB2YXIgY2FsY3VsZU5yYWNoYXRNb2R1bGU9MDtcclxuICAgICAgICB2YXIgZWxlbWVudFNvbW1lPTA7XHJcbiAgICAgICAgZWxlbWVudHMubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygkKHRoaXMpLmZpbmQoXCIuZWxlbWVudF9yYWNoYXRcIikudmFsKCksICQodGhpcykuZmluZChcIi5jb2VmZmljY2llbnRfZWxlbWVudFwiKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGNhbGN1bGVOcmFjaGF0TW9kdWxlICs9IE51bWJlcigkKHRoaXMpLmZpbmQoXCIuZWxlbWVudF9yYWNoYXRcIikudmFsKCkpICogTnVtYmVyKCQodGhpcykuZmluZChcIi5jb2VmZmljY2llbnRfZWxlbWVudFwiKS52YWwoKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRTb21tZSArPSBOdW1iZXIoJCh0aGlzKS5maW5kKFwiLmNvZWZmaWNjaWVudF9lbGVtZW50XCIpLnZhbCgpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdmFyICBjYWxjdWxlTnJhY2hhdE1vZHVsZXggPSBjYWxjdWxlTnJhY2hhdE1vZHVsZSAvIGVsZW1lbnRTb21tZSA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbW9kdWxleC5maW5kKFwiLm1vZHVsZV9yYWNoYXRcIikudmFsKE51bWJlcigoY2FsY3VsZU5yYWNoYXRNb2R1bGV4KS50b0ZpeGVkKDIpKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coTnVtYmVyKG1vZHVsZXguZmluZChcIi5ub3RlTW9kdWxlT0dcIikudmFsKCkpICsgTnVtYmVyKChjYWxjdWxlTnJhY2hhdE1vZHVsZXgpLnRvRml4ZWQoMikpKTtcclxuICAgICAgICBpZigoTnVtYmVyKG1vZHVsZXguZmluZChcIi5ub3RlTW9kdWxlT0dcIikudmFsKCkpICsgTnVtYmVyKChjYWxjdWxlTnJhY2hhdE1vZHVsZXgpLnRvRml4ZWQoMikpKSA+IDIwKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coTnVtYmVyKG1vZHVsZXguZmluZChcIi5ub3RlTW9kdWxlT0dcIikudmFsKCkpKVxyXG4gICAgICAgICAgICBtb2R1bGV4LmZpbmQoXCIubm90ZU1vZHVsZVwiKS52YWwoTnVtYmVyKG1vZHVsZXguZmluZChcIi5ub3RlTW9kdWxlT0dcIikudmFsKCkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhOdW1iZXIobW9kdWxleC5maW5kKFwiLm5vdGVNb2R1bGVPR1wiKS52YWwoKSkgKyBOdW1iZXIoKGNhbGN1bGVOcmFjaGF0TW9kdWxleCkpKVxyXG4gICAgICAgICAgICBtb2R1bGV4LmZpbmQoXCIubm90ZU1vZHVsZVwiKS52YWwoIChOdW1iZXIobW9kdWxleC5maW5kKFwiLm5vdGVNb2R1bGVPR1wiKS52YWwoKSkgKyBOdW1iZXIoKGNhbGN1bGVOcmFjaGF0TW9kdWxleCkpKS50b0ZpeGVkKDIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGNhbGN1bGVOcmFjaGF0U2VtZXN0cmU9MDtcclxuICAgICAgICB2YXIgbW9kdWxlU29tbWU9MDtcclxuICAgICAgICBtb2R1bGVzLm1hcChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJCh0aGlzKS5maW5kKFwiLm1vZHVsZV9yYWNoYXRcIikudmFsKCksICQodGhpcykuZmluZChcIi5jb2VmZmljY2llbnRfbW9kdWxlXCIpLnZhbCgpKTtcclxuICAgICAgICAgICAgY2FsY3VsZU5yYWNoYXRTZW1lc3RyZSArPSBOdW1iZXIoJCh0aGlzKS5maW5kKFwiLm1vZHVsZV9yYWNoYXRcIikudmFsKCkpICogTnVtYmVyKCQodGhpcykuZmluZChcIi5jb2VmZmljY2llbnRfbW9kdWxlXCIpLnZhbCgpKTtcclxuICAgICAgICAgICAgbW9kdWxlU29tbWUgKz0gTnVtYmVyKCQodGhpcykuZmluZChcIi5jb2VmZmljY2llbnRfbW9kdWxlXCIpLnZhbCgpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgICAgICB2YXIgIGNhbGN1bGVOcmFjaGF0U2VtZXN0cmV4ID0gTnVtYmVyKChjYWxjdWxlTnJhY2hhdFNlbWVzdHJlIC8gbW9kdWxlU29tbWUpLnRvRml4ZWQoMikpO1xyXG4gIFxyXG4gIFxyXG4gICAgICAgICQoJy5zZW1lc3RyZV9yYWNoYXQnKS52YWwoTnVtYmVyKChjYWxjdWxlTnJhY2hhdFNlbWVzdHJleCkudG9GaXhlZCgyKSkpO1xyXG4gICAgICAgIGlmKE51bWJlcigkKCcuc2VtZXN0cmVfbm90ZScpLnZhbCgpKSArIGNhbGN1bGVOcmFjaGF0U2VtZXN0cmV4ID4gMjApe1xyXG4gICAgICAgICQoJy5zZW1lc3RyZV9ub3RlJykudmFsKCBOdW1iZXIoJCgnLnNlbWVzdHJlX25vdGVPRycpLnZhbCgpKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgJCgnLnNlbWVzdHJlX25vdGUnKS52YWwoIE51bWJlcigkKCcuc2VtZXN0cmVfbm90ZU9HJykudmFsKCkpICsgTnVtYmVyKChjYWxjdWxlTnJhY2hhdFNlbWVzdHJleCkudG9GaXhlZCgyKSkpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNldENvbG9yUmVkID0gKCkgPT4ge1xyXG4gICAgICAgICQoXCJib2R5IC5jb2xvclJlZFwiKS5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMsIHRoaXMudmFsdWUsICQodGhpcyksICQodGhpcykudmFsKCkpXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykudmFsKCkgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpKVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKFwiLnRpdGxlTW9kdWxlXCIpLmNzcyhcImNvbG9yXCIsIFwicmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjc2F2ZV9yYWNoYXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlX3JhY2hhdCBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcclxuICAgICAgICB2YXIgbm90ZVNlbWVzdHJlUmFjaGF0ID0ge1xyXG4gICAgICAgICAgICAnaWQnOiAkKFwiLnNlbWVzdHJlX3JhY2hhdFwiKS5hdHRyKFwiZGF0YS1pZFwiKSxcclxuICAgICAgICAgICAgJ25vdGVfcmFjaGF0JzogJChcIi5zZW1lc3RyZV9yYWNoYXRcIikudmFsKCksXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAnc2VtZXN0cmUnOiBub3RlU2VtZXN0cmVSYWNoYXRcclxuICAgICAgICB9KVxyXG4gICAgICAgIHZhciBub3RlTW9kdWxlcyA9IFtdO1xyXG4gICAgICAgIHZhciBtb2R1bGVzID0gJChcIi5tb2R1bGVzXCIpO1xyXG4gICAgICAgIG1vZHVsZXMubWFwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIG5vdGVNb2R1bGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgJ2lkJzogJCh0aGlzKS5hdHRyKCdkYXRhLWlkJyksXHJcbiAgICAgICAgICAgICAgICAnbm90ZV9yYWNoYXQnOiAkKHRoaXMpLmZpbmQoXCIubW9kdWxlX3JhY2hhdFwiKS52YWwoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgJ21vZHVsZXMnOiBub3RlTW9kdWxlc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdmFyIG5vdGVFbGVtZW50cyA9IFtdO1xyXG4gICAgICAgIHZhciBlbGVtZW50cyA9ICQoXCIuZWxlbWVudHNfY29udGFpbmVyXCIpO1xyXG4gICAgICAgIGVsZW1lbnRzLm1hcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBub3RlRWxlbWVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAnaWQnOiAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSxcclxuICAgICAgICAgICAgICAgICdub3RlX3JhY2hhdCc6ICQodGhpcykuZmluZChcIi5lbGVtZW50X3JhY2hhdFwiKS52YWwoKSxcclxuICAgICAgICAgICAgICAgICdjY19yYWNoYXQnOiAkKHRoaXMpLmZpbmQoXCIuY2NfcmFjaGF0XCIpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgJ3RwX3JhY2hhdCc6ICQodGhpcykuZmluZChcIi50cF9yYWNoYXRcIikudmFsKCksXHJcbiAgICAgICAgICAgICAgICAnZWZfcmFjaGF0JzogJCh0aGlzKS5maW5kKFwiLmVmX3JhY2hhdFwiKS52YWwoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgJ2VsZW1lbnRzJzogbm90ZUVsZW1lbnRzXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZGF0YVwiLCAgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9zaW11bGF0aW9uZGVsaWJlcmF0aW9uL3NhdmVyYWNoYXQnLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcIiNub3RlX21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pIFxyXG4gICAgJChcIiN2YWxpZGVyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjdmFsaWRlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vc2ltdWxhdGlvbmRlbGliZXJhdGlvbi92YWxpZGVyJyk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBjaGVjayA9IDE7XHJcbiAgICAgICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNkZXZhbGlkZXJcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNkZXZhbGlkZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrLW9wZW4nKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vc2ltdWxhdGlvbmRlbGliZXJhdGlvbi9kZXZhbGlkZXInKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNoZWNrID0gMDtcclxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiY2hlY2siLCJpbnNjcmlwdGlvbl9pZCIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYXR0ciIsImVuYWJsZUJ1dHRvbnMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2VsZWN0MiIsIm9uIiwiaWRfZXRhYiIsInZhbCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJlbXB0eSIsInNlbWVzdHJlX2lkIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInBvc3QiLCJmbiIsIkRhdGFUYWJsZSIsImlzRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJsYW5ndWFnZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiaGFzQ2xhc3MiLCJtb2RhbCIsImdldFNpbXVsZXJEZXRhaWxzIiwic2V0Q29sb3JSZWQiLCJwYXJlbnQiLCJmaW5kIiwic2xpZGVUb2dnbGUiLCJ2YWx1ZSIsImVsZW1lbnRzIiwibW9kdWxleCIsIm1vZHVsZXMiLCJyYWNoYXQiLCJjY19yYWNoYXQiLCJ0cF9yYWNoYXQiLCJlZl9yYWNoYXQiLCJlbGVtZW50IiwiY29lZmZfbW9kdWxlIiwiTnVtYmVyIiwiY29lZmZfZXhhbXMiLCJjb2VmZmljY2llbnRfZWxlbWVudF9lcHJldXZlIiwic3BsaXQiLCJjb2VmZl9jYyIsImNvZWZmX3RwIiwiY29lZmZfZWYiLCJjYWxjdWxlTnJhY2hhdEVsZW1lbnQiLCJ0b0ZpeGVkIiwiY2FsY3VsZU5yYWNoYXRNb2R1bGUiLCJlbGVtZW50U29tbWUiLCJtYXAiLCJjYWxjdWxlTnJhY2hhdE1vZHVsZXgiLCJjYWxjdWxlTnJhY2hhdFNlbWVzdHJlIiwibW9kdWxlU29tbWUiLCJjYWxjdWxlTnJhY2hhdFNlbWVzdHJleCIsImNzcyIsIm5vdGVTZW1lc3RyZVJhY2hhdCIsInB1c2giLCJub3RlTW9kdWxlcyIsIm5vdGVFbGVtZW50cyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==