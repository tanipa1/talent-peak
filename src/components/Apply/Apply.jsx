import React from 'react';
import './Apply.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'

const Apply = (applyJob) => {
    return (
        <div className='py-4 gap-2 border px-4 flex justify-between items-center'>
            <div>
                <img className='' width={200} src={applyJob.applyJob.CompanyLogo} alt="" />
            </div>
            <div>
                <h4 className='text-xl'>{applyJob.applyJob.Jobpost}</h4>
                <p className='text-base mt-2'>{<h4>{applyJob.applyJob.place}</h4>}</p>
                <div className='flex mt-2 gap-3'>
                    <p className='border-solid border-2 border-violet-400 w-[80px] h-[40px] text-center pt-2 rounded-lg text-purple-400'>{applyJob.applyJob.RemoteJob}</p>
                    <p className='border-solid border-2 border-violet-400 w-[80px] h-[40px] text-center pt-2 rounded-lg text-purple-400'>{applyJob.applyJob.FulltimeJob}</p>
                </div>
                <div className='flex mt-3'>
                    <div className="text-gray-500 mr-4"><FontAwesomeIcon icon={faLocationDot} />{applyJob.applyJob.location}</div>
                    <div className="text-gray-500"><FontAwesomeIcon icon={faDollar} />{applyJob.applyJob.salary}</div>
                </div>
            </div>
            <div className='ms-72'>
                <button className=' nav-btn btn-sm btn-color border-0 rounded px-0 py-1'>View Details</button>
            </div>
        </div>
    );
};

export default Apply;