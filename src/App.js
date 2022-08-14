import React, { useState } from 'react';
import Header from './Header/Header.js';
import AddToDo from './AddToDo/AddToDo.js';
import TodoList from './TodoList/TodoList.js';
import './App.css';


function App() {

  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "Hello World",
      state: false
    },
    {
      id: 1,
      text: "Let`s study",
      state: false
    },
    {
      id: 2,
      text: 'Russia us the best',
      state: true
    },
    {
      id: 3,
      text: 'Roziev help me!!!',
      state: false
    }
  ]);

  return (
    <>
      <Header />
      <AddToDo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
