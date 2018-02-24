import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result';
import resultProps from '../../__mocks__/resultProps';

describe('Result', () => {
  it('renders without crashing', () => {
    shallow(<Result data={resultProps} />);
  });

  it('renders the correct elements', () => {
    const wrapper = shallow(<Result data={resultProps} />);

    expect(wrapper.find('.avatar').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('.commit-msg-footer').length).toEqual(1);
  });

  it('renders the correct profile URL and image URL', () => {
    const wrapper = shallow(<Result data={resultProps} />);
    const avatar = <a href={resultProps.profileUrl} target="_blank">
    <img src={resultProps.avatar} alt="avatar" />
  </a>;

    expect(wrapper.contains(avatar)).toEqual(true);
  });
});