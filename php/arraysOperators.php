<?php

$user = [
'name' => 'Gustavo',
'age' => '26'
];

$workplace = [
'companyName' => 'MLegate',
'role' => 'fullstack'
];

$all = $user + $workplace;

print_r($all);