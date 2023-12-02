function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

function createBoxes(amount) {

  const boxes = document.querySelector('#boxes');
  const boxItems = [];
  let size = 30;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxItems.push(box);
    size += 10;
  };
  boxes.append(...boxItems);
};

function destroyBoxes() {
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = '';
};

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});