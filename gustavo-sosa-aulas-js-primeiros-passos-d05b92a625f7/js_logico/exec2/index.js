/* faça uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number) e retorne 
true se a imagem estiver no modo paisagem e false se estiver no modo retrato*/

/*function ePaisagem(largura, altura){
    if(largura > altura){
        return true;
    } else{
        return false;
    }
};*/

// OU de uma forma ultra resumida

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1000, 5000));