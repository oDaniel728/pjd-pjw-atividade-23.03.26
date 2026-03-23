//Q1
/** @type { HTMLButtonElement } */
const btnStart = document.querySelector('button#btn-start');

/** @type { HTMLParagraphElement } */
const statusEl = document.querySelector("p.status");

console.log(btnStart);
console.log(statusEl);

btnStart.addEventListener("click", e => {
    statusEl.innerText = "Hello, world!";
});

// Q2
/** @type { HTMLSpanElement } */
const spanPontos = document.querySelector("span#pontos");
let pontos = 0;
/** @type { HTMLButtonElement } */
const incrementar = document.querySelector("button#incr");

incrementar.addEventListener("click", () => {
    pontos++;
    spanPontos.innerText = pontos;    
});

// Q3
document.addEventListener("keydown", e => {
    if (e.code === "ArrowUp") {
        console.log("PULO!");
    }
});

// Q4
/** @type { HTMLButtonElement } */
const comecarContador = document.querySelector("div#intervalo button#comecar");
/** @type { HTMLButtonElement } */
const pararContador = document.querySelector("div#intervalo button#parar");
/** @type { HTMLParagraphElement } */
const contadorEl = document.querySelector("div#intervalo p")
let contadorInterval;
let contadorValue = 0;

pararContador.addEventListener("click", e => {
    if (contadorInterval) {
        clearInterval(contadorInterval);
        contadorInterval = null;
    }
});
comecarContador.addEventListener("click", e => {
    if (!contadorInterval) {
        contadorInterval = setInterval(() => {
            contadorValue++;
            contadorEl.innerText = contadorValue;
        }, (1000));
    }
});

// Q5
/** @type { HTMLButtonElement } */
const botaoPiscante = document.querySelector("button#piscante");
/** @type { HTMLAudioElement } */
const som = document.querySelector("audio#glittersfx");

setInterval(() => {
    botaoPiscante.classList.toggle("destaque");
}, 500);
botaoPiscante.onclick = function()
{
    som.currentTime = 0;
    som.play();   
    alert("plim plim");
}