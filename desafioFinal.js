//DESAFIO FINAL
//Nome
console.log('Olá! Seja bem vindo(a).');

let nome = 'Evellyn';
console.log(`Olá ${nome}, como vai?`);

alert(`Olá ${nome}, como vai?`);

let pergunta = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(pergunta);

//Valores
let valor1 = 2;
let valor2 = 4;

let resultadoSoma = valor1 + valor2;
let resultadoSub = valor11 - valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}`);
console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultadoSoma}`);

//Idade
let idade = prompt('Qual a sua idade?');

if (idade < 18){
    console.log(`Você tem ${idade} anos. Portanto, é menor de idade`);
} else {
    onsole.log(`Você tem ${idade} anos. Portanto, é maior de idade`);
}

//Positivo ou Negativo
let numero = prompt('Digite um número positivo ou negativo');
    if (numero > 0){

        alert('Número Positivo!')

    } else if (numero == 0){

        alert('Número Neutro!')

    } else {
        
    alert('Número Negativo!')
}

//De 1 a 10
let contador = 1;
while (contador <= 10){
    console.log(contador);
    contador++
} 

//Nota
let nota = prompt('Qual nota você tirou na prova?');

if (nota >= 7){
    alert(`Você tirou ${nota}, está aprovado.`);
} else {
    alert(`Você tirou ${nota}, está reprovado.`);
}

//Random
let numeroRandom = parseIntMath.random();
console.log(numeroRandom);

//Random entre 1 e 10
let randomUm = parseInt(Math.random() * 10 + 1);
console.log(randomUm);

//Random entre 1 e 1000
let randomDois = parseInt(Math.random() * 1000 + 1);
console.log(randomDois);
