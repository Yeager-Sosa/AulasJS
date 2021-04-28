function meuEscopo(){ //cria função
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento){ 
        evento.preventDefault(); 
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome : nome.value,
            sobrenome : sobrenome.value,
            peso : peso.value,
            altura : altura.value
             
        })

        

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}`;
           
    };
    form.addEventListener('submit' ,recebeEventoForm);



    /*form.onsubmit = function(evento){ //previnir que um evento seja executado
        evento.preventDefault();
        alert(1);
        console.log('foi enviado')
    };*/
}
meuEscopo();