import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobCategory = () => {
    const jobCat = useLoaderData();
    console.log(jobCat);
    return (
        <div>
            
        </div>
    );
};

export default JobCategory;