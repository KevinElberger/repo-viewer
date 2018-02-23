import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './Home';
import user from '../../__mocks__/user';

const fetchMock = require('fetch-mock');

// Return user data for any fetch request
fetchMock.get('*', user);

it('renders without crashing', () => {
  shallow(<Home />);
});

it('should initialize with the correct state', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.state().data).toEqual({});
  expect(wrapper.state().loading).toEqual(false);
});

it('should render the title', () => {
  const wrapper = shallow(<Home />);
  const title = <h1 className="title">Repo Viewer</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});

it()