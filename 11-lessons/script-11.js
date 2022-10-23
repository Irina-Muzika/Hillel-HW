const ATTRIBUTE_INPUT = 'name'
const DELETE_CLASS = 'del'
const COLOR_CLASS = 'green'
const SELECTOR_CLASS_LI = '.li'
const CLASS_LI = "li"

const ulEl = document.querySelector('.ul')
const inpEl = document.querySelector('.input')
const btnEl = document.querySelector('.btn')
const itemTemplate = document.querySelector('#itemTemplate').innerHTML
const formEl = document.querySelector('.form')

formEl.addEventListener('submit', onFormElSubmit)
ulEl.addEventListener('click', deleteEl)


function onFormElSubmit(e) {
    e.preventDefault()
    addTemplate()
    clearInput()
}
function clearInput() {
    return inpEl.value = ''
}


function addTemplate() {
    let clearTemplate = itemTemplate
    clearTemplate = clearTemplate.replace(`[${inpEl.getAttribute(ATTRIBUTE_INPUT)}]`, inpEl.value)
    ulEl.insertAdjacentHTML('beforeend', clearTemplate)
}


function deleteEl(e) {
    if (e.target.classList.contains(DELETE_CLASS)) {
        const contactEl = findContactEl(e.target);
        if (contactEl) {
            contactEl.remove();
        }
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