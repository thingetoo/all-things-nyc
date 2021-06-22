import React from 'react';
import JobList from '../../components/JobList/JobList.jsx';

const MainPage = (props) => {
  return (
    <div>
      <JobList jobs={props.jobs} />
    </div>
  );
};

export default MainPage;
