let jugador1 = {
	nombre: "nombre",
	servicio: true,
	puntos: 0,
	games: 0,
	sets: 0,
	ptiebreak: 0,
};

let jugador2 = {
	nombre: "nombre",
	servicio: false,
	puntos: 0,
	games: 0,
	sets: 0,
	ptiebreak: 0,
};
let game = false;
let t_iebreak = false;
let servicio = false;

// MOSTRAR EL RESULTADO ****************
function mostrar_resultado() {
	document.getElementById("muestra_resultado_punto_1").innerHTML =
		"puntos: " +
		jugador1.puntos +
		"<br>" +
		"games: " +
		jugador1.games +
		"<br>" +
		"sets:" +
		jugador1.sets +
		"<br>" +
		jugador1.ptiebreak +
		"<br>" +
		jugador1.servicio;
	document.getElementById("muestra_resultado_punto_2").innerHTML =
		"puntos: " +
		jugador2.puntos +
		"<br>" +
		"games: " +
		jugador2.games +
		"<br>" +
		"sets: " +
		jugador2.sets +
		"<br>" +
		jugador2.ptiebreak +
		"<br>" +
		jugador2.servicio;
}

function reset() {
	jugador1.games = 0;
	jugador1.puntos = 0;
	jugador1.ptiebreak = 0;
	jugador2.games = 0;
	jugador2.puntos = 0;
	jugador2.ptiebreak = 0;
}

//TIE-BRAK****************
function tiebreak(jugador) {
	game = false;
	jugador.ptiebreak = jugador.ptiebreak + 1;
	mostrar_resultado();
	if (jugador1.ptiebreak == 7 && jugador2.ptiebreak <= 5) {
		console.log("jugador 1 gana el tiebreak");
		game = true;
		jugador1.sets = jugador1.sets + 1;
		t_iebreak = false;
		reset();
	}
	if (jugador2.ptiebreak == 7 && jugador1.ptiebreak <= 5) {
		console.log("jugador 2 gana el tiebreak");
		game = true;
		jugador2.sets = jugador2.sets + 1;
		t_iebreak = false;
		reset();
	}

	if (
		jugador1.ptiebreak == jugador2.ptiebreak + 2 &&
		jugador1.ptiebreak >= 5 &&
		jugador2.ptiebreak >= 5
	) {
		jugador1.sets = jugador1.sets + 1;
		reset();
		console.log("gano el set el jugador1");
	}

	if (
		jugador1.ptiebreak + 2 == jugador2.ptiebreak &&
		jugador1.ptiebreak >= 5 &&
		jugador2.ptiebreak >= 5
	) {
		jugador2.sets = jugador2.sets + 1;
		game = true;
		jugador2.sets = jugador2.sets + 1;
		t_iebreak = false;
		reset();
		console.log("gano el set el jugador2");
	}

	mostrar_resultado();
}

// puntos jugador 1 **********************************

const boton1 = document.getElementById("punto_jugador_1");
boton1.addEventListener("click", function () {
	game = false;
	if (!t_iebreak) {
		if (jugador1.puntos == "ventaja") {
			console.log("estoy dentro de ventaja");
			jugador2.puntos = 0;
			jugador1.puntos = 0;
			game = true;
			jugador1.games = jugador1.games + 1;
			mostrar_resultado();
		}

		if (jugador1.puntos == 40 && jugador2.puntos == 40) {
			jugador1.puntos = "ventaja";
		}

		if (jugador1.puntos != 30 && jugador1.puntos !== "ventaja" && !game) {
			jugador1.puntos = jugador1.puntos + 15;
		} else if (jugador1.puntos == 30 && jugador1.puntos !== "ventaja") {
			jugador1.puntos = jugador1.puntos + 10;
		}
		if (jugador2.puntos == "ventaja") {
			console.warn("ventaja iguales");
			jugador1.puntos = 40;
			jugador2.puntos = 40;
			mostrar_resultado();
		}

		if (jugador1.puntos > 40) {
			jugador1.puntos = 0;
			jugador2.puntos = 0;
			jugador1.games = jugador1.games + 1;
			game = true;
			mostrar_resultado();
		}

		// Suma un set si llega a 6 con diferencia de 2
		if (jugador1.games == 6 && jugador2.games <= 4) {
			jugador1.sets = jugador1.sets + 1;
			jugador1.games = 0;
			jugador2.games = 0;
		}
		if (jugador1.games == 6 && jugador2.games == 6) {
			console.log("tiebreak");
			t_iebreak = true;
		}

		// Suma un set si llega a 7 / 5
		if (jugador1.games == 7 && jugador2.games <= 5) {
			jugador1.sets = jugador1.sets + 1;
			jugador1.games = 0;
			jugador2.games = 0;
		}
		//servicio
		if (game) {
			jugador1.servicio = false;
			jugador2.servicio = true;
		}
		mostrar_resultado();
	} else {
		tiebreak(jugador1);
	}
});

// puntos jugador 2 **********************************

const boton2 = document.getElementById("punto_jugador_2");
boton2.addEventListener("click", function () {
	game = false;
	if (!t_iebreak) {
		if (jugador2.puntos == "ventaja") {
			console.log("estoy dentro de ventaja");
			jugador2.puntos = 0;
			jugador1.puntos = 0;
			mostrar_resultado();
			game = true;
			jugador2.games = jugador2.games + 1;
		}
		if (jugador2.puntos == 40 && jugador1.puntos == 40) {
			jugador2.puntos = "ventaja";
		}

		if (jugador2.puntos != 30 && jugador2.puntos !== "ventaja" && !game) {
			jugador2.puntos = jugador2.puntos + 15;
		} else if (jugador2.puntos == 30 && jugador2.puntos !== "ventaja") {
			jugador2.puntos = jugador2.puntos + 10;
		}

		if (jugador1.puntos == "ventaja") {
			console.warn("ventaja iguales");
			jugador1.puntos = 40;
			jugador2.puntos = 40;
			mostrar_resultado();
		}

		if (jugador2.puntos > 40) {
			jugador2.puntos = 0;
			jugador1.puntos = 0;
			mostrar_resultado();
			jugador2.games = jugador2.games + 1;
			game = true;
		}
		if (jugador2.games == 6 && jugador1.games <= 4) {
			jugador2.sets = jugador2.sets + 1;
			jugador1.games = 0;
			jugador2.games = 0;
		}
		if (jugador2.games == 6 && jugador1.games == 6) {
			console.log("tiebreak");
			t_iebreak = true;
		}
		if (jugador1.games == 7 && jugador2.games <= 5) {
			jugador1.sets = jugador1.sets + 1;
			jugador1.games = 0;
			jugador2.games = 0;
		}
		//servicio
		if (game) {
			jugador1.servicio = true;
			jugador2.servicio = false;
		}
		mostrar_resultado();
	} else {
		tiebreak(jugador2);
	}
});

// Servicio
// function service() {
// 	if (servicio) {
// 		document.getElementById("muestra_servicio_jugador2").innerHTML =
// 			"la concha de tu madre: ";
// 		document.getElementById("muestra_servicio_jugador1").style.display = "none";
// 	}
// 	else {
// 		document.getElementById("muestra_servicio_jugador1").innerHTML = "la remil puta: ";
// 		document.getElementById("muestra_servicio_jugador2").style.display = "none";

// 	}
// }
