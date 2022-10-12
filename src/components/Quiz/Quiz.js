import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
const {id, name, logo, total} = quiz;
    return (
        <div className='border border-slate-400 m-3 rounded bg-neutral-500'>
            <img src={logo} alt="" />
            <div className='bg-amber-800 p-3 flex flex-row items-center justify-between text-slate-200'>
                <h3>{name}</h3>
                <p> Total Q: {total}</p>
                <Link to={`/quiz/${id}`}><button className='bg-violet-800 px-3 py-2 rounded'>Start Quiz</button></Link>
            </div>
        </div>
    );
};

export default Quiz;