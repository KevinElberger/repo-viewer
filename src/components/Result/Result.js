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
    const mostStars = {
      panelName: 'most-starred',
      resultText: 'Most Starred',
      footerText: 'Stars',
      panelNumber: this.props.data.mostStars.stargazers_count
    };
    const mostRecent = {
      panelName: 'most-recent',
      resultText: 'Most Recent',
      footerText: 'Days Ago',
      panelNumber: this.props.data.mostRecent.daysAgo
    };
    const biggestSize = {
      panelName: 'largest-size',
      resultText: 'Largest Size',
      footerText: this.props.data.biggestSize.type,
      panelNumber: this.props.data.biggestSize.size
    };
    const mostIssues = {
      panelName: 'most-issues',
      resultText: 'Most Issues',
      footerText: 'Open Issues',
      panelNumber: this.props.data.mostIssues.open_issues
    };

    this.setState({
      data: {
        avatar,
        mostStars,
        mostRecent,
        biggestSize,
        mostIssues
      }
    });    
  }

  render() {
    return (
      <div className="result">
        <div className="avatar">
          <img src={this.state.data.avatar} alt="avatar" />
        </div>
        <div className="row">
          <StatPanel data={this.state.data.mostStars} />
          <StatPanel data={this.state.data.mostRecent} />
          <StatPanel data={this.state.data.biggestSize} />
          <StatPanel data={this.state.data.mostIssues} />
        </div>

        <div className="row">

        </div>
      </div>
    );
  }
}

export default Result;