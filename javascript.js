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
let displayValue = '';

numbs.forEach((numb) => {
    numb.addEventListener('click', (e) => {
        screen.innerText += e.target.innerText;
        return tempNumber();
    });
});

equal.addEventListener('click', (e) => {
    console.log(e.target.innerText);
});

// let tempNumber = function() {
//     return screen.innerText;
// };

function tempNumber() {
    return displayValue = screen.innerText;
};