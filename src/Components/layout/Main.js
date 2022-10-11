import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


export const QuizContext = createContext()

const Main = () => {
  const quizData = useLoaderData()
  const quizItems = quizData.data
  // console.log(quizItems);
  return (
    <div>
      <QuizContext.Provider value={quizItems}>
        <Header />
        <Outlet />
        <Footer />
      </QuizContext.Provider>
    </div>
  );
};

export default Main;
