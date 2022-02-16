// Random Quiz

// Event Listener (Mark Quiz)
document.getElementById('mark-quiz').addEventListener('click', markQuiz);

let score = 0;


// Event Function
function markQuiz() {
    // Initialize Score
    score = 0;
    // Mark q's
    markQuestion1();
    markQuestion2();
    markQuestion3();
    markQuestion4();


    // Display Quiz Results
    document.getElementById('quiz-score').innerHTML = score;
    document.getElementById('quiz-percent').innerHTML = Math.round(score / 4 * 100);


}





///////////////////////////////////////////////////////////////
//define & invoke - local variables - organized
function markQuestion1() {
    let answer = document.getElementById('answer1').value;
    answer = answer.toLowerCase();

    let result1El = document.getElementById('result1');
    if (answer == 'canada') {
        result1El.innerHTML = 'Correct';
        result1El.style.color = 'green';
        score++;
    } else {
        result1El.innerHTML = 'Incorrect';
        result1El.style.color = 'red';
    }
}

function markQuestion2() {
    let answer = document.getElementById('answer2').value;
    answer = answer.toLowerCase();

    let result2El = document.getElementById('result2');
    if (answer == 'cardinal') {
        result2El.innerHTML = 'Correct';
        result2El.style.color = 'green';
        score++;
    } else {
        result2El.innerHTML = 'Incorrect';
        result2El.style.color = 'red';
    }
}

function markQuestion3() {
    let answer = document.getElementById('answer3').value;
    answer = answer.toLowerCase();

    let result3El = document.getElementById('result3');
    if (answer == 'tai lung') {
        result3El.innerHTML = 'Correct';
        result3El.style.color = 'green';
        score++;
    } else {
        result3El.innerHTML = 'Incorrect';
        result3El.style.color = 'red';
    }
}

function markQuestion4() {
    let answer = document.getElementById('answer4').value;
    answer = answer.toLowerCase();

    let result4El = document.getElementById('result4');
    if (answer == 'pickleball') {
        result4El.innerHTML = 'Correct';
        result4El.style.color = 'green';
        score++;
    } else {
        result4El.innerHTML = 'Incorrect';
        result4El.style.color = 'red';
    }
}