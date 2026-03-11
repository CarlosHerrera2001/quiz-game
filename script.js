let questions = [

{
question: "Capital de Bolivia",
answers: ["La Paz","Sucre","Santa Cruz","Potosi"],
correct: 1
},

{
question: "2 + 2 = ?",
answers: ["3","4","5","6"],
correct: 1
},

{
question: "Color del cielo",
answers: ["Rojo","Azul","Verde","Amarillo"],
correct: 1
}

]

let current = 0
let score = 0

function startGame(){

current = 0
score = 0

showQuestion()

}

function showQuestion(){

let q = questions[current]

document.getElementById("question").innerText = q.question

document.getElementById("a0").innerText = q.answers[0]
document.getElementById("a1").innerText = q.answers[1]
document.getElementById("a2").innerText = q.answers[2]
document.getElementById("a3").innerText = q.answers[3]

}

function answer(i){

if(i == questions[current].correct){

score++

}

current++

if(current < questions.length){

showQuestion()

}
else{

document.getElementById("result").innerText =
"Puntaje: " + score + " / " + questions.length

}

}