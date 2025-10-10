import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import AppsData20 from './AppsData20';
import apperrorImg from "../../assets/App-Error.png"

const AppDataAppsPage = () => {
    const Data = useLoaderData();
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApp = term ? Data.filter(app => app.title.toLocaleLowerCase().includes(term)) : Data
    

    return (
        <div>

            <div className='text-center mt-20 mb-10'>
                <h1 className='text-4xl font-bold mb-4'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center mb-8 mx-8'>
                <h1 className='font-semibold text-2xl'>({searchedApp.length}) Apps Found</h1>

                <input value={search} onChange={(e) => setSearch(e.target.value)} className='md:w-50  w-30  px-7 py-2 rounded-2xl border border-gray-300 
                   shadow-sm placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500
                   text-sm md:text-base transition" ' type="search" placeholder='search apps' name="" id="" />

            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mx-8 my-5  hover:cursor-pointer'>
                <Suspense fallback={<div className="flex justify-center items-center h-60 space-x-1">
                    <div className="w-2 h-6 bg-purple-500 animate-[bounce_1s_infinite]" />
                    <div className="w-2 h-6 bg-purple-500 animate-[bounce_1s_infinite_0.2s]" />
                    <div className="w-2 h-6 bg-purple-500 animate-[bounce_1s_infinite_0.4s]" />
                    <div className="w-2 h-6 bg-purple-500 animate-[bounce_1s_infinite_0.6s]" />
                </div>
                }>
                    { searchedApp.length > 0 ? (
                        searchedApp.map(data => <AppsData20 key={data.id} data={data} />)
                    ) : (
                        <div className="col-span-full flex flex-col justify-center items-center text-center py-10">
                            <div>
                                <img src={apperrorImg} alt="" />
                            </div>
                            <div>
                                <h1 className='font-semibold text-3xl mt-3'>OPPS!! APP NOT FOUND</h1>
                                <p className='text-[#627382] mt-3'>The App you are requesting is not found on our system.  please try another apps</p>
                            </div>
                        </div>
                    )}
                </Suspense>
            </div>
        </div>

    );
};

export default AppDataAppsPage;