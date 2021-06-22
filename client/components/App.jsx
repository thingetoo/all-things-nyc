import React from 'react';
import Cats from './Cats.jsx';
import axios from 'axios';
const { parse, stringify } = require('flatted');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this);
  }

  getData() {
    axios.get('/api/jobs')
    .then(response => {
      console.log(response)
      console.log(parse(response))
    })
    .catch(err => {
      console.log(err)
    }
      )
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div>
        <h1>App.js is connected and working!</h1>
        <Cats />
      </div>
    )
  }
}

export default App;