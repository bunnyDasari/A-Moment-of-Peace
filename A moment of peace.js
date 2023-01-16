let twoBtn = document.getElementById("twentySecondsBtn");
let threeBtn = document.getElementById("thirtySecondsBtn");
let fourBtn = document.getElementById("fortySecondsBtn");
let oneBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");



twoBtn.onclick = function() {
    let count = 20;

    let setInt = setInterval(function() {
        count = count - 1;
        timerText.textContent = count + " seconds left";
        if (count === 0) {
            timerText.textContent = "Your moment is complted";
            clearInterval(setInt);
        }
    }, 1000);
};

threeBtn.onclick = function() {
    let count = 30;

    let setInt = setInterval(function() {
        count = count - 1;
        timerText.textContent = count + " seconds left";
        if (count === 0) {
            timerText.textContent = "Your moment is complted";
            clearInterval(setInt);
        }
    }, 1000);
};

fourBtn.onclick = function() {
    let count = 40;

    let setInt = setInterval(function() {
        count = count - 1;
        timerText.textContent = count + " seconds left";
        if (count === 0) {
            timerText.textContent = "Your moment is complted";
            clearInterval(setInt);
        }
    }, 1000);
};


oneBtn.onclick = function() {
    let count = 1;

    let setInt = setInterval(function() {
        count = count - 1;
        timerText.textContent = count + " seconds left";
        if (count === 0) {
            timerText.textContent = "Your moment is complted";
            clearInterval(setInt);
        }
    }, 1000);
};