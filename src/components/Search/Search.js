import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
      <form>
       <input type="text" placeholder="Search for a repository" />
       <button type="submit">
        <i className="fa fa-search"></i>
       </button>
       </form>
      </div>
    );
  }
}

export default Search;