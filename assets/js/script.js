
var playerInfo = {
    points: 0,
};

var Questions = [
    {
        question: "What color is the sky?",
        choices: ["Green", "Blue", "Red", "Yellow"],
        answer: "Blue",
    },
    {
        question: "What comes after three?",
        choices: ["one", "two", "five", "four"],
        answer: "four",
    },
    {
        question: "What animal goes Moo?",
        choices: ["dog", "cow", "bird", "cat"],
        answer: "cow",
    },
    {
        question: "Which is sweet?",
        choices: ["salt", "sand", "sardines", "salt water taffy"],
        answer: "salt water taffy",
    },
];
var currentQuestion = 0;
function displayQuestion() {
    if (currentQuestion >= Questions.length) {
        return
    }
    document.querySelector(".question").innerText =
        Questions[currentQuestion].question;
    for (i = 1; i < 5; i++) {
        document.querySelector(".answerbtn" + i).innerText =
            Questions[currentQuestion].choices[i - 1];


    }

}

var seconds = document.getElementById("seconds");


function start() {
    document.querySelector(".startbtn").addEventListener("click", function () {
        document.querySelector(".quizArea").style.display = "block";
        document.querySelector(".startArea").style.display = "none";
        displayQuestion()
        
        var remainingSeconds = 60;
        console.log(seconds)

        var timer = setInterval(function() {
            if (remainingSeconds === 0) {
                clearInterval(timer)
                gameEnd();
            }
            seconds.innerHTML = remainingSeconds;
           remainingSeconds--;
        }, 1000)
        for (i = 1; i < 5; i++) {
            document.querySelector(".answerbtn" + [i]).innerText =
            Questions[currentQuestion].choices[i - 1];
            
            document
            .querySelector(".answerbtn" + [i])
            .addEventListener("click", function (event) {
                console.log(event.target.innerText);
                console.log(Questions[currentQuestion].answer);
                if (
                    (event.target.innerText === Questions[currentQuestion].answer)
                    ) {
                        //   console.log(event)
                        playerInfo.points = playerInfo.points + 10;
                        console.log(playerInfo.points);
                    }
                    currentQuestion++;
                    if (currentQuestion < Questions.length) {
                        displayQuestion()
                        
                    } else {
                        document.querySelector(".quizArea").style.display = "none"
                        document.querySelector(".gameEnd").style.display = "block"
                    }
                });
            }
        });
        
    }
    
    
    
    
    document.querySelector(".initialSubmit").addEventListener("click", function () {
        document.querySelector(".gameEnd").style.display = "none";
        document.querySelector(".highScores").style.display = "block";
        var initial = document.querySelector(".initials").value;
        var initials = document.createElement("li");
        initials.textContent = initial;
        document.querySelector(".scoreBox").appendChild(initials);
    })

start();
