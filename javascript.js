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
const tempMemory = {
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

equal.addEventListener('click', (e) => {
    // console.log(e.target.innerText);
    screen.innerText += e.target.innerText;
});

plus.addEventListener('click', (e) => {
    // console.log(e.target.id);
    screen.innerText += e.target.innerText;
});

function getNumScreen() {
    return displayValue = screen.innerText;
};