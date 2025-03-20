const lyricsData = {
    "The Archer": {
        line: "I've been the archer, I've been the _",
        answer: "prey",
        hint: "Think of a hunter and its target."
    },
    "I Can Do It with a Broken Heart": {
        line: "Lights, camera, ___. I can do it with a broken heart",
        answer: "action",
        hint: "What happens when a movie starts?"
    },
    "I Think He Knows": {
        line: "I think he knows, that he better ___",
        answer: "lock it down",
        hint: "Think about securing something."
    },
    "Enchanted": {
        line: "This night is ____, don't you let it go",
        answer: "sparkling",
        hint: "What do diamonds do?"
    },
    "Call It What You Want": {
        line: "I want to wear his ____ on a chain 'round my neck",
        answer: "initial",
        hint: "Think of a monogram."
    }
};

document.getElementById("songSelect").addEventListener("change", function () {
    const selectedSong = this.value;
    if (lyricsData[selectedSong]) {
        document.getElementById("lyricsDisplay").textContent = lyricsData[selectedSong].line;
        document.getElementById("lyricsDisplay").classList.remove("hidden");
        document.getElementById("lyricsInput").classList.remove("hidden");
        document.getElementById("submitLyrics").classList.remove("hidden");
        document.getElementById("hintButton").classList.remove("hidden");
    }
});

document.getElementById("submitLyrics").addEventListener("click", function () {
    const selectedSong = document.getElementById("songSelect").value;
    const userInput = document.getElementById("lyricsInput").value.toLowerCase().trim();

    if (userInput === lyricsData[selectedSong].answer) {
        document.getElementById("message").textContent = "✅ Correct! You can proceed to the next level swiftie.";
        document.getElementById("nextLevelBtn").classList.remove("hidden");
    } else {
        document.getElementById("message").textContent = "❌ Wrong! Try again.";
    }
});

document.getElementById("hintButton").addEventListener("click", function () {
    const selectedSong = document.getElementById("songSelect").value;
    document.getElementById("hintText").textContent = "Hint: " + lyricsData[selectedSong].hint;
    document.getElementById("hintText").classList.remove("hidden");
});

document.getElementById("nextLevelBtn").addEventListener("click", function () {
    window.location.href = "puzzle2.html";
});