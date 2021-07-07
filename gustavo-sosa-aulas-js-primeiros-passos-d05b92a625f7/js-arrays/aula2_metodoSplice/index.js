const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];


// nomes.splice(indice, delete, elemento1, elemento2, elemento3);

const removidos = nomes.splice(3, 2); //selecionar e excluir elemento do array, o primeiro valor é onde começa a apagar, o segundo quantos elemento vai apagar
removidos.splice(1, 0, 'Gustavo'); // adicionar em algum lugar que voce especificar um novo elemento no array

console.log(nomes, removidos);