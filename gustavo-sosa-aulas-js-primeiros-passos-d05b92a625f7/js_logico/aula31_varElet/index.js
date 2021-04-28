let nome = 'Luiz'; //let não pode ser declarada novamente e trocar o nome
var nome2 = 'Luiz';
// tem escopo de bloco, um bloco é dentro de chave exemplo {BLOCO}
//var tem escopo de função
const verdadeira = true;

if(verdadeira){
    let nome = 'Otavio';
    console.log(nome, nome2);

    if(verdadeira){
        let nome = 'outra coisa';
        console.log(nome, nome2);
    }
}

