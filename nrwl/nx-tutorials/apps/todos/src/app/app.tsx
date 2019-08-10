import React, { useState } from 'react';

import './app.css';

interface Todo {
  title: string;
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Todo 1' },
    { title: 'Todo 2' }
  ]);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        title: `New todo ${Math.floor(Math.random() * 1000)}`
      }
    ]);
  };

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map(t => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;
