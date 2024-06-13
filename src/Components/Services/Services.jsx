import React from "react";
import {
  FaArrowRight,
  FaBrain,
  FaHandshakeSimple,
  FaLightbulb,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <section id="" className="col-12 mt-5 mb-5 py-6">
        <div data-aos="fade-up" className="  text-center">
          <span className="col-12 mb-2">OUR SERVICES</span>
          <h1 className="col-12 font-headingFont text-6xl mt-2">
            Your Mental Health Is Our Priority
          </h1>
        </div>

        {/* Cards */}
        <div className="container px-0">
          <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-3   overflow-hidden gap-20 sm:gap-8 place-items-center items-center z-100  mt-5  ">
            {/* 1st card */}
            <div
              data-aos="zoom-in"
              className="relative group   bg-white hover:bg-navbarColor hover:text-white  rounded-2xl shadow-xl py-4 px-8 h-[380px]  duration-200  my-4 hover:-translate-y-5 "
            >
              {/* flex-col */}
              <div className="flex flex-col gap-1 justify-center items-center">
                {/* Icon Section */}
                <div className="h-[72px] w-[72px] rounded-full bg-navbarColor group-hover:bg-white  flex justify-center items-center duration-300 transition-all mb-4">
                  <FaBrain className="text-4xl text-white group-hover:text-navbarColor duration-300 transition-all" />
                </div>

                {/* details Section */}
                {/* Title */}
                <div className="  flex-col justify-center pt-2 text-center duration-300 transition-all">
                  <h1 className="font-headingFont font-bold text-2xl">
                    Depression detection
                  </h1>
                </div>
                {/* Description */}
                <div className="flex-col justify-center pt-2 text-center duration-300 transition-all">
                  <p className="text-sm  text-gray-500 group-hover:text-white dark:text-white/60  duration-300 ">
                    Detect and address depression early with our webpage's tools
                    and resources, promoting mental health awareness and
                    proactive well-being.
                  </p>
                </div>
              </div>
              {/* Read More */}
              <div className="flex justify-start items-center mt-12 p-0 group-hover:text-white">
                <Link
                  to="/"
                  className="text-nav flex gap-2 items-center no-underline m-0 p-0 justify-start"
                >
                  <p className="m-0 p-0 text-xl group-hover:text-white ">
                    Read More
                  </p>

                  <FaArrowRight className="text-xl hover:translate-x-2 group-hover:text-white" />
                </Link>
              </div>
            </div>
            {/* 2nd card */}
            <div
              data-aos="zoom-in"
              className="relative group   bg-white hover:bg-navbarColor hover:text-white  rounded-2xl shadow-xl  pt-4 px-8 h-[380px]  duration-300  my-4 hover:-translate-y-5 "
            >
              {/* flex-col */}
              <div className="flex flex-col gap-1 justify-center items-center">
                {/* Icon Section */}
                <div className="h-[72px] w-[72px] rounded-full bg-navbarColor group-hover:bg-white  flex justify-center items-center duration-300 transition-all mb-4">
                  <FaLightbulb className="text-4xl text-white group-hover:text-navbarColor duration-300 transition-all" />
                </div>

                {/* details Section */}
                <div className="  flex-col justify-center pt-2 text-center duration-300 transition-all">
                  <h1 className="font-headingFont font-bold text-2xl">
                    Suggesting associations to help
                  </h1>
                </div>
                <div className="flex-col justify-center pt-2 text-center duration-300 transition-all">
                  <p className="text-sm  text-gray-500 group-hover:text-white dark:text-white/60  duration-300 ">
                    Discover depression support on our webpage through
                    resources, community connections, and assistance for a
                    journey towards well-being.
                  </p>
                </div>
              </div>
              {/* Read More */}
              <div className="flex justify-start items-center mt-3 p-0 group-hover:text-white">
                <Link
                  to="/"
                  className="text-nav flex gap-2 items-center no-underline m-0 p-0 justify-start"
                >
                  <p className="m-0 p-0 text-xl group-hover:text-white ">
                    Read More
                  </p>

                  <FaArrowRight className="text-xl hover:translate-x-2 group-hover:text-white" />
                </Link>
              </div>
            </div>

            {/* 3rd card */}
            <div
              data-aos="zoom-in"
              className="relative group bg-white hover:bg-navbarColor hover:text-white  rounded-2xl shadow-xl  py-4 px-8 h-[380px] duration-300  my-4 hover:-translate-y-5 "
            >
              {/* flex-col */}
              <div className="flex flex-col gap-1 justify-center items-center">
                {/* Icon Section */}
                <div className="h-[72px] w-[72px] rounded-full bg-navbarColor group-hover:bg-white  flex justify-center items-center duration-300 transition-all mb-4">
                  <FaHandshakeSimple className="text-4xl text-white group-hover:text-navbarColor duration-300 transition-all" />
                </div>

                {/* details Section */}
                <div className="  flex-col justify-center pt-2 text-center duration-300 transition-all">
                  <h1 className="font-headingFont font-bold text-2xl">
                    Meet with Doctor
                  </h1>
                </div>
                <div className="flex-col justify-center pt-2 text-center duration-300 transition-all">
                  <p className="text-sm  text-gray-500 group-hover:text-white dark:text-white/60  duration-300 ">
                    Find depression support on our webpage: informative content,
                    community connection, and confidential Zoom meetings with
                    professionals.
                  </p>
                </div>
              </div>

              {/* Read More */}
              <div className="flex justify-start items-center mt-12 p-0 group-hover:text-white">
                <Link
                  to="/"
                  className="text-nav flex gap-2 items-center no-underline m-0 p-0 justify-start"
                >
                  <p className="m-0 p-0 text-xl group-hover:text-white ">
                    Read More
                  </p>

                  <FaArrowRight className="text-xl hover:translate-x-2 group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
          {/* Button */}
          <div
            data-aos="fade-up"
            className=" mx-auto mt-5 flex justify-center  "
          >
            <Link
              to={"/services"}
              className=" no-underline border-2 border-nav px-5 py-3 rounded-lg text-nav text-xl font-headingFont  duration-300 hover:bg-nav hover:text-white"
            >
              {" "}
              See All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
