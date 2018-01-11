import React, { Component } from 'react';
import './result.css';

class Result extends Component {
  render() {
    const avatar = this.props.data.avatar;

    return (
      <div className="result">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="row">
          <div className="most-starred">
            <div className="wrap">
              <figure className="chart" data-percent="100">
                <svg width="120" height="120">
                  <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%"   stopColor="#fc00ff"/>
                      <stop offset="100%" stopColor="#00dbde"/>
                    </linearGradient>
                  </defs>
                  <circle 
                      className="outer"
                      stroke="url(#linear)" 
                      cx="130" 
                      cy="60" 
                      r="40" 
                      transform="rotate(-90, 95, 95)"
                  />
                </svg>
              </figure>
            </div>
            <p className="result-text">
              Most Starred
            </p>
          </div>
          <div className="most-recent">
            <div className="wrap">
              <figure className="chart" data-percent="100">
                <svg width="120" height="120">
                <circle 
                    className="outer"
                    stroke="url(#linear)" 
                    cx="130" 
                    cy="60" 
                    r="40" 
                    transform="rotate(-90, 95, 95)"
                />
                </svg>
              </figure>
            </div>
            <p className="result-text">
              Most Recent
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