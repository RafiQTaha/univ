(self["webpackChunk"] = self["webpackChunk"] || []).push([["programmation"],{

/***/ "./assets/components/parametre/programmation.js":
/*!******************************************************!*\
  !*** ./assets/components/parametre/programmation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

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
$(document).ready(function () {
  var id_programmation;
  var table = $("#datatables_gestion_programmation").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/programmation/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("select").select2();
  $('body').on('click', '#datatables_gestion_programmation tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_programmation = null;
    } else {
      $("#datatables_gestion_programmation tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_programmation = $(this).attr('id');
    }
  });
  $("#etablissement").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            $(".card-header").find('#a-ouverte').text("");
            response = "";

            if (!(id_etab != "")) {
              _context.next = 12;
              break;
            }

            _context.next = 6;
            return axios.get('/api/formation/' + id_etab);

          case 6:
            request = _context.sent;
            response = request.data;
            table.columns().search("").draw();
            table.columns(0).search(id_etab).draw();
            _context.next = 13;
            break;

          case 12:
            table.columns(0).search("").draw();

          case 13:
            // for (let i = 1; i <= 6; i++) {
            //     table.columns(i).search("").draw();
            // }
            $('#formation').html(response).select2();
            $('#promotion').html("").select2();
            $('#annee').html("").select2();
            $('#semestre').html("").select2();
            $('#module').html("").select2();
            $('#element').html("").select2();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation, response, annee_request, request, formationAndanneeOuverte;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            response = "";
            $(".card-header").find('#a-ouverte').text("");

            if (!(id_formation != "")) {
              _context2.next = 20;
              break;
            }

            // table.columns(0).search($("#etablissement").val()).draw();
            table.columns().search("").draw();
            table.columns(1).search(id_formation).draw();
            _context2.next = 8;
            return axios.get('/api/anneeProgrammation/' + id_formation);

          case 8:
            annee_request = _context2.sent;
            response_annee = annee_request.data;
            _context2.next = 12;
            return axios.get('/api/promotion/' + id_formation);

          case 12:
            request = _context2.sent;
            response = request.data;
            _context2.next = 16;
            return axios.get('/api/formationAndanneeOuverte/' + id_formation);

          case 16:
            formationAndanneeOuverte = _context2.sent;
            $(".card-header").find('#a-ouverte').text("L'Annee Ouverte: " + formationAndanneeOuverte.data.annee);
            _context2.next = 21;
            break;

          case 20:
            table.columns(1).search("").draw();

          case 21:
            // for (let i = 2; i <= 6; i++) {
            //     table.columns(i).search("").draw();
            // }
            $('#promotion').html(response).select2();
            $('#annee').html(response_annee).select2();
            $('#semestre').html("").select2();
            $('#module').html("").select2();
            $('#element').html("").select2();

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_promotion, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_promotion = $(this).val();

            if (!(id_promotion != "")) {
              _context3.next = 9;
              break;
            }

            table.columns(2).search(id_promotion).draw();
            _context3.next = 5;
            return axios.get('/api/semestre/' + id_promotion);

          case 5:
            request = _context3.sent;
            response = request.data;
            _context3.next = 10;
            break;

          case 9:
            table.columns(2).search("").draw();

          case 10:
            // for (let i = 3; i <= 5; i++) {
            //     table.columns(i).search("").draw();
            // }
            $('#semestre').html(response).select2();
            $('#module').html("").select2();
            $('#element').html("").select2();

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_semestre, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_semestre = $(this).val();

            if (!(id_semestre != "")) {
              _context4.next = 9;
              break;
            }

            table.columns(3).search(id_semestre).draw();
            _context4.next = 5;
            return axios.get('/api/module/' + id_semestre);

          case 5:
            request = _context4.sent;
            response = request.data;
            _context4.next = 10;
            break;

          case 9:
            table.columns(3).search("").draw();

          case 10:
            // for (let i = 4; i <= 5; i++) {
            //     table.columns(i).search("").draw();
            // }
            $('#module').html(response).select2();
            $('#element').html("").select2();

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#module").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var id_module, request;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id_module = $(this).val();

            if (!(id_module != "")) {
              _context5.next = 9;
              break;
            }

            table.columns(4).search(id_module).draw();
            _context5.next = 5;
            return axios.get('/api/element/' + id_module);

          case 5:
            request = _context5.sent;
            response = request.data;
            _context5.next = 10;
            break;

          case 9:
            table.columns(4).search("").draw();

          case 10:
            table.columns(5).search("").draw();
            $('#element').html(response).select2();

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#element").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var id_element;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id_element = $(this).val();

            if (id_element != "") {
              table.columns(5).search(id_element).draw();
            } else {
              table.columns(5).search("").draw();
            }

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("#annee").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var id_annee;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id_annee = $(this).val();

            if (id_annee != "") {
              table.columns(6).search(id_annee).draw();
            } else {
              table.columns(6).search("").draw();
            }

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  })));
  $("#ajouter").on("click", function () {
    // alert($("#formation").val())
    if (!$("#element").val() || $("#element").val() == "" || !$("#annee").val() || $("#annee").val() == "") {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez choissir une annee et un element!'
      });
      return;
    }

    $('select').select2();
    $("#ajout_modal").modal("show");
  });
  $("#save").on("submit", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(e) {
      var formData, icon, request, _response, message;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#save")[0]);
              formData.append("element_id", $("#element").val());
              formData.append("annee_id", $("#annee").val());
              icon = $("#save i");
              _context8.prev = 5;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context8.next = 9;
              return axios.post('/parametre/programmation/new', formData);

            case 9:
              request = _context8.sent;
              _response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              id_programmation = false;
              $("#ajout_modal").modal("hide");
              Toast.fire({
                icon: 'success',
                title: _response
              });
              _context8.next = 25;
              break;

            case 19:
              _context8.prev = 19;
              _context8.t0 = _context8["catch"](5);
              console.log(_context8.t0, _context8.t0.response);
              message = _context8.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[5, 19]]);
    }));

    return function (_x) {
      return _ref8.apply(this, arguments);
    };
  }());
  $("#modifier").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var icon, request, _response2, message;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            if (id_programmation) {
              _context9.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectionner une ligne!'
            });
            return _context9.abrupt("return");

          case 3:
            icon = $("#modifier i");
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            _context9.prev = 5;
            _context9.next = 8;
            return axios.get('/parametre/programmation/details/' + id_programmation);

          case 8:
            request = _context9.sent;
            _response2 = request.data; // console.log(response)

            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("body #modifier_modal #udpate").html(_response2);
            $('select').select2();
            $("#modifier_modal").modal("show");
            _context9.next = 22;
            break;

          case 16:
            _context9.prev = 16;
            _context9.t0 = _context9["catch"](5);
            console.log(_context9.t0, _context9.t0.response);
            message = _context9.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

          case 22:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[5, 16]]);
  })));
  $("#udpate").on("submit", /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(e) {
      var formData, icon, request, _response3, message;

      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#udpate")[0]);
              formData.append("annee_id", $("#annee").val());
              formData.append("element_id", $("#element").val());
              icon = $("#udpate i");
              _context10.prev = 5;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context10.next = 9;
              return axios.post('/parametre/programmation/update/' + id_programmation, formData);

            case 9:
              request = _context10.sent;
              _response3 = request.data;
              $('#udpate')[0].reset();
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload();
              id_programmation = false;
              $("#modifier_modal").modal("hide");
              Toast.fire({
                icon: 'success',
                title: _response3
              });
              _context10.next = 25;
              break;

            case 19:
              _context10.prev = 19;
              _context10.t0 = _context10["catch"](5);
              console.log(_context10.t0, _context10.t0.response);
              message = _context10.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 25:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, null, [[5, 19]]);
    }));

    return function (_x2) {
      return _ref10.apply(this, arguments);
    };
  }());
  $("#supprimer").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var icon, formData, res, request, _response4, message;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            if (id_programmation) {
              _context11.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner un enseignant!'
            });
            return _context11.abrupt("return");

          case 3:
            icon = $("#supprimer i");
            icon.removeClass('fa-trash').addClass("fa-spinner fa-spin ");
            formData = new FormData();
            formData.append("programmation", id_programmation);
            res = confirm('Vous voulez vraiment supprimer cette programmation ?');

            if (!(res == 1)) {
              _context11.next = 27;
              break;
            }

            _context11.prev = 9;
            _context11.next = 12;
            return axios.post('/parametre/programmation/delete', formData);

          case 12:
            request = _context11.sent;
            _response4 = request.data;
            id_programmation = null;
            table.ajax.reload();
            id_programmation = null;
            icon.addClass('fa-trash').removeClass("fa-spinner fa-spin ");
            Toast.fire({
              icon: 'success',
              title: 'programmation bien Supprimer'
            });
            _context11.next = 27;
            break;

          case 21:
            _context11.prev = 21;
            _context11.t0 = _context11["catch"](9);
            console.log(_context11.t0, _context11.t0.response);
            message = _context11.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-trash').removeClass("fa-spinner fa-spin ");

          case 27:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[9, 21]]);
  })));
  $("#duplication").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
    var icon, formData, res, request, _response5, message;

    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            if (!($('#annee').val() == "")) {
              _context12.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une formation et une annee!'
            });
            return _context12.abrupt("return");

          case 3:
            icon = $("#duplication i");
            icon.removeClass('fa-clone').addClass("fa-spinner fa-spin ");
            formData = new FormData();
            formData.append("promotion", $('#promotion').val());
            formData.append("annee", $('#annee').val());
            res = confirm('Vous voulez vraiment dupliquer les programmations ? Si oui, merci de verifier d\'abord l\'annee ouverte pour cette formation');

            if (!(res == 1)) {
              _context12.next = 26;
              break;
            }

            _context12.prev = 10;
            _context12.next = 13;
            return axios.post('/parametre/programmation/duplication', formData);

          case 13:
            request = _context12.sent;
            _response5 = request.data;
            table.ajax.reload();
            icon.addClass('fa-clone').removeClass("fa-spinner fa-spin ");
            Toast.fire({
              icon: 'success',
              title: _response5
            });
            _context12.next = 26;
            break;

          case 20:
            _context12.prev = 20;
            _context12.t0 = _context12["catch"](10);
            console.log(_context12.t0, _context12.t0.response);
            message = _context12.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-clone').removeClass("fa-spinner fa-spin ");

          case 26:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[10, 20]]);
  })));
});

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
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

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8"], () => (__webpack_exec__("./assets/components/parametre/programmation.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtGQUFpQzs7QUFFaEU7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxzQkFBc0I7O0FBRW5FO0FBQ0E7QUFDQSxJQUFJLG1EQUFtRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUNiLFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDL0Msb0NBQW9DLG1CQUFPLENBQUMsK0hBQWlEO0FBQzdGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzVFLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvcGFyYW1ldHJlL3Byb2dyYW1tYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxufSlcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xyXG4gICAgbGV0IGlkX3Byb2dyYW1tYXRpb247XHJcbiAgICB2YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9wcm9ncmFtbWF0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBvcmRlcjogW1swLCBcImRlc2NcIl1dLFxyXG4gICAgICAgIGFqYXg6IFwiL3BhcmFtZXRyZS9wcm9ncmFtbWF0aW9uL2xpc3RcIixcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAkKFwic2VsZWN0XCIpLnNlbGVjdDIoKTtcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YXRhYmxlc19nZXN0aW9uX3Byb2dyYW1tYXRpb24gdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgIGlkX3Byb2dyYW1tYXRpb24gPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX3Byb2dyYW1tYXRpb24gdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xyXG4gICAgICAgICAgICBpZF9wcm9ncmFtbWF0aW9uID0gJCh0aGlzKS5hdHRyKCdpZCcpOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oXCJjaGFuZ2VcIixhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICQoXCIuY2FyZC1oZWFkZXJcIikuZmluZCgnI2Etb3V2ZXJ0ZScpLnRleHQoXCJcIilcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXHJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uLycraWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMCkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRhYmxlLmNvbHVtbnMoaSkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgJCgnI2Zvcm1hdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjcHJvbW90aW9uJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2FubmVlJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7ICBcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTsgIFxyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcclxuICAgICAgICAkKFwiLmNhcmQtaGVhZGVyXCIpLmZpbmQoJyNhLW91dmVydGUnKS50ZXh0KFwiXCIpXHJcblxyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIC8vIHRhYmxlLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFubmVlX3JlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvYW5uZWVQcm9ncmFtbWF0aW9uLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2VfYW5uZWUgPSBhbm5lZV9yZXF1ZXN0LmRhdGFcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb24vJytpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXRpb25BbmRhbm5lZU91dmVydGUgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZm9ybWF0aW9uQW5kYW5uZWVPdXZlcnRlLycraWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgJChcIi5jYXJkLWhlYWRlclwiKS5maW5kKCcjYS1vdXZlcnRlJykudGV4dChcIkwnQW5uZWUgT3V2ZXJ0ZTogXCIrZm9ybWF0aW9uQW5kYW5uZWVPdXZlcnRlLmRhdGEuYW5uZWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygxKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMjsgaSA8PSA2OyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdGFibGUuY29sdW1ucyhpKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgJCgnI3Byb21vdGlvbicpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjYW5uZWUnKS5odG1sKHJlc3BvbnNlX2FubmVlKS5zZWxlY3QyKCk7ICBcclxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbChcIlwiKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJCgnI2VsZW1lbnQnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTsgIFxyXG4gICAgfSlcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9wcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZihpZF9wcm9tb3Rpb24gIT0gXCJcIikge1xyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDIpLnNlYXJjaChpZF9wcm9tb3Rpb24pLmRyYXcoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zZW1lc3RyZS8nK2lkX3Byb21vdGlvbik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDM7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRhYmxlLmNvbHVtbnMoaSkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgJCgnI3NlbWVzdHJlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgICQoJyNtb2R1bGUnKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgXHJcbiAgICB9KVxyXG4gICAgJChcIiNzZW1lc3RyZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZihpZF9zZW1lc3RyZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMykuc2VhcmNoKGlkX3NlbWVzdHJlKS5kcmF3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycraWRfc2VtZXN0cmUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMykuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDQ7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRhYmxlLmNvbHVtbnMoaSkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgJCgnI21vZHVsZScpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgICAkKCcjZWxlbWVudCcpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xyXG4gICAgICAgXHJcbiAgICB9KVxyXG4gICAgJChcIiNtb2R1bGVcIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgIGNvbnN0IGlkX21vZHVsZSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgICAgIGlmKGlkX21vZHVsZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoNCkuc2VhcmNoKGlkX21vZHVsZSkuZHJhdygpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2VsZW1lbnQvJytpZF9tb2R1bGUpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoNCkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUuY29sdW1ucyg1KS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgICQoJyNlbGVtZW50JykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgICAgXHJcbiAgICB9KVxyXG4gICAgJChcIiNlbGVtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9lbGVtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBpZihpZF9lbGVtZW50ICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucyg1KS5zZWFyY2goaWRfZWxlbWVudCkuZHJhdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoNSkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiNhbm5lZVwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgY29uc3QgaWRfYW5uZWUgPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZihpZF9hbm5lZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoNikuc2VhcmNoKGlkX2FubmVlKS5kcmF3KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucyg2KS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI2Fqb3V0ZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gYWxlcnQoJChcIiNmb3JtYXRpb25cIikudmFsKCkpXHJcbiAgICAgICAgaWYoISQoXCIjZWxlbWVudFwiKS52YWwoKSB8fCAkKFwiI2VsZW1lbnRcIikudmFsKCkgPT0gXCJcIiB8fCAhJChcIiNhbm5lZVwiKS52YWwoKSB8fCAkKFwiI2FubmVlXCIpLnZhbCgpID09IFwiXCIpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY2hvaXNzaXIgdW5lIGFubmVlIGV0IHVuIGVsZW1lbnQhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcclxuXHJcbiAgICB9KVxyXG4gICAgJChcIiNzYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3NhdmVcIilbMF0pXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZWxlbWVudF9pZFwiLCAkKFwiI2VsZW1lbnRcIikudmFsKCkpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImFubmVlX2lkXCIsICQoXCIjYW5uZWVcIikudmFsKCkpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3NhdmUgaVwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9wcm9ncmFtbWF0aW9uL25ldycsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJCgnI3NhdmUnKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICBpZF9wcm9ncmFtbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICQoXCIjbW9kaWZpZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCFpZF9wcm9ncmFtbWF0aW9uKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbm5lciB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9wYXJhbWV0cmUvcHJvZ3JhbW1hdGlvbi9kZXRhaWxzLycraWRfcHJvZ3JhbW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJChcImJvZHkgI21vZGlmaWVyX21vZGFsICN1ZHBhdGVcIikuaHRtbChyZXNwb25zZSlcclxuICAgICAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0MigpO1xyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKFwiI3VkcGF0ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJChcIiN1ZHBhdGVcIilbMF0pXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYW5uZWVfaWRcIiwgJChcIiNhbm5lZVwiKS52YWwoKSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZWxlbWVudF9pZFwiLCAkKFwiI2VsZW1lbnRcIikudmFsKCkpO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3VkcGF0ZSBpXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZSgnZmEtY2hlY2stY2lyY2xlJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9wcm9ncmFtbWF0aW9uL3VwZGF0ZS8nK2lkX3Byb2dyYW1tYXRpb24sIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICQoJyN1ZHBhdGUnKVswXS5yZXNldCgpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIGlkX3Byb2dyYW1tYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI3N1cHByaW1lclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoIWlkX3Byb2dyYW1tYXRpb24pe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uZXIgdW4gZW5zZWlnbmFudCEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3N1cHByaW1lciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXRyYXNoJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvZ3JhbW1hdGlvblwiLCBpZF9wcm9ncmFtbWF0aW9uKTtcclxuICAgICAgICB2YXIgcmVzID0gY29uZmlybSgnVm91cyB2b3VsZXogdnJhaW1lbnQgc3VwcHJpbWVyIGNldHRlIHByb2dyYW1tYXRpb24gPycpO1xyXG4gICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL3Byb2dyYW1tYXRpb24vZGVsZXRlJyxmb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlkX3Byb2dyYW1tYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIGlkX3Byb2dyYW1tYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdHJhc2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdwcm9ncmFtbWF0aW9uIGJpZW4gU3VwcHJpbWVyJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXRyYXNoJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2R1cGxpY2F0aW9uXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24oKXtcclxuICAgICAgICBpZigkKCcjYW5uZWUnKS52YWwoKSA9PSBcIlwiICl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb25lciB1bmUgZm9ybWF0aW9uIGV0IHVuZSBhbm5lZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2R1cGxpY2F0aW9uIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2xvbmUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm9tb3Rpb25cIiwgJCgnI3Byb21vdGlvbicpLnZhbCgpKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhbm5lZVwiLCAkKCcjYW5uZWUnKS52YWwoKSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IGNvbmZpcm0oJ1ZvdXMgdm91bGV6IHZyYWltZW50IGR1cGxpcXVlciBsZXMgcHJvZ3JhbW1hdGlvbnMgPyBTaSBvdWksIG1lcmNpIGRlIHZlcmlmaWVyIGRcXCdhYm9yZCBsXFwnYW5uZWUgb3V2ZXJ0ZSBwb3VyIGNldHRlIGZvcm1hdGlvbicpO1xyXG4gICAgICAgIGlmKHJlcyA9PSAxKXtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL3Byb2dyYW1tYXRpb24vZHVwbGljYXRpb24nLGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNsb25lJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNsb25lJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXgsIGZpbHRlclJlamVjdCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBJU19GSUxURVJfUkVKRUNUID0gVFlQRSA9PSA3O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIHRoYXQpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShzZWxmKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiB8fCBJU19GSUxURVJfUkVKRUNUID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxuICAgICAgICAgIGNhc2UgNzogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJSZWplY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlclJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWZpbHRlcmluZ1xuICBmaWx0ZXJSZWplY3Q6IGNyZWF0ZU1ldGhvZCg3KVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY29uc3RydWN0b3InKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBBcnJheSA9IGdsb2JhbC5BcnJheTtcblxuLy8gYSBwYXJ0IG9mIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXkpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG4gICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAoaXNDb25zdHJ1Y3RvcihDKSAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcbiIsInZhciBhcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChhcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbEFycmF5KSkobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT0gJ0FycmF5Jztcbn07XG4iLCIvLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJpZF9wcm9ncmFtbWF0aW9uIiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsImlkX2V0YWIiLCJ2YWwiLCJmaW5kIiwidGV4dCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImNvbHVtbnMiLCJzZWFyY2giLCJkcmF3IiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImFubmVlX3JlcXVlc3QiLCJyZXNwb25zZV9hbm5lZSIsImZvcm1hdGlvbkFuZGFubmVlT3V2ZXJ0ZSIsImFubmVlIiwiaWRfcHJvbW90aW9uIiwiaWRfc2VtZXN0cmUiLCJpZF9tb2R1bGUiLCJpZF9lbGVtZW50IiwiaWRfYW5uZWUiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwibW9kYWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVtb3ZlIiwicG9zdCIsInJlc2V0IiwicmVsb2FkIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJyZXMiLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==