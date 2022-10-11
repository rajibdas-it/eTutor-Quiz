import { Card } from "flowbite-react";
import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import banner from '../../Assets/banner.json'

const Home = () => {
  return (
    <div className="mt-6 w-[80%] mx-auto">
      {/* banner section */}
      <section>
        <div className="w-[80%] mx-auto flex flex-col lg:flex-row border border-red-300 justify-center items-center">
          <div className="w-[40%] border border-black m-3">
            <h1 className="text-3xl font-bold text-blue-500 italic"
            >EDUCATION SOLUTIONS</h1>
            <p className="text-gray-500 italic">Do different today and every day.</p>
          </div>
          <div className="w-[60%] border border-green-400 m-3 sm:text-center">
            <Lottie animationData={banner} loop={true} />
          </div>
        </div>
      </section>

      {/* cart section */}
      <section></section>

    </div>
  );
};

export default Home;
