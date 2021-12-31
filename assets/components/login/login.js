import '../../styles/components/login/login.scss'
import $ from 'jquery';
import axios from 'axios';

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

$("#singup").on('submit', async (e) => {
    e.preventDefault();
    let valide = true
    if($('#singup_password').val() !== $('#singup_cpassword').val()) {
        $(".singup__error").html('Mot de passe sont pas correct !')
        valide = false
    }
    if(valide) {
        const data = new FormData();
        data.append('email', $('#singup_email').val())
        data.append('username', $('#singup_username').val())
        data.append('password', $('#singup_password').val())
        try {
            const request = await axios.post('/register', data)
            $(".singup__error").html('');
            $(".singup__success").html("Veuillez contacter l'administrateur pour activer votre compte")
            
        } catch (error) {
            console.log(error)
        }
    }
});