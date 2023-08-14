let jugador1 = {
	nombre: "",
	games: 0,
	sets: 0,
	ptiebreak: 0,
	ijugador: 0,
	servicio:true,
};

let jugador2 = {
	nombre: "",
	games: 0,
	sets: 0,
	ptiebreak: 0,
	ijugador: 0,
	servicio:false,	
}

// Obtén referencias a los elementos de entrada y al botón de cargar nombres
const inputNombreJugador1 = document.getElementById("nombreJugador1");
const inputNombreJugador2 = document.getElementById("nombreJugador2");
const btnCargarNombres = document.getElementById("cargarnombres");

// Asocia un evento al botón de cargar nombres
btnCargarNombres.addEventListener("click", function () {
  jugador1.nombre = inputNombreJugador1.value;
  jugador2.nombre = inputNombreJugador2.value;
  document.getElementById("formulario_jugadores").style.visibility = "hidden";
});


service()
let puntos= [0, 15, 30, 40, "Ventaja"];
let jugador=""
let t_iebreak=false
let servicio=""

// MOSTRAR EL RESULTADO ****************

function mostrar_resultado(nombreJugador1, nombreJugador2) {
	document.getElementById("muestra_nombre_1").innerHTML =
	jugador1.nombre
		document.getElementById("muestra_resultado_punto_1").innerHTML =
		puntos[jugador1.ijugador] +  "    " +
		jugador1.games + "    " +
		jugador1.sets 	+
		jugador1.ptiebreak + "    " 
		;
		document.getElementById("muestra_nombre_2").innerHTML =
		jugador2.nombre
	document.getElementById("muestra_resultado_punto_2").innerHTML =
	 puntos[jugador2.ijugador] + "    " +
		jugador2.games + "    " +
		jugador2.sets + "    " +
		jugador2.ptiebreak ;
}


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
	jugador=jugador1;
	if (t_iebreak){
		tiebreak(jugador)
	}
	else {
		sumagame(jugador);
		sumapunto(jugador);
		ventajaiguales(jugador);
	}
	mostrar_resultado();
});



// puntos jugador 2 **********************************
const boton2 = document.getElementById("punto_jugador_2");
boton2.addEventListener("click", function () {
	jugador=jugador2;
	if (t_iebreak){
		tiebreak(jugador)
	}
	else {
		sumagame(jugador);
		sumapunto(jugador);
		ventajaiguales(jugador);
	}
	mostrar_resultado();
});




// suma punto
function sumapunto(jugador) {
	jugador.ijugador+=1
	console.log( "el punto lo gano: " )

	}



//  function Sumar games
function sumagame() {
	if (
		jugador1.ijugador == 3 && jugador2.ijugador < 3 && jugador==jugador1 || jugador1.ijugador == 4 && jugador2.ijugador < 4 && jugador==jugador1
	) {
		jugador1.games += 1;
		service()
		jugador1.ijugador = -1;
		jugador2.ijugador = 0;
	}

	if (
		jugador2.ijugador == 3 && jugador1.ijugador < 3 && jugador==jugador2 || jugador2.ijugador == 4 && jugador1.ijugador < 4 && jugador==jugador2
	) {
		jugador2.games += 1;
		service()
		jugador2.ijugador = -1;
		jugador1.ijugador = 0;
	}
	cambiodelado()
	sumaset()

}

// Función suma SET
function sumaset(){
	if (jugador1.games ==6 && jugador2.games<5){
		jugador1.sets+=1
		reset()
	}
	if (jugador2.games ==6 && jugador1.games<5){
		jugador2.sets+=1
		reset()
	}
	if (jugador1.games ==6 && jugador2.games==6){
	t_iebreak=true
	}
}

//** función ventaja iguales */
function ventajaiguales() {
	if (
		jugador1.ijugador == jugador2.ijugador && jugador1.ijugador == 4
		
	) {
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
		 t_iebreak = false;
		reset();
	}
	if (jugador2.ptiebreak == 7 && jugador1.ptiebreak <= 5) {
		console.log("jugador 2 gana el tiebreak");
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

// Funcion Servicio
function service() {
	if (jugador1.servicio==true){
		jugador1.servicio=false;
		jugador2.servicio=true;
		document.getElementById("muestra_servicio_1").style.visibility = "visible";
		document.getElementById("muestra_servicio_2").style.visibility = "hidden";
	}else if (jugador1.servicio==false){
		jugador1.servicio=true;
		jugador2.servicio=false;
		document.getElementById("muestra_servicio_2").style.visibility = "visible";
		document.getElementById("muestra_servicio_1").style.visibility = "hidden";
	}
}

function cambiodelado(){
	let sumagame=jugador1.games+jugador2.games
	console.log(sumagame)
	document.getElementById("cambio_de_lado").hidden=true
	if(sumagame  % 2 !== 0){
		console.log("estoy adentro")
		document.getElementById("cambio_de_lado").hidden=false
		document.getElementById("cambio_de_lado").innerHTML= "Cambio de lado"
	}
}
