function add(a, b) {
    temp['result'] = Math.round(((a + b) + Number.EPSILON) * 100) / 100;
    screen.innerText = temp.result;
    subscreen.innerText = `${temp.result}`;
    return resetTemp();
}

function subtract(a, b) {
    temp['result'] = Math.round(((a - b) + Number.EPSILON) * 100) / 100;
    screen.innerText = temp.result;
    subscreen.innerText = `${temp.result}`;
    return resetTemp();
}

function multiply(a, b) {
    temp['result'] = Math.round(((a * b) + Number.EPSILON) * 100) / 100;
    screen.innerText = temp.result;
    subscreen.innerText = `${temp.result}`;
    return resetTemp();
}

function divide(a, b) {
    temp['result'] = Math.round(((a / b) + Number.EPSILON) * 100) / 100;
    screen.innerText = temp.result;
    subscreen.innerText = `${temp.result}`;
    return resetTemp();
}

function operate(a, b, math) {
    if (b === 0 && math === '/') {
        subscreen.innerText = 'Press Any Number or [AC] to Reset Calculator'
        return screen.innerText = 'Error';
    }
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
let historyValue = '';
const temp = {
    firstNum : null,
    secondNum : null,
    operator : null,
    result : null
};

numbs.forEach((numb) => {
    numb.addEventListener('click', (e) => {
        initializeScreen();
        if (numb.innerText === '.' && screen.innerText.includes('.')) return;
        screen.innerText += e.target.innerText;
        subscreen.innerText += e.target.innerText;
    });
});

operts.forEach((opert) => {
    opert.addEventListener('click', (e) =>{
    getNumber(); //get first number for the first math operation
    screen.innerText = '';
    decide();
    temp['operator'] = e.target.innerText;
    getNumber(); //get second number
    if (isNaN(temp.firstNum)) {
        return //stop printing operator if there's no number
    } else {
        subscreen.innerText += e.target.innerText;
    }
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
    subscreen.innerText = '';
});

backSpace.addEventListener('click', () => {
    displayValue = screen.innerText;
    const deleteOne = displayValue.slice(0, -1);
    screen.innerText = deleteOne;
    historyValue = subscreen.innerText;
    const deleteSubs = historyValue.slice(0, -1);
    subscreen.innerText = deleteSubs;
});

function initializeScreen() {
    if (screen.innerText.length >= 12) return;
        if (screen.innerText === 'Error') {
            screen.innerText = '';
            subscreen.innerText = '';
            resetTemp();
        };
        if (temp.firstNum !== null &&
            temp.firstNum === temp.result &&
            temp.secondNum === null) {
            screen.innerText = '';
            //fill first number to break the condition
            temp['secondNum'] = parseFloat(screen.innerText); 
        };
}

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

window.addEventListener('keydown', getKeyboard);

function getKeyboard(e) {
    if (e.key >= 0 && e.key <= 9) {
        console.log(e.key);
        initializeScreen();
        if (e.key.innerText === '.' && screen.innerText.includes('.')) return;
        screen.innerText += e.key;
        subscreen.innerText += e.key;
    } else {
        return
    }
}