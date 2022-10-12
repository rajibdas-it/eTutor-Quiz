import React, { useContext } from "react";
import { QuizContext } from "../layout/Main";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Line,
  LineChart,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const quizs = useContext(QuizContext);

  return (
    <div className="w-[90%] mx-auto m-5 mt-10">
      <h1 className="text-center text-3xl font-bold mb-3 text-blue-400 ">
        Quiz Information Using Chart
      </h1>
      <hr className="w-[70%] mx-auto mb-8" />
      <div className="grid grid-cols-1 justify-center gap-4">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="m-5">
            <ResponsiveContainer width={320} height={400}>
              <LineChart
                width={320}
                height={400}
                data={quizs}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h1 className="text-center font-bold text-blue-400">
              Line Chart of Quiz Details
            </h1>
            <p className="text-sm text-gray-400 italic text-center">
              Topic Name and Total Quiz
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="text-center m-5">
            <ResponsiveContainer width={320} height={400}>
              <BarChart width={320} height={400} data={quizs}>
                <Bar dataKey="total" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h1 className="text-center font-bold text-blue-400">
              Bar Chart of Quiz Details
            </h1>
            <p className="text-sm text-gray-400 italic text-center">
              Topic Name and Total Quiz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
