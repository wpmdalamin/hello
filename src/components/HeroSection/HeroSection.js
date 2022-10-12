import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    
    return (
        <div className='py-20 bg-slate-700 sm:px-3'>
            <h1 className='text-5xl my-3 text-white'>Md Quiz <span className='text-orange-600'>Let's Try </span>One Time</h1>
            <p className='my-3 text-white'>Md Quiz Let's Try One Time.Md Quiz Let's Try One TimeMd Quiz Let's Try One TimeMd Quiz Let's Try One Time</p>
            <div>
                <Link to="/statistic">
                    <button className='text-2xl text-bold bg-slate-100 py-2 px-6 rounded m-2'>Statistics</button>
                </Link>
                <Link to="/blog">
                    <button className='text-2xl text-bold bg-slate-100 py-2 px-6 rounded m-2'>Blog</button>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;