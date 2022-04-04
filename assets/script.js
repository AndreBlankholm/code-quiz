var startBtn = document.getElementById("start-btn");
var correctAnswerCount = 0;
var wrongAnswerCount = 0;
var masterTimer = null;
var currentQuestionIndex = 0;
var delayInMilliseconds = 2000;

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
    hrEl.style = "display: block;";
    var pEl = document.getElementById("p" + question.questionNumber);
    pEl.style = "display: block;";

    if (userChoice === question.correctAnswer) {
        
        pEl.innerHTML = "Correct!";  // answers
    } else {
    
        pEl.innerHTML = "Wrong Answer!";
        
    }

    if(currentQuestionIndex < questions.length -1) {
        currentQuestionIndex++;

        setTimeout(function(){
            //remove the old question from the DOM
            var parentDiv = document.getElementById("questions-container");
            parentDiv.innerHTML = "";
            buildQuizElements();
        }, delayInMilliseconds);

    } else {
        endQuiz();
    }

    
}

var buildQuizElements = function() {
    startBtn.setAttribute("style", "display: none;");
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
        listItemEl.appendChild(buttonEl);
        orderedListEl.appendChild(listItemEl);
    };
     console.log(orderedListEl);

    var questionContainer = document.getElementById("questions-container");
    questionContainer.appendChild(questionEl);               //appending to the div the stuff I didnt append in the for loop                                   
    questionContainer.appendChild(orderedListEl);
    questionContainer.appendChild(hrEl);
    questionContainer.appendChild(pEl);



    var fiveMinutes = 60 * 1;
    var display = document.querySelector("#time-remaining");


    

    startTimer(fiveMinutes, display);
   
};









var startTimer = function(duration, display) {

}


var startQuiz = function(){
    buildQuizElements();
 }

var endQuiz = function() {
 alert("End of game thanks for playing");
}

startQuiz();