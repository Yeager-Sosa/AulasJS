const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    
   /* if(numero === 2 || numero == 5){
        
        continue; //nao executa a parte de baixo do laço e volta para o começo do laço novamente para continuar a estrutura de repetição
        //break; // para a execução do laço no momento que eu desejar, e o laço nao volta do inicio, ele fica interrompido
    }
*/
    console.log(numero);
    if (numero === 7){
        break;
    }

    

}