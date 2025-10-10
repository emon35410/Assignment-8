import React from 'react';
import { Link } from 'react-router';

const AppsData20 = ({ data }) => {
    const { image, title, downloads, ratingAvg,id } = data
    return (

        <Link to={`/AppDetails/${id}`}>
            <div className="transform transition-transform duration-500
                    hover:-translate-y-2 rounded-2xl shadow-md border bg-white p-3 flex flex-col items-center">
                <div className="w-full h-50 rounded-xl mb-3">
                    <img className='w-full h-50' src={image} alt="" />
                </div>

                <h2 className="text-sm font-semibold text-slate-800 mb-3 text-center">
                    {title}
                </h2>

                <div className="flex justify-between w-full px-2">
                    <div className="flex items-center gap-1 bg-green-50 text-green-600 text-xs font-medium px-2 py-1 rounded-md">
                        <span>⬇️</span>
                        <span>{downloads}</span>
                    </div>

                    <div className="flex items-center gap-1 bg-orange-50 text-orange-500 text-xs font-medium px-2 py-1 rounded-md">
                        <span>⭐</span>
                        <span>{ratingAvg}</span>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default AppsData20;