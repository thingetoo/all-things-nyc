import React from 'react';
import axios from 'axios';
import MainPage from './MainPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  getData() {
    axios
      .get('/api/jobs')
      .then((response) => {
        console.log(response);
        console.log(parse(response));
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
        <MainPage />
      </div>
    );
  }
}

export default App;
