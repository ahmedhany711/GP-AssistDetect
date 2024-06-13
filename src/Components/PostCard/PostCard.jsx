import React from "react";
<<<<<<< HEAD
=======
import image12 from "../../assets/images/12.png";
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
import "./PostCard.scss";

export default function PostCard(props) {
  return (
    <div className=" h-fit flex  flex-wrap items-center justify-start bg-white rounded-2xl px-10 py-7  w-[800px]">
      <div className=" flex flex-row items-center justify-start gap-3">
        <img
          src={props.src}
<<<<<<< HEAD
          alt="no imge"
          className="h-20 w-20 rounded-full "
=======
          alt="no image"
          className="h-20 w-20 rounded-full rounded-full"
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59
        />

        <div className="flex flex-col justify-center gap-1">
          <h3 className="m-0 p-0 font-headingFont">{props.publisherName}</h3>
          <p className="text-sm m-0 p-0 text-paragraph">
            {formatDate(props.date)}
          </p>
        </div>
      </div>
      <div className=" m-2 mt-4 col-12 pl-8">
        <p>{props.content}</p>
      </div>
    </div>
  );
}

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };

  return new Date(date).toLocaleDateString("en-US", options);
};
