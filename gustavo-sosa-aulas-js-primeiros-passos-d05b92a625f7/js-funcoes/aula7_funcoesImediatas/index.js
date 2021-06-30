// IIFE = IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function (idade, peso, altura) {
    const sobrenome = 'Sosa';
    const nome = 'Gustavo'
    function falaNomeESobrenome() {
        console.log(nome + ' ' + sobrenome);
    }
    falaNomeESobrenome();
    console.log(idade, peso, altura);
})(25, 90, 1.70);