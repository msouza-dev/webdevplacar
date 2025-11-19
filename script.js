function marcarGol(time) {
    const container = document.getElementById("gols" + time);

    const bolinha = document.createElement("div");
    bolinha.classList.add("bolinha");

    container.appendChild(bolinha);
}

function zerarPlacar() {
    document.getElementById("golsA").innerHTML = "";
    document.getElementById("golsB").innerHTML = "";
}