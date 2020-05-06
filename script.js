const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestion, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')
const answerButton1 = document.getElementById('btn1')
const answerButton2 = document.getElementById('btn2')
const answerButton3 = document.getElementById('btn3')
const answerButton4 = document.getElementById('btn4')
const answerButtonGrid = document.getElementById('answer-btn')
let correctAnswers = 0;
let countDownDate = 75;
var setCountdown;
const questions = [
  {
    title: 'What means === in JavaScript ? ',
    answers: ['Equall', 'Attribute', 'Not', 'NaN'],
    correct: 'Equall'
  },
  {
    title: 'What from follows are  types of Pop up boxes available in JavaScript?',
    answers: ['Documnet', 'Console', 'Alert', 'Window'],
    correct: 'Alert'
  },
  {
    title: 'In how many ways a JavaScript code can be involved in an HTML file?',
    answers: ['1', '2', '3', '4'],
    correct: '3'
  },
  {
    title: 'What are the ways to define a variable in JavaScript?',
    answers: ['def', 'var', 'variable', 'none'],
    correct: 'var'
  },
  {
    title: 'What from follows are JavaScript frameworks',
    answers: ['Nuclear', 'React', 'FrameAI', 'Node.js'],
    correct: 'React'
  }
]



startButton.addEventListener('click', startGame)
answerButtonGrid.addEventListener('click', selectAnswer)

function startGame() {
  startButton.remove('hide')
  setCountdown = setInterval(countDown, 1000)
  document.getElementById('timer2').innerHTML = countDownDate + 's';
  showQuestion();

}
let i = 0;
function showQuestion() {
  answerButton1.innerHTML = questions[i].answers[0];
  answerButton2.innerHTML = questions[i].answers[1];
  answerButton3.innerHTML = questions[i].answers[2];
  answerButton4.innerHTML = questions[i].answers[3];
  questionElement.innerHTML = questions[i].title

}

function selectAnswer(e) {
  if (e.target.innerText === questions[i].correct) {

    correctAnswers++;
  }
  else {
    if (i < questions.length) {
      countDownDate = countDownDate - 15;
    }
  }
  if (i < questions.length - 1) {
    i += 1
    showQuestion();
  }
  if (i === (questions.length - 1)) {
    clearInterval(setCountdown);
    // add save   user's initials  form  
    saveToLocalStorage();
  }


}

function countDown(e) {


  countDownDate--;
  document.getElementById('timer2').innerHTML = countDownDate + 's';
  if (countDownDate < 0) {
    clearInterval(setCountdown);
    document.getElementById("timer2").innerHTML = "EXPIRED";
  }



}
function saveToLocalStorage() {

  var dataSaved = {
    userIn: "",
    score: ''
  }

  dataSaved.score = countDownDate;
  dataSaved.userIn = prompt('Your initials :');

  let initials = JSON.parse(localStorage.getItem('dataSaved'));

  if (initials.userIn === dataSaved.userIn) {

  }
  else {
    initials.userIn = dataSaved.userIn;
    localStorage.setItem('dataSaved', JSON.stringify(initials))
  }

}


