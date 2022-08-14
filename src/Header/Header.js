import React, { useState } from 'react';

function noteCount(n) {
    return (
        <>
            <div className='container'>Список Задач {n}</div>
        </>
    );
}

function Header() {
    return (
        <>
            <div className='container'>
                noteCount();
            </div>
        </>
    );
}

export default Header;

