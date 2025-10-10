import React from 'react';
import { MdFileDownload } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

const AppsInstalled = ({ app, setInstalled, installed }) => {
    const handleUnInstalled = (id) => {
        const updatedList = installed.filter(p => p.id !== id);
        setInstalled(updatedList);
        localStorage.setItem('Installed', JSON.stringify(updatedList));
    };

    return (
        <div className='flex flex-col md:flex-row justify-between items-center border-1 rounded-2xl px-10 py-5 mb-5 shadow-md bg-[#FFFFFF] mx-10'>
            <div className='flex items-center'>
                <div>
                    <img width={90} height={90} src={app.image} alt="" />
                </div>
                <div className='ml-4'>
                    <h1>{app.title}</h1>
                    <div className='flex gap-3 items-center'>
                        <div className='mt-3 flex items-center gap-1 text-green-600'>
                            <MdFileDownload />
                            <span>{app.downloads}</span>
                        </div>
                        <div className='flex items-center mt-3 text-[#ff8811]'>
                            <IoIosStar />
                            <span>{app.ratingAvg}</span>
                        </div>
                        <div className='mt-3'>
                            <p className='text-[#627382]'> {app.size} MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <button
                    onClick={() => handleUnInstalled(app.id)}
                    className='px-4 py-3 bg-[#00D390] text-white font-semibold rounded-2xl hover:cursor-pointer'>
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default AppsInstalled;
