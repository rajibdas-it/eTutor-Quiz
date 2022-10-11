import { Card, Label, Radio } from 'flowbite-react';
import React from 'react';
import AnswerOptions from '../AnswerOptions/AnswerOptions';

const QuizDetails = ({ qs }) => {
    console.log(qs);
    const { id, question, correctAnswer, options } = qs;
    return (
        <Card href="#">
            <div className='flex flex-row justify-between items-center p-5'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                </button>
            </div>
            <div className='grid grid-cols-2 gap-4 shadow-lg p-5'>
                {
                    options.map(option => <AnswerOptions></AnswerOptions>)
                }

            </div>

        </Card>
    );
};

export default QuizDetails;