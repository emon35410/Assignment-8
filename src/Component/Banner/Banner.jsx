import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import BannerImg from "../../assets/hero.png"

const Banner = () => {
    return (
        <>
            {/* Image part */}
            <div>
                <div>
                    <h1 className='text-center text-4xl font-semibold mt-3'>We build</h1>
                    <h1 className='text-center text-4xl font-semibold my-3 '><span className='text-[#632ee3]'>Productive</span> Apps</h1>
                    <p className='text-center max-w-2/3 mx-auto mb-3 text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact</p>
                </div>
                <div className="flex justify-center items-center gap-4 mb-4">

                    <a
                        href="https://play.google.com/store/games?hl=en"
                        className="flex items-center gap-3 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition">
                        <IoLogoGooglePlaystore className="w-6 h-6" />
                        <div className="text-left">
                            <p className="font-semibold text-sm">Google Play</p>
                        </div>
                    </a>

                    <a
                        href="https://www.apple.com/app-store/"
                        className="flex items-center gap-3 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition">
                        <FaAppStoreIos className="w-6 h-6" />
                        <div className="text-left">
                            <p className="font-semibold text-sm">App Store</p>
                        </div>
                    </a>
                </div>
                <div className='max-w-2/3 mx-auto mt-3'>
                    <img src={BannerImg} alt="" />
                </div>

            </div>

            {/* Written part */}
            <div className='py-15 bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)] text-white'>
                <h1 className='text-center font-semibold text-3xl'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row justify-around items-center mx-20 mt-5'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <h1 className='text-[#e8e4e46b]'>Total Downloads</h1>
                        <span className='text-7xl font-bold'>29.6M</span>
                        <h1 className='text-[#e8e4e46b]'>21% more than last month</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <h1 className='text-[#e8e4e46b]'>Total Revies</h1>
                        <span className='text-7xl font-bold'>906K</span>
                        <h1 className='text-[#e8e4e46b]'>46% more than last month</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <h1 className='text-[#e8e4e46b]'>Active Apps</h1>
                        <span className='text-7xl font-bold'>132+</span>
                        <h1 className='text-[#e8e4e46b]'>31 more will Launch</h1>
                    </div>
                </div>
            </div>

           
           
        </>

    );
};

export default Banner;