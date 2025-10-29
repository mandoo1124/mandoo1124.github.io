let count = 0;

const button = document.getElementById('clickButton');
const countDisplay = document.getElementById('clickCount');

button.addEventListener('click', () => {
  count++;
  countDisplay.textContent = `You've pressed the button ${count} time${count === 1 ? '' : 's'}.`;

  // optional retro "blink" effect
  button.style.transform = 'scale(0.95)';
  setTimeout(() => (button.style.transform = 'scale(1)'), 100);
});