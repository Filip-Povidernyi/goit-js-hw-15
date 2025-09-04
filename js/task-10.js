const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(amount) {
  const boxItems = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxItems.push(box);
    size += 10;
  };
  boxes.append(...boxItems);
};

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
  input.value = '';
});
