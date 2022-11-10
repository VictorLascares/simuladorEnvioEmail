document.addEventListener("DOMContentLoaded", () => {
  const correo = {
    email: "",
    cc: "",
    asunto: "",
    mensaje: "",
  };

  // Seleccionar los elementos de la interfaz
  const formulario = document.querySelector("#formulario");
  const entradaCorreo = document.querySelector("#email");
  const entradaCC = document.querySelector("#cc");
  const entradaAsunto = document.querySelector("#asunto");
  const entradaMensaje = document.querySelector("#mensaje");
  const btnSubmit = document.querySelector("#botones button[type='submit']");
  const btnReset = document.querySelector("#botones button[type='reset']");
  const spinner = document.querySelector("#spinner");

  // Asignar eventos
  entradaCorreo.addEventListener("input", validar);
  entradaCC.addEventListener("input", validar);
  entradaAsunto.addEventListener("input", validar);
  entradaMensaje.addEventListener("input", validar);
  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", function (e) {
    e.preventDefault();
    const resetear = confirm("Desea resetear el formulario?");
    if (resetear) {
      resetFormulario();
    }
  });

  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.add("flex");
    spinner.classList.remove("hidden");
    setTimeout(() => {
      spinner.classList.add("hidden");
      spinner.classList.remove("flex");

      resetFormulario();

      // Crear una alerta
      mostrarAlerta(
        "El mensaje fue enviado correctamente",
        formulario,
        "exito"
      );
    }, 3000);
  }

  function validar(e) {
    if (e.target.value.trim() === "" && e.target.id !== "cc") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement,
        "error"
      );
      correo[e.target.name] = "";
      comprobarEmail();
      return;
    }

    limpiarAlerta(e.target.parentElement);

    if ((e.target.id === "email" || e.target.id === "cc") && !validarEmail(e.target.value)) {
      mostrarAlerta("Correo no válido", e.target.parentElement, "error");
      correo[e.target.name] = "";
      comprobarEmail();
    }

    // Asignar valores
    correo[e.target.name] = e.target.value.trim().toLowerCase();

    // Comprobar el objeto de email
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia, tipo) {
    // Generar alerta

    const alerta = document.createElement("p");
    if (tipo === "error" && !referencia.querySelector(".error")) {
      alerta.textContent = mensaje;
      alerta.classList.add(
        "error",
        "bg-red-400",
        "text-white",
        "p-2",
        "text-center"
      );
      referencia.appendChild(alerta);
    } else if (tipo === "exito" && !referencia.querySelector(".exito")) {
      alerta.classList.add(
        "exito",
        "bg-green-400",
        "text-white",
        "p-2",
        "text-center",
        "mt-10"
      );

      alerta.textContent = mensaje;
      referencia.appendChild(alerta);

      setTimeout(() => {
        alerta.remove();
      }, 3000);
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
    if (!correo.email || !correo.asunto || !correo.mensaje) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function resetFormulario() {
    // Reiniciar el objeto
    correo.email = "";
    correo.cc = "";
    correo.asunto = "";
    correo.mensaje = "";

    // Resetear el formulario
    formulario.reset();

    comprobarEmail();
  }
});
