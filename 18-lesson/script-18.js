const SELECTOR_CLASS_TABLE = '.table'
const SELECTOR_CLASS_BTN = ".del"
const SELECTOR_ClASS_EDIT = ".edit"
const SELECTOR_CLASS_INP = ".inp"
const SELECTOR_CLASS_FORM = ".form"

const tableEl = document.querySelector(SELECTOR_CLASS_TABLE)
const inpEl = Array.from(document.querySelectorAll(SELECTOR_CLASS_INP))
const formEL = document.querySelector(SELECTOR_CLASS_FORM)
const inpFirstName = document.querySelector('#name')
const inptLastName = document.querySelector('#surname')
const inptPhone = document.querySelector('#phone')
const inpId = document.querySelector('#inpId')
let contactList = []

formEL.addEventListener('submit', onFormElSubmit)
tableEl.addEventListener('click', onTableElClick)

getContactList()

function onFormElSubmit(e) {
    e.preventDefault()

    const contact = getContact()

    if (isInpValueValid()) {
        return
    }

    saveContact(contact)

    clearInput()
}

function onTableElClick(e) {
    const trEl = e.target.closest('.tr')
    const trId = trEl.dataset.id

    const contactUpdateEl = contactList.find(el => el.id === trId)

    if (e.target.classList.contains('del')) {
        trEl.remove()
        Contact.delete(trId)
        .then(getContactList)
        .catch(showError)
    }
    if (e.target.classList.contains('edit')) {
        fillForm(contactUpdateEl)
    }
}

function getContactList() {
    Contact.getContact()
        .then(res => contactList = res)
        .then(renderContactList)
        .catch(showError)
}

function saveContact(contact) {
    if (contact.id) {
        Contact.update(contact.id, contact).catch(showError)

        const contactOld = contactList.find(el => el.id === contact.id)

        contactOld.firstName = contact.firstName
        contactOld.lastName = contact.lastName
        contactOld.phone = contact.phone

        renderContactList(contactList)
    }
    else {
        Contact.create(contact)
            .then(getContactList)
            .catch(showError)
        addContact(contact)
    }
}

function fillForm(contact) {
    inpFirstName.value = contact.firstName
    inptLastName.value = contact.lastName
    inptPhone.value = contact.phone
    inpId.value = contact.id
}

function getContact() {
    const id = inpId.value
    const contact = contactList.find(el => el.id === id) || {}

    return {
        ...contact,
        firstName: inpFirstName.value,
        lastName: inptLastName.value,
        phone: inptPhone.value,
    }
}

function isInpValueValid() {
    return inpEl.find(el => {
        if(el.value.trim() === ''){
            showError(`введите валижное значение в: ${el.getAttribute('name')}`)
            return true
        }
    })
}

function renderContactList(contactList) {
    const html = contactList.map(getTemplate).join('')

    tableEl.innerHTML = html
}

function addContact(contact) {
    const html = getTemplate(contact)

    tableEl.insertAdjacentHTML('beforeend', html)
}

function getTemplate(contact) {
    return `<tr class="tr" data-id="${contact.id}">
        <td>${contact.firstName}</td>
        <td>${contact.lastName}</td>
        <td>${contact.phone}</td>
        <td><button class="del">Delite</button></td>
        <td><button class="edit">Edit</button></td>
    </tr>
`
}

function showError(err) {
    alert(err)
}

function clearInput() {
    formEL.reset()
    inpId.value = ''
}