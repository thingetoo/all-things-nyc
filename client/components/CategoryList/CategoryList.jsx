// import React, { useState, useEffect } from 'react';
import React from 'react';
import css from './CategoryList.css';

import Category from '../Category/Category.jsx';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    this.getUnqiueCategories = this.getUnqiueCategories.bind(this);
  }

  getUnqiueCategories() {
    const categories = {};
    this.props.jobs.map((cat) => {
      if (!categories[cat.job_category]) {
        categories[cat.job_category] = 1;
      } else {
        categories[cat.job_category]++;
      }
    });
    this.setState({ categories: Object.entries(categories) });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.jobs !== this.props.jobs) {
      this.getUnqiueCategories();
    }
  }

  render() {
    return (
      <div className="category-container">
        <div>Job Categories</div>
        <div className="cat-list">
          {this.state.categories &&
            this.state.categories.map((category, idx) => {
              return <Category key={'cat' + idx} data={category} />;
            })}
        </div>
      </div>
    );
  }
}

// const CategoryList = (props) => {
//   const [categories, setCategories] = useState([]);
//   const [catsLoaded, setCatsLoaded] = useState(false);

//   const getUnqiueCategories = () => {
//     const categories = {};
//     props.jobs.map((cat) => {
//       if (!categories[cat.job_category]) {
//         categories[cat.job_category] = 1;
//       } else {
//         categories[cat.job_category]++;
//       }
//     });
//     setCategories(Object.entries(categories));
//   };

//   useEffect(() => {
//     if (!categories.length) {
//       getUnqiueCategories();
//     }
//   }, [categories]);

//   return (
//     <div className="category-container">
//       <div>Job Categories</div>
//       <div className="cat-list">
//         {categories &&
//           categories.map((category, idx) => {
//             return <Category key={'cat' + idx} data={category} />;
//           })}
//       </div>
//     </div>
//   );
// };

export default CategoryList;
