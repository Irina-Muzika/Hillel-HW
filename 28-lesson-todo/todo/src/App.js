import React,{ useState } from 'react';
import './App.css';

function App() {
const [message, setMessage] = useState('');
const [todoList, setTodoList] = useState([
  {"title":"aliquid esse pariatur","status":true,"done":true,"id":"1"},
  {"title":"repudiandae sapiente enim","status":false,"done":false,"id":"2"},
  {"title":"adipisci qui dolorum","status":false,"done":true,"id":"3"},
  {"title":"earum at asperiores","status":false,"done":true,"id":"4"},
  {"title":"delectus ea libero","status":true,"done":true,"id":"5"},
  {"title":"sint excepturi cum","status":true,"done":false,"id":"6"},
  {"title":"delectus voluptas quia","status":false,"done":false,"id":"7"},
  {"title":"aut modi maiores","status":false,"done":false,"id":"8"},
  {"title":"rerum vitae earum","status":false,"done":false,"id":"9"},
]);


  function onSaveBTNClick() {
    setTodoList([
    ...todoList,
{
       "title": message,
        "status":false,
        "done":false,
        "id": String(Math.random())
}
    ]);
    
    setMessage('')
  }

function onMessageChange(e) {
  setMessage(e.target.value);
}

  return (
    <React.Fragment>
    <input type='text'value={message} onChange={onMessageChange}/>
    <button onClick={onSaveBTNClick}>Save</button>
    <ul>
      {todoList.map((todo)=>{
        return <li key={todo.id}>{todo.title}</li>

      })}
    </ul>
    </React.Fragment>
  )
}

export default App;
