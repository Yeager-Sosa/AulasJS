/*const nome01 = 'luiz';
const sobrenome01 = 'souza';

const nome02 = 'Gustvo';
const sobrenome02 = 'sosa';

const nome03 = 'felipe';
const sobrenome03 = 'oliveira';
*/
/*function criaPessoa(nome,sobrenome,idade){ //cria função
return {
    nome,
    sobrenome,
    idade
}
}

const pessoa1 = criaPessoa('gustavo','sosa',24);
const pessoa2 = criaPessoa('joao','ulisses',30);
const pessoa3 = criaPessoa('juliana','oliveira',27);
const pessoa4 = criaPessoa('felipe','carvalho',20);
const pessoa5 = criaPessoa('lara','qq',19);
console.log(pessoa3.nome, pessoa1.nome);
*/

const pessoa1 = { //cria objeto
    nome : 'luiz',
    idade : 25,

    fala (){
        console.log(`${this.nome} que tem ${this.idade} anos está dizendo olá`);
    },
    incrementaIdade(){
        this.idade++;
        
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();