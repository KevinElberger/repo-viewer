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
          console.log('repos: \n' + data);
          this.calculateRepoStatistics(user, data);
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

    // TODO: Get semi-accurate count of total commits from past 90 days

    fetch(apiRootUrl)
      .then((response) => response.json())
      .then((events) => {
        // Filter commits that match username
        const pushEvents = events.filter((event) => {
          return event.type === 'PushEvent';
        });
      })
      .catch((error) => console.log(error));

      /*
        this.setState({ loading: false, repos: data });
        this.props.resize();
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