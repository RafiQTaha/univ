(self.webpackChunk=self.webpackChunk||[]).push([[2345],{3967:(e,a,t)=>{var r=t(9755);function n(e,a,t,r,n,s,i){try{var o=e[s](i),l=o.value}catch(e){return void t(e)}o.done?a(l):Promise.resolve(l).then(r,n)}function s(e){return function(){var a=this,t=arguments;return new Promise((function(r,s){var i=e.apply(a,t);function o(e){n(i,r,s,o,l,"next",e)}function l(e){n(i,r,s,o,l,"throw",e)}o(void 0)}))}}t(3076),t(9554),t(1539),t(4747),t(9826),t(2772),t(561),t(1249),t(2564),t(8674);var i=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}),o=0,l=null,c=[],p=[];r(document).ready((function(){var e=r("#list_epreuve_normal").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/administration/epreuve/list/normal",processing:!0,serverSide:!0,deferRender:!0,drawCallback:function(){c.forEach((function(e){r("body tr#"+e).find("input").prop("checked",!0)})),r("body tr#"+l).addClass("active_databales")},preDrawCallback:function(e){r.fn.DataTable.isDataTable("#list_epreuve_normal")&&((e=r("#list_epreuve_normal").DataTable().settings())[0].jqXHR&&e[0].jqXHR.abort())},language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"}}),a=r("#list_epreuve_rattrapage").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/administration/epreuve/list/rattrapage",processing:!0,serverSide:!0,deferRender:!0,drawCallback:function(){c.forEach((function(e){r("body tr#"+e).find("input").prop("checked",!0)})),r("body tr#"+l).addClass("active_databales")},preDrawCallback:function(e){r.fn.DataTable.isDataTable("#list_epreuve_rattrapage")&&((e=r("#list_epreuve_rattrapage").DataTable().settings())[0].jqXHR&&e[0].jqXHR.abort())},language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"}});r("body").on("click","#list_epreuve_normal tbody tr",(function(){var e=r(this).find("input");if(e.is(":checked")){e.prop("checked",!1);var a=c.indexOf(e.attr("id"));c.splice(a,1)}else e.prop("checked",!0),c.push(e.attr("id"))})),r("body").on("click","#list_epreuve_rattrapage tbody tr",(function(){var e=r(this).find("input");if(e.is(":checked")){e.prop("checked",!1);var a=c.indexOf(e.attr("id"));c.splice(a,1)}else e.prop("checked",!0),c.push(e.attr("id"))})),r("body").on("dblclick","#list_epreuve_normal tbody tr",(function(){r(this).hasClass("active_databales")?(r(this).removeClass("active_databales"),r("#inscription-modal").attr("disabled",!0),l=null):(r("#list_epreuve_normal tbody tr").removeClass("active_databales"),r("#list_epreuve_rattrapage tbody tr").removeClass("active_databales"),r(this).addClass("active_databales"),l=r(this).attr("id"))})),r("body").on("dblclick","#list_epreuve_rattrapage tbody tr",(function(){r(this).hasClass("active_databales")?(r(this).removeClass("active_databales"),r("#inscription-modal").attr("disabled",!0),l=null):(r("#list_epreuve_normal tbody tr").removeClass("active_databales"),r("#list_epreuve_rattrapage tbody tr").removeClass("active_databales"),r(this).addClass("active_databales"),l=r(this).attr("id"))})),r(".nav-pills a").on("click",(function(e){r(this).tab("show"),l=null,c=[],r("#list_epreuve_normal tbody tr").removeClass("active_databales"),r("#list_epreuve_rattrapage tbody tr").removeClass("active_databales"),r("input").prop("checked",!1),o="Session normal"==r(this).html()?0:1})),r("#import_epreuve").on("click",(function(){r("#import_en_masse").modal("show"),r("#import_en_masse .modal-body .alert").remove()})),r("#epreuve_canvas").on("click",(function(){window.open("/administration/epreuve/canvas","_blank")})),r("#import_epreuve_save").on("submit",function(){var t=s(regeneratorRuntime.mark((function t(n){var s,i,o,l,c,p;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s=new FormData(r(this)[0]),(i=r("#import_en_masse .modal-body .alert")).remove(),(o=r("#epreuve_enregistre i")).removeClass("fa-check-circle").addClass("fa-spinner fa-spin"),t.prev=6,t.next=9,axios.post("/administration/epreuve/import",s);case 9:l=t.sent,c=l.data,r("#import_en_masse .modal-body").prepend('<div class="alert alert-success">\n                <p>'.concat(c.message,"</p>\n              </div>")),window.open("/"+c.file,"_blank"),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),e.ajax.reload(null,!1),a.ajax.reload(null,!1),t.next=25;break;case 18:t.prev=18,t.t0=t.catch(6),p=t.t0.response.data,console.log(t.t0,t.t0.response),i.remove(),r("#import_en_masse .modal-body").prepend('<div class="alert alert-danger">'.concat(p,"</div>")),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 25:case"end":return t.stop()}}),t,this,[[6,18]])})));return function(e){return t.apply(this,arguments)}}()),r("#affilier_etudiant").on("click",function(){var t=s(regeneratorRuntime.mark((function t(n){var s,p,u,d,f,m,v,h,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),0!==o){t.next=29;break}if(0!=c.length){t.next=5;break}return i.fire({icon:"error",title:"Veuillez cochez une ou plusieurs ligne!"}),t.abrupt("return");case 5:return(s=r("#affilier_etudiant i")).removeClass("fa-link").addClass("fa-spinner fa-spin"),t.prev=7,(p=new FormData).append("epreuves",JSON.stringify(c)),t.next=12,axios.post("/administration/epreuve/affiliation_normale",p);case 12:u=t.sent,d=u.data,s.addClass("fa-link").removeClass("fa-spinner fa-spin "),d.total>0?window.open("/"+d.zipname,"_blank"):i.fire({icon:"info",title:"Epreuves déja affilier ou valider"}),e.ajax.reload(null,!1),a.ajax.reload(null,!1),c=[],t.next=27;break;case 21:t.prev=21,t.t0=t.catch(7),console.log(t.t0),f=t.t0.response.data,i.fire({icon:"error",title:f}),s.addClass("fa-link").removeClass("fa-spinner fa-spin ");case 27:t.next=52;break;case 29:if(l){t.next=32;break}return i.fire({icon:"error",title:"Veuillez selection une ligne!"}),t.abrupt("return");case 32:return(m=r("#affilier_etudiant i")).removeClass("fa-link").addClass("fa-spinner fa-spin"),t.prev=34,t.next=37,axios.get("/administration/epreuve/etudiants/"+l);case 37:v=t.sent,h=v.data,m.addClass("fa-link").removeClass("fa-spinner fa-spin "),r(".list_etudiants").html(h),r(".check_all_etudiant").prop("checked",!1),r("#affilier_list_etudiant").modal("show"),r("#affilier_list_etudiant .modal-body .alert").remove(),t.next=52;break;case 46:t.prev=46,t.t1=t.catch(34),console.log(t.t1),_=t.t1.response.data,i.fire({icon:"error",title:_}),m.addClass("fa-link").removeClass("fa-spinner fa-spin ");case 52:case"end":return t.stop()}}),t,null,[[7,21],[34,46]])})));return function(e){return t.apply(this,arguments)}}()),r("body").on("click",".check_etudiant",(function(){var e=p.indexOf(r(this).val());-1!=e?p.splice(e,1):p.push(r(this).val()),console.log(p)})),r("body").on("click",".check_all_etudiant",(function(){p=[];var e=r(".check_etudiant");1==r(".check_all_etudiant").prop("checked")?(e.prop("checked",!0),e.map((function(){p.push(this.value)}))):e.prop("checked",!1),console.log(p)})),r("#cloture_epreuve").on("click",function(){var t=s(regeneratorRuntime.mark((function t(n){var s,o,l,p,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),0!=c.length){t.next=4;break}return i.fire({icon:"error",title:"Veuillez cochez une ou plusieurs ligne!"}),t.abrupt("return");case 4:return(s=r("#cloture_epreuve i")).removeClass("fa-lock").addClass("fa-spinner fa-spin"),(o=new FormData).append("idEpreuves",JSON.stringify(c)),t.prev=8,t.next=11,axios.post("/administration/epreuve/cloture",o);case 11:l=t.sent,p=l.data,s.addClass("fa-lock").removeClass("fa-spinner fa-spin"),i.fire({icon:"success",title:p}),c=[],a.ajax.reload(null,!1),e.ajax.reload(null,!1),t.next=26;break;case 20:t.prev=20,t.t0=t.catch(8),console.log(t.t0),u=t.t0.response.data,s.addClass("fa-lock").removeClass("fa-spinner fa-spin"),i.fire({icon:"error",title:u});case 26:case"end":return t.stop()}}),t,null,[[8,20]])})));return function(e){return t.apply(this,arguments)}}()),r("#decloturer_epreuve").on("click",function(){var t=s(regeneratorRuntime.mark((function t(n){var s,o,l,p,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),0!=c.length){t.next=4;break}return i.fire({icon:"error",title:"Veuillez cochez une ou plusieurs ligne!"}),t.abrupt("return");case 4:return(s=r("#decloturer_epreuve i")).removeClass("fa-lock-open").addClass("fa-spinner fa-spin"),(o=new FormData).append("idEpreuves",JSON.stringify(c)),t.prev=8,t.next=11,axios.post("/administration/epreuve/decloture",o);case 11:l=t.sent,p=l.data,s.addClass("fa-lock-open").removeClass("fa-spinner fa-spin"),i.fire({icon:"success",title:p}),c=[],a.ajax.reload(null,!1),e.ajax.reload(null,!1),t.next=26;break;case 20:t.prev=20,t.t0=t.catch(8),console.log(t.t0),u=t.t0.response.data,s.addClass("fa-lock-open").removeClass("fa-spinner fa-spin"),i.fire({icon:"error",title:u});case 26:case"end":return t.stop()}}),t,null,[[8,20]])})));return function(e){return t.apply(this,arguments)}}()),r("#save_list_etudiant").on("click",function(){var t=s(regeneratorRuntime.mark((function t(n){var s,i,o,c,u,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),(s=r("#save_list_etudiant i")).removeClass("fa-check-circle").addClass("fa-spinner fa-spin"),(i=r("#affilier_list_etudiant .modal-body .alert")).remove(),(o=new FormData).append("idInscriptions",JSON.stringify(p)),o.append("idEpreuve",l),t.prev=8,t.next=11,axios.post("/administration/epreuve/affiliation_rattrapage",o);case 11:c=t.sent,u=c.data,s.addClass("fa-check-circle").removeClass("fa-spinner fa-spin"),r("#affilier_list_etudiant .modal-body").prepend('<div class="alert alert-success">\n                    <p>'.concat(u,"</p>\n                  </div>")),r(".list_etudiants").empty(),a.ajax.reload(null,!1),e.ajax.reload(null,!1),t.next=27;break;case 20:t.prev=20,t.t0=t.catch(8),console.log(t.t0),d=t.t0.response.data,i.remove(),r("#affilier_list_etudiant .modal-body").prepend('<div class="alert alert-danger">'.concat(d,"</div>")),s.addClass("fa-check-circle").removeClass("fa-spinner fa-spin");case 27:case"end":return t.stop()}}),t,null,[[8,20]])})));return function(e){return t.apply(this,arguments)}}()),r("select").select2(),r("#etablissement").on("change",s(regeneratorRuntime.mark((function e(){var a,t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r(this).val(),t="",""==a){e.next=7;break}return e.next=5,axios.get("/api/formation/"+a);case 5:n=e.sent,t=n.data;case 7:r("#element").html("").select2(),r("#module").html("").select2(),r("#semestre").html("").select2(),r("#promotion").html("").select2(),r("#formation").html(t).select2();case 12:case"end":return e.stop()}}),e,this)})))),r("#formation").on("change",s(regeneratorRuntime.mark((function e(){var a,t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r(this).val(),t="",""==a){e.next=7;break}return e.next=5,axios.get("/api/promotion/"+a);case 5:n=e.sent,t=n.data;case 7:r("#element").html("").select2(),r("#module").html("").select2(),r("#semestre").html("").select2(),r("#promotion").html(t).select2();case 11:case"end":return e.stop()}}),e,this)})))),r("#promotion").on("change",s(regeneratorRuntime.mark((function e(){var a,t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==(a=r(this).val())){e.next=10;break}return e.next=4,axios.get("/api/semestre/"+a);case 4:return t=e.sent,response=t.data,e.next=8,axios.get("/api/niv1/"+a);case 8:n=e.sent,niv1=n.data;case 10:r("#element").html("").select2(),r("#module").html("").select2(),r("#semestre").html(response).select2();case 13:case"end":return e.stop()}}),e,this)})))),r("#semestre").on("change",s(regeneratorRuntime.mark((function e(){var a,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==(a=r(this).val())){e.next=6;break}return e.next=4,axios.get("/api/module/"+a);case 4:t=e.sent,response=t.data;case 6:r("#element").html("").select2(),r("#module").html(response).select2();case 8:case"end":return e.stop()}}),e,this)})))),r("#module").on("change",s(regeneratorRuntime.mark((function e(){var a,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==(a=r(this).val())){e.next=6;break}return e.next=4,axios.get("/api/element/"+a);case 4:t=e.sent,response=t.data;case 6:r("#element").html(response).select2();case 7:case"end":return e.stop()}}),e,this)})))),r("#ajouter_epreuve").on("click",(function(e){e.preventDefault(),r("#ajouter_epreuve-modal").modal("show")})),r("body").on("submit","#add_epreuve",function(){var t=s(regeneratorRuntime.mark((function t(n){var s,i,o,l,c,p;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s=new FormData(r("#add_epreuve")[0]),(i=r("#ajouter_epreuve-modal .modal-body .alert")).remove(),(o=r("#ajouter_epreuve-modal button i")).removeClass("fa-check").addClass("fa-spinner fa-spin"),t.prev=6,t.next=9,axios.post("/administration/epreuve/add_epreuve",s);case 9:l=t.sent,c=l.data,r("#ajouter_epreuve-modal .modal-body").prepend('<div class="alert alert-success" style="width: 98%;margin: 0 auto;">\n                  <p>'.concat(c,"</p>\n                </div>")),o.addClass("fa-check").removeClass("fa-spinner fa-spin "),e.ajax.reload(null,!1),a.ajax.reload(null,!1),t.next=23;break;case 17:t.prev=17,t.t0=t.catch(6),p=t.t0.response.data,i.remove(),r("#ajouter_epreuve-modal .modal-body").prepend('<div class="alert alert-danger" style="width: 98%;margin: 0 auto;">'.concat(p,"</div>")),o.addClass("fa-check").removeClass("fa-spinner fa-spin ");case 23:setTimeout((function(){r(".modal-body .alert").remove()}),2500);case 24:case"end":return t.stop()}}),t,null,[[6,17]])})));return function(e){return t.apply(this,arguments)}}()),r("#import_epreuve").on("click",(function(){r("#import_en_masse").modal("show"),r("#import_en_masse .modal-body .alert").remove()})),r("#epreuve_imprimer").on("click",function(){var e=s(regeneratorRuntime.mark((function e(a){var t,n,s,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=4;break}return i.fire({icon:"error",title:"Veuillez selection une ligne!"}),e.abrupt("return");case 4:return(t=r("#epreuve_imprimer i")).removeClass("fa-copy").addClass("fa-spinner fa-spin"),e.prev=6,e.next=9,axios.get("/administration/epreuve/checkifanonymat/"+l);case 9:n=e.sent,s=n.data,console.log(s),t.addClass("fa-copy").removeClass("fa-spinner fa-spin "),r("#imprimer_epreuve").modal("show"),r("#imprimer_epreuve .etudiant_info").html(s.html),r("#imprimer_epreuve .epreuve_title").html(s.id),"oui"==s.anonymat?r("#imprimer_epreuve .actions").html('<a href="#" class="btn btn-success mt-3" id="impression_clair">Impression Clair</a>\n                    <a href="#" class="btn btn-secondary mt-3" id="impression_anonymat">Impression Anonymat</a>'):r("#imprimer_epreuve .actions").html('<a href="#" class="btn btn-success mt-3" id="impression_clair">Impression Clair</a>'),e.next=25;break;case 19:e.prev=19,e.t0=e.catch(6),console.log(e.t0),o=e.t0.response.data,i.fire({icon:"error",title:o}),t.addClass("fa-copy").removeClass("fa-spinner fa-spin ");case 25:case"end":return e.stop()}}),e,null,[[6,19]])})));return function(a){return e.apply(this,arguments)}}()),r("#modifier_epreuve").on("click",function(){var e=s(regeneratorRuntime.mark((function e(a){var t,n,s,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=4;break}return i.fire({icon:"error",title:"Veuillez selection une ligne!"}),e.abrupt("return");case 4:return(t=r("#modifier_epreuve i")).removeClass("fa-edit").addClass("fa-spinner fa-spin"),e.prev=6,e.next=9,axios.get("/administration/epreuve/edit/"+l);case 9:n=e.sent,s=n.data,t.addClass("fa-edit").removeClass("fa-spinner fa-spin "),r("#modifier_epreuve-modal").modal("show"),r("#modifier_epreuve-modal #edit_epreuve").html(s),r("select").select2(),e.next=23;break;case 17:e.prev=17,e.t0=e.catch(6),console.log(e.t0),o=e.t0.response.data,i.fire({icon:"error",title:o}),t.addClass("fa-edit").removeClass("fa-spinner fa-spin ");case 23:case"end":return e.stop()}}),e,null,[[6,17]])})));return function(a){return e.apply(this,arguments)}}()),r("#edit_epreuve").on("submit",function(){var t=s(regeneratorRuntime.mark((function t(n){var s,o,c,p;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),(s=r("#edit_epreuve button i")).removeClass("fa-check").addClass("fa-spinner fa-spin"),o=new FormData(r(this)[0]),t.prev=4,t.next=7,axios.post("/administration/epreuve/update/"+l,o);case 7:c=t.sent,c.data,s.addClass("fa-check").removeClass("fa-spinner fa-spin "),r("#modifier_epreuve-modal").modal("hide"),e.ajax.reload(null,!1),a.ajax.reload(null,!1),t.next=21;break;case 15:t.prev=15,t.t0=t.catch(4),console.log(t.t0),p=t.t0.response.data,i.fire({icon:"error",title:p}),s.addClass("fa-check").removeClass("fa-spinner fa-spin ");case 21:case"end":return t.stop()}}),t,this,[[4,15]])})));return function(e){return t.apply(this,arguments)}}()),r("body").on("click","#impression_clair",(function(e){e.preventDefault(),window.open("/administration/epreuve/impression/"+l+"/0","_blank")})),r("body").on("click","#impression_anonymat",(function(e){e.preventDefault(),window.open("/administration/epreuve/impression/"+l+"/1","_blank")})),r("#capitaliser_etudiant").on("click",function(){var e=s(regeneratorRuntime.mark((function e(a){var t,n,s,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),0!=c.length){e.next=4;break}return i.fire({icon:"error",title:"Veuillez cochez une ou plusieurs ligne!"}),e.abrupt("return");case 4:return(t=r("#capitaliser_etudiant i")).removeClass("fab fa-get-pocket").addClass("fa fa-spinner fa-spin"),(n=new FormData).append("idEpreuves",JSON.stringify(c)),e.prev=8,e.next=11,axios.post("/administration/epreuve/capitaliser",n);case 11:s=e.sent,o=s.data,console.log(o),t.addClass("fab fa-get-pocket").removeClass("fa fa-spinner fa-spin "),o.count>0?window.open("/"+o.fileName,"_blank"):i.fire({icon:"info",title:"Epreuves no capitaliser"}),c=[],e.next=25;break;case 19:e.prev=19,e.t0=e.catch(8),console.log(e.t0),l=e.t0.response.data,i.fire({icon:"error",title:l}),t.addClass("fab fa-get-pocket").removeClass("fa fa-spinner fa-spin ");case 25:case"end":return e.stop()}}),e,null,[[8,19]])})));return function(a){return e.apply(this,arguments)}}())}))}},e=>{e.O(0,[9755,8029,9523],(()=>{return a=3967,e(e.s=a);var a}));e.O()}]);