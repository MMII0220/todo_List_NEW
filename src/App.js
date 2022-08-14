import React, { useState } from 'react';
import Header from './Header/Header.js';
import AddToDo from './AddToDo/AddToDo.js';
import TodoList from './TodoList/TodoList.js';
import './App.css';


function App() {

  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header todos={todos} />
      <AddToDo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
