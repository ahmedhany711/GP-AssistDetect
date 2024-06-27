import React from "react";

export default function Question(props)
{
  return (
    <div className=" group  ">
      <div className=" border-2 border-nav rounded-lg px-2 py-3 h-[130px] relative  max-w-2xl lg:w-[450px] xl:w-[500px] group-hover:bg-gray-100" >
        <div className="flex ml-4 gap-2 items-center absolute transform top-1/2 -translate-y-1/2">
          <span
            onClick={props.toggleAccordion}
            className="text-3xl text-nav border border-paragraph hover:border-nav duration-300 w-10 h-10 text-center rounded-full cursor-pointer group-hover:border-nav  "
          >
            {props.isOpen ? "-" : "+"}
          </span>
          <div
            onClick={props.toggleAccordion}
            className="  text-black font-headingFont text-xl xl:text-2xl p-2 cursor-pointer group w-full  "
          >
            {props.question}
          </div>
        </div>
      </div>

      {props.isOpen && (
        <div className="answer col-12 px-4 text-paragraph pt-7 text-lg">
          {props.answer}
        </div>
      )}
    </div>
  );
}
