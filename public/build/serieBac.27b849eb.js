(self.webpackChunk=self.webpackChunk||[]).push([[9770],{429:(e,a,r)=>{var t=r(9755);function n(e,a,r,t,n,s,i){try{var o=e[s](i),c=o.value}catch(e){return void r(e)}o.done?a(c):Promise.resolve(c).then(t,n)}function s(e){return function(){var a=this,r=arguments;return new Promise((function(t,s){var i=e.apply(a,r);function o(e){n(i,t,s,o,c,"next",e)}function c(e){n(i,t,s,o,c,"throw",e)}o(void 0)}))}}r(1539),r(8674),r(3076);var i=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}});t(document).ready((function(){var e,a=t("#datatables_gestion_seriebac").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/parametre/seriebac/list",processing:!0,serverSide:!0,deferRender:!0,language:datatablesFrench});t("select").select2(),t("body").on("click","#datatables_gestion_seriebac tbody tr",(function(){t(this).hasClass("active_databales")?(t(this).removeClass("active_databales"),e=null):(t("#datatables_gestion_seriebac tbody tr").removeClass("active_databales"),t(this).addClass("active_databales"),e=t(this).attr("id"))})),t("#ajouter").on("click",(function(){t("#ajout_modal").modal("show")})),t("#save").on("submit",function(){var r=s(regeneratorRuntime.mark((function r(n){var s,o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),s=new FormData(t("#save")[0]),o=t("#save i"),r.prev=3,o.remove("fa-check-circle").addClass("fa-spinner fa-spin "),r.next=7,axios.post("/parametre/seriebac/new",s);case 7:c=r.sent,c.data,o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),t("#save")[0].reset(),a.ajax.reload(),e=!1,i.fire({icon:"success",title:"seriebac bien Ajouter"}),t("#ajout_modal").modal("hide"),r.next=23;break;case 17:r.prev=17,r.t0=r.catch(3),console.log(r.t0,r.t0.response),l=r.t0.response.data,i.fire({icon:"error",title:l}),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 23:case"end":return r.stop()}}),r,null,[[3,17]])})));return function(e){return r.apply(this,arguments)}}()),t("#modifier").on("click",s(regeneratorRuntime.mark((function a(){var r,n,s,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=3;break}return i.fire({icon:"error",title:"Veuillez selectioner une ligne!"}),a.abrupt("return");case 3:return r=t("#modifier i"),a.prev=4,r.remove("fa-edit").addClass("fa-spinner fa-spin "),a.next=8,axios.get("/parametre/seriebac/details/"+e);case 8:n=a.sent,s=n.data,console.log(s),r.addClass("fa-edit").removeClass("fa-spinner fa-spin "),t("#modifier_modal #designation").val(s.designation),t("#modifier_modal #abreviation").val(s.abreviation),t("#modifier_modal").modal("show"),a.next=23;break;case 17:a.prev=17,a.t0=a.catch(4),console.log(a.t0,a.t0.response),o=a.t0.response.data,i.fire({icon:"error",title:o}),r.addClass("fa-edit").removeClass("fa-spinner fa-spin ");case 23:case"end":return a.stop()}}),a,null,[[4,17]])})))),t("#udpate").on("submit",function(){var r=s(regeneratorRuntime.mark((function r(n){var s,o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),s=new FormData(t("#udpate")[0]),o=t("#udpate i"),r.prev=3,o.remove("fa-check-circle").addClass("fa-spinner fa-spin "),r.next=7,axios.post("/parametre/seriebac/update/"+e,s);case 7:c=r.sent,c.data,a.ajax.reload(),e=!1,o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),i.fire({icon:"success",title:"seriebac bien Modifier"}),t("#modifier_modal").modal("hide"),r.next=22;break;case 16:r.prev=16,r.t0=r.catch(3),console.log(r.t0,r.t0.response),l=r.t0.response.data,i.fire({icon:"error",title:l}),o.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 22:case"end":return r.stop()}}),r,null,[[3,16]])})));return function(e){return r.apply(this,arguments)}}()),t("#supprimer").on("click",s(regeneratorRuntime.mark((function r(){var n,s,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=3;break}return i.fire({icon:"error",title:"Veuillez selectioner une ligne!"}),r.abrupt("return");case 3:if(n=t("#udpate i"),1!=confirm("Vous voulez vraiment supprimer cette serie de bac ?")){r.next=24;break}return r.prev=6,n.remove("fa-check-circle").addClass("fa-spinner fa-spin "),r.next=10,axios.post("/parametre/seriebac/delete/"+e);case 10:s=r.sent,s.data,a.ajax.reload(),e=!1,n.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),i.fire({icon:"success",title:"seriebac bien Supprimer"}),r.next=24;break;case 18:r.prev=18,r.t0=r.catch(6),console.log(r.t0,r.t0.response),o=r.t0.response.data,i.fire({icon:"error",title:o}),n.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");case 24:case"end":return r.stop()}}),r,null,[[6,18]])}))))}))}},e=>{e.O(0,[9755,8029],(()=>{return a=429,e(e.s=a);var a}));e.O()}]);