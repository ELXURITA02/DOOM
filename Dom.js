// Importar las funciones necesarias
import { crearDiv } from "./div.js";
import { crearTarjeta } from "./tarjeta.js";

// Crear elementos HTML
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const form = document.createElement('form');
form.classList.add('login-form');
container.appendChild(form);

const heading = document.createElement('h2');
heading.textContent = 'Iniciar Sesión';
form.appendChild(heading);

const usernameInput = document.createElement('input');
usernameInput.setAttribute('type', 'text');
usernameInput.setAttribute('placeholder', 'Nombre de usuario');
usernameInput.setAttribute('required', true);
form.appendChild(usernameInput);

const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('placeholder', 'Contraseña');
passwordInput.setAttribute('required', true);
form.appendChild(passwordInput);

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Iniciar Sesión';
form.appendChild(submitButton);

const forgotPasswordButton = document.createElement('button');
forgotPasswordButton.setAttribute('type', 'button');
forgotPasswordButton.textContent = '¿Olvidaste tu contraseña?';
form.appendChild(forgotPasswordButton);

// Estilos CSS
const style = document.createElement('style');
style.textContent = `
    body {
        font-family: 'Arial', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background: linear-gradient(to right, #ff4e50, #f9d423);
    }

    .container {
        width: 300px;
        padding: 20px;
        background-color: transparent;
        border-radius: 10px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
        overflow: hidden;
    }

    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 20px;
        transform: translateY(-50px);
        transition: transform 0.3s ease;
    }

    .login-form.active {
        transform: translateY(0);
    }

    .login-form h2 {
        margin-bottom: 20px;
        color: #ff4e50;
        font-size: 24px;
        text-transform: uppercase;
    }

    .login-form input {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: none;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.7);
        font-size: 16px;
        color: #333;
        transition: background-color 0.3s ease;
    }

    .login-form input::placeholder {
        color: #aaa;
    }

    .login-form input:focus {
        outline: none;
        background-color: rgba(255, 255, 255, 0.9);
    }

    .login-form button {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: #f9d423;
        color: #fff;
        font-size: 18px;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .login-form button:hover {
        background-color: #ff4e50;
    }
`;
body.appendChild(style);

// Agregar la clase 'active' al formulario para activar la animación de entrada
setTimeout(() => {
    document.querySelector('.login-form').classList.add('active');
}, 500);
