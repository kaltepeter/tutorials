import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Ui from './ui';

describe(' Ui', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruthy();
  });
});
