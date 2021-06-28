import React, { useState, useEffect } from 'react';
import css from './Category.css';

const Category = (props) => {
  return (
    <div className="each-cat">{props.data[0] + '(' + props.data[1] + ')'}</div>
  );
};

export default Category;
