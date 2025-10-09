import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import AppsData20 from './AppsData20';

const AppDataAppsPage = () => {
    const Data = useLoaderData();
    return (
        <div>

            <div className='text-center mt-20 mb-10'>
                <h1 className='text-4xl font-bold mb-4'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center mb-8 mx-8'>
                <h1 className='font-semibold text-2xl'>({Data.length}) Apps Found</h1>
                <input className='md:w-50 w-30 px-2 py-2 rounded-lg border border-gray-300   ' type="search" placeholder='search apps' name="" id="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mx-8 my-5  hover:cursor-pointer'>
                <Suspense>
                    {
                        Data.map(data => <AppsData20 data={data}></AppsData20>)
                    }
                </Suspense>
            </div>
        </div>

    );
};

export default AppDataAppsPage;