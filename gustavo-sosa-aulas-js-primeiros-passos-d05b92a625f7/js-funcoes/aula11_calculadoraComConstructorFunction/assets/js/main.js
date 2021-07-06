function Calculadora() {
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
        this.display.focus();
    };

    this.precionaBackSpace = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 8) {
                this.apagaUm();
                this.display.focus();
            }
        });
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => { //arrow function para nao ter que usar o bind para especificar que o this é a Calculadora 
            if (e.keyCode === 13) { // se a key pressionada for enter que tem codigo 13, realiza a conta
                this.realizaConta();
                this.display.focus();
            }
        });
    };

    this.clearDisplay = () => this.display.value = '';  //função que limpa a barra de texto do display caso o botao C for clicado e tambem como a função só tem uma linha, posso deixar sem chaves.



    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1); // função que apos clicar no btn-del, realiza a remoção do ultimo valor digitado


    this.realizaConta = () => {
        let conta = this.display.value; //atribuo a variavel conta o valor do display da calculadora
        this.display.focus();

        try {

            conta = eval(conta); // pega as informaçoes do display e tenta realizar a conta com os valores e simbolos obtidos

            if (!conta) { // se apos forçar a resolução, der um NaN, executa o alerta e encerra a função
                alert('Conta invalida');
                return;
            }

            this.display.value = conta;

        } catch (e) {
            alert('Conta invalida');
            return;
        }

    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', function (e) { // função que escuta quando um click é feito
            const el = e.target;
            this.display.focus();

            if (el.classList.contains('btn-num')) { // se o que for clicado estiver dentro de uma lista de classe btn-num, executo a função btnParaDisplay
                this.btnParaDisplay(el.innerText); // envio o comando para o html adicionar o conteudo da função btnParaDisplay na barra de texto do display
            }

            if (el.classList.contains('btn-clear')) { //se o botao clicando dentro do classList for btn-clear, executo a função clearDisplay
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) { // se o botao clicado for o del, realiza a função de apagar o ultimo valor
                this.apagaUm();
            }

            if (el.classList.contains('btn-eq')) {// se o botao clicado for o de = executa a função realizaConta
                this.realizaConta();
            }

        }.bind(this)); // estou dizendo para a função usar o this como calculadora, e nao como document, mas tambem poderia usar arrow function que sempre utilizaria nesse caso o this como calculadora.

    };

    this.btnParaDisplay = (valor) => { this.display.value += valor; // capta o valor do botao clicado, e adiciona no display
    
    };
};



const calculadora = new Calculadora();
calculadora.inicia();