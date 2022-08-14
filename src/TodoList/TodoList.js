import React, { useState } from 'react';
import './TodoList.css';


function TodoList({ todos, setTodos }) {

    const [value, setValue] = useState('');
    const [edit, setEdit] = useState(null);

    function deleteTodo(id) {
        let newTodos = [...todos].filter((todo) => todo.id !== id);

        setTodos(newTodos);

        return 0;
    }

    function saveTodo(id) {
        let newTodo = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.text = value;
            }

            return todo;
        });

        setTodos(newTodo);
        setEdit(null);
    }

    function statusTodo(id) {
        let newTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.state = !todo.state;
            }

            return todo;
        });

        setTodos(newTodos);
    }

    function editTodo(id, value) {
        setEdit(id);
        setValue(value);

        return 0;
    }

    return (
        <div className='wrapper'>
            {todos.map((todo) => (
                <div className='todo__note' key={todo.id}>
                    {
                        edit === todo.id ?
                        <>
                            <input className='edit__text' value={value} onChange={(e) => setValue(e.target.value)} /><br />
                        </> :
                        <>
                            <div className='todoNote__text'>{todo.text}</div>
                        </>
                    }
                    {
                        edit === todo.id ?
                        <>
                            <button onClick={() => saveTodo(todo.id)}>Сохранить</button>
                        </> :
                        <>
                            <button onClick={ () => deleteTodo(todo.id) }>Удалить</button>
                            <button className='btn--close' onClick={() => statusTodo(todo.id)}>Открыть / Закрыть</button>
                            <button className='btn--edit' onClick={() => editTodo(todo.id, todo.text)}>Изменить</button>
                        </>
                    }
                    
                </div>
            ))}
        </div>
    );
}

export default TodoList;
