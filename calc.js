let x = '';
let y = '';
let operator = ''; 
const display = document.getElementById('display');

function calculate() {

    x = parseInt(x);
    y = parseInt(y);

    if (operator === '+') {
        return x + y;
    }
    else if (operator === '-') {
        return x - y;
    }
    else if (operator === 'x') {
        return x * y;
    }
    else if (operator === '%') {
        return x / y;
    }
    else {
        return "ERROR";
    }
}

// Clears the current x, y and operator values
function clearValues() { 
    x = '';
    y = '';
    operator = '';
    display.textContent = 0;
}

function updateDisplay() {
    let result = calculate();
    display.textContent = result;
    console.log(result);
}

// Function called by calculator buttons, which increases 
// x -> operator -> y
// to desired values before calculate() is called using the values
// of x, y, and operator.
function numInput(num) {

    if (operator === '') {
        x += num;
        display.textContent = x;
    }
    else {
        y += num;
        display.textContent = y;
    }
}

//Function called by calculator buttons represented by mathematical
// operators. Collects desired mathematical operation from user.
function operatorInput(symbol) {
    if (x != '') {
        operator += symbol;
        display.textContent = operator;
    }
}
