let firstNum;
let operator = "";
let secondNum;
let output = "";

function operate(firstNum, operator, secondNum) {
    let result;
    switch(operator) {
        case "+":
            result = add(firstNum, secondNum);
            break;
        case "-":
            result = subtract(firstNum, secondNum);
            break;
        case "*":
            result = multiply(firstNum, secondNum);
            break;
        case "/":
            result = divide(firstNum, secondNum);
            break;

    }

    return result;

}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


const buttons = document.querySelectorAll("button");
const bottom = document.querySelector("#bottom");
const topDisplay = document.querySelector("#top");

console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.id) {
            case "zero":
                output += "0";
                break;
            case "one":
                output += "1";
                break;
            case "two":
                output += "2";
                break;
            case "three":
                output += "3";
                break;
            case "four":
                output += "4";
                break;
            case "five":
                output += "5";
                break;
            case "six":
                output += "6";
                break;
            case "seven":
                output += "7";
                break;
            case "eight":
                output += "8";
                break;
            case "nine":
                output += "9";
                break;
            case "plus":
                if (output.length > 0) {
                    topDisplay.textContent = output;
                }
                break;
        }
    bottom.textContent = output;   
    });
});





























