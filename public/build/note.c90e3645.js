(self.webpackChunk=self.webpackChunk||[]).push([[6793],{2621:(e,r,t)=>{var n=t(9755);function a(e,r,t,n,a,s,i){try{var o=e[s](i),c=o.value}catch(e){return void t(e)}o.done?r(c):Promise.resolve(c).then(n,a)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,s){var i=e.apply(r,t);function o(e){a(i,n,s,o,c,"next",e)}function c(e){a(i,n,s,o,c,"throw",e)}o(void 0)}))}}t(3076),t(9826),t(1539),t(2772),t(561),t(4916),t(4765),t(8674),n(document).ready((function(){var e=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}),r=!1,t=[],a=n("#datables_notes_epreuve").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/administration/note/list",processing:!0,serverSide:!0,deferRender:!0,preDrawCallback:function(e){n.fn.DataTable.isDataTable("#datables_notes_epreuve")&&((e=n("#datables_notes_epreuve").DataTable().settings())[0].jqXHR&&e[0].jqXHR.abort())},language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"}});function i(){n("#datatables_notes_inscription").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[2,"asc"]],ajax:"/administration/note/list/note_inscription/"+r,processing:!0,serverSide:!0,deferRender:!0,language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"},stateSave:!0,bDestroy:!0})}n("body").on("click","#datables_notes_epreuve tbody tr",(function(){var e=n(this).find("input");if(e.is(":checked")){e.prop("checked",!1);var r=t.indexOf(e.attr("id"));t.splice(r,1)}else e.prop("checked",!0),t.push(e.attr("id"));console.log(t)})),n("body").on("dblclick","#datables_notes_epreuve tbody tr",(function(e){e.preventDefault(),n(this).hasClass("active_databales")?(n(this).removeClass("active_databales"),r=null):(n("#datables_notes_epreuve tbody tr").removeClass("active_databales"),n(this).addClass("active_databales"),r=n(this).attr("id"),i())})),n("#etablissement").select2(),n("#professeur").select2(),n("#etablissement").on("change",s(regeneratorRuntime.mark((function e(){var r,t,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n(this).val(),a.columns().search(""),t="",""==r){e.next=12;break}return""!=n("#professeur").val()&&a.columns(6).search(n("#professeur").val()),a.columns(0).search(r).draw(),e.next=8,axios.get("/api/formation/"+r);case 8:s=e.sent,t=s.data,e.next=13;break;case 12:""!=n("#professeur").val()?a.columns(6).search(n("#professeur").val()).draw():a.columns().search("").draw();case 13:n("#semestre").html("").select2(),n("#module").html("").select2(),n("#element").html("").select2(),n("#promotion").html("").select2(),n("#formation").html(t).select2();case 18:case"end":return e.stop()}}),e,this)})))),n("#formation").on("change",s(regeneratorRuntime.mark((function e(){var r,t,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n(this).val(),a.columns().search(""),""!=n("#professeur").val()&&a.columns(6).search(n("#professeur").val()),t="",""==r){e.next=12;break}return a.columns(1).search(r).draw(),e.next=8,axios.get("/api/promotion/"+r);case 8:s=e.sent,t=s.data,e.next=13;break;case 12:a.columns(0).search(n("#etablissement").val()).draw();case 13:n("#semestre").html("").select2(),n("#module").html("").select2(),n("#element").html("").select2(),n("#promotion").html(t).select2();case 17:case"end":return e.stop()}}),e,this)})))),n("#promotion").on("change",s(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n(this).val(),a.columns().search(""),""!=n("#professeur").val()&&a.columns(6).search(n("#professeur").val()),""==r){e.next=11;break}return a.columns(2).search(r).draw(),e.next=7,axios.get("/api/semestre/"+r);case 7:t=e.sent,response=t.data,e.next=12;break;case 11:a.columns(1).search(n("#formation").val()).draw();case 12:n("#semestre").html("").select2(),n("#module").html("").select2(),n("#element").html("").select2(),n("#semestre").html(response).select2();case 16:case"end":return e.stop()}}),e,this)})))),n("#semestre").on("change",s(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n(this).val(),a.columns().search(""),""!=n("#professeur").val()&&a.columns(6).search(n("#professeur").val()),""==r){e.next=11;break}return e.next=6,axios.get("/api/module/"+r);case 6:t=e.sent,a.columns(3).search(r).draw(),response=t.data,e.next=12;break;case 11:a.columns(2).search(n("#promotion").val()).draw();case 12:n("#module").html("").select2(),n("#element").html("").select2(),n("#module").html(response).select2();case 15:case"end":return e.stop()}}),e,this)})))),n("#module").on("change",s(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n(this).val(),a.columns().search(""),""!=n("#professeur").val()&&a.columns(6).search(n("#professeur").val()),""==r){e.next=11;break}return a.columns(4).search(r).draw(),e.next=7,axios.get("/api/element/"+r);case 7:t=e.sent,response=t.data,e.next=12;break;case 11:a.columns(3).search(n("#semestre").val()).draw();case 12:n("#element").html(response).select2();case 13:case"end":return e.stop()}}),e,this)})))),n("#element").on("change",s(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n(this).val(),a.columns().search(""),""!=n("#professeur").val()&&a.columns(6).search(n("#professeur").val()),a.columns(5).search(r).draw();case 4:case"end":return e.stop()}}),e,this)})))),n("#professeur").on("change",s(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n(this).val(),a.columns(6).search(r).draw();case 2:case"end":return e.stop()}}),e,this)})))),n("#note").on("click",function(){var t=s(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r){t.next=4;break}return e.fire({icon:"error",title:"Veuillez selection une ligne!"}),t.abrupt("return");case 4:n("#notesmodal").modal("show");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n("body").on("submit",".save_note",function(){var r=s(regeneratorRuntime.mark((function r(t){var s,i,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),s=n(this).find("input").attr("id"),!(n(this).find("input").val()<0||n(this).find("input").val()>20)){r.next=5;break}return e.fire({icon:"error",title:"La Note doit etre entre 0 et 20"}),r.abrupt("return");case 5:return n(this).find("input").blur(),i=new FormData(n(this)[0]),n(this).parent().parent().next("tr").find(".input_note").focus(),r.next=10,axios.post("/administration/note/note_update/"+s,i);case 10:return o=r.sent,response=o.data,r.next=14,o.data;case 14:r.sent,a.ajax.reload(null,!1);case 16:case"end":return r.stop()}}),r,this)})));return function(e){return r.apply(this,arguments)}}()),n("body").on("submit",".save_obs",function(){var e=s(regeneratorRuntime.mark((function e(r){var t,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),n(this).find("input").blur(),t=n(this).find("input").attr("id"),a=new FormData(n(this)[0]),n(this).parent().parent().next("tr").find(".input_obs").focus(),e.next=7,axios.post("/administration/note/observation_update/"+t,a);case 7:return s=e.sent,e.next=10,s.data;case 10:e.sent;case 11:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()),n("body").on("click",".check_note_ins",s(regeneratorRuntime.mark((function e(){var r,t,s,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new FormData,t=n(this).attr("id"),1!=n(this).prop("checked")){e.next=14;break}return r.append("absence",!0),e.next=6,axios.post("/administration/note/absence_update/"+t,r);case 6:return s=e.sent,e.next=9,s.data;case 9:e.sent,a.ajax.reload(null,!1),e.next=23;break;case 14:return r.append("absence",!1),e.next=17,axios.post("/administration/note/absence_update/"+t,r);case 17:return i=e.sent,e.next=20,i.data;case 20:e.sent,a.ajax.reload(null,!1);case 23:case"end":return e.stop()}}),e,this)})))),n("#import").on("click",function(){var t=s(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r){t.next=4;break}return e.fire({icon:"error",title:"Veuillez selection une ligne!"}),t.abrupt("return");case 4:n("#import_en_masse").modal("show");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n("body").on("click","#epreuve_canvas",(function(){window.open("/administration/note/canvas/"+r,"_blank")})),n("#import_epreuve_save").on("submit",function(){var e=s(regeneratorRuntime.mark((function e(t){var a,s,o,c,u,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new FormData(n(this)[0]),(s=n("#import_en_masse .modal-body .alert")).remove(),(o=n("#epreuve_enregistre i")).removeClass("fa-check-circle").addClass("fa-spinner fa-spin"),e.prev=6,e.next=9,axios.post("/administration/note/import/"+r,a);case 9:c=e.sent,u=c.data,n("#import_en_masse .modal-body").prepend('<div class="alert alert-success">\n                <p>'.concat(u,"</p>\n              </div>")),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),i(),e.next=23;break;case 16:e.prev=16,e.t0=e.catch(6),l=e.t0.response.data,console.log(e.t0,e.t0.response),s.remove(),n("#import_en_masse .modal-body").prepend('<div class="alert alert-danger">'.concat(l,"</div>")),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 23:case"end":return e.stop()}}),e,this,[[6,16]])})));return function(r){return e.apply(this,arguments)}}()),n("#cloture_epreuve").on("click",function(){var r=s(regeneratorRuntime.mark((function r(s){var i,o,c,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s.preventDefault(),0!=t.length){r.next=4;break}return e.fire({icon:"error",title:"Veuillez cochez une ou plusieurs ligne!"}),r.abrupt("return");case 4:return(i=n("#cloture_epreuve i")).removeClass("fa-lock").addClass("fa-spinner fa-spin"),r.prev=6,(o=new FormData).append("epreuves",JSON.stringify(t)),r.next=11,axios.post("/administration/note/cloturer",o);case 11:c=r.sent,u=c.data,i.addClass("fa-lock").removeClass("fa-spinner fa-spin "),e.fire({icon:"success",title:u}),a.ajax.reload(null,!1),t=[],r.next=25;break;case 19:r.prev=19,r.t0=r.catch(6),console.log(r.t0),l=r.t0.response.data,e.fire({icon:"error",title:l}),i.addClass("fa-lock").removeClass("fa-spinner fa-spin ");case 25:case"end":return r.stop()}}),r,null,[[6,19]])})));return function(e){return r.apply(this,arguments)}}()),n("#decloturer_epreuve").on("click",function(){var r=s(regeneratorRuntime.mark((function r(s){var i,o,c,u,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s.preventDefault(),0!=t.length){r.next=4;break}return e.fire({icon:"error",title:"Veuillez cochez une ou plusieurs ligne!"}),r.abrupt("return");case 4:return(i=n("#decloturer_epreuve i")).removeClass("fa-lock-open").addClass("fa-spinner fa-spin"),r.prev=6,(o=new FormData).append("epreuves",JSON.stringify(t)),r.next=11,axios.post("/administration/note/decloturer",o);case 11:c=r.sent,u=c.data,i.addClass("fa-lock-open").removeClass("fa-spinner fa-spin "),e.fire({icon:"success",title:u}),a.ajax.reload(null,!1),t=[],r.next=25;break;case 19:r.prev=19,r.t0=r.catch(6),console.log(r.t0),l=r.t0.response.data,e.fire({icon:"error",title:l}),i.addClass("fa-lock-open").removeClass("fa-spinner fa-spin ");case 25:case"end":return r.stop()}}),r,null,[[6,19]])})));return function(e){return r.apply(this,arguments)}}()),n("#epreuve_imprimer").on("click",function(){var t=s(regeneratorRuntime.mark((function t(a){var s,i,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r){t.next=4;break}return e.fire({icon:"error",title:"Veuillez selection une ligne!"}),t.abrupt("return");case 4:return(s=n("#epreuve_imprimer i")).removeClass("fa-copy").addClass("fa-spinner fa-spin"),t.prev=6,t.next=9,axios.get("/administration/note/checkifanonymat/"+r);case 9:i=t.sent,o=i.data,console.log(o),s.addClass("fa-copy").removeClass("fa-spinner fa-spin "),n("#imprimer_epreuve").modal("show"),n("#imprimer_epreuve .etudiant_info").html(o.html),n("#imprimer_epreuve .epreuve_title").html(o.id),"oui"==o.anonymat?n("#imprimer_epreuve .actions").html('<a href="#" class="btn btn-success mt-3" id="impression_clair">Impression Clair</a>\n                    <a href="#" class="btn btn-secondary mt-3" id="impression_anonymat">Impression Anonymat</a>'):n("#imprimer_epreuve .actions").html('<a href="#" class="btn btn-success mt-3" id="impression_clair">Impression Clair</a>'),t.next=25;break;case 19:t.prev=19,t.t0=t.catch(6),console.log(t.t0),c=t.t0.response.data,e.fire({icon:"error",title:c}),s.addClass("fa-copy").removeClass("fa-spinner fa-spin ");case 25:case"end":return t.stop()}}),t,null,[[6,19]])})));return function(e){return t.apply(this,arguments)}}()),n("body").on("click","#impression_clair",(function(e){e.preventDefault(),window.open("/administration/note/impression/"+r+"/0","_blank")})),n("body").on("click","#impression_anonymat",(function(e){e.preventDefault(),window.open("/administration/note/impression/"+r+"/1","_blank")})),n("#capitaliser_etudiant").on("click",function(){var r=s(regeneratorRuntime.mark((function r(a){var s,i,o,c,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.preventDefault(),0!=t.length){r.next=4;break}return e.fire({icon:"error",title:"Veuillez cochez une ou plusieurs ligne!"}),r.abrupt("return");case 4:return(s=n("#capitaliser_etudiant i")).removeClass("fa-archive").addClass("fa-spinner fa-spin"),r.prev=6,(i=new FormData).append("epreuves",JSON.stringify(t)),r.next=11,axios.post("/administration/note/capitaliser",i);case 11:o=r.sent,c=o.data,s.addClass("fa-archive").removeClass("fa-spinner fa-spin "),c.count>0&&window.open("/"+c.fileName,"_blank"),t=[],r.next=24;break;case 18:r.prev=18,r.t0=r.catch(6),console.log(r.t0),u=r.t0.response.data,e.fire({icon:"error",title:u}),s.addClass("fa-archive").removeClass("fa-spinner fa-spin ");case 24:case"end":return r.stop()}}),r,null,[[6,18]])})));return function(e){return r.apply(this,arguments)}}())}))}},e=>{e.O(0,[9755,8029,9375],(()=>{return r=2621,e(e.s=r);var r}));e.O()}]);