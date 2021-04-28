const paragrafos = document.querySelector('.paragrafos');//selecionar alguma informação do html
const ps = paragrafos.querySelectorAll('p'); //selecionar varios itens dentro de algo no html, nesse caso elementos da div

const estilosBody = getComputedStyle(document.body); //pegar o estilo de alguma parte do html, nesse exemplo o body
const backgroundColorBody = estilosBody.backgroundColor; //atribuir a uma variavel o valor do background de uma parte do html, nesse caso so body
console.log(backgroundColorBody);


for(let p of ps){
    p.style.backgroundColor = backgroundColorBody; //colocar em cada paragrafo conforme o for, ir rodando, o background de body
    p.style.color = '#FFFFFF'; //colocar a cor das letras do paragrafo em branco

}
