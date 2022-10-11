import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const { data } = useLoaderData()
    const { name, questions } = data
    // console.log(questions);


    return (
        <div>
            {/* quiz title sections */}
            <section>
                <h1 className='mt-10 text-center text-4xl font-bold'>Quiz Page of <span className='italic text-5xl text-blue-400'>{name}</span></h1>
            </section>

            {/* Quiz Details  */}
            <section className='mt-10 text-center'>
                <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='border border-red-400 md:col-span-2'>
                        {
                            questions.map((qs, index) => <QuizDetails key={qs.id} index={index} qs={qs}></QuizDetails>)
                        }
                    </div>
                    <div className='text-start border border-lime-400'>
                        <div>
                            <h1 className='mt-5 text-center text-4xl font-bold text-blue-400 italic mb-2'>Result</h1>
                            <hr className='bg-black w-[80%] mx-auto' />
                        </div>
                        <div className='mt-5 ml-6 mb-3'>
                            <p>Right Ans: 8</p>
                            <p>Wrong Ans: 1</p>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Quiz;