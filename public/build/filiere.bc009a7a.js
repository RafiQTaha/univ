(self.webpackChunk=self.webpackChunk||[]).push([[1552],{1612:(e,a,r)=>{var t=r(9755);function n(e,a,r,t,n,i,s){try{var o=e[i](s),c=o.value}catch(e){return void r(e)}o.done?a(c):Promise.resolve(c).then(t,n)}function i(e){return function(){var a=this,r=arguments;return new Promise((function(t,i){var s=e.apply(a,r);function o(e){n(s,t,i,o,c,"next",e)}function c(e){n(s,t,i,o,c,"throw",e)}o(void 0)}))}}r(1539),r(8674),r(3076);var s=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}});t(document).ready((function(){var e,a=t("#datatables_gestion_filiere").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/parametre/filiere/list",processing:!0,serverSide:!0,deferRender:!0,language:datatablesFrench});t("select").select2(),t("body").on("click","#datatables_gestion_filiere tbody tr",(function(){t(this).hasClass("active_databales")?(t(this).removeClass("active_databales"),e=null):(t("#datatables_gestion_filiere tbody tr").removeClass("active_databales"),t(this).addClass("active_databales"),e=t(this).attr("id"))})),t("#ajouter").on("click",(function(){t("#ajout_modal").modal("show")})),t("#save").on("submit",function(){var r=i(regeneratorRuntime.mark((function r(n){var i,o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),i=new FormData(t("#save")[0]),o=t("#save i"),r.prev=3,o.remove("fa-check-circle").addClass("fa-spinner fa-spin "),r.next=7,axios.post("/parametre/filiere/new",i);case 7:c=r.sent,c.data,o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),t("#save")[0].reset(),a.ajax.reload(),e=!1,s.fire({icon:"success",title:"filiere bien Ajouter"}),t("#ajout_modal").modal("hide"),r.next=23;break;case 17:r.prev=17,r.t0=r.catch(3),console.log(r.t0,r.t0.response),l=r.t0.response.data,s.fire({icon:"error",title:l}),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 23:case"end":return r.stop()}}),r,null,[[3,17]])})));return function(e){return r.apply(this,arguments)}}()),t("#modifier").on("click",i(regeneratorRuntime.mark((function a(){var r,n,i,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=3;break}return s.fire({icon:"error",title:"Veuillez selectioner une ligne!"}),a.abrupt("return");case 3:return r=t("#modifier i"),a.prev=4,r.remove("fa-edit").addClass("fa-spinner fa-spin "),a.next=8,axios.get("/parametre/filiere/details/"+e);case 8:n=a.sent,i=n.data,console.log(i),r.addClass("fa-edit").removeClass("fa-spinner fa-spin "),t("#modifier_modal #designation").val(i.designation),t("#modifier_modal #abreviation").val(i.abreviation),t("#modifier_modal").modal("show"),a.next=23;break;case 17:a.prev=17,a.t0=a.catch(4),console.log(a.t0,a.t0.response),o=a.t0.response.data,s.fire({icon:"error",title:o}),r.addClass("fa-edit").removeClass("fa-spinner fa-spin ");case 23:case"end":return a.stop()}}),a,null,[[4,17]])})))),t("#udpate").on("submit",function(){var r=i(regeneratorRuntime.mark((function r(n){var i,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),i=new FormData(t("#udpate")[0]),o=t("#udpate i"),r.prev=3,o.remove("fa-check-circle").addClass("fa-spinner fa-spin "),r.next=7,axios.post("/parametre/filiere/update/"+e,i);case 7:c=r.sent,c.data,a.ajax.reload(),e=!1,o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),s.fire({icon:"success",title:"filiere bien Modifier"}),t("#modifier_modal").modal("hide"),r.next=22;break;case 16:r.prev=16,r.t0=r.catch(3),console.log(r.t0,r.t0.response),r.t0.response.data,s.fire({icon:"success",title:"Banque bien Modifier"}),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 22:case"end":return r.stop()}}),r,null,[[3,16]])})));return function(e){return r.apply(this,arguments)}}()),t("#supprimer").on("click",i(regeneratorRuntime.mark((function r(){var n,i,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=3;break}return s.fire({icon:"error",title:"Veuillez selectioner une ligne!"}),r.abrupt("return");case 3:if(n=t("#udpate i"),1!=confirm("Vous voulez vraiment supprimer cette filiere ?")){r.next=24;break}return r.prev=6,n.remove("fa-check-circle").addClass("fa-spinner fa-spin "),r.next=10,axios.post("/parametre/filiere/delete/"+e);case 10:i=r.sent,i.data,a.ajax.reload(),e=!1,n.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),s.fire({icon:"success",title:"filiere bien Supprimer"}),r.next=24;break;case 18:r.prev=18,r.t0=r.catch(6),console.log(r.t0,r.t0.response),o=r.t0.response.data,s.fire({icon:"error",title:o}),n.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 24:case"end":return r.stop()}}),r,null,[[6,18]])}))))}))}},e=>{e.O(0,[9755,8029],(()=>{return a=1612,e(e.s=a);var a}));e.O()}]);