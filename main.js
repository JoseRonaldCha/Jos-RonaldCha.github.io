document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".Menu-toggle");
  const menuHorizontal = document.querySelector(".Menu-horizontal");

  menuToggle.addEventListener("click", () => {
    menuHorizontal.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[name="frm"]');

  form.addEventListener("submit", (event) => {
    const usuario = document.getElementById("name").value.trim();
    const contrasena = document.getElementById("lastname").value.trim();

    if (!usuario || !contrasena) {
      event.preventDefault();
      alert("Por favor, completa todos los campos.");
    } else if (!validateEmail(usuario)) {
      event.preventDefault();
      alert("Por favor, ingresa un correo válido.");
    } else if (contrasena.length < 6) {
      event.preventDefault();
      alert("La contraseña debe tener al menos 6 caracteres.");
    } else {
      event.preventDefault();
      alert("Inicio de sesión exitoso.");

      window.location.href = "notificaciones.html";
    }
  });
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}
