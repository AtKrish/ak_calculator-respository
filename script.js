const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultInput = document.getElementById("result");

const addButton = document.querySelector('[onclick="add()"]');
const subtractButton = document.querySelector('[onclick="subtract()"]');
const multiplyButton = document.querySelector('[onclick="multiply()"]');
const divideButton = document.querySelector('[onclick="div()"]');

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);

function add() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    resultInput.value = num1 + num2;
}

function subtract() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    resultInput.value = num1 - num2;
}

function multiply() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    resultInput.value = num1 * num2;
}

function divide() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (num2 === 0) {
        alert("The second number cannot be zero");
    } else {
        resultInput.value = num1 / num2;
    }
}