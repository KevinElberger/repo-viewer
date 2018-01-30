import React, { Component } from 'react';
import './App.css';
import Home from './views/Home/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resize: false
    };
    this.resize = this.resize.bind(this);
  }
 
  resize() {
    this.setState({
      resize: !this.state.resize
    });
  }

  render() {
    const resize = this.state.resize;

    return (
      <div id="app">
        <div className={resize ? 'container expand' : 'container'}>
          <Home resize={this.resize} />
        </div>
      </div>
    );
  }
}