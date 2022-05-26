/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt("Qual o nome do(a) aluno(a)? ")
let n1 = prompt("Qual o valor da primeira nota? ")
let n2 = prompt("Qual o valor da segunda nota? ")
let n3 = prompt("Qual o valor da terceira nota? ")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

/* let result = average > 6 */

average = average.toFixed(2)

if (average > 6) {
  alert("Parabéns " + student + "! Sua média foi de: " + average)
}
else if (average < 5){
  alert(student + " REPROVADO sua média foi de: " + average)
}
else {
  alert(student + " Estude para sua prova de recuperação! Sua média foi de: " + average)
}