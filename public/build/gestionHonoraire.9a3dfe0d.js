(self.webpackChunk=self.webpackChunk||[]).push([[5336],{9991:(e,a,r)=>{var n=r(9755);function s(e,a,r,n,s,t,c){try{var o=e[t](c),i=o.value}catch(e){return void r(e)}o.done?a(i):Promise.resolve(i).then(n,s)}function t(e){return function(){var a=this,r=arguments;return new Promise((function(n,t){var c=e.apply(a,r);function o(e){s(c,n,t,o,i,"next",e)}function i(e){s(c,n,t,o,i,"throw",e)}o(void 0)}))}}r(3076),r(9554),r(1539),r(4747),r(9826),r(2772),r(561),r(1249),r(4916),r(4765),r(8674),n(document).ready((function(){var e=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}),a=!1,r=[],s=n("#datables_gestion_honoraires").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/honoraire/gestion/list",processing:!0,serverSide:!0,deferRender:!0,scrollX:!0,drawCallback:function(){r.forEach((function(e){n("body tr#"+e).find("input").prop("checked",!0)})),n("body tr#"+a).addClass("active_databales")},language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"},columnDefs:[{targets:[1],orderable:!1}]});n("body").on("dblclick","#datables_gestion_honoraires tbody tr",(function(e){e.preventDefault(),n(this).hasClass("active_databales")?(n(this).removeClass("active_databales"),a=null):(n("#datables_gestion_honoraires tbody tr").removeClass("active_databales"),n(this).addClass("active_databales"),a=n(this).attr("id"))})),n("#table_gestion_honoraires").on("page.dt",(function(){s.page.info();alert("info")})),n("body").on("click","#datables_gestion_honoraires tbody tr",(function(e){e.preventDefault();var a=n(this).find("input");if(!a.hasClass("check_seance"))if(a.is(":checked")){a.prop("checked",!1);var s=r.indexOf(a.attr("data-id"));r.splice(s,1)}else a.prop("checked",!0),r.push(a.attr("data-id"))})),n("body").on("click",".check_all_seances",(function(){r=[];var e=n("body .check_check_seance");1==n(".check_all_seances").prop("checked")?(e.prop("checked",!0),e.map((function(){r.push(this.value)}))):e.prop("checked",!1)})),n("select").select2(),n("#etablissement").on("change",t(regeneratorRuntime.mark((function e(){var a,r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(this).val(),s.columns().search(""),r="",""==a){e.next=15;break}return""!=n("#statut").val()&&s.columns(4).search(n("#statut").val()),""!=n("#semaine").val()&&s.columns(5).search(n("#semaine").val()),""!=n("#professeur").val()&&s.columns(6).search(n("#professeur").val()),""!=n("#grade").val()&&s.columns(7).search(n("#grade").val()),s.columns(0).search(a).draw(),e.next=11,axios.get("/api/formation/"+a);case 11:t=e.sent,r=t.data,e.next=20;break;case 15:s.columns().search("").draw(),""!=n("#statut").val()&&s.columns(4).search(n("#statut").val()).draw(),""!=n("#semaine").val()&&s.columns(5).search(n("#semaine").val()).draw(),""!=n("#professeur").val()&&s.columns(6).search(n("#professeur").val()).draw(),""!=n("#grade").val()&&s.columns(7).search(n("#grade").val()).draw();case 20:n("#semestre").html("").select2(),n("#promotion").html("").select2(),n("#formation").html(r).select2();case 23:case"end":return e.stop()}}),e,this)})))),n("#formation").on("change",t(regeneratorRuntime.mark((function e(){var a,r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(this).val(),s.columns().search(""),""!=n("#semaine").val()&&s.columns(5).search(n("#semaine").val()),""!=n("#professeur").val()&&s.columns(6).search(n("#professeur").val()),""!=n("#grade").val()&&s.columns(7).search(n("#grade").val()),r="",""==a){e.next=14;break}return s.columns(1).search(a).draw(),e.next=10,axios.get("/api/promotion/"+a);case 10:t=e.sent,r=t.data,e.next=15;break;case 14:s.columns(0).search(n("#etablissement").val()).draw();case 15:n("#semestre").html("").select2(),n("#promotion").html(r).select2();case 17:case"end":return e.stop()}}),e,this)})))),n("#promotion").on("change",t(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(this).val(),s.columns().search(""),""!=n("#semaine").val()&&s.columns(5).search(n("#semaine").val()),""!=n("#professeur").val()&&s.columns(6).search(n("#professeur").val()),""!=n("#grade").val()&&s.columns(7).search(n("#grade").val()),""==a){e.next=13;break}return s.columns(2).search(a).draw(),e.next=9,axios.get("/api/semestre/"+a);case 9:r=e.sent,response=r.data,e.next=14;break;case 13:s.columns(1).search(n("#formation").val()).draw();case 14:n("#semestre").html("").select2(),n("#semestre").html(response).select2();case 16:case"end":return e.stop()}}),e,this)})))),n("#semestre").on("change",t(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(this).val(),s.columns().search(""),""!=n("#semaine").val()&&s.columns(5).search(n("#semaine").val()),""!=n("#professeur").val()&&s.columns(6).search(n("#professeur").val()),""!=n("#grade").val()&&s.columns(7).search(n("#grade").val()),""==a){e.next=13;break}return s.columns(3).search(a).draw(),e.next=9,axios.get("/api/module/"+a);case 9:r=e.sent,response=r.data,e.next=14;break;case 13:s.columns(2).search(n("#promotion").val()).draw();case 14:n("#element").html("").select2(),n("#module").html(response).select2();case 16:case"end":return e.stop()}}),e,this)})))),n("#module").on("change",t(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(this).val(),s.columns().search(""),""!=n("#semaine").val()&&s.columns(5).search(n("#semaine").val()),""!=n("#professeur").val()&&s.columns(6).search(n("#professeur").val()),""!=n("#grade").val()&&s.columns(7).search(n("#grade").val()),""==a){e.next=13;break}return s.columns(4).search(a).draw(),e.next=9,axios.get("/api/element/"+a);case 9:r=e.sent,response=r.data,e.next=14;break;case 13:s.columns(3).search(n("#semestre").val()).draw();case 14:n("#element").html(response).select2();case 15:case"end":return e.stop()}}),e,this)})))),n("#element").on("change",t(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n(this).val(),s.columns().search(""),""!=n("#semaine").val()&&s.columns(5).search(n("#semaine").val()),""!=n("#professeur").val()&&s.columns(6).search(n("#professeur").val()),""!=n("#grade").val()&&s.columns(7).search(n("#grade").val()),s.columns(5).search(a).draw();case 6:case"end":return e.stop()}}),e,this)})))),n("#statut").on("change",t(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n(this).val(),s.columns(4).search(a).draw();case 2:case"end":return e.stop()}}),e,this)})))),n("#semaine").on("change",t(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n(this).val(),s.columns(5).search(a).draw();case 2:case"end":return e.stop()}}),e,this)})))),n("#professeur").on("change",t(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n(this).val(),s.columns(6).search(a).draw();case 2:case"end":return e.stop()}}),e,this)})))),n("#grade").on("change",t(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n(this).val(),s.columns(7).search(a).draw();case 2:case"end":return e.stop()}}),e,this)})))),n("body").on("click","#annuler",function(){var a=t(regeneratorRuntime.mark((function a(t){var c,o,i;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),0!==r.length){a.next=4;break}return e.fire({icon:"error",title:"Merci de Choisir au moins une ligne"}),a.abrupt("return");case 4:return(c=n("#annuler i")).removeClass("fa-times-circle").addClass("fa-spinner fa-spin"),(o=new FormData).append("ids_seances",JSON.stringify(r)),a.prev=8,a.next=11,axios.post("/honoraire/gestion/annuler_honoraires",o);case 11:i=a.sent,i.data,e.fire({icon:"success",title:"Honoraire Anullée Avec Succée"}),r=[],s.ajax.reload(null,!1),c.addClass("fa-times-circle").removeClass("fa-spinner fa-spin"),a.next=23;break;case 19:a.prev=19,a.t0=a.catch(8),a.t0.response.data,c.addClass("fa-times-circle").removeClass("fa-spinner fa-spin");case 23:case"end":return a.stop()}}),a,null,[[8,19]])})));return function(e){return a.apply(this,arguments)}}()),n("body").on("click","#regle",function(){var a=t(regeneratorRuntime.mark((function a(t){var c,o,i,l;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),0!==r.length){a.next=4;break}return e.fire({icon:"error",title:"Merci de Choisir au moins une ligne"}),a.abrupt("return");case 4:return(c=n("#regle i")).removeClass("a-plus-circle").addClass("fa-spinner fa-spin"),(o=new FormData).append("ids_seances",JSON.stringify(r)),a.prev=8,a.next=11,axios.post("/honoraire/gestion/regle_honoraires",o);case 11:i=a.sent,l=i.data,e.fire({icon:"success",title:l}),r=[],s.ajax.reload(null,!1),c.addClass("a-plus-circle").removeClass("fa-spinner fa-spin"),a.next=23;break;case 19:a.prev=19,a.t0=a.catch(8),a.t0.response.data,c.addClass("a-plus-circle").removeClass("fa-spinner fa-spin");case 23:case"end":return a.stop()}}),a,null,[[8,19]])})));return function(e){return a.apply(this,arguments)}}())}))},1249:(e,a,r)=>{"use strict";var n=r(2109),s=r(2092).map;n({target:"Array",proto:!0,forced:!r(1194)("map")},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})}},e=>{e.O(0,[9755,8029,5293],(()=>{return a=9991,e(e.s=a);var a}));e.O()}]);