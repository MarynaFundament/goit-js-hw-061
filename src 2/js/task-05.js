  const formEl = document.querySelector(`input#name-input`);
  console.log(formEl);


  const userNameOutputEl = document.querySelector(`span#name-output`);
  console.log(userNameOutputEl.textContent);

  let empSpan = userNameOutputEl.textContent;
  console.log(empSpan);

  formEl.addEventListener(`input`, handleInputChange)

  function handleInputChange(event){
  userNameOutputEl.textContent = event.target.value;

  if (event.target.value === '') {
		userNameOutputEl.textContent = 'Anonymous'
	}
  
  }

  


  

 


