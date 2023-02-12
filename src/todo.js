/** @format */

import { useState } from "react";
import "./css/todo.css";

function ToDo() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const addToDo = (todo) => {
    if (todo.trim() == "") {
      return;
    }
    const newToDo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newToDo]);

    setText("");
  };

  const deleteToDo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div className="todolist">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button id="todobtn" onClick={() => addToDo(text)}>
        Add
      </button>
      <ul id="todoul">
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            &nbsp;
            <button className="close" onClick={() => deleteToDo(todo.id)}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
