const formEl = document.querySelector(`input`);
console.log(formEl);

const spanEl = document.querySelector(`span`);
console.log(spanEl);



formEl.addEventListener(`input`, (event) =>{
    console.log(event); 

    spanEl.style.fontSize = formEl.value + 'px'
     


  })



 
