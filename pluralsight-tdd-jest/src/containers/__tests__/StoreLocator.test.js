import React from 'react';
import {shallow} from 'enzyme';
import StoreLocator from '../StoreLocator';

it('renders without crashing', () => {
  let mountedStoreLocator = shallow(<StoreLocator />);
});
