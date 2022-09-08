let x = '';
let y = '';
let operator = ''; 

function calculate() {

    x = parseInt(x);
    y = parseInt(y);

    if (operator === '+') {
        return numX + numY;
    }
    else if (operator === '-') {
        return numX - numY;
    }
    else if (operator === 'x') {
        return numX * numY;
    }
    else if (operator === '%') {
        return numX % numY;
    }
    else {
        return "ERROR";
    }
}

// Clears the current x, y and operator values
function clear() { 
    x = '';
    y = '';
    operator = '';
}

// Function called by calculator buttons, which increases 
// x -> operator -> y
// to desired values before calculate() is called using the values
// of x, y, and operator.
function numInput(num) {
    if (operator === '') {
        x += num;
    }
    else {
        y += num;
    }
}

//Function called by calculator buttons represented by mathematical
// operators. Collects desired mathematical operation from user.
function operatorInput(symbol) {
    if (x != '') {
        operator += symbol;
    }
}
