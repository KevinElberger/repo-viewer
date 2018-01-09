import React, { Component } from 'react';
import Route from './components/Routes/Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div className="container">
          <Route />
        </div>
      </div>
    );
  }
}

export default App;
