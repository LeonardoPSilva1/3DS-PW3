let tags = ['div','h1', 'h2', 'p', 'div', 'h2', 'p', 'h2', 'p', 'h3', 'p', 'h3', 'p', 'h3', 'p', 'div', 'h2', 'p', 'div', 'h2', 'p', 'h2', 'p']
let listaTags = []
let body = document.querySelector('body')

// criei as tags div e o p
tags.forEach(tag => {
    let tagNova = criarTags(tag);
    listaTags.push(tagNova);
});

const urlParams = window.location.href;
const url = new URL(urlParams);

var nome = url.searchParams.get("name");
var birthdate = url.searchParams.get("birthdate");
var educa = url.searchParams.get("education");
var exp = url.searchParams.get("experience");
var tel = url.searchParams.get("phone");
var email = url.searchParams.get("email");
var end = url.searchParams.get("address");
var linguas = url.searchParams.get("languages");
var certificados = url.searchParams.get("certificates");
var obj = url.searchParams.get("objective");


function imprimir() {
    return `${exp}`
    
}

console.log(imprimir())


//Nome, Data de Nascimento, Escolaridade, experiencia, telefone, email, endereço, idiomas, certificados, objetivo proficional

listaTags[1].textContent = "Nome:"+ nome;
listaTags[2].textContent = "Data de Nascimento: " 
listaTags[3].textContent = birthdate;

listaTags[5].textContent = "Escolaridade:"
listaTags[6].textContent = educa;
listaTags[7].textContent = "Experiencia: "
listaTags[8].textContent = exp;
listaTags[9].textContent = "Telefone:"
listaTags[10].textContent = tel;
listaTags[11].textContent = email;
listaTags[12].textContent = ''
listaTags[13].textContent = "Endereço: " 
listaTags[14].textContent = end;

listaTags[16].textContent = "Idiomas: "
listaTags[17].textContent = linguas;

listaTags[19].textContent = "Certificados: " 
listaTags[20].textContent = certificados;
listaTags[21].textContent = "Objetivo Proficional: "
listaTags[22].textContent = obj;

// adicionei a div no DOM

body.appendChild(listaTags[0])
listaTags[0].classList.add('container')

body.appendChild(listaTags[4])
listaTags[4].classList.add('bodyI')

body.appendChild(listaTags[15])
listaTags[15].classList.add('bodyM')

body.appendChild(listaTags[18])
listaTags[18].classList.add('Final')

// incluindo na div a tag p

listaTags[0].appendChild(listaTags[1])
listaTags[1].classList.add('name')
listaTags[0].appendChild(listaTags[2])
listaTags[2].classList.add('birthdate')
listaTags[0].appendChild(listaTags[3])
listaTags[3].classList.add('texto')

listaTags[4].appendChild(listaTags[5])
listaTags[5].classList.add('education')
listaTags[4].appendChild(listaTags[6])
listaTags[6].classList.add('texto')
listaTags[4].appendChild(listaTags[7])
listaTags[7].classList.add('experience')
listaTags[4].appendChild(listaTags[8])
listaTags[8].classList.add('texto')
listaTags[4].appendChild(listaTags[9])
listaTags[9].classList.add('phone')
listaTags[4].appendChild(listaTags[10])
listaTags[10].classList.add('texto')
listaTags[4].appendChild(listaTags[11])
listaTags[11].classList.add('email')
listaTags[4].appendChild(listaTags[12])
listaTags[12].classList.add('texto')
listaTags[4].appendChild(listaTags[13])
listaTags[13].classList.add('address')
listaTags[4].appendChild(listaTags[14])
listaTags[14].classList.add('texto')

listaTags[15].appendChild(listaTags[16])
listaTags[16].classList.add('languages')
listaTags[15].appendChild(listaTags[17])
listaTags[17].classList.add('texto')

listaTags[18].appendChild(listaTags[19])
listaTags[19].classList.add('certificates')
listaTags[18].appendChild(listaTags[20])
listaTags[20].classList.add('texto')
listaTags[18].appendChild(listaTags[21])
listaTags[21].classList.add('objective')
listaTags[18].appendChild(listaTags[22])
listaTags[22].classList.add('texto')

//Função de criar tags 

function criarTags(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}