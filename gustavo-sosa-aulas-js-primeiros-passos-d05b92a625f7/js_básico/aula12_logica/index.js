let varA = 'A';
let varB = 'B';
let varC = 'C';
//fazer a variavel A ter valor da B, a B ter valor da C e a C ter valor da A
/*let auxiliar = varA;
varA = varB;
varB = varC;
varC = auxiliar;*/
// ou
[varA, varB, varC] = [varB, varC, varA];
console.log(varA , varB , varC);