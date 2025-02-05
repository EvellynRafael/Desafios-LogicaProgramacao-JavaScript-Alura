alert('Boas vindas ao nosso site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

//para testar se está correto
console.log(nome, idade, numeroDeVendas, saldoDisponivel)

//alert('Erro! Preencha todos os campos');

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

nome = prompt('Qual o seu nome?')
idade = prompt(nome + ', qual a sua idade?')

if (idade >= 18){
    alert(nome + '. Você tem ' + idade + ', então pode tirar a habilitação');
} else {
    alert(nome + ', você tem ' + idade + ' anos. Infelizmente não pode tirar a habilitação')
}