<?php

$name = 'Gustavoa';
$age = 27;
$employed = true;

if($name == 'Gustavo'){
    echo "acesso permitido";
} else if($age == 26){
    echo "idade correta, pode acessar";
} else {
    echo "acesso negado";
}