function Produto(nome, preco){
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);

const produto = new Produto('Gen',111);
const camiseta = new Camiseta('Regata', 7.5 , 'preto');

camiseta.aumento(10);
console.log (camiseta)