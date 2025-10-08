import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import AppsDataHomePage from '../AppsDataHome/AppsDataHomePage';

const Home = () => {
    const Data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <AppsDataHomePage Data={Data}></AppsDataHomePage>
        </div>
    );
};

export default Home;