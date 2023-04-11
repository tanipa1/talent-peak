import React, { useState } from 'react';
import Jobs from '../Jobs/Jobs';
import './featuredJobs.css';
import AllJobs from '../AllJobs/AllJobs';

const FeaturedJobs = ({ featured, handleShowAll }) => {
console.log(handleShowAll);

    return (
        <div className='featured'>
            <div className='featured-details'>
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='featured-jobs'>
                {
                    handleShowAll ? 
                        (featured.slice(0, 4).map(jobs =>
                            <Jobs
                                key={jobs.id}
                                jobs={jobs}
                            ></Jobs>))
                        : <AllJobs featured={featured}></AllJobs>
                }
            </div>

        </div>
    );
};

export default FeaturedJobs;