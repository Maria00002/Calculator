let firstNum;
let operator = "";
let secondNum;
let output = "";
let topDisplayContent = "";
let operators = [];
let symbol;

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
                output += inputDigitStringConvertToDigit(button.id);
                break;

            case "plus":
            case "subtract":
            case "multiply":
            case "percentage":
            case "divide":
                operator = button.id;
                operators.push(operator);

                let symbolArray = ["+","-","*","%","/"];
                let operatorArray = ["plus","subtract","multiply","percentage","divide"];
                symbol = symbolArray[operatorArray.indexOf(operator)];
        

                if (output.length > 0) {
                    firstNum = parseInt(output.split(operators[0])[0]);
                    // console.log(`firstNum: ${firstNum}`); //                     
                    output += ` ${symbol} `; 
                    secondNum = parseInt(output.split(symbolArray[operatorArray.indexOf(operators[0])])[1]);
                    // console.log((operators)); //
                    // console.log(`secondNum: ${secondNum}`); //

                    if (!isNaN(secondNum) && operators.length > 1) {
                        output = "";
                        output += operate(firstNum, operators[0], secondNum);
                        operators.splice(0,1);
                        firstNum = parseInt(output);
                        secondNum = "";
                        output += ` ${symbol} `;

                        // console.log(`output: ${output}`); //
                        // console.log(`firstNum: ${firstNum}`); //
                        // console.log(`operators: ${operators}`); //
                        // console.log(`secondNum: ${secondNum}`); //
                        
                        // console.log("");
                    }
                } 

                break;
            
            case "equal":
                    topDisplay.textContent += output;
                
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





























