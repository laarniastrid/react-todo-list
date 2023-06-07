import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import TodoList from './TodoList';
import Todo from '../../interfaces/todo';

describe('Todo List', () => {
    it('should render component with empty message', () => {
        const todos: Todo[] = [];
        const setTodos = jest.fn();

        render(
            <TodoList todos={todos} setTodos={setTodos} />
        );

        const emptyMessage = screen.getByText('No todos left!');
        expect(emptyMessage).toBeTruthy();
    });

    it('should render todo items and handles toggleTodo function', () => {
        const todos: Todo[] = [
            { id: 1, text: '1st todo', done: false },
            { id: 2, text: '2nd todo', done: true },
        ];
        const setTodos = jest.fn();

        render(
            <TodoList todos={todos} setTodos={setTodos} />
        );

        const first = screen.getByText('1st todo');
        const second = screen.getByText('2nd todo');

        expect(first).toBeInTheDocument();
        expect(second).toBeInTheDocument();
        expect(second).toHaveStyle('text-decoration: line-through');


        const updatedTodos: Todo[] = [
            { id: 1, text: '1st todo', done: true },
            { id: 2, text: '2nd todo', done: true },
        ];

        fireEvent.click(first);

        expect(setTodos).toHaveBeenCalledWith(updatedTodos);
    });
});
