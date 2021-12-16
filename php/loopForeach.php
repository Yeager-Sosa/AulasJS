<?php

$user = [
   [ 'name' => 'Gustavo',
    'age' =>   26,
    'employed' => true,
],[
    'name' => 'Felipe',
    'age' =>   20,
    'employed' => false
],[
    'name' => 'Mariana',
    'age' =>   30,
    'employed' => true
],[
    'name' => 'Fernando',
    'age' =>   47,
    'employed' => false
]
];

foreach ($user as $key => $field){
    echo $key . " " . $field['age'] . PHP_EOL;
}

$user = new StdClass;

$user -> name = "GustavoSosa";
$user -> age = 40;

foreach($user as $key => $value){
    echo $value . PHP_EOL;
}