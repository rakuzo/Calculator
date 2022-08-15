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

function operate(a, b, math) {
    if (math === 'add') return add(a, b);
    if (math === 'subtract') return subtract(a, b);
    if (math === 'multiply') return multiply(a, b);
    if (math === 'divide') return divide(a, b);
}

const screen = document.querySelector('#screen');
const numbs = document.querySelectorAll('#num');
const equal = document.querySelector('#equal');

numbs.forEach((numb) => {
    numb.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
});

equal.addEventListener('click', (e) => {
    console.log(e.target.innerText);
});