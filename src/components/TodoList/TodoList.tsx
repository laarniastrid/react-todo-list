import React, { SetStateAction } from 'react';

import Todo from '../../interfaces/todo';
import DeleteTodo from '../DeleteTodo/DeleteTodo';

import './TodoList.scss';

interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<SetStateAction<Todo[]>>
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
    function handleToggleTodo(todo: Todo) {
        const updatedTodos = todos.map((t) =>
            todo.id === t.id ? { ...t, done: !t.done } : t
        );

        setTodos(updatedTodos);
    }

    if (todos.length === 0) {
        return (
            <ul>
                <li>No todos left!</li>
            </ul>
        )
    }

    return (
        <ul>
            {todos.map(todo => (

                <li key={todo.id}>
                    <button
                        className='toggle-todo'
                        style={{
                            textDecoration: todo.done ? "line-through" : ""
                        }}
                        onClick={() => handleToggleTodo(todo)}
                    >
                        {todo.text}
                    </button>
                    <DeleteTodo todo={todo} setTodos={setTodos} />
                </li>
            ))}
        </ul>
    )
}

export default TodoList;
