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

    let rattrapage = 0;
    let id_epreuve = null;
    let idEpreuves = [];
    let idInscriptions = [];
    
$(document).ready(function  () {
    var tableEpreuveNormal = $("#list_epreuve_normal").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/administration/epreuve/list/normal",
        processing: true,
        serverSide: true,
        deferRender: true,
        drawCallback: function () {
            idEpreuves.forEach((e) => {
                $("body tr#" + e)
                .find("input")
                .prop("checked", true);
            });
            $("body tr#" + id_epreuve).addClass('active_databales')

        },
        language: {
            url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
        },
        });
    var tableEpreuveRattrapage = $("#list_epreuve_rattrapage").DataTable({
        lengthMenu: [
            [10, 15, 25, 50, 100, 20000000000000],
            [10, 15, 25, 50, 100, "All"],
        ],
        order: [[0, "desc"]],
        ajax: "/administration/epreuve/list/rattrapage",
        processing: true,
        serverSide: true,
        deferRender: true,
        drawCallback: function () {
            idEpreuves.forEach((e) => {
                $("body tr#" + e)
                .find("input")
                .prop("checked", true);
            });
            $("body tr#" + id_epreuve).addClass('active_databales')

        },
        language: {
            url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
        },
    });
    $('body').on('click','#list_epreuve_normal tbody tr',function () {
        const input = $(this).find("input");
        if(input.is(":checked")){
            input.prop("checked",false);
            const index = idEpreuves.indexOf(input.attr("id"));
            idEpreuves.splice(index,1);
        }else{
            input.prop("checked",true);
            idEpreuves.push(input.attr("id"));
        }
    })
    $('body').on('click','#list_epreuve_rattrapage tbody tr',function () {
        const input = $(this).find("input");
        if(input.is(":checked")){
            input.prop("checked",false);
            const index = idEpreuves.indexOf(input.attr("id"));
            idEpreuves.splice(index,1);
        }else{
            input.prop("checked",true);
            idEpreuves.push(input.attr("id"));
        }
    })
    $('body').on('dblclick','#list_epreuve_normal tbody tr',function () {
        // const input = $(this).find("input");
        
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            $('#inscription-modal').attr('disabled', true);

            id_epreuve = null;
        } else {
            $("#list_epreuve_normal tbody tr").removeClass('active_databales');
            $("#list_epreuve_rattrapage tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_epreuve = $(this).attr('id');
           
        }
        
    })
    $('body').on('dblclick','#list_epreuve_rattrapage tbody tr',function () {
        // const input = $(this).find("input");
        
        if($(this).hasClass('active_databales')) {
            $(this).removeClass('active_databales');
            $('#inscription-modal').attr('disabled', true);

            id_epreuve = null;
        } else {
            $("#list_epreuve_normal tbody tr").removeClass('active_databales');
            $("#list_epreuve_rattrapage tbody tr").removeClass('active_databales');
            $(this).addClass('active_databales');
            id_epreuve = $(this).attr('id');
           
        }
        
    })
    $('.nav-pills a').on('click', function (e) {
        $(this).tab('show')
        id_epreuve = null;
        idEpreuves = [];
        $("#list_epreuve_normal tbody tr").removeClass('active_databales');
        $("#list_epreuve_rattrapage tbody tr").removeClass('active_databales');
        $("input").prop("checked",false);
        if ($(this).html() == 'Session normal') {
            rattrapage = 0;

        } else {
            rattrapage = 1;
        }   
    
    })
    $("#import_epreuve").on("click", () => {  
        $("#import_en_masse").modal("show")
        $("#import_en_masse .modal-body .alert").remove()
    })
    $("#epreuve_canvas").on('click', function () {
        window.open("/administration/epreuve/canvas", '_blank');
    })

    $("#import_epreuve_save").on("submit", async function(e) {
        e.preventDefault();
        let formData = new FormData($(this)[0]);
        let modalAlert = $("#import_en_masse .modal-body .alert")
    
        modalAlert.remove();
        const icon = $("#epreuve_enregistre i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        
        try {
          const request = await axios.post('/administration/epreuve/import', formData);
          const response = request.data;
          $("#import_en_masse .modal-body").prepend(
            `<div class="alert alert-success">
                <p>${response}</p>
              </div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
          tableEpreuveNormal.ajax.reload()
          tableEpreuveRattrapage.ajax.reload()
        } catch (error) {
          const message = error.response.data;
          console.log(error, error.response);
          modalAlert.remove();
          $("#import_en_masse .modal-body").prepend(
            `<div class="alert alert-danger">${message}</div>`
          );
          icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
          
        }
    })

    $("#affilier_etudiant").on('click' , async function (e) {
        e.preventDefault();
        if(rattrapage === 0) {
            // session normal
            if(idEpreuves.length ==0) {
                Toast.fire({
                    icon: 'error',
                    title: 'Veuillez cochez une ou plusieurs ligne!',
                })
                return;
            }
            const icon = $("#affilier_etudiant i");
            icon.removeClass('fa-link').addClass("fa-spinner fa-spin");
            
            try {
                let formData = new FormData();
                formData.append("epreuves", JSON.stringify(idEpreuves))
                const request = await axios.post('/administration/epreuve/affiliation_normale', formData);
                const response = request.data;
                icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");
                if(response.total > 0) {
                    window.open("/"+response.zipname ,"_blank");
                } else {
                    Toast.fire({
                        icon: 'info',
                        title: "Epreuves déja affilier ou valider",
                    }) 
                }
                tableEpreuveNormal.ajax.reload()
                tableEpreuveRattrapage.ajax.reload()
            } catch (error) {
                console.log(error)
                const message = error.response.data;
                Toast.fire({
                    icon: 'error',
                    title: message,
                }) 
                icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");
                
            }
        } else {
            if(!id_epreuve) {
                Toast.fire({
                    icon: 'error',
                    title: 'Veuillez selection une ligne!',
                })
                return;
            }
            const icon = $("#affilier_etudiant i");
            icon.removeClass('fa-link').addClass("fa-spinner fa-spin");
            
            
            try {
                const request = await axios.get('/administration/epreuve/etudiants/'+id_epreuve);
                const response = request.data;    
                icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");

                $(".list_etudiants").html(response)
                $(".check_all_etudiant").prop("checked",false);
                $("#affilier_list_etudiant").modal("show");
                $("#affilier_list_etudiant .modal-body .alert").remove();
                
            } catch (error) {
                console.log(error)
                const message = error.response.data;
                Toast.fire({
                    icon: 'error',
                    title: message,
                })
                icon.addClass('fa-link').removeClass("fa-spinner fa-spin ");
                
            }

        }
    })

    $('body').on('click','.check_etudiant',function () {
        const index = idInscriptions.indexOf($(this).val());
        if(index != -1){
            idInscriptions.splice(index,1);
        }else{
            idInscriptions.push($(this).val());
        }
        console.log(idInscriptions);

    })
    $('body').on('click','.check_all_etudiant',function () {
        idInscriptions = [];
        const inscriptions = $(".check_etudiant");
        if($(".check_all_etudiant").prop('checked') == true) {
            inscriptions.prop("checked",true);
            inscriptions.map(function() {
                idInscriptions.push(this.value);
             });
        } else {
            inscriptions.prop("checked",false);
        }
        console.log(idInscriptions);
    })

    $("#save_list_etudiant").on('click', async function(e) {
        e.preventDefault();
        const icon = $("#save_list_etudiant i");
        icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
        let modalAlert = $("#affilier_list_etudiant .modal-body .alert")
        modalAlert.remove();
        let formData = new FormData();
        formData.append("idInscriptions", JSON.stringify(idInscriptions))
        formData.append("idEpreuve", id_epreuve)

        try {
            const request = await axios.post('/administration/epreuve/affiliation_rattrapage', formData);
            const response = request.data;    
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
            $("#affilier_list_etudiant .modal-body").prepend(
                `<div class="alert alert-success">
                    <p>${response}</p>
                  </div>`
            );
            $(".list_etudiants").empty()
            tableEpreuveRattrapage.ajax.reload();
            tableEpreuveNormal.ajax.reload();
        } catch (error) {
            console.log(error)
            const message = error.response.data;
            modalAlert.remove();
            $("#affilier_list_etudiant .modal-body").prepend(
                `<div class="alert alert-danger">${message}</div>`
            );
            icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin");
            
        }
    })

    $("#cloture_epreuve").on('click', async function(e) {
        e.preventDefault();
        if(idEpreuves.length ==0) {
            Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!',
            })
            return;
        }
        const icon = $("#cloture_epreuve i");
        icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
        
        try {
            let formData = new FormData();
            formData.append("epreuves", JSON.stringify(idEpreuves))
            const request = await axios.post('/administration/epreuve/cloturer', formData);
            const response = request.data;
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin ");
            Toast.fire({
                icon: 'success',
                title: response,
            }) 
            tableEpreuveNormal.ajax.reload()
            tableEpreuveRattrapage.ajax.reload()
        } catch (error) {
            console.log(error)
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            }) 
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin ");
            
        }
    })
    $("#decloturer_epreuve").on('click', async function(e) {
        e.preventDefault();
        if(idEpreuves.length ==0) {
            Toast.fire({
                icon: 'error',
                title: 'Veuillez cochez une ou plusieurs ligne!',
            })
            return;
        }
        const icon = $("#decloturer_epreuve i");
        icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
        
        try {
            let formData = new FormData();
            formData.append("epreuves", JSON.stringify(idEpreuves))
            const request = await axios.post('/administration/epreuve/decloturer', formData);
            const response = request.data;
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin ");
            Toast.fire({
                icon: 'success',
                title: response,
            }) 
            tableEpreuveNormal.ajax.reload()
            tableEpreuveRattrapage.ajax.reload()
        } catch (error) {
            console.log(error)
            const message = error.response.data;
            Toast.fire({
                icon: 'error',
                title: message,
            }) 
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin ");
            
        }
    })

})
    