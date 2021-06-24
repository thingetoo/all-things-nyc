const express = require('express');
const app = express();
const path = require('path');
const jobsData = require('../nyc-jobs/extjobsapi.js');
// const models = require('../database/index.js')
const { User, Job } = require('../database/index.js')

const { addUser } = require('../database/controllers/helperFunctions.js')


const { parse, stringify } = require('flatted');

const port = 3000;

app.use(express.static(path.join(__dirname, '..')));
app.use(express.json())

app.get('/api', (req, res) => {
  res.send('Your server is online and serving!');
});

app.get('/api/jobs', (req, res) => {
  jobsData((data) => {
    res.json(data.data);
  });
});

app.post('/api/user', (req, res) => {
  console.log('made it to app.post: ', req.body)
addUser(req.body, (err, data) => {
  if (err) {
    console.log('error in posting new user: ', err)
  } else {
    res.send(data)
  }
})
})


User.sync().then(() => {
  console.log('go check the shell')
  app.listen(port, () => {
    console.log(`Server listening at localhost:${port}!`);
  });
})