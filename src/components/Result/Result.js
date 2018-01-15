import React, { Component } from 'react';
import StatPanel from '../StatPanel/StatPanel';
import CountUp from 'react-countup';
import './result.css';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  componentWillMount() {
    const avatar = this.props.data.avatar;
    const profileUrl = this.props.data.profileUrl;
    const mostStars = {
      panelName: 'most-starred',
      resultText: 'Most Starred',
      footerText: 'Stars',
      detailName: 'most-starred-detail',
      link: this.props.data.mostStars.svn_url,
      detailTitle: this.props.data.mostStars.name,
      panelNumber: this.props.data.mostStars.stargazers_count,
      description: 
        `This is your most starred repository! 
        Stars show appreciation to the repository maintainer for their work.
        You should be proud.`
    };
    const mostRecent = {
      panelName: 'most-recent',
      resultText: 'Most Recent',
      footerText: 'Days Ago',
      detailName: 'most-recent-detail',
      link: this.props.data.mostRecent.repo.svn_url,
      detailTitle: this.props.data.mostRecent.repo.name,
      panelNumber: this.props.data.mostRecent.daysAgo,
      description:
        `This is your repository you most recently made a commit to!
        Try to keep this number low and keep working on cool stuff.`
    };
    const biggestSize = {
      panelName: 'largest-size',
      resultText: 'Largest Size',
      detailName: 'largest-size-detail',
      link: this.props.data.biggestSize.repoWithLargestSize.svn_url,
      detailTitle: this.props.data.biggestSize.repoWithLargestSize.name,
      footerText: this.props.data.biggestSize.type,
      panelNumber: this.props.data.biggestSize.size,
      description: 
        `This is your largest repository (in terms of file size).
        Bigger doesn't always mean better!`
    };
    const mostIssues = {
      panelName: 'most-issues',
      resultText: 'Most Issues',
      footerText: 'Open Issues',
      detailName: 'most-issues-detail',
      link: this.props.data.mostIssues.svn_url,
      detailTitle: this.props.data.mostIssues.name,
      panelNumber: this.props.data.mostIssues.open_issues,
      description:
        `This is your repository with the most open issues!
        Hopefully this number is at zero!`
    };

    this.setState({
      data: {
        avatar,
        profileUrl,
        mostStars,
        mostRecent,
        biggestSize,
        mostIssues
      }
    });    
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="result">
        <div className="avatar">
          <a href={this.state.data.profileUrl} target="_blank">
            <img src={this.state.data.avatar} alt="avatar" />
          </a>
        </div>
        <div className="row">
          <StatPanel data={this.state.data.mostStars} />
          <StatPanel data={this.state.data.mostRecent} />
          <StatPanel data={this.state.data.biggestSize} />
          <StatPanel data={this.state.data.mostIssues} />
        </div>

        <div className="row">
          <div className="row-wrap">
            <p className="commit-msg-header">
              You've made
            </p>
            <h1 className="total-commits">
              <CountUp
                start={0}
                end={Number(this.props.data.totalCommits)}
                duration={1.5}
              />
            </h1>
            <p className="commit-msg-footer">
              Commits in the past 90 days!
            </p>
          </div>
          <div className="row-wrap"></div>
        </div>
      </div>
    );
  }
}

export default Result;