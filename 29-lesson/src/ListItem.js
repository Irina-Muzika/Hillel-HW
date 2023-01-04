import React from 'react';
import styles from './ListItem.module.css'

function ListItem({ todo, onDelete, doneChange, onEdit}) {
    const done = todo.done ? styles.done : styles.doneFalse

    return (
        <li onClick={(e) => doneChange(todo)} className={done}>
            {todo.title}
            <button onClick={(e) => onEdit(e, todo)}>Edit</button>
            <button onClick={(e) => onDelete(todo.id, e)}>Delete</button>
        </li>
    );
}

export default ListItem;