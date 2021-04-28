const numero = parseFloat(prompt("Digite um numero"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> seu numero +2 é ${numero + 2}. </p>
<p>Raiz quadrada ${numero ** 0.5}. </p>
<p>${numero} é inteiro ${Number.isInteger(numero)}. </p>
<p> é NaN ${Number.isNaN(numero)}.</p>
<p>Arredondando para baixo ${Math.floor(numero)}. </p>
<p>Arredondando para cima ${Math.ceil(numero)}. </p>
<p>Com duas casas decimais ${numero.toFixed(2)}. </p>`;
