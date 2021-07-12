const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27, 10, 14];
// somar todos os arrays
const total = numeros.reduce(function (acumulador, valor) {
    acumulador += valor;
    //if (valor % 2 !== 0) acumulador.push(valor); // só um teste para simular o filter dentro de reduce, sempre fazer funçoes do filter no filter e assim por diante, deixando o reduce apenas para reduzir arrays
    //acumulador.push(valor * 2); // simulando map, segue mesmo principio do exemplo de filter
    return acumulador;
}, 0);          // VALOR INICIAL DO MEU ACUMULADOR

//console.log(total);

// RETORNE A PESSOA MAIS VELHA
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 78 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 17 },

];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);