import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should have the correct state', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().resize).toBe(false);
});

it('should have the correct number of divs', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div').length).toBe(2);
});

it('should have the div with the container classname', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.container').length).toBe(1);
});

it('should have the container-expand class if resize is true', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ resize: true });
  expect(wrapper.find('.expand').length).toBe(1);
});