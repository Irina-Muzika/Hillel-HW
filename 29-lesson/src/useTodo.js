import { useEffect, useState } from "react";
import TodoApi from './TodoApi'

function useTodo() {
    const [todoList, setTodoList] = useState([])
    const [error, setError] = useState('')
    const [todo, setTodo] = useState('')


    useEffect(() => {
        TodoApi
            .getTodo()
            .then(list => setTodoList(list))
            .catch(err => setError(err.message))
    }, [])

    function onFormSubmit(todo) {
        if (todo.id) {
            TodoApi
                .update(todo.id, todo)
                .then(updateTodo => {
                    const oldTodo = todoList.find(todos => todos.id === todo.id)

                    for (const key in oldTodo) {
                        oldTodo[key] = updateTodo[key]
                    }

                    setTodoList([...todoList])
                })
                .catch(err => setError(err.message))

        } else {
            TodoApi.create(todo)
                .then(newTodo => {
                    setTodoList([...todoList, newTodo])
                })
                .catch(err => setError(err.message))
        }
        
    
    }
    

    function deleteTodo(id, e) {
        e.stopPropagation()
        TodoApi.delete(id)
            .then(() => {
                const list = todoList.filter(todo => todo.id !== id)
                setTodoList(list)
            })
            .catch(err => setError(err.message))
    }

    function doneChange(todo) {
        TodoApi
            .update(todo.id, { done: !todo.done })
            .then(updateTodo => {
                const oldTodo = todoList.find(todos => todos.id === todo.id)

                for (const key in oldTodo) {
                    oldTodo[key] = updateTodo[key]
                }

                setTodoList([...todoList])
            })
            .catch(err => setError(err.message))
    }

    function onEdit(e, todo) {
        e.stopPropagation()
        setTodo(todo)
    }

    return {
        todoList,
        onFormSubmit,
        onEdit,
        deleteTodo,
        todo,
        error,
        setTodo,
        doneChange
    }
}

export default useTodo;