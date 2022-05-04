import React from 'react';

export default function Form({setInputText, todos, setTodos, inputText, setStatus}) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitToDoHandler = (e) =>  {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return(
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
            />
            <button className="todo-button" onClick={submitToDoHandler} type="submit">
            <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">Tout</option>
                <option value="completed">Terminé</option>
                <option value="uncompleted">En cours</option>
            </select>
            </div>
      </form>
    )
}