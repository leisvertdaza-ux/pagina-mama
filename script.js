function mostrarGaleria() {
    document.querySelector(".portada").style.display = "none";
    document.getElementById("galeria").style.display = "block";
}

/* 🎵 iniciar sorpresa */
function iniciarSorpresa() {
    mostrarGaleria();

    let audio = document.getElementById("musica");

    if (audio) {
        audio.muted = false;
        audio.volume = 1;

        audio.currentTime = 0;

        audio.play()
        .then(() => {
            console.log("Música iniciada ✅");
        })
        .catch(error => {
            console.log("Error audio:", error);
        });
    }
}

/* 💖 corazones animados */
setInterval(() => {
    let corazon = document.createElement("div");
    corazon.innerHTML = "💖";
    corazon.style.position = "fixed";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.top = "100%";
    corazon.style.fontSize = "20px";

    document.body.appendChild(corazon);

    let subir = setInterval(() => {
        corazon.style.top = (corazon.offsetTop - 5) + "px";
    }, 30);

    setTimeout(() => {
        clearInterval(subir);
        corazon.remove();
    }, 4000);
}, 500);

/* 🔍 abrir imagen */
function abrirImagen(src) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("imgGrande").src = src;
}

/* ❌ cerrar imagen */
function cerrarImagen() {
    document.getElementById("lightbox").style.display = "none";
}

/* 🌸 PETALOS ANIMADOS */
setInterval(() => {
    let petalo = document.createElement("span");
    petalo.innerHTML = "🌸";
    petalo.style.left = Math.random() * 100 + "vw";
    petalo.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.getElementById("petalos").appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, 5000);
}, 300);

/* 💌 CARTA */
function abrirCarta() {
    document.getElementById("carta").style.display = "flex";
}

function cerrarCarta() {
    document.getElementById("carta").style.display = "none";
}

/* GIRAR TARJETAS AL HACER CLIC */
document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});

const recuerdos = [
    { img: "imagenes/img1.jpeg", texto: "💖 Gracias por tu amor infinito" },
    { img: "imagenes/img2.jpeg", texto: "🌷 Eres mi mayor inspiración" },
    { img: "imagenes/img3.jpeg", texto: "❤️ Siempre estás conmigo" },
    { img: "imagenes/img4.jpeg", texto: "✨ Tu sonrisa ilumina mi vida" },
    { img: "imagenes/img5.jpeg", texto: "🙏 Gracias por todo mamá" },
    { img: "imagenes/img6.jpeg", texto: "💕 Eres mi orgullo" },
    { img: "imagenes/img7.jpeg", texto: "💓 Te amo con todo mi corazón" },
    { img: "imagenes/img8.jpeg", texto: "🌹 Siempre serás la mejor" }
];

function mostrarRecuerdo(i) {
    document.querySelector(".menu-recuerdos").style.display = "none";

    let visor = document.getElementById("visor");
    visor.style.display = "block";

    document.getElementById("imgRecuerdo").src = recuerdos[i - 1].img;
    document.getElementById("textoRecuerdo").innerText = recuerdos[i - 1].texto;
}

function cerrarRecuerdo() {
    document.querySelector(".menu-recuerdos").style.display = "grid";
    document.getElementById("visor").style.display = "none";
}