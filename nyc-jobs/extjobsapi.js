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
  getDistinctJobCategories: function (cb) {
    axios
      .get(
        'https://data.cityofnewyork.us/resource/kpav-sd4t.json?$query=SELECT distinct(job_category)' // will need to hook this up to backend route
      ).then(res => {
        cb(res.data)
      }).catch(err => {
        cb(err)
      })
  },
  getJobByKeyWord: function (keyword, cb) {

    const query =
      'https://data.cityofnewyork.us/resource/kpav-sd4t.json?$query= SELECT * WHERE job_category LIKE "%25' +
      keyword +
      '%25" LIMIT 16';

    axios
      .get(query)
      .then((response) => {
        cb(response.data);
      })
      .catch((err) => {
        console.log(err);
        cb(err);
      });
  },
};
