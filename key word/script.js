const correctWord = "caridad";

function checkWord() {
    const inputs = document.querySelectorAll('input[type="text"]');
    let userWord = '';
    let correctWordCopy = correctWord.split('');

    inputs.forEach(input => {
        userWord += input.value.toLowerCase();
    });

    inputs.forEach((input, index) => {
        const char = input.value.toLowerCase();
        input.classList.remove('correct', 'present', 'absent');

        if (char === correctWord[index]) {
            input.classList.add('correct');
            correctWordCopy[index] = null; // Remove correct letter from the copy
        } else if (correctWordCopy.includes(char)) {
            input.classList.add('present');
            correctWordCopy[correctWordCopy.indexOf(char)] = null; // Remove present letter from the copy
        } else {
            input.classList.add('absent');
        }
    });

    if (userWord === correctWord) {
        window.location.href = "pista.html";
    } else {
        document.getElementById('message').textContent = "Intenta nuevamente.";
    }
}

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

