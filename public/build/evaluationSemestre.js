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
  $("#get_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var semestre_id, icon, formData, request, response, message;
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
              formData = new FormData();
              formData.append("order", $("#order").val());
              _context4.next = 13;
              return axios.post('/evaluation/semestre/list/' + semestre_id, formData);

            case 13:
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
              _context4.next = 29;
              break;

            case 23:
              _context4.prev = 23;
              _context4.t0 = _context4["catch"](8);
              console.log(_context4.t0);
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              message = _context4.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 29:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[8, 23]]);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
  $("#imprimer").on("click", function () {
    $("#imprimer_list").modal("show");
  });
  $("#valider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            icon = $("#valider i");
            icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
            _context5.prev = 2;
            _context5.next = 5;
            return axios.post('/evaluation/semestre/valider');

          case 5:
            request = _context5.sent;
            response = request.data;
            check = 1;
            enableButtons();
            Toast.fire({
              icon: 'success',
              title: response
            });
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            _context5.next = 19;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            message = _context5.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 13]]);
  })));
  $("#devalider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            icon = $("#devalider i");
            icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
            _context6.prev = 2;
            _context6.next = 5;
            return axios.post('/evaluation/semestre/devalider');

          case 5:
            request = _context6.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context6.next = 19;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
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
  $("#enregister").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            icon = $("#enregister i");
            icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
            _context7.prev = 2;
            _context7.next = 5;
            return axios.post('/evaluation/semestre/enregistre');

          case 5:
            request = _context7.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
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
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
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
  $("#recalculer").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            icon = $("#recalculer i");
            icon.removeClass('fa-redo-alt').addClass("fa-spinner fa-spin");
            _context8.prev = 2;
            _context8.next = 5;
            return axios.post('/evaluation/semestre/recalculer');

          case 5:
            request = _context8.sent;
            response = request.data;
            icon.addClass('fa-redo-alt').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context8.next = 17;
            break;

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](2);
            console.log(_context8.t0);
            icon.addClass('fa-redo-alt').removeClass("fa-spinner fa-spin");
            message = _context8.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 11]]);
  })));
  $("#statut").on("click", function () {
    $("#statut_modal").modal("show");
  });
  $("#statut_avant_rachat").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            icon = $("#statut_avant_rachat i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context9.prev = 2;
            _context9.next = 5;
            return axios.post('/evaluation/semestre/statut/avantrachat');

          case 5:
            request = _context9.sent;
            response = request.data;
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context9.next = 17;
            break;

          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](2);
            console.log(_context9.t0);
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            message = _context9.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 11]]);
  })));
  $("#statut_apres_rachat").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            icon = $("#statut_apres_rachat i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context10.prev = 2;
            _context10.next = 5;
            return axios.post('/evaluation/semestre/statut/apresrachat');

          case 5:
            request = _context10.sent;
            response = request.data;
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context10.next = 17;
            break;

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](2);
            console.log(_context10.t0);
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            message = _context10.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 17:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 11]]);
  })));
  $("#statut_categorie").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            icon = $("#statut_categorie i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context11.prev = 2;
            _context11.next = 5;
            return axios.post('/evaluation/semestre/statut/statutsemestrecategorie');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGNBQWMsbUJBQU8sQ0FBQywyRUFBdUI7QUFDN0Msb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELHdCQUF3QixtQkFBTyxDQUFDLG1HQUFtQztBQUNuRSxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQscUJBQXFCLG1CQUFPLENBQUMseUZBQThCO0FBQzNELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUYsZUFBZSxtQkFBTyxDQUFDLGlGQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2V2YWx1YXRpb24vc2VtZXN0cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcclxuICAgIH0sXHJcbn0pXHJcblxyXG5sZXQgY2hlY2s7XHJcbiAgICBcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgICQoXCIjZW5yZWdpc3RlciwgI3ZhbGlkZXIsICNkZXZhbGlkZXIsICNyZWNhbGN1bGVyLCAjaW1wcmltZXIsICNzdGF0dXRcIikuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgY29uc3QgZW5hYmxlQnV0dG9ucyA9ICgpID0+IHtcclxuICAgICAgICAkKFwiI2ltcHJpbWVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1pbmZvJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAkKFwiI3N0YXR1dFwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tcHJpbWFyeScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcblxyXG4gICAgICAgIGlmKGNoZWNrID09IDApIHtcclxuICAgICAgICAgICAgJChcIiNlbnJlZ2lzdGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAgICAgJChcIiN2YWxpZGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1kYW5nZXInKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG4gICAgICAgICAgICAkKFwiI2RldmFsaWRlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4tc3VjY2VzcycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgJChcIiNyZWNhbGN1bGVyXCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi13YXJuaW5nJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZW5yZWdpc3RlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICAgICAgJChcIiN2YWxpZGVyXCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi1kYW5nZXInKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgICAgICQoXCIjZGV2YWxpZGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1zdWNjZXNzJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAgICAgJChcIiNyZWNhbGN1bGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi13YXJuaW5nJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNvcmRlclwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9mb3JtYXRpb24vJytpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NlbWVzdHJlLycraWRfcHJvbW90aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgIFxyXG5cclxuICAgICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnRcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKS5lbXB0eSgpXHJcbiAgICAgICAgbGV0IHNlbWVzdHJlX2lkID0gJCgnI3NlbWVzdHJlJykudmFsKCk7XHJcbiAgICAgICAgaWYoc2VtZXN0cmVfaWQgPT0gXCJcIiB8fCAhc2VtZXN0cmVfaWQpIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gc2VtZXN0cmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNnZXRfbGlzdF9ldHVkaWFudCBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNlYXJjaCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJvcmRlclwiLCAkKFwiI29yZGVyXCIpLnZhbCgpKVxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vc2VtZXN0cmUvbGlzdC8nK3NlbWVzdHJlX2lkLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAvLyAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuRGF0YVRhYmxlKCkuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbGlzdF9lcHJldXZlX25vcm1hbCcpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLmh0bWwocmVzcG9uc2UuaHRtbCkuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxZOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNoZWNrID0gcmVzcG9uc2UuY2hlY2s7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrID09IDEpe1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9wZXJhdGlvbiBkw6lqYSB2YWxpZGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXNlYXJjaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zZWFyY2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQoXCIjaW1wcmltZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7ICBcclxuICAgICAgICAkKFwiI2ltcHJpbWVyX2xpc3RcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjdmFsaWRlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3ZhbGlkZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL3NlbWVzdHJlL3ZhbGlkZXInKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNoZWNrID0gMTtcclxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2RldmFsaWRlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RldmFsaWRlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9zZW1lc3RyZS9kZXZhbGlkZXInKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNoZWNrID0gMDtcclxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNlbnJlZ2lzdGVyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZW5yZWdpc3RlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL3NlbWVzdHJlL2VucmVnaXN0cmUnKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNoZWNrID0gMDtcclxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjaW1wcmltZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7ICBcclxuICAgICAgICAkKFwiI2ltcHJpbWVyX2xpc3RcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICB9KVxyXG4gICAgJChcIiNhZmZpY2hhZ2VcIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBhZmZpY2hhZ2UgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICQoXCIjaW1wcmVzc2lvbl9saXN0XCIpLmF0dHIoXCJocmVmXCIsICAkKFwiI2ltcHJlc3Npb25fbGlzdFwiKS5hdHRyKFwiaHJlZlwiKS5zbGljZSgwLC0xKSthZmZpY2hhZ2UpIFxyXG4gICAgICAgICQoXCIjaW1wcmVzc2lvbl9jbGFpclwiKS5hdHRyKFwiaHJlZlwiLCAgJChcIiNpbXByZXNzaW9uX2NsYWlyXCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsLTEpK2FmZmljaGFnZSkgXHJcbiAgICAgICAgJChcIiNpbXByZXNzaW9uX2Fub255bWF0XCIpLmF0dHIoXCJocmVmXCIsICAkKFwiI2ltcHJlc3Npb25fYW5vbnltYXRcIikuYXR0cihcImhyZWZcIikuc2xpY2UoMCwtMSkrYWZmaWNoYWdlKSBcclxuICAgICAgICAkKFwiI2ltcHJlc3Npb25fcmF0XCIpLmF0dHIoXCJocmVmXCIsICAkKFwiI2ltcHJlc3Npb25fcmF0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsLTEpK2FmZmljaGFnZSkgXHJcbiAgICAgICAgICAgICBcclxuICAgIH0pXHJcbiAgICAkKFwiI3JlY2FsY3VsZXJcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNyZWNhbGN1bGVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtcmVkby1hbHQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vc2VtZXN0cmUvcmVjYWxjdWxlcicpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtcmVkby1hbHQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1yZWRvLWFsdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI3N0YXR1dFwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgICAgICQoXCIjc3RhdHV0X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuICAgICQoXCIjc3RhdHV0X2F2YW50X3JhY2hhdFwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzdGF0dXRfYXZhbnRfcmFjaGF0IGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3luYycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9zZW1lc3RyZS9zdGF0dXQvYXZhbnRyYWNoYXQnKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXN5bmMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zeW5jJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjc3RhdHV0X2FwcmVzX3JhY2hhdFwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzdGF0dXRfYXByZXNfcmFjaGF0IGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3luYycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9zZW1lc3RyZS9zdGF0dXQvYXByZXNyYWNoYXQnKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXN5bmMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zeW5jJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjc3RhdHV0X2NhdGVnb3JpZVwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzdGF0dXRfY2F0ZWdvcmllIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3luYycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9zZW1lc3RyZS9zdGF0dXQvc3RhdHV0c2VtZXN0cmVjYXRlZ29yaWUnKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXN5bmMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zeW5jJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG4gICAgXHJcblxyXG5cclxuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XHJcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcclxudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcclxuXHJcbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xyXG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xyXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xyXG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJyYXkgPSBbXTtcclxuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XHJcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XHJcbiAgfSk7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XHJcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XHJcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xyXG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcclxuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xyXG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xyXG59O1xyXG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xyXG5cclxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxyXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xyXG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PSAnQXJyYXknO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xyXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xyXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xyXG52YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jb25zdHJ1Y3RvcicpO1xyXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XHJcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcclxudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XHJcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcclxudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xyXG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XHJcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XHJcbnZhciB1biRTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xyXG5cclxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzbGljZScpO1xyXG5cclxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcclxudmFyIEFycmF5ID0gZ2xvYmFsLkFycmF5O1xyXG52YXIgbWF4ID0gTWF0aC5tYXg7XHJcblxyXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc2xpY2VcclxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xyXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XHJcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcclxuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KHRoaXMpO1xyXG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xyXG4gICAgdmFyIGsgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbmd0aCk7XHJcbiAgICB2YXIgZmluID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kLCBsZW5ndGgpO1xyXG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXHJcbiAgICB2YXIgQ29uc3RydWN0b3IsIHJlc3VsdCwgbjtcclxuICAgIGlmIChpc0FycmF5KE8pKSB7XHJcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcclxuICAgICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcclxuICAgICAgaWYgKGlzQ29uc3RydWN0b3IoQ29uc3RydWN0b3IpICYmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xyXG4gICAgICAgIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KENvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XHJcbiAgICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBudWxsKSBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gdW4kU2xpY2UoTywgaywgZmluKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0ID0gbmV3IChDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcclxuICAgIGZvciAobiA9IDA7IGsgPCBmaW47IGsrKywgbisrKSBpZiAoayBpbiBPKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIG4sIE9ba10pO1xyXG4gICAgcmVzdWx0Lmxlbmd0aCA9IG47XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJjaGVjayIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYXR0ciIsImVuYWJsZUJ1dHRvbnMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2VsZWN0MiIsIm9uIiwiaWRfZXRhYiIsInZhbCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJpZF9wcm9tb3Rpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJlbXB0eSIsInNlbWVzdHJlX2lkIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsInNjcm9sbFgiLCJzY3JvbGxZIiwibGFuZ3VhZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIm1vZGFsIiwiYWZmaWNoYWdlIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9