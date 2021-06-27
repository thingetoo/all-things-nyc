import React from 'react';
import css from './MainPage.css';
import JobList from '../../components/JobList/JobList.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';

const MainPage = (props) => {
  return (
    <div className="main-page-container">
      <JobList handleJobClick={props.handleJobClick} jobs={props.jobs} />
      <CategoryList jobs={props.jobs} />
    </div>
  );
};

export default MainPage;
