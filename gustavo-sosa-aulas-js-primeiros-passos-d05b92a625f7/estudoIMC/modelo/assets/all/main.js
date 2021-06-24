const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (valorIMC < 25) {
            classificacao = "No peso ideal";
        } else if (valorIMC < 30) {
            classificacao = "Em Sobrepeso";
        } else if (valorIMC < 35) {
            classificacao = "Em obesidade grau 1";
        } else if (valorIMC < 40) {
            classificacao = "Em obesidade grau 2";
        } else {
            classificacao = "Obesidade Morbida";
        }

        resultado.textContent = `${nome} seu IMC é de ${valorIMC} e voce esta ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos';
    }


}

calcular.addEventListener('click', imc);  //adicionei um evento para quando a tecla click for executada no botao calcular, rodar a função imc

