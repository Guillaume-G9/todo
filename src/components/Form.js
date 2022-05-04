import React from 'react';

export default function Form({setInputText, todos, setToDos, inputText}) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitToDoHandler = (e) =>  {
        e.preventDefault();
        setToDos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText("");
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
            <select name="todos" className="filter-todo">
                <option value="all">Tout</option>
                <option value="completed">Terminé</option>
                <option value="uncompleted">En cours</option>
            </select>
            </div>
      </form>
    )
}