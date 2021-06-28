import React from 'react';
import axios from 'axios';
import MainPage from '../pages/Main/MainPage.jsx';
import AboutPage from '../pages/About/About.jsx';
import JobDescription from '../pages/JobDescription/JobDescription.jsx';
import { auth, provider } from '../../firebaseConfig.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      page: 'main',
      currentJob: {},
    };
    this.getData = this.getData.bind(this);
    this.currentPage = this.currentPage.bind(this);
    this.toAboutPage = this.toAboutPage.bind(this);
    this.toMainPage = this.toMainPage.bind(this);
    this.toDescriptionPage = this.toDescriptionPage.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
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

  signIn() {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log('payload: ', payload);
      })
      .catch((err) => {
        console.log('error in auth: ', err);
      });
  }

  signOut() {
    auth.signOut().then(() => {
      console.log('signed out!');
      console.log(auth);
    });
  }

  createNewUser() {
    var obj = {
      firstName: 'Jordan',
      lastName: 'Hamsyyy',
      email: 'hamsyj@jmail.org',
    };

    axios
      .post('/api/user', obj)
      .then((res) => {
        console.log('successfully posted!', res.data);
      })
      .catch((err) => {
        console.log('err in posting', err);
      });
  }

  componentDidMount() {
    this.getData();
    this.createNewUser();
  }

  toDescriptionPage(e, jobInfo) {
    console.log({ e, jobInfo });
    this.setState({
      page: 'description',
      currentJob: jobInfo,
    });
  }

  currentPage() {
    const { page } = this.state;
    if (page === 'main') {
      return (
        <MainPage
          handleJobClick={this.toDescriptionPage}
          jobs={this.state.jobs}
        />
      );
    } else if (page === 'about') {
      return <AboutPage />;
    } else if (page === 'description') {
      return <JobDescription job={this.state.currentJob} />;
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
        <button onClick={this.signIn}>Sign In</button>
        <button onClick={this.signOut}>Sign Out</button>
        <button onClick={this.toAboutPage}>About</button>
        <button onClick={this.toMainPage}>Main</button>
        <div>{this.currentPage()}</div>
      </div>
    );
  }
}

export default App;
