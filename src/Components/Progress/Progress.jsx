import React from "react";
import "./Progress.scss"
import ProgressBar from "@ramonak/react-progress-bar";

export default function Progress(props) {


  return (
    <div className="progress_content col-12">
      < div className="flex flex-col  justify-start   items-start col-9" >
        {/* Percentage on top */}
        <div className="flex justify-between items-center" >
          <p className="my-2 font-headingFont text-xl font-semibold">{props.name}</p>
        </div>
        <div id="progress" className="col-12">
          <ProgressBar
            animateOnRender="true"
            completed={props.Progress_precentage}
            bgColor="#a55850" className="mx-auto" height="16px" width="100%"
            barContainerClassName={`bg-progressBar w-[100%] rounded-xl`} />
        </div>
      </div >
    </div >
  );
}
