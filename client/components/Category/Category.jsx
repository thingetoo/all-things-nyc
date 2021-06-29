import React, { useState, useEffect } from 'react';
import css from './Category.css';

class Category extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div onClick={() => this.props.handleCategoryClick(this.props.data[0])} className="each-cat">{this.props.data[0]}</div>
    );
  }
};

export default Category;
