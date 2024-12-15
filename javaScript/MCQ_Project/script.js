let question = document.getElementById("question");
let optionOne = document.getElementById("optionONe");
let optionTwo = document.getElementById("optionTwo");
let optionThree = document.getElementById("optionThree");
let optionFour = document.getElementById("optionFour");
let prevButton = document.getElementById("pev");
let nextButton = document.getElementById("next");

let holdQpos = 0;

const questions = [
  {
      question: "What is the capital of France?",
      optionOne: "Paris",
      optionTwo: "London",
      optionThree: "Berlin",
      optionFour: "Rome",
      answer: "optionOne"
  },
  {
      question: "Who wrote the play 'Romeo and Juliet'?",
      optionOne: "Mark Twain",
      optionTwo: "William Shakespeare",
      optionThree: "Charles Dickens",
      optionFour: "Leo Tolstoy",
      answer: "optionTwo"
  },
  {
      question: "What is the largest planet in our solar system?",
      optionOne: "Earth",
      optionTwo: "Mars",
      optionThree: "Jupiter",
      optionFour: "Saturn",
      answer: "optionThree"
  },
  {
      question: "Which element has the chemical symbol 'O'?",
      optionOne: "Gold",
      optionTwo: "Oxygen",
      optionThree: "Silver",
      optionFour: "Iron",
      answer: "optionTwo"
  },
  {
      question: "What is the square root of 64?",
      optionOne: "6",
      optionTwo: "7",
      optionThree: "8",
      optionFour: "9",
      answer: "optionThree"
  }
];

function removeColor() {
  optionOne.classList.remove("correct", "incorrect");
  optionTwo.classList.remove("correct", "incorrect");
  optionThree.classList.remove("correct", "incorrect");
  optionFour.classList.remove("correct", "incorrect");
}

function checkOption(selectedOption) {
  removeColor();
  const correctAnswer = questions[holdQpos].answer;
  
  if (selectedOption === correctAnswer) {
    document.getElementById(selectedOption).classList.add("correct");
  } else {
    document.getElementById(selectedOption).classList.add("incorrect");
    document.getElementById(correctAnswer).classList.add("correct");
  }
}

optionOne.addEventListener("click", () => checkOption("optionONe"));
optionTwo.addEventListener("click", () => checkOption("optionTwo"));
optionThree.addEventListener("click", () => checkOption("optionThree"));
optionFour.addEventListener("click", () => checkOption("optionFour"));

const printMyquestion = (objPos) => {
  question.innerText = questions[objPos].question;
  question.id = objPos;
  optionOne.innerText = questions[objPos].optionOne;
  optionTwo.innerText = questions[objPos].optionTwo;
  optionThree.innerText = questions[objPos].optionThree;
  optionFour.innerText = questions[objPos].optionFour;
  removeColor();
};

prevButton.addEventListener("click", () => {
  if (holdQpos > 0) {
    holdQpos--;
    printMyquestion(holdQpos);
  }
});

nextButton.addEventListener("click", () => {
  if (holdQpos < questions.length - 1) {
    holdQpos++;
    printMyquestion(holdQpos);
  }
});

window.onload = () => printMyquestion(holdQpos);
