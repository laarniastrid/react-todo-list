import { useState } from 'react';
import "./App.scss";

import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

import Todo from './interfaces/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: Date.now() - 3, text: 'Wash dishes', done: false },
    { id: Date.now() - 2, text: 'Do laundry', done: false },
    { id: Date.now() - 1, text: 'Take shower', done: false },
  ]);

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>

      <div className="content">
        <AddTodo setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
