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
    window.open('/evaluation/formation/impression', '_blank');
  }); // $("#affichage").on("change", function () {
  //     let affichage = $(this).val();
  //     $("#impression_list").attr(
  //         "href",
  //         $("#impression_list").attr("href").slice(0, -1) + affichage
  //     );
  //     $("#impression_clair").attr(
  //         "href",
  //         $("#impression_clair").attr("href").slice(0, -1) + affichage
  //     );
  //     $("#impression_anonymat").attr(
  //         "href",
  //         $("#impression_anonymat").attr("href").slice(0, -1) + affichage
  //     );
  //     $("#impression_rat").attr(
  //         "href",
  //         $("#impression_rat").attr("href").slice(0, -1) + affichage
  //     );
  // });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbEJBLHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQztBQUNwRSxrQkFBa0IsbUJBQU8sQ0FBQyxxRkFBNEI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsb0hBQTJDO0FBQ3RELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBNEQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNkRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsZ0JBQWdCLG1CQUFPLENBQUMsNkZBQWdDO0FBQ3hELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFbkQsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdDQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvZXZhbHVhdGlvbi9mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYXN5bmMgfSA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xyXG5cclxuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246IFwidG9wLWVuZFwiLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgU3dhbC5zdG9wVGltZXIpO1xyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIFN3YWwucmVzdW1lVGltZXIpO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG5sZXQgY2hlY2s7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiAjZW5yZWdpc3RyZXIsICNpbXByaW1lciwgI3JlY2FsY3VsZXIgLCAjRXh0cmFjRGlwXCIpLmF0dHIoXHJcbiAgICAgICAgXCJkaXNhYmxlZFwiLFxyXG4gICAgICAgIHRydWVcclxuICAgICk7XHJcblxyXG4gICAgdHlwZVNlYXJjaCA9ICdhbGwnO1xyXG4gICAgY29uc29sZS5sb2codHlwZVNlYXJjaCk7XHJcblxyXG4gICAgY29uc3QgZW5hYmxlQnV0dG9ucyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY2hlY2sgPT0gMSkge1xyXG4gICAgICAgICAgICAkKFwiI2VucmVnaXN0cmVyXCIpLnJlbW92ZUNsYXNzKFwiYnRuLXNlY29uZGFyeVwiKS5hZGRDbGFzcyhcImJ0bi1pbmZvXCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICQoXCIjaW1wcmltZXJcIikucmVtb3ZlQ2xhc3MoXCJidG4taW5mb1wiKS5hZGRDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAkKFwiI3JlY2FsY3VsZXJcIikucmVtb3ZlQ2xhc3MoXCJidG4taW5mb1wiKS5hZGRDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAkKFwiI0V4dHJhY0RpcFwiKS5yZW1vdmVDbGFzcyhcImJ0bi1pbmZvXCIpLmFkZENsYXNzKFwiYnRuLXNlY29uZGFyeVwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGVjayA9PSAyKSB7XHJcbiAgICAgICAgICAgICQoXCIjZW5yZWdpc3RyZXJcIikucmVtb3ZlQ2xhc3MoXCJidG4taW5mb1wiKS5hZGRDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAkKFwiI2ltcHJpbWVyXCIpLnJlbW92ZUNsYXNzKFwiYnRuLXNlY29uZGFyeVwiKS5hZGRDbGFzcyhcImJ0bi1pbmZvXCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICQoXCIjcmVjYWxjdWxlclwiKS5yZW1vdmVDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYWRkQ2xhc3MoXCJidG4taW5mb1wiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAkKFwiI0V4dHJhY0RpcFwiKS5yZW1vdmVDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYWRkQ2xhc3MoXCJidG4taW5mb1wiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZW5yZWdpc3RyZXJcIikucmVtb3ZlQ2xhc3MoXCJidG4taW5mb1wiKS5hZGRDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAkKFwiI2ltcHJpbWVyXCIpLnJlbW92ZUNsYXNzKFwiYnRuLWluZm9cIikuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiNyZWNhbGN1bGVyXCIpLnJlbW92ZUNsYXNzKFwiYnRuLWluZm9cIikuYWRkQ2xhc3MoXCJidG4tc2Vjb25kYXJ5XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgJChcIiNFeHRyYWNEaXBcIikucmVtb3ZlQ2xhc3MoXCJidG4taW5mb1wiKS5hZGRDbGFzcyhcImJ0bi1zZWNvbmRhcnlcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJChcInNlbGVjdFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGlkX2V0YWIgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9mb3JtYXRpb24vXCIgKyBpZF9ldGFiKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjZm9ybWF0aW9uXCIpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgIH0pO1xyXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIjtcclxuICAgICAgICBpZiAoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvYW5uZWUvXCIgKyBpZF9mb3JtYXRpb24pO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNhbm5lZVwiKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lciB0byB0aGUgY3VzdG9tIGZpbHRlclxyXG4gICAgJChcIiNtaW5cIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0YWJsZS5kcmF3KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI3JlY2hlcmNoZVwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgYWRtaXNzaW9ucyA9IFtdO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiI2xpc3RfZXR1XCIpLmVtcHR5KCk7XHJcbiAgICAgICAgbGV0IGFubmVlX2lkID0gJChcIiNhbm5lZVwiKS52YWwoKTtcclxuICAgICAgICBpZiAoYW5uZWVfaWQgPT0gXCJcIiB8fCAhYW5uZWVfaWQpIHtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJWZXVpbGxleiBzZWxlY3Rpb24gdW5lIGFubmVlIVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidHlwZVNlYXJjaFwiLCB0eXBlU2VhcmNoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNyZWNoZXJjaGUgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtc2VhcmNoXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgXCIvZXZhbHVhdGlvbi9mb3JtYXRpb24vbGlzdC9cIiArIGFubmVlX2lkICwgZm9ybURhdGEgICBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5odG1sMik7XHJcblxyXG4gICAgICAgICAgICAkKFwiI2luZm9zXCIpLmh0bWwocmVzcG9uc2UuaHRtbDEpO1xyXG4gICAgICAgICAgICAvLyAkKFwiI2xpc3RfZXR1XCIpLkRhdGFUYWJsZSgpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2xpc3RfZXR1XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2xpc3RfZXR1XCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoXCIjbGlzdF9ldHVcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKHJlc3BvbnNlLmh0bWwyKVxyXG4gICAgICAgICAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjaGVjayA9IHJlc3BvbnNlLmNoZWNrO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGVjaylcclxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtc2VhcmNoXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudCA9ICc8ZGl2IGlkPVwic2VsZWN0LWJveFwiIGNsYXNzPVwiY29sLW1kLTFcIj48bGFiZWwgZm9yPVwiZXRhYmxpc3NlbWVudFwiPkNob2l4OjwvbGFiZWw+IDxzZWxlY3QgaWQ9XCJjaG9pY2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPjxvcHRpb24gdmFsdWU9XCJhbGxcIiBkZWZhdWx0PkFsbDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJGdWxsXCI+Q29tcGxldDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJub3RGdWxsXCI+SW5jb21wbGV0PC9vcHRpb24+PC9zZWxlY3Q+IDwvZGl2Pic7XHJcbiAgICAgICAgICAgIGlmKCQoJ2JvZHkgLmZpcnN0LWNhcmQgLnJvdyAjc2VsZWN0LWJveCcpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keSAuZmlyc3QtY2FyZCAucm93XCIpLmFwcGVuZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXNlYXJjaFwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGdldCBldHVkaWFudCBub3Rlc1xyXG4gICAgY29uc3QgZ2V0RXR1ZGlhbnROb3RlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAkKCcjZWRpdE5vdGVzICNjYW5kaWRhdF9ub3RlcycpLmh0bWwoJycpO1xyXG4gICAgICAgICQoJyNlZGl0Tm90ZXMgIC5hbGVydCcpLmhpZGUoKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvZXZhbHVhdGlvbi9mb3JtYXRpb24vZ2V0RXR1ZGlhbnROb3Rlcy8nK2lkX2FkbWlzc2lvbik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAkKCcjZWRpdE5vdGVzICNjYW5kaWRhdF9ub3RlcycpLmh0bWwoZGF0YVsnY2FuZGlkYXRzX25vdGVzJ10pO1xyXG4gICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcG9wIHVwIHRyaWdncmUgYWZ0ZXIgZG91YmxlIGNsaWNrIHRyXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImRibGNsaWNrXCIsIFwiI2xpc3RfZXR1IHRib2R5IHRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBhbGVydCgnaGknKTtcclxuICAgICAgICBpZF9hZG1pc3Npb24gPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgZ2V0RXR1ZGlhbnROb3RlcygpO1xyXG4gICAgICAgICQoJyNlZGl0Tm90ZXMnKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSW5zZXJ0aW9uIGRlcyBub3RlcyBvciBtb2RpZmljYXRpb25cclxuICAgICQoJ2JvZHknKS5vbigna2V5dXAnLCAnLm5vdGVFeHRlcm5lJyxhc3luYyBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMpIHsgLy9vbiBlbnRlciBrZXlcclxuICAgICAgICAgICAgbGV0IG5vdGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgYW5uZWUgPSAkKHRoaXMpLmF0dHIoJ2FubmVlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAkKHRoaXMpLm5leHQoKS5maW5kKCdpJyk7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1jaGVja1wiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgICAgICAgaWNvbi5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5vdGVcIiwgbm90ZSk7IFxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhbm5lZVwiLCBhbm5lZSk7IFxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhZG1pc3Npb25cIiwgaWRfYWRtaXNzaW9uKTsgXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAgICAgICAgICAgICBcIi9ldmFsdWF0aW9uL2Zvcm1hdGlvbi9hZGRfbm90ZXNcIiwgZm9ybURhdGFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2tcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgICAgICBpY29uLmNzcygnY29sb3InLCcjMmVjYzcxJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnYm9yZGVyLWNvbG9yJywnIzJlY2M3MScpO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IHJlc3BvbnNlLmNoZWNrO1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXRpbWVzXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5jc3MoJ2NvbG9yJywnI2MwMzkyYicpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JvcmRlci1jb2xvcicsJyNjMDM5MmInKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoICBcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkgeyAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keSAubm90ZUV4dGVybmUnKS5jc3MoJ2JvcmRlci1jb2xvcicsJyM2OTZiN2QnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdE5vdGVzJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgIH0sICBcclxuICAgICAgICAgICAgICAgIDIwMDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuLy8gY3VzdG9tIGZpbHRlclxyXG4gICAgJChcImJvZHkgXCIpLm9uKFwiY2hhbmdlXCIsXCIjY2hvaWNlXCIsIGFzeW5jIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbGV0IGFubmVlX2lkID0gJChcIiNhbm5lZVwiKS52YWwoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKHRoaXMpLnZhbCgpICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHR5cGVTZWFyY2ggPSAkKHRoaXMpLnZhbCgpIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVTZWFyY2gpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInR5cGVTZWFyY2hcIiwgdHlwZVNlYXJjaCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vICQoXCIjbGlzdF9ldHVcIikuRGF0YVRhYmxlKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjbGlzdF9ldHVcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjbGlzdF9ldHVcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICAgICAgXCIvZXZhbHVhdGlvbi9mb3JtYXRpb24vbGlzdC9cIiArIGFubmVlX2lkICwgZm9ybURhdGEgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAkKFwiI2luZm9zXCIpLmh0bWwocmVzcG9uc2UuaHRtbDEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJChcIiNsaXN0X2V0dVwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwocmVzcG9uc2UuaHRtbDIpXHJcbiAgICAgICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNoZWNrID0gcmVzcG9uc2UuY2hlY2s7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoZWNrKVxyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1zZWFyY2hcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50ID0gJzxkaXYgaWQ9XCJzZWxlY3QtYm94XCIgY2xhc3M9XCJjb2wtbWQtMVwiPjxsYWJlbCBmb3I9XCJldGFibGlzc2VtZW50XCI+Q2hvaXg6PC9sYWJlbD4gPHNlbGVjdCBpZD1cImNob2ljZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+PG9wdGlvbiB2YWx1ZT1cImFsbFwiIGRlZmF1bHQ+QWxsPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIm5vdEZ1bGxcIj5ub3QgRnVsbDwvb3B0aW9uPjwvc2VsZWN0PiA8L2Rpdj4nO1xyXG4gICAgICAgICAgICBpZigkKCdib2R5IC5maXJzdC1jYXJkIC5yb3cgI3NlbGVjdC1ib3gnKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcImJvZHkgLmZpcnN0LWNhcmQgLnJvd1wiKS5hcHBlbmQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtc2VhcmNoXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiI2VucmVnaXN0cmVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZW5yZWdpc3RyZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2tcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICBcIi9ldmFsdWF0aW9uL2Zvcm1hdGlvbi9lbnJlZ2lzdHJlclwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjaGVjayA9IHJlc3BvbnNlLmNoZWNrO1xyXG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2tcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI2ltcHJpbWVyXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKCcvZXZhbHVhdGlvbi9mb3JtYXRpb24vaW1wcmVzc2lvbicsICdfYmxhbmsnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICQoXCIjYWZmaWNoYWdlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICBsZXQgYWZmaWNoYWdlID0gJCh0aGlzKS52YWwoKTtcclxuICAgIC8vICAgICAkKFwiI2ltcHJlc3Npb25fbGlzdFwiKS5hdHRyKFxyXG4gICAgLy8gICAgICAgICBcImhyZWZcIixcclxuICAgIC8vICAgICAgICAgJChcIiNpbXByZXNzaW9uX2xpc3RcIikuYXR0cihcImhyZWZcIikuc2xpY2UoMCwgLTEpICsgYWZmaWNoYWdlXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vICAgICAkKFwiI2ltcHJlc3Npb25fY2xhaXJcIikuYXR0cihcclxuICAgIC8vICAgICAgICAgXCJocmVmXCIsXHJcbiAgICAvLyAgICAgICAgICQoXCIjaW1wcmVzc2lvbl9jbGFpclwiKS5hdHRyKFwiaHJlZlwiKS5zbGljZSgwLCAtMSkgKyBhZmZpY2hhZ2VcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gICAgICQoXCIjaW1wcmVzc2lvbl9hbm9ueW1hdFwiKS5hdHRyKFxyXG4gICAgLy8gICAgICAgICBcImhyZWZcIixcclxuICAgIC8vICAgICAgICAgJChcIiNpbXByZXNzaW9uX2Fub255bWF0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsIC0xKSArIGFmZmljaGFnZVxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyAgICAgJChcIiNpbXByZXNzaW9uX3JhdFwiKS5hdHRyKFxyXG4gICAgLy8gICAgICAgICBcImhyZWZcIixcclxuICAgIC8vICAgICAgICAgJChcIiNpbXByZXNzaW9uX3JhdFwiKS5hdHRyKFwiaHJlZlwiKS5zbGljZSgwLCAtMSkgKyBhZmZpY2hhZ2VcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJChcIiNyZWNhbGN1bGVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3JlY2FsY3VsZXIgaVwiKTtcclxuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtcmVkby1hbHRcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICBcIi9ldmFsdWF0aW9uL2Zvcm1hdGlvbi9yZWNhbGN1bGVyXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtcmVkby1hbHRcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLXJlZG8tYWx0XCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gJChcIiNFeHRyYWNEaXBcIikub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgIHdpbmRvdy5vcGVuKCcvZXZhbHVhdGlvbi9mb3JtYXRpb24vZXh0cmFjdGlvbmRpcGxvbWUnLCAnX2JsYW5rJyk7XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIGFkbWlzc2lvbnMgPSBbXTtcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2xpc3RfZXR1IHRib2R5IHRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0LmNoZWNrX2V0dVwiKTtcclxuICAgICAgICBpZiAoaW5wdXQucHJvcChcImNoZWNrZWRcIikgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gYWRtaXNzaW9ucy5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgICAgIGFkbWlzc2lvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgYWRtaXNzaW9ucy5wdXNoKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFkbWlzc2lvbnMpO1xyXG4gICAgfSk7XHJcbiAgICAvLyAkKCdib2R5Jykub24oJ2NsaWNrJywnLmNoZWNrX2V0dScsZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gfSlcclxuXHJcbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNoZWNrX2FsbF9mb3JtYXRpb25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGFsZXJ0KCd0ZXN0JylcclxuICAgICAgICBhZG1pc3Npb25zID0gW107XHJcbiAgICAgICAgY29uc3QgZXR1ID0gJChcImJvZHkgLmNoZWNrX2V0dVwiKTtcclxuICAgICAgICBpZiAoJChcIi5jaGVja19hbGxfZm9ybWF0aW9uXCIpLnByb3AoXCJjaGVja2VkXCIpID09IHRydWUpIHtcclxuICAgICAgICAgICAgZXR1LnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICBldHUubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFkbWlzc2lvbnMucHVzaCh0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFkbWlzc2lvbnMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV0dS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFkbWlzc2lvbnMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIiNFeHRyYWNEaXBcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFkbWlzc2lvbnMpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoYWRtaXNzaW9ucy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IGNvY2hleiB1bmUgb3UgcGx1c2lldXJzIGxpZ25lIVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhZG1pc3Npb25zXCIsIEpTT04uc3RyaW5naWZ5KGFkbWlzc2lvbnMpKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjRXh0cmFjRGlwIGlcIik7XHJcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgICAgICBcIi9ldmFsdWF0aW9uL2Zvcm1hdGlvbi9leHRyYWN0aW9uZGlwbG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cub3BlbihcIi9cIiArIHJlc3BvbnNlLmZpbGUsIFwiX2JsYW5rXCIpO1xyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIiwiLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7IC8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gICAgPyBkb2N1bWVudC5kb21haW4gJiYgYWN0aXZlWERvY3VtZW50XG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcbiAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcbiAgICA6IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KTsgLy8gV1NIXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIgcHJvcHMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgcHJvcHNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiYXN5bmMiLCJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJjaGVjayIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYXR0ciIsInR5cGVTZWFyY2giLCJjb25zb2xlIiwibG9nIiwiZW5hYmxlQnV0dG9ucyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzZWxlY3QyIiwib24iLCJpZF9ldGFiIiwidmFsIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImNoYW5nZSIsInRhYmxlIiwiZHJhdyIsImUiLCJhZG1pc3Npb25zIiwicHJldmVudERlZmF1bHQiLCJlbXB0eSIsImFubmVlX2lkIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0IiwiaHRtbDEiLCJmbiIsIkRhdGFUYWJsZSIsImlzRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95IiwiaHRtbDIiLCJzY3JvbGxYIiwibGFuZ3VhZ2UiLCJ1cmwiLCJsZW5ndGhNZW51IiwiZWxlbWVudCIsImxlbmd0aCIsIm1lc3NhZ2UiLCJnZXRFdHVkaWFudE5vdGVzIiwiaGlkZSIsImlkX2FkbWlzc2lvbiIsIm1vZGFsIiwid2hpY2giLCJub3RlIiwiYW5uZWUiLCJuZXh0IiwiZmluZCIsImNzcyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ1bmRlZmluZWQiLCJvcGVuIiwiaW5wdXQiLCJwcm9wIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImV0dSIsIm1hcCIsInZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbGUiXSwic291cmNlUm9vdCI6IiJ9