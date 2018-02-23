import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the developed by message', () => {
    const wrapper = shallow(<Footer />);
    const message = <p className="small">
    Developed By Kevin Elberger  
</p>;
    expect(wrapper.contains(message)).toEqual(true);
  });

  it('renders the github icon', () => {
    const wrapper = shallow(<Footer />);
    const icon = <i className="fa fa-github"></i>;
    expect(wrapper.contains(icon)).toEqual(true);
  });
});