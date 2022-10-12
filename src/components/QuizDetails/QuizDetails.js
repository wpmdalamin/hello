import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizDetails = () => {
    const quizedetails = useLoaderData()
    const quizedetailsdata = quizedetails.data;
    const {id, name, total, logo, questions} = quizedetailsdata;

    return (
        <div className='pt-8 grid grid-cols-3 '>
            <div className="p-3 flex flex-col justify-center border-r-2 col-span-2">
                <img className='w-64 m-auto' src={logo} alt="Quizs logo" />
                <h2 className='text-3xl pt-7'>All {name} Quiz</h2>
                <h4 className='text-1xl'>Total Quizs {total}</h4>
                {
                    questions.map(question => <QuizQuestion
                    key={id}
                    question={question}
                    ></QuizQuestion>)
                }
            </div>
            <div className="Result ">
                <h3>Your Result</h3>
            </div>
        </div>
    );
};

export default QuizDetails;