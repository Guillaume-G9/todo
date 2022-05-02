
import './App.css';
import React from 'react';
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ma Todo List</h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
