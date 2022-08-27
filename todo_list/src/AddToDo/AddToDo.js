import React, { useState } from 'react';
import './AddToDo.css';


function AddToDo({ todos, setTodos }) {
    const [value, setValue] = useState('');

    function saveTodo() {
        if (value.trim()) {
            setTodos([...todos, {
                id: new Date().getTime(),
                text: value,
                state: true
            }]);
        }

        setValue('');

        return 0;
    }

    return (
            <>
                <div className='wrapper'>
                    <article className='toDo__inner'>
                        <input className='todo__text' value={value} placeholder='Введите значение...' onChange={ (e) => setValue(e.target.value) }/>
                        <button className='btn--save' onClick={saveTodo}>Сохранить</button>
                    </article>
                </div>
            </>
    );
}

export default AddToDo;
