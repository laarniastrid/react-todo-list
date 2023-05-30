import React, { ChangeEvent, FormEvent, SetStateAction, useMemo, useRef, useState } from 'react';

import './AddTodo.scss';
import Todo from '../../interfaces/todo';

interface AddTodoProps {
    setTodos: React.Dispatch<SetStateAction<Todo[]>>;
}

const AddTodo: React.FC<AddTodoProps> = ({ setTodos }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [addTodo, setAddTodo] = useState('');

    const handleTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newTodo = event.target.value;
        setAddTodo(newTodo);
    }

    const isInputValid = useMemo(() => {
        const trimmedAddTodo = addTodo.trim();
        return trimmedAddTodo !== '';
    }, [addTodo])

    const handleAddTodo = (event: FormEvent) => {
        event.preventDefault();

        const newTodo: Todo = {
            id: Date.now(),
            text: addTodo.trim(),
            done: false
        };

        setTodos((todos: Todo[]) => {
            return todos.concat(newTodo);
        })

        setAddTodo("");

        if (inputRef.current) {
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    };

    return (
        <form onSubmit={handleAddTodo}>
            <input
                className="add-input"
                name="addTodo"
                placeholder="Add todo"
                onChange={handleTodoChange}
                ref={inputRef}
            />
            <button className="submit" type="submit" disabled={isInputValid === false} >Submit</button>
        </form>
    );
}

export default AddTodo;
