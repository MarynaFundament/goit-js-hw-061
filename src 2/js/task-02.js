const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(function(element) {
  console.log(element);
})


const addEl = document.createElement("li");
console.log(addEl); 

//  const categoryName = element.querySelector('h2').textContent;




addEl.classList.add(`item`);



const ulEl = document.querySelector(`ul#ingredients`); 
console.log(ulEl); 
ulEl.append(addEl); 

console.log(addEl); 

