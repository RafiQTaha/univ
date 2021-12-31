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

$(document).ready(function () {
  var table = $('#datables_epreuve').DataTable({
    lengthMenu: [
      [10, 5, 25, 50, 100, -1],
      [10, 5, 25, 50, 100, 'All'],
    ],
    order: [[0, 'desc']],
    ajax: '/epreuve/epreuve',
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: '//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json',
    },
  })
  var tableInscription = $('#datables_note_inscription').DataTable({
    lengthMenu: [
      [10, 5, 25, 50, 100, -1],
      [10, 5, 25, 50, 100, 'All'],
    ],
    order: [[0, 'desc']],
    ajax: '/epreuve/inscription',
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: '//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json',
    },
  })
  $('.nav-pills a').on('click', function (e) {
    e.preventDefault()
    console.log()
    $(this).tab('show')
    if ($(this).html() == 'Inscription') {
      $('.epreuve_action').hide('fast')
    } else {
      $('.epreuve_action').show('fast')
    }
  })

  let idEpreuve = false
  $('body').on('click', '#datables_epreuve tbody tr', function () {
    $('#datables_epreuve tr').removeClass('active_databales')
    $(this).addClass('active_databales')

    idEpreuve = $(this).attr('id')
  })

  $('.canvas_epreuve_capitalise').on('click', function () {
    if (!idEpreuve) {
      Toast.fire({
        icon: 'error',
        title: 'Selection une epreuve',
      })
      return
    }
    $('.canvas_epreuve_capitalise i')
      .removeClass('fa-file-download')
      .addClass('fa-spinner fa-spin')
    window.open('/epreuve/canvas/' + idEpreuve, '_blank')
    $('.canvas_epreuve_capitalise i')
      .addClass('fa-file-download')
      .removeClass('fa-spinner fa-spin')
  })

  $('#modal').on('click', () => {
    $('.modal-body .alert').remove()
    $('#fire-modal-1').modal('show')
  })

  $('#import_epreuve').on('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', $('.myfile').prop('files')[0])
    const icon = $('#import_epreuve .btn i')
    icon.removeClass('fa-check-circle').addClass('fa-spinner fa-spin')
    try {
      const request = await axios.post('/epreuve/import', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      const data = await request.data
      $('.modal-body').prepend(
        `<div class="alert alert-success">
            <p>Nombre d'insertion:<b>${data}</b></p>
          </div>`,
      )

      icon.addClass('fa-check-circle').removeClass('fa-spinner fa-spin')
      tableInscription.ajax.reload()
    } catch (e) {
      const message = e.response.data.detail
      $('.modal-body .alert').remove()
      $('.modal-body').prepend(
        `<div class="alert alert-danger">${message}</div>`,
      )
      icon.addClass('fa-check-circle').removeClass('fa-spinner fa-spin ')
    }
    $('#import_epreuve')[0].reset()
  })
})
