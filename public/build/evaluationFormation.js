(self["webpackChunk"] = self["webpackChunk"] || []).push([["evaluationFormation"],{

/***/ "./assets/components/evaluation/formation.js":
/*!***************************************************!*\
  !*** ./assets/components/evaluation/formation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js"),
    async = _require.async;

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
  $(" #enregistrer, #imprimer, #recalculer , #ExtracDip").attr("disabled", true);
  typeSearch = 'all';
  console.log(typeSearch);

  var enableButtons = function enableButtons() {
    if (check == 1) {
      $("#enregistrer").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
      $("#imprimer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
      $("#recalculer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
      $("#ExtracDip").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
    } else if (check == 2) {
      $("#enregistrer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
      $("#imprimer").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
      $("#recalculer").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
      $("#ExtracDip").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
    } else {
      $("#enregistrer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
      $("#imprimer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
      $("#recalculer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
      $("#ExtracDip").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
    }
  };

  $("select").select2();
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
            return axios.get("/api/annee/" + id_formation);

          case 5:
            request = _context2.sent;
            response = request.data;

          case 7:
            $("#annee").html(response).select2();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }))); // Event listener to the custom filter

  $("#min").change(function () {
    table.draw();
  });
  $("#recherche").on("click", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var annee_id, formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              admissions = [];
              e.preventDefault();
              $("#list_etu").empty();
              annee_id = $("#annee").val();

              if (!(annee_id == "" || !annee_id)) {
                _context3.next = 7;
                break;
              }

              Toast.fire({
                icon: "error",
                title: "Veuillez selection une annee!"
              });
              return _context3.abrupt("return");

            case 7:
              formData = new FormData();
              formData.append("typeSearch", typeSearch);
              icon = $("#recherche i");
              icon.removeClass("fa-search").addClass("fa-spinner fa-spin");
              _context3.prev = 11;
              _context3.next = 14;
              return axios.post("/evaluation/formation/list/" + annee_id, formData);

            case 14:
              request = _context3.sent;
              response = request.data; // console.log(response.html2);

              $("#infos").html(response.html1); // $("#list_etu").DataTable().destroy();

              if ($.fn.DataTable.isDataTable("#list_etu")) {
                $("#list_etu").DataTable().clear().destroy();
              }

              $("#list_etu").html(response.html2).DataTable({
                scrollX: true,
                language: {
                  url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                },
                lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
              });
              check = response.check; // console.log(check)

              enableButtons();
              icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
              element = '<div id="select-box" class="col-md-1"><label for="etablissement">Choix:</label> <select id="choice" class="form-control"><option value="all" default>All</option><option value="Full">Complet</option><option value="notFull">Incomplet</option></select> </div>';

              if ($('body .first-card .row #select-box').length == 0) {
                $("body .first-card .row").append(element);
                $('select').select2();
              }

              _context3.next = 32;
              break;

            case 26:
              _context3.prev = 26;
              _context3.t0 = _context3["catch"](11);
              console.log(_context3.t0);
              icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
              message = _context3.t0.response.data;
              Toast.fire({
                icon: "error",
                title: message
              });

            case 32:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[11, 26]]);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }()); // get etudiant notes

  var getEtudiantNotes = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var request, data;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              $('#editNotes #candidat_notes').html('');
              $('#editNotes  .alert').hide();
              _context4.prev = 2;
              _context4.next = 5;
              return axios.get('/evaluation/formation/getEtudiantNotes/' + id_admission);

            case 5:
              request = _context4.sent;
              data = request.data;
              $('#editNotes #candidat_notes').html(data['candidats_notes']);
              $('select').select2(); // console.log(data);

              _context4.next = 13;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](2);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 11]]);
    }));

    return function getEtudiantNotes() {
      return _ref4.apply(this, arguments);
    };
  }(); // pop up triggre after double click tr


  $("body").on("dblclick", "#list_etu tbody tr", function () {
    // alert('hi');
    id_admission = $(this).attr('id');
    getEtudiantNotes();
    $('#editNotes').modal('show');
  }); // Insertion des notes or modification

  $('body').on('keyup', '.noteExterne', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var note, annee, _icon, formData, request, response, message;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(e.which === 13)) {
                _context5.next = 32;
                break;
              }

              //on enter key
              note = $(this).val();
              annee = $(this).attr('annee');
              _icon = $(this).next().find('i');

              _icon.removeClass("fa-check").addClass("fa-spinner fa-spin");

              _icon.css('display', 'block');

              formData = new FormData();
              formData.append("note", note);
              formData.append("annee", annee);
              formData.append("admission", id_admission);
              _context5.prev = 10;
              _context5.next = 13;
              return axios.post("/evaluation/formation/add_notes", formData);

            case 13:
              request = _context5.sent;
              response = request.data;

              _icon.addClass("fa-check").removeClass("fa-spinner fa-spin");

              _icon.css('color', '#2ecc71');

              $(this).css('border-color', '#2ecc71');
              Toast.fire({
                icon: "success",
                title: response
              });
              check = response.check;
              enableButtons();
              _context5.next = 31;
              break;

            case 23:
              _context5.prev = 23;
              _context5.t0 = _context5["catch"](10);
              console.log(_context5.t0);

              _icon.addClass("fa-times").removeClass("fa-spinner fa-spin");

              _icon.css('color', '#c0392b');

              $(this).css('border-color', '#c0392b');
              message = _context5.t0.response.data;
              Toast.fire({
                icon: "error",
                title: message
              });

            case 31:
              window.setTimeout(function () {
                _icon.css('display', 'none');

                $('body .noteExterne').css('border-color', '#696b7d');
                $('#editNotes').modal('hide');
              }, 2000);

            case 32:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[10, 23]]);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }()); // custom filter

  $("body ").on("change", "#choice", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var annee_id, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              annee_id = $("#annee").val();

              if ($(this).val() != undefined) {
                typeSearch = $(this).val();
              }

              console.log(typeSearch);
              formData = new FormData();
              formData.append("typeSearch", typeSearch);
              _context6.prev = 6;

              // $("#list_etu").DataTable().destroy();
              if ($.fn.DataTable.isDataTable("#list_etu")) {
                $("#list_etu").DataTable().clear().destroy();
              }

              _context6.next = 10;
              return axios.post("/evaluation/formation/list/" + annee_id, formData);

            case 10:
              request = _context6.sent;
              response = request.data;
              $("#infos").html(response.html1);
              $("#list_etu").html(response.html2).DataTable({
                scrollX: true,
                language: {
                  url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                },
                lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
              });
              check = response.check; // console.log(check)

              enableButtons();
              icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
              element = '<div id="select-box" class="col-md-1"><label for="etablissement">Choix:</label> <select id="choice" class="form-control"><option value="all" default>All</option><option value="notFull">not Full</option></select> </div>';

              if ($('body .first-card .row #select-box').length == 0) {
                $("body .first-card .row").append(element);
              }

              _context6.next = 27;
              break;

            case 21:
              _context6.prev = 21;
              _context6.t0 = _context6["catch"](6);
              console.log(_context6.t0);
              icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
              message = _context6.t0.response.data;
              Toast.fire({
                icon: "error",
                title: message
              });

            case 27:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[6, 21]]);
    }));

    return function (_x3) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("#enregistrer").on("click", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              icon = $("#enregistrer i");
              icon.removeClass("fa-check").addClass("fa-spinner fa-spin");
              _context7.prev = 2;
              _context7.next = 5;
              return axios.post("/evaluation/formation/enregistrer");

            case 5:
              request = _context7.sent;
              response = request.data;
              icon.addClass("fa-check").removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: "success",
                title: response.message
              });
              check = response.check;
              enableButtons();
              _context7.next = 19;
              break;

            case 13:
              _context7.prev = 13;
              _context7.t0 = _context7["catch"](2);
              console.log(_context7.t0);
              icon.addClass("fa-check").removeClass("fa-spinner fa-spin");
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
    }));

    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }());
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
  $("#recalculer").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            icon = $("#recalculer i");
            icon.removeClass("fa-redo-alt").addClass("fa-spinner fa-spin");
            _context8.prev = 2;
            _context8.next = 5;
            return axios.post("/evaluation/formation/recalculer");

          case 5:
            request = _context8.sent;
            response = request.data;
            icon.addClass("fa-redo-alt").removeClass("fa-spinner fa-spin");
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
            icon.addClass("fa-redo-alt").removeClass("fa-spinner fa-spin");
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
  }))); // $("#ExtracDip").on('click',function(){
  //     window.open('/evaluation/formation/extractiondiplome', '_blank');
  // })

  admissions = [];
  $("body").on("click", "#list_etu tbody tr", function () {
    var input = $(this).find("input.check_etu");

    if (input.prop("checked") == true) {
      input.prop("checked", false);
      var index = admissions.indexOf(input.attr("id"));
      admissions.splice(index, 1);
    } else {
      input.prop("checked", true);
      admissions.push(input.attr("id"));
    }

    console.log(admissions);
  }); // $('body').on('click','.check_etu',function (e) {
  //     e.preventDefault();
  // })

  $("body").on("click", ".check_all_formation", function () {
    // alert('test')
    admissions = [];
    var etu = $("body .check_etu");

    if ($(".check_all_formation").prop("checked") == true) {
      etu.prop("checked", true);
      etu.map(function () {
        admissions.push(this.value);
      }); // console.log(admissions);
    } else {
      etu.prop("checked", false);
    }

    console.log(admissions);
  });
  $("#ExtracDip").on("click", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              console.log(admissions);
              e.preventDefault();

              if (!(admissions.length == 0)) {
                _context9.next = 5;
                break;
              }

              Toast.fire({
                icon: "error",
                title: "Veuillez cochez une ou plusieurs ligne!"
              });
              return _context9.abrupt("return");

            case 5:
              formData = new FormData();
              formData.append("admissions", JSON.stringify(admissions));
              icon = $("#ExtracDip i");
              icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");
              _context9.prev = 9;
              _context9.next = 12;
              return axios.post("/evaluation/formation/extractiondiplome", formData);

            case 12:
              request = _context9.sent;
              response = request.data;
              window.open("/" + response.file, "_blank");
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
              _context9.next = 24;
              break;

            case 18:
              _context9.prev = 18;
              _context9.t0 = _context9["catch"](9);
              message = _context9.t0.response.data;
              console.log(_context9.t0, _context9.t0.response);
              Toast.fire({
                icon: "error",
                title: message
              });
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[9, 18]]);
    }));

    return function (_x5) {
      return _ref9.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/evaluation/formation.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0M7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25EO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0NBQXdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ldmFsdWF0aW9uL2Zvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGFzeW5jIH0gPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcclxuXHJcbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgICB0b2FzdDogdHJ1ZSxcclxuICAgIHBvc2l0aW9uOiBcInRvcC1lbmRcIixcclxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgIHRpbWVyOiAzMDAwLFxyXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcclxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcclxuICAgIH0sXHJcbn0pO1xyXG5cclxubGV0IGNoZWNrO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIgI2VucmVnaXN0cmVyLCAjaW1wcmltZXIsICNyZWNhbGN1bGVyICwgI0V4dHJhY0RpcFwiKS5hdHRyKFxyXG4gICAgICAgIFwiZGlzYWJsZWRcIixcclxuICAgICAgICB0cnVlXHJcbiAgICApO1xyXG5cclxuICAgIHR5cGVTZWFyY2ggPSAnYWxsJztcclxuICAgIGNvbnNvbGUubG9nKHR5cGVTZWFyY2gpO1xyXG5cclxuICAgIGNvbnN0IGVuYWJsZUJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoZWNrID09IDEpIHtcclxuICAgICAgICAgICAgJChcIiNlbnJlZ2lzdHJlclwiKS5yZW1vdmVDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYWRkQ2xhc3MoXCJidG4taW5mb1wiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAkKFwiI2ltcHJpbWVyXCIpLnJlbW92ZUNsYXNzKFwiYnRuLWluZm9cIikuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiNyZWNhbGN1bGVyXCIpLnJlbW92ZUNsYXNzKFwiYnRuLWluZm9cIikuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiNFeHRyYWNEaXBcIikucmVtb3ZlQ2xhc3MoXCJidG4taW5mb1wiKS5hZGRDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2sgPT0gMikge1xyXG4gICAgICAgICAgICAkKFwiI2VucmVnaXN0cmVyXCIpLnJlbW92ZUNsYXNzKFwiYnRuLWluZm9cIikuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiNpbXByaW1lclwiKS5yZW1vdmVDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYWRkQ2xhc3MoXCJidG4taW5mb1wiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAkKFwiI3JlY2FsY3VsZXJcIikucmVtb3ZlQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmFkZENsYXNzKFwiYnRuLWluZm9cIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgJChcIiNFeHRyYWNEaXBcIikucmVtb3ZlQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmFkZENsYXNzKFwiYnRuLWluZm9cIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2VucmVnaXN0cmVyXCIpLnJlbW92ZUNsYXNzKFwiYnRuLWluZm9cIikuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiNpbXByaW1lclwiKS5yZW1vdmVDbGFzcyhcImJ0bi1pbmZvXCIpLmFkZENsYXNzKFwiYnRuLXNlY29uZGFyeVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoXCIjcmVjYWxjdWxlclwiKS5yZW1vdmVDbGFzcyhcImJ0bi1pbmZvXCIpLmFkZENsYXNzKFwiYnRuLXNlY29uZGFyeVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICQoXCIjRXh0cmFjRGlwXCIpLnJlbW92ZUNsYXNzKFwiYnRuLWluZm9cIikuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICQoXCJzZWxlY3RcIikuc2VsZWN0MigpO1xyXG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiO1xyXG4gICAgICAgIGlmIChpZF9ldGFiICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvZm9ybWF0aW9uL1wiICsgaWRfZXRhYik7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2Zvcm1hdGlvblwiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2FubmVlL1wiICsgaWRfZm9ybWF0aW9uKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjYW5uZWVcIikuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gdGhlIGN1c3RvbSBmaWx0ZXJcclxuICAgICQoXCIjbWluXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGFibGUuZHJhdygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNyZWNoZXJjaGVcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGFkbWlzc2lvbnMgPSBbXTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJChcIiNsaXN0X2V0dVwiKS5lbXB0eSgpO1xyXG4gICAgICAgIGxldCBhbm5lZV9pZCA9ICQoXCIjYW5uZWVcIikudmFsKCk7XHJcbiAgICAgICAgaWYgKGFubmVlX2lkID09IFwiXCIgfHwgIWFubmVlX2lkKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBhbm5lZSFcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInR5cGVTZWFyY2hcIiwgdHlwZVNlYXJjaCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcmVjaGVyY2hlIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLXNlYXJjaFwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFwiL2V2YWx1YXRpb24vZm9ybWF0aW9uL2xpc3QvXCIgKyBhbm5lZV9pZCAsIGZvcm1EYXRhICAgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuaHRtbDIpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNpbmZvc1wiKS5odG1sKHJlc3BvbnNlLmh0bWwxKTtcclxuICAgICAgICAgICAgLy8gJChcIiNsaXN0X2V0dVwiKS5EYXRhVGFibGUoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNsaXN0X2V0dVwiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNsaXN0X2V0dVwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKFwiI2xpc3RfZXR1XCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChyZXNwb25zZS5odG1sMilcclxuICAgICAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzlkY2JlY2Q0MmFkL2kxOG4vRnJlbmNoLmpzb25cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2hlY2sgPSByZXNwb25zZS5jaGVjaztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2hlY2spXHJcbiAgICAgICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXNlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSAnPGRpdiBpZD1cInNlbGVjdC1ib3hcIiBjbGFzcz1cImNvbC1tZC0xXCI+PGxhYmVsIGZvcj1cImV0YWJsaXNzZW1lbnRcIj5DaG9peDo8L2xhYmVsPiA8c2VsZWN0IGlkPVwiY2hvaWNlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj48b3B0aW9uIHZhbHVlPVwiYWxsXCIgZGVmYXVsdD5BbGw8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiRnVsbFwiPkNvbXBsZXQ8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwibm90RnVsbFwiPkluY29tcGxldDwvb3B0aW9uPjwvc2VsZWN0PiA8L2Rpdj4nO1xyXG4gICAgICAgICAgICBpZigkKCdib2R5IC5maXJzdC1jYXJkIC5yb3cgI3NlbGVjdC1ib3gnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgLmZpcnN0LWNhcmQgLnJvd1wiKS5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1zZWFyY2hcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBnZXQgZXR1ZGlhbnQgbm90ZXNcclxuICAgIGNvbnN0IGdldEV0dWRpYW50Tm90ZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgJCgnI2VkaXROb3RlcyAjY2FuZGlkYXRfbm90ZXMnKS5odG1sKCcnKTtcclxuICAgICAgICAkKCcjZWRpdE5vdGVzICAuYWxlcnQnKS5oaWRlKCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldCgnL2V2YWx1YXRpb24vZm9ybWF0aW9uL2dldEV0dWRpYW50Tm90ZXMvJytpZF9hZG1pc3Npb24pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgJCgnI2VkaXROb3RlcyAjY2FuZGlkYXRfbm90ZXMnKS5odG1sKGRhdGFbJ2NhbmRpZGF0c19ub3RlcyddKTtcclxuICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHBvcCB1cCB0cmlnZ3JlIGFmdGVyIGRvdWJsZSBjbGljayB0clxyXG4gICAgJChcImJvZHlcIikub24oXCJkYmxjbGlja1wiLCBcIiNsaXN0X2V0dSB0Ym9keSB0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gYWxlcnQoJ2hpJyk7XHJcbiAgICAgICAgaWRfYWRtaXNzaW9uID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAgIGdldEV0dWRpYW50Tm90ZXMoKTtcclxuICAgICAgICAkKCcjZWRpdE5vdGVzJykubW9kYWwoJ3Nob3cnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEluc2VydGlvbiBkZXMgbm90ZXMgb3IgbW9kaWZpY2F0aW9uXHJcbiAgICAkKCdib2R5Jykub24oJ2tleXVwJywgJy5ub3RlRXh0ZXJuZScsYXN5bmMgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7IC8vb24gZW50ZXIga2V5XHJcbiAgICAgICAgICAgIGxldCBub3RlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgbGV0IGFubmVlID0gJCh0aGlzKS5hdHRyKCdhbm5lZScpO1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gJCh0aGlzKS5uZXh0KCkuZmluZCgnaScpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2tcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGljb24uY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJub3RlXCIsIG5vdGUpOyBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYW5uZWVcIiwgYW5uZWUpOyBcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYWRtaXNzaW9uXCIsIGlkX2FkbWlzc2lvbik7IFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvZXZhbHVhdGlvbi9mb3JtYXRpb24vYWRkX25vdGVzXCIsIGZvcm1EYXRhXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5jc3MoJ2NvbG9yJywnIzJlY2M3MScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlci1jb2xvcicsJyMyZWNjNzEnKTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSByZXNwb25zZS5jaGVjaztcclxuICAgICAgICAgICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS10aW1lc1wiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgICAgIGljb24uY3NzKCdjb2xvcicsJyNjMDM5MmInKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdib3JkZXItY29sb3InLCcjYzAzOTJiJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCAgXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGljb24uY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHkgLm5vdGVFeHRlcm5lJykuY3NzKCdib3JkZXItY29sb3InLCcjNjk2YjdkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXROb3RlcycpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB9LCAgXHJcbiAgICAgICAgICAgICAgICAyMDAwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbi8vIGN1c3RvbSBmaWx0ZXJcclxuICAgICQoXCJib2R5IFwiKS5vbihcImNoYW5nZVwiLFwiI2Nob2ljZVwiLCBhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGxldCBhbm5lZV9pZCA9ICQoXCIjYW5uZWVcIikudmFsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJCh0aGlzKS52YWwoKSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0eXBlU2VhcmNoID0gJCh0aGlzKS52YWwoKSA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlU2VhcmNoKTtcclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0eXBlU2VhcmNoXCIsIHR5cGVTZWFyY2gpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyAkKFwiI2xpc3RfZXR1XCIpLkRhdGFUYWJsZSgpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2xpc3RfZXR1XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2xpc3RfZXR1XCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFwiL2V2YWx1YXRpb24vZm9ybWF0aW9uL2xpc3QvXCIgKyBhbm5lZV9pZCAsIGZvcm1EYXRhIFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgJChcIiNpbmZvc1wiKS5odG1sKHJlc3BvbnNlLmh0bWwxKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIjbGlzdF9ldHVcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKHJlc3BvbnNlLmh0bWwyKVxyXG4gICAgICAgICAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjaGVjayA9IHJlc3BvbnNlLmNoZWNrO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGVjaylcclxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtc2VhcmNoXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudCA9ICc8ZGl2IGlkPVwic2VsZWN0LWJveFwiIGNsYXNzPVwiY29sLW1kLTFcIj48bGFiZWwgZm9yPVwiZXRhYmxpc3NlbWVudFwiPkNob2l4OjwvbGFiZWw+IDxzZWxlY3QgaWQ9XCJjaG9pY2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPjxvcHRpb24gdmFsdWU9XCJhbGxcIiBkZWZhdWx0PkFsbDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJub3RGdWxsXCI+bm90IEZ1bGw8L29wdGlvbj48L3NlbGVjdD4gPC9kaXY+JztcclxuICAgICAgICAgICAgaWYoJCgnYm9keSAuZmlyc3QtY2FyZCAucm93ICNzZWxlY3QtYm94JykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5IC5maXJzdC1jYXJkIC5yb3dcIikuYXBwZW5kKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXNlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgJChcIiNlbnJlZ2lzdHJlclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VucmVnaXN0cmVyIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLWNoZWNrXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgXCIvZXZhbHVhdGlvbi9mb3JtYXRpb24vZW5yZWdpc3RyZXJcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVja1wiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZS5tZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2hlY2sgPSByZXNwb25zZS5jaGVjaztcclxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNpbXByaW1lclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAkKFwiI2ltcHJpbWVyX2xpc3RcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNhZmZpY2hhZ2VcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBhZmZpY2hhZ2UgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICQoXCIjaW1wcmVzc2lvbl9saXN0XCIpLmF0dHIoXHJcbiAgICAgICAgICAgIFwiaHJlZlwiLFxyXG4gICAgICAgICAgICAkKFwiI2ltcHJlc3Npb25fbGlzdFwiKS5hdHRyKFwiaHJlZlwiKS5zbGljZSgwLCAtMSkgKyBhZmZpY2hhZ2VcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIjaW1wcmVzc2lvbl9jbGFpclwiKS5hdHRyKFxyXG4gICAgICAgICAgICBcImhyZWZcIixcclxuICAgICAgICAgICAgJChcIiNpbXByZXNzaW9uX2NsYWlyXCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsIC0xKSArIGFmZmljaGFnZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIiNpbXByZXNzaW9uX2Fub255bWF0XCIpLmF0dHIoXHJcbiAgICAgICAgICAgIFwiaHJlZlwiLFxyXG4gICAgICAgICAgICAkKFwiI2ltcHJlc3Npb25fYW5vbnltYXRcIikuYXR0cihcImhyZWZcIikuc2xpY2UoMCwgLTEpICsgYWZmaWNoYWdlXHJcbiAgICAgICAgKTtcclxuICAgICAgICAkKFwiI2ltcHJlc3Npb25fcmF0XCIpLmF0dHIoXHJcbiAgICAgICAgICAgIFwiaHJlZlwiLFxyXG4gICAgICAgICAgICAkKFwiI2ltcHJlc3Npb25fcmF0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsIC0xKSArIGFmZmljaGFnZVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI3JlY2FsY3VsZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjcmVjYWxjdWxlciBpXCIpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1yZWRvLWFsdFwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFwiL2V2YWx1YXRpb24vZm9ybWF0aW9uL3JlY2FsY3VsZXJcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1yZWRvLWFsdFwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtcmVkby1hbHRcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkKFwiI0V4dHJhY0RpcFwiKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgd2luZG93Lm9wZW4oJy9ldmFsdWF0aW9uL2Zvcm1hdGlvbi9leHRyYWN0aW9uZGlwbG9tZScsICdfYmxhbmsnKTtcclxuICAgIC8vIH0pXHJcblxyXG4gICAgYWRtaXNzaW9ucyA9IFtdO1xyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjbGlzdF9ldHUgdGJvZHkgdHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXQuY2hlY2tfZXR1XCIpO1xyXG4gICAgICAgIGlmIChpbnB1dC5wcm9wKFwiY2hlY2tlZFwiKSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBhZG1pc3Npb25zLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICAgICAgYWRtaXNzaW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBhZG1pc3Npb25zLnB1c2goaW5wdXQuYXR0cihcImlkXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWRtaXNzaW9ucyk7XHJcbiAgICB9KTtcclxuICAgIC8vICQoJ2JvZHknKS5vbignY2xpY2snLCcuY2hlY2tfZXR1JyxmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyB9KVxyXG5cclxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuY2hlY2tfYWxsX2Zvcm1hdGlvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gYWxlcnQoJ3Rlc3QnKVxyXG4gICAgICAgIGFkbWlzc2lvbnMgPSBbXTtcclxuICAgICAgICBjb25zdCBldHUgPSAkKFwiYm9keSAuY2hlY2tfZXR1XCIpO1xyXG4gICAgICAgIGlmICgkKFwiLmNoZWNrX2FsbF9mb3JtYXRpb25cIikucHJvcChcImNoZWNrZWRcIikgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBldHUucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGV0dS5tYXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYWRtaXNzaW9ucy5wdXNoKHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWRtaXNzaW9ucyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXR1LnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYWRtaXNzaW9ucyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI0V4dHJhY0RpcFwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWRtaXNzaW9ucyk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChhZG1pc3Npb25zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVmV1aWxsZXogY29jaGV6IHVuZSBvdSBwbHVzaWV1cnMgbGlnbmUhXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImFkbWlzc2lvbnNcIiwgSlNPTi5zdHJpbmdpZnkoYWRtaXNzaW9ucykpO1xyXG5cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNFeHRyYWNEaXAgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgIFwiL2V2YWx1YXRpb24vZm9ybWF0aW9uL2V4dHJhY3Rpb25kaXBsb21lXCIsXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiL1wiICsgcmVzcG9uc2UuZmlsZSwgXCJfYmxhbmtcIik7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCIvKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAtLSBvbGQgSUUsIFdTSCAqL1xyXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XHJcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xyXG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xyXG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xyXG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XHJcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcclxudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XHJcblxyXG52YXIgR1QgPSAnPic7XHJcbnZhciBMVCA9ICc8JztcclxudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xyXG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XHJcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcclxuXHJcbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xyXG5cclxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcclxufTtcclxuXHJcbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXHJcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xyXG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcclxuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcclxuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xyXG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7IC8vIGF2b2lkIG1lbW9yeSBsZWFrXHJcbiAgcmV0dXJuIHRlbXA7XHJcbn07XHJcblxyXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXHJcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcclxuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XHJcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xyXG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XHJcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XHJcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcclxuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XHJcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcclxuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xyXG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xyXG59O1xyXG5cclxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxyXG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XHJcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxyXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxyXG4vLyBhdm9pZCBJRSBHQyBidWdcclxudmFyIGFjdGl2ZVhEb2N1bWVudDtcclxudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICB0cnkge1xyXG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cclxuICBOdWxsUHJvdG9PYmplY3QgPSB0eXBlb2YgZG9jdW1lbnQgIT0gJ3VuZGVmaW5lZCdcclxuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxyXG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcclxuICAgICAgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKVxyXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxyXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XHJcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XHJcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xyXG59O1xyXG5cclxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xyXG5cclxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XHJcbiAgdmFyIHJlc3VsdDtcclxuICBpZiAoTyAhPT0gbnVsbCkge1xyXG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XHJcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xyXG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcclxuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcclxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xyXG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcclxuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xyXG59O1xyXG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcclxudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xyXG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XHJcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XHJcblxyXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXHJcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xyXG4gIGFuT2JqZWN0KE8pO1xyXG4gIHZhciBwcm9wcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcclxuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XHJcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xyXG4gIHZhciBpbmRleCA9IDA7XHJcbiAgdmFyIGtleTtcclxuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgcHJvcHNba2V5XSk7XHJcbiAgcmV0dXJuIE87XHJcbn07XHJcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcclxudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcclxuXHJcbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXHJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcclxuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcclxudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xyXG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xyXG5cclxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXHJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcclxuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xyXG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xyXG4gIH1cclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XHJcbnZhciBpc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNvbnN0cnVjdG9yJyk7XHJcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcclxudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xyXG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcclxudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xyXG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XHJcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcclxudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcclxudmFyIHVuJFNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XHJcblxyXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJyk7XHJcblxyXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xyXG52YXIgQXJyYXkgPSBnbG9iYWwuQXJyYXk7XHJcbnZhciBtYXggPSBNYXRoLm1heDtcclxuXHJcbi8vIGBBcnJheS5wcm90b3R5cGUuc2xpY2VgIG1ldGhvZFxyXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxyXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXHJcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcclxuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xyXG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XHJcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XHJcbiAgICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcclxuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XHJcbiAgICAvLyBpbmxpbmUgYEFycmF5U3BlY2llc0NyZWF0ZWAgZm9yIHVzYWdlIG5hdGl2ZSBgQXJyYXkjc2xpY2VgIHdoZXJlIGl0J3MgcG9zc2libGVcclxuICAgIHZhciBDb25zdHJ1Y3RvciwgcmVzdWx0LCBuO1xyXG4gICAgaWYgKGlzQXJyYXkoTykpIHtcclxuICAgICAgQ29uc3RydWN0b3IgPSBPLmNvbnN0cnVjdG9yO1xyXG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xyXG4gICAgICBpZiAoaXNDb25zdHJ1Y3RvcihDb25zdHJ1Y3RvcikgJiYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XHJcbiAgICAgICAgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcclxuICAgICAgICBpZiAoQ29uc3RydWN0b3IgPT09IG51bGwpIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB1biRTbGljZShPLCBrLCBmaW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyBBcnJheSA6IENvbnN0cnVjdG9yKShtYXgoZmluIC0gaywgMCkpO1xyXG4gICAgZm9yIChuID0gMDsgayA8IGZpbjsgaysrLCBuKyspIGlmIChrIGluIE8pIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgbiwgT1trXSk7XHJcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59KTtcclxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XHJcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XHJcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xyXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xyXG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XHJcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XHJcblxyXG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xyXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XHJcblxyXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcclxuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcclxuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGFwcGx5KGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlciksIHRoaXMsIGFyZ3MpO1xyXG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xyXG4gIH07XHJcbn07XHJcblxyXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XHJcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXHJcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XHJcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcclxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcclxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxyXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXHJcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxyXG59KTtcclxuIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJhc3luYyIsIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImNoZWNrIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhdHRyIiwidHlwZVNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJlbmFibGVCdXR0b25zIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNlbGVjdDIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwiY2hhbmdlIiwidGFibGUiLCJkcmF3IiwiZSIsImFkbWlzc2lvbnMiLCJwcmV2ZW50RGVmYXVsdCIsImVtcHR5IiwiYW5uZWVfaWQiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJodG1sMSIsImZuIiwiRGF0YVRhYmxlIiwiaXNEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJodG1sMiIsInNjcm9sbFgiLCJsYW5ndWFnZSIsInVybCIsImxlbmd0aE1lbnUiLCJlbGVtZW50IiwibGVuZ3RoIiwibWVzc2FnZSIsImdldEV0dWRpYW50Tm90ZXMiLCJoaWRlIiwiaWRfYWRtaXNzaW9uIiwibW9kYWwiLCJ3aGljaCIsIm5vdGUiLCJhbm5lZSIsIm5leHQiLCJmaW5kIiwiY3NzIiwid2luZG93Iiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImFmZmljaGFnZSIsInNsaWNlIiwiaW5wdXQiLCJwcm9wIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImV0dSIsIm1hcCIsInZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9wZW4iLCJmaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==