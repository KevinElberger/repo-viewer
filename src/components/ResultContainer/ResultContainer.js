import React, { Component } from 'react';
import './resultcontainer.css';
import Result from '../Result/Result';

class ResultContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      result: null,
      data: this.props.repos
    };
  }

  componentWillMount() {
    const avatar = this.state.data[0].owner.avatar_url;
    const mostIssues = this.getRepoWithMostIssues();
    const mostStars = this.getRepoWithMostStars();
    const mostRecent = this.getRepoWithMostRecentDate();
    const biggestSize = this.getRepoWithLargestSize();


    this.setState({
      result: {
        avatar,
        mostIssues,
        mostStars,
        mostRecent,
        biggestSize
      }
    });
  }

  getRepoWithMostIssues() {
    const maxIssueCount = this.getHighestPropertyValue('open_issues');
    const repoWithMostIssues = this.state.data.find((repo) => {
      return Number(repo.open_issues) === maxIssueCount;
    });

    return repoWithMostIssues;
  }

  getRepoWithMostStars() {
    const highestStarCount = this.getHighestPropertyValue('stargazers_count');
    const repoWithMostStars = this.state.data.find((repo) => {
      return Number(repo.stargazers_count) === highestStarCount;
    });

    return repoWithMostStars;
  }

  getRepoWithMostRecentDate() {
    return new Date(Math.max.apply(null, this.state.data.map((repo) => {
      return new Date(repo.updated_at);
    })));
  }

  getRepoWithLargestSize() {
    const biggestSize = this.getHighestPropertyValue('size');
    const repoWithLargestSize = this.state.data.find((repo) => {
      return Number(repo.size) === biggestSize;
    });

    return repoWithLargestSize;
  }

  getHighestPropertyValue(property) {
    return Math.max.apply(Math, this.state.data.map((repo) => {
      return repo[property];
    }));
  }

  render() {
    return <Result data={this.state.result} />;
  }
}

export default ResultContainer;