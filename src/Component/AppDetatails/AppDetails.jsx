import React, { useEffect, useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaDownload, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {

    const data = useLoaderData()

    const { id,image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = data;
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(true)
        toast.success("Installed Succesful")
    }
    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem("Installed")) || [];
        const isInstalled = installedApps.some(app => app.id === id);
        if (isInstalled) setClick(true);
    }, [id]);
    const handleInstalled = () => {
        let UpdateList = []
        const existingList = JSON.parse(localStorage.getItem("Installed"))
        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === data.id)
            if (isDuplicate) {
                alert("this app already stored")
            }
            UpdateList = [...existingList, data] // remove const
        } else {
            UpdateList.push(data)
        }
        localStorage.setItem('Installed', JSON.stringify(UpdateList))
    }


    return (

        <>
            <ToastContainer></ToastContainer>
            {/* App details */}
            <div>
                <div className='flex md:flex-row flex-col items-center mx-5'>
                    <div className='mx-20 my-10 '>
                        <img width={350} height={350} src={image} alt="" />
                    </div>
                    <div>
                        <div className='mb-3'>
                            <h1 className='text-3xl mb-3'>{title}</h1>
                            <h1><span className='text-[#627382]'>Developed by</span> <span className=' font-semibold bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] bg-clip-text text-transparent'>{companyName}</span></h1>
                        </div>

                        <hr />
                        <div>
                            <div className='flex gap-12 mt-5 items-center'>
                                <div>
                                    <FaDownload></FaDownload>
                                    <h1 className='my-2 text-[16px] font-medium'>Downloads</h1>
                                    <h1 className='text-2xl font-bold'>{downloads}</h1>
                                </div>
                                <div>
                                    <FaStar></FaStar>
                                    <h1 className='my-2 text-[16px] font-medium'>Average Ratings</h1>
                                    <h1 className='text-2xl font-bold'>{ratingAvg}</h1>
                                </div>
                                <div>
                                    <AiFillLike></AiFillLike>
                                    <h1 className='my-2 text-[16px] font-medium'>Total Reviews</h1>
                                    <h1 className='text-2xl font-bold'>{reviews}</h1>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <button disabled={click} onClick={() => {
                                    handleClick()
                                    handleInstalled()
                                }} className={`px-4 py-3 rounded-lg font-semibold text-white ${click ? "bg-[var(--Style,rgba(0,211,144,1))] cursor-not-allowed" : "bg-[var(--Style,rgba(0,211,144,1))] hover:cursor-pointer"}`}>
                                    {click ? "Installed" : `Install Now (${size})`}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr />

            {/* App review chart */}
            <div className='mx-10 space-y-3 my-5'>
                <h1 className='font-semibold text-3xl'>Rating</h1>
                <div className='bg-base-100 rounded-xl p-4 h-80'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={ratings}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#ff8811" />
                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </div>
            <hr />

            <div className='mx-15'>
                <h1 className='font-semibold text-2xl mb-4'>Description</h1>
                <p className='text-[#627382] mb-8'>{description}</p>
            </div>

        </>
    );
};

export default AppDetails;