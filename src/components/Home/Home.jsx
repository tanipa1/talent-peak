import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import './Home.css';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const jobCat = useLoaderData();
    const [category, setCategory] = useState();
    // const [featured, setFeatured] = useState([false]);
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, [])

    const handleShowAll = () =>{
        setFeatured(false);
    }
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
                <div>
                    <div>
                        <FeaturedJobs
                            featured={featured}
                            handleShowAll={handleShowAll}
                            setFeatured={setFeatured}
                        ></FeaturedJobs>
                    </div>
                </div>
                <div className='all-btn'>
                    <button onClick={() => handleShowAll()} className='see-all'>See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Home;