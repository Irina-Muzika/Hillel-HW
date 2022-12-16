import Server from "./Server.js"

const formEl = document.querySelector('.form')
const inputs = document.querySelectorAll('.inp')
const ulEl = document.querySelector('.ul')
const ws = new Server()


formEl.addEventListener('submit', onFormElSubmit)

function onFormElSubmit(e) {
    e.preventDefault()

    let message = {}

    for (const input of inputs) {
        message[input.getAttribute('name')] = input.value
    }

    ws.sendMessage(message)

    clearForm()
}

function getTemplate({ message, name }) {
    return `<li>${name}: ${message}</li>`
}

function clearForm() {
    formEl.reset()
}

export { getTemplate, ulEl }