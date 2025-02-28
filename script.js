const texts = [
    "Programmer",
    "Full Stack Developer",
    "Blockchain Developer",
    "Open Source Lover",
    "GSoC'23 Contributor"
];

let index = 0;
const dynamicTextElement = document.querySelector('.dynamic-text');

function rotateText() {
    dynamicTextElement.style.transform = `translateY(-${index * 2.5}rem)`;
    index = (index + 1) % texts.length;
}

setInterval(rotateText, 2000); // Change text every 2 seconds


