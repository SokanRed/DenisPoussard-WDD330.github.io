class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return choice === this.answer;
    }
}

const questions = [
    new Question(
        "Which Javascript method allows to filter the elements of an array ?", ["indexOf()", "map()", "filter()", "reduce()"],
        "filter()"
    ),
    new Question(
        "Which Javascript method allows to check if an element is in a array ?", ["isNaN()", "includes()", "findIndex()", "isOdd()"],
        "includes()"
    ),
    new Question(
        "Which method transforms JSON into a Javascript object ?", ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
        "JSON.parse()"
    ),
    new Question(
        "Which Javascript object allows to round to the nearest integer ?", ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
        "Math.round()"
    ),
];

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length;
    }
}

//  Quiz Display
const display = {
    elementShown: function(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    question: function() {
        this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
        let choices = quiz.getCurrentQuestion().choices;

        guessHandler = (id, guess) => {
                document.getElementById(id).onclick = function() {
                    quiz.guess(guess);
                    quizApp();
                }
            }
            // Display of the choices plus consideration of the choice
        for (let i = 0; i < choices.length; i++) {
            this.elementShown("choice" + i, choices[i]);
            guessHandler('guess' + i, choices[i]);
        }
    },
    progress: function() {
        this.elementShown("progress", `Question ${quiz.currentQuestionIndex + 1} on ${quiz.questions.length}`);
    },
    endQuiz: function() {
        let endQuizHTML = `
        <h1>Quiz Completed!</h1>
        <h3>Your Score is : ${quiz.score} / ${quiz.questions.length}</h3>
        `;
        this.elementShown('quiz', endQuizHTML);
    },
};

//  Game Logic
quizApp = () => {
    if (quiz.hasEnded()) {
        display.endQuiz();
    } else {
        display.question();
        display.choices();
        display.progress();
    }
};

//  Creatae Quiz
let quiz = new Quiz(questions);
quizApp();