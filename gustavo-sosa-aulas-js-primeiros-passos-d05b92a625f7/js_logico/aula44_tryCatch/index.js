// aula sobre tratamento de erro

/*try{
    console.log(eExisto);
}catch(e){
    console.log('eExisto não existe');
}*/

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros.');
    }

    return x + y;
}
try {
    console.log(soma(1, 2));
    console.log(soma('1', 10));
} catch (e) {
    console.log('Algum erro ocorreu, verifique os dados informados');
}
