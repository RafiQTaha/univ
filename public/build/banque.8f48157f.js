(self.webpackChunk=self.webpackChunk||[]).push([[2548],{8581:(e,a,r)=>{var n=r(9755);function t(e,a,r,n,t,s,i){try{var o=e[s](i),c=o.value}catch(e){return void r(e)}o.done?a(c):Promise.resolve(c).then(n,t)}function s(e){return function(){var a=this,r=arguments;return new Promise((function(n,s){var i=e.apply(a,r);function o(e){t(i,n,s,o,c,"next",e)}function c(e){t(i,n,s,o,c,"throw",e)}o(void 0)}))}}r(1539),r(8674),r(3076);var i=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}});n(document).ready((function(){var e,a=n("#datatables_gestion_banque").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/parametre/banque/list",processing:!0,serverSide:!0,deferRender:!0,language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"}});n("select").select2(),n("body").on("click","#datatables_gestion_banque tbody tr",(function(){n(this).hasClass("active_databales")?(n(this).removeClass("active_databales"),e=null):(n("#datatables_gestion_banque tbody tr").removeClass("active_databales"),n(this).addClass("active_databales"),e=n(this).attr("id"))})),n("#ajouter").on("click",(function(){n("#ajout_modal").modal("show")})),n("#save").on("submit",function(){var r=s(regeneratorRuntime.mark((function r(t){var s,o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),s=new FormData(n("#save")[0]),o=n("#save i"),r.prev=3,o.remove("fa-check-circle").addClass("fa-spinner fa-spin "),r.next=7,axios.post("/parametre/banque/new",s);case 7:c=r.sent,c.data,o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),n("#save")[0].reset(),a.ajax.reload(),e=!1,i.fire({icon:"success",title:"Banque bien Ajouter"}),n("#ajout_modal").modal("hide"),r.next=23;break;case 17:r.prev=17,r.t0=r.catch(3),console.log(r.t0,r.t0.response),l=r.t0.response.data,i.fire({icon:"error",title:l}),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 23:case"end":return r.stop()}}),r,null,[[3,17]])})));return function(e){return r.apply(this,arguments)}}()),n("#modifier").on("click",s(regeneratorRuntime.mark((function a(){var r,t,s,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=3;break}return i.fire({icon:"error",title:"Veuillez selectioner une ligne!"}),a.abrupt("return");case 3:return r=n("#modifier i"),a.prev=4,r.remove("fa-edit").addClass("fa-spinner fa-spin "),a.next=8,axios.get("/parametre/banque/details/"+e);case 8:t=a.sent,s=t.data,console.log(s),r.addClass("fa-edit").removeClass("fa-spinner fa-spin "),n("#modifier_modal #designation").val(s.designation),n("#modifier_modal #abreviation").val(s.abreviation),n("#modifier_modal").modal("show"),a.next=23;break;case 17:a.prev=17,a.t0=a.catch(4),console.log(a.t0,a.t0.response),o=a.t0.response.data,i.fire({icon:"error",title:o}),r.addClass("fa-edit").removeClass("fa-spinner fa-spin ");case 23:case"end":return a.stop()}}),a,null,[[4,17]])})))),n("#udpate").on("submit",function(){var r=s(regeneratorRuntime.mark((function r(t){var s,o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),s=new FormData(n("#udpate")[0]),o=n("#udpate i"),r.prev=3,o.remove("fa-check-circle").addClass("fa-spinner fa-spin "),r.next=7,axios.post("/parametre/banque/update/"+e,s);case 7:c=r.sent,c.data,a.ajax.reload(),e=!1,o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),i.fire({icon:"success",title:"Banque bien Modifier"}),n("#modifier_modal").modal("hide"),r.next=22;break;case 16:r.prev=16,r.t0=r.catch(3),console.log(r.t0,r.t0.response),l=r.t0.response.data,i.fire({icon:"error",title:l}),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 22:case"end":return r.stop()}}),r,null,[[3,16]])})));return function(e){return r.apply(this,arguments)}}()),n("#supprimer").on("click",s(regeneratorRuntime.mark((function r(){var t,s,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=3;break}return i.fire({icon:"error",title:"Veuillez selectioner une ligne!"}),r.abrupt("return");case 3:return t=n("#udpate i"),r.prev=4,t.remove("fa-check-circle").addClass("fa-spinner fa-spin "),r.next=8,axios.post("/parametre/banque/delete/"+e);case 8:s=r.sent,s.data,a.ajax.reload(),e=!1,t.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),i.fire({icon:"success",title:"Banque bien Supprimer"}),r.next=22;break;case 16:r.prev=16,r.t0=r.catch(4),console.log(r.t0,r.t0.response),o=r.t0.response.data,i.fire({icon:"error",title:o}),t.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 22:case"end":return r.stop()}}),r,null,[[4,16]])}))))}))}},e=>{e.O(0,[9755,8029],(()=>{return a=8581,e(e.s=a);var a}));e.O()}]);