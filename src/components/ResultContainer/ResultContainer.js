import React, { Component } from 'react';
import './resultcontainer.css';
import Result from '../Result/Result';

class ResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    this.setState({
      data: {
        avatar: this.props.data.repos[0].owner.avatar_url,
        profileUrl: this.props.data.repos[0].owner.html_url,
        mostIssues: this.getRepoWithHighestValue('open_issues'),
        mostStars: this.getRepoWithHighestValue('stargazers_count'),
        mostRecent: this.getRepoWithMostRecentCommit(),
        biggestSize: this.getRepoWithLargestSize(),
        totalCommits: this.props.data.totalCommits
      }
    });
  }

  getRepoWithMostRecentCommit() {
    const oneDay = 86400000;
    const today = new Date();
    const mostRecentPush = new Date(Math.max.apply(null, this.props.data.repos.map((repo) => {
      return new Date(repo.pushed_at);
    })));
    const repo = this.props.data.repos.find((repo) => {
      return new Date(repo.pushed_at).getTime() === mostRecentPush.getTime();
    });
    const daysAgo = Math.floor((today - mostRecentPush) / oneDay);

    return {
      repo,
      daysAgo,
      mostRecentPush
    };
  }

  getRepoWithLargestSize() {
    const nextByteSize = 1024;
    const repoWithLargestSize = this.getRepoWithHighestValue('size');
    console.log(repoWithLargestSize);
    const megaBytes = Number((repoWithLargestSize.size / nextByteSize).toFixed(0));
    const gigaBytes = Number((megaBytes / nextByteSize).toFixed(0)); 
    let type = 'KB';
    let size = repoWithLargestSize.size;

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

  getRepoWithHighestValue(property) {
    const highestValue = Math.max.apply(Math, this.props.data.repos.map((repo) => {
      return repo[property];
    }));
    return this.props.data.repos.find((repo) => {
      return Number(repo[property]) === highestValue;
    });
  }

  render() {
    return <Result data={this.state.data} />;
  }
}

export default ResultContainer;