const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const content = ingredients.map(ingr => {
  const elem = document.createElement("li");
  elem.classList.add('item');
  elem.textContent = ingr;
  return elem;
});

list.append(...content);


// for (let ingredient of ingredients) {
//   let elem = document.createElement("li");
//   elem.classList.add('item');
//   elem.textContent = ingredient;
//   content.push(elem);
// };
// list.append(...content);