import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/md-quiz.png';

const Header = () => {
    return (
        <div className='px-5 grid grid-cols-2 justify-between items-center bg-sky-100'>
            <div className="logo-area">
                <Link to="/home">
                    <img className='w-48' src={logo} alt="md alamin quiz" />
                </Link>
            </div>
            <nav className="text-right">
                <Link className='p-3 text-xl' to='/home'>Home</Link>
                <Link className='p-3 text-xl' to='/statistic'>Statistics</Link>
                <Link className='p-3 text-xl' to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;