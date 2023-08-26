(self["webpackChunk"] = self["webpackChunk"] || []).push([["evaluationAnnee"],{

/***/ "./assets/components/evaluation/annee.js":
/*!***********************************************!*\
  !*** ./assets/components/evaluation/annee.js ***!
  \***********************************************/
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
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: function didOpen(toast) {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});
var check;
$(document).ready(function () {
  $("#enregister, #valider, #devalider, #recalculer, #imprimer, #statut").attr("disabled", true);

  var enableButtons = function enableButtons() {
    $("#imprimer").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
    $("#extraction").removeClass("btn-secondary").addClass("btn-success").attr("disabled", false);
    $("#statut").removeClass("btn-secondary").addClass("btn-primary").attr("disabled", false);

    if (check == 0) {
      $("#enregister").removeClass("btn-secondary").addClass("btn-primary").attr("disabled", false);
      $("#valider").removeClass("btn-secondary").addClass("btn-danger").attr("disabled", false);
      $("#devalider").addClass("btn-secondary").removeClass("btn-success").attr("disabled", true);
      $("#recalculer").addClass("btn-secondary").removeClass("btn-warning").attr("disabled", true);
    } else {
      $("#enregister").addClass("btn-secondary").removeClass("btn-primary").attr("disabled", true);
      $("#valider").addClass("btn-secondary").removeClass("btn-danger").attr("disabled", true);
      $("#devalider").removeClass("btn-secondary").addClass("btn-success").attr("disabled", false);
      $("#recalculer").removeClass("btn-secondary").addClass("btn-warning").attr("disabled", false);
    }
  };

  $("#etablissement").select2();
  $("#order").select2();
  $("#etablissement").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
            return axios.get("/api/formation/" + id_etab);

          case 5:
            request = _context.sent;
            response = request.data;

          case 7:
            $("#formation").html(response).select2();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
            return axios.get("/api/promotion/" + id_formation);

          case 5:
            request = _context2.sent;
            response = request.data;

          case 7:
            $("#promotion").html(response).select2();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#get_list_etudiant").on("click", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var promotion_id, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              $("#list_epreuve_normal").empty();
              promotion_id = $("#promotion").val();

              if (!(promotion_id == "" || !promotion_id)) {
                _context3.next = 6;
                break;
              }

              Toast.fire({
                icon: "error",
                title: "Veuillez selection promotion!"
              });
              return _context3.abrupt("return");

            case 6:
              icon = $("#get_list_etudiant i");
              icon.removeClass("fa-search").addClass("fa-spinner fa-spin");
              _context3.prev = 8;
              formData = new FormData();
              formData.append("order", $("#order").val());
              _context3.next = 13;
              return axios.post("/evaluation/annee/list/" + promotion_id, formData);

            case 13:
              request = _context3.sent;
              response = request.data; // $("#list_epreuve_normal").DataTable().destroy()

              if ($.fn.DataTable.isDataTable("#list_epreuve_normal")) {
                $("#list_epreuve_normal").DataTable().clear().destroy();
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
                  icon: "info",
                  title: "Operation déja valider"
                });
              }

              enableButtons();
              icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
              _context3.next = 29;
              break;

            case 23:
              _context3.prev = 23;
              _context3.t0 = _context3["catch"](8);
              console.log(_context3.t0);
              icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
              message = _context3.t0.response.data;
              Toast.fire({
                icon: "error",
                title: message
              });

            case 29:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[8, 23]]);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
  $("#imprimer").on("click", function () {
    $("#imprimer_list").modal("show");
  });
  $("#valider").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            icon = $("#valider i");
            icon.removeClass("fa-lock").addClass("fa-spinner fa-spin");
            _context4.prev = 2;
            _context4.next = 5;
            return axios.post("/evaluation/annee/valider");

          case 5:
            request = _context4.sent;
            response = request.data;
            check = 1;
            enableButtons();
            Toast.fire({
              icon: "success",
              title: response
            });
            icon.addClass("fa-lock").removeClass("fa-spinner fa-spin");
            _context4.next = 19;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            icon.addClass("fa-lock").removeClass("fa-spinner fa-spin");
            message = _context4.t0.response.data;
            Toast.fire({
              icon: "error",
              title: message
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 13]]);
  })));
  $("#devalider").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            icon = $("#devalider i");
            icon.removeClass("fa-lock-open").addClass("fa-spinner fa-spin");
            _context5.prev = 2;
            _context5.next = 5;
            return axios.post("/evaluation/annee/devalider");

          case 5:
            request = _context5.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass("fa-lock-open").removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: "success",
              title: response
            });
            _context5.next = 19;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            icon.addClass("fa-lock-open").removeClass("fa-spinner fa-spin");
            message = _context5.t0.response.data;
            Toast.fire({
              icon: "error",
              title: message
            });

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 13]]);
  })));
  $("#enregister").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            icon = $("#enregister i");
            icon.removeClass("fa-check").addClass("fa-spinner fa-spin");
            _context6.prev = 2;
            _context6.next = 5;
            return axios.post("/evaluation/annee/enregistre");

          case 5:
            request = _context6.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass("fa-check").removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: "success",
              title: response
            });
            _context6.next = 19;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            icon.addClass("fa-check").removeClass("fa-spinner fa-spin");
            message = _context6.t0.response.data;
            Toast.fire({
              icon: "error",
              title: message
            });

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 13]]);
  })));
  $("#imprimer").on("click", function () {
    $("#imprimer_list").modal("show");
  });
  $("#affichage").on("change", function () {
    var affichage = $(this).val();
    $("#impression_list").attr("href", $("#impression_list").attr("href").slice(0, -1) + affichage);
    $("#impression_clair").attr("href", $("#impression_clair").attr("href").slice(0, -1) + affichage);
    $("#impression_anonymat").attr("href", $("#impression_anonymat").attr("href").slice(0, -1) + affichage);
    $("#impression_rat").attr("href", $("#impression_rat").attr("href").slice(0, -1) + affichage);
  });
  $("#recalculer").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            icon = $("#recalculer i");
            icon.removeClass("fa-redo-alt").addClass("fa-spinner fa-spin");
            _context7.prev = 2;
            _context7.next = 5;
            return axios.post("/evaluation/annee/recalculer");

          case 5:
            request = _context7.sent;
            response = request.data;
            icon.addClass("fa-redo-alt").removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: "success",
              title: response
            });
            _context7.next = 17;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            icon.addClass("fa-redo-alt").removeClass("fa-spinner fa-spin");
            message = _context7.t0.response.data;
            Toast.fire({
              icon: "error",
              title: message
            });

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 11]]);
  })));
  $("#statut").on("click", function () {
    $("#statut_modal").modal("show");
  });
  $("#statut_apres_rachat").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            icon = $("#statut_apres_rachat i");
            icon.removeClass("fa-sync").addClass("fa-spinner fa-spin");
            _context8.prev = 2;
            _context8.next = 5;
            return axios.post("/evaluation/annee/statut/apresrachat");

          case 5:
            request = _context8.sent;
            response = request.data;
            icon.addClass("fa-sync").removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: "success",
              title: response
            });
            _context8.next = 17;
            break;

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](2);
            console.log(_context8.t0);
            icon.addClass("fa-sync").removeClass("fa-spinner fa-spin");
            message = _context8.t0.response.data;
            Toast.fire({
              icon: "error",
              title: message
            });

          case 17:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 11]]);
  })));
  $("#statut_categorie").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            icon = $("#statut_categorie i");
            icon.removeClass("fa-sync").addClass("fa-spinner fa-spin");
            _context9.prev = 2;
            _context9.next = 5;
            return axios.post("/evaluation/annee/statut/statutanneecategorie");

          case 5:
            request = _context9.sent;
            response = request.data;
            icon.addClass("fa-sync").removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: "success",
              title: response
            });
            _context9.next = 17;
            break;

          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](2);
            console.log(_context9.t0);
            icon.addClass("fa-sync").removeClass("fa-spinner fa-spin");
            message = _context9.t0.response.data;
            Toast.fire({
              icon: "error",
              title: message
            });

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 11]]);
  })));
  $("body").on("click", "#extraction", /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault(); // const icon = $("#extraction_epv_valide_s2 i");

              if (!($("#etablissement").val() == "")) {
                _context10.next = 4;
                break;
              }

              Toast.fire({
                icon: "error",
                title: "Veuillez selectionnez une etablissement!"
              });
              return _context10.abrupt("return");

            case 4:
              window.open("/evaluation/annee/extraction_annee/" + $("#etablissement").val(), "_blank");

            case 5:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x2) {
      return _ref10.apply(this, arguments);
    };
  }());
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/evaluation/annee.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNUQSxjQUFjLG1CQUFPLENBQUMsaUZBQTBCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGNBQWMsbUJBQU8sQ0FBQywyRUFBdUI7QUFDN0Msb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELHdCQUF3QixtQkFBTyxDQUFDLG1HQUFtQztBQUNuRSxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQscUJBQXFCLG1CQUFPLENBQUMseUZBQThCO0FBQzNELHNCQUFzQixtQkFBTyxDQUFDLDZGQUFnQztBQUM5RCxtQ0FBbUMsbUJBQU8sQ0FBQywySEFBK0M7QUFDMUYsZUFBZSxtQkFBTyxDQUFDLGlGQUEwQjs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQTREO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2V2YWx1YXRpb24vYW5uZWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICB0b2FzdDogdHJ1ZSxcclxuICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXHJcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gIHRpbWVyOiAzMDAwLFxyXG4gIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBTd2FsLnN0b3BUaW1lcik7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmxldCBjaGVjaztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAkKFwiI2VucmVnaXN0ZXIsICN2YWxpZGVyLCAjZGV2YWxpZGVyLCAjcmVjYWxjdWxlciwgI2ltcHJpbWVyLCAjc3RhdHV0XCIpLmF0dHIoXHJcbiAgICBcImRpc2FibGVkXCIsXHJcbiAgICB0cnVlXHJcbiAgKTtcclxuICBjb25zdCBlbmFibGVCdXR0b25zID0gKCkgPT4ge1xyXG4gICAgJChcIiNpbXByaW1lclwiKVxyXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpXHJcbiAgICAgIC5hZGRDbGFzcyhcImJ0bi1pbmZvXCIpXHJcbiAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgJChcIiNleHRyYWN0aW9uXCIpXHJcbiAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIilcclxuICAgICAgLmFkZENsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcclxuICAgICAgLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAkKFwiI3N0YXR1dFwiKVxyXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpXHJcbiAgICAgIC5hZGRDbGFzcyhcImJ0bi1wcmltYXJ5XCIpXHJcbiAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG5cclxuICAgIGlmIChjaGVjayA9PSAwKSB7XHJcbiAgICAgICQoXCIjZW5yZWdpc3RlclwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJidG4tcHJpbWFyeVwiKVxyXG4gICAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAkKFwiI3ZhbGlkZXJcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpXHJcbiAgICAgICAgLmFkZENsYXNzKFwiYnRuLWRhbmdlclwiKVxyXG4gICAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAkKFwiI2RldmFsaWRlclwiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxyXG4gICAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICQoXCIjcmVjYWxjdWxlclwiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4td2FybmluZ1wiKVxyXG4gICAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiI2VucmVnaXN0ZXJcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXByaW1hcnlcIilcclxuICAgICAgICAuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAkKFwiI3ZhbGlkZXJcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLWRhbmdlclwiKVxyXG4gICAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICQoXCIjZGV2YWxpZGVyXCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXNlY29uZGFyeVwiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1zdWNjZXNzXCIpXHJcbiAgICAgICAgLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICQoXCIjcmVjYWxjdWxlclwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJidG4td2FybmluZ1wiKVxyXG4gICAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuICAkKFwiI29yZGVyXCIpLnNlbGVjdDIoKTtcclxuICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBcIlwiO1xyXG4gICAgaWYgKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9mb3JtYXRpb24vXCIgKyBpZF9ldGFiKTtcclxuICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICB9XHJcbiAgICAkKFwiI2Zvcm1hdGlvblwiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgfSk7XHJcbiAgJChcIiNmb3JtYXRpb25cIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaWRfZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGxldCByZXNwb25zZSA9IFwiXCI7XHJcbiAgICBpZiAoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvcHJvbW90aW9uL1wiICsgaWRfZm9ybWF0aW9uKTtcclxuICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICB9XHJcbiAgICAkKFwiI3Byb21vdGlvblwiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnRcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLmVtcHR5KCk7XHJcbiAgICBsZXQgcHJvbW90aW9uX2lkID0gJChcIiNwcm9tb3Rpb25cIikudmFsKCk7XHJcbiAgICBpZiAocHJvbW90aW9uX2lkID09IFwiXCIgfHwgIXByb21vdGlvbl9pZCkge1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVmV1aWxsZXogc2VsZWN0aW9uIHByb21vdGlvbiFcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2dldF9saXN0X2V0dWRpYW50IGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtc2VhcmNoXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm9yZGVyXCIsICQoXCIjb3JkZXJcIikudmFsKCkpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcIi9ldmFsdWF0aW9uL2FubmVlL2xpc3QvXCIgKyBwcm9tb3Rpb25faWQsXHJcbiAgICAgICAgZm9ybURhdGFcclxuICAgICAgKTtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAvLyAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuRGF0YVRhYmxlKCkuZGVzdHJveSgpXHJcbiAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpKSB7XHJcbiAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKVxyXG4gICAgICAgIC5odG1sKHJlc3BvbnNlLmh0bWwpXHJcbiAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgICAgc2Nyb2xsWTogdHJ1ZSxcclxuICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICBjaGVjayA9IHJlc3BvbnNlLmNoZWNrO1xyXG4gICAgICBpZiAoY2hlY2sgPT0gMSkge1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJpbmZvXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJPcGVyYXRpb24gZMOpamEgdmFsaWRlclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXNlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXNlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIiNpbXByaW1lclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICQoXCIjaW1wcmltZXJfbGlzdFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdmFsaWRlclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI3ZhbGlkZXIgaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1sb2NrXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvZXZhbHVhdGlvbi9hbm5lZS92YWxpZGVyXCIpO1xyXG4gICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgIGNoZWNrID0gMTtcclxuICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtbG9ja1wiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWxvY2tcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjZGV2YWxpZGVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjZGV2YWxpZGVyIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtbG9jay1vcGVuXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvZXZhbHVhdGlvbi9hbm5lZS9kZXZhbGlkZXJcIik7XHJcbiAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgY2hlY2sgPSAwO1xyXG4gICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1sb2NrLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1sb2NrLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjZW5yZWdpc3RlclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2VucmVnaXN0ZXIgaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1jaGVja1wiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2V2YWx1YXRpb24vYW5uZWUvZW5yZWdpc3RyZVwiKTtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICBjaGVjayA9IDA7XHJcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2tcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjaW1wcmltZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAkKFwiI2ltcHJpbWVyX2xpc3RcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gIH0pO1xyXG4gICQoXCIjYWZmaWNoYWdlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBhZmZpY2hhZ2UgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChcIiNpbXByZXNzaW9uX2xpc3RcIikuYXR0cihcclxuICAgICAgXCJocmVmXCIsXHJcbiAgICAgICQoXCIjaW1wcmVzc2lvbl9saXN0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsIC0xKSArIGFmZmljaGFnZVxyXG4gICAgKTtcclxuICAgICQoXCIjaW1wcmVzc2lvbl9jbGFpclwiKS5hdHRyKFxyXG4gICAgICBcImhyZWZcIixcclxuICAgICAgJChcIiNpbXByZXNzaW9uX2NsYWlyXCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsIC0xKSArIGFmZmljaGFnZVxyXG4gICAgKTtcclxuICAgICQoXCIjaW1wcmVzc2lvbl9hbm9ueW1hdFwiKS5hdHRyKFxyXG4gICAgICBcImhyZWZcIixcclxuICAgICAgJChcIiNpbXByZXNzaW9uX2Fub255bWF0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsIC0xKSArIGFmZmljaGFnZVxyXG4gICAgKTtcclxuICAgICQoXCIjaW1wcmVzc2lvbl9yYXRcIikuYXR0cihcclxuICAgICAgXCJocmVmXCIsXHJcbiAgICAgICQoXCIjaW1wcmVzc2lvbl9yYXRcIikuYXR0cihcImhyZWZcIikuc2xpY2UoMCwgLTEpICsgYWZmaWNoYWdlXHJcbiAgICApO1xyXG4gIH0pO1xyXG4gICQoXCIjcmVjYWxjdWxlclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI3JlY2FsY3VsZXIgaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1yZWRvLWFsdFwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2V2YWx1YXRpb24vYW5uZWUvcmVjYWxjdWxlclwiKTtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtcmVkby1hbHRcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1yZWRvLWFsdFwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIiNzdGF0dXRcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAkKFwiI3N0YXR1dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjc3RhdHV0X2FwcmVzX3JhY2hhdFwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9hcHJlc19yYWNoYXQgaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zeW5jXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvZXZhbHVhdGlvbi9hbm5lZS9zdGF0dXQvYXByZXNyYWNoYXRcIik7XHJcbiAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXN5bmNcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1zeW5jXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKFwiI3N0YXR1dF9jYXRlZ29yaWVcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNzdGF0dXRfY2F0ZWdvcmllIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtc3luY1wiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiL2V2YWx1YXRpb24vYW5uZWUvc3RhdHV0L3N0YXR1dGFubmVlY2F0ZWdvcmllXCJcclxuICAgICAgKTtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtc3luY1wiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXN5bmNcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2V4dHJhY3Rpb25cIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnN0IGljb24gPSAkKFwiI2V4dHJhY3Rpb25fZXB2X3ZhbGlkZV9zMiBpXCIpO1xyXG4gICAgaWYgKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJWZXVpbGxleiBzZWxlY3Rpb25uZXogdW5lIGV0YWJsaXNzZW1lbnQhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbihcclxuICAgICAgXCIvZXZhbHVhdGlvbi9hbm5lZS9leHRyYWN0aW9uX2FubmVlL1wiICsgJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpLFxyXG4gICAgICBcIl9ibGFua1wiXHJcbiAgICApO1xyXG4gIH0pO1xyXG59KTtcclxuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09ICdBcnJheSc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgdW4kU2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzbGljZScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIEFycmF5ID0gZ2xvYmFsLkFycmF5O1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNsaWNlXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XG4gICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAoaXNDb25zdHJ1Y3RvcihDb25zdHJ1Y3RvcikgJiYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcbiAgICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBudWxsKSBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW4kU2xpY2UoTywgaywgZmluKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ID0gbmV3IChDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJjaGVjayIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYXR0ciIsImVuYWJsZUJ1dHRvbnMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwic2VsZWN0MiIsIm9uIiwiaWRfZXRhYiIsInZhbCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJlbXB0eSIsInByb21vdGlvbl9pZCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsImZuIiwiRGF0YVRhYmxlIiwiaXNEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJzY3JvbGxYIiwic2Nyb2xsWSIsImxhbmd1YWdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJtb2RhbCIsImFmZmljaGFnZSIsInNsaWNlIiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=