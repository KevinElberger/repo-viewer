import React, { Component } from 'react';
import './home.css';
import Search from '../../components/Search/Search';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1 className="title">Repo Viewer</h1>
          <Search />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;