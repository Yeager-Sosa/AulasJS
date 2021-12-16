function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave se for true no forIn
        configurable: true, //posso reconfigurar a chave? posso deletar a chave?
        get: () => estoque,
        set: (valor) => {
            if (typeof valor !== 'number')console.log("digite um numero valido"); //se o valor de estoque for diferente de number, loga o bad value
        }
    });
}

const p1 = new Produto('Camiseta', 20, 5);
//p1.estoque = 5;
console.log(p1);
console.log(p1.estoque);