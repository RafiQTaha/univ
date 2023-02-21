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
  $("#get_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var promotion_id, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              $("#list_epreuve_normal").empty();
              promotion_id = $('#promotion').val();

              if (!(promotion_id == "" || !promotion_id)) {
                _context3.next = 6;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection promotion!'
              });
              return _context3.abrupt("return");

            case 6:
              icon = $("#get_list_etudiant i");
              icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
              _context3.prev = 8;
              formData = new FormData();
              formData.append("order", $("#order").val());
              _context3.next = 13;
              return axios.post('/evaluation/annee/list/' + promotion_id, formData);

            case 13:
              request = _context3.sent;
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
              _context3.next = 29;
              break;

            case 23:
              _context3.prev = 23;
              _context3.t0 = _context3["catch"](8);
              console.log(_context3.t0);
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              message = _context3.t0.response.data;
              Toast.fire({
                icon: 'error',
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
  $("#valider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            icon = $("#valider i");
            icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
            _context4.prev = 2;
            _context4.next = 5;
            return axios.post('/evaluation/annee/valider');

          case 5:
            request = _context4.sent;
            response = request.data;
            check = 1;
            enableButtons();
            Toast.fire({
              icon: 'success',
              title: response
            });
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            _context4.next = 19;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            message = _context4.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 13]]);
  })));
  $("#devalider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            icon = $("#devalider i");
            icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
            _context5.prev = 2;
            _context5.next = 5;
            return axios.post('/evaluation/annee/devalider');

          case 5:
            request = _context5.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context5.next = 19;
            break;

          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
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
  $("#enregister").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            icon = $("#enregister i");
            icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
            _context6.prev = 2;
            _context6.next = 5;
            return axios.post('/evaluation/annee/enregistre');

          case 5:
            request = _context6.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
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
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
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
  $("#recalculer").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            icon = $("#recalculer i");
            icon.removeClass('fa-redo-alt').addClass("fa-spinner fa-spin");
            _context7.prev = 2;
            _context7.next = 5;
            return axios.post('/evaluation/annee/recalculer');

          case 5:
            request = _context7.sent;
            response = request.data;
            icon.addClass('fa-redo-alt').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context7.next = 17;
            break;

          case 11:
            _context7.prev = 11;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            icon.addClass('fa-redo-alt').removeClass("fa-spinner fa-spin");
            message = _context7.t0.response.data;
            Toast.fire({
              icon: 'error',
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
  $("#statut_apres_rachat").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            icon = $("#statut_apres_rachat i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context8.prev = 2;
            _context8.next = 5;
            return axios.post('/evaluation/annee/statut/apresrachat');

          case 5:
            request = _context8.sent;
            response = request.data;
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
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
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
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
  $("#statut_categorie").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            icon = $("#statut_categorie i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context9.prev = 2;
            _context9.next = 5;
            return axios.post('/evaluation/annee/statut/statutanneecategorie');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxJQUFJLDREQUE0RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ldmFsdWF0aW9uL2FubmVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXHJcbiAgICB9LFxyXG59KVxyXG5cclxubGV0IGNoZWNrO1xyXG4gICAgXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICAoKSB7XHJcbiAgICAkKFwiI2VucmVnaXN0ZXIsICN2YWxpZGVyLCAjZGV2YWxpZGVyLCAjcmVjYWxjdWxlciwgI2ltcHJpbWVyLCAjc3RhdHV0XCIpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgIGNvbnN0IGVuYWJsZUJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgJChcIiNpbXByaW1lclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4taW5mbycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgJChcIiNzdGF0dXRcIikucmVtb3ZlQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5hZGRDbGFzcygnYnRuLXByaW1hcnknKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxyXG5cclxuICAgICAgICBpZihjaGVjayA9PSAwKSB7XHJcbiAgICAgICAgICAgICQoXCIjZW5yZWdpc3RlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tcHJpbWFyeScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgICQoXCIjdmFsaWRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tZGFuZ2VyJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcclxuICAgICAgICAgICAgJChcIiNkZXZhbGlkZXJcIikuYWRkQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5yZW1vdmVDbGFzcygnYnRuLXN1Y2Nlc3MnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgICAgICQoXCIjcmVjYWxjdWxlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4td2FybmluZycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2VucmVnaXN0ZXJcIikuYWRkQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXHJcbiAgICAgICAgICAgICQoXCIjdmFsaWRlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4tZGFuZ2VyJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgICAgICAgICAkKFwiI2RldmFsaWRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tc3VjY2VzcycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgICAgICQoXCIjcmVjYWxjdWxlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4td2FybmluZycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjb3JkZXJcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNmb3JtYXRpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KVxyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnRcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKS5lbXB0eSgpXHJcbiAgICAgICAgbGV0IHByb21vdGlvbl9pZCA9ICQoJyNwcm9tb3Rpb24nKS52YWwoKTtcclxuICAgICAgICBpZihwcm9tb3Rpb25faWQgPT0gXCJcIiB8fCAhcHJvbW90aW9uX2lkKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHByb21vdGlvbiEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2dldF9saXN0X2V0dWRpYW50IGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc2VhcmNoJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm9yZGVyXCIsICQoXCIjb3JkZXJcIikudmFsKCkpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9hbm5lZS9saXN0LycrcHJvbW90aW9uX2lkLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICAvLyAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuRGF0YVRhYmxlKCkuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbGlzdF9lcHJldXZlX25vcm1hbCcpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLmh0bWwocmVzcG9uc2UuaHRtbCkuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxZOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNoZWNrID0gcmVzcG9uc2UuY2hlY2s7XHJcbiAgICAgICAgICAgIGlmKGNoZWNrID09IDEpe1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9wZXJhdGlvbiBkw6lqYSB2YWxpZGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXNlYXJjaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zZWFyY2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KSBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgICQoXCIjaW1wcmltZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7ICBcclxuICAgICAgICAkKFwiI2ltcHJpbWVyX2xpc3RcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIjdmFsaWRlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3ZhbGlkZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1sb2NrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL2FubmVlL3ZhbGlkZXInKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNoZWNrID0gMTtcclxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2RldmFsaWRlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2RldmFsaWRlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9hbm5lZS9kZXZhbGlkZXInKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNoZWNrID0gMDtcclxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNlbnJlZ2lzdGVyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZW5yZWdpc3RlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL2FubmVlL2VucmVnaXN0cmUnKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIGNoZWNrID0gMDtcclxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjaW1wcmltZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7ICBcclxuICAgICAgICAkKFwiI2ltcHJpbWVyX2xpc3RcIikubW9kYWwoXCJzaG93XCIpXHJcbiAgICB9KVxyXG4gICAgJChcIiNhZmZpY2hhZ2VcIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBhZmZpY2hhZ2UgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICQoXCIjaW1wcmVzc2lvbl9saXN0XCIpLmF0dHIoXCJocmVmXCIsICAkKFwiI2ltcHJlc3Npb25fbGlzdFwiKS5hdHRyKFwiaHJlZlwiKS5zbGljZSgwLC0xKSthZmZpY2hhZ2UpIFxyXG4gICAgICAgICQoXCIjaW1wcmVzc2lvbl9jbGFpclwiKS5hdHRyKFwiaHJlZlwiLCAgJChcIiNpbXByZXNzaW9uX2NsYWlyXCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsLTEpK2FmZmljaGFnZSkgXHJcbiAgICAgICAgJChcIiNpbXByZXNzaW9uX2Fub255bWF0XCIpLmF0dHIoXCJocmVmXCIsICAkKFwiI2ltcHJlc3Npb25fYW5vbnltYXRcIikuYXR0cihcImhyZWZcIikuc2xpY2UoMCwtMSkrYWZmaWNoYWdlKSBcclxuICAgICAgICAkKFwiI2ltcHJlc3Npb25fcmF0XCIpLmF0dHIoXCJocmVmXCIsICAkKFwiI2ltcHJlc3Npb25fcmF0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsLTEpK2FmZmljaGFnZSkgXHJcbiAgICAgICAgICAgICBcclxuICAgIH0pXHJcbiAgICAkKFwiI3JlY2FsY3VsZXJcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNyZWNhbGN1bGVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtcmVkby1hbHQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vYW5uZWUvcmVjYWxjdWxlcicpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtcmVkby1hbHQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1yZWRvLWFsdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI3N0YXR1dFwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxyXG4gICAgICAgICQoXCIjc3RhdHV0X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgJChcIiNzdGF0dXRfYXByZXNfcmFjaGF0XCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9hcHJlc19yYWNoYXQgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zeW5jJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL2FubmVlL3N0YXR1dC9hcHJlc3JhY2hhdCcpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtc3luYycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXN5bmMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNzdGF0dXRfY2F0ZWdvcmllXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9jYXRlZ29yaWUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zeW5jJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL2FubmVlL3N0YXR1dC9zdGF0dXRhbm5lZWNhdGVnb3JpZScpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtc3luYycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXN5bmMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcclxudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xyXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xyXG5cclxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XHJcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXHJcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XHJcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcnJheSA9IFtdO1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcclxuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4geyBmb286IDEgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcclxuICB9KTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcclxudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcclxudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XHJcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xyXG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XHJcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XHJcbn07XHJcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XHJcblxyXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXHJcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XHJcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09ICdBcnJheSc7XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XHJcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XHJcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcclxudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xyXG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcclxudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xyXG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XHJcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcclxudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcclxudmFyIHVuJFNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XHJcblxyXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJyk7XHJcblxyXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xyXG52YXIgQXJyYXkgPSBnbG9iYWwuQXJyYXk7XHJcbnZhciBtYXggPSBNYXRoLm1heDtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuc2xpY2VgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxyXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcclxuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xyXG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XHJcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XHJcbiAgICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcclxuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XHJcbiAgICAvLyBpbmxpbmUgYEFycmF5U3BlY2llc0NyZWF0ZWAgZm9yIHVzYWdlIG5hdGl2ZSBgQXJyYXkjc2xpY2VgIHdoZXJlIGl0J3MgcG9zc2libGVcclxuICAgIHZhciBDb25zdHJ1Y3RvciwgcmVzdWx0LCBuO1xyXG4gICAgaWYgKGlzQXJyYXkoTykpIHtcclxuICAgICAgQ29uc3RydWN0b3IgPSBPLmNvbnN0cnVjdG9yO1xyXG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xyXG4gICAgICBpZiAoaXNDb25zdHJ1Y3RvcihDb25zdHJ1Y3RvcikgJiYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XHJcbiAgICAgICAgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcclxuICAgICAgICBpZiAoQ29uc3RydWN0b3IgPT09IG51bGwpIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB1biRTbGljZShPLCBrLCBmaW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyBBcnJheSA6IENvbnN0cnVjdG9yKShtYXgoZmluIC0gaywgMCkpO1xyXG4gICAgZm9yIChuID0gMDsgayA8IGZpbjsgaysrLCBuKyspIGlmIChrIGluIE8pIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgbiwgT1trXSk7XHJcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImNoZWNrIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhdHRyIiwiZW5hYmxlQnV0dG9ucyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzZWxlY3QyIiwib24iLCJpZF9ldGFiIiwidmFsIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtcHR5IiwicHJvbW90aW9uX2lkIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsInNjcm9sbFgiLCJzY3JvbGxZIiwibGFuZ3VhZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIm1vZGFsIiwiYWZmaWNoYWdlIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9