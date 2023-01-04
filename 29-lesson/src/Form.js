import React, { useEffect, useState } from 'react';
import styles from './Form.module.css'

function Form({ onSubmit, todoList, todo, setTodo }) {
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')


    useEffect(() => {
        if (todo.id) {
            setMessage(todo.title)
        }
    }, [todo])

    function onFormSubmit(e) {
        e.preventDefault()

        const currentTodo = todoList.find(todos => todos.id === todo.id) || {}

        const newTodo = {
            done: false,
            ...currentTodo,
            title: message,
        }

        if (message.trim() === '') {
            setError('input value is not empty')
            return
        }

        onSubmit(newTodo)

        setMessage('')

        setTodo('')

        setError('')
    }

    function onMessageChange(e) {
        setMessage(e.target.value)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" value={message} onChange={onMessageChange} />
            {error ? <p className={styles.error}>{error}</p> : null}
        </form>
    );
}

export default Form;