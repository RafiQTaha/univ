const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    })
    let id_sanction = false;
    let autreSanctions = [];
    $(document).ready(function  () {
    var table = $("#datatables_disciplinaire_inscription").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/conseil/disciplinaire/list",
        processing: true,
        serverSide: true,
        deferRender: true,
        responsive: true,
        scrollX: true,
        drawCallback: function () {
            // idInscription.forEach((e) => {
            //     $("body tr#" + e)
            //     .find("input")
            //     .prop("checked", true);
            // });
            $("body tr#" + id_sanction).addClass('active_databales')
        },
        preDrawCallback: function(settings) {
            if ($.fn.DataTable.isDataTable('#datatables_disciplinaire_inscription')) {
                var dt = $('#datatables_disciplinaire_inscription').DataTable();
    
                //Abort previous ajax request if it is still in process.
                var settings = dt.settings();
                if (settings[0].jqXHR) {
                    settings[0].jqXHR.abort();
                }
            }
        },
        language: datatablesFrench,
    });
    $("select").select2()
    $("#etablissement").on('change', async function (){
        const id_etab = $(this).val();
        table.columns().search("");
        table.columns(0).search(id_etab).draw();
        let response = ""
        if(id_etab != "") {
            const request = await axios.get('/api/formation/'+id_etab);
            response = request.data
        } else {
            $('#annee').html("").select2();
            $('#promotion').html("").select2();
        }
        $('#formation').html(response).select2();
    })
    $("#formation").on('change', async function (){
        const id_formation = $(this).val();
        table.columns().search("");
        let responseAnnee = ""
        let responsePromotion = ""
        if(id_formation != "") {
            table.columns(1).search(id_formation).draw();
            const requestPromotion = await axios.get('/api/promotion/'+id_formation);
            responsePromotion = requestPromotion.data
            const requestAnnee = await axios.get('/api/annee/'+id_formation);
            responseAnnee = requestAnnee.data
        } else {
            table.columns(0).search($("#etablissement").val()).draw();
        }
        $('#annee').html(responseAnnee).select2();
        $('#promotion').html(responsePromotion).select2();
    })
    
    $("#promotion").on('change', async function (){
        table.columns().search("");
        if($(this).val() != "") {
            if($("#annee").val() != "") {
                table.columns(3).search($("#annee").val());
            }
            table.columns(2).search($(this).val()).draw();
        } else {
            table.columns(1).search($("#formation").val()).draw();
        }

    })
    $("#annee").on('change', async function (){
        table.columns().search("");
        if($(this).val() != "") {
            table.columns(3).search($(this).val());
        } 
        table.columns(2).search($("#promotion").val()).draw();
    })

    $("#etudiant").select2({
        minimumInputLength: 3,  // required enter 3 characters or more
        allowClear: true,
        placeholder: 'Etudiant',
        language: "fr",
        ajax: {
           dataType: 'json',
           url: '/etudiant/rechercheavance/find',  
        //    delay: 5,  // ini bebas mau di pake atau tidak
           data: function(params) {
             return {
               search: params.term
             }
           },
           processResults: function (data, page) {
            var dataArray = data.map(function (item) {
                return {
                    text: item.code +" "+item.nom + " " +item.prenom,
                    id: item.id
                }
            })
            return {
                results: dataArray
            };
         },
       }
    })
    
   

    $("body").on("change", "#etudiant", async function(){
        
        try {
            const request = await axios.post('/etudiant/rechercheavance/findAnnee/'+$(this).val());
            let response = request.data
            $("#annee2").html(response).select2();

        } catch (error) {
            console.log(error)
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            });
        }
    })
    // $('body').on('click','#datatables_gestion_inscription tbody tr',function () {
    //     const input = $(this).find("input");
    //     if(input.is(":checked")){
    //         input.prop("checked",false);
    //         const index = idInscription.indexOf(input.attr("id"));
    //         idInscription.splice(index,1);
    //     }else{
    //         input.prop("checked",true);
    //         idInscription.push(input.attr("id"));
    //     }
    // })
    $('body').on('click','#datatables_disciplinaire_inscription tbody tr',function () {
        // const input = $(this).find("input");
        
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            id_sanction = null;
        } else {
            $("#datatables_disciplinaire_inscription tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_sanction = $(this).attr('id');
            getConvocationInfos()
            // getNotificationInfos();
        }
        console.log(id_sanction)
        
    })
    $("#convocation").on("click", () => {
        $("#convocation_modal .modal-body .alert").remove()
        $("#convocation_modal").modal("show")
    })
    
    $("#convocation_save").on("submit", async function (e){
        e.preventDefault();
        let formData = new FormData($(this)[0]);
        let modalAlert = $("#convocation_modal .modal-body .alert")
    
        modalAlert.remove();
        const icon = $("#convocation_save .btn i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        
        try {
          const request = await axios.post('/conseil/disciplinaire/ajouter_convocation', formData);
          const response = request.data;
          $("#convocation_modal .modal-body").prepend(
            `<div class="alert alert-success">
                <p>${response}</p>
              </div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
          $("#convocation_save")[0].reset();
          table.ajax.reload(null, false)
        } catch (error) {
          const message = error.response.data;
          console.log(error, error.response);
          modalAlert.remove();
          $("#convocation_modal .modal-body").prepend(
            `<div class="alert alert-danger">${message}</div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        }
    })

    $("#validation").on("click", async () => {
        if(!id_sanction){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
        const icon = $("#validation  i");
        icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
        
        try {
            const request = await axios.post('/conseil/disciplinaire/convocation_validation/'+id_sanction);
            const response = request.data;
            id_sanction = false;
            table.ajax.reload(null, false)
            Toast.fire({
                icon: 'success',
                title: response,
            })
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
        } catch (error) {
          const message = error.response.data;
          console.log(error, error.response);
          Toast.fire({
            icon: 'error',
            title: message,
          })
          icon.addClass('fa-check').removeClass("fa-spinner fa-spin ");
        }
        
    })
    
    $("#devalidation").on("click", async () => {     
        if(!id_sanction){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
        var confirmation = confirm('Vous voulez vraiment devalider cette convocation ?');
        if (confirmation == 1) {
            const icon = $("#devalidation i");
            icon.removeClass('fa-times').addClass("fa-spinner fa-spin");
            
            let formData = new FormData();
            formData.append("id_sanction",  id_sanction);
            try {
                const request = await axios.post('/conseil/disciplinaire/convocation_devalidation',formData);
                const response = request.data;
                id_sanction = false;
                table.ajax.reload(null, false)
                icon.addClass('fa-times').removeClass("fa-spinner fa-spin");
                Toast.fire({
                    icon: 'success',
                    title: response,
                })
            }catch (error) {
                const message = error.response.data;
                console.log(error, error.response);
                Toast.fire({
                    icon: 'error',
                    title: message,
                })
                icon.addClass('fa-times').removeClass("fa-spinner fa-spin");
            }
        }
    })

    $("#sans_suite").on("click", async () => {
        if(!id_sanction){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
        const icon = $("#sans_suite  i");
        icon.removeClass('fa-undo').addClass("fa-spinner fa-spin");
        
        try {
            const request = await axios.post('/conseil/disciplinaire/convocation_sans_suite/'+id_sanction);
            const response = request.data;
            // id_sanction = false;
            // table.ajax.reload(null, false)
            Toast.fire({
                icon: 'success',
                title: response,
            })
            icon.addClass('fa-undo').removeClass("fa-spinner fa-spin ");
        } catch (error) {
          const message = error.response.data;
          console.log(error, error.response);
          Toast.fire({
            icon: 'error',
            title: message,
          })
          icon.addClass('fa-undo').removeClass("fa-spinner fa-spin ");
        }
        
    })

    // $("#notification").on("click", () => {
    //     if(!id_sanction){
    //       Toast.fire({
    //         icon: 'error',
    //         title: 'Veuillez selection une ligne!',
    //       })
    //       return;
    //     }
    //     $("#notification_modal .modal-body .alert").remove()
    //     $("#notification_modal").modal("show")
    // })
    
    
    
    // $("#notification_save").on("submit", async function (e){
    //     e.preventDefault();
    //     let formData = new FormData($(this)[0]);
    //     let modalAlert = $("#notification_modal .modal-body .alert")
    //     modalAlert.remove();
    //     const icon = $("#notification_save .submitBtn i");
    //     icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        
    //     let inputs = $('#autre_sanction_text input');
    //     var autreSanctions = []
    //     inputs.map(async function(input)  {
    //         if( $.trim($(this).val())  != "") {
    //             autreSanctions.push($(this).val());
    //         } 
    //     }) 
    //     console.log(autreSanctions)
    //     formData.append("newSanctions",  JSON.stringify(autreSanctions));
    //     // return
        
    //     try {
    //       const request = await axios.post('/conseil/disciplinaire/ajouter_notification/'+id_sanction, formData);
    //       const response = request.data;
    //       $("#notification_modal .modal-body").prepend(
    //         `<div class="alert alert-success">
    //             <p>${response}</p>
    //           </div>`
    //       );
    //       icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
    //       $("#notification_modal select").val("").select2();
    //       $("#notification_save")[0].reset();
    //       table.ajax.reload(null, false)
    //     } catch (error) {
    //       const message = error.response.data;
    //       console.log(error, error.response);
    //       modalAlert.remove();
    //       $("#notification_modal .modal-body").prepend(
    //         `<div class="alert alert-danger">${message}</div>`
    //       );
    //       icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
    //     }
    // })

    $('body').on('click','#etat_convocation', function (){
        if(!id_sanction){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
        window.open('/conseil/disciplinaire/etatConvocation/'+id_sanction, '_blank');
    })
    
    $('body').on('click','#annuler_convocation', async function (){
        if(!id_sanction){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
        var confirmation = confirm('Vous voulez vraiment annuler cette enregistrement ?');
        if (confirmation == 1) {
            const icon = $("#annuler_convocation i");
            icon.removeClass('fa-trash').addClass("fa-spinner fa-spin");
            
            let formData = new FormData();
            formData.append("id_sanction",  id_sanction);
            try {
                const request = await axios.post('/conseil/disciplinaire/annuler_convocation',formData);
                const response = request.data;
                id_sanction = false;
                table.ajax.reload(null, false)
                icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
                Toast.fire({
                    icon: 'success',
                    title: response,
                })
            }catch (error) {
                const message = error.response.data;
                console.log(error, error.response);
                Toast.fire({
                    icon: 'error',
                    title: message,
                })
                icon.addClass('fa-trash').removeClass("fa-spinner fa-spin");
            }
        }
    })
    
    /////////// start Updating Convocation Block ///////////////

    const getConvocationInfos = () => {
        let modalAlert =  $("#modifier_org-modal .modal-body .alert");
        modalAlert.remove();
        const icon = $("#modifier_convocation i");
        icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
        axios.get('/conseil/disciplinaire/getconvocationInfos/'+id_sanction)
        .then(success => {
            icon.removeClass('fa-spinner fa-spin').addClass("fa-edit");
            // console.log(success);
            $('#convocation_update_modal #convocation_update').html(success.data)
            $('#convocation_update_modal #convocation_update select').select2()
        })
        .catch(err => {
            // console.log(err)
            icon.removeClass('fa-spinner fa-spin ').addClass("fa-edit");
        })
    }
    $('body').on('click','#modifier_convocation',function (e) {
        e.preventDefault();
        if(!id_sanction){
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!',
            })
            return;
        }
        $("#convocation_update_modal").modal('show');
    });
    
    $("body").on("submit", '#convocation_update', async function (e) {
        e.preventDefault();
        // alert('test');
        let formdata = $(this).serialize()
        let modalAlert =  $("#convocation_update_modal .modal-body .alert");
        modalAlert.remove();
        const icon = $("#convocation_update .btn i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        try{
            const request = await  axios.post('/conseil/disciplinaire/modifier_convocation/'+id_sanction,formdata)
            const data = request.data;
            $("#convocation_update_modal .modal-body").prepend(
                `<div class="alert alert-success">${data}</div>`
            ); 
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
            // id_sanction = false;
            // table_reglement.ajax.reload(null, false);
            // window.open('/conseil/disciplinaire/reglementprint/'+id_reglement, '_blank');
        }catch(error){
            const message = error.response.data;
            console.log(error, error.response);
            modalAlert.remove();
            $("#convocation_update_modal .modal-body").prepend(
                `<div class="alert alert-danger">${message}</div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        }
        setTimeout(() => {
           $("#convocation_update_modal .modal-body .alert").remove();
        }, 4000);
    });
    /////////// End Updating Convocation Block ///////////////

    const getNotificationInfos = () => {
        let modalAlert =  $("#modifier_org-modal .modal-body .alert");
        modalAlert.remove();
        const icon = $("#modifier_notification i");
        icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
        axios.get('/conseil/disciplinaire/getnotificationInfos/'+id_sanction)
        .then(success => {
            icon.removeClass('fa-spinner fa-spin').addClass("fa-edit");
            // console.log(success);
            $('#notification_update_modal #notification_update').html(success.data)
            $('#notification_update_modal #notification_update select').select2()
            $("#notification_update_modal").modal('show');
        })
        .catch(err => {
            // console.log(err)
            icon.removeClass('fa-spinner fa-spin ').addClass("fa-edit");
        })
    }
    
    $("#agressions").on('change', async function (){
        const id_agression = $(this).val();
        let incident = ""
        let sanction = ""
        if(id_agression != "") {
            const request = await axios.get('/api/sousagression/'+id_agression);
            incident = request.data
            const requestsanction = await axios.get('/api/sanction/'+id_agression);
            sanction = requestsanction.data
        } else {
            $('#incident').html("").select2();
            $('#sanction').html("").select2();
        }
        $('#incident').html(incident).select2();
        $('#sanction').html(sanction).select2();
    })
    $("body").on('change','#Modifieragressions', async function (){
        // alert('hi');
        const id_agression = $(this).val();
        let incident = ""
        let sanction = ""
        if(id_agression != "") {
            const request = await axios.get('/api/sousagression/'+id_agression);
            incident = request.data
            const requestsanction = await axios.get('/api/sanction/'+id_agression);
            sanction = requestsanction.data

            console.log(sanction);
        } else {
            $('#Modifierincident').html("").select2();
            $('#Modifiersanction').html("").select2();
        }
        $('#Modifierincident').html(incident).select2();
        $('#Modifiersanction').html(sanction).select2();
    })

    $('body').on('click','#newSanction', function (){
        let newSanction = $(this).parent().parent();
        newSanction.append(
            `<div class="d-flex  mt-2">
            <input type="text" name="autre_sanction" id="autre_sanction" class="form-control" placeholder="Autre Sanction">
            <button type="button" class="btn btn-danger  ml-2" id="removenewSanction"><i class="fas fa-minus"></i></button>
          </div>`
        );
        console.log(newSanction)
    })
    $('body').on('click','#removenewSanction', function (){
        $(this).parent().remove();
    })

    $('body').on('click','#ModifnewSanction', function (){
        let newSanction = $(this).parent().parent();
        newSanction.append(
            `<div class="d-flex  mt-2">
            <input type="text" name="autre_sanction" id="autre_sanction" class="form-control" placeholder="Autre Sanction">
            <button type="button" class="btn btn-danger  ml-2" id="ModifremovenewSanction"><i class="fas fa-minus"></i></button>
          </div>`
        );
        console.log(newSanction)
    })
    $('body').on('click','#ModifremovenewSanction', function (){
        $(this).parent().remove();
    })
    $('body').on('click','#modifier_notification',function (e) {
        e.preventDefault();
        // alert('hi');
        if(!id_sanction){
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une ligne!',
            })
            return;
        }
        getNotificationInfos()
    });
    $("body").on("submit", '#notification_update', async function (e) {
        e.preventDefault();
        // alert('test');
        let formData = new FormData($(this)[0]);

        let inputs = $('#notification_update #autre_sanction_text input');
        var autreSanctions = []
        inputs.map(async function(input)  {
            if( $.trim($(this).val())  != "") {
                autreSanctions.push($(this).val());
            } 
        }) 
        console.log(autreSanctions)
        formData.append("newSanctions",  JSON.stringify(autreSanctions));

        let modalAlert =  $("#notification_update_modal .modal-body .alert");
        modalAlert.remove();
        const icon = $("#notification_update .submitBtn i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        try{
            const request = await  axios.post('/conseil/disciplinaire/modifier_notification/'+id_sanction,formData)
            const data = request.data;
            $("#notification_update_modal .modal-body").prepend(
                `<div class="alert alert-success">${data}</div>`
            ); 
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
            // id_sanction = false;
            // table_reglement.ajax.reload(null, false);
            // window.open('/conseil/disciplinaire/reglementprint/'+id_reglement, '_blank');
        }catch(error){
            const message = error.response.data;
            console.log(error, error.response); 
            modalAlert.remove();
            $("#notification_update_modal .modal-body").prepend(
                `<div class="alert alert-danger">${message}</div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
        }
        setTimeout(() => {
           $("#notification_update_modal .modal-body .alert").remove();
        }, 4000);
    });
    
    $('body').on('click','#etat_notification', async function (){
        if(!id_sanction){
          Toast.fire({
            icon: 'error',
            title: 'Veuillez selection une ligne!',
          })
          return;
        }
        
        const icon = $("#etat_notification i");
        icon.removeClass('fa-print').addClass("fa-spinner fa-spin");
        try {
            const request = await axios.post('/conseil/disciplinaire/verification_notification/'+id_sanction);
            const response = request.data;
            icon.addClass('fa-print').removeClass("fa-spinner fa-spin ");
            window.open('/conseil/disciplinaire/etatNotification/'+id_sanction, '_blank');
          } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            Toast.fire({
              icon: 'error',
              title: message,
            })
            icon.addClass('fa-print').removeClass("fa-spinner fa-spin ");
          }
    })
    $('body').on('click','#extraction_historique',function (e) {
        e.preventDefault();
        window.open('/conseil/disciplinaire/extraction_historique', '_blank');
    });
})

