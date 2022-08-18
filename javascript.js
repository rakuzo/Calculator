function add(a, b) {
    temp['result'] = a + b;
    screen.innerText = temp.result;
    console.log(temp);
    return resetTemp();
}

function subtract(a, b) {
    temp['result'] = a - b;
    screen.innerText = temp.result;
    console.log(temp);
    return resetTemp();
}

function multiply(a, b) {
    temp['result'] = a * b;
    screen.innerText = temp.result;
    console.log(temp);
    return resetTemp();
}

function divide(a, b) {
    temp['result'] = a / b;
    screen.innerText = temp.result;
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
        screen.innerText += e.target.innerText;
        subscreen.innerText += e.target.innerText;
    });
});

equal.addEventListener('click', () => {
    getNumber();
    decide();
});

operts.forEach((opert) => {
    opert.addEventListener('click', (e) =>{
    getNumber();
    console.log(temp);
    screen.innerText = '';
    decide();
    temp['operator'] = e.target.innerText;
    subscreen.innerText += e.target.innerText;
    });
});

clear.addEventListener('click', () => {
    resetTemp();
    temp.result = null;
    screen.innerText = '';
    subscreen.innerHTML = '';
});

function decide() {
    if (temp.firstNum !== null && 
        temp.secondNum !== null && 
        temp.operator !== null) 
        {
        console.log('first decide condition works');
        operate (temp.firstNum, temp.secondNum, temp.operator);
    } else if (temp.firstNum === null && 
        temp.secondNum === null && 
        temp.operator !== null) 
        {
        console.log('second decide condition works');
        operate (temp.result, temp.secondNum, temp.operator);
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