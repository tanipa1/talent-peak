import React from 'react';

const Jobs = ({jobs}) => {
    const {post, company, img, jobType, category, salary, location} = jobs;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Jobs;