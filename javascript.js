function add(a, b) {
    screen.innerText = a + b;
    result = a + b;
    console.log(result);
    resetTemp();
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

function operate(a, math, b) {
    if (math === 'add') return add(a, b);
    if (math === 'subtract') return subtract(a, b);
    if (math === 'multiply') return multiply(a, b);
    if (math === 'divide') return divide(a, b);
}

const screen = document.querySelector('#screen');
const numbs = document.querySelectorAll('#num');
const plus = document.querySelector('#add');
const equal = document.querySelector('#equal');
let displayValue = '';
const temp = {
    firstNum: null,
    operator: null,
    secondNum: null
};
let result = null;

numbs.forEach((numb) => {
    numb.addEventListener('click', (e) => {
        screen.innerText += e.target.innerText;
        return getNumScreen();
    });
});

equal.addEventListener('click', () => {
    if (result !== null && temp.operator === 'add') {
        console.log('first equal statement works');
        contMath();
    } else {
        console.log('second equal statement works');
        startMath(e.target.id);
    }
});

plus.addEventListener('click', (e) => {
    console.log(displayValue);
    if (result !== null && temp.operator === 'add') {
        console.log('first statement works');
        contMath();
    } else {
        console.log('second statement works');
        startMath(e.target.id);
    }
    screen.innerText = '';
});

function getNumScreen() {
    return displayValue = screen.innerText;
};

function contMath() {
    temp['secondNum'] = parseInt(displayValue);
    operate(result, temp.operator, temp.secondNum);
}

function startMath(opr) {
    getNumScreen();
    temp['firstNum'] = parseInt(displayValue);
    temp['operator'] = opr;
    operate(temp.firstNum, temp.operator, temp.secondNum);
}

function resetTemp() {
    temp.firstNum = null;
    // temp.operator = undefined;
    temp.secondNum = null;
}