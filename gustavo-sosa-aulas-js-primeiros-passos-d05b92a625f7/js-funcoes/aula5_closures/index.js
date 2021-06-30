function retornaFuncao(nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Gustavo');
const funcao2 = retornaFuncao('Luis');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());