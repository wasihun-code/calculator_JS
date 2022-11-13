let numberBtns = document.querySelectorAll('.number');
let operatorBtns = document.querySelectorAll('.operator')
let displayed = document.querySelector('.display');
let allBtns = document.querySelectorAll('.btn');
let operatorDisplayed = document.querySelector(".operatorDisp");

let result;
let currentNumber;
let first_number;

let counter = 0;
let prevOperator;
let numberOverflow = false;
let operatorPressedCount = 0;


allBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        btn.classList.add("blur");
        setTimeout(function () {
            btn.classList.remove("blur");
        }, 100);
    })
})

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener('click', function (e) {
        displayNumber(e)
    })
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', function (e) {
        let currentOperator = e.target.innerText;
        operatorPressedCount += 1;


        if (currentOperator == "CLEAR") {
            resetEverything();
            return;
        }
        if (currentOperator === "DELETE") {
            if (currentNumber >= 10)
                currentNumber = Math.floor(currentNumber/10);
            else 
                resetEverything();
            displayed.innerText = currentNumber;
            return;
        }
        if (currentOperator === 'N') {
            currentNumber *= -1;
            displayed.innerText = currentNumber;
            operatorPressedCount -= 1;
            return;
        }
        if (currentOperator === '=') {
            if (prevOperator === '/' && currentNumber === 0) {
                alert("Division By Zero");
                resetEverything();
                return;
            }

            if (first_number && prevOperator && (prevOperator != '=')) {
                result = doTheMath(first_number, prevOperator, currentNumber);
                displayed.innerText = result;
            } else {
                displayed.innerText = 0;
                first_number = undefined;
                prevOperator = undefined;
            }
            operatorDisplayed.innerText = ' ';
            return;
        }
        else if (operatorPressedCount >= 2) {

            if (prevOperator === '/' && currentNumber === 0) {
                alert("Division By Zero");
                resetEverything();
                return;
            }
            result = doTheMath(first_number, prevOperator, currentNumber);

            first_number = result;
            displayed.innerText = result;
            if (currentOperator != "DELETE")
                operatorDisplayed.innerText = first_number + ' ' + currentOperator + ' ';
            currentNumber = 0;
        }
        else {
            if (currentOperator != "DELETE")
                operatorDisplayed.innerText = currentNumber + ' ' + currentOperator + ' ';

            first_number = currentNumber;
            currentNumber = 0;
            displayed.innerText = first_number;
        }
        prevOperator = currentOperator;
    })
})

function displayNumber(e) {
    let numberOnDisplay = parseInt(e.target.innerText);

    if (counter === 0) {
        currentNumber = numberOnDisplay;
        counter++;
    }
    else {
        if (!numberOverflow)
            currentNumber = currentNumber * 10 + numberOnDisplay;
    }
    let size = currentNumber.toString().length;
    if (size > 15)
        numberOverflow = true
    displayed.innerText = currentNumber;
}

function resetEverything() {
    counter = 0;
    currentNumber = 0;
    numberOverflow = false;
    displayed.innerText = 0;
    operatorPressedCount = 0;
    first_number = undefined;
    prevOperator = undefined;
    operatorDisplayed.innerText = ' ';
}

function doTheMath(a, operator, b) {

    if (operator === '+')
        return result = a + b;
    else if (operator === '-')
        return result = a - b;
    else if (operator === '*')
        return result = a * b
    else if (operator === '/')
        return result = a / b
}