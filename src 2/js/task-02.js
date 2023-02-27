const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = ingredients.map(ingredient => {
  const addEl = document.createElement("li");
  addEl.classList.add(`item`);
  addEl.textContent= ingredient;
  console.log(addEl)
  return addEl;

});
console.log(elements)

const ulEl = document.querySelector(`ul#ingredients`);
ulEl.append(...elements);






