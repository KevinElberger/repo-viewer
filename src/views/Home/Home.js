import React, { Component } from 'react';
import './home.css';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';
import SearchForm from '../../components/SearchForm/SearchForm';
import ResultContainer from '../../components/ResultContainer/ResultContainer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(name) {
    this.setState({ loading: true });
    const apiRootUrl = 'https://api.github.com/users/';
    fetch(`${apiRootUrl}${name}/repos`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          console.log(data);
          this.setState({ loading: false, repos: data });
          this.props.resize();
        } else {
          this.setState({ loading: false });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const loading = this.state.loading;
    const hasData = this.state.repos.length > 0;

    return (
      <div className="home">
        <h1 className="title">Repo Viewer</h1>
        {
          loading ? <Loader /> : 
          hasData ? <ResultContainer repos={this.state.repos} /> : 
          <SearchForm onSubmit={this.handleSubmit} />
        }
        <Footer />
      </div>
    );
  }
}

export default Home;