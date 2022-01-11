/*const objA = {
    chaveA: 'A',

}

const objB = {
    chaveB: 'B',
    
}

const objC = new Object();
    objC.chaveC = 'C';
    

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome:'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype) // ,e permite pegar o prototype de produto, que contem a função de aumento ou desconto no produto, assim podendo manipular no p2 uma função do Produto

const p3 = Object.create(Produto.prototype);
p3.nome = 'Jarro';
p3.preco = 35;

p1.desconto(50);
p1.aumento(50);

p2.aumento(100);

p3.desconto(50);

console.log(p1);
console.log(p2);
console.log(p3);

