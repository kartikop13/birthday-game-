document.getElementById("castButton").addEventListener("click", function () {
    let input = document.getElementById("spellInput").value.trim().toLowerCase();
    
    let spells = ["alohomora", "lumos", "expelliarmus", "accio"];
    let taylorSongs = ["the archer", "enchanted", "call it what you want", "i can do it with a broken heart"];

    if (spells.includes(input)) {
        window.location.href = "puzzle1.html"; // Redirect to puzzle 1
    } else if (taylorSongs.includes(input)) {
        document.getElementById("hintText").classList.remove("hidden");
        document.getElementById("hintText").textContent = "You found a Swiftie secret! ✨";
    } else {
        alert("Try again! Either a spell or a Taylor Swift song.");
    }
});