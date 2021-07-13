
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//RETORNE A SOMA DO DOBRO DE TODOS OS PARES
const somaPares = numeros.reduce((indice, valor) => {
    if (valor % 2 === 0) return indice += (valor * 2);
    return indice;
}, 0);
console.log(somaPares);
/*
// FILTRAR PARES
const numerosPares = numeros.filter(valor => valor % 2 === 0);
//console.log(numerosPares);

//DOBRAR OS VALORES
const numerosDobrados = numeros.map(valor => valor * 2);
//console.log(numerosDobrados);

//REDUZIR (SOMAR TUDO)
const somaTotal = numeros.reduce(function (indice, valor) {
    return indice += valor;
}, 0);
//console.log(somaTotal);
*/
// JEITO CURTO


// a soma do dobro de todos os pares
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((indice, valor) => indice + valor);

console.log(numerosPares);