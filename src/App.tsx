import React from 'react';
import { useState } from 'react';
import './App.css';
import Todos from './components/Todos/Todos';

const App = (): JSX.Element => {
    const [state, setState] = useState('')
    return (
        <>
            <div className='todo_list'>
                <h1>Todo Lists</h1>
                <Todos/>
            </div>
        </>
    )
}

export default App;