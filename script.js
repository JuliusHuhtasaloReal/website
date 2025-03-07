function toggleMenu(){
    const menu = document.querySelector(".menu_links");
    const icon = document.querySelector(".hamburger_icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function randomChar() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    return chars[Math.floor(Math.random() * chars.length)];
}
function revealText(element, duration = 800) {
    let targetText = element.textContent.trim(); // Read text from the HTML
    let scrambled = targetText.split("").map(() => randomChar());
    let currentIndex = 0;
    let intervalTime = duration / targetText.length; // Time per character lock-in

    let scrambleInterval = setInterval(() => {
        // Scramble all remaining characters
        for (let i = currentIndex; i < targetText.length; i++) {
            scrambled[i] = randomChar();
        }

        // Lock in the current character
        if (currentIndex < targetText.length) {
            scrambled[currentIndex] = targetText[currentIndex];
            currentIndex++;
        }

        // Update text content
        element.textContent = scrambled.join("");

        // Stop when all characters are revealed
        if (currentIndex >= targetText.length) {
            clearInterval(scrambleInterval);
        }
    }, intervalTime);
}

// Apply the effect to all elements with the class "scramble-text"
document.querySelectorAll(".scramble-text").forEach(element => {
    revealText(element);
});


var video = document.getElementById("backgroundVideo");
video.playbackRate = 0.65;

