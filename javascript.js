function add(a, b) {
    screen.innerText = a + b;
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
    firstNum: 0,
    operator: '',
    secondNum: 0
};

numbs.forEach((numb) => {
    numb.addEventListener('click', (e) => {
        screen.innerText += e.target.innerText;
        return getNumScreen();
    });
});

equal.addEventListener('click', () => {
    temp['secondNum'] = parseInt(displayValue);
    return operate(temp.firstNum, temp.operator, temp.secondNum);
});

plus.addEventListener('click', (e) => {
    temp['firstNum'] = parseInt(displayValue);
    temp['operator'] = e.target.id;
    screen.innerText = '';
});

function getNumScreen() {
    return displayValue = screen.innerText;
};