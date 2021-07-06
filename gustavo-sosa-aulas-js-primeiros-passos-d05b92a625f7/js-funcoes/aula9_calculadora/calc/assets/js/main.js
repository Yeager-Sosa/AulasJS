function criaCalculadora() {

  return { //criando um objeto
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => { //arrow function para nao ter que usar o bind para especificar que o this é a Calculadora
        if (e.keyCode === 13) { // se a key pressionada for enter que tem codigo 13, realiza a conta
          this.realizaConta();
        }
      });
    },

    clearDisplay() { //função que limpa a barra de texto do display caso o botao C for clicado.
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1); // função que apos clicar no btn-del, realiza a remoção do ultimo valor digitado
    },

    realizaConta() {
      let conta = this.display.value; //atribuo a variavel conta o valor do display da calculadora

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

    },

    cliqueBotoes() {
      document.addEventListener('click', function (e) { // função que escuta quando um click é feito
        const el = e.target;

        if (el.classList.contains('btn-num')) { // se o que for clicado dentro de contais tiver a classe btn-num, executo a função btnParaDisplay
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

    },

    btnParaDisplay(valor) {
      this.display.value += valor; // capta o valor do botao clicado, e adiciona no display
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();