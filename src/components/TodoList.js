import React from 'react';
import Todo from './Todo';


export default function TodoList({setTodos, todos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos.map((todo) =>(
                   <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        text={todo.text} 
                        key={todo.id}
                        todo={todo}
                   />
               ))} 
            </ul>
        </div>
    )
}