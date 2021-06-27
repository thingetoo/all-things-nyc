import React, { useState, useEffect } from 'react';
import css from './CategoryList.css';

import Category from '../Category/Category.jsx';

const CategoryList = (props) => {
  const [categories, setCategories] = useState([]);
  const [catsLoaded, setCatsLoaded] = useState(false);

  const getUnqiueCategories = () => {
    const categories = {};
    props.jobs.map((cat) => {
      if (!categories[cat.job_category]) {
        categories[cat.job_category] = 1;
      } else {
        categories[cat.job_category]++;
      }
    });
    setCategories(Object.entries(categories));
  };

  useEffect(() => {
    if (!categories.length) {
      getUnqiueCategories();
    }
  }, [categories]);

  return (
    <div className="category-container">
      <div>Job Categories</div>
      <div className="cat-list">
        {categories &&
          categories.map((category, idx) => {
            return <Category key={'cat' + idx} data={category} />;
          })}
      </div>
    </div>
  );
};

export default CategoryList;
