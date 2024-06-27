import React from "react";
import { FaAward } from "react-icons/fa6";
import image from "../../assets/images/20.jpg";

const HowItWorks = () => {
  return (
    <div>
      <section className="my-10 py-10 px-4">
        {/* Body */}
        <div id="" className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
          {/* col 1 text */}
          <div
            data-aos="fade-up"
            data-aos-offset={300}
            className="px-6 mx-auto mb-12 lg:order-2 order-1"
          >
            {/* Title */}
            <div className="space-y-6">
              <span className="col-12  text-[17px] font-semibold ">
                HOW IT WORKS
              </span>
{/* Title $ */}
              <h3 className="font-headingFont text-4xl font-bold lg:text-6xl lg:font-medium">
                We Have Solutions For Your Problem
              </h3>
              {/* Description */}
              <p className="text-paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti illum dolore quas consequuntur eveniet .
              </p>
              <div></div>
            </div>

            {/* List */}
            <div className="flex flex-col justify-center gap-3 ">
              {/* 1 */}
              <div className="flex gap-3 ">
                <div className="bg-nav  font-semibold w-14 h-14 rounded-full  flex justify-center text-center items-center ">
                  <span className="  text-white text-3xl  ">1</span>
                </div>
                {/* text */}
                <div className="flex flex-col -gap-4 justify-center ">
                  <h3 className="font-headingFont mb-0 ">
                    Make An Appointment
                  </h3>
                  <p className="text-paragraph text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex gap-3 ">
                <div className="bg-nav  font-semibold w-14 h-14 rounded-full  flex justify-center text-center items-center ">
                  <span className="  text-white text-3xl  ">2</span>
                </div>
                {/* text */}
                <div className="flex flex-col -gap-4 justify-center ">
                  <h3 className="font-headingFont mb-0">Consultation</h3>
                  <p className="text-paragraph text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex gap-3 ">
                <div className="bg-nav  font-semibold w-14 h-14 rounded-full  flex justify-center text-center items-center ">
                  <span className="  text-white text-3xl  ">3</span>
                </div>
                {/* text */}
                <div className="flex flex-col -gap-4 justify-center ">
                  <h3 className="font-headingFont mb-0">Counseling</h3>
                  <p className="text-paragraph  text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>

              {/* 4*/}
              <div className="flex gap-3 ">
                <div className="bg-nav  font-semibold w-14 h-14 rounded-full  flex justify-center text-center items-center ">
                  <span className="  text-white text-3xl  ">4</span>
                </div>
                {/* text */}
                <div className="flex flex-col -gap-4 justify-center ">
                  <h3 className="font-headingFont mb-0">Result</h3>
                  <p className="text-paragraph text-sm ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* col 2  img*/}
          <div data-aos="zoom-in" className="mb-5 pe-5 pr-5 pb-5 relative lg:order-1 order-2">
            {/* back box */}
            <div className="z-[-2] bg-[#b98d76] w-[80%] h-[100px] inline absolute -top-10 -left-1 rounded-xl"></div>

            {/* image */}
            <img src={image} alt='' className=" rounded-xl relative" />

            {/* box */}
            <div className="bg-[#b98d76] w-[220px] h-[180px] absolute right-0 bottom-4 border-8 rounded-3xl border-white">
              {/* Details */}
              <div className="flex flex-col gap-3 items-center justify-center text-white pt-4 pb-2">
                <FaAward className="text-4xl" />

                <div className="text-3xl relative -ml-5 font-semibold">
                  {" "}
                  12
                  <span className="absolute -top-2 ml-1 text-2xl ">TH</span>
                </div>

                <p className=" p-0 -mt-2">Years Experience</p>
              </div>
            </div>
          </div>

        
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
