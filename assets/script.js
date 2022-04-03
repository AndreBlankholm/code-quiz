var startBtn = document.getElementById("start-btn");
var correctAnswerCount = 0;
var wrongAnswerCount = 0;
var masterTimer = null;
var currentQuestionIndex = 0;

var questions = [
    {
        questionNumber: 1,
        question: "What is the capital of Minnesota?",
        options: ["Mankato", "St. Paul", "Minnapolis", "Rochester"],
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


var buildQuizElements = function() {
    startBtn.setAttribute("style", "display: none;");
    var currentQuestion =  questions[currentQuestionIndex]; //current question is an Object.  <h3> What is the Capital of Mn </h3>
    console.log(currentQuestion);

    var questionTag = "h3";
    var orderedListTag = "ol";
    var listItemTag = "li";
    var hrTag = "hr";
    var pTag = "p";

    var questonEl = document.createElement(questionTag);
    questonEl.innerHTML = currentQuestion.question; //
};













var startTimer = function() {

}


var startQuiz = function(){
 buildQuizElements();
}

var endQuiz = function() {

}

startQuiz();