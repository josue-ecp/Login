// Seleccionamos el formulario por su ID
document.getElementById('formulario-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Obtén los valores introducidos en los campos de correo y contraseña
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    // Muestra los valores en la consola para verificar
    console.log('Correo Electrónico:', correo);
    console.log('Contraseña:', contrasena);

   
});
