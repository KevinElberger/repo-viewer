import React, { Component } from 'react';
import CountUp from 'react-countup';
import './statPanel.css';

class StatPanel extends Component {
    render() {
      return (
        <div className={this.props.data.panelName}>
          <p className="result-text">
            {this.props.data.resultText}
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
                end={Number(this.props.data.panelNumber)}
                duration={1.5}
              />
            </p>
          </div>
          <p className="result-footer-text">
          {this.props.data.footerText}
          </p>
          <div className="most-starred-details">
          Lorem ipsum dolor blah blah blah.
          </div>
        </div>
      );
    }
}

export default StatPanel;