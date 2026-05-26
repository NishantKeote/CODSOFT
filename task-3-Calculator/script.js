const currentDisplay = document.getElementById('current-display');
const previousDisplay = document.getElementById('previous-display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '0';
let previousInput = '';
let selectedOperator = null;
let shouldResetDisplay = false;

// 1. Mouse Click Event Listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        const action = button.getAttribute('data-action');

        if (value !== null) {
            handleNumber(value);
        } else if (action !== null) {
            handleAction(action);
        }
        updateDisplay();
    });
});

// 2. Keyboard Event Listener
window.addEventListener('keydown', (e) => {
    const key = e.key;

    // Handle Numbers and Decimal
    if ((key >= '0' && key <= '9') || key === '.') {
        handleNumber(key);
    } 
    // Handle Operators
    else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        handleOperator(key);
    } 
    // Handle Equal sign and Enter key
    else if (key === '=' || key === 'Enter') {
        e.preventDefault(); // Prevents Enter key from accidentally clicking a focused button
        handleAction('calculate');
    } 
    // Handle Backspace (Delete)
    else if (key === 'Backspace') {
        handleAction('delete');
    } 
    // Handle Escape key (Clear All)
    else if (key === 'Escape') {
        handleAction('clear');
    }

    updateDisplay();
});

// Core Logic Functions
function handleNumber(num) {
    if (num === '.' && currentInput.includes('.')) return;

    if (currentInput === '0' && num !== '.') {
        currentInput = num;
    } else if (shouldResetDisplay) {
        currentInput = num;
        shouldResetDisplay = false;
    } else {
        currentInput += num;
    }
}

function handleOperator(op) {
    if (selectedOperator && !shouldResetDisplay) {
        currentInput = compute();
    }
    selectedOperator = op;
    previousInput = currentInput;
    shouldResetDisplay = true;
}

function handleAction(action) {
    if (action === 'clear') {
        currentInput = '0';
        previousInput = '';
        selectedOperator = null;
    } else if (action === 'delete') {
        if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput = '0';
        }
    } else if (action === 'calculate') {
        if (!selectedOperator || previousInput === '') return;
        currentInput = compute();
        previousInput = '';
        selectedOperator = null;
        shouldResetDisplay = true;
    }
}

// Separated click operator listening block to point directly to unified handleOperator
const operatorButtons = document.querySelectorAll('.btn.op');
operatorButtons.forEach(opBtn => {
    opBtn.addEventListener('click', () => {
        const op = opBtn.getAttribute('data-value');
        handleOperator(op);
        updateDisplay();
    });
});

function compute() {
    let result = 0;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return '0';

    if (selectedOperator === '+') {
        result = prev + current;
    } else if (selectedOperator === '-') {
        result = prev - current;
    } else if (selectedOperator === '*') {
        result = prev * current;
    } else if (selectedOperator === '/') {
        if (current === 0) return "Error";
        result = prev / current;
    } else if (selectedOperator === '%') {
        result = prev % current;
    }

    return parseFloat(result.toFixed(8)).toString();
}

function updateDisplay() {
    currentDisplay.innerText = currentInput;
    if (selectedOperator != null) {
        let opSymbol = selectedOperator;
        if (opSymbol === '*') opSymbol = '×';
        if (opSymbol === '/') opSymbol = '÷';
        previousDisplay.innerText = `${previousInput} ${opSymbol}`;
    } else {
        previousDisplay.innerText = '';
    }
}