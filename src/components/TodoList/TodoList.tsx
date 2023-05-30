import React, { SetStateAction } from 'react';

import Todo from '../../interfaces/todo';
import DeleteTodo from '../DeleteTodo/DeleteTodo';

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

    return (
        <ul>
            {todos.map(todo => (

                <li key={todo.id}>
                    <span
                        style={{
                            textDecoration: todo.done ? "line-through" : ""
                        }}
                        onClick={() => handleToggleTodo(todo)}
                    >
                        {todo.text}
                    </span>
                    <DeleteTodo todo={todo} setTodos={setTodos} />
                </li>
            ))}
        </ul>
    )
}

export default TodoList;
