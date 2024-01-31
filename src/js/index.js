const botaoPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");
const nomeCapitulo = document.getElementById("capitulo");

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarMusica() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
  taTocando = 1;
}

function pausarMusica() {
  audioCapitulo.pause();
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  botaoPlayPause.classList.add("bi-play-circle-fill");
  taTocando = 0;
}

botaoPlayPause.addEventListener("click", () => {
  if (taTocando === 0) {
    tocarMusica();
  } else {
    pausarMusica();
  }
});

function voltarCapitulo() {
  if (capituloAtual === 1) {
    capituloAtual = 10;
  } else {
    capituloAtual = capituloAtual - 1;
  }

  audioCapitulo.src = "./src/books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarMusica();
  taTocando = 1;
  trocarNomeDaFaixa();
}

function proximoCapitulo() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1;
  }

  audioCapitulo.src = "./src/books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarMusica();
  taTocando = 1;
  trocarNomeDaFaixa();
}

function trocarNomeDaFaixa() {
  nomeCapitulo.innerText = "Capitulo " + capituloAtual;
}

botaoProximo.addEventListener("click", proximoCapitulo);
botaoAnterior.addEventListener("click", voltarCapitulo);
