let tags = ['div','h1', 'div' , 'h2', 'p', 'h2', 'p','div', 'h2', 'h3', 'p', 'h3', 'p', 'h3', 'h4','p', 'h4', 'p', 'div', 'h2', 'li', 'li', 'li', 'h2', 'li', 'li', 'li']
let listaTags = []
let body = document.querySelector('body')

// criei as tags div e o p
tags.forEach(tag => {
    let tagNova = criarTags(tag);
    listaTags.push(tagNova);
});

listaTags[1].textContent = "Nome: Leonardo"

listaTags[3].textContent = "RESUMO"
listaTags[4].textContent = 'oidjsi0odjasodjoaisdjadjisadasdad batata'
listaTags[5].textContent = 'DADOS GERAIS'
listaTags[6].textContent = 'oidjsi0odjasodjoaisaodjaodjdjaodj batata'

listaTags[8].textContent = 'ESCOLARIDADE'
listaTags[9].textContent = 'Ensino Concluido'
listaTags[10].textContent = 'Terminei'
listaTags[11].textContent = 'Local de Conclusão'
listaTags[12].textContent = 'Na escola'
listaTags[13].textContent = 'CONTATO'
listaTags[14].textContent = 'E-mail:'
listaTags[15].textContent = 'Lerozin123@gmail.com'
listaTags[16].textContent = 'TELEFONE'
listaTags[17].textContent = '(11) 4002-8922'

listaTags[19].textContent = 'HABILIDADES'
listaTags[20].textContent = 'Comer'
listaTags[21].textContent = 'dormir'
listaTags[22].textContent = 'ver video'

listaTags[23].textContent = 'Experiencias'
listaTags[24].textContent= 'ETEC'
listaTags[25].textContent= 'A vida'
listaTags[26].textContent= 'proerd'


// adicionei a div no DOM
body.appendChild(listaTags[0])
listaTags[0].classList.add('container')

body.appendChild(listaTags[2])
listaTags[2].classList.add('resumo1')

body.appendChild(listaTags[7])
listaTags[7].classList.add('resumo2')

body.appendChild(listaTags[18])
listaTags[18].classList.add('final')

// incluindo na div a tag p
listaTags[0].appendChild(listaTags[1])
listaTags[1].classList.add('texto')
//-------------------------------------

listaTags[2].appendChild(listaTags[3])
listaTags[3].classList.add('resumo')

listaTags[2].appendChild(listaTags[4])
listaTags[4].classList.add('texto2')

listaTags[2].appendChild(listaTags[5])
listaTags[5].classList.add('dados-gerais')

listaTags[2].appendChild(listaTags[6])
listaTags[6].classList.add('texto3')
//---------------------------------------

listaTags[7].appendChild(listaTags[8])
listaTags[8].classList.add('escola')

listaTags[7].appendChild(listaTags[9])
listaTags[9].classList.add('ensino-concluido')

listaTags[7].appendChild(listaTags[10])
listaTags[10].classList.add('texto3')

listaTags[7].appendChild(listaTags[11])
listaTags[11].classList.add('local-conclusão')

listaTags[7].appendChild(listaTags[12])
listaTags[12].classList.add('texto4')

listaTags[7].appendChild(listaTags[13])
listaTags[13].classList.add('contact')

listaTags[7].appendChild(listaTags[14])
listaTags[14].classList.add('email')

listaTags[7].appendChild(listaTags[15])
listaTags[15].classList.add('texto5')

listaTags[7].appendChild(listaTags[16])
listaTags[16].classList.add('tel')

listaTags[7].appendChild(listaTags[17])
listaTags[15].classList.add('text6')
//-----------------------------------------

listaTags[18].appendChild(listaTags[19])
listaTags[19].classList.add('habilidades')

listaTags[18].appendChild(listaTags[20])
listaTags[20].classList.add('texto6')

listaTags[18].appendChild(listaTags[21])
listaTags[21].classList.add('texto7')

listaTags[18].appendChild(listaTags[22])
listaTags[22].classList.add('texto8')

listaTags[18].appendChild(listaTags[23])
listaTags[23].classList.add('experiencias')

listaTags[18].appendChild(listaTags[24])
listaTags[24].classList.add('texto9')

listaTags[18].appendChild(listaTags[25])
listaTags[25].classList.add('texto10')

listaTags[18].appendChild(listaTags[26])
listaTags[26].classList.add('texto11')






//Função de criar tags 

function criarTags(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}