
console.log(questions);

/*
  on page load: 
    show game start screen
    include how to play instructions
    add start quiz button
    
  on start button click:
    show question
    start timer
    hide game-start div 
    show questions div

  on answer selection:
    check to see if answer is correct
    if correct:
      display success message
      add to score
      show next question
    if incorrect:
      display fail message
      deduct time from timer
      show next question

  for game end:
    if all the questions have been answered:
      display score
      prompt to save initials and results
      on save:
        record results in local storage
    if time runs out:
      display score
      prompt to try again
*/

/*
  functions:
    startGame()
    resetGame()
    endGame()
    restartGame()

    startTimer()
    decrementTimer()

    renderQuestion()
    checkAnswer()

    saveScore()
    clearScores()
    toggleScores()

*/

let timer = 60;
let score = 0;
let player = '';
let qIndex = 0;

function startGame() {
  /*
    hide game-start div
    show questions div
    call startTimer()
  */
}

function resetGame() {
  /*
    hide questions div
    show game-start div
    set score back to 0
    set timer back to initial value
  */
}

function restartGame() {
  /*
    call resetGame
    call startGame
  */
}

/*
  if questions.length-1 is equal to qIndex:
    call endGame function 
*/

function endGame() {
  /*
    hide questions div
    show end-game div
      show buttons for save score, clear scores, and restart quiz
    display score
    ask for name input
  */
}

function startTimer() {
  /*
    decrement time by 1 every 1000ms
    if timer is less than or equal to 0:
      clear interval
      set timer to 0
      call endGame()
  */
}

function decrementTimer() {
  /*
    subtract 5 from timer
    display penalty message
  */
}

function renderQuestion() {
  /*
    grab questions[qIndex] from questions array
    create html element for title
    append to page
    loop through choices array
    create html element for each choice
    append choices to page
  */
}

/*
  add event listener to choices
  call this function upon clicking on a choice
*/

function checkAnswer() {
  /*
    grab value of the chosen answer
    compare it to actual answer
    if correct:
      increment score
      increment qIndex
      call renderQuestion()
    if incorrect:
      call decrementTimer()
      increment qIndex
      call renderQuestion()
  */
}

function saveScore() {
  /*
    capture input value for name
    save name and score in a new object
    push new object into local storage array
    display high-scores div
  */
}

function clearScores() {
  /*
    delete all name and scores from local storage
    display high-scores div
  */
}

function toggleScores() {
  /*
    if hidden:
      grab scores from local storage
      sort scores from high to low
      append to high-scores div
      show high-scores div
    if visible:
      hide high-scores div
  */
}