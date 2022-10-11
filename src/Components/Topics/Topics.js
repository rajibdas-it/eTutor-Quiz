import React, { useContext } from "react";
import { QuizContext } from "../layout/Main";
import Quizs from "../Quizs/Quizs";

const Topics = () => {
  const quizs = useContext(QuizContext);
  return (
    <div className="mt-6 w-[80%] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {quizs.map((quiz) => (
          <Quizs key={quiz.id} quiz={quiz}></Quizs>
        ))}
      </div>
    </div>
  );
};

export default Topics;
