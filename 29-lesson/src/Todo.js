import Form from "./Form";
import List from "./List";
import styles from './Todo.module.css'
import useTodo from "./useTodo";

function Todo() {
 const {
  todoList,
  onFormSubmit,
  onEdit,
  deleteTodo,
  todo,
  error,
  setTodo,
  doneChange
} = useTodo()

  return (
    <>
      <Form todoList={todoList} todo={todo} setTodo={setTodo} onSubmit={onFormSubmit} />
      {error ? <div className={styles.error}>{error}</div> : null}
      {todoList.length > 0 && (
        <List onEdit={onEdit} doneChange={doneChange} onDelete={deleteTodo} todoList={todoList} />
      )}
    </>
  );
}


export default Todo;