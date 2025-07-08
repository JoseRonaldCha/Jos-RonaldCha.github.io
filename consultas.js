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
    const nombres = document.getElementById("nombres").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const pais = document.getElementById("pais").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nombres || !apellidos || !telefono || !pais || !email) {
      event.preventDefault();
      alert("Por favor, complete todos los campos del formulario.");
    } else if (!validateEmail(email)) {
      event.preventDefault();
      alert("Por favor, ingrese un correo válido.");
    } else {
      const confirmacion = confirm("¿Desea enviar el formulario?");
      if (!confirmacion) {
        event.preventDefault();
      } else {
        alert("Formulario enviado correctamente.");
      }
    }
  });
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}
