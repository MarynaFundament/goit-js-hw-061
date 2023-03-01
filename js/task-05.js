  const formEl = document.querySelector(`input#name-input`);
  console.log(formEl);

  const userNameOutputEl = document.querySelector(`span#name-output`);
  console.log(userNameOutputEl);

  formEl.addEventListener(`input`, (event) => {
    userNameOutputEl.textContent = event.target.value 

    if (event.target.value  === ''){
      userNameOutputEl.textContent = `Anonymous `
    }
  })

