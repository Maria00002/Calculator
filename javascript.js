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
            result = divide(firstNum, secondNum);
            result = result.toFixed(5);
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
                if(output === "Error") {
                    break; 
                } else {
                    output += inputDigitStringConvertToDigit(button.id);
                    break;
                }
               

            case "plus":
            case "subtract":
            case "multiply":
            case "percentage":
            case "divide":
                operator = button.id;
                operators.push(operator);
                symbol = symbolArray[operatorArray.indexOf(operator)];
        
                if (output.length > 0) {
                    firstNum = parseInt(output.split(symbolArray[operatorArray.indexOf(operators[0])])[0]);                  
                    output += ` ${symbol} `; 
                    secondNum = parseInt(output.split(symbolArray[operatorArray.indexOf(operators[0])])[1]);
                    console.log(`firstNum: ${firstNum}`); //
                    console.log(`secondNum: ${secondNum}`); //
                    console.log(`operators: ${operators}`); //
                    console.log(""); // 

                    if (!isNaN(secondNum) && operators.length > 1) {
                        
                        output = "";
                        output += operate(firstNum, operators[0], secondNum);
                        operators.splice(0,1);
                        firstNum = parseInt(output);
                        secondNum = "";
                        output += ` ${symbol} `;

                        console.log("It has looped here"); // 
                        console.log(`firstNum: ${firstNum}`); //
                        console.log(`secondNum: ${secondNum}`); //
                        console.log(`operators: ${operators}`); //
                        console.log("");//

                        // console.log(`output: ${output}`); //
                        // console.log(`operators: ${operators}`); //
                        // console.log(""); //
                    }
                } 

                break;
            
            case "equal":    
                operator = button.id;
                operators.push(operator);
                secondNum = parseInt(output.split(symbolArray[operatorArray.indexOf(operators[0])])[1]);

                if ((!secondNum && operators.includes("equal")) || (!firstNum)) {
                    output = "Error";
                    break;
                }

                topDisplay.textContent += output;
                secondNum = parseInt(output.split(symbolArray[operatorArray.indexOf(operators[0])])[1]);
                output = operate(firstNum, operators[0], secondNum);

                console.log("pressed =");
                console.log(`firstNum: ${firstNum}`); //
                console.log(`secondNum: ${secondNum}`); //
                console.log(`operators: ${operators}`); //
                console.log(`output: ${output}`);                        
                break;

            case "clear":
                console.log("Before pressing clear");
                console.log(`firstNum: ${firstNum}`); //
                console.log(`operator: ${operator}`); //
                console.log(`secondNum: ${secondNum}`); //
                console.log(`output: ${output}`); //
                console.log(`operators: ${operators}`); //

                firstNum = 0;
                operator = null;
                secondNum = 0;
                output = 0;
                topDisplay.textContent = "";
                operators.splice(0);
                console.log(`firstNum: ${firstNum}`); //
                console.log(`operator: ${operator}`); //
                console.log(`secondNum: ${secondNum}`); //
                console.log(`output: ${output}`); //
                console.log(`operators: ${operators}`); //
                
                
                break;
  
        }
    bottom.textContent = output;
    // console.log(output);

   

    });
});





























