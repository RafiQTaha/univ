(self.webpackChunk=self.webpackChunk||[]).push([[6964],{4008:(e,n,a)=>{var r=a(9755);function t(e,n,a,r,t,s,i){try{var o=e[s](i),c=o.value}catch(e){return void a(e)}o.done?n(c):Promise.resolve(c).then(r,t)}function s(e){return function(){var n=this,a=arguments;return new Promise((function(r,s){var i=e.apply(n,a);function o(e){t(i,r,s,o,c,"next",e)}function c(e){t(i,r,s,o,c,"throw",e)}o(void 0)}))}}a(3076),a(9554),a(1539),a(4747),a(9826),a(4916),a(4765),a(2772),a(561),a(8674),r(document).ready((function(){var e=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}),n=!1,a=[],t=r("#datables_gestion_planification").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/planification/gestions/list",processing:!0,serverSide:!0,deferRender:!0,scrollX:!0,drawCallback:function(){a.forEach((function(e){r("body tr#"+e).find("input").prop("checked",!0)})),r("body tr#"+n).addClass("active_databales")},preDrawCallback:function(e){r.fn.DataTable.isDataTable("#datables_gestion_planification")&&((e=r("#datables_gestion_planification").DataTable().settings())[0].jqXHR&&e[0].jqXHR.abort())},language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"}});r("select").select2(),r("#etablissement").on("change",s(regeneratorRuntime.mark((function e(){var n,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(this).val(),t.columns().search(""),a="",""==n){e.next=17;break}return t.columns(0).search(n).draw(),""!=r("#semaine").val()&&t.columns(6).search(r("#semaine").val()),""!=r("#semaine_day").val()&&t.columns(11).search(r("#semaine_day").val()),""!=r("#professeur").val()&&t.columns(7).search(r("#professeur").val()),""!=r("#grade").val()&&t.columns(8).search(r("#grade").val()),""!=r("#annuler").val()&&t.columns(9).search(r("#annuler").val()),""!=r("#valide").val()&&t.columns(10).search(r("#valide").val()),e.next=13,axios.get("/api/formation/"+n);case 13:s=e.sent,a=s.data,e.next=24;break;case 17:t.columns().search("").draw(),""!=r("#semaine").val()&&t.columns(6).search(r("#semaine").val()),""!=r("#semaine_day").val()&&t.columns(11).search(r("#semaine_day").val()),""!=r("#professeur").val()&&t.columns(7).search(r("#professeur").val()),""!=r("#grade").val()&&t.columns(8).search(r("#grade").val()),""!=r("#annuler").val()&&t.columns(9).search(r("#annuler").val()),""!=r("#valide").val()&&t.columns(10).search(r("#valide").val());case 24:r("#semestre_day").html("").select2(),r("#semestre").html("").select2(),r("#module").html("").select2(),r("#element").html("").select2(),r("#promotion").html("").select2(),r("#formation").html(a).select2();case 30:case"end":return e.stop()}}),e,this)})))),r("#formation").on("change",s(regeneratorRuntime.mark((function e(){var n,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(this).val(),t.columns().search(""),""!=r("#semaine").val()&&t.columns(6).search(r("#semaine").val()),""!=r("#semaine_day").val()&&t.columns(11).search(r("#semaine_day").val()),""!=r("#professeur").val()&&t.columns(7).search(r("#professeur").val()),""!=r("#grade").val()&&t.columns(8).search(r("#grade").val()),""!=r("#annuler").val()&&t.columns(9).search(r("#annuler").val()),""!=r("#valide").val()&&t.columns(10).search(r("#valide").val()),a="",""==n){e.next=17;break}return t.columns(1).search(n).draw(),e.next=13,axios.get("/api/promotion/"+n);case 13:s=e.sent,a=s.data,e.next=18;break;case 17:t.columns(0).search(r("#etablissement").val()).draw();case 18:r("#semestre_day").html("").select2(),r("#semestre").html("").select2(),r("#module").html("").select2(),r("#element").html("").select2(),r("#promotion").html(a).select2();case 23:case"end":return e.stop()}}),e,this)})))),r("#promotion").on("change",s(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(this).val(),t.columns().search(""),""!=r("#semaine").val()&&t.columns(6).search(r("#semaine").val()),""!=r("#semaine_day").val()&&t.columns(11).search(r("#semaine_day").val()),""!=r("#professeur").val()&&t.columns(7).search(r("#professeur").val()),""!=r("#grade").val()&&t.columns(8).search(r("#grade").val()),""!=r("#annuler").val()&&t.columns(9).search(r("#annuler").val()),""!=r("#valide").val()&&t.columns(10).search(r("#valide").val()),""==n){e.next=16;break}return t.columns(2).search(n).draw(),e.next=12,axios.get("/api/semestre/"+n);case 12:a=e.sent,response=a.data,e.next=17;break;case 16:t.columns(1).search(r("#formation").val()).draw();case 17:r("#semestre_day").html("").select2(),r("#semestre").html("").select2(),r("#module").html("").select2(),r("#element").html("").select2(),r("#semestre").html(response).select2();case 22:case"end":return e.stop()}}),e,this)})))),r("#semestre").on("change",s(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(this).val(),t.columns().search(""),""!=r("#semaine").val()&&t.columns(6).search(r("#semaine").val()),""!=r("#semaine_day").val()&&t.columns(11).search(r("#semaine_day").val()),""!=r("#professeur").val()&&t.columns(7).search(r("#professeur").val()),""!=r("#grade").val()&&t.columns(8).search(r("#grade").val()),""!=r("#annuler").val()&&t.columns(9).search(r("#annuler").val()),""!=r("#valide").val()&&t.columns(10).search(r("#valide").val()),""==n){e.next=16;break}return e.next=11,axios.get("/api/module/"+n);case 11:a=e.sent,t.columns(3).search(n).draw(),response=a.data,e.next=17;break;case 16:t.columns(2).search(r("#promotion").val()).draw();case 17:r("#element").html("").select2(),r("#module").html(response).select2();case 19:case"end":return e.stop()}}),e,this)})))),r("#module").on("change",s(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(this).val(),t.columns().search(""),""!=r("#semaine").val()&&t.columns(6).search(r("#semaine").val()),""!=r("#semaine_day").val()&&t.columns(11).search(r("#semaine_day").val()),""!=r("#professeur").val()&&t.columns(7).search(r("#professeur").val()),""!=r("#grade").val()&&t.columns(8).search(r("#grade").val()),""!=r("#annuler").val()&&t.columns(9).search(r("#annuler").val()),""!=r("#valide").val()&&t.columns(10).search(r("#valide").val()),""==n){e.next=16;break}return t.columns(4).search(n).draw(),e.next=12,axios.get("/api/element/"+n);case 12:a=e.sent,response=a.data,e.next=17;break;case 16:t.columns(3).search(r("#semestre").val()).draw();case 17:r("#element").html(response).select2();case 18:case"end":return e.stop()}}),e,this)})))),r("#element").on("change",s(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r(this).val(),t.columns().search(""),""!=r("#semaine").val()&&t.columns(6).search(r("#semaine").val()),""!=r("#semaine_day").val()&&t.columns(11).search(r("#semaine_day").val()),""!=r("#professeur").val()&&t.columns(7).search(r("#professeur").val()),""!=r("#grade").val()&&t.columns(8).search(r("#grade").val()),""!=r("#annuler").val()&&t.columns(9).search(r("#annuler").val()),""!=r("#valide").val()&&t.columns(10).search(r("#valide").val()),t.columns(5).search(n).draw();case 9:case"end":return e.stop()}}),e,this)})))),r("#semaine").on("change",s(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r(this).val(),t.columns(6).search(n).draw();case 2:case"end":return e.stop()}}),e,this)})))),r("#professeur").on("change",s(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r(this).val(),t.columns(7).search(n).draw();case 2:case"end":return e.stop()}}),e,this)})))),r("#grade").on("change",s(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r(this).val(),t.columns(8).search(n).draw();case 2:case"end":return e.stop()}}),e,this)})))),r("#annuler").on("change",s(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r(this).val(),t.columns(9).search(n).draw();case 2:case"end":return e.stop()}}),e,this)})))),r("#valider").on("change",s(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r(this).val(),t.columns(10).search(n).draw();case 2:case"end":return e.stop()}}),e,this)})))),r("#semaine_day").on("change",s(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r(this).val(),console.log(n),t.columns(11).search(n).draw();case 3:case"end":return e.stop()}}),e,this)})))),r("body").on("dblclick","#datables_gestion_planification tbody tr",(function(e){e.preventDefault(),r(this).hasClass("active_databales")?(r(this).removeClass("active_databales"),n=null):(r("#datables_gestion_planification tbody tr").removeClass("active_databales"),r(this).addClass("active_databales"),n=r(this).attr("id"))})),r("body").on("click","#datables_gestion_planification tbody tr",(function(e){e.preventDefault();var n=r(this).find("input");if(!n.hasClass("check_reg"))if(n.is(":checked")){n.prop("checked",!1);var t=a.indexOf(n.attr("data-id"));a.splice(t,1)}else n.prop("checked",!0),a.push(n.attr("data-id"))})),r("body").on("click","#supprimer",function(){var n=s(regeneratorRuntime.mark((function n(s){var i,o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.preventDefault(),0!==a.length){n.next=4;break}return e.fire({icon:"error",title:"Merci de Choisir au moins une ligne"}),n.abrupt("return");case 4:if(1!=confirm("Vous voulez vraiment supprimer cette enregistrement ?")){n.next=25;break}return(i=r("#supprimer i")).removeClass("fa-trash").addClass("fa-spinner fa-spin"),(o=new FormData).append("ids_planning",JSON.stringify(a)),n.prev=10,n.next=13,axios.post("/planification/gestions/gestion_delete_planning",o);case 13:c=n.sent,l=c.data,e.fire({icon:"success",title:l}),a=[],t.ajax.reload(null,!1),i.addClass("fa-trash").removeClass("fa-spinner fa-spin"),n.next=25;break;case 21:n.prev=21,n.t0=n.catch(10),n.t0.response.data,i.addClass("fa-trash").removeClass("fa-spinner fa-spin");case 25:case"end":return n.stop()}}),n,null,[[10,21]])})));return function(e){return n.apply(this,arguments)}}()),r("body").on("click","#annulation",function(){var a=s(regeneratorRuntime.mark((function a(t){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),n){a.next=4;break}return e.fire({icon:"error",title:"Merci de Choisir une ligne"}),a.abrupt("return");case 4:r("#annuler_planning_modal").modal("show");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()),r("body #motif_annuler").on("change",s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Autre"==r("#motif_annuler").val()?r("body #autre_motif").removeClass("d-none").addClass("d-block"):r("body #autre_motif").removeClass("d-block").addClass("d-none");case 1:case"end":return e.stop()}}),e)})))),r("body").on("click","#Annuler_planning",function(){var a=s(regeneratorRuntime.mark((function a(s){var i,o,c,l,u;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.preventDefault(),n){a.next=4;break}return e.fire({icon:"error",title:"Merci de Choisir une ligne"}),a.abrupt("return");case 4:if(""!=r("#motif_annuler").val()){a.next=7;break}return e.fire({icon:"error",title:"Merci de Choisir Le Motif d'annulation"}),a.abrupt("return");case 7:if(1!=confirm("Vous voulez vraiment Annuler cette Seance ?")){a.next=31;break}return(i=r("#Annuler_planning i")).removeClass("fa-times-circle").addClass("fa-spinner fa-spin"),(o=new FormData).append("motif_annuler",r("#motif_annuler").val()),o.append("autre_motif",r("#autre_motif").val()),a.prev=14,a.next=17,axios.post("/planification/gestions/gestion_annuler_planning/"+n,o);case 17:c=a.sent,l=c.data,e.fire({icon:"success",title:l}),n=!1,r("#annuler_planning_modal").modal("hide"),t.ajax.reload(null,!1),i.addClass("fa-times-circle").removeClass("fa-spinner fa-spin"),a.next=31;break;case 26:a.prev=26,a.t0=a.catch(14),u=a.t0.response.data,i.addClass("fa-times-circle").removeClass("fa-spinner fa-spin"),e.fire({icon:"error",title:u});case 31:case"end":return a.stop()}}),a,null,[[14,26]])})));return function(e){return a.apply(this,arguments)}}()),r("body").on("click","#list_absence",(function(a){a.preventDefault(),n?window.open("/planification/gestions/GetAbsenceByGroupe_gestion/"+n,"_blank"):e.fire({icon:"error",title:"Merci de Selectionner une Seance"})})),r("body").on("click","#fiche_sequence",function(){var a=s(regeneratorRuntime.mark((function a(r){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),n){a.next=4;break}return e.fire({icon:"error",title:"Merci de Selectionner une Seance"}),a.abrupt("return");case 4:window.open("/planification/gestions/Getsequence_gestion/"+n,"_blank");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()),r("body").on("click","#validation",function(){var a=s(regeneratorRuntime.mark((function a(s){var i,o,c,l;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.preventDefault(),n){a.next=4;break}return e.fire({icon:"error",title:"Merci de Choisir une ligne"}),a.abrupt("return");case 4:return(i=r("#validation i")).removeClass("fa-check").addClass("fa-spinner fa-spin"),a.prev=6,a.next=9,axios.post("/planification/gestions/gestion_valider_planning/"+n);case 9:o=a.sent,c=o.data,e.fire({icon:"success",title:c}),t.ajax.reload(null,!1),i.addClass("fa-check").removeClass("fa-spinner fa-spin"),a.next=21;break;case 16:a.prev=16,a.t0=a.catch(6),l=a.t0.response.data,i.addClass("fa-check").removeClass("fa-spinner fa-spin"),e.fire({icon:"error",title:l});case 21:case"end":return a.stop()}}),a,null,[[6,16]])})));return function(e){return a.apply(this,arguments)}}()),r("body").on("click","#extraction",function(){var e=s(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r("#extraction i"),window.open("/planification/gestions/extraction_planning","_blank");case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),r("body").on("click","#extraction_semaine",function(){var e=s(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r("#extraction_semaine i"),window.open("/planification/gestions/extraction_Week","_blank");case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),r("body").on("click","#devalidation",function(){var a=s(regeneratorRuntime.mark((function a(s){var i,o,c,l;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.preventDefault(),n){a.next=4;break}return e.fire({icon:"error",title:"Merci de Sélectionner une ligne"}),a.abrupt("return");case 4:if(1!=confirm("Vous voulez vraiment dévalider cette seance ?")){a.next=23;break}return(i=r("#devalidation i")).removeClass("fa-times").addClass("fa-spinner fa-spin"),a.prev=8,a.next=11,axios.post("/planification/gestions/gestion_devalider_planning/"+n);case 11:o=a.sent,c=o.data,e.fire({icon:"success",title:c}),t.ajax.reload(null,!1),i.addClass("fa-times").removeClass("fa-spinner fa-spin"),a.next=23;break;case 18:a.prev=18,a.t0=a.catch(8),l=a.t0.response.data,i.addClass("fa-times").removeClass("fa-spinner fa-spin"),e.fire({icon:"error",title:l});case 23:case"end":return a.stop()}}),a,null,[[8,18]])})));return function(e){return a.apply(this,arguments)}}()),r("body").on("click","#degenerer",function(){var a=s(regeneratorRuntime.mark((function a(s){var i,o,c,l;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.preventDefault(),n){a.next=4;break}return e.fire({icon:"error",title:"Merci de Sélectionner une ligne"}),a.abrupt("return");case 4:if(1!=confirm("Vous voulez vraiment dégénérer cette seance ?")){a.next=23;break}return(i=r("#degenerer i")).removeClass("fa-times").addClass("fa-spinner fa-spin"),a.prev=8,a.next=11,axios.post("/planification/gestions/gestion_degenerer_planning/"+n);case 11:o=a.sent,c=o.data,e.fire({icon:"success",title:c}),t.ajax.reload(null,!1),i.addClass("fa-times").removeClass("fa-spinner fa-spin"),a.next=23;break;case 18:a.prev=18,a.t0=a.catch(8),l=a.t0.response.data,i.addClass("fa-times").removeClass("fa-spinner fa-spin"),e.fire({icon:"error",title:l});case 23:case"end":return a.stop()}}),a,null,[[8,18]])})));return function(e){return a.apply(this,arguments)}}())}))}},e=>{e.O(0,[9755,8029,5293],(()=>{return n=4008,e(e.s=n);var n}));e.O()}]);