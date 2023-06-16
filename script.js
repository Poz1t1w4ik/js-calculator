// Создаем класс Calculator
class Calculator {
    constructor() {
        this.result = 0;
        this.history = '';
        this.memory = 0;
        const resultField = document.getElementById('result');
        resultField.value = 0;
    }

    // Метод для сложения двух чисел
    add() {
        const historyField = document.getElementById('history')
        const resultField = document.getElementById('result');
        this.result += parseInt(resultField.value);
        this.history += resultField.value + '+';
        resultField.value = '';
        historyField.value = this.history;
    }

    // Метод для вычитания числа из результата
    subtract() {
        const historyField = document.getElementById('history');
        const resultField = document.getElementById('result');
        this.result = parseInt(resultField.value);
        this.history += resultField.value + '-';
        resultField.value = '';
        historyField.value = this.history;
    }

    // Метод для умножения результата на число
    multiply() {
        const historyField = document.getElementById('history');
        const resultField = document.getElementById('result');
        this.result = parseInt(resultField.value);
        this.history += resultField.value + '*';
        resultField.value = '';
        historyField.value = this.history;
    }

    // Метод для деления результата на число
    divide() {
        const historyField = document.getElementById('history');
        const resultField = document.getElementById('result');
        this.result = parseInt(resultField.value);
        this.history += resultField.value + '/';
        resultField.value = '';
        historyField.value = this.history;
    }

    appendNumber(number) {
        const resultField = document.getElementById('result');
        if (resultField.value === '0') {
            resultField.value = number;
        } else {
            resultField.value += number;
        }
        this.result = resultField.value
    }

    total(){
        const historyField = document.getElementById('history')
        const resultField = document.getElementById('result');
        historyField.value = '';
        if (bracketCheck(this.history + this.result)) {
            const result = eval(this.history + this.result);
            if (result !== Infinity) {
                resultField.value = eval(this.history + this.result);
            } else {
                console.log('Ошибка');
                resultField.value = '0';
            }
        } else {
            console.log('Ошибка');
            resultField.value = '0';
        }
    }

    reset() {
        const historyField = document.getElementById('history')
        const resultField = document.getElementById('result');
        historyField.value = '';
        resultField.value = '0';
        this.history = '';
        this.result = '0';
    }

    memoryClear() {
        this.memory = 0;
    }

    memoryRecall() {
        const resultField = document.getElementById('result');
        resultField.value = this.memory;
        this.result = this.memory;
    }

    memoryStore() {
        const resultField = document.getElementById('result');
        this.memory = resultField.value;
    }
}

// Пример использования калькулятора
const calculator = new Calculator();

function appendNumber(number) {
    calculator.appendNumber(number);
}

function add() {
    calculator.add();
}

function subtract() {
    calculator.subtract();
}

function multiply() {
    calculator.multiply();
}

function divide() {
    calculator.divide();
}

function total() {
    calculator.total();
}

function bracketCheck(value) {
    const bracket = [];
    for (let char of value) {
        if (char === '(') {
            bracket.push(char)
        } else if (char === ')') {
            if (bracket.length === 0 ) {
                return false;
            }
            bracket.pop();
        }
    }
    return bracket.length === 0;
}

function reset() {
    calculator.reset();
}

function memoryClear() {
    calculator.memoryClear();
}

function memoryRecall() {
    calculator.memoryRecall();
}

function memoryStore() {
    calculator.memoryStore();
}

document.addEventListener("keydown", function(event) {
    let numberArray = [];
    for (let i = 0; i < 10; i++) {
        numberArray.push(i);
    }
    if (numberArray.includes(parseInt(event.key))) {
        calculator.appendNumber(parseInt(event.key));
    }
});