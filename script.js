function marcarGol(time) {
    const container = document.getElementById("gols" + time);

    const bolinha = document.createElement("div");
    bolinha.classList.add("bolinha");

    container.appendChild(bolinha);
}
