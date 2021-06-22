import React, { useState, useEffect } from 'react';

const Category = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {}, [categories]);

  return <div>{props.data.job_category}</div>;
};

export default Category;
