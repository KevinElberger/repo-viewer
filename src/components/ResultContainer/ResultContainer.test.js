import React from 'react';
import { shallow } from 'enzyme';
import ResultContainer from './ResultContainer';
import user from '../../__mocks__/user';

const props = {
  repos: user,
  totalCommits: 39,
};

describe('Resultcontainer', () => {
  it('renders without crashing', () => {
    shallow(<ResultContainer data={props} />);
  });

  it('should set the correct state', () => {
    const wrapper = shallow(<ResultContainer data={props} />);

    expect(Object.keys(wrapper.state()).length).toEqual(1);
    expect(Object.keys(wrapper.state().data).length).toEqual(7);
  });

  describe('getRepoWithMostRecentCommit', () => {
    it('should return the correct values', () => {
      const wrapper = shallow(<ResultContainer data={props} />);
      const instance = wrapper.instance();
      const pushDate = new Date('2018-02-22T00:42:01.000Z');
      const repo = props.repos.find(repo => repo.name === 'repo-viewer');

      expect(instance.getRepoWithMostRecentCommit().daysAgo).toEqual(2);
      expect(instance.getRepoWithMostRecentCommit().mostRecentPush).toEqual(pushDate);
      expect(instance.getRepoWithMostRecentCommit().repo).toEqual(repo);
    });
  });

  describe('getRepoWithLargestSize', () => {
    it('should return the correct values', () => {
      const wrapper = shallow(<ResultContainer data={props} />);
      const instance = wrapper.instance();
      const repo = props.repos.find(repo => repo.name === 'material-design-icons');

      expect(instance.getRepoWithLargestSize().type).toEqual('MB');
      expect(instance.getRepoWithLargestSize().size).toEqual(37);
      expect(instance.getRepoWithLargestSize().repoWithLargestSize).toEqual(repo);
    });
  });

  describe('getRepoWithHighestValue', () => {
    it('should return undefined if not given a string', () => {
      const wrapper = shallow(<ResultContainer data={props} />);
      const instance = wrapper.instance();

      expect(instance.getRepoWithHighestValue()).toEqual(undefined);
    });

    it('should return the correct values when given the correct string', () => {
      const wrapper = shallow(<ResultContainer data={props} />);
      const instance = wrapper.instance();
      const largestRepo = instance.getRepoWithLargestSize().repoWithLargestSize;

      expect(instance.getRepoWithHighestValue('size')).toEqual(largestRepo);
    });
  });
});