import React from 'react';
import './Header.css';

function noteCount(n) {
    return (
        <>
            <div className='notes__count'>
                Список Задач: {n}
            </div>
        </>
    );
}

function Header({ todos }) {
    return (
        <>
            <div className='wrapper'>
                <header className='header'>
                    <div className='container'>
                        {noteCount(todos.length)}
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;

