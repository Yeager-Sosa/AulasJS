/*function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
    yield 'Valor 4';
    yield 'Valor 5';
    yield 'Valor 6';
    yield 'Valor 7';
    yield 'Valor 8';
    yield 'Valor 9';
    yield 'Valor 10';
};

const g1 = geradora1();

for (let i of g1) {
    console.log(i);
};  */

//-------------------

/*function* geradora2(){
    let i = 0;
while(true){
    yield i;
    i++;
}
}
const g2 = geradora2();

for(i = 0; i<= 100; i++){
    console.log(g2.next().value);
}*/

//------------------------

function* geradora3() {
    yield 0; // age como se fosse o return de outras funçoes
    yield 1;
    yield 2;
};

function* geradora4() {
    yield* geradora3(); // faz esse yield se referenciar no geradora3 que ia ate o 2 e continuar depois disso
    yield 3;
    yield 4;
    yield 5;
};

const g4 = geradora4();
/*for (let i of g4) {
    console.log(i);
};*/

function* geradora5() {
    yield function () {
        console.log('vim do y1');
    };

    yield function () {
        console.log('vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();