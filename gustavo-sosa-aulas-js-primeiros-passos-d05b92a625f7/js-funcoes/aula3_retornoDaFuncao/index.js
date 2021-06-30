/*function duplica(n){
    return n * 2;
}
function triplica(n){
    return n * 3;
}
function quadriplica(n){
    return n * 4;
}
function quintuplica(n){
    return n * 5;
}*/

// FAZ O MESMO QUE O DE CIMA

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);
const quintuplica = criaMultiplicador(5);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));
console.log(quintuplica(2));