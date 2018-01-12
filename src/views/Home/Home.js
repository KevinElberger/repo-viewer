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

  handleSubmit(user) {
    this.setState({ loading: true });
    this.getRepoList(user);
  }

  getRepoList(user) {
    const apiRootUrl = 'https://api.github.com/users/';

    fetch(`${apiRootUrl}${user}/repos`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          console.log(data);
          //this.calculateRepoStatistics(user, data);
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

  calculateRepoStatistics(user, repoList) {
    let totalCommits = 0;
    let preferredCommitDay = null;
    const apiRootUrl = `https://api.github.com/users/${user}/events`;

    // TODO: Get semi-accurate count of total commits
    /*
    fetch(apiRootUrl)
      .then((response) => response.json())
      .then((events) => {
        // Filter event.type set to PushEvent
        // Filter commits that match username
      })
    */
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