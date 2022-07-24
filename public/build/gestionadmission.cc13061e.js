(self.webpackChunk=self.webpackChunk||[]).push([[10],{8817:(e,n,t)=>{var a=t(9755);function r(e,n,t,a,r,s,i){try{var o=e[s](i),c=o.value}catch(e){return void t(e)}o.done?n(c):Promise.resolve(c).then(a,r)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(a,s){var i=e.apply(n,t);function o(e){r(i,a,s,o,c,"next",e)}function c(e){r(i,a,s,o,c,"throw",e)}o(void 0)}))}}t(3076),t(9554),t(1539),t(9826),t(4916),t(4765),t(2772),t(561),t(1249),t(2222),t(4553),t(2564),t(8674);var i=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}),o=!1,c=[],l=[];a(document).ready((function(){var e=a("#datatables_gestion_admission").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/admission/gestion/list",processing:!0,serverSide:!0,deferRender:!0,responsive:!0,scrollX:!0,drawCallback:function(){c.forEach((function(e){a("body tr#"+e).find("input").prop("checked",!0)})),a("body tr#"+o).addClass("active_databales")},language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"}}),n=function(){var e=s(regeneratorRuntime.mark((function e(){var n,t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(n=a("#document i")).removeClass("fa-check").addClass("fa-spinner fa-spin"),e.next=5,axios.get("/admission/gestion/getdocuments/"+o);case 5:return t=e.sent,e.next=8,t.data;case 8:r=e.sent,a(".ms-selectable .ms-list").html(r.documents),a(".ms-selection .ms-list").html(r.documentsExists),n.addClass("fa-check").removeClass("fa-spinner fa-spin"),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(0),e.t0.response.data,console.log(e.t0,e.t0.response),i.fire({icon:"error",title:"Some Error"}),icon.addClass("fa-check").removeClass("fa-spinner fa-spin");case 20:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=s(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/api/organisme");case 3:return n=e.sent,e.next=6,n.data;case 6:t=e.sent,a("#organisme").html(t).select2(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.response.data,console.log(e.t0,e.t0.response),i.fire({icon:"error",title:"Some Error"});case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=s(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/api/nature_etudiant/"+o);case 3:return n=e.sent,e.next=6,n.data;case 6:t=e.sent,a("#organisme").html(t).select2(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.response.data,console.log(e.t0,e.t0.response),i.fire({icon:"error",title:"Some Error"});case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();a("#frais").on("change",(function(){a("#montant").val(a("#frais").find(":selected").data("frais"))})),t(),a("#etablissement").select2(),a("#etablissement").on("change",s(regeneratorRuntime.mark((function n(){var t,r,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=a(this).val(),e.columns().search(""),e.columns(0).search(t).draw(),r="",""==t){n.next=11;break}return n.next=7,axios.get("/api/formation/"+t);case 7:s=n.sent,r=s.data,n.next=12;break;case 11:a("#annee").html("").select2();case 12:a("#formation").html(r).select2();case 13:case"end":return n.stop()}}),n,this)})))),a("#formation").on("change",s(regeneratorRuntime.mark((function n(){var t,r,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=a(this).val(),e.columns().search(""),e.columns(1).search(t).draw(),r="",""==t){n.next=9;break}return n.next=7,axios.get("/api/annee/"+t);case 7:s=n.sent,r=s.data;case 9:a("#annee").html(r).select2();case 10:case"end":return n.stop()}}),n,this)})))),a("#annee").on("change",s(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.columns().search(""),e.columns(2).search(a(this).val()).draw();case 2:case"end":return n.stop()}}),n,this)}))));var d=function(){var e=s(regeneratorRuntime.mark((function e(){var n,t,r,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a("#inscription-modal i"),e.prev=1,n.removeClass("fa-check").addClass("fa-spinner fa-spin"),e.next=5,axios.get("/admission/gestion/getAnneeDisponible/"+o);case 5:return t=e.sent,e.next=8,t.data;case 8:r=e.sent,a("#annee_inscription").html(r.anneeHtml).select2(),a("#promotion_inscription").html(r.promotionHtml).select2(),a("#inscription-modal").attr("disabled",!1),e.next=21;break;case 14:e.prev=14,e.t0=e.catch(1),a("#inscription-modal").attr("disabled",!0),a("#annee_inscription, #promotion_inscription").empty(),s=e.t0.response.data,console.log(e.t0,e.t0.response),i.fire({icon:"info",title:s});case 21:n.addClass("fa-check").removeClass("fa-spinner fa-spin");case 22:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();a("body").on("click","#datatables_gestion_admission tbody tr",(function(){var e=a(this).find("input");if(e.is(":checked")){e.prop("checked",!1);var n=c.indexOf(e.attr("id"));c.splice(n,1)}else e.prop("checked",!0),c.push(e.attr("id"))})),a("body").on("dblclick","#datatables_gestion_admission tbody tr",(function(){a(this).hasClass("active_databales")?(a(this).removeClass("active_databales"),a("#inscription-modal").attr("disabled",!0),o=null):(a("#datatables_gestion_admission tbody tr").removeClass("active_databales"),a(this).addClass("active_databales"),o=a(this).attr("id"),r(),d(),n())})),a("#document").on("click",(function(){o?a("#document_modal").modal("show"):i.fire({icon:"error",title:"Veuillez selection une ligne!"})})),a("body").on("click",".ms-elem-selection",s(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(".ms-selectable .ms-list").prepend(a(this).clone().removeClass("ms-elem-selection").addClass("ms-elem-selectable")),(n=new FormData).append("idDocument",a(this).attr("id")),n.append("idAdmission",o),a(this).remove(),e.prev=5,e.next=8,axios.post("/admission/gestion/deletedocument",n);case 8:return t=e.sent,e.next=11,t.data;case 11:e.sent,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),i.fire({icon:"error",title:"error"});case 17:case"end":return e.stop()}}),e,this,[[5,14]])})))),a("body").on("click",".ms-elem-selectable",s(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(".ms-selection .ms-list").prepend(a(this).clone().removeClass("ms-elem-selectable").addClass("ms-elem-selection")),(n=new FormData).append("idDocument",a(this).attr("id")),n.append("idAdmission",o),a(this).remove(),e.prev=5,e.next=8,axios.post("/admission/gestion/adddocuments",n);case 8:return t=e.sent,e.next=11,t.data;case 11:e.sent,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),i.fire({icon:"error",title:"error"});case 17:case"end":return e.stop()}}),e,this,[[5,14]])}))));var u=function(){var e=s(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/api/frais/"+o);case 3:return n=e.sent,e.next=6,n.data;case 6:t=e.sent,a("#frais").html(t.list).select2(),a("#code-facture").html(t.codefacture),a("#frais_inscription-modal").modal("show"),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0.response.data,console.log(e.t0,e.t0.response),i.fire({icon:"error",title:"Some Error"});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=s(regeneratorRuntime.mark((function e(){var n,t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(n=a("#frais-modal i")).removeClass("fa-money-bill-alt").addClass("fa-spinner fa-spin"),e.next=5,axios.get("/admission/gestion/info/"+o);case 5:return t=e.sent,e.next=8,t.data;case 8:r=e.sent,a(".etudiant_info").html(r),n.addClass("fa-money-bill-alt").removeClass("fa-spinner fa-spin"),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(0),e.t0.response.data,console.log(e.t0,e.t0.response),i.fire({icon:"error",title:"Some Error"}),icon.addClass("fa-money-bill-alt").removeClass("fa-spinner fa-spin");case 19:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();a("#frais-modal").on("click",(function(){o?(p(),u()):i.fire({icon:"error",title:"Veuillez selection une ligne!"})})),a("input[type=radio][name=organ]").on("change",function(){var e=s(regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),0!=this.value){e.next=10;break}return e.next=4,axios.get("/api/getorganismepasPayant");case 4:t=e.sent,response=t.data,a(".select-organ #org").html(response).select2(),a(".select-organ").css("display","block"),e.next=12;break;case 10:a(".select-organ #org").html(""),a(".select-organ").css("display","none");case 12:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()),a("#add_frais_gestion").on("click",(function(){var e=a("#frais").find(":selected").val();if(""!=e){var n=a("#frais").find(":selected").text(),t=a("#montant").val(),r=a("#ice").val(),s=a(".select-organ #org").find(":selected").text(),i=a(".select-organ #org").val();if(!a.isNumeric(e)||""==t)return;if(1==a("input[name='organ']:checked").val())i=7,s="Payant";else if(""==i)return;console.log(a("input[name='organ']:checked").val()),l.push({index:Math.floor(1e3*Math.random()+1),id:e,designation:n,montant:t,ice:r,organisme_id:i,organisme:s}),m()}}));var m=function(){var e="";l.map((function(n,t){e+="\n            <tr>\n                <td>".concat(t+1,"</td>\n                <td>").concat(n.designation,"</td>\n                <td>").concat(n.montant,"</td>\n                <td>").concat(n.ice,"</td>\n                <td>").concat(n.organisme,"</td>\n                <td><button class='delete_frais btn btn-danger'  id='").concat(n.index,"'><i class='fa fa-trash' ></i></button></td>\n            </tr>\n        ")})),a(".table_frais_admission").html(e)};a("body").on("click",".delete_frais",(function(){var e=this,n=l.findIndex((function(n){return n.index==a(e).attr("id")}));l.splice(n,1),m()})),a("#save_frais_gestion").on("click",s(regeneratorRuntime.mark((function n(){var t,r,s,i,c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=new FormData).append("frais",JSON.stringify(l)),(r=a("#frais_inscription-modal .modal-body .alert")).remove(),(s=a("#save_frais_gestion i")).removeClass("fa-check-circle").addClass("fa-spinner fa-spin"),n.prev=6,n.next=9,axios.post("/admission/gestion/addfrais/"+o,t);case 9:i=n.sent,c=i.data,a("#frais_inscription-modal .modal-body").prepend('<div class="alert alert-success">\n                <p>Bien Enregistre</p>\n              </div>'),s.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),a(".table_frais_admission").empty(),l=[],window.open("/admission/gestion/facture/"+c,"_blank"),e.ajax.reload(null,!1),n.next=26;break;case 19:n.prev=19,n.t0=n.catch(6),d=n.t0.response.data,console.log(n.t0,n.t0.response),r.remove(),a("#frais_inscription-modal .modal-body").prepend('<div class="alert alert-danger">'.concat(d,"</div>")),s.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 26:setTimeout((function(){a("#frais_inscription-modal .modal-body .alert").remove()}),3e3);case 27:case"end":return n.stop()}}),n,null,[[6,19]])})))),a("#inscription-modal").on("click",(function(){o?(a("#inscription_modal .modal-body .alert").remove(),a("#inscription_modal").modal("show")):i.fire({icon:"error",title:"Veuillez selection une ligne!"})})),a("#inscription_save").on("submit",function(){var n=s(regeneratorRuntime.mark((function n(t){var r,s,i,c,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),r=new FormData(a(this)[0]),(s=a("#inscription_modal .modal-body .alert")).remove(),(i=a("#inscription_save .btn i")).removeClass("fa-check-circle").addClass("fa-spinner fa-spin"),n.prev=6,n.next=9,axios.post("/admission/gestion/inscription/"+o,r);case 9:c=n.sent,l=c.data,a("#inscription_modal .modal-body").prepend('<div class="alert alert-success">\n                <p>'.concat(l,"</p>\n              </div>")),i.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),a("#annee_inscription, #promotion_inscription, #organisme").empty(),e.ajax.reload(null,!1),n.next=24;break;case 17:n.prev=17,n.t0=n.catch(6),d=n.t0.response.data,console.log(n.t0,n.t0.response),s.remove(),a("#inscription_modal .modal-body").prepend('<div class="alert alert-danger">'.concat(d,"</div>")),i.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 24:case"end":return n.stop()}}),n,this,[[6,17]])})));return function(e){return n.apply(this,arguments)}}()),a("#attestation_admission").on("click",(function(){o?window.open("/admission/gestion/attestation/"+o,"_blank"):i.fire({icon:"error",title:"Veuillez selection une ligne!"})})),a("body").on("click","#imprimer_docs",(function(){o?window.open("/admission/gestion/print_documents_admission/"+o,"_blank"):i.fire({icon:"error",title:"Merci de Choisir Une ligne!"})}))}))}},e=>{e.O(0,[755,29,372],(()=>{return n=8817,e(e.s=n);var n}));e.O()}]);