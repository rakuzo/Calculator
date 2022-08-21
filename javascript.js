function operate() {
    let result;
    const prev = parseFloat(temp.firstNum);
    const curr = parseFloat(temp.secondNum);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (temp.operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case 'x':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;     
    }
    temp['firstNum'] = result;
    temp['operator'] = null;
    temp['secondNum'] = null;
}

function decide(operation) {
    if (displayValue === '') return;
    if (temp['firstNum'] !== null) {
        operate();
    }
    temp['operator'] = operation;
    temp['firstNum'] = displayValue;
    historyValue = temp['firstNum'];
    historyValue += operation;
    displayValue = '';
}

function resetTemp() {
    displayValue = '';
    historyValue = '';
    temp.firstNum = null;
    temp.secondNum = null;
    temp.operator = null;
    temp.result = null
 }

function updateScreen() {
    screen.innerText = displayValue;
    subscreen.innerText = historyValue;
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
};

numbs.forEach((numb) => {
    numb.addEventListener('click', (e) => {
       displayValue += e.target.innerText;
       updateScreen();
    });
});

operts.forEach((opert) => {
    opert.addEventListener('click', (e) => {
        decide(opert.innerText);
        updateScreen();
    });
});

equal.addEventListener('click', () => {
    operate();
    updateScreen();
});

clear.addEventListener('click', () => {
    displayValue = '';
    historyValue = '';
    temp.firstNum = null;
    temp.secondNum = null;
    temp.operator = null;
    updateScreen();
});