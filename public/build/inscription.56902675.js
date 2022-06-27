(self.webpackChunk=self.webpackChunk||[]).push([[289],{9611:(e,t,n)=>{var a=n(9755);function r(e,t,n,a,r,s,i){try{var o=e[s](i),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(a,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(a,s){var i=e.apply(t,n);function o(e){r(i,a,s,o,c,"next",e)}function c(e){r(i,a,s,o,c,"throw",e)}o(void 0)}))}}n(3076),n(9554),n(1539),n(9826),n(4916),n(4765),n(2772),n(561),n(4553),n(1249),n(2222),n(2564),n(8674);var i=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}),o=!1,c=[],l=[],d=!1;a(document).ready((function(){var e=a("#datatables_gestion_inscription").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/inscription/gestion/list",processing:!0,serverSide:!0,deferRender:!0,responsive:!0,scrollX:!0,drawCallback:function(){c.forEach((function(e){a("body tr#"+e).find("input").prop("checked",!0)})),a("body tr#"+o).addClass("active_databales")},language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"}}),t=function(){var e=s(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a("#statut-modal i"),e.prev=1,t.removeClass("fa-check").addClass("fa-spinner fa-spin"),e.next=5,axios.get("/inscription/gestion/getstatut/"+o);case 5:return n=e.sent,e.next=8,n.data;case 8:r=e.sent,a("#statut_inscription").html(r).select2(),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0.response.data,console.log(e.t0,e.t0.response),i.fire({icon:"error",title:"Some Error"});case 17:t.addClass("fa-check").removeClass("fa-spinner fa-spin");case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=s(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/inscription/gestion/frais/"+o);case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,d=1,a("#frais").html(n.list).select2(),a("#code-facture").html(n.codefacture),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),r=e.t0.response.data,d=!1,i.fire({icon:"error",title:r});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();a("#frais").on("change",(function(){a("#montant").val(a("#frais").find(":selected").data("frais"))}));var r=function(){var e=s(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(t=a("#frais-modal i")).removeClass("fa-money-bill-alt").addClass("fa-spinner fa-spin"),e.next=5,axios.get("/inscription/gestion/info/"+o);case 5:return n=e.sent,e.next=8,n.data;case 8:r=e.sent,a(".etudiant_info").html(r),t.addClass("fa-money-bill-alt").removeClass("fa-spinner fa-spin"),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(0),e.t0.response.data,console.log(e.t0,e.t0.response),i.fire({icon:"error",title:"Some Error"}),icon.addClass("fa-money-bill-alt").removeClass("fa-spinner fa-spin");case 19:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=s(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/api/organisme");case 3:return t=e.sent,e.next=6,t.data;case 6:n=e.sent,a("#organisme").html(n).select2(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.response.data,console.log(e.t0,e.t0.response),i.fire({icon:"error",title:"Some Error"});case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();u(),a("#etablissement").select2(),a("#etablissement").on("change",s(regeneratorRuntime.mark((function t(){var n,r,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a(this).val(),e.columns().search(""),e.columns(0).search(n).draw(),r="",""==n){t.next=11;break}return t.next=7,axios.get("/api/formation/"+n);case 7:s=t.sent,r=s.data,t.next=13;break;case 11:a("#annee").html("").select2(),a("#promotion").html("").select2();case 13:a("#formation").html(r).select2();case 14:case"end":return t.stop()}}),t,this)})))),a("#formation").on("change",s(regeneratorRuntime.mark((function t(){var n,r,s,i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a(this).val(),e.columns().search(""),r="",s="",""==n){t.next=16;break}return e.columns(1).search(n).draw(),t.next=8,axios.get("/api/promotion/"+n);case 8:return i=t.sent,s=i.data,t.next=12,axios.get("/api/annee/"+n);case 12:o=t.sent,r=o.data,t.next=17;break;case 16:e.columns(0).search(a("#etablissement").val()).draw();case 17:a("#annee").html(r).select2(),a("#promotion").html(s).select2();case 19:case"end":return t.stop()}}),t,this)})))),a("#promotion").on("change",s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.columns().search(""),""!=a(this).val()?(""!=a("#annee").val()&&e.columns(3).search(a("#annee").val()),e.columns(2).search(a(this).val()).draw()):e.columns(1).search(a("#formation").val()).draw();case 2:case"end":return t.stop()}}),t,this)})))),a("#annee").on("change",s(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.columns().search(""),""!=a(this).val()&&e.columns(3).search(a(this).val()),e.columns(2).search(a("#promotion").val()).draw();case 3:case"end":return t.stop()}}),t,this)})))),a("body").on("click","#datatables_gestion_inscription tbody tr",(function(){var e=a(this).find("input");if(e.is(":checked")){e.prop("checked",!1);var t=c.indexOf(e.attr("id"));c.splice(t,1)}else e.prop("checked",!0),c.push(e.attr("id"))})),a("body").on("dblclick","#datatables_gestion_inscription tbody tr",(function(){a(this).hasClass("active_databales")?(a(this).removeClass("active_databales"),o=null):(a("#datatables_gestion_inscription tbody tr").removeClass("active_databales"),a(this).addClass("active_databales"),o=a(this).attr("id"),t(),r(),n())})),a("#frais-modal").on("click",(function(){o?d?a("#frais_inscription-modal").modal("show"):i.fire({icon:"error",title:"Facture Introuvable!"}):i.fire({icon:"error",title:"Veuillez selection une ligne!"})})),a("input[type=radio][name=organ]").on("change",function(){var e=s(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!=this.value){e.next=10;break}return e.next=4,axios.get("/api/getorganismepasPayant");case 4:n=e.sent,response=n.data,a(".select-organ #org").html(response).select2(),a(".select-organ").css("display","block"),e.next=12;break;case 10:a(".select-organ #org").html(""),a(".select-organ").css("display","none");case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()),a("#add_frais_gestion").on("click",(function(){var e=a("#frais").find(":selected").val();if(""!=e){var t=a("#frais").find(":selected").text(),n=a("#montant").val(),r=a("#ice").val(),s=a(".select-organ #org").find(":selected").text(),i=a(".select-organ #org").val();if(!a.isNumeric(e)||""==n)return;if(1==a("input[name='organ']:checked").val())i=7,s="Payant";else if(""==i)return;l.push({index:Math.floor(1e3*Math.random()+1),id:e,designation:t,montant:n,ice:r,organisme_id:i,organisme:s}),p()}})),a("body").on("click",".delete_frais",(function(){var e=this,t=l.findIndex((function(t){return t.index==a(e).attr("id")}));l.splice(t,1),p()}));var p=function(){var e="";l.map((function(t,n){e+="\n            <tr>\n                <td>".concat(n+1,"</td>\n                <td>").concat(t.designation,"</td>\n                <td>").concat(t.montant,"</td>\n                <td>").concat(t.ice,"</td>\n                <td>").concat(t.organisme,"</td>\n                <td><button class='delete_frais btn btn-danger'  id='").concat(t.index,"'><i class='fa fa-trash' ></i></button></td>\n            </tr>\n        ")})),a(".table_frais_inscription").html(e)};a("#save_frais_gestion").on("click",s(regeneratorRuntime.mark((function t(){var n,r,s,i,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("frais",JSON.stringify(l)),(r=a("#frais_inscription-modal .modal-body .alert")).remove(),(s=a("#save_frais_gestion i")).removeClass("fa-check-circle").addClass("fa-spinner fa-spin"),t.prev=6,t.next=9,axios.post("/inscription/gestion/addfrais/"+o,n);case 9:i=t.sent,c=i.data,a("#frais_inscription-modal .modal-body").prepend('<div class="alert alert-success">\n                <p>Bien Enregistre</p>\n              </div>'),s.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),a(".table_frais_inscription").empty(),l=[],window.open("/inscription/gestion/facture/"+c,"_blank"),e.ajax.reload(null,!1),t.next=26;break;case 19:t.prev=19,t.t0=t.catch(6),d=t.t0.response.data,console.log(t.t0,t.t0.response),r.remove(),a("#frais_inscription-modal .modal-body").prepend('<div class="alert alert-danger">'.concat(d,"</div>")),s.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 26:setTimeout((function(){a("#frais_inscription-modal .modal-body .alert").remove()}),3e3);case 27:case"end":return t.stop()}}),t,null,[[6,19]])})))),a("#statut-modal").on("click",(function(){o?(a("#statut_modal .modal-body .alert").remove(),a("#statut_modal").modal("show")):i.fire({icon:"error",title:"Veuillez selection une ligne!"})})),a("#statut_save").on("submit",function(){var t=s(regeneratorRuntime.mark((function t(n){var r,s,i,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=new FormData(a(this)[0]),(s=a("#statut_modal .modal-body .alert")).remove(),(i=a("#statut_save .btn i")).removeClass("fa-check-circle").addClass("fa-spinner fa-spin"),t.prev=6,t.next=9,axios.post("/inscription/gestion/updatestatut/"+o,r);case 9:c=t.sent,l=c.data,a("#statut_modal .modal-body").prepend('<div class="alert alert-success">\n                <p>'.concat(l,"</p>\n              </div>")),i.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),a("#annee_inscription, #promotion_inscription").empty(),e.ajax.reload(null,!1),t.next=24;break;case 17:t.prev=17,t.t0=t.catch(6),d=t.t0.response.data,console.log(t.t0,t.t0.response),s.remove(),a("#statut_modal .modal-body").prepend('<div class="alert alert-danger">'.concat(d,"</div>")),i.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 24:case"end":return t.stop()}}),t,this,[[6,17]])})));return function(e){return t.apply(this,arguments)}}()),a("body").on("click","#extraction",(function(){window.open("/inscription/gestion/extraction_ins","_blank")}))}))}},e=>{e.O(0,[755,29,372],(()=>{return t=9611,e(e.s=t);var t}));e.O()}]);