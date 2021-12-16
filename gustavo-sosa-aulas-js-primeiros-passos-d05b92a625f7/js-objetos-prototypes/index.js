let nomeFantasia = '';
let razaoSocial = "Fundo de Investimento Imobiliário-FII Torre NorteFundo de Investimento Imobiliário-FII Torre Norte DUPLICIDADE DE PAGTO - Fundo de Investimento";



if(nomeFantasia == ''){
    if(razaoSocial.length <= 84){
        nomeFantasia = razaoSocial;
        
    }else{
        nomeFantasia = razaoSocial.substring(0, 84);
    }
}
console.log(nomeFantasia);

