import React, { Suspense } from 'react';

import Apps1Data from './Apps1Data';
import { Link } from 'react-router';

const AppsDataHomePage = ({ Data }) => {

    return (
        <div>
            <div className='mt-10'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-4'>Trending Apps</h1>
                    <p className='text-[#627382] mb-5'>Explore All Trending Apps on the Market developed by us</p>
                </div>

            </div>

            <Suspense>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mx-8 my-5'>
                    {
                        Data.map(data => <Apps1Data data={data}></Apps1Data>)
                    }
                </div>
            </Suspense>
            <div className="flex justify-center">
                <Link to="/app">
                    <h1 className="inline-block bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] 
                   text-white py-2 px-5 my-6 rounded-md">
                        Show All
                    </h1>
                </Link>
            </div>

        </div>
    );
};

export default AppsDataHomePage;