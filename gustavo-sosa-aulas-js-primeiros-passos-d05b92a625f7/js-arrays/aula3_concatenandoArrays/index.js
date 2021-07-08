const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a11 = [7, 8, 9];
const a12 = [10];

//const a3 = a1.concat(a2, a11, a12, 'Gustavo', [12], 'Acabei'); // juntar 1 ou varios arrays em um outro, dessa forma se chama CONCAT

const a3 = [...a1, 'Gustavo', ...a2, ...[7, 8, 9]]; // juntar um ou varios arrays em um outro, dessa forma se chama SPREAD

console.log(a3);
