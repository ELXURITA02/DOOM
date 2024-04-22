import { crearDiv } from "./div.js";
import { crearTarjeta } from "./tarjeta.js";
import { crearContainer } from "./container.js"; // Supongamos que tienes una función para crear el contenedor principal

// Código del formulario de inicio de sesión
const codigoInicioSesion = `
    <form class="login-form">
        <h2>Iniciar Sesión</h2>
        <input type="text" placeholder="Nombre de usuario" required>
        <input type="password" placeholder="Contraseña" required>
        <button type="submit">Iniciar Sesión</button>
        <button type="button">¿Olvidaste tu contraseña?</button>
    </form>
`;

// Crear el contenido de la primera división usando el formulario de inicio de sesión
const division1 = crearDiv(codigoInicioSesion);
document.body.appendChild(division1);

// Si tienes otras divisiones, puedes crearlas de la misma manera
