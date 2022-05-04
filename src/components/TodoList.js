import React from 'react';
import Todo from './Todo';


export default function TodoList({todos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos.map((todo) =>(
                   <Todo text={todo.text} key={parseInt(todo.id, 10)}/>
               ))} 
            </ul>
        </div>
    )
}