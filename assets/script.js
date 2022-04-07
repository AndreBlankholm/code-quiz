var startPageContainer = document.getElementById("start-page-container");
var questionsContainer = document.getElementById("questions-container");
var startBtn = document.getElementById("start-btn");
var viewHighScoreButton = document.getElementById("view-high-score-button");
var highScoresContainer = document.getElementById("high-scores-container");
var timeRemainingText = document.getElementById("time-remaining-text");
var goBackButton = document.getElementById("go-back-button");
var timeLimit = 60 * 1;
var intervalId = null;
var gameOver = false;
var display = document.querySelector("#time-remaining");
var correctAnswerCount = 0;
var wrongAnswerCount = 0;
var masterTimer = null;
var currentQuestionIndex = 0;
var delayInMilliseconds = 2000;
var minutes = 0;
var seconds = 0;
var timer = null;


var questions = [
    {
        questionNumber: 1,
        question: "What is the capital of Minnesota?",
        options: ["Mankato", "St. Paul", "Minneapolis", "Rochester"],
        correctAnswer: "St. Paul"
    },
    {
        questionNumber: 2,
        question: "What is the third color of the American Flag after Red and White?",
        options: ["Green", "Yellow", "Purple", "Blue"],
        correctAnswer: "Blue"
    },
    {
        questionNumber: 3,
        question: "Who did Will Smith slap at the Oscars?",
        options: ["Jaden Smith", "Martin Lawrence", "Chris Rock", "Kid Rock"],
        correctAnswer: "Chris Rock"
    },
    {
        questionNumber: 4,
        question: "Who was the 45 president of the United States?",
        options: ["Bill Clinton", "Reggie Bush", "Donald J. Trump", "Tito Jackson"],
        correctAnswer: "Donald J. Trump"
    }

];

var evaluateAnswer = function(event) {
    console.log(event.target.innerHTML);
        var userChoice = event.target.innerHTML;
        var question = questions[currentQuestionIndex];
        var hrEl = document.getElementById("hr" + question.questionNumber);
        
        if(hrEl !== null) {
            hrEl.style = "display: block;";
        };

        var pEl = document.getElementById("p" + question.questionNumber);
        
        if(pEl !== null) {
            pEl.style = "display: block;";
        }
        
        if (userChoice === question.correctAnswer) {
            
        if(pEl !== null) {
            pEl.innerHTML = "Correct!";  // answers
        };
        } else {
        
        if(pEl !== null) {
            pEl.innerHTML = "Wrong Answer!";
        };
            timer = timer - 10;

        }

        if(currentQuestionIndex < questions.length -1) {
            currentQuestionIndex++;

        setTimeout(function(){
            //remove the old question from the DOM
            
            var parentDiv = document.getElementById("questions-container");
            parentDiv.innerHTML = "";
            buildQuizElements();        
        },  delayInMilliseconds);

    } else {
       endQuiz();
    }

    
}

var buildQuizElements = function() {
    var currentQuestion =  questions[currentQuestionIndex]; //current question is an Object.  <h3> What is the Capital of Mn </h3>
    console.log(currentQuestion);
    
    var questionTag = "h3";
    var orderedListTag = "ol";
    var listItemTag = "li";
    var hrTag = "hr";
    var pTag = "p";
    var buttonTag = "button";

    var questionEl = document.createElement(questionTag);
    questionEl.innerHTML = currentQuestion.question; 

    var hrEl = document.createElement(hrTag);
    var pEl = document.createElement(pTag);

    //set style attributes that are needed
    // hid the Hr line and result until question is answered
    hrEl.setAttribute("id", "hr" + currentQuestion.questionNumber);  //
    hrEl.setAttribute("style", "display: none;");
    pEl.setAttribute("id", "p" + currentQuestion.questionNumber);  //
    pEl.setAttribute("style", "display: none;");
    
    var orderedListEl = document.createElement(orderedListTag);

    for ( i = 0; i < currentQuestion.options.length; i++) {
        var optionText = currentQuestion.options[i];   // grabs the text from each index and appended to <ol> only.
        var listItemEl = document.createElement(listItemTag);
        var buttonEl = document.createElement(buttonTag);
        buttonEl.innerHTML = optionText;
        buttonEl.addEventListener("click", evaluateAnswer);
        buttonEl.setAttribute("class", "btn btn-primary");
        listItemEl.appendChild(buttonEl);
        orderedListEl.appendChild(listItemEl);
    };
     console.log(orderedListEl);

    var questionContainer = document.getElementById("questions-container");
    questionContainer.appendChild(questionEl);               //appending to the div the stuff I didnt append in the for loop                                   
    questionContainer.appendChild(orderedListEl);
    questionContainer.appendChild(hrEl);
    questionContainer.appendChild(pEl);

    
};

var viewHighScores = function() {
    timeRemainingText.setAttribute("style", "display: none;");
    viewHighScoreButton.setAttribute("style", "display: none;");
    startPageContainer.setAttribute("style", "display: none;");
    highScoresContainer.setAttribute("style", "display: block;");
    questionsContainer.setAttribute("style", "display: none;");
};

viewHighScoreButton.addEventListener("click", viewHighScores);


var goBack = function() {
    timeRemainingText.setAttribute("style", "display: block;");
    viewHighScoreButton.setAttribute("style", "display: block;");
    startPageContainer.setAttribute("style", "display: block;");
    highScoresContainer.setAttribute("style", "display: none;");

};

goBackButton.addEventListener("click", goBack);

var startTimer = function(duration, display) {
    timer = duration, minutes, seconds;
    masterTimer = timer;
    intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0 && gameOver === false) {
        timer = duration;
        endQuiz();
      }
    }, 1000);
}


var startQuiz = function(){
    
    startPageContainer.setAttribute("style", "display: none;");
    questionsContainer.setAttribute("style", "display: block;");
    buildQuizElements();
    startTimer(timeLimit, display);
}

var endQuiz = function() {
 gameOver = true;  
 clearInterval(intervalId);
 console.log("End of game thanks for playing");
 viewHighScoreButton.setAttribute("style", "display: block;");

}

startBtn.addEventListener("click", startQuiz);
