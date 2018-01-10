import React, { Component } from 'react';
import './result.css';

class Result extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const avatar = this.props.repos[0].owner.avatar_url;

    return (
      <div className="result">
        <div className="avatar">
          <img src={avatar} />
        </div>
      </div>
    );
  }
}

export default Result;