let firstNum;
let operator = "";
let secondNum;
let output = "";
let operators = [];
let symbol;
let symbolArray = ["+","-","*","%","/","="];
let operatorArray = ["plus","subtract","multiply","percentage","divide","equal"];

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
            if (secondNum == 0) {
                result = "Error";
            } else {
                result = divide(firstNum, secondNum);
                result = result.toFixed(5);
            }
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

function inputDigitStringConvertToDigit(digitString) {
    let arrayDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    let arrayDigitString = ["zero", "one","two" , "three","four" ,"five" ,"six" , "seven" ,"eight" , "nine"];    
    return arrayDigit[arrayDigitString.indexOf(digitString)];
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.id) {
            case "zero":
            case "one":
            case "two":
            case "three":
            case "four":
            case "five":
            case "six":
            case "seven":
            case "eight":
            case "nine":
                if(output === "Error") {
                    break; 
                } 
                // else if (operators[0] === "equal" && output === "0"){
                //     output = "";
                //     output += inputDigitStringConvertToDigit(button.id);
                //     operators.splice(0,1);
                //     break;
                // } 
                else if (operators[operators.length-1] === "equal"){ // need to fix this logic
                    output = "";
                    topDisplay.textContent = "";
                    output += inputDigitStringConvertToDigit(button.id);
                    operators.splice(0,operators.length);
                    break;
                }
                else {
                    output += inputDigitStringConvertToDigit(button.id);
                    break;
                }
            case "dot":
                if (output.includes(".") && operators.length == 0) {
                    break;
                } 
                else if((operators[operators.length-1] === "equal") && output.includes(".")) {
                    break;
                } else if (firstNum) {
                    if (!output.split(symbolArray[operatorArray.indexOf(operators[operators.length-1])])[1].includes(".")) {
                        output += ".";
                    }
                    break;
                }
                else {
                    output += ".";
                    break;
                }

            case "delete":
                let newDisplay;
                if (output[output.length-1] == " ") {
                    newDisplay = output.slice(0,-3);
                    operators.splice(-1,1);
                } else {
                    newDisplay = output.slice(0,-1);
                }
                output = "";
                output += newDisplay; 
                break;    
              
            case "plus":
            case "subtract":
            case "multiply":
            case "percentage":
            case "divide":
                operator = button.id;
                operators.push(operator);
                symbol = symbolArray[operatorArray.indexOf(operator)];
        
                if (output.length > 0) {
                    firstNum = parseFloat(output.split(symbolArray[operatorArray.indexOf(operators[0])])[0]);                  
                    output += ` ${symbol} `; 
                    secondNum = parseFloat(output.split(symbolArray[operatorArray.indexOf(operators[0])])[1]);

                    if (operators[0] == "equal") {
                        operators.splice(0,1);
                    }

                    if (!isNaN(secondNum) && operators.length > 1) {
                        output = "";
                        output += operate(firstNum, operators[0], secondNum);
                        operators.splice(0,1);
                        firstNum = parseFloat(output);
                        secondNum = "";
                        output += ` ${symbol} `;
                    }
                } 

                break;
            
            case "equal":    
                operator = button.id;
                operators.push(operator);
                secondNum = parseFloat(output.split(symbolArray[operatorArray.indexOf(operators[0])])[1]);

                if (operators[0] === "equal" && !secondNum && !firstNum) {
                    operators.splice(0,1);
                    secondNum = parseFloat(output.split(symbolArray[operatorArray.indexOf(operators[0])])[1]);
                } else if ((!secondNum && operators[1]=="equal") || (!firstNum)) {
                    output = "Error";
                    break;
                } 

                topDisplay.textContent = "";
                topDisplay.textContent += output;
                output = operate(firstNum, operators[0], secondNum).toString();
                operators.splice(0,1);                     
                break;

            case "clear":
                firstNum = 0;
                secondNum = 0;
                output = "";
                topDisplay.textContent = "";
                operators.splice(0,operators.length-1);             
                break;
  
        }
    bottom.textContent = output;   
    });
});





























