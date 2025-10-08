import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const Banner = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-semibold mt-3'>We build</h1>
                <h1 className='text-center text-4xl font-semibold my-3 '><span className='text-[#632ee3]'>Productive</span> Apps</h1>
                <p className='text-center max-w-2/3 mx-auto mb-3 text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact</p>
            </div>
            <div className='flex justify-center items-center gap-5 mb-4'>
                <a className='py-3 px-7 flex justify-center items-center gap-3 bg-[#e2e0e0] font-medium' href="https://play.google.com/store/games?hl=en"><IoLogoGooglePlaystore></IoLogoGooglePlaystore> Google Play</a>
                <a className='py-3 px-7 flex justify-center items-center gap-3 bg-[#e2e0e0] font-medium' href="https://www.apple.com/app-store/"><FaAppStoreIos></FaAppStoreIos> App Store</a>
            </div>
        </div>
    );
};

export default Banner;