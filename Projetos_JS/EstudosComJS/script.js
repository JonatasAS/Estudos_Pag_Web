/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

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

  function IMC(weight, height) {
      return (weight / ((height / 100)) **2).toFixed(2)
  }

  function printPatientIMC(patient) {
      return `
      Paciente ${patient.name} possui um IMC de 
      ${IMC(patient.weight, patient.height)} `
  }

  for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
  }