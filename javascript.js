let firstNum;
let operator = "";
let secondNum;

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


console.log(operate(13, "+", 16));
console.log(operate(13, "-", 16));
console.log(operate(13, "*", 16));
console.log(operate(13, "/", 16));


// console.log(add(13,16)); //29
// console.log(subtract(13,16)); //-3
// console.log(multiply(13,16)); //208
// console.log(divide(13,16)); //0.8125

// console.log();



