const $containerStudentList = $('.container')
const $form = $('form')
const $table = $('table')
const $name = $('#name')
let studentList = []
const MARKS = new Array(10).fill('0')

getStudentsList()

$form.on('submit', onFormSubmit)
$containerStudentList.on('click', '.deleteBtn', onDeleteBtnClick)
$containerStudentList.on('click', '.mark', onMarkClick)

function onFormSubmit(e) {
    e.preventDefault()

    const student = getStudent()

    createStudent(student)

    clearForm()
}

function onDeleteBtnClick() {
    const trEl = this.closest('.item')
    const id = trEl.dataset.id

    StudentsApi.delete(id)
        .then(() => {
            console.log(studentList);
            studentList = studentList.filter(student => student.id !== id)
            console.log(studentList);
        })

    trEl.remove()
}

function onMarkClick() {
    $(this).focusout(() => {
        const trEl = this.closest('.item')
        const id = trEl.dataset.id
        const marks = Array.from(trEl.querySelectorAll('.mark')).map(item => item.value)

        const trOld = studentList.find(student => student.id === id)
        trOld.marks = marks
        StudentsApi.update(id, trOld).catch(showError)
    })
}

function createStudent(student) {
    StudentsApi.create(student)
        .then(newStudent => {
            studentList.push(newStudent)
            renderStudentsList(studentList)
        })
        .catch(showError)
    addStudent(student)
}

function addStudent(student) {
    $containerStudentList.append(getTemplate(student))
}

function getStudent() {
    return {
        name: $name.val(),
        marks: MARKS
    }
}

function getStudentsList() {
    StudentsApi.getList()
        .then(list => studentList = list)
        .then(renderStudentsList)
        .catch(showError)
}

function renderStudentsList(studentsList) {
    $containerStudentList.html(studentsList.map(getTemplate))
}

function getTemplate({ id, marks, name }) {
    return `
    <tr class="item" data-id="${id}">
        <td>${name}</td>
        <td class="itemMarks">${marks.map(mark => `<input class="mark" value="${mark}">`).join('')}</td>
        <td><button class="deleteBtn">Delete</button></td>
    </tr>
    `
}

function clearForm() {
    $form[0].reset()
}

function showError({ message }) {
    alert(message)
}