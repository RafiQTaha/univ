(self.webpackChunk=self.webpackChunk||[]).push([[3808],{980:(e,a,r)=>{var t=r(9755);function n(e,a,r,t,n,s,i){try{var o=e[s](i),c=o.value}catch(e){return void r(e)}o.done?a(c):Promise.resolve(c).then(t,n)}function s(e){return function(){var a=this,r=arguments;return new Promise((function(t,s){var i=e.apply(a,r);function o(e){n(i,t,s,o,c,"next",e)}function c(e){n(i,t,s,o,c,"throw",e)}o(void 0)}))}}r(1539),r(8674),r(3076);var i=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}});t(document).ready((function(){var e,a=t("#datatables_gestion_typebac").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/parametre/typebac/list",processing:!0,serverSide:!0,deferRender:!0,language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"}});t("select").select2(),t("body").on("click","#datatables_gestion_typebac tbody tr",(function(){t(this).hasClass("active_databales")?(t(this).removeClass("active_databales"),e=null):(t("#datatables_gestion_typebac tbody tr").removeClass("active_databales"),t(this).addClass("active_databales"),e=t(this).attr("id"))})),t("#ajouter").on("click",(function(){t("#ajout_modal").modal("show")})),t("#save").on("submit",function(){var e=s(regeneratorRuntime.mark((function e(r){var n,s,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),n=new FormData(t("#save")[0]),s=t("#save i"),e.prev=3,s.remove("fa-check-circle").addClass("fa-spinner fa-spin "),e.next=7,axios.post("/parametre/typebac/new",n);case 7:o=e.sent,o.data,s.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),t("#save")[0].reset(),a.ajax.reload(),i.fire({icon:"success",title:"typebac bien Ajouter"}),t("#ajout_modal").modal("hide"),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0,e.t0.response),c=e.t0.response.data,i.fire({icon:"error",title:c}),s.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 22:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(a){return e.apply(this,arguments)}}()),t("#modifier").on("click",s(regeneratorRuntime.mark((function a(){var r,n,s,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=3;break}return i.fire({icon:"error",title:"Veuillez selectioner une ligne!"}),a.abrupt("return");case 3:return r=t("#modifier i"),a.prev=4,r.remove("fa-edit").addClass("fa-spinner fa-spin "),a.next=8,axios.get("/parametre/typebac/details/"+e);case 8:n=a.sent,s=n.data,console.log(s),r.addClass("fa-edit").removeClass("fa-spinner fa-spin "),t("#modifier_modal #designation").val(s.designation),t("#modifier_modal #abreviation").val(s.abreviation),t("#modifier_modal").modal("show"),a.next=23;break;case 17:a.prev=17,a.t0=a.catch(4),console.log(a.t0,a.t0.response),o=a.t0.response.data,i.fire({icon:"error",title:o}),r.addClass("fa-edit").removeClass("fa-spinner fa-spin ");case 23:case"end":return a.stop()}}),a,null,[[4,17]])})))),t("#udpate").on("submit",function(){var r=s(regeneratorRuntime.mark((function r(n){var s,o,c,l,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),s=new FormData(t("#udpate")[0]),o=t("#udpate i"),r.prev=3,o.remove("fa-check-circle").addClass("fa-spinner fa-spin "),r.next=7,axios.post("/parametre/typebac/update/"+e,s);case 7:c=r.sent,l=c.data,a.ajax.reload(),e=!1,o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),i.fire({icon:"success",title:l}),t("#modifier_modal").modal("hide"),r.next=22;break;case 16:r.prev=16,r.t0=r.catch(3),console.log(r.t0,r.t0.response),d=r.t0.response.data,i.fire({icon:"error",title:d}),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 22:case"end":return r.stop()}}),r,null,[[3,16]])})));return function(e){return r.apply(this,arguments)}}()),t("#supprimer").on("click",s(regeneratorRuntime.mark((function r(){var n,s,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t("#udpate i"),r.prev=1,n.remove("fa-check-circle").addClass("fa-spinner fa-spin "),r.next=5,axios.post("/parametre/typebac/delete/"+e);case 5:s=r.sent,o=s.data,a.ajax.reload(),e=!1,n.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),i.fire({icon:"success",title:o}),r.next=19;break;case 13:r.prev=13,r.t0=r.catch(1),console.log(r.t0,r.t0.response),c=r.t0.response.data,i.fire({icon:"error",title:c}),n.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 19:case"end":return r.stop()}}),r,null,[[1,13]])}))))}))}},e=>{e.O(0,[9755,8029],(()=>{return a=980,e(e.s=a);var a}));e.O()}]);