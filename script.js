const texts = [
    "Programmer",
    "Full Stack Developer",
    "Blockchain Developer",
    "Open Source lover",
    "GSoC'23 Contributor"
];

let index = 0;
const rotatingTextElement = document.querySelector('.rotating-text');

function rotateText() {
    rotatingTextElement.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(rotateText, 2000); // Change text every 2 seconds
