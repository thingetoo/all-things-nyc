import React from 'react';
import JobList from '../../components/JobList/JobList.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';

const MainPage = (props) => {
  return (
    <div>
      <JobList jobs={props.jobs} />
      <CategoryList />
    </div>
  );
};

export default MainPage;
