const ACTION_TODO_ADD = 'ACTION_TODO_ADD';
const ACTION_DELETE_BTN = 'ACTION_DELETE_BTN';

function addTodo(payload) {
    return { type: ACTION_TODO_ADD, payload };
}

function Delete(payload) {
    return { type: ACTION_DELETE_BTN, payload };
}

export { ACTION_TODO_ADD, ACTION_DELETE_BTN, addTodo, Delete }