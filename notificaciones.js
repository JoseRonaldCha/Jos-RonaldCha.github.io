document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".Menu-toggle");
  const menuHorizontal = document.querySelector(".Menu-horizontal");

  menuToggle.addEventListener("click", () => {
    menuHorizontal.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formNotificaciones");
  const mensaje = document.getElementById("mensajeDescanso");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const seleccion = document.getElementById("estado").value;

    localStorage.setItem("notificaciones", seleccion);
    alert("Preferencia guardada correctamente.");

    if (seleccion === "si") {
      // Simulación de que ha pasado el tiempo de uso (ejemplo 3s)
      setTimeout(() => {
        mensaje.style.display = "block";
      }, 3000);
    } else {
      mensaje.style.display = "none";
    }
  });

  const preferenciaGuardada = localStorage.getItem("notificaciones");
  if (preferenciaGuardada === "si") {
    document.getElementById("estado").value = "si";
  } else {
    document.getElementById("estado").value = "no";
  }
});
