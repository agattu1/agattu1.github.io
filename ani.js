// JavaScript
const headingElement = document.getElementById('typing-effect');
const subtitleElement = document.getElementById('typing-effect-subtitle');
const headingText = 'Nano Artz Technologies';
const subtitleText = 'Quality Over Quantity';

let headingIndex = 0;
let subtitleIndex = 0;

function typeHeading() {
  headingElement.textContent = headingText.slice(0, headingIndex++);
  if (headingIndex <= headingText.length) {
    setTimeout(typeHeading, 100); // Typing speed for heading (adjust as needed)
  }
}

function typeSubtitle() {
  subtitleElement.textContent = subtitleText.slice(0, subtitleIndex++);
  if (subtitleIndex <= subtitleText.length) {
    setTimeout(typeSubtitle, 100); // Typing speed for subtitle (adjust as needed)
  }
}

typeHeading();
setTimeout(typeSubtitle, 1000); // Delay before starting the subtitle typing effect (adjust as needed)
