import React from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import Apply from '../Apply/Apply';

const AppliedJobs = () => {
    const applied = getShoppingCart();
    const jobData = useLoaderData();
    const appliedJobs = []

    for (const id in applied) {
        const apply = jobData.find(job => job.id == id)
        appliedJobs.push(apply);
    }
    return (
        <div className='mt-12  grid justify-center'>
            <div className='grid gap-6'>
                {
                    appliedJobs.map(applyJob => <Apply
                        key={applyJob.id}
                        applyJob={applyJob}
                    ></Apply>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;