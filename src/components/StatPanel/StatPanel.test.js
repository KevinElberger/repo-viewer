import React from 'react';
import { shallow } from 'enzyme';
import StatPanel from './StatPanel';

describe('StatPanel', () => {
  it('renders without crashing', () => {
    shallow(<StatPanel />);
  });

  it('initializes with the correct state', () => {
    const wrapper = shallow(<StatPanel />);
    expect(wrapper.state().active).toEqual(false);
  });

  describe('handleClick', () => {
    it('should toggle the active state property', () => {
      const wrapper = shallow(<StatPanel />);
      const instance = wrapper.instance();

      expect(wrapper.state().active).toEqual(false);
      instance.handleClick();
      expect(wrapper.state().active).toEqual(true);
    });
  });
});