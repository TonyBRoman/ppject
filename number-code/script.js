document.addEventListener("DOMContentLoaded", () => {
    const codes = {
        "93645": "Han resuelto un reto, pero no se confien.<br>Mis trampas apenas comienzan.<br><br>En el centro de la sala estoy,<br>Sostengo mensajes y juegos hoy.<br>Mira debajo de mi estructura fiel,<br>Allí encontrarás tu siguiente nivel.",
        "23470": "No se engañen, pues su suerte acaba aquí.<br>Haré todo lo posible para detenerlos.<br><br>Escribe la palabra clave arriba del mensaje cifrado,<br>arriba letra por letra.<br><br> Aquí encontrarás el siguiente desafio:<br><br>Entre sillas grises me hallo,<br>Soy pequeña, pero util sin fallo.<br>Mira debajo de mí con cuidado,<br>Tu siguiente desafío será encontrado.",
        "11838": "No puedo esperar a verlos fallar y unirse a mis monos voladores.<br>Cada segundo cuenta, y el precio del fracaso es eterno<br>¡Pronto, serán míos para siempre!<br><br>Entre los vasos, tu pista hallarás,<br>Tu siguiente desafío encontrarás.",
        "25739": "¡Insolentes! ¡No puedo creer que hayan logrado avanzar tanto!<br>Pero no se engañen, lo peor aun esta por venir.<br>Hare todo lo posible para detenerlos y asegurarme de que<br>nunca encuentren el objeto final ¡No saldrán de Oz tan fácilmente!<br><br>Para encontrar la pista que deseas hallar.<br>Necesitarás una luz que puedas proyectar.<br>Usa una linterna y verás la verdad,<br>La sombra revelará tu siguiente oportunidad.",
        "26098": "¡Así que han llegado al desafio final! Pero no se emocionen<br>demasiado, porque este será el más difícil de todos.<br>Si fallan, se uniran a mis filas de monos voladores,<br>condenados a volar sin rumbo por la eternidad.<br>¿Creen que pueden superar mi prueba definitiva?<br>¡Adelante, si se atreven!<br><br>Cinco botellas están escondidas,<br>Cada una con un número, bien definidas.<br>Primero búscalas en cada rincón,<br>Luego ordénalas con precisión.<br><br>De menor a mayor, deben quedar,<br>Para que el siguiente paso puedas hallar.<br>Cuando en fila correcta estén,<br>Tu desafío habrás resuelto bien.",
        "12345": "Este es el que se usara de prueba."
    };
    let attempts = 4;

    const codeForm = document.getElementById("codeForm");
    const codeBoxes = document.querySelectorAll(".code-box");
    const message = document.getElementById("message");
    const loginPage = document.getElementById("login-page");
    const successPage = document.getElementById("success-page");
    const successMessage = document.getElementById("success-message");
    const failurePage = document.getElementById("failure-page");

    codeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let enteredCode = "";
        codeBoxes.forEach(box => enteredCode += box.value);

        if (codes[enteredCode]) {
            successMessage.innerHTML = codes[enteredCode];
            codeBoxes.forEach(box => box.classList.add("correct"));
            setTimeout(() => {
                loginPage.style.display = "none";
                successPage.style.display = "block";
            }, 500);
        } else {
            codeBoxes.forEach(box => box.classList.add("incorrect"));
            attempts--;
            if (attempts > 0) {
                message.textContent = `Código incorrecto. Te quedan ${attempts} intentos.`;
                message.style.color = "red";
                setTimeout(() => {
                    codeBoxes.forEach(box => box.classList.remove("incorrect"));
                }, 500);
            } else {
                loginPage.style.display = "none";
                failurePage.style.display = "block";
            }
        }
    });

    codeBoxes.forEach((box, index) => {
        box.addEventListener("input", () => {
            if (box.value.length === 1 && index < codeBoxes.length - 1) {
                codeBoxes[index + 1].focus();
            }
        });
    });
});





