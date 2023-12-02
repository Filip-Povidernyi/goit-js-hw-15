function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// function getRandomHexColorBtn() {
//   return `#${Math.floor((1 - Math.random()) * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  // const btnColor = getRandomHexColorBtn();

  body.style.backgroundColor = color;
  span.textContent = color;
  // button.style.backgroundColor = btnColor;

});