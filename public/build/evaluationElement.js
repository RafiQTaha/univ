(self["webpackChunk"] = self["webpackChunk"] || []).push([["evaluationElement"],{

/***/ "./assets/components/evaluation/element.js":
/*!*************************************************!*\
  !*** ./assets/components/evaluation/element.js ***!
  \*************************************************/
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
  $("#enregister, #valider, #devalider, #recalculer, #imprimer, #statut").attr('disabled', true);

  var enableButtons = function enableButtons() {
    $("#imprimer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false);
    $("#statut").removeClass('btn-secondary').addClass('btn-primary').attr('disabled', false);

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
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_semestre, response, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_semestre = $(this).val();
            response = "";

            if (!(id_semestre != "")) {
              _context4.next = 7;
              break;
            }

            _context4.next = 5;
            return axios.get('/api/module/' + id_semestre);

          case 5:
            request = _context4.sent;
            response = request.data;

          case 7:
            $('#module').html(response).select2();

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#module").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_module, response, request;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_module = $(this).val();
            response = "";

            if (!(id_module != "")) {
              _context5.next = 7;
              break;
            }

            _context5.next = 5;
            return axios.get('/api/element/' + id_module);

          case 5:
            request = _context5.sent;
            response = request.data;

          case 7:
            $('#element').html(response).select2();

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#get_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var button, element_id, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              button = $(this);
              button.attr("disabled", true);
              $("#list_epreuve_normal").empty();
              element_id = $('#element').val();

              if (!(element_id == "" || !element_id)) {
                _context6.next = 8;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection element!'
              });
              return _context6.abrupt("return");

            case 8:
              icon = $("#get_list_etudiant i");
              icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
              _context6.prev = 10;
              formData = new FormData();
              formData.append("order", $("#order").val());
              _context6.next = 15;
              return axios.post('/evaluation/element/list/' + element_id, formData);

            case 15:
              request = _context6.sent;
              response = request.data; // $("#list_epreuve_normal").DataTable().destroy()

              if ($.fn.DataTable.isDataTable("#list_epreuve_normal")) {
                $('#list_epreuve_normal').DataTable().clear().destroy();
              }

              $("#list_epreuve_normal").html(response.html).DataTable({
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
              button.attr("disabled", false);
              _context6.next = 33;
              break;

            case 26:
              _context6.prev = 26;
              _context6.t0 = _context6["catch"](10);
              console.log(_context6.t0);
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              message = _context6.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              button.attr("disabled", false);

            case 33:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[10, 26]]);
    }));

    return function (_x) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("#imprimer").on("click", function () {
    $("#imprimer_list").modal("show");
  });
  $("#valider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var icon, button, request, response, message;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            icon = $("#valider i");
            button = $(this);
            button.attr("disabled", true);
            icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
            _context7.prev = 4;
            _context7.next = 7;
            return axios.post('/evaluation/element/valider');

          case 7:
            request = _context7.sent;
            response = request.data;
            check = 1;
            enableButtons();
            Toast.fire({
              icon: 'success',
              title: response
            });
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin"); // button.attr("disabled", false)

            _context7.next = 21;
            break;

          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7["catch"](4);
            console.log(_context7.t0);
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            message = _context7.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            }); // button.attr("disabled", false)

          case 21:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this, [[4, 15]]);
  })));
  $("#devalider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var icon, button, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            icon = $("#devalider i");
            button = $(this);
            button.attr("disabled", true);
            icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
            _context8.prev = 4;
            _context8.next = 7;
            return axios.post('/evaluation/element/devalider');

          case 7:
            request = _context8.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            }); // button.attr("disabled", false)

            _context8.next = 21;
            break;

          case 15:
            _context8.prev = 15;
            _context8.t0 = _context8["catch"](4);
            console.log(_context8.t0);
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            message = _context8.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            }); // button.attr("disabled", false)

          case 21:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this, [[4, 15]]);
  })));
  $("#enregister").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var icon, button, request, response, message;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            icon = $("#enregister i");
            button = $(this);
            button.attr("disabled", true);
            icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
            _context9.prev = 4;
            _context9.next = 7;
            return axios.post('/evaluation/element/enregistre');

          case 7:
            request = _context9.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            }); // button.attr("disabled", false)

            _context9.next = 21;
            break;

          case 15:
            _context9.prev = 15;
            _context9.t0 = _context9["catch"](4);
            console.log(_context9.t0);
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
            message = _context9.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            }); // button.attr("disabled", false)

          case 21:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this, [[4, 15]]);
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
  $("#recalculer").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var icon, button, request, response, message;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            icon = $("#recalculer i");
            button = $(this);
            button.attr("disabled", true);
            icon.removeClass('fa-redo-alt').addClass("fa-spinner fa-spin");
            _context10.prev = 4;
            _context10.next = 7;
            return axios.post('/evaluation/element/recalculer');

          case 7:
            request = _context10.sent;
            response = request.data;
            icon.addClass('fa-redo-alt').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            button.attr("disabled", false);
            _context10.next = 21;
            break;

          case 14:
            _context10.prev = 14;
            _context10.t0 = _context10["catch"](4);
            console.log(_context10.t0);
            icon.addClass('fa-redo-alt').removeClass("fa-spinner fa-spin");
            message = _context10.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            button.attr("disabled", false);

          case 21:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this, [[4, 14]]);
  })));
  $("#statut").on("click", function () {
    $("#statut_modal").modal("show");
  });
  $("#statut_s1").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            icon = $("#statut_s1 i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context11.prev = 2;
            _context11.next = 5;
            return axios.post('/evaluation/element/statut/s1');

          case 5:
            request = _context11.sent;
            response = request.data;
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context11.next = 17;
            break;

          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](2);
            console.log(_context11.t0);
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            message = _context11.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 17:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 11]]);
  })));
  $("#statut_s2").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            icon = $("#statut_s2 i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context12.prev = 2;
            _context12.next = 5;
            return axios.post('/evaluation/element/statut/s2');

          case 5:
            request = _context12.sent;
            response = request.data;
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context12.next = 17;
            break;

          case 11:
            _context12.prev = 11;
            _context12.t0 = _context12["catch"](2);
            console.log(_context12.t0);
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            message = _context12.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 17:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 11]]);
  })));
  $("#statut_rachat").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            icon = $("#statut_rachat i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context13.prev = 2;
            _context13.next = 5;
            return axios.post('/evaluation/element/statut/rachat');

          case 5:
            request = _context13.sent;
            response = request.data;
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context13.next = 17;
            break;

          case 11:
            _context13.prev = 11;
            _context13.t0 = _context13["catch"](2);
            console.log(_context13.t0);
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            message = _context13.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 17:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[2, 11]]);
  })));
  $('body').on('click', '#extraction', function () {
    window.open('/evaluation/element/extraction_element', '_blank');
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/evaluation/element.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQyx1RUFBcUI7QUFDMUMsY0FBYyxtQkFBTyxDQUFDLDJFQUF1QjtBQUM3QyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDekQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsd0JBQXdCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ25FLHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxxQkFBcUIsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDM0Qsc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQztBQUMxRixlQUFlLG1CQUFPLENBQUMsaUZBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBNEQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZXZhbHVhdGlvbi9lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG59KVxyXG5cclxuICAgIGxldCBjaGVjaztcclxuICAgIFxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgXHJcbiAgICAkKFwiI2VucmVnaXN0ZXIsICN2YWxpZGVyLCAjZGV2YWxpZGVyLCAjcmVjYWxjdWxlciwgI2ltcHJpbWVyLCAjc3RhdHV0XCIpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgIGNvbnN0IGVuYWJsZUJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgJChcIiNpbXByaW1lclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4taW5mbycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgJChcIiNzdGF0dXRcIikucmVtb3ZlQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5hZGRDbGFzcygnYnRuLXByaW1hcnknKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG5cclxuICAgICAgICBpZihjaGVjayA9PSAwKSB7XHJcbiAgICAgICAgICAgICQoXCIjZW5yZWdpc3RlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tcHJpbWFyeScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgICQoXCIjdmFsaWRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tZGFuZ2VyJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAgICAgJChcIiNkZXZhbGlkZXJcIikuYWRkQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5yZW1vdmVDbGFzcygnYnRuLXN1Y2Nlc3MnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgICAgICQoXCIjcmVjYWxjdWxlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4td2FybmluZycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2VucmVnaXN0ZXJcIikuYWRkQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgICAgICQoXCIjdmFsaWRlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4tZGFuZ2VyJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgICAgICAkKFwiI2RldmFsaWRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tc3VjY2VzcycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgICQoXCIjcmVjYWxjdWxlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4td2FybmluZycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjb3JkZXJcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNzZW1lc3RyZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9zZW1lc3RyZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9tb2R1bGUvJytpZF9zZW1lc3RyZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNtb2R1bGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX21vZHVsZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZWxlbWVudC8nK2lkX21vZHVsZSk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2dldF9saXN0X2V0dWRpYW50XCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgYnV0dG9uID0gJCh0aGlzKTtcclxuICAgICAgICBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIHRydWUpXHJcbiAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLmVtcHR5KClcclxuICAgICAgICBsZXQgZWxlbWVudF9pZCA9ICQoJyNlbGVtZW50JykudmFsKCk7XHJcbiAgICAgICAgaWYoZWxlbWVudF9pZCA9PSBcIlwiIHx8ICFlbGVtZW50X2lkKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIGVsZW1lbnQhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNnZXRfbGlzdF9ldHVkaWFudCBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNlYXJjaCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJvcmRlclwiLCAkKFwiI29yZGVyXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vZWxlbWVudC9saXN0LycrZWxlbWVudF9pZCwgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgLy8gJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLkRhdGFUYWJsZSgpLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2xpc3RfZXByZXV2ZV9ub3JtYWwnKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKS5odG1sKHJlc3BvbnNlLmh0bWwpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2hlY2sgPSByZXNwb25zZS5jaGVjaztcclxuICAgICAgICAgICAgaWYoY2hlY2sgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiT3BlcmF0aW9uIGTDqWphIHZhbGlkZXJcIixcclxuICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtc2VhcmNoJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXNlYXJjaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJChcIiNpbXByaW1lclwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgICAgICQoXCIjaW1wcmltZXJfbGlzdFwiKS5tb2RhbChcInNob3dcIilcclxuICAgIH0pXHJcblxyXG4gICAgJChcIiN2YWxpZGVyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjdmFsaWRlciBpXCIpO1xyXG4gICAgICAgIGxldCBidXR0b24gPSAkKHRoaXMpO1xyXG4gICAgICAgIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL2VsZW1lbnQvdmFsaWRlcicpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgY2hlY2sgPSAxO1xyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAvLyBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2RldmFsaWRlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RldmFsaWRlciBpXCIpO1xyXG4gICAgICAgIGxldCBidXR0b24gPSAkKHRoaXMpO1xyXG4gICAgICAgIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrLW9wZW4nKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vZWxlbWVudC9kZXZhbGlkZXInKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNoZWNrID0gMDtcclxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jay1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2VucmVnaXN0ZXJcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNlbnJlZ2lzdGVyIGlcIik7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9ICQodGhpcyk7XHJcbiAgICAgICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKVxyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL2VsZW1lbnQvZW5yZWdpc3RyZScpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgY2hlY2sgPSAwO1xyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2ltcHJpbWVyXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4geyAgXHJcbiAgICAgICAgJChcIiNpbXByaW1lcl9saXN0XCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuICAgICQoXCIjYWZmaWNoYWdlXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgYWZmaWNoYWdlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAkKFwiI2ltcHJlc3Npb25fbGlzdFwiKS5hdHRyKFwiaHJlZlwiLCAgJChcIiNpbXByZXNzaW9uX2xpc3RcIikuYXR0cihcImhyZWZcIikuc2xpY2UoMCwtMSkrYWZmaWNoYWdlKSBcclxuICAgICAgICAkKFwiI2ltcHJlc3Npb25fY2xhaXJcIikuYXR0cihcImhyZWZcIiwgICQoXCIjaW1wcmVzc2lvbl9jbGFpclwiKS5hdHRyKFwiaHJlZlwiKS5zbGljZSgwLC0xKSthZmZpY2hhZ2UpIFxyXG4gICAgICAgICQoXCIjaW1wcmVzc2lvbl9hbm9ueW1hdFwiKS5hdHRyKFwiaHJlZlwiLCAgJChcIiNpbXByZXNzaW9uX2Fub255bWF0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsLTEpK2FmZmljaGFnZSkgXHJcbiAgICAgICAgJChcIiNpbXByZXNzaW9uX3JhdFwiKS5hdHRyKFwiaHJlZlwiLCAgJChcIiNpbXByZXNzaW9uX3JhdFwiKS5hdHRyKFwiaHJlZlwiKS5zbGljZSgwLC0xKSthZmZpY2hhZ2UpIFxyXG4gICAgICAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgJChcIiNyZWNhbGN1bGVyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcmVjYWxjdWxlciBpXCIpO1xyXG4gICAgICAgIGxldCBidXR0b24gPSAkKHRoaXMpO1xyXG4gICAgICAgIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSlcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1yZWRvLWFsdCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9lbGVtZW50L3JlY2FsY3VsZXInKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXJlZG8tYWx0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtcmVkby1hbHQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI3N0YXR1dFwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgICAgICQoXCIjc3RhdHV0X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuICAgICQoXCIjc3RhdHV0X3MxXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9zMSBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXN5bmMnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vZWxlbWVudC9zdGF0dXQvczEnKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXN5bmMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zeW5jJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjc3RhdHV0X3MyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9zMiBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXN5bmMnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vZWxlbWVudC9zdGF0dXQvczInKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXN5bmMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zeW5jJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjc3RhdHV0X3JhY2hhdFwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzdGF0dXRfcmFjaGF0IGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3luYycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9lbGVtZW50L3N0YXR1dC9yYWNoYXQnKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXN5bmMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zeW5jJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICB3aW5kb3cub3BlbignL2V2YWx1YXRpb24vZWxlbWVudC9leHRyYWN0aW9uX2VsZW1lbnQnLCAnX2JsYW5rJyk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcclxudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xyXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xyXG5cclxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XHJcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXHJcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XHJcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcnJheSA9IFtdO1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcclxuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4geyBmb286IDEgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcclxuICB9KTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcclxudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcclxudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XHJcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xyXG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XHJcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XHJcbn07XHJcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XHJcblxyXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXHJcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XHJcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09ICdBcnJheSc7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XHJcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XHJcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcclxudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xyXG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcclxudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xyXG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XHJcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcclxudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcclxudmFyIHVuJFNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XHJcblxyXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJyk7XHJcblxyXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xyXG52YXIgQXJyYXkgPSBnbG9iYWwuQXJyYXk7XHJcbnZhciBtYXggPSBNYXRoLm1heDtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuc2xpY2VgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxyXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcclxuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xyXG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XHJcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XHJcbiAgICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcclxuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XHJcbiAgICAvLyBpbmxpbmUgYEFycmF5U3BlY2llc0NyZWF0ZWAgZm9yIHVzYWdlIG5hdGl2ZSBgQXJyYXkjc2xpY2VgIHdoZXJlIGl0J3MgcG9zc2libGVcclxuICAgIHZhciBDb25zdHJ1Y3RvciwgcmVzdWx0LCBuO1xyXG4gICAgaWYgKGlzQXJyYXkoTykpIHtcclxuICAgICAgQ29uc3RydWN0b3IgPSBPLmNvbnN0cnVjdG9yO1xyXG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xyXG4gICAgICBpZiAoaXNDb25zdHJ1Y3RvcihDb25zdHJ1Y3RvcikgJiYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XHJcbiAgICAgICAgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcclxuICAgICAgICBpZiAoQ29uc3RydWN0b3IgPT09IG51bGwpIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB1biRTbGljZShPLCBrLCBmaW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyBBcnJheSA6IENvbnN0cnVjdG9yKShtYXgoZmluIC0gaywgMCkpO1xyXG4gICAgZm9yIChuID0gMDsgayA8IGZpbjsgaysrLCBuKyspIGlmIChrIGluIE8pIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgbiwgT1trXSk7XHJcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImNoZWNrIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhdHRyIiwiZW5hYmxlQnV0dG9ucyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzZWxlY3QyIiwib24iLCJpZF9ldGFiIiwidmFsIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsImlkX3NlbWVzdHJlIiwiaWRfbW9kdWxlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uIiwiZW1wdHkiLCJlbGVtZW50X2lkIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImxhbmd1YWdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJtb2RhbCIsImFmZmljaGFnZSIsInNsaWNlIiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=