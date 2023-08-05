const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
let intervalId = null;
stopBtn.disabled = true;

const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', e => {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  e.target.setAttribute('disabled', true);
  e.target.nextElementSibling.removeAttribute('disabled');
});

stopBtn.addEventListener('click', e => {
  clearInterval(intervalId);
  e.target.setAttribute('disabled', true);
  e.target.previousElementSibling.removeAttribute('disabled');
});
