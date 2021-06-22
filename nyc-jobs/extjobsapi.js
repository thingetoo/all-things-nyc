const axios = require('axios');

const nycJobs = (cb) => {
  axios
    .get('https://data.cityofnewyork.us/resource/kpav-sd4t.json?$limit=10')
    .then((response) => {
      cb(response);
    })
    .catch((err) => {
      cb(err);
    });
};

module.exports = nycJobs;
