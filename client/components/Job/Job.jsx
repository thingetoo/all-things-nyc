import React from 'react';
import css from './Job.css';

const Job = (props) => {
  return (
    <div className="single-job">
      <img />
      <div className="job-title">{props.info.business_title.toLowerCase()}</div>
      <div>{props.info.agency}</div>
      <div>{props.info.career_level}</div>
      {/* Have to account for the different salary ranges: some are hourly and some are annual */}
      <div>{props.info.work_location}</div>
    </div>
  );
};

export default Job;
