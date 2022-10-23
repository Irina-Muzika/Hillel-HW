const action = getAction(`+, -, *,  /`)
const amount = getAmount()
const numbers = []
getNumber()

const result = calculator(action, numbers)
showResult(action, numbers, result)

function getAction(symbol) {
    let action
    do {
        action = prompt(`Enter one of the characters ${symbol}`)
    }
    while (action !== '+' && action !== '-' && action !== '*' && action !== '/')
    return action
}

function getAmount() {
    let amount

    do {
        amount = Number(prompt(`Enter the number of operands from 1 to 5`))
    }
    while (amount <= 1 || amount >= 5 || isNaN(amount))
    return amount
}

function getNumber() {
    for (i = 1; i <= amount; i++) {
        let window;
        do {
            window = Number(prompt(`Enter namber ${i}`))
        } while (!Number(window))
        numbers.push(window)
    }
}

function calculator(action, numbers) {
    switch (action) {
        case '+': return numbers.reduce((a, b) => a + b)
        case '-': return numbers.reduce((a, b) => a - b)
        case '*': return numbers.reduce((a, b) => a * b)
        case '/': return numbers.reduce((a, b) => a / b)
    }
}

function showResult(action, numbers, result) {
    alert(`${numbers.join(` ${action} `)} = ${result}`)
}