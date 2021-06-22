import React, { useState, useEffect } from 'react';

const Category = (props) => {
  return <div>{props.data[0] + '(' + props.data[1] + ')'}</div>;
};

export default Category;
