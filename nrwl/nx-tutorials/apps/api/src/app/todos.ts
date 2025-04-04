import { Express } from 'express';
import { Todo } from '@nx-tutorials/data';

const todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

export const addTodoRoutes = (app: Express) => {
  app.get('/api/todos', (req, resp) => resp.send(todos));
  app.post('/api/addTodo', (req, resp) => {
    const newTodo = {
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    };
    todos.push(newTodo);
    resp.send(newTodo);
  });
};
