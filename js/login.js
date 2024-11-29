function showAlertError(){
    alert("Por favor, completa todos los campos antes de enviar el formulario.");
}

function showAlertSuccess(){
    alert("¡Inicio de sesión exitoso!");
}

//Event listener al botón de ingresar
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('boton_ingresar').addEventListener('click', validarForm);
});

function validarForm(event){
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();
    
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("contraseña").value;

    // Revisa que los campos no estan vacios
    if (username === "" || password === "") {
        // Mostrar el error
        showAlertError();
    } else { 
        // Mostrar alerta de éxito
        showAlertSuccess();

        // Guardar la sesión        
         localStorage.setItem('userEmail', username); 
        // Redirige al inicio
        window.location.href = "index.html"; 
    }    
}