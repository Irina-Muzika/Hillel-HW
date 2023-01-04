import React, { useEffect, useState } from 'react';

function Form({ onSubmit, todoList, todo, setTodo }) {
    const [message, setMessage] = useState('')

    useEffect(() => {
        if(todo.id){
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

        onSubmit(newTodo)

        setMessage('')

        setTodo('')
    }

    function onMessageChange(e) {

      
        setMessage(e.target.value)
       
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" value={message} onChange={onMessageChange} />
        </form>
    );
}

export default Form;