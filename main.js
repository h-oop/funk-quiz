// Random Quiz

// Event Listener (Mark Quiz)
document.getElementById('mark-quiz').addEventListener('click', markQuiz);


////////////////////////////////////
// Event Function
function markQuiz() {
    // Initialize Score
    let score = 0;

    // Mark q's
    score += markQuestion(1, "canada");
    score += markQuestion(2, "cardinal");
    score += markQuestion(3, "tai lung");
    score += markQuestion(4, "pickleball");


    // Display Quiz Results
    document.getElementById('quiz-score').innerHTML = score;
    document.getElementById('quiz-percent').innerHTML = Math.round(score / 4 * 100);

}



///////////////////////////////////////////////////////////////
//define & invoke - local variables - organized - efficiency
// parameters and arguments - pass data int function
//return values - return data from a function
function markQuestion(qNum, correctAnswer) {

    let userAnswer = document.getElementById("answer" + qNum).value;
    userAnswer = userAnswer.toLowerCase();
 
    let result1El = document.getElementById("result" + qNum);
    if (userAnswer === correctAnswer) {
       result1El.innerHTML = 'Correct';
       result1El.style.color = 'green';
       return 1;
    } else {
       result1El.innerHTML = 'Incorrect';
       result1El.style.color = 'red';
       return 0;
    }
}
