var startBtn = document.getElementById("start-btn");
var correctAnswerCount = 0;
var wrongAnswerCount = 0;
var masterTimer = null;
var currentQuestionIndex = 0;

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

    var questonEl = document.createElement(questionTag);
    questonEl.innerHTML = currentQuestion.question; 
    
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

};













var startTimer = function() {

}


var startQuiz = function(){
 buildQuizElements();
}

var endQuiz = function() {

}

startQuiz();