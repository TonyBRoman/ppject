const correctWord = "amarillo";

function checkWord() {
    const inputs = document.querySelectorAll('input[type="text"]');
    let userWord = '';
    let correctWordCopy = correctWord.split('');

    // Concatenar valores ingresados por el usuario
    inputs.forEach(input => {
        userWord += input.value.toLowerCase();
    });

    // Limpiar clases previas
    inputs.forEach(input => {
        input.classList.remove('correct', 'present', 'absent');
    });

    // Verificar cada letra
    inputs.forEach((input, index) => {
        const char = input.value.toLowerCase();

        if (char === correctWord[index]) {
            input.classList.add('correct');
            correctWordCopy[index] = null; // Remover letra correcta de la copia
        } else if (correctWordCopy.includes(char)) {
            input.classList.add('present');
            correctWordCopy[correctWordCopy.indexOf(char)] = null; // Remover letra presente de la copia
        } else {
            input.classList.add('absent');
        }
    });

    // Verificar si la palabra es correcta
    if (userWord === correctWord) {
        window.location.href = "pista.html";
    } else {
        document.getElementById('message').textContent = "Intenta nuevamente.";
    }
}

// Manejar navegación entre cuadros de entrada
document.querySelectorAll('input[type="text"]').forEach((input, index, arr) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < arr.length - 1) {
            arr[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace" && input.value.length === 0 && index > 0) {
            arr[index - 1].focus();
        }
    });
});

