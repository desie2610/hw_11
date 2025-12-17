let seconds = 60;

const timerEl = document.getElementById("timer1");
const messageEl = document.getElementById("message");

timerEl.textContent = `Залишилось: ${seconds} с`;

const interval = setInterval(() => {
    seconds--;

    timerEl.textContent = `Залишилось: ${seconds} с`;

    if (seconds === 30) {
        messageEl.textContent = "Залишилось менше половини часу!";
    }

    if (seconds === 0) {
        clearInterval(interval);
        messageEl.textContent = "Час вийшов!";
    }
}, 1000);



let time = 30000;
let interval2;

const timerEl2 = document.getElementById("timer2");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    time = 30000;

    interval2 = setInterval(() => {
        time--;

        timerEl2.textContent = (time / 1000).toFixed(2) + " с";

        if (time === 10000) {
            timerEl2.classList.add("animate");
        }

        if (time <= 0) {
            clearInterval(interval2);
            timerEl2.textContent = "0.00 с";
            timerEl2.classList.remove("animate");
            startBtn.disabled = false;
        }
    }, 1);
});