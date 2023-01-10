import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.css'

function List({ todoList, onDelete, doneChange,onEdit }) {

    return (
        <ul className={styles.list}>
            {todoList.map(todo => <ListItem onEdit={onEdit} doneChange={doneChange} onDelete={onDelete} todo={todo} key={todo.id} />)}
        </ul>
    );
}

export default List;