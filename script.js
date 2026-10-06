const botonEntrar = document.getElementById("entrar");
const bienvenida = document.getElementById("bienvenida");

botonEntrar.addEventListener("click", function () {

    // Crear mariposas
    for (let i = 0; i < 15; i++) {

        const mariposa = document.createElement("div");

        mariposa.className = "mariposa-volando";
        mariposa.textContent = "🦋";

        // Posición inicial
        mariposa.style.top = Math.random() * 90 + "vh";

        // Tamaño diferente
        mariposa.style.fontSize =
            25 + Math.random() * 35 + "px";

        // Velocidad diferente
        mariposa.style.animationDuration =
            3 + Math.random() * 2 + "s";

        // Salida escalonada
        mariposa.style.animationDelay =
            Math.random() * 0.8 + "s";

        document.body.appendChild(mariposa);
    }

    // Desaparece la pantalla de bienvenida
    setTimeout(() => {
        bienvenida.classList.add("salir");
    }, 500);

    // Quitamos la pantalla después de la transición
    setTimeout(() => {
        bienvenida.remove();
    }, 1800);

    // Limpiamos las mariposas después
    setTimeout(() => {

        document
            .querySelectorAll(".mariposa-volando")
            .forEach(mariposa => mariposa.remove());

    }, 6000);

});
/* ========================================
   DISCO MUSICAL DE VALERY
======================================== */

const disco = document.getElementById("disco");
const cancionValery = document.getElementById("cancionValery");

if (disco && cancionValery) {

    disco.addEventListener("click", function () {

        if (cancionValery.paused) {

            cancionValery.play();

            disco.classList.add("reproduciendo");

        } else {

            cancionValery.pause();

            disco.classList.remove("reproduciendo");

        }

    });

    /* Cuando termine la canción */

    cancionValery.addEventListener("ended", function () {

        disco.classList.remove("reproduciendo");

    });

}