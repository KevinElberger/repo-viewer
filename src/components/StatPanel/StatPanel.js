import React, { Component } from 'react';
import CountUp from 'react-countup';
import './statPanel.css';

class StatPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const detailClassName = this.state.active ? 
      `${this.props.detailName} detail active` : 
      `${this.props.detailName} detail`;

    return (
      <div className={this.props.panelName} onClick={this.handleClick}>
        <div className="panel-wrap">
          <p className="result-text">
            {this.props.resultText}
          </p>
          <div className="wrap">
            <figure className="chart" data-percent="100">
              <svg width="120" height="120">
                <circle 
                    className="outer"
                    cx="130" 
                    cy="60" 
                    r="40" 
                    transform="rotate(-90, 95, 95)"
                />
              </svg>
            </figure>
            <p className="stat">
              <CountUp
                start={0}
                end={Number(this.props.panelNumber)}
                duration={1.5}
              />
            </p>
          </div>
          <p className="result-footer-text">
            {this.props.footerText}
          </p>
        </div>
        <div className={detailClassName}>
          <p className="detail-title">
            {this.props.detailTitle}
          </p>
          <div className="detail-stats">
            <a href={this.props.link} target="_blank">
              <i className="fa fa-github-alt repo-github" aria-hidden="true"></i>
            </a>
          </div>
          <p className="detail-description">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

export default StatPanel;