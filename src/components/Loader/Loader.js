import React, { Component } from 'react';
import './loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="loaderContainer">
        <div class="loader">
          <svg class="circular" viewBox="25 25 50 50">
            <circle 
              class="path" cx="50" cy="50" r="20" fill="none" 
              stroke-width="2" stroke-miterlimit="10"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Loader;