/* dia da semana */
let pergunta = prompt('Qual o dia da semana? ');
console.log(pergunta);

if (pergunta == 'Sábado'){
    alert('Bom fim de semana')
} else if (pergunta == 'Domingo') {
    alert('Boa fim de semana!')
} else {
    alert('Boa semana')
}

/* números positivos e negativos */
let numero = prompt('Digite um número positivo ou negativo');
if (numero > 0){
    alert('Número Positivo!')
} else if (numero == 0){
    alert('Número Neutro!')
} else {
    alert('Número Negativo!')
}

/* pontuação */
let pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

/* saldo da conta*/
let saldoConta = prompt('Digite o seu saldo bancário'); 
console.log(saldoConta);
alert(`Seu saldo é de R$${saldoConta}.`); //Utilizando Template Strings

/* nome*/
let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`); //Utilizando Template Strings
