const BTN_CLASS = 'btn'
const DELETE_CLASS = 'delete'
const SELECTOR_DIV_TEXTAREA_CLASS = '.divtextarea'
const TEXTAREA_CLASS = 'textarea'
const SELECTOR_FORM = '#form-btn'
const DEFOULT_TEXTAREA = 0
const CONTAINER_CLASS = '.notesList'

const $containerNotesList = $(CONTAINER_CLASS)
const $from = $(SELECTOR_FORM)
let notesList = []


$from.on('submit', onFormSubmit)
$containerNotesList.on('click', onContainerNotesListClick)

getNotesList()

function onFormSubmit(e) {
    e.preventDefault()

    createNote()
}

function onContainerNotesListClick(e) {
    if ($(e.target).hasClass(DELETE_CLASS)) {
        const $note = $(e.target).closest(SELECTOR_DIV_TEXTAREA_CLASS)
        const $noteId = $note.data('id')

        NotesApi.delete($noteId).catch(showError)

        $note.remove()
    }
    if ($(e.target).hasClass(TEXTAREA_CLASS)) {
        $(e.target).focusout(() => {
            const $getNote = getNote($(e.target))
            const $noteId = $(e.target).closest(SELECTOR_DIV_TEXTAREA_CLASS).data('id')
            const oldNote = notesList.find(el => el.id == $noteId)

            oldNote.description = $getNote.description

            NotesApi.update($noteId, $getNote).catch(showError)

            renderNotesList(notesList)
        })
    }
}

function getNote(el) {
    return {
        description: el.val()
    }
}

function getNotesList() {
    NotesApi.getList()
        .then(list => notesList = list)
        .then(renderNotesList)
        .catch(showError)
}

function createNote() {
    NotesApi.create()
        .then(getNotesList)
        .catch(showError)
}

function renderNotesList(notesList) {
    $containerNotesList.html(notesList.map(getTemplate))
}

function getTemplate(note) {
    return `
    <div class="divtextarea" data-id="${note.id}">
        <p class="delete">X</p>
        <textarea class="textarea" name="text" id="text-id" placeholder="text">${note.description}</textarea>
    </div>
    `
}

function showError(err) {
    alert(err.message)
}