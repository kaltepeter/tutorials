import React from 'react';
import {shallow} from 'enzyme';
import StoreLocator from '../StoreLocator';
import axios from 'axios';
import renderer from 'react-test-renderer';

describe('StoreLocator', () => {
  let mountedStoreLocator;

  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<StoreLocator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
  });

  it('calls axios.get in #componentDidMount', () => {
    return mountedStoreLocator.instance().componentDidMount().then(() =>{
      expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
    });
  });

  it('updates with api data', () => {
    return mountedStoreLocator.instance().componentDidMount().then(() =>{
      expect(mountedStoreLocator.state()).toHaveProperty('shops', 
        [{
          "location": 'test location', 
          "address": 'test address'
        }]
      );
    });
  });

  it('renders the header', () => {
    const header = mountedStoreLocator.find('Header');
    expect(header.length).toBe(1);
  });

  it('renders two buttons', () => {
    return mountedStoreLocator.instance().componentDidMount().then(() =>{
      const buttons = mountedStoreLocator.find('Button');
      expect(buttons.length).toBe(1);
    });
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
