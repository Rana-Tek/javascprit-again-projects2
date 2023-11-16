let input = document.getElementById('input')
let number = document.querySelectorAll('.numbers div')
let operator = document.querySelectorAll('.numbers div')
let result = document.getElementById('result')
let clear = document.getElementById('clear')
let resultDisplayed = false;

for (let i = 0; i < number.length; i++ ) {
    number[i].addEventListener("click", function(e){
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length -1];

        if(resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if(resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "/") {
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;


        } else{
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }

    });
}

result.addEventListener("click", function(){
    let inputString = input.innerHTML;
    let numbers = inputString.split(/\+|\-|\×|\÷/g);
    
})