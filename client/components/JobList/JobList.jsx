import React from 'react';
import Job from '../Job/Job.jsx';
import css from './JobList.css';

class JobList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      jobKeyword: this.props.currentKeyword
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentKeyword !== this.props.currentKeyword) {
      this.setState({
        jobKeyword: this.props.currentKeyword
      })
    }
  }
  render() {
    return (
      <div className="job-container">
        {this.props.jobs &&
          this.props.jobs.map((job, idx) => {
            return (
              <Job
                handleJobClick={this.props.handleJobClick}
                key={job.job_id + idx}
                info={job}
              />
            );
          })}
      </div>
    )
  }
};

export default JobList;
