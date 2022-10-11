import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


export const QuizContext = createContext()
export const RightAnswerContext = createContext()
export const WrongAnswerContext = createContext()

const Main = () => {
  const quizData = useLoaderData()
  const quizItems = quizData.data
  // console.log(quizItems);
  const [rightAns, setRightAns] = useState(0)
  const [wrongAns, setWrongAns] = useState(0)
  return (
    <div>
      <QuizContext.Provider value={quizItems}>
        <RightAnswerContext.Provider value={[rightAns, setRightAns]}>
          <WrongAnswerContext.Provider value={[wrongAns, setWrongAns]}>
            <Header />
            <Outlet />
            <Footer />
          </WrongAnswerContext.Provider>
        </RightAnswerContext.Provider>
      </QuizContext.Provider>
    </div>
  );
};

export default Main;
