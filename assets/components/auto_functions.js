/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */
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
});

$(document).ready(function () {
    console.log(new Date());

    setInterval(async function () {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();

        if (hours === 23 && minutes === 0) {
            await creationBorderaux();
        }
    }, 60000);

    async function creationBorderaux() {
        console.log('starting...');
        try {
            const request = await axios.get('/auto_functions/creationBorderaux');
            const data = request.data;
            console.log('done');
        } catch (error) {
            const message = error.response.data;
            console.log(error, error.response);
        }
    }
})