import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import user from '../../__mocks__/user';
import events from '../../__mocks__/events';

const fetchMock = require('fetch-mock');

// Return user data for user fetch request
fetchMock.get('https://api.github.com/users/KevinElberger/repos', user);
fetchMock.get('https://api.github.com/users/KevinElberger/events', events);

describe('Home', () => {
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

  describe('getApiData', () => {
    it('should return data when getApiData is called with a username', () => {
      const wrapper = shallow(<Home resize={function(){}} />);
      const instance = wrapper.instance();

      instance.getApiData('KevinElberger').then((data) => {
        instance.calculateRepoStatistics('KevinElberger', data).then(() => {
          expect(Object.keys(instance.state.data.repos).length).toEqual(13);
        });
      });
    });

    it('should set loading to false after obtaining data', () => {
      const wrapper = shallow(<Home resize={function(){}} />);
      const instance = wrapper.instance();

      instance.getApiData('KevinElberger').then((data) => {
        instance.calculateRepoStatistics('KevinElberger', data).then(() => {
          expect(instance.state.loading).toEqual(false);
        });
      });
    });
  });

  describe('getTotalCommits', () => {
    it('should return 0 if given no events', () => {
      const wrapper = shallow(<Home />);
      const instance = wrapper.instance();

      expect(instance.getTotalCommits('KevinElberger', [])).toEqual(0);
    });

    it('should return the correct number of commits', () => {
      const wrapper = shallow(<Home />);
      const instance = wrapper.instance();

      expect(instance.getTotalCommits('KevinElberger', events)).toEqual(42);
    });
  });
});