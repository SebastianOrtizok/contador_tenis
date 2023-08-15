let jugador1 = {
	nombre: "",
	games: 0,
	set: [0],
	sets: 0,
	ptiebreak: 0,
	ijugador: 0,
	servicio: false,
};

let jugador2 = {
	nombre: "",
	games: 0,
	set: [0],
	sets: 0,
	ptiebreak: 0,
	ijugador: 0,
	servicio: false,
};

let cantSets = 0;
// Cargar nobres y quien saca
const inputNombreJugador1 = document.getElementById("nombreJugador1");
const inputNombreJugador2 = document.getElementById("nombreJugador2");
const quiensaca1 = document.getElementById("saca1").checked;
const quiensaca2 = document.getElementById("saca2").checked;
const tresSets = document.getElementById("sets3").checked;
const btnCargarNombres = document.getElementById("cargarnombres");

// Asocia un evento al botón de cargar nombres
btnCargarNombres.addEventListener("click", function () {
	jugador1.nombre = inputNombreJugador1.value;
	jugador2.nombre = inputNombreJugador2.value;
	jugador1.servicio = document.getElementById("saca1").checked;
	jugador2.servicio = document.getElementById("saca2").checked;
	document.getElementById("formulario_jugadores").style.visibility = "hidden";
	if (document.getElementById("sets3").checked) {
		console.log("estoy en 3 sets");
		cantSets = 3;
		jugador1.set = [0, 0, 0];
		jugador2.set = [0, 0, 0];
	} else {
		console.log("estoy en 5 sets");
		cantSets = 5;
		jugador1.set = [0, 0, 0, 0, 0];
		jugador2.set = [0, 0, 0, 0, 0];
	}
	service();
	mostrar_resultado();
});

let puntos = [0, 15, 30, 40, "AD"];
let jugador = "";
let t_iebreak = false;
let servicio = "";
let nroset = 0;

function reset() {
	jugador1.games = 0;
	jugador1.puntos = 0;
	jugador1.ptiebreak = 0;
	jugador2.games = 0;
	jugador2.puntos = 0;
	jugador2.ptiebreak = 0;
}

// puntos jugador 1 **********************************

const boton1 = document.getElementById("punto_jugador_1");
boton1.addEventListener("click", function () {
	jugador = jugador1;
	if (t_iebreak) {
		tiebreak(jugador);
	} else {
		sumagame(jugador);
		sumapunto(jugador);
		ventajaiguales(jugador);
	}
	mostrar_resultado();
});

// puntos jugador 2 **********************************
const boton2 = document.getElementById("punto_jugador_2");
boton2.addEventListener("click", function () {
	jugador = jugador2;
	if (t_iebreak) {
		tiebreak(jugador);
	} else {
		sumagame(jugador);
		sumapunto(jugador);
		ventajaiguales(jugador);
	}
	mostrar_resultado();
});

// suma punto
function sumapunto(jugador) {
	jugador.ijugador += 1;
}

//  function Sumar games
function sumagame() {
	if (
		(jugador1.ijugador == 3 && jugador2.ijugador < 3 && jugador == jugador1) ||
		(jugador1.ijugador == 4 && jugador2.ijugador < 4 && jugador == jugador1)
	) {
		jugador1.games += 1;
		service();
		jugador1.ijugador = -1;
		jugador2.ijugador = 0;
	}

	if (
		(jugador2.ijugador == 3 && jugador1.ijugador < 3 && jugador == jugador2) ||
		(jugador2.ijugador == 4 && jugador1.ijugador < 4 && jugador == jugador2)
	) {
		jugador2.games += 1;
		service();
		jugador2.ijugador = -1;
		jugador1.ijugador = 0;
	}
	cambiodelado();
	sumaset();
}

// Función suma SET
function sumaset() {
	if (jugador1.games == 6 && jugador2.games < 5) {
		jugador1.sets += 1;
		jugador1.set[nroset] = jugador1.games;
		jugador2.set[nroset] = jugador2.games;
		nroset += 1;
		match();
		reset();
	}
	if (jugador2.games == 6 && jugador1.games < 5) {
		jugador2.sets += 1;
		jugador1.set[nroset] = jugador1.games;
		jugador2.set[nroset] = jugador2.games;
		nroset += 1;
		match();
		reset();
	}
	if (jugador1.games == 6 && jugador2.games == 6) {
		t_iebreak = true;
	}
}

//función match
function match() {
	console.log("cantidad de sets: " + cantSets);
	console.log("cantidad de sets: " + jugador1.sets);
	if (cantSets == 3 && jugador.sets == 2) {
		document.getElementById("informacion").hidden = false;
		document.getElementById("informacion").innerHTML =
			"Ganador del juego: " + jugador.nombre;
		document.getElementById("punto_jugador_1").hidden = true;
		document.getElementById("punto_jugador_2").hidden = true;
	}
	if (
		(cantSets == 5 && jugador1.sets == 3 && jugador2.sets == 0) ||
		(jugador1.sets == jugador2.sets + 2 && jugador2.sets != 0) ||
		(jugador1.sets == 5 && jugador2.sets == 4)
	) {
		document.getElementById("informacion").hidden = false;
		document.getElementById("informacion").innerHTML =
			"Ganador del juego: " + jugador1.nombre;
		document.getElementById("punto_jugador_1").hidden = true;
		document.getElementById("punto_jugador_2").hidden = true;
	} else if (
		(cantSets == 5 && jugador2.sets == 3 && jugador1.sets == 0) ||
		(jugador2.sets == jugador1.sets + 2 && jugador2.sets != 0)  ||
		(jugador2.sets == 5 && jugador1.sets == 4)
	) {
		document.getElementById("informacion").hidden = false;
		document.getElementById("informacion").innerHTML =
			"Ganador del juego: " + jugador2.nombre;
		document.getElementById("punto_jugador_1").hidden = true;
		document.getElementById("punto_jugador_2").hidden = true;
	}
}

//** función ventaja iguales */
function ventajaiguales() {
	if (jugador1.ijugador == jugador2.ijugador && jugador1.ijugador == 4) {
		jugador2.ijugador = 3;
		jugador1.ijugador = 3;
	}
}

// TIE-BRAK****************
function tiebreak() {
	jugador.ptiebreak = jugador.ptiebreak + 1;
	mostrar_resultado();
	if (jugador1.ptiebreak == 7 && jugador2.ptiebreak <= 5) {
		console.log("jugador 1 gana el tiebreak");
		jugador1.sets = jugador1.sets + 1;
		jugador1.set[nroset] = jugador1.games;
		jugador2.set[nroset] = jugador2.games;
		nroset += 1;
		t_iebreak = false;
		reset();
	}
	if (jugador2.ptiebreak == 7 && jugador1.ptiebreak <= 5) {
		console.log("jugador 2 gana el tiebreak");
		jugador1.set[nroset] = jugador1.games;
		jugador2.set[nroset] = jugador2.games;
		nroset += 1;
		jugador2.sets = jugador2.sets + 1;
		t_iebreak = false;
		reset();
	}

	if (
		jugador1.ptiebreak == jugador2.ptiebreak + 2 &&
		jugador1.ptiebreak >= 5 &&
		jugador2.ptiebreak >= 5
	) {
		jugador1.set[nroset] = jugador1.games;
		jugador2.set[nroset] = jugador2.games;
		nroset += 1;
		jugador1.sets = jugador1.sets + 1;
		reset();
		console.log("gano el set el jugador1");
	}

	if (
		jugador1.ptiebreak + 2 == jugador2.ptiebreak &&
		jugador1.ptiebreak >= 5 &&
		jugador2.ptiebreak >= 5
	) {
		jugador1.sets = jugador1.sets + 1;
		jugador1.set[nroset] = jugador1.games;
		jugador2.set[nroset] = jugador2.games;
		nroset += 1;
		jugador2.sets = jugador2.sets + 1;
		game = true;
		t_iebreak = false;
		reset();
		console.log("gano el set el jugador2");
	}
	cambiodelado();
	mostrar_resultado();
}

// Funcion Servicio
function service() {
	if (jugador1.servicio == true) {
		jugador1.servicio = false;
		jugador2.servicio = true;
		document.getElementById("muestra_servicio_1").style.visibility = "visible";
		document.getElementById("muestra_servicio_2").style.visibility = "hidden";
	} else if (jugador1.servicio == false) {
		jugador1.servicio = true;
		jugador2.servicio = false;
		document.getElementById("muestra_servicio_2").style.visibility = "visible";
		document.getElementById("muestra_servicio_1").style.visibility = "hidden";
	}
}

function cambiodelado() {
	let sumagame = jugador1.games + jugador2.games;
	let sumaptiebreak = jugador1.ptiebreak + jugador2.ptiebreak;
	// console.log("suma puntos games " + sumagame)
	// console.log("suma puntos tiebreak " + sumaptiebreak)
	document.getElementById("informacion").hidden = true;
	if (sumagame % 2 !== 0 || (sumaptiebreak % 6 == 0 && t_iebreak)) {
		document.getElementById("informacion").hidden = false;
		document.getElementById("informacion").innerHTML = "Cambio de lado";
	}
}

// MOSTRAR EL RESULTADO ****************

function mostrar_resultado(nombreJugador1, nombreJugador2) {
	document.getElementById("muestra_nombre_1").innerHTML = jugador1.nombre;
	document.getElementById("muestra_tiebreak_1").innerHTML =
	jugador1.ptiebreak;
	document.getElementById("muestra_tiebreak_2").innerHTML =
	jugador2.ptiebreak;
	if (cantSets == 3) {
		//jugador 1 a 3 sets
		document.getElementById("muestra_set_jugador1").innerHTML =
			jugador1.set[0] + "    " + jugador1.set[1] + "    " + jugador1.set[2];

		document.getElementById("muestra_resultado_punto_1").innerHTML =
			jugador1.games + "    " + puntos[jugador1.ijugador];
		//jugador 2 a 3 sets
		document.getElementById("muestra_nombre_2").innerHTML = jugador2.nombre;
		document.getElementById("muestra_set_jugador2").innerHTML =
			jugador2.set[0] + "    " + jugador2.set[1] + "    " + jugador2.set[2];

		document.getElementById("muestra_resultado_punto_2").innerHTML =
			jugador2.games + "    " + puntos[jugador2.ijugador];
	} else {
		//jugador 1 a 5 sets
		document.getElementById("muestra_set_jugador1").innerHTML =
			jugador1.set[0] +
			"    " +
			jugador1.set[1] +
			"    " +
			jugador1.set[2] +
			"    " +
			jugador1.set[3] +
			"    " +
			jugador1.set[4];
		document.getElementById("muestra_resultado_punto_1").innerHTML =
			jugador1.games + "    " + puntos[jugador1.ijugador];
		//jugador 2 a 5 sets
		document.getElementById("muestra_nombre_2").innerHTML = jugador2.nombre;
		document.getElementById("muestra_set_jugador2").innerHTML =
			jugador2.set[0] +
			"    " +
			jugador2.set[1] +
			"    " +
			jugador2.set[2] +
			"    " +
			jugador2.set[3] +
			"    " +
			jugador2.set[4];
		document.getElementById("muestra_resultado_punto_2").innerHTML =
			jugador2.games + "    " + puntos[jugador2.ijugador];
	}
}
