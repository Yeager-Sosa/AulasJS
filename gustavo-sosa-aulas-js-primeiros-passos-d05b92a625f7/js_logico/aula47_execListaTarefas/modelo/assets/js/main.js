const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) { // função que escuta qual tecla esta sendo pressionada
    if (e.keyCode === 13) { // identifica o codigo da tecla enter
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = ''; // zera o input apos adicionar uma tarefa para nao restar texto digitado anteriormente  
    inputTarefa.focus(); // volta o foco do ponteiro do mouse, como se eu tivesse clicado sobre o html para digitar uma nova tarefa
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput; //faz o texto digitado entrar no html
    tarefas.appendChild(li); // especifica onde será adicionado esse texto no html
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();

}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return; //se não for adicionado nenhum valor, ou seja, diferente de ter algum valor em inputTarefa, retorna falso e nada acontece
    criaTarefa(inputTarefa.value); //pega o valor digitado na caixa de texto
});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();//.trim serve para remover espaços
        //console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas); //convertendo conteudo em javascript para formato json em string
    localStorage.setItem('tarefas', tarefasJSON); // salvando item no navegador
}

function adicionaTarefasSalvas(){
   const tarefas = localStorage.getItem('tarefas');
   const listaDeTarefas = JSON.parse(tarefas); //convertendo nossas tarefas que estao em stringfy no json para array novamente, convertendo um objeto json para js novamente
   
   for(let tarefa of listaDeTarefas){
       criaTarefa(tarefa);
   }
}
adicionaTarefasSalvas();
