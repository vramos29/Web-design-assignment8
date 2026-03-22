console.log("script.js connected!");


let buttons = document.querySelectorAll("#questions button");

let userAnswers = {}
buttons.forEach(function(button){
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        let answer = button.getAttribute("data-answer");
        let output = document.getElementById("question-1");

        if (answer === "A1") {
            output.textContent = "Question 1 Answer: A";
        } else if (answer === "B1") {
            output.textContent = "Question 1 Answer: B";
        } else if (answer === "C1") {
            output.textContent = "Question 1 Answer: C";
        } else if (answer === "D1") {
            output.textContent = "Question 1 Answer: D";
        };
        
        
        let output2 = document.getElementById("question-2");

        if (answer === "A2") {
            output2.textContent = "Question 2 Answer: A";
        } else if (answer === "B2") {
            output2.textContent = "Question 2 Answer: B";
        } else if (answer === "C2") {
            output2.textContent = "Question 2 Answer: C";
        } else if (answer === "D2") {
            output2.textContent = "Question 2 Answer: D";
        };


        let output3 = document.getElementById("question-3");

        if (answer === "A3") {
            output3.textContent = "Question 3 Answer: A";
        } else if (answer === "B3") {
            output3.textContent = "Question 3 Answer: B";
        } else if (answer === "C3") {
            output3.textContent = "Question 3 Answer: C";
        } else if (answer === "D3") {
            output3.textContent = "Question 3 Answer: D";
        };


        let output4 = document.getElementById("question-4");

        if (answer === "A4") {
            output4.textContent = "Question 4 Answer: A";
        } else if (answer === "B4") {
            output4.textContent = "Question 4 Answer: B";
        } else if (answer === "C4") {
            output4.textContent = "Question 4 Answer: C";
        } else if (answer === "D4") {
            output4.textContent = "Question 4 Answer: D";
        };


        
        let answers = button.dataset.answer
        let response = button.dataset.answer;
        userAnswers[answers] = response;
        console.log(userAnswers);
        
    });
});

for (let key in userAnswers) {
    if (typeof userAnswers[key] === "string") {
        let newString = "";
        for (let char of userAnswers[key]) {
            if (char < "0" || char > "9") {
                newString += char;
            } 
        }
        userAnswers[key] = newString
    }
}

console.log(userAnswers)

