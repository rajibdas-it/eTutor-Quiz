import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Quizs = ({ quiz }) => {
  const { id, logo, name, total } = quiz
  return (
    <div className="max-w-sm mt-20">
      <Card
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        imgSrc={logo}
      >
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="mt-2.5 mb-5 flex items-center">
          <h1>No of Quiz:</h1>
          <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            {total}
          </span>
        </div>
        <Link to={`/quiz/${id}`}>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
          >
            Take Challenges
          </button>
        </Link>
      </Card>
    </div>
  );
};

export default Quizs;
