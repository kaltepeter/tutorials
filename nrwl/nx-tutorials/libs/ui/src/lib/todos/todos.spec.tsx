import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Todos from './todos';

describe(' Todos', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Todos />);
    expect(baseElement).toBeTruthy();
  });
});
