let firstNumber = prompt("Informe o primeiro número: ")
let secondNumber = prompt("Informe o segundo número: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)


const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("Soma " + sum)
alert("Subtração " + sub)
alert("Multiplicação " + mult )
alert("Divisão " + div.toFixed(1))
alert("Resto da divisão " + restDiv)

if(restDiv == 0){
    alert("O resto da divisão e par!")
}
else {
    alert("O resto da divisão e impar!")
}

if (firstNumber != secondNumber){
    alert("Os dois números são diferentes!")
}
else {
    alert("Os dois números são iguais!")
}