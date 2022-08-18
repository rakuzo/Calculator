function add(a, b) {
    temp['result'] = a + b;
    screen.innerText = temp.result;
    return resetTemp();
}

function subtract(a, b) {
    temp['result'] = a - b;
    screen.innerText = temp.result;
    return resetTemp();
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, math) {
    if (math === 'add') return add(a, b);
    if (math === 'subtract') return subtract(a, b);
    if (math === 'multiply') return multiply(a, b);
    if (math === 'divide') return divide(a, b);
}

const screen = document.querySelector('#screen');
const numbs = document.querySelectorAll('#num');
const equal = document.querySelector('#equal');
const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
let displayValue = '';
const temp = {
    firstNum : null,
    secondNum : null,
    operator : null,
    result : null
};

numbs.forEach((numb) => {
    numb.addEventListener('click', (e) => {
        screen.innerText += e.target.innerText;
    });
});

equal.addEventListener('click', () => {
    getNumber();
    decide();
});

plus.addEventListener('click', (e) =>{
    getNumber();
    screen.innerText = '';
    decide();
    temp['operator'] = e.target.id;
});

minus.addEventListener('click', (e) => {
    getNumber();
    screen.innerText = '';
    decide();
    temp['operator'] = e.target.id;
});

function decide() {
    if (temp.firstNum !== null && 
        temp.secondNum !== null && 
        temp.operator !== null) 
        {operate (temp.firstNum, temp.secondNum, temp.operator);}
}

function getNumber() {
    if (temp.firstNum !== null && temp.operator !== null) {
        temp['secondNum'] = parseFloat(screen.innerText);
    } else {
    temp['firstNum'] = parseFloat(screen.innerText);
    }
}

function resetTemp() {
    temp.firstNum = null;
    temp.secondNum = null;
    temp.operator = null;
}