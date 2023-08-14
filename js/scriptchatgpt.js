const puntos = [0, 15, 30, 40, "Ventaja"];

const jugador1 = {
  nombre: "",
  games: 0,
  sets: 0,
  ptiebreak: 0,
  ijugador: 0,
  servicio: true,
};

const jugador2 = {
  nombre: "",
  games: 0,
  sets: 0,
  ptiebreak: 0,
  ijugador: 0,
  servicio: false,
};

const inputNombreJugador1 = document.getElementById("nombreJugador1");
const inputNombreJugador2 = document.getElementById("nombreJugador2");
const btnCargarNombres = document.getElementById("cargarnombres");
const boton1 = document.getElementById("punto_jugador_1");
const boton2 = document.getElementById("punto_jugador_2");

btnCargarNombres.addEventListener("click", function () {
  jugador1.nombre = inputNombreJugador1.value;
  jugador2.nombre = inputNombreJugador2.value;
});

boton1.addEventListener("click", function () {
  realizarJugada(jugador1);
});

boton2.addEventListener("click", function () {
  realizarJugada(jugador2);
});

function realizarJugada(jugador) {
  if (t_iebreak) {
    tiebreak(jugador);
  } else {
    sumagame(jugador);
    sumapunto(jugador);
    ventajaiguales(jugador);
  }
  mostrar_resultado();
}

function sumapunto(jugador) {
  jugador.ijugador += 1;
}

function sumagame(jugador) {
  const rival = jugador === jugador1 ? jugador2 : jugador1;

  if ((jugador.ijugador === 3 || jugador.ijugador === 4) && rival.ijugador < 4) {
    jugador.games += 1;
    service();
    jugador.ijugador = -1;
    rival.ijugador = 0;
  }

  cambiodelado();
  sumaset();
}

function sumaset() {
  const ganadorSets = jugador1.games === 6 ? jugador1 : jugador2;
  const perdedorSets = ganadorSets === jugador1 ? jugador2 : jugador1;

  if (ganadorSets.games === 6 && perdedorSets.games < 5) {
    ganadorSets.sets += 1;
    reset();
  }

  if (ganadorSets.games === 6 && perdedorSets.games === 6) {
    t_iebreak = true;
  }
}

function ventajaiguales() {
  if (jugador1.ijugador === jugador2.ijugador && jugador1.ijugador === 4) {
    jugador2.ijugador = 3;
    jugador1.ijugador = 3;
  }
}

function tiebreak(jugador) {
  jugador.ptiebreak += 1;
  mostrar_resultado();

  const ganador = jugador1.ptiebreak === 7 ? jugador1 : jugador2;
  const perdedor = ganador === jugador1 ? jugador2 : jugador1;

  if (ganador.ptiebreak === 7 && perdedor.ptiebreak <= 5) {
    ganador.sets += 1;
    t_iebreak = false;
    reset();
  }

  if (ganador.ptiebreak === perdedor.ptiebreak + 2 && ganador.ptiebreak >= 5 && perdedor.ptiebreak >= 5) {
    ganador.sets += 1;
    reset();
  }

  mostrar_resultado();
}

function service() {
  jugador1.servicio = !jugador1.servicio;
  jugador2.servicio = !jugador2.servicio;
  document.getElementById("muestra_servicio_1").hidden = jugador1.servicio;
  document.getElementById("muestra_servicio_2").hidden = jugador2.servicio;
}

function cambiodelado() {
  const sumagame = jugador1.games + jugador2.games;
  const cambioDeLadoElement = document.getElementById("cambio_de_lado");

  cambioDeLadoElement.hidden = sumagame % 2 === 0;
}
