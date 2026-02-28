const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = null;
let firstValue = null;
let shouldResetDisplay = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "C") {
            clearCalculator();
        } else if (value === "=") {
            calculate();
        } else if (["+", "-", "*", "/"].includes(value)) {
            handleOperator(value);
        } else {
            handleNumber(value);
        }
    });
});

function handleNumber(value) {
    if (shouldResetDisplay) {
        currentInput = "";
        shouldResetDisplay = false;
    }

    // Prevent multiple decimals
    if (value === "." && currentInput.includes(".")) return;

    currentInput += value;
    updateDisplay(currentInput);
}

function handleOperator(op) {
    if (currentInput === "") return;

    if (firstValue === null) {
        firstValue = parseFloat(currentInput);
    } else if (!shouldResetDisplay) {
        calculate();
    }

    operator = op;
    shouldResetDisplay = true;
}

function calculate() {
    if (operator === null || shouldResetDisplay) return;

    const secondValue = parseFloat(currentInput);
    let result;

    switch (operator) {
        case "+":
            result = firstValue + secondValue;
            break;
        case "-":
            result = firstValue - secondValue;
            break;
        case "*":
            result = firstValue * secondValue;
            break;
        case "/":
            result = secondValue === 0 ? "Error" : firstValue / secondValue;
            break;
    }

    updateDisplay(result);
    currentInput = result.toString();
    firstValue = result;
    operator = null;
}

function clearCalculator() {
    currentInput = "";
    operator = null;
    firstValue = null;
    updateDisplay("0");
}

function updateDisplay(value) {
    display.textContent = value;
}