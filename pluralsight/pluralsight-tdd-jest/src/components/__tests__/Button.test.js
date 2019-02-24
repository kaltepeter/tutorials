import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  let mountedButton;

  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });

  it('renders without crashing', () => {
    mountedButton = shallow(<Button />);
  });  

  it('renders a button', () => {
    const button = mountedButton.find('button');
    expect(button.length).toBe(1);
  });

  it('calls a callback when clicked', () => {
    const mockCallback = jest.fn();
    const mountedButtonWithCallback = shallow(<Button handleClick={mockCallback} />);
    mountedButtonWithCallback.find('button').simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});

describe('when the location is passed to it', () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: 'Location1'
    }
    mountedButton = shallow(<Button {...props} />);
  });

  it('displays the location', () => {
    const locName = mountedButton.find('.location-button');
    expect(locName.text()).toBe('Location1');
  });
});

describe('when the location is undefined', () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: undefined
    }
    mountedButton = shallow(<Button {...props} />);
  });

  it('displays the location', () => {
    const locName = mountedButton.find('.location-button');
    expect(locName.text()).toBe('All Locations');
  });
});