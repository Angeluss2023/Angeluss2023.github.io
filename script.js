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
