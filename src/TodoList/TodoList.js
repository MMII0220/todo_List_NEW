import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import './TodoList.css';


function TodoList({ todos, setTodos }) {

    const [state, setState] = useState(false);

    function deleteTodo(id) {
        let newTodos = [...todos].filter((todo) => todo.id !== id);

        setTodos(newTodos);
    }

    return (
        <div className='wrapper'>
            {todos.map((todo) => (
                <div className='todo__note' key={todo.id}>
                    <div style={{textAlign:"center"}}>{todo.text}</div>
                    <Transition
                        in={}
                    >
                        <button onClick={ () => deleteTodo(todo.id) }>Удалить</button>
                    </Transition>
                </div>
            ))}
        </div>
    );
}

export default TodoList;

