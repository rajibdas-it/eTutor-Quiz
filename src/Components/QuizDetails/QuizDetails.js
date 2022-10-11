import { Card } from 'flowbite-react';
import React from 'react';

const QuizDetails = ({ qs }) => {
    const { id, question, correctAnswer, options } = qs;
    return (
        <div className="md:w-full">
            <Card>
                <div className="mb-4 flex items-center justify-between">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        {question}
                    </h5>
                    <a
                        href="/"
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                        View Answer
                    </a>
                </div>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">

                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                        Neil Sims
                                    </p>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </Card>
        </div>
    );
};

export default QuizDetails;