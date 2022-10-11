import { Card } from 'flowbite-react';
import React, { useState } from 'react';
import AnswerOptions from '../AnswerOptions/AnswerOptions';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

const QuizDetails = ({ qs, index }) => {
    // console.log(qs);
    const [rightAns, setRightAns] = useState(0)
    const [wrongAns, setWrongAns] = useState(0)

    const { id, question, correctAnswer, options } = qs;

    const handleShowAns = (qs) => {
        // toast.info(qs.correctAnswer, { autoClose: 1000 })
        Swal.fire("Correct Answer", qs.correctAnswer)
    }

    const handleQuestionAnswer = (ans) => {
        if (ans === correctAnswer) {
            setRightAns(rightAns + 1)
            toast.success("Right Answer", { autoClose: 500 })

        } else {
            setWrongAns(rightAns + 1)
            toast.error("Wrong Answer", { autoClose: 500 })
        }
    }

    return (

        <Card>
            <div className='flex flex-row justify-between items-center p-5 gap-4'>
                <h5 className="text-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Quiz: {index + 1} {question}
                </h5>
                <button onClick={() => handleShowAns(qs)}>
                    <EyeIcon className="h-6 w-6 text-blue-500" />
                </button>
            </div>
            <div className='grid grid-cols-2 gap-4 shadow-lg p-5'>
                {
                    options.map((option, index) => <AnswerOptions key={index} option={option} qs={qs} handleQuestionAnswer={handleQuestionAnswer}></AnswerOptions>)
                }

            </div>
        </Card>

    );
};

export default QuizDetails;