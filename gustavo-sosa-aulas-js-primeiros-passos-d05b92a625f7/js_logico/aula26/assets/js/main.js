// capturar evento de submite do formulario
const form = document.querySelector('#formulario');/*selecionar/capturar o formulario no html*/

form.addEventListener('submit', function (e) { //codigo que captura evento dentro do formulario criado no html no submit do botao
    e.preventDefault(); // nao deixa o formulario ser enviado
    const inputPeso = e.target.querySelector('#peso'); //pegamos os dados digitados no formulario
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value); //captura valor digitado no formulario
    const altura = Number(inputAltura.value);

    if (!peso) { //verifica se o peso é diferente de verdadeiro, se for, mensagem de erro
        setResultado('Peso Invalido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Invalida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivel = getNivelImc(imc);

    const msg = ` Seu IMC é ${imc} (${nivel})`; // mensagem de texto que será inserida no html na tela
    setResultado(msg, true);
});

function getNivelImc(imc) { //criando função utilizando os dados de imc
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; //criar array

    if (imc >= 39.9) return nivel[5]; //seta um testo do array baseado no resultado do imc
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;//formula imc
    return imc.toFixed(2); //fixa duas casas decimais no resultado do imc

};

function criaP(className) { //função para criar paragrafo
    const p = document.createElement('p');
    return p;
};

function setResultado(msg, isValid) { //limpa o html
    const resultado = document.querySelector('#resultado');
    //resultado.innerHTML = `<p>${msg}</p>`;
    resultado.innerHTML = '';

    const p = criaP();
    if (isValid) {
        p.classList.add('imcValido');//deixa paragrafo verde de sucesso
    } else {
        p.classList.add('imcInvalido');//deixa paragrafo vermelho de fracasso
    }
    p.innerHTML = msg;//adiciona a mensagem no html
    resultado.appendChild(p);//adiciona o paragrafo no resultado
};
