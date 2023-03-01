
const btnsEl = document.querySelectorAll(`button`);
console.log(btnsEl); 

btnsEl[0].classList.add(`first-btn`);
console.log(btnsEl); 

const firstBtn = btnsEl[0]; 
console.log(firstBtn); 

btnsEl[1].classList.add(`second-btn`);
console.log(btnsEl);

const secondBtn = btnsEl[1]; 
console.log(secondBtn); 


let counterValue = 0;

const handleAddEl = () =>{
    counterValue +=1;
  
    document.querySelector(`#value`).innerHTML = counterValue;
}



secondBtn.addEventListener(`click`,handleAddEl )


const handleremoveEl = () =>{
    counterValue -=1;
  
    document.querySelector(`#value`).innerHTML = counterValue;
}


firstBtn.addEventListener(`click`, handleremoveEl)


