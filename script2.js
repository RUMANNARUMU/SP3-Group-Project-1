const quizData = [
    {
        question: "Q : 01--> What is the meaning of CSS?",
        a: "Creative Software Server",
        b: "Clear Software Society",
        c: "Cascading Style Sheets",
        d: "Comilla Software School",
        correct: "c",
    },
    {
        question: "Q : 02--> What is the capital of Uganda?",
        a: "Washington",
        b: "Kampala",
        c: "Islamabad",
        d: "Mymensingh",
        correct: "b",
    },
    {
        question: "Q : 03--> Diligent means?",
        a: "inactive",
        b: "foolish",
        c: "dedicated",
        d: "bad",
        correct: "c",
    },
    {
        question: "Q : 04--> Who is the prime minister of canada?",
        a: "Justin Treadue",
        b: "Mohammad Salman",
        c: "Sheikh Hasina",
        d: "Norendra Modi",
        correct: "a",
    },
    {
        question: "Q : 05--> Choose the correct HTML element for the smallest heading:",
        a: "<h1>",
        b: "<h6>",
        c: "<heading>",
        d: "<head>",
        correct: "b",
    },
    {
        question: "Q : 06--> What is the correct HTML element for inserting an image?",
        a: "<image>",
        b: "<i>",
        c: "<photo>",
        d: "<img>",
        correct: "d",
    },
    {
        question: "Q : 07--> Who is the first Bangladeshi to achieve a noble prize?",
        a: "Khaleda Zia",
        b: "Mohammad Salman",
        c: "Mohammad Younus",
        d: "Mohammad Kabir",
        correct: "c",
    },
    {
        question: "Q : 08--> Leonel Messi is currently playing in which team?",
        a: "Brazil",
        b: "Barcelona",
        c: "Paris Saint German",
        d: "Bashundhara Kings Arena",
        correct: "c",
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

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Your Total Score is : ${score} !</h2>
                <h2>Total Questions : ${quizData.length} </h2>
                <h2>"Many many thanks for your Participation."</h2>
                <h2>"This project is created by: Mohammad Salman, Jannatul Maowa and Rumana Rumu"</h2>
                <button onclick="location.reload()">Play Again</button>
            `
        }
    }
})