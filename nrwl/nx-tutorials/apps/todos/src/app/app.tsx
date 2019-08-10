import React, { useState, useEffect } from 'react';

import './app.css';

interface Todo {
  title: string;
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'Todo 1' },
    { title: 'Todo 2' }
  ]);

  useEffect(() => {
    fetch('/api/todos')
      .then(_ => _.json())
      .then(setTodos);
  }, []);

  const addTodo = () => {
    fetch('/api/addTodo', {
      method: 'POST',
      body: ''
    })
      .then(_ => _.json())
      .then(newTodo => {
        setTodos([...todos, newTodo]);
      });
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
