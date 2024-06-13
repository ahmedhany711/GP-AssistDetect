import React from "react";
import image1 from "../../../../assets/images/16.jpg";
<<<<<<< HEAD
=======
import Services from "../../../Services/Services";
import { FaAward } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
import Box from "../../../Box/Box";
export default function PatientLanding() {
  return (
    <div className="px-6 mx-auto mb-28">
      <section id="" className="my-5 mx-5">
        {/* WHo We Are? */}
        <div
          data-aos="fade-up"
          data-offset={100}
          className=" grid grid-cols-2  items-start"
        >
          {/* Text */}
          <div className="  mt-3">
            {/* Title */}
            <h1 className="font-headingFont font-bold text-6xl mb-10 ">
              Key Facts
            </h1>

            {/* List */}
            <div className="flex flex-col justify-center gap-4  ">
              {/* 1 */}
              <div className="flex gap-8 items-center">
                <div className="bg-nav  font-semibold w-14 h-14 rounded-full  flex justify-center text-center items-center ">
                  <span className="  text-white text-2xl  ">1</span>
                </div>
                {/* text */}
                <h4 className="font-headingFont mb-0  text-paragraph">
                  Depression is a common mental disorder.
                </h4>
              </div>

              {/* 2 */}
              <div className="flex gap-8 items-center">
                <div className="bg-nav  font-semibold w-14 h-14 rounded-full  flex justify-center text-center items-center ">
                  <span className="  text-white text-2xl  ">2</span>
                </div>
                {/* text */}
                <h4 className="font-headingFont mb-0 text-paragraph">
                  Globally, an estimated 5% of adults suffer from depression.
                </h4>
              </div>

              {/* 3 */}
              <div className="flex gap-8 items-center">
                <div className="bg-nav  font-semibold w-14 h-14 rounded-full  flex justify-center text-center items-center ">
                  <span className="  text-white text-2xl  ">3</span>
                </div>
                {/* text */}
                <h4 className="font-headingFont mb-0 text-paragraph">
                  More women are affected by depression than men.
                </h4>
              </div>
              {/* 4*/}
              <div className="flex gap-8 items-center">
                <div className="bg-nav  font-semibold w-14 h-14 rounded-full  flex justify-center text-center items-center ">
                  <span className="  text-white text-2xl  ">4</span>
                </div>
                {/* text */}
                <h4 className="font-headingFont mb-0 text-paragraph">
                  Depression can lead to suicide.
                </h4>
              </div>
              {/* 5*/}
              <div className="flex gap-8 items-center">
                <div className="bg-nav  font-semibold w-14 h-14 rounded-full  flex justify-center text-center items-center ">
                  <span className=" text-white text-2xl "> 5 </span>
                </div>
                {/* text */}
                <h4 className="font-headingFont mb-0  text-paragraph">
                  There is effective treatment for mild, moderate and severe
                  depression.
                </h4>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="flex flex-col gap-3 justify-center mt-4 items-end">
            <div>
              <img
                src={image1}
                alt=""
                className=" rounded-xl h-[360px] w-[650px]"
              />
            </div>
            {/* Box */}
            <Box />
          </div>
        </div>
      </section>
    </div>
  );
}
