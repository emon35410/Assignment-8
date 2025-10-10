import React, { useEffect, useState } from 'react';
import AppsInstalled from './AppsInstalled';

const InstalledApps = () => {
    const [installed, setInstalled] = useState([])
    const [Order, setOrder] = useState('none')

    const sortItem = (
        () => {
        if (Order === 'size-asc') {
            return [...installed].sort((a, b) => a.size - b.size)
        }
        else if (Order === 'size-desc') {
            return [...installed].sort((a, b) => b.size - a.size)
        }
        
        else {
            return installed
        }
    }
    )()

    
    useEffect(() => {
        const saveInstalled = JSON.parse(localStorage.getItem("Installed"))
        if (saveInstalled) setInstalled(saveInstalled)
    }, [])
    return (
        <div>
            <div className='text-center my-15'>
                <h1 className='font-bold text-4xl'>Your Installed Apps</h1>
                <p className='mt-5 text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between mx-5 md:mx-10 mb-5'>
                <h1 className='font-bold text-2xl'>{installed.length} Apps Found</h1>
                <select className='md:px-2 md:py-1 px-1  bg-[#d2d2d2]' value={Order} onChange={e => setOrder(e.target.value)}>
                    <option value="none">Sort by Default</option>
                    <option value="size-asc">Sort by Low to Size</option>
                    <option value="size-desc">Sort by High to Low</option>
                    
                </select>
            </div>
            <div className='space-y-4'>
                {
                    sortItem.map((app, index) => <AppsInstalled installed={installed} setInstalled={setInstalled} key={index} app={app}></AppsInstalled>)
                }
            </div>
        </div>
    );
};

export default InstalledApps;