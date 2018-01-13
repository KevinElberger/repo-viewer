import React, { Component } from 'react';
import './resultcontainer.css';
import Result from '../Result/Result';

class ResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      data: this.props.data
    };
  }

  componentWillMount() {
    const avatar = this.state.data.repos[0].owner.avatar_url;
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
        biggestSize,
        totalCommits: this.state.data.totalCommits
      }
    });
  }

  getRepoWithMostIssues() {
    const maxIssueCount = this.getHighestPropertyValue('open_issues');
    const repoWithMostIssues = this.state.data.repos.find((repo) => {
      return Number(repo.open_issues) === maxIssueCount;
    });

    return repoWithMostIssues;
  }

  getRepoWithMostStars() {
    const highestStarCount = this.getHighestPropertyValue('stargazers_count');
    const repoWithMostStars = this.state.data.repos.find((repo) => {
      return Number(repo.stargazers_count) === highestStarCount;
    });

    return repoWithMostStars;
  }

  getRepoWithMostRecentDate() {
    const oneDay = 86400000;
    const today = new Date();
    const mostRecent = new Date(Math.max.apply(null, this.state.data.repos.map((repo) => {
      return new Date(repo.pushed_at);
    })));
    const repo = this.state.data.repos.find((repo) => {
      return new Date(repo.pushed_at).getTime() === mostRecent.getTime();
    });
    const daysAgo = Math.floor((today - mostRecent) / oneDay);

    return {
      repo,
      daysAgo,
      mostRecent
    };
  }

  getRepoWithLargestSize() {
    const nextByteSize = 1024;
    const biggestSize = this.getHighestPropertyValue('size');
    const repoWithLargestSize = this.state.data.repos.find((repo) => {
      return Number(repo.size) === biggestSize;
    });
    const megaBytes = Number((biggestSize / nextByteSize).toFixed(0));
    const gigaBytes = Number((megaBytes / nextByteSize).toFixed(0)); 
    let type = 'KB';
    let size = biggestSize;

    if (gigaBytes > 1) {
      type = 'GB';
      size = gigaBytes;
    } else if (megaBytes > 1) {
      type = 'MB';
      size = megaBytes;
    }

    return {
      size,
      type,
      repoWithLargestSize
    };
  }

  getHighestPropertyValue(property) {
    return Math.max.apply(Math, this.state.data.repos.map((repo) => {
      return repo[property];
    }));
  }

  render() {
    return <Result data={this.state.result} />;
  }
}

export default ResultContainer;