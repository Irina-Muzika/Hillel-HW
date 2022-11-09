const ATTRIBUTE_INPUT = 'name'
const DELETE_CLASS = 'del'
const COLOR_CLASS = 'green'
const SELECTOR_CLASS_LI = '.li'
const CLASS_LI = "li"
const URL = 'https://636937fa28cd16bba7184e47.mockapi.io/api/todo/TODOlist'

const ulEl = document.querySelector('.ul')
const inpEl = document.querySelector('.input')
const btnEl = document.querySelector('.btn')
const formEl = document.querySelector('.form')

formEl.addEventListener('submit', onFormElSubmit)
ulEl.addEventListener('click', deleteEl)

getTodoList()

function getTodoList() {
    fetch(URL)
        .then((res) => res.json())
        .then(renderTodoList)
        .catch(showError)
}

function createTodo(todo) {
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json',
        }
    })
        .then((res) => res.json())
        .then(addTemplate)
        .catch(showError)
}

function deleteTodo(todoId) {
    fetch(URL + '/' + todoId, {
        method: 'DELETE',
    })
        .then((res) => res.json())
        .catch(showError)
}

function onFormElSubmit(e) {
    e.preventDefault()

    const todo = getTodo()

    if (inpEl.value.trim() === '') {
        showError('введите валидное число')
        return
    }

    createTodo(todo)

    clearInput()
}

function clearInput() {
    inpEl.value = ''
}

function getTodo() {
    return {
        title: inpEl.value,
        done: true,
    }
}

function addTemplate(todo) {
    let clearTemplate = getTemplate(todo)

    ulEl.insertAdjacentHTML('beforeend', clearTemplate)
}

function renderTodoList(todo) {
    todo.forEach(el => addTemplate(el))
}

function getTemplate(todo) {
    return `
    <li class="li" data-id="${todo.id}">
        ${todo.title}
        <button class="del">Delete</button>
    </li>
`
}

function deleteEl(e) {
    if (e.target.classList.contains(DELETE_CLASS)) {
        const contactEl = findContactEl(e.target);
        const liIdEl = contactEl.dataset.id

        if (contactEl) {
            contactEl.remove();
        }
        deleteTodo(liIdEl)
    }
    if (e.target.classList.contains(CLASS_LI)) {
        const liEl = chengeColor(e.target);
        if (liEl) {
            liEl.classList.toggle(COLOR_CLASS);
        }
    }
}

function findContactEl(el) {
    return el.closest(SELECTOR_CLASS_LI);
}

function chengeColor(color) {
    return color
}

function showError(err) {
    alert(err)
}

