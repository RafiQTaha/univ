(self["webpackChunk"] = self["webpackChunk"] || []).push([["evaluationSemestre"],{

/***/ "./assets/components/evaluation/semestre.js":
/*!**************************************************!*\
  !*** ./assets/components/evaluation/semestre.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

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
$(document).ready(function () {
  var id_inscription = false;
  $("#enregister, #valider, #devalider, #recalculer, #imprimer, #statut, #deliberation_individuelle").attr('disabled', true);

  var enableButtons = function enableButtons() {
    $("#imprimer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false);
    $("#statut").removeClass('btn-secondary').addClass('btn-primary').attr('disabled', false);
    $("#deliberation_individuelle").addClass('btn-primary').removeClass('btn-secondary').attr('disabled', false);

    if (check == 0) {
      $("#enregister").removeClass('btn-secondary').addClass('btn-primary').attr('disabled', false);
      $("#valider").removeClass('btn-secondary').addClass('btn-danger').attr('disabled', false);
      $("#devalider").addClass('btn-secondary').removeClass('btn-success').attr('disabled', true);
      $("#recalculer").addClass('btn-secondary').removeClass('btn-warning').attr('disabled', true);
    } else {
      $("#enregister").addClass('btn-secondary').removeClass('btn-primary').attr('disabled', true);
      $("#valider").addClass('btn-secondary').removeClass('btn-danger').attr('disabled', true);
      $("#devalider").removeClass('btn-secondary').addClass('btn-success').attr('disabled', false);
      $("#recalculer").removeClass('btn-secondary').addClass('btn-warning').attr('disabled', false);
    }
  };

  $("#etablissement").select2();
  $("#order").select2();
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
  }))); // pop up triggre after double click tr

  $("body").on("dblclick", "#list_epreuve_normal tbody tr", function () {
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_inscription = null; // console.log(id_inscription);
    } else {
      $("#list_epreuve_normal tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_inscription = $(this).attr('id'); // console.log(id_inscription);
    }
  }); // impression deliberation

  $("#deliberation_individuelle").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            window.open('/evaluation/semestre/impression_delib/' + id_inscription, '_blank');

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_formation = $(this).val();
            response = "";

            if (!(id_formation != "")) {
              _context3.next = 7;
              break;
            }

            _context3.next = 5;
            return axios.get('/api/promotion/' + id_formation);

          case 5:
            request = _context3.sent;
            response = request.data;

          case 7:
            $('#promotion').html(response).select2();

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_promotion, response, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_promotion = $(this).val();
            response = "";

            if (!(id_promotion != "")) {
              _context4.next = 7;
              break;
            }

            _context4.next = 5;
            return axios.get('/api/semestre/' + id_promotion);

          case 5:
            request = _context4.sent;
            response = request.data;

          case 7:
            $('#semestre').html(response).select2();

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#get_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var semestre_id, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              $("#list_epreuve_normal").empty();
              semestre_id = $('#semestre').val();

              if (!(semestre_id == "" || !semestre_id)) {
                _context5.next = 6;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection semestre!'
              });
              return _context5.abrupt("return");

            case 6:
              icon = $("#get_list_etudiant i");
              icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
              _context5.prev = 8;
              formData = new FormData();
              formData.append("order", $("#order").val());
              _context5.next = 13;
              return axios.post('/evaluation/semestre/list/' + semestre_id, formData);

            case 13:
              request = _context5.sent;
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
              _context5.next = 29;
              break;

            case 23:
              _context5.prev = 23;
              _context5.t0 = _context5["catch"](8);
              console.log(_context5.t0);
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              message = _context5.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 29:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[8, 23]]);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }());
  $("#imprimer").on("click", function () {
    $("#imprimer_list").modal("show");
  });
  $("#valider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            icon = $("#valider i");
            icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
            _context6.prev = 2;
            _context6.next = 5;
            return axios.post('/evaluation/semestre/valider');

          case 5:
            request = _context6.sent;
            response = request.data;
            check = 1;
            enableButtons();
            Toast.fire({
              icon: 'success',
              title: response
            });
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            _context6.next = 19;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            message = _context6.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 13]]);
  })));
  $("#devalider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            icon = $("#devalider i");
            icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
            _context7.prev = 2;
            _context7.next = 5;
            return axios.post('/evaluation/semestre/devalider');

          case 5:
            request = _context7.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context7.next = 19;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
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
  $("#enregister").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            icon = $("#enregister i");
            icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
            _context8.prev = 2;
            _context8.next = 5;
            return axios.post('/evaluation/semestre/enregistre');

          case 5:
            request = _context8.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
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
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
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
  $("#imprimer").on("click", function () {
    $("#imprimer_list").modal("show");
  });
  $("#affichage").on('change', function () {
    var affichage = $(this).val();
    $("#impression_list").attr("href", $("#impression_list").attr("href").slice(0, -1) + affichage);
    $("#impression_clair").attr("href", $("#impression_clair").attr("href").slice(0, -1) + affichage);
    $("#impression_anonymat").attr("href", $("#impression_anonymat").attr("href").slice(0, -1) + affichage);
    $("#impression_rat").attr("href", $("#impression_rat").attr("href").slice(0, -1) + affichage);
  });
  $("#recalculer").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            icon = $("#recalculer i");
            icon.removeClass('fa-redo-alt').addClass("fa-spinner fa-spin");
            _context9.prev = 2;
            _context9.next = 5;
            return axios.post('/evaluation/semestre/recalculer');

          case 5:
            request = _context9.sent;
            response = request.data;
            $("#get_list_etudiant").trigger("click");
            icon.addClass('fa-redo-alt').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context9.next = 18;
            break;

          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](2);
            console.log(_context9.t0);
            icon.addClass('fa-redo-alt').removeClass("fa-spinner fa-spin");
            message = _context9.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 18:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 12]]);
  })));
  $("#statut").on("click", function () {
    $("#statut_modal").modal("show");
  });
  $("#statut_avant_rachat").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            icon = $("#statut_avant_rachat i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context10.prev = 2;
            _context10.next = 5;
            return axios.post('/evaluation/semestre/statut/avantrachat');

          case 5:
            request = _context10.sent;
            response = request.data;
            $("#get_list_etudiant").trigger("click");
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context10.next = 18;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](2);
            console.log(_context10.t0);
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            message = _context10.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 18:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 12]]);
  })));
  $("#statut_apres_rachat").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            icon = $("#statut_apres_rachat i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context11.prev = 2;
            _context11.next = 5;
            return axios.post('/evaluation/semestre/statut/apresrachat');

          case 5:
            request = _context11.sent;
            response = request.data;
            $("#get_list_etudiant").trigger("click");
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context11.next = 18;
            break;

          case 12:
            _context11.prev = 12;
            _context11.t0 = _context11["catch"](2);
            console.log(_context11.t0);
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            message = _context11.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 18:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 12]]);
  })));
  $("#statut_categorie").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            icon = $("#statut_categorie i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context12.prev = 2;
            _context12.next = 5;
            return axios.post('/evaluation/semestre/statut/statutsemestrecategorie');

          case 5:
            request = _context12.sent;
            response = request.data;
            $("#get_list_etudiant").trigger("click");
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context12.next = 18;
            break;

          case 12:
            _context12.prev = 12;
            _context12.t0 = _context12["catch"](2);
            console.log(_context12.t0);
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            message = _context12.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 18:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 12]]);
  })));
  $('body').on('click', '#extraction', function () {
    window.open('/evaluation/semestre/extraction_semestre', '_blank');
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var un$Slice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/evaluation/semestre.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbHVhdGlvblNlbWVzdHJlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVc7QUFDckJDLEVBQUFBLEtBQUssRUFBRSxJQURjO0FBRXJCQyxFQUFBQSxRQUFRLEVBQUUsU0FGVztBQUdyQkMsRUFBQUEsaUJBQWlCLEVBQUUsS0FIRTtBQUlyQkMsRUFBQUEsS0FBSyxFQUFFLElBSmM7QUFLckJDLEVBQUFBLGdCQUFnQixFQUFFLElBTEc7QUFNckJDLEVBQUFBLE9BQU8sRUFBRSxpQkFBQ0wsS0FBRCxFQUFXO0FBQ2hCQSxJQUFBQSxLQUFLLENBQUNNLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDUixJQUFJLENBQUNTLFNBQTFDO0FBQ0FQLElBQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1UsV0FBMUM7QUFDSDtBQVRvQixDQUFYLENBQWQ7QUFZQSxJQUFJQyxLQUFKO0FBRUFDLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBYTtBQUMzQixNQUFJQyxjQUFjLEdBQUcsS0FBckI7QUFDQUgsRUFBQUEsQ0FBQyxDQUFDLGdHQUFELENBQUQsQ0FBb0dJLElBQXBHLENBQXlHLFVBQXpHLEVBQXFILElBQXJIOztBQUNBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QkwsSUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlTSxXQUFmLENBQTJCLGVBQTNCLEVBQTRDQyxRQUE1QyxDQUFxRCxVQUFyRCxFQUFpRUgsSUFBakUsQ0FBc0UsVUFBdEUsRUFBa0YsS0FBbEY7QUFDQUosSUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhTSxXQUFiLENBQXlCLGVBQXpCLEVBQTBDQyxRQUExQyxDQUFtRCxhQUFuRCxFQUFrRUgsSUFBbEUsQ0FBdUUsVUFBdkUsRUFBbUYsS0FBbkY7QUFDQUosSUFBQUEsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NPLFFBQWhDLENBQXlDLGFBQXpDLEVBQXdERCxXQUF4RCxDQUFvRSxlQUFwRSxFQUFxRkYsSUFBckYsQ0FBMEYsVUFBMUYsRUFBc0csS0FBdEc7O0FBR0EsUUFBR0wsS0FBSyxJQUFJLENBQVosRUFBZTtBQUNYQyxNQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCTSxXQUFqQixDQUE2QixlQUE3QixFQUE4Q0MsUUFBOUMsQ0FBdUQsYUFBdkQsRUFBc0VILElBQXRFLENBQTJFLFVBQTNFLEVBQXVGLEtBQXZGO0FBQ0FKLE1BQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY00sV0FBZCxDQUEwQixlQUExQixFQUEyQ0MsUUFBM0MsQ0FBb0QsWUFBcEQsRUFBa0VILElBQWxFLENBQXVFLFVBQXZFLEVBQW1GLEtBQW5GO0FBQ0FKLE1BQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JPLFFBQWhCLENBQXlCLGVBQXpCLEVBQTBDRCxXQUExQyxDQUFzRCxhQUF0RCxFQUFxRUYsSUFBckUsQ0FBMEUsVUFBMUUsRUFBc0YsSUFBdEY7QUFDQUosTUFBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQk8sUUFBakIsQ0FBMEIsZUFBMUIsRUFBMkNELFdBQTNDLENBQXVELGFBQXZELEVBQXNFRixJQUF0RSxDQUEyRSxVQUEzRSxFQUF1RixJQUF2RjtBQUNILEtBTEQsTUFLTztBQUNISixNQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCTyxRQUFqQixDQUEwQixlQUExQixFQUEyQ0QsV0FBM0MsQ0FBdUQsYUFBdkQsRUFBc0VGLElBQXRFLENBQTJFLFVBQTNFLEVBQXVGLElBQXZGO0FBQ0FKLE1BQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY08sUUFBZCxDQUF1QixlQUF2QixFQUF3Q0QsV0FBeEMsQ0FBb0QsWUFBcEQsRUFBa0VGLElBQWxFLENBQXVFLFVBQXZFLEVBQW1GLElBQW5GO0FBQ0FKLE1BQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JNLFdBQWhCLENBQTRCLGVBQTVCLEVBQTZDQyxRQUE3QyxDQUFzRCxhQUF0RCxFQUFxRUgsSUFBckUsQ0FBMEUsVUFBMUUsRUFBc0YsS0FBdEY7QUFDQUosTUFBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQk0sV0FBakIsQ0FBNkIsZUFBN0IsRUFBOENDLFFBQTlDLENBQXVELGFBQXZELEVBQXNFSCxJQUF0RSxDQUEyRSxVQUEzRSxFQUF1RixLQUF2RjtBQUNIO0FBQ0osR0FqQkQ7O0FBa0JBSixFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQlEsT0FBcEI7QUFDQVIsRUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZUSxPQUFaO0FBQ0FSLEVBQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CUyxFQUFwQixDQUF1QixRQUF2Qix1RUFBaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCQyxZQUFBQSxPQUR1QixHQUNiVixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLEdBQVIsRUFEYTtBQUV6QkMsWUFBQUEsUUFGeUIsR0FFZCxFQUZjOztBQUFBLGtCQUcxQkYsT0FBTyxJQUFJLEVBSGU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJSEcsS0FBSyxDQUFDQyxHQUFOLENBQVUsb0JBQWtCSixPQUE1QixDQUpHOztBQUFBO0FBSW5CSyxZQUFBQSxPQUptQjtBQUt6QkgsWUFBQUEsUUFBUSxHQUFHRyxPQUFPLENBQUNDLElBQW5COztBQUx5QjtBQU83QmhCLFlBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JpQixJQUFoQixDQUFxQkwsUUFBckIsRUFBK0JKLE9BQS9COztBQVA2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFqQyxJQXZCMkIsQ0FrQzNCOztBQUNBUixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVTLEVBQVYsQ0FBYSxVQUFiLEVBQXlCLCtCQUF6QixFQUEwRCxZQUFZO0FBQ2xFLFFBQUdULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtCLFFBQVIsQ0FBaUIsa0JBQWpCLENBQUgsRUFBeUM7QUFDckNsQixNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLFdBQVIsQ0FBb0Isa0JBQXBCO0FBQ0FILE1BQUFBLGNBQWMsR0FBRyxJQUFqQixDQUZxQyxDQUdyQztBQUNILEtBSkQsTUFJTztBQUNISCxNQUFBQSxDQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ00sV0FBbkMsQ0FBK0Msa0JBQS9DO0FBQ0FOLE1BQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sUUFBUixDQUFpQixrQkFBakI7QUFDQUosTUFBQUEsY0FBYyxHQUFHSCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLElBQVIsQ0FBYSxJQUFiLENBQWpCLENBSEcsQ0FJSDtBQUNIO0FBQ0osR0FYRCxFQW5DMkIsQ0FnRDNCOztBQUNBSixFQUFBQSxDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQ1MsRUFBaEMsQ0FBbUMsT0FBbkMsdUVBQTRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFeENVLFlBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLDJDQUF5Q2pCLGNBQXJELEVBQXFFLFFBQXJFOztBQUZ3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE1QztBQVNBSCxFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCUyxFQUFoQixDQUFtQixRQUFuQix1RUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CWSxZQUFBQSxZQURtQixHQUNKckIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxHQUFSLEVBREk7QUFFckJDLFlBQUFBLFFBRnFCLEdBRVYsRUFGVTs7QUFBQSxrQkFHdEJTLFlBQVksSUFBSSxFQUhNO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBSUNSLEtBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFrQk8sWUFBNUIsQ0FKRDs7QUFBQTtBQUlmTixZQUFBQSxPQUplO0FBS3JCSCxZQUFBQSxRQUFRLEdBQUdHLE9BQU8sQ0FBQ0MsSUFBbkI7O0FBTHFCO0FBT3pCaEIsWUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmlCLElBQWhCLENBQXFCTCxRQUFyQixFQUErQkosT0FBL0I7O0FBUHlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCO0FBU0FSLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JTLEVBQWhCLENBQW1CLFFBQW5CLHVFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJhLFlBQUFBLFlBRG1CLEdBQ0p0QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLEdBQVIsRUFESTtBQUVyQkMsWUFBQUEsUUFGcUIsR0FFVixFQUZVOztBQUFBLGtCQUd0QlUsWUFBWSxJQUFJLEVBSE07QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJQ1QsS0FBSyxDQUFDQyxHQUFOLENBQVUsbUJBQWlCUSxZQUEzQixDQUpEOztBQUFBO0FBSWZQLFlBQUFBLE9BSmU7QUFLckJILFlBQUFBLFFBQVEsR0FBR0csT0FBTyxDQUFDQyxJQUFuQjs7QUFMcUI7QUFPekJoQixZQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVpQixJQUFmLENBQW9CTCxRQUFwQixFQUE4QkosT0FBOUI7O0FBUHlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCO0FBV0FSLEVBQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCUyxFQUF4QixDQUEyQixPQUEzQjtBQUFBLHdFQUFvQyxrQkFBZWMsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaENBLGNBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBeEIsY0FBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJ5QixLQUExQjtBQUNJQyxjQUFBQSxXQUg0QixHQUdkMUIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlVyxHQUFmLEVBSGM7O0FBQUEsb0JBSTdCZSxXQUFXLElBQUksRUFBZixJQUFxQixDQUFDQSxXQUpPO0FBQUE7QUFBQTtBQUFBOztBQUs1QnZDLGNBQUFBLEtBQUssQ0FBQ3dDLElBQU4sQ0FBVztBQUNQQyxnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsZ0JBQUFBLEtBQUssRUFBRTtBQUZBLGVBQVg7QUFMNEI7O0FBQUE7QUFXMUJELGNBQUFBLElBWDBCLEdBV25CNUIsQ0FBQyxDQUFDLHNCQUFELENBWGtCO0FBWWhDNEIsY0FBQUEsSUFBSSxDQUFDdEIsV0FBTCxDQUFpQixXQUFqQixFQUE4QkMsUUFBOUIsQ0FBdUMsb0JBQXZDO0FBWmdDO0FBY3hCdUIsY0FBQUEsUUFkd0IsR0FjYixJQUFJQyxRQUFKLEVBZGE7QUFlNUJELGNBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUF5QmhDLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWVcsR0FBWixFQUF6QjtBQWY0QjtBQUFBLHFCQWdCTkUsS0FBSyxDQUFDb0IsSUFBTixDQUFXLCtCQUE2QlAsV0FBeEMsRUFBcURJLFFBQXJELENBaEJNOztBQUFBO0FBZ0J0QmYsY0FBQUEsT0FoQnNCO0FBaUJ4QkgsY0FBQUEsUUFqQndCLEdBaUJiRyxPQUFPLENBQUNDLElBakJLLEVBa0I1Qjs7QUFDQSxrQkFBSWhCLENBQUMsQ0FBQ2tDLEVBQUYsQ0FBS0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLHNCQUEzQixDQUFKLEVBQXdEO0FBQ3BEcEMsZ0JBQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCbUMsU0FBMUIsR0FBc0NFLEtBQXRDLEdBQThDQyxPQUE5QztBQUNEOztBQUNIdEMsY0FBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJpQixJQUExQixDQUErQkwsUUFBUSxDQUFDSyxJQUF4QyxFQUE4Q2tCLFNBQTlDLENBQXdEO0FBQ3BESSxnQkFBQUEsT0FBTyxFQUFFLElBRDJDO0FBRXBEQyxnQkFBQUEsT0FBTyxFQUFFLElBRjJDO0FBR3BEQyxnQkFBQUEsUUFBUSxFQUFFO0FBQ05DLGtCQUFBQSxHQUFHLEVBQUU7QUFEQztBQUgwQyxlQUF4RDtBQU9BM0MsY0FBQUEsS0FBSyxHQUFHYSxRQUFRLENBQUNiLEtBQWpCOztBQUNBLGtCQUFHQSxLQUFLLElBQUksQ0FBWixFQUFjO0FBQ1ZaLGdCQUFBQSxLQUFLLENBQUN3QyxJQUFOLENBQVc7QUFDUEMsa0JBQUFBLElBQUksRUFBRSxNQURDO0FBRVBDLGtCQUFBQSxLQUFLLEVBQUU7QUFGQSxpQkFBWDtBQUlIOztBQUNEeEIsY0FBQUEsYUFBYTtBQUNidUIsY0FBQUEsSUFBSSxDQUFDckIsUUFBTCxDQUFjLFdBQWQsRUFBMkJELFdBQTNCLENBQXVDLG9CQUF2QztBQXJDNEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUF1QzVCcUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ0FoQixjQUFBQSxJQUFJLENBQUNyQixRQUFMLENBQWMsV0FBZCxFQUEyQkQsV0FBM0IsQ0FBdUMsb0JBQXZDO0FBQ011QyxjQUFBQSxPQXpDc0IsR0F5Q1osYUFBTWpDLFFBQU4sQ0FBZUksSUF6Q0g7QUEwQzVCN0IsY0FBQUEsS0FBSyxDQUFDd0MsSUFBTixDQUFXO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxnQkFBQUEsS0FBSyxFQUFFZ0I7QUFGQSxlQUFYOztBQTFDNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpREE3QyxFQUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWVTLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBTTtBQUM3QlQsSUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0I4QyxLQUFwQixDQUEwQixNQUExQjtBQUNILEdBRkQ7QUFJQTlDLEVBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY1MsRUFBZCxDQUFpQixPQUFqQix1RUFBMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCbUIsWUFBQUEsSUFEZ0IsR0FDVDVCLENBQUMsQ0FBQyxZQUFELENBRFE7QUFFdEI0QixZQUFBQSxJQUFJLENBQUN0QixXQUFMLENBQWlCLFNBQWpCLEVBQTRCQyxRQUE1QixDQUFxQyxvQkFBckM7QUFGc0I7QUFBQTtBQUFBLG1CQUlJTSxLQUFLLENBQUNvQixJQUFOLENBQVcsOEJBQVgsQ0FKSjs7QUFBQTtBQUlabEIsWUFBQUEsT0FKWTtBQUtkSCxZQUFBQSxRQUxjLEdBS0hHLE9BQU8sQ0FBQ0MsSUFMTDtBQU1sQmpCLFlBQUFBLEtBQUssR0FBRyxDQUFSO0FBQ0FNLFlBQUFBLGFBQWE7QUFDYmxCLFlBQUFBLEtBQUssQ0FBQ3dDLElBQU4sQ0FBVztBQUNQQyxjQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxjQUFBQSxLQUFLLEVBQUVqQjtBQUZBLGFBQVg7QUFJQWdCLFlBQUFBLElBQUksQ0FBQ3JCLFFBQUwsQ0FBYyxTQUFkLEVBQXlCRCxXQUF6QixDQUFxQyxvQkFBckM7QUFaa0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFjbEJxQyxZQUFBQSxPQUFPLENBQUNDLEdBQVI7QUFDQWhCLFlBQUFBLElBQUksQ0FBQ3JCLFFBQUwsQ0FBYyxTQUFkLEVBQXlCRCxXQUF6QixDQUFxQyxvQkFBckM7QUFDTXVDLFlBQUFBLE9BaEJZLEdBZ0JGLGFBQU1qQyxRQUFOLENBQWVJLElBaEJiO0FBaUJsQjdCLFlBQUFBLEtBQUssQ0FBQ3dDLElBQU4sQ0FBVztBQUNQQyxjQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxjQUFBQSxLQUFLLEVBQUVnQjtBQUZBLGFBQVg7O0FBakJrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUExQjtBQXVCQTdDLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JTLEVBQWhCLENBQW1CLE9BQW5CLHVFQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJtQixZQUFBQSxJQURrQixHQUNYNUIsQ0FBQyxDQUFDLGNBQUQsQ0FEVTtBQUV4QjRCLFlBQUFBLElBQUksQ0FBQ3RCLFdBQUwsQ0FBaUIsY0FBakIsRUFBaUNDLFFBQWpDLENBQTBDLG9CQUExQztBQUZ3QjtBQUFBO0FBQUEsbUJBSUVNLEtBQUssQ0FBQ29CLElBQU4sQ0FBVyxnQ0FBWCxDQUpGOztBQUFBO0FBSWRsQixZQUFBQSxPQUpjO0FBS2hCSCxZQUFBQSxRQUxnQixHQUtMRyxPQUFPLENBQUNDLElBTEg7QUFNcEJqQixZQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNBTSxZQUFBQSxhQUFhO0FBQ2J1QixZQUFBQSxJQUFJLENBQUNyQixRQUFMLENBQWMsY0FBZCxFQUE4QkQsV0FBOUIsQ0FBMEMsb0JBQTFDO0FBQ0FuQixZQUFBQSxLQUFLLENBQUN3QyxJQUFOLENBQVc7QUFDUEMsY0FBQUEsSUFBSSxFQUFFLFNBREM7QUFFUEMsY0FBQUEsS0FBSyxFQUFFakI7QUFGQSxhQUFYO0FBVG9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBY3BCK0IsWUFBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ0FoQixZQUFBQSxJQUFJLENBQUNyQixRQUFMLENBQWMsY0FBZCxFQUE4QkQsV0FBOUIsQ0FBMEMsb0JBQTFDO0FBQ011QyxZQUFBQSxPQWhCYyxHQWdCSixhQUFNakMsUUFBTixDQUFlSSxJQWhCWDtBQWlCcEI3QixZQUFBQSxLQUFLLENBQUN3QyxJQUFOLENBQVc7QUFDUEMsY0FBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsY0FBQUEsS0FBSyxFQUFFZ0I7QUFGQSxhQUFYOztBQWpCb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBNUI7QUF1QkE3QyxFQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCUyxFQUFqQixDQUFvQixPQUFwQix1RUFBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CbUIsWUFBQUEsSUFEbUIsR0FDWjVCLENBQUMsQ0FBQyxlQUFELENBRFc7QUFFekI0QixZQUFBQSxJQUFJLENBQUN0QixXQUFMLENBQWlCLFVBQWpCLEVBQTZCQyxRQUE3QixDQUFzQyxvQkFBdEM7QUFGeUI7QUFBQTtBQUFBLG1CQUlDTSxLQUFLLENBQUNvQixJQUFOLENBQVcsaUNBQVgsQ0FKRDs7QUFBQTtBQUlmbEIsWUFBQUEsT0FKZTtBQUtqQkgsWUFBQUEsUUFMaUIsR0FLTkcsT0FBTyxDQUFDQyxJQUxGO0FBTXJCakIsWUFBQUEsS0FBSyxHQUFHLENBQVI7QUFDQU0sWUFBQUEsYUFBYTtBQUNidUIsWUFBQUEsSUFBSSxDQUFDckIsUUFBTCxDQUFjLFVBQWQsRUFBMEJELFdBQTFCLENBQXNDLG9CQUF0QztBQUNBbkIsWUFBQUEsS0FBSyxDQUFDd0MsSUFBTixDQUFXO0FBQ1BDLGNBQUFBLElBQUksRUFBRSxTQURDO0FBRVBDLGNBQUFBLEtBQUssRUFBRWpCO0FBRkEsYUFBWDtBQVRxQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWNyQitCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUjtBQUNBaEIsWUFBQUEsSUFBSSxDQUFDckIsUUFBTCxDQUFjLFVBQWQsRUFBMEJELFdBQTFCLENBQXNDLG9CQUF0QztBQUNNdUMsWUFBQUEsT0FoQmUsR0FnQkwsYUFBTWpDLFFBQU4sQ0FBZUksSUFoQlY7QUFpQnJCN0IsWUFBQUEsS0FBSyxDQUFDd0MsSUFBTixDQUFXO0FBQ1BDLGNBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGNBQUFBLEtBQUssRUFBRWdCO0FBRkEsYUFBWDs7QUFqQnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCO0FBdUJBN0MsRUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlUyxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFlBQU07QUFDN0JULElBQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9COEMsS0FBcEIsQ0FBMEIsTUFBMUI7QUFDSCxHQUZEO0FBR0E5QyxFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCUyxFQUFoQixDQUFtQixRQUFuQixFQUE2QixZQUFXO0FBQ3BDLFFBQUlzQyxTQUFTLEdBQUcvQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLEdBQVIsRUFBaEI7QUFDQVgsSUFBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JJLElBQXRCLENBQTJCLE1BQTNCLEVBQW9DSixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkksSUFBdEIsQ0FBMkIsTUFBM0IsRUFBbUM0QyxLQUFuQyxDQUF5QyxDQUF6QyxFQUEyQyxDQUFDLENBQTVDLElBQStDRCxTQUFuRjtBQUNBL0MsSUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJJLElBQXZCLENBQTRCLE1BQTVCLEVBQXFDSixDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkksSUFBdkIsQ0FBNEIsTUFBNUIsRUFBb0M0QyxLQUFwQyxDQUEwQyxDQUExQyxFQUE0QyxDQUFDLENBQTdDLElBQWdERCxTQUFyRjtBQUNBL0MsSUFBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJJLElBQTFCLENBQStCLE1BQS9CLEVBQXdDSixDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkksSUFBMUIsQ0FBK0IsTUFBL0IsRUFBdUM0QyxLQUF2QyxDQUE2QyxDQUE3QyxFQUErQyxDQUFDLENBQWhELElBQW1ERCxTQUEzRjtBQUNBL0MsSUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJJLElBQXJCLENBQTBCLE1BQTFCLEVBQW1DSixDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkksSUFBckIsQ0FBMEIsTUFBMUIsRUFBa0M0QyxLQUFsQyxDQUF3QyxDQUF4QyxFQUEwQyxDQUFDLENBQTNDLElBQThDRCxTQUFqRjtBQUVILEdBUEQ7QUFRQS9DLEVBQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJTLEVBQWpCLENBQW9CLE9BQXBCLHVFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJtQixZQUFBQSxJQURtQixHQUNaNUIsQ0FBQyxDQUFDLGVBQUQsQ0FEVztBQUV6QjRCLFlBQUFBLElBQUksQ0FBQ3RCLFdBQUwsQ0FBaUIsYUFBakIsRUFBZ0NDLFFBQWhDLENBQXlDLG9CQUF6QztBQUZ5QjtBQUFBO0FBQUEsbUJBSUNNLEtBQUssQ0FBQ29CLElBQU4sQ0FBVyxpQ0FBWCxDQUpEOztBQUFBO0FBSWZsQixZQUFBQSxPQUplO0FBS2pCSCxZQUFBQSxRQUxpQixHQUtORyxPQUFPLENBQUNDLElBTEY7QUFNckJoQixZQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QmlELE9BQXhCLENBQWdDLE9BQWhDO0FBQ0FyQixZQUFBQSxJQUFJLENBQUNyQixRQUFMLENBQWMsYUFBZCxFQUE2QkQsV0FBN0IsQ0FBeUMsb0JBQXpDO0FBQ0FuQixZQUFBQSxLQUFLLENBQUN3QyxJQUFOLENBQVc7QUFDUEMsY0FBQUEsSUFBSSxFQUFFLFNBREM7QUFFUEMsY0FBQUEsS0FBSyxFQUFFakI7QUFGQSxhQUFYO0FBUnFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYXJCK0IsWUFBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ0FoQixZQUFBQSxJQUFJLENBQUNyQixRQUFMLENBQWMsYUFBZCxFQUE2QkQsV0FBN0IsQ0FBeUMsb0JBQXpDO0FBQ011QyxZQUFBQSxPQWZlLEdBZUwsYUFBTWpDLFFBQU4sQ0FBZUksSUFmVjtBQWdCckI3QixZQUFBQSxLQUFLLENBQUN3QyxJQUFOLENBQVc7QUFDUEMsY0FBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsY0FBQUEsS0FBSyxFQUFFZ0I7QUFGQSxhQUFYOztBQWhCcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBN0I7QUFzQkE3QyxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFTLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBTTtBQUMzQlQsSUFBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQjhDLEtBQW5CLENBQXlCLE1BQXpCO0FBQ0gsR0FGRDtBQUdBOUMsRUFBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJTLEVBQTFCLENBQTZCLE9BQTdCLHVFQUFzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNUJtQixZQUFBQSxJQUQ0QixHQUNyQjVCLENBQUMsQ0FBQyx3QkFBRCxDQURvQjtBQUVsQzRCLFlBQUFBLElBQUksQ0FBQ3RCLFdBQUwsQ0FBaUIsU0FBakIsRUFBNEJDLFFBQTVCLENBQXFDLG9CQUFyQztBQUZrQztBQUFBO0FBQUEsbUJBSVJNLEtBQUssQ0FBQ29CLElBQU4sQ0FBVyx5Q0FBWCxDQUpROztBQUFBO0FBSXhCbEIsWUFBQUEsT0FKd0I7QUFLMUJILFlBQUFBLFFBTDBCLEdBS2ZHLE9BQU8sQ0FBQ0MsSUFMTztBQU05QmhCLFlBQUFBLENBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCaUQsT0FBeEIsQ0FBZ0MsT0FBaEM7QUFDQXJCLFlBQUFBLElBQUksQ0FBQ3JCLFFBQUwsQ0FBYyxTQUFkLEVBQXlCRCxXQUF6QixDQUFxQyxvQkFBckM7QUFDQW5CLFlBQUFBLEtBQUssQ0FBQ3dDLElBQU4sQ0FBVztBQUNQQyxjQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxjQUFBQSxLQUFLLEVBQUVqQjtBQUZBLGFBQVg7QUFSOEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFhOUIrQixZQUFBQSxPQUFPLENBQUNDLEdBQVI7QUFDQWhCLFlBQUFBLElBQUksQ0FBQ3JCLFFBQUwsQ0FBYyxTQUFkLEVBQXlCRCxXQUF6QixDQUFxQyxvQkFBckM7QUFDTXVDLFlBQUFBLE9BZndCLEdBZWQsY0FBTWpDLFFBQU4sQ0FBZUksSUFmRDtBQWdCOUI3QixZQUFBQSxLQUFLLENBQUN3QyxJQUFOLENBQVc7QUFDUEMsY0FBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsY0FBQUEsS0FBSyxFQUFFZ0I7QUFGQSxhQUFYOztBQWhCOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdEM7QUFzQkE3QyxFQUFBQSxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQlMsRUFBMUIsQ0FBNkIsT0FBN0IsdUVBQXNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM1Qm1CLFlBQUFBLElBRDRCLEdBQ3JCNUIsQ0FBQyxDQUFDLHdCQUFELENBRG9CO0FBRWxDNEIsWUFBQUEsSUFBSSxDQUFDdEIsV0FBTCxDQUFpQixTQUFqQixFQUE0QkMsUUFBNUIsQ0FBcUMsb0JBQXJDO0FBRmtDO0FBQUE7QUFBQSxtQkFJUk0sS0FBSyxDQUFDb0IsSUFBTixDQUFXLHlDQUFYLENBSlE7O0FBQUE7QUFJeEJsQixZQUFBQSxPQUp3QjtBQUsxQkgsWUFBQUEsUUFMMEIsR0FLZkcsT0FBTyxDQUFDQyxJQUxPO0FBTTlCaEIsWUFBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JpRCxPQUF4QixDQUFnQyxPQUFoQztBQUNBckIsWUFBQUEsSUFBSSxDQUFDckIsUUFBTCxDQUFjLFNBQWQsRUFBeUJELFdBQXpCLENBQXFDLG9CQUFyQztBQUNBbkIsWUFBQUEsS0FBSyxDQUFDd0MsSUFBTixDQUFXO0FBQ1BDLGNBQUFBLElBQUksRUFBRSxTQURDO0FBRVBDLGNBQUFBLEtBQUssRUFBRWpCO0FBRkEsYUFBWDtBQVI4QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWE5QitCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUjtBQUNBaEIsWUFBQUEsSUFBSSxDQUFDckIsUUFBTCxDQUFjLFNBQWQsRUFBeUJELFdBQXpCLENBQXFDLG9CQUFyQztBQUNNdUMsWUFBQUEsT0Fmd0IsR0FlZCxjQUFNakMsUUFBTixDQUFlSSxJQWZEO0FBZ0I5QjdCLFlBQUFBLEtBQUssQ0FBQ3dDLElBQU4sQ0FBVztBQUNQQyxjQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxjQUFBQSxLQUFLLEVBQUVnQjtBQUZBLGFBQVg7O0FBaEI4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF0QztBQXNCQTdDLEVBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCUyxFQUF2QixDQUEwQixPQUExQix1RUFBbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCbUIsWUFBQUEsSUFEeUIsR0FDbEI1QixDQUFDLENBQUMscUJBQUQsQ0FEaUI7QUFFL0I0QixZQUFBQSxJQUFJLENBQUN0QixXQUFMLENBQWlCLFNBQWpCLEVBQTRCQyxRQUE1QixDQUFxQyxvQkFBckM7QUFGK0I7QUFBQTtBQUFBLG1CQUlMTSxLQUFLLENBQUNvQixJQUFOLENBQVcscURBQVgsQ0FKSzs7QUFBQTtBQUlyQmxCLFlBQUFBLE9BSnFCO0FBS3ZCSCxZQUFBQSxRQUx1QixHQUtaRyxPQUFPLENBQUNDLElBTEk7QUFNM0JoQixZQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QmlELE9BQXhCLENBQWdDLE9BQWhDO0FBQ0FyQixZQUFBQSxJQUFJLENBQUNyQixRQUFMLENBQWMsU0FBZCxFQUF5QkQsV0FBekIsQ0FBcUMsb0JBQXJDO0FBQ0FuQixZQUFBQSxLQUFLLENBQUN3QyxJQUFOLENBQVc7QUFDUEMsY0FBQUEsSUFBSSxFQUFFLFNBREM7QUFFUEMsY0FBQUEsS0FBSyxFQUFFakI7QUFGQSxhQUFYO0FBUjJCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYTNCK0IsWUFBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ0FoQixZQUFBQSxJQUFJLENBQUNyQixRQUFMLENBQWMsU0FBZCxFQUF5QkQsV0FBekIsQ0FBcUMsb0JBQXJDO0FBQ011QyxZQUFBQSxPQWZxQixHQWVYLGNBQU1qQyxRQUFOLENBQWVJLElBZko7QUFnQjNCN0IsWUFBQUEsS0FBSyxDQUFDd0MsSUFBTixDQUFXO0FBQ1BDLGNBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGNBQUFBLEtBQUssRUFBRWdCO0FBRkEsYUFBWDs7QUFoQjJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW5DO0FBdUJBN0MsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVUyxFQUFWLENBQWEsT0FBYixFQUFxQixhQUFyQixFQUFvQyxZQUFXO0FBQzNDVSxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSwwQ0FBWixFQUF3RCxRQUF4RDtBQUNILEdBRkQ7QUFHSCxDQWxURDs7Ozs7Ozs7OztBQ2RBLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELGlCQUFpQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNsQmE7QUFDYixvQkFBb0IsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDMUQsMkJBQTJCLG1CQUFPLENBQUMsdUdBQXFDO0FBQ3hFLCtCQUErQixtQkFBTyxDQUFDLCtHQUF5Qzs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQSxjQUFjLG1CQUFPLENBQUMsaUZBQTBCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGNBQWMsbUJBQU8sQ0FBQywyRUFBdUI7QUFDN0Msb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELHdCQUF3QixtQkFBTyxDQUFDLG1HQUFtQztBQUNuRSxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQscUJBQXFCLG1CQUFPLENBQUMseUZBQThCO0FBQzNELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUYsZUFBZSxtQkFBTyxDQUFDLGlGQUEwQjs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2V2YWx1YXRpb24vc2VtZXN0cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbn0pXHJcblxyXG5sZXQgY2hlY2s7XHJcbiAgICBcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIGxldCBpZF9pbnNjcmlwdGlvbiA9IGZhbHNlO1xyXG4gICAgJChcIiNlbnJlZ2lzdGVyLCAjdmFsaWRlciwgI2RldmFsaWRlciwgI3JlY2FsY3VsZXIsICNpbXByaW1lciwgI3N0YXR1dCwgI2RlbGliZXJhdGlvbl9pbmRpdmlkdWVsbGVcIikuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgY29uc3QgZW5hYmxlQnV0dG9ucyA9ICgpID0+IHtcclxuICAgICAgICAkKFwiI2ltcHJpbWVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1pbmZvJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAkKFwiI3N0YXR1dFwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tcHJpbWFyeScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgJChcIiNkZWxpYmVyYXRpb25faW5kaXZpZHVlbGxlXCIpLmFkZENsYXNzKCdidG4tcHJpbWFyeScpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuXHJcblxyXG4gICAgICAgIGlmKGNoZWNrID09IDApIHtcclxuICAgICAgICAgICAgJChcIiNlbnJlZ2lzdGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAgICAgJChcIiN2YWxpZGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1kYW5nZXInKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAkKFwiI2RldmFsaWRlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4tc3VjY2VzcycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgJChcIiNyZWNhbGN1bGVyXCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi13YXJuaW5nJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZW5yZWdpc3RlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgJChcIiN2YWxpZGVyXCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi1kYW5nZXInKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgICAgICQoXCIjZGV2YWxpZGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1zdWNjZXNzJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAgICAgJChcIiNyZWNhbGN1bGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi13YXJuaW5nJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNvcmRlclwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcblxyXG5cclxuICAgIC8vIHBvcCB1cCB0cmlnZ3JlIGFmdGVyIGRvdWJsZSBjbGljayB0clxyXG4gICAgJChcImJvZHlcIikub24oXCJkYmxjbGlja1wiLCBcIiNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9pbnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlkX2luc2NyaXB0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9pbnNjcmlwdGlvbiA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaWRfaW5zY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGltcHJlc3Npb24gZGVsaWJlcmF0aW9uXHJcbiAgICAkKFwiI2RlbGliZXJhdGlvbl9pbmRpdmlkdWVsbGVcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBcclxuICAgICAgICB3aW5kb3cub3BlbignL2V2YWx1YXRpb24vc2VtZXN0cmUvaW1wcmVzc2lvbl9kZWxpYi8nK2lkX2luc2NyaXB0aW9uLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNwcm9tb3Rpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX3Byb21vdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcblxyXG4gICAgJChcIiNnZXRfbGlzdF9ldHVkaWFudFwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLmVtcHR5KClcclxuICAgICAgICBsZXQgc2VtZXN0cmVfaWQgPSAkKCcjc2VtZXN0cmUnKS52YWwoKTtcclxuICAgICAgICBpZihzZW1lc3RyZV9pZCA9PSBcIlwiIHx8ICFzZW1lc3RyZV9pZCkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiBzZW1lc3RyZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2dldF9saXN0X2V0dWRpYW50IGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc2VhcmNoJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm9yZGVyXCIsICQoXCIjb3JkZXJcIikudmFsKCkpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9zZW1lc3RyZS9saXN0Lycrc2VtZXN0cmVfaWQsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIC8vICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKS5EYXRhVGFibGUoKS5kZXN0cm95KClcclxuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikpIHtcclxuICAgICAgICAgICAgICAgICQoJyNsaXN0X2VwcmV1dmVfbm9ybWFsJykuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuaHRtbChyZXNwb25zZS5odG1sKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbFk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2hlY2sgPSByZXNwb25zZS5jaGVjaztcclxuICAgICAgICAgICAgaWYoY2hlY2sgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiT3BlcmF0aW9uIGTDqWphIHZhbGlkZXJcIixcclxuICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtc2VhcmNoJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXNlYXJjaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXByaW1lclwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgICAgICQoXCIjaW1wcmltZXJfbGlzdFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcblxyXG4gICAgJChcIiN2YWxpZGVyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjdmFsaWRlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vc2VtZXN0cmUvdmFsaWRlcicpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgY2hlY2sgPSAxO1xyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjZGV2YWxpZGVyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZGV2YWxpZGVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbG9jay1vcGVuJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL3NlbWVzdHJlL2RldmFsaWRlcicpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgY2hlY2sgPSAwO1xyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2VucmVnaXN0ZXJcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNlbnJlZ2lzdGVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vc2VtZXN0cmUvZW5yZWdpc3RyZScpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgY2hlY2sgPSAwO1xyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXByaW1lclwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgICAgICQoXCIjaW1wcmltZXJfbGlzdFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcbiAgICAkKFwiI2FmZmljaGFnZVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGFmZmljaGFnZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgJChcIiNpbXByZXNzaW9uX2xpc3RcIikuYXR0cihcImhyZWZcIiwgICQoXCIjaW1wcmVzc2lvbl9saXN0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsLTEpK2FmZmljaGFnZSkgXHJcbiAgICAgICAgJChcIiNpbXByZXNzaW9uX2NsYWlyXCIpLmF0dHIoXCJocmVmXCIsICAkKFwiI2ltcHJlc3Npb25fY2xhaXJcIikuYXR0cihcImhyZWZcIikuc2xpY2UoMCwtMSkrYWZmaWNoYWdlKSBcclxuICAgICAgICAkKFwiI2ltcHJlc3Npb25fYW5vbnltYXRcIikuYXR0cihcImhyZWZcIiwgICQoXCIjaW1wcmVzc2lvbl9hbm9ueW1hdFwiKS5hdHRyKFwiaHJlZlwiKS5zbGljZSgwLC0xKSthZmZpY2hhZ2UpIFxyXG4gICAgICAgICQoXCIjaW1wcmVzc2lvbl9yYXRcIikuYXR0cihcImhyZWZcIiwgICQoXCIjaW1wcmVzc2lvbl9yYXRcIikuYXR0cihcImhyZWZcIikuc2xpY2UoMCwtMSkrYWZmaWNoYWdlKSBcclxuICAgICAgICAgICAgIFxyXG4gICAgfSlcclxuICAgICQoXCIjcmVjYWxjdWxlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3JlY2FsY3VsZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1yZWRvLWFsdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9zZW1lc3RyZS9yZWNhbGN1bGVyJyk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAkKFwiI2dldF9saXN0X2V0dWRpYW50XCIpLnRyaWdnZXIoXCJjbGlja1wiKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1yZWRvLWFsdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXJlZG8tYWx0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjc3RhdHV0XCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4geyAgXHJcbiAgICAgICAgJChcIiNzdGF0dXRfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICB9KVxyXG4gICAgJChcIiNzdGF0dXRfYXZhbnRfcmFjaGF0XCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9hdmFudF9yYWNoYXQgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zeW5jJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL3NlbWVzdHJlL3N0YXR1dC9hdmFudHJhY2hhdCcpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgJChcIiNnZXRfbGlzdF9ldHVkaWFudFwiKS50cmlnZ2VyKFwiY2xpY2tcIilcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtc3luYycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXN5bmMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNzdGF0dXRfYXByZXNfcmFjaGF0XCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9hcHJlc19yYWNoYXQgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zeW5jJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL3NlbWVzdHJlL3N0YXR1dC9hcHJlc3JhY2hhdCcpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgJChcIiNnZXRfbGlzdF9ldHVkaWFudFwiKS50cmlnZ2VyKFwiY2xpY2tcIilcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtc3luYycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXN5bmMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNzdGF0dXRfY2F0ZWdvcmllXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9jYXRlZ29yaWUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zeW5jJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL3NlbWVzdHJlL3N0YXR1dC9zdGF0dXRzZW1lc3RyZWNhdGVnb3JpZScpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgJChcIiNnZXRfbGlzdF9ldHVkaWFudFwiKS50cmlnZ2VyKFwiY2xpY2tcIilcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtc3luYycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXN5bmMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICB3aW5kb3cub3BlbignL2V2YWx1YXRpb24vc2VtZXN0cmUvZXh0cmFjdGlvbl9zZW1lc3RyZScsICdfYmxhbmsnKTtcclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PSAnQXJyYXknO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jb25zdHJ1Y3RvcicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHVuJFNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnc2xpY2UnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBBcnJheSA9IGdsb2JhbC5BcnJheTtcbnZhciBtYXggPSBNYXRoLm1heDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zbGljZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcbiAgICB2YXIgZmluID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kLCBsZW5ndGgpO1xuICAgIC8vIGlubGluZSBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBmb3IgdXNhZ2UgbmF0aXZlIGBBcnJheSNzbGljZWAgd2hlcmUgaXQncyBwb3NzaWJsZVxuICAgIHZhciBDb25zdHJ1Y3RvciwgcmVzdWx0LCBuO1xuICAgIGlmIChpc0FycmF5KE8pKSB7XG4gICAgICBDb25zdHJ1Y3RvciA9IE8uY29uc3RydWN0b3I7XG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgICAgaWYgKGlzQ29uc3RydWN0b3IoQ29uc3RydWN0b3IpICYmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuJFNsaWNlKE8sIGssIGZpbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCA9IG5ldyAoQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQ29uc3RydWN0b3IpKG1heChmaW4gLSBrLCAwKSk7XG4gICAgZm9yIChuID0gMDsgayA8IGZpbjsgaysrLCBuKyspIGlmIChrIGluIE8pIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgbiwgT1trXSk7XG4gICAgcmVzdWx0Lmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiY2hlY2siLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImlkX2luc2NyaXB0aW9uIiwiYXR0ciIsImVuYWJsZUJ1dHRvbnMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2VsZWN0MiIsIm9uIiwiaWRfZXRhYiIsInZhbCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJoYXNDbGFzcyIsIndpbmRvdyIsIm9wZW4iLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJlbXB0eSIsInNlbWVzdHJlX2lkIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsInNjcm9sbFgiLCJzY3JvbGxZIiwibGFuZ3VhZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIm1vZGFsIiwiYWZmaWNoYWdlIiwic2xpY2UiLCJ0cmlnZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==