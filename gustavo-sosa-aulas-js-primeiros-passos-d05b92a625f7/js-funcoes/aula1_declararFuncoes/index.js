//Declaração de função (function hoisting)
function falaOi() {
    console.log('Oi');
}
falaOi();
// first-class objects (objetos de primeira classe)

const souUmDado = function () {
    console.log('Sou um dado.');
};

souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar essa funcao abaixo');
    funcao();
};

executaFuncao(souUmDado);

//arrow function 

const funcaoArrow = () => {
    console.log('sou uma arrow function');
};

funcaoArrow();

//dentro de um objeto

const obj = {
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();