import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import DeleteTodo from './DeleteTodo';

describe('Delete Todo', () => {
    it('should render delete button', () => {
        const todo = { id: 1, text: 'todo', done: false };
        const setTodos = jest.fn();

        render(
            <DeleteTodo todo={todo} setTodos={setTodos} />
        );

        const deleteButton = screen.getByText('X');

        expect(deleteButton).toBeInTheDocument();
    });

    it('should call handleDeleteTodo and update todos on click', () => {
        const todo = { id: 1, text: 'todo', done: false };
        const setTodos = jest.fn();
        const confirmMock = jest.spyOn(window, 'confirm');

        confirmMock.mockImplementationOnce(() => true);

        render(
            <DeleteTodo todo={todo} setTodos={setTodos} />
        );

        const deleteButton = screen.getByText('X');

        fireEvent.click(deleteButton);

        expect(setTodos).toHaveBeenCalledWith(expect.arrayContaining([]));
        expect(confirmMock).toHaveBeenCalled();
        expect(confirmMock).toHaveBeenCalledWith('Do you want to delete this item?');

        confirmMock.mockRestore();
    });

    it('should not update todos when delete button is cancelled', () => {
        const todo = { id: 1, text: 'todo', done: false };
        const setTodos = jest.fn();
        const confirmMock = jest.spyOn(window, 'confirm');

        confirmMock.mockImplementationOnce(() => false);

        render(
            <DeleteTodo todo={todo} setTodos={setTodos} />
        );

        const deleteButton = screen.getByText('X');

        fireEvent.click(deleteButton);

        expect(confirmMock).toHaveBeenCalled();
        expect(confirmMock).toHaveBeenCalledWith('Do you want to delete this item?');
    });
});
