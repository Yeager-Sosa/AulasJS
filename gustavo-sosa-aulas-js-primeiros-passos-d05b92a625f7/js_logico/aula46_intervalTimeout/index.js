function mostraHora(){//função que mostra hora atual
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
    hour12:false
    });
}

console.log(mostraHora());



const timer = setInterval(function funcaoDoInterval(){//função que faz alguma coisa com um intervalo de determinado ms
    console.log(mostraHora());
}, 1000);

setTimeout(function(){ //função que faz algo uma unica vez e para em determinado ms
//clearInterval(timer);
}, 3000);

setTimeout(function(){
console.log("ola mundo");
},5000);