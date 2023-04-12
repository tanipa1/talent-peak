import React from 'react';
import './Apply.css';

const Apply = (applyJob) => {
    return (
        <div className='py-4 gap-2 border px-4 flex justify-between items-center'>
            <div>
                <img className='' width={200} src={applyJob.applyJob.CompanyLogo} alt="" />
            </div>
            <div>
                <h4>{applyJob.applyJob.Jobpost}</h4>
                <p>{<h4>{applyJob.applyJob.place}</h4>}</p>
                <div>
                    <button>{applyJob.applyJob.RemoteJob}</button>
                    <button>{applyJob.applyJob.FulltimeJob}</button>
                </div>
                <div>
                    <div>
                        <p>{applyJob.applyJob.location}</p>
                    </div>
                    <div>
                        <p>{applyJob.applyJob.salary}</p>
                    </div>
                </div>
            </div>
            <div className='ms-72'>
                <button>View Details</button>
            </div>
        </div>
    );
};

export default Apply;