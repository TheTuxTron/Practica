// main.js
document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('background-music');
  const openButton = document.getElementById('open-button');
  const titleElement = document.getElementById('title');
  const titles = ('I LOVE U').split('');
  let index = 0;

  // Función para intentar reproducir la música
  const tryToPlayMusic = () => {
    const playPromise = music.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log("La música ha comenzado a reproducirse automáticamente");
      }).catch((error) => {
        console.error("El navegador bloqueó el audio:", error);
      });
    }
  };

  // Función para agregar el título letra por letra
  function appendTitle() {
    if (index < titles.length) {
      titleElement.innerHTML += titles[index];
      index++;
      setTimeout(appendTitle, 300); // 300ms delay
    }
  }

  // Iniciar la animación del título después de un pequeño retraso
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    appendTitle(); // Comenzar a agregar el título
    clearTimeout(c);
  }, 1000);

  // Agregar evento de clic al botón
  if (openButton) {
    openButton.addEventListener('click', (event) => {
      event.preventDefault(); // Evitar la redirección inmediata
      tryToPlayMusic(); // Intentar reproducir la música
      setTimeout(() => {
        window.location.href = openButton.href; // Redirigir después de un pequeño retraso
      }, 1000); // Esperar 1 segundo antes de redirigir
    });
  } else {
  }
});