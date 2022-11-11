let numberBtns = document.querySelectorAll('.number');
let operatorBtns = document.querySelectorAll('.operator')
let displayed = document.querySelector('.display');
let numberOnDisplay;
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

        }
        else if (operatorPressedCount >= 2) {
            let obj = doTheMath(first_number, prevOperator, numberOnDisplay);
            
            if (obj.Done === true) {
                result = obj.Result;
                first_number = result;
                displayed.innerText = result;
            } else {
                alert("Division by 0 is impossible")
                operatorPressedCount = 0;
            }
            numberOnDisplay = 0;
        }
        else {
            first_number = numberOnDisplay;
            numberOnDisplay = 0;
            displayed.innerText = numberOnDisplay;
        }
        prevOperator = currentOperator;

    })
})


function displayNumber(e) {
    let currentNumber = parseInt(e.target.innerText);

    if (counter === 0) {
        numberOnDisplay = currentNumber;
        counter++;
    }
    else {
        numberOnDisplay = numberOnDisplay * 10 + currentNumber;
    }
    displayed.innerText = numberOnDisplay;
}

function doTheMath(a, operator, b) {
    console.log("a:", a, "Opeartor:", operator,
        "b:", b)
    let result = 0;
    let successed = true;
    if (operator === '+')
        result = a + b;
    else if (operator === '-')
        result = a - b;
    else if (operator === '*')
        result = a * b
    else if (operator === '/'){
        if (b === 0){
            successed = false;
        } else
            result = a / b
    }
    return { "Result": result, "Done": successed }
}