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