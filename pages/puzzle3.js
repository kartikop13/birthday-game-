let correctOrder = ["invisibilityCloak", "elderWand", "resurrectionStone"];
let playerSelection = ["", "", ""];
let hintsRemaining = 3;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event, slot) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    playerSelection[slot] = data;
    document.getElementById(event.target.id).innerText = document.getElementById(data).innerText;
    document.getElementById(event.target.id).style.background = "rgba(0, 255, 0, 0.5)";
}

function checkSolution() {
    if (JSON.stringify(playerSelection) === JSON.stringify(correctOrder)) {
        document.getElementById("message").innerHTML = "✨ The door unlocks! You have solved the puzzle! Redirecting... ✨";
        document.getElementById("message").style.color = "lime";
        
        // Redirect to final_page.html after 2 seconds
        setTimeout(() => { 
            window.location.href = "surprise.html"; 
        }, 2000);
        
    } else {
        document.getElementById("message").innerHTML = "❌ Incorrect! Try again!";
        document.getElementById("message").style.color = "red";
    }
}

function showHint() {
    if (hintsRemaining > 0) {
        let hints = [
            "Hint 1: One of the objects is invisible but powerful.",
            "Hint 2: The most powerful wand ever made is needed.",
            "Hint 3: The last item brings back souls from the dead."
        ];
        document.getElementById("hintText").innerText = hints[3 - hintsRemaining];
        hintsRemaining--;
        document.getElementById("hintCount").innerText = hintsRemaining;
    } else {
        document.getElementById("hintText").innerText = "No more hints left!";
    }
}