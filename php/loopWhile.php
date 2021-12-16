<?php

$estouEmpregado = true;
$commitsZoados = 1;

while($estouEmpregado){
   echo "eu fiz " . $commitsZoados . " commit(s) zoado(s) e meu superior pediu para revisar" . PHP_EOL;
    $commitsZoados++;

   if($commitsZoados == 8){
       $estouEmpregado = false;
       echo "deu ruim, estou desempregado";
   }
}