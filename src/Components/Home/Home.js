import React, { useContext } from "react";
import Lottie from "lottie-react";
import banner from "../../Assets/banner.json";
import { QuizContext } from "../layout/Main";
import Quizs from "../Quizs/Quizs";

const Home = () => {
  const quizs = useContext(QuizContext);
  return (
    <div
      className="mt-6 w-[80%] mx-auto"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      {/* banner section */}
      <section>
        <div className="bg-teal-100 w-full mx-auto flex flex-col md:flex-row lg:flex-row justify-center items-center rounded-md">
          <div
            className="w-[40%] m-3"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h1 className="text-3xl font-bold text-blue-500 italic text-center">
              EDUCATION SOLUTIONS
            </h1>
            <p className="text-gray-500 italic ml-8 text-center">
              Do different today and every day.
            </p>
          </div>
          <div
            className="w-[60%] m-3 sm:text-center"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <Lottie animationData={banner} loop={true} />
          </div>
        </div>
      </section>

      {/* cart section */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {quizs.map((quiz) => (
            <Quizs key={quiz.id} quiz={quiz}></Quizs>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
