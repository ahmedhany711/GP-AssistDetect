import React from "react";

export default function Question(props) {
  return (
    <div className="question-answer group ">
      <div className="question-icon  flex justify-between items-center border-3 border-nav rounded-lg p-2 h-[100px]">
        <span
          onClick={props.toggleAccordion}
          className="text-3xl text-nav border border-paragraph hover:border-nav duration-300 w-10 h-10 text-center rounded-full cursor-pointer group-hover:border-nav"
        >
          {props.isOpen ? "-" : "+"}
        </span>
        <div
          onClick={props.toggleAccordion}
          className="question col-11 text-black font-headingFont text-2xl p-2 cursor-pointer group"
        >
          {props.question}
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
