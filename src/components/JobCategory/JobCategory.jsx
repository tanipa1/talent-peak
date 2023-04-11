import React from 'react';
import './JobCategory.css';

const JobCategory = ({category}) => {
    const {img, Jobs, title} = category;

    return (
        <div>
            <div className='category'>
                <img src={img} alt="" />
                <h5>{Jobs}</h5>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default JobCategory;