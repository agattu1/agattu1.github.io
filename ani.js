// JavaScript
const headingElement = document.getElementById('typing-effect');
const text = 'Nano Artz Technologies';
let index = 0;

function type() {
  headingElement.textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(type, 100); // Typing speed in milliseconds (adjust as needed)
  }
}

type();
