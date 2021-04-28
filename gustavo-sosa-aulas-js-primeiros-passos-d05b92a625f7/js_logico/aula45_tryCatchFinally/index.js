/*try {
    // é executada quando não há erros
    //console.log(a);
    console.log('abri um arquivo');
    console.log('abri um arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try{
        console.log(b);
    }catch(e){
        console.log('deu erro');

    }

} catch (e) {
    // é executada quando há erros
    console.log('tratando o erro');
} finally {
    // é executada sempre
    console.log('FINALLY: eu sempre sou executado');
}*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-br');
    hour: '2-digit';
    minute: '2-digit';
    second: '2-digt';
    hour12: false;
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    //tratar erro
}finally{
    console.log('tenha um bom dia');
}
