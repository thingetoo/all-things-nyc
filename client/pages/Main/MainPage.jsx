import React from 'react';
import css from './MainPage.css';
import JobList from '../../components/JobList/JobList.jsx';
import CategoryList from '../../components/CategoryList/CategoryList.jsx';

const MainPage = (props) => {
  return (
    <div className="main-page-container">
      <JobList currentKeyword={props.currentKeyword} handleJobClick={props.handleJobClick} jobs={props.jobs} />
      <CategoryList handleCategoryClick={props.handleCategoryClick} jobs={props.jobs} />
    </div>
  );
};

export default MainPage;
