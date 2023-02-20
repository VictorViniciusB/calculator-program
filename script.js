/*

Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:
*/
alert("Bem vindo ao programa de calculos!")

let numberOne = prompt("Digite o primeiro número: ");
let numberTwo = prompt("Digite o segundo número: ");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);



const sum =(numberOne + numberTwo);
const subtraction =(numberOne - numberTwo);
const multiplication =(numberOne * numberTwo);
const division =(numberOne / numberTwo);
const restOfDivision =(numberOne % numberTwo);



alert("A soma dos números: " + sum)
alert("A subtração dos números: " + subtraction)
alert("A multiplicação dos números: " + multiplication)
alert("A divisão dos números: " + division.toFixed(2))
alert("O resto da divisão dos números: " + restOfDivision)


if (sum % 2 == 0) {
    alert("A soma dos dois números é par:  " + sum)
}
else {
    alert("A soma dos dois números é ímpar: " + sum)
}

if (numberOne == numberTwo) {
    alert("Os números inseridos são iguais. ")
}
else {
    alert("Os números inseridos são diferentes.")
}

alert("Obrigado por usar o pragrama de calculos!")