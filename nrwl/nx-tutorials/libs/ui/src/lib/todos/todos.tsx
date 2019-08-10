import React from 'react';

import './todos.css';

/* tslint:disable:no-empty-interface */
export interface TodosProps {}

export const Todos = (props: TodosProps) => {
  return (
    <div>
      <h1>Welcome to todos component!</h1>
    </div>
  );
};

export default Todos;
