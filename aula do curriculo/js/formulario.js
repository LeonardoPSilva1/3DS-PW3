const form = document.getElementById('myForm');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // previne o envio padrão do formulário
    
    const formData = new FormData(form); // cria um objeto FormData com os valores do formulário
    
    //obtém os valores do formulário a partir do objeto FormData
    const name = formData.get('name');
    const email = formData.get('email');
    const birthdate = formData.get('birthdate');
    
    console.log(`Nome: ${name}`);
    console.log(`E-mail: ${email}`);
    console.log(`Data de Nascimento: ${birthdate}`);

    

  });