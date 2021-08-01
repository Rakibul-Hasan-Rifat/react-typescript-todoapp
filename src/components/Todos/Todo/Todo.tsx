import './Todo.scss';

interface IProps {
    id: number | string,
    text: string,
    isFinished: boolean
}

const Todo = ({ itm, canceler }: { itm: IProps, canceler: Function }) => {

    const { text, id } = itm;

    return (
        <div className='todo'>
            <input type="checkbox" name="todoInput" id={`${id}`} />
            <label htmlFor={`${id}`}>{text}</label>
            <button onClick={() => canceler(id)}>&#10005;</button>
        </div>
    );
};

export default Todo;