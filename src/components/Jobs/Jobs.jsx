import React from 'react';
import './Jobs.css';

const Jobs = ({ jobs }) => {
    const { post, company, img, jobType, category, salary, location } = jobs;
    return (
        <div className='jobs'>
            <img src={img} alt="" />
            <h4>{post}</h4>
            <p>{company}</p>
            {/* button */}
            <div className='type'>
                <button className='type-btn'>{jobType}</button>
                <button className='type-btn'>{category}</button>
            </div>
            {/* loc, salary */}
            <div className='loc-sal'>
                <div className='location'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#757575" d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 7.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.462T12 4Q9.475 4 7.737 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35ZM12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Zm0-11.8Z" /></svg>
                    <p>{location}</p>
                </div>
                <div className='salary'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#757575" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm40-68a28 28 0 0 1-28 28h-4v8a8 8 0 0 1-16 0v-8h-16a8 8 0 0 1 0-16h36a12 12 0 0 0 0-24h-24a28 28 0 0 1 0-56h4v-8a8 8 0 0 1 16 0v8h16a8 8 0 0 1 0 16h-36a12 12 0 0 0 0 24h24a28 28 0 0 1 28 28Z"/></svg>
                    <p>Salary : {salary}</p>
                </div>
            </div>
            <button className='view-details'>View Details</button>
        </div>
    );
};

export default Jobs;