const usuarios = [
    { user: "marco", pass: "123", rol: "admin" },
    { user: "ana", pass: "123", rol: "empleado" },
    { user: "luis", pass: "123", rol: "empleado" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();// Evita que la página se recargue
    
    const userInput = document.getElementById('usuario').value;
    const passInput = document.getElementById('password').value;

    // Buscar si el usuario existe y la contraseña coincide
    const usuarioEncontrado = usuarios.find(u => u.user === userInput && u.pass === passInput);

        // Simulación de validación de roles
    if (usuarioEncontrado) {
        if (usuarioEncontrado.rol === "admin") {
             // Redirige a la carpeta de administrador
             // AGREGAMOS ../ para salir de la carpeta 'auth' antes de entrar a 'admin'
            window.location.href = "../admin/resumen.html";
        } else {
              // Redirige a la carpeta de empleado
              // AGREGAMOS ../ para salir de la carpeta 'auth' antes de entrar a 'empleado'
            window.location.href = "../empleado/inicio_empleado.html";
        }
    } else {
        document.getElementById('mensaje-error').innerText = "Usuario o clave incorrecta";
    }
});