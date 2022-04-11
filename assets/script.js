var startPageContainer = document.getElementById("start-page-container");
var questionsContainer = document.getElementById("questions-container");
var startBtn = document.getElementById("start-btn");
var viewHighScoreButton = document.getElementById("view-high-score-button");
var highScoresContainer = document.getElementById("high-scores-container");
var timeRemainingText = document.getElementById("time-remaining-text");
var goBackButton = document.getElementById("go-back-button");
var highScoreFormContainer = document.getElementById("final-score-form-container");
var highScoresTable = document.getElementById("high-scores-table");
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
var currentScore = 0;
var highScores = [];



var questions = [
    {
        questionNumber: 1,
        question: "What does HTML stand for?",
        options: ["HyperType Markup Language", "HyperText Markup Language", "HyperText Marking Language", "HitText Markup Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        questionNumber: 2,
        question: "What does the ( li ) stand for in HTML?",
        options: ["List Item", "list Items", "level In", "List Index"],
        correctAnswer: "List Item"
    },
    {
        questionNumber: 3,
        question: "What does CSS stand for?",
        options: ["Cascading Seen Sheet", "Coding Style Sheet", "Cascading Style Sheet", "Cascading Style Shell"],
        correctAnswer: "Cascading Style Sheet"
    },
    {
        questionNumber: 4,
        question: "What does a variable start with in JavaScript?",
        options: ["let", "var", "const", "All of the Above"],
        correctAnswer: "All of the Above"
    },
    {
        questionNumber: 5,
        question: "How many Columns fit across a webpage?",
        options: ["4", "6", "8", "12"],
        correctAnswer: "12"
    },
    {
        questionNumber: 6,
        question: "In CSS, align-itmes-start align all items on what side",
        options: ["Top", "Left", "Right", "Bottom"],
        correctAnswer: "Top"
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
            currentScore = currentScore + 5;
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

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
 for(var i = 0; i , allScores.length; i++){
    var createTd = document.createElement("td");
    createTd.textContent = allScores[i].intials + " " + allScores[i].score;
     viewHighScoreButton.appendChild(createTd);
                                                                                                                
 }
};

var viewHighScores = function() {
    timeRemainingText.setAttribute("style", "display: none;");
    viewHighScoreButton.setAttribute("style", "display: none;");
    startPageContainer.setAttribute("style", "display: none;");
    highScoresContainer.setAttribute("style", "display: block;");
    questionsContainer.setAttribute("style", "display: none;");
    highScoreFormContainer.setAttribute("style", "display: none;");

    for(var i = 0; i < highScores.length; i++) {
        var currentScore = highScores[i];

        var tdRankEL = document.createElement("td");
        tdRankEL.innerHTML = "Rank";
        var tdInitialsEl = document.createElement("td");
        tdInitialsEl.innerHTML = currentScore.initials;
        var tdScoresEl = document.createElement("td");
        tdScoresEl.innerHTML = currentScore.score;

        var trEl = document.createElement("tr");
        
    
    }
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
 questionsContainer.setAttribute("style", "display: none;");
 highScoreFormContainer.setAttribute("style", "display: block;");
 var finalScore = document.getElementById("final-score");
 finalScore.innerHTML = currentScore;
 questionsContainer.innerHTML = "";
}

startBtn.addEventListener("click", startQuiz);

$("#high-score-form .btn-primary").click(function (event) {
   event.preventDefault();
    // get form values
    var initials = $("#initials").val();
   
    if (initials) {
      
      var newScore = {
          score: currentScore,
          initials: initials
      };
      highScores.push(newScore);
    }
    console.log(highScores);
  });
