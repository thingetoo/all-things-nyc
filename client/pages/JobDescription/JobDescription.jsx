import React from 'react';

const JobDescription = (props) => {
  return (
    <div>
      <img />
      <div>Title</div>
      <div>Job id</div>
      <div>Agency</div>
      <div>Career Level</div>
      {/* Have to account for the different salary ranges: some are hourly and some are annual */}
      <div>Salary</div>
      <div>Job Description</div>
      <div>Requirements</div>
      <div>Prefered skills</div>
      <div>Additional info</div>
      <div>to apply</div>
      <div>residency req</div>
      <div>Posting date</div>
      <div>Post until</div>
      <div>Posting Updated</div>
    </div>
  );
};

export default JobDescription;
