document.addEventListener("DOMContentLoaded", () => {
  const correo = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  // Seleccionar los elementos de la interfaz
  const formulario = document.querySelector("#formulario");
  const entradaCorreo = document.querySelector("#email");
  const entradaAsunto = document.querySelector("#asunto");
  const entradaMensaje = document.querySelector("#mensaje");
  const btnSubmit = document.querySelector("#botones button[type='submit']");

  // Asignar eventos
  entradaCorreo.addEventListener("input", validar);
  entradaAsunto.addEventListener("input", validar);
  entradaMensaje.addEventListener("input", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      correo[e.target.name] = "";
      comprobarEmail();
      return;
    }

    limpiarAlerta(e.target.parentElement);

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("Correo no válido", e.target.parentElement);
      correo[e.target.name] = "";
      comprobarEmail();
    }

    // Asignar valores
    correo[e.target.name] = e.target.value.trim().toLowerCase();

    // Comprobar el objeto de email
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    // Generar alerta
    const alerta = referencia.querySelector(".error");

    if (!alerta) {
      const error = document.createElement("p");
      error.textContent = mensaje;
      error.classList.add(
        "error",
        "bg-red-400",
        "text-white",
        "p-2",
        "text-center"
      );
      referencia.appendChild(error);
    }
  }

  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".error");
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    if (Object.values(correo).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }
});
