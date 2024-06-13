import React from "react";
import { FaAward } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

export default function Box() {
  return (
    <div>
      {/* Box */}
      <div className="w-[100%] bg-[#b98d76] h-[180px] rounded-xl flex gap-3 px-4">
        {/* 1 */}
        <div className="flex gap-3 text-white items-center  py-4   ">
          <FaAward className="text-6xl" />

          <div className="flex flex-col  items-start justify-center  pl-1">
            <div className="text-4xl relative font-semibold mt-3">
              {" "}
              12
              <span className="absolute -top-2 ml-1 text-3xl ">TH</span>
            </div>

            <p className=" text-2xl pb-0 mb-0 ">Years </p>
            <p className="  text-2xl pb-0 ">Experience</p>
          </div>
          <div className="border-r-[3px] h-[100%] border-white "></div>
        </div>
        {/* 2 */}
        <div className="flex gap-3 text-white items-center  py-4    ">
          <FaUserGroup className="text-6xl" />

          <div className="flex flex-col  items-staFaUserGroupt justify-center  pl-1">
            <div className="text-4xl relative font-semibold mt-3">
              {" "}
              800
              <span className="absolute -top-5 ml-1 text-5xl ">+</span>
            </div>

            <p className=" text-2xl pb-0 mb-0 ">Happy </p>
            <p className="  text-2xl pb-0 ">Client</p>
          </div>
          <div className="border-r-[3px] h-[100%] border-white ml-6 "></div>
        </div>
        {/* 3 */}
        <div className="flex gap-3 text-white items-center  py-4    ">
          <FaAward className="text-6xl" />

          <div className="flex flex-col  items-staFaUserGroupt justify-center  pl-1">
            <div className="text-4xl relative font-semibold mt-3">
              {" "}
              100
              <span className="absolute -top-5 ml-1 text-5xl ">+</span>
            </div>

            <p className=" text-2xl pb-0 mb-0 ">Phsycologist </p>
          </div>
        </div>
      </div>
    </div>
  );
}
