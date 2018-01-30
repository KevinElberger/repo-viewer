import React, { Component } from 'react';
import './home.css';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';
import SearchForm from '../../components/SearchForm/SearchForm';
import ResultContainer from '../../components/ResultContainer/ResultContainer';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(user) {
    this.setState({ loading: true });
    this.getApiData(user);
  }

  getApiData(user) {
    const API_USER_REPO_URL = `https://api.github.com/users/${user}/repos`;

    fetch(API_USER_REPO_URL)
      .then(response => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          this.calculateRepoStatistics(user, data);
        } else {
          this.setState({ loading: false });
        }
      })
      .catch((error) => console.log(error));
  }

  calculateRepoStatistics(user, repoList) {
    const API_EVENTS_URL = `https://api.github.com/users/${user}/events`;

    fetch(API_EVENTS_URL)
      .then(response => response.json())
      .then((events) => {
        this.setState({
          loading: false,
          data: {
            repos: repoList,
            totalCommits: this.getTotalCommits(user, events)
          }
        });
        this.props.resize();
      })
      .catch((error) => console.log(error));
  }

  getTotalCommits(user, events) {
    let totalCommits = 0;

    const pushEvents = events.filter((event) => {
      return event.type === 'PushEvent';
    })
    .filter((pushEvent) => {
      return pushEvent.actor.login.toLowerCase() === user.toLowerCase();
    });
    
    pushEvents.forEach((event) => {
      totalCommits += event.payload.commits.length;
    });

    return totalCommits;
  }

  render() {
    const loading = this.state.loading;
    const hasData = Object.keys(this.state.data).length > 0;
    const result = <ResultContainer data={this.state.data} />;
    const search = <SearchForm onSubmit={this.handleSubmit} />;
    const renderedComponent = loading ? <Loader /> : hasData ? result : search;

    return (
      <div className="home">
        <div className="title-wrapper">
          <a href="/" className="title-link">
            <h1 className="title">Repo Viewer</h1>
          </a>
        </div>
        { renderedComponent }
        <Footer />
      </div>
    );
  }
}