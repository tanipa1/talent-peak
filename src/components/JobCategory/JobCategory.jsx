import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobCategory = () => {
    const jobCat = useLoaderData();
    console.log(jobCat);
    const {Jobs, title, img} = jobCat;
    return (
        <div>
            <h2>Name: {Jobs}</h2>
            <p>{title}</p>
        </div>
    );
};

export default JobCategory;