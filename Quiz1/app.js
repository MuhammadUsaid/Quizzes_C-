var startTime = 1200;
var questions = [
    "<code><pre> for(int i = 0; i < 25; i++){\n if (i % 2 == 0)\n \t cout << i << endl;\n}</pre></code> <p> What will be the output?</p>",
    "<code> <pre> int a = 5; int& b = a; int c = 10;\n b = c; b = 13; \n What is the value of c after this code is executed? </pre> </code>",
    "<code><pre> for(int i = 0; i < 6; i++){\n if(i % 2 == 0)\n \t continue; \n cout << i; \n }</pre></code> <p> What will be the output?</p>",
    "<code><pre> for(int i = 1; i < 6; i++){\n if(i % 2 == 0)\n \t break; \n cout << i; \n }</pre></code> <p> What will be the output?</p>",
    "<code><pre> int i = 6; \n bool condition = true; \n for(;condition;){\n if(i < 7)\n \t condition = false; \n }</pre></code> <p>How many times will loop run?</p>",
    //6
    "<code> <pre> int a = 8; int& b = a; int c = 10;\n b = c; c = 13; \n What is the value of b after this code is executed? </pre> </code>",
    "<code><pre> int i = 6; \n bool condition = true; \n for(condition;){\n if(i < 10)\n \t condition = false; \n i++; \n }</pre></code> <p>How many times will loop run?</p>",
    "<code><pre> int i = 6; \n bool condition = true; \n for(;condition;){\n if(i > 7)\n \t condition = false; \n }</pre></code> <p>How many times will loop run?</p>",
    "<code> <pre> int a = 8; int& b = a; int c = 10;\n b = c; c = 13; \n What is the value of a after this code is executed? </pre> </code>",
    "<code><pre> int i = 6; \n bool condition = true; \n for(;condition;){\n if(i > 10)\n \t condition = false; \n i++; \n }</pre></code> <p>How many times will loop run?</p>",
    //11
    "<code><pre> int i = 40; \n while(i > 0) \n i /= 5;</pre></code> <p>How many times will loop run?</p>",
    "<code><pre> int i = 2; \n while(i < 70) \n i *= 5;</pre></code> <p>How many times will loop run?</p>",
    "<code><pre> int i = 0; \n while(i < 10) \n i *= 2;</pre></code> <p>How many times will loop run?</p>",
    "<code><pre> int i = 1; \n while(i < 10) \n i *= 2;</pre></code> <p>How many times will loop run?</p>",
    "<code> <pre> int a[3] = {1,2}; \n cout << a[2]; </pre> </code> <p> What will be the output? </p>",
    //16
    "<code> <pre> int a[2][2] = {1,2}; \n cout << a[1][1]; </pre> </code> <p> What will be the output? </p>",
    "<code> <pre> int a[2][2] = {1,2}; \n cout << a[0][1]; </pre> </code> <p> What will be the output? </p>",
    "<code> <pre>void func(int& a){ int b = a++; } \n int main() { int b = 0; func(b); \n cout << b; return 0;} </pre> </code> <p> What will be the output? </p>",
    "<code> <pre>void func(int& a){ int b = a + 1; } \n int main() { int b = 0; func(b); \n cout << b; return 0;} </pre> </code> <p> What will be the output? </p>",
    "<code> <pre>void func(int a[]){ a[0] = a[2]; a[1] = a[0]; \n a[2] = a[0]; a[1] = a[2]; } \n int main() { int b[3] = {3,4,5}; func(b); \n cout << b[1]; return 0;} </pre></code> <p> What will be the output? </p>"
];
var options = [
    ["Odd Numbers from 1 to 25","Even Numbers From 1 to 25","Odd Numbers from 0 to 24","Even Numbers from 0 to 24"],
    ["13", "5", "10" , "Error"],
    ["Nothing","0246","135","024"],
    ["Nothing","24","1","135"],
    ["0","infinite","1","Error"],
    //6
    ["8", "10", "13", "Address of c"],
    ["Error","6","4", "5"],
    ["1","0","infinite", "2"],
    ["8", "10", "13", "Error"],
    ["4","5","6", "Error"],
    //11
    ["Error", "2", "3", "infinite"],
    ["13", "2", "12", "3"],
    ["5", "infinite", "2", "3"],
    ["3", "2", "4", "5"],
    ["1", "Garbage Value", "Error", "0"],
    //16
    ["Error", "0", "Garbage Value", "2"],
    ["Error", "0", "1", "2"],
    ["0", "1", "Error", "I'm sorry. I'm not supposed to tell you this."],
    ["0", "1", "Error", "I'm sorry. I'm not supposed to tell you this."],
    ["0", "3" , "4" , "5"]
];
var answer = [
    "Even Numbers from 0 to 24",
    "10",
    "135",
    "1",
    "1",
    //6
    "10",
    "Error",
    "infinite",
    "10",
    "6",
    //11
    "3",
    "3",
    "infinite",
    "4",
    "0",
    //16
    "0",
    "2",
    "1",
    "0",
    "5"
];

// Declaring Variables of getting the Dom divs
var questionDiv = document.getElementById('question');
var optionDiv = document.getElementById('options');
var button = document.getElementById('button');
var displayHighScore = document.getElementById('hi-score');
var timeShow = document.getElementById('time');
var timeBox = document.getElementById('timePara');
var img = document.getElementById('image');
//Question number
var questionNumber = -1;
var highscore = [];
var score = 0;
var percentage;
var runTime;
var startBlink;
// Button Function
function start(){
    var code = prompt("Enter Code:");
    if (code == "9922")
    {
        if(questionNumber == -1){
            runTime = setInterval(startTime,1000);
            img.className="hide";
            questionDiv.className="reveal";
            optionDiv.className="reveal";
            clearInterval(startBlink);
            timeBox.style.color="white";
        }
        if(questionNumber >= 0){
            var a = document.getElementsByClassName('option');
            var b = document.getElementsByClassName('option-select');
            for(var i = 0;i<options[0].length;i++){
                if(a[i].checked && b[i].innerHTML == answer[questionNumber]){
                    score++;
                }
            }
        }
        if(questionNumber == questions.length - 1){
            percentage = (score/questions.length*100).toFixed(2);
            questionDiv.innerHTML="<h1>Result</h1><p>Your Percentage</p>";
            optionDiv.innerHTML="<center>"+percentage+"%</center>";
            button.innerHTML = "Start Again";
            button.className = "button-start";
            highscore.push(percentage);
            displayHighScore.innerHTML = Math.max.apply(null,highscore)+"%"; 
            score=0;
            questionNumber=-1;
            clearInterval(runTime);
            clearInterval(startBlink);
            timeBox.style.color="white";
            time = startTime;
        }
        else{
            questionNumber++;
            timeBox.className="reveal";
            questionDiv.innerHTML = "Q."+ (questionNumber+ 1) + " "+ questions[questionNumber];
            optionDiv.innerHTML="";
            for(var i = 0;i<options[0].length;i++){
                optionDiv.innerHTML += "<input type='radio' onclick='selectAllow()' class='option' name='question' /><span class='option-select'>"+options[questionNumber][i]+"</span><br>";
            }
            button.innerHTML = "NEXT";
            button.className = "button-right";
        }
    }
}
function selectAllow(){
    document.getElementById('button').style.pointerEvents="auto";
}
function mustSelect(){
    var b = false;
    var a = document.getElementsByClassName('option');
    if(questionNumber > -1 && questionNumber < 5){
        for(var i = 0; i<4;i++){
            if(a[i].checked){
                b=true;
            }
        }
        if(b){
            document.getElementById('button').style.pointerEvents="auto";
        }
        else{
            document.getElementById('button').style.pointerEvents="none";
        }
    }
}
var time = startTime;
function startTime(){
    timeShow.innerHTML = time;
    if(time == 10){
       startBlink = setInterval(blink,1000);
    }
    if(time == 0){
    //    img.className="reveal";
        percentage = (score/questions.length*100).toFixed(2);
        questionDiv.innerHTML="<h1>Result</h1><p>Your Percentage</p>";
        optionDiv.innerHTML="<center>"+percentage+"%</center>";
        button.innerHTML = "Start Again";
        button.className = "button-start";
        highscore.push(percentage);
        displayHighScore.innerHTML = Math.max.apply(null,highscore)+"%"; 
        score=0;
        questionNumber=-1;
        clearInterval(runTime);
        clearInterval(startBlink);
        timeBox.style.color="white";
        time = startTime;
    //
        // timeBox.className="hide";
        // questionDiv.className="hide";
        // optionDiv.className="hide";
        // button.innerHTML="Start Again";
        // questionNumber = -1;
        // score = 0;
        // button.className="button-start";
        // time = 31;
        // timeBox.style.color="white";
        // clearInterval(runTime);
        // clearInterval(startBlink);
    }
    time--;
}

function blink(){
    timeBox.style.color= timeBox.style.color == "white" ? "red" : "white";
}