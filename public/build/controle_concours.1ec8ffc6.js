(self.webpackChunk=self.webpackChunk||[]).push([[5689],{5705:(e,t,n)=>{var r=n(9755);function a(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,s,"next",e)}function s(e){a(i,r,o,c,s,"throw",e)}c(void 0)}))}}n(1539),n(8674),n(3076),r(document).ready((function(){var e=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}});r("#datables_controle").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/concours/controle/list",processing:!0,serverSide:!0,deferRender:!0,scrollX:!0,preDrawCallback:function(e){r.fn.DataTable.isDataTable("#datables_controle")&&((e=r("#datables_controle").DataTable().settings())[0].jqXHR&&e[0].jqXHR.abort())},language:datatablesFrench});r("body").on("keydown","#input1",function(){var e=o(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:13===t.which&&r("#input2").focus();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r("body").on("keydown","#input2",function(){var t=o(regeneratorRuntime.mark((function t(n){var a,o,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(13!==n.which){t.next=19;break}return t.prev=1,(a=new FormData).append("etudiant",r("#input1").val()),a.append("anonymat",r("#input2").val()),t.next=7,axios.post("/concours/controle/validation",a);case 7:o=t.sent,i=o.data,e.fire({icon:"success",title:i}),r("#input1").val(""),r("#input2").val(""),r("#input1").focus(),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(1),c=t.t0.response.data,e.fire({icon:"error",title:c});case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}()),r("#datables_controle").on("click","tbody tr .get_cd",(function(e){var t=r(this).attr("role");window.open("/concours/controle/print/"+t+"/2","_blank","toolbar=yes,scrollbars=yes,top=500,left=500,width=400,height=330"),e.preventDefault()}))}))}},e=>{e.O(0,[9755,8029],(()=>{return t=5705,e(e.s=t);var t}));e.O()}]);