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


const questions = [
  {
    question: 'Which allows the removal of elements from a collection?',
    answers: [
      { text: 'a) Enumeration', correct: false },
      { text: 'b) Iterator', correct: false },
      { text: 'c) Both', correct: false },
      { text: 'd) None Of the Above', correct: true }
    ]
  },
  {
    question: 'The Comparator interface contains the method?',
    answers: [
      { text: 'compareWith', correct: false },
      { text: 'compareTo()', correct: false },
      { text: 'compare', correct: true },
      { text: 'None Of the Above', correct: false }
    ]
  },
  {
    question: 'Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?',
    answers: [
      { text: 'a) Insertion sort', correct: false },
      { text: 'b) Heap sort', correct: false },
      { text: 'c) Quick sort', correct: false },
      { text: 'd) Merge sort', correct: true }
    ]
  },
  {
    question: 'Which one of the following is an application of Stack Data Structure??',
    answers: [
      { text: 'a) Managing function calls', correct: false },
      { text: 'b) The stock span problem', correct: false },
      { text: 'c) Arithmetic expression evaluation', correct: false },
      { text: 'd) All of the Above', correct: true }
    ]
  },
  {
    question: 'The result evaluating the postfix expression 10 5 + 60 6 / * 8 – is?',
    answers: [
      { text: 'a) 284', correct: false },
      { text: 'b) 213', correct: false },
      { text: 'c) 142', correct: true },
      { text: 'd) 71', correct: false } 
    ]
  },
  {
    question: 'The minimum number of stacks needed to implement a queue is?',
    answers: [
      { text: 'a) 3', correct: false },
      { text: 'b) 1', correct: false },
      { text: 'c) 2', correct: true },
      { text: 'd) 4', correct: false }
    ]
  },
  {
    question: 'The best data structure to check whether an arithmetic expression has balanced parenthesis is a',
    answers: [
      { text: 'a) Queue', correct: false },
      { text: 'b) Stack', correct: true },
      { text: 'c) Tree', correct: false },
      { text: 'd) List', correct: false }
    ]
  },
  {
    question: 'Which of the following is not an inherent application of stack?',
    answers: [
      { text: 'a) Implementation of recursion', correct: false },
      { text: 'b) Evaluation of a postfix expression', correct: false },
      { text: 'c) Reverse a string', correct: false },
      { text: 'd) Job scheduling', correct: true }
    ]
  },
  {
    question: 'Convert the following infix expression into its equivalent post fix expression (A + B^ D) / (E – F) + G?',
    answers: [
      { text: 'a) ABD + ^EF – / G+', correct: false },
      { text: 'b) ABD^ + EF – / G+', correct: true },
      { text: 'c) ABD + ^EF / – G+', correct: false },
      { text: 'd) ABD^ + EF / – G+', correct: false }
    ]
  },
  {
    question: 'Which of the following is a true about Binary Trees?',
    answers: [
      { text: 'a) Every binary tree is either complete or full.', correct: false },
      { text: 'b) Every complete binary tree is also a full binary tree.', correct: false },
      { text: 'c) Every full binary tree is also a complete binary tree.', correct: false },
      { text: 'd) None of the Above', correct: true } 
    ]
  },
  {
    question: 'The maximum number of binary trees that can be formed with three unlabeled nodes is:',
    answers: [
      { text: 'a) 1', correct: false },
      { text: 'b) 5', correct: true },
      { text: 'c) 4', correct: false },
      { text: 'd) 3', correct: false }
    ]
  },
  {
    question: 'The number of leaf nodes in a rooted tree of n nodes, with each node having 0 or 3 children is:',
    answers: [
      { text: 'a) n/2', correct: false },
      { text: 'b) (n-1)/3', correct: false },
      { text: 'c) (n-1)/2', correct: false },
      { text: 'd) (2n+1)/3', correct: true }
    ]
  },
  {
    question: 'A binary tree T has 20 leaves. The number of nodes in T having two children is',
    answers: [
      { text: 'a) 18', correct: false },
      { text: 'b) 19', correct: true },
      { text: 'c) 17', correct: false },
      { text: 'd) Any number between 10 and 20', correct: false }
    ]
  },
  {
    question: 'The number of structurally different possible binary trees with 4 nodes is',
    answers: [
      { text: 'a) 14', correct: true },
      { text: 'b) 12', correct: false },
      { text: 'c) 336', correct: false },
      { text: 'd) 168', correct: false }
    ]
  },
  {
    question: 'A strictly binary tree with 10 leaves',
    answers: [
      { text: 'a) cannot have more than 19 nodes', correct: false },
      { text: 'b) has exactly 19 nodes', correct: true },
      { text: 'c) has exactly 17 nodes', correct: false },
      { text: 'd) has exactly 20 nodes', correct: false }
    ]
  },
  {
    question: 'A complete binary tree with n non-leaf nodes contains',
    answers: [
      { text: 'a) log2 n nodes', correct: false },
      { text: 'b) n+1 nodes', correct: false },
      { text: 'c) 2n nodes', correct: false },
      { text: 'd) 2n+1 nodes', correct: true }
    ]
  },
  {
    question: 'The number of different binary trees with 6 nodes is ______.',
    answers: [
      { text: 'a) 6', correct: false },
      { text: 'b) 42', correct: false },
      { text: 'c) 132', correct: true },
      { text: 'd) 256', correct: false }
    ]
  },
  {
    question: 'Which of the following number of nodes can form a full binary tree?',
    answers: [
      { text: 'a) 8', correct: false },
      { text: 'b) 15', correct: true },
      { text: 'c) 14', correct: false },
      { text: 'd) 13', correct: false }
    ]
  },
  {
    question: 'Which of the following correctly declares an array?',
    answers: [
      { text: 'a) int geeks[20];', correct: true },
      { text: 'b) int geeks;', correct: false },
      { text: 'c) geeks{20};', correct: false },
      { text: 'd) array geeks[20];', correct: false }
    ]
  },
  {
    question: 'Which of the following is not a Java feature?',
    answers: [
      { text: 'a) Dynamic', correct: false },
      { text: 'b) Architecture Neutral', correct: false },
      { text: 'c) Use of pointers', correct: true },
      { text: 'd) Object-oriented', correct: false }
    ]
  }
]