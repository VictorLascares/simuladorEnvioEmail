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
      mostrarAlerta();
    } else {
      console.log("Hay algo");
    }
  }

  function mostrarAlerta() {
    // Generar alerta
    const alerta = document.querySelector(".error");

    if (!alerta) {
      const error = document.createElement("p");
      error.textContent = "Todos los campos son obligatorios";
      error.classList.add("error", "bg-red-400", "text-white", "p-2", "text-center");
      formulario.appendChild(error);
    }
  }
});
