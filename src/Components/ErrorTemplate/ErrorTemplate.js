import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../Assets/error.gif";

const ErrorTemplate = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className=" w-[70%] mx-auto">
      <div className="w-[60%] mx-auto mt-5">
        <img src={errorImg} alt="" />
      </div>
      <div>
        {error && (
          <div>
            <h1 className="text-center text-5xl font-bold italic mb-5">
              {error.status}
            </h1>
            <p className="text-center text-lg font-bold italic">
              {error.statusText || error.message}
            </p>
          </div>
        )}
      </div>

      <div className="text-center mt-5">
        <Link to="/">
          <button className="p-3 bg-blue-400 rounded-md text-white font-bold">
            Back To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorTemplate;
