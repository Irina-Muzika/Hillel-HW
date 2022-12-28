const BTN_CLASS = 'btn'
const DELETE_CLASS = 'delete'
const SELECTOR_DIV_TEXTAREA_CLASS = '.divtextarea'
const TEXTAREA_CLASS = 'textarea'
const DEFOULT_TEXTAREA = 0
const CONTAINER_CLASS = '.notesList'

const $containerNotesList = $(CONTAINER_CLASS)
const $id = $('#id')
const $form = $('form')[0]
const $inpDescription = $('#description')
console.log($inpDescription[0]);
let notesList = []
const dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
        Save: () => {
            const note = getNote();
            const $noteId = $id.val()

            if ($noteId) {
                sticerApi.update($noteId, note)
                    .then(() => {
                    })
                const sticker = notesList.find(item => item.id === $noteId);
                Object.keys(note).forEach(key => sticker[key] = note[key]);
                renderNotesList(notesList);
            } else {
                sticerApi.create(note)
                    .then((newSticer) => {
                        notesList.push(newSticer);
                        renderNotesList(notesList);
                    })
            }

            clearForm()
        },
        Cancel: function () {
            clearForm()
        }
    },
    close: function () {
        clearForm()
    }
});

$('.btn').on('click', on$AddModalClick)
$containerNotesList.on('click', onContainerNotesListClick)

getNotesList()

function on$AddModalClick(e) {
    e.preventDefault()

    dialog.dialog("open");
}

function onContainerNotesListClick(e) {
    if ($(e.target).hasClass(DELETE_CLASS)) {
        const $note = $(e.target).closest(SELECTOR_DIV_TEXTAREA_CLASS)
        const $noteId = $note.data('id')

        sticerApi.delete($noteId).catch(showError)

        notesList = notesList.filter(item => +item.id !== $noteId);

        $note.remove()
    }
    if ($(e.target).hasClass(TEXTAREA_CLASS)) {
        const $noteId = $(e.target).closest('.divtextarea').data('id')
        const note = notesList.find(el => +el.id == $noteId)
        fillForm(note)
        dialog.dialog("open");
    }
}

function getNote() {
    return {
        description: $inpDescription.val()
    }
}

function fillForm(sticer) {
    $inpDescription[0].value = sticer.description
    $id[0].value = sticer.id
}

function getNotesList() {
    sticerApi.getList()
        .then(list => notesList = list)
        .then(renderNotesList)
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

function clearForm() {
    $form.reset();
    $id[0].value = ''
    dialog.dialog("close");
}