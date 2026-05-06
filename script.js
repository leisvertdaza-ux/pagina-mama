/* 🎵 INICIAR */
function iniciarSorpresa() {
    mostrarGaleria();

    let audio = document.getElementById("musica");
    if (audio) {
        audio.volume = 0.5;
        audio.play().catch(() => {});
    }
}

/* 🎬 MOSTRAR GALERÍA */
function mostrarGaleria() {
    let portada = document.querySelector(".portada");
    portada.style.opacity = "0";

    setTimeout(() => {
        portada.style.display = "none";
        document.getElementById("galeria").style.display = "block";
    }, 800);
}

/* 💖 FRASES */
const frases = [
    "Eres mi razón de seguir 💖",
    "Gracias por todo mamá 🌸",
    "Siempre estaré para ti 💕"
];

let i = 0;
setInterval(() => {
    let f = document.getElementById("fraseDinamica");
    if (f) {
        f.innerText = frases[i];
        i = (i + 1) % frases.length;
    }
}, 3000);

/* 🎵 CONTROL MÚSICA */
function toggleMusica() {
    let audio = document.getElementById("musica");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

/* 🌸 PÉTALOS */
setInterval(() => {
    let petalo = document.createElement("span");
    petalo.innerHTML = "🌸";
    petalo.style.left = Math.random() * 100 + "vw";
    petalo.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.getElementById("petalos").appendChild(petalo);

    setTimeout(() => petalo.remove(), 5000);
}, 300);

/* 💌 ABRIR CARTA (SOLO MUESTRA EL SOBRE) */
function abrirCarta() {
    let carta = document.getElementById("carta");
    carta.style.display = "flex";

    let sonido = document.getElementById("sonidoCarta");
    if (sonido) {
        sonido.play().catch(() => {});
    }
}

/* ❌ CERRAR CARTA */
function cerrarCarta() {
    let carta = document.getElementById("carta");

    carta.style.opacity = "0";

    setTimeout(() => {
        carta.style.display = "none";
        carta.style.opacity = "1";
    }, 300);
}

/* 💖 RECUERDOS */
const recuerdos = [
    { img: "imagenes/img1.jpeg", texto: "💖 Gracias por tu amor infinito" },
    { img: "imagenes/img2.jpeg", texto: "🌷 Eres mi inspiración" },
    { img: "imagenes/img3.jpeg", texto: "❤️ Siempre estás conmigo" },
    { img: "imagenes/img4.jpeg", texto: "✨ Tu sonrisa ilumina mi vida" },
    { img: "imagenes/img5.jpeg", texto: "🙏 Gracias por todo mamá" },
    { img: "imagenes/img6.jpeg", texto: "💕 Eres mi orgullo" },
    { img: "imagenes/img7.jpeg", texto: "💓 Te amo con todo mi corazón" },
    { img: "imagenes/img8.jpeg", texto: "🌹 Siempre serás la mejor" }
];

function mostrarRecuerdo(i) {
    document.querySelector(".menu-recuerdos").style.display = "none";
    document.getElementById("visor").style.display = "block";

    document.getElementById("imgRecuerdo").src = recuerdos[i - 1].img;
    document.getElementById("textoRecuerdo").innerText = recuerdos[i - 1].texto;
}

function cerrarRecuerdo() {
    document.querySelector(".menu-recuerdos").style.display = "grid";
    document.getElementById("visor").style.display = "none";
}

/* 🔥 EVENTOS (cuando ya cargó todo) */
window.onload = function () {

    /* 💌 CLICK FUERA CIERRA */
    document.getElementById("carta").addEventListener("click", function(e) {
        if (e.target === this) {
            cerrarCarta();
        }
    });

    /* 💖 SOBRE SE ABRE AL HACER CLICK */
    let sobre = document.getElementById("sobre");
    if (sobre) {
        sobre.addEventListener("click", function() {
            this.classList.toggle("abierto");
        });
    }
};