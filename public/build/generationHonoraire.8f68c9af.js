(self.webpackChunk=self.webpackChunk||[]).push([[8876],{9615:(e,a,r)=>{var n=r(9755);function s(e,a,r,n,s,t,c){try{var o=e[t](c),i=o.value}catch(e){return void r(e)}o.done?a(i):Promise.resolve(i).then(n,s)}function t(e){return function(){var a=this,r=arguments;return new Promise((function(n,t){var c=e.apply(a,r);function o(e){s(c,n,t,o,i,"next",e)}function i(e){s(c,n,t,o,i,"throw",e)}o(void 0)}))}}r(3076),r(9554),r(1539),r(4747),r(9826),r(2772),r(561),r(1249),r(4916),r(4765),r(8674),n(document).ready((function(){var e=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}),a=!1,r=[],s=n("#datables_generation_honoraires").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/honoraire/generation/list",processing:!0,serverSide:!0,deferRender:!0,scrollX:!0,drawCallback:function(){r.forEach((function(e){n("body tr#"+e).find("input").prop("checked",!0)})),n("body tr#"+a).addClass("active_databales")},language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"},columnDefs:[{targets:[1],orderable:!1}]});n("body").on("dblclick","#datables_generation_honoraires tbody tr",(function(e){e.preventDefault(),n(this).hasClass("active_databales")?(n(this).removeClass("active_databales"),a=null):(n("#datables_generation_honoraires tbody tr").removeClass("active_databales"),n(this).addClass("active_databales"),a=n(this).attr("id"))})),n("body").on("click","#datables_generation_honoraires tbody tr",(function(e){e.preventDefault();var a=n(this).find("input");if(!a.hasClass("check_reg"))if(a.is(":checked")){a.prop("checked",!1);var s=r.indexOf(a.attr("data-id"));r.splice(s,1)}else a.prop("checked",!0),r.push(a.attr("data-id"))})),n("body").on("click",".check_all_seances",(function(){r=[];var e=n("body #check_seance");1==n(".check_all_seances").prop("checked")?(e.prop("checked",!0),e.map((function(){r.push(this.value)}))):e.prop("checked",!1)})),n("select").select2(),n("#etablissement").on("change",t(regeneratorRuntime.mark((function e(){var a,r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(this).val(),s.columns().search(""),r="",""==a){e.next=15;break}return""!=n("#semaine").val()&&s.columns(6).search(n("#semaine").val()),""!=n("#professeur").val()&&s.columns(7).search(n("#professeur").val()),""!=n("#grade").val()&&s.columns(8).search(n("#grade").val()),""!=n("#annuler").val()&&s.columns(9).search(n("#niv").val()),s.columns(0).search(a).draw(),e.next=11,axios.get("/api/formation/"+a);case 11:t=e.sent,r=t.data,e.next=19;break;case 15:s.columns().search("").draw(),""!=n("#semaine").val()&&s.columns(6).search(n("#semaine").val()).draw(),""!=n("#professeur").val()&&s.columns(7).search(n("#professeur").val()).draw(),""!=n("#grade").val()&&s.columns(8).search(n("#grade").val()).draw();case 19:n("#niv1").html("").select2(),n("#niv2").html("").select2(),n("#niv3").html("").select2(),n("#semestre").html("").select2(),n("#module").html("").select2(),n("#element").html("").select2(),n("#promotion").html("").select2(),n("#formation").html(r).select2();case 27:case"end":return e.stop()}}),e,this)})))),n("#formation").on("change",t(regeneratorRuntime.mark((function e(){var a,r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(this).val(),s.columns().search(""),""!=n("#semaine").val()&&s.columns(6).search(n("#semaine").val()),""!=n("#professeur").val()&&s.columns(7).search(n("#professeur").val()),""!=n("#grade").val()&&s.columns(8).search(n("#grade").val()),r="",""==a){e.next=14;break}return s.columns(1).search(a).draw(),e.next=10,axios.get("/api/promotion/"+a);case 10:t=e.sent,r=t.data,e.next=15;break;case 14:s.columns(0).search(n("#etablissement").val()).draw();case 15:n("#niv1").html("").select2(),n("#niv2").html("").select2(),n("#niv3").html("").select2(),n("#semestre").html("").select2(),n("#module").html("").select2(),n("#element").html("").select2(),n("#promotion").html(r).select2();case 22:case"end":return e.stop()}}),e,this)})))),n("#promotion").on("change",t(regeneratorRuntime.mark((function e(){var a,r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(this).val(),s.columns().search(""),""!=n("#semaine").val()&&s.columns(6).search(n("#semaine").val()),""!=n("#professeur").val()&&s.columns(7).search(n("#professeur").val()),""!=n("#grade").val()&&s.columns(8).search(n("#grade").val()),""==a){e.next=17;break}return s.columns(2).search(a).draw(),e.next=9,axios.get("/api/semestre/"+a);case 9:return r=e.sent,response=r.data,e.next=13,axios.get("/api/niv1/"+a);case 13:t=e.sent,niv1=t.data,e.next=18;break;case 17:s.columns(1).search(n("#formation").val()).draw();case 18:n("#niv1").html(niv1).select2(),n("#niv2").html("").select2(),n("#niv3").html("").select2(),n("#semestre").html("").select2(),n("#module").html("").select2(),n("#element").html("").select2(),n("#semestre").html(response).select2();case 25:case"end":return e.stop()}}),e,this)})))),n("#semestre").on("change",t(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(this).val(),s.columns().search(""),""!=n("#semaine").val()&&s.columns(6).search(n("#semaine").val()),""!=n("#professeur").val()&&s.columns(7).search(n("#professeur").val()),""!=n("#grade").val()&&s.columns(8).search(n("#grade").val()),""!=n("#niv1").val()&&s.columns(9).search(n("#niv1").val()),""!=n("#niv2").val()&&s.columns(10).search(n("#niv2").val()),""!=n("#niv3").val()&&s.columns(11).search(n("#niv3").val()),""==a){e.next=16;break}return s.columns(3).search(a).draw(),e.next=12,axios.get("/api/module/"+a);case 12:r=e.sent,response=r.data,e.next=17;break;case 16:s.columns(2).search(n("#promotion").val()).draw();case 17:n("#element").html("").select2(),n("#module").html(response).select2();case 19:case"end":return e.stop()}}),e,this)})))),n("#module").on("change",t(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(this).val(),s.columns().search(""),""!=n("#semaine").val()&&s.columns(6).search(n("#semaine").val()),""!=n("#professeur").val()&&s.columns(7).search(n("#professeur").val()),""!=n("#grade").val()&&s.columns(8).search(n("#grade").val()),""!=n("#niv1").val()&&s.columns(9).search(n("#niv1").val()),""!=n("#niv2").val()&&s.columns(10).search(n("#niv2").val()),""!=n("#niv3").val()&&s.columns(11).search(n("#niv3").val()),""==a){e.next=16;break}return s.columns(4).search(a).draw(),e.next=12,axios.get("/api/element/"+a);case 12:r=e.sent,response=r.data,e.next=17;break;case 16:s.columns(3).search(n("#semestre").val()).draw();case 17:n("#element").html(response).select2();case 18:case"end":return e.stop()}}),e,this)})))),n("#element").on("change",t(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n(this).val(),s.columns().search(""),""!=n("#semaine").val()&&s.columns(6).search(n("#semaine").val()),""!=n("#professeur").val()&&s.columns(7).search(n("#professeur").val()),""!=n("#grade").val()&&s.columns(8).search(n("#grade").val()),""!=n("#niv1").val()&&s.columns(9).search(n("#niv1").val()),""!=n("#niv2").val()&&s.columns(10).search(n("#niv2").val()),""!=n("#niv3").val()&&s.columns(11).search(n("#niv3").val()),s.columns(5).search(a).draw();case 9:case"end":return e.stop()}}),e,this)})))),n("#semaine").on("change",t(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n(this).val(),s.columns(6).search(a).draw();case 2:case"end":return e.stop()}}),e,this)})))),n("#professeur").on("change",t(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n(this).val(),s.columns(7).search(a).draw();case 2:case"end":return e.stop()}}),e,this)})))),n("#grade").on("change",t(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n(this).val(),s.columns(8).search(a).draw();case 2:case"end":return e.stop()}}),e,this)})))),n("#niv1").on("change",t(regeneratorRuntime.mark((function e(){var a,r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(this).val(),r="",""==a){e.next=10;break}return niv=a,e.next=6,axios.get("/api/niv2/"+a);case 6:t=e.sent,r=t.data,e.next=11;break;case 10:niv=0;case 11:s.columns(9).search(a).draw(),n("#niv3").html("").select2(),n("#niv2").html(r).select2();case 14:case"end":return e.stop()}}),e,this)})))),n("#niv2").on("change",t(regeneratorRuntime.mark((function e(){var a,r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(this).val(),r="",""==a){e.next=10;break}return niv=a,e.next=6,axios.get("/api/niv3/"+a);case 6:t=e.sent,r=t.data,e.next=11;break;case 10:niv=n("#niv1").val();case 11:n("#niv3").html(r).select2(),s.columns(10).search(a).draw();case 13:case"end":return e.stop()}}),e,this)})))),n("#niv3").on("change",t(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n(this).val(),"",niv=""!=a?a:n("#niv2").val(),s.columns(11).search(a).draw();case 4:case"end":return e.stop()}}),e,this)})))),n("body").on("click","#generer",function(){var a=t(regeneratorRuntime.mark((function a(t){var c,o,i,l;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),0!==r.length){a.next=4;break}return e.fire({icon:"error",title:"Merci de Choisir au moins une ligne"}),a.abrupt("return");case 4:return(c=n("#generer i")).removeClass("fab fa-get-pocket").addClass("fas fa-spinner fa-spin"),(o=new FormData).append("ids_seances",JSON.stringify(r)),a.prev=8,a.next=11,axios.post("/honoraire/generation/generation_honoraire_generer",o);case 11:i=a.sent,l=i.data,e.fire({icon:"success",title:l}),s.ajax.reload(null,!1),r=[],c.addClass("fab fa-get-pocket").removeClass("fas fa-spinner fa-spin"),a.next=23;break;case 19:a.prev=19,a.t0=a.catch(8),a.t0.response.data,c.addClass("fab fa-get-pocket").removeClass("fas fa-spinner fa-spin");case 23:case"end":return a.stop()}}),a,null,[[8,19]])})));return function(e){return a.apply(this,arguments)}}())}))}},e=>{e.O(0,[9755,8029,5160],(()=>{return a=9615,e(e.s=a);var a}));e.O()}]);