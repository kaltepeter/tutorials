import React from 'react';
import {shallow} from 'enzyme';
import StoreLocator from '../StoreLocator';

describe('StoreLocator', () => {
  let mountedStoreLocator;

  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it('renders without crashing', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
  });

  it('renders the header', () => {
    const header = mountedStoreLocator.find('Header');
    expect(header.length).toBe(1);
  });

  it('renders two buttons', () => {
    const buttons = mountedStoreLocator.find('Button');
    expect(buttons.length).toBe(3);
  });

  it('renders the map', () => {
    const map = mountedStoreLocator.find('Map');
    expect(map.length).toBe(1);
  });
  
});

describe('ChooseMap', () => {
  it('updates this.state.currentMap when the location is passed to it', () => {
    const mountedStoreLocator = shallow(<StoreLocator />);
    const mockEvent = {target: {value: 'testland'}};
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
  });
});
