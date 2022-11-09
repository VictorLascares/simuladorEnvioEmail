document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar los elementos de la interfaz
  const entradaCorreo = document.querySelector("#email");
  const entradaAsunto = document.querySelector("#asunto");
  const entradaMensaje = document.querySelector("#mensaje");

  // Asignar eventos
  entradaCorreo.addEventListener("blur", validar);
  entradaAsunto.addEventListener("blur", validar);
  entradaMensaje.addEventListener("blur", validar);

  function validar(e) {
    console.log(e.target.value);
  }
});
