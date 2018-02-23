import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('renders without crashing', () => {
    shallow(<SearchForm />);
  });

  it('renders the correct form elements', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('intiializes with the correct state', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.state().value).toEqual('');
  });

  describe('handleChange', () => {
    it('should set the correct state when given a value', () => {
      const wrapper = shallow(<SearchForm />);
      const instance = wrapper.instance();

      expect(wrapper.state().value).toEqual('');
      instance.handleChange({ target: { value: 'test' } });
      expect(wrapper.state().value).toEqual('test');
    });
  });
});