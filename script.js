const quizData = [
    {
        question: "Q : 01--> What is the rank of DIU among all private Universities of Bangladesh in QS Asia Rankings-2022?",
        a: "1st",
        b: "2nd",
        c: "3rd",
        d: "4th",
        correct: "c",
    },
    
    {
        question: "Q : 02--> What is the capital of Bangladesh?",
        a: "Dhaka",
        b: "Chittagong",
        c: "Rajshahi",
        d: "Mymensingh",
        correct: "a",
    },
   
{
        question: "Q : 03--> Where is the permanent campus of Daffodil International University?",
        a: "Mirpur, Dhaka",
        b: "Cumilla",
        c: "Rangpur",
        d: "Ashulia, Savar",
        correct: "d",
    },

      {
        question: "Q : 04--> Who is making the Web standards?",
        a: "Mozilla",
        b: "Goofle",
        c: "Microsoft",
        d: "WWW Consortium",
        correct: "d",
          
    },
{
        question: "Q : 05--> Choose the correct HTML element for the largest heading:",
        a: "<h1>",
        b: "<h6>",
        c: "<heading>",
        d: "<head>",
        correct: "a",
    },
    {
        question: "Q : 06--> What is the correct HTML element for inserting a line break?",
        a: "<lb>",
        b: "<break>",
        c: "<br>",
        d: "< >",
        correct: "c",
    },
    
    {
        question: "Q : 09--> Which country will host 45th ICPC World Finals?",
        a: "India",
        b: "Saudi Arabia",
        c: "Canada",
        d: "Bangladesh",
        correct: "d",
    },
    {
        question: "Q : 10--> Which university will host the upcoming ICPC as the first university from Southeast Asia to be held in Dhaka in November 2022?",
        a: "Daffodil International University",
        b: "BUET",
        c: "Dhaka University",
        d: "University of Asia Pacific"
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}
