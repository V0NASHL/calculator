let firstNum;
let secondNum;
let step = 0;
let operation;
let result = 0;

let numArray = []
let secondNumArray = []

let display = document.getElementById('display');

function getNum(num) {
    if(step === 0 || step === 1){
        numArray.push(num)
        step = 1
        firstNum = Number(numArray.join(''))
        display.value = firstNum
    } else if (step === 2){
        secondNumArray.push(num)
        secondNum = Number(secondNumArray.join(''))
        display.value = secondNum
    }
}

function getOp(op) {
    step = 2
    operation = op
}

function clrDisplay() {
    display.value = 0
    firstNum = null
    secondNum = null
    step = 0
    operation = null
    result = 0
    numArray = []
    secondNumArray = []
}

function calcEquals() {
    if (operation === '+') {
        result = firstNum + secondNum
        display.value = result
    } else if (operation === '-'){
        result = firstNum - secondNum
        display.value = result
    } else if (operation === '*'){
        result = firstNum * secondNum
        display.value = result
    } else if (operation === '/'){
        if(secondNum === 0) {
            display.value = "ಠ_ಠ"
        } else {
            result = firstNum / secondNum
            display.value = result
        }
        
    }
}