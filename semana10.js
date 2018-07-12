var operation = {
    '+' : function (n1,n2) {
        return n1+n2;
    },
    '-': function (n1, n2) {
        return n1 - n2;
    },
    '*': function (n1, n2) {
        return n1 * n2;
    },
    '/': function (n1, n2) {
        return n1 / n2;
    },
    '%': function (n1, n2) {
        return n1 % n2;
    }
}

function isOperatorValid (operator) {
    return operation[operator] !== undefined;
}

function calculator (operator) {
    if(isOperatorValid(operator)) {
        return function(n1,n2) {
            if (typeof n1 === 'number' || typeof n2 === 'number') {
                return operation[operator](n1,n2);
            }
            return false;
        };
    }
    return false;
}

function showOperationMessage(operator, n1, n2) {
    return 'A operação '+n1+' '+operator+' '+n2+' =';
}

function showErrorMessage(operator) {
    return 'Operação '+operator+' não permitida!';
}

var number1 = 0;
var number2 = 0;
var operationSignal;

operationSignal = '+';
var sum = calculator(operationSignal);

if (sum) {
    number1 = 10;
    number2 = 30;
    console.log(showOperationMessage(operationSignal, number1, number2),sum(number1,number2));
} else {
    console.log(showErrorMessage(operationSignal));
}

operationSignal = '-';
var subtraction = calculator(operationSignal);

if (subtraction) {
    number1 = 40;
    number2 = 30;
    console.log(showOperationMessage(operationSignal, number1, number2), subtraction(number1, number2));
} else {
    console.log(showErrorMessage(operationSignal));
}

operationSignal = '*';
var mult = calculator(operationSignal);

if (mult) {
    number1 = 40;
    number2 = 30;
    console.log(showOperationMessage(operationSignal, number1, number2), mult(number1, number2));
} else {
    console.log(showErrorMessage(operationSignal));
}

operationSignal = '$';
var error = calculator(operationSignal);

if (error) {
    number1 = 40;
    number2 = 30;
    console.log(showOperationMessage(operationSignal, number1, number2), error(number1, number2));
} else {
    console.log(showErrorMessage(operationSignal));
}