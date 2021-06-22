import React from 'react';

const Job = (props) => {
  return (
    <div>
      <img />
      <div>Title</div>
      <div>Job id</div>
      <div>Agency</div>
      <div>Career Level</div>
      {/* Have to account for the different salary ranges: some are hourly and some are annual */}
      <div>Work location</div>
      <div>Salary</div>
    </div>
  );
};

export default Job;
