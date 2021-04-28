const alunos = ['Luiz', 'Maria' , 'Joao']; 

alunos.push('Hernandez');
alunos.push('Eduardo');

console.log();



delete alunos [1]; // remove o elemento do array e deixa seu indice em branco
alunos.pop(); // remove o ultimo elemento do array removendo tbm o indice
alunos.shift(); // remove o primeiro elemento do array removendo tbm o indice
alunos.unshift('Mariana'); // lançar dados ao inicio do array
alunos.push('Hernandez'); // lançar dados ao final do array
alunos[0] = 'Eduardo';
alunos[alunos.length] = 'Gustavo'; //adiciona elemento ao final do array
alunos[alunos.length] = 'Felipe';
alunos[alunos.length] = 'Luana';
alunos[3] = 'Luiza'; //adiciona um elemento a um indice especifico do array
console.log(alunos.slice(0, 3)); // fatiar exibição
console.log(alunos instanceof Array);// verificar se a variavel é um array


