document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".Menu-toggle");
  const menuHorizontal = document.querySelector(".Menu-horizontal");

  menuToggle.addEventListener("click", () => {
    menuHorizontal.classList.toggle("active");
  });
});

const ctx = document.getElementById("graficoTiempo").getContext("2d");
const grafico = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ],
    datasets: [
      {
        label: "Tiempo en pantalla (min)",
        data: [120, 140, 160, 130, 150, 180, 200],
        backgroundColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue("--color-pantalla"),
      },
      {
        label: "Tiempo de descanso (min)",
        data: [30, 40, 45, 50, 35, 60, 70],
        backgroundColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue("--color-descanso"),
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Minutos" },
      },
    },
  },
});
