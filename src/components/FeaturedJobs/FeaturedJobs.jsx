import React, { useState } from 'react';
import Jobs from '../Jobs/Jobs';
import './featuredJobs.css';

const FeaturedJobs = ({ featured }) => {

    return (
        <div className='featured'>
            <div className='featured-details'>
                <h2>Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='featured-jobs'>
                {
                    featured.map(jobs =>
                        <Jobs
                            key={jobs.id}
                            jobs={jobs}
                        ></Jobs>)
                }
            </div>
            <div className='all-btn'>
                <button className='see-all'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;