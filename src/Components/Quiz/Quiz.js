import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { RightAnswerContext, WrongAnswerContext } from "../layout/Main";
import QuizDetails from "../QuizDetails/QuizDetails";

const Quiz = () => {
  const { data } = useLoaderData();
  const { name, questions } = data;
  // console.log(questions);

  let [rightAns, setRightAns] = useContext(RightAnswerContext);
  let [wrongAns, setWrongAns] = useContext(WrongAnswerContext);

  return (
    <div>
      {/* quiz title sections */}
      <section>
        <h1 className="mt-10 text-center text-4xl font-bold">
          Quiz of <span className="italic text-5xl text-blue-400">{name}</span>
        </h1>
      </section>

      {/* Quiz Details  */}
      <section className="mt-10 text-center">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* border border-red-400 */}
          <div className=" md:col-span-2 shadow-lg">
            {questions.map((qs, index) => (
              <QuizDetails key={qs.id} index={index} qs={qs}></QuizDetails>
            ))}
          </div>
          {/* border border-lime-400 */}
          <div className="text-start shadow-lg">
            <div className="lg:sticky lg:top-0">
              <h1 className="mt-5 text-center text-3xl font-bold text-blue-400 italic mb-4">
                Real Time Result
              </h1>
              <hr className="bg-black w-[85%] mx-auto mb-4" />
            </div>
            <div className="ml-8 mb-3 lg:sticky lg:top-16 text-center lg:text-start">
              <p className="text-4xl font-bold mb-10">
                Right Ans:{" "}
                <span className="text-lime-500 text-5xl">{rightAns}</span>
              </p>
              <p className="text-4xl font-bold">
                Wrong Ans:{" "}
                <span className="text-red-500 text-5xl">{wrongAns}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
