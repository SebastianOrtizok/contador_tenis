let saqueParJugador1 = document.getElementById("jugador1sacapar");
let saqueImparJugador1 = document.getElementById("jugador1sacaimpar");
let saqueParJugador2 = document.getElementById("jugador2sacapar");
let saqueImparJugador2 = document.getElementById("jugador2sacaimpar");
let devolucionParJugador1= document.getElementById("jugador1devuelvepar");
let devolucionImparJugador1= document.getElementById("jugador1devuelveimpar");
let devolucionParJugador2= document.getElementById("jugador2devuelvepar");
let devolucionImparJugador2= document.getElementById("jugador2devuelveimpar");

let saqueParJugador1LadoB = document.getElementById("jugador1sacapar");
let saqueImparJugador1LadoB = document.getElementById("jugador1sacaimpar");
let saqueParJugador2LadoB = document.getElementById("jugador2sacapar");
let saqueImparJugador2LadoB = document.getElementById("jugador2sacaimpar");
let devolucionParJugador1LadoB = document.getElementById("jugador1devuelvepar");
let devolucionImparJugador1LadoB = document.getElementById("jugador1devuelveimpar");
let devolucionParJugador2LadoB = document.getElementById("jugador2devuelvepar");
let devolucionImparJugador2LadoB = document.getElementById("jugador2devuelveimpar");



let ladoA = {
	ladoA : true,
	sacaParTop : "136px",
	sacatParLef: "-2px",
	sacaImparTop : "73px",
	sacaImparLeft : "-2px",
	devuelveParTop:"166px",
	devuelveParLeft:"28px",
	devuelveImparTop:"43px",
	devuelveImparLeft:"28px",
}

let ladoB = {
	ladoB : false,
	sacaParTop : "73px",
	sacatParLef: "452px",
	sacaImparTop : "73px",
	sacaImparLeft : "452px",
	devuelveParTop:"30px",
	devuelveParLeft:"389px",
	devuelveImparTop:"161px",
	devuelveImparLeft:"389px",
}




let jugador1 = {
	nombre: "",
	games: 0,
	set: [0],
	sets: 0,
	ptiebreak: 0,
	ijugador: 0,
	servicio: false,
	saquePartop: "136px",
	saqueImpartop: "73px",
	saqueLeft: "-2px",
	devolucionParTop: "166px",
	devolucionImparTop: "43px",
	devolucionLeft: "28px",
};

let jugador2 = {
	nombre: "",
	games: 0,
	set: [0],
	sets: 0,
	ptiebreak: 0,
	ijugador: 0,
	servicio: false,
	saquePartop: "73px",
	saqueImpartop: "136px",
	saqueLeft: "452px",
	devolucionParTop: "30px",
	devolucionImparTop: "161px",
	devolucionLeft: "389px",
};
let puntos = [0, 15, 30, 40, "AD"];
let jugador = "";
let t_iebreak = false;
let servicio = "";
let nroset = 0;
let cantSets = 0;
let cont = 0;


// Cargar nobres y quien saca
const inputNombreJugador1 = document.getElementById("nombreJugador1");
const inputNombreJugador2 = document.getElementById("nombreJugador2");
const quiensaca1 = document.getElementById("saca1").checked;
const quiensaca2 = document.getElementById("saca2").checked;
const btnCargarNombres = document.getElementById("cargarnombres");

// Asocia un evento del botón apara cargar nombres
btnCargarNombres.addEventListener("click", function () {
	jugador1.nombre = inputNombreJugador1.value;
	jugador2.nombre = inputNombreJugador2.value;
	jugador1.servicio = document.getElementById("saca1").checked;
	jugador2.servicio = document.getElementById("saca2").checked;
	document.getElementById("formulario_jugadores").style.visibility = "hidden";
	if (document.getElementById("sets3").checked) {
		cantSets = 3;
		jugador1.set = [0, 0, 0];
		jugador2.set = [0, 0, 0];
	} else {
		cantSets = 5;
		jugador1.set = [0, 0, 0, 0, 0];
		jugador2.set = [0, 0, 0, 0, 0];
	}
	pelotaIndicaSaqueEnCartel();

	mostrar_resultado();
});


function reproducirAudio(audioElement) {
	audioElement.play();
}

const audioGameSetAndMatch = document.getElementById("audioGameSetAndMatch");
const audioTiebreak = document.getElementById("audioTiebreak");
const audioMatchPoint = document.getElementById("audioMatchPoint");
const audioSetPoint = document.getElementById("audioSetPoint");

function situacionDeJuego(situacion) {
	saqueParJugador1.style.visibility = "hidden";
	devolucionParJugador2.style.visibility = "hidden";
	saqueImparJugador1.style.visibility = "hidden"
	saqueParJugador2.style.visibility = "hidden";
	saqueImparJugador2.style.visibility = "hidden";
	devolucionParJugador1.style.visibility = "hidden";
	devolucionImparJugador1.style.visibility = "hidden";
	devolucionImparJugador2.style.visibility = "hidden";

	//**  LADO A */
	//"jugador1SacaPar"
	if (situacion == 1 ){
		saqueParJugador1.style.visibility = "visible";
		saqueParJugador1.innerHTML= jugador1.nombre
		devolucionParJugador2.style.visibility = "visible";
		devolucionParJugador2.innerHTML= jugador2.nombre;
		saqueImparJugador1.style.visibility = "hidden"
		saqueParJugador2.style.visibility = "hidden";
		saqueImparJugador2.style.visibility = "hidden";
		devolucionParJugador1.style.visibility = "hidden";
		devolucionImparJugador1.style.visibility = "hidden";
		devolucionImparJugador2.style.visibility = "hidden";
	}
//"jugador1SacaImpar"
	if (situacion == 2){
		saqueImparJugador1.style.visibility = "visible"
		saqueImparJugador1.innerHTML= jugador1.nombre
		devolucionImparJugador2.style.visibility = "visible";
		devolucionImparJugador2.innerHTML= jugador2.nombre
		saqueParJugador1.style.visibility = "hidden";
		devolucionParJugador2.style.visibility = "hidden";
		saqueParJugador2.style.visibility = "hidden";
		saqueImparJugador2.style.visibility = "hidden";
		devolucionParJugador1.style.visibility = "hidden";
		devolucionImparJugador1.style.visibility = "hidden";
	}

//"jugador1DevuelvePar"
	if (situacion == 3 ){
		saqueParJugador2.style.visibility = "visible";
		saqueParJugador2.innerHTML= jugador2.nombre
		devolucionParJugador1.style.visibility = "visible";
		devolucionParJugador1.innerHTML= jugador1.nombre
		saqueImparJugador1.style.visibility = "hidden"
		devolucionImparJugador2.style.visibility = "hidden";
		saqueParJugador1.style.visibility = "hidden";
		devolucionParJugador2.style.visibility = "hidden";
		saqueImparJugador2.style.visibility = "hidden";
		devolucionImparJugador1.style.visibility = "hidden";
	}

	//"jugador1DevuelveImpar"

	if (situacion == 4){
		devolucionImparJugador1.style.visibility = "visible";
		devolucionImparJugador1.innerHTML= jugador1.nombre
		saqueImparJugador2.style.visibility = "visible";
		saqueImparJugador2.innerHTML= jugador2.nombre
		saqueParJugador2.style.visibility = "hidden";
		devolucionParJugador1.style.visibility = "hidden";
		saqueImparJugador1.style.visibility = "hidden"
		devolucionImparJugador2.style.visibility = "hidden";
		saqueParJugador1.style.visibility = "hidden";
		devolucionParJugador2.style.visibility = "hidden";
	}

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
	jugador = jugador1;
	if (t_iebreak) {
		tiebreak(jugador); //borre jugador antes era tiebreak(jugador)
	} else {
		deQueLadoSaco();
		sumapunto(jugador);
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
		deQueLadoSaco();
		sumapunto(jugador);
	}

	mostrar_resultado();
});

// suma punto
function sumapunto(jugador) {
	sumagame(jugador);
	jugador.ijugador += 1;
	ventajaiguales(jugador);
	setpoint();
	// setpoint();
}

//  function Sumar games
function sumagame(jugador) {
	if (
		(jugador1.ijugador == 3 && jugador2.ijugador < 3 && jugador == jugador1) ||
		(jugador1.ijugador == 4 && jugador2.ijugador < 4 && jugador == jugador1)
	) {
		jugador1.games += 1;
		if (jugador1.servicio) {
			jugador1.servicio=false;
			jugador2.servicio=true;
			situacionDeJuego(3)
			pelotaIndicaSaqueEnCartel()
		} else {
			jugador1.servicio=true;
			jugador2.servicio=false;
			situacionDeJuego(1)
			pelotaIndicaSaqueEnCartel()
		}

		jugador1.ijugador = -1;
		jugador2.ijugador = 0;
		cambiodelado();
	}

	if (
		(jugador2.ijugador == 3 && jugador1.ijugador < 3 && jugador == jugador2) ||
		(jugador2.ijugador == 4 && jugador1.ijugador < 4 && jugador == jugador2)
	) {
		jugador2.games += 1;
		if (jugador1.servicio) {
			jugador1.servicio=false;
			jugador2.servicio=true;
			situacionDeJuego(3)
			pelotaIndicaSaqueEnCartel()
		} else {			
			jugador1.servicio=true;
			jugador2.servicio=false;
			situacionDeJuego(1)
			pelotaIndicaSaqueEnCartel()
		}
		jugador2.ijugador = -1;
		jugador1.ijugador = 0;
		cambiodelado();
	}
	sumaset();
}

// Función suma SET
function sumaset() {
	if (
		(jugador1.games == 6 && jugador2.games < 5) ||
		(jugador1.games == 7 && jugador2.games == 5)
	) {
		jugador1.sets += 1;
		jugador1.set[nroset] = jugador1.games;
		jugador2.set[nroset] = jugador2.games;
		nroset += 1;
		match();
		reset();
	}
	if (
		(jugador2.games == 6 && jugador1.games < 5) ||
		(jugador2.games == 7 && jugador1.games == 5)
	) {
		jugador2.sets += 1;
		jugador1.set[nroset] = jugador1.games;
		jugador2.set[nroset] = jugador2.games;
		nroset += 1;
		match();
		reset();
	}
	if (jugador1.games == 6 && jugador2.games == 6) {
		reproducirAudio(audioTiebreak);
		t_iebreak = true;
	}
}

//función match
function match() {
	if (cantSets == 3 && jugador.sets == 2) {
		mostrarYDesaparecer("Ganador del juego: ", jugador1.nombre);
		reproducirAudio(audioGameSetAndMatch);
		document.getElementById("punto_jugador_1").hidden = true;
		document.getElementById("punto_jugador_2").hidden = true;
	}
	if (
		(cantSets == 5 && jugador1.sets == 3 && jugador2.sets == 0) ||
		(jugador1.sets == jugador2.sets + 2 && jugador2.sets != 0) ||
		(jugador1.sets == 5 && jugador2.sets == 4)
	) {
		mostrarYDesaparecer("Ganador del juego: ", jugador1.nombre);
		reproducirAudio(audioGameSetAndMatch);
		document.getElementById("punto_jugador_1").hidden = true;
		document.getElementById("punto_jugador_2").hidden = true;
	} else if (
		(cantSets == 5 && jugador2.sets == 3 && jugador1.sets == 0) ||
		(jugador2.sets == jugador1.sets + 2 && jugador1.sets != 0) ||
		(jugador2.sets == 5 && jugador1.sets == 4)
	) {
		mostrarYDesaparecer("Ganador del juego: ", jugador2.nombre);
		reproducirAudio(audioGameSetAndMatch);
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

let cambiarSaque = 0;
function tiebreak() {
	if (cambiarSaque==0) {
		deQueLadoSaco();
		cambiarSaque=1
	}
	jugador.ptiebreak = jugador.ptiebreak + 1;
	pelotaIndicaSaqueEnCartel()
	deQueLadoSaco();
	mostrar_resultado();
	setpoint();

	if (jugador1.ptiebreak == 7 && jugador2.ptiebreak <= 5) {
		jugador1.sets = jugador1.sets + 1;
		jugador1.set[nroset] = jugador1.games + 1;
		jugador2.set[nroset] = jugador2.games;
		nroset += 1;
		t_iebreak = false;
		pelotaIndicaSaqueEnCartel()
		reset();
	}
	if (jugador2.ptiebreak == 7 && jugador1.ptiebreak <= 5) {
		jugador1.set[nroset] = jugador1.games;
		jugador2.set[nroset] = jugador2.games + 1;
		nroset += 1;
		jugador2.sets = jugador2.sets + 1;
		t_iebreak = false;
		pelotaIndicaSaqueEnCartel()
		reset();
	}

	if (
		jugador1.ptiebreak == jugador2.ptiebreak + 2 &&
		jugador1.ptiebreak >= 5 &&
		jugador2.ptiebreak >= 5
	) {
		jugador1.set[nroset] = jugador1.games + 1;
		jugador2.set[nroset] = jugador2.games;
		nroset += 1;
		jugador1.sets = jugador1.sets + 1;
		game = true;
		t_iebreak = false;
		pelotaIndicaSaqueEnCartel()
		reset();
	}

	if (
		jugador1.ptiebreak + 2 == jugador2.ptiebreak &&
		jugador1.ptiebreak >= 5 &&
		jugador2.ptiebreak >= 5
	) {
		jugador1.sets = jugador1.sets + 1;
		jugador1.set[nroset] = jugador1.games;
		jugador2.set[nroset] = jugador2.games + 1;
		nroset += 1;
		jugador2.sets = jugador2.sets + 1;
		game = true;
		t_iebreak = false;
		pelotaIndicaSaqueEnCartel()
		reset();
	}
	match();
	cambiodelado();
	mostrar_resultado();
}


function mostrarYDesaparecer(informacion, nombre) {
	// Muestra el contenido en el elemento
	document.getElementById("informacion").innerHTML = informacion + nombre;

	// Después de 2 segundos, borra el contenido del elemento
	setTimeout(function () {
		document.getElementById("informacion").hidden = false;
		document.getElementById("informacion").innerHTML = "";
	}, 2000); // 2000 milisegundos = 2 segundos
}

function setpoint() {
	if (
		(jugador1.games >= 5 &&
			jugador2.games < jugador1.games &&
			jugador1.ijugador == 3 &&
			jugador2.ijugador < jugador1.ijugador) ||
		(jugador1.ptiebreak >= 6 && jugador2.ptiebreak < jugador1.ptiebreak)
	) {
		if (
			(cantSets == 3 && jugador1.sets == 1) ||
			(cantSets == 5 && jugador1.sets == 2)
		) {
			reproducirAudio(audioMatchPoint);
			mostrarYDesaparecer("Match Point: ", jugador1.nombre);
		} else {
			reproducirAudio(audioSetPoint);
			mostrarYDesaparecer("Set point ", jugador1.nombre);
		}
	}
	if (
		(jugador2.games >= 5 &&
			jugador1.games < jugador2.games &&
			jugador2.ijugador == 3 &&
			jugador1.ijugador < jugador2.ijugador) ||
		(jugador2.ptiebreak >= 6 && jugador1.ptiebreak < jugador2.ptiebreak)
	) {
		if (
			(cantSets == 3 && jugador2.sets == 1) ||
			(cantSets == 5 && jugador2.sets == 2)
		) {
			reproducirAudio(audioMatchPoint);
			mostrarYDesaparecer("Match Point: ", jugador2.nombre);
		} else {
			reproducirAudio(audioSetPoint);
			mostrarYDesaparecer("Set point ", jugador2.nombre);
		}
	}
}

function cambiodelado() {
    let sumagame = jugador1.games + jugador2.games;
    let sumaptiebreak = jugador1.ptiebreak + jugador2.ptiebreak;
    if (sumagame % 2 !== 0 || (sumaptiebreak % 6 == 0 && t_iebreak)) {
        mostrarYDesaparecer("Cambio de lado", "");

		// Cambio de lado en el lado A
        if (ladoA.ladoA==true) {
            saqueParJugador2.setAttribute("class", "ladoAsp");
			saqueImparJugador2.setAttribute("class", "ladoAsi");
            saqueParJugador1.setAttribute("class", "ladoBsp");
			saqueImparJugador1.setAttribute("class", "ladoBsi");

			devolucionParJugador2.setAttribute("class", "ladoAdp")
            devolucionImparJugador2.setAttribute("class", "ladoAdi")
            devolucionParJugador1.setAttribute("class", "ladoBdp")
            devolucionImparJugador1.setAttribute("class", "ladoBdi")
			ladoA.ladoA=false

        } else if (ladoA.ladoA==false){
            // Cambio de lado en el lado B (derecho)
            saqueParJugador2.setAttribute("class", "ladoBsp")
			saqueImparJugador2.setAttribute("class", "ladoBsi")
            saqueParJugador1.setAttribute("class", "ladoAsp")
			saqueImparJugador1.setAttribute("class", "ladoAsi")


            devolucionParJugador2.setAttribute("class", "ladoBdp")
            devolucionImparJugador2.setAttribute("class", "ladoBdi")
            devolucionParJugador1.setAttribute("class", "ladoAdp")
            devolucionImparJugador1.setAttribute("class", "ladoAdi")
			ladoA.ladoA=true
        }
    }

}

// MOSTRAR EL RESULTADO ****************
function mostrar_resultado() {
	document.getElementById("muestra_nombre_1").innerHTML = jugador1.nombre;
	document.getElementById("muestra_tiebreak_1").innerHTML = jugador1.ptiebreak;
	document.getElementById("muestra_tiebreak_2").innerHTML = jugador2.ptiebreak;
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


// Funcion muestra la pelota de quie saca
function pelotaIndicaSaqueEnCartel() {
    if (jugador1.servicio == true) {
		situacionDeJuego(1)
        document.getElementById("muestra_servicio_1").style.visibility = "visible";
        document.getElementById("muestra_servicio_2").style.visibility = "hidden";
		jugador1.servicio==false
		jugador2.servicio==true

    } else if (jugador1.servicio == false) {
		situacionDeJuego(3)
        document.getElementById("muestra_servicio_1").style.visibility = "hidden";
        document.getElementById("muestra_servicio_2").style.visibility = "visible";
		jugador1.servicio==true
		jugador2.servicio==false
    }
}

function deQueLadoSaco() {
	if (!t_iebreak) {
	// Servicio jugador 1
	if (jugador1.servicio) {
		if (saqueParJugador1.style.visibility == "hidden") {
			situacionDeJuego(1)

		} else if (saqueParJugador1.style.visibility == "visible") {
		situacionDeJuego(2)
		}
	}
	// Servicio jugador 2
	if (jugador2.servicio) {

		if (saqueParJugador2.style.visibility == "hidden") {
			situacionDeJuego(3)

		} else if (saqueParJugador2.style.visibility == "visible") {
			situacionDeJuego(4)
		}
	}
	}

	if (t_iebreak) {
			cont= jugador1.ptiebreak + jugador2.ptiebreak
		 if (jugador1.servicio) {
			 if (cont == 0){
				console.log("bloque 1 primer saque del tiebreak lado par  saca jugador1 ")
				situacionDeJuego(1)
				jugador1.servicio=false
				jugador2.servicio=true
			 }
			if ((cont % 2) == 0 & cont!=0) {
				console.log("bloque 2 saca jugador1 lado par  ")
				situacionDeJuego(1)
				jugador1.servicio=false
				jugador2.servicio=true
			} 	else if ((cont % 2) !== 0){
				console.log("bloque 3 saca jugador1 lado imparpar  ")
				situacionDeJuego(2)
			}

		} else if (jugador2.servicio) {
			if (cont == 0){
				console.log("bloque 4 saca jugador2 lado par  ")
				situacionDeJuego(3)
				jugador1.servicio=true
				jugador2.servicio=false
			}
			if  ((cont % 2) == 0 & cont!=0) {
				console.log("bloque 5 saca jugador2 lado par  ")
				situacionDeJuego(3)
				jugador1.servicio=true
				jugador2.servicio=false
            } else if ((cont % 2) !== 0){
				console.log("bloque 6 saca jugador2 lado impar  ")
				situacionDeJuego(4)
			}
			} 

		}	

} 	
		
