import React from 'react';
import Job from '../Job/Job.jsx';
import css from './JobList.css';

const JobList = (props) => {
  return (
    <div className="job-container">
      {props.jobs &&
        props.jobs.map((job, idx) => {
          return <Job key={job.job_id + idx} info={job} />;
        })}
    </div>
  );
};

export default JobList;
