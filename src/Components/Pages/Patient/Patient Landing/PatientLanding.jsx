import React from "react";
import image1 from "../../../../assets/images/16.jpg";
import Box from "../../../Box/Box";
export default function PatientLanding() {
  return (
    <div className="px-4 mx-auto mb-28">
      <section id="" className="my-5 mx-4">
        {/* WHo We Are? */}
        <div
          data-aos="fade-up"
          data-offset={100}
          className=" grid grid-cols-1 lg:grid-cols-2 gap-5 items-start"
        >
          {/* Text */}
          <div className="  mt-3 mb-7">
            {/* Title */}
            <h1 className="font-headingFont font-bold text-6xl mb-10 ">
              Key Facts
            </h1>

            {/* List */}
            <div className="flex flex-col justify-start items-start gap-4  ">
              {/* 1 */}
              <div className="flex gap-4 items-center justify-between">
                <div className="bg-nav  font-semibold px-3 w-12 h-12 rounded-full  flex justify-center text-center items-center ">
                  <span className="  text-white text-xl  ">1</span>
                </div>
                {/* text */}
                <h4 className="font-headingFont mb-0   text-paragraph">
                  Depression is a common mental disorder.
                </h4>
              </div>

              {/* 2 */}
              <div className="flex gap-4 items-center">
                <div className="bg-nav  font-semibold px-3 w-12 h-12 rounded-full  flex justify-center text-center items-center ">
                  <span className="  text-white text-xl  ">2</span>
                </div>
                {/* text */}
                <h4 className="font-headingFont mb-0 text-paragraph">
                  Globally, an estimated 5% of adults suffer from depression.
                </h4>
              </div>

              {/* 3 */}
              <div className="flex gap-4 items-center">
                <div className="bg-nav  font-semibold px-3 w-12 h-12 rounded-full  flex justify-center text-center items-center ">
                  <span className="  text-white text-xl  ">3</span>
                </div>
                {/* text */}
                <h4 className="font-headingFont mb-0 text-paragraph">
                  More women are affected by depression than men.
                </h4>
              </div>
              {/* 4*/}
              <div className="flex gap-4 items-center">
                <div className="bg-nav  font-semibold px-3 w-12 h-12 rounded-full  flex justify-center text-center items-center ">
                  <span className="  text-white text-xl  ">4</span>
                </div>
                {/* text */}
                <h4 className="font-headingFont mb-0 text-paragraph">
                  Depression can lead to suicide.
                </h4>
              </div>
              {/* 5*/}
              <div className="flex gap-4 items-center">
                <div className="bg-nav  font-semibold px-3 w-12 h-12 rounded-full  flex justify-center text-center items-center ">
                  <span className=" text-white text-xl "> 5 </span>
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
