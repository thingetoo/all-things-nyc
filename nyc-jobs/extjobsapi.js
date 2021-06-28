const axios = require('axios');

module.exports = {
  nycJobs: function (cb) {
    axios
      .get('https://data.cityofnewyork.us/resource/kpav-sd4t.json?$limit=16')
      .then((response) => {
        cb(response.data);
      })
      .catch((err) => {
        cb(err);
      });
  },
  getJobByKeyWord: function (keyword, cb) {
    const query =
      `https://data.cityofnewyork.us/resource/kpav-sd4t.json?$query=SELECT * WHERE job_category LIKE '\%` +
      keyword +
      `\%'`;
    console.log(query);
    axios
      .get(query)
      .then((response) => {
        console.log(response.data);
        cb(response.data);
      })
      .catch((err) => {
        cb(err);
      });
  },
};
