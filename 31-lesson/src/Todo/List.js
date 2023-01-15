import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, Delete } from "../store/actions/todo";

export default function List({ todoList }) {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();


    function onSaveBtnClick() {
        const todo = {
            "title": message,
            "status": false,
            "done": false,
            "id": String(Math.random())
        }

        dispatch(addTodo(todo));
        setMessage('')
    }

    function onMessageChange(e) {
        setMessage(e.target.value);
    }

    return (
        <React.Fragment>
            <input type='text' value={message} onChange={onMessageChange} />
            <button onClick={onSaveBtnClick}>Save</button>
            <ul>
                {todoList.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <span>{todo.title}</span>
                            <button onClick={() => dispatch(Delete(todo))}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}