const inputEl = document.querySelectorAll('.inp')
const btnEl = document.querySelector('.btn')
const table = document.querySelector('.table')
const itemTemplate = document.querySelector('#itemTemplate').innerHTML


btnEl.addEventListener('click', onBtnClick)
delet()

function onBtnClick() {
    let inpName = itemTemplate

    if (validate() == false)
        return

    for (i = 0; i < inputEl.length; i++) {
        inpName = inpName.replace(`[${inputEl[i].getAttribute("name")}]`, inputEl[i].value)
    }

    table.insertAdjacentHTML('beforeend', inpName)

    inputEl.forEach(el => el.value = '')

    delet()

}

function validate() {
    for (i = 0; i < inputEl.length; i++) {
        if (inputEl[i].value.trim() == '') {
            alert('Please enter your ' + inputEl[i].getAttribute("name"));
            inputEl[i].classList.add('error')
            return false
        }
        if (inputEl[i].getAttribute("name") == 'phone' && (inputEl[i].value.length > 13 || inputEl[i].value.length < 9)) {
            alert('Please enter valid' + inputEl[i].getAttribute("name"));
            inputEl[i].classList.add('error')
            return false
        }
        inputEl[i].classList.remove('error')
    }
}

function delet() {
    const deleteEl = document.querySelectorAll('.del')

    deleteEl.forEach((el) => {
        el.addEventListener('click', delEl)
    })
}

function delEl(item) {
    (item.target).closest('tr').remove()
}