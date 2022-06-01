/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name: "Jonatas",
    age: 25,
    weight: 78,
    height: 175,
  },
  {
    name: "Jhonny",
    age: 21,
    weight: 72,
    height: 180,
  },
  {
    name: "Jonas",
    age: 52,
    weight: 80,
    height: 176,
  },
]

let patientsNames = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []


/* for(let index = 0; index < patients.length; index++){
  patientsNames[index] = patients[index].name

} */

for (let patient of patients) {
  patientsNames.push(patient.name)
  patientsAge.push(patient.age)
  patientsWeight.push(patient.weight)
  patientsHeight.push(patient.height)
}

alert(`Dados dos pacientes

Nome: ${patientsNames}
Idade: ${patientsAge}
Peso: ${patientsWeight}
Altura: ${patientsHeight}
`)

