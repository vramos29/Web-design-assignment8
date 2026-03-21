console.log("script.js connected!");


let userAnswers = {}

let buttons = document.querySelectorAll("#questions button");

buttons.forEach(function(button){
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        //let answer = button.getAttribute("data-answer");
        
        let answer = button.dataset.answer
        let response = button.dataset.answer;
        userAnswers[answer] = response;
        console.log(userAnswers);
        
    })
})

/*
if ("A" in userAnswers) {
    let finalAnswer = "You are Glacier National Park!";
    document.getElementById("result-text").innerHTML = finalAnswer;
} else if ("B" in userAnswers >= 2) {
    let finalAnswer = "You are Badlands National Park!";
    document.getElementById("result-text").innerHTML = finalAnswer;
} else if ("C" in userAnswers >= 2) {
    let finalAnswer = "You are Olympic National Park!";
    document.getElementById("result-text").innerHTML = finalAnswer;
} else if ("D" in userAnswers >= 2) {
    let finalAnswer = "You are Grand Teton National Park!";
    document.getElementById("result-text").innerHTML = finalAnswer;
}

*/
