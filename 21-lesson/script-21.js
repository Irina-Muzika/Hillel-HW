const SELECTOR_CLASS_TABLE = '.table'
const SELECTOR_CLASS_BTN = ".del"
const SELECTOR_ClASS_EDIT = ".edit"
const SELECTOR_CLASS_INP = ".inp"

const $tableEl = $(SELECTOR_CLASS_TABLE)
const $inpEl = Array.from($(SELECTOR_CLASS_INP))
const $inpFirstName = $('#firstName')
const $inptLastName = $('#lastName')
const $addContact = $('.add')
const $formEl = $('.form')[0]
const $inptPhone = $('#phone')
const $inpId = $('#inpId')
let contactList = []
const dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
        Save: () => {
            const contact = getContact();
            const $contactId = $inpId.val()

            if (isInpValueValid()) {
                return
            }

            if ($contactId) {
                upgradeContact()
            } else {
                ContactApi.create(contact)
                    .then((newContact) => {
                        contactList.push(newContact);
                        renderContact(newContact);
                        clearForm()
                    })
            }
        },
        Cancel: function () {
            dialog.dialog("close");
            clearForm()
        }
    },
    close: function () {
        clearForm()
    }
});

getContactList()

$addContact.on('click', on$AddContactClick)
$tableEl.on('click', onTableElClick)

function on$AddContactClick(e) {
    e.preventDefault()

    dialog.dialog("open");
}

function onTableElClick(e) {
    const $trEl = $(e.target).closest('.tr')
    const $trId = $trEl.data('id')

    contactUpdateEl = contactList.find(el => +el.id === $trId)

    if ($(e.target).hasClass('del')) {
        $trEl.remove()
        ContactApi.delete($trId)
            .then(() => {
                contactList = contactList.filter(item => +item.id !== $trId);
            })
            .catch(showError)
    }
    if ($(e.target).hasClass('edit')) {
        dialog.dialog("open");
        fillForm(contactUpdateEl)
    }
}

function getContactList() {
    ContactApi.getList()
        .then(res => contactList = res)
        .then(renderContactList)
        .catch(showError)
}

function updateContact(id, change) {
    ContactApi.update(id, change)
        .catch(showError)
    const contact = contactList.find(item => item.id === id);
    Object.keys(change).forEach(key => contact[key] = change[key]);
    renderContactList(contactList)
}

function upgradeContact() {
    const $id = $inpId.val()
    const chages = getContact()

    updateContact($id, chages)

    clearForm()
}

function fillForm(contact) {
    $inpFirstName[0].value = contact.firstName
    $inptLastName[0].value = contact.lastName
    $inptPhone[0].value = contact.phone
    $inpId[0].value = contact.id
}

function getContact() {
    const $id = $inpId.val()
    const contact = contactList.find(el => el.id === $id) || {}

    return {
        ...contact,
        firstName: $inpFirstName.val(),
        lastName: $inptLastName.val(),
        phone: $inptPhone.val(),
    }
}

function isInpValueValid() {
    return $inpEl.find(el => {
        if (el.value.trim() === '') {
            showError({ message: `введите валидное значение в: ${el.getAttribute('name')}` })
            return true
        }
    })
}

function renderContactList(contactList) {
    $tableEl.html(contactList.map(getTemplate))
}

function renderContact(newContact) {
    const $contact = getTemplate(newContact)

    $tableEl.append($contact)
}

function getTemplate(contact) {
    return `
        <tr class="tr" data-id="${contact.id}">
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.phone}</td>
            <td><button class="del">Delite</button></td>
            <td><button class="edit">Edit</button></td>
        </tr>
`
}

function showError(err) {
    alert(err.message)
}

function clearForm() {
    $formEl.reset();
    $inpId[0].value = ''
    dialog.dialog("close");
}