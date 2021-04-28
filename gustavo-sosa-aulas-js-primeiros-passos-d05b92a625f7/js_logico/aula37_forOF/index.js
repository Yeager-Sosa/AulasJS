//For classico = geralmente interaveis (array ou strings)
//For in = retorna o indice (string, array, objetos)
//For of = retorna o valor em si (iteraveis = arrays ou strings)

const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Sosa'
};


for (let i in pessoa){                                    // in funciona com objetos
    console.log(i, pessoa[i]);
}

// for (let i of pessoa){                                   // of nao funciona para objetos
//     console.log(i, pessoa[i]);
// }


// const nome = ['Gustavo', 'Sosa', 'Murilo'];

// for(let i = 0 ; i < nome.length; i++){
// console.log(nome[i]);
// }

// console.log('############');

// for (let i in nome){
//     console.log(nome[i]);
// }

// console.log('############');

// for (let valor of nome){
//     console.log(valor);
// }

// console.log('############');

// nome.forEach(function(valor,indice, array){
//     console.log(valor, indice, array);
// }); 