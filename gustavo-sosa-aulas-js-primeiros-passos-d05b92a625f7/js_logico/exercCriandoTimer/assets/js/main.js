function cronometro() { //criando função para todas as variaveis fugirem do escopo global
    function getTimeFromSec(segundos) {
        const data = new Date(segundos * 1000);//multiplicando por mil pois esta em formato de ms, assim transformando em sec
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const relogio = document.querySelector('.relogio');//captura elemento do html em uma variavel js
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSec(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) { //cria uma "escuta" de eventos de clicks
        //console.log(e.target);//me fala qual elemento está sendo clicado
        const elemento = e.target; //atribui a variavel elemento o que esta sendo clicado
        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');// remove a classe do css de deixar o texto em vermelho
            clearInterval(timer); //resolvendo problema de criar o evento de contar os segundos mais de uma vez
            iniciaRelogio();
        }
        if (elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado');//cria a classe do css pausado que transforma o texto em vermelho
            clearInterval(timer);
        }
        if (elemento.classList.contains('zerar')) {// se o elemento identificar o clique em zerar, cai no if e executa os comandos
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        };
    });

}
cronometro();
