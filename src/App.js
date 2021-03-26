import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilterTodos] = useState([]);

  const filterHandler = () => {
    switch(status){
      case 'completed': setFilterTodos(todos.filter(todo=>todo.completed === true));
      break;
      case 'uncompleted':setFilterTodos(todos.filter(todo=>todo.completed === false));
      break;
      default:setFilterTodos(todos);break;
    }
  }
  return ( 
    <div className="App">
      <header>
      <h1>Dat's Todo List</h1>
    </header>
    <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}></Form>
    <Todolist setTodos={setTodos}todos={todos} />
    </div>
  );
}

export default App;
