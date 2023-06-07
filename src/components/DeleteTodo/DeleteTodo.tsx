import React, { SetStateAction } from 'react';
import Todo from '../../interfaces/todo';

import './DeleteTodo.scss';

interface DeleteTodoProps {
    todo: Todo,
    setTodos: React.Dispatch<SetStateAction<Todo[]>>;
}

const DeleteTodo: React.FC<DeleteTodoProps> = ({ todo, setTodos }) => {
    function handleDeleteTodo() {
        const confirmed = window.confirm("Do you want to delete this item?");

        if (confirmed === false) {
            return;
        }

        setTodos((prevTodos => {
            return prevTodos.filter(t => t.id !== todo.id)
        }));
    }

    return (
        <button
            className='delete'
            onClick={handleDeleteTodo}
        >
            X
        </button>
    )
}

export default DeleteTodo;
