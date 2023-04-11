import React from 'react';
import Jobs from '../Jobs/Jobs';

const AllJobs = ({featured}) => {
    return (
        <div>
            {
                featured.map(jobs =>
                    <Jobs
                        key={jobs.id}
                        jobs={jobs}
                    ></Jobs>)
            }
        </div>
    );
};

export default AllJobs;