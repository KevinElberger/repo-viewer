import React, { Component } from 'react';
import './searchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.onSubmit && typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(this.state.value);
    }
  }

  render() {
    return (
      <div className="search">
        <form action="" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Search for a GitHub user"
            value={this.state.value}
            onChange={this.handleChange} 
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;