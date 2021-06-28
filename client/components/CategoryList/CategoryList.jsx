// import React, { useState, useEffect } from 'react';
import React from 'react';
import css from './CategoryList.css';
import axios from 'axios';

import Category from '../Category/Category.jsx';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    // this.getUnqiueCategories = this.getUnqiueCategories.bind(this);
    this.getJobKeywords = this.getJobKeywords.bind(this);
  }

  // getUnqiueCategories() {
  //   const categories = {};
  //   this.props.jobs.map((cat) => {
  //     if (!categories[cat.job_category]) {
  //       categories[cat.job_category] = 1;
  //     } else {
  //       categories[cat.job_category]++;
  //     }
  //   });
  //   this.setState({ categories: Object.entries(categories) });
  // }

  getJobKeywords() {
    axios
      .get(
        'https://data.cityofnewyork.us/resource/kpav-sd4t.json?$query=SELECT distinct(job_category)' // will need to hook this up to backend route
      )
      .then((res) => {
        var ref = {};
        // loop over response
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i]['job_category_1']) {
            // for each string at job_category
            // split by space
            var split = res.data[i].job_category_1.split(' ');
            // iterate over array
            for (var j = 0; j < split.length; j++) {
              // currentWord = current word split on comma, index 0
              // currentWord = c
              var current =
                split[j][split[j].length - 1] === ','
                  ? split[j].substring(0, split[j].length - 1)
                  : split[j];
              // if ref does not contain currentWord
              if (current === '&') continue;
              if (!ref[current]) {
                // ref at current word equals 1
                ref[current] = 1;
              } else {
                // else, ref[currentWord] ++
                ref[current]++;
              }
            }
          }
        }
        this.setState({
          categories: Object.entries(ref),
        });
      })
      .catch((err) => {
        console.log('err!', err);
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.jobs !== this.props.jobs) {
      // this.getUnqiueCategories();
      this.getJobKeywords();
    }
  }

  render() {
    return (
      <div className="category-container">
        <div>Job Keywords</div>
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
