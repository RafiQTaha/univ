(self.webpackChunk=self.webpackChunk||[]).push([[9123],{3962:(e,n,a)=>{var t=a(9755);function r(e,n,a,t,r,s,i){try{var o=e[s](i),c=o.value}catch(e){return void a(e)}o.done?n(c):Promise.resolve(c).then(t,r)}function s(e){return function(){var n=this,a=arguments;return new Promise((function(t,s){var i=e.apply(n,a);function o(e){r(i,t,s,o,c,"next",e)}function c(e){r(i,t,s,o,c,"throw",e)}o(void 0)}))}}a(1539),a(8674),a(3076);var i=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}});t(document).ready((function(){t("select").select2();var e=t("#datatables_gestion_semaines").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/parametre/semaines/list",processing:!0,serverSide:!0,deferRender:!0,preDrawCallback:function(e){t.fn.DataTable.isDataTable("#datatables_gestion_semaines")&&((e=t("#datatables_gestion_semaines").DataTable().settings())[0].jqXHR&&e[0].jqXHR.abort())},language:datatablesFrench});t("#dupliquer").on("click",function(){var n=s(regeneratorRuntime.mark((function n(a){var r,s,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),r=t("#dupliquer i"),n.prev=2,r.remove("fas fa-clone").addClass("fa-spinner fa-spin "),n.next=6,axios.post("/parametre/semaines/duplication");case 6:s=n.sent,o=s.data,r.addClass("fas fa-clone").removeClass("fa-spinner fa-spin "),e.ajax.reload(),i.fire({icon:"success",title:o}),n.next=19;break;case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0,n.t0.response),c=n.t0.response.data,i.fire({icon:"error",title:c}),r.addClass("fas fa-clone").removeClass("fa-spinner fa-spin ");case 19:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(e){return n.apply(this,arguments)}}()),t("body").on("click","#extraction",function(){var e=s(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),window.open("/parametre/semaines/extractionSemaine/","_blank");case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}))}},e=>{e.O(0,[9755,8029],(()=>{return n=3962,e(e.s=n);var n}));e.O()}]);