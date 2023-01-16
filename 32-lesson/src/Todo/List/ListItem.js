import styles from './ListItem.module.css';
import { useDispatch } from "react-redux";
import { deleteTodo, statusChangeTodo, editTodo } from "../../store/actions/todo";

export default function ListItem({ todo }) {
    const done = todo.done ? styles.done : '';
    const dispatch = useDispatch();

    function onEditBtnClick(e) {
        e.stopPropagation();

        dispatch(editTodo(todo));
    }

    function onDeleteBtnClick(e) {
        e.stopPropagation();

        dispatch(deleteTodo(todo.id));
    }

    function onLiElClick(e) {
        e.stopPropagation();

        dispatch(statusChangeTodo(todo))
    }

    return (
        <li className={done} onClick={onLiElClick}>
            <span>{todo.title}</span>
            <button onClick={onEditBtnClick}>[Edit]</button>
            <button onClick={onDeleteBtnClick}>[Delete]</button>
        </li>
    )
}