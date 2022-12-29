import React, { useState } from "react";
import "./App.css";

const Todo = (props) => {
  return (
    <div className="list-style">
      <div className="todo-style">
        <div>
          <h2>🥕{props.todo.content}🥕</h2>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "2023년은 토끼의 해",
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
          placeholder="내용을 적어봅시다."
        />
        <button className="add-button" onClick={addHandler}>
          추가하기
        </button>
      </div>
      <div className="title">Todo List 🐰</div>
      <div className="list-card">
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} setTodos={setTodos} />;
        })}
      </div>
    </div>
  );
};

export default App;
