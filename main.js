"use strict";

const botaoTrocarImagem = document.getElementById("trocar-imagem");
const inputEsporte = document.getElementById("esporte");

const esportes = {
    "skate": "./img/skate.jpg",
    "natacao": "./img/natacao02.webp",
    "futebol": "./img/futebol.webp",
    "ginastica": "./img/ginastica.avif",
    "atletismo": "./img/atletismo.avif",
};

// Função para trocar a imagem 
function trocarImagemPorNome() {
    const esporteDigitado = inputEsporte.value.toLowerCase().trim(); 
    if (esportes[esporteDigitado]) {
        document.documentElement.style.setProperty("--imagem-fundo", `url('${esportes[esporteDigitado]}')`);
    } else {
        alert("Esporte não encontrado!");
    }
}

function trocarImagemAleatoria() {
    const nomesEsportes = Object.keys(esportes);
    const esporteAleatorio = nomesEsportes[Math.floor(Math.random() * nomesEsportes.length)];
    document.documentElement.style.setProperty("--imagem-fundo", `url('${esportes[esporteAleatorio]}')`);
}

inputEsporte.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        trocarImagemPorNome();
    }
});
botaoTrocarImagem.addEventListener("click", trocarImagemAleatoria);
