function Pessoa(nome, sobrenome) {
    const id = 5; // se declaramos metodos ou variaveis dentro com const, elas serão privadas, só podendo ser utilizadas dentro do objeto
    this.sobrenome = sobrenome;
     
    // com this sao metodos ou atributos publicos
    this.metodo = function () {
        console.log(this.nome + ': sou um metodo');
    }
}
const p1 = new Pessoa('Gustavo', 'sosa');
const p2 = new Pessoa('Luis', 'Silva');

//console.log(p1);
p2.metodo(p1);
//console.log(p2);