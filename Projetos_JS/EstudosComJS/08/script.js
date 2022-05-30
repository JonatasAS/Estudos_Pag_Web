let student = prompt("Qual o nome do(a) aluno(a)? ")
let nOne = prompt("Qual a nota da primeira prova? ")
let nSecond = prompt("Qual a nota da segunda prova? ")

let average = (Number(nOne) + Number(nSecond)) / 2

average = average.toFixed(2)

if (average > 7){
    alert(`A média do aluno(a) ${student} é: ${average} \n Parabéns, ${student}! Você foi aprovado(a) no concurso!`)
}
else {
    alert(`A média do aluno(a) ${student} é: ${average} \n Não foi dessa vez, ${student}! Tente novamente!`)
}