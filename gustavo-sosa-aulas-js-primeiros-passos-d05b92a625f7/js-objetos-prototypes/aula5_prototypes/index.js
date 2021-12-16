function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

}
//instancia da constructor function
const pessoa1 = new Pessoa('Gustavo','sosa');
const pessoa2 = new Pessoa('Mariana', 'Andrade');

const data = new Date();

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
} 

console.dir(pessoa1.nomeCompleto());
console.dir(pessoa2.nomeCompleto());
console.dir(data);
console.dir