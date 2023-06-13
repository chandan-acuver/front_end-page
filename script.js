const questions =[
    {
      question:  " 1. How satisfied are you with our products?",
      answers:[
        {text:" 1 "},
        {text:" 2 "},
        {text:" 3 "},
        {text:" 4 "},
        {text:" 5 "},
      ]
    },
    {
    question:"2. How fair are the prices compared to similar retailers? ",
      answers:[
        {text:" 1 "},
        {text:" 2 "},
        {text:" 3 "},
        {text:" 4 "},
        {text:" 5 "},
      ]
    },
    {
      question: " 3. How satisfied are you with the value for money of your purchase?",
      answers:[
        {text:" 1 "},
        {text:" 2 "},
        {text:" 3 "},
        {text:" 4 "},
        {text:" 5 "},
      ]
    },
    {
       question:" 4. On a scale of 1-10 how would you recommend us to your friends and family? ",
       answers:[
        {text:" 1 "},
        {text:" 2 "},
        {text:" 3 "},
        {text:" 4 "},
        {text:" 5 "},
      ]
    },
    {
    question: "5. What could we do to improve our service?",
    answers:[
        {text:" 1 "},
        {text:" 2 "},
        {text:" 3 "},
        {text:" 4 "},
        {text:" 5 "},
      ]
    }
];
const questionElement=document.getElementById("question");
const anwserButtons=document.getElementById("anwser-buttons");
const nextButton=document.getElementsByClassName("next-btn");
const previousButton=document.getElementsByClassName("previous-btn");
let currentQuestionIndex=0;

function start()
{
     currentQuestionIndex=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML=questionNo +" ."+currentQuestion.question;

     
       currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("next-btn1");
        anwserButtons.appendChild(button);
     });   
}

function resetState()
{
    nextButton.style.display="none";
    while(anwserButtons.firstChild){
        anwserButtons.removeChild(anwserButtons.firstChild);
    }
}

start();