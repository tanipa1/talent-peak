import React from 'react';
import SingleJobDetails from '../SingleJobDetails/SingleJobDetails';

const SingleJob = ({jobs}) => {
    console.log(jobs);
    return (
        <div>
            {
                jobs.map(job => 
                <SingleJobDetails
                    key={job.id}
                    job={job}
                ></SingleJobDetails>)
            }
        </div>
    );
};

export default SingleJob;