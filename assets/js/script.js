var Questions=[
    {
        question:"What color is the sky?",
        choices:["Green","Blue","Red","Yellow"],
        answer:"Blue"
    },
    {
        question:"What comes after three?",
        choices:["one","two","five","four"],
        answer:"four"
    },
    {
        question:"What animal goes Moo?",
        choices:["dog","cow","bird","cat"],
        answer:"cow"
    },
    {
        question:"Which is sweet?",
        choices:["salt","sand","sardines","salt water taffy"],
        answer:"salt water taffy"
    },
]

var currentQuestion=0

//eventlistener for click on start button
document.querySelector(".startbtn").addEventListener("click", function(){
    document.querySelector(".quizArea").style.display="block"
    document.querySelector(".startArea").style.display="none"
    document.querySelector(".question").innerText=Questions[currentQuestion].question

for(i=1; i<5; i++){
    document.querySelector(".answerbtn"+i).innerText=Questions[currentQuestion].choices[i-1]
    console.log(i)
    // Question and buttons will be updated with current question

}
})

for(i=1; i<5; i++){
    document.querySelector(".answerbtn"+i).addEventListener("click", function(event){
        console.log(event)
        // 
    })

}

//startbutton will activate 60 sec count down timer 

//startbutton will hide after clicked

//the question(s) will appear with multiple choice answers

//if statements for right & wrong answers 


//time subtracted for wrong answers 

//timer reaches zero or all questions answered game ends

//player can add initials & save to local storage