import React from 'react';
import css from './CategoryList.css';

import Category from '../Category/Category.jsx';

const CategoryList = (props) => {
  return (
    <div className="category-container">
      {props.jobs.map((job, idx) => {
        return <Category key={idx + job.job_id} data={job} />;
      })}
    </div>
  );
};

export default CategoryList;
