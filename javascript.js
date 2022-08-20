function add(a, b) {
    temp['result'] = a + b;
    screen.innerText = temp.result;
}

function subtract(a, b) {
    temp['result'] = a - b;
    screen.innerText = temp.result;
}

function multiply(a, b) {
    temp['result'] = a * b;
    screen.innerText = temp.result;
}

function divide(a, b) {
    temp['result'] = a / b;
    screen.innerText = temp.result;
}

function resetTemp() {
    displayValue = '';
    historyValue = '';
    temp.firstNum = null;
    temp.secondNum = null;
    temp.operator = null;
    temp.result = null
 }

function operate(a, b, math) {
    if (math === '+') return add(a, b);
    if (math === '-') return subtract(a, b);
    if (math === 'x') return multiply(a, b);
    if (math === '/') return divide(a, b);
}

function decide(operation) {
    if (displayValue === '') return;
    temp['operator'] = operation;
    temp['firstNum'] = displayValue;
    historyValue = temp['firstNum'];
    displayValue = '';
}

const screen = document.querySelector('#screen');
const subscreen = document.querySelector('#subscreen');
const numbs = document.querySelectorAll('#num');
const operts = document.querySelectorAll('#operate');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
let displayValue = '';
let historyValue = '';
const temp = {
    firstNum : null,
    secondNum : null,
    operator : null,
    result : null
};

function updateScreen() {
    screen.innerText = displayValue;
    subscreen.innerText = historyValue;
}

numbs.forEach((numb) => {
    numb.addEventListener('click', (e) => {
       displayValue += e.target.innerText;
       updateScreen();
    });
});

operts.forEach((opert) => {
    opert.addEventListener('click', (e) => {
        decide(opert.innerText);
        historyValue += e.target.innerText;
        updateScreen();
    });
});

equal.addEventListener('click', () => {

});

clear.addEventListener('click', () => {

});