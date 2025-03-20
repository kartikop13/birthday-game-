const clues = document.querySelectorAll(".clue");
const suspects = document.querySelectorAll(".suspect");
const checkAnswerBtn = document.getElementById("checkAnswer");
const resultMessage = document.getElementById("resultMessage");
const nextLevelBtn = document.getElementById("nextLevel");

let correctMatches = {
    "clue1": "suspect1", // Sal Singh received the last call
    "clue2": "suspect2", // Max Hastings had secret texts
    "clue3": "suspect3"  // Jason Bell was hiding Andie’s journal
};

let playerChoices = {};

clues.forEach(clue => {
    clue.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text", event.target.id);
    });
});

suspects.forEach(suspect => {
    suspect.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    suspect.addEventListener("drop", function (event) {
        event.preventDefault();
        let clueId = event.dataTransfer.getData("text");
        playerChoices[clueId] = this.id;
        this.appendChild(document.getElementById(clueId));
    });
});

checkAnswerBtn.addEventListener("click", function () {
    let correct = true;
    for (let clue in correctMatches) {
        if (playerChoices[clue] !== correctMatches[clue]) {
            correct = false;
            break;
        }
    }

    if (correct) {
        resultMessage.innerHTML = "✅ YOU SOLVED THE CASE!";
        nextLevelBtn.style.display = "block";
    } else {
        resultMessage.innerHTML = "❌ Wrong connections! Try again.";
    }
});

nextLevelBtn.addEventListener("click", function () {
    window.location.href = "puzzle3.html";
});