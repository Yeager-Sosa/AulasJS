const pessoa = {  //cria objeto
    nome: 'gustavo',
    sobrenome:'sosa',
    idade: 30,
    endereco:{ //posso criar um objeto dentro de outro objeto
        rua:' Av Aricanduva',
        numero: 8256
    }
};

//console.log(pessoa.nome); //como pegar os valores de objeto ou uma informação especifica de um objeto

//const nome = pessoa.nome; //atribuir a uma variavel um valor dentro de um objeto, atribuição normal

//const { nome, sobrenome, idade, peso = 70 } = pessoa; // atribuição via desestruturação
//console.log(nome , sobrenome, peso);


const { endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, numero, endereco);