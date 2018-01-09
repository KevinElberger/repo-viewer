import React, { Component } from 'react';
import './home.css';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="home">
        <h1 className="title">Repo Viewer</h1>
        <div className="search">
          <form action="" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search for a repository" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;