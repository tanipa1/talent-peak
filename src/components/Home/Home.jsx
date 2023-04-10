import React from 'react';
import Header from '../Header/Header';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobCat = useLoaderData();
    console.log(jobCat);
    const {Jobs, title, img} = jobCat;
    return (
        <div>
            <div>
                <Header></Header>
                <h2>Name: {Jobs}</h2>
            <p>{title}</p>
            </div>
        </div>
    );
};

export default Home;