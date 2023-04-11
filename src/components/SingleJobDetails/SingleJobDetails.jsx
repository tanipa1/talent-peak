import React from 'react';

const SingleJobDetails = ({job}) => {
    console.log(job);
    const {id, post} = job;
    return (
        <div>
            <h1>Name:{post}</h1>
        </div>
    );
};

export default SingleJobDetails;