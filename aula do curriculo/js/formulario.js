const form = document.getElementById('myForm');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // previne o envio padrão do formulário
    
    const formData = new FormData(form); // cria um objeto FormData com os valores do formulário
    
    //obtém os valores do formulário a partir do objeto FormData
    const name = formData.get('name');
    const email = formData.get('email');
    const datanasc = formData.get('birthdate');
    const education = formData.get('education');
    const experience = formData.get('experience');
    const phone = formData.get('phone');
    const address = formData.get('address');
    const languages = formData.get('languages');
    
    console.log(`Nome: ${name}`);
    console.log(`E-mail: ${email}`);
    console.log(`Escolaridade: ${education}`);
    console.log(`Experiencia: ${experience}`);
    console.log(`Telefone: ${phone}`);
    console.log(`Endereço: ${address}`);
    console.log(`Idiomas: ${languages}`)


    

  });