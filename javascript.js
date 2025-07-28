let firstNum;
let operator = "";
let secondNum;
let output = "";
let topDisplayContent = "";

function operate(firstNum, operator, secondNum) {
    let result;
    switch(operator) {
        case "plus":
            result = add(firstNum, secondNum);
            break;
        case "subtract":
            result = subtract(firstNum, secondNum);
            break;
        case "multiply":
            result = multiply(firstNum, secondNum);
            break;
        case "divide":
            result = divide(firstNum, secondNum);
            break;
        case "percentage":
            result = divide(firstNum, 100);
            break;
    }
    return result;
}

function add(a, b) {return a + b;}
function subtract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}
function divide(a, b) {return a / b;}

const buttons = document.querySelectorAll("button");
const bottom = document.querySelector("#bottom");
const topDisplay = document.querySelector("#top");
console.log(buttons); //

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
                if (output.length > 0 && operator.length == 0) {
                    firstNum = parseInt(output);
                    output += ' + ';
                    // console.log(firstNum);
                    operator = "plus";
                } else if (operator.length > 0) {
                    if (output.split("+").length == 2) {
                        secondNum = parseInt(output.split("+")[1]);
                        output = "";
                        output += operate(firstNum, operator, secondNum);
                        firstNum = parseInt(output);
                        secondNum = 0;
                        output += " + ";
                    }
                }

                break;
            // case "subtract":
            //     if (output.length > 0) {
            //         topDisplay.textContent = output + ' - ';
            //         firstNum = parseInt(output);
            //         output = "";
            //         operator = "subtract";
            //     } 
            //     break;
            // case "multiply":
            //     if (output.length > 0) {
            //         topDisplay.textContent = output + ' * ';
            //         firstNum = parseInt(output);
            //         output = "";
            //         operator = "multiply";
            //     } 
            //     break;
            // case "percentage":
            //     if (output.length > 0) {
            //         topDisplay.textContent = output + ' % ';
            //         firstNum = parseInt(output);
            //         output = "";
            //         operator = "percentage";
            //     } 
            //     break;
            // case "divide":
            //     if (output.length > 0) {
            //         topDisplay.textContent = output + ' / ';
            //         firstNum = parseInt(output);
            //         output = "";
            //         operator = "divide";
            //     } 
            //     break;
            case "equal":
                    topDisplay.textContent += output;
                    secondNum = parseInt(output.split("+")[1]); //
                    console.log(secondNum);
                    
                    // console.log(firstNum);
                    // console.log(operator);
                    // console.log(secondNum);
                
                    switch(operator) {
                        case "plus":
                        case "subtract":
                        case "multiply":
                        case "percentage":
                        case "divide":
                        output = operate(firstNum, operator, secondNum);
                            break;
                    }
                    
                break;
  
        }
    bottom.textContent = output;
   

    });
});





























