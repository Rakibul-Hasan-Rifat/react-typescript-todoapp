import React from 'react';
import Todo from './Todo/Todo';
import './Todos.scss'

interface ITodo {
    id: number | string,
    text: string,
    isFinished: boolean
}

const Todos = () => {

    const [todo, setTodo] = React.useState<ITodo>({} as ITodo);
    const [todos, setTodos] = React.useState<ITodo[]>([] as ITodo[]);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(() => ({
            id: `${e.target.value.toLowerCase().trim()}${Math.round(Math.random() * 100)}`,
            text: e.target.value,
            isFinished: false
        }));
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setTodos(() => [...todos, todo]);
        setTodo(() => ({ ...todo, text: '' }));
    };

    const canceler = (id: string | number): void => {
        const newTodos = todos.filter(td => td.id !== id);
        setTodos(() => newTodos);
    }

    return (
        <div id='main'>
            <div className="form">
                <input type="text" placeholder='Your Task' value={todo.text} onChange={changeHandler} />
                <button onClick={clickHandler} disabled={todo.text === ''} >Add a Task</button>
            </div>
            <br />
            {todos.length ? todos.map((item) => <Todo itm={item} key={item.id} canceler={canceler} />) : <h3>No todo list available</h3>}
        </div>
    );
};

export default Todos;