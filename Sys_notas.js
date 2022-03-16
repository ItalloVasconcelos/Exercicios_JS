// Notas escolares
let notas = 100
let notaA = notas > 90 && notas <= 100
let notaB = notas >= 80 && notas <= 89
let notaC = notas >= 70 && notas <= 79
let notaD = notas >= 60 && notas <= 69
let notaE = notas >= 50 && notas <= 59
let notaF = notas < 50


if(notas > 90 && notas <= 100) {
    console.log("Sua nota é A")
} else if(notas >= 80 && notas <= 89) {
    console.log("Sua nota é B")
} else if(notas >= 70 && notas <= 79) {
    console.log("Sua nota é C")
} else if(notas >= 60 && notas <= 69) {
    console.log("Sua nota é D")
} else if(notas >= 50 && notas <= 59) {
    console.log("Sua nota é E")
} else {
    console.log("Sua nota é F")
}