import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
  it('renders without crashing', () => {
    shallow(<Loader />);
  });

  it('renders an svg element', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('svg').length).toEqual(1);
  });

  it('renders a circle element', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('circle').length).toEqual(1);
  });
});