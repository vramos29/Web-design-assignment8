console.log("script.js connected");

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
        };
        
        
        let output2 = document.getElementById("question-2");

        if (answer === "A2") {
            output2.textContent = "Question 2 Answer: A";
        } else if (answer === "B2") {
            output2.textContent = "Question 2 Answer: B";
        };


        let output3 = document.getElementById("question-3");

        if (answer === "A3") {
            output3.textContent = "Question 3 Answer: A";
        } else if (answer === "B3") {
            output3.textContent = "Question 3 Answer: B";
        };


        let output4 = document.getElementById("question-4");

        if (answer === "A4") {
            output4.textContent = "Question 4 Answer: A";
        } else if (answer === "B4") {
            output4.textContent = "Question 4 Answer: B";
        };


        
        let answers = button.dataset.answer
        let response = button.dataset.answer;
        userAnswers[answers] = response;
        console.log(userAnswers);

        let resultsCounter = 0
        if ("A1" in userAnswers) {
            resultsCounter += 1
        }; 
        if ("B1" in userAnswers) {
            resultsCounter += 2
        };
        if ("A2" in userAnswers) {
            resultsCounter += 1
        }; 
        if ("B2" in userAnswers) {
            resultsCounter += 2
        };
        if ("A3" in userAnswers) {
            resultsCounter += 1
        }; 
        if ("B3" in userAnswers) {
            resultsCounter += 2
        };
        if ("A4" in userAnswers) {
            resultsCounter += 1
        };
        if ("B4" in userAnswers) {
            resultsCounter += 2
        };

        let finalMessage = ""

        if (resultsCounter <= 4) {
            finalMessage = "You're Glacier National Park!";
        } else if (resultsCounter >= 5 || resultsCounter <=6) {
            finalMessage = "You're Olympic National Park!";
        } else if (resultsCounter >= 7) {
            finalMessage = "You're Badlands National Park!";
        };
        
    });
});


function displayResults() {
    let finalButton = document.getElementById('show-result');
    if (finalButton) {
        finalButton.addEventListener('click', function() {
            function updateDivtext() {
                const div = document.getElementById("result-container");
                div.textContent = finalMessage;
            }
            updateDivtext();
        })
    }
};

displayResults();

// I tried for several days to fix this problem, and the only thing I cannot fix is to get the final result to appear in the text box.
// I will gladly accept any removed points for not completing this part but I was wondering if I could also have an explanation for what I did wrong, thank you!


