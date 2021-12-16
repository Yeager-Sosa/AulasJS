function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    /*
    Object.defineProperties(this, { //faz a mesma coisa que defineProperty mas para varias chaves conforme abaixo
        nome: {
            enumerable: true, //mostra a chave se for true no forIn
            value: nome, //valor
            writable: true, // valor pode ser alterado?
            configurable: true //posso reconfigurar a chave? posso deletar a chave?
        },
        preco: {
            enumerable: true, //mostra a chave se for true no forIn
            value: preco, //valor
            writable: true, // valor pode ser alterado?
            configurable: true //posso reconfigurar a chave? posso deletar a chave?
        }
    });
    */
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave se for true no forIn
        value: estoque, //valor
        writable: true, // valor pode ser alterado?
        configurable: false //posso reconfigurar a chave? posso deletar a chave?

    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 100000;
delete p1.estoque; //so funciona se o configurable for true no defineProperty
console.log(Object.keys(p1)); // visualizar as chaves, se enumerable for false, estoque nao aparecerá

for (let chave in p1) {
    console.log(chave);
}