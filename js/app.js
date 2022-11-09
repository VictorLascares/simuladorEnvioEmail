document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar los elementos de la interfaz
  const formulario = document.querySelector("#formulario");
  const entradaCorreo = document.querySelector("#email");
  const entradaAsunto = document.querySelector("#asunto");
  const entradaMensaje = document.querySelector("#mensaje");

  // Asignar eventos
  entradaCorreo.addEventListener("blur", validar);
  entradaAsunto.addEventListener("blur", validar);
  entradaMensaje.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
    } else {
      console.log("Hay algo");
    }
  }

  function mostrarAlerta(mensaje, referencia) {
    // Generar alerta
    const alerta = referencia.querySelector(".error");

    if (!alerta) {
      const error = document.createElement("p");
      error.textContent = mensaje;
      error.classList.add("error", "bg-red-400", "text-white", "p-2", "text-center");
      referencia.appendChild(error);

      setTimeout(() => {
        error.remove();
      }, 3000)
    }
  }
});
