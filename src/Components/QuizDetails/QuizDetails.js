import { Card } from "flowbite-react";
import React, { useContext, useState } from "react";
import AnswerOptions from "../AnswerOptions/AnswerOptions";
import { EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { RightAnswerContext, WrongAnswerContext } from "../layout/Main";

const QuizDetails = ({ qs, index }) => {
  // console.log(qs);
  // let [rightAns, setRightAns] = useState(0)
  // let [wrongAns, setWrongAns] = useState(0)
  let [rightAns, setRightAns] = useContext(RightAnswerContext);
  let [wrongAns, setWrongAns] = useContext(WrongAnswerContext);

  const { id, question, correctAnswer, options } = qs;

  const handleShowAns = (qs) => {
    // toast.info(qs.correctAnswer, { autoClose: 1000 })
    Swal.fire("Correct Answer", qs.correctAnswer);
  };

  const handleQuestionAnswer = (ans) => {
    if (ans === correctAnswer) {
      rightAns = rightAns + 1;
      setRightAns(rightAns);
      toast.success("Right Answer", { autoClose: 500 });
    } else {
      wrongAns = wrongAns + 1;
      setWrongAns(wrongAns);
      toast.error("Wrong Answer", { autoClose: 500 });
    }
  };
  console.log(rightAns);
  console.log(wrongAns);

  return (
    <div className="mb-5">
      <Card>
        <div className="flex flex-row justify-between items-center p-5 gap-4">
          <h5 className="text-start text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Quiz-{index + 1}. {question.replace(/(<([^>]+)>)/gi, "")}
          </h5>
          <button onClick={() => handleShowAns(qs)}>
            <EyeIcon className="h-6 w-6 text-blue-500" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-lg p-5">
          {options.map((option, index) => (
            <AnswerOptions
              key={index}
              option={option}
              qs={qs}
              handleQuestionAnswer={handleQuestionAnswer}
            ></AnswerOptions>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default QuizDetails;
