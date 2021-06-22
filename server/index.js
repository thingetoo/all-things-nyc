const express = require('express');
const app = express();
const path = require('path');
const jobsData = require('../nyc-jobs/extjobsapi.js');

const { parse, stringify } = require('flatted');

const port = 3000;

app.use(express.static(path.join(__dirname, '..')));

app.get('/api', (req, res) => {
  res.send('Your server is online and serving!');
});

app.get('/api/jobs', (req, res) => {
  jobsData((data) => {
    res.json(data.data);
  });
});

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});
