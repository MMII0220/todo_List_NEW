import React, { useState } from 'react';
import './AddToDo.css';


function AddToDo({ todos, setTodos }) {

    const [value, setValue] = useState('');

    function saveTodo() {
        //Розиев Тут посмотори, как сделать по другому!!
        if (value.trim()) {
            setTodos([...todos, {
                id: new Date().getTime(),
                text: value,
                state: true
            }]);
        }

        return 0;
    }

    return (
            <>
                <div className='wrapper'>
                    <input className='todo__text' value={value} placeholder='Введите значение...' onChange={ (e) => setValue(e.target.value) }/>
                    <button className='btn' onClick={saveTodo}>Сохранить</button>
                </div>
            </>
    );
}

export default AddToDo;

