let numberBtns = document.querySelectorAll('.number');
let operatorBtns = document.querySelectorAll('.operator')
let displayed = document.querySelector('.display');
let number;
let counter = 0;
let operator;
// console.log(displayed);

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener('click', function(e) {
        lognumber(e)
    })
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', function(e) {
        logOperator(e);
    })
})
function lognumber(e) {
    let currentNumber = parseInt(e.target.innerText);

    if (counter === 0){
        number = currentNumber;
        counter++;
    }
    else {
        number = number * 10 + currentNumber;
    }
    displayed.innerText = number;
}

function logOperator(e) {
    let currentOperator = e.target.innerText;
    console.log(currentOperator)
}