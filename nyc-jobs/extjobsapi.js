import axios from 'axios';

export const nycJobs = () => {
  axios
    .get('https://data.cityofnewyork.us/resource/kpav-sd4t.json')
    .then((response) => response);
};
