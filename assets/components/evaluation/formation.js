const { async } = require("regenerator-runtime");

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

let check;


$(document).ready(function () {
    $(" #enregistrer, #imprimer, #recalculer , #ExtracDip").attr(
        "disabled",
        true
    );

    typeSearch = 'all';
    console.log(typeSearch);
    $("#notes").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
    const enableButtons = () => {
        if (check == 1) {
            $("#enregistrer").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
            $("#imprimer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
            $("#recalculer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
            $("#ExtracDip").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
        } else if (check == 2) {
            $("#enregistrer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
            $("#imprimer").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
            $("#recalculer").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
            $("#ExtracDip").removeClass("btn-secondary").addClass("btn-info").attr("disabled", false);
        } else {
            $("#enregistrer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
            $("#imprimer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
            $("#recalculer").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
            $("#ExtracDip").removeClass("btn-info").addClass("btn-secondary").attr("disabled", true);
        }
    };

    $("select").select2();
    $("#etablissement").on("change", async function () {
        const id_etab = $(this).val();
        let response = "";
        if (id_etab != "") {
            const request = await axios.get("/api/formation/" + id_etab);
            response = request.data;
        }
        $("#formation").html(response).select2();
    });
    $("#formation").on("change", async function () {
        const id_formation = $(this).val();
        let response = "";
        if (id_formation != "") {
            const request = await axios.get("/api/annee/" + id_formation);
            response = request.data;
        }
        $("#annee").html(response).select2();
    });

    // Event listener to the custom filter
    $("#min").change(function () {
        table.draw();
    });

    $("#recherche").on("click", async function (e) {
        admissions = [];
        e.preventDefault();
        $("#list_etu").empty();
        let annee_id = $("#annee").val();
        if (annee_id == "" || !annee_id) {
            Toast.fire({
                icon: "error",
                title: "Veuillez selection une annee!",
            });
            return;
        }

        let formData = new FormData();
        formData.append("typeSearch", typeSearch);
        
        const icon = $("#recherche i");
        icon.removeClass("fa-search").addClass("fa-spinner fa-spin");
        try {
            const request = await axios.post(
                "/evaluation/formation/list/" + annee_id , formData   
            );
            let response = request.data;
            // console.log(response.html2);

            $("#infos").html(response.html1);
            // $("#list_etu").DataTable().destroy();
            if ($.fn.DataTable.isDataTable("#list_etu")) {
                $("#list_etu").DataTable().clear().destroy();
            }
            $("#list_etu")
                .html(response.html2)
                .DataTable({
                    scrollX: true,
                    language: datatablesFrench,
                    lengthMenu: [
                        [10, 15, 25, 50, 100, 20000000000000],
                        [10, 15, 25, 50, 100, "All"],
                    ],
                });
            check = response.check;
            // console.log(check)
            enableButtons();
            icon.addClass("fa-search").removeClass("fa-spinner fa-spin");

            element = '<div id="select-box" class="col-md-1"><label for="etablissement">Choix:</label> <select id="choice" class="form-control"><option value="all" default>All</option><option value="Full">Complet</option><option value="notFull">Incomplet</option></select> </div>';
            if($('body .first-card .row #select-box').length == 0) {
                $("body .first-card .row").append(element);
                $('select').select2()
            }
            
        } catch (error) {
            console.log(error);
            icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
            const message = error.response.data;
            Toast.fire({
                icon: "error",
                title: message,
            });
        }
    });
    var id_admission = "";
    // get etudiant notes
    const getEtudiantNotes = async () => {
        $('#editNotes #candidat_notes').html('');
        $('#editNotes  .alert').hide();
        try {
            const request = await axios.get('/evaluation/formation/getEtudiantNotes/'+id_admission);
            const data = request.data;
            $('#editNotes #candidat_notes').html(data['candidats_notes']);
            $('select').select2();
            // console.log(data);
    
        } catch (error) {
            // console.log(error.response.data);
        }  
    }

    // pop up triggre after double click tr
    $("body").on("dblclick", "#list_etu tbody tr", function () {
        if (id_admission) {
            $("#" + id_admission).removeClass('active_databales');
            id_admission = "";
        }else{
            id_admission = $(this).attr("id");
            $(this).addClass('active_databales');
        }
        
    });

    $("#notes").on("click", async function (e) {
        if (id_admission == "") {
            Toast.fire({
                icon: "error",
                title: "Veuillez selectionner un etudiant!",
            });
        }else{
            getEtudiantNotes();
            $('#editNotes').modal('show');
        }
    });

    $("#etatDip").on("click", async function (e) {
        if (id_admission == "") {
            Toast.fire({
                icon: "error",
                title: "Veuillez selectionner un etudiant!",
            });
            return
        }
        window.open('/evaluation/formation/impressionDiplome/'+id_admission, '_blank');
    });

    // Insertion des notes or modification
    $('body').on('keyup', '.noteExterne',async function(e){
        if (e.which === 13) { //on enter key
            let note = $(this).val();
            let annee = $(this).attr('annee');
            const icon = $(this).next().find('i');
            icon.removeClass("fa-check").addClass("fa-spinner fa-spin");
            icon.css('display','block');
            
            let formData = new FormData();
            formData.append("note", note); 
            formData.append("annee", annee); 
            formData.append("admission", id_admission); 
            try {
                const request = await axios.post(
                    "/evaluation/formation/add_notes", formData
                );
                let response = request.data;
                icon.addClass("fa-check").removeClass("fa-spinner fa-spin");
                icon.css('color','#2ecc71');
                $(this).css('border-color','#2ecc71');
                Toast.fire({
                    icon: "success",
                    title: response,
                });
                check = response.check;
                enableButtons();
                $("#recherche").trigger("click");
            } catch (error) {
                console.log(error);
                icon.addClass("fa-times").removeClass("fa-spinner fa-spin");
                icon.css('color','#c0392b');
                $(this).css('border-color','#c0392b');
                const message = error.response.data;
                Toast.fire({
                    icon: "error",
                    title: message,
                });
            }
            window.setTimeout(  
                function() {  
                    icon.css('display','none');
                    $('body .noteExterne').css('border-color','#696b7d');
                    $('#editNotes').modal('hide');
                },  
                2000
            );
        }
    });
// custom filter
    $("body ").on("change","#choice", async function(e){
        e.preventDefault();

        let annee_id = $("#annee").val();
        
        if($(this).val() != undefined){
            typeSearch = $(this).val() ;
        }

        console.log(typeSearch);
        let formData = new FormData();
        formData.append("typeSearch", typeSearch);

        try {
            // $("#list_etu").DataTable().destroy();
            if ($.fn.DataTable.isDataTable("#list_etu")) {
                $("#list_etu").DataTable().clear().destroy();
            }

            const request = await axios.post(
                "/evaluation/formation/list/" + annee_id , formData 
            );
            let response = request.data;
            

            $("#infos").html(response.html1);
            
            $("#list_etu")
                .html(response.html2)
                .DataTable({
                    scrollX: true,
                    language: datatablesFrench,
                    lengthMenu: [
                        [10, 15, 25, 50, 100, 20000000000000],
                        [10, 15, 25, 50, 100, "All"],
                    ],
                });
            check = response.check;
            // console.log(check)
            enableButtons();
            icon.addClass("fa-search").removeClass("fa-spinner fa-spin");

            element = '<div id="select-box" class="col-md-1"><label for="etablissement">Choix:</label> <select id="choice" class="form-control"><option value="all" default>All</option><option value="notFull">not Full</option></select> </div>';
            if($('body .first-card .row #select-box').length == 0) {
                $("body .first-card .row").append(element);
            }
            
        } catch (error) {
            console.log(error);
            icon.addClass("fa-search").removeClass("fa-spinner fa-spin");
            const message = error.response.data;
            Toast.fire({
                icon: "error",
                title: message,
            });
        }
    })

    $("#enregistrer").on("click", async function (e) {

        const icon = $("#enregistrer i");
        icon.removeClass("fa-check").addClass("fa-spinner fa-spin");
        try {
            const request = await axios.post(
                "/evaluation/formation/enregistrer"
            );
            let response = request.data;
            icon.addClass("fa-check").removeClass("fa-spinner fa-spin");
            Toast.fire({
                icon: "success",
                title: response.message,
            });
            check = response.check;
            enableButtons();
        } catch (error) {
            console.log(error);
            icon.addClass("fa-check").removeClass("fa-spinner fa-spin");
            const message = error.response.data;
            Toast.fire({
                icon: "error",
                title: message,
            });
        }
    });

    $("#imprimer").on("click", () => {
        window.open('/evaluation/formation/impression', '_blank');
    });

    // $("#affichage").on("change", function () {
    //     let affichage = $(this).val();
    //     $("#impression_list").attr(
    //         "href",
    //         $("#impression_list").attr("href").slice(0, -1) + affichage
    //     );
    //     $("#impression_clair").attr(
    //         "href",
    //         $("#impression_clair").attr("href").slice(0, -1) + affichage
    //     );
    //     $("#impression_anonymat").attr(
    //         "href",
    //         $("#impression_anonymat").attr("href").slice(0, -1) + affichage
    //     );
    //     $("#impression_rat").attr(
    //         "href",
    //         $("#impression_rat").attr("href").slice(0, -1) + affichage
    //     );
    // });

    $("#recalculer").on("click", async function () {
        const icon = $("#recalculer i");
        icon.removeClass("fa-redo-alt").addClass("fa-spinner fa-spin");
        try {
            const request = await axios.post(
                "/evaluation/formation/recalculer"
            );
            let response = request.data;
            icon.addClass("fa-redo-alt").removeClass("fa-spinner fa-spin");
            Toast.fire({
                icon: "success",
                title: response,
            });
        } catch (error) {
            console.log(error);
            icon.addClass("fa-redo-alt").removeClass("fa-spinner fa-spin");
            const message = error.response.data;
            Toast.fire({
                icon: "error",
                title: message,
            });
        }
    });

    // $("#ExtracDip").on('click',function(){
    //     window.open('/evaluation/formation/extractiondiplome', '_blank');
    // })

    admissions = [];

    $("body").on("click", "#list_etu tbody tr", function () {
        const input = $(this).find("input.check_etu");
        if (input.prop("checked") == true) {
            input.prop("checked", false);
            const index = admissions.indexOf(input.attr("id"));
            admissions.splice(index, 1);
        } else {
            input.prop("checked", true);
            admissions.push(input.attr("id"));
        }
        console.log(admissions);
    });
    // $('body').on('click','.check_etu',function (e) {
    //     e.preventDefault();

    // })

    $("body").on("click", ".check_all_formation", function () {
        // alert('test')
        admissions = [];
        const etu = $("body .check_etu");
        if ($(".check_all_formation").prop("checked") == true) {
            etu.prop("checked", true);
            etu.map(function () {
                admissions.push(this.value);
            });
            // console.log(admissions);
        } else {
            etu.prop("checked", false);
        }
        console.log(admissions);
    });

    $("#ExtracDip").on("click", async function (e) {
        console.log(admissions);
        e.preventDefault();
        if (admissions.length == 0) {
            Toast.fire({
                icon: "error",
                title: "Veuillez cochez une ou plusieurs ligne!",
            });
            return;
        }
        let formData = new FormData();
        formData.append("admissions", JSON.stringify(admissions));

        const icon = $("#ExtracDip i");
        icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");

        try {
            const request = await axios.post(
                "/evaluation/formation/extractiondiplome",
                formData
            );
            const response = request.data;

            window.open("/" + response.file, "_blank");
            icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
        } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
            Toast.fire({
                icon: "error",
                title: message,
            });
            icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
        }
    });
    
    $('body').on('click','#impression_diplome', async function (){
        if(!id_sanction){
            Toast.fire({
                icon: 'error',
                title: 'Veuillez selection un etudiant!',
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
    // $('body').on('click','#imprimer_diplome', async function (){
    //     if(!id_sanction){
    //         Toast.fire({
    //             icon: 'error',
    //             title: 'Veuillez selection un etudiant!',
    //         })
    //         return;
    //     }
        
    //     const icon = $("#etat_notification i");
    //     icon.removeClass('fa-print').addClass("fa-spinner fa-spin");
    //     try {
    //         const request = await axios.post('/conseil/disciplinaire/verification_notification/'+id_sanction);
    //         const response = request.data;
    //         icon.addClass('fa-print').removeClass("fa-spinner fa-spin ");
    //         window.open('/conseil/disciplinaire/etatNotification/'+id_sanction, '_blank');
    //       } catch (error) {
    //         const message = error.response.data;
    //         console.log(error, error.response);
    //         Toast.fire({
    //           icon: 'error',
    //           title: message,
    //         })
    //         icon.addClass('fa-print').removeClass("fa-spinner fa-spin ");
    //       }
    // })
});
