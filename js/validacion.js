document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Debes ingresar tu nombre');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
      alert('Debes ingresar tu apellido');
      return;
    }
    var email = document.getElementById('email').value;
    if (email.length == 0) {
      alert('Debes ingresar tu email');
      return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
      alert('Debes ingresar un mensaje');
      return;
    }
    this.submit();
  }