import React from 'react';
import css from './CategoryList.css';

import Category from '../Category/Category.jsx';

const CategoryList = (props) => {
  return (
    <div className="category-container">
      {props.categories.map((category) => {
        return <Category data={category} />;
      })}
    </div>
  );
};

export default CategoryList;
