import React from 'react';
import css from './CategoryList.css';

import Category from '../Category/Category.jsx';

const CategoryList = (props) => {
  return (
    <div className="category-container">
      {props.jobs.map((job) => {
        console.log(job);
        return <Category key={job.job_id + job.job_category} data={job} />;
      })}
    </div>
  );
};

export default CategoryList;
