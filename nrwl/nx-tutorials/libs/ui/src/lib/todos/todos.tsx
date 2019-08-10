import React from 'react';
import { Todo } from '@nx-tutorials/data';

import './todos.css';

/* tslint:disable:no-empty-interface */
export interface TodosProps {
  todos: Todo[];
}

export const Todos = (props: TodosProps) => {
  return (
    <ul>
      {props.todos.map(t => (
        <li className={'todo'}>{t.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
