//exercicio que entre dois numeros, retorna o maior deles
/*const x = 1100;
const y = 571;*/

/*function max(x, y) {
    if (x > y) {
        return x;
    }
    return y; // como só temos duas opçoes, posso eliminar o else
}*/

//const maior = max(1, 2);

// OU

/*function max(x, y) {
    return x > y ? x : y; // traduzindo essa função: x é maior que y? se sim retorna X se não retorna Y, faz a mesma coisa que a função anterior, porém com menos codigo
}*/

// OU

/*const max2 = (x, y) => { //arrow function
    return x > y ? x : y;
}; */

// OU PARA DEIXAR O CODIGO AINDA MENOR

const max2 = (x, y) => x > y ? x : y;

console.log(max2(514, 1117));