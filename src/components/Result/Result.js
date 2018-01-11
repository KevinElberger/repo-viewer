import React, { Component } from 'react';
import CountUp from 'react-countup';
import './result.css';

class Result extends Component {
  render() {
    const avatar = this.props.data.avatar;
    const mostStars = this.props.data.mostStars;
    const mostRecent = this.props.data.mostRecent;
    const biggestSize = this.props.data.biggestSize;
    const mostIssues = this.props.data.mostIssues;

    return (
      <div className="result">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="row">
          <div className="most-starred">
            <p className="result-text">
              Most Starred
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
                  end={Number(mostStars.stargazers_count)}
                  duration={1.5}
                />
              </p>
            </div>
            <p className="result-footer-text">
              Stars
            </p>
          </div>
          <div className="most-recent">
            <p className="result-text">
              Most Recently Active
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
                    end={Number(mostRecent.daysAgo)}
                    duration={1.5}
                />
              </p>
            </div>
            <p className="result-footer-text">
              Days Ago
            </p>
          </div>

          <div className="largest-size">
            <p className="result-text">
              Largest Size
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
                  end={Number(biggestSize.size)}
                  duration={1.5}
                />
              </p>
            </div>
            <p className="result-footer-text">
              {biggestSize.type}
            </p>
          </div>
          <div className="most-issues">
            <p className="result-text">
              Most Issues
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
                    end={Number(mostIssues.open_issues)}
                    duration={1.5}
                />
              </p>
            </div>
            <p className="result-footer-text">
              Open Issues
            </p>
          </div>
        </div>

        <div className="row">

        </div>
      </div>
    );
  }
}

export default Result;