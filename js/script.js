console.log("script.js connected!");


let aCounter = 0;
let bCounter = 0;
let cCounter = 0;
let dCounter = 0;

let buttons = document.querySelectorAll("#questions button");

buttons.forEach(function(button){
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        let answer = button.getAttribute("data-answer");
        
        if (answer === "A") {
            aCounter += 1;
        } else if (answer === "B") {
            bCounter += 1;
        } else if (answer === "C") {
            cCounter += 1;
        } else if (answer === "D") {
            dCounter += 1;
        }
        
    })
})