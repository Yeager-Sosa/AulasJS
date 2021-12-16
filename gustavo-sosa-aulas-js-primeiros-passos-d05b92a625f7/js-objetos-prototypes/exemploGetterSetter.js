let variavel = {
    valor: 0
};

Object.defineProperty(variavel, 'moeda', { //colocar virgula em valor sem ou com ponto
    get: () => "R$ " + this.valor.toFixed(2).replace(".", ","),
    set: (i) => this.valor = i
});

variavel.moeda = 278;
console.log(variavel.moeda);