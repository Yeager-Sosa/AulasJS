// let i = 0;
// const tamanho = 15;
// while (i <= tamanho) {
//      console.log(i);
//      i++;
// }

function random(min, max){ //função para pegar um numero random com minimo e maximo
     const r = Math.random() * (max - min) + min;
     return Math.floor(r); // retirar as casas decimais do valor random
}
const min = 1;
const max = 50;
let rand = random(min, max); //atribuir range de numeros com maximo e minimo, para a função buscar os numeros randoms nesse range

while (rand !== 10){
     rand = random(min, max);
     console.log(rand);
}