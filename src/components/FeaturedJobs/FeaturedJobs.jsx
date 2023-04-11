import React, { useState } from 'react';
import Jobs from '../Jobs/Jobs';

const FeaturedJobs = ({featured}) => {

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

export default FeaturedJobs;