import React, { useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import './Home.css';

const Home = () => {
    const jobCat = useLoaderData();
    const [category, setCategory] = useState();
    return (
        <div>
            <div>
                <Header></Header>
                {/* Job Category */}
                <div className='job-category'>
                    <h2>Job Category List</h2>
                    <p className='describe'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div className='categories'>
                    {
                        jobCat.map(category =>
                            <JobCategory
                                key={category.id}
                                category={category}
                            ></JobCategory>)
                    }
                    </div>
                </div>

                {/* Featured Job */}
                
            </div>
        </div>
    );
};

export default Home;