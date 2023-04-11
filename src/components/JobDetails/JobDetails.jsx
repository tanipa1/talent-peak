import React, { useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';

const JobDetails = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div>
                <h1>job details</h1>
                <SingleJob
                    jobs={jobs}
                ></SingleJob>
            </div>
        </div>
    );
};

export default JobDetails;