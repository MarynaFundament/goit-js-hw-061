function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnEl = document.querySelector(`button`);
const spanEl = document.querySelector(`span`);
console.log(spanEl);

btnEl.addEventListener('click', changeColor);

function changeColor(event){
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}; 



 



  
