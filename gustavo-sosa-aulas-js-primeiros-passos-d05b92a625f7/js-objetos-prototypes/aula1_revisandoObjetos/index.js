const pessoa = { //construir objeto literal
    nome: 'Gustavo',
    sobrenome: 'Sosa'
};

const pessoa1 = new Object(); // construir objeto construtor
pessoa1.nome = 'Luis';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 25;
/*
console.log(pessoa.nome);
console.log(pessoa1.nome);
*/

//delete pessoa1.nome;
console.log(pessoa1);

pessoa1.falarNome = function () {
    return (`${this.nome} esta falando seu nome`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date(); //pegar data atual
    return dataAtual.getFullYear() - this.idade; //descobrir ano de nascimento
};
/*
pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());
*/
for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}


function criaPessoa(nome, sobrenome) { //factory functions
    return {
        nome,
        sobrenome,
        get nomeCompleto() { //utilizando get nao preciso inicializar o metodo no console.log, sem o get precisaria usar p1.nomeCompleto()
            return `${this.nome} ${this.sobrenome}`
        }
    };
}
const p1 = criaPessoa('Gustavo', 'Sosa');

//console.log(p1.nomeCompleto)

function Pessoa(nome, sobrenome) { // constructor functions
    this.nome = nome;
    this.sobrenome = sobrenome;
   // Object.freeze(this);  dessa maneira nao consigo alterar nada do meu objeto
};
// oq new faz
//{} <- this sempre que uso o new para criar uma nova instancia de um objeto, cria um objeto vazio e atribui o this nele, assim qualquer nova pessoa que eu criar como nesse exemplo, o this da função sera utilizado por essa nova pessoa
const p2 = new Pessoa('Luis', 'Otavio');

Object.freeze(p2); //travo meu objeto ou array e qualquer tentativa de alteração como o exemplo abaixo, nao faz alterações e nem retorna erro
p2.nome = 'Outra coisa';
console.log(p2.nome);
