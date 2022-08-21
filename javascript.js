function add(a, b) {
    temp['result'] = a + b;
    screen.innerText = temp.result;
    subscreen.innerText = `${temp.result}`;
    console.log(temp);
    return resetTemp();
}

function subtract(a, b) {
    temp['result'] = a - b;
    screen.innerText = temp.result;
    subscreen.innerText = `${temp.result}`;
    console.log(temp);
    return resetTemp();
}

function multiply(a, b) {
    temp['result'] = a * b;
    screen.innerText = temp.result;
    subscreen.innerText = `${temp.result}`;
    console.log(temp);
    return resetTemp();
}

function divide(a, b) {
    temp['result'] = a / b;
    screen.innerText = temp.result;
    subscreen.innerText = `${temp.result}`;
    console.log(temp);
    return resetTemp();
}

function operate(a, b, math) {
    if (math === '+') return add(a, b);
    if (math === '-') return subtract(a, b);
    if (math === 'x') return multiply(a, b);
    if (math === '/') return divide(a, b);
}

const screen = document.querySelector('#screen');
const subscreen = document.querySelector('#subscreen');
const numbs = document.querySelectorAll('#num');
const operts = document.querySelectorAll('#operate');
const clear = document.querySelector('#clear');
const backSpace = document.querySelector('#backspace');
const equal = document.querySelector('#equal');
let displayValue = '';
const temp = {
    firstNum : null,
    secondNum : null,
    operator : null,
    result : null
};

numbs.forEach((numb) => {
    numb.addEventListener('click', (e) => {
        if (numb.innerText === '.' && screen.innerText.includes('.')) return;
        if (temp.firstNum !== null &&
            temp.firstNum === temp.result &&
            temp.secondNum === null) {
            screen.innerText = '';
            //fill first number to break the condition
            temp['secondNum'] = parseFloat(screen.innerText); 
        };
        screen.innerText += e.target.innerText;
        subscreen.innerText += e.target.innerText;
    });
});

operts.forEach((opert) => {
    opert.addEventListener('click', (e) =>{
    getNumber(); //get first number for the first math operation
    console.log(temp);
    screen.innerText = '';
    decide();
    temp['operator'] = e.target.innerText;
    getNumber(); //get second number
    subscreen.innerText += e.target.innerText;
    });
});

equal.addEventListener('click', () => {
    getNumber();
    decide();
});

clear.addEventListener('click', () => {
    resetTemp();
    temp.result = null;
    screen.innerText = '';
    subscreen.innerHTML = '';
});

backSpace.addEventListener('click', () => {
    displayValue = screen.innerText;
    const deleteOne = displayValue.slice(0, -1);
    screen.innerText = deleteOne;
    subscreen.innerText = deleteOne;
});

function decide() {
    if (isNaN(temp.firstNum) || isNaN(temp.secondNum)) return;
    if (temp.firstNum !== null && 
        temp.secondNum !== null && 
        temp.operator !== null) 
        {
        operate (temp.firstNum, temp.secondNum, temp.operator);
    }
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