import React from 'react';
import axios from 'axios';
import MainPage from '../pages/Main/MainPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);

    this.state = {
      jobs: [],
    };
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

  render() {
    return (
      <div>
        <MainPage jobs={this.state.jobs} />
      </div>
    );
  }
}

export default App;
