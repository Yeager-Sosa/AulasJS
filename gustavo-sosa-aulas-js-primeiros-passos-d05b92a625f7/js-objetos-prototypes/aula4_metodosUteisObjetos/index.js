const produto = {nome:'Caneca', preco: 1.8};

const outraCoisa = {...produto};

outraCoisa.nome = 'Faca';

outraCoisa.preco = 50;

//produto.nome = "Abajur";

//Object.freeze(produto);

//produto.preco = 100;

console.log(outraCoisa);

console.log(produto);

console.log(Object.keys(produto));

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));