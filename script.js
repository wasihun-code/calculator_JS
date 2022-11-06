let numberBtns = document.querySelectorAll('.number');
let operatorBtns = document.querySelectorAll('.operator')
let displayed = document.querySelector('.display');
// console.log(displayed);

numberBtns.forEach(number => {
    number.addEventListener('click', function(e) {
        lognumber(e)
    })
});

operatorBtns.forEach(operator => {
    operator.addEventListener('click', function(e) {
        logOperator(e);
    })
})
function lognumber(e) {
    let currentNumber = e.target.innerText;
    displayed.innerText = currentNumber;
    console.log(displayed)
}

function logOperator(e) {
    let currentOperator = e.target.innerText;
    console.log(currentOperator)
}