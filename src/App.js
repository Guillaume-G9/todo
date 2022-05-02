
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {

  const [inputText, setInputText ] = useState("");
  const [toDos, setToDos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>Ma Todo List</h1>
      </header>
      <Form
        todos={toDos} 
        setToDos={setToDos} 
        inputText={inputText} 
        setInputText={setInputText}
       />
      <ToDoList />
    </div>
  );
}

export default App;
