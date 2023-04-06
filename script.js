let turno = 'X';

function marcarCelda(celda) {
  if (!celda.classList.contains('X') && !celda.classList.contains('O')) {
    celda.textContent = turno;
    celda.classList.add(turno);

    if (ganador(turno)) {
      alert(`¡Ganador: ${turno}!`);
      reiniciarJuego();
    } else {
      turno = turno === 'X' ? 'O' : 'X';
    }
  }
}

function ganador(jugador) {
  const celdas = document.querySelectorAll('.celda');
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combinacion of combinacionesGanadoras) {
    if (
      celdas[combinacion[0]].classList.contains(jugador) &&
      celdas[combinacion[1]].classList.contains(jugador) &&
      celdas[combinacion[2]].classList.contains(jugador)
    ) {
      return true;
    }
  }
  return false;
}

function reiniciarJuego() {
  const celdas = document.querySelectorAll('.celda');
  for (let celda of celdas) {
    celda.textContent = '';
    celda.classList.remove('X', 'O');
  }
  turno = 'X';
}
const juego = document.getElementById('juego');
const dinosaurio = document.getElementById('dinosaurio');
const cactus = document.getElementById('cactus');

let saltando = false;

function saltar() {
  if (!saltando) {
    saltando = true;
    dinosaurio.style.animation = 'saltar 0.6s linear';
    setTimeout(() => {
      dinosaurio.style.animation = '';
      saltando = false;
    }, 600);
  }
}

juego.addEventListener('click', saltar);

function colision() {
  const rectDino = dinosaurio.getBoundingClientRect();
  const rectCactus = cactus.getBoundingClientRect();
  if (
    rectDino.right > rectCactus.left &&
    rectDino.left < rectCactus.right &&
    rectDino.bottom > rectCactus.top &&
    rectDino.top < rectCactus.bottom
  ) {
    alert('¡Has perdido!');
    location.reload();
  }
}

setInterval(() => {
  colision();
  moverCactus();
}, 50);

function moverCactus() {
  const posCactus = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('right')
  );
  if (posCactus < 800) {
    cactus.style.right = posCactus + 5 + 'px';
  } else {
    cactus.style.right = 0;
  }
}
