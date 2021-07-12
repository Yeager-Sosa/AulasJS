const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27, 10, 14];



//dobrar valores de um array
const numerosDobrados = numeros.map(valor => valor * 2);

/*
console.log(numerosDobrados);
console.log(numeros);
*/

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

//RETORNAR APENAS UMA STRING COM O NOME DA PESSOA
const nomes = pessoas.map(obj => obj.nome);

//console.log(nomes);


//REMOVA APENAS A CHAVE NOME DO OBJETO
const nomesRetirados = pessoas.map(obj => {
    delete obj.nome;
    return obj;
});

//console.log(nomesRetirados);


//ADICIONE UMA CHAVE ID EM CADA OBJETO
const comIds = pessoas.map(function (obj, indice) {
    //obj.id = indice; // DESSA MANEIRA EU ESTOU ALTERANDO INCLUSIVE NO OBJETO PRIMARIO USADO, POIS ESTOU DANDO ELE COMO REFERENCIA, CASO EU QUERIA EDITAR SOMENTE UM NOVO OBJETO, E DEIXAR O ANTIGO INTACTO, DEVO CRIAR UM NOVO OBJETO
    const novoObjeto = { ...obj }; // ADICIONANDO NO OBJETO novoObjeto O OBJETO PRIMARIO INTEIRO
    novoObjeto.id = indice;
    return novoObjeto;
});

console.log(pessoas);
console.log(comIds);