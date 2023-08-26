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
  var id_inscription = false;
  $("#enregister, #valider, #devalider, #recalculer, #imprimer, #statut, #deliberation_individuelle").attr("disabled", true);

  var enableButtons = function enableButtons() {
    $("#imprimer").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
    $("#statut").removeClass("btn-secondary").addClass("btn-primary").attr("disabled", false);
    $("#deliberation_individuelle").addClass("btn-primary").removeClass("btn-secondary").attr("disabled", false);

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
  }))); // pop up triggre after double click tr

  $("body").on("dblclick", "#list_epreuve_normal tbody tr", function () {
    if ($(this).hasClass("active_databales")) {
      $(this).removeClass("active_databales");
      id_inscription = null; // console.log(id_inscription);
    } else {
      $("#list_epreuve_normal tbody tr").removeClass("active_databales");
      $(this).addClass("active_databales");
      id_inscription = $(this).attr("id"); // console.log(id_inscription);
    }
  }); // impression deliberation

  $("#deliberation_individuelle").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            window.open("/evaluation/semestre/impression_delib/" + id_inscription, "_blank");

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  $("#formation").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
            return axios.get("/api/promotion/" + id_formation);

          case 5:
            request = _context3.sent;
            response = request.data;

          case 7:
            $("#promotion").html(response).select2();

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#promotion").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
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
            return axios.get("/api/semestre/" + id_promotion);

          case 5:
            request = _context4.sent;
            response = request.data;

          case 7:
            $("#semestre").html(response).select2();

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#get_list_etudiant").on("click", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var semestre_id, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              $("#list_epreuve_normal").empty();
              semestre_id = $("#semestre").val();

              if (!(semestre_id == "" || !semestre_id)) {
                _context5.next = 6;
                break;
              }

              Toast.fire({
                icon: "error",
                title: "Veuillez selection semestre!"
              });
              return _context5.abrupt("return");

            case 6:
              icon = $("#get_list_etudiant i");
              icon.removeClass("fa-search").addClass("fa-spinner fa-spin");
              _context5.prev = 8;
              formData = new FormData();
              formData.append("order", $("#order").val());
              _context5.next = 13;
              return axios.post("/evaluation/semestre/list/" + semestre_id, formData);

            case 13:
              request = _context5.sent;
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
              _context5.next = 29;
              break;

            case 23:
              _context5.prev = 23;
              _context5.t0 = _context5["catch"](8);
              console.log(_context5.t0);
              icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
              message = _context5.t0.response.data;
              Toast.fire({
                icon: "error",
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
  $("#valider").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            icon = $("#valider i");
            icon.removeClass("fa-lock").addClass("fa-spinner fa-spin");
            _context6.prev = 2;
            _context6.next = 5;
            return axios.post("/evaluation/semestre/valider");

          case 5:
            request = _context6.sent;
            response = request.data;
            check = 1;
            enableButtons();
            Toast.fire({
              icon: "success",
              title: response
            });
            icon.addClass("fa-lock").removeClass("fa-spinner fa-spin");
            _context6.next = 19;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            icon.addClass("fa-lock").removeClass("fa-spinner fa-spin");
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
  $("#devalider").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            icon = $("#devalider i");
            icon.removeClass("fa-lock-open").addClass("fa-spinner fa-spin");
            _context7.prev = 2;
            _context7.next = 5;
            return axios.post("/evaluation/semestre/devalider");

          case 5:
            request = _context7.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass("fa-lock-open").removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: "success",
              title: response
            });
            _context7.next = 19;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            icon.addClass("fa-lock-open").removeClass("fa-spinner fa-spin");
            message = _context7.t0.response.data;
            Toast.fire({
              icon: "error",
              title: message
            });

          case 19:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 13]]);
  })));
  $("#enregister").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            icon = $("#enregister i");
            icon.removeClass("fa-check").addClass("fa-spinner fa-spin");
            _context8.prev = 2;
            _context8.next = 5;
            return axios.post("/evaluation/semestre/enregistre");

          case 5:
            request = _context8.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass("fa-check").removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: "success",
              title: response
            });
            _context8.next = 19;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](2);
            console.log(_context8.t0);
            icon.addClass("fa-check").removeClass("fa-spinner fa-spin");
            message = _context8.t0.response.data;
            Toast.fire({
              icon: "error",
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
  $("#affichage").on("change", function () {
    var affichage = $(this).val();
    $("#impression_list").attr("href", $("#impression_list").attr("href").slice(0, -1) + affichage);
    $("#impression_clair").attr("href", $("#impression_clair").attr("href").slice(0, -1) + affichage);
    $("#impression_anonymat").attr("href", $("#impression_anonymat").attr("href").slice(0, -1) + affichage);
    $("#impression_rat").attr("href", $("#impression_rat").attr("href").slice(0, -1) + affichage);
  });
  $("#recalculer").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            icon = $("#recalculer i");
            icon.removeClass("fa-redo-alt").addClass("fa-spinner fa-spin");
            _context9.prev = 2;
            _context9.next = 5;
            return axios.post("/evaluation/semestre/recalculer");

          case 5:
            request = _context9.sent;
            response = request.data;
            $("#get_list_etudiant").trigger("click");
            icon.addClass("fa-redo-alt").removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: "success",
              title: response
            });
            _context9.next = 18;
            break;

          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](2);
            console.log(_context9.t0);
            icon.addClass("fa-redo-alt").removeClass("fa-spinner fa-spin");
            message = _context9.t0.response.data;
            Toast.fire({
              icon: "error",
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
  $("#statut_avant_rachat").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            icon = $("#statut_avant_rachat i");
            icon.removeClass("fa-sync").addClass("fa-spinner fa-spin");
            _context10.prev = 2;
            _context10.next = 5;
            return axios.post("/evaluation/semestre/statut/avantrachat");

          case 5:
            request = _context10.sent;
            response = request.data;
            $("#get_list_etudiant").trigger("click");
            icon.addClass("fa-sync").removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: "success",
              title: response
            });
            _context10.next = 18;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](2);
            console.log(_context10.t0);
            icon.addClass("fa-sync").removeClass("fa-spinner fa-spin");
            message = _context10.t0.response.data;
            Toast.fire({
              icon: "error",
              title: message
            });

          case 18:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 12]]);
  })));
  $("#statut_apres_rachat").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            icon = $("#statut_apres_rachat i");
            icon.removeClass("fa-sync").addClass("fa-spinner fa-spin");
            _context11.prev = 2;
            _context11.next = 5;
            return axios.post("/evaluation/semestre/statut/apresrachat");

          case 5:
            request = _context11.sent;
            response = request.data;
            $("#get_list_etudiant").trigger("click");
            icon.addClass("fa-sync").removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: "success",
              title: response
            });
            _context11.next = 18;
            break;

          case 12:
            _context11.prev = 12;
            _context11.t0 = _context11["catch"](2);
            console.log(_context11.t0);
            icon.addClass("fa-sync").removeClass("fa-spinner fa-spin");
            message = _context11.t0.response.data;
            Toast.fire({
              icon: "error",
              title: message
            });

          case 18:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 12]]);
  })));
  $("#statut_categorie").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            icon = $("#statut_categorie i");
            icon.removeClass("fa-sync").addClass("fa-spinner fa-spin");
            _context12.prev = 2;
            _context12.next = 5;
            return axios.post("/evaluation/semestre/statut/statutsemestrecategorie");

          case 5:
            request = _context12.sent;
            response = request.data;
            $("#get_list_etudiant").trigger("click");
            icon.addClass("fa-sync").removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: "success",
              title: response
            });
            _context12.next = 18;
            break;

          case 12:
            _context12.prev = 12;
            _context12.t0 = _context12["catch"](2);
            console.log(_context12.t0);
            icon.addClass("fa-sync").removeClass("fa-spinner fa-spin");
            message = _context12.t0.response.data;
            Toast.fire({
              icon: "error",
              title: message
            });

          case 18:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[2, 12]]);
  }))); //   $("body").on("click", "#extraction", function () {
  //     window.open("/evaluation/semestre/extraction_semestre", "_blank");
  //   });

  $("body").on("click", "#extraction", /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(e) {
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              e.preventDefault(); // const icon = $("#extraction_epv_valide_s2 i");

              if (!($("#etablissement").val() == "")) {
                _context13.next = 4;
                break;
              }

              Toast.fire({
                icon: "error",
                title: "Veuillez selectionnez une etablissement!"
              });
              return _context13.abrupt("return");

            case 4:
              window.open("/evaluation/semestre/extraction_semestre/" + $("#etablissement").val(), "_blank");

            case 5:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function (_x2) {
      return _ref13.apply(this, arguments);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/evaluation/semestre.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUMsMkhBQStDO0FBQzFGLGVBQWUsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUE0RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ldmFsdWF0aW9uL3NlbWVzdHJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgdG9hc3Q6IHRydWUsXHJcbiAgcG9zaXRpb246IFwidG9wLWVuZFwiLFxyXG4gIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICB0aW1lcjogMzAwMCxcclxuICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgU3dhbC5zdG9wVGltZXIpO1xyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgU3dhbC5yZXN1bWVUaW1lcik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5sZXQgY2hlY2s7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGlkX2luc2NyaXB0aW9uID0gZmFsc2U7XHJcbiAgJChcclxuICAgIFwiI2VucmVnaXN0ZXIsICN2YWxpZGVyLCAjZGV2YWxpZGVyLCAjcmVjYWxjdWxlciwgI2ltcHJpbWVyLCAjc3RhdHV0LCAjZGVsaWJlcmF0aW9uX2luZGl2aWR1ZWxsZVwiXHJcbiAgKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgY29uc3QgZW5hYmxlQnV0dG9ucyA9ICgpID0+IHtcclxuICAgICQoXCIjaW1wcmltZXJcIilcclxuICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXNlY29uZGFyeVwiKVxyXG4gICAgICAuYWRkQ2xhc3MoXCJidG4taW5mb1wiKVxyXG4gICAgICAuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICQoXCIjc3RhdHV0XCIpXHJcbiAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIilcclxuICAgICAgLmFkZENsYXNzKFwiYnRuLXByaW1hcnlcIilcclxuICAgICAgLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAkKFwiI2RlbGliZXJhdGlvbl9pbmRpdmlkdWVsbGVcIilcclxuICAgICAgLmFkZENsYXNzKFwiYnRuLXByaW1hcnlcIilcclxuICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXNlY29uZGFyeVwiKVxyXG4gICAgICAuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuXHJcbiAgICBpZiAoY2hlY2sgPT0gMCkge1xyXG4gICAgICAkKFwiI2VucmVnaXN0ZXJcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpXHJcbiAgICAgICAgLmFkZENsYXNzKFwiYnRuLXByaW1hcnlcIilcclxuICAgICAgICAuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgJChcIiN2YWxpZGVyXCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXNlY29uZGFyeVwiKVxyXG4gICAgICAgIC5hZGRDbGFzcyhcImJ0bi1kYW5nZXJcIilcclxuICAgICAgICAuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgJChcIiNkZXZhbGlkZXJcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXN1Y2Nlc3NcIilcclxuICAgICAgICAuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAkKFwiI3JlY2FsY3VsZXJcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIiNlbnJlZ2lzdGVyXCIpXHJcbiAgICAgICAgLmFkZENsYXNzKFwiYnRuLXNlY29uZGFyeVwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1wcmltYXJ5XCIpXHJcbiAgICAgICAgLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgJChcIiN2YWxpZGVyXCIpXHJcbiAgICAgICAgLmFkZENsYXNzKFwiYnRuLXNlY29uZGFyeVwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1kYW5nZXJcIilcclxuICAgICAgICAuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAkKFwiI2RldmFsaWRlclwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJidG4tc3VjY2Vzc1wiKVxyXG4gICAgICAgIC5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAkKFwiI3JlY2FsY3VsZXJcIilcclxuICAgICAgICAucmVtb3ZlQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpXHJcbiAgICAgICAgLmFkZENsYXNzKFwiYnRuLXdhcm5pbmdcIilcclxuICAgICAgICAuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKCk7XHJcbiAgJChcIiNvcmRlclwiKS5zZWxlY3QyKCk7XHJcbiAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gXCJcIjtcclxuICAgIGlmIChpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZm9ybWF0aW9uL1wiICsgaWRfZXRhYik7XHJcbiAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgfVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBwb3AgdXAgdHJpZ2dyZSBhZnRlciBkb3VibGUgY2xpY2sgdHJcclxuICAkKFwiYm9keVwiKS5vbihcImRibGNsaWNrXCIsIFwiI2xpc3RfZXByZXV2ZV9ub3JtYWwgdGJvZHkgdHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVfZGF0YWJhbGVzXCIpKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVfZGF0YWJhbGVzXCIpO1xyXG4gICAgICBpZF9pbnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGlkX2luc2NyaXB0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZV9kYXRhYmFsZXNcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVfZGF0YWJhbGVzXCIpO1xyXG4gICAgICBpZF9pbnNjcmlwdGlvbiA9ICQodGhpcykuYXR0cihcImlkXCIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhpZF9pbnNjcmlwdGlvbik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIGltcHJlc3Npb24gZGVsaWJlcmF0aW9uXHJcbiAgJChcIiNkZWxpYmVyYXRpb25faW5kaXZpZHVlbGxlXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgd2luZG93Lm9wZW4oXHJcbiAgICAgIFwiL2V2YWx1YXRpb24vc2VtZXN0cmUvaW1wcmVzc2lvbl9kZWxpYi9cIiArIGlkX2luc2NyaXB0aW9uLFxyXG4gICAgICBcIl9ibGFua1wiXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiI2Zvcm1hdGlvblwiKS5vbihcImNoYW5nZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gXCJcIjtcclxuICAgIGlmIChpZF9mb3JtYXRpb24gIT0gXCJcIikge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9wcm9tb3Rpb24vXCIgKyBpZF9mb3JtYXRpb24pO1xyXG4gICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgIH1cclxuICAgICQoXCIjcHJvbW90aW9uXCIpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICB9KTtcclxuICAkKFwiI3Byb21vdGlvblwiKS5vbihcImNoYW5nZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgbGV0IHJlc3BvbnNlID0gXCJcIjtcclxuICAgIGlmIChpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9zZW1lc3RyZS9cIiArIGlkX3Byb21vdGlvbik7XHJcbiAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgfVxyXG4gICAgJChcIiNzZW1lc3RyZVwiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnRcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLmVtcHR5KCk7XHJcbiAgICBsZXQgc2VtZXN0cmVfaWQgPSAkKFwiI3NlbWVzdHJlXCIpLnZhbCgpO1xyXG4gICAgaWYgKHNlbWVzdHJlX2lkID09IFwiXCIgfHwgIXNlbWVzdHJlX2lkKSB7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJWZXVpbGxleiBzZWxlY3Rpb24gc2VtZXN0cmUhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNnZXRfbGlzdF9ldHVkaWFudCBpXCIpO1xyXG4gICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLXNlYXJjaFwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJvcmRlclwiLCAkKFwiI29yZGVyXCIpLnZhbCgpKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCIvZXZhbHVhdGlvbi9zZW1lc3RyZS9saXN0L1wiICsgc2VtZXN0cmVfaWQsXHJcbiAgICAgICAgZm9ybURhdGFcclxuICAgICAgKTtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAvLyAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuRGF0YVRhYmxlKCkuZGVzdHJveSgpXHJcbiAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpKSB7XHJcbiAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKVxyXG4gICAgICAgIC5odG1sKHJlc3BvbnNlLmh0bWwpXHJcbiAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgICAgc2Nyb2xsWTogdHJ1ZSxcclxuICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICBjaGVjayA9IHJlc3BvbnNlLmNoZWNrO1xyXG4gICAgICBpZiAoY2hlY2sgPT0gMSkge1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogXCJpbmZvXCIsXHJcbiAgICAgICAgICB0aXRsZTogXCJPcGVyYXRpb24gZMOpamEgdmFsaWRlclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXNlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXNlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIiNpbXByaW1lclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICQoXCIjaW1wcmltZXJfbGlzdFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdmFsaWRlclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI3ZhbGlkZXIgaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1sb2NrXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvZXZhbHVhdGlvbi9zZW1lc3RyZS92YWxpZGVyXCIpO1xyXG4gICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgIGNoZWNrID0gMTtcclxuICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtbG9ja1wiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWxvY2tcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjZGV2YWxpZGVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaWNvbiA9ICQoXCIjZGV2YWxpZGVyIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtbG9jay1vcGVuXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvZXZhbHVhdGlvbi9zZW1lc3RyZS9kZXZhbGlkZXJcIik7XHJcbiAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgY2hlY2sgPSAwO1xyXG4gICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1sb2NrLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1sb2NrLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjZW5yZWdpc3RlclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI2VucmVnaXN0ZXIgaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1jaGVja1wiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2V2YWx1YXRpb24vc2VtZXN0cmUvZW5yZWdpc3RyZVwiKTtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICBjaGVjayA9IDA7XHJcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2tcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjaW1wcmltZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAkKFwiI2ltcHJpbWVyX2xpc3RcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gIH0pO1xyXG4gICQoXCIjYWZmaWNoYWdlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBhZmZpY2hhZ2UgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChcIiNpbXByZXNzaW9uX2xpc3RcIikuYXR0cihcclxuICAgICAgXCJocmVmXCIsXHJcbiAgICAgICQoXCIjaW1wcmVzc2lvbl9saXN0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsIC0xKSArIGFmZmljaGFnZVxyXG4gICAgKTtcclxuICAgICQoXCIjaW1wcmVzc2lvbl9jbGFpclwiKS5hdHRyKFxyXG4gICAgICBcImhyZWZcIixcclxuICAgICAgJChcIiNpbXByZXNzaW9uX2NsYWlyXCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsIC0xKSArIGFmZmljaGFnZVxyXG4gICAgKTtcclxuICAgICQoXCIjaW1wcmVzc2lvbl9hbm9ueW1hdFwiKS5hdHRyKFxyXG4gICAgICBcImhyZWZcIixcclxuICAgICAgJChcIiNpbXByZXNzaW9uX2Fub255bWF0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsIC0xKSArIGFmZmljaGFnZVxyXG4gICAgKTtcclxuICAgICQoXCIjaW1wcmVzc2lvbl9yYXRcIikuYXR0cihcclxuICAgICAgXCJocmVmXCIsXHJcbiAgICAgICQoXCIjaW1wcmVzc2lvbl9yYXRcIikuYXR0cihcImhyZWZcIikuc2xpY2UoMCwgLTEpICsgYWZmaWNoYWdlXHJcbiAgICApO1xyXG4gIH0pO1xyXG4gICQoXCIjcmVjYWxjdWxlclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI3JlY2FsY3VsZXIgaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1yZWRvLWFsdFwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2V2YWx1YXRpb24vc2VtZXN0cmUvcmVjYWxjdWxlclwiKTtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiI2dldF9saXN0X2V0dWRpYW50XCIpLnRyaWdnZXIoXCJjbGlja1wiKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXJlZG8tYWx0XCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtcmVkby1hbHRcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjc3RhdHV0XCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgJChcIiNzdGF0dXRfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gIH0pO1xyXG4gICQoXCIjc3RhdHV0X2F2YW50X3JhY2hhdFwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9hdmFudF9yYWNoYXQgaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zeW5jXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCIvZXZhbHVhdGlvbi9zZW1lc3RyZS9zdGF0dXQvYXZhbnRyYWNoYXRcIlxyXG4gICAgICApO1xyXG4gICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnRcIikudHJpZ2dlcihcImNsaWNrXCIpO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtc3luY1wiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXN5bmNcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjc3RhdHV0X2FwcmVzX3JhY2hhdFwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9hcHJlc19yYWNoYXQgaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zeW5jXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCIvZXZhbHVhdGlvbi9zZW1lc3RyZS9zdGF0dXQvYXByZXNyYWNoYXRcIlxyXG4gICAgICApO1xyXG4gICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnRcIikudHJpZ2dlcihcImNsaWNrXCIpO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtc3luY1wiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXN5bmNcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjc3RhdHV0X2NhdGVnb3JpZVwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9jYXRlZ29yaWUgaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1zeW5jXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCIvZXZhbHVhdGlvbi9zZW1lc3RyZS9zdGF0dXQvc3RhdHV0c2VtZXN0cmVjYXRlZ29yaWVcIlxyXG4gICAgICApO1xyXG4gICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnRcIikudHJpZ2dlcihcImNsaWNrXCIpO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtc3luY1wiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXN5bmNcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjZXh0cmFjdGlvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgIHdpbmRvdy5vcGVuKFwiL2V2YWx1YXRpb24vc2VtZXN0cmUvZXh0cmFjdGlvbl9zZW1lc3RyZVwiLCBcIl9ibGFua1wiKTtcclxuICAvLyAgIH0pO1xyXG5cclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2V4dHJhY3Rpb25cIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnN0IGljb24gPSAkKFwiI2V4dHJhY3Rpb25fZXB2X3ZhbGlkZV9zMiBpXCIpO1xyXG4gICAgaWYgKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSA9PSBcIlwiKSB7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJWZXVpbGxleiBzZWxlY3Rpb25uZXogdW5lIGV0YWJsaXNzZW1lbnQhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub3BlbihcclxuICAgICAgXCIvZXZhbHVhdGlvbi9zZW1lc3RyZS9leHRyYWN0aW9uX3NlbWVzdHJlL1wiICsgJChcIiNldGFibGlzc2VtZW50XCIpLnZhbCgpLFxyXG4gICAgICBcIl9ibGFua1wiXHJcbiAgICApO1xyXG4gIH0pO1xyXG59KTtcclxuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09ICdBcnJheSc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgdW4kU2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzbGljZScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIEFycmF5ID0gZ2xvYmFsLkFycmF5O1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNsaWNlXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XG4gICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAoaXNDb25zdHJ1Y3RvcihDb25zdHJ1Y3RvcikgJiYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcbiAgICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBudWxsKSBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW4kU2xpY2UoTywgaywgZmluKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ID0gbmV3IChDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJjaGVjayIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaWRfaW5zY3JpcHRpb24iLCJhdHRyIiwiZW5hYmxlQnV0dG9ucyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzZWxlY3QyIiwib24iLCJpZF9ldGFiIiwidmFsIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImhhc0NsYXNzIiwid2luZG93Iiwib3BlbiIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtcHR5Iiwic2VtZXN0cmVfaWQiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJmbiIsIkRhdGFUYWJsZSIsImlzRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJsYW5ndWFnZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibW9kYWwiLCJhZmZpY2hhZ2UiLCJzbGljZSIsInRyaWdnZXIiXSwic291cmNlUm9vdCI6IiJ9