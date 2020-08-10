//get all elements
const start=document.getElementById("start");
const quiz=document.getElementById("quiz");
const qimg=document.getElementById("qimage");
const question=document.getElementById("question");
const counter=document.getElementById("counter");
const timegauge=document.getElementById("timegauge");
const choiceA=document.getElementById("A");
const choiceB=document.getElementById("B");
const choiceC=document.getElementById("C");
const progress=document.getElementById("progress");
const scoreContainer=document.getElementById("score-container");
const resultImage=document.getElementById("resultImage");
const name=document.getElementById("Name");
const showname=document.getElementById("Showname");
const main=document.getElementById("main");
//questions
let questions =[
    {
imgSrc:"images/html.png",
q:"what does html stands for?",
choiceA:"hyper text markup language",
choiceB:"Hypertext and text markup language",
choiceC:"home tool markup lang",
correctAnswer:"hyper text markup language"
    },
    {
        q:"what does CSS stands for?",
imgSrc:"images/css.png",
choiceA:"Central Superior Services",
choiceB:"Cascading Style Sheets",
choiceC:"Cascading Superior Services",
correctAnswer:"Cascading Style Sheets"

    },
    {
        q:"HTML element of JavaScript?",
        imgSrc:"images/js.png",
        choiceA:"javascript",
        choiceB:"js",
        choiceC:"script",
        correctAnswer:"script"
    }
]
//some varaibls
let lastQuestionIndex=questions.length-1;
let runningQuestionIndex=0;
const questionTime=10;
const gaugewidth=150;
const gaugeprogressunit=gaugewidth/questionTime;
let count=0;
let Timer;
let score=0;
//start funct
function startQuiz(){
    start.style.display="none";
    renderQuestion();
    quiz.style.display="block";
    progressRender()
    counterRender()
    Timer=setInterval(counterRender,1000)
    name.style.display="none";
    showname.innerHTML=name.value;
    name.value="";


    }
    //render question funct
    function renderQuestion()
{
    let q =questions[runningQuestionIndex];
    qimg.innerHTML="<img src="+ q.imgSrc + ">";
    
    question.innerHTML=q.q;

    choiceA.innerHTML=q.choiceA;
    choiceB.innerHTML=q.choiceB;
    choiceC.innerHTML=q.choiceC;
}
//next question time end hone agla sawal display 
function nextQuestion()
{
    if(runningQuestionIndex < lastQuestionIndex)
        {
            runningQuestionIndex++;
            renderQuestion();
        }
        else{
            clearInterval(Timer);
            scoreRender();
        }
}
//progress render funct
function progressRender()
{
    for(let qindex=0;qindex <= lastQuestionIndex;qindex++)
    {
        progress.innerHTML +="<div class='prog' id="+qindex+"</div>";
    }
}
//counter
function counterRender()
{
    if(count <= questionTime){
        counter.innerHTML=count;
        timegauge.style.width=gaugeprogressunit*count+"px";
        count++;
    }
    else{
        count=0;
       // answerIsWrong();
        nextQuestion();
    }
}
function checkAnswer(answer)
{
    if(answer.innerHTML == questions[runningQuestionIndex].correctAnswer)
    {
        //ans is correct
score+=10;
//console.log(score)
//progress bar green
//answerIsCorrect()

    }
    else{
       //ans is wrong

       //progress bar red
       //answerIsWrong()
    }
    count=0;
    nextQuestion();
}
// function answerIsCorrect()
// {
//     document.getElementById(runningQuestionIndex).style.backgroundColor="#0f0";
// }
// function answerIsWrong()
// {
//     document.getElementById(runningQuestionIndex).style.backgroundColor="#f00";
// }
function scoreRender()
{
    scoreContainer.style.display="block";
   // console.log(score)
    const scorepercent=Math.round(score/30*100);
    const percent=document.getElementById("percent");
   // scoreContainer.innerHTML="<p"+scorepercent+"%</p>";
   //scoreContainer.childNodes[0].childNodes[0].innerHTML=scorepercent
   percent.innerHTML=showname.innerHTML+" your score is "+scorepercent+"%";
   if(scorepercent>=50)
   {
    resultImage.src="images/thumbsup.jpg"

   }
   else{
   resultImage.src="images/thumbsdown.png"
       
   }
console.log(questions.length);
}