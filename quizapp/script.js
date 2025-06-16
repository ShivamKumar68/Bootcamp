const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Rome", correct: false },
      { text: "Berlin", correct: false }
    ]
  },
  {
    question: "Which is the smallest planet in our solar system?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false }
    ]
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic", correct: false },
      { text: "Pacific", correct: true },
      { text: "Indian", correct: false },
      { text: "Arctic", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const counterElement = document.getElementById("question-counter");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  submitButton.style.display = "inline-block";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  counterElement.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    const li = document.createElement("li");
    li.appendChild(button);
    answerButtons.appendChild(li);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(button, correct) {
  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(li => {
    const btn = li.firstChild;
    btn.disabled = true;
    if (questions[currentQuestionIndex].answers.find(ans => ans.text === btn.innerText).correct) {
      btn.classList.add("correct");
    }
  });

  nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

submitButton.addEventListener("click", () => {
  showScore();
});

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
  counterElement.innerText = "";
  nextButton.style.display = "none";
  submitButton.innerText = "Play Again";
  submitButton.addEventListener("click", startQuiz);
}

startQuiz();
