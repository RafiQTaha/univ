(self.webpackChunk=self.webpackChunk||[]).push([[4322],{2893:(e,a,t)=>{var r=t(9755);function n(e,a,t,r,n,s,o){try{var i=e[s](o),l=i.value}catch(e){return void t(e)}i.done?a(l):Promise.resolve(l).then(r,n)}function s(e){return function(){var a=this,t=arguments;return new Promise((function(r,s){var o=e.apply(a,t);function i(e){n(o,r,s,i,l,"next",e)}function l(e){n(o,r,s,i,l,"throw",e)}i(void 0)}))}}t(3076),t(4916),t(4765),t(9826),t(1539),t(2564),t(8674),r(document).ready((function(){var e=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}),a=!1,t=r("#datables_facture").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:"/facture/factures/list",processing:!0,serverSide:!0,deferRender:!0,scrollX:!0,drawCallback:function(){r("body tr#"+a).addClass("active_databales")},preDrawCallback:function(e){r.fn.DataTable.isDataTable("#datables_facture")&&((e=r("#datables_facture").DataTable().settings())[0].jqXHR&&e[0].jqXHR.abort())},language:{url:"//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"}});r("select").select2(),r("#etablissement").on("change",s(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r(this).val(),t.columns(1).search(""),n="",""==a){e.next=12;break}return r("#reglement")&&""!=r("#reglement").val()&&t.columns(2).search(r("#reglement").val()),t.columns(0).search(a).draw(),e.next=8,axios.get("/api/formation/"+a);case 8:s=e.sent,n=s.data,e.next=14;break;case 12:t.columns(0).search(a).draw(),r("#reglement")&&""!=r("#reglement").val()&&t.columns(2).search(r("#reglement").val());case 14:r("#formation").html(n).select2();case 15:case"end":return e.stop()}}),e,this)})))),r("#formation").on("change",s(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r(this).val(),t.columns().search(""),r("#reglement")&&""!=r("#reglement").val()&&t.columns(2).search(r("#reglement").val()),"",""==a){e.next=12;break}return t.columns(1).search(a).draw(),e.next=8,axios.get("/api/promotion/"+a);case 8:n=e.sent,n.data,e.next=13;break;case 12:t.columns(0).search(r("#etablissement").val()).draw();case 13:case"end":return e.stop()}}),e,this)})))),r("#reglement").on("change",s(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r(this).val(),t.columns(2).search(a).draw();case 2:case"end":return e.stop()}}),e,this)}))));var n=!1,o=function(){axios.get("/facture/factures/getMontant/"+a).then((function(e){n=null,r("#ajouter").removeClass("btn-primary").addClass("btn-secondary").attr("disabled",!1),"vide"!=e.data&&(n=12,r("#montant_facture").val(e.data.montant_facture),r("#ajouter").removeClass("btn-secondary").addClass("btn-primary").attr("disabled",!0))})).catch((function(e){console.log(e)}))},i=function(){var e=r("#facture i");e.removeClass("fa-money-bill-alt").addClass("fa-spinner fa-spin"),axios.get("/facture/factures/detaille_facture/"+a).then((function(a){0==a.data[0]?(r(".modal-facture #add_detaille").css("display","none"),r(".modal-facture #add").css("display","none"),r(".modal-facture #detaille_active").css("display","none"),r(".modal-facture #delete_detaille").css("display","none")):(r(".modal-facture #add_detaille").css("display","block"),r(".modal-facture #add").css("display","flex"),r(".modal-facture #detaille_active").css("display","block"),r(".modal-facture #delete_detaille").css("display","block")),r(".table_detaille_facture tbody").html(a.data[1]),e.removeClass("fa-spinner fa-spin").addClass("fa-money-bill-alt")})).catch((function(e){console.log(e)}))},l=function(){a&&axios.get("/facture/factures/article_frais/"+a).then((function(e){console.log(e.data[0]),0==e.data[0]?r("#detail_facture_modal #orgDiv").css("display","block"):r("#detail_facture_modal #orgDiv").css("display","none"),r("#detail_facture_modal #frais").html(e.data[1]).select2(),r("#detail_facture_modal #montantt").val("")})).catch((function(e){console.log(e)}))};r("body").on("click","#datables_facture tbody tr",(function(e){e.preventDefault(),r(this).hasClass("active_databales")?(r(this).removeClass("active_databales"),a=null,n=null,r("#ajouter").removeClass("btn-primary").addClass("btn-secondary").attr("disabled",!1)):(r("#datables_facture tbody tr").removeClass("active_databales"),r(this).addClass("active_databales"),a=r(this).attr("id"),console.log(a),o(),i(),l())})),r("body").on("click","#facture",(function(t){t.preventDefault(),a?r("#detail_facture_modal").modal("show"):e.fire({icon:"error",title:"Veuillez selection une ligne!"})})),r("input[type=radio][name=organ]").on("change",function(){var e=s(regeneratorRuntime.mark((function e(a){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),0!=this.value){e.next=10;break}return e.next=4,axios.get("/api/getorganismepasPayant");case 4:t=e.sent,response=t.data,r(".select-organ #org").html(response).select2(),r(".select-organ").css("display","block"),e.next=12;break;case 10:r(".select-organ #org").html(""),r(".select-organ").css("display","none");case 12:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()),r("body").on("change",".modal-facture #frais",(function(e){e.preventDefault();var a=r(this).find(":selected").attr("data-id");""!=a&&r(".modal-facture #montantt").val(),r(".modal-facture #montantt").val(a)})),r("body").on("click","#add_detaille",function(){var e=s(regeneratorRuntime.mark((function e(n){var s,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(s=r(this).find("i")).removeClass("fa-plus").addClass("fa-spinner fa-spin"),(c=new FormData).append("frais",r("#frais").val()),c.append("montant",r("#montantt").val()),c.append("ice",r("#ice").val()),c.append("organismeType",r("#organismeType").val()),r(".modal-facture .modal-body .alert").remove(),e.prev=10,e.next=13,axios.post("/facture/factures/add_detaille/"+a,c);case 13:e.sent,i(),l(),r(".modal-facture .modal-body").prepend('<div class="alert alert-success">Facture Bien Ajouter</div>'),r("select").val(""),s.removeClass("fa-spinner fa-spin").addClass("fa-plus"),o(),t.ajax.reload(null,!1),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(10),u=e.t0.response.data,r(".modal-facture .modal-body").prepend('<div class="alert alert-danger">'.concat(u,"</div>")),s.removeClass("fa-spinner fa-spin").addClass("fa-plus");case 28:setTimeout((function(){r(".modal-facture .modal-body .alert").remove()}),4e3);case 29:case"end":return e.stop()}}),e,this,[[10,23]])})));return function(a){return e.apply(this,arguments)}}()),r("body").on("click","#delete_detaille",function(){var n=s(regeneratorRuntime.mark((function n(s){var l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.preventDefault(),1!=confirm("Vous voulez vraiment desactiver tout les frais ?")){n.next=20;break}return(l=r(this).find("i")).removeClass("fa-window-close").addClass("fa-spinner fa-spin"),n.prev=5,n.next=8,axios.post("/facture/factures/cloture_all_detaille/"+a);case 8:n.sent,o(),i(),t.ajax.reload(null,!1),l.removeClass("fa-spinner fa-spin").addClass("fa-window-close"),n.next=20;break;case 15:n.prev=15,n.t0=n.catch(5),c=n.t0.response.data,e.fire({icon:"error",title:c}),l.removeClass("fa-spinner fa-spin").addClass("fa-window-close");case 20:case"end":return n.stop()}}),n,this,[[5,15]])})));return function(e){return n.apply(this,arguments)}}()),r("body").on("click",".detaille_cloture",function(){var e=s(regeneratorRuntime.mark((function e(a){var n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),(n=r(this).find("i")).removeClass("fa-window-close").addClass("fa-spinner fa-spin"),s=r(this).attr("id"),e.prev=4,e.next=7,axios.post("/facture/factures/cloture_detaille/"+s);case 7:e.sent,o(),i(),t.ajax.reload(null,!1),n.removeClass("fa-spinner fa-spin").addClass("fa-window-close"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),e.t0.response.data,n.removeClass("fa-spinner fa-spin").addClass("fa-window-close");case 18:case"end":return e.stop()}}),e,this,[[4,14]])})));return function(a){return e.apply(this,arguments)}}()),r("body").on("click","#ajouter",(function(t){t.preventDefault(),a?n?r("#ajouter_modal").modal("show"):e.fire({icon:"error",title:"Cette Facture N'a Aucun Detail!"}):e.fire({icon:"error",title:"Veuillez selection une ligne!"})})),r("body").on("submit",".new_facture-form",function(){var e=s(regeneratorRuntime.mark((function e(s){var i,l,c,u,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),i=r(this).serialize(),(l=r("#ajouter_modal .modal-body .alert")).remove(),(c=r(".new_facture-form .btn i")).removeClass("fa-check-circle").addClass("fa-spinner fa-spin"),r(".new_facture-form #save_reglement").addClass("disabled").attr("disabled",!0),e.prev=7,e.next=10,axios.post("/facture/factures/ajouter_reglement/"+a,i);case 10:u=e.sent,f=u.data,r("#ajouter_modal .modal-body").prepend('<div class="alert alert-success">Reglement Bien Ajouter</div>'),r(this).trigger("reset"),r(".new_facture-form select").val("").trigger("change"),o(),c.addClass("fa-check-circle").removeClass("fa-spinner fa-spin"),r(".new_facture-form #save_reglement").removeClass("disabled").attr("disabled",!1),n=!1,t.ajax.reload(null,!1),window.open("/facture/factures/facture/"+a+"/"+f,"_blank"),e.next=31;break;case 23:e.prev=23,e.t0=e.catch(7),d=e.t0.response.data,console.log(e.t0,e.t0.response),l.remove(),r("#ajouter_modal .modal-body").prepend('<div class="alert alert-danger">'.concat(d,"</div>")),c.addClass("fa-check-circle").removeClass("fa-spinner fa-spin "),r(".new_facture-form #save_reglement").removeClass("disabled").attr("disabled",!1);case 31:setTimeout((function(){r("#ajouter_modal .modal-body .alert").remove()}),4e3);case 32:case"end":return e.stop()}}),e,this,[[7,23]])})));return function(a){return e.apply(this,arguments)}}()),r("body").on("click","#imprimer",function(){var t=s(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),a){t.next=4;break}return e.fire({icon:"error",title:"Veuillez selection une ligne!"}),t.abrupt("return");case 4:window.open("/facture/factures/printfacture/"+a,"_blank");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r("body").on("click","#releve",function(){var t=s(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),a){t.next=4;break}return e.fire({icon:"error",title:"Veuillez selection une ligne!"}),t.abrupt("return");case 4:window.open("/facture/factures/releve/"+a,"_blank");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r("body").on("click","#extraction",(function(){window.open("/facture/factures/extraction_factures","_blank")})),r("body").on("click","#extra_frais",(function(e){e.preventDefault(),r("#annee_extraction_frais").modal("show")})),r("body").on("click","#export_frais",(function(e){e.preventDefault();var a=r("#annee").val();window.open("/facture/factures/extraction_factures_by_annee/"+a,"_blank")})),r("#valider").on("click",function(){var n=s(regeneratorRuntime.mark((function n(s){var o,l,c,u,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.preventDefault(),a){n.next=4;break}return e.fire({icon:"error",title:"Veuillez selection une ligne!"}),n.abrupt("return");case 4:if((o=r("#valider i")).removeClass("fa-lock").addClass("fa-spinner fa-spin"),(l=new FormData).append("facture",a),1!=confirm("Vous voulez vraiment valider cette facture ?")){n.next=28;break}return n.prev=10,n.next=13,axios.post("/facture/factures/valider",l);case 13:c=n.sent,u=c.data,o.addClass("fa-lock").removeClass("fa-spinner fa-spin"),e.fire({icon:"success",title:u}),i(),a=!1,t.ajax.reload(null,!1),n.next=28;break;case 22:n.prev=22,n.t0=n.catch(10),console.log(n.t0),f=n.t0.response.data,o.addClass("fa-lock").removeClass("fa-spinner fa-spin"),e.fire({icon:"error",title:f});case 28:o.addClass("fa-lock").removeClass("fa-spinner fa-spin");case 29:case"end":return n.stop()}}),n,null,[[10,22]])})));return function(e){return n.apply(this,arguments)}}()),r("#new_fac_organisme").on("click",function(){var n=s(regeneratorRuntime.mark((function n(s){var o,i,l,c,u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.preventDefault(),a){n.next=4;break}return e.fire({icon:"error",title:'Veuillez selection une Facture Inscription "Payant"!'}),n.abrupt("return");case 4:if((o=new FormData).append("facture",a),1!=confirm('Vous voulez vraiment Cree une facture "Organisme" ?')){n.next=27;break}return(i=r("#new_fac_organisme i")).removeClass("fa-file-invoice-dollar").addClass("fa-spinner fa-spin"),n.prev=10,n.next=13,axios.post("/facture/factures/new_fac_organisme",o);case 13:l=n.sent,c=l.data,i.addClass("fa-file-invoice-dollar").removeClass("fa-spinner fa-spin"),e.fire({icon:"success",title:c}),a=!1,t.ajax.reload(null,!1),n.next=27;break;case 21:n.prev=21,n.t0=n.catch(10),console.log(n.t0),u=n.t0.response.data,i.addClass("fa-file-invoice-dollar").removeClass("fa-spinner fa-spin"),e.fire({icon:"error",title:u});case 27:case"end":return n.stop()}}),n,null,[[10,21]])})));return function(e){return n.apply(this,arguments)}}()),r("#new_fac_payant").on("click",function(){var n=s(regeneratorRuntime.mark((function n(s){var o,i,l,c,u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.preventDefault(),a){n.next=4;break}return e.fire({icon:"error",title:'Veuillez selection une Facture Inscription Source "PYT"!'}),n.abrupt("return");case 4:if((o=new FormData).append("facture",a),1!=confirm('Vous voulez vraiment Cree une facture "Payant" ?')){n.next=27;break}return(i=r("#new_fac_payant i")).removeClass("fa-file-invoice-dollar").addClass("fa-spinner fa-spin"),n.prev=10,n.next=13,axios.post("/facture/factures/new_fac_payant",o);case 13:l=n.sent,c=l.data,i.addClass("fa-file-invoice-dollar").removeClass("fa-spinner fa-spin"),e.fire({icon:"success",title:c}),a=!1,t.ajax.reload(null,!1),n.next=27;break;case 21:n.prev=21,n.t0=n.catch(10),console.log(n.t0),u=n.t0.response.data,i.addClass("fa-file-invoice-dollar").removeClass("fa-spinner fa-spin"),e.fire({icon:"error",title:u});case 27:case"end":return n.stop()}}),n,null,[[10,21]])})));return function(e){return n.apply(this,arguments)}}())}))}},e=>{e.O(0,[9755,8029,6515],(()=>{return a=2893,e(e.s=a);var a}));e.O()}]);