
 

const listEl = document.querySelectorAll('.item');
console.log(`Number of categories ${listEl.length}`)

listEl.forEach(element => {
  const categoryName = element.querySelector('h2').textContent;
  const categoryAmount = element.querySelectorAll('li').length; 
  console.log(`Category: ${categoryName} Amount: ${categoryAmount}`);

})


// const categoriesItems = categoriesList.querySelectorAll('.item');
// console.log(`В списку ${categoriesItems.length} категорії.`);

// categoriesItems.forEach(item => {
//   const categoryName = item.querySelector('h2').textContent;
//   const categoryItemsCount = item.querySelectorAll('li').length - 1;
//   console.log(`Категорія: ${categoryName} (кількість елементів: ${categoryItemsCount})`);
// });




