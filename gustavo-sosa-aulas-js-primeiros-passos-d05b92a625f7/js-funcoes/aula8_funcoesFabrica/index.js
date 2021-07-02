// factory funcion
// constructor function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        //GETTER
        get nomeCompleto() {  // maneira de criar uma função sem precisar escrever function
            return `${this.nome} ${this.sobrenome}`;
        },
        // SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' '); // separar o valor com o que eu colocar dentro das aspas
            this.nome = valor.shift(); //retira o valor do array e coloca o seu valor onde eu definir no this.
            this.sobrenome = valor.join(' ');
            console.log(valor);

        },

        fala(assunto = 'Falando sobre JS') {
            return `${this.nome} ${sobrenome} esta ${assunto}.`;
        },

        altura: altura,
        peso: peso,
        // GETTER  
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Maria', 'Sosa', 1.70, 90);
p1.nomeCompleto = 'Gustavo Sosa com Setter';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());