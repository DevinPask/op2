// const { start } = require("repl")

const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question-container')
const answerButtonsElement1 = document.getElementById('answer1')
const answerButtonsElement2 = document.getElementById('answer2')
const answerButtonsElement3 = document.getElementById('answer3')
const answerButtonsElement4 = document.getElementById('answer4')

let currentQuestionIndex = 0
let shuffledQuestions;

// startButton.addEventListener('click', startQuiz);
// nextButton.addEventListener('click', () => {
//     nextQuestion()
// })

// Start quiz for specific genre user picks 
let questions = [
    {
        cat_number: 1,
        category: 'Horror',
        question: 'How many times does Count Orlock blink throughout the entirety of his appearance in Nosferatu?',
        correct_answer: 'Once',
        answer1: 'Once',
        answer2: 'Twice',
        answer3: 'Three Times',
        answer4: 'Four Times'
    },
    {
        cat_number: 2,
        category: 'Horror',
        question: 'Which horror film was the first-ever of its genre to be nominated for a Best Picture Oscar?',
        correct_answer: 'The Exorcist',
        answer1: 'Jaws',
        answer2: 'Halloween',
        answer3: 'The Exorcist',
        answer4: 'Rosemarys Baby'
    },
    {
        cat_number: 3,
        category: 'Horror',
        question: 'How many years did it take to get Aliens made?',
        correct_answer: 'Seven',
        answer1: 'Four',
        answer2: 'Five',
        answer3: 'Seven',
        answer4: 'Eight'
    },
    {
        cat_number: 4,
        category: 'Horror',
        question: 'What is the most profitable film series of all time?',
        correct_answer: 'Paranormal Activity',
        answer1: 'Paranormal Activity',
        answer2: 'Scream',
        answer3: 'Nightmare on Elm Street',
        answer4: 'The Purge'
    },
    {
        cat_number: 5,
        category: 'Horror',
        question: 'Which popular horror film was inspired by real events that took place in Gainesville, Florida in the early 90s?',
        correct_answer: 'Scream',
        answer1: 'I Know What You Did Last Summer',
        answer2: 'The Haunting',
        answer3: 'Scream',
        answer4: 'The Faculty'
    },
    {
        cat_number: 6,
        category: 'Horror',
        question: 'How long did it take to film The Blair Witch Project?',
        correct_answer: '8 Days',
        answer1: '3 Days',
        answer2: '8 Days',
        answer3: '4 Weeks',
        answer4: '6 Months'
    },
    {
        cat_number: 7,
        category: 'Horror',
        question: 'What is the name of the demon that possesses Regan MacNeil in The Exorcist?',
        correct_answer: 'Pazuzu',
        answer1: 'Abaddon',
        answer2: 'Amon',
        answer3: 'Drexel',
        answer4: 'Pazuzu'
    },
    {
        cat_number: 8,
        category: 'Horror',
        question: 'What was almost the title of the Friday the 13th movies?',
        correct_answer: 'Long Night at Camp Blood',
        answer1: 'Long Night at Camp Blood',
        answer2: 'Nighttime at Camp Fear',
        answer3: 'Jason',
        answer4: 'Teenage Blood'
    },
    {
        cat_number: 9,
        category: 'Horror',
        question: 'What color is Freddy Kreuger’s sweater?',
        correct_answer: 'Red and Green',
        answer1: 'Red and Purple',
        answer2: 'Red and Yellow',
        answer3: 'Red and White',
        answer4: 'Red and Green'
    },
    {
        cat_number: 10,
        category: 'Horror',
        question: 'How long did it take to film The Blair Witch Project?',
        correct_answer: '8 Days',
        answer1: '3 Days',
        answer2: '8 Days',
        answer3: '4 Weeks',
        answer4: '6 Months'
    }
];
let time = 15;
let current = 0;
let timer;
let timerEl = document.getElementById('timer');

const startQuiz = () => {
    console.log('Started')
    // startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')



    // Display timer countdown while user taking quiz
    // timerEl.textContent = time
    // timer = setInterval(function () {
    //     time = time - 1
    //     timerEl.textContent = time + 'seconds'
    //     if (time <= 0) {
    //         nextQuestion()
    //     }
    // }, 1000)
    //sectionEl.classList.remove("hide");
    //welcomeEl.classList.add("hide");
    nextQuestion();
}

const getQuestions = () => {

    // var url = window.location.href;
    // var category = url.searchParams.get("category");
    // console.log(category);
    
    
    


    // fetch("./quiz").then(res => res.json()).then(data => {
    //     console.log(data);
    //     questions = data;
        startQuiz();
    // }).catch(err => {
    //     console.log(err);
    // }) 

}

// Loop through to next question
const nextQuestion = (data) => {
    // DOM manipulation here   
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

const showQuestion = (question) => {
    console.log(question);
    answerButtonsElement1.innerText = question.answer1
    answerButtonsElement2.innerText = question.answer2
    answerButtonsElement3.innerText = question.answer3
    answerButtonsElement4.innerText = question.answer4
    questionElement.innerText = question.question
    // question.answers.forEach(answer => {
    //     const button = document.createElement('button')
    //     button.innerText = answer.text
    //     button.classList.add('btn')
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener('click', selectAnswer)
    //     answerButtonsElement.appendChild(button)
   
    // })
}

const resetState = () => {
    // while (answerButtonsElement.firstChild) {
    //     answerButtonsElement.removeChild
    //         (answerButtonsElement.firstChild)
    // }
}

// Check whether answer selected is correct/wrong
const checkAnswer = (e) => {
    const selectedButton = e.target
    const correct = selected.Button.dataset.correct
    setStatusClass(document.body.correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

}

const setStatusClass = (element, correct) => {
   
    if (correct) {
        element.clasList.add('correct')
    } else {
        element.clasList.add('wrong')
    }
}


/*
const checkAnswer = (event) => {
    var choice = (event.target.textContent[0]);
    if (choice === correctAnswer && 15 >= time >= 10) {
        score = 10
    } else if (choice === correctAnswer && 9 >= time >= 5) {
        score = 5
    } else if (choice === correctAnswer && 4 >= time >= 0) {
        score = 2
    } else (choice !== correctAnswer); {
        score = score - 5
    }
};
*/

/* 
Array.from(document.getElementsByClassName("answer")).forEach(function (btn) {
    console.log(btn);
    btn.onclick = checkAnswer;
});
*/

// End quiz - when they answer last question display buttons that link to other genres 

// Get highschore and save to highscore page 
const finalScore = (score) => {

}

getQuestions();
