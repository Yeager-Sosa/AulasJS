// funcao feita como function conforme abaixo, tem uma variavel chamada arguments que sustenta todos os argumentos enviados
/*function funcao(a, b, c, d, e, f) {

    console.log(a,b,c,d,e,f);

    let total = 0;

    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
};

}
    funcao(1, 2, 3);*/



/*function funcao(a, b) {
    console.log(a + b);
}

a = 700;
b = 1100;
let valor1 = a;
let valor2 = b;
funcao(valor1, valor2);*/




/*function funcao([valor1, valor2, valor3]) {
    //   b = b || 1; maneira antiga
    console.log(valor1, valor2, valor3);
}
//funcao(2, undefined, 20); //undefined unica maneira de fazer o valor de um argumento pegar um valor pre definido se estiver entre argumentos novos declarados
//let pessoa = { nome: 'Gustavo', sobrenome: 'sosa', idade: 25};

funcao(['Gustavo', 'sosa', 25]);*/




const conta = function (operador, acumulador, ...numeros) {  // usando o ... ele atribui todo o resto dos valores preenchidos no argumento
    for (let numero of numeros) {
        if (operador === '+') console.log(acumulador += numero);
        if (operador === '-') console.log(acumulador -= numero);
        if (operador === '*') console.log(acumulador *= numero);
        if (operador === '/') console.log(acumulador /= numero);
    }

};

conta('+', 1, 10, 20, 30, 40, 50);