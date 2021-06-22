import React from 'react';
import axios from 'axios';
import MainPage from '../pages/Main/MainPage.jsx';
import AboutPage from '../pages/About/About.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      page: 'main',
    };
    this.getData = this.getData.bind(this);
    this.currentPage = this.currentPage.bind(this);
    this.toAboutPage = this.toAboutPage.bind(this);
    this.toMainPage = this.toMainPage.bind(this);
  }

  getData() {
    axios
      .get('/api/jobs')
      .then((response) => {
        this.setState({
          jobs: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getData();
  }

  currentPage() {
    const { page } = this.state;
    if (page === 'main') {
      return <MainPage jobs={this.state.jobs} />;
    } else if (page === 'about') {
      return <AboutPage />;
    }
  }

  toAboutPage() {
    this.setState({
      page: 'about',
    });
  }
  toMainPage() {
    this.setState({
      page: 'main',
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toAboutPage}>About</button>
        <button onClick={this.toMainPage}>Main</button>
        <div>{this.currentPage()}</div>
      </div>
    );
  }
}

export default App;
