function playSound(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let i = 0; i < listaDeTeclas.length; i++) {
    listaDeTeclas[i].addEventListener("click", () => {
        playSound("#sonido_" + listaDeTeclas[i].classList[1]);
    });

    listaDeTeclas[i].addEventListener("keydown", (e) => {
        if (e.code === "Enter" || e.code === "Space") {
            listaDeTeclas[i].classList.add("activa");
        }
    });

    listaDeTeclas[i].addEventListener("keyup", (e) => {
        if (e.code === "Enter" || e.code === "Space") {
            listaDeTeclas[i].classList.remove("activa");
        }
    });
}
