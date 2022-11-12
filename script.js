let numberBtns = document.querySelectorAll('.number');
let operatorBtns = document.querySelectorAll('.operator')
let displayed = document.querySelector('.display');
let currentNumber;
let first_number;
let prevOperator;
let counter = 0;
let operatorPressedCount = 0;

// console.log(displayed);

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener('click', function (e) {
        displayNumber(e)
    })
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', function (e) {
        let currentOperator = e.target.innerText;
        operatorPressedCount += 1;
        console.log("Count: ", operatorPressedCount);

        if (currentOperator === '=') {
            let result;
            console.log("First:", first_number, "Prev:", prevOperator)
            if (first_number && (prevOperator != '=')) {
                result = doTheMath(first_number, prevOperator, currentNumber);
                displayed.innerText = result;
            } else {
                displayed.innerText = 0;
                first_number = undefined;
                prevOperator = undefined;
            }


            operatorPressedCount = 0;
            currentNumber = 0;
        }
        else if (operatorPressedCount >= 2) {
            let result = doTheMath(first_number, prevOperator, currentNumber);

            first_number = result;
            displayed.innerText = result;
            currentNumber = 0;
        }
        else {
            first_number = currentNumber;
            currentNumber = 0;
            displayed.innerText = currentNumber;
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
        currentNumber = currentNumber * 10 + numberOnDisplay;
    }
    displayed.innerText = currentNumber;
}

function doTheMath(a, operator, b) {
    console.log("a:", a, "Opeartor:", operator,
        "b:", b)
    let result = 0;

    if (operator === '+')
        return result = a + b;
    else if (operator === '-')
        return result = a - b;
    else if (operator === '*')
        return result = a * b
    else if (operator === '/')
        return result = a / b
}