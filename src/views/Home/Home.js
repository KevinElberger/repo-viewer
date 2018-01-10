import React, { Component } from 'react';
import './home.css';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';
import SearchForm from '../../components/SearchForm/SearchForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    this.setState({ loading: true });
    const apiRootUrl = 'https://api.github.com/search/repositories?q=';
    fetch(`${apiRootUrl}${value}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //this.setState({ loading: false, repos: response.json() });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const loading = this.state.loading;

    return (
      <div className="home">
        <h1 className="title">Repo Viewer</h1>
        {loading ? <Loader /> : <SearchForm onSubmit={this.handleSubmit} />}
        <Footer />
      </div>
    );
  }
}

export default Home;