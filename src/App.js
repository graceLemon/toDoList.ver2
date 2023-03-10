import React, { useState } from "react";
import "./App.css";

const Todo = (props) => {
  return (
    <div className="list-style">
      <div className="todo-style">
        <div>
          <h2>π₯{props.todo.content}π₯</h2>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "2023λμ ν λΌμ ν΄",
    },
  ]);

  const [content, setContent] = useState("");

  const addHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      content: content,
    };
    setTodos([...todos, newTodo]);
    setContent("");
  };

  return (
    <div className="container">
      <div className="top-input">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="λ΄μ©μ μ μ΄λ΄μλ€."
        />
        <button className="add-button" onClick={addHandler}>
          μΆκ°νκΈ°
        </button>
      </div>
      <div className="title">Todo List π°</div>
      <div className="list-card">
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} setTodos={setTodos} />;
        })}
      </div>
    </div>
  );
};

export default App;
