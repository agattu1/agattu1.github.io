const element = document.getElementById('typewriter');
const text = 'ANIRUDH GATTU'; // Replace with your desired text
let index = 0;

function type() {
  element.textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(type, 100); // Typing speed in milliseconds (adjust as needed)
  }
}

type();
