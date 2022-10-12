import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
    const quizs = useLoaderData();
    const quizsData = quizs.data;
    return (
        <div>
            <div className="w-full">
                <HeroSection></HeroSection>
            </div>

            <div className='grid lg:grid-cols-4 my-4 md:grid-cols-3 sm:grid-cols-1 sm:mx-3 '>

                {
                    quizsData.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                    ></Quiz>)
                }

            </div>
        </div>
    );
};

export default Home;