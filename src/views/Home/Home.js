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
    const apiUserUrl = 'https://api.github.com/users/';

    fetch(`${apiUserUrl}${user}/repos`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
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
    let preferredCommitDay = null;
    const apiEventsUrl = `https://api.github.com/users/${user}/events`;

    fetch(apiEventsUrl)
      .then((response) => response.json())
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

    return (
      <div className="home">
        <h1 className="title">Repo Viewer</h1>
        {
          loading ? <Loader /> : 
          hasData ? <ResultContainer data={this.state.data} /> : 
          <SearchForm onSubmit={this.handleSubmit} />
        }
        <Footer />
      </div>
    );
  }
}

export default Home;