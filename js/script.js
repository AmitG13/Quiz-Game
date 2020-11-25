const questionContainerElement = document.getElementById('question-container')
const restartButton=document.getElementById('restart-btn')
const questionElement = document.getElementById('question')
const startButton = document.getElementById('start-btn')
const submitButton = document.getElementById('submit-btn')
const answerButtonsElement = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')
const reportContainerElement=document.getElementById('report-container')
const timerElement=document.getElementById('timer');

const table = document.getElementById("my-table");
const resultTable=document.getElementById('result-table');
const inputText = document.getElementById('inputText');

let shuffledQuestions, currentQuestionIndex,score=0;
let ansSelected=false;
let startingMinutes;
let time;
let timePerQuestion=[10*60,0,0,0,0,0];
let finishtime;

function updateTimer(){
  const minutes=Math.floor(time/60);
  let seconds=time%60;
  seconds=(seconds<10)? '0'+seconds : seconds;

  timerElement.innerHTML=`${minutes}: ${seconds}`;
  time--;
  if(time==0){
    showResults();
  }
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
})
submitButton.addEventListener('click',showResults);
restartButton.addEventListener('click',()=>window.location.reload())

function startGame() {
  score=0;
  startButton.classList.add('hide');
  reportContainerElement.classList.add('hide');
  inputText.style.display = 'none';
  startingMinutes=10;
  time=startingMinutes*60;
  timerElement.innerText="Remaining time: "+ "10:00";
  setInterval(updateTimer,1000);
  
  shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0,5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex], currentQuestionIndex+1);
}

function showQuestion(question, index) {
  questionElement.innerText = 'Q'+index +'.' +' ' +question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  })
  submitButton.addEventListener('click',showResults);
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  ansSelected=false;
}

function selectAnswer(e) {
  if(ansSelected==false){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(selectedButton, correct);
    if ( currentQuestionIndex < 4) {
      nextButton.classList.remove('hide');
    } else {
      submitButton.classList.remove('hide');
    }
    ansSelected=true;
    timePerQuestion[currentQuestionIndex+1]=time;
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
    score++;
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function showResults(){
  finishtime=time;

  questionContainerElement.classList.add('hide');
  submitButton.classList.add('hide');
  reportContainerElement.classList.remove('hide');

  restartButton.classList.remove('hide');
  document.getElementById("pname").innerHTML = document.getElementById('username').value;
  document.getElementById("score").innerHTML = `${score}`;
  document.getElementById("correct").innerHTML = `${score}`;
  document.getElementById("wrong").innerHTML = `${5-score}`;
    
    let timtaken = 0;

  for(let i=1;i<timePerQuestion.length;i++){
    let row = table.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = `Q${i}.`;
    
    let mins=(Math.floor((timePerQuestion[i-1]-timePerQuestion[i])/60));
    let secs=((timePerQuestion[i-1]-timePerQuestion[i])%60);
    timtaken += (mins*60 + secs);
    cell2.innerHTML = (mins>0)? `${mins} minutes ${secs} seconds`: ` ${secs} seconds`;
  }
    let finisht = timtaken;
    let minfinish=(Math.floor(finisht/60));    
    let secfinish=(finisht%60);                 
document.getElementById("total").innerHTML = (minfinish>0)? `${minfinish} minutes ${secfinish} seconds`: ` ${secfinish} seconds`;    

}