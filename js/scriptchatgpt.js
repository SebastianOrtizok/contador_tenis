const jugador1 = {
    nombre: "nombre",
    puntos: 0,
    games: 0,
    sets: 0,
};

const jugador2 = {
    nombre: "nombre",
    puntos: 0,
    games: 0,
    sets: 0,
};

let game = false;

function updateDisplay() {
    document.getElementById("muestra_resultado_punto_1").innerHTML =
        "puntos: " + jugador1.puntos + "<br>" + "games: " + jugador1.games;
    document.getElementById("muestra_resultado_punto_2").innerHTML =
        "puntos: " + jugador2.puntos + "<br>" + "games: " + jugador2.games;
}

function handlePlayerButtonClick(player) {
    if (player.puntos === "ventaja") {
        jugador1.puntos = 0;
        jugador2.puntos = 0;
        updateDisplay();
        player.games++;
        game = true;
    } else if (player.puntos === 40 && jugador1.puntos === 40) {
        player.puntos = "ventaja";
    } else if (player.puntos !== 30 && player.puntos !== "ventaja" && !game) {
        player.puntos += 15;
    } else if (player.puntos === 30 && player.puntos !== "ventaja") {
        player.puntos += 10;
    }

    if (jugador1.puntos === "ventaja" && jugador2.puntos === "ventaja") {
        console.warn("Ambos jugadores en ventaja");
        jugador1.puntos = 40;
        jugador2.puntos = 40;
        updateDisplay();
    }

    if (player.puntos > 40) {
        jugador1.puntos = 0;
        jugador2.puntos = 0;
        updateDisplay();
        player.games++;
        game = true;
    }

    updateDisplay();
}

const boton1 = document.getElementById("punto_jugador_1");
boton1.addEventListener("click", function () {
    handlePlayerButtonClick(jugador1);
});

const boton2 = document.getElementById("punto_jugador_2");
boton2.addEventListener("click", function () {
    handlePlayerButtonClick(jugador2);
});
