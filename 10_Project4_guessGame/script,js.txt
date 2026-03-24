const randomno = Math.floor(Math.random() * 100) + 1;

const userinput = document.querySelector("#guess");
const submitbtn = document.querySelector("#submit");
const result = document.querySelector(".result");
const previousguesses = document.querySelector(".previous-guesses");
const remaining = document.querySelector(".guesses-remaining");

let attempt = 10;
let prevGuesses = [];

remaining.textContent = attempt;

submitbtn.addEventListener("click", (e) => {
    e.preventDefault();

    const guess = Number(userinput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.firstElementChild.textContent =
            "Please enter a number between 1 and 100.";
        return;
    }

    prevGuesses.push(guess);
    previousguesses.textContent = prevGuesses.join(", ");

    if (guess === randomno) {
        result.firstElementChild.textContent =
            "🎉 Congratulations! You guessed the number!";
        submitbtn.disabled = true;
        return;
    } else if (guess < randomno) {
        result.firstElementChild.textContent = "📉 Too low! Try again.";
    } else {
        result.firstElementChild.textContent = "📈 Too high! Try again.";
    }

    attempt--;
    remaining.textContent = attempt;

    if (attempt === 0) {
        result.firstElementChild.textContent =
            `❌ Game Over! The number was ${randomno}`;
        submitbtn.disabled = true;
    }

    userinput.value = "";
    userinput.focus();
});