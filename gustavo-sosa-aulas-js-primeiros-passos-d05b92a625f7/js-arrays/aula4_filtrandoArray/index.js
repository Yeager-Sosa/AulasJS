// FILTAR VAI SEMPRE RETORNAR UM ARRAY, COM A MESMA QUANTIDADE DE ELEMENTOS OU MENOS.

//retorne numeros maiores que 10 dentro do array
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27, 10, 14];
//posso fazer assim

/*
for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] >= 10) {
        const resultado = [numeros[i]];
        console.log(resultado);
    };
};
*/

// ou usando o FILTER fica assim
/*
function callbackFilter(valor) {
    return valor >= 10;
}
*/

// outra maneira é criar uma função anonima dentro de numetrosFiltrados
const numerosFiltrados = numeros.filter(valor => valor >= 10);

//console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// RETORNE AS PESSOAS CUJO NOME TIVER 5 OU MAIS LETRAS
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
//console.log(pessoasNomeGrande);

//RETORNE PESSOAS COM MAIS DE 50 ANOS
const pessoasMaiores50 = pessoas.filter(obj => obj.idade > 50);
//console.log(pessoasMaiores50);

//RETORNE PESSOAS CUJO NOME TERMINA COM A LETRA A
const pessoasLetraA = pessoas.filter(obj => obj.nome.endsWith('a')); //endswith serve para determinar algo que termina com
console.log(pessoasLetraA);